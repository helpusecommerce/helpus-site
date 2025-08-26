// 📄 src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

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
      hero: {
        no_video: "Your browser does not support HTML5 video.",
        title: "Complete solutions to live, start a business and file taxes in the USA",
        subtitle: "Specialized consultancy in visas, company formation, tax documentation and professional websites – all in your language.",
        cta: {
          visas: "American Visas",
          company: "Company Formation",
          tax: "Taxes & Documents",
          sites: "Website Creation"
        }
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
        visit_site: "Visit site"
      },
      sites: {
        h1: "Website and Online Store Development",
        intro: "We build modern, fast, and personalized websites for companies and professionals. With responsive layout, admin panel, WhatsApp integration and free hosting, you have everything to build your online presence.",
        features: [
          "Professional and responsive design",
          "Online store with cart and WhatsApp",
          "Control panel to manage products",
          "Free hosting on Vercel",
          "Free database (Supabase)",
          "Social media integration",
          "User roles & access control",
          "Basic SEO included"
        ],
        pricing_from: "Starting at",
        pricing_value: "$299",
        pricing_note: "Complete website delivered within 10 business days.",
        cta_quote: "Request a quote",
        examples_title: "Examples of websites created",
        support_note: "Technical support included for the first 30 days after delivery. Payment in up to 2x interest-free via card or Pix."
      },
      footer: {
        newsletter: {
          title: "Get news and tips about visas, companies, taxes and professional websites",
          placeholder: "Enter your email",
          button: "Subscribe",
          success: "Subscribed successfully!",
          error_exists: "Subscription error. Email may already be registered.",
          error_conn: "Connection error. Please try again."
        },
        contact: {
          address: "Address: 241 E 16th Ave, STE B4, Gulf Shores, AL 36542 - USA",
          email: "Email: helpus.ecommerce@gmail.com"
        },
        rights: "All rights reserved.",
        made_with: "Made with",
        by_helpus: "by HelpUS"
      }
    }
  },
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
      hero: {
        no_video: "Seu navegador não suporta vídeos HTML5.",
        title: "Soluções completas para viver, empreender e declarar nos EUA",
        subtitle: "Consultoria especializada em vistos, abertura de empresas, documentação fiscal e criação de sites profissionais – tudo em português.",
        cta: {
          visas: "Vistos Americanos",
          company: "Abertura de Empresa",
          tax: "Impostos e Documentos",
          sites: "Criação de Sites"
        }
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
        visit_site: "Acessar site"
      },
      sites: {
        h1: "Criação de Sites e Lojas Virtuais",
        intro: "Desenvolvemos sites modernos, rápidos e personalizados para empresas e profissionais. Com layout responsivo, painel administrativo, integração com WhatsApp e hospedagem gratuita, você tem tudo o que precisa para marcar presença na internet.",
        features: [
          "Design profissional e responsivo",
          "Loja virtual com carrinho e WhatsApp",
          "Painel de controle para gerenciar produtos",
          "Hospedagem gratuita na Vercel",
          "Banco de dados gratuito (Supabase)",
          "Integração com redes sociais",
          "Controle de usuários por tipo de acesso",
          "SEO básico incluso"
        ],
        pricing_from: "A partir de",
        pricing_value: "$299",
        pricing_note: "Site completo entregue em até 10 dias úteis.",
        cta_quote: "Solicitar orçamento",
        examples_title: "Exemplos de sites criados",
        support_note: "Suporte técnico incluso nos primeiros 30 dias após a entrega. Pagamento em até 2x sem juros via cartão ou Pix."
      },
      footer: {
        newsletter: {
          title: "Receba novidades e dicas sobre vistos, empresas, impostos e sites profissionais",
          placeholder: "Digite seu e-mail",
          button: "Inscrever",
          success: "Inscrição realizada com sucesso!",
          error_exists: "Erro ao inscrever. Talvez e-mail já esteja cadastrado.",
          error_conn: "Erro de conexão. Tente novamente."
        },
        contact: {
          address: "Endereço: 241 E 16th Ave, STE B4, Gulf Shores, AL 36542 - EUA",
          email: "Email: helpus.ecommerce@gmail.com"
        },
        rights: "Todos os direitos reservados.",
        made_with: "Feito com",
        by_helpus: "pela HelpUS"
      }
    }
  },
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
      hero: {
        no_video: "Tu navegador no soporta videos HTML5.",
        title: "Soluciones completas para vivir, emprender y declarar en EE.UU.",
        subtitle: "Consultoría especializada en visados, creación de empresas, documentación fiscal y sitios web profesionales – todo en tu idioma.",
        cta: {
          visas: "Visados Americanos",
          company: "Apertura de Empresa",
          tax: "Impuestos y Documentos",
          sites: "Creación de Sitios"
        }
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
        visit_site: "Visitar sitio"
      },
      sites: {
        h1: "Creación de Sitios y Tiendas Online",
        intro: "Desarrollamos sitios modernos, rápidos y personalizados para empresas y profesionales. Con diseño responsivo, panel administrativo, integración con WhatsApp y alojamiento gratuito, tienes todo para tu presencia online.",
        features: [
          "Diseño profesional y responsivo",
          "Tienda online con carrito y WhatsApp",
          "Panel de control para gestionar productos",
          "Alojamiento gratuito en Vercel",
          "Base de datos gratuita (Supabase)",
          "Integración con redes sociales",
          "Control de usuarios por roles",
          "SEO básico incluido"
        ],
        pricing_from: "Desde",
        pricing_value: "$299",
        pricing_note: "Sitio completo entregado en hasta 10 días hábiles.",
        cta_quote: "Solicitar presupuesto",
        examples_title: "Ejemplos de sitios creados",
        support_note: "Soporte técnico incluido durante los primeros 30 días después de la entrega. Pago hasta en 2x sin interés con tarjeta o Pix."
      },
      footer: {
        newsletter: {
          title: "Recibe novedades y consejos sobre visados, empresas, impuestos y sitios web profesionales",
          placeholder: "Ingresa tu correo",
          button: "Suscribirse",
          success: "¡Suscripción realizada con éxito!",
          error_exists: "Error al suscribirse. Puede que el correo ya esté registrado.",
          error_conn: "Error de conexión. Inténtalo de nuevo."
        },
        contact: {
          address: "Dirección: 241 E 16th Ave, STE B4, Gulf Shores, AL 36542 - EE. UU.",
          email: "Email: helpus.ecommerce@gmail.com"
        },
        rights: "Todos los derechos reservados.",
        made_with: "Hecho con",
        by_helpus: "por HelpUS"
      }
    }
  }
};

// idioma salvo/localStorage
const savedLang =
  typeof window !== 'undefined' ? localStorage.getItem('lang') : null;

i18n.use(initReactI18next).init({
  resources,
  lng: savedLang || 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
});

// mantém <html lang="">
if (typeof document !== 'undefined') {
  i18n.on('languageChanged', (lng) => {
    document.documentElement.lang = lng;
    localStorage.setItem('lang', lng);
  });
}

export default i18n;
