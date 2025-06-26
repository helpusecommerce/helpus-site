// Exemplo: EB2NIW.jsx - Página completa com conteúdo
import React from 'react';

export default function EB2NIW() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">Visto EB2-NIW (Trabalho com Dispensa de Oferta)</h1>
        <p className="text-lg text-gray-700 mb-4">
          O EB2-NIW é ideal para profissionais qualificados que desejam imigrar para os EUA com base em mérito profissional, sem a necessidade de oferta de trabalho direta.
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Análise de elegibilidade com base no seu currículo</li>
          <li>Preenchimento do formulário I-140 e carta de interesse nacional</li>
          <li>Documentação de diplomas, experiência e impacto</li>
          <li>Orientações para green card via ajuste ou consular</li>
        </ul>
        <p className="text-lg text-green-700 mt-6 font-semibold">
          Valor: US$ 69.00 – Suporte completo até envio do I-140.
        </p>
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
