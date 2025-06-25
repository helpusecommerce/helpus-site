import React from 'react';

const servicos = [
  {
    titulo: 'Visto de Turista (B1/B2)',
    descricao: 'Acompanhamos todo o processo do visto de turismo e negócios, incluindo preenchimento do DS-160 e agendamento.',
    icone: '🧳',
  },
  {
    titulo: 'Visto de Estudante (F1/F2)',
    descricao: 'Orientamos a obtenção do I-20, DS-160, agendamento, e dicas importantes para o visto de estudante e dependentes.',
    icone: '🎓',
  },
  {
    titulo: 'Green Card por Trabalho (EB-2/NIW)',
    descricao: 'Elaboração e envio da petição para obtenção de residência permanente nos EUA com ou sem oferta de trabalho.',
    icone: '🛂',
  },
  {
    titulo: 'Autorização de Trabalho (EAD)',
    descricao: 'Solicitação de permissão de trabalho (EAD) junto ao USCIS, incluindo formulários e acompanhamento completo.',
    icone: '💼',
  },
  {
    titulo: 'Advance Parole (Permissão de Viagem)',
    descricao: 'Permissão de reentrada nos EUA enquanto o processo de ajuste de status está em andamento.',
    icone: '✈️',
  },
  {
    titulo: 'Renovação de Visto',
    descricao: 'Acompanhamento completo para quem deseja renovar seu visto americano, inclusive sem entrevista (Dropbox).',
    icone: '♻️',
  },
];

const Servicos = () => {
  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-blue-700">
          Nossos Serviços
        </h1>
        <p className="text-center text-lg text-gray-600 mb-12">
          Atendimento completo para todos os tipos de vistos e processos imigratórios.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicos.map((servico, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
            >
              <div className="text-4xl mb-4">{servico.icone}</div>
              <h2 className="text-xl font-semibold mb-2 text-blue-800">
                {servico.titulo}
              </h2>
              <p className="text-gray-600">{servico.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicos;
