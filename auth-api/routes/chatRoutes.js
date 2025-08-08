import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

// POST /api/chatgpt
router.post('/chatgpt', async (req, res) => {
  const { message } = req.body;

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Mensagem inválida.' });
  }

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://helpusa.com.br',
        'X-Title': 'HelpUS Chat',
      },
      body: JSON.stringify({
        model: 'mistralai/mistral-7b-instruct:free',
        messages: [
          {
            role: 'system',
            content: `
Você é Hel, o assistente virtual oficial da empresa HelpUS.

Regras:
- Sempre responda em **português do Brasil**.
- Seja educado, direto e claro.
- Comece com uma saudação simpática se for a primeira interação.
- Só fale sobre os serviços da HelpUS listados abaixo:

Serviços oferecidos pela HelpUS:
1. Consultoria para vistos americanos (B1/B2, F1, F2, EB1A, EB2-NIW)
2. Abertura de empresas nos EUA (LLC, EIN, endereço fiscal)
3. Documentação fiscal e tributária (ITIN, deduções, imposto de renda)
4. Criação de sites profissionais e e-commerces

Se a pergunta estiver relacionada a esses serviços, explique como funciona e ofereça ajuda.

Se a pergunta for sobre algo que exige advogado, autoridade consular ou decisão governamental, informe com gentileza que você é apenas um assistente virtual e não oferece assessoria legal.
            `.trim(),
          },
          {
            role: 'user',
            content: message,
          }
        ]
      }),
    });

    const data = await response.json();
    console.log('🔁 Retorno do OpenRouter:', JSON.stringify(data));

    if (data.error) {
      console.error('❌ Erro da IA:', data.error);
      return res.status(500).json({ error: data.error.message || 'Erro da IA' });
    }

    const resposta = data.choices?.[0]?.message?.content;

    if (!resposta) {
      console.warn('⚠️ Resposta da IA veio vazia ou indefinida');
      return res.status(500).json({ error: 'Resposta vazia da IA.' });
    }

    res.json({ resposta });
  } catch (error) {
    console.error('🔥 Erro na API do OpenRouter:', error);
    res.status(500).json({ error: error.message || 'Erro interno no servidor.' });
  }
});

export default router;
