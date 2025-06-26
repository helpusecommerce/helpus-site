// Hero.jsx (com scroll, digitação e entrada animada)
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowDown } from 'react-icons/fa';

export default function Hero() {
  const scrollToServicos = () => {
    const section = document.getElementById('servicos');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  const mensagens = [
    'Transformamos sua Jornada para os EUA',
    'Vistos, Empresas e Impostos com confiança',
    'Apoio completo para viver e empreender nos EUA'
  ];

  const [texto, setTexto] = useState('');
  const [indice, setIndice] = useState(0);
  const [letra, setLetra] = useState(0);

  useEffect(() => {
    const escrever = setTimeout(() => {
      if (letra < mensagens[indice].length) {
        setTexto((prev) => prev + mensagens[indice][letra]);
        setLetra((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setTexto('');
          setLetra(0);
          setIndice((prev) => (prev + 1) % mensagens.length);
        }, 2000);
      }
    }, 80);
    return () => clearTimeout(escrever);
  }, [letra, indice]);

  return (
    <section
      className="min-h-screen bg-cover bg-center text-white flex items-center justify-center px-4 relative"
      style={{ backgroundImage: 'url(/bg-hero.jpg)' }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative text-center max-w-2xl z-10" data-aos="fade-in">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight min-h-[4rem]">
          {texto}<span className="animate-pulse">|</span>
        </h1>
        <p className="text-lg text-gray-200 mb-6" data-aos="fade-up">
          Atendimento completo e confiável, onde você estiver.
        </p>
        <button
          onClick={scrollToServicos}
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
        >
          Conheça nossos serviços <FaArrowDown />
        </button>
      </div>
    </section>
  );
}
