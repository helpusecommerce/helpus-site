import React from 'react';
import { Link } from 'react-router-dom';
import { FaPassport, FaBuilding, FaFileInvoiceDollar, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-white text-center px-4">

      {/* Vídeo de fundo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/Miami.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos HTML5.
      </video>

      {/* Camada escura para melhor contraste */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 z-10" />

      {/* Conteúdo sobreposto */}
      <div className="relative z-20 max-w-5xl mx-auto">

        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Soluções completas para viver,<br /> empreender e declarar nos EUA
        </motion.h1>

        <motion.p
          className="text-lg text-white mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Consultoria especializada em vistos, abertura de empresas e documentação fiscal americana – tudo em português.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            to="/servicos/vistos"
            className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded transition text-sm md:text-base"
          >
            <FaPassport /> Vistos Americanos
          </Link>
          <Link
            to="/servicos/empresa"
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded transition text-sm md:text-base"
          >
            <FaBuilding /> Abertura de Empresa
          </Link>
          <Link
            to="/servicos/fiscal"
            className="flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded transition text-sm md:text-base"
          >
            <FaFileInvoiceDollar /> Impostos e Documentos
          </Link>
        </motion.div>
      </div>

      {/* Botão flutuante do WhatsApp */}
      <a
        href="https://wa.me/15551234567" // <-- Substitua pelo seu número com DDI
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg animate-bounce"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </section>
  );
}
