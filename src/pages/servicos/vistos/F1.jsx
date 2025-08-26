// 📄 src/pages/servicos/vistos/F1.jsx
import React from 'react';

export default function F1() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">Visto F1 – Estudante</h1>

        <p className="text-lg text-gray-700 mb-4">
          O visto <strong>F1</strong> é destinado a estudantes estrangeiros que desejam frequentar
          uma instituição acadêmica nos Estados Unidos, como universidade, escola de inglês,
          colégio ou seminário. É a categoria mais comum para estudos de longa duração nos EUA.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-800">📋 O que está incluído:</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Orientação detalhada e checklist de documentos exigidos</li>
          <li>Preenchimento completo do formulário <strong>DS-160</strong></li>
          <li>Pagamento e emissão do <strong>SEVIS</strong></li>
          <li>Agendamento e instruções para entrevista no consulado</li>
        </ul>

        <div className="text-lg text-green-700 mt-6 font-semibold">
          💵 Valor do serviço HelpUS: <span className="text-2xl text-green-800">US$ 59,00</span> – serviço completo para estudantes.
        </div>

        <a
          href="https://wa.me/5583998721848?text=Olá! Tenho interesse no serviço: Visto F1 – Estudante"
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
