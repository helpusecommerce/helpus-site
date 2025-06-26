import React from 'react';
import { Link } from 'react-router-dom';
import { FaPassport, FaBuilding, FaFileInvoiceDollar } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="bg-white pt-8 pb-16 px-4 text-center">
      <div className="max-w-5xl mx-auto">

        {/* Título com animação */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-blue-800 mb-4 leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Soluções completas para viver,<br /> empreender e declarar nos EUA
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          className="text-lg text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Consultoria especializada em vistos, abertura de empresas e documentação fiscal americana – tudo em português.
        </motion.p>

        {/* Botões com animação em grupo */}
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

        {/* Imagem final com fade-in */}
        <motion.img
          src="/bg-hero.jpg"
          alt="Profissional HelpUS"
          className="rounded-lg shadow-md w-full max-h-[440px] object-cover mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        />
      </div>
    </section>
  );
}
