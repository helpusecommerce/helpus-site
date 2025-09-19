const DEFAULT_API_BASE = '/api';
const LOCAL_API_BASE = 'http://localhost:3001';

const trimTrailingSlash = (value) => value.replace(/\/+$/, '');

export const getApiBaseUrl = () => {
  const envUrl = process.env.REACT_APP_API_BASE_URL;
  if (envUrl && envUrl.trim()) {
    return trimTrailingSlash(envUrl.trim());
  }

  if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    return LOCAL_API_BASE;
  }

  return DEFAULT_API_BASE;
};

export const resolveApiUrl = (endpoint = '') => {
  if (!endpoint) {
    return getApiBaseUrl();
  }

  if (/^https?:\/\//i.test(endpoint)) {
    return endpoint;
  }

  const base = getApiBaseUrl();
  return ${base};
};
