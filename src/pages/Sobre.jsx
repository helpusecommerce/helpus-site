// Sobre.jsx
import React from 'react';

export default function Sobre() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">Sobre a HelpUS</h2>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          A HelpUS nasceu com a missão de facilitar o acesso a serviços essenciais para quem deseja viver,
          empreender ou investir nos Estados Unidos. Somos especialistas em consultoria para vistos,
          abertura de empresas e documentação fiscal, com atendimento humanizado e focado em resultados.
        </p>
        <div className="grid md:grid-cols-3 gap-6 text-left mt-10">
          <div data-aos="fade-right" className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Experiência</h3>
            <p className="text-gray-600 text-sm">
              Mais de 10 anos de atuação ajudando brasileiros a conquistarem seus objetivos nos EUA.
            </p>
          </div>
          <div data-aos="fade-up" className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Atendimento Personalizado</h3>
            <p className="text-gray-600 text-sm">
              Cada caso é único. Oferecemos soluções completas com base no seu perfil e necessidade.
            </p>
          </div>
          <div data-aos="fade-left" className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Compromisso</h3>
            <p className="text-gray-600 text-sm">
              Ética, transparência e dedicação total ao sucesso da sua jornada internacional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
