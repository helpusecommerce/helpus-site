// 📄 src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { partners as partnerLinks } from '../config/partners'; // 👈 centralizado

// Catálogo de parceiros (metadados fixos + fallbacks)
const partnersCatalog = [
  {
    id: 'helpus_visa',
    defaultName: 'HelpUS Vistos & Imigração EUA',
    defaultDesc: 'Portal de assessoria completa e consultoria em vistos americanos e imigração para os EUA.',
    imagem: '/img/helpus-logo.png',
    video: '/img/parceiros/visa-video.mp4',
    link: partnerLinks.visa,
  },
  {
    id: 'helpus_cvss',
    defaultName: 'HelpUS CVSS • Cibersegurança & IA Watcher',
    defaultDesc: 'Plataforma científica para cálculo do FIRST CVSS v4.0 com IA Watcher contextual, simulador de impacto e mitigação reversa ("What-If").',
    imagem: '/img/parceiros/cvss-logo.png',
    video: '/img/parceiros/video-cvss.mp4',
    link: partnerLinks.cvss,
  },
  {
    id: 'helpus_advert',
    defaultName: 'HelpUS Advert • Publicidade & Marketing com IA',
    defaultDesc: 'Plataforma proprietária de operações de publicidade para marcas e empresas: campanhas multicanal, criação com IA e esteira de aprovações sem intermediários.',
    imagem: '/img/helpus-logo.png',
    video: '/img/parceiros/video-ecommerce.mp4',
    link: partnerLinks.advert,
  },
  {
    id: 'escola_estacao_musical',
    defaultName: 'Escola Estação Musical',
    defaultDesc:
      'Aulas de música em João Pessoa — violão, teclado, canto e mais, com metodologia prática e motivadora.',
    imagem: '/img/parceiros/logo-escola.jpg',
    video: '/img/parceiros/video-escola.mp4',
    link: partnerLinks.escolaestacaomusical,
  },
  {
    id: 'wagner_driver',
    defaultName: 'Wagner Driver',
    defaultDesc: 'Serviço de transporte executivo e agendamentos via WhatsApp.',
    imagem: '/img/parceiros/logo-wagnerdriver.png',
    video: '/img/parceiros/video-wagnerdriver.mp4',
    link: partnerLinks.wagnerdriver,
  },
  {
    id: 'cg_details',
    defaultName: 'CG Details',
    defaultDesc: 'Limpeza detalhada de carros, apartamentos e casas com excelência.',
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

  // 🆕 Plural Locações
  {
    id: 'plural_locacoes',
    defaultName: 'Plural Locações',
    defaultDesc:
      'Aluguel para festas e eventos — mesas, cadeiras, tendas, iluminação e mais.',
    imagem: '/img/parceiros/logo-plural.jpg', // coloque este arquivo no public
    // Remova a linha de vídeo se ainda não houver um arquivo
    video: '/img/parceiros/plural-video.mp4',
    link: partnerLinks.plurallocacoes,
  },

  {
    id: 'publicarte',
    defaultName: 'Public Arte',
    defaultDesc: 'Comunicação visual criativa e soluções gráficas personalizadas.',
    imagem: '/img/parceiros/logo-publicarte.png',
    video: '/img/parceiros/video-publicarte.mp4',
    link: partnerLinks.publicarte,
  },
  {
    id: 'waleska',
    defaultName: 'Waleska Imóveis',
    defaultDesc: 'Imobiliária com imóveis selecionados e atendimento personalizado.',
    imagem: '/img/parceiros/logo-waleska.png',
    video: '/img/parceiros/video-waleska.mp4',
    link: partnerLinks.waleska,
  },
  {
    id: 'marcio_barber',
    defaultName: 'Márcio Barber',
    defaultDesc: 'Serviços de barbearia com qualidade e atendimento diferenciado.',
    imagem: '/img/parceiros/hero-marcio-barber.png',
    video: '/img/parceiros/video-marcio.mp4',
    link: partnerLinks.marciotopbarber,
  },
  {
    id: 'studio_naldo_hair',
    defaultName: 'Studio Naldo Hair',
    defaultDesc: 'Salão de beleza e estética em João Pessoa: mechas, loiros, cortes, visagismo e penteados.',
    imagem: '/img/parceiros/naldo-logo.png',
    poster: '/img/parceiros/naldo-site.png',
    link: partnerLinks.studionaldohair,
  },
  {
    id: 'barraca_sertaneja',
    defaultName: 'Barraca Sertaneja',
    defaultDesc: 'Queijos artesanais, queijo de manteiga, carne de sol e tradição do sertão em João Pessoa.',
    imagem: '/img/parceiros/barraca-sertaneja-logo.png',
    poster: '/img/parceiros/barraca-sertaneja-site.jpg',
    link: partnerLinks.barracasertaneja,
  },
  {
    id: 'rodrigues_tur',
    defaultName: 'Rodrigues Tur',
    defaultDesc: 'Excursões em grupo aéreas e rodoviárias, turismo religioso e pacotes com saídas da Paraíba.',
    imagem: '/img/parceiros/rodrigues-tur-logo.png',
    poster: '/img/parceiros/rodrigues-tur-site.jpg',
    link: partnerLinks.rodriguestur,
  },
  // Tática com caminhos padronizados + alternativas
  {
    id: 'tatica',
    defaultName: 'Tática Assessoria Contábil',
    defaultDesc:
      'Contabilidade, abertura de empresa, folha, impostos e consultoria fiscal.',
    imagem: '/img/parceiros/tatica-logo.png',
    video: '/img/parceiros/tatica-video.mp4',
    link: partnerLinks.tatica,
  },
  {
    id: 'ariticum_chales',
    defaultName: 'Ariticum Chalés',
    defaultDesc:
      'Portal de reservas e experiência digital para pousada em meio à natureza.',
    imagem: '/img/parceiros/ariticum-logo.png',
    video: '/img/parceiros/ariticum-video.mp4',
    link: partnerLinks.ariticumchales,
  },
  {
    id: 'tulio_bicicletas',
    defaultName: 'Túlio Bicicletas',
    defaultDesc:
      'Loja e oficina especializada em bicicletas e acessórios ciclísticos.',
    imagem: '/img/parceiros/tulio.png',
    video: '/img/parceiros/video-fundo.mp4',
    link: partnerLinks.tuliobicicletas,
  },
  {
    id: 'magia_do_verde',
    defaultName: 'Magia do Verde',
    defaultDesc:
      'E-commerce e soluções para jardinagem, plantas e produtos naturais.',
    imagem: '/img/parceiros/magia-verde-logo.png',
    poster: '/img/parceiros/magia-verde-site.png',
    video: null,
    link: partnerLinks.magiadoverde,
  },
  {
    id: 'capinar_pb',
    defaultName: 'Capinar PB',
    defaultDesc:
      'Serviços de limpeza, manutenção e capinação urbana e rural.',
    imagem: '/img/parceiros/capinar-pb-logo.png',
    poster: '/img/parceiros/capinar-pb-site.png',
    video: null,
    link: partnerLinks.capinarpb,
  },
];

const solutionCategories = [
  {
    id: 'fiscal_tech',
    title: 'Soluções Contábeis, Portais & Automação Fiscal',
    category: 'Fiscal Tech & Web Design',
    description: 'Engenharia de software para o setor contábil: desenvolvimento de portais institucionais para escritórios de contabilidade e robôs de busca/captura automatizada em lote de NFS-e/CT-e com certificado A1.',
    imagem: '/img/parceiros/tatica-logo.png',
    video: '/img/parceiros/video-accounting.mp4',
    partnerName: 'Soluções para o Setor Contábil',
    link: '/solucoes/automacao-fiscal',
  },
  {
    id: 'ai_agents',
    title: 'Inteligência Artificial & Chatbots Neural',
    category: 'AI Agents & LLM',
    description: 'Atendimento neural inteligente 24/7 via Meta Cloud API / Baileys, suporte RAG contextual e suíte proprietária AI Engine Hub (TTS Neural, Perplexity Engine, Gamma Engine).',
    imagem: '/img/parceiros/helpus-icon.png',
    video: '/img/parceiros/video-ia.mp4',
    partnerName: 'HelpUS WhatsApp IA & AI Hub',
    link: '/solucoes/inteligencia-artificial',
  },
  {
    id: 'ecommerce_suite',
    title: 'E-commerce & Amazon SP-API Suite',
    category: 'Marketplace Automation',
    description: 'Suíte de automação para vendedores Amazon FBA com validação em lote de códigos ISIN/UPC, precificação dinâmica e submissão segura de feeds de produtos.',
    imagem: '/img/parceiros/logo-publicarte.png',
    video: '/img/parceiros/video-amazon.mp4',
    partnerName: 'HelpUS FBA Suite & E-commerce',
    link: '/solucoes/ecommerce-amazon',
  },
  {
    id: 'saas_realestate',
    title: 'SaaS Corporativo & Gestão Imobiliária',
    category: 'Enterprise SaaS & ERP',
    description: 'Plataformas imobiliárias de alta performance com captação de clientes, portais para corretores, busca com filtros e banco de dados relacional.',
    imagem: '/img/parceiros/logo-waleska.png',
    video: '/img/parceiros/video-saas.mp4',
    partnerName: 'HelpUS RealEstate & ERPs',
    link: '/solucoes/saas-imobiliaria',
  },
  {
    id: 'booking_engine',
    title: 'Engine de Reservas & Agendamento Online',
    category: 'Booking & Service Apps',
    description: 'Portais responsivos para agendamento de estadias em pousadas, transportes executivos e serviços com calendário dinâmico e suporte WhatsApp.',
    imagem: '/img/parceiros/ariticum-logo.png',
    video: '/img/parceiros/video-agendamento.mp4',
    partnerName: 'Ariticum Booking Engine',
    link: '/solucoes/reservas-agendamentos',
  },
  {
    id: 'health_tech',
    title: 'Plataformas Médicas & Diagnóstico com IA',
    category: 'Health Tech & Medical',
    description: 'Ecossistemas para simulação de exames médicos acadêmicos (USMLE), laudos cardiológicos auxiliados por IA (CardioIA) e gestão de saúde.',
    imagem: '/img/parceiros/helpus-icon.png',
    video: '/img/parceiros/video-medico.mp4',
    partnerName: 'CardioIA & USMLE Prep',
    link: '/solucoes/plataformas-medicas',
  },
  {
    id: 'cybersecurity_cvss',
    title: 'Cibersegurança & Gestão de Vulnerabilidades (CVSS v4.0)',
    category: 'Cybersecurity & AI Risk Watcher',
    description: 'Plataforma científica de governança e priorização contextual com cálculo oficial FIRST CVSS v4.0, IA Watcher explicável baseada em evidências reais de rede, calculadora reversa "What-If" e auditoria de conformidade (PCI-DSS, LGPD, ISO 27001).',
    imagem: '/img/parceiros/cvss-logo.png',
    video: '/img/parceiros/video-cvss.mp4',
    partnerName: 'HelpUS CVSS • AI Watcher',
    link: '/solucoes/ciberseguranca-cvss',
  },
  {
    id: 'adtech_advert',
    title: 'Publicidade, Mídia & Marketing com IA (HelpUS Advert)',
    category: 'AdTech & Operações de Mídia',
    description: 'Plataforma proprietária de operações de publicidade para marcas e empresas: planejamento estratégico, criação de conteúdo e criativos com IA, calendário editorial contínuo e esteira de aprovações sem intermediários.',
    imagem: '/img/helpus-logo.png',
    video: '/img/parceiros/video-ecommerce.mp4',
    partnerName: 'Conhecer HelpUS Advert',
    link: '/solucoes/publicidade-advert',
  },
];

const Home = () => {
  const { t } = useTranslation();

  // Mapeia catálogo -> dados traduzidos com fallback
  const partners = partnersCatalog.map((p) => ({
    ...p,
    nome: t(`partners.${p.id}.name`, { defaultValue: p.defaultName || p.id }),
    descricao: t(`partners.${p.id}.desc`, { defaultValue: p.defaultDesc || '' }),
  }));

  // fallback de imagem: tenta /assets/logo.png e depois um ícone padrão
  const handleImgError = (e, parceiroId) => {
    const img = e.currentTarget;
    const attempt = Number(img.dataset.attempt || 0);

    // Só aplicamos fallback inteligente para o parceiro "tatica"
    if (parceiroId === 'tatica') {
      const fallbacks = ['/assets/logo.png', '/img/parceiros/helpus-icon.png'];
      if (attempt < fallbacks.length) {
        img.dataset.attempt = String(attempt + 1);
        img.src = fallbacks[attempt];
        return;
      }
    }

    // fallback genérico (não repete loop infinito)
    if (attempt === 0) {
      img.dataset.attempt = '1';
      img.src = '/img/parceiros/helpus-icon.png';
    }
  };

  return (
    <div>
      {/* Hero principal */}
      <Hero />

      {/* Seção de Capacidades & Soluções de Software */}
      <section id="solucoes" className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-white mb-4">
              O Que Desenvolvemos
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Engenharia de software moderna, sistemas de automação fiscal, inteligência artificial e plataformas sob medida aplicadas à sua operação.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {solutionCategories.map((sol, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-3xl shadow-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl border border-gray-700"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
                  {sol.category}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white">{sol.title}</h3>

                {sol.video ? (
                  <video
                    className="rounded-xl mb-4 w-full max-h-52 object-cover shadow-md"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  >
                    <source src={sol.video} type="video/mp4" />
                    {t('hero.no_video')}
                  </video>
                ) : sol.poster ? (
                  <img
                    src={sol.poster}
                    alt={sol.title}
                    className="rounded-xl mb-4 w-full max-h-52 object-cover shadow-md"
                  />
                ) : null}

                <p className="text-gray-300 mb-6 text-sm leading-relaxed flex-grow">
                  {sol.description}
                </p>

                <div className="w-full pt-4 border-t border-gray-700 flex flex-col gap-2">
                  <span className="text-xs text-gray-400">Ver detalhes da solução:</span>
                  {sol.link?.startsWith('http') ? (
                    <a
                      href={sol.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      {sol.partnerName} &rarr;
                    </a>
                  ) : (
                    <Link
                      to={sol.link}
                      className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      {sol.partnerName} &rarr;
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de diferenciais */}
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

      {/* Seção de parceiros */}
      <section id="partners" className="py-20 bg-gradient-to-b from-white to-gray-100">
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

                {parceiro.video ? (
                  <video
                    className="rounded-xl mb-4 w-full max-h-52 object-cover shadow-md"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={parceiro.poster || parceiro.imagem}
                  >
                    {/* 1ª tentativa: padrão dos parceiros */}
                    <source src={parceiro.video} type="video/mp4" />
                    {/* 2ª tentativa: seu caminho antigo */}
                    <source src="/video/video01.mp4" type="video/mp4" />
                    {t('hero.no_video')}
                  </video>
                ) : parceiro.poster ? (
                  <img
                    src={parceiro.poster}
                    alt={parceiro.nome}
                    className="rounded-xl mb-4 w-full max-h-52 object-cover shadow-md"
                  />
                ) : null}

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
