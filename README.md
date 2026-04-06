# 🌟 Stableflow - Agente IA: Gerador de Fluxos de Estudo de Estabilidade

![stableflow-demo](https://github.com/user-attachments/assets/74c8964f-76e4-45c7-8041-4f5807c128ba)

<div align="left">

![Static Badge](https://img.shields.io/badge/Status-Em_Desenvolvimento-darkgreen?style=for-the-badge)

</div>

Bem-vindo ao **Stableflow**! Este projeto é uma solução completa, construída para entregar uma experiência extremamente fluida e elegante. Utilizando a potência do modelo **Google Gemini**, o Stableflow elabora e retorna em tempo real (via *Streaming*) fluxos de estudos de estabilidade para aplicação em indústrias químicas, utilizando as mais modernas tecnologias do mercado de desenvolvimento web.

## 👥 Autores
- Angelo Queiroz | [@angeloqs](https://www.github.com/angeloqs)

## 🛠️ Stack Tecnológica

| **Ambiente** | **Ferramentas** | **Função** |
|--------------|-----------------|------------|
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white) | Node.js & Fastify | API em altíssima velocidade e baixo overhead |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white) | TypeScript | Tipagem estática forte |
| ![Google Gemini](https://img.shields.io/badge/Google_Gemini-8E75B2?style=flat&logo=google&logoColor=white) | Google GenAI SDK | Conexão nativa com a avançada LLM |
| ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white) | Next.js 15 & React 19 | Roteamento dinâmico e interface de alta performance |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwind-css&logoColor=white) | Tailwind CSS v4 | Design utilitário e responsividade impecável |
| ![Zod](https://img.shields.io/badge/Zod-3E67B1?style=flat&logo=zod&logoColor=white) | Zod | Validação robusta de esquemas e informações |

---

## 🏗️ Arquitetura do Projeto

O repositório está organizado de forma clara e moderna. De um lado, temos a inteligência e processamento concentrados em nossa API backend; do outro, uma interface de usuário deslumbrante.

```text
/stableflow
├── /backend      # API Fastify + Integração Google GenAI
└── /frontend     # SPA Web com Next.js 15, React 19 e Tailwind v4
```

---

## 🚀 Como Executar o Projeto

### 💻 Pré-requisitos
- Node.js (v20+)
- npm ou yarn

### 🔧 Backend (Motor Inteligente)
⚠️ **Sempre inicialize o Backend primeiro** para garantir que a interface (Frontend) já tenha os endpoints disponíveis para testes em tempo real.

```bash
# 1. Acesse o diretório
cd backend

# 2. Instale as dependências
npm install

# 3. Configure as Variáveis de Ambiente
# Crie um arquivo .env na raiz do /backend com:
# PORT=3333
# GEMINI_API_KEY=sua_chave_de_api_do_google_aqui

# 4. Acione o núcleo
npm run dev
```

### 🖥️ Frontend (Interface Visual)
Após iniciar o backend, abra um novo terminal.

```bash
# 1. Acesse o diretório
cd frontend

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev

# 4. Acesse o endereço e visualize a página no navegador
http://localhost:3000
```

---

## 🔌 API Essencial (Backend)

- 🟢 **`GET /teste`**: Rota de ping/saúde rápida do backend. Retorna uma validação positiva e estrutural.
- 🧠 **`POST /plan`**: Coração do sistema. Consome um Payload protegido por esquema Zod repassando ao LLM. A resposta enviada devolvida em *Transport Chunked Encoding*.

---

## ✨ Práticas Abordadas e Deploy

- **Acessibilidade Nativa (a11y)**: Todo o front foi adaptado para a máxima compatibilidade de tela e comandos.
- **Micro-interações fluidas**: Os estados reagem imediatamente enquanto a IA elabora a resposta via *Server-Sent Events*.
- **Build Server**: Para um deploy limpo de produção no lado cliente (ex: Vercel):
  ```bash
  cd frontend
  npm run build
  npm run start
  ```

---

## 💡 Créditos

Este projeto é fruto de uma jornada coletiva, impulsionada pelo apoio essencial da **Geração Tech**, ferramentas que democratizam o desenvolvimento e horas de pura dedicação.

Um agradecimento especial à **comunidade de desenvolvedores**.

### 👏 Destaques Especiais  
- *Prof. Nayara Valevskii* | https://www.linkedin.com/in/nayaraba/
- *Nazaré Almeida* | https://github.com/nazare4lmeida

<p align="center">
  <i>Desenvolvido com 🩶 visando o futuro em análises de estabilidade.</i>
</p>
