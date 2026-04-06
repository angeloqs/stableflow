'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '@/providers/theme-provider';
import { FlaskConical, FlaskConicalOff } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="absolute top-4 right-4 z-50">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        title={resolvedTheme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
        className="transition-all rounded-full shadow-md w-10 h-10"
      >
        {resolvedTheme === 'dark' ? (
          <FlaskConical className="h-5 w-5" />
        ) : (
          <FlaskConicalOff className="h-5 w-5" />
        )}
      </Button>
    </div>
  );
}
