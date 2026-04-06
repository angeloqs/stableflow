<h1 align="center">
  🌊 Stableflow
</h1>

<p align="center">
  <strong>Geração Dinâmica de Fluxos de Estudo de Estabilidade com Inteligência Artificial</strong>
</p>

---

Bem-vindo ao **Stableflow**! Este projeto é uma solução completa, construída para entregar uma experiência extremamente fluida e elegante. Utilizando a potência do modelo **Google Gemini**, o Stableflow elabora e retorna em tempo real (via *Streaming*) fluxos de estudos de estabilidade utilizando as mais modernas tecnologias do mercado de desenvolvimento web.

## 🏗️ Arquitetura do Projeto

O repositório está organizado de forma clara e moderna. De um lado, temos a inteligência e processamento concentrados em nossa API backend; do outro, uma interface de usuário deslumbrante construída com tecnologias de ponta.

```text
/stableflow
├── /backend      # API Fastify + Integração Google GenAI
└── /frontend     # SPA Web com Next.js 15, React 19 e Tailwind v4
```

---

## ⚙️ Backend: O Motor Inteligente

A API atua como a espinha dorsal lógica do sistema. Desenvolvido para ter um baixo *overhead* e processamento robusto, é onde enviamos *prompts* ricos à Inteligência Artificial e despachamos os detalhes via eventos de servidor (SSE).

⚠️ **Sempre inicialize o Backend primeiro** para garantir que a interface (Frontend) já tenha os endpoints disponíveis para testes em tempo real.

### 🚀 Tecnologias Essenciais
- 🟩 **Node.js (v20+) & [Fastify](https://fastify.dev/)**: API em altíssima velocidade. Utiliza recursos nativos como flag `--env-file`.
- 📘 **TypeScript & TSX**: Tipagem estática forte garantindo estabilidade de desenvolvimento.
- 🤖 **Google GenAI SDK**: Conexão nativa com a avançada LLM Google Gemini.
- 🔍 **Zod**: Autenticação implacável da estrutura de informações recebidas (`payload`).

### 🛠️ Rodando o Backend

1. **Acesse o diretório:**
   ```bash
   cd backend
   ```
2. **Instale os pacotes requeridos:**
   ```bash
   npm install
   ```
3. **Configure as Variáveis de Ambiente:**
   Crie um arquivo `.env` exatamente na raiz do `/backend` com:
   ```env
   PORT=3333
   GEMINI_API_KEY=sua_chave_de_api_do_google_aqui
   ```
4. **Acione o núcleo:**
   ```bash
   npm run dev
   ```
*(O console comunicará sucesso executando na porta `3333`)*

---

## 🔌 API Essencial (Backend)

- 🟢 **`GET /teste`**: Rota de ping/saúde rápida do backend. Retorna uma validação positiva e estrutural.
- 🧠 **`POST /plan`**: Coração do sistema. Consome um Payload protegido por esquema Zod (com base no lote, tipo de período e produto) repassando ao LLM. A resposta enviada e devolvida em *Transport Chunked Encoding*.

---

## ⚛️ Frontend: Uma Interface Mágica

Após garantir que a sua API (Backend) esteja em funcionamento, inicialize a interface para interagir com o fluxo de estado visual. Focada em elegância, responsividade e usabilidade instantânea, a camada visual foi desenhada com componentes acessíveis e renderizações otimizadas de *Markdown Stream*.

### 🎨 Tecnologias de Interface
- ⚡ **[Next.js 15](https://nextjs.org/) & [React 19](https://react.dev/)**: Roteamento dinâmico (App Router) e alta performance no ciclo de vida de UI.
- 💅 **[Tailwind CSS v4](https://tailwindcss.com/) & [Radix UI / Shadcn](https://ui.shadcn.com/)**: Design utilitário customizado aliado à acessibilidade impecável.
- 🛡️ **[React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)**: Validações robustas de estado de formulários.
- 📝 **React Markdown & SSE**: Parser para renderização mágica e animada no streamings gerado pela IA.

### 🖥️ Rodando o Frontend

1. **Acesse o diretório:**
   ```bash
   cd frontend
   ```
2. **Instale as dependências:**
   ```bash
   npm install
   ```
3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
4. ✨ Abra no navegador visualizando a interface: `http://localhost:3000`

---

## ✨ Práticas Abordadas e Deploy

- **Acessibilidade Nativa (a11y)**: Todo o front foi adaptado para a máxima compatibilidade de tela e comandos. Mapeamento acessível e fluido.
- **Micro-interações fluidas**: Os estados reagem imediatamente enquanto a IA elabora a resposta via *Server-Sent Events*.
- **Build Server**:
   Para um deploy limpo de produção no lado cliente (como o caso da Vercel):
   ```bash
   cd frontend
   npm run build
   npm run start
   ```

---
<p align="center">
  <i>Desenvolvido com 🩶 visando o futuro em análises de estabilidade.</i>
</p>
