// 📄 src/pages/servicos/vistos/Complementares.jsx
import React from 'react';

export default function Complementares() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">
          Documentos Complementares
        </h1>

        <p className="text-lg text-gray-700 mb-4">
          Emitimos e preparamos documentos auxiliares que fortalecem sua solicitação de visto ou processo migratório.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-800">📋 Exemplos de documentos:</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Formulário <strong>I-134 (Affidavit of Support)</strong></li>
          <li>Cartas explicativas, declarações e justificativas personalizadas</li>
          <li>Comprovações financeiras e de vínculo familiar ou profissional</li>
        </ul>

        <div className="text-lg text-green-700 mt-6 font-semibold">
          💵 Valor do serviço: <span className="text-2xl text-green-800">US$ 25,00</span> por documento (com personalização e revisão).
        </div>

        <a
          href="https://wa.me/5583998721848?text=Olá! Tenho interesse no serviço: Documentos Complementares"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 transition"
        >
          Contratar agora via WhatsApp
        </a>
      </div>
    </section>
  );
}
