'use client'

import { useTheme } from "next-themes"
import { useState, useEffect } from 'react'


const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  setTheme('dark')
  return (
    <div className="bg-slate-500 text-white">
      <button className='rounded-full' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Theme color {theme === 'light' ? 'Light' : 'Dark'}</button>
    </div>
  )
}

export default ThemeSwitcher