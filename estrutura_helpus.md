# Estrutura Completa do Projeto HelpUS

```
helpus-site/
│
├── .vercel/                         # Configurações de deploy na Vercel
│   ├── project.json
│   └── sitemap.xml
│
├── api/                             # Entrypoint da Vercel Serverless Function
│   └── index.js                     # Exporta auth-api/server.js para rotas /api/*
│
├── auth-api/                        # Backend Node.js + Express
│   ├── config/
│   │   └── db.js                    # Conexão PostgreSQL (Pool Serverless otimizado)
│   ├── controllers/
│   │   ├── userController.js        # CRUD de usuários e autenticação
│   │   └── digitalProductController.js # Controle de e-books e PDFs
│   ├── middleware/
│   │   ├── auth.js                  # Middleware de validação JWT
│   │   └── validate.js              # Validação de entradas
│   ├── routes/
│   │   ├── users.js                 # Rotas de usuários
│   │   └── digitalProducts.js       # Rotas de produtos digitais
│   ├── server.js                    # Aplicação Express principal
│   └── package.json
│
├── docs/                            # Documentação técnica do projeto
│   ├── HELPUS_SITE_ARQUITETURA_E_MIGRACAO_VERCEL_2026.md # Nova arquitetura Serverless Vercel
│   ├── HELPUS_SITE_AUDITORIA_TECNICA_INICIAL_20260517.md
│   ├── HELPUS_SITE_PLANEJAMENTO_TRANSFORMACAO_TECH_20260517.md
│   └── I18N_DB_MIGRATION_PLAN.md    # Plano de migração do i18n para banco
│
├── public/                          # Arquivos estáticos e locales i18n
│   ├── locales/                     # Dicionários de tradução (pt, en, es)
│   └── index.html
│
├── src/                             # Frontend React + Tailwind
│   ├── components/                  # Componentes (Header, Footer, Hero, etc.)
│   ├── pages/                       # Páginas (Home, Servicos, Vistos, Empresa, etc.)
│   ├── i18n/                        # Configuração multilíngue i18next
│   ├── App.jsx                      # Rotas React Router
│   └── index.css                    # Tailwind & Estilos globais
│
├── .vercelignore                    # Otimização de build/storage na Vercel
├── vercel.json                      # Rewrites de /api/* para a Serverless Function
├── package.json                     # Dependências do projeto React & Express
└── README.md                        # Documentação rápida de desenvolvimento e deploy
```

---

## 🗄️ Estrutura do Banco de Dados (PostgreSQL)

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'user',
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE digital_products (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    slug VARCHAR(255) UNIQUE,
    description TEXT,
    price NUMERIC(10,2),
    file_url TEXT,
    cover_image_url TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);
```
