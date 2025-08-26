// 📄 src/pages/servicos/fiscal/Formularios.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Formularios() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
          Formulários Fiscais e Anexos Específicos
        </h1>

        <p className="text-lg text-gray-700 mb-4">
          Caso você precise de <strong>formulários fiscais adicionais</strong> ou documentos
          específicos para comprovação de renda, dependência ou investimentos, nós preparamos tudo
          de forma completa e personalizada:
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-800">📋 O que está incluído:</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
          <li>Formulários auxiliares (W-2, 1099, 8962, 8862, entre outros)</li>
          <li>Montagem de anexos específicos para créditos e deduções</li>
          <li>Correções e retificações de formulários já enviados</li>
          <li>Suporte sob demanda para casos especiais</li>
        </ul>

        <div className="text-lg font-semibold text-green-700 mb-8">
          💵 Valor: <span className="text-2xl text-green-800">Sob consulta</span>
        </div>

        <a
          href="https://wa.me/5583998721848?text=Olá,%20tenho%20interesse%20no%20serviço:%20Formulários%20Fiscais%20e%20Anexos%20Específicos"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-md transition"
        >
          <FaWhatsapp className="text-xl" />
          Solicitar agora via WhatsApp
        </a>
      </div>
    </section>
  );
}
