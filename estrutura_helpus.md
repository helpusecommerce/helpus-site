# Estrutura Completa do Projeto HelpUS

helpus-site/
│
├── .vercel/                         # Configurações de deploy na Vercel
│   ├── project.json
│   ├── README.txt
│   └── sitemap.xml
│
├── .vscode/                         # Configurações do VS Code
│   ├── settings.json
│   └── tasks.json
│
├── auth-api/                        # Backend Node.js + Express (Railway)
│   │
│   ├── config/
│   │   └── db.js                    # Conexão com PostgreSQL (Railway)
│   │
│   ├── controllers/
│   │   ├── userController.js        # CRUD de usuários
│   │   ├── digitalProductController.js   # NOVO: controle de PDFs e e-books
│   │   └── ...
│   │
│   ├── middleware/
│   │   ├── auth.js                  # Middleware JWT
│   │   ├── checkAdmin.js            # Verifica permissões
│   │   └── validate.js              # Validação de entrada
│   │
│   ├── routes/
│   │   ├── users.js                 # Rotas de usuário
│   │   ├── digitalProducts.js       # NOVO: rotas para PDFs e e-books
│   │   └── index.js                 # Registro das rotas no Express
│   │
│   ├── swagger.js                   # Documentação da API (Swagger UI)
│   ├── server.js                    # Servidor principal Express
│   ├── package.json
│   ├── Procfile                     # Execução Heroku/Railway
│   └── .env.example
│
├── build/                           # Resultado do build de produção do React
│
├── node_modules/                    # Dependências do frontend
│
├── public/                          # Arquivos estáticos
│   ├── images/
│   │   ├── logo-helpus.png
│   │   ├── favicon.ico
│   │   └── capa-ebooks/             # NOVO: capas dos PDFs
│   │       └── abertura-empresa.jpg
│   ├── index.html
│   └── manifest.json
│
├── src/                             # Frontend React + Tailwind
│   │
│   ├── assets/                      # Ícones, logos e imagens do site
│   │
│   ├── components/                  # Componentes reutilizáveis
│   │   ├── Header.jsx               # Cabeçalho com menu
│   │   ├── Footer.jsx               # Rodapé com newsletter
│   │   ├── EbookCard.jsx            # NOVO: card para exibir PDFs
│   │   ├── EbookCheckoutButton.jsx  # NOVO: botão de compra (Gumroad)
│   │   └── ...
│   │
│   ├── pages/                       # Páginas principais do site
│   │   ├── Home.jsx
│   │   ├── Sobre.jsx
│   │   ├── Contato.jsx
│   │   ├── Servicos.jsx
│   │   ├── Ebooks/                  # NOVO: seção de venda de PDFs
│   │   │   ├── ListaEbooks.jsx      # Lista todos os e-books
│   │   │   ├── EbookDetalhe.jsx     # Página individual com botão de compra
│   │   │   └── index.js
│   │   └── ...
│   │
│   ├── context/                     # Contextos globais (auth, theme, etc.)
│   ├── hooks/                       # Hooks customizados
│   ├── i18n/                        # Traduções multilíngue
│   ├── App.jsx                      # Componente raiz React
│   ├── main.jsx                     # Ponto de entrada da aplicação
│   └── index.css                    # Estilos globais
│
├── schema_unificado_helpus.sql      # Estrutura completa do banco de dados
├── server.js                        # Servidor simples para frontend local
├── tailwind.config.js               # Configurações Tailwind
├── package.json                     # Dependências React
├── package-lock.json
├── vercel.json                      # Configurações de build/deploy
├── .env.local                       # Variáveis de ambiente locais
├── .gitignore
└── README.md

## Estrutura adicional do banco (para PDFs)

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
