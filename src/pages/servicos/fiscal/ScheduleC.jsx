import React from 'react';

export default function ScheduleC() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">Schedule C + SE para Autônomos</h1>

        <p className="text-lg text-gray-700 mb-4">
          Se você atua como autônomo, freelancer ou prestador de serviços, preparamos o Schedule C e o Schedule SE para calcular corretamente seus impostos:
        </p>

        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Relatório detalhado de receitas e despesas</li>
          <li>Cálculo do lucro líquido e imposto de autônomo (Self-Employment Tax)</li>
          <li>Inclusão no formulário 1040 com os anexos obrigatórios</li>
          <li>Suporte com deduções, depreciações e comprovações</li>
        </ul>

        <p className="text-lg text-green-700 mt-6 font-semibold">Valor: US$ 29.00</p>

        <a
          href="https://wa.me/5583998721848?text=Olá! Tenho interesse no serviço: Schedule C + SE para Autônomos"
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

