// ITIN.jsx - Página completa com conteúdo
import React from 'react';

export default function ITIN() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">Solicitação de ITIN (Número de Identificação Fiscal para Estrangeiros)</h1>
        <p className="text-lg text-gray-700 mb-4">
          O ITIN (Individual Taxpayer Identification Number) é essencial para estrangeiros que precisam declarar impostos nos EUA, mas não têm direito a um SSN.
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Preenchimento do formulário W-7</li>
          <li>Elaboração de carta explicativa para o IRS</li>
          <li>Checklist dos documentos aceitos (passaporte, certidões)</li>
          <li>Instruções para envio por correio ou validação via ACE</li>
        </ul>
        <p className="text-lg text-green-700 mt-6 font-semibold">Valor: US$ 55,00</p>
        <a
          href="https://wa.me/5583998721848?text=Olá! Tenho interesse no serviço: Solicitação de ITIN"
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

