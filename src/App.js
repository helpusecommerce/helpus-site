// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import { FaWhatsapp } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Chat popup com IA
import ChatIA from './components/ChatIA';

// Páginas principais
import Home from './pages/Home';
import Servicos from './pages/Servicos';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import PoliticaDePrivacidade from './pages/PoliticaDePrivacidade';

// Categorias
import Empresa from './pages/Empresa';
import Fiscal from './pages/Fiscal';
import Vistos from './pages/Vistos';

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

// Empresa
import AberturaLLC from './pages/servicos/empresa/AberturaLLC';
import EnderecoFiscal from './pages/servicos/empresa/EnderecoFiscal';
import OperatingAgreement from './pages/servicos/empresa/OperatingAgreement';
import ITIN from './pages/servicos/empresa/ITIN';
import W7 from './pages/servicos/empresa/W7';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Router>
      <div className="pt-4 md:pt-8 flex flex-col min-h-screen scroll-smooth">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/politica-de-privacidade" element={<PoliticaDePrivacidade />} />

            {/* Empresa */}
            <Route path="/servicos/empresa" element={<Empresa />} />
            <Route path="/servicos/empresa/abertura" element={<AberturaLLC />} />
            <Route path="/servicos/empresa/endereco-fiscal" element={<EnderecoFiscal />} />
            <Route path="/servicos/empresa/operating-agreement" element={<OperatingAgreement />} />
            <Route path="/servicos/empresa/itin" element={<ITIN />} />
            <Route path="/servicos/empresa/w7" element={<W7 />} />

            {/* Fiscal */}
            <Route path="/servicos/fiscal" element={<Fiscal />} />
            <Route path="/servicos/fiscal/declaracao" element={<IRPF />} />
            <Route path="/servicos/fiscal/schedule-c-se" element={<ScheduleC />} />
            <Route path="/servicos/fiscal/child-tax-credit" element={<Dependentes />} />
            <Route path="/servicos/fiscal/documentos-diversos" element={<Formularios />} />
            <Route path="/servicos/fiscal/envio" element={<Envio />} />

            {/* Vistos */}
            <Route path="/servicos/vistos" element={<Vistos />} />
            <Route path="/servicos/vistos/b1b2" element={<B1B2 />} />
            <Route path="/servicos/vistos/f1" element={<F1 />} />
            <Route path="/servicos/vistos/f2" element={<F2 />} />
            <Route path="/servicos/vistos/eb2niw" element={<EB2NIW />} />
            <Route path="/servicos/vistos/eb1a" element={<EB1A />} />
            <Route path="/servicos/vistos/familia" element={<Familia />} />
            <Route path="/servicos/vistos/renovacao" element={<Renovacao />} />
            <Route path="/servicos/vistos/casos-especiais" element={<CasosEspeciais />} />
            <Route path="/servicos/vistos/complementares" element={<Complementares />} />
            <Route path="/servicos/vistos/outros-trabalho" element={<OutrosTrabalho />} />
          </Routes>
        </main>

        <Footer />
        <CookieConsent />
        <ChatIA />

        {/* Botão flutuante do WhatsApp */}
        <a
          href="https://wa.me/5583998721848"
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
