import React, { useState } from 'react';
import { FaComments } from 'react-icons/fa';

function AtendenteVirtual() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botão flutuante para abrir o chat */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg"
      >
        <FaComments className="text-2xl" />
      </button>

      {/* Janela do atendente virtual */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white border rounded-xl shadow-lg z-50 flex flex-col overflow-hidden">
          <div className="bg-blue-600 text-white p-3 font-semibold text-sm flex justify-between items-center">
            Atendente Virtual HelpUS
            <button onClick={() => setIsOpen(false)} className="text-white">✖</button>
          </div>
          <iframe
            src="https://chat.openai.com/g/g-68607ad4f3cc8191bc6f770aaa387e5a-helpus"
            title="ChatGPT HelpUS"
            className="w-full h-full border-none"
            frameBorder="0"
          ></iframe>
        </div>
      )}
    </>
  );
}

export default AtendenteVirtual;
