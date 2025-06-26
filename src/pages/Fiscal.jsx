// Fiscal.jsx (corrigido com href interpolado)
import React from 'react';

const fiscal = [
  {
    nome: 'Declaração de Imposto (Pessoa Física)',
    preco: 'R$ 199,00',
    descricao: 'Preenchimento completo do formulário 1040 com deduções e anexos.'
  },
  {
    nome: 'Schedule C + SE para autônomos',
    preco: 'R$ 149,00',
    descricao: 'Relatórios detalhados com lucro líquido, deduções e impostos de autônomo.'
  },
  {
    nome: 'Declaração com dependente (Child Tax Credit)',
    preco: 'R$ 99,00',
    descricao: 'Inclusão de dependente para benefício de até $2.000 por criança qualificada.'
  },
  {
    nome: 'Relatórios e documentos fiscais diversos',
    preco: 'Sob consulta',
    descricao: 'Preparamos qualquer outro documento fiscal sob demanda.'
  }
];

export default function Fiscal() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">
          Serviços Fiscais e Tributários
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {fiscal.map((item, i) => (
            <div
              key={i}
              className="border rounded-lg shadow p-6 bg-gray-50 hover:shadow-lg transition flex flex-col justify-between"
              data-aos="fade-up"
            >
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-2">{item.nome}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.descricao}</p>
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <p className="text-blue-600 font-bold">{item.preco}</p>
                <a
                  href={`https://wa.me/5583998721848?text=Olá! Tenho interesse no serviço: ${encodeURIComponent(item.nome)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-center bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
                >
                  Contratar agora via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <img src="/selo-confiança.png" alt="Selo de confiança" className="mx-auto w-40" />
          <p className="text-sm text-gray-500 mt-2">
            Atendimento seguro, discreto e aprovado por clientes reais.
          </p>
        </div>
      </div>
    </section>
  );
}

