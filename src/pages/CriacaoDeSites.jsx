// CriacaoDeSites.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaCheckCircle, FaExternalLinkAlt } from 'react-icons/fa';

export default function CriacaoDeSites() {
  return (
    <div className="bg-white text-gray-800 pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Título principal */}
        <h1 className="text-4xl font-extrabold text-blue-700 text-center mb-10">
          Criação de Sites e Lojas Virtuais
        </h1>

        {/* Bloco introdutório */}
        <p className="text-lg text-center max-w-3xl mx-auto mb-10">
          Desenvolvemos sites modernos, rápidos e personalizados para empresas e profissionais. Com layout responsivo, painel administrativo, integração com WhatsApp e hospedagem gratuita, você tem tudo o que precisa para marcar presença na internet.
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

        {/* Preço e chamada para ação */}
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

        {/* Exemplo real */}
        <div className="bg-white border-t pt-10">
          <h3 className="text-2xl font-bold text-center mb-6">Exemplo de site criado</h3>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src="/img/parceiros/tulio.png"
                  alt="Tulio Bicicletas"
                  className="w-full object-contain p-8"
                />
              </div>
              <div className="md:w-1/2 flex flex-col justify-center p-6">
                <h4 className="text-xl font-semibold text-blue-700 mb-2">
                  Túlio Bicicletas
                </h4>
                <p className="text-gray-600 mb-4">
                  Loja virtual completa com painel de cadastro de produtos, filtros por categoria, variações, carrinho de compras e integração com WhatsApp.
                </p>
                <a
                  href="https://tuliobicicletas.helpusa.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-full transition"
                >
                  Visitar site <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ ou observações futuras (opcional) */}
        <p className="text-center text-sm text-gray-500 mt-8">
          Suporte técnico incluso nos primeiros 30 dias após a entrega. Pagamento em até 2x sem juros via cartão ou Pix.
        </p>
      </div>
    </div>
  );
}
