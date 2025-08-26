// 📄 src/pages/servicos/fiscal/Dependentes.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Dependentes() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
          Declaração com Dependentes (Child Tax Credit)
        </h1>

        <p className="text-lg text-gray-700 mb-4">
          Se você possui filhos que atendem aos requisitos legais, pode receber até{' '}
          <strong>US$ 2.000 por dependente qualificado</strong> na sua declaração fiscal.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-800">📋 O que está incluído:</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
          <li>Verificação de elegibilidade para o crédito</li>
          <li>Inclusão correta do dependente no formulário 1040</li>
          <li>Otimização do reembolso com base nos créditos fiscais</li>
          <li>Suporte completo para comprovação, se exigido</li>
        </ul>

        <div className="text-lg font-semibold text-green-700 mb-8">
          💵 Valor: <span className="text-2xl text-green-800">US$ 19.00</span>
        </div>

        <a
          href="https://wa.me/5583998721848?text=Olá,%20tenho%20interesse%20no%20serviço:%20Declaração%20com%20Dependente%20(Child%20Tax%20Credit)"
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
