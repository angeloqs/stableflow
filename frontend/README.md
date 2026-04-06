# Stableflow - Frontend ⚛️

A interface do projeto **Stableflow** é um SPA moderno construído com as tecnologias mais recentes do ecossistema React. Focada em elegância, responsividade e usabilidade, a camada visual foi desenhada para facilitar a solicitação e visualização de Fluxos de Estudo de Estabilidade gerados por Inteligência Artificial de forma instantânea (via Streaming).

---

## 🎨 Principais Tecnologias e Bibliotecas

- **[Next.js 15 (App Router)](https://nextjs.org/)**: Framework React robusto que lida com o roteamento e proporciona as melhores práticas de carregamento e otimização.
- **[React 19](https://react.dev/)**: Última versão da principal biblioteca de UI do mercado, proporcionando melhor performance em renderizações e atualizações conjuntas.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: O utilitário CSS do projeto para criar designs customizados de forma ágil com *classes utilitárias*.
- **[Radix UI / customizações via Shadcn](https://www.radix-ui.com/)**: Utilizado na base dos componentes (`Select`, `Label`, `Scroll Area`, etc) para acessibilidade extrema e estilizações nativas desvinculadas de comportamento.
- **Formulários e Validação**: Configuração unída de ponta a ponta com [React Hook Form](https://react-hook-form.com/) e resolvido via schemmas do [Zod](https://zod.dev/).
- **React Markdown**: A encarregada pelo parser e renderização do streaming sintático markdown retornado pelo Google Gemini, transformando textos curtos em uma tipografia rica instantaneamente.

---

## 🖥️ Como Executar o Frontend Localmente

O código-fonte base preza pela zero-configuração na sua maior parte. Para espelhar o nosso portal visual e testar interações, certifique-se de que tenha Node.js v20.x instalado e acompanhe os passos a seguir:

1. **Vá até o diretório do frontend**:
   ```bash
   cd ./stableflow/frontend
   ```

2. **Instale os pacotes e dependências listadas**:
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```

4. **Acesse via Browser**:
   Abra seu navegador na URL [http://localhost:3000](http://localhost:3000). *(A interface será carregada e começará a escutar mudanças via Fast Refresh).*

> **💡 Importante**: Para que os formulários de Estudos de Estabilidade funcionem em sua força máxima, a [API Backend](../backend/README.md) precisa estar rodando simultaneamente (geralmente em `http://localhost:3333`).

---

## 📁 Arquitetura Principal de Pastas

```text
/frontend
├── src/
│   ├── app/                    # Next.js App Router (Páginas principais e layouts)
│   │   ├── _components/        # Componentes privados de uso específico de cada página
│   │   │   ├── stableflow-form.tsx      # Formulário lógico
│   │   │   └── stableflow-generator.tsx # Motor de exibição com SSE / Streaming Rendering
│   │   ├── globals.css         # Reset geral com utilidades Tailwind
│   │   ├── layout.tsx          # Layout principal do site
│   │   └── page.tsx            # View/Index inicial
│   ├── components/ui/          # Padrão atômico com blocos de design reaproveitáveis (botões, inputs...)
│   ├── lib/                    # Funções utilitárias como cn() do Tailwind Merge
│   └── types/                  # Compartilhamento global dos Tipos Typescript (TS)
├── package.json                # Relação de versão e dependências
├── postcss.config.mjs          # Loader do PostCSS (integração visual) e afins.
└── tsconfig.json               # Configurações restritas do compilador da interface
```

---

## 🏗️ Compilação para Produção

Quando for preparar para hospedagem (ex: Vercel):
```bash
# Faz o build estático otimizado
npm run build

# Inicia o servidor local de produção
npm run start
```

---

## 💡 Práticas Abordadas

1. **Acessibilidade nativa (a11y)**: O mapeamento de elementos da interface pelo teclado atende de forma eficaz graças à primitiva do Radix (Slot, Label).
2. **Interface Fluida (UX/UI)**: Uso consistente do estado local para impedir que formulários já enviados sofram múltiplas submissões enquanto o motor do processamento de *Server-Sent Events* carrega os dados pelo Fetch nativo.
3. **Escalagem Clara**: Separação conceitual entre o gerador de estado (*generator*) base e o formulário alimentador de requests (*form*), organizando manutenções futuras em trechos independentes isolados no servidor.
