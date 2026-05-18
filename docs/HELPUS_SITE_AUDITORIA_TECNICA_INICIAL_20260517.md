# HelpUS Site - Auditoria Tecnica Inicial

Data: 2026-05-17T13:30:43
Raiz: `D:/dev/helpus-site`

---

## 1. Package.json

- name: `helpus-site`
- version: `1.0.0`
- scripts:
  - `start`: node server.js`
  - `build`: react-scripts build`
  - `start:cra`: react-scripts start`
  - `test`: react-scripts test`
  - `eject`: react-scripts eject`

## 2. Dependencias

- `@nhost/nhost-js`: `^3.3.0`
- `aos`: `^2.3.4`
- `axios`: `^1.11.0`
- `bcryptjs`: `^3.0.2`
- `express`: `^5.1.0`
- `framer-motion`: `^12.23.6`
- `http-proxy-middleware`: `^3.0.5`
- `i18next`: `^23.10.1`
- `i18next-http-backend`: `^3.0.2`
- `react`: `^18.2.0`
- `react-dom`: `^18.2.0`
- `react-i18next`: `^13.5.0`
- `react-icons`: `^5.5.0`
- `react-router-dom`: `^6.14.2`
- `react-scripts`: `5.0.1`
- `tailwindcss`: `^3.3.0`

## 3. Arquivos de configuracao

- `server.js`: existe=True, bytes=951
- `vercel.json`: existe=True, bytes=135
- `.env.example`: existe=True, bytes=49
- `.env.local`: existe=True, bytes=49
- `tailwind.config.js`: existe=True, bytes=107
- `postcss.config.js`: existe=True, bytes=86
- `schema_unificado_helpus.sql`: existe=True, bytes=3531

## 4. Rotas React detectadas

- `/` - `src/App.js`
- `/admin` - `src/App.js`
- `/admin/cadastro-usuario` - `src/App.js`
- `/admin/editar-usuario/:id` - `src/App.js`
- `/contato` - `src/App.js`
- `/criacao-de-sites` - `src/App.js`
- `/ebooks` - `src/App.js`
- `/login` - `src/App.js`
- `/parceiros` - `src/App.js`
- `/politica-de-privacidade` - `src/App.js`
- `/servicos` - `src/App.js`
- `/servicos/documentos` - `src/App.js`
- `/servicos/empresa` - `src/App.js`
- `/servicos/empresa/abertura` - `src/App.js`
- `/servicos/empresa/business-license` - `src/App.js`
- `/servicos/empresa/endereco-fiscal` - `src/App.js`
- `/servicos/empresa/itin` - `src/App.js`
- `/servicos/empresa/operating-agreement` - `src/App.js`
- `/servicos/empresa/w7` - `src/App.js`
- `/servicos/fiscal` - `src/App.js`
- `/servicos/fiscal/child-tax-credit` - `src/App.js`
- `/servicos/fiscal/declaracao` - `src/App.js`
- `/servicos/fiscal/documentos-diversos` - `src/App.js`
- `/servicos/fiscal/envio` - `src/App.js`
- `/servicos/fiscal/schedule-c-se` - `src/App.js`
- `/servicos/fiscal/w9` - `src/App.js`
- `/servicos/vistos` - `src/App.js`
- `/servicos/vistos/b1b2` - `src/App.js`
- `/servicos/vistos/casos-especiais` - `src/App.js`
- `/servicos/vistos/complementares` - `src/App.js`
- `/servicos/vistos/eb1a` - `src/App.js`
- `/servicos/vistos/eb2niw` - `src/App.js`
- `/servicos/vistos/f1` - `src/App.js`
- `/servicos/vistos/f2` - `src/App.js`
- `/servicos/vistos/familia` - `src/App.js`
- `/servicos/vistos/outros-trabalho` - `src/App.js`
- `/servicos/vistos/renovacao` - `src/App.js`
- `/sobre` - `src/App.js`

## 5. Arquivos com API, fetch, axios, env ou URLs

- `auth-api/config/db.js`
- `auth-api/controllers/userController.js`
- `auth-api/index.old.js`
- `auth-api/middleware/auth.js`
- `auth-api/routes/chatLead.js`
- `auth-api/routes/chatRoutes.js`
- `auth-api/server - Copia.js`
- `auth-api/server.js`
- `auth-api/swagger.js`
- `build/static/js/main.034d0738.js`
- `server.js`
- `src/App.js`
- `src/components/ChatGuiado.jsx`
- `src/components/ChatIA.jsx`
- `src/components/Footer.jsx`
- `src/components/Hero.jsx`
- `src/components/Newsletter.jsx`
- `src/config/domains.js`
- `src/config/partners-WagnerPredator.js`
- `src/config/partners.js`
- `src/i18n.js`
- `src/legacy/AtendenteVirtual.jsx`
- `src/legacy/ChatBot.jsx`
- `src/legacy/ChatBotFloat.jsx`
- `src/legacy/ChatVirtual.jsx`
- `src/lib/apiBase.js`
- `src/pages/CriacaoDeSites.jsx`
- `src/pages/Ebooks.jsx`
- `src/pages/Empresa.jsx`
- `src/pages/Fiscal.jsx`
- `src/pages/Vistos.jsx`
- `src/pages/servicos/documentos/Documentos.jsx`
- `src/pages/servicos/empresa/AberturaLLC.jsx`
- `src/pages/servicos/empresa/BusinessLicense.jsx`
- `src/pages/servicos/empresa/EnderecoFiscal.jsx`
- `src/pages/servicos/empresa/ITIN.jsx`
- `src/pages/servicos/empresa/OperatingAgreement.jsx`
- `src/pages/servicos/empresa/W7.jsx`
- `src/pages/servicos/fiscal/Dependentes.jsx`
- `src/pages/servicos/fiscal/Envio.jsx`
- `src/pages/servicos/fiscal/Formularios.jsx`
- `src/pages/servicos/fiscal/IRPF.jsx`
- `src/pages/servicos/fiscal/ScheduleC.jsx`
- `src/pages/servicos/fiscal/W9.jsx`
- `src/pages/servicos/vistos/B1B2.jsx`
- `src/pages/servicos/vistos/CasosEspeciais.jsx`
- `src/pages/servicos/vistos/Complementares.jsx`
- `src/pages/servicos/vistos/EB1A.jsx`
- `src/pages/servicos/vistos/EB2NIW.jsx`
- `src/pages/servicos/vistos/F1.jsx`
- `src/pages/servicos/vistos/F2.jsx`
- `src/pages/servicos/vistos/Familia.jsx`
- `src/pages/servicos/vistos/OutrosTrabalho.jsx`
- `src/pages/servicos/vistos/Renovacao.jsx`
- `src/services/api.js`

## 6. Possiveis problemas de encoding

- `docs/HELPUS_SITE_PLANEJAMENTO_TRANSFORMACAO_TECH_20260517.md`
- `server.js`
- `src/components/Header.jsx`
- `src/pages/Ebooks.jsx`
- `src/pages/Home.jsx`

## 7. Arquivos grandes fora de node_modules

- `helpussite.zip` - 107281013 bytes
- `.git/objects/4d/ec41a92923a7e85b7101dcb1de0e93f1afc701` - 47181083 bytes
- `.git/objects/0b/62bf2a63da803a22649626eaae1c8b55764035` - 34929735 bytes
- `helpus-site.git/objects/pack/pack-007e324d731bf06c6574773aa034746e496c4bb4.pack` - 34922600 bytes
- `build/Miami.mp4` - 23639681 bytes
- `public/Miami.mp4` - 23639681 bytes
- `.git/objects/00/fb042d7ccce2d70b6ab23643d25b2d3bf9bd9f` - 22603895 bytes
- `public/img/parceiros/video-escola.mp4` - 19332132 bytes
- `build/img/parceiros/video-escola.mp4` - 19332132 bytes
- `.git/objects/e4/bfe4711eb80de46d7ec76e95e1e19f75e65347` - 19308700 bytes
- `dir.txt` - 16766310 bytes
- `public/img/parceiros/video-fundo.mp4` - 14759510 bytes
- `build/img/parceiros/video-fundo.mp4` - 14759510 bytes
- `.git/objects/d0/80ee85de6d7ef76f160eb2a857a70e5f0b196a` - 14135783 bytes
- `.git/objects/c4/4c6c4cd9d08bd00380d652505433b2dde6523e` - 6077287 bytes

## 8. Tabelas SQL detectadas

- Nenhuma tabela detectada por regex simples.

## 9. Git status

```
?? docs/
?? helpussite.zip
```

## 10. Proximos passos

- Abrir a home atual e componentes centrais.
- Confirmar API oficial e alinhar server.js, vercel.json e env.
- Corrigir encoding antes da nova copy.
- Rodar npm run build e registrar o resultado.
- Planejar patch da nova home tech em etapa separada.
