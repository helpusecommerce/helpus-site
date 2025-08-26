// 📄 src/pages/servicos/empresa/Empresa.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaRegBuilding, FaMapMarkerAlt, FaFileContract, FaWpforms, FaIdCard,
  FaStamp, FaDollarSign, FaArrowRight
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Empresa() {
  const { t, i18n } = useTranslation();
  const lng = i18n.resolvedLanguage || i18n.language || 'pt';

  // Textos principais (fallbacks locais)
  const S = {
    pt: {
      sectionTitle: 'Serviços para Abertura de Empresa',
      flowTitle: 'Fluxograma Detalhado do Processo',
      flowHint: 'Passe o mouse ou toque em cada etapa para ver detalhes.',
      viewServices: 'Ver serviços disponíveis',
      trustAlt: 'Selo de confiança',
      trustLine: 'Atendimento seguro, discreto e aprovado por clientes reais.',
      waPrefix: 'Olá! Tenho interesse no serviço: ',
      // Rótulos das etapas
      labels: {
        form_reg: 'Formulário de Registro',
        state_fee: 'Taxa Estadual',
        ein: 'Obtenção do EIN',
        llc_ein: 'Abertura da LLC + EIN',
        contract_template: 'Modelo de Contrato',
        customization: 'Personalização',
        operating_agreement: 'Operating Agreement',
        fiscal_address: 'Endereço Fiscal',
        w7: 'Formulário W-7',
        cover_letter: 'Carta Explicativa',
        itin: 'ITIN',
        business_license: 'Licença Comercial',
      },
      // Detalhes das etapas (use \n para quebrar linha)
      details: {
        form_reg:
          'Requer o envio dos Articles of Organization para o estado.\nPré-requisito para: Obtenção do EIN\nFormulário: varia por estado. Ex.: https://www.sos.alabama.gov/business-entities/llc-forms\nCusto médio: $50 a $150',
        state_fee:
          'Pagamento obrigatório ao estado para validar o registro.\nPré-requisito para: Abertura da LLC\nFormulário: incluso no envio do registro estadual\nValor médio: $50–$300 (depende do estado)',
        ein:
          'Número de identificação fiscal emitido pelo IRS.\nPré-requisito para: conta bancária, ITIN\nFormulário: SS-4 (https://www.irs.gov/pub/irs-pdf/fss4.pdf)\nCusto: gratuito',
        llc_ein:
          'Combina o registro da LLC e a solicitação do EIN.\nPré-requisito para: Operating Agreement, Endereço Fiscal, Conta bancária\nValor médio no pacote HelpUS: $79.00',
        contract_template:
          'Base para criação do Operating Agreement.\nPré-requisito para: Personalização e assinatura\nFormulário: modelo interno',
        customization:
          'Adaptação do contrato às necessidades da empresa.\nPré-requisito para: uso oficial do Operating Agreement\nFerramenta: editor/consultoria',
        operating_agreement:
          'Contrato exigido por bancos, investidores e parceiros.\nPré-requisito para: conta bancária, regras internas\nValor do serviço (HelpUS): $25.00',
        fiscal_address:
          'Endereço oficial da empresa para fins fiscais e bancários.\nPré-requisito para: ITIN, Licença Comercial\nServiço HelpUS: a partir de $35.00',
        w7:
          'Usado por estrangeiros sem SSN para solicitar o ITIN.\nPré-requisito para: ITIN\nFormulário: https://www.irs.gov/pub/irs-pdf/fw7.pdf\nServiço HelpUS: $29.00',
        cover_letter:
          'Justifica o pedido de ITIN ao IRS.\nPré-requisito para: ITIN\nConteúdo: relação do ITIN com a LLC/investimentos\nInclusa no serviço HelpUS',
        itin:
          'Número de identificação fiscal individual para estrangeiros.\nPré-requisito para: abrir conta bancária sem SSN\nFormulário: W-7 + carta explicativa\nServiço HelpUS: $59.00',
        business_license:
          'Autorização para atividades comerciais.\nPré-requisito para: operação legal\nRegras variam por cidade/estado\nServiço HelpUS: $49.00',
      },
    },
    en: {
      sectionTitle: 'Company Formation Services',
      flowTitle: 'Detailed Process Flow',
      flowHint: 'Hover or tap each step to see details.',
      viewServices: 'See available services',
      trustAlt: 'Trust badge',
      trustLine: 'Secure, discreet service — approved by real clients.',
      waPrefix: "Hello! I'm interested in the service: ",
      labels: {
        form_reg: 'Registration Form',
        state_fee: 'State Fee',
        ein: 'EIN Issuance',
        llc_ein: 'LLC Formation + EIN',
        contract_template: 'Contract Template',
        customization: 'Customization',
        operating_agreement: 'Operating Agreement',
        fiscal_address: 'Fiscal Address',
        w7: 'Form W-7',
        cover_letter: 'Cover Letter',
        itin: 'ITIN',
        business_license: 'Business License',
      },
      details: {
        form_reg:
          'Requires filing Articles of Organization with the state.\nPrerequisite for: EIN Issuance\nForm: varies by state. E.g., https://www.sos.alabama.gov/business-entities/llc-forms\nTypical cost: $50–$150',
        state_fee:
          'Mandatory state payment to validate registration.\nPrerequisite for: LLC Formation\nForm: included with state filing\nTypical value: $50–$300 (by state)',
        ein:
          'Federal tax ID issued by the IRS.\nPrerequisite for: bank account, ITIN\nForm: SS-4 (https://www.irs.gov/pub/irs-pdf/fss4.pdf)\nCost: free',
        llc_ein:
          'Combines LLC registration and EIN request.\nPrerequisite for: Operating Agreement, Fiscal Address, Bank account\nHelpUS bundle: $79.00',
        contract_template:
          'Base template for the Operating Agreement.\nPrerequisite for: customization and signature\nForm: internal template',
        customization:
          'Adapts the contract to your company.\nPrerequisite for: official use of the Operating Agreement\nTool: editor/consulting',
        operating_agreement:
          'Required by banks, investors and partners.\nPrerequisite for: bank account, internal rules\nHelpUS service: $25.00',
        fiscal_address:
          'Official address for tax and banking purposes.\nPrerequisite for: ITIN, Business License\nHelpUS service: from $35.00',
        w7:
          'Used by foreigners without SSN to request an ITIN.\nPrerequisite for: ITIN\nForm: https://www.irs.gov/pub/irs-pdf/fw7.pdf\nHelpUS service: $29.00',
        cover_letter:
          'Explains the ITIN request to the IRS.\nPrerequisite for: ITIN\nContent: links ITIN need to LLC/investments\nIncluded in HelpUS service',
        itin:
          'Individual Taxpayer ID for foreigners.\nPrerequisite for: bank account without SSN\nForm: W-7 + cover letter\nHelpUS service: $59.00',
        business_license:
          'Authorization to operate commercially.\nPrerequisite for: legal operation\nRules vary by city/state\nHelpUS service: $49.00',
      },
    },
    es: {
      sectionTitle: 'Servicios para Apertura de Empresa',
      flowTitle: 'Flujograma Detallado del Proceso',
      flowHint: 'Pasa el cursor o toca cada etapa para ver detalles.',
      viewServices: 'Ver servicios disponibles',
      trustAlt: 'Sello de confianza',
      trustLine: 'Atención segura y discreta, aprobada por clientes reales.',
      waPrefix: '¡Hola! Me interesa el servicio: ',
      labels: {
        form_reg: 'Formulario de Registro',
        state_fee: 'Tasa Estatal',
        ein: 'Emisión del EIN',
        llc_ein: 'Apertura de LLC + EIN',
        contract_template: 'Modelo de Contrato',
        customization: 'Personalización',
        operating_agreement: 'Operating Agreement',
        fiscal_address: 'Dirección Fiscal',
        w7: 'Formulario W-7',
        cover_letter: 'Carta Explicativa',
        itin: 'ITIN',
        business_license: 'Licencia Comercial',
      },
      details: {
        form_reg:
          'Requiere enviar los Articles of Organization al estado.\nRequisito para: Emisión del EIN\nFormulario: varía por estado. Ej.: https://www.sos.alabama.gov/business-entities/llc-forms\nCosto típico: $50–$150',
        state_fee:
          'Pago estatal obligatorio para validar el registro.\nRequisito para: Apertura de la LLC\nFormulario: incluido en el envío estatal\nValor típico: $50–$300 (según el estado)',
        ein:
          'Identificación fiscal emitida por el IRS.\nRequisito para: cuenta bancaria, ITIN\nFormulario: SS-4 (https://www.irs.gov/pub/irs-pdf/fss4.pdf)\nCosto: gratuito',
        llc_ein:
          'Combina el registro de la LLC con la solicitud del EIN.\nRequisito para: Operating Agreement, Dirección Fiscal, Cuenta bancaria\nPaquete HelpUS: $79.00',
        contract_template:
          'Base para crear el Operating Agreement.\nRequisito para: personalización y firma\nFormulario: plantilla interna',
        customization:
          'Adaptación del contrato a la empresa.\nRequisito para: uso oficial del Operating Agreement\nHerramienta: editor/consultoría',
        operating_agreement:
          'Exigido por bancos, inversores y socios.\nRequisito para: cuenta bancaria, reglas internas\nServicio HelpUS: $25.00',
        fiscal_address:
          'Dirección oficial para fines fiscales y bancarios.\nRequisito para: ITIN, Licencia Comercial\nServicio HelpUS: desde $35.00',
        w7:
          'Usado por extranjeros sin SSN para solicitar el ITIN.\nRequisito para: ITIN\nFormulario: https://www.irs.gov/pub/irs-pdf/fw7.pdf\nServicio HelpUS: $29.00',
        cover_letter:
          'Justifica la solicitud del ITIN al IRS.\nRequisito para: ITIN\nContenido: relación del ITIN con la LLC/inversiones\nIncluida en el servicio HelpUS',
        itin:
          'Número de identificación fiscal individual para extranjeros.\nRequisito para: cuenta bancaria sin SSN\nFormulario: W-7 + carta explicativa\nServicio HelpUS: $59.00',
        business_license:
          'Autorización para operar comercialmente.\nRequisito para: operación legal\nReglas varían por ciudad/estado\nServicio HelpUS: $49.00',
      },
    },
  }[lng];

  // Lista de serviços (usa i18n para título/descrição; mantém preço local)
  const servicos = [
    {
      rota: '/servicos/empresa/abertura',
      title: t('services.company.AberturaLLC.title', { defaultValue: 'Abertura de LLC + EIN' }),
      desc: t('services.company.AberturaLLC.desc', { defaultValue: 'Registro completo da sua empresa nos EUA, incluindo número fiscal.' }),
      preco: '$79.00',
    },
    {
      rota: '/servicos/empresa/endereco-fiscal',
      title: t('services.company.EnderecoFiscal.title', { defaultValue: 'Endereço Fiscal nos EUA' }),
      desc: t('services.company.EnderecoFiscal.desc', { defaultValue: 'Serviço de endereço para recebimento de correspondência oficial.' }),
      preco: '$35.00',
    },
    {
      rota: '/servicos/empresa/operating-agreement',
      title: t('services.company.OperatingAgreement.title', { defaultValue: 'Operating Agreement' }),
      desc: t('services.company.OperatingAgreement.desc', { defaultValue: 'Contrato de operação para LLC, essencial para abrir conta bancária.' }),
      preco: '$25.00',
    },
    {
      rota: '/servicos/empresa/itin',
      title: t('services.company.ITIN.title', { defaultValue: 'ITIN (para estrangeiros sem SSN)' }),
      desc: t('services.company.ITIN.desc', { defaultValue: 'Solicitação completa de ITIN para sócios ou investidores.' }),
      preco: '$59.00',
    },
    {
      rota: '/servicos/empresa/w7',
      title: t('services.company.W7.title', { defaultValue: 'Formulário W-7' }),
      desc: t('services.company.W7.desc', { defaultValue: 'Preenchimento do W-7 e carta explicativa para ITIN.' }),
      preco: '$29.00',
    },
    {
      rota: '/servicos/empresa/business-license',
      title: t('services.company.BusinessLicense.title', { defaultValue: 'Licença Comercial nos EUA' }),
      desc: t('services.company.BusinessLicense.desc', { defaultValue: 'Obtenção da licença comercial no estado correto.' }),
      preco: '$49.00',
    },
  ];

  // Fluxos (IDs + ícones); textos vêm de S.labels/S.details
  const fluxos = [
    [
      { id: 'form_reg', icon: <FaWpforms className="text-2xl text-blue-600" /> },
      { id: 'state_fee', icon: <FaDollarSign className="text-2xl text-green-600" /> },
      { id: 'ein', icon: <FaIdCard className="text-2xl text-blue-600" /> },
      { id: 'llc_ein', icon: <FaRegBuilding className="text-3xl text-blue-700" />, bold: true },
    ],
    [
      { id: 'contract_template', icon: <FaFileContract className="text-2xl text-blue-600" /> },
      { id: 'customization', icon: <FaWpforms className="text-2xl text-blue-600" /> },
      { id: 'operating_agreement', icon: <FaFileContract className="text-3xl text-blue-700" />, bold: true },
      { id: 'fiscal_address', icon: <FaMapMarkerAlt className="text-3xl text-blue-700" />, bold: true },
    ],
    [
      { id: 'w7', icon: <FaWpforms className="text-2xl text-blue-600" /> },
      { id: 'cover_letter', icon: <FaFileContract className="text-2xl text-blue-600" /> },
      { id: 'itin', icon: <FaIdCard className="text-3xl text-blue-700" />, bold: true },
    ],
    [{ id: 'business_license', icon: <FaStamp className="text-3xl text-blue-700" />, bold: true }],
  ];

  // CTA do WhatsApp (reaproveita string existente)
  const whatsappCta = t('services.company.AberturaLLC.cta', { defaultValue: 'Contratar agora via WhatsApp' });

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          {S.sectionTitle}
        </h2>

        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-center text-blue-700 mb-4">
            {S.flowTitle}
          </h3>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            {S.flowHint}
          </p>

          {fluxos.map((linha, i) => (
            <div key={i} className="flex flex-wrap justify-center items-center gap-3 mb-12">
              {linha.map((etapa, j) => {
                const label = S.labels[etapa.id];
                const details = (S.details[etapa.id] || '').split('\n');
                return (
                  <React.Fragment key={etapa.id}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative group bg-white shadow-xl border border-blue-200 rounded-xl p-3 w-36 h-20 flex flex-col items-center justify-center text-center transition hover:shadow-2xl"
                    >
                      <div className="text-xl mb-1 text-blue-600">{etapa.icon}</div>
                      <span className={`text-xs ${etapa.bold ? 'font-extrabold' : 'font-semibold'} text-blue-800`}>
                        {label}
                      </span>

                      <div className="absolute z-50 top-0 left-1/2 -translate-x-1/2 -translate-y-full mb-2 bg-white border border-blue-300 rounded shadow-lg p-3 w-72 text-left text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        {details.map((line, k) => (
                          <div key={k} className="mb-1 text-xs">{line}</div>
                        ))}
                      </div>
                    </motion.div>
                    {j < linha.length - 1 && <FaArrowRight className="text-gray-400 text-xl self-center" />}
                  </React.Fragment>
                );
              })}
            </div>
          ))}

          <div className="text-center mt-10">
            <a
              href="#servicos"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition"
            >
              {S.viewServices}
            </a>
          </div>
        </div>

        <div id="servicos" className="grid md:grid-cols-2 gap-6">
          {servicos.map((item, i) => {
            const waMsg = encodeURIComponent(`${S.waPrefix}${item.title}`);
            return (
              <div
                key={i}
                className="border rounded-lg shadow p-6 bg-gray-50 hover:shadow-lg transition flex flex-col justify-between"
                data-aos="fade-up"
              >
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">
                    <Link to={item.rota} className="hover:underline">{item.title}</Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  <p className="text-blue-600 font-bold">{item.preco}</p>
                  <a
                    href={`https://wa.me/5583998721848?text=${waMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-center bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
                  >
                    {whatsappCta}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <img src="/selo-confiança.png" alt={S.trustAlt} className="mx-auto w-40" />
          <p className="text-sm text-gray-500 mt-2">{S.trustLine}</p>
        </div>
      </div>
    </section>
  );
}
