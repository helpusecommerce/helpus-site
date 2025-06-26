// Empresa.jsx (com preços em dólar)
import React from 'react';
import { Link } from 'react-router-dom';

const servicos = [
  {
    nome: 'Abertura de LLC + EIN',
    descricao: 'Registro completo da sua empresa nos EUA, incluindo número fiscal.',
    rota: '/servicos/empresa/abertura',
    preco: '$79.00'
  },
  {
    nome: 'Endereço Fiscal nos EUA',
    descricao: 'Serviço de endereço para recebimento de correspondência oficial.',
    rota: '/servicos/empresa/endereco-fiscal',
    preco: '$35.00'
  },
  {
    nome: 'Operating Agreement',
    descricao: 'Contrato de operação para LLC, essencial para abrir conta bancária.',
    rota: '/servicos/empresa/operating-agreement',
    preco: '$25.00'
  },
  {
    nome: 'ITIN (para estrangeiros sem SSN)',
    descricao: 'Solicitação completa de ITIN para sócios ou investidores.',
    rota: '/servicos/empresa/itin',
    preco: '$59.00'
  },
  {
    nome: 'Formulário W-7',
    descricao: 'Preenchimento do W-7 e carta explicativa para ITIN.',
    rota: '/servicos/empresa/w7',
    preco: '$29.00'
  }
];

export default function Empresa() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Serviços para Abertura de Empresa
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {servicos.map((item, i) => (
            <div
              key={i}
              className="border rounded-lg shadow p-6 bg-gray-50 hover:shadow-lg transition flex flex-col justify-between"
              data-aos="fade-up"
            >
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  <Link to={item.rota} className="hover:underline">{item.nome}</Link>
                </h3>
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
