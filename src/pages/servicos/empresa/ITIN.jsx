// 📄 src/pages/servicos/fiscal/ITIN.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function ITIN() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
          Solicitação de ITIN (Número de Identificação Fiscal para Estrangeiros)
        </h1>

        <p className="text-lg text-gray-700 mb-4">
          O <strong>ITIN (Individual Taxpayer Identification Number)</strong> é essencial para estrangeiros que 
          precisam declarar impostos nos EUA, mas não possuem direito a um SSN (Social Security Number).
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-800">📋 O que está incluído:</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
          <li>Preenchimento completo do formulário oficial W-7</li>
          <li>Elaboração de carta explicativa personalizada para o IRS</li>
          <li>Checklist atualizado dos documentos aceitos (passaporte, certidões, etc.)</li>
          <li>Instruções detalhadas para envio por correio ou validação via ACE</li>
        </ul>

        <div className="text-lg font-semibold text-green-700 mb-8">
          💵 Valor do serviço HelpUS: <span className="text-2xl text-green-800">$55</span>
        </div>

        <a
          href="https://wa.me/5583998721848?text=Olá,%20tenho%20interesse%20no%20serviço%20de%20Solicitação%20de%20ITIN"
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
