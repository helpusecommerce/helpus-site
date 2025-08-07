import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { apiFetch } from '../../services/api';

const EditarUsuario = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [roleId, setRoleId] = useState('');
  const [siteSlug, setSiteSlug] = useState('');
  const [roles, setRoles] = useState([]);
  const [sites, setSites] = useState([]);
  const [erro, setErro] = useState('');

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const [resRoles, resSites, resUsuarios] = await Promise.all([
          apiFetch('/roles'),
          apiFetch('/sites'),
          apiFetch('/usuarios'),
        ]);

        const dadosRoles = await resRoles.json();
        const dadosSites = await resSites.json();
        const dadosUsuarios = await resUsuarios.json();

        const usuario = dadosUsuarios.find((u) => String(u.id) === String(id));
        if (!usuario) return setErro('Usuário não encontrado.');

        setEmail(usuario.email);
        setNome(usuario.nome);
        setRoleId(usuario.role_id || '');
        setSiteSlug(usuario.site_slug || '');

        setRoles(dadosRoles);
        setSites(dadosSites);
      } catch (err) {
        console.error(err);
        setErro('Erro ao carregar dados.');
      }
    };

    carregarDados();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro('');

    try {
      const resposta = await apiFetch(`/usuarios/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          email,
          nome,
          senha: senha || undefined, // só envia se preenchido
          role_id: roleId,
          site_slug: siteSlug,
        }),
      });

      const dados = await resposta.json();

      if (resposta.ok) {
        alert('Usuário atualizado com sucesso!');
        navigate('/admin');
      } else {
        if (dados.errors && Array.isArray(dados.errors)) {
          setErro(dados.errors.map((e) => e.msg).join(' | '));
        } else {
          setErro(dados.error || 'Erro ao editar usuário.');
        }
      }
    } catch (err) {
      setErro('Erro de conexão ao salvar.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-center">Editar Usuário</h2>

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
          <label className="block text-sm font-medium mb-1">Nova senha (opcional)</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full border px-3 py-2 rounded"
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
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Salvar alterações
        </button>
      </form>
    </div>
  );
};

export default EditarUsuario;
