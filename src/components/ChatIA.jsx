// ChatIA.jsx
import React, { useState } from 'react';

const ChatIA = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch(
        'https://api-inference.huggingface.co/models/HuggingFaceH4/zephyr-7b-beta',
        {
          method: 'POST',
          headers: {
            Authorization: 'Bearer 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',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            inputs: input, // ✅ Corrigido: texto direto
          }),
        }
      );

      const data = await response.json();
      const botReply =
        data?.generated_text ||
        data?.[0]?.generated_text ||
        'Desculpe, não consegui entender.';

      setMessages((prev) => [...prev, { role: 'bot', content: botReply }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: 'bot', content: 'Erro na resposta da IA.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Botão flutuante */}
      <button
        onClick={toggleChat}
        className="fixed bottom-24 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg"
      >
        🤖
      </button>

      {/* Janela de Chat */}
      {isOpen && (
        <div className="fixed bottom-28 right-6 w-80 h-96 bg-white border border-gray-300 rounded-lg shadow-lg z-50 flex flex-col">
          <div className="bg-blue-600 text-white p-2 text-center font-bold rounded-t-lg">
            Atendente Virtual
          </div>

          <div className="flex-1 overflow-y-auto p-2 space-y-2 text-sm">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-md max-w-[90%] ${
                  msg.role === 'user'
                    ? 'bg-blue-100 self-end ml-auto'
                    : 'bg-gray-100 self-start mr-auto'
                }`}
              >
                {msg.content}
              </div>
            ))}
            {loading && <div className="text-gray-500 italic">Digitando...</div>}
          </div>

          <div className="p-2 border-t flex">
            <input
              type="text"
              className="flex-1 border rounded-l px-2 py-1 text-sm"
              placeholder="Digite sua dúvida..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-r text-sm"
            >
              Enviar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatIA;
