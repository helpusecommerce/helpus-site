import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const LOCALES = ['en', 'pt', 'es'];
const NAMESPACE = 'translation';

const inputFiles = Object.fromEntries(
  LOCALES.map((locale) => [
    locale,
    path.join(ROOT, 'public', 'locales', locale, 'translation.json'),
  ])
);

const outputFile = path.join(ROOT, 'db', 'seeds', 'site_i18n_entries_seed.sql');

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function isPlainObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function flatten(value, prefix = '', out = {}) {
  if (isPlainObject(value)) {
    for (const [key, child] of Object.entries(value)) {
      const next = prefix ? `${prefix}.${key}` : key;
      flatten(child, next, out);
    }
    return out;
  }

  out[prefix] = value;
  return out;
}

function sqlText(value) {
  return `'${String(value).replaceAll("'", "''")}'`;
}

function sqlJsonb(value) {
  return `${sqlText(JSON.stringify(value))}::jsonb`;
}

const flattenedByLocale = {};
for (const [locale, file] of Object.entries(inputFiles)) {
  if (!fs.existsSync(file)) {
    throw new Error(`Missing locale file: ${file}`);
  }

  flattenedByLocale[locale] = flatten(readJson(file));
}

const allKeys = Array.from(
  new Set(
    Object.values(flattenedByLocale).flatMap((entries) => Object.keys(entries))
  )
).sort();

const rows = [];
const missing = [];

for (const key of allKeys) {
  for (const locale of LOCALES) {
    if (!(key in flattenedByLocale[locale])) {
      missing.push(`${locale}:${key}`);
      continue;
    }

    rows.push(
      `  (${sqlText(NAMESPACE)}, ${sqlText(key)}, ${sqlText(locale)}, ${sqlJsonb(flattenedByLocale[locale][key])}, 'published', 'json_seed')`
    );
  }
}

if (missing.length) {
  console.error('Missing i18n keys detected:');
  for (const item of missing) console.error(`- ${item}`);
  process.exit(1);
}

const sql = `-- HelpUS Site i18n seed
-- Generated from public/locales/*/translation.json
-- Safe to run more than once after db/migrations/20260519_create_site_i18n_entries.sql.

BEGIN;

INSERT INTO public.site_i18n_entries
  (namespace, entry_key, locale, value, status, source)
VALUES
${rows.join(',\n')}
ON CONFLICT (namespace, entry_key, locale)
DO UPDATE SET
  value = EXCLUDED.value,
  status = EXCLUDED.status,
  source = EXCLUDED.source,
  updated_at = now();

COMMIT;
`;

fs.writeFileSync(outputFile, sql, 'utf8');

console.log(`Wrote ${outputFile}`);
console.log(`Locales: ${LOCALES.join(', ')}`);
console.log(`Keys per locale: ${allKeys.length}`);
console.log(`Rows: ${rows.length}`);
