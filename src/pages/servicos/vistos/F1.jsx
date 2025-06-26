// F1.jsx - Visto de Estudante
import React from 'react';

export default function F1() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">Visto F1 – Estudante</h1>
        <p className="text-lg text-gray-700 mb-4">
          O visto F1 é destinado a estudantes estrangeiros que desejam frequentar uma instituição acadêmica nos Estados Unidos, como universidade, escola de inglês ou seminário.
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Orientação e checklist de documentos exigidos</li>
          <li>Preenchimento completo do formulário DS-160</li>
          <li>Pagamento e geração do SEVIS</li>
          <li>Agendamento da entrevista no consulado</li>
        </ul>
        <p className="text-lg text-green-700 mt-6 font-semibold">
          Valor: US$ 59.00 – Serviço completo para estudantes.
        </p>
        <a
          href="https://wa.me/5583998721848?text=Olá! Tenho interesse no serviço: Visto F1 – Estudante"
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

