// 📄 src/pages/servicos/fiscal/Fiscal.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Fiscal() {
  const { t, i18n } = useTranslation();
  const lng = i18n.resolvedLanguage || i18n.language || 'pt';

  // Fallbacks por idioma (caso alguma chave não exista no i18n)
  const F = {
    pt: {
      sectionTitle: 'Serviços Fiscais e Tributários',
      trustAlt: 'Selo de confiança',
      trustLine: 'Atendimento seguro, discreto e aprovado por clientes reais.',
      onRequest: 'Sob consulta',
      waPrefix: 'Olá! Tenho interesse no serviço: ',
      cta: 'Contratar agora via WhatsApp',
      cards: {
        irpfTitle: 'Declaração de Imposto (Pessoa Física)',
        irpfDesc: 'Preenchimento completo do formulário 1040 com deduções e anexos.',
        schedTitle: 'Schedule C + SE para autônomos',
        schedDesc: 'Relatórios detalhados com lucro líquido, deduções e impostos de autônomo.',
        depTitle: 'Declaração com dependente (Child Tax Credit)',
        depDesc: 'Inclusão de dependente para benefício de até $2.000 por criança qualificada.',
        formsTitle: 'Relatórios e documentos fiscais diversos',
        formsDesc: 'Preparamos qualquer outro documento fiscal sob demanda.',
        w9Title: 'Preenchimento do Formulário W-9',
        w9Desc: 'Formulário preenchido com dados da LLC e orientações para envio.',
      },
    },
    en: {
      sectionTitle: 'Tax & Filing Services',
      trustAlt: 'Trust badge',
      trustLine: 'Secure, discreet service — approved by real clients.',
      onRequest: 'On request',
      waPrefix: "Hello! I'm interested in the service: ",
      cta: 'Hire via WhatsApp',
      cards: {
        irpfTitle: 'Individual Tax Return (Form 1040)',
        irpfDesc: 'Complete preparation of Form 1040 with deductions and schedules.',
        schedTitle: 'Schedule C + SE for self-employed',
        schedDesc: 'Detailed reports with net profit, deductions and self-employment taxes.',
        depTitle: 'Return with dependent (Child Tax Credit)',
        depDesc: 'Add dependent to claim up to $2,000 per qualifying child.',
        formsTitle: 'Other tax reports & documents',
        formsDesc: 'We prepare any other tax document on demand.',
        w9Title: 'Form W-9 completion',
        w9Desc: 'Form completed with your LLC data and submission guidance.',
      },
    },
    es: {
      sectionTitle: 'Servicios Fiscales y Tributarios',
      trustAlt: 'Sello de confianza',
      trustLine: 'Atención segura y discreta, aprobada por clientes reales.',
      onRequest: 'A consultar',
      waPrefix: '¡Hola! Me interesa el servicio: ',
      cta: 'Contratar por WhatsApp',
      cards: {
        irpfTitle: 'Declaración de Impuestos (Persona Física)',
        irpfDesc: 'Relleno completo del Formulario 1040 con deducciones y anexos.',
        schedTitle: 'Schedule C + SE para autónomos',
        schedDesc: 'Informes con beneficio neto, deducciones e impuestos de autónomo.',
        depTitle: 'Declaración con dependiente (Child Tax Credit)',
        depDesc: 'Inclusión de dependiente para beneficio de hasta $2.000 por niño calificado.',
        formsTitle: 'Informes y documentos fiscales varios',
        formsDesc: 'Preparamos cualquier otro documento fiscal bajo demanda.',
        w9Title: 'Relleno del Formulario W-9',
        w9Desc: 'Formulario con datos de tu LLC y guía de envío.',
      },
    },
  }[lng];

  // Títulos/descrições vindos do i18n quando existirem
  const cards = [
    {
      rota: '/servicos/fiscal/declaracao',
      title: t('services.tax.IRPF.title', { defaultValue: F.cards.irpfTitle }),
      desc: t('services.tax.IRPF.desc', { defaultValue: F.cards.irpfDesc }),
      price: '$39.00',
    },
    {
      rota: '/servicos/fiscal/schedule-c-se',
      title: t('services.tax.ScheduleC.title', { defaultValue: F.cards.schedTitle }),
      desc: t('services.tax.ScheduleC.desc', { defaultValue: F.cards.schedDesc }),
      price: '$29.00',
    },
    {
      rota: '/servicos/fiscal/child-tax-credit',
      title: t('services.tax.Dependentes.title', { defaultValue: F.cards.depTitle }),
      desc: t('services.tax.Dependentes.desc', { defaultValue: F.cards.depDesc }),
      price: '$19.00',
    },
    {
      rota: '/servicos/fiscal/documentos-diversos',
      title: t('services.tax.Formularios.title', { defaultValue: F.cards.formsTitle }),
      desc: t('services.tax.Formularios.desc', { defaultValue: F.cards.formsDesc }),
      price: F.onRequest,
    },
    {
      rota: '/servicos/fiscal/w9',
      title: t('services.tax.W9.title', { defaultValue: F.cards.w9Title }),
      desc: t('services.tax.W9.desc', { defaultValue: F.cards.w9Desc }),
      price: '$25.00',
    },
  ];

  const sectionTitle = t('services.tax.title', { defaultValue: F.sectionTitle });
  const trustAlt = F.trustAlt;
  const trustLine = F.trustLine;
  const cta = t('services.company.AberturaLLC.cta', { defaultValue: F.cta });

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">
          {sectionTitle}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((item, i) => {
            const waMsg = encodeURIComponent(`${F.waPrefix}${item.title}`);
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
                  <p className="text-blue-600 font-bold">{item.price}</p>
                  <a
                    href={`https://wa.me/5583998721848?text=${waMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-center bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
                  >
                    {cta}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <img src="/selo-confiança.png" alt={trustAlt} className="mx-auto w-40" />
          <p className="text-sm text-gray-500 mt-2">{trustLine}</p>
        </div>
      </div>
    </section>
  );
}
