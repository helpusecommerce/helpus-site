// 📄 src/pages/servicos/vistos/Renovacao.jsx
import React from 'react';

export default function Renovacao() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">Renovação de Visto</h1>

        <p className="text-lg text-gray-700 mb-4">
          Se o seu visto americano está vencido ou próximo do vencimento, a HelpUS oferece suporte completo para
          renovar com segurança e agilidade, reduzindo erros e atrasos no processo.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-800">📋 O que está incluído:</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Atualização de dados e preenchimento do novo <strong>DS-160</strong></li>
          <li>Verificação de elegibilidade para <strong>isenção de entrevista</strong></li>
          <li>Agendamento no <strong>CASV</strong> ou consulado, se necessário</li>
          <li>Checklist atualizado de documentos exigidos</li>
          <li>Orientações claras até a devolução do passaporte com o visto renovado</li>
        </ul>

        <div className="text-lg text-green-700 mt-6 font-semibold">
          💵 Valor do serviço HelpUS: <span className="text-2xl text-green-800">US$ 39.00</span>
        </div>

        <a
          href="https://wa.me/5583998721848?text=Olá! Tenho interesse no serviço: Renovação de Visto"
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
