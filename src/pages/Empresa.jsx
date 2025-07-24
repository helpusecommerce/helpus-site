// arquivo: Empresa.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaRegBuilding, FaMapMarkerAlt, FaFileContract, FaWpforms, FaIdCard,
  FaStamp, FaDollarSign, FaArrowRight
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const servicos = [
  {
    nome: 'Abertura de LLC + EIN',
    descricao: 'Registro completo da sua empresa nos EUA, incluindo número fiscal.',
    rota: '/servicos/empresa/abertura',
    preco: '$79.00'
  },
  {
    nome: 'Endereço Fiscal nos EUA',
    descricao: 'Serviço de endereço para recebimento de correspondência oficial.',
    rota: '/servicos/empresa/endereco-fiscal',
    preco: '$35.00'
  },
  {
    nome: 'Operating Agreement',
    descricao: 'Contrato de operação para LLC, essencial para abrir conta bancária.',
    rota: '/servicos/empresa/operating-agreement',
    preco: '$25.00'
  },
  {
    nome: 'ITIN (para estrangeiros sem SSN)',
    descricao: 'Solicitação completa de ITIN para sócios ou investidores.',
    rota: '/servicos/empresa/itin',
    preco: '$59.00'
  },
  {
    nome: 'Formulário W-7',
    descricao: 'Preenchimento do W-7 e carta explicativa para ITIN.',
    rota: '/servicos/empresa/w7',
    preco: '$29.00'
  },
  {
    nome: 'Licença Comercial nos EUA',
    descricao: 'Obtenção da licença comercial em qualquer estado americano, com formulário e código corretos.',
    rota: '/servicos/empresa/business-license',
    preco: '$49.00'
  }
];

const fluxos = [
  [
    { icon: <FaWpforms className="text-2xl text-blue-600" />, label: 'Formulário de Registro' },
    { icon: <FaDollarSign className="text-2xl text-green-600" />, label: 'Taxa Estadual' },
    { icon: <FaIdCard className="text-2xl text-blue-600" />, label: 'Obtenção do EIN' },
    { icon: <FaRegBuilding className="text-3xl text-blue-700" />, label: 'Abertura da LLC + EIN', bold: true }
  ],
  [
    { icon: <FaFileContract className="text-2xl text-blue-600" />, label: 'Modelo de Contrato' },
    { icon: <FaWpforms className="text-2xl text-blue-600" />, label: 'Personalização' },
    { icon: <FaFileContract className="text-3xl text-blue-700" />, label: 'Operating Agreement', bold: true },
    { icon: <FaMapMarkerAlt className="text-3xl text-blue-700" />, label: 'Endereço Fiscal', bold: true }
  ],
  [
    { icon: <FaWpforms className="text-2xl text-blue-600" />, label: 'Formulário W-7' },
    { icon: <FaFileContract className="text-2xl text-blue-600" />, label: 'Carta Explicativa' },
    { icon: <FaIdCard className="text-3xl text-blue-700" />, label: 'ITIN', bold: true }
  ],
  [
    { icon: <FaStamp className="text-3xl text-blue-700" />, label: 'Licença Comercial', bold: true }
  ]
];

const explicacoesEtapas = Object.fromEntries(Object.entries({
  'Formulário de Registro': `Requer o envio dos Articles of Organization para o estado.
Pré-requisito para: Obtenção do EIN
Formulário: varia por estado. Exemplo: https://www.sos.alabama.gov/business-entities/llc-forms
Custo médio: $50 a $150`,

  'Taxa Estadual': `Pagamento obrigatório ao estado para validar o registro da empresa.
Pré-requisito para: Abertura da LLC
Formulário: incluso no envio do registro estadual
Valor médio: $50–$300 (dependendo do estado)`,

  'Obtenção do EIN': `Número de identificação fiscal emitido pelo IRS após criação da LLC.
Pré-requisito para: Abertura de conta bancária e ITIN
Formulário: SS-4 (https://www.irs.gov/pub/irs-pdf/fss4.pdf)
Custo: gratuito (pelo site ou fax do IRS)`,

  'Abertura da LLC + EIN': `Combinação prática do processo de registro da LLC com a solicitação do EIN.
Pré-requisito para: Operating Agreement, Endereço Fiscal, Conta bancária
Valor médio total: $79.00 no pacote HelpUS`,

  'Modelo de Contrato': `Base para criação do Operating Agreement.
Pré-requisito para: Personalização e assinatura
Formulário: Modelo interno (sem link público)`,

  'Personalização': `Adaptação do contrato às necessidades da empresa.
Pré-requisito para: Uso oficial do Operating Agreement
Ferramenta usada: editor ou consultoria personalizada`,

  'Operating Agreement': `Contrato exigido por bancos, investidores e parceiros.
Pré-requisito para: Conta bancária, aplicação de regras internas
Documento: interno, assinado pelos membros
Valor do serviço: $25.00 (HelpUS)`,

  'Endereço Fiscal': `Endereço oficial da empresa para fins fiscais e bancários.
Pré-requisito para: Obtenção de ITIN, Licença Comercial
Serviço disponível: HelpUS - $35.00`,

  'Formulário W-7': `Utilizado por estrangeiros sem SSN para solicitar o ITIN.
Pré-requisito para: ITIN
Formulário: https://www.irs.gov/pub/irs-pdf/fw7.pdf
Valor médio do serviço: $29.00`,

  'Carta Explicativa': `Documento que justifica o pedido de ITIN ao IRS.
Pré-requisito para: ITIN
Conteúdo: descreve a necessidade do ITIN em relação à LLC ou investimentos
Incluída no serviço HelpUS`,

  'ITIN': `Número de identificação fiscal individual para estrangeiros.
Pré-requisito para: abrir conta bancária sem SSN
Formulário: W-7 + carta explicativa
Valor médio: $59.00 (HelpUS)`,

  'Licença Comercial': `Autorização para exercer atividades comerciais no estado.
Pré-requisito para: iniciar operação legal
Formulários e regras variam conforme a cidade/estado
Valor médio: $50 a $100 dependendo da localidade
Serviço HelpUS: $49.00`
}).map(([k, v]) => [
  k,
  v.split('\n').map((line, i) => (
    <div key={i} className="mb-1 text-xs text-left">{line}</div>
  ))
]));

export default function Empresa() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Serviços para Abertura de Empresa
        </h2>

        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-center text-blue-700 mb-4">
            Fluxograma Detalhado do Processo
          </h3>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Passe o mouse sobre cada etapa para visualizar mais detalhes do processo.
          </p>

          {fluxos.map((linha, i) => (
            <div key={i} className="flex flex-wrap justify-center items-center gap-3 mb-12">
              {linha.map((etapa, j) => (
                <React.Fragment key={j}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative group bg-white shadow-xl border border-blue-200 rounded-xl p-3 w-36 h-20 flex flex-col items-center justify-center text-center transition transform hover:shadow-2xl"
                  >
                    <div className="text-xl mb-1 text-blue-600">{etapa.icon}</div>
                    <span className="text-xs font-semibold text-blue-800">{etapa.label}</span>

                    <div className="absolute z-50 top-0 left-1/2 -translate-x-1/2 -translate-y-full mb-2 bg-white border border-blue-300 rounded shadow-lg p-3 w-72 text-left text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      {explicacoesEtapas[etapa.label]}
                    </div>
                  </motion.div>
                  {j < linha.length - 1 && <FaArrowRight className="text-gray-400 text-xl self-center" />}
                </React.Fragment>
              ))}
            </div>
          ))}

          <div className="text-center mt-10">
            <a
              href="#servicos"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition"
            >
              Ver serviços disponíveis
            </a>
          </div>
        </div>

        <div id="servicos" className="grid md:grid-cols-2 gap-6">
          {servicos.map((item, i) => (
            <div
              key={i}
              className="border rounded-lg shadow p-6 bg-gray-50 hover:shadow-lg transition flex flex-col justify-between"
              data-aos="fade-up"
            >
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  <Link to={item.rota} className="hover:underline">{item.nome}</Link>
                </h3>
                <p className="text-gray-600 text-sm mb-4">{item.descricao}</p>
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <p className="text-blue-600 font-bold">{item.preco}</p>
                <a
                  href={`https://wa.me/5583998721848?text=Olá! Tenho interesse no serviço: ${encodeURIComponent(item.nome)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-center bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
                >
                  Contratar agora via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <img src="/selo-confiança.png" alt="Selo de confiança" className="mx-auto w-40" />
          <p className="text-sm text-gray-500 mt-2">
            Atendimento seguro, discreto e aprovado por clientes reais.
          </p>
        </div>
      </div>
    </section>
  );
}
