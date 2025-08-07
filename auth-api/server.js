// arquivo: server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import { setupSwagger } from './swagger.js';

dotenv.config();

const app = express();

// ✅ Middlewares globais
app.use(cors());
app.use(express.json());

// ✅ Rotas principais da API
app.use('/api', userRoutes);

// ✅ Swagger em /docs
setupSwagger(app);

// ✅ Inicialização do servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ API rodando na porta ${PORT}`);
});
