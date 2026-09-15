# Seu Food — Landing Page

Landing page comercial estática do **Seu Food**, pronta para GitHub + Cloudflare Pages.

## Estrutura

- `index.html` — página principal
- `styles.css` — identidade visual e responsividade
- `script.js` — menu, animações, FAQ e formulário
- `assets/` — imagens e favicon

## Antes de publicar

### 1. Configure o WhatsApp

Abra `script.js` e altere:

```js
const WHATSAPP_NUMBER = "";
```

para o número comercial com DDI + DDD, por exemplo:

```js
const WHATSAPP_NUMBER = "5568999999999";
```

### 2. Cloudflare Pages

Conecte este repositório ao Cloudflare Pages.

Como o projeto é HTML/CSS/JS puro:

- Framework preset: **None**
- Build command: deixe vazio
- Build output directory: `/` ou a raiz do projeto, conforme a interface do Cloudflare

### 3. Domínio

Depois do primeiro deploy, conecte o domínio principal em **Custom domains** no projeto do Cloudflare.

## Otimização

As imagens fornecidas foram convertidas para WebP para reduzir o tamanho sem alterar a composição visual.

## Analytics

O formulário dispara no `dataLayer`:

```js
event: "generate_lead"
```

Assim, depois você pode conectar GTM/GA4 sem refazer a landing.
