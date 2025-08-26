// 📄 src/pages/admin/ListaUsuariosAdmin.jsx
import React, { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { apiFetch } from '../../services/api';

const PAGE_SIZE = 10;

const ListaUsuariosAdmin = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [erro, setErro] = useState('');
  const [loading, setLoading] = useState(true);

  const [q, setQ] = useState('');            // busca
  const [sortKey, setSortKey] = useState('id'); // 'id' | 'email' | 'role' | 'site'
  const [sortDir, setSortDir] = useState('asc'); // 'asc' | 'desc'
  const [page, setPage] = useState(1);

  const navigate = useNavigate();
  const usuario = JSON.parse(localStorage.getItem('usuario') || 'null');

  const carregarUsuarios = async () => {
    setErro('');
    setLoading(true);
    try {
      const resposta = await apiFetch('/usuarios');
      const dados = await resposta.json();

      if (resposta.ok) {
        setUsuarios(Array.isArray(dados) ? dados : []);
      } else {
        if (resposta.status === 401 || resposta.status === 403) {
          localStorage.clear();
          navigate('/login');
        } else {
          setErro(dados.error || 'Erro ao buscar usuários.');
        }
      }
    } catch (err) {
      setErro('Erro de conexão com o servidor.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarUsuarios();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  // busca (cliente)
  const filtrados = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return usuarios;
    return usuarios.filter((u) => {
      const email = (u.email || '').toLowerCase();
      const role = (u.role_nome || u.tipo || '').toLowerCase();
      const site = (u.site_nome || u.site_slug || '').toLowerCase();
      return email.includes(term) || role.includes(term) || site.includes(term);
    });
  }, [usuarios, q]);

  // ordenação (cliente)
  const sorted = useMemo(() => {
    const arr = [...filtrados];
    arr.sort((a, b) => {
      const dir = sortDir === 'asc' ? 1 : -1;
      let va, vb;
      switch (sortKey) {
        case 'email':
          va = (a.email || '').toLowerCase();
          vb = (b.email || '').toLowerCase();
          break;
        case 'role':
          va = (a.role_nome || a.tipo || '').toLowerCase();
          vb = (b.role_nome || b.tipo || '').toLowerCase();
          break;
        case 'site':
          va = (a.site_nome || a.site_slug || '').toLowerCase();
          vb = (b.site_nome || b.site_slug || '').toLowerCase();
          break;
        case 'id':
        default:
          va = Number(a.id) || 0;
          vb = Number(b.id) || 0;
      }
      if (va < vb) return -1 * dir;
      if (va > vb) return 1 * dir;
      return 0;
    });
    return arr;
  }, [filtrados, sortKey, sortDir]);

  // paginação (cliente)
  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const pageClamped = Math.min(Math.max(1, page), totalPages);
  const start = (pageClamped - 1) * PAGE_SIZE;
  const current = sorted.slice(start, start + PAGE_SIZE);

  // handlers
  const toggleSort = (key) => {
    if (sortKey === key) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortDir('asc');
    }
    setPage(1);
  };

  const excluirUsuario = async (id) => {
    if (usuario && String(usuario.id) === String(id)) {
      alert('Você não pode excluir seu próprio usuário.');
      return;
    }

    if (!window.confirm('Tem certeza que deseja excluir este usuário?')) return;

    try {
      const resposta = await apiFetch(`/usuarios/${id}`, { method: 'DELETE' });
      const dados = await resposta.json();

      if (resposta.ok) {
        alert(dados.mensagem || 'Usuário excluído.');
        // remove da lista sem recarregar
        setUsuarios((prev) => prev.filter((u) => u.id !== id));
      } else {
        alert(dados.error || 'Erro ao excluir usuário.');
      }
    } catch (err) {
      alert('Erro de conexão ao excluir.');
    }
  };

  return (
    <div className="p-6">
      <div className="flex items-start sm:items-center flex-col sm:flex-row gap-3 justify-between mb-4">
        <div>
          <h1 className="text-2xl font-semibold">Área Administrativa - Usuários</h1>
          <p className="text-sm text-gray-600">
            Bem-vindo, <strong>{usuario?.email}</strong>
          </p>
        </div>

        <div className="flex gap-2 w-full sm:w-auto">
          <input
            type="text"
            className="border rounded px-3 py-2 text-sm w-full sm:w-64"
            placeholder="Buscar por e-mail, role ou site…"
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setPage(1);
            }}
            aria-label="Buscar usuários"
          />
          <Link
            to="/admin/cadastro-usuario"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 whitespace-nowrap"
          >
            + Novo Usuário
          </Link>
        </div>
      </div>

      {erro && (
        <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-2 rounded mb-4 flex items-center justify-between">
          <span>{erro}</span>
          <button
            onClick={carregarUsuarios}
            className="text-red-800 underline hover:opacity-80"
          >
            Tentar novamente
          </button>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300 shadow-md">
          <thead className="bg-gray-100">
            <tr>
              {[
                { key: 'id', label: 'ID' },
                { key: 'email', label: 'Email' },
                { key: 'role', label: 'Tipo' },
                { key: 'site', label: 'Site' },
                { key: 'acoes', label: 'Ações', noSort: true },
              ].map((col) => (
                <th
                  key={col.key}
                  className="px-4 py-2 text-left border select-none"
                  onClick={!col.noSort ? () => toggleSort(col.key) : undefined}
                  title={!col.noSort ? 'Clique para ordenar' : undefined}
                >
                  <div className="flex items-center gap-1">
                    <span>{col.label}</span>
                    {!col.noSort && sortKey === col.key && (
                      <span aria-hidden className="text-xs">
                        {sortDir === 'asc' ? '▲' : '▼'}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {loading ? (
              // skeleton
              Array.from({ length: 5 }).map((_, i) => (
                <tr key={i} className="animate-pulse">
                  {Array.from({ length: 5 }).map((__, j) => (
                    <td key={j} className="px-4 py-3 border">
                      <div className="h-4 bg-gray-200 rounded w-24" />
                    </td>
                  ))}
                </tr>
              ))
            ) : current.length === 0 ? (
              <tr>
                <td className="px-4 py-6 text-center text-gray-600 border" colSpan={5}>
                  {q ? 'Nenhum usuário encontrado para a busca.' : 'Nenhum usuário cadastrado.'}
                </td>
              </tr>
            ) : (
              current.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">{user.id}</td>
                  <td className="px-4 py-2 border">{user.email}</td>
                  <td className="px-4 py-2 border">
                    <span className="inline-block px-2 py-0.5 rounded text-xs bg-gray-100 border">
                      {user.role_nome || user.tipo || '—'}
                    </span>
                  </td>
                  <td className="px-4 py-2 border">
                    {user.site_nome || user.site_slug || '—'}
                  </td>
                  <td className="px-4 py-2 border">
                    <div className="flex items-center gap-3">
                      <Link
                        to={`/admin/editar-usuario/${user.id}`}
                        className="text-blue-600 hover:underline"
                        title="Editar"
                        aria-label={`Editar usuário ${user.email}`}
                      >
                        ✏️
                      </Link>
                      <button
                        onClick={() => excluirUsuario(user.id)}
                        className="text-red-600 hover:underline"
                        title="Excluir"
                        aria-label={`Excluir usuário ${user.email}`}
                      >
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Paginação */}
      {!loading && sorted.length > 0 && (
        <div className="flex items-center justify-between mt-4 text-sm">
          <div>
            Mostrando{' '}
            <strong>
              {start + 1}-{Math.min(start + PAGE_SIZE, sorted.length)}
            </strong>{' '}
            de <strong>{sorted.length}</strong>
          </div>
            <div className="flex gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="px-3 py-1 border rounded disabled:opacity-50"
                disabled={pageClamped === 1}
              >
                Anterior
              </button>
              <span className="px-2 py-1">
                Página <strong>{pageClamped}</strong> de <strong>{totalPages}</strong>
              </span>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                className="px-3 py-1 border rounded disabled:opacity-50"
                disabled={pageClamped === totalPages}
              >
                Próxima
              </button>
            </div>
        </div>
      )}
    </div>
  );
};

export default ListaUsuariosAdmin;
