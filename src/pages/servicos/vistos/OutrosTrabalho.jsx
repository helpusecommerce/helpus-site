// 📄 src/pages/servicos/vistos/OutrosTrabalho.jsx
import React from 'react';

export default function OutrosTrabalho() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">
          Outros Vistos de Trabalho (H1B, L1, O1, etc.)
        </h1>

        <p className="text-lg text-gray-700 mb-4">
          Oferecemos consultoria personalizada para auxiliar na escolha e preparação de vistos de trabalho específicos,
          de acordo com seu perfil profissional e área de atuação.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-800">📋 O que está incluído:</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Orientações sobre <strong>H1B</strong> (trabalho qualificado com sponsor nos EUA)</li>
          <li>Apoio no processo de <strong>L1</strong> (transferência de executivos e gerentes entre empresas)</li>
          <li>Consultoria em <strong>O1</strong> (habilidade extraordinária em ciência, arte, educação ou esportes)</li>
          <li>Análise de sponsor, elegibilidade e documentação exigida</li>
          <li>Preparação da petição inicial com checklist personalizado</li>
        </ul>

        <div className="text-lg text-green-700 mt-6 font-semibold">
          💵 Valor do serviço HelpUS: <span className="text-2xl text-green-800">Sob consulta</span>
        </div>

        <a
          href="https://wa.me/5583998721848?text=Olá! Tenho interesse no serviço: Vistos de Trabalho H1B, L1 ou O1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 transition"
        >
          Consultar atendimento via WhatsApp
        </a>
      </div>
    </section>
  );
}
