import pool from '../config/db.js';

const SUPPORTED_LOCALES = new Set(['en', 'pt', 'es']);
const DEFAULT_NAMESPACE = 'translation';

function setNestedValue(target, dottedKey, value) {
  const parts = String(dottedKey || '').split('.').filter(Boolean);
  if (!parts.length) return;

  let current = target;
  for (let i = 0; i < parts.length - 1; i += 1) {
    const part = parts[i];
    if (!current[part] || typeof current[part] !== 'object' || Array.isArray(current[part])) {
      current[part] = {};
    }
    current = current[part];
  }

  current[parts[parts.length - 1]] = value;
}

export async function getI18nByLocale(req, res) {
  const locale = String(req.params.locale || '').trim().toLowerCase();
  const namespace = String(req.query.namespace || DEFAULT_NAMESPACE).trim() || DEFAULT_NAMESPACE;

  if (!SUPPORTED_LOCALES.has(locale)) {
    return res.status(400).json({
      ok: false,
      error: 'unsupported_locale',
      supportedLocales: Array.from(SUPPORTED_LOCALES),
    });
  }

  try {
    const result = await pool.query(
      `
        SELECT entry_key, value
        FROM public.site_i18n_entries
        WHERE namespace = $1
          AND locale = $2
          AND status = 'published'
        ORDER BY entry_key ASC
      `,
      [namespace, locale]
    );

    const resources = {};
    for (const row of result.rows) {
      setNestedValue(resources, row.entry_key, row.value);
    }

    return res.json({
      ok: true,
      locale,
      namespace,
      count: result.rowCount,
      resources,
    });
  } catch (error) {
    console.error('i18n lookup failed:', error);

    if (error?.code === '42P01') {
      return res.status(503).json({
        ok: false,
        error: 'i18n_table_not_found',
      });
    }

    return res.status(500).json({
      ok: false,
      error: 'i18n_lookup_failed',
    });
  }
}
