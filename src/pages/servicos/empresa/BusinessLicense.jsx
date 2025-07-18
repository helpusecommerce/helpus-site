// src/pages/servicos/empresa/BusinessLicense.jsx

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const BusinessLicense = () => {
  return (
    <div className="max-w-5xl mx-auto py-16 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
        Obtenção da Licença Comercial nos EUA (Business License)
      </h1>

      <p className="mb-4 text-lg">
        A HelpUS oferece suporte completo para você obter sua licença comercial em qualquer estado dos Estados Unidos, de forma rápida e personalizada conforme as exigências locais.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-800">📋 O que está incluído:</h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>Preenchimento do formulário oficial do estado ou condado de atuação;</li>
        <li>Pesquisa do código de licença adequado à sua atividade (ex: 84 – Contractor);</li>
        <li>PDF final preenchido e pronto para envio ou protocolo;</li>
        <li>Instruções claras sobre taxas e forma correta de envio/envio online;</li>
        <li>Suporte via WhatsApp ou e-mail até a emissão da licença.</li>
      </ul>

      <div className="text-lg font-semibold text-green-700 mb-8">
        💵 Valor do serviço HelpUS: <span className="text-2xl text-green-800">$49</span>
      </div>

      <a
        href="https://wa.me/5583998721848?text=Olá,%20desejo%20ajuda%20para%20obter%20minha%20Business%20License%20nos%20EUA."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-md transition"
      >
        <FaWhatsapp className="text-xl" />
        Falar com a HelpUS
      </a>
    </div>
  );
};

export default BusinessLicense;
