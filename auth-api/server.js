// auth-api/server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import pool from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import chatRoutes from './routes/chatRoutes.js';
import chatLeadRoutes from './routes/chatLead.js';
import i18nRoutes from './routes/i18nRoutes.js';
import { setupSwagger } from './swagger.js';
import { login as loginController } from './controllers/userController.js';

dotenv.config();

const app = express();

/* ================= CORS (diagnóstico) ================= */
app.use((req, res, next) => {
  const origin = req.header('Origin') || '';
  console.log('->', req.method, req.path, 'Origin:', origin || '(no-origin)');

  let allowOrigin = '*';
  try {
    if (origin) {
      const host = new URL(origin).host;
      if (host.endsWith('helpusa.com.br')) {
        allowOrigin = origin;
      }
    }
  } catch (e) {
    // ignore
  }

  res.setHeader('Access-Control-Allow-Origin', allowOrigin);
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }
  next();
});
/* ===================================================== */

app.set('trust proxy', 1);
app.use(express.json());

/* ============= Endpoints explícitos (garantia) ============= */
app.post('/api/login', loginController);
app.post('/api/users/login', loginController);

app.get('/api/__health', (req, res) => {
  res.json({ ok: true, service: 'auth-api', ts: new Date().toISOString() });
});
app.all('/api/__echo', (req, res) => {
  res.json({
    ok: true,
    method: req.method,
    path: req.originalUrl,
    origin: req.headers.origin || null,
  });
});
/* ========================================================== */

/* ===================== Routers ===================== */
app.use('/api/i18n', i18nRoutes);
app.use('/api', userRoutes);
app.use('/api/users', userRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/chat-lead', chatLeadRoutes);
/* =================================================== */

if (typeof setupSwagger === 'function') {
  setupSwagger(app);
}

['EMAIL_FROM', 'EMAIL_PASS', 'EMAIL_TO', 'JWT_SECRET'].forEach((k) => {
  if (!process.env[k]) console.warn(`WARN: env ${k} not defined`);
});

/* 404 JSON para /api/* (antes do handler de erro) */
app.use((req, res, next) => {
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ error: 'not_found', path: req.originalUrl });
  }
  next();
});

/* Handler de erro */
app.use((err, req, res, _next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: 'internal_error' });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Auth API listening on :${port}`);
});
