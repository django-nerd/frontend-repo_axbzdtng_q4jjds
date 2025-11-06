import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    if (dark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="#" className="font-semibold tracking-tight text-white/90 hover:text-white">Preyas Pandya</a>
        <button
          aria-label="Toggle theme"
          onClick={() => setDark(v => !v)}
          className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition"
        >
          {dark ? <Sun size={16} /> : <Moon size={16} />}
          <span className="hidden sm:inline">{dark ? 'Light' : 'Dark'}</span>
        </button>
      </div>
    </header>
  );
}
