// 📄 src/pages/servicos/fiscal/IRPF.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function IRPF() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
          Declaração de Imposto de Renda (Pessoa Física)
        </h1>

        <p className="text-lg text-gray-700 mb-4">
          Realizamos o preenchimento completo da sua <strong>declaração 1040</strong> (equivalente ao IRPF),
          garantindo o máximo de deduções legais disponíveis e total conformidade com o IRS:
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-800">📋 O que está incluído:</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
          <li>Preenchimento completo do formulário 1040 e anexos obrigatórios</li>
          <li>Análise detalhada de deduções com base nas despesas do ano</li>
          <li>Inclusão de dependentes, créditos fiscais e renda estrangeira</li>
          <li>Entrega segura e suporte contínuo após o envio</li>
        </ul>

        <div className="text-lg font-semibold text-green-700 mb-8">
          💵 Valor do serviço: <span className="text-2xl text-green-800">US$ 39.00</span>
        </div>

        <a
          href="https://wa.me/5583998721848?text=Olá,%20tenho%20interesse%20no%20serviço:%20Declaração%20de%20Imposto%20de%20Renda%20(Pessoa%20Física)"
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
