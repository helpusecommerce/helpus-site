# HelpUS Site - i18n DB Migration Plan

## Current status

The HelpUS public site currently uses static i18n JSON files:

- `public/locales/en/translation.json`
- `public/locales/pt/translation.json`
- `public/locales/es/translation.json`

The Header and refreshed Home page are already connected to `i18next` and the three locale files are aligned.

## Goal

Move translatable site content to PostgreSQL while keeping the current JSON files as a safe fallback.

The migration must not make the public site depend exclusively on the database during the first rollout.

## Target architecture

1. Keep static JSON locale files as baseline fallback.
2. Store published translations in PostgreSQL table `public.site_i18n_entries`.
3. Generate seed SQL from the existing JSON files.
4. Add a backend endpoint to expose published translations by locale.
5. Add a frontend loader that:
   - loads the current JSON translation bundle first;
   - optionally fetches DB translations;
   - overlays DB values on top of JSON values;
   - keeps JSON values if the API is unavailable.
6. Enable the DB overlay only through an environment flag after validation.

## Created files

- `db/migrations/20260519_create_site_i18n_entries.sql`
- `scripts/i18n/export-locales-to-sql.mjs`
- `db/seeds/site_i18n_entries_seed.sql`

## Database table

Table: `public.site_i18n_entries`

Main columns:

- `namespace`
- `entry_key`
- `locale`
- `value`
- `status`
- `source`
- `created_at`
- `updated_at`

Uniqueness rule:

- one value per `namespace + entry_key + locale`

Supported locales:

- `en`
- `pt`
- `es`

Supported statuses:

- `draft`
- `published`
- `archived`

## Safe rollout phases

### Phase 1 - Preparation

Create migration, seed generator and seed SQL.

No runtime change.

### Phase 2 - Database application

Run the migration in the target PostgreSQL database.

Then run the generated seed.

Validate row count:

- expected keys per locale: 415
- expected locales: 3
- expected total rows: 1245

### Phase 3 - Read API

Create a public read-only endpoint, for example:

- `GET /api/i18n/:locale`

The endpoint must return only:

- requested locale
- namespace `translation`
- status `published`

### Phase 4 - Frontend overlay

Keep `i18next-http-backend` or the current JSON behavior as the baseline.

Add optional DB overlay behind env flag:

- `REACT_APP_I18N_DB_ENABLED=true`

If the API fails, the site must continue rendering from JSON.

### Phase 5 - Admin editing

Create admin UI later for editing translations.

Recommended workflow:

1. edit draft value;
2. preview;
3. publish;
4. frontend receives only published values.

### Phase 6 - Optional AI-assisted translation

Later, add a helper to suggest translations using AI.

The generated translation should be saved as draft first and reviewed before publishing.

## Rollback

Rollback is simple because JSON remains the source of safety.

If DB translation fails:

1. disable `REACT_APP_I18N_DB_ENABLED`;
2. redeploy frontend;
3. keep using static JSON.

No public page should break because of missing DB translations.

## Validation checklist

Before applying to production:

- run `node --check scripts/i18n/export-locales-to-sql.mjs`
- regenerate seed from current JSON
- confirm expected row count
- run SQL migration in staging/database target
- run seed in staging/database target
- validate `/api/i18n/en`
- validate `/api/i18n/pt`
- validate `/api/i18n/es`
- validate frontend fallback with API disabled
- validate frontend overlay with API enabled
- validate production build
