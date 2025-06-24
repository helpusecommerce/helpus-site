import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home = () => <div className="p-4">Bem-vindo à HelpUS</div>;
const Services = () => <div className="p-4">Serviços</div>;
const Contact = () => <div className="p-4">Contato</div>;

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "bg-gray-900 text-white min-h-screen" : "bg-white text-black min-h-screen"}>
      <Router>
        <header className="p-4 shadow flex justify-between items-center">
          <div className="text-xl font-bold">HelpUS</div>
          <nav className="space-x-4">
            <Link to="/">Home</Link>
            <Link to="/services">Serviços</Link>
            <Link to="/contact">Contato</Link>
            <button onClick={() => setDark(!dark)} className="ml-4 px-2 py-1 border rounded">
              {dark ? "☀️" : "🌙"}
            </button>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
