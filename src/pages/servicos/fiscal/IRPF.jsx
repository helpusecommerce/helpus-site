import React from 'react';

export default function IRPF() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">
          Declaração de Imposto de Renda (Pessoa Física)
        </h1>

        <p className="text-lg text-gray-700 mb-4">
          Realizamos o preenchimento completo da sua declaração 1040 (equivalente ao IRPF), garantindo o máximo de deduções legais disponíveis:
        </p>

        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Preenchimento completo do formulário 1040 e anexos</li>
          <li>Análise de deduções com base nas despesas do ano</li>
          <li>Inclusão de dependentes, créditos e renda estrangeira</li>
          <li>Entrega segura e suporte completo após o envio</li>
        </ul>

        <p className="text-lg text-green-700 mt-6 font-semibold">Valor: US$ 39.00</p>

        <a
          href="https://wa.me/5583998721848?text=Olá! Tenho interesse no serviço: Declaração de Imposto de Renda Pessoa Física"
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
