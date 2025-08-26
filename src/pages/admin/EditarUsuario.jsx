// 📄 src/pages/admin/EditarUsuario.jsx
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

  const [erros, setErros] = useState([]);
  const [loadingPage, setLoadingPage] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    let cancel = false;

    const carregarDados = async () => {
      setLoadingPage(true);
      setErros([]);

      try {
        const [resRoles, resSites, resUsuarios] = await Promise.all([
          apiFetch('/roles'),
          apiFetch('/sites'),
          apiFetch('/usuarios'),
        ]);

        const [dadosRoles, dadosSites, dadosUsuarios] = await Promise.all([
          resRoles.ok ? resRoles.json() : Promise.resolve([]),
          resSites.ok ? resSites.json() : Promise.resolve([]),
          resUsuarios.ok ? resUsuarios.json() : Promise.resolve([]),
        ]);

        if (cancel) return;

        setRoles(Array.isArray(dadosRoles) ? dadosRoles : []);
        setSites(Array.isArray(dadosSites) ? dadosSites : []);

        const usuario =
          Array.isArray(dadosUsuarios) &&
          dadosUsuarios.find((u) => String(u.id) === String(id));

        if (!usuario) {
          setErros((e) => [...e, 'Usuário não encontrado.']);
        } else {
          setEmail(usuario.email || '');
          setNome(usuario.nome || '');
          setRoleId(usuario.role_id || '');
          setSiteSlug(usuario.site_slug || '');
        }
      } catch (err) {
        console.error(err);
        setErros((e) => [...e, 'Erro ao carregar dados.']);
      } finally {
        if (!cancel) setLoadingPage(false);
      }
    };

    carregarDados();
    return () => {
      cancel = true;
    };
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErros([]);

    // senha é opcional, mas se preencher, validamos
    if (senha && senha.length < 6) {
      setErros(['A nova senha deve ter pelo menos 6 caracteres.']);
      return;
    }

    setSaving(true);
    try {
      const payload = {
        email,
        nome,
        role_id: roleId,
        site_slug: siteSlug,
      };
      if (senha) payload.senha = senha;

      const resposta = await apiFetch(`/usuarios/${id}`, {
        method: 'PUT',
        body: JSON.stringify(payload),
      });

      const dados = await resposta.json().catch(() => ({}));

      if (resposta.ok) {
        alert('✅ Usuário atualizado com sucesso!');
        navigate('/admin');
      } else {
        if (dados?.errors && Array.isArray(dados.errors)) {
          setErros(dados.errors.map((e) => e.msg));
        } else {
          setErros([dados?.error || 'Erro ao editar usuário.']);
        }
      }
    } catch (err) {
      setErros(['Erro de conexão ao salvar.']);
    } finally {
      setSaving(false);
    }
  };

  if (loadingPage) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
          <div className="animate-pulse space-y-4">
            <div className="h-6 bg-gray-200 rounded w-1/2" />
            <div className="h-10 bg-gray-200 rounded" />
            <div className="h-10 bg-gray-200 rounded" />
            <div className="h-10 bg-gray-200 rounded" />
            <div className="h-10 bg-gray-200 rounded" />
            <div className="h-10 bg-gray-200 rounded" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
      >
        <h2 className="text-xl font-semibold mb-6 text-center">Editar Usuário</h2>

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

        {/* Senha (opcional) */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Nova senha (opcional)</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            placeholder="Deixe em branco para não alterar"
          />
          {senha && senha.length < 6 && (
            <p className="text-xs text-red-600 mt-1">Mínimo de 6 caracteres.</p>
          )}
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

        {/* Ações */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="w-1/2 bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300 transition"
          >
            Cancelar
          </button>
          <button
            type="submit"
            disabled={saving}
            className={`w-1/2 py-2 rounded text-white font-semibold transition ${
              saving ? 'bg-green-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            {saving ? 'Salvando...' : 'Salvar alterações'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditarUsuario;
