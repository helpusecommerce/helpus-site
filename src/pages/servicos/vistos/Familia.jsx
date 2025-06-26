// Familia.jsx - Visto para Membros da Família
import React from 'react';

export default function Familia() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">Visto Familiar – Pais, Cônjuges e Filhos</h1>
        <p className="text-lg text-gray-700 mb-4">
          Auxiliamos na solicitação de vistos para familiares que desejam acompanhar ou visitar membros da família nos EUA, seja como dependentes ou para fins de reunião familiar.
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Definição do tipo de visto adequado (F2, B2, IR, etc.)</li>
          <li>Checklist e preparação dos documentos familiares</li>
          <li>Preenchimento de formulários, incluindo DS-160</li>
          <li>Agendamento e preparo para a entrevista consular</li>
        </ul>
        <p className="text-lg text-green-700 mt-6 font-semibold">
          Valor: US$ 55.00 – Inclui suporte para cada membro da família.
        </p>
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
