// ðŸ“„ src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

import { useTranslation } from 'react-i18next';
import { partners as partnerLinks } from '../config/partners'; // ðŸ‘ˆ centralizado

// CatÃ¡logo de parceiros (metadados fixos + fallbacks)
const partnersCatalog = [
  {
    id: 'escola_estacao_musical',
    defaultName: 'Escola EstaÃ§Ã£o Musical',
    defaultDesc:
      'Aulas de mÃºsica em JoÃ£o Pessoa â€” violÃ£o, teclado, canto e mais, com metodologia prÃ¡tica e motivadora.',
    imagem: '/img/parceiros/logo-escola.jpg',
    video: '/img/parceiros/video-escola.mp4',
    link: partnerLinks.escolaestacaomusical,
  },
  {
    id: 'wagner_driver',
    defaultName: 'Wagner Driver',
    defaultDesc: 'ServiÃ§o de transporte executivo e agendamentos via WhatsApp.',
    imagem: '/img/parceiros/logo-wagnerdriver.png',
    video: '/img/parceiros/video-wagnerdriver.mp4',
    link: partnerLinks.wagnerdriver,
  },
  {
    id: 'cg_details',
    defaultName: 'CG Details',
    defaultDesc: 'Limpeza detalhada de carros, apartamentos e casas com excelÃªncia.',
    imagem: '/img/parceiros/cgdetails.png',
    video: '/img/parceiros/videocgdetails.webm',
    link: partnerLinks.cgdetails,
  },
  {
    id: 'bluebox',
    defaultName: 'Blue Box',
    defaultDesc: 'Lava-jato de carros e motos com qualidade profissional.',
    imagem: '/img/parceiros/bluebox.png',
    video: '/img/parceiros/videobluebox.webm',
    link: partnerLinks.bluebox,
  },

  // ðŸ†• Plural LocaÃ§Ãµes
  {
    id: 'plural_locacoes',
    defaultName: 'Plural LocaÃ§Ãµes',
    defaultDesc:
      'Aluguel para festas e eventos â€” mesas, cadeiras, tendas, iluminaÃ§Ã£o e mais.',
    imagem: '/img/parceiros/logo-plural.jpg', // coloque este arquivo no public
    // Remova a linha de vÃ­deo se ainda nÃ£o houver um arquivo
    video: '/img/parceiros/plural-video.mp4',
    link: partnerLinks.plurallocacoes,
  },

  {
    id: 'publicarte',
    defaultName: 'Public Arte',
    defaultDesc: 'ComunicaÃ§Ã£o visual criativa e soluÃ§Ãµes grÃ¡ficas personalizadas.',
    imagem: '/img/parceiros/logo-publicarte.png',
    video: '/img/parceiros/video-publicarte.mp4',
    link: partnerLinks.publicarte,
  },
  {
    id: 'waleska',
    defaultName: 'Waleska ImÃ³veis',
    defaultDesc: 'ImobiliÃ¡ria com imÃ³veis selecionados e atendimento personalizado.',
    imagem: '/img/parceiros/logo-waleska.png',
    video: '/img/parceiros/video-waleska.mp4',
    link: partnerLinks.waleska,
  },
  {
    id: 'katia',
    defaultName: 'Dra. KÃ¡tia Xavier',
    defaultDesc: 'Atendimento mÃ©dico presencial e por telemedicina.',
    imagem: '/img/parceiros/katia.png',
    video: '/img/parceiros/video-katia.mp4',
    link: partnerLinks.katiaxavier,
  },
  {
    id: 'marcio_barber',
    defaultName: 'MÃ¡rcio Barber',
    defaultDesc: 'ServiÃ§os de barbearia com qualidade e atendimento diferenciado.',
    imagem: '/img/parceiros/hero-marcio-barber.png',
    video: '/img/parceiros/video-marcio.mp4',
    link: partnerLinks.marciotopbarber,
  },
  // TÃ¡tica com caminhos padronizados + alternativas
  {
    id: 'tatica',
    defaultName: 'TÃ¡tica Assessoria ContÃ¡bil',
    defaultDesc:
      'Contabilidade, abertura de empresa, folha, impostos e consultoria fiscal.',
    imagem: '/img/parceiros/tatica-logo.png',   // ðŸ‘‰ coloque este arquivo no public do HelpUS
    video: '/img/parceiros/tatica-video.mp4',   // ðŸ‘‰ ou mantenha /video/video01.mp4 (fallback)
    link: partnerLinks.tatica,
  },
];

const Home = () => {
  const { t } = useTranslation();

  // Mapeia catÃ¡logo -> dados traduzidos com fallback
  const partners = partnersCatalog.map((p) => ({
    ...p,
    nome: t(`partners.${p.id}.name`, { defaultValue: p.defaultName || p.id }),
    descricao: t(`partners.${p.id}.desc`, { defaultValue: p.defaultDesc || '' }),
  }));

  // fallback de imagem: tenta /assets/logo.png e depois um Ã­cone padrÃ£o
  const handleImgError = (e, parceiroId) => {
    const img = e.currentTarget;
    const attempt = Number(img.dataset.attempt || 0);

    // SÃ³ aplicamos fallback inteligente para o parceiro "tatica"
    if (parceiroId === 'tatica') {
      const fallbacks = ['/assets/logo.png', '/img/parceiros/helpus-icon.png'];
      if (attempt < fallbacks.length) {
        img.dataset.attempt = String(attempt + 1);
        img.src = fallbacks[attempt];
        return;
      }
    }

    // fallback genÃ©rico (nÃ£o repete loop infinito)
    if (attempt === 0) {
      img.dataset.attempt = '1';
      img.src = '/img/parceiros/helpus-icon.png';
    }
  };

  return (
    <div>
      {/* Hero principal */}
      <Hero />

      {/* SeÃ§Ã£o de diferenciais */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
            {t('home.why_title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">{t('home.p1_t')}</h3>
              <p>{t('home.p1_d')}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{t('home.p2_t')}</h3>
              <p>{t('home.p2_d')}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{t('home.p3_t')}</h3>
              <p>{t('home.p3_d')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SeÃ§Ã£o de parceiros */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-14">
            {t('home.partners_title')}
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {partners.map((parceiro, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl shadow-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.img
                  src={parceiro.imagem}
                  alt={parceiro.nome}
                  className="w-28 h-28 object-contain mb-4"
                  loading="lazy"
                  onError={(e) => handleImgError(e, parceiro.id)}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                />

                {parceiro.video && (
                  <video
                    className="rounded-xl mb-4 w-full max-h-52 object-cover shadow-md"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={parceiro.imagem}
                  >
                    {/* 1Âª tentativa: padrÃ£o dos parceiros */}
                    <source src={parceiro.video} type="video/mp4" />
                    {/* 2Âª tentativa: seu caminho antigo */}
                    <source src="/video/video01.mp4" type="video/mp4" />
                    {t('hero.no_video')}
                  </video>
                )}

                <h3 className="text-xl font-bold mb-2 text-blue-800">{parceiro.nome}</h3>
                <p className="text-gray-600 mb-4 text-sm">{parceiro.descricao}</p>

                <a
                  href={parceiro.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full hover:bg-blue-700 transition-all duration-300"
                >
                  {t('common.visit_site')} <FaExternalLinkAlt />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

