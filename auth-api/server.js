// 📄 auth-api/server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import pool from './config/db.js';             // ← ping do DB na /health
import userRoutes from './routes/userRoutes.js';
import chatRoutes from './routes/chatRoutes.js';
import chatLeadRoutes from './routes/chatLead.js';
import { setupSwagger } from './swagger.js';

dotenv.config();

const app = express();

// ✅ Verificação de variáveis críticas (avisa mas não bloqueia)
['EMAIL_FROM', 'EMAIL_PASS', 'EMAIL_TO', 'JWT_SECRET'].forEach((key) => {
  if (!process.env[key]) console.warn(`⚠️ Atenção: variável ${key} não está definida no .env`);
});

// ✅ Middlewares globais
const corsOrigin = process.env.CORS_ORIGIN || 'http://localhost:3000';
app.use(cors({ origin: corsOrigin, credentials: true }));
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

// ✅ Rota de saúde (com ping ao Postgres)
app.get('/health', async (_req, res) => {
  try {
    const r = await pool.query('SELECT 1 AS ok');
    res.json({ ok: true, db: r.rows?.[0]?.ok === 1 });
  } catch (err) {
    console.error('Healthcheck DB error:', err);
    res.status(500).json({ ok: false, error: err.message });
  }
});
// espelho sob /api/health (útil quando tudo fica sob /api)
app.get('/api/health', async (_req, res) => {
  try {
    const r = await pool.query('SELECT 1 AS ok');
    res.json({ ok: true, db: r.rows?.[0]?.ok === 1 });
  } catch (err) {
    console.error('Healthcheck DB error:', err);
    res.status(500).json({ ok: false, error: err.message });
  }
});

// ✅ Rotas da API
console.log('🚀 Montando rotas da API…');
app.use('/api', userRoutes);          // ex.: POST /api/login, /api/usuarios
app.use('/api', chatRoutes);          // ex.: POST /api/chatgpt
app.use('/api/chat', chatLeadRoutes); // ex.: POST /api/chat/lead

// ✅ Swagger em /docs
try {
  setupSwagger(app);                  // http://localhost:3001/docs
  console.log('📚 Swagger configurado com sucesso.');
} catch (err) {
  console.error('❌ Erro ao configurar Swagger:', err);
}

// 🔎 404 amigável para rotas não encontradas
app.use((req, res, _next) => {
  res.status(404).json({ error: `Rota não encontrada: ${req.method} ${req.originalUrl}` });
});

// 🛡️ Handler global de erros (mantém stack no console)
app.use((err, _req, res, _next) => {
  console.error('API ERROR:', err);
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

// ✅ Inicialização do servidor
const PORT = Number(process.env.PORT || 3001);
app.listen(PORT, () => {
  console.log(`✅ API rodando na porta ${PORT} (CORS_ORIGIN=${corsOrigin})`);
});
