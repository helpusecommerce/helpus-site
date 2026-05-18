import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaBrain, FaBuilding, FaCheckCircle, FaExternalLinkAlt, FaGlobe, FaLaptopCode, FaLayerGroup, FaPassport, FaRobot, FaWhatsapp } from 'react-icons/fa';
import { partners } from '../config/partners';

const cards = [
  ['Sites profissionais', 'Landing pages, sites institucionais e paginas de captacao criadas para autoridade, clareza e conversao.', FaGlobe, '/criacao-de-sites'],
  ['Sistemas sob medida', 'Dashboards, cadastros, areas administrativas e ferramentas digitais para a rotina real da operacao.', FaLaptopCode, '/contato'],
  ['Automacao com IA', 'Agentes, rotinas inteligentes, analise de documentos e execucao assistida para reduzir trabalho manual.', FaRobot, '#nexosai'],
  ['Solucoes para vistos', 'Triagem, checklists e organizacao de informacoes para quem deseja aplicar para visto americano.', FaPassport, '/servicos/vistos'],
];

const portfolio = [
  ['Wagner Driver', 'Transporte executivo', partners.wagnerdriver],
  ['Dra. Katia Xavier', 'Saude e telemedicina', partners.katiaxavier],
  ['Tatica Assessoria Contabil', 'Contabilidade e fiscal', partners.tatica],
  ['Public Arte', 'Comunicacao visual', partners.publicarte],
  ['Marcio Barber', 'Negocio local', partners.marciotopbarber],
  ['Blue Box', 'Servico automotivo', partners.bluebox],
];

const steps = ['Diagnostico', 'Prototipo', 'Desenvolvimento', 'Publicacao', 'Evolucao'];
const segments = ['Saude', 'Transporte', 'Educacao', 'Contabilidade', 'Imigracao', 'Servicos locais', 'Profissionais liberais', 'Pequenos negocios'];

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-950 to-cyan-950" />
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-28 lg:grid-cols-2 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-sm font-bold text-cyan-100"><FaRobot /> HelpUS Technology Solutions</span>
            <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">Software, automacao e inteligencia artificial para negocios que querem crescer com eficiencia.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">Criamos sites profissionais, sistemas sob medida, automacoes com IA e solucoes digitais para empresas, profissionais e operacoes que precisam sair do improviso.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contato" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-7 py-3 font-bold text-slate-950 hover:bg-cyan-300">Quero desenvolver uma solucao <FaArrowRight /></Link>
              <a href="#nexosai" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3 font-bold text-white hover:bg-white/20">Conhecer o NexosAI</a>
              <Link to="/servicos/vistos" className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-300/30 px-7 py-3 font-bold text-blue-100 hover:bg-blue-500/20"><FaPassport /> Simular meu visto</Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15, duration: 0.7 }} className="rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur">
            <div className="rounded-[1.5rem] bg-slate-900/95 p-6 ring-1 ring-white/10">
              <p className="text-sm font-bold text-cyan-300">NexosAI Control Layer</p>
              <p className="mt-1 text-xs text-slate-400">Automacao, documentos, tarefas e agentes</p>
              <div className="mt-6 space-y-4">
                {['Sites e sistemas', 'Agentes de IA', 'Documentos e fluxos', 'Conversao e WhatsApp'].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/[0.06] p-4"><FaCheckCircle className="text-cyan-300" /><span className="font-semibold">{item}</span></div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-cyan-100 bg-cyan-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-start gap-4"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-700 text-xl text-white"><FaPassport /></div>
            <div><p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">Mais procurado</p><h2 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-950">Simulador de visto americano e pre-analise inicial</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-slate-700">Comece pelo caminho mais direto: organize seu perfil, entenda pontos de atencao e receba orientacao para os proximos passos. A simulacao e orientativa e nao garante aprovacao consular.</p></div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row"><Link to="/servicos/vistos" className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-700 px-6 py-3 font-bold text-white hover:bg-blue-800">Simular visto <FaArrowRight /></Link><Link to="/servicos/empresa" className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-200 bg-white px-6 py-3 font-bold text-blue-800 hover:bg-blue-50">Consultoria para empresas</Link></div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div><p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">Empresas e consultoria</p><h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">Tecnologia, abertura de empresa e organizacao fiscal no mesmo ecossistema.</h2><p className="mt-5 text-lg leading-8 text-slate-600">Alem de sites, sistemas e automacao, a HelpUS mantem frentes de apoio para empresas: abertura de LLC, ITIN/W-7, endereco fiscal, licencas, documentos, organizacao fiscal e suporte para operacoes que precisam trabalhar com mais estrutura.</p></div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['Abertura de empresa', 'LLC, documentos iniciais e orientacao operacional.', '/servicos/empresa'],
              ['ITIN e W-7', 'Apoio na organizacao de informacoes e documentacao.', '/servicos/empresa/itin'],
              ['Contabilidade e fiscal', 'Servicos fiscais, formularios e rotinas para negocios.', '/servicos/fiscal'],
              ['Documentos', 'Traducao, organizacao e suporte documental.', '/servicos/documentos'],
            ].map(([title, desc, link]) => (
              <Link key={title} to={link} className="rounded-3xl bg-slate-50 p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"><FaBuilding className="mb-4 text-2xl text-blue-700" /><h3 className="font-extrabold text-slate-950">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p></Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center"><p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">Solucoes digitais</p><h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">Tecnologia para tirar sua operacao do improviso.</h2><p className="mt-4 text-lg leading-8 text-slate-600">A HelpUS combina desenvolvimento, estrategia digital e automacao para criar solucoes uteis, elegantes e orientadas a resultado.</p></div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {cards.map(([title, desc, Icon, link]) => (
              <article key={title} className="rounded-3xl bg-white p-7 shadow-lg ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-2xl">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl text-blue-700"><Icon /></div>
                <h3 className="text-xl font-extrabold text-slate-950">{title}</h3><p className="mt-3 min-h-[112px] text-sm leading-7 text-slate-600">{desc}</p>
                {String(link).startsWith('#') ? <a href={link} className="mt-5 inline-flex items-center gap-2 font-bold text-blue-700">Conhecer <FaArrowRight /></a> : <Link to={link} className="mt-5 inline-flex items-center gap-2 font-bold text-blue-700">Conhecer <FaArrowRight /></Link>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="nexosai" className="bg-slate-950 py-24 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2 lg:px-8">
          <div><p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">NexosAI</p><h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Inteligencia artificial conectada ao trabalho real.</h2><p className="mt-5 text-lg leading-8 text-slate-300">O NexosAI e a solucao da HelpUS para conectar IA a tarefas, documentos, sistemas, bancos de dados, navegadores e fluxos operacionais.</p><Link to="/contato" className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3 font-bold text-slate-950">Solicitar diagnostico <FaArrowRight /></Link></div>
          <div className="grid gap-4 sm:grid-cols-2">{['Agentes de IA', 'Documentos e relatorios', 'Integracoes', 'Historico e evidencias'].map((item) => <div key={item} className="rounded-3xl border border-white/10 bg-white/[0.06] p-6"><FaBrain className="mb-4 text-2xl text-cyan-300" /><h3 className="font-extrabold">{item}</h3><p className="mt-2 text-sm leading-6 text-slate-300">Controle, contexto e rastreabilidade para operacoes complexas.</p></div>)}</div>
        </div>
      </section>

      <section id="portfolio" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8"><p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">Portfolio</p><h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">Sites e projetos que desenvolvemos.</h2><p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">Projetos digitais para profissionais, pequenos negocios e empresas que precisam de presenca online com clareza e confianca.</p>
          <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-3">{portfolio.map(([name, segment, link]) => <article key={name} className="rounded-3xl bg-slate-50 p-6 shadow-lg ring-1 ring-slate-200"><div className="mb-5 flex h-36 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-slate-950 text-center text-white"><div><FaBuilding className="mx-auto mb-3 text-3xl text-cyan-300" /><p className="text-xl font-extrabold">{name}</p><p className="mt-1 text-sm text-blue-100">{segment}</p></div></div><p className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700 inline-block">Site profissional</p><p className="mt-3 text-sm leading-7 text-slate-600">Presenca digital para comunicar valor, gerar confianca e facilitar contato comercial.</p><a href={link} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 font-bold text-blue-700">Ver projeto <FaExternalLinkAlt /></a></article>)}</div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950 py-24 text-white"><div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2 lg:px-8"><div><p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">HelpUS Visa Solutions</p><h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Vai aplicar para visto americano? Comece com uma pre-analise inteligente.</h2><p className="mt-5 text-lg leading-8 text-blue-100">A simulacao e orientativa e nao garante aprovacao consular.</p><Link to="/servicos/vistos" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-bold text-blue-950">Fazer simulacao de visto <FaArrowRight /></Link></div><div className="rounded-[2rem] border border-white/15 bg-white/10 p-7">{['Triagem inicial do perfil','Checklist de documentos','Orientacao sobre categoria de visto','Organizacao para atendimento consultivo'].map((item)=><div key={item} className="mb-4 flex items-center gap-3 rounded-2xl bg-white/10 p-4 last:mb-0"><FaCheckCircle className="text-cyan-300" /><span className="font-semibold">{item}</span></div>)}</div></div></section>

      <section className="bg-slate-50 py-24"><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="mx-auto max-w-3xl text-center"><p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">Metodo</p><h2 className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl">Da ideia a solucao funcionando.</h2></div><div className="mt-14 grid gap-5 lg:grid-cols-5">{steps.map((step, i)=><div key={step} className="rounded-3xl bg-white p-6 shadow-md ring-1 ring-slate-200"><span className="text-sm font-extrabold text-blue-600">0{i+1}</span><h3 className="mt-3 text-lg font-extrabold text-slate-950">{step}</h3><p className="mt-3 text-sm leading-7 text-slate-600">Etapa estruturada para reduzir risco, validar valor e entregar com clareza.</p></div>)}</div></div></section>

      <section className="bg-white py-20"><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl md:p-12"><div className="grid gap-10 lg:grid-cols-2 lg:items-center"><div><p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Segmentos</p><h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Tecnologia para negocios reais.</h2></div><div className="flex flex-wrap gap-3">{segments.map((segment)=><span key={segment} className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold">{segment}</span>)}</div></div></div></div></section>

      <section className="bg-slate-50 py-24"><div className="mx-auto max-w-4xl px-6 text-center lg:px-8"><FaLayerGroup className="mx-auto mb-5 text-4xl text-blue-700" /><h2 className="text-3xl font-extrabold text-slate-950 sm:text-4xl">Tem uma ideia, processo manual ou negocio que precisa de tecnologia?</h2><p className="mt-5 text-lg leading-8 text-slate-600">A HelpUS pode transformar isso em site, sistema, automacao ou solucao com IA.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Link to="/contato" className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-700 px-7 py-3 font-bold text-white">Agendar conversa <FaArrowRight /></Link><a href="https://wa.me/5583998721848" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-7 py-3 font-bold text-white"><FaWhatsapp /> Chamar no WhatsApp</a></div></div></section>
    </main>
  );
}
