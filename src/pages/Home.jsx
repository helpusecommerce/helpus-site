import React from 'react';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div>
      <Hero />
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
    </div>
  );
};

export default Home;
