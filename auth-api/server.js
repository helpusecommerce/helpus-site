// 📄 auth-api/server.js
import express from 'express';
import dotenv from 'dotenv';
// (cors importado mas NÃO usado no modo diagnóstico)
import cors from 'cors';

import pool from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import chatRoutes from './routes/chatRoutes.js';
import chatLeadRoutes from './routes/chatLead.js';
import { setupSwagger } from './swagger.js';

// ✅ importa o controller de login para expor endpoints diretos
import { login as loginController } from './controllers/userController.js';

dotenv.config();

const app = express();

/* ================== C O R S  (MODO DIAGNÓSTICO) ================== */
/* Injeta headers CORS em TODAS as respostas.
   Depois que funcionar, voltamos ao cors() com allowlist. */
app.use((req, res, next) => {
  const origin = req.header('Origin') || '';
  console.log('↪', req.method, req.path, 'Origin:', origin || '(no-origin)');

  // Espelha o origin se for helpusa.com.br, senão usa '*'
  let allowOrigin = '*';
  try {
    if (origin) {
      const host = new URL(origin).host;
      if (host.endsWith('helpusa.com.br')) allowOrigin = origin;
    }
  } catch { /* ignora */ }

  res.setHeader('Access-Control-Allow-Origin', allowOrigin);
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});
/* ================================================================ */

app.set('trust proxy', 1);
app.use(express.json());

/* ================== Endpoints explícitos (garantem que exista) ================== */
// login direto (curto) e alias compatível
app.post('/api/login', loginController);
app.post('/api/users/login', loginController);

// rotas de diagnóstico
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
/* ============================================================================= */

// ✅ Prefixo único /api (e mantemos compat /api/users/*)
app.use('/api', userRoutes);
app.use('/api/users', userRoutes);

app.use('/api/chat', chatRoutes);
app.use('/api/chat-lead', chatLeadRoutes);

setupSwagger?.(app);

['EMAIL_FROM','EMAIL_PASS','EMAIL_TO','JWT_SECRET'].forEach(k=>{
  if(!process.env[k]) console.warn(`⚠️ Atenção: variável ${k} não está definida no .env`);
});

// 404 JSON para caminhos /api/* (antes do handler de erro)
app.use((req, res, next) => {
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ error: 'not_found', path: req.originalUrl });
  }
  next();
});

app.use((err, req, r
