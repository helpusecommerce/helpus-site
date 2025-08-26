// 📄 src/pages/servicos/vistos/B1B2.jsx
import React from 'react';

export default function B1B2() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">
          Visto B1/B2 – Turista e Negócios
        </h1>

        <p className="text-lg text-gray-700 mb-4">
          O visto <strong>B1/B2</strong> é indicado para viagens temporárias aos Estados Unidos a turismo, negócios ou visitas a familiares e amigos.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-800">📋 O que está incluído:</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Preenchimento completo do formulário <strong>DS-160</strong>;</li>
          <li>Preparação e checklist dos documentos de apoio;</li>
          <li>Agendamento da entrevista consular e instruções detalhadas;</li>
          <li>Orientações para aumentar suas chances de aprovação.</li>
        </ul>

        <div className="text-lg text-green-700 mt-6 font-semibold">
          💵 Valor do serviço: <span className="text-2xl text-green-800">US$ 45.00</span>
        </div>

        <a
          href="https://wa.me/5583998721848?text=Olá! Tenho interesse no serviço: Visto B1/B2 – Turista e Negócios"
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
