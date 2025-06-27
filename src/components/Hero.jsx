import React from 'react';
import { Link } from 'react-router-dom';
import { FaPassport, FaBuilding, FaFileInvoiceDollar, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center text-white text-center px-4 sm:px-6 lg:px-8">

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

      {/* Camada escura para contraste */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 z-10" />

      {/* Conteúdo */}
      <div className="relative z-20 w-full max-w-4xl mx-auto py-10 sm:py-20 px-4">

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Soluções completas para viver, <br className="hidden sm:inline" /> empreender e declarar nos EUA
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl mb-8 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Consultoria especializada em vistos, abertura de empresas e documentação fiscal americana – tudo em português.
        </motion.p>

        <motion.div
          className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            to="/servicos/vistos"
            className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded text-sm sm:text-base"
          >
            <FaPassport /> Vistos Americanos
          </Link>
          <Link
            to="/servicos/empresa"
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded text-sm sm:text-base"
          >
            <FaBuilding /> Abertura de Empresa
          </Link>
          <Link
            to="/servicos/fiscal"
            className="flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded text-sm sm:text-base"
          >
            <FaFileInvoiceDollar /> Impostos e Documentos
          </Link>
        </motion.div>
      </div>

      {/* Botão flutuante WhatsApp */}
      <a
        href="https://wa.me/15551234567"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg animate-bounce"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </section>
  );
}
