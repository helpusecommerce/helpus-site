const isLocalhost = window.location.hostname === 'localhost';

const API_URL = isLocalhost
  ? 'http://localhost:3001'
  : 'https://helpus-site-production.up.railway.app';

/**
 * Função auxiliar para fazer requisições com headers padrão (inclui token automaticamente)
 */
export async function apiFetch(endpoint, options = {}) {
  const token = localStorage.getItem('token');

  const headers = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
  };

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      ...headers,
      ...options.headers,
    },
  });

  return response;
}

export { API_URL };
