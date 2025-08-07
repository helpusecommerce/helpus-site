// middleware/validate.js
import { validationResult } from 'express-validator';

export function validarCampos(req, res, next) {
  const erros = validationResult(req);
  if (!erros.isEmpty()) {
    return res.status(400).json({ errors: erros.array() });
  }
  next();
}
