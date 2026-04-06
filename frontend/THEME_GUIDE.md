# 🎨 Paleta de Cores - Tema Científico e Inovador

## 📋 Visão Geral

A paleta de cores foi reimaginada com uma temática **científica e inovadora**, utilizando três cores principais:

- **Verde Escuro**: `#0d4a2d` (Profundidade, confiabilidade, ciência)
- **Verde Claro**: `#2ecc71` (Inovação, energia, progresso)
- **Branco**: `#ffffff` (Clareza, limpeza, modernidade)

## 🌞 Modo Light

No modo claro, a paleta oferece um ambiente profissional e limpo:

| Elemento | Cor OKLCH | Descrição |
|----------|----------|-----------|
| **Background** | `oklch(1 0 0)` | Branco puro |
| **Foreground (Texto)** | `oklch(0.35 0.15 150)` | Verde escuro |
| **Primary** | `oklch(0.35 0.15 150)` | Verde escuro (botões, destaques) |
| **Secondary/Accent** | `oklch(0.72 0.22 145)` | Verde claro (elementos interativos) |
| **Borders** | `oklch(0.90 0.08 150)` | Verde muito claro (sutileza) |
| **Muted** | `oklch(0.92 0.05 150)` | Cinza-verde (elementos secundários) |

### Sensação Visual
- Profissional e confidente
- Foco claro em elementos verdes
- Alta legibilidade
- Sensação de inovação tecnológica

## 🌙 Modo Dark

No modo escuro, a paleta cria um ambiente imersivo com verde brilhante:

| Elemento | Cor OKLCH | Descrição |
|----------|----------|-----------|
| **Background** | `oklch(0.20 0.10 150)` | Verde muito escuro (quase preto) |
| **Foreground (Texto)** | `oklch(0.98 0.02 150)` | Branco com toque de verde |
| **Primary** | `oklch(0.72 0.22 145)` | Verde claro (brilhante, destaque) |
| **Secondary** | `oklch(0.35 0.15 150)` | Verde escuro (elementos secundários) |
| **Borders** | `oklch(0.98 0.02 150 / 15%)` | Branco semi-transparente |
| **Muted** | `oklch(0.32 0.08 150)` | Verde escuro (elementos terciários) |

### Sensação Visual
- Futurista e imersivo
- Verde brilhante em fundo escuro (código científico)
- Reduz fadiga ocular
- Forte presença visual de inovação

## 🎛️ Como Usar o Sistema de Temas

### No Layout Root

O `ThemeProvider` está integrado em `src/app/layout.tsx`:

```tsx
import { ThemeProvider } from "@/providers/theme-provider";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

### Em Componentes

Utilize o hook `useTheme` para acessar e controlar o tema:

```tsx
'use client';

import { useTheme } from '@/providers/theme-provider';

export function MyComponent() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <div>
      <p>Tema atual: {theme}</p>
      <p>Tema resolvido: {resolvedTheme}</p>
      <button onClick={() => setTheme('dark')}>Escuro</button>
      <button onClick={() => setTheme('light')}>Claro</button>
    </div>
  );
}
```

### Componente de Toggle

Use o `ThemeToggle` para permitir aos usuários alternar:

```tsx
import { ThemeToggle } from '@/components/theme-toggle';

export function Header() {
  return (
    <header className="flex justify-between items-center">
      <h1>StableFlow</h1>
      <ThemeToggle />
    </header>
  );
}
```

## 🎯 Opções de Tema

O sistema suporta três modos:

- **`light`**: Força o modo claro
- **`dark`**: Força o modo escuro
- **`system`**: Segue a preferência do sistema operacional (padrão)

As preferências são persistidas no `localStorage` como `"theme"`.

## 🌈 Cores em Tailwind

Use as classes Tailwind normalmente - as cores seguem automaticamente:

```jsx
// Modo light e dark combinados
<div className="bg-background text-foreground">
  <button className="bg-primary text-primary-foreground">
    Botão Primário
  </button>
  <button className="bg-secondary text-secondary-foreground">
    Botão Secundário
  </button>
</div>
```

## 📊 Cores de Gráficos

Para dados visuais e gráficos, use as variáveis chart:

```rust
--chart-1: oklch(0.72 0.22 145)   // Verde claro (destaque)
--chart-2: oklch(0.35 0.15 150)   // Verde escuro
--chart-3: oklch(0.52 0.12 148)   // Verde médio
--chart-4: oklch(0.60 0.15 152)   // Verde médio-claro
--chart-5: oklch(0.78 0.18 142)   // Verde muito claro
```

## 🔧 Customização

Para ajustar as cores, edite os valores OKLCH em `src/app/globals.css`:

- **Lightness (L)**: 0 (escuro) a 1 (claro)
- **Chroma (C)**: 0 (cinza) a >0.3 (vibrante)
- **Hue (H)**: 140-160 (verde) | 0 (neutro)

Exemplo de ajuste de saturação:
```css
--primary: oklch(0.35 0.20 150); /* Mais vibrante */
--primary: oklch(0.35 0.10 150); /* Mais neutro */
```

## 📝 Armazenamento

- **localStorage**: `theme` (valores: "light", "dark", "system")
- **CSS Classes**: `.dark` na tag `<html>`
- **CSS Variables**: `--color-*` em `:root` e `.dark`

---

**Criado em**: Março 2026  
**Tema**: Scientific & Innovative - Green Palette  
**Compatibilidade**: Tailwind CSS v4+ | Next.js 15+
