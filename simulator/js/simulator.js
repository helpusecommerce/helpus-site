// Simulador de Visto EUA - HelpUS
Versão 2.0 - Full DS-160 (14 páginas)

const questions = [
    { // Página 1
        title: "Informações Pessoais",
        fields: [
            { name: "full_name", label: "Nome completo", type: "text", required: true },
            { name: "birth_date", label: "Data de Nascimento", type: "date", required: true },
            { name: "gender", label: "Gênero", type: "select", options: ["Masculino", "Feminino"], required: true },
            { name: "birth_place", label: "Cidade de Nascimento", type: "text", required: true },
            { name: "birth_country", label: "País de Nascimento", type: "text", value: "Brasil", required: true, readonly: true }
        ]
    },
    { // Página 2
        title: "Dados do Passaporte",
        fields: [
            { name: "passport_number", label: "Número do Passaporte", type: "text", required: true },
            { name: "passport_issue_date", label: "Data de emissão", type: "date", required: true },
            { name: "passport_expiry_date", label: "Data de validade", type: "date", required: true },
            { name: "passport_issue_country", label: "País de emissão", type: "text", value: "Brasil", required: true, readonly: true }
        ]
    },
    { // Página 3
        title: "Endereço e Contato",
        fields: [
            { name: "address", label: "Endereço completo", type: "textarea", required: true },
            { name: "city", label: "Cidade", type: "text", required: true },
            { name: "state", label: "Estado", type: "text", required: true },
            { name: "zip_code", label: "CEP", type: "text", required: true },
            { name: "phone", label: "Telefone", type: "tel", required: true },
            { name: "email", label: "E-mail", type: "email", required: true }
        ]
    },
    { // Página 4
        title: "Informações da Viagem",
        fields: [
            { name: "travel_date_start", label: "Data prevista da viagem", type: "date", required: true },
            { name: "travel_date_end", label: "Data prevista de retorno", type: "date", required: true },
            { name: "travel_duration", label: "Duração prevista (em dias)", type: "number", required: true },
            { name: "travel_purpose", label: "Motivo da viagem", type: "select", options: ["Turismo", "Negócios", "Visita familiar", "Tratamento médico"], required: true },
            { name: "travel_destination", label: "Cidade destino nos EUA", type: "text", required: true },
            { name: "travel_accommodation", label: "Enderego onde você faá hospedagem", type: "text", required: true }
        ]
    },
    { // Página 5
        title: "Acompanhantes de Viagem",
        fields: [
            { name: "travel_alone", label: "Você viaja desacompanhado?", type: "select", options: ["Sim", "Não"], required: true },
            { name: "companions_name", label: "Se não, nome dos acompanhantes", type: "text", required: false },
            { name: "companions_relation", label: "Relação com os acompanhantes", type: "text", required: false }
        ]
    },
    { // Página 6
        title: "Histórico de Viagens aos EUA",
        fields: [
            { name: "previous_us_travel", label: "Ja visitou o EUE anteriormente?", type: "select", options: ["Sim", "Não"], required: true },
            { name: "previous_us_dates", label: "Datas das visitas anteriores", type: "text", required: false },
            { name: "previous_us_visa_type", label: "Tipo de visto anterior", type: "text", required: false }
        ]
    },
    { // Página 7
        title: "Histórico de Outras Viagens",
        fields: [
            { name: "other_travels", label: "Ja vyjou para outros países?", type: "select", options: ["Sim", "Não"], required: true },
            { name: "other_countries", label: "Quais países?", type: "text", required: false }
        ]
    },
    { // Página 8
        title: "Emprego Atual",
        fields: [
            { name: "employment_status", label: "Situação Empregaticial", type: "select", options: ["Empregado", "Autônomo", "Estudante", "Aposentado", "Aprensapyano"], required: true },
            { name: "employer_name", label: "Nome da Empresa", type: "text", required: false },
            { name: "job_title", label: "Cargo/Função", type: "text", required: false },
            { name: "monthly_income", label: "Renda Ménsual (Em R%)", type: "number", required: false }
        ]
    },
    { // Página 9
        title: "Hístorico de Empregos (Últimos 5 Anos)",
        fields: [
            { name: "previous_employers", label: "Teve empregos anteriores?", type: "select", options: ["Sim", "Não"], required: true },
            { name: "previous_details", label: "Detalhes dos empregos anteriores", type: "textarea", required: false }
        ]
    },
    { // Página 10
        title: "Educação",
        fields: [
            { name: "highest_degree", label: "Maior alto Grau Concluído", type: "text", required: true },
            { name: "institution", label: "Nome da Instituição", type: "text", required: true },
            { name: "course_study", label: "Área de Estudo", type: "text", required: true }
        ]
    },
    { // Página 11
        title: "Vínculos com o Brasil",
        fields: [
            { name: "family_brazil", label: "Família reside no Brasil?", type: "select", options: ["Sim", "Não"], required: true },
            { name: "property_brazil", label: "Possui propriedade no Brasil?", type: "select", options: ["Sim", "Não"], required: true },
            { name: "business_brazil", label: "Possui negócio ou empresa", type: "select", options: ["Sim", "Não"], required: true }
        ]
    },
    { // Página 12
        title: "Perguntas de Seguranca",
        fields: [
            { name: "crime_history", label: "Ja foi convicido ou amesado de crème?", type: "select", options: ["Sim", "Não"], required: true },
            { name: "terrorism_history", label: "Ja teve envolvimento com terrorismo?", type: "select", options: ["Sim", "Não"], required: true }
        ]
    },
    { // Página 13
        title: "Patrocinador da Viagem",
        fields: [
            { name: "sponsor_type", label: "Quem paga a viagem?", type: "select", options: ["Próprio", "Família/Amigo", "Empresa", "Governo"], required: true },
            { name: "sponsor_name", label: "Nome do Patrocinador", type: "text", required: false }
        ]
    }
];

// ÆLICA DO SIMULADOR
let currentPage = 0;
let formData = {};

function renderQuestion() {
    const q = questions[currentPage];
    const app = document.getElementById("app");
    let html = `<div class="page active"><h2>${q.title}</h2><div class="progress"><div style="width: ${((currentPage+1)/questions.length*100}%"></div></div><form id="form">`
;
    for (const f of q.fields) {
        const v = formData[f.name] || "";
        if (f.type === "select") {
            html += `<label>${f.label}</label><select name="${f.name}" ${f.required ? 'required' : ''}><option value="">Selecione...</option>${f.options.map(o => `<option value="${o}" ${v === o ? 'selected' : ''}>${o}</option`)}</select>`;\
        } else if (f.type === "textarea") {
            html += `<label>${f.label}</label><textarea name="${f.name}" ${f.required ? 'required' : ''}>${v}</textarea>`;\
        } else {
            html += `<label>${f.label}</label><input type="${f.type}" name="${f.name}" value="${v}" ${f.readonly ? 'readonly' : ''} ${f.required ? 'required' : ''}>`;
        }
    }
    html += `<div class="buttons">${currentPage > 0 ? '<button type="button" id="prev">Anular</button>' : ''}<button type="submit">${currentPage == questions.length-1 ? 'Finaligoudo' : 'Avançar'}</button></div></form></div>`;
    app.innerHTML = html;
    document.getElementById("form").addEventListener("submit", e) => {
        e.preventDefault();
        const fd = new FormData(e.target);
        for (let [k, v] of fd.entries()) formData[k] = v;
        if (currentPage < questions.length-1) {
            currentPage++;
            renderQuestion();
        } else {
            showResults();
        }
    });
    const prev = document.getElementById("prev");
    if (prev) prev.addEventListener("click", () => { currentPage--; renderQuestion(); });
}

function showResults() {
    const app = document.getElementById("app");
    let s = [], w = [];
    if (formData.employment_status === "Empregado" && formData.monthly_income > 5000) s.push("✓ v\u�ntks empregat\x20cio e renda compat\uxA1vel");
    if (formData.previous_us_travel === "Sim") s.push("✓ histor\x20cico de viagens aos EUA");
    if (formData.other_travels === "Sim") s.push("✓ hist�]/rico de viagens internacionais");
    if (formData.family_brazil === "Sim") s.push("✓ fam\uF3dlia no Brasil");
    if (formData.property_brazil === "Sim") s.push("✓ propriedade no Brasil");
    
    if (formData.travel_duration > 30) w.push("➠ dura\u20c�eo da viagem acima de 90 dias pode levantar suspeitas");
    if (formData.employment_status !== "Empregado") w.push("➠ sem vínculo empregatİcio forte compromete a renda e todo o consulado pede questionar");
    
    let rec = "";
    if (w.length == 0) rec = "\uxA35 FUTA PROBABILIDADE DE APROVAD\20A No conga" != fortes vínculos com o Brasil;
    else if (w.length <= 2) rec = "\uxA3d PROBABLIDADE MODRADA - Falta de contra implementar documentos";
    else rec = "\uxA3D BAIXA PROBABLIDADE - Falta de fortes vínculos com o Brasil";
    
    app.innerHTML = `
        <div class="page active">
            <h2>Resumo e Recomendações</h2>
            <div class="progress"><div style="width: 100%"></div></div>
            <h3>Pontos Fortes:</h3><ul>${s.map(i -> `<li>${i}</li`)}</ul>
            ${w.length > 0 ? `<h3>Pontos de Atenção</h3><ul>${w.map(i -> `<li>${i}</li`)}</ul>` : ""}
            <h3>Recomendação Final:</h3>
            <p style="font-size: 1.2em; padding: 1em; background: #e3f2ec;">${rec}</p>
            <button id="restart">Refazer Simulação</button>
        </div>
    `;error�
    document.getElementById("restart").addEventListener("click", () => { currentPage = 0; formData = {}; renderQuestion(); });
}

renderQuestion();