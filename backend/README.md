# Stableflow - Backend

O backend do projeto **Stableflow** é uma API construída com [Fastify](https://fastify.dev/) e TypeScript. O principal objetivo desta API é se comunicar com a inteligência artificial do Google (Gemini API) para gerar de forma dinâmica fluxos de estudos de estabilidade, validando os dados com [Zod](https://zod.dev/) e retornando as respostas por meio de *streams* (SSE) para o frontend.

---

## 🚀 Tecnologias Essenciais

- **Node.js**: Ambiente de execução JavaScript/TypeScript.
- **Fastify**: Framework web rápido e de baixo *overhead* para a construção de APIs.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Zod**: Declaração de esquemas e validação de dados.
- **Google GenAI SDK**: Integração nativa com os modelos de Inteligência Artificial do Google (Gemini).
- **TSX**: Executor TypeScript que suporta carregamento direto de `.env` a partir do Node.

---

## 🛠️ Pré-requisitos

Para rodar o backend localmente, você precisará de:

- [Node.js](https://nodejs.org/en/) instalado (Recomenda-se a versão `v20.x` ou superior, compatível com a flag `--env-file`).
- Uma conta no Google AI Studio (ou Google Cloud) para obter a sua **`GEMINI_API_KEY`**.

---

## ⚙️ Configuração do Ambiente

1. Clone o projeto e navegue até a pasta do backend:
   ```bash
   cd ./stableflow/backend
   ```
   *(Ou navegue até a pasta respectiva do ambiente onde o projeto foi clonado)*

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   Crie um arquivo chamado `.env` na raiz do backend (onde fica o `package.json`) com o seguinte conteúdo:

   ```env
   PORT=3333
   GEMINI_API_KEY=sua_chave_de_api_aqui
   ```
   *Substitua `sua_chave_de_api_aqui` pela chave gerada no Google AI Studio.*

---

## 🏃‍♂️ Como Executar

Para iniciar o servidor em ambiente de desenvolvimento (com recarregamento automático a cada salvamento), execute:

```bash
npm run dev
```

O projeto rodará, por padrão, na porta `3333`. Se tudo ocorrer bem, você verá a mensagem:
`Server is running on port 3333`.

---

## 🌐 Endpoints Principais

### `GET /teste`
Endpoint simples para testar a saúde da API.

- **Requisição:** `GET http://localhost:3333/teste`
- **Resposta Esperada:** 
  ```text
  Processo concluído. Amostra digital purificada e pronta para análise.
  ```

### `POST /plan`
Centraliza a lógica de comunicação com o modelo LLM do Google e retorna um fluxo de estudo de estabilidade via *Streaming*.

- **Requisição:** `POST http://localhost:3333/plan`
- **Corpo Esperado (JSON):**
  Uma estrutura validada pelo Zod, englobando as informações necessárias para formatar o fluxo. Exemplo de *payload*:
  ```json
  {
    "produto": "Nome do Produto",
    "lote": "1234AB",
    "periodo_tipo": "Curto"
  }
  ```
- **Resposta:**
  Retorna texto formatado através de uma Stream contínua (`Transfer-Encoding: chunked`), devolvendo o texto elaborado pela Gemini AI à medida que é gerado.

---

## 📝 Estrutura de Arquivos

```text
/backend
├── .env                # Variáveis de ambiente
├── package.json        # Dependências e scripts do Node.js
├── src/
│   ├── routes/
│   │   └── plan.ts     # Rotas da aplicação (ex: POST /plan)
│   ├── server.ts       # Ponto de entrada (criação e configuração da instância Fastify)
│   ├── agent.ts        # Lógica de interação com a IA (Google GenAI API)
│   ├── prompt.ts       # Construção de comandos e templates para o modelo LLM
│   └── types.ts        # Esquemas de validação (Zod) e definições de TS Types
└── tsconfig.json       # Configuração do TypeScript compiler
```

---

## 🛡️ Solução de Problemas

- **Erro `Missing env var` ou problemas com `dotenv`**: Certifique-se de estar usando uma versão recente do Node.js (acima de `20.6.0`), uma vez que o script usa o argumento `--env-file=.env` nativo do Node.
- **Porta Ocupada**: Confirme se não existe outro serviço (por exemplo, um servidor frontend ou backend antigo) rodando na porta `3333`. Modifique o `.env` caso precise de outra porta.
