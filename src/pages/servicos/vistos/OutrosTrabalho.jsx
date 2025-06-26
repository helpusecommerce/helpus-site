// OutrosTrabalho.jsx - Página completa com conteúdo
import React from 'react';

export default function OutrosTrabalho() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">Outros Vistos de Trabalho (H1B, L1, O1, etc.)</h1>
        <p className="text-lg text-gray-700 mb-4">
          Auxiliamos na identificação e preparação de vistos de trabalho específicos, conforme sua área de atuação e perfil profissional:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Orientações sobre vistos H1B (trabalho qualificado)</li>
          <li>Visto L1 (transferência entre empresas)</li>
          <li>Visto O1 (habilidade extraordinária em áreas específicas)</li>
          <li>Petição inicial e análise do sponsor</li>
        </ul>
        <p className="text-lg text-green-700 mt-6 font-semibold">Valor: Sob consulta</p>
        <a
          href="https://wa.me/5583998721848?text=Olá! Tenho interesse no serviço: Vistos de Trabalho H1B/L1/O1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 transition"
        >
          Consultar atendimento via WhatsApp
        </a>
      </div>
    </section>
  );
}
