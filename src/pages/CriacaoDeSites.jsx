// src/pages/CriacaoDeSites.jsx
import React from 'react';
import { FaWhatsapp, FaCheckCircle } from 'react-icons/fa';
import AutoCarousel from '../components/AutoCarousel';

export default function CriacaoDeSites() {
  const slides = [
    {
      src: '/img/parceiros/video-wagnerdriver.mp4',
      poster: '/img/parceiros/wagnerdriver-site.png',
      logo: '/img/parceiros/logo-wagnerdriver.png',
      alt: 'Wagner Driver',
      title: 'Wagner Driver',
      caption: 'Transporte executivo • Agendamentos via WhatsApp',
      href: 'https://wagnerdriver.helpusa.com.br',
      isVideo: true,
    },
    {
      src: '/img/parceiros/video-waleska.mp4',
      poster: '/img/parceiros/waleska-site.png',
      logo: '/img/parceiros/logo-waleska.png',
      alt: 'Waleska Imóveis',
      title: 'Waleska Santos – Imóveis',
      caption: 'Compra • Venda • Locação',
      href: 'https://waleska.helpusa.com.br',
      isVideo: true,
    },
    {
      src: '/img/parceiros/video-fundo.mp4', // Túlio
      poster: '/img/parceiros/tulio-site.png',
      logo: '/img/parceiros/tulio.png',
      alt: 'Túlio Bicicletas',
      title: 'Túlio Bicicletas',
      caption: 'Loja com carrinho, variações e WhatsApp',
      href: 'https://tuliobicicletas.helpusa.com.br',
      isVideo: true,
    },
    {
      src: '/img/parceiros/videocgdetails.webm',
      poster: '/img/parceiros/details-site.png',
      logo: '/img/parceiros/cgdetails.png',
      alt: 'CG Details',
      title: 'CG Details',
      caption: 'Limpeza detalhada de veículos e imóveis',
      href: 'https://cgdetails.helpusa.com.br',
      isVideo: true,
    },
    {
      src: '/img/parceiros/videobluebox.webm',
      poster: '/img/parceiros/bluebox-site.png',
      logo: '/img/parceiros/bluebox.png',
      alt: 'Blue Box',
      title: 'Blue Box',
      caption: 'Estética automotiva em João Pessoa',
      href: 'https://bluebox.helpusa.com.br',
      isVideo: true,
    },
    {
      src: '/img/parceiros/video-publicarte.mp4',
      poster: '/img/parceiros/publicart-site.png',
      logo: '/img/parceiros/logo-publicarte.png',
      alt: 'Public Arte',
      title: 'Public Arte',
      caption: 'Comunicação visual e impressos',
      href: 'https://publicarte.helpusa.com.br',
      isVideo: true,
    },
    {
      src: '/img/parceiros/video-katia.mp4',
      poster: '/img/parceiros/katia-site.png',
      logo: '/img/parceiros/katia.png',
      alt: 'Dra. Kátia Xavier',
      title: 'Dra. Kátia Xavier',
      caption: 'Clínica médica e telemedicina',
      href: 'https://katiaxavier.helpusa.com.br',
      isVideo: true,
    },
    {
      src: '/img/parceiros/video-marcio.mp4',
      poster: '/img/parceiros/marcio-site.png',
      logo: '/img/parceiros/hero-marcio-barber.png',
      alt: 'Márcio Barber',
      title: 'Marcio TopBarber',
      caption: 'Cortes, barba e pigmentação',
      href: 'https://marciotopbarber.helpusa.com.br',
      isVideo: true,
    },
  ];

  return (
    <div className="bg-white text-gray-800 pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-blue-700 text-center mb-10">
          Criação de Sites e Lojas Virtuais
        </h1>

        <p className="text-lg text-center max-w-3xl mx-auto mb-10">
          Desenvolvemos sites modernos, rápidos e personalizados para empresas e profissionais.
          Com layout responsivo, painel administrativo, integração com WhatsApp e hospedagem gratuita,
          você tem tudo o que precisa para marcar presença na internet.
        </p>

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

        {/* Carrossel com prints/vídeos */}
        <div className="bg-white border-t pt-10">
          <h3 className="text-2xl font-bold text-center mb-6">Exemplos de sites criados</h3>
          <AutoCarousel slides={slides} interval={3200} aspect="aspect-[21/9]" />
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          Suporte técnico incluso nos primeiros 30 dias após a entrega. Pagamento em até 2x sem juros via cartão ou Pix.
        </p>
      </div>
    </div>
  );
}
