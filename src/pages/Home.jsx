import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="pt-20 px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Bem-vindo à HelpUS</h2>
      <p className="text-gray-600 mb-8">
        Consultoria completa em vistos, abertura de empresa e documentação fiscal nos EUA.
      </p>

      <div className="flex justify-center gap-4 mb-12">
        <Link
          to="/servicos"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Ver Serviços
        </Link>
        <Link
          to="/contato"
          className="bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300"
        >
          Fale Conosco
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <Link
          to="/vistos"
          className="border rounded-lg p-6 shadow hover:bg-gray-100 transition"
        >
          <h3 className="text-xl font-semibold mb-2">Vistos Americanos</h3>
          <p className="text-gray-600">
            Preparamos toda a documentação para o seu visto B1/B2, F1, F2, EB2, EB1 e mais.
          </p>
        </Link>

        <div className="border rounded-lg p-6 shadow">
          <h3 className="text-xl font-semibold mb-2">Abertura de Empresa</h3>
          <p className="text-gray-600">
            Abrimos sua LLC em qualquer estado dos EUA com o menor custo possível.
          </p>
        </div>

        <div className="border rounded-lg p-6 shadow">
          <h3 className="text-xl font-semibold mb-2">Impostos e Documentação</h3>
          <p className="text-gray-600">
            Preenchimento de Tax Return, obtenção de ITIN, EIN e demais documentos fiscais.
          </p>
        </div>
      </div>
    </div>
  );
}
