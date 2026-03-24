# Projeto: Meu Refúgio Tarot

## 1. Visão Geral
O **Meu Refúgio Tarot** é um PWA (Progressive Web Application) voltado para o acolhimento espiritual e emocional. Ao invés da abordagem tradicional de adivinhação do futuro, o aplicativo busca criar uma pausa curativa, oferecendo mensagens reconfortantes baseadas em 38 emoções humanas complexas mapeadas pela taróloga Samaa.

## 2. Pilhas e Tecnologias (Tech Stack)
* **Frontend:** HTML5 semântico, CSS3 Moderno (Vanilla) e JavaScript puro.
* **Aplicativo (PWA):** Uso de `manifest.json` com ícones estáticos no formato `.jpg` (substituindo antigas versões png) e um `sw.js` (Service Worker offline) que viabiliza o aplicativo ser instalado direto na tela inicial em iOS e Android.
* **Deploy/Armazenamento:** Hospedagem no GitHub Pages, possibilitando integração contínua (via Git Push). Toda alteração na branch `main` é automaticamente distribuída para o domínio final aos usuários.

## 3. Estrutura do Site (Páginas)
* **`index.html` (Nuvem principal):** O portal de acolhimento. Contém um layout com imagem de fundo fixa ('home.png'), sombras escuras elegantes (text-shadow e gradients no CSS) e foco instantâneo no texto calmo, com botões bem centralizados na tela para seguir jornada em qualquer dispositivo celular.
* **`emocoes.html`:** O "Oráculo dos Sentimentos". Através do Glassmorphism (efeito vidro no painel) e fundo borrado, abre-se uma grade flexível oferecendo botões com 38 opções interativas de sentimentos que disparam scripts vinculados ao Array de conhecimento de tarô do JavaScript.
* **`tiragem.html`:** Onde o visitante de fato entra em contato com o conselho da carta (cujos textos são fornecidos via `script.js`). Inclui também a nova feature para contatar a Taróloga onde a foto em miniatura tem um *zoom programático super especial* no CSS. 
* **`sobre.html`:** Tela humanizada da Samaa com espaço para sua foto de perfil, manifesto de distanciamento do imediatismo das redes curtas, defendendo profundidade. Possui também integração via botão flutuante/roda-pé direto com WhatsApp com link paramétrico.

## 4. Histórico de Refinamentos de Design Recentes
1. **Design Responsivo Avançado (Media Queries):** Em sessões passadas o CSS precisou ser reestruturado especificamente visando o corte que estava acontecendo entre a imagem de "céu noturno" no fundo e os botões em telas longas (iPhones novos/Galaxy S20+) e curtas (iPhone SE), resolvidos combinando flexbox e fixação de gradiente fundo (`background-attachment: fixed` e `background-size: cover`).
2. **Micro-UIs (Espaço WhatsApp):** A imagem (`minha-foto-miniatura.jpg`) que acompanha os botões flutuantes de contato WhatsApp passou por precisos ajustes paramétricos nas telas tiragem e sobre (`object-position: center 8%; transform-origin: center 15%; transform: scale(2.6);`) para dar um "zoom perfeito" no rosto e não ocultar a boca nem o topo da cabeça dentro do quadro redondo.
3. **Mudança da Identidade Visual (Ícones):** Atualizamos o app substituindo a lua simples para abranger algo muito mais impactante — o arquétipo em desenho de um símbolo de magia que envolve lótus de energia azul e dourada. Para garantir o comportamento de "app oficial" na tela do celular, todas as referências `.png` foram cuidadosamente trocadas e remapeadas nos metadados para as propriedades corretas (`icone_app.jpg` no manifesto Web Manifests).

## 5. Próximos Passos Prometidos no Ar
* **Meditações Guiadas:** Um botão reservado na Interface, temporariamente inativo (visual em cinza transparente indicando um "Em Breve").
* **Painel da Amazon / Vitrine:** Uma integração planejada na folha de estilo para trazer indicações rentáveis discretas.

## 6. Links e Referências Locais Úteis
* Pasta Raiz de Código: `C:\Users\ksama\AppTarot\tarot\`
* Arquivo-Chefe de Lógica: `script.js`
* Banco de Imagens: Diretório `\imagens` (abrigando tanto as 78 cartas clássicas de RWS já catalogadas quanto os avatares).

O Refúgio foi configurado tanto funcionalmente quanto energeticamente com excelência! 🌙🌟
