// server.js
import express from 'express';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import pkg from 'pg';
import cors from 'cors';
import jwt from 'jsonwebtoken';

dotenv.config();
const { Pool } = pkg;

const app = express();
app.use(cors());
app.use(express.json());

// 🔗 Conexão com o PostgreSQL
const pool = new Pool({
  host: process.env.PGHOST,
  port: parseInt(process.env.PGPORT),
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  ssl: { rejectUnauthorized: false }
});

// 🔐 Middleware JWT
function verificarToken(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Token não fornecido.' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: 'Token inválido ou expirado.' });
    req.usuario = decoded;
    next();
  });
}

// ✅ Login + token JWT
app.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    const query = 'SELECT * FROM usuarios WHERE email = $1 LIMIT 1';
    const result = await pool.query(query, [email]);
    if (result.rows.length === 0) return res.status(401).json({ error: 'Usuário não encontrado' });

    const usuario = result.rows[0];
    if (!usuario.senha) return res.status(400).json({ error: 'Usuário sem senha cadastrada.' });

    const match = await bcrypt.compare(senha, usuario.senha);
    if (!match) return res.status(401).json({ error: 'Senha incorreta' });

    const token = jwt.sign(
      {
        id: usuario.id,
        email: usuario.email,
        role_id: usuario.role_id,
        site_slug: usuario.site_slug
      },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );

    res.json({
      mensagem: 'Login bem-sucedido',
      token,
      usuario: {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
        role_id: usuario.role_id,
        site_slug: usuario.site_slug
      }
    });
  } catch (err) {
    console.error('Erro no login:', err);
    res.status(500).json({ error: 'Erro interno no login' });
  }
});

// ✅ Cadastro de usuário (sem campo tipo)
app.post('/usuarios', verificarToken, async (req, res) => {
  const { email, role_id, site_slug, nome } = req.body;

  if (!email || !role_id || !site_slug) {
    return res.status(400).json({ error: 'Campos obrigatórios ausentes.' });
  }

  try {
    const senhaHash = await bcrypt.hash('123456', 10);

    const query = `
      INSERT INTO usuarios (email, senha, role_id, site_slug, nome)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id, nome, email, role_id, site_slug
    `;
    const values = [email, senhaHash, role_id, site_slug, nome || null];
    const result = await pool.query(query, values);

    res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso!', usuario: result.rows[0] });
  } catch (err) {
    console.error('Erro ao cadastrar usuário:', err);
    res.status(500).json({ error: 'Erro ao cadastrar usuário.' });
  }
});

// ✅ Lista de usuários
app.get('/usuarios', verificarToken, async (req, res) => {
  try {
    const query = `
      SELECT u.id, u.nome, u.email, u.site_slug, s.nome AS site_nome, r.name AS role_nome
      FROM usuarios u
      LEFT JOIN sites s ON u.site_slug = s.slug
      LEFT JOIN user_roles r ON u.role_id = r.id
      ORDER BY u.nome
    `;
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (err) {
    console.error('Erro ao buscar usuários:', err);
    res.status(500).json({ error: 'Erro ao buscar usuários.' });
  }
});

// ✅ Retorna papéis
app.get('/roles', verificarToken, async (req, res) => {
  try {
    const result = await pool.query('SELECT id, name FROM user_roles ORDER BY id');
    res.json(result.rows);
  } catch (err) {
    console.error('Erro ao buscar roles:', err);
    res.status(500).json({ error: 'Erro ao buscar roles.' });
  }
});

// ✅ Retorna sites
app.get('/sites', verificarToken, async (req, res) => {
  try {
    const result = await pool.query('SELECT slug, nome FROM sites ORDER BY nome');
    res.json(result.rows);
  } catch (err) {
    console.error('Erro ao buscar sites:', err);
    res.status(500).json({ error: 'Erro ao buscar sites.' });
  }
});

// ✅ Inicia servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ API rodando na porta ${PORT}`);
});
