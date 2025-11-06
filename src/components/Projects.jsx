import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Neon Terminal UI',
    desc: 'A terminal-inspired UI kit with glowing borders, keyboard nav, and themes.',
    tools: ['React', 'Tailwind', 'Framer Motion'],
    live: '#',
    repo: '#',
  },
  {
    title: 'Secure Web Scanner',
    desc: 'Lightweight security scanner that checks headers, TLS, and common misconfigs.',
    tools: ['Node', 'TypeScript', 'Security'],
    live: '#',
    repo: '#',
  },
  {
    title: 'UX Pattern Library',
    desc: 'Curated micro-interactions and accessibility-first UI patterns.',
    tools: ['React', 'A11y', 'Design'],
    live: '#',
    repo: '#',
  },
];

function ProjectCard({ p }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      layout
      onHoverStart={() => setOpen(true)}
      onHoverEnd={() => setOpen(false)}
      onClick={() => setOpen((o) => !o)}
      className="group relative cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 shadow-[0_0_24px_rgba(0,255,198,0.12)] transition"
    >
      <motion.div layout className="space-y-2">
        <h3 className="font-mono text-xl text-white/90">{p.title}</h3>
        <p className="font-mono text-sm text-white/70">{p.desc}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {p.tools.map((t) => (
            <span key={t} className="rounded border border-teal-300/30 bg-teal-300/10 px-2 py-0.5 font-mono text-xs text-teal-200">
              {t}
            </span>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="mt-4 flex items-center gap-3"
          >
            <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/10 px-3 py-1.5 font-mono text-xs text-white/90 hover:bg-white/20">
              Live <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/10 px-3 py-1.5 font-mono text-xs text-white/90 hover:bg-white/20">
              Code <Github className="h-3.5 w-3.5" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 group-hover:shadow-[0_0_50px_rgba(0,191,255,0.25)]" />
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-[#0A0A0A] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_10%,rgba(0,255,198,0.12),transparent_45%),radial-gradient(circle_at_30%_90%,rgba(138,43,226,0.12),transparent_45%)]" />
      <div className="relative mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
        <h2 className="mb-8 font-mono text-3xl text-white/90">&gt; projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
