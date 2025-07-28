import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiFetch } from '../../services/api'; // ✅ função centralizada

const CadastroUsuario = () => {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [roleId, setRoleId] = useState('');
  const [siteSlug, setSiteSlug] = useState('');
  const [roles, setRoles] = useState([]);
  const [sites, setSites] = useState([]);
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

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
        setErro('Erro ao carregar dados.');
      }
    };

    carregarDados();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro('');

    try {
      const resposta = await apiFetch('/usuarios', {
        method: 'POST',
        body: JSON.stringify({
          email,
          nome,
          role_id: roleId,
          site_slug: siteSlug,
          tipo: 'operador' // valor fixo
        }),
      });

      const dados = await resposta.json();

      if (resposta.ok) {
        alert('Usuário cadastrado com sucesso!');
        navigate('/admin');
      } else {
        setErro(dados.error || 'Erro ao cadastrar usuário');
      }
    } catch (err) {
      setErro('Erro de conexão com o servidor');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 px-4">
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-center">Cadastro de Usuário Admin</h2>

        {erro && <p className="text-red-600 text-sm mb-4 text-center">{erro}</p>}

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
              <option key={r.id} value={r.id}>{r.name}</option>
            ))}
          </select>
        </div>

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
              <option key={s.slug} value={s.slug}>{s.nome}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default CadastroUsuario;
