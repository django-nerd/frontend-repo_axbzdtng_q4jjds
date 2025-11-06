import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ExperienceContact from './components/ExperienceContact';
import { Moon, Sun } from 'lucide-react';

function ThemeToggle() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [dark]);

  return (
    <button
      onClick={() => setDark((d) => !d)}
      aria-label="Switch Theme"
      className="fixed right-4 top-4 z-50 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/10 px-3 py-2 text-white backdrop-blur-md transition hover:border-white/20 hover:bg-white/20"
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      <span className="font-mono text-xs">theme.toggle()</span>
    </button>
  );
}

export default function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-[#0A0A0A] antialiased">
      <ThemeToggle />
      <header className="fixed inset-x-0 top-0 z-40 mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12 lg:px-16">
        <a href="#home" className="font-mono text-sm text-teal-200">&gt; preyas.dev</a>
        <nav className="hidden gap-6 md:flex">
          <a href="#about" className="font-mono text-xs text-white/70 hover:text-white">about</a>
          <a href="#projects" className="font-mono text-xs text-white/70 hover:text-white">projects</a>
          <a href="#experience" className="font-mono text-xs text-white/70 hover:text-white">experience</a>
          <a href="#contact" className="font-mono text-xs text-white/70 hover:text-white">contact</a>
        </nav>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <ExperienceContact />
      </main>

      <footer className="border-t border-white/10 bg-black/40 py-6 text-center font-mono text-xs text-white/50">
        © {new Date().getFullYear()} Preyas Pandya. Built with love for code & design.
      </footer>
    </div>
  );
}
