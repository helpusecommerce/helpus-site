# HelpUS Site - Arquitetura Atualizada & Migração Vercel Serverless (2026)

**Data de Atualização**: 08/09/2026  
**Repositório**: `helpus-site`  
**Domínio Principal**: `https://www.helpusbr.com`  
**Ambiente de Hospedagem**: Vercel Serverless Platform ($0.00/mês)  

---

## 1. Visão Geral da Arquitetura

O projeto `helpus-site` foi totalmente unificado em uma arquitetura **Serverless Monorepo** na Vercel, eliminando a dependência de contêineres Docker 24/7 no Railway.

```
                    ┌──────────────────────────────────────────────┐
                    │               Vercel Edge/CDN                │
                    └──────────────────────┬───────────────────────┘
                                           │
                    ┌──────────────────────┴───────────────────────┐
                    │            Vercel Serverless Engine           │
                    ├──────────────────────────────┬───────────────┤
                    │   React Frontend (Build)     │ Express API   │
                    │   - i18n multilíngue         │ (/api/* ->    │
                    │   - Tailwind CSS             │  auth-api)    │
                    └──────────────────────────────┴───────┬───────┘
                                                           │
                                             ┌─────────────┴─────────────┐
                                             │ PostgreSQL Database       │
                                             │ (SSL ativado / Pool Serverless)│
                                             └───────────────────────────┘
```

---

## 2. Detalhes da Migração (Railway -> Vercel Serverless)

### 2.1 Ponto de Entrada da API Serverless
- A API Node.js/Express (`auth-api`) é exposta como uma **Vercel Serverless Function** na raiz do projeto através do arquivo `api/index.js`:
  ```javascript
  import app from '../auth-api/server.js';
  export default app;
  ```
- O arquivo `vercel.json` gerencia a reescrita de rotas para direcionar todas as chamadas HTTP `/api/*` diretamente para o handler Express:
  ```json
  {
    "rewrites": [
      { "source": "/api/(.*)", "destination": "/api" }
    ]
  }
  ```

### 2.2 Otimização do Pool de Conexões do Banco de Dados (PostgreSQL)
Para evitar congelamento de conexões (*connection leaks*) e estouro do limite de tempo de execução serverless (timeout), o arquivo `auth-api/config/db.js` foi configurado especificamente para o ciclo de vida serverless:
- **`connectionTimeoutMillis`**: Reduzido para `2_000ms` (2 segundos), evitando que a requisição fique travada esperando o banco de dados.
- **`idleTimeoutMillis`**: `5_000ms` (5 segundos) para desalocar conexões inativas rapidamente.
- **`max`**: `5` conexões máximas por instância da função.
- **SSL SNI automático**: Detecção dinâmica de SSL com `rejectUnauthorized: false` para conexões externas via string de conexão `DATABASE_URL`.

### 2.3 Otimização de Storage de Build (`.vercelignore`)
Para manter o limite de *Function Storage* da Vercel sob controle (evitando alertas do limite de 10GB), o arquivo `.vercelignore` foi adicionado ignorando artefatos pesados:
```
node_modules
.venv
venv
backups
docs
helpussite.zip
dir.txt
```

---

## 3. Status dos Serviços e Custos

| Serviço / Componente | Antiga Infraestrutura | Nova Infraestrutura (Atual) | Custo Mensal |
| :--- | :--- | :--- | :---: |
| **Frontend React** | Vercel Static Hosting | Vercel CDN / Edge | **$0.00** |
| **Backend Express (`auth-api`)** | Contêiner Node.js no Railway | Vercel Serverless Function (`/api`) | **$0.00** |
| **Banco de Dados PostgreSQL** | PostgreSQL Railway | Instância PostgreSQL / Neon / Supabase | **$0.00** |
| **Status no Railway** | Executando 24/7 | **Pausado (down)** | **$0.00** |

---

## 4. Estrutura das Rotas da API (`/api/*`)

| Método | Rota | Descrição | Middleware |
| :---: | :--- | :--- | :---: |
| `GET` | `/api/health` | Status de saúde da API e conexão PG | Nenhum |
| `POST` | `/api/users/login` | Autenticação de usuário e emissão de JWT | `validate` |
| `POST` | `/api/users/register` | Cadastro de novo usuário | `validate` |
| `GET` | `/api/users/profile` | Dados do perfil do usuário autenticado | `auth` |
| `GET` | `/api/digital-products` | Listagem de PDFs e produtos digitais | Public |

---

## 5. Script de Deploy e Integração Contínua (CI/CD)

- **Repositório GitHub**: `https://github.com/helpusecommerce/helpus-site.git` (branch `main`).
- **Deploy Automático**: Qualquer `git push origin main` dispara automaticamente o build e deploy na Vercel.
- **Checagem de Saúde**:
  ```bash
  curl -s -i https://www.helpusbr.com/api/health
  ```
