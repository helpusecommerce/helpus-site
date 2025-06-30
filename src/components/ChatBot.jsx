import React, { useState } from 'react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botão para abrir o chat */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-24 z-50 w-16 h-16 rounded-full border-2 border-blue-500 shadow-lg hover:scale-105 transition-transform duration-300"
      >
        <img
          src="/images/atendente.gif"
          alt="Atendente Virtual"
          className="w-full h-full rounded-full"
        />
      </button>

      {/* Janela de chat flutuante */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 h-96 bg-white border border-gray-300 rounded-xl shadow-xl flex flex-col overflow-hidden">
          <div className="bg-blue-600 text-white text-lg font-bold px-4 py-2 flex justify-between items-center">
            Atendente HelpUS
            <button onClick={() => setIsOpen(false)} className="text-white text-xl font-bold">&times;</button>
          </div>
          <div className="flex-1 p-3 overflow-y-auto text-sm text-gray-800">
            <p className="mb-2">Olá! 👋</p>
            <p className="mb-2">
              Sou o atendente virtual da HelpUS. Posso te ajudar com:
            </p>
            <ul className="list-disc pl-5 mb-2">
              <li>Tipos de vistos americanos</li>
              <li>Abertura de empresa nos EUA</li>
              <li>Documentação fiscal</li>
            </ul>
            <p className="mb-2">O que você deseja saber?</p>
            <p className="mt-4 text-blue-600 font-semibold">
              Ou fale direto no WhatsApp:
              <br />
              <a
                href="https://wa.me/5583998721848"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                +55 83 99872-1848
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
