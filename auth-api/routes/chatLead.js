// 📄 auth-api/routes/chatLead.js

import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

/**
 * POST /api/chat/lead
 * Envia nome e e-mail de um visitante do chat guiado para o e-mail da HelpUS.
 */
router.post('/lead', async (req, res) => {
  const { nome, email } = req.body;

  // Validação básica
  if (!email || typeof email !== 'string') {
    return res.status(400).json({ error: 'E-mail é obrigatório.' });
  }

  try {
    // Configuração do transporte via Gmail (senha de app)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Montagem do conteúdo do e-mail
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: '🧠 Novo lead do ChatGUIADO HelpUS',
      text: `Novo visitante iniciou conversa no chat:

Nome: ${nome || 'Não informado'}
E-mail: ${email}`,
    };

    await transporter.sendMail(mailOptions);

    return res.json({ success: true, message: 'Lead enviado com sucesso.' });
  } catch (error) {
    console.error('❌ Erro ao enviar e-mail do lead:', error);
    return res.status(500).json({ error: 'Erro ao enviar e-mail do lead.' });
  }
});

export default router;
