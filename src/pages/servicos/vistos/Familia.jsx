// 📄 src/pages/servicos/vistos/Familia.jsx
import React from 'react';

export default function Familia() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">Visto Familiar – Pais, Cônjuges e Filhos</h1>

        <p className="text-lg text-gray-700 mb-4">
          Oferecemos suporte completo para a solicitação de vistos familiares, seja para acompanhar
          um estudante, trabalhador ou residente nos EUA, ou para visitas temporárias de reunião familiar.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-800">📋 O que está incluído:</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Definição do tipo de visto adequado (<strong>F2, B2, IR</strong>, entre outros)</li>
          <li>Checklist completo de documentos familiares exigidos</li>
          <li>Preenchimento dos formulários necessários (como <strong>DS-160</strong>)</li>
          <li>Agendamento da entrevista consular e orientações detalhadas</li>
          <li>Suporte contínuo até a finalização do processo</li>
        </ul>

        <div className="text-lg text-green-700 mt-6 font-semibold">
          💵 Valor do serviço HelpUS: <span className="text-2xl text-green-800">US$ 55,00</span> – para cada membro da família.
        </div>

        <a
          href="https://wa.me/5583998721848?text=Olá! Tenho interesse no serviço: Visto Familiar – Pais, Cônjuges e Filhos"
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
