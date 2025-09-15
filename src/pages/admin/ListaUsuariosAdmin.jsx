// 📄 src/pages/admin/ListaUsuariosAdmin.jsx
// Atualizado: i18n em todos os textos + seletor local (EN/PT/ES),
// ordenação por ID alfanumérico, ESC para fechar dropdown, a11y
// e sync com localStorage('lang').

import React, { useEffect, useMemo, useState, useCallback, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { apiFetch } from '../../services/api';
import { useTranslation } from 'react-i18next';

const PAGE_SIZE = 10;

export default function ListaUsuariosAdmin() {
  const { t, i18n } = useTranslation();

  const [usuarios, setUsuarios] = useState([]);
  const [erro, setErro] = useState('');
  const [loading, setLoading] = useState(true);

  const [q, setQ] = useState('');
  const [sortKey, setSortKey] = useState('id');   // 'id' | 'email' | 'role' | 'site'
  const [sortDir, setSortDir] = useState('asc');  // 'asc' | 'desc'
  const [page, setPage] = useState(1);

  const navigate = useNavigate();
  const usuario = JSON.parse(localStorage.getItem('usuario') || 'null');

  // ► sincroniza i18n com lang salvo (se existir)
  useEffect(() => {
    try {
      const saved = localStorage.getItem('lang');
      if (saved && saved !== i18n.language) i18n.changeLanguage(saved);
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ► Seletor de Idiomas (local)
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);
  const languages = useMemo(
    () => [
      { code: 'en', label: 'English' },
      { code: 'pt', label: 'Português' },
      { code: 'es', label: 'Español' },
    ],
    []
  );
  const currentCode = i18n.resolvedLanguage || i18n.language || 'en';
  const currentLang = languages.find((l) => l.code === currentCode) || languages[0];

  useEffect(() => {
    const onDoc = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
    };
    const onKey = (e) => { if (e.key === 'Escape') setLangOpen(false); };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('touchstart', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('touchstart', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  const changeLang = (code) => {
    i18n.changeLanguage(code);
    try { localStorage.setItem('lang', code); } catch {}
    setLangOpen(false);
  };

  const carregarUsuarios = useCallback(async () => {
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
          setErro(dados.error || t('users.error_fetch', { defaultValue: 'Erro ao buscar usuários.' }));
        }
      }
    } catch {
      setErro(t('common.connection_error', { defaultValue: 'Erro de conexão com o servidor.' }));
    } finally {
      setLoading(false);
    }
  }, [navigate, t]);

  useEffect(() => {
    carregarUsuarios();
  }, [carregarUsuarios]);

  // filtro (cliente)
  const filtrados = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return usuarios;
    return usuarios.filter((u) => {
      const email = (u.email || '').toLowerCase();
      const role  = (u.role_nome || u.tipo || '').toLowerCase();
      const site  = (u.site_nome || u.site_slug || '').toLowerCase();
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
          // IDs podem ser UUID/strings => ordenar lexicograficamente
          va = String(a.id ?? '').toLowerCase();
          vb = String(b.id ?? '').toLowerCase();
      }
      if (va < vb) return -1 * dir;
      if (va > vb) return 1 * dir;
      return 0;
    });
    return arr;
  }, [filtrados, sortKey, sortDir]);

  // paginação (cliente)
  const totalPages  = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const pageClamped = Math.min(Math.max(1, page), totalPages);
  const start       = (pageClamped - 1) * PAGE_SIZE;
  const current     = sorted.slice(start, start + PAGE_SIZE);

  // handlers
  const toggleSort = (key) => {
    if (sortKey === key) setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    else { setSortKey(key); setSortDir('asc'); }
    setPage(1);
  };

  const excluirUsuario = async (id) => {
    if (usuario && String(usuario.id) === String(id)) {
      alert(t('users.cannot_delete_self', { defaultValue: 'Você não pode excluir seu próprio usuário.' }));
      return;
    }
    if (!window.confirm(t('users.confirm_delete', { defaultValue: 'Tem certeza que deseja excluir este usuário?' }))) return;

    try {
      const resposta = await apiFetch(`/usuarios/${id}`, { method: 'DELETE' });
      const dados = await resposta.json();

      if (resposta.ok) {
        alert(dados.mensagem || t('users.deleted', { defaultValue: 'Usuário excluído.' }));
        setUsuarios((prev) => prev.filter((u) => u.id !== id));
      } else {
        alert(dados.error || t('users.error_delete', { defaultValue: 'Erro ao excluir usuário.' }));
      }
    } catch {
      alert(t('common.connection_error', { defaultValue: 'Erro de conexão com o servidor.' }));
    }
  };

  return (
    <section className="p-6">
      <div className="flex items-start sm:items-center flex-col sm:flex-row gap-3 justify-between mb-4">
        <div>
          <h1 className="text-2xl font-semibold">
            {t('users.title', { defaultValue: 'Área Administrativa - Usuários' })}
          </h1>
          <p className="text-sm text-gray-600">
            {t('users.welcome', { defaultValue: 'Bem-vindo, ' })}
            <strong>{usuario?.email}</strong>
          </p>
        </div>

        <div className="flex gap-2 w-full sm:w-auto items-center">
          {/* 🔤 Seletor de Idiomas (local) */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="px-3 py-2 border rounded text-sm bg-white hover:bg-gray-50"
              aria-haspopup="listbox"
              aria-expanded={langOpen}
              aria-label={t('common.language', { defaultValue: 'Idioma' })}
              title={t('common.language', { defaultValue: 'Idioma' })}
            >
              {currentLang.code.toUpperCase()}
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-10" role="listbox">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => changeLang(l.code)}
                    role="option"
                    aria-selected={l.code === currentLang.code}
                    className={`block w-full text-left px-3 py-2 text-sm hover:bg-gray-100 ${
                      l.code === currentLang.code ? 'font-semibold' : ''
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 🔎 Busca */}
          <input
            type="text"
            className="border rounded px-3 py-2 text-sm w-full sm:w-64"
            placeholder={t('users.search_placeholder', { defaultValue: 'Buscar por e-mail, tipo ou site…' })}
            value={q}
            onChange={(e) => { setQ(e.target.value); setPage(1); }}
            aria-label={t('users.search_aria', { defaultValue: 'Buscar usuários' })}
          />

          <Link
            to="/admin/cadastro-usuario"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 whitespace-nowrap"
          >
            {t('users.new', { defaultValue: '+ Novo Usuário' })}
          </Link>
        </div>
      </div>

      {erro && (
        <div
          className="bg-red-100 border border-red-300 text-red-700 px-4 py-2 rounded mb-4 flex items-center justify-between"
          role="alert"
          aria-live="polite"
        >
          <span>{erro}</span>
          <button onClick={carregarUsuarios} className="text-red-800 underline hover:opacity-80">
            {t('common.try_again', { defaultValue: 'Tentar novamente' })}
          </button>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300 shadow-md">
          <thead className="bg-gray-100">
            <tr>
              {[
                { key: 'id',    label: t('users.col_id',    { defaultValue: 'ID' }) },
                { key: 'email', label: t('users.col_email', { defaultValue: 'Email' }) },
                { key: 'role',  label: t('users.col_role',  { defaultValue: 'Tipo' }) },
                { key: 'site',  label: t('users.col_site',  { defaultValue: 'Site' }) },
                { key: 'acoes', label: t('users.col_actions',{ defaultValue: 'Ações' }), noSort: true },
              ].map((col) => (
                <th
                  key={col.key}
                  className="px-4 py-2 text-left border select-none"
                  onClick={!col.noSort ? () => toggleSort(col.key) : undefined}
                  title={!col.noSort ? t('users.click_to_sort', { defaultValue: 'Clique para ordenar' }) : undefined}
                >
                  <div className="flex items-center gap-1">
                    <span>{col.label}</span>
                    {!col.noSort && sortKey === col.key && (
                      <span aria-hidden className="text-xs">{sortDir === 'asc' ? '▲' : '▼'}</span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {loading ? (
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
                  {q
                    ? t('users.empty_search', { defaultValue: 'Nenhum usuário encontrado para a busca.' })
                    : t('users.empty_list',   { defaultValue: 'Nenhum usuário cadastrado.' })}
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
                  <td className="px-4 py-2 border">{user.site_nome || user.site_slug || '—'}</td>
                  <td className="px-4 py-2 border">
                    <div className="flex items-center gap-3">
                      <Link
                        to={`/admin/editar-usuario/${user.id}`}
                        className="text-blue-600 hover:underline"
                        title={t('users.edit', { defaultValue: 'Editar' })}
                        aria-label={t('users.edit_user', { email: user.email, defaultValue: 'Editar usuário {{email}}' })}
                      >
                        ✏️
                      </Link>
                      <button
                        onClick={() => excluirUsuario(user.id)}
                        className="text-red-600 hover:underline"
                        title={t('users.delete', { defaultValue: 'Excluir' })}
                        aria-label={t('users.delete_user', { email: user.email, defaultValue: 'Excluir usuário {{email}}' })}
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

      {!loading && sorted.length > 0 && (
        <div className="flex items-center justify-between mt-4 text-sm">
          <div>
            {t('users.showing', {
              defaultValue: 'Mostrando {{from}}-{{to}} de {{total}}',
              from: start + 1,
              to: Math.min(start + PAGE_SIZE, sorted.length),
              total: sorted.length,
            })}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="px-3 py-1 border rounded disabled:opacity-50"
              disabled={pageClamped === 1}
            >
              {t('common.prev', { defaultValue: 'Anterior' })}
            </button>
            <span className="px-2 py-1">
              {t('users.page_of', {
                defaultValue: 'Página {{page}} de {{pages}}',
                page: pageClamped,
                pages: totalPages,
              })}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className="px-3 py-1 border rounded disabled:opacity-50"
              disabled={pageClamped === totalPages}
            >
              {t('common.next', { defaultValue: 'Próxima' })}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
