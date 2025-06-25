import React from "react";
import { Link } from "react-router-dom";

export default function Servicos() {
  return (
    <div className="pt-20 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Nossos Serviços</h2>

      {/* CONSULTORIA PARA VISTOS AMERICANOS */}
      <h3 className="text-2xl font-semibold mt-10 mb-4">Vistos Americanos</h3>
      <ul className="space-y-2">
        <li>
          <Link to="/vistos/b1b2" className="block p-4 bg-white rounded shadow hover:bg-gray-100">
            Visto de Turista (B1/B2)
          </Link>
        </li>
        <li>
          <Link to="/vistos/f1" className="block p-4 bg-white rounded shadow hover:bg-gray-100">
            Visto de Estudante (F1)
          </Link>
        </li>
        <li>
          <Link to="/vistos/f2" className="block p-4 bg-white rounded shadow hover:bg-gray-100">
            Visto de Dependente (F2)
          </Link>
        </li>
        <li>
          <Link to="/vistos/eb2niw" className="block p-4 bg-white rounded shadow hover:bg-gray-100">
            Visto EB2-NIW (Profissionais com Qualificações)
          </Link>
        </li>
        <li>
          <Link to="/vistos/eb1a" className="block p-4 bg-white rounded shadow hover:bg-gray-100">
            Visto EB1-A (Habilidade Extraordinária)
          </Link>
        </li>
        <li>
          <Link to="/vistos/familia" className="block p-4 bg-white rounded shadow hover:bg-gray-100">
            Visto de Família (K1 - Noivo, IR, CR, etc.)
          </Link>
        </li>
        <li>
          <Link to="/vistos/casosespeciais" className="block p-4 bg-white rounded shadow hover:bg-gray-100">
            Casos Especiais (Waiver, Deportação, VAWA)
          </Link>
        </li>
        <li>
          <Link to="/vistos/outrostrabalho" className="block p-4 bg-white rounded shadow hover:bg-gray-100">
            Outros Vistos de Trabalho (L1, H1B, etc.)
          </Link>
        </li>
        <li>
          <Link to="/vistos/renovacao" className="block p-4 bg-white rounded shadow hover:bg-gray-100">
            Renovação de Vistos
          </Link>
        </li>
      </ul>

      {/* ABERTURA DE EMPRESA NOS EUA */}
      <h3 className="text-2xl font-semibold mt-10 mb-4">Abertura de Empresa</h3>
      <ul className="space-y-2">
        <li>
          <Link to="/empresa/llc" className="block p-4 bg-white rounded shadow hover:bg-gray-100">
            Abertura de LLC em qualquer estado
          </Link>
        </li>
        <li>
          <Link to="/empresa/ein" className="block p-4 bg-white rounded shadow hover:bg-gray-100">
            Obtenção de EIN para Pessoa Física ou Jurídica
          </Link>
        </li>
        <li>
          <Link to="/empresa/classificacaofiscal" className="block p-4 bg-white rounded shadow hover:bg-gray-100">
            Classificação Fiscal (S-Corp, Disregarded, etc.)
          </Link>
        </li>
        <li>
          <Link to="/empresa/bancostripe" className="block p-4 bg-white rounded shadow hover:bg-gray-100">
            Conta Bancária e Stripe para LLC
          </Link>
        </li>
        <li>
          <Link to="/empresa/contratos" className="block p-4 bg-white rounded shadow hover:bg-gray-100">
            Contratos, Operating Agreement e Documentação
          </Link>
        </li>
      </ul>

      {/* DOCUMENTAÇÃO FISCAL E TRIBUTÁRIA */}
      <h3 className="text-2xl font-semibold mt-10 mb-4">Documentação Fiscal e Tributária</h3>
      <ul className="space-y-2">
        <li>
          <Link to="/fiscal/imposto-de-renda" className="block p-4 bg-white rounded shadow hover:bg-gray-100">
            Declaração de Imposto de Renda (Tax Return)
          </Link>
        </li>
        <li>
          <Link to="/fiscal/itin" className="block p-4 bg-white rounded shadow hover:bg-gray-100">
            Obtenção de ITIN
          </Link>
        </li>
        <li>
          <Link to="/fiscal/ein" className="block p-4 bg-white rounded shadow hover:bg-gray-100">
            Obtenção de EIN
          </Link>
        </li>
        <li>
          <Link to="/fiscal/w7" className="block p-4 bg-white rounded shadow hover:bg-gray-100">
            Formulário W-7 com Carta Explicativa e Suporte
          </Link>
        </li>
        <li>
          <Link to="/fiscal/dependentes" className="block p-4 bg-white rounded shadow hover:bg-gray-100">
            Inclusão de Dependentes e Benefícios Fiscais
          </Link>
        </li>
      </ul>
    </div>
  );
}
