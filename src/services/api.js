// src/services/api.js

// Em dev, use a API local; em produção use rota relativa '/api'
const isLocalhost = window.location.hostname === 'localhost';

// Você pode sobrescrever em dev com VITE_API_BASE=http://localhost:3001/api
const DEV_API_BASE = import.meta?.env?.VITE_API_BASE || 'http://localhost:3001/api';

// Produção: NADA de domínio! Usamos a mesma origem com prefixo /api
const PROD_API_BASE = '/api';

const API_BASE = isLocalhost ? DEV_API_BASE : PROD_API_BASE;

export async function apiFetch(endpoint, options = {}) {
  const token = localStorage.getItem('token');

  // Garante que a URL final fique correta independente de ter / no início
  const url = endpoint.startsWith('http')
    ? endpoint
    : `${API_BASE}${endpoint.startsWith('/') ? '' : '/'}${endpoint}`;

  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(options.headers || {}),
  };

  const response = await fetch(url, {
    ...options,
    headers,
    // se usar cookies/sessão no backend, descomente:
    // credentials: 'include',
  });

  return response;
}
