// src/pages/Home.jsx

import React from 'react';
import Hero from '../components/Hero';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const parceiros = [
  {
    nome: 'Túlio Bicicletas',
    descricao: 'Bicicletas, acessórios e manutenção com qualidade.',
    imagem: '/img/parceiros/tulio.png',
    video: '/img/parceiros/video-fundo.mp4',
    link: 'https://tuliobicicletas.helpusa.com.br',
  },
  {
    nome: 'CG Details',
    descricao: 'Limpeza detalhada de carros, apartamentos e casas com excelência.',
    imagem: '/img/parceiros/cgdetails.png',
    video: '/img/parceiros/videocgdetails.webm',
    link: 'https://cgdetails.helpusa.com.br',
  },
  {
    nome: 'Blue Box',
    descricao: 'Lava-jato eficiente para carros e motos com qualidade profissional.',
    imagem: '/img/parceiros/bluebox.png',
    video: '/img/parceiros/videobluebox.webm',
    link: '/parceiros/bluebox',
  },
  {
    nome: 'Public Arte',
    descricao: 'Comunicação Visual criativa e soluções gráficas personalizadas.',
    imagem: '/img/parceiros/logo-publicarte.png',
    video: '/img/parceiros/video-publicarte.mp4',
    link: 'https://publicarte.helpusa.com.br',
  },
];

const Home = () => {
  return (
    <div>
      {/* Hero principal */}
      <Hero />

      {/* Seção de diferenciais */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
            Por que escolher a HelpUS?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Atendimento Personalizado</h3>
              <p>Suporte individual durante todo o processo do seu visto.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Experiência Real</h3>
              <p>Consultores que já passaram por processos semelhantes.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Confiança e Transparência</h3>
              <p>Explicamos tudo com clareza e sem promessas falsas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de parceiros com animação moderna */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-14">
            Nossos Parceiros
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {parceiros.map((parceiro, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl shadow-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Logo animada */}
                <motion.img
                  src={parceiro.imagem}
                  alt={parceiro.nome}
                  className="w-28 h-28 object-contain mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                />

                {/* Vídeo ilustrativo */}
                <video
                  src={parceiro.video}
                  className="rounded-xl mb-4 w-full max-h-52 object-cover shadow-md"
                  autoPlay
                  muted
                  loop
                  playsInline
                />

                <h3 className="text-xl font-bold mb-2 text-blue-800">{parceiro.nome}</h3>
                <p className="text-gray-600 mb-4 text-sm">{parceiro.descricao}</p>

                {parceiro.link.startsWith('http') ? (
                  <a
                    href={parceiro.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full hover:bg-blue-700 transition-all duration-300"
                  >
                    Acessar site <FaExternalLinkAlt />
                  </a>
                ) : (
                  <Link
                    to={parceiro.link}
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full hover:bg-blue-700 transition-all duration-300"
                  >
                    Acessar site <FaExternalLinkAlt />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
