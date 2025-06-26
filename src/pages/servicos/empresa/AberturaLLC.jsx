// AberturaLLC.jsx - Página completa com conteúdo
import React from 'react';

export default function AberturaLLC() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">Abertura de Empresa (LLC) + Obtenção de EIN</h1>
        <p className="text-lg text-gray-700 mb-4">
          Cuidamos de todo o processo de abertura da sua LLC nos Estados Unidos, com emissão do EIN (Número de Identificação Federal):
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Consulta de nome disponível e registro oficial</li>
          <li>Preenchimento de formulários de abertura junto ao estado</li>
          <li>Geração do EIN diretamente com o IRS</li>
          <li>Entrega dos documentos digitais prontos para uso</li>
        </ul>
        <p className="text-lg text-green-700 mt-6 font-semibold">Valor: US$ 79,00</p>
        <a
          href="https://wa.me/5583998721848?text=Olá! Tenho interesse no serviço: Abertura de Empresa LLC + EIN nos EUA"
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
