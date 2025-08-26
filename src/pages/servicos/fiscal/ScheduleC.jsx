// 📄 src/pages/servicos/fiscal/ScheduleC.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function ScheduleC() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
          Schedule C + SE para Autônomos
        </h1>

        <p className="text-lg text-gray-700 mb-4">
          Se você atua como autônomo, freelancer ou prestador de serviços, 
          preparamos o <strong>Schedule C</strong> e o <strong>Schedule SE</strong> para calcular corretamente seus impostos, 
          garantindo conformidade com o IRS e aproveitamento máximo de deduções.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-800">📋 O que está incluído:</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
          <li>Relatório detalhado de receitas e despesas</li>
          <li>Cálculo do lucro líquido e imposto de autônomo (Self-Employment Tax)</li>
          <li>Inclusão no formulário 1040 com os anexos obrigatórios</li>
          <li>Suporte com deduções, depreciações e comprovações</li>
        </ul>

        <div className="text-lg font-semibold text-green-700 mb-8">
          💵 Valor do serviço: <span className="text-2xl text-green-800">US$ 29.00</span>
        </div>

        <a
          href="https://wa.me/5583998721848?text=Olá,%20tenho%20interesse%20no%20serviço:%20Schedule%20C%20+%20SE%20para%20Autônomos"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-md transition"
        >
          <FaWhatsapp className="text-xl" />
          Contratar agora via WhatsApp
        </a>
      </div>
    </section>
  );
}
