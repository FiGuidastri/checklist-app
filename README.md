# 📋 Checklist de Instalação - Web App

Um simples Web App para técnicos de campo preencherem um checklist de instalação ou reparo de serviços. O aplicativo gera um relatório de texto formatado, pronto para ser copiado e compartilhado em aplicativos de mensagem (como WhatsApp) ou e-mail.

Este projeto foi desenvolvido com foco na simplicidade e facilidade de uso, sem a necessidade de um back-end ou instalação de aplicativos via loja.

✨ Funcionalidades Principais
Formulário Intuitivo: Checklist completo dividido em 5 seções claras e objetivas.

Captura de Geolocalização: Com um único clique, o aplicativo obtém as coordenadas GPS do usuário e gera um link direto para o Google Maps.

Upload de Fotos: Campos específicos para anexar fotos, que abrem a câmera ou a galeria do celular.

Geração de Relatório: Cria um relatório de texto padronizado com todas as informações preenchidas.

Copiar e Colar Fácil: Um botão dedicado para copiar todo o relatório para a área de transferência do dispositivo.

Design Responsivo: A interface se adapta perfeitamente a telas de celulares e tablets.

🚀 Tecnologias Utilizadas
Este projeto foi construído utilizando apenas tecnologias web de front-end, garantindo leveza e compatibilidade.

HTML5: Para a estrutura e semântica do conteúdo.

CSS3: Para a estilização e o design responsivo.

JavaScript (ES6): Para toda a lógica funcional, incluindo a captura de localização e a manipulação do formulário.

🔧 Como Usar
Para Uso Rápido (Localmente)
Clone ou baixe os arquivos deste repositório.

Abra o arquivo index.html diretamente no seu navegador de preferência (Google Chrome, Firefox, etc.).

📲 Para Uso em Campo (Recomendado)
Para que os técnicos possam usar o aplicativo em seus celulares, a melhor abordagem é hospedar os arquivos em um serviço de hospedagem de sites estáticos. A maioria deles oferece planos gratuitos generosos.

Opções recomendadas:

GitHub Pages

Netlify

Vercel

Passo a passo rápido com GitHub Pages:

Crie uma conta no GitHub.

Crie um novo repositório público (ex: checklist-app).

Faça o upload dos três arquivos do projeto (index.html, style.css, script.js) para este repositório.

No seu repositório, vá até a aba Settings (Configurações).

No menu lateral, clique em Pages.

Na seção "Build and deployment", em "Source", selecione Deploy from a branch.

Escolha a branch main (ou master) e a pasta / (root). Clique em Save.

Aguarde alguns minutos e o GitHub irá gerar um link público para o seu aplicativo.

Compartilhe este link com os técnicos. Eles podem acessá-lo de qualquer navegador de celular e até criar um atalho na tela inicial.

📂 Estrutura do Projeto
O projeto é composto por três arquivos principais:

checklist-app/
├── 📄 index.html    # A estrutura do formulário e o conteúdo da página.
├── 🎨 style.css     # Todas as regras de estilo e design.
└── 🧠 script.js     # A lógica de programação e interatividade.
index.html: Contém todos os elementos visíveis, como os campos de texto, títulos, seções e botões.

style.css: Responsável por deixar o aplicativo com uma aparência agradável e profissional, além de garantir que ele se ajuste bem em telas pequenas.

script.js: O "cérebro" da aplicação. Ele escuta os eventos (cliques em botões), executa a função de geolocalização, coleta os dados do formulário e gera o relatório final.

## 📄 Licença e Direitos Autorais

Copyright (c) 2025 FG Data. Todos os direitos reservados.

É estritamente proibida a reprodução, distribuição, modificação ou utilização deste software e de seu código-fonte, no todo ou em parte, sem a permissão prévia e expressa do detentor dos direitos autorais.# checklist-app
