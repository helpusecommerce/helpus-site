// src/pages/vistos/Vistos.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Vistos() {
  return (
    <div className="pt-20 px-4 text-center">
      <h2 className="text-2xl font-bold mb-6">Nossos Serviços de Visto</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <Link to="/vistos/b1b2" className="border rounded-lg p-6 shadow hover:bg-gray-100">
          <h3 className="text-lg font-semibold mb-2">Visto de Turista (B1/B2)</h3>
          <p className="text-gray-600">Consultoria completa com DS-160 e simulação de entrevista.</p>
        </Link>

        <Link to="/vistos/f1" className="border rounded-lg p-6 shadow hover:bg-gray-100">
          <h3 className="text-lg font-semibold mb-2">Visto de Estudante (F1)</h3>
          <p className="text-gray-600">Suporte no I-20, DS-160 e preparação para entrevista.</p>
        </Link>

        <Link to="/vistos/f2" className="border rounded-lg p-6 shadow hover:bg-gray-100">
          <h3 className="text-lg font-semibold mb-2">Visto de Dependente (F2)</h3>
          <p className="text-gray-600">Consultoria completa para cônjuges e filhos de estudantes.</p>
        </Link>

        {/* Adicione os outros como EB1A, EB2NIW, Família, etc. */}
      </div>
    </div>
  );
}
