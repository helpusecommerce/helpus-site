// src/lib/apiBase.js
// Helper compatível com Create React App (usa process.env.REACT_APP_...)
const DEFAULT_API_BASE = '/api';
const LOCAL_API_HOST = 'http://localhost:3001';

const appendApiSegment = (value) => {
  const normalized = value.replace(/\/+$/, ''); // remove barras finais
  return normalized.toLowerCase().endsWith('/api') ? normalized : `${normalized}/api`;
};

export const getApiBaseUrl = () => {
  const envUrl = process.env.REACT_APP_API_BASE_URL;
  if (envUrl && envUrl.trim()) {
    return appendApiSegment(envUrl.trim());
  }
  if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    return appendApiSegment(LOCAL_API_HOST);
  }
  return DEFAULT_API_BASE; // fallback para proxy/mesmo domínio
};

export const resolveApiUrl = (endpoint = '') => {
  const base = getApiBaseUrl().replace(/\/+$/, ''); // sem barra final

  if (!endpoint) return base;
  if (/^https?:\/\//i.test(endpoint)) return endpoint; // já é absoluto

  const path = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  return `${base}${path}`;
};
