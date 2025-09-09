// 📄 auth-api/server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import pool from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import chatRoutes from './routes/chatRoutes.js';
import chatLeadRoutes from './routes/chatLead.js';
import { setupSwagger } from './swagger.js';

dotenv.config();

const app = express();

/* ===================== C O R S  ===================== */
// Log simples
app.use((req, _res, next) => {
  console.log('CORS ->', req.method, req.header('Origin') || '(no-origin)', req.path);
  next();
});

// Monta allowlist a partir de env (suporta CORS_ORIGINS ou CORS_ORIGIN)
const envWhitelist = (
  process.env.CORS_ORIGINS || process.env.CORS_ORIGIN || ''
)
  .split(',')
  .map(s => s.trim())
  .filter(Boolean);

// Defaults de produção
const defaultOrigins = [
  'https://www.helpusa.com.br',
  'https://helpusa.com.br',
  // opcional: liberar o domínio público do site no Railway
  'https://helpus-site-production.up.railway.app',
];

// Conjunto final
const whitelist = new Set([...defaultOrigins, ...envWhitelist]);

// Opções dinâmicas por requisição
const corsOptionsDelegate = (req, cb) => {
  const origin = req.header('Origin');
  const allow = !origin || whitelist.has(origin); // permite healthchecks sem Origin

  if (origin && !allow) {
    console.warn(`🚫 Origin bloqueado pelo CORS: ${origin}`);
  }

  cb(null, {
    origin: allow, // true só p/ allowlist
    credentials: true, // deixe true se usa cookies/sessão
    methods: ['GET','HEAD','PUT','PATCH','POST','DELETE','OPTIONS'],
    allowedHeaders: ['Content-Type','Authorization'],
    exposedHeaders: ['Set-Cookie'],
    maxAge: 86400,
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });
};

// ⚠️ Aplique CORS antes de qualquer rota
app.use(cors(corsOptionsDelegate));
// Responder explicitamente preflight com headers
app.options('*', cors(corsOptionsDelegate));
/* ===================================================== */

// Cookies SameSite=None atrás de proxy (Railway)
app.set('trust proxy', 1);

// Middlewares globais
app.use(express.json());

// Rotas
app.use('/api/users', userRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/chat-lead', chatLeadRoutes);
// Se o /api/login não estiver dentro de userRoutes, adicione aqui:
// app.post('/api/login', loginController);

// Swagger (se existir)
setupSwagger?.(app);

// Verificação de vars (log informativo)
['EMAIL_FROM', 'EMAIL_PASS', 'EMAIL_TO', 'JWT_SECRET'].forEach((key) => {
  if (!process.env[key]) console.warn(`⚠️ Atenção: variável ${key} não está definida no .env`);
});

// Handler de erro no final (CORS já aplicado)
app.use((err, req, res, _next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: 'internal_error' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Auth API listening on :${port}`));
