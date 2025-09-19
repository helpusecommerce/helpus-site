import { resolveApiUrl } from '../lib/apiBase';

export async function apiFetch(endpoint, options = {}) {
  const token = localStorage.getItem('token');
  const url = resolveApiUrl(endpoint);

  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: Bearer  } : {}),
    ...(options.headers || {}),
  };

  const response = await fetch(url, {
    ...options,
    headers,
    // credentials: 'include', // enable if the backend relies on cookies/sessions
  });

  return response;
}
