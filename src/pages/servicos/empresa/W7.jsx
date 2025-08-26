// 📄 src/pages/servicos/fiscal/W7.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function W7() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
          Formulário W-7 (Solicitação de ITIN)
        </h1>

        <p className="text-lg text-gray-700 mb-4">
          O <strong>Formulário W-7</strong> é o documento oficial utilizado para solicitar o 
          <strong> ITIN (Individual Taxpayer Identification Number)</strong> junto à Receita Federal 
          Americana (IRS). Nossa equipe cuida de todo o preenchimento com precisão e segurança:
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-800">📋 O que está incluído:</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
          <li>Definição correta da categoria de elegibilidade</li>
          <li>Preenchimento completo e consistente dos dados</li>
          <li>Revisão para evitar erros comuns e garantir aceitação</li>
          <li>Inclusão de carta explicativa e checklist de documentos</li>
        </ul>

        <div className="text-lg font-semibold text-green-700 mb-8">
          💵 Valor: <span className="text-green-800">Incluído no pacote de ITIN</span>
        </div>

        <a
          href="https://wa.me/5583998721848?text=Olá,%20desejo%20ajuda%20para%20preencher%20o%20Formulário%20W-7%20(ITIN)"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-md transition"
        >
          <FaWhatsapp className="text-xl" />
          Solicitar via WhatsApp
        </a>
      </div>
    </section>
  );
}
