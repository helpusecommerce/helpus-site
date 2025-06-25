import React from "react";
import { Link } from "react-router-dom";

export default function B1B2() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">Visto de Turista (B1/B2)</h1>

      <p className="mb-6 text-gray-700">
        Oferecemos consultoria completa para o visto de turista americano B1/B2, incluindo orientação sobre documentos, preenchimento do formulário DS-160, agendamento da entrevista e preparação para a entrevista consular.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Etapas do Processo</h2>
      <ol className="list-decimal list-inside text-gray-700 mb-6">
        <li>Reunião inicial de triagem (online ou WhatsApp)</li>
        <li>Preenchimento e envio do DS-160</li>
        <li>Agendamento da entrevista no consulado</li>
        <li>Preparação com simulação de entrevista</li>
        <li>Acompanhamento até o recebimento do visto</li>
      </ol>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Preço</h2>
      <p className="mb-6 text-gray-700">
        <strong>Valor promocional:</strong> R$ 49,00 <br />
        (serviço de consultoria completa, sem incluir taxas consulares)
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Perguntas Frequentes</h2>
      <div className="mb-6">
        <p className="font-semibold">Quanto tempo demora o processo?</p>
        <p className="text-gray-700 mb-4">Depende da disponibilidade do consulado. Em média, entre 30 e 60 dias.</p>

        <p className="font-semibold">Vocês fazem o agendamento?</p>
        <p className="text-gray-700 mb-4">Sim, cuidamos de todo o processo, inclusive do agendamento da entrevista.</p>

        <p className="font-semibold">Preciso traduzir meus documentos?</p>
        <p className="text-gray-700">Não, o processo de visto B1/B2 não exige tradução juramentada na maioria dos casos.</p>
      </div>

      <div className="flex gap-4 mt-8">
        <Link
          to="/contato"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded"
        >
          Fale Conosco
        </Link>
        <Link
          to="/servicos"
          className="border border-gray-400 text-gray-700 px-6 py-2 rounded"
        >
          Voltar aos Serviços
        </Link>
      </div>
    </div>
  );
}
