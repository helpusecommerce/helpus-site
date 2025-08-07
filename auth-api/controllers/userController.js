import pool from '../config/db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function login(req, res) {
  const { email, senha } = req.body;
  try {
    const query = 'SELECT * FROM usuarios WHERE email = $1 LIMIT 1';
    const result = await pool.query(query, [email]);
    if (result.rows.length === 0) return res.status(401).json({ error: 'Usuário não encontrado' });

    const usuario = result.rows[0];
    if (!usuario.senha) return res.status(400).json({ error: 'Usuário sem senha cadastrada.' });

    const match = await bcrypt.compare(senha, usuario.senha);
    if (!match) return res.status(401).json({ error: 'Senha incorreta' });

    const token = jwt.sign({
      id: usuario.id,
      email: usuario.email,
      role_id: usuario.role_id,
      site_slug: usuario.site_slug
    }, process.env.JWT_SECRET, { expiresIn: '2h' });

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
}

export async function cadastrarUsuario(req, res) {
  const { email, role_id, site_slug, nome, senha } = req.body;
  if (!email || !role_id || !site_slug || !senha) {
    return res.status(400).json({ error: 'Campos obrigatórios ausentes.' });
  }

  try {
    const senhaHash = await bcrypt.hash(senha, 10);
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
}

export async function listarUsuarios(req, res) {
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
}

export async function listarRoles(req, res) {
  try {
    const result = await pool.query('SELECT id, name FROM user_roles ORDER BY id');
    res.json(result.rows);
  } catch (err) {
    console.error('Erro ao buscar roles:', err);
    res.status(500).json({ error: 'Erro ao buscar roles.' });
  }
}

export async function listarSites(req, res) {
  try {
    const result = await pool.query('SELECT slug, nome FROM sites ORDER BY nome');
    res.json(result.rows);
  } catch (err) {
    console.error('Erro ao buscar sites:', err);
    res.status(500).json({ error: 'Erro ao buscar sites.' });
  }
}

export async function editarUsuario(req, res) {
  const { id } = req.params;
  const { nome, email, senha, role_id, site_slug } = req.body;

  if (!email || !role_id || !site_slug || !nome) {
    return res.status(400).json({ error: 'Campos obrigatórios ausentes.' });
  }

  try {
    let query, values;

    if (senha) {
      const senhaHash = await bcrypt.hash(senha, 10);
      query = `
        UPDATE usuarios
        SET nome = $1, email = $2, senha = $3, role_id = $4, site_slug = $5
        WHERE id = $6
        RETURNING id, nome, email, role_id, site_slug
      `;
      values = [nome, email, senhaHash, role_id, site_slug, id];
    } else {
      query = `
        UPDATE usuarios
        SET nome = $1, email = $2, role_id = $3, site_slug = $4
        WHERE id = $5
        RETURNING id, nome, email, role_id, site_slug
      `;
      values = [nome, email, role_id, site_slug, id];
    }

    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    res.json({ mensagem: 'Usuário atualizado com sucesso!', usuario: result.rows[0] });
  } catch (err) {
    console.error('Erro ao editar usuário:', err);
    res.status(500).json({ error: 'Erro ao editar usuário.' });
  }
}

export async function deletarUsuario(req, res) {
  const { id } = req.params;

  try {
    const result = await pool.query('DELETE FROM usuarios WHERE id = $1 RETURNING id', [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    res.json({ mensagem: 'Usuário excluído com sucesso.' });
  } catch (err) {
    console.error('Erro ao excluir usuário:', err);
    res.status(500).json({ error: 'Erro ao excluir usuário.' });
  }
}
