// 📄 src/pages/Home.jsx
import React, { useCallback } from 'react';
import Hero from '../components/Hero';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { partners as partnerLinks } from '../config/partners';

/* Detecta ambiente local para evitar tentar abrir subdomínios (que não resolvem em localhost) */
const isLocal =
  typeof window !== 'undefined' && /localhost|127\.0\.0\.1/.test(window.location.host);

/* Catálogo de parceiros (metadados fixos + fallbacks) */
const partnersCatalog = [
  {
    id: 'escola_estacao_musical',
    defaultName: 'Escola Estação Musical',
    defaultDesc:
      'Aulas de música em João Pessoa — violão, teclado, canto e mais, com metodologia prática e motivadora.',
    imagem: '/img/parceiros/logo-escola.jpg',
    video: '/img/parceiros/video-escola.mp4',
    link: partnerLinks?.escolaestacaomusical || '#',
  },
  {
    id: 'wagner_driver',
    defaultName: 'Wagner Driver',
    defaultDesc: 'Serviço de transporte executivo e agendamentos via WhatsApp.',
    imagem: '/img/parceiros/logo-wagnerdriver.png',
    video: '/img/parceiros/video-wagnerdriver.mp4',
    link: partnerLinks?.wagnerdriver || '#',
  },
  {
    id: 'cg_details',
    defaultName: 'CG Details',
    defaultDesc: 'Limpeza detalhada de carros, apartamentos e casas com excelência.',
    imagem: '/img/parceiros/cgdetails.png',
    video: '/img/parceiros/videocgdetails.webm',
    link: partnerLinks?.cgdetails || '#',
  },
  {
    id: 'bluebox',
    defaultName: 'Blue Box',
    defaultDesc: 'Lava-jato de carros e motos com qualidade profissional.',
    imagem: '/img/parceiros/bluebox.png',
    video: '/img/parceiros/videobluebox.webm',
    link: partnerLinks?.bluebox || '#',
  },
  // ✅ Plural Locações — arquivos na raiz de /public
  {
    id: 'plural',
    defaultName: 'Plural Locações',
    defaultDesc:
      'Aluguel de mesas, cadeiras, tendas, iluminação e muito mais para festas e eventos.',
    imagem: '/img/parceiros/logo-plural.jpg',
    video: '/img/parceiros/video02.mp4',
    link: partnerLinks?.plural || '#',
  },
  {
    id: 'publicarte',
    defaultName: 'Public Arte',
    defaultDesc: 'Comunicação visual criativa e soluções gráficas personalizadas.',
    imagem: '/img/parceiros/logo-publicarte.png',
    video: '/img/parceiros/video-publicarte.mp4',
    link: partnerLinks?.publicarte || '#',
  },
  {
    id: 'waleska',
    defaultName: 'Waleska Imóveis',
    defaultDesc: 'Imobiliária com imóveis selecionados e atendimento personalizado.',
    imagem: '/img/parceiros/logo-waleska.png',
    video: '/img/parceiros/video-waleska.mp4',
    link: partnerLinks?.waleska || '#',
  },
  {
    id: 'katia',
    defaultName: 'Dra. Kátia Xavier',
    defaultDesc: 'Atendimento médico presencial e por telemedicina.',
    imagem: '/img/parceiros/katia.png',
    video: '/img/parceiros/video-katia.mp4',
    link: partnerLinks?.katiaxavier || '#',
  },
  {
    id: 'marcio_barber',
    defaultName: 'Márcio Barber',
    defaultDesc: 'Serviços de barbearia com qualidade e atendimento diferenciado.',
    imagem: '/img/parceiros/hero-marcio-barber.png',
    video: '/img/parceiros/video-marcio.mp4',
    link: partnerLinks?.marciotopbarber || '#',
  },
  {
    id: 'tatica',
    defaultName: 'Tática Assessoria Contábil',
    defaultDesc: 'Contabilidade, abertura de empresa, folha, impostos e consultoria fiscal.',
    imagem: '/img/parceiros/tatica-logo.png',
    video: '/img/parceiros/tatica-video.mp4',
    link: partnerLinks?.tatica || '#',
  },
];

function PartnerCard({ parceiro, isLocal }) {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  const handleImgError = useCallback((e) => {
    const img = e.currentTarget;
    const attempt = Number(img.dataset.attempt || 0);
    const commonFallbacks = ['/img/parceiros/helpus-icon.png', '/assets/logo.png'];

    /* Fallback específico para Tática + genéricos em cascata */
    const fallbacks =
      parceiro.id === 'tatica'
        ? ['/assets/logo.png', '/img/parceiros/helpus-icon.png']
        : commonFallbacks;

    if (attempt < fallbacks.length) {
      img.dataset.attempt = String(attempt + 1);
      img.src = fallbacks[attempt];
    }
  }, [parceiro.id]);

  const variants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.96, y: shouldReduceMotion ? 0 : 12 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.45, ease: 'easeOut' },
    },
  };

  return (
    <motion.article
      className="bg-white rounded-3xl shadow-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-[2px] hover:shadow-2xl focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-white"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      variants={variants}
      aria-labelledby={`${parceiro.id}-title`}
    >
      <motion.img
        src={parceiro.imagem}
        alt={parceiro.nome}
        className="w-28 h-28 object-contain mb-4 select-none"
        loading="lazy"
        decoding="async"
        onError={handleImgError}
        whileHover={shouldReduceMotion ? undefined : { scale: 1.06 }}
        transition={{ type: 'spring', stiffness: 320, damping: 22 }}
      />

      {parceiro.video && (
        <video
          className="rounded-xl mb-4 w-full max-h-52 object-cover shadow-md"
          /* Respeita prefers-reduced-motion (sem autoplay) */
          autoPlay={!shouldReduceMotion}
          muted
          loop
          playsInline
          preload="metadata"
          poster={parceiro.imagem}
        >
          <source src={parceiro.video} type="video/mp4" />
          <source src="/video/video01.mp4" type="video/mp4" />
          {t('hero.no_video')}
        </video>
      )}

      <h3 id={`${parceiro.id}-title`} className="text-xl font-bold mb-2 text-blue-800">
        {parceiro.nome}
      </h3>
      <p className="text-gray-600 mb-4 text-sm">{parceiro.descricao}</p>

      <a
        href={isLocal ? '#' : parceiro.link}
        title={isLocal ? t('common.try_again') : parceiro.nome}
        aria-disabled={isLocal}
        onClick={(e) => {
          if (isLocal) e.preventDefault();
        }}
        target={isLocal ? undefined : '_blank'}
        rel={isLocal ? undefined : 'noopener noreferrer'}
        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
          isLocal
            ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        {t('common.visit_site')} <FaExternalLinkAlt aria-hidden="true" />
      </a>
    </motion.article>
  );
}

const Home = () => {
  const { t } = useTranslation();

  /* Mapeia catálogo -> dados traduzidos com fallback */
  const partners = partnersCatalog.map((p) => ({
    ...p,
    nome: t(`partners.${p.id}.name`, { defaultValue: p.defaultName || p.id }),
    descricao: t(`partners.${p.id}.desc`, { defaultValue: p.defaultDesc || '' }),
  }));

  // Debug em dev: confirma que a "plural" está chegando
  if (import.meta?.env?.MODE === 'development') {
    // eslint-disable-next-line no-console
    console.table(partners.map(p => ({ id: p.id, img: p.imagem, video: p.video })));
    // eslint-disable-next-line no-console
    console.log('tem plural?', partners.some(p => p.id === 'plural'));
  }

  return (
    <div>
      {/* Hero principal */}
      <Hero />

      {/* Seção de diferenciais */}
      <section className="py-16 bg-gray-100" aria-labelledby="why-helpus">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="why-helpus" className="text-3xl font-bold text-center text-blue-700 mb-8">
            {t('home.why_title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/70 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{t('home.p1_t')}</h3>
              <p className="text-gray-700">{t('home.p1_d')}</p>
            </div>
            <div className="bg-white/70 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{t('home.p2_t')}</h3>
              <p className="text-gray-700">{t('home.p2_d')}</p>
            </div>
            <div className="bg-white/70 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{t('home.p3_t')}</h3>
              <p className="text-gray-700">{t('home.p3_d')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de parceiros */}
      <section
        id="partners"
        className="py-20 bg-gradient-to-b from-white to-gray-100"
        aria-labelledby="partners-title"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="partners-title" className="text-4xl font-extrabold text-center text-gray-800 mb-14">
            {t('home.partners_title')}
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {partners.map((parceiro) => (
              <PartnerCard key={parceiro.id} parceiro={parceiro} isLocal={isLocal} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
