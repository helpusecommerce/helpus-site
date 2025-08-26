// src/components/Newsletter.jsx
import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useTranslation } from 'react-i18next';

// ⚠️ Defina no .env:
// REACT_APP_SUPABASE_URL=...
// REACT_APP_SUPABASE_ANON_KEY=...
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

const Newsletter = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [loading, setLoading] = useState(false);

  const isValidEmail = (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const value = email.trim().toLowerCase();
    if (!isValidEmail(value)) {
      setMensagem(t('newsletter.invalid', { defaultValue: 'E-mail inválido.' }));
      return;
    }
    if (!supabase) {
      setMensagem(
        t('newsletter.misconfig', {
          defaultValue: 'Configuração do servidor indisponível.',
        })
      );
      return;
    }

    setLoading(true);
    setMensagem('');

    try {
      // Se sua tabela `newsletter` possui UNIQUE(email), erros de duplicidade
      // virão como status 409 ou código PGRST116 (depende da versão).
      const { error } = await supabase
        .from('newsletter')
        .insert([{ email: value }]);

      if (error) {
        // Trata duplicidade por código/mensagem
        const msg = (error?.message || '').toLowerCase();
        if (error.code === '23505' || msg.includes('duplicate') || msg.includes('unique')) {
          setMensagem(
            t('newsletter.already', {
              defaultValue: 'Este e-mail já está cadastrado.',
            })
          );
        } else {
          setMensagem(
            t('newsletter.error', {
              defaultValue: 'Erro ao se inscrever. Tente novamente.',
            })
          );
        }
      } else {
        setMensagem(
          t('newsletter.success', {
            defaultValue: 'Inscrição realizada com sucesso!',
          })
        );
        setEmail('');
      }
    } catch (err) {
      setMensagem(
        t('newsletter.error', {
          defaultValue: 'Erro ao se inscrever. Tente novamente.',
        })
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-800 text-white py-6 px-4 text-center">
      <h2 className="text-lg font-semibold mb-2">
        {t('newsletter.title', {
          defaultValue:
            'Receba novidades e dicas sobre vistos, empresas, impostos e sites profissionais',
        })}
      </h2>

      <form onSubmit={handleSubmit} className="flex justify-center flex-wrap gap-2">
        <input
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder={t('newsletter.placeholder', {
            defaultValue: 'seuemail@exemplo.com',
          })}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
          aria-label={t('newsletter.placeholder', {
            defaultValue: 'seuemail@exemplo.com',
          })}
        />
        <button
          type="submit"
          disabled={loading}
          className={`px-4 py-2 rounded text-white font-semibold ${
            loading
              ? 'bg-blue-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {loading
            ? t('newsletter.sending', { defaultValue: 'Enviando...' })
            : t('newsletter.button', { defaultValue: 'Inscrever' })}
        </button>
      </form>

      {mensagem && <p className="mt-2 text-sm">{mensagem}</p>}
    </div>
  );
};

export default Newsletter;
