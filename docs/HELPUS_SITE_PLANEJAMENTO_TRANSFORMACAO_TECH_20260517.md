# HelpUS Site — Diagnóstico, Estado Atual e Planejamento de Transformação Tech

Data: 2026-05-17 
Projeto: HelpUS Site / helpusbr.com 
Raiz local: D:/dev/helpus-site 
Documento de trabalho: planejamento para transformar a página principal em uma presença institucional elegante de empresa desenvolvedora de software, automação e soluções com IA.

---

## 1. Objetivo deste documento

Este documento consolida o entendimento atual do site helpusbr.com, do código local em D:/dev/helpus-site, das funcionalidades existentes, das ferramentas usadas e do planejamento estratégico para reposicionar a HelpUS como uma empresa de tecnologia.

O objetivo é servir como trilha operacional para as próximas alterações do site. A partir dele, cada mudança deverá ser planejada, implementada, validada e documentada até alcançar a versão final desejada.

A nova direção estratégica é transformar a página principal em uma home corporativa de tecnologia, com foco em desenvolvimento de software, criação de sites, sistemas, automação, inteligência artificial e soluções digitais. Os serviços de vistos, documentos, impostos e consultoria continuam importantes, mas passam a ser apresentados como verticais ou soluções específicas dentro do ecossistema HelpUS.

---

## 2. Visão atual do site

O site atual da HelpUS nasceu com foco forte em serviços para brasileiros relacionados aos Estados Unidos. A proposta principal percebida hoje gira em torno de vistos, empresas, impostos, documentos, traduções, abertura de LLC, ITIN, EIN, declaração fiscal, ebooks e serviços auxiliares.

Essa base continua valiosa, porque existe demanda real e porque várias páginas e componentes já foram criados. No entanto, a nova visão deve ampliar o posicionamento da marca: a HelpUS não deve ser percebida apenas como consultoria de vistos ou documentos, mas como uma empresa que desenvolve soluções digitais e usa tecnologia para resolver problemas reais de pessoas, profissionais e empresas.

A partir desta nova visão, helpusbr.com deve ser a porta de entrada institucional para:

- desenvolvimento de sites profissionais;
- desenvolvimento de sistemas sob medida;
- automação de processos com IA;
- apresentação do NexosAI;
- soluções digitais para parceiros;
- portfólio de sites e projetos já desenvolvidos;
- serviços de vistos americanos como vertical forte;
- simulador de visto como ferramenta de captação;
- ebooks e produtos digitais;
- atendimento consultivo via WhatsApp.

---

## 3. Estado técnico identificado no projeto local

O inventário local confirmou a existência da raiz D:/dev/helpus-site com os seguintes elementos relevantes:

- .git e .vercel, indicando controle de versão e integração/deploy com Vercel;
- auth-api, indicando uma camada de API/autenticação separada;
- build, indicando que já houve build gerado;
- docs, pasta onde este documento deve ficar;
- node_modules, indicando dependências já instaladas localmente;
- public, com assets públicos;
- simulator, indicando existência de uma frente de simulação, provavelmente ligada ao fluxo de vistos;
- src, código principal React;
- .env.example e .env.local, configuração de ambiente;
- package.json e package-lock.json, stack Node/npm;
- server.js, servidor Node/Express;
- schema_unificado_helpus.sql, indicação de modelagem de banco ou estrutura SQL;
- vercel.json, configuração de deploy/rewrites na Vercel;
- arquivos auxiliares como gerarHash.js, gitatualizar.bat, push-github.bat, estrutura_helpus.md, temp_chatguiado.txt e temp_fluxo_chat.txt.

Pelo material já analisado, a stack conhecida é React/CRA no frontend, Node/Express em server.js, deploy em Vercel e possível API hospedada no Railway.

---

## 4. O que o site faz hoje

O site atual já possui estrutura para várias frentes comerciais. Mesmo antes da transformação, ele parece reunir:

### 4.1 Serviços de vistos

O site contempla páginas e conteúdos voltados para vistos americanos, incluindo categorias como turismo/negócios, estudante, dependentes e vistos qualificados. Esta frente deve continuar como uma vertical importante, mas com apresentação mais moderna e integrada à tecnologia.

### 4.2 Empresa, documentos e impostos

Há conteúdo relacionado a abertura de empresa, LLC, EIN, ITIN, W-7, impostos, documentação fiscal, organização documental e regularidade. Esses serviços são úteis para brasileiros e empreendedores que atuam ou pretendem atuar nos EUA.

### 4.3 Criação de sites

Existe uma frente de criação de sites, que agora deve ganhar protagonismo maior. Em vez de ser apenas mais um serviço, ela deve ser uma prova concreta da nova identidade da HelpUS como desenvolvedora de soluções digitais.

### 4.4 Parceiros e portfólio

A área de parceiros pode ser reposicionada como portfólio. O ideal é mostrar sites já desenvolvidos, segmentos atendidos, imagens/mockups e links reais. Isso aumenta confiança e demonstra capacidade técnica.

### 4.5 Ebooks e produtos digitais

A estrutura de ebooks existe, mas deve ser tratada como produto em preparação até que checkout, entrega, política de reembolso, capa, descrição e plataforma de venda estejam definidos.

### 4.6 Chat guiado e captação

A presença de arquivos temporários de fluxo de chat sugere que já existe ou existiu planejamento de atendimento guiado. Esse fluxo deve ser reaproveitado como ferramenta de conversão, principalmente para vistos, sites e diagnóstico de automação.

---

## 5. Ferramentas, linguagens e componentes técnicos

### 5.1 Frontend

O frontend é baseado em React, provavelmente criado com Create React App. A aplicação usa componentes em src, rotas React e assets públicos em public.

Tecnologias esperadas ou já indicadas:

- React;
- JavaScript/JSX;
- CSS/Tailwind ou configuração de Tailwind;
- i18n para suporte multilíngue;
- assets em public/img e vídeos em public;
- build estático para Vercel.

### 5.2 Backend/API

O arquivo server.js indica uso de Node.js/Express. Existe também uma pasta auth-api, sugerindo separação de autenticação ou API auxiliar.

A configuração deve ser revisada para confirmar:

- qual API é oficial;
- quais endpoints estão ativos;
- se a API está no Railway;
- se o frontend usa proxy para a API;
- se autenticação/admin ainda são utilizados;
- se o formulário de contato envia dados de verdade;
- se newsletter, login e chat guiado têm backend funcional.

### 5.3 Banco de dados

O arquivo schema_unificado_helpus.sql indica existência de modelagem SQL. A função exata do banco precisa ser confirmada. Possíveis usos:

- usuários/admin;
- leads;
- newsletter;
- contatos;
- clientes;
- pedidos de serviço;
- simulações de visto;
- ebooks;
- autenticação;
- parceiros.

Antes de alterar fluxos com dados, é necessário abrir e documentar esse schema.

### 5.4 Deploy e hospedagem

A presença de .vercel, vercel.json e build indica uso de Vercel. Há indícios de API em Railway.

Pontos a validar:

- domínio oficial atual;
- domínio usado no sitemap;
- rewrites da Vercel;
- URL oficial da API;
- variáveis de ambiente;
- se o build local corresponde ao deploy público;
- se o deploy da Vercel está usando o mesmo branch/repositório local.

---

## 6. Problemas e riscos atuais

### 6.1 Posicionamento disperso

O site tem muitos serviços, mas a mensagem principal precisa ser reorganizada. Hoje a percepção tende a ser de consultoria geral para brasileiros nos EUA. A nova meta é posicionar como empresa de tecnologia e soluções digitais.

### 6.2 Conversão pouco hierarquizada

A home precisa ter três caminhos principais e claros:

1. desenvolver uma solução digital;
2. conhecer o NexosAI;
3. simular ou iniciar processo de visto.

Todo o restante deve apoiar esses caminhos.

### 6.3 SEO e domínio

É necessário revisar sitemap, domínio canônico, metatags, títulos por página, descrições e indexação. Se o conteúdo principal depender totalmente de JavaScript, algumas páginas podem não performar bem em SEO.

### 6.4 Encoding/mojibake

Foram observados sinais anteriores de textos com problemas de encoding em alguns arquivos. Antes da revisão final de copy, é recomendável fazer varredura e corrigir prÃ¡tico, seguranÃ§a, lanÃ§ar e padrões similares.

### 6.5 API inconsistente

É necessário decidir qual URL de API é oficial e alinhar server.js, vercel.json, .env.local, .env.example e chamadas do frontend.

### 6.6 Formulários e CTAs

É preciso validar se todos os formulários e botões realmente funcionam. Um formulário visual que não envia lead prejudica conversão.

### 6.7 Performance

Vídeos grandes podem prejudicar carregamento em mobile. A nova home deve ser elegante e rápida, usando vídeo apenas quando fizer sentido, com fallback e otimização.

### 6.8 Legal e compliance em vistos

A vertical de vistos precisa evitar promessa de aprovação. A linguagem correta deve ser orientação, triagem, organização documental e preparação, com aviso de que simulação não garante resultado.

---

## 7. Novo posicionamento estratégico

A HelpUS deve ser reposicionada como:

> Empresa de tecnologia que desenvolve softwares, sites, automações e soluções com IA para negócios modernos.

Versão curta para uso na home:

> Software, automação e inteligência artificial para negócios que querem crescer com eficiência.

Versão institucional:

> A HelpUS cria sites profissionais, sistemas sob medida, automações com IA e soluções digitais para empresas, profissionais liberais e operações complexas.

A marca pode organizar suas frentes como submarcas ou linhas:

- HelpUS Tech: desenvolvimento de software e automações;
- NexosAI: solução de IA e automação operacional;
- HelpUS Web Studio: criação de sites e presença digital;
- HelpUS Visa Solutions: vistos americanos e organização documental;
- HelpUS Digital Products: ebooks, checklists e materiais digitais.

---

## 8. Papel do NexosAI

O AI Bridge passa a ser apresentado comercialmente como NexosAI.

Descrição estratégica:

> NexosAI é a solução da HelpUS para conectar inteligência artificial a tarefas reais, documentos, sistemas, bancos de dados, navegadores, arquivos e fluxos operacionais.

Benefícios a comunicar:

- automação de tarefas repetitivas;
- agentes de IA assistindo processos reais;
- geração e revisão de documentos;
- integração com arquivos, sistemas e bancos de dados;
- histórico rastreável de execuções;
- suporte a fluxos multiagente;
- redução de trabalho manual;
- aumento de velocidade operacional;
- melhor controle sobre tarefas complexas.

Cuidado comercial:

No primeiro momento, o NexosAI deve ser apresentado como solução empresarial sob diagnóstico/customização, não como SaaS público totalmente padronizado.

---

## 9. Nova arquitetura sugerida para a página inicial

### 9.1 Hero principal

Headline:

> Software, automação e inteligência artificial para negócios que querem crescer com eficiência.

Subheadline:

> Criamos sites profissionais, sistemas sob medida, automações com IA e soluções digitais para empresas, profissionais e operações que precisam sair do improviso.

CTAs:

- Quero desenvolver uma solução;
- Conhecer o NexosAI;
- Simular meu visto americano.

Visual:

- layout elegante, moderno e tecnológico;
- fundo com gradiente, partículas, linhas de conexão ou mockup de dashboard;
- evitar que Miami/vistos dominem o topo;
- vídeo de Miami pode migrar para a área de vistos.

### 9.2 Seção de soluções principais

Título:

> Soluções digitais para tirar sua operação do improviso.

Cards:

1. Sites profissionais;
2. Sistemas sob medida;
3. Automação com IA;
4. Soluções para vistos.

Cada card deve ter descrição curta, ícone, CTA e link para página específica.

### 9.3 Destaque NexosAI

Título:

> NexosAI: inteligência artificial conectada ao trabalho real.

Conteúdo:

- explicar o problema dos processos manuais;
- mostrar que o NexosAI conecta IA com tarefas e dados reais;
- listar capacidades;
- CTA para diagnóstico.

### 9.4 Portfólio de sites e parceiros

Título:

> Sites e projetos que desenvolvemos.

Mostrar:

- cards com imagem/mockup;
- nome do cliente/projeto;
- segmento;
- descrição curta;
- link para acessar;
- tag do tipo de entrega.

### 9.5 Vertical de vistos

Título:

> Vai aplicar para visto americano? Comece com uma pré-análise inteligente.

CTA:

> Fazer simulação de visto.

A home deve chamar para uma página dedicada de vistos, não tentar explicar todos os tipos na página principal.

### 9.6 Processo de trabalho

Título:

> Da ideia à solução funcionando.

Etapas:

1. Diagnóstico;
2. Protótipo;
3. Desenvolvimento;
4. Publicação;
5. Evolução.

### 9.7 Segmentos atendidos

Exemplos:

- saúde;
- transporte;
- educação;
- contabilidade;
- imigração;
- pequenos negócios;
- profissionais liberais;
- serviços locais.

### 9.8 CTA final

Título:

> Tem uma ideia, processo manual ou negócio que precisa de tecnologia?

Botões:

- Agendar conversa pelo WhatsApp;
- Ver soluções;
- Conhecer NexosAI.

---

## 10. Nova navegação sugerida

Menu recomendado:

- Início;
- Soluções;
 - Desenvolvimento de sites;
 - Sistemas sob medida;
 - Automação com IA;
 - NexosAI;
- Portfólio;
- Vistos;
 - Simulador de visto;
 - B1/B2;
 - F1/F2;
 - EB2-NIW;
 - EB1-A;
- Ebooks;
- Sobre;
- Contato.

Essa navegação coloca tecnologia no centro e mantém vistos como vertical forte.

---

## 11. Página de vistos planejada

Criar ou reorganizar uma landing específica para vistos, preferencialmente em /vistos-americanos.

Estrutura:

1. Hero: orientação para visto americano com atendimento em português;
2. Simulador inicial;
3. Tipos de visto;
4. Como a HelpUS ajuda;
5. Documentos comuns;
6. CTA WhatsApp;
7. Aviso legal de não garantia;
8. Links para páginas específicas B1/B2, F1, F2, EB2-NIW, EB1-A.

O simulador deve funcionar como ferramenta de captação e triagem, não como promessa de aprovação.

---

## 12. Portfólio planejado

A área de parceiros deve evoluir para portfólio.

Cada item deve conter:

- nome do projeto;
- URL;
- segmento;
- imagem ou mockup;
- o que foi entregue;
- tecnologias usadas, se fizer sentido;
- CTA para ver o site.

Exemplos de categorias:

- site institucional;
- landing page;
- sistema interno;
- automação;
- consultoria digital;
- identidade digital.

---

## 13. Páginas internas a criar ou revisar

Prioridade alta:

- / nova home tech;
- /nexosai apresentação da solução NexosAI;
- /criacao-de-sites reforçada como Web Studio;
- /portfolio ou /parceiros reposicionada;
- /vistos-americanos com simulador;
- /contato com formulário real e WhatsApp.

Prioridade média:

- páginas de sistemas sob medida;
- página de automação com IA;
- página de diagnóstico digital;
- página de ebooks/produtos digitais;
- páginas por segmento.

---

## 14. Roadmap de implementação

### Fase 1 — Auditoria e estabilidade

- revisar package.json, server.js, vercel.json, .env.example, .env.local;
- confirmar API oficial;
- rodar build local;
- corrigir erros de encoding;
- revisar sitemap e domínio;
- validar formulários e CTAs;
- mapear rotas reais;
- mapear componentes da home atual.

### Fase 2 — Conteúdo e arquitetura

- escrever copy final da nova home;
- definir menu;
- definir seções;
- definir CTAs;
- definir páginas internas prioritárias;
- aprovar nomes: HelpUS Tech, NexosAI, HelpUS Visa Solutions.

### Fase 3 — Redesign da home

- criar hero tecnológico;
- criar seção de soluções;
- criar bloco NexosAI;
- criar portfólio;
- criar chamada de vistos;
- criar processo de trabalho;
- criar CTA final;
- otimizar responsivo/mobile.

### Fase 4 — Página NexosAI

- criar página dedicada;
- explicar problema/solução;
- apresentar capacidades;
- incluir exemplos de uso;
- CTA para diagnóstico;
- evitar prometer produto fechado antes da maturidade comercial.

### Fase 5 — Página de vistos com simulador

- revisar simulador;
- criar landing de vistos;
- incluir aviso legal;
- integrar CTA WhatsApp;
- medir conversão.

### Fase 6 — Portfólio

- levantar sites já desenvolvidos;
- criar cards;
- adicionar imagens/mockups;
- organizar por categoria;
- publicar links.

### Fase 7 — SEO, performance e deploy

- revisar metatags;
- corrigir sitemap;
- otimizar vídeos/imagens;
- validar Lighthouse;
- build final;
- deploy Vercel;
- validação pública.

---

## 15. Critérios de sucesso

A nova versão será considerada bem-sucedida quando:

- a primeira dobra comunicar claramente que a HelpUS é empresa de tecnologia;
- o usuário entender em menos de 10 segundos que pode contratar site, sistema, automação ou IA;
- NexosAI estiver apresentado como solução inovadora;
- vistos continuarem visíveis como serviço forte, mas sem dominar a marca;
- houver portfólio real de sites e projetos;
- CTAs levarem a WhatsApp, formulário ou páginas úteis;
- build passar sem erros;
- sitemap e domínio estiverem corretos;
- páginas principais tiverem boa experiência mobile;
- não houver textos com mojibake;
- formulários importantes funcionarem.

---

## 16. Próximas ações imediatas recomendadas

1. Abrir e documentar package.json, server.js, vercel.json e schema_unificado_helpus.sql.
2. Mapear rotas e componentes atuais em src.
3. Localizar a home atual e seus componentes principais.
4. Criar um documento de copy da nova home.
5. Implementar a nova home em branch ou commit controlado.
6. Rodar build.
7. Validar visual local.
8. Publicar em Vercel apenas após aprovação.

---

## 17. Observação operacional

Este documento é a referência inicial de planejamento. Ele deve ser atualizado conforme novas descobertas técnicas forem feitas no repositório. Toda alteração relevante no projeto deve registrar:

- arquivo alterado;
- objetivo da alteração;
- validação executada;
- pendência criada;
- risco identificado;
- próximo passo.
