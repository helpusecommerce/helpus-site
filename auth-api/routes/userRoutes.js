import express from 'express';
import { body } from 'express-validator';
import {
  login,
  cadastrarUsuario,
  listarUsuarios,
  listarRoles,
  listarSites,
  editarUsuario,
  deletarUsuario
} from '../controllers/userController.js';

import { verificarToken } from '../middleware/auth.js';
import { verificarAdmin } from '../middleware/checkAdmin.js';
import { validarCampos } from '../middleware/validate.js';

const router = express.Router();

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Realiza login de usuário
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: admin@helpus.com
 *               senha:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       200:
 *         description: Login bem-sucedido com JWT
 *       401:
 *         description: Usuário não encontrado ou senha inválida
 */
router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Email inválido'),
    body('senha').isLength({ min: 6 }).withMessage('A senha deve ter no mínimo 6 caracteres'),
    validarCampos
  ],
  login
);

/**
 * @swagger
 * /api/usuarios:
 *   post:
 *     summary: Cadastra um novo usuário (apenas admin)
 *     tags: [Usuários]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - email
 *               - senha
 *               - role_id
 *               - site_slug
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *               role_id:
 *                 type: integer
 *               site_slug:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário cadastrado com sucesso
 *       400:
 *         description: Erro de validação
 */
router.post(
  '/usuarios',
  verificarToken,
  verificarAdmin,
  [
    body('email').isEmail().withMessage('Email inválido'),
    body('nome').notEmpty().withMessage('Nome é obrigatório'),
    body('senha').isLength({ min: 6 }).withMessage('Senha deve ter no mínimo 6 caracteres'),
    body('role_id').isInt().withMessage('Papel inválido'),
    body('site_slug').notEmpty().withMessage('Site é obrigatório'),
    validarCampos
  ],
  cadastrarUsuario
);

/**
 * @swagger
 * /api/usuarios/{id}:
 *   put:
 *     summary: Edita um usuário existente (apenas admin)
 *     tags: [Usuários]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do usuário a ser editado
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *               role_id:
 *                 type: integer
 *               site_slug:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *       404:
 *         description: Usuário não encontrado
 */
router.put(
  '/usuarios/:id',
  verificarToken,
  verificarAdmin,
  [
    body('email').isEmail().withMessage('Email inválido'),
    body('nome').notEmpty().withMessage('Nome é obrigatório'),
    body('role_id').isInt().withMessage('Papel inválido'),
    body('site_slug').notEmpty().withMessage('Site é obrigatório'),
    validarCampos
  ],
  editarUsuario
);

/**
 * @swagger
 * /api/usuarios/{id}:
 *   delete:
 *     summary: Exclui um usuário pelo ID (apenas admin)
 *     tags: [Usuários]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do usuário a ser excluído
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuário excluído com sucesso
 *       404:
 *         description: Usuário não encontrado
 */
router.delete('/usuarios/:id', verificarToken, verificarAdmin, deletarUsuario);

/**
 * @swagger
 * /api/usuarios:
 *   get:
 *     summary: Lista todos os usuários (apenas admin)
 *     tags: [Usuários]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuários
 */
router.get('/usuarios', verificarToken, verificarAdmin, listarUsuarios);

/**
 * @swagger
 * /api/roles:
 *   get:
 *     summary: Lista os papéis (roles) disponíveis
 *     tags: [Usuários]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de roles
 */
router.get('/roles', verificarToken, listarRoles);

/**
 * @swagger
 * /api/sites:
 *   get:
 *     summary: Lista os sites cadastrados
 *     tags: [Usuários]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de sites
 */
router.get('/sites', verificarToken, listarSites);

export default router;
