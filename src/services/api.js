const isLocalhost = window.location.hostname === 'localhost';

const API_URL = isLocalhost
  ? 'http://localhost:3001'
  : 'https://helpus-site-production.up.railway.app';

const API_PREFIX = '/api';

export async function apiFetch(endpoint, options = {}) {
  const token = localStorage.getItem('token');

  const headers = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
  };

  const response = await fetch(`${API_URL}${API_PREFIX}${endpoint}`, {
    ...options,
    headers: {
      ...headers,
      ...options.headers,
    },
  });

  return response;
}
