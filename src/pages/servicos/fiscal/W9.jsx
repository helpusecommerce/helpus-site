// src/pages/servicos/fiscal/W9.jsx

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const W9 = () => {
  return (
    <div className="max-w-5xl mx-auto py-16 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">Preenchimento do Formulário W-9</h1>

      <p className="mb-4 text-lg">
        Precisa enviar seu formulário W-9 para uma empresa americana e não quer correr o risco de preencher errado? A HelpUS resolve isso pra você em poucos minutos.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-800">📋 O que está incluído:</h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>Preenchimento automático com dados da sua LLC e EIN;</li>
        <li>PDF final assinado digitalmente ou pronto para assinar;</li>
        <li>Instruções claras de como enviar para a empresa contratante;</li>
        <li>Suporte para dúvidas e modificações futuras.</li>
      </ul>

      <div className="text-lg font-semibold text-green-700 mb-8">
        💵 Valor do serviço HelpUS: <span className="text-2xl text-green-800">$25</span>
      </div>

      <a
        href="https://wa.me/5583998721848?text=Olá,%20preciso%20de%20ajuda%20com%20o%20formulário%20W-9!"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-md transition"
      >
        <FaWhatsapp className="text-xl" />
        Falar com a HelpUS
      </a>
    </div>
  );
};

export default W9;
