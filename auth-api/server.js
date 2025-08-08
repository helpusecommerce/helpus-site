// 📄 auth-api/server.js

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import userRoutes from './routes/userRoutes.js';       // 📁 auth-api/routes/userRoutes.js
import chatRoutes from './routes/chatRoutes.js';       // 📁 auth-api/routes/chatRoutes.js
import chatLeadRoutes from './routes/chatLead.js';     // ✅ NOVO: rota para envio de nome e e-mail
import { setupSwagger } from './swagger.js';           // 📁 auth-api/swagger.js

dotenv.config();

const app = express();

// ✅ Verificação de variáveis críticas
['EMAIL_FROM', 'EMAIL_PASS', 'EMAIL_TO'].forEach((key) => {
  if (!process.env[key]) {
    console.warn(`⚠️ Atenção: variável ${key} não está definida no .env`);
  }
});

// ✅ Middlewares globais
app.use(cors());
app.use(express.json());

// ✅ Rotas da API
console.log('🚀 Montando rotas da API...');
app.use('/api', userRoutes);             // 🔗 http://localhost:3001/api/usuarios
app.use('/api', chatRoutes);             // 🔗 http://localhost:3001/api/chatgpt
app.use('/api/chat', chatLeadRoutes);    // 🔗 http://localhost:3001/api/chat/lead

// ✅ Swagger em /docs
try {
  setupSwagger(app);                     // 🔗 http://localhost:3001/docs
  console.log('📚 Swagger configurado com sucesso.');
} catch (err) {
  console.error('❌ Erro ao configurar Swagger:', err);
}

// ✅ Inicialização do servidor
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`✅ API rodando na porta ${PORT}`);
});
