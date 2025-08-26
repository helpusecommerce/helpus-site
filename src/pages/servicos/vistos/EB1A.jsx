// 📄 src/pages/servicos/vistos/EB1A.jsx
import React from 'react';

export default function EB1A() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">
          Visto EB1-A – Habilidade Extraordinária
        </h1>

        <p className="text-lg text-gray-700 mb-4">
          O visto EB1-A é destinado a pessoas com <strong>habilidades extraordinárias</strong> em
          ciência, arte, educação, negócios ou esportes, com reconhecimento nacional ou internacional.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-800">📋 O que está incluído:</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Análise inicial de perfil e elegibilidade</li>
          <li>Orientações detalhadas para documentação comprobatória</li>
          <li>Preenchimento do formulário <strong>I-140</strong> e montagem do dossiê</li>
          <li>Traduções e estruturação de provas de notoriedade</li>
        </ul>

        <div className="text-lg text-green-700 mt-6 font-semibold">
          💵 Valor do serviço HelpUS: <span className="text-2xl text-green-800">US$ 79,00</span> – suporte completo até o envio da petição.
        </div>

        <a
          href="https://wa.me/5583998721848?text=Olá! Tenho interesse no serviço: Visto EB1-A – Habilidade Extraordinária"
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
