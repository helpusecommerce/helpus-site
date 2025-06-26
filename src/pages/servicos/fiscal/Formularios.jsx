// Formularios.jsx – Página completa com conteúdo revisado
import React from 'react';

export default function Formularios() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">
          Formulários Fiscais e Anexos Específicos
        </h1>

        <p className="text-lg text-gray-700 mb-4">
          Caso você precise de formulários fiscais adicionais ou documentos específicos para comprovação de renda, dependência ou investimentos, nós preparamos tudo para você:
        </p>

        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Formulários auxiliares (W-2, 1099, 8962, 8862, entre outros)</li>
          <li>Composição de anexos específicos para créditos e deduções</li>
          <li>Correções e retificações de formulários já enviados</li>
          <li>Suporte personalizado sob demanda</li>
        </ul>

        <p className="text-lg text-green-700 mt-6 font-semibold">Valor: Sob consulta</p>

        <a
          href="https://wa.me/5583998721848?text=Olá! Tenho interesse no serviço: Formulários Fiscais e Anexos Específicos"
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
