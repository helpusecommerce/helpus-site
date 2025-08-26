// 📄 src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      brand: "HelpUS",
      menu: {
        home: "Home",
        services: "Services",
        site_build: "Website Creation",
        about: "About",
        contact: "Contact",
        login: "Login",
      },
      common: {
        visit_site: "Visit site",
        learn_more: "Learn more",
        request_quote: "Request a quote",
        whatsapp: "Talk on WhatsApp",
      },

      hero: {
        no_video: "Your browser does not support HTML5 video.",
        title: "Complete solutions to live, start a business and file taxes in the USA",
        subtitle:
          "Specialized consultancy in visas, company formation, tax documentation and professional websites – all in your language.",
        cta: {
          visas: "American Visas",
          company: "Company Formation",
          tax: "Taxes & Documents",
          sites: "Website Creation",
        },
      },

      home: {
        why_title: "Why choose HelpUS?",
        p1_t: "Personalized Service",
        p1_d: "1:1 support throughout your visa process.",
        p2_t: "Real Experience",
        p2_d: "Consultants who have gone through similar processes.",
        p3_t: "Trust & Transparency",
        p3_d: "We explain everything clearly with no false promises.",
        partners_title: "Our Partners",
        services_title: "Our Services",
        cards: {
          visas: { title: "Visa Consulting", desc: "Tourist, student, work visas and green card." },
          company: { title: "Company Formation", desc: "LLC in the USA with complete support, even for non-residents." },
          tax: { title: "Tax Documentation", desc: "ITIN, EIN, returns and accounting focused on immigrants." },
          sites: { title: "Website Creation", desc: "Modern sites with admin panel, store and WhatsApp integration." },
        },
      },

      partners: {
        wagner_driver: { name: "Wagner Driver", desc: "Executive transport service and scheduling via WhatsApp" },
        tulio_bicicletas: { name: "Túlio Bicicletas", desc: "Bicycles, accessories and quality maintenance" },
        cg_details: { name: "CG Details", desc: "Detailed cleaning for cars, apartments and houses" },
        bluebox: { name: "Blue Box", desc: "Car and motorcycle wash" },
        publicarte: { name: "PublicArte", desc: "Design and visual communication" },
        waleska: { name: "Waleska Imóveis", desc: "Real estate brokerage" },
        katia: { name: "Dr. Kátia Xavier", desc: "In-person and telemedicine medical care." },
        marcio_barber: { name: "Márcio Barber", desc: "Barbershop services with quality and dedicated service." },
      },

      sites: {
        h1: "Website and Online Store Development",
        intro:
          "We build modern, fast, and personalized websites for companies and professionals. With responsive layout, admin panel, WhatsApp integration and free hosting, you have everything to build your online presence.",
        features: [
          "Professional and responsive design",
          "Online store with cart and WhatsApp",
          "Control panel to manage products",
          "Free hosting on Vercel",
          "Free database (Supabase)",
          "Social media integration",
          "User roles & access control",
          "Basic SEO included",
        ],
        pricing_from: "Starting at",
        pricing_value: "$299",
        pricing_note: "Complete website delivered within 10 business days.",
        cta_quote: "Request a quote",
        examples_title: "Examples of websites created",
        support_note:
          "Technical support included for the first 30 days after delivery. Payment in up to 2x interest-free via card or Pix.",
      },

      about: {
        title: "About HelpUS",
        intro:
          "HelpUS exists to make essential services accessible to those who want to live, start a business or invest in the United States. We specialize in visa consulting, company formation and tax documentation with human and results-driven service.",
        blocks: {
          exp_t: "Experience",
          exp_d: "Over 10 years helping Brazilians achieve their goals in the USA.",
          pers_t: "Personalized Care",
          pers_d: "Every case is unique. We offer complete solutions based on your profile.",
          commit_t: "Commitment",
          commit_d: "Ethics, transparency and full dedication to the success of your journey.",
        },
      },

      contact: {
        title: "Contact",
        subtitle: "Get in touch and we’ll respond quickly.",
        address: "Address: 241 E 16th Ave, STE B4, Gulf Shores, AL 36542 - USA",
        email_label: "Email",
        phone_label: "Phone",
      },

      services: {
        title: "Services",

        visas: {
          title: "Visas",
          list: {
            B1B2: { title: "B1/B2", desc: "Tourist/Business visa guidance and DS-160." },
            F1: { title: "F1", desc: "Student visa support (I-20, interview and checklist)." },
            F2: { title: "F2", desc: "Dependents of F1 – forms and documentation." },
            EB1A: { title: "EB1-A", desc: "Extraordinary ability green card strategy and filing." },
            EB2NIW: { title: "EB2-NIW", desc: "National Interest Waiver—eligibility, evidence and petition." },
            Renovacao: { title: "Renewal", desc: "Simplified flow for renewing eligible visas." },
            Familia: { title: "Family", desc: "Family-based categories and checklists." },
            CasosEspeciais: { title: "Special Cases", desc: "Complex scenarios and waivers (initial guidance)." },
            Complementares: { title: "Complementary", desc: "EAD, Advance Parole and related steps." },
          },
        },

        company: {
          title: "Company",

          AberturaLLC: {
            title: "LLC Formation",
            desc: "LLC in the USA with Operating Agreement and EIN guidance.",
            intro: "We handle the entire process to open your LLC in the United States and obtain the EIN (Federal Tax ID).",
            steps: {
              name: "Name availability check and official registration",
              forms: "Filing state formation forms",
              ein: "EIN issuance directly with the IRS",
              delivery: "Delivery of ready-to-use digital documents",
            },
            price: "Price: US$ 79.00",
            cta: "Hire now via WhatsApp",
            whatsapp_msg: "Hello! I'm interested in the service: LLC Formation + EIN in the USA",
          },

          BusinessLicense: {
            title: "Business License",
            desc: "City/county licensing orientation according to activity.",
            intro: "Complete support to obtain your business license in any US state, quickly and according to local rules.",
            includes_title: "📋 What's included:",
            includes: {
              0: "Filling the official state/county application",
              1: "Research of the proper license code for your activity",
              2: "Final PDF filled out and ready to file",
              3: "Clear instructions on fees and how to submit",
              4: "Support via WhatsApp or email until license is issued",
            },
            price: "$49",
            cta: "Chat with HelpUS",
            whatsapp_msg: "Hello! I need help to obtain my Business License in the USA.",
          },

          EnderecoFiscal: {
            title: "Fiscal Address",
            desc: "Address options for correspondence and compliance.",
            intro: "Valid fiscal address to register your company, receive official mail and open a bank account.",
            includes_title: "📋 What's included:",
            includes: {
              0: "Valid address with number, city and state",
              1: "Company name added to the mailbox",
              2: "Digital forwarding of received documents",
              3: "Assignment agreement issued in PDF",
            },
            price: "$29",
            cta: "Chat with HelpUS",
            whatsapp_msg: "Hello! I'm interested in the Fiscal Address service in the USA.",
          },

          OperatingAgreement: {
            title: "Operating Agreement",
            desc: "Tailored document for your LLC’s structure and members.",
            intro:
              "We prepare a tailored Operating Agreement for your LLC — essential to open a bank account, obtain licenses and keep your company compliant.",
            includes_title: "📋 What's included:",
            includes: {
              0: "Legal contract adapted to your business reality",
              1: "Clauses on members, profit sharing and responsibilities",
              2: "Official English version + explanatory Portuguese translation",
              3: "Digital delivery in PDF ready to use",
            },
            price: "$25",
            cta: "Request via WhatsApp",
            whatsapp_msg: "Hello! I'm interested in the Custom Operating Agreement service.",
          },

          ITIN: { title: "ITIN", desc: "Preparation of W-7 package and supporting evidence." },
          W7: { title: "Form W-7", desc: "Request for ITIN with proper cover letter and forms." },
        },

        tax: {
          title: "Tax",
          IRPF: { title: "Individual Tax Return", desc: "Federal filing and guidance for immigrants and residents." },
          ScheduleC: { title: "Schedule C", desc: "Self-employed income, deductions and bookkeeping support." },
          W9: { title: "Form W-9", desc: "Taxpayer information form preparation for clients/vendors." },
          Dependentes: { title: "Dependents", desc: "Rules to claim dependents and maximize refunds." },
          Formularios: { title: "Forms", desc: "Checklists and auxiliary IRS forms." },
          Envio: { title: "Submission", desc: "Secure sending instructions and follow-up." },

          ITINPage: {
            title: "ITIN Application",
            intro: "The ITIN is essential for foreigners who must file taxes in the US but are not eligible for an SSN.",
            includes_title: "📋 What's included:",
            includes: {
              0: "Complete filling of the official W-7 form",
              1: "Personalized cover letter for the IRS",
              2: "Updated checklist of accepted documents",
              3: "Detailed instructions to mail or validate via ACE",
            },
            price: "$55",
            cta: "Chat with HelpUS",
            whatsapp_msg: "Hello! I'm interested in the ITIN Application service.",
          },

          W7Page: {
            title: "Form W-7 (ITIN Request)",
            intro:
              "Official document used to request the ITIN from the IRS. We take care of the process with accuracy and security:",
            includes_title: "📋 What's included:",
            includes: {
              0: "Correct eligibility category definition",
              1: "Complete and consistent filling of data",
              2: "Review to avoid common errors and ensure acceptance",
              3: "Cover letter and document checklist",
            },
            price: "Included in the ITIN package",
            cta: "Request via WhatsApp",
            whatsapp_msg: "Hello! I need help filling Form W-7 (ITIN).",
          },
        },
      },

      footer: {
        newsletter: {
          title: "Get news and tips about visas, companies, taxes and professional websites",
          placeholder: "Enter your email",
          button: "Subscribe",
          success: "Subscribed successfully!",
          error_exists: "Subscription error. Email may already be registered.",
          error_conn: "Connection error. Please try again.",
        },
        contact: {
          address: "Address: 241 E 16th Ave, STE B4, Gulf Shores, AL 36542 - USA",
          email: "Email: helpus.ecommerce@gmail.com",
        },
        rights: "All rights reserved.",
        made_with: "Made with",
        by_helpus: "by HelpUS",
      },
    },
  },

  // ================= PT =================
  pt: {
    translation: {
      brand: "HelpUS",
      menu: {
        home: "Início",
        services: "Serviços",
        site_build: "Criação de Sites",
        about: "Sobre",
        contact: "Contato",
        login: "Login",
      },
      common: {
        visit_site: "Acessar site",
        learn_more: "Saiba mais",
        request_quote: "Solicitar orçamento",
        whatsapp: "Falar no WhatsApp",
      },

      hero: {
        no_video: "Seu navegador não suporta vídeos HTML5.",
        title: "Soluções completas para viver, empreender e declarar nos EUA",
        subtitle:
          "Consultoria especializada em vistos, abertura de empresas, documentação fiscal e criação de sites profissionais – tudo em português.",
        cta: {
          visas: "Vistos Americanos",
          company: "Abertura de Empresa",
          tax: "Impostos e Documentos",
          sites: "Criação de Sites",
        },
      },

      home: {
        why_title: "Por que escolher a HelpUS?",
        p1_t: "Atendimento Personalizado",
        p1_d: "Suporte individual durante todo o processo do seu visto.",
        p2_t: "Experiência Real",
        p2_d: "Consultores que já passaram por processos semelhantes.",
        p3_t: "Confiança e Transparência",
        p3_d: "Explicamos tudo com clareza e sem promessas falsas.",
        partners_title: "Nossos Parceiros",
        services_title: "Nossos Serviços",
        cards: {
          visas: { title: "Consultoria para Vistos", desc: "Vistos de turista, estudante, trabalho e green card." },
          company: { title: "Abertura de Empresas", desc: "LLC nos EUA com suporte completo, mesmo para estrangeiros." },
          tax: { title: "Documentação Fiscal", desc: "ITIN, EIN, declarações e contabilidade focada no imigrante." },
          sites: { title: "Criação de Sites", desc: "Sites modernos com painel, loja e integração ao WhatsApp." },
        },
      },

      partners: {
        wagner_driver: { name: "Wagner Driver", desc: "Serviço de transporte executivo e agendamentos via WhatsApp" },
        tulio_bicicletas: { name: "Túlio Bicicletas", desc: "Bicicletas, acessórios e manutenção com qualidade" },
        cg_details: { name: "CG Details", desc: "Limpeza detalhada de carros, apartamentos e casas" },
        bluebox: { name: "Blue Box", desc: "Lava-jato de carros e motos" },
        publicarte: { name: "PublicArte", desc: "Design e comunicação visual" },
        waleska: { name: "Waleska Imóveis", desc: "Corretagem de imóveis" },
        katia: { name: "Dra. Kátia Xavier", desc: "Atendimento médico presencial e por telemedicina." },
        marcio_barber: { name: "Márcio Barber", desc: "Serviços de barbearia com qualidade e atendimento diferenciado." },
      },

      sites: {
        h1: "Criação de Sites e Lojas Virtuais",
        intro:
          "Desenvolvemos sites modernos, rápidos e personalizados para empresas e profissionais. Com layout responsivo, painel administrativo, integração com WhatsApp e hospedagem gratuita, você tem tudo o que precisa para marcar presença na internet.",
        features: [
          "Design profissional e responsivo",
          "Loja virtual com carrinho e WhatsApp",
          "Painel de controle para gerenciar produtos",
          "Hospedagem gratuita na Vercel",
          "Banco de dados gratuito (Supabase)",
          "Integração com redes sociais",
          "Controle de usuários por tipo de acesso",
          "SEO básico incluso",
        ],
        pricing_from: "A partir de",
        pricing_value: "$299",
        pricing_note: "Site completo entregue em até 10 dias úteis.",
        cta_quote: "Solicitar orçamento",
        examples_title: "Exemplos de sites criados",
        support_note:
          "Suporte técnico incluso nos primeiros 30 dias após a entrega. Pagamento em até 2x sem juros via cartão ou Pix.",
      },

      about: {
        title: "Sobre a HelpUS",
        intro:
          "A HelpUS nasceu para facilitar o acesso a serviços essenciais para quem deseja viver, empreender ou investir nos Estados Unidos. Somos especialistas em consultoria para vistos, abertura de empresas e documentação fiscal, com atendimento humanizado e focado em resultados.",
        blocks: {
          exp_t: "Experiência",
          exp_d: "Mais de 10 anos ajudando brasileiros a conquistar seus objetivos nos EUA.",
          pers_t: "Atendimento Personalizado",
          pers_d: "Cada caso é único. Oferecemos soluções completas conforme o seu perfil.",
          commit_t: "Compromisso",
          commit_d: "Ética, transparência e dedicação total à sua jornada.",
        },
      },

      contact: {
        title: "Contato",
        subtitle: "Envie sua mensagem e retornaremos rapidamente.",
        address: "Endereço: 241 E 16th Ave, STE B4, Gulf Shores, AL 36542 - EUA",
        email_label: "Email",
        phone_label: "Telefone",
      },

      services: {
        title: "Serviços",

        visas: {
          title: "Vistos",
          list: {
            B1B2: { title: "B1/B2", desc: "Roteiro e DS-160 para turismo/negócios." },
            F1: { title: "F1", desc: "Suporte para visto de estudante (I-20 e entrevista)." },
            F2: { title: "F2", desc: "Dependentes de F1 — formulários e documentos." },
            EB1A: { title: "EB1-A", desc: "Estratégia e petição para habilidade extraordinária." },
            EB2NIW: { title: "EB2-NIW", desc: "Waiver por Interesse Nacional — elegibilidade e evidências." },
            Renovacao: { title: "Renovação", desc: "Fluxo simplificado para vistos elegíveis." },
            Familia: { title: "Família", desc: "Categorias baseadas em família e checklists." },
            CasosEspeciais: { title: "Casos Especiais", desc: "Cenários complexos e waivers (orientação inicial)." },
            Complementares: { title: "Complementares", desc: "EAD, Advance Parole e etapas relacionadas." },
          },
        },

        company: {
          title: "Empresa",

          AberturaLLC: {
            title: "Abertura de LLC",
            desc: "Constituição de LLC nos EUA com Operating Agreement e suporte ao EIN.",
            intro:
              "Cuidamos de todo o processo para abrir sua LLC nos Estados Unidos e obter o EIN (número de identificação fiscal).",
            steps: {
              name: "Consulta de nome disponível e registro oficial",
              forms: "Protocolo dos formulários de abertura no estado",
              ein: "Emissão do EIN diretamente com o IRS",
              delivery: "Entrega dos documentos digitais prontos para uso",
            },
            price: "Valor: US$ 79,00",
            cta: "Contratar agora via WhatsApp",
            whatsapp_msg:
              "Olá! Tenho interesse no serviço: Abertura de Empresa LLC + EIN nos EUA",
          },

          BusinessLicense: {
            title: "Business License",
            desc: "Orientação para licenças municipais/condado conforme atividade.",
            intro:
              "Suporte completo para obter sua licença comercial em qualquer estado dos EUA, de forma ágil e conforme as regras locais.",
            includes_title: "📋 O que está incluído:",
            includes: {
              0: "Preenchimento do formulário oficial do estado/condado",
              1: "Pesquisa do código correto para sua atividade",
              2: "PDF final preenchido e pronto para protocolo",
              3: "Instruções claras sobre taxas e envio/aplicação",
              4: "Suporte por WhatsApp ou e-mail até a emissão",
            },
            price: "$49",
            cta: "Falar com a HelpUS",
            whatsapp_msg:
              "Olá! Preciso de ajuda para obter minha Business License nos EUA.",
          },

          EnderecoFiscal: {
            title: "Endereço Fiscal",
            desc: "Opções de endereço para correspondência e conformidade.",
            intro:
              "Endereço fiscal válido para registrar sua empresa, receber correspondências oficiais e abrir conta bancária.",
            includes_title: "📋 O que está incluído:",
            includes: {
              0: "Endereço válido com número, cidade e estado",
              1: "Inclusão do nome da empresa na caixa postal",
              2: "Encaminhamento digital dos documentos recebidos",
              3: "Contrato de cessão emitido em PDF",
            },
            price: "$29",
            cta: "Falar com a HelpUS",
            whatsapp_msg:
              "Olá! Tenho interesse no serviço de Endereço Fiscal nos EUA.",
          },

          OperatingAgreement: {
            title: "Operating Agreement",
            desc: "Documento ajustado à estrutura e aos sócios da sua LLC.",
            intro:
              "Elaboramos um Operating Agreement sob medida — essencial para abrir conta bancária, obter licenças e manter a LLC regular.",
            includes_title: "📋 O que está incluído:",
            includes: {
              0: "Contrato jurídico adaptado à sua realidade empresarial",
              1: "Cláusulas sobre sócios, divisão de lucros e responsabilidades",
              2: "Versão em inglês para uso oficial + tradução explicativa em português",
              3: "Envio digital em PDF pronto para uso",
            },
            price: "$25",
            cta: "Solicitar via WhatsApp",
            whatsapp_msg:
              "Olá! Tenho interesse no serviço de Operating Agreement Personalizado.",
          },

          ITIN: { title: "ITIN", desc: "Montagem do pacote W-7 com documentos comprobatórios." },
          W7: { title: "Formulário W-7", desc: "Solicitação do ITIN com carta de apresentação e formulários." },
        },

        tax: {
          title: "Fiscal",
          IRPF: { title: "Declaração Individual", desc: "Entrega federal e orientação para imigrantes e residentes." },
          ScheduleC: { title: "Schedule C", desc: "Renda como autônomo, deduções e apoio contábil." },
          W9: { title: "Formulário W-9", desc: "Preenchimento do formulário de informações do contribuinte." },
          Dependentes: { title: "Dependentes", desc: "Regras para declarar dependentes e maximizar reembolsos." },
          Formularios: { title: "Formulários", desc: "Listas e formulários auxiliares do IRS." },
          Envio: { title: "Envio", desc: "Instruções para envio seguro e acompanhamento." },

          ITINPage: {
            title: "Solicitação de ITIN",
            intro: "O ITIN é essencial para quem precisa declarar impostos nos EUA, mas não possui direito a um SSN.",
            includes_title: "📋 O que está incluído:",
            includes: {
              0: "Preenchimento completo do formulário oficial W-7",
              1: "Carta explicativa personalizada para o IRS",
              2: "Checklist atualizado de documentos aceitos",
              3: "Instruções detalhadas para envio por correio ou validação via ACE",
            },
            price: "$55",
            cta: "Falar com a HelpUS",
            whatsapp_msg: "Olá! Tenho interesse no serviço de Solicitação de ITIN.",
          },

          W7Page: {
            title: "Formulário W-7 (Solicitação de ITIN)",
            intro:
              "Documento oficial para solicitar o ITIN junto ao IRS. Cuidamos de todo o processo com precisão e segurança:",
            includes_title: "📋 O que está incluído:",
            includes: {
              0: "Definição correta da categoria de elegibilidade",
              1: "Preenchimento completo e consistente dos dados",
              2: "Revisão para evitar erros comuns e garantir aceitação",
              3: "Carta explicativa e checklist de documentos",
            },
            price: "Incluído no pacote de ITIN",
            cta: "Solicitar via WhatsApp",
            whatsapp_msg: "Olá, desejo ajuda para preencher o Formulário W-7 (ITIN).",
          },
        },
      },

      footer: {
        newsletter: {
          title:
            "Receba novidades e dicas sobre vistos, empresas, impostos e sites profissionais",
          placeholder: "Digite seu e-mail",
          button: "Inscrever",
          success: "Inscrição realizada com sucesso!",
          error_exists: "Erro ao inscrever. Talvez e-mail já esteja cadastrado.",
          error_conn: "Erro de conexão. Tente novamente.",
        },
        contact: {
          address: "Endereço: 241 E 16th Ave, STE B4, Gulf Shores, AL 36542 - EUA",
          email: "Email: helpus.ecommerce@gmail.com",
        },
        rights: "Todos os direitos reservados.",
        made_with: "Feito com",
        by_helpus: "pela HelpUS",
      },
    },
  },

  // ================= ES =================
  es: {
    translation: {
      brand: "HelpUS",
      menu: {
        home: "Inicio",
        services: "Servicios",
        site_build: "Creación de Sitios",
        about: "Acerca de",
        contact: "Contacto",
        login: "Acceder",
      },
      common: {
        visit_site: "Visitar sitio",
        learn_more: "Saber más",
        request_quote: "Solicitar presupuesto",
        whatsapp: "Hablar por WhatsApp",
      },

      hero: {
        no_video: "Tu navegador no soporta videos HTML5.",
        title: "Soluciones completas para vivir, emprender y declarar en EE. UU.",
        subtitle:
          "Consultoría especializada en visados, creación de empresas, documentación fiscal y sitios web profesionales – todo en tu idioma.",
        cta: {
          visas: "Visados Americanos",
          company: "Apertura de Empresa",
          tax: "Impuestos y Documentos",
          sites: "Creación de Sitios",
        },
      },

      home: {
        why_title: "¿Por qué elegir HelpUS?",
        p1_t: "Atención Personalizada",
        p1_d: "Soporte 1:1 durante todo el proceso de su visa.",
        p2_t: "Experiencia Real",
        p2_d: "Consultores que han pasado por procesos similares.",
        p3_t: "Confianza y Transparencia",
        p3_d: "Explicamos todo con claridad y sin falsas promesas.",
        partners_title: "Nuestros Socios",
        services_title: "Nuestros Servicios",
        cards: {
          visas: { title: "Consultoría de Visas", desc: "Visas de turismo, estudio, trabajo y green card." },
          company: { title: "Apertura de Empresas", desc: "LLC en EE. UU. con soporte completo, incluso para extranjeros." },
          tax: { title: "Documentación Fiscal", desc: "ITIN, EIN, declaraciones y contabilidad para inmigrantes." },
          sites: { title: "Creación de Sitios", desc: "Sitios modernos con panel, tienda e integración con WhatsApp." },
        },
      },

      partners: {
        wagner_driver: { name: "Wagner Driver", desc: "Servicio de transporte ejecutivo y citas por WhatsApp" },
        tulio_bicicletas: { name: "Túlio Bicicletas", desc: "Bicicletas, accesorios y mantenimiento de calidad" },
        cg_details: { name: "CG Details", desc: "Limpieza detallada de autos, apartamentos y casas" },
        bluebox: { name: "Blue Box", desc: "Lavado de autos y motos" },
        publicarte: { name: "PublicArte", desc: "Diseño y comunicación visual" },
        waleska: { name: "Waleska Inmuebles", desc: "Corretaje inmobiliario" },
        katia: { name: "Dra. Kátia Xavier", desc: "Atención médica presencial y por telemedicina." },
        marcio_barber: { name: "Márcio Barber", desc: "Servicios de barbería con calidad y atención diferenciada." },
      },

      sites: {
        h1: "Creación de Sitios y Tiendas Online",
        intro:
          "Desarrollamos sitios modernos, rápidos y personalizados para empresas y profesionales. Con diseño responsivo, panel administrativo, integración con WhatsApp y alojamiento gratuito, tienes todo para tu presencia online.",
        features: [
          "Diseño profesional y responsivo",
          "Tienda online con carrito y WhatsApp",
          "Panel de control para gestionar productos",
          "Alojamiento gratuito en Vercel",
          "Base de datos gratuita (Supabase)",
          "Integración con redes sociales",
          "Control de usuarios por roles",
          "SEO básico incluido",
        ],
        pricing_from: "Desde",
        pricing_value: "$299",
        pricing_note: "Sitio completo entregado en hasta 10 días hábiles.",
        cta_quote: "Solicitar presupuesto",
        examples_title: "Ejemplos de sitios creados",
        support_note:
          "Soporte técnico incluido durante los primeros 30 días tras la entrega. Pago hasta en 2x sin interés con tarjeta o Pix.",
      },

      about: {
        title: "Acerca de HelpUS",
        intro:
          "HelpUS facilita el acceso a servicios esenciales para quienes desean vivir, emprender o invertir en Estados Unidos. Expertos en visados, apertura de empresas y documentación fiscal, con atención humana y enfocada en resultados.",
        blocks: {
          exp_t: "Experiencia",
          exp_d: "Más de 10 años ayudando a brasileños a lograr sus objetivos en EE. UU.",
          pers_t: "Atención Personalizada",
          pers_d: "Cada caso es único. Soluciones completas según tu perfil.",
          commit_t: "Compromiso",
          commit_d: "Ética, transparencia y dedicación total a tu camino.",
        },
      },

      contact: {
        title: "Contacto",
        subtitle: "Escríbenos y responderemos pronto.",
        address: "Dirección: 241 E 16th Ave, STE B4, Gulf Shores, AL 36542 - EE. UU.",
        email_label: "Email",
        phone_label: "Teléfono",
      },

      services: {
        title: "Servicios",

        visas: {
          title: "Visas",
          list: {
            B1B2: { title: "B1/B2", desc: "Guía y DS-160 para turismo/negocios." },
            F1: { title: "F1", desc: "Apoyo para visa de estudiante (I-20 y entrevista)." },
            F2: { title: "F2", desc: "Dependientes de F1 — formularios y documentos." },
            EB1A: { title: "EB1-A", desc: "Estrategia y petición por habilidad extraordinaria." },
            EB2NIW: { title: "EB2-NIW", desc: "Exención por Interés Nacional — elegibilidad y evidencias." },
            Renovacao: { title: "Renovación", desc: "Flujo simplificado para visas elegibles." },
            Familia: { title: "Familia", desc: "Categorías basadas en familia y listas." },
            CasosEspeciais: { title: "Casos Especiales", desc: "Escenarios complejos y waivers (orientación inicial)." },
            Complementares: { title: "Complementarios", desc: "EAD, Advance Parole y pasos relacionados." },
          },
        },

        company: {
          title: "Empresa",

          AberturaLLC: {
            title: "Apertura de LLC",
            desc: "Constitución de LLC con Operating Agreement y soporte para EIN.",
            intro: "Nos encargamos de todo el proceso para abrir tu LLC en Estados Unidos y obtener el EIN (ID fiscal).",
            steps: {
              name: "Verificación de nombre disponible y registro oficial",
              forms: "Presentación de formularios de constitución en el estado",
              ein: "Emisión del EIN directamente con el IRS",
              delivery: "Entrega de documentos digitales listos para usar",
            },
            price: "Precio: US$ 79,00",
            cta: "Contratar por WhatsApp",
            whatsapp_msg: "¡Hola! Me interesa el servicio: Apertura de LLC + EIN en EE. UU.",
          },

          BusinessLicense: {
            title: "Business License",
            desc: "Orientación de licencias municipales/condado según actividad.",
            intro:
              "Soporte completo para obtener tu licencia comercial en cualquier estado, de forma ágil y conforme a las reglas locales.",
            includes_title: "📋 Qué incluye:",
            includes: {
              0: "Relleno del formulario oficial del estado/condado",
              1: "Búsqueda del código correcto para tu actividad",
              2: "PDF final completado y listo para presentar",
              3: "Instrucciones claras sobre tasas y envío/aplicación",
              4: "Soporte por WhatsApp o e-mail hasta la emisión",
            },
            price: "$49",
            cta: "Hablar con HelpUS",
            whatsapp_msg:
              "¡Hola! Necesito ayuda para obtener mi Business License en EE. UU.",
          },

          EnderecoFiscal: {
            title: "Dirección Fiscal",
            desc: "Opciones de dirección para correspondencia y cumplimiento.",
            intro:
              "Dirección fiscal válida para registrar tu empresa, recibir correspondencia oficial y abrir cuenta bancaria.",
            includes_title: "📋 Qué incluye:",
            includes: {
              0: "Dirección válida con número, ciudad y estado",
              1: "Nombre de la empresa en el buzón",
              2: "Reenvío digital de documentos recibidos",
              3: "Contrato de cesión emitido en PDF",
            },
            price: "$29",
            cta: "Hablar con HelpUS",
            whatsapp_msg: "Hola, me interesa el servicio de Dirección Fiscal en EE. UU.",
          },

          OperatingAgreement: {
            title: "Operating Agreement",
            desc: "Documento ajustado a la estructura de tu LLC.",
            intro:
              "Preparamos un Operating Agreement a medida — esencial para abrir cuenta bancaria, obtener licencias y mantener la LLC al día.",
            includes_title: "📋 Qué incluye:",
            includes: {
              0: "Contrato legal adaptado a tu realidad empresarial",
              1: "Cláusulas sobre socios, reparto de ganancias y responsabilidades",
              2: "Versión en inglés para uso oficial + traducción explicativa en portugués",
              3: "Entrega digital en PDF listo para usar",
            },
            price: "$25",
            cta: "Solicitar por WhatsApp",
            whatsapp_msg:
              "¡Hola! Me interesa el servicio de Operating Agreement Personalizado.",
          },

          ITIN: { title: "ITIN", desc: "Montaje del paquete W-7 con respaldos." },
          W7: { title: "Formulario W-7", desc: "Solicitud de ITIN con carta de presentación y formularios." },
        },

        tax: {
          title: "Fiscal",
          IRPF: { title: "Declaración Individual", desc: "Declaración federal y orientación para inmigrantes y residentes." },
          ScheduleC: { title: "Schedule C", desc: "Ingresos como autónomo, deducciones y apoyo contable." },
          W9: { title: "Formulario W-9", desc: "Preparación del formulario de información del contribuyente." },
          Dependentes: { title: "Dependientes", desc: "Reglas para declarar dependientes y maximizar reembolsos." },
          Formularios: { title: "Formularios", desc: "Listas y formularios auxiliares del IRS." },
          Envio: { title: "Envío", desc: "Instrucciones de envío seguro y seguimiento." },

          ITINPage: {
            title: "Solicitud de ITIN",
            intro:
              "El ITIN es esencial para quienes deben declarar impuestos en EE. UU. y no tienen derecho a un SSN.",
            includes_title: "📋 Qué incluye:",
            includes: {
              0: "Relleno completo del formulario oficial W-7",
              1: "Carta explicativa personalizada para el IRS",
              2: "Checklist actualizado de documentos aceptados",
              3: "Instrucciones detalladas para envío por correo o validación vía ACE",
            },
            price: "$55",
            cta: "Hablar con HelpUS",
            whatsapp_msg: "Hola, me interesa el servicio de Solicitud de ITIN.",
          },

          W7Page: {
            title: "Formulario W-7 (Solicitud de ITIN)",
            intro:
              "Documento oficial para solicitar el ITIN ante el IRS. Nos encargamos de todo el proceso con precisión y seguridad:",
            includes_title: "📋 Qué incluye:",
            includes: {
              0: "Definición correcta de la categoría de elegibilidad",
              1: "Relleno completo y consistente de los datos",
              2: "Revisión para evitar errores comunes y garantizar aceptación",
              3: "Carta explicativa y checklist de documentos",
            },
            price: "Incluido en el paquete de ITIN",
            cta: "Solicitar por WhatsApp",
            whatsapp_msg:
              "Hola, necesito ayuda para completar el Formulario W-7 (ITIN).",
          },
        },
      },

      footer: {
        newsletter: {
          title:
            "Recibe novedades y consejos sobre visados, empresas, impuestos y sitios web profesionales",
          placeholder: "Ingresa tu correo",
          button: "Suscribirse",
          success: "¡Suscripción realizada con éxito!",
          error_exists: "Error al suscribirse. Puede que el correo ya esté registrado.",
          error_conn: "Error de conexión. Inténtalo de nuevo.",
        },
        contact: {
          address:
            "Dirección: 241 E 16th Ave, STE B4, Gulf Shores, AL 36542 - EE. UU.",
          email: "Email: helpus.ecommerce@gmail.com",
        },
        rights: "Todos los derechos reservados.",
        made_with: "Hecho con",
        by_helpus: "por HelpUS",
      },
    },
  },
};

// idioma salvo/localStorage
const savedLang =
  typeof window !== "undefined" ? localStorage.getItem("lang") : null;

i18n.use(initReactI18next).init({
  resources,
  lng: savedLang || "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
});

// mantém <html lang="">
if (typeof document !== "undefined") {
  i18n.on("languageChanged", (lng) => {
    document.documentElement.lang = lng;
    localStorage.setItem("lang", lng);
  });
}

export default i18n;
