// Dependentes.jsx - Página com conteúdo e preço corrigido
import React from 'react';

export default function Dependentes() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">
          Declaração com Dependentes (Child Tax Credit)
        </h1>

        <p className="text-lg text-gray-700 mb-4">
          Se você possui filhos que atendem aos requisitos legais, pode receber até US$ 2.000 por dependente qualificado na sua declaração fiscal.
        </p>

        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Verificação de elegibilidade para o crédito</li>
          <li>Inclusão correta do dependente no formulário 1040</li>
          <li>Otimização do reembolso com base nos créditos fiscais</li>
          <li>Suporte completo para comprovação, se exigido</li>
        </ul>

        <p className="text-lg text-green-700 mt-6 font-semibold">Valor: US$ 19.00</p>

        <a
          href="https://wa.me/5583998721848?text=Olá! Tenho interesse no serviço: Declaração com Dependente (Child Tax Credit)"
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
