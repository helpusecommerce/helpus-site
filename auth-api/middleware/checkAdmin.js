// middleware/checkAdmin.js

export function verificarAdmin(req, res, next) {
  if (!req.usuario) {
    return res.status(401).json({ error: 'Usuário não autenticado.' });
  }

  if (req.usuario.role_id !== 1) {
    return res.status(403).json({ error: 'Acesso restrito a administradores.' });
  }

  next();
}
