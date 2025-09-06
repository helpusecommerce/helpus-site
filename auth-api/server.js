// 📄 auth-api/server.js
// Nome do arquivo: server.js

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
  console.log('CORS ->', req.method, req.header('Origin'));
  next();
});

// 📝 Monta whitelist a partir da env (vírgulas, sem espaços)
const envWhitelist = (process.env.CORS_ORIGIN || '')
  .split(',')
  .map(s => s.trim())
  .filter(Boolean);

// ✅ Adiciona defaults seguros (com e sem www) se não estiverem na env
const defaultOrigins = [
  'https://www.helpusa.com.br',
  'https://helpusa.com.br',
];

// Conjunto final de origins permitidos
const whitelist = new Set([...envWhitelist, ...defaultOrigins]);

// (Opcional) regex para subdomínios, se precisar no futuro:
// const originRegexes = [/^https?:\/\/([a-z0-9-]+\.)*helpusa\.com\.br$/i];

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

  // 2) Checa whitelist exata
  let allow = whitelist.has(origin);

  // 3) (Opcional) Se quiser regex de subdomínio:
  // if (!allow) {
  //   allow = originRegexes.some(rx => rx.test(origin));
  // }

  if (!allow) {
    console.warn(`🚫 Origin bloqueado pelo CORS: ${origin}`);
  }

  cb(null, {
    origin: allow || false,                  // só libera se estiver na lista
    credentials: true,                       // necessário p/ cookies/sessão cross-site
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type,Authorization',
    exposedHeaders: 'Set-Cookie',            // útil se precisar ler algo
    maxAge: 86400,                           // cache do preflight (1 dia)
  });
};

// Aplica CORS global e trata PRE-FLIGHT
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

// ❗ Não redirecione/intercepte OPTIONS (mantém preflight funcional)
app.use((req, res, next) => {
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

// Cookies SameSite=None atrás de proxy (Railway)
app.set('trust proxy', 1);
/* ===================================================== */

// ✅ Verificação de variáveis críticas (avisa mas não bloqueia)
['EMAIL_FROM', 'EMAIL_PASS', 'EMAIL_TO', 'JWT_SECRET'].forEach((key) => {
  if (!process.env[key]) console.warn(`⚠️ Atenção: variável ${key} não está definida no .env`);
});

// ✅ Middlewares globais (depoi
