
export const VISA_HOST = 'visa.helpusbr.com';

export function getHostname() {
  if (typeof window === 'undefined') return '';
  return String(window.location.hostname || '').toLowerCase();
}

export function isVisaSite() {
  const mode = process.env.REACT_APP_SITE_MODE;
  if (mode === 'visa') return true;

  const hostname = getHostname();
  return hostname === VISA_HOST;
}

export function getVisaUrl(path = '/') {
  const normalizedPath = String(path || '/').startsWith('/')
    ? String(path || '/')
    : `/${path}`;

  return `https://${VISA_HOST}${normalizedPath}`;
}
