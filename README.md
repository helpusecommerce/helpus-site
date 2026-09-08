# 🚀 HelpUS - Portal Principal & Serverless API

Plataforma oficial da HelpUS LLC para prestação de serviços corporativos, fiscais, vistos americanos e produtos digitais. Inclui aplicação Frontend React multilíngue (i18n) e Backend API RESTful integrados em arquitetura Serverless na Vercel ($0.00/mês).

---

## 📦 Tecnologias Utilizadas

- **Frontend**: React 18, Tailwind CSS, i18next (PT/EN/ES), Framer Motion
- **Backend API**: Node.js + Express (exposto via Vercel Serverless Functions em `/api`)
- **Banco de Dados**: PostgreSQL com suporte a SSL/SNI
- **Autenticação**: JWT (JSON Web Tokens) & bcryptjs
- **Hospedagem & CI/CD**: Vercel (deploy automático via GitHub)

---

## 🏗️ Estrutura do Projeto

```
helpus-site/
├── api/                   # Handler Serverless Vercel (api/index.js)
├── auth-api/              # Lógica de negócio, rotas e controllers Express
│   ├── config/db.js       # Pool PostgreSQL otimizado para Serverless
│   ├── controllers/       # Controladores (usuários, produtos digitais, etc.)
│   ├── middleware/        # Autenticação JWT e validação
│   └── routes/            # Definição de rotas Express
├── docs/                  # Documentação técnica e planos de migração
├── public/                # Assets estáticos e dicionários i18n
├── src/                   # Componentes React, Páginas e Estilos
├── vercel.json            # Configuração de rewrites Serverless (/api/*)
└── .vercelignore          # Filtros de build para economia de storage
```

---

## 🔧 Instalação e Execução Local

### 1. Clonar o repositório
```bash
git clone https://github.com/helpusecommerce/helpus-site.git
cd helpus-site
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Configurar Variáveis de Ambiente (`.env.local` / `.env`)
```env
DATABASE_URL=postgresql://usuario:senha@host:5432/dbname
JWT_SECRET=seu_jwt_secret_super_seguro
```

### 4. Executar em modo de desenvolvimento
```bash
npm run start:cra
```

---

## 🚀 Deploy

O deploy é automatizado via Vercel:
```bash
git add .
git commit -m "feat: atualização"
git push origin main
```
Toda alteração na branch `main` dispara a compilação do React e a atualização das funções serverless em `https://www.helpusbr.com`.
