// 📄 src/pages/servicos/empresa/OperatingAgreement.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function OperatingAgreement() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
          Operating Agreement Personalizado
        </h1>

        <p className="text-lg text-gray-700 mb-4">
          Elaboramos um <strong>Operating Agreement</strong> (Contrato de Operação) 
          personalizado para sua LLC, documento indispensável para abrir conta bancária, 
          obter licenças e manter sua empresa regularizada nos Estados Unidos.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-800">📋 O que está incluído:</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
          <li>Contrato jurídico adaptado à sua realidade empresarial</li>
          <li>Cláusulas sobre sócios, divisão de lucros e responsabilidades</li>
          <li>Versão em inglês para uso oficial + tradução explicativa em português</li>
          <li>Envio digital em PDF pronto para utilização imediata</li>
        </ul>

        <div className="text-lg font-semibold text-green-700 mb-8">
          💵 Valor do serviço HelpUS: <span className="text-2xl text-green-800">$25</span>
        </div>

        <a
          href="https://wa.me/5583998721848?text=Olá,%20tenho%20interesse%20no%20serviço%20de%20Operating%20Agreement%20Personalizado"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-md transition"
        >
          <FaWhatsapp className="text-xl" />
          Solicitar via WhatsApp
        </a>
      </div>
    </section>
  );
}
