// 📁 src/components/ChatGuiado.jsx
import React, { useState, useEffect, useRef } from 'react';
import fluxo from '../fluxo/fluxoChat';

function ChatGuiado() {
  const [aberto, setAberto] = useState(false);
  const [passoAtual, setPassoAtual] = useState('nomeEmail');
  const [historico, setHistorico] = useState(['nomeEmail']);
  const [formData, setFormData] = useState({ nome: '', email: '' });
  const caixaRef = useRef(null);

  const passo = fluxo[passoAtual];

  const handleOpcaoClick = (proximo) => {
    if (fluxo[proximo]) {
      setPassoAtual(proximo);
      setHistorico([...historico, proximo]);
    }
  };

  const voltar = () => {
    if (historico.length > 1) {
      const novoHistorico = [...historico];
      novoHistorico.pop();
      const anterior = novoHistorico[novoHistorico.length - 1];
      setHistorico(novoHistorico);
      setPassoAtual(anterior);
    } else {
      setPassoAtual('nomeEmail');
      setHistorico(['nomeEmail']);
    }
  };

  const reiniciar = () => {
    setPassoAtual('nomeEmail');
    setHistorico(['nomeEmail']);
    setFormData({ nome: '', email: '' });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.nome && formData.email) {
      handleOpcaoClick('inicio');
    }
  };

  // Fecha o chat ao clicar fora
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (caixaRef.current && !caixaRef.current.contains(e.target)) {
        setAberto(false);
      }
    };
    if (aberto) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [aberto]);

  return (
    <>
      {/* Botão flutuante de Hel */}
      {!aberto && (
        <button
          onClick={() => setAberto(true)}
          className="fixed bottom-28 right-6 z-50 rounded-full p-2 shadow-lg bg-white border border-gray-300"
          title="Falar com a Hel"
        >
          <img
            src="/img/hel-icon.png"
            alt="Hel"
            className="w-12 h-12 rounded-full"
          />
        </button>
      )}

      {/* Caixa do chat */}
      {aberto && (
        <div
          ref={caixaRef}
          className="fixed bottom-4 right-4 z-50 w-80 max-h-[90vh] bg-white shadow-xl rounded-lg border border-gray-200 flex flex-col overflow-hidden"
        >
          <div className="bg-blue-600 text-white px-4 py-2 font-bold text-lg flex justify-between items-center">
            <span>💬 Hel - Assistente Virtual</span>
            <button onClick={() => setAberto(false)} className="text-white font-bold text-xl">×</button>
          </div>

          <div className="p-4 overflow-y-auto flex-1">
            {passo.formulario ? (
              <form onSubmit={handleFormSubmit} className="space-y-3">
                <label className="block">
                  <span className="text-sm">Nome:</span>
                  <input
                    type="text"
                    className="w-full border rounded px-2 py-1"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    required
                  />
                </label>
                <label className="block">
                  <span className="text-sm">E-mail:</span>
                  <input
                    type="email"
                    className="w-full border rounded px-2 py-1"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </label>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                  Iniciar atendimento
                </button>
              </form>
            ) : (
              <>
                <p className="mb-4 text-gray-800">{passo.mensagem}</p>

                {passo.opcoes &&
                  passo.opcoes.map((opcao, index) => (
                    <button
                      key={index}
                      onClick={() => handleOpcaoClick(opcao.proximo)}
                      className="block w-full mb-2 bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium py-2 px-3 rounded text-left transition"
                    >
                      {opcao.texto}
                    </button>
                  ))}

                {passo.contato && (
                  <div className="text-sm text-gray-700 space-y-2">
                    <p>📞 WhatsApp: <a href="https://wa.me/5583998721848" className="text-blue-600 underline" target="_blank" rel="noreferrer">+55 83 99872-1848</a></p>
                    <p>📧 E-mail: <a href="mailto:wagner.redes@gmail.com" className="text-blue-600 underline">wagner.redes@gmail.com</a></p>
                  </div>
                )}
              </>
            )}
          </div>

          <div className="bg-gray-100 px-4 py-2 flex justify-between text-sm">
            <button onClick={voltar} className="text-blue-600 hover:underline">⬅ Voltar</button>
            <button onClick={reiniciar} className="text-red-500 hover:underline">🔄 Reiniciar</button>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatGuiado;
