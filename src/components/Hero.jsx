import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[85vh] flex items-center justify-center"
      style={{
        backgroundImage: "url('/img/bg-visto.jpg')", // coloque uma imagem adequada na pasta public/img/
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
          Especialistas em Vistos Americanos
        </h1>
        <p className="text-lg md:text-xl text-white mb-8">
          Consultoria completa para você, sua família ou empresa.
        </p>
        <Link
          to="/servicos"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-300"
        >
          Conheça nossos serviços
        </Link>
      </div>
    </section>
  );
};

export default Hero;
