import { resolveApiUrl } from '../lib/apiBase';

export async function apiFetch(endpoint, options = {}) {
  const url = resolveApiUrl(endpoint);
  const token = localStorage.getItem('token') || '';

  const headers = {
    'Content-Type': 'application/json',
    ...(options.headers || {}),
  };

  // adiciona Authorization apenas se houver token
  if (token) {
    headers.Authorization = token.startsWith('Bearer ')
      ? token
      : `Bearer ${token}`;
  }

  // se body for objeto, serializa (exceto FormData)
  if (options.body && typeof options.body === 'object' && !(options.body instanceof FormData)) {
    options = { ...options, body: JSON.stringify(options.body) };
  }

  const response = await fetch(url, {
    ...options,
    headers,
    // credentials: 'include', // habilite se o backend usar cookies/sessões
  });

  return response;
}
