// Envio.jsx - Página completa com conteúdo e ajustes finais
import React from 'react';

export default function Envio() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">Envio de Documentos Fiscais e Suporte</h1>

        <p className="text-lg text-gray-700 mb-4">
          Após a preparação da sua declaração ou formulário, fornecemos orientações completas sobre o envio correto e garantimos suporte contínuo:
        </p>

        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Instruções para envio por correio (IRS, ITIN, entre outros)</li>
          <li>Checklist com os documentos necessários</li>
          <li>Etiqueta de envio e instruções completas em português</li>
          <li>Suporte para acompanhar o recebimento e resposta do IRS</li>
        </ul>

        <p className="text-lg text-green-700 mt-6 font-semibold">Valor: Incluso nos serviços principais</p>

        <a
          href="https://wa.me/5583998721848?text=Olá! Tenho interesse no serviço: Envio de Documentos Fiscais"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 transition"
        >
          Entrar em contato pelo WhatsApp
        </a>
      </div>
    </section>
  );
}
