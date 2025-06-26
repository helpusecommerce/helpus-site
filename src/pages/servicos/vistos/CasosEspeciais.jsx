// CasosEspeciais.jsx - Página completa com conteúdo
import React from 'react';

export default function CasosEspeciais() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">Casos Especiais (Waiver, Deportação, Extensões)</h1>
        <p className="text-lg text-gray-700 mb-4">
          Atuamos em casos fora do padrão que exigem cuidado jurídico e estratégia específica:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Pedidos de perdão (waiver) por vistos negados ou presença ilegal</li>
          <li>Solicitação de extensão ou mudança de status</li>
          <li>Acompanhamento de casos de deportação ou inadmissibilidade</li>
          <li>Consultas personalizadas com abordagem realista</li>
        </ul>
        <p className="text-lg text-green-700 mt-6 font-semibold">Valor: Sob consulta</p>
        <a
          href="https://wa.me/5583998721848?text=Olá! Tenho interesse no serviço: Casos Especiais (waiver, deportação, etc.)"
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
