'use client';

import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function ThemeShowcase() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors">
      {/* Header com toggle */}
      <header className="border-b border-border bg-card">
        <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-primary">StableFlow</h1>
            <p className="text-sm text-muted-foreground">Tema Científico e Inovador</p>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid gap-8">
          {/* Seção de cores */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-6">Paleta de Cores</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Verde Escuro */}
              <Card className="border-primary">
                <CardHeader>
                  <CardTitle className="text-primary">Verde Escuro</CardTitle>
                  <CardDescription>Profundidade & Confiabilidade</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-20 bg-primary rounded-lg mb-3 border-2 border-accent"></div>
                  <p className="text-sm font-mono text-muted-foreground">#0d4a2d</p>
                  <p className="text-xs text-muted-foreground mt-1">oklch(0.35 0.15 150)</p>
                </CardContent>
              </Card>

              {/* Verde Claro */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-accent">Verde Claro</CardTitle>
                  <CardDescription>Inovação & Energia</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-20 bg-accent rounded-lg mb-3 border-2 border-primary"></div>
                  <p className="text-sm font-mono text-muted-foreground">#2ecc71</p>
                  <p className="text-xs text-muted-foreground mt-1">oklch(0.72 0.22 145)</p>
                </CardContent>
              </Card>

              {/* Branco */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-foreground">Branco</CardTitle>
                  <CardDescription>Clareza & Modernidade</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-20 bg-background border-4 border-border rounded-lg mb-3"></div>
                  <p className="text-sm font-mono text-muted-foreground">#ffffff</p>
                  <p className="text-xs text-muted-foreground mt-1">oklch(1 0 0)</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Componentes interativos */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-6">Componentes Interativos</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Botões</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">Primário</Button>
                  <Button variant="secondary" className="w-full">Secundário</Button>
                  <Button variant="outline" className="w-full">Outline</Button>
                  <Button variant="default" className="w-full">Padrão</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Estados</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="p-2 bg-muted text-muted-foreground rounded">Muted</div>
                  <div className="p-2 bg-accent text-accent-foreground rounded">Accent</div>
                  <div className="p-2 bg-primary text-primary-foreground rounded">Primary</div>
                  <div className="p-2 bg-secondary text-secondary-foreground rounded">Secondary</div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Representação de modos */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-6">Modo Light vs Dark</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              {/* Simulação Light */}
              <Card className="bg-white text-black border-2 border-primary">
                <CardHeader>
                  <CardTitle className="text-primary">☀️ Modo Light</CardTitle>
                  <CardDescription className="text-gray-600">Ambiente profissional e limpo</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm">Background: Branco puro</p>
                  <p className="text-sm">Foreground: Verde escuro (#0d4a2d)</p>
                  <div className="flex gap-2 mt-4">
                    <div className="w-12 h-12 bg-white border-2 border-gray-300 rounded"></div>
                    <div className="w-12 h-12 bg-green-900 rounded"></div>
                    <div className="w-12 h-12 bg-green-500 rounded"></div>
                  </div>
                </CardContent>
              </Card>

              {/* Simulação Dark */}
              <Card className="bg-[#1a3a2a] text-white border-2 border-green-400">
                <CardHeader>
                  <CardTitle className="text-green-400">🌙 Modo Dark</CardTitle>
                  <CardDescription className="text-green-300">Ambiente imersivo e futurista</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm">Background: Verde muito escuro</p>
                  <p className="text-sm">Foreground: Branco</p>
                  <div className="flex gap-2 mt-4">
                    <div className="w-12 h-12 bg-[#1a3a2a] border-2 border-green-400 rounded"></div>
                    <div className="w-12 h-12 bg-green-900 rounded"></div>
                    <div className="w-12 h-12 bg-green-500 rounded"></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Funcionalidades */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-6">Funcionalidades</h2>
            
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold">✓</div>
                <div>
                  <h3 className="font-semibold text-primary">Tema Científico</h3>
                  <p className="text-sm text-muted-foreground">Paleta profissional com verde escuro, verde claro e branco</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold">✓</div>
                <div>
                  <h3 className="font-semibold text-primary">Suporte Light & Dark</h3>
                  <p className="text-sm text-muted-foreground">Alterne entre modo claro e escuro com um clique</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold">✓</div>
                <div>
                  <h3 className="font-semibold text-primary">Automático (Sistema)</h3>
                  <p className="text-sm text-muted-foreground">Segue a preferência de tema do sistema operacional</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold">✓</div>
                <div>
                  <h3 className="font-semibold text-primary">Persistência</h3>
                  <p className="text-sm text-muted-foreground">Preferência de tema é salva no localStorage</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          <p>StableFlow - Tema Científico e Inovador com Tailwind CSS v4</p>
        </div>
      </footer>
    </div>
  );
}
