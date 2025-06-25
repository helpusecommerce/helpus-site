import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Servicos from './pages/Servicos';

function App() {
  return (
    <Router>
      <div className="pt-20"> {/* padding-top para não ocultar o conteúdo abaixo do header fixo */}
        <Header />
        <Routes>
          <Route path="/" element={<div className="text-center text-3xl mt-10">Página Inicial</div>} />
          <Route path="/servicos" element={<div className="text-center text-3xl mt-10">Serviços</div>} />
          <Route path="/sobre" element={<div className="text-center text-3xl mt-10">Sobre Nós</div>} />
          <Route path="/contato" element={<div className="text-center text-3xl mt-10">Contato</div>} />
          <Route path="/" element={<Hero />} />
          <Route path="/servicos" element={<Servicos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
