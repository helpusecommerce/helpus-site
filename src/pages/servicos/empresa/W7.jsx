// W7.jsx - Página completa com conteúdo
import React from 'react';

export default function W7() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">Formulário W-7 (Solicitação de ITIN)</h1>
        <p className="text-lg text-gray-700 mb-4">
          O W-7 é o formulário oficial utilizado para solicitar o ITIN junto à Receita Federal Americana (IRS). Elaboramos e preenchermos com precisão todos os campos obrigatórios:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Escolha correta da categoria de elegibilidade</li>
          <li>Dados completos e consistentes conforme documentos</li>
          <li>Revisão de erros comuns e garantia de aceitação</li>
          <li>Inclusão da carta explicativa e checklist de envio</li>
        </ul>
        <p className="text-lg text-green-700 mt-6 font-semibold">Valor: Incluído no pacote de ITIN</p>
        <a
          href="https://wa.me/5583998721848?text=Olá! Tenho interesse no serviço: Preenchimento do Formulário W-7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 transition"
        >
          Solicitar preenchimento via WhatsApp
        </a>
      </div>
    </section>
  );
}

