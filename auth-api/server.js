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
// 🔎 Log da origin para debug em produção (Railway)
app.use((req, _res, next) => {
  console.log('CORS ->', req.method, req.header('Origin') || '(no-origin)', req.path);
  next();
});

// 📝 Monta whitelist a partir da env (CORS_ORIGINS ou CORS_ORIGIN)
const envWhitelist = (
  process.env.CORS_ORIGINS || process.env.CORS_ORIGIN || ''
)
  .split(',')
  .map(s => s.trim())
  .filter(Boolean);

// ✅ Adiciona defaults seguros (com e sem www)
const defaultOrigins = [
  'https://www.helpusa.com.br',
  'https://helpusa.com.br',
  // se precisar, pode incluir o domínio do Railway para testes:
  // 'https://helpus-site-production.up.railway.app',
];

// Conjunto final de origins permitidos
const whitelist = new Set([...envWhitelist, ...defaultOrigins]);

// Função de decisão por requisição
const corsOptions = (req, cb) => {
  const origin = req.header('Origin');

  // 1) Sem Origin (ex.: curl/healthcheck): permitir
  if (!origin) {
    return cb(null, {
      origin: true,
      credentials: true,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      allowedHeaders: 'Content-Type,Authorization',
      maxAge: 86400,
    });
  }

  // 2) Checa whitelist
  const allow = whitelist.has(origin);

  if (!allow) {
    console.warn(`🚫 Origin bloqueado pelo CORS: ${origin}`);
  }

  cb(null, {
    origin: allow || false,
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type,Authorization',
    exposedHeaders: 'Set-Cookie',
    maxAge: 86400,
  });
};

// Aplica CORS global e trata PRE-FLIGHT
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

// ⚠️ Removido o trecho que interceptava OPTIONS sem headers
/* ===================================================== */

// Cookies SameSite=None atrás de proxy (Railway)
app.set('trust proxy', 1);

// ✅ Middlewares globais
app.use(express.json());

// ✅ Rotas
app.use('/api/users', userRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/chat-lead', chatLeadRoutes);

// Se quiser expor um alias direto:
// import { loginController } from './controllers/userController.js';
// app.post('/api/login', loginController);

// ✅ Swagger (se configurado)
setupSwagger?.(app);

// ✅ Verificação de variáveis críticas
['EMAIL_FROM', 'EMAIL_PASS', 'EMAIL_TO', 'JWT_SECRET'].forEach((key) => {
  if (!process.env[key]) console.warn(`⚠️ Atenção: variável ${key} não está definida no .env`);
});

// ✅ Handler de erro no final
app.use((err, req, res, _next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: 'internal_error' });
});

// ✅ Inicializa servidor
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Auth API listening on :${port}`));
