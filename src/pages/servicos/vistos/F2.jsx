// 📄 src/pages/servicos/vistos/F2.jsx
import React from 'react';

export default function F2() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">Visto F2 – Dependente de Estudante</h1>

        <p className="text-lg text-gray-700 mb-4">
          O visto <strong>F2</strong> é destinado a cônjuges e filhos não casados de portadores do visto
          <strong> F1</strong>, permitindo que acompanhem o estudante durante sua permanência nos Estados Unidos.
          É importante destacar que o F2 não autoriza trabalho nos EUA.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-800">📋 O que está incluído:</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Preparação e preenchimento completo do formulário <strong>DS-160</strong></li>
          <li>Checklist e documentação de vínculo com o titular do F1</li>
          <li>Agendamento da entrevista no consulado e orientações específicas</li>
          <li>Suporte para dependentes menores e cônjuges durante todo o processo</li>
        </ul>

        <div className="text-lg text-green-700 mt-6 font-semibold">
          💵 Valor do serviço HelpUS: <span className="text-2xl text-green-800">US$ 49,00</span> – suporte completo para dependentes.
        </div>

        <a
          href="https://wa.me/5583998721848?text=Olá! Tenho interesse no serviço: Visto F2 – Dependente de Estudante"
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
