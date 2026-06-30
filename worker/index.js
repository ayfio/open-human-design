/**
 * Open Human Design — Cloudflare Worker entry.
 * 
 * Упрощённая маршрутизация:
 * - API_ROUTES → handleApiRequest()
 * - MCP → handleMcpRequest() (без OAuthProvider)
 * - Остальное → статика через env.ASSETS
 */

import { handleMcpRequest } from './mcp.js';
import { createAuth, getSession } from './auth.js';
import { handleSync } from './sync.js';
import { handleAuthorize, verifyInterstitial } from './oauth-ui.js';
import { handleOgImage, handleChartSvg, rewriteShareMeta } from './og.js';
import { handleSeoPage, handleSitemap, handleRobots } from './seo.js';

// 🔐 CORS конфигурация
const MCP_CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept, Authorization, Mcp-Session-Id, Mcp-Protocol-Version',
  'Access-Control-Expose-Headers': 'Mcp-Session-Id'
};

const API_ORIGINS = new Set([
  'http://localhost:5174',
  'http://localhost:8788',
  'https://ejo.neocities.org'
]);

function isAllowedOrigin(origin) {
  if (!origin) return false;
  if (API_ORIGINS.has(origin)) return true;
  // Опционально: разрешить *.neocities.org
  // return origin.endsWith('.neocities.org');
  return false;
}

function apiCors(request) {
  const origin = request.headers.get('Origin');
  if (!isAllowedOrigin(origin)) return {};
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Credentials': 'true',
    'Vary': 'Origin'
  };
}

function withHeaders(response, extra) {
  if (!Object.keys(extra).length) return response;
  const headers = new Headers(response.headers);
  for (const [k, v] of Object.entries(extra)) headers.set(k, v);
  return new Response(response.body, { status: response.status, headers });
}

// 🎯 Маршруты API (обрабатываются в Worker)
const API_ROUTES = [
  '/api/',
  '/auth/',
  '/oauth/',
  '/.well-known/',
  '/og/',
  '/chart.svg'
];

// ============================================================================
// 🛠 API Handler — центральная точка для всех API-запросов
// ============================================================================

async function handleApiRequest(request, env, ctx) {
  const url = new URL(request.url);
  const { pathname } = url;
  const cors = apiCors(request);

  // Preflight CORS
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: cors });
  }

  // 🔐 Auth endpoints (better-auth)
  if (pathname.startsWith('/api/auth/')) {
    const auth = createAuth(env, url.origin);
    return withHeaders(await auth.handler(request), cors);
  }

  // 🔐 OAuth endpoints (workers-oauth-provider)
  if (pathname === '/authorize') {
    return handleAuthorize(request, env);
  }
  if (pathname === '/auth/verify') {
    return verifyInterstitial(request);
  }
  if (pathname.startsWith('/oauth/') || pathname.startsWith('/.well-known/')) {
    // Делегируем OAuth-провайдеру при необходимости
    // Или реализуем свою логику здесь
    return withHeaders(Response.json({ error: 'OAuth not configured' }, { status: 501 }), cors);
  }

  // 🔄 Sync endpoint
  if (pathname === '/api/sync' && request.method === 'POST') {
    const session = await getSession(env, request);
    if (!session) {
      return withHeaders(Response.json({ error: 'unauthorized' }, { status: 401 }), cors);
    }
    return withHeaders(await handleSync(env, session, request), cors);
  }

  // 🖼️ OG images & chart SVG
  if (pathname === '/og/card.png') {
    return handleOgImage(request);
  }
  if (pathname === '/chart.svg') {
    return handleChartSvg(request);
  }

  // ❌ Unknown API endpoint
  return withHeaders(Response.json({ error: 'not found' }, { status: 404 }), cors);
}

// ============================================================================
// 🤖 MCP Handler — Model Context Protocol (без OAuthProvider)
// ============================================================================

async function handleMcpRequestStandalone(request, env, ctx) {
  // Preflight CORS для MCP
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: MCP_CORS });
  }
  
  // Обработка MCP запроса с добавлением CORS
  return withHeaders(
    await handleMcpRequest(request, env, ctx?.props),
    MCP_CORS
  );
}

// ============================================================================
// 🌐 Default Handler — статика + SEO
// ============================================================================

async function handleStaticRequest(request, env) {
  const url = new URL(request.url);
  const { pathname } = url;

  // SEO: server-rendered reference pages
  if (pathname === '/sitemap.xml') return handleSitemap();
  if (pathname === '/robots.txt') return handleRobots();
  const seoPage = await handleSeoPage(request);
  if (seoPage) return seoPage;

  // Static assets (SPA) — wrangler serves env.ASSETS with SPA fallback
  const assetResponse = await env.ASSETS.fetch(request);
  
  // Share links (?d=...) get their OpenGraph tags rewritten
  if (url.searchParams.has('d') && 
      (assetResponse.headers.get('content-type') || '').includes('text/html')) {
    return rewriteShareMeta(assetResponse, url);
  }
  
  return assetResponse;
}

// ============================================================================
// 🚀 Main Entry Point
// ============================================================================

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // 🎯 MCP endpoint — отдельная обработка
    if (pathname === '/mcp') {
      return handleMcpRequestStandalone(request, env, ctx);
    }

    // 🎯 API routes — делегируем handleApiRequest
    if (API_ROUTES.some(route => pathname === route || pathname.startsWith(route))) {
      return handleApiRequest(request, env, ctx);
    }

    // 🎯 Static assets + SEO — делегируем handleStaticRequest
    return handleStaticRequest(request, env);
  }
};
