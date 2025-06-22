# Vite Vue Blog Starter

Um projeto simples de blog feito com **Vue 3**, **Vite** e **Tailwind CSS**, com paginação e integração à API pública [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts). Ideal para aprender boas práticas e construir uma base rápida para aplicações Vue modernas.

---

## 📋 Para que serve este projeto?

- Exemplo prático de integração com API REST pública
- Demonstração de paginação client-side usando Vue 3 e Composition API
- Layout responsivo e moderno com Tailwind CSS
- Boas práticas de desenvolvimento com Vue 3 + Vite
- Base para construir blogs, dashboards ou outras aplicações SPA

---

## 🚀 Tecnologias e versões usadas

| Tecnologia      | Versão  |
| --------------- | ------- |
| Vue             | 3.5.13  |
| Vue Router      | 4.5.0   |
| Vite            | 6.2.2   |
| Tailwind CSS    | 3.4.17  |
| Sass (embedded) | 1.89.2  |
| PostCSS         | 8.5.6   |
| Autoprefixer    | 10.4.21 |

---

## ⚙️ Requisitos

- [Node.js](https://nodejs.org/) v18+ (recomendado)
- npm ou yarn instalado globalmente
- Acesso à internet para consumir a API JSONPlaceholder

---

## 🛠️ Como instalar e rodar

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/vite-vue-blog-starter.git
   cd vite-vue-blog-starter
   ```

2. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn install
   ```

3. Rode o servidor de desenvolvimento:

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. Acesse no navegador:

   ```
   http://localhost:5173
   ```

---

## 🔗 Integração com APIs

Este projeto consome a API pública JSONPlaceholder para obter os posts do blog:

- URL base: `https://jsonplaceholder.typicode.com/posts`
- Os posts são carregados dinamicamente e exibidos paginados na Home.
- A página individual de cada post busca os detalhes da API via ID.

---

## 📦 Scripts disponíveis

| Comando           | Descrição                            |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Roda o servidor local (hot reload)   |
| `npm run build`   | Gera build de produção               |
| `npm run preview` | Serve o build de produção localmente |

---

## 📝 Observações finais

- Código baseado nas melhores práticas Vue 3 + Vite, com Composition API e Tailwind.
- Ideal para quem quer um boilerplate funcional para projetos Vue modernos.
- A API JSONPlaceholder é gratuita e ótima para protótipos e aprendizado.
