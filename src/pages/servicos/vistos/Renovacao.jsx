// Renovacao.jsx - Página completa com conteúdo
import React from 'react';

export default function Renovacao() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">Renovação de Visto</h1>
        <p className="text-lg text-gray-700 mb-4">
          Se o seu visto está vencido ou próximo de vencer, podemos auxiliá-lo na renovação com agilidade e segurança:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Atualização de dados e preenchimento do novo DS-160</li>
          <li>Verificação de elegibilidade para isenção de entrevista</li>
          <li>Agendamento no CASV ou consulado, se necessário</li>
          <li>Checklist atualizado de documentos exigidos</li>
        </ul>
        <p className="text-lg text-green-700 mt-6 font-semibold">Valor: R$ 119,00</p>
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

