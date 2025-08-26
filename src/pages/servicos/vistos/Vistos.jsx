// 📄 src/pages/vistos/Vistos.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Vistos() {
  const servicos = [
    {
      rota: "/vistos/b1b2",
      titulo: "Visto de Turista (B1/B2)",
      desc: "Consultoria completa com DS-160, documentos e preparação para entrevista."
    },
    {
      rota: "/vistos/f1",
      titulo: "Visto de Estudante (F1)",
      desc: "Suporte no I-20, DS-160, pagamento SEVIS e entrevista consular."
    },
    {
      rota: "/vistos/f2",
      titulo: "Visto de Dependente (F2)",
      desc: "Consultoria para cônjuges e filhos de estudantes F1."
    },
    {
      rota: "/vistos/familia",
      titulo: "Visto Familiar",
      desc: "Pais, cônjuges e filhos – suporte completo para reunião familiar."
    },
    {
      rota: "/vistos/eb1a",
      titulo: "Visto EB1-A",
      desc: "Categoria para pessoas com habilidade extraordinária (ciência, artes, esportes, negócios)."
    },
    {
      rota: "/vistos/eb2niw",
      titulo: "Visto EB2-NIW",
      desc: "Imigração baseada em mérito profissional, sem necessidade de oferta de emprego."
    },
    {
      rota: "/vistos/renovacao",
      titulo: "Renovação de Visto",
      desc: "Atualização de dados, novo DS-160 e verificação de isenção de entrevista."
    },
    {
      rota: "/vistos/casosespeciais",
      titulo: "Casos Especiais",
      desc: "Waiver, extensões de status, deportação e inadmissibilidade."
    },
    {
      rota: "/vistos/outrostrabalho",
      titulo: "Outros Vistos de Trabalho",
      desc: "H1B, L1, O1 e demais vistos específicos conforme seu perfil."
    },
    {
      rota: "/vistos/complementares",
      titulo: "Documentos Complementares",
      desc: "I-134, cartas explicativas, comprovações financeiras e justificativas."
    }
  ];

  return (
    <div className="pt-20 px-4 text-center">
      <h2 className="text-3xl font-bold mb-10 text-blue-800">Nossos Serviços de Visto</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {servicos.map((s, i) => (
          <Link
            key={i}
            to={s.rota}
            className="border rounded-lg p-6 shadow hover:bg-gray-100 transition text-left"
          >
            <h3 className="text-lg font-semibold mb-2 text-blue-700">{s.titulo}</h3>
            <p className="text-gray-600 text-sm">{s.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
