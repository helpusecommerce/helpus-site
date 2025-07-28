// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiFetch } from '../services/api'; // ✅ usa API central

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setCarregando(true);
    setErro('');

    try {
      const resposta = await apiFetch('/login', {
        method: 'POST',
        body: JSON.stringify({ email, senha }),
      });

      const dados = await resposta.json();

      if (resposta.ok) {
        localStorage.setItem('token', dados.token);
        localStorage.setItem('usuario', JSON.stringify(dados.usuario));
        navigate('/admin');
      } else {
        setErro(dados.error || dados.mensagem || 'Erro no login');
      }
    } catch (err) {
      setErro('Erro de conexão com o servidor');
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 px-4">
      <form onSubmit={handleLogin} className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

        {erro && <p className="text-red-600 text-sm mb-4 text-center">{erro}</p>}

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-400"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Senha</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-400"
            required
          />
        </div>

        <button
          type="submit"
          disabled={carregando}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {carregando ? 'Entrando...' : 'Entrar'}
        </button>
      </form>
    </div>
  );
};

export default Login;
