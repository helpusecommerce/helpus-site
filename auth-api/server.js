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

/* ===================== C O R S ===================== */
app.use((req, _res, next) => {
  console.log('CORS ->', req.method, req.header('Origin') || '(no-origin)', req.path);
  next();
});

const envWhitelist = (process.env.CORS_ORIGINS || process.env.CORS_ORIGIN || '')
  .split(',')
  .map(s => s.trim())
  .filter(Boolean);

const defaultOrigins = [
  'https://www.helpusa.com.br',
  'https://helpusa.com.br',
];

const whitelist = new Set([...defaultOrigins, ...envWhitelist]);

const corsOptions = (req, cb) => {
  const origin = req.header('Origin');
  if (!origin) {
    return cb(null, {
      origin: true,
      credentials: true,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      allowedHeaders: 'Content-Type,Authorization',
      maxAge: 86400,
    });
  }

  const allow = whitelist.has(origin);
  if (!allow) console.warn(`🚫 Origin bloqueado pelo CORS: ${origin}`);

  cb(null, {
    origin: allow,
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type,Authorization',
    exposedHeaders: 'Set-Cookie',
    maxAge: 86400,
  });
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
/* =================================================== */

app.set('trust proxy', 1);
app.use(express.json());

// ====================== R O T A S ======================
// ✅ Prefixo único /api (agora /api/login, /api/usuarios, etc.)
app.use('/api', userRoutes);

// ♻️ Compat: mantém também o caminho antigo /api/users/*
app.use('/api/users', userRoutes);

// Outras rotas
app.use('/api/chat', chatRoutes);
app.use('/api/chat-lead', chatLeadRoutes);

// Swagger
setupSwagger?.(app);

// Avisos de envs
['EMAIL_FROM','EMAIL_PASS','EMAIL_TO','JWT_SECRET'].forEach(k=>{
  if(!process.env[k]) console.warn(`⚠️ Atenção: variável ${k} não está definida no .env`);
});

// Handler de erro
app.use((err, req, res, _next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: 'internal_error' });
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Auth API listening on :${port}`));
