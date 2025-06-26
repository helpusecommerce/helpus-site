// src/pages/Servicos.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaPassport, FaBuilding, FaFileAlt } from 'react-icons/fa';

export default function Servicos() {
  const servicos = [
    {
      titulo: 'Consultoria para Vistos',
      descricao: 'Especialistas em vistos de turista, estudante, trabalho e green card.',
      icone: <FaPassport className="text-4xl text-blue-500 transition-transform hover:scale-110 duration-300" />,
      link: '/servicos/vistos'
    },
    {
      titulo: 'Abertura de Empresas',
      descricao: 'LLC nos EUA com suporte completo, mesmo para estrangeiros.',
      icone: <FaBuilding className="text-4xl text-blue-500 transition-transform hover:scale-110 duration-300" />,
      link: '/servicos/empresa'
    },
    {
      titulo: 'Documentação Fiscal',
      descricao: 'ITIN, EIN, declarações e suporte contábil com foco no imigrante.',
      icone: <FaFileAlt className="text-4xl text-blue-500 transition-transform hover:scale-110 duration-300" />,
      link: '/servicos/fiscal'
    }
  ];

  return (
    <section id="servicos" className="py-20 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-gray-800" data-aos="fade-down">Nossos Serviços</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {servicos.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300"
            >
              <div className="mb-4">{item.icone}</div>
              <h3 className="text-xl font-semibold mb-2">{item.titulo}</h3>
              <p className="text-gray-600 text-sm">{item.descricao}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
