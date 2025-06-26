// Empresa.jsx (com botão WhatsApp e selo de confiança)
import React from 'react';

const empresa = [
  {
    nome: 'Abertura de LLC + EIN',
    preco: 'R$ 399,00',
    descricao: 'Registro completo da empresa com nome desejado e obtenção do EIN.'
  },
  {
    nome: 'ITIN (para estrangeiros sem SSN)',
    preco: 'R$ 299,00',
    descricao: 'Preenchimento do W-7, carta explicativa e suporte até emissão.'
  },
  {
    nome: 'Endereço Fiscal nos EUA',
    preco: 'R$ 149,00',
    descricao: 'Endereço válido para uso em LLCs, com redirecionamento de correspondência.'
  },
  {
    nome: 'Operating Agreement personalizado',
    preco: 'R$ 129,00',
    descricao: 'Contrato de operação com cláusulas adaptadas à sua realidade.'
  }
];

export default function Empresa() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">
          Serviços para Abertura de Empresa
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {empresa.map((item, i) => (
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

