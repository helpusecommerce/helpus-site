// 📄 src/pages/servicos/empresa/EnderecoFiscal.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function EnderecoFiscal() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
          Endereço Fiscal nos EUA
        </h1>

        <p className="text-lg text-gray-700 mb-4">
          Oferecemos endereço fiscal válido para registrar sua empresa nos Estados Unidos, 
          essencial para abertura de conta bancária, recebimento de correspondência oficial e registro da LLC:
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-800">📋 O que está incluído:</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
          <li>Endereço válido com número, cidade e estado</li>
          <li>Inclusão do nome da empresa na caixa postal</li>
          <li>Encaminhamento digital dos documentos recebidos</li>
          <li>Contrato de cessão emitido em PDF</li>
        </ul>

        <div className="text-lg font-semibold text-green-700 mb-8">
          💵 Valor do serviço HelpUS: <span className="text-2xl text-green-800">$29</span>
        </div>

        <a
          href="https://wa.me/5583998721848?text=Olá,%20tenho%20interesse%20no%20serviço%20de%20Endereço%20Fiscal%20nos%20EUA"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-md transition"
        >
          <FaWhatsapp className="text-xl" />
          Falar com a HelpUS
        </a>
      </div>
    </section>
  );
}
