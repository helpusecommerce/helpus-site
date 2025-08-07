import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { apiFetch } from '../../services/api';

const ListaUsuariosAdmin = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [erro, setErro] = useState('');
  const navigate = useNavigate();
  const usuario = JSON.parse(localStorage.getItem('usuario'));

  useEffect(() => {
    const carregarUsuarios = async () => {
      try {
        const resposta = await apiFetch('/usuarios');
        const dados = await resposta.json();

        if (resposta.ok) {
          setUsuarios(dados);
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
      }
    };

    carregarUsuarios();
  }, [navigate]);

  const excluirUsuario = async (id) => {
    if (!window.confirm('Tem certeza que deseja excluir este usuário?')) return;

    try {
      const resposta = await apiFetch(`/usuarios/${id}`, {
        method: 'DELETE',
      });

      const dados = await resposta.json();

      if (resposta.ok) {
        alert(dados.mensagem || 'Usuário excluído.');
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
      <h1 className="text-2xl font-semibold mb-4">Área Administrativa - Usuários</h1>
      <p className="mb-6">
        Bem-vindo, <strong>{usuario?.email}</strong>
      </p>

      <div className="mb-4">
        <Link
          to="/admin/cadastro-usuario"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Novo Usuário
        </Link>
      </div>

      {erro && <p className="text-red-600">{erro}</p>}

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300 shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left border">ID</th>
              <th className="px-4 py-2 text-left border">Email</th>
              <th className="px-4 py-2 text-left border">Tipo</th>
              <th className="px-4 py-2 text-left border">Site</th>
              <th className="px-4 py-2 text-left border">Ações</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{user.id}</td>
                <td className="px-4 py-2 border">{user.email}</td>
                <td className="px-4 py-2 border">{user.role_nome || user.tipo}</td>
                <td className="px-4 py-2 border">{user.site_nome || user.site_slug}</td>
                <td className="px-4 py-2 border flex gap-3">
                  <Link
                    to={`/admin/editar-usuario/${user.id}`}
                    className="text-blue-600 hover:underline"
                    title="Editar"
                  >
                    ✏️
                  </Link>
                  <button
                    onClick={() => excluirUsuario(user.id)}
                    className="text-red-600 hover:underline"
                    title="Excluir"
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListaUsuariosAdmin;
