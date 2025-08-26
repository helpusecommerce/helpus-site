// 📁 src/components/ChatIA.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const API_BASE =
  process.env.REACT_APP_API_BASE_URL?.replace(/\/+$/, '') || ''; // CRA
// Ex.: REACT_APP_API_BASE_URL=http://localhost:3001
// Envia em: `${API_BASE}/api/chatgpt`

const ChatIA = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const boxRef = useRef(null);
  const listRef = useRef(null);

  const toggleChat = () => setIsOpen((v) => !v);

  // Mensagem automática ao abrir o chat
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          role: 'bot',
          content:
            t('chatIA.welcome', {
              defaultValue:
                'Olá! Eu sou a Hel, assistente virtual da HelpUS. Posso te ajudar com vistos americanos, abertura de empresa nos EUA ou documentação fiscal. Sobre o que você gostaria de saber?',
            }),
        },
      ]);
    }
  }, [isOpen, messages.length, t]);

  // Auto-scroll quando novas mensagens chegam
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, loading]);

  // Fechar com ESC e clique fora
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    const onClickOutside = (e) => {
      if (isOpen && boxRef.current && !boxRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', onKey);
      document.addEventListener('mousedown', onClickOutside);
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClickOutside);
    };
  }, [isOpen]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { role: 'user', content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/api/chatgpt`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage.content }),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => '');
        throw new Error(text || `HTTP ${res.status}`);
      }

      const data = await res.json().catch(() => ({}));
      const botReply =
        data?.resposta ||
        t('chatIA.fallback', { defaultValue: 'Desculpe, não consegui entender.' });

      setMessages((prev) => [...prev, { role: 'bot', content: botReply }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          content: t('chatIA.error', {
            defaultValue: 'Erro na resposta da IA.',
          }),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Botão flutuante com imagem personalizada */}
      <button
        onClick={toggleChat}
        className="fixed bottom-24 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg"
        aria-label={t('chatIA.open', { defaultValue: 'Abrir chat' })}
        title="Hel"
      >
        <img src="/img/hel-icon.png" alt="Hel" className="w-6 h-6" />
      </button>

      {/* Janela de Chat */}
      {isOpen && (
        <div
          ref={boxRef}
          className="fixed bottom-28 right-6 w-80 h-96 bg-white border border-gray-300 rounded-lg shadow-lg z-50 flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label={t('chatIA.title', { defaultValue: 'Hel • Assistente Virtual' })}
        >
          <div className="bg-blue-600 text-white p-2 text-center font-bold rounded-t-lg">
            {t('chatIA.title', { defaultValue: 'Hel • Assistente Virtual' })}
          </div>

          <div
            ref={listRef}
            className="flex-1 overflow-y-auto p-2 space-y-2 text-sm"
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-md max-w-[90%] break-words whitespace-pre-wrap ${
                  msg.role === 'user'
                    ? 'bg-blue-100 self-end ml-auto text-gray-900'
                    : 'bg-gray-100 self-start mr-auto text-gray-900'
                }`}
              >
                {msg.content}
              </div>
            ))}
            {loading && (
              <div className="text-gray-500 italic">
                {t('chatIA.typing', { defaultValue: 'Digitando...' })}
              </div>
            )}
          </div>

          <div className="p-2 border-t flex">
            <input
              type="text"
              className="flex-1 border rounded-l px-2 py-1 text-sm"
              placeholder={t('chatIA.placeholder', {
                defaultValue: 'Digite sua dúvida...',
              })}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              disabled={loading}
              aria-label={t('chatIA.placeholder', {
                defaultValue: 'Digite sua dúvida...',
              })}
            />
            <button
              onClick={sendMessage}
              className={`px-4 py-1 rounded-r text-sm text-white ${
                loading
                  ? 'bg-blue-300 cursor-not-allowed'
                  : 'bg-blue-500 hover:bg-blue-600'
              }`}
              disabled={loading}
            >
              {t('chatIA.send', { defaultValue: 'Enviar' })}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatIA;
