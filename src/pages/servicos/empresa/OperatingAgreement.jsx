// OperatingAgreement.jsx - Página completa com conteúdo
import React from 'react';

export default function OperatingAgreement() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">Operating Agreement Personalizado</h1>
        <p className="text-lg text-gray-700 mb-4">
          Criamos um contrato de operação (Operating Agreement) adaptado à sua realidade, essencial para abrir conta bancária, obter licenças ou declarar corretamente sua LLC:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Documento jurídico customizado para sua LLC</li>
          <li>Inclui cláusulas sobre sócios, divisão de lucros e poderes</li>
          <li>Versão em inglês para uso oficial e tradução explicativa</li>
          <li>Envio digital em PDF pronto para uso</li>
        </ul>
        <p className="text-lg text-green-700 mt-6 font-semibold">Valor: US$ 25,00</p>
        <a
          href="https://wa.me/5583998721848?text=Olá! Tenho interesse no serviço: Operating Agreement Personalizado"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 transition"
        >
          Solicitar agora via WhatsApp
        </a>
      </div>
    </section>
  );
}
