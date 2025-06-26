// F2.jsx - Visto para Dependentes de Estudante
import React from 'react';

export default function F2() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">Visto F2 – Dependente de Estudante</h1>
        <p className="text-lg text-gray-700 mb-4">
          O visto F2 é voltado para os dependentes (cônjuges e filhos) de portadores do visto F1, permitindo que os acompanhem durante seus estudos nos Estados Unidos.
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Preparação e preenchimento do DS-160</li>
          <li>Documentação de vínculo com o titular do F1</li>
          <li>Agendamento no consulado e orientações específicas</li>
        </ul>
        <p className="text-lg text-green-700 mt-6 font-semibold">
          Valor: US$ 49.00 – Suporte completo para cônjuges e filhos.
        </p>
        <a
          href="https://wa.me/5583998721848?text=Olá! Tenho interesse no serviço: Visto F2 – Dependente de Estudante"
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

