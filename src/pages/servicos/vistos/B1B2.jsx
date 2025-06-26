// B1B2.jsx - Visto de Turista e Negócios
import React from 'react';

export default function B1B2() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">Visto B1/B2 – Turista e Negócios</h1>
        <p className="text-lg text-gray-700 mb-4">
          O visto B1/B2 é indicado para viagens temporárias aos Estados Unidos a turismo, negócios ou visitas a familiares e amigos.
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Preenchimento do DS-160</li>
          <li>Preparação dos documentos de apoio</li>
          <li>Agendamento e instruções para entrevista</li>
        </ul>
        <p className="text-lg text-green-700 mt-6 font-semibold">
          Valor: US$ 45.00 – Ideal para sua primeira solicitação ou renovação.
        </p>
        <a
          href="https://wa.me/5583998721848?text=Olá! Tenho interesse no serviço: Visto B1/B2 – Turista e Negócios"
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
