import React from "react";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  const cards = [
    {
      title: "📂 Consultoria de Vistos Americanos",
      items: [
        { name: "🧳 Visto de Turista (B1/B2)", path: "/vistos/b1b2" },
        { name: "🎓 Visto de Estudante (F1)", path: "/vistos/f1" },
        { name: "👨‍👩‍👧‍👦 Visto de Dependente de Estudante (F2)", path: "/vistos/f2" },
        { name: "👔 Visto de Trabalho – EB1-A", path: "/vistos/eb1a" },
        { name: "📈 Visto de Trabalho – EB2-NIW", path: "/vistos/eb2niw" },
        { name: "🛠 Outros Vistos de Trabalho", path: "/vistos/outros-trabalho" },
        { name: "❤️ Vistos por Casamento ou Família", path: "/vistos/familia" },
        { name: "✈️ Serviços Gerais e Complementares", path: "/vistos/complementares" },
        { name: "⚖️ Casos Especiais", path: "/vistos/casos-especiais" },
      ],
    },
    {
      title: "🏢 Abertura de Empresa nos EUA",
      items: [
        { name: "🧾 Abertura de LLC", path: "/empresa/llc" },
        { name: "🔢 Obtenção de EIN", path: "/empresa/ein" },
        { name: "📝 Contratos e Documentos Empresariais", path: "/empresa/contratos" },
        { name: "💳 Conta Bancária e Stripe", path: "/empresa/banco-stripe" },
        { name: "🧮 Classificações Fiscais", path: "/empresa/classificacao-fiscal" },
      ],
    },
    {
      title: "📄 Documentação Fiscal e Tributária",
      items: [
        { name: "🧑‍💻 ITIN – Número Fiscal para Estrangeiros", path: "/fiscal/itin" },
        { name: "💼 Imposto de Renda Pessoa Física (1040/1040-NR)", path: "/fiscal/1040" },
        { name: "🧾 Imposto de Renda Empresarial (Schedule C)", path: "/fiscal/schedule-c" },
        { name: "📄 Formulários do IRS", path: "/fiscal/formularios" },
        { name: "💬 Suporte em Correspondências do IRS", path: "/fiscal/correspondencia" },
        { name: "📦 Envio de Documentos Fiscais", path: "/fiscal/envio" },
      ],
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center text-blue-800 mb-8">
        Nossos Serviços
      </h1>
      {cards.map((section) => (
        <section key={section.title} className="mb-10">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">{section.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {section.items.map((service) => (
              <div
                key={service.name}
                className="bg-white shadow-md rounded-lg p-4 border border-blue-200 cursor-pointer hover:bg-blue-50"
                onClick={() => handleClick(service.path)}
              >
                <h3 className="text-lg font-medium text-gray-900">{service.name}</h3>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
