// 📄 src/pages/servicos/vistos/CasosEspeciais.jsx
import React from 'react';

export default function CasosEspeciais() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">
          Casos Especiais (Waiver, Deportação e Extensões)
        </h1>

        <p className="text-lg text-gray-700 mb-4">
          Atuamos em situações mais complexas que exigem cuidado jurídico e estratégias específicas para cada caso.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-800">📋 Exemplos de casos atendidos:</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Pedidos de <strong>perdão (waiver)</strong> por vistos negados ou presença ilegal;</li>
          <li>Solicitação de <strong>extensão</strong> ou <strong>mudança de status</strong> já nos EUA;</li>
          <li>Acompanhamento em processos de <strong>deportação</strong> ou <strong>inadmissibilidade</strong>;</li>
          <li>Consultas personalizadas com análise de riscos e alternativas realistas.</li>
        </ul>

        <div className="text-lg text-green-700 mt-6 font-semibold">
          💵 Valor do serviço: <span className="text-2xl text-green-800">Sob consulta</span>
        </div>

        <a
          href="https://wa.me/5583998721848?text=Olá! Tenho interesse no serviço: Casos Especiais (waiver, deportação, extensões)"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 transition"
        >
          Falar com especialista no WhatsApp
        </a>
      </div>
    </section>
  );
}
