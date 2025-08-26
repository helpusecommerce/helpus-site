// 📄 src/pages/servicos/vistos/EB2NIW.jsx
import React from 'react';

export default function EB2NIW() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">
          Visto EB2-NIW – Dispensa de Oferta de Trabalho
        </h1>

        <p className="text-lg text-gray-700 mb-4">
          O visto <strong>EB2-NIW</strong> é destinado a profissionais qualificados que desejam imigrar
          para os EUA com base em seu mérito profissional, sem a necessidade de uma oferta de trabalho direta,
          desde que comprovem benefício substancial ao interesse nacional americano.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-800">📋 O que está incluído:</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Análise detalhada de elegibilidade com base no seu currículo</li>
          <li>Preenchimento do formulário <strong>I-140</strong> e elaboração da carta de interesse nacional</li>
          <li>Organização da documentação de diplomas, experiência e impacto</li>
          <li>Orientações para obtenção do <strong>Green Card</strong> via ajuste de status ou processo consular</li>
        </ul>

        <div className="text-lg text-green-700 mt-6 font-semibold">
          💵 Valor do serviço HelpUS: <span className="text-2xl text-green-800">US$ 69,00</span> – suporte completo até o envio do I-140.
        </div>

        <a
          href="https://wa.me/5583998721848?text=Olá! Tenho interesse no serviço: Visto EB2-NIW"
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
