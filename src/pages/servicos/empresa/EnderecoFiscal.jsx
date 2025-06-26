// EnderecoFiscal.jsx - Página completa com conteúdo
import React from 'react';

export default function EnderecoFiscal() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">Endereço Fiscal nos EUA</h1>
        <p className="text-lg text-gray-700 mb-4">
          Oferecemos endereço fiscal válido para registrar sua empresa nos Estados Unidos, essencial para abertura de conta, recebimento de correspondência oficial e registro da LLC:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Endereço válido com número, cidade e estado</li>
          <li>Incluso nome da empresa na caixa postal</li>
          <li>Encaminhamento digital de documentos recebidos</li>
          <li>Contrato de cessão emitido em PDF</li>
        </ul>
        <p className="text-lg text-green-700 mt-6 font-semibold">Valor: US$ 29,00</p>
        <a
          href="https://wa.me/5583998721848?text=Olá! Tenho interesse no serviço: Endereço Fiscal nos EUA"
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
