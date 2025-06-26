// Complementares.jsx - Página para Documentos Adicionais
import React from 'react';

export default function Complementares() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">Documentos Complementares</h1>
        <p className="text-lg text-gray-700 mb-4">
          Emitimos e preparamos documentos auxiliares que fortalecem sua solicitação de visto ou processo migratório.
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Formulário I-134 (affidavit of support)</li>
          <li>Cartas explicativas, declarações, justificativas</li>
          <li>Comprovações financeiras e de vínculo</li>
        </ul>
        <p className="text-lg text-green-700 mt-6 font-semibold">
          Valor: US$ 25.00 – Cada documento, com personalização e revisão.
        </p>
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
