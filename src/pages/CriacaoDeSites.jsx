// src/pages/CriacaoDeSites.jsx
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaCheckCircle } from 'react-icons/fa';
import AutoCarousel from '../components/AutoCarousel';

export default function CriacaoDeSites() {
  // slides do carrossel (logos + links)
  const slides = [
    {
      src: '/img/parceiros/tulio.png',
      alt: 'Túlio Bicicletas',
      title: 'Túlio Bicicletas',
      caption: 'Loja com carrinho, variações e WhatsApp',
      href: 'https://tuliobicicletas.helpusa.com.br',
    },
    {
      src: '/img/parceiros/cgdetails.png',
      alt: 'CG Details',
      title: 'CG Details',
      caption: 'Serviços de limpeza detalhada',
      href: 'https://cgdetails.helpusa.com.br',
    },
    {
      src: '/img/parceiros/bluebox.png',
      alt: 'Blue Box',
      title: 'Blue Box',
      caption: 'Lava-jato e estética automotiva',
      href: 'https://bluebox.helpusa.com.br',
    },
    {
      src: '/img/parceiros/logo-publicarte.png',
      alt: 'Public Arte',
      title: 'Public Arte',
      caption: 'Comunicação Visual',
      href: 'https://publicarte.helpusa.com.br',
    },
    {
      src: '/img/parceiros/logo-waleska.png',
      alt: 'Waleska Imóveis',
      title: 'Waleska Imóveis',
      caption: 'Portal imobiliário',
      href: 'https://waleska.helpusa.com.br',
    },
    {
      src: '/img/parceiros/katia.png',
      alt: 'Dra. Kátia Xavier',
      title: 'Dra. Kátia Xavier',
      caption: 'Site médico com telemedicina',
      href: 'https://katiaxavier.helpusa.com.br',
    },
    {
      src: '/img/parceiros/hero-marcio-barber.png',
      alt: 'Márcio Barber',
      title: 'Márcio Barber',
      caption: 'Barbearia',
      href: 'https://marciotopbarber.helpusa.com.br',
    },
  ];

  return (
    <div className="bg-white text-gray-800 pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Título principal */}
        <h1 className="text-4xl font-extrabold text-blue-700 text-center mb-10">
          Criação de Sites e Lojas Virtuais
        </h1>

        {/* Bloco introdutório */}
        <p className="text-lg text-center max-w-3xl mx-auto mb-10">
          Desenvolvemos sites modernos, rápidos e personalizados para empresas e profissionais.
          Com layout responsivo, painel administrativo, integração com WhatsApp e hospedagem gratuita,
          você tem tudo o que precisa para marcar presença na internet.
        </p>

        {/* Benefícios */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            'Design profissional e responsivo',
            'Loja virtual com carrinho e WhatsApp',
            'Painel de controle para gerenciar produtos',
            'Hospedagem gratuita na Vercel',
            'Banco de dados gratuito (Supabase)',
            'Integração com redes sociais',
            'Controle de usuários por tipo de acesso',
            'SEO básico incluso',
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              <p>{item}</p>
            </div>
          ))}
        </div>

        {/* Preço e CTA */}
        <div className="text-center bg-gray-100 rounded-xl py-10 px-6 mb-16 shadow-inner">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            A partir de <span className="text-4xl">$299</span>
          </h2>
          <p className="text-gray-600 mb-6">Site completo entregue em até 10 dias úteis.</p>
          <a
            href="https://wa.me/5583998721848"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition"
          >
            Solicitar orçamento <FaWhatsapp />
          </a>
        </div>

        {/* EXEMPLOS – Carrossel automático */}
        <div className="bg-white border-t pt-10">
          <h3 className="text-2xl font-bold text-center mb-6">Exemplos de sites criados</h3>
          <AutoCarousel slides={slides} interval={3500} aspect="aspect-[21/9]" />
        </div>

        {/* Observações */}
        <p className="text-center text-sm text-gray-500 mt-8">
          Suporte técnico incluso nos primeiros 30 dias após a entrega. Pagamento em até 2x sem juros via cartão ou Pix.
        </p>
      </div>
    </div>
  );
}
