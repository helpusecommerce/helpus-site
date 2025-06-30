import React from 'react';
import { FaRobot } from 'react-icons/fa';

export default function ChatBotFloat() {
  return (
    <a
      href="https://chatgpt.com/g/g-68607ad4f3cc8191bc6f770aaa387e5a-helpus"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition duration-300"
      title="Fale com nosso Assistente Virtual"
    >
      <FaRobot size={28} />
    </a>
  );
}
