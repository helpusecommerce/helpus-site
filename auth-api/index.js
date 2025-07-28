// index.js
import express from 'express';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import pkg from 'pg';
import cors from 'cors';

dotenv.config();
const { Pool } = pkg;

const app = express();

// Libera acesso do frontend (ex: http://localhost:3000 ou seu domínio)
app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(express.json());

// Configuração da conexão com o PostgreSQL
const pool = new Pool({
  host: process.env.PGHOST,
  port: parseInt(process.env.PGPORT),
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  ssl: { rejectUnauthorized: false }
});

// Rota de login
app.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    const query = 'SELECT * FROM usuarios WHERE email = $1 LIMIT 1';
    const result = await pool.query(query, [email]);

    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Usuário não encontrado' });
    }

    const usuario = result.rows[0];
    const match = await bcrypt.compare(senha, usuario.senha);

    if (!match) {
      return res.status(401).json({ error: 'Senha incorreta' });
    }

    // Sucesso no login
    res.json({
      mensagem: 'Login bem-sucedido',
      usuario: {
        id: usuario.id,
        email: usuario.email,
        tipo: usuario.tipo
      }
    });
  } catch (err) {
    console.error('Erro no login:', err);
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
});

// Teste rápido para ver se API está de pé
app.get('/', (req, res) => {
  res.send('API de autenticação HelpUS está funcionando');
});

// Porta do servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`API de autenticação rodando na porta ${PORT}`);
});
