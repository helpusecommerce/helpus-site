// 📁 src/components/ChatGuiado.jsx
import React, { useState, useEffect, useRef } from 'react';
import fluxo from '../fluxo/fluxoChat';
import { useTranslation } from 'react-i18next';

function ChatGuiado() {
  const { t } = useTranslation();
  const [aberto, setAberto] = useState(false);
  const [passoAtual, setPassoAtual] = useState('nomeEmail');
  const [historico, setHistorico] = useState(['nomeEmail']);
  const [formData, setFormData] = useState({ nome: '', email: '' });
  const caixaRef = useRef(null);
  const nomeInputRef = useRef(null);

  const passo = fluxo[passoAtual];

  const handleOpcaoClick = (proximo) => {
    if (fluxo[proximo]) {
      setPassoAtual(proximo);
      setHistorico((h) => [...h, proximo]);
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

  // Foco no primeiro campo quando abrir e estiver no formulário
  useEffect(() => {
    if (aberto && passo?.formulario && nomeInputRef.current) {
      nomeInputRef.current.focus();
    }
  }, [aberto, passo?.formulario]);

  // Fecha o chat ao clicar fora
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (caixaRef.current && !caixaRef.current.contains(e.target)) {
        setAberto(false);
      }
    };
    if (aberto) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [aberto]);

  // Fechar com ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setAberto(false);
    };
    if (aberto) {
      document.addEventListener('keydown', onKey);
    }
    return () => document.removeEventListener('keydown', onKey);
  }, [aberto]);

  return (
    <>
      {/* Botão flutuante de Hel */}
      {!aberto && (
        <button
          onClick={() => setAberto(true)}
          className="fixed bottom-28 right-6 z-50 rounded-full p-2 shadow-lg bg-white border border-gray-300"
          title={t('chat.open_title', { defaultValue: 'Talk to Hel' })}
          aria-label={t('chat.open_title', { defaultValue: 'Talk to Hel' })}
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
          role="dialog"
          aria-modal="true"
          aria-labelledby="hel-chat-title"
        >
          <div className="bg-blue-600 text-white px-4 py-2 font-bold text-lg flex justify-between items-center">
            <span id="hel-chat-title">💬 {t('chat.title', { defaultValue: 'Hel - Virtual Assistant' })}</span>
            <button
              onClick={() => setAberto(false)}
              className="text-white font-bold text-xl"
              aria-label={t('chat.close', { defaultValue: 'Close' })}
              title={t('chat.close', { defaultValue: 'Close' })}
            >
              ×
            </button>
          </div>

          <div className="p-4 overflow-y-auto flex-1">
            {passo?.formulario ? (
              <form onSubmit={handleFormSubmit} className="space-y-3">
                <label className="block">
                  <span className="text-sm">{t('chat.form.name', { defaultValue: 'Name:' })}</span>
                  <input
                    ref={nomeInputRef}
                    type="text"
                    className="w-full border rounded px-2 py-1"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    placeholder={t('chat.form.name_ph', { defaultValue: 'Your name' })}
                    required
                  />
                </label>
                <label className="block">
                  <span className="text-sm">{t('chat.form.email', { defaultValue: 'Email:' })}</span>
                  <input
                    type="email"
                    className="w-full border rounded px-2 py-1"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t('chat.form.email_ph', { defaultValue: 'you@email.com' })}
                    required
                  />
                </label>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                  {t('chat.form.start', { defaultValue: 'Start service' })}
                </button>
              </form>
            ) : (
              <>
                <p className="mb-4 text-gray-800">{passo?.mensagem}</p>

                {passo?.opcoes &&
                  passo.opcoes.map((opcao, index) => (
                    <button
                      key={index}
                      onClick={() => handleOpcaoClick(opcao.proximo)}
                      className="block w-full mb-2 bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium py-2 px-3 rounded text-left transition"
                    >
                      {opcao.texto}
                    </button>
                  ))}

                {passo?.contato && (
                  <div className="text-sm text-gray-700 space-y-2">
                    <p>
                      📞 {t('chat.contact.whats', { defaultValue: 'WhatsApp:' })}{' '}
                      <a
                        href="https://wa.me/5583998721848"
                        className="text-blue-600 underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        +55 83 99872-1848
                      </a>
                    </p>
                    <p>
                      📧 {t('chat.contact.email', { defaultValue: 'Email:' })}{' '}
                      <a
                        href="mailto:wagner.redes@gmail.com"
                        className="text-blue-600 underline"
                      >
                        wagner.redes@gmail.com
                      </a>
                    </p>
                  </div>
                )}
              </>
            )}
          </div>

          <div className="bg-gray-100 px-4 py-2 flex justify-between text-sm">
            <button onClick={voltar} className="text-blue-600 hover:underline">
              ⬅ {t('chat.back', { defaultValue: 'Back' })}
            </button>
            <button onClick={reiniciar} className="text-red-500 hover:underline">
              🔄 {t('chat.reset', { defaultValue: 'Reset' })}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatGuiado;
