// src/components/Newsletter.jsx
import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://nfiyjubkhqwpdyunngnp.supabase.co', // sua SUPABASE_URL
  'eyJhbGciOiJIUzI1NiIsInR5cCI...' // sua SUPABASE_ANON_KEY
);

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    const { error } = await supabase.from('newsletter').insert([{ email }]);

    if (error) {
      setMensagem('Erro ao se inscrever. Tente novamente.');
    } else {
      setMensagem('Inscrição realizada com sucesso!');
      setEmail('');
    }
  };

  return (
    <div className="bg-gray-800 text-white py-6 px-4 text-center">
      <h2 className="text-lg font-semibold mb-2">
        Receba novidades e dicas sobre vistos, empresas, impostos e sites profissionais
      </h2>
      <form onSubmit={handleSubmit} className="flex justify-center flex-wrap gap-2">
        <input
          type="email"
          placeholder="seuemail@exemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="px-4 py-2 rounded bg-gray-700 text-white focus:outline-none w-64"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white font-semibold"
        >
          Inscrever
        </button>
      </form>
      {mensagem && <p className="mt-2 text-sm">{mensagem}</p>}
    </div>
  );
};

export default Newsletter;
