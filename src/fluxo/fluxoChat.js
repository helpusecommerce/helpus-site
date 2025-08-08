const fluxo = {
  nomeEmail: {
    mensagem: 'Antes de começarmos, por favor informe seu nome e e-mail para continuarmos:',
    formulario: true,
  },
  inicio: {
    mensagem: 'Olá! Sou Hel, atendente virtual da HelpUS. Como posso te ajudar hoje?',
    opcoes: [
      { texto: 'Consultoria para Vistos', proximo: 'vistos1' },
      { texto: 'Abertura de Empresa nos EUA', proximo: 'empresa1' },
      { texto: 'Impostos e ITIN', proximo: 'impostos1' },
      { texto: 'Criação de Sites', proximo: 'sites1' },
    ],
  },
  // Vistos
  vistos1: {
    mensagem: 'Oferecemos suporte completo para vistos:',
    opcoes: [
      { texto: 'Turismo (B1/B2)', proximo: 'vistos_b1b2' },
      { texto: 'Estudante (F1/F2)', proximo: 'vistos_f1f2' },
      { texto: 'Trabalho (EB1A, EB2-NIW, H1B)', proximo: 'vistos_trabalho' },
    ],
  },
  vistos_b1b2: {
    mensagem: 'Inclui preenchimento do DS-160, orientações e agendamento consular.',
    opcoes: [{ texto: 'Valor: US$ 29.00', proximo: 'contato' }],
  },
  vistos_f1f2: {
    mensagem: 'Inclui DS-160, SEVIS, orientações personalizadas e acompanhamento.',
    opcoes: [{ texto: 'Valor: US$ 39.00', proximo: 'contato' }],
  },
  vistos_trabalho: {
    mensagem: 'Análise de perfil, estratégia, petições, formulários e suporte completo.',
    opcoes: [{ texto: 'Valor: US$ 89.00', proximo: 'contato' }],
  },

  // Empresa
  empresa1: {
    mensagem: 'Você deseja abrir uma empresa nos EUA?',
    opcoes: [
      { texto: 'LLC + EIN', proximo: 'empresa_llc' },
      { texto: 'Endereço Fiscal', proximo: 'empresa_endereco' },
      { texto: 'Operating Agreement', proximo: 'empresa_agreement' },
    ],
  },
  empresa_llc: {
    mensagem: 'Registro completo da empresa + número fiscal EIN incluído.',
    opcoes: [{ texto: 'Valor: US$ 79.00', proximo: 'contato' }],
  },
  empresa_endereco: {
    mensagem: 'Endereço fiscal para receber correspondência oficial da empresa.',
    opcoes: [{ texto: 'Valor: US$ 35.00', proximo: 'contato' }],
  },
  empresa_agreement: {
    mensagem: 'Contrato de operação obrigatório para abrir conta bancária.',
    opcoes: [{ texto: 'Valor: US$ 25.00', proximo: 'contato' }],
  },

  // Impostos
  impostos1: {
    mensagem: 'Trabalhamos com documentação e impostos para estrangeiros.',
    opcoes: [
      { texto: 'Solicitar ITIN (Pessoa Física)', proximo: 'itin_pf' },
      { texto: 'Relatórios fiscais e deduções (LLC)', proximo: 'relatorio_llc' },
    ],
  },
  itin_pf: {
    mensagem: 'Preparamos o W-7, carta explicativa, SS-4 (se necessário) e orientações.',
    opcoes: [{ texto: 'Valor: US$ 79.00', proximo: 'contato' }],
  },
  relatorio_llc: {
    mensagem: 'Relatório anual da empresa, deduções, despesas e envio ao IRS.',
    opcoes: [{ texto: 'Valor: US$ 119.00', proximo: 'contato' }],
  },

  // Sites
  sites1: {
    mensagem: 'Criamos sites profissionais completos com identidade visual.',
    opcoes: [
      { texto: 'Loja virtual (produtos e serviços)', proximo: 'site_loja' },
      { texto: 'Institucional (empresa, consultoria)', proximo: 'site_institucional' },
    ],
  },
  site_loja: {
    mensagem: 'Site com catálogo de produtos, filtros, carrinho e checkout.',
    opcoes: [{ texto: 'Valor: US$ 299.00', proximo: 'contato' }],
  },
  site_institucional: {
    mensagem: 'Landing page profissional com layout moderno e responsivo.',
    opcoes: [{ texto: 'Valor: US$ 149.00', proximo: 'contato' }],
  },

  // Contato final
  contato: {
    mensagem: 'Você pode entrar em contato conosco pelos canais abaixo:',
    contato: true,
  },
};

export default fluxo;
