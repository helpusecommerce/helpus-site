// 📄 src/pages/admin/CadastroUsuario.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiFetch } from '../../services/api';

const CadastroUsuario = () => {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [roleId, setRoleId] = useState('');
  const [siteSlug, setSiteSlug] = useState('');
  const [roles, setRoles] = useState([]);
  const [sites, setSites] = useState([]);
  const [erros, setErros] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // 🔹 Carrega roles e sites ao iniciar
  useEffect(() => {
    const carregarDados = async () => {
      try {
        const [resRoles, resSites] = await Promise.all([
          apiFetch('/roles'),
          apiFetch('/sites'),
        ]);

        const dadosRoles = await resRoles.json();
        const dadosSites = await resSites.json();

        if (resRoles.ok) setRoles(dadosRoles);
        if (resSites.ok) setSites(dadosSites);
      } catch (err) {
        console.error('Erro ao carregar roles/sites:', err);
        setErros(['Erro ao carregar dados.']);
      }
    };

    carregarDados();
  }, []);

  // 🔹 Envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErros([]);

    if (senha.length < 6) {
      setErros(['A senha deve ter pelo menos 6 caracteres.']);
      return;
    }

    setLoading(true);
    try {
      const resposta = await apiFetch('/usuarios', {
        method: 'POST',
        body: JSON.stringify({
          email,
          nome,
          senha,
          role_id: roleId,
          site_slug: siteSlug,
        }),
      });

      const dados = await resposta.json();

      if (resposta.ok) {
        alert('✅ Usuário cadastrado com sucesso!');
        navigate('/admin');
      } else {
        if (dados.errors && Array.isArray(dados.errors)) {
          setErros(dados.errors.map((err) => err.msg));
        } else {
          setErros([dados.error || 'Erro ao cadastrar usuário']);
        }
      }
    } catch (err) {
      setErros(['Erro de conexão com o servidor']);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
      >
        <h2 className="text-xl font-semibold mb-6 text-center">
          Cadastro de Usuário Admin
        </h2>

        {/* Lista de erros */}
        {erros.length > 0 && (
          <ul className="bg-red-100 border border-red-400 text-red-700 text-sm p-3 mb-4 rounded space-y-1">
            {erros.map((erro, index) => (
              <li key={index}>⚠ {erro}</li>
            ))}
          </ul>
        )}

        {/* Nome */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Nome</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        {/* Senha */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Senha</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
          <p className="text-xs text-gray-500 mt-1">
            Mínimo de 6 caracteres.
          </p>
        </div>

        {/* Papel */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Papel (Role)</label>
          <select
            value={roleId}
            onChange={(e) => setRoleId(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          >
            <option value="">Selecione um papel</option>
            {roles.map((r) => (
              <option key={r.id} value={r.id}>
                {r.name}
              </option>
            ))}
          </select>
        </div>

        {/* Site */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Site</label>
          <select
            value={siteSlug}
            onChange={(e) => setSiteSlug(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          >
            <option value="">Selecione o site</option>
            {sites.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.nome}
              </option>
            ))}
          </select>
        </div>

        {/* Botão de envio */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded text-white font-semibold transition ${
            loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {loading ? 'Cadastrando...' : 'Cadastrar'}
        </button>
      </form>
    </div>
  );
};

export default CadastroUsuario;
