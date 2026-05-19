-- HelpUS Site i18n storage
-- Purpose: store translated site strings by namespace, key and locale.
-- Safe to run more than once.

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS public.site_i18n_entries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),

  namespace text NOT NULL DEFAULT 'translation',
  entry_key text NOT NULL,
  locale text NOT NULL CHECK (locale IN ('en', 'pt', 'es')),

  value jsonb NOT NULL,
  status text NOT NULL DEFAULT 'published' CHECK (status IN ('draft', 'published', 'archived')),

  source text NOT NULL DEFAULT 'json_seed',
  notes text,

  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),

  UNIQUE (namespace, entry_key, locale)
);

CREATE INDEX IF NOT EXISTS site_i18n_entries_lookup_idx
  ON public.site_i18n_entries (namespace, locale, status);

CREATE INDEX IF NOT EXISTS site_i18n_entries_key_idx
  ON public.site_i18n_entries (entry_key);

CREATE OR REPLACE FUNCTION public.set_site_i18n_entries_updated_at()
RETURNS trigger AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_site_i18n_entries_updated_at
  ON public.site_i18n_entries;

CREATE TRIGGER trg_site_i18n_entries_updated_at
BEFORE UPDATE ON public.site_i18n_entries
FOR EACH ROW
EXECUTE FUNCTION public.set_site_i18n_entries_updated_at();
