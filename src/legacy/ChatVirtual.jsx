// ChatVirtual.jsx
import React, { useState } from 'react';

const ChatVirtual = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Olá! Como posso te ajudar hoje?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setLoading(true);
    setInput('');

    try {
      const response = await fetch('https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.1', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer SUA_API_KEY_AQUI`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ inputs: input })
      });
      const data = await response.json();
      const reply = data?.[0]?.generated_text || 'Desculpe, não consegui entender.';
      setMessages([...newMessages, { role: 'assistant', content: reply }]);
    } catch (error) {
      setMessages([...newMessages, { role: 'assistant', content: 'Erro ao responder. Tente novamente.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-6 w-80 h-96 bg-white border rounded-lg shadow-lg z-50 flex flex-col">
      <div className="bg-blue-500 text-white p-3 font-semibold">Atendente Virtual HelpUS</div>
      <div className="flex-grow overflow-y-auto p-2">
        {messages.map((msg, idx) => (
          <div key={idx} className={`mb-2 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block px-3 py-2 rounded-lg ${msg.role === 'user' ? 'bg-green-100' : 'bg-gray-200'}`}>
              {msg.content}
            </div>
          </div>
        ))}
        {loading && <div className="text-sm text-gray-500">Digitando...</div>}
      </div>
      <div className="p-2 border-t flex">
        <input
          className="flex-grow p-2 border rounded-l"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Digite sua pergunta..."
        />
        <button className="bg-blue-500 text-white px-4 rounded-r" onClick={handleSend}>Enviar</button>
      </div>
    </div>
  );
};

export default ChatVirtual;
