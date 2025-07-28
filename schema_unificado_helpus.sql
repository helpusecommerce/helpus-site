
-- ===========================
-- SCHEMA UNIFICADO: HELPUS DB
-- Multi-site com base em site_slug
-- ===========================

CREATE TABLE sites (
  id SERIAL PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE, -- ex: 'tulio', 'bluebox'
  nome TEXT,
  url TEXT,
  ativo BOOLEAN DEFAULT true
);

-- ========== CONTROLE DE USUÁRIOS ==========

CREATE TABLE user_roles (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE
);

CREATE TABLE permissions (
  id SERIAL PRIMARY KEY,
  role_id INTEGER REFERENCES user_roles(id),
  can_list_products BOOLEAN DEFAULT false,
  can_create_users BOOLEAN DEFAULT false,
  can_manage_newsletter BOOLEAN DEFAULT false,
  can_edit_products BOOLEAN DEFAULT false,
  can_view_products BOOLEAN DEFAULT false,
  can_edit_users BOOLEAN DEFAULT false
);

CREATE TABLE users_custom (
  id UUID PRIMARY KEY,
  email TEXT NOT NULL,
  role_id INTEGER REFERENCES user_roles(id),
  site_slug TEXT NOT NULL REFERENCES sites(slug)
);

CREATE TABLE usuarios (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome TEXT,
  email TEXT,
  senha TEXT,
  tipo TEXT CHECK (tipo IN ('admin','operacional','cliente')),
  criado_em TIMESTAMP DEFAULT now(),
  role_id INTEGER REFERENCES user_roles(id),
  ativo BOOLEAN DEFAULT true,
  site_slug TEXT NOT NULL REFERENCES sites(slug)
);

-- ========== PRODUTOS E RELACIONADOS ==========

CREATE TABLE brands (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  site_slug TEXT NOT NULL REFERENCES sites(slug)
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  site_slug TEXT NOT NULL REFERENCES sites(slug)
);

CREATE TABLE tags (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  site_slug TEXT NOT NULL REFERENCES sites(slug)
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price NUMERIC NOT NULL,
  stock INTEGER DEFAULT 0,
  brand_id INTEGER REFERENCES brands(id),
  created_at TIMESTAMP DEFAULT now(),
  brand TEXT,
  size TEXT,
  promotional_price NUMERIC,
  user_id UUID NOT NULL REFERENCES users_custom(id),
  site_slug TEXT NOT NULL REFERENCES sites(slug)
);

CREATE TABLE product_images (
  id SERIAL PRIMARY KEY,
  product_id INTEGER REFERENCES products(id),
  url TEXT NOT NULL,
  alt TEXT,
  user_id UUID REFERENCES users_custom(id)
);

CREATE TABLE product_variants (
  id SERIAL PRIMARY KEY,
  product_id INTEGER REFERENCES products(id),
  name TEXT NOT NULL,
  value TEXT NOT NULL,
  price NUMERIC,
  stock INTEGER DEFAULT 0,
  user_id UUID REFERENCES users_custom(id)
);

CREATE TABLE product_categories (
  product_id INTEGER REFERENCES products(id),
  category_id INTEGER REFERENCES categories(id),
  user_id UUID REFERENCES users_custom(id),
  PRIMARY KEY (product_id, category_id)
);

CREATE TABLE product_tags (
  product_id INTEGER REFERENCES products(id),
  tag_id INTEGER REFERENCES tags(id),
  user_id UUID REFERENCES users_custom(id),
  PRIMARY KEY (product_id, tag_id)
);

CREATE TABLE discounts (
  id SERIAL PRIMARY KEY,
  product_id INTEGER REFERENCES products(id),
  discount_price NUMERIC NOT NULL,
  start_date DATE,
  end_date DATE,
  user_id UUID REFERENCES users_custom(id)
);

-- ========== NEWSLETTER ==========

CREATE TABLE newsletter (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT now(),
  site_slug TEXT NOT NULL REFERENCES sites(slug)
);
