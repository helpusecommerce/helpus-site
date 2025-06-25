import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Servicos from "./pages/Servicos";

// Vistos
import Vistos from "./pages/vistos/Vistos";
import B1B2 from "./pages/vistos/B1B2";
import F1 from "./pages/vistos/F1";
import F2 from "./pages/vistos/F2";
import EB1A from "./pages/vistos/EB1A";
import EB2NIW from "./pages/vistos/EB2NIW";
import Familia from "./pages/vistos/Familia";
import CasosEspeciais from "./pages/vistos/CasosEspeciais";
import OutrosTrabalho from "./pages/vistos/OutrosTrabalho";
import Renovacao from "./pages/vistos/Renovacao";

// Empresa
import LLC from "./pages/empresa/LLC";
import BancoStripe from "./pages/empresa/BancoStripe";
import ClassificacaoFiscal from "./pages/empresa/ClassificacaoFiscal";
import Contratos from "./pages/empresa/Contratos";
import EIN from "./pages/empresa/EIN";

// Fiscal
import W7 from "./pages/fiscal/W7";
import Dependentes from "./pages/fiscal/Dependentes";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/contato" element={<Contato />} />

        {/* Vistos */}
        <Route path="/vistos" element={<Vistos />} />
        <Route path="/vistos/b1b2" element={<B1B2 />} />
        <Route path="/vistos/f1" element={<F1 />} />
        <Route path="/vistos/f2" element={<F2 />} />
        <Route path="/vistos/eb1a" element={<EB1A />} />
        <Route path="/vistos/eb2niw" element={<EB2NIW />} />
        <Route path="/vistos/familia" element={<Familia />} />
        <Route path="/vistos/casosespeciais" element={<CasosEspeciais />} />
        <Route path="/vistos/outrostrabalho" element={<OutrosTrabalho />} />
        <Route path="/vistos/renovacao" element={<Renovacao />} />

        {/* Empresa */}
        <Route path="/empresa/llc" element={<LLC />} />
        <Route path="/empresa/stripe" element={<BancoStripe />} />
        <Route path="/empresa/classificacao-fiscal" element={<ClassificacaoFiscal />} />
        <Route path="/empresa/contratos" element={<Contratos />} />
        <Route path="/empresa/ein" element={<EIN />} />

        {/* Fiscal */}
        <Route path="/fiscal/w7" element={<W7 />} />
        <Route path="/fiscal/dependentes" element={<Dependentes />} />
      </Routes>
    </Router>
  );
}

export default App;
