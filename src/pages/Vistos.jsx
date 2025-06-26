// Vistos.jsx (com links clicáveis para cada tipo de visto)
import React from 'react';
import { Link } from 'react-router-dom';

const vistos = [
  {
    nome: 'Visto de Turista (B1/B2)',
    preco: 'R$ 149,00',
    descricao: 'Preenchimento do formulário DS-160, orientações de documentos e agendamento.',
    rota: '/vistos/B1B2'
  },
  {
    nome: 'Visto de Estudante (F1/F2)',
    preco: 'R$ 199,00',
    descricao: 'Formulários, agendamento, SEVIS, DS-160 e orientações personalizadas.',
    rota: '/vistos/F1'
  },
  {
    nome: 'Visto de Trabalho (EB1A, EB2-NIW, H1B)',
    preco: 'R$ 349,00',
    descricao: 'Análise de perfil, preenchimento de petições, orientações e estratégia de aplicação.',
    rota: '/vistos/EB2NIW'
  },
  {
    nome: 'Renovação de Visto',
    preco: 'R$ 119,00',
    descricao: 'Atualização de dados, novo DS-160 e agendamento se necessário.',
    rota: '/vistos/Renovacao'
  },
  {
    nome: 'Visto Familiar (pais, cônjuges, filhos)',
    preco: 'R$ 139,00',
    descricao: 'Vistos para membros da família acompanhando titular ou aplicando separadamente.',
    rota: '/vistos/Familia'
  },
  {
    nome: 'Casos Especiais (waiver, deportação, extensões)',
    preco: 'Sob consulta',
    descricao: 'Consultoria especializada para casos fora do padrão.',
    rota: '/vistos/casos-especiais'
  },
  {
    nome: 'Documentos Complementares',
    preco: 'Sob consulta',
    descricao: 'I-134, cartas de suporte, declarações, formulários auxiliares.',
    rota: '/vistos/Complementares'
  }
];

export default function Vistos() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Consultoria para Vistos Americanos
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {vistos.map((item, index) => (
            <div
              key={index}
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
