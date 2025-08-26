// 📄 src/pages/servicos/fiscal/Envio.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Envio() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
          Envio de Documentos Fiscais e Suporte
        </h1>

        <p className="text-lg text-gray-700 mb-4">
          Após a preparação da sua declaração ou formulário, fornecemos{' '}
          <strong>orientações completas</strong> sobre o envio correto e garantimos suporte contínuo
          até a confirmação do IRS.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-800">📋 O que está incluído:</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
          <li>Instruções detalhadas para envio por correio (IRS, ITIN e outros)</li>
          <li>Checklist com os documentos necessários</li>
          <li>Etiqueta de envio personalizada e instruções em português</li>
          <li>Suporte para acompanhar o recebimento e resposta do IRS</li>
        </ul>

        <div className="text-lg font-semibold text-green-700 mb-8">
          💵 Valor: <span className="text-2xl text-green-800">Incluso nos serviços principais</span>
        </div>

        <a
          href="https://wa.me/5583998721848?text=Olá,%20tenho%20interesse%20no%20serviço:%20Envio%20de%20Documentos%20Fiscais"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-md transition"
        >
          <FaWhatsapp className="text-xl" />
          Entrar em contato pelo WhatsApp
        </a>
      </div>
    </section>
  );
}
