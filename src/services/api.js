// src/services/api.js

// Detecta o ambiente corretamente (CRA ou Webpack)
const API_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001'
    : 'https://api.helpusa.com.br';

/**
 * Requisições padronizadas com token e JSON
 */
export async function apiFetch(endpoint, options = {}) {
  const token = localStorage.getItem('token');

  const defaultHeaders = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
  };

  return fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  });
}

export { API_URL };
