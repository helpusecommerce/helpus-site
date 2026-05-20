// arquivo: src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import { FaWhatsapp } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { getVisaUrl, isVisaSite } from './config/siteMode';

// Chat virtual guiado (com botões)
import ChatGuiado from './components/ChatGuiado';

// Páginas principais
import Home from './pages/Home';
import Servicos from './pages/Servicos';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import PoliticaDePrivacidade from './pages/PoliticaDePrivacidade';
import Login from './pages/Login';
import ListaUsuariosAdmin from './pages/admin/ListaUsuariosAdmin';
import CadastroUsuario from './pages/admin/CadastroUsuario';
import EditarUsuario from './pages/admin/EditarUsuario';

// Categorias
import Empresa from './pages/Empresa';
import Fiscal from './pages/Fiscal';
import Vistos from './pages/Vistos';

// 🆕 Novas páginas
import Ebooks from './pages/Ebooks';
import Documentos from './pages/servicos/documentos/Documentos';

// Vistos
import F1 from './pages/servicos/vistos/F1';
import F2 from './pages/servicos/vistos/F2';
import B1B2 from './pages/servicos/vistos/B1B2';
import EB2NIW from './pages/servicos/vistos/EB2NIW';
import EB1A from './pages/servicos/vistos/EB1A';
import Familia from './pages/servicos/vistos/Familia';
import Renovacao from './pages/servicos/vistos/Renovacao';
import CasosEspeciais from './pages/servicos/vistos/CasosEspeciais';
import Complementares from './pages/servicos/vistos/Complementares';
import OutrosTrabalho from './pages/servicos/vistos/OutrosTrabalho';

// Fiscal
import IRPF from './pages/servicos/fiscal/IRPF';
import ScheduleC from './pages/servicos/fiscal/ScheduleC';
import Dependentes from './pages/servicos/fiscal/Dependentes';
import Formularios from './pages/servicos/fiscal/Formularios';
import Envio from './pages/servicos/fiscal/Envio';
import W9 from './pages/servicos/fiscal/W9';

// Empresa
import AberturaLLC from './pages/servicos/empresa/AberturaLLC';
import EnderecoFiscal from './pages/servicos/empresa/EnderecoFiscal';
import OperatingAgreement from './pages/servicos/empresa/OperatingAgreement';
import ITIN from './pages/servicos/empresa/ITIN';
import W7 from './pages/servicos/empresa/W7';
import BusinessLicense from './pages/servicos/empresa/BusinessLicense';

// Serviço
import CriacaoDeSites from './pages/CriacaoDeSites';

function AppInit() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return null;
}

// Rola automaticamente para a seção de parceiros quando a rota for /parceiros
function ScrollToPartnersOnRoute() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === '/parceiros') {
      // espera o React pintar a Home
      setTimeout(() => {
        document.getElementById('partners')?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 0);
    }
  }, [pathname]);
  return null;
}


function MainHome() {
  return isVisaSite() ? <Navigate to="/servicos/vistos" replace /> : <Home />;
}

function VisaOnlyRoute({ children }) {
  const location = useLocation();

  if (isVisaSite()) {
    return children;
  }

  if (typeof window !== 'undefined') {
    const targetPath = `${location.pathname}${location.search || ''}${location.hash || ''}`;
    window.location.replace(getVisaUrl(targetPath));
  }

  return null;
}

function App() {
  return (
    <Router>
      <AppInit />
      <div className="pt-4 md:pt-8 flex flex-col min-h-screen scroll-smooth">
        <Header />
        <ScrollToPartnersOnRoute />

        <main className="flex-grow">
          <Routes>
            {/* Rotas principais */}
            <Route path="/" element={<MainHome />} />
            <Route path="/parceiros" element={<Home />} /> {/* NEW: rota âncora para a seção */}
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/politica-de-privacidade" element={<PoliticaDePrivacidade />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<ListaUsuariosAdmin />} />
            <Route path="/admin/cadastro-usuario" element={<CadastroUsuario />} />
            <Route path="/admin/editar-usuario/:id" element={<EditarUsuario />} />

            {/* Empresa */}
            <Route path="/servicos/empresa" element={<Empresa />} />
            <Route path="/servicos/empresa/abertura" element={<AberturaLLC />} />
            <Route path="/servicos/empresa/endereco-fiscal" element={<EnderecoFiscal />} />
            <Route path="/servicos/empresa/operating-agreement" element={<OperatingAgreement />} />
            <Route path="/servicos/empresa/itin" element={<ITIN />} />
            <Route path="/servicos/empresa/w7" element={<W7 />} />
            <Route path="/servicos/empresa/business-license" element={<BusinessLicense />} />

            {/* Fiscal */}
            <Route path="/servicos/fiscal" element={<Fiscal />} />
            <Route path="/servicos/fiscal/declaracao" element={<IRPF />} />
            <Route path="/servicos/fiscal/schedule-c-se" element={<ScheduleC />} />
            <Route path="/servicos/fiscal/child-tax-credit" element={<Dependentes />} />
            <Route path="/servicos/fiscal/documentos-diversos" element={<Formularios />} />
            <Route path="/servicos/fiscal/envio" element={<Envio />} />
            <Route path="/servicos/fiscal/w9" element={<W9 />} />

            {/* Vistos */}
            <Route path="/servicos/vistos" element={<VisaOnlyRoute><Vistos /></VisaOnlyRoute>} />
            <Route path="/servicos/vistos/b1b2" element={<VisaOnlyRoute><B1B2 /></VisaOnlyRoute>} />
            <Route path="/servicos/vistos/f1" element={<VisaOnlyRoute><F1 /></VisaOnlyRoute>} />
            <Route path="/servicos/vistos/f2" element={<VisaOnlyRoute><F2 /></VisaOnlyRoute>} />
            <Route path="/servicos/vistos/eb2niw" element={<VisaOnlyRoute><EB2NIW /></VisaOnlyRoute>} />
            <Route path="/servicos/vistos/eb1a" element={<VisaOnlyRoute><EB1A /></VisaOnlyRoute>} />
            <Route path="/servicos/vistos/familia" element={<VisaOnlyRoute><Familia /></VisaOnlyRoute>} />
            <Route path="/servicos/vistos/renovacao" element={<VisaOnlyRoute><Renovacao /></VisaOnlyRoute>} />
            <Route path="/servicos/vistos/casos-especiais" element={<VisaOnlyRoute><CasosEspeciais /></VisaOnlyRoute>} />
            <Route path="/servicos/vistos/complementares" element={<VisaOnlyRoute><Complementares /></VisaOnlyRoute>} />
            <Route path="/servicos/vistos/outros-trabalho" element={<VisaOnlyRoute><OutrosTrabalho /></VisaOnlyRoute>} />


            <Route path="/vistos" element={<Navigate to="/servicos/vistos" replace />} />
            <Route path="/vistos/b1b2" element={<Navigate to="/servicos/vistos/b1b2" replace />} />
            <Route path="/vistos/f1" element={<Navigate to="/servicos/vistos/f1" replace />} />
            <Route path="/vistos/f2" element={<Navigate to="/servicos/vistos/f2" replace />} />
            <Route path="/vistos/eb2niw" element={<Navigate to="/servicos/vistos/eb2niw" replace />} />
            <Route path="/vistos/eb1a" element={<Navigate to="/servicos/vistos/eb1a" replace />} />
            <Route path="/vistos/familia" element={<Navigate to="/servicos/vistos/familia" replace />} />
            <Route path="/vistos/renovacao" element={<Navigate to="/servicos/vistos/renovacao" replace />} />
            <Route path="/vistos/casos-especiais" element={<Navigate to="/servicos/vistos/casos-especiais" replace />} />
            <Route path="/vistos/complementares" element={<Navigate to="/servicos/vistos/complementares" replace />} />
            <Route path="/vistos/outros-trabalho" element={<Navigate to="/servicos/vistos/outros-trabalho" replace />} />

            {/* Criação de Sites */}
            <Route path="/criacao-de-sites" element={<CriacaoDeSites />} />

            {/* 🆕 Ebooks & Documentos */}
            <Route path="/ebooks" element={<Ebooks />} />
            <Route path="/servicos/documentos" element={<Documentos />} />
          </Routes>
        </main>

        <Footer />
        <CookieConsent />
        <ChatGuiado />

        {/* Botão flutuante do WhatsApp */}
        <a
          href="https://wa.me/5583998721848"
          aria-label="Fale conosco no WhatsApp"
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg animate-bounce"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="text-2xl" />
        </a>
      </div>
    </Router>
  );
}

export default App;
