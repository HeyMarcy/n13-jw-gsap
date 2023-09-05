'use client'

import { ThemeProvider } from 'next-themes'
import { useState, useEffect } from 'react';

export function ThemeProviders({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <ThemeProvider attribute="class" enableSystem>
      {children}
    </ThemeProvider>
  )
}
