import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

const roles = ['Developer', 'Designer', 'Innovator'];

function useTypewriter(words, speed = 80, pause = 1200) {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    if (!deleting) {
      if (sub.length < current.length) {
        const t = setTimeout(() => setSub(current.slice(0, sub.length + 1)), speed);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setDeleting(true), pause);
        return () => clearTimeout(t);
      }
    } else {
      if (sub.length > 0) {
        const t = setTimeout(() => setSub(current.slice(0, sub.length - 1)), speed / 2);
        return () => clearTimeout(t);
      } else {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      }
    }
  }, [sub, deleting, index, words, speed, pause]);

  return sub + (deleting ? '' : '▋');
}

export default function Hero() {
  const typed = useTypewriter(roles);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const introText = useMemo(
    () => (
      <>
        <span className="text-teal-300">&gt;</span> Hello, I'm
        <span className="ml-2 bg-clip-text text-transparent bg-gradient-to-r from-[#00FFC6] via-[#00BFFF] to-[#8A2BE2]">Preyas Pandya</span>
      </>
    ),
    []
  );

  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden bg-[#0A0A0A] text-white">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        {mounted && (
          <Spline
            scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        )}
      </div>

      {/* Gradient overlays - pointer-events-none so 3D stays interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/70" />
      <div className="pointer-events-none absolute -inset-x-20 -top-40 h-80 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,255,198,0.25),transparent_60%)] blur-3xl" />

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-start px-6 pt-28 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="mb-3 font-mono text-lg text-teal-300/90">{introText}</p>
          <h1 className="mb-4 font-mono text-4xl leading-tight md:text-6xl">
            <span className="text-white/90">Creative Technologist crafting</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00FFC6] via-[#00BFFF] to-[#8A2BE2]">web experiences</span>
            <span className="text-white/90"> that feel alive.</span>
          </h1>
          <p className="mb-6 font-mono text-xl text-white/80">{typed}</p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/Resume.pdf"
              download
              className="group inline-flex items-center gap-2 rounded-md border border-teal-300/50 bg-white/5 px-4 py-2 font-mono text-teal-200 shadow-[0_0_20px_rgba(0,255,198,0.25)] transition hover:border-teal-300 hover:shadow-[0_0_40px_rgba(0,255,198,0.45)]"
              aria-label="Download CV"
            >
              <span>&gt; Download("Resume.pdf")</span>
              <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <div className="ml-2 flex items-center gap-2">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white/80 transition hover:border-white/20 hover:text-white"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white/80 transition hover:border-white/20 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:preyas@example.com"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white/80 transition hover:border-white/20 hover:text-white"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          className="mt-10 font-mono text-sm text-white/70"
        >
          <div className="rounded-lg border border-white/10 bg-white/5 p-4 shadow-[0_0_30px_rgba(138,43,226,0.15)]">
            <code className="block whitespace-pre leading-relaxed">
{`// boot.log
> compiling assets ... ok
> starting dev server ... ok
> linking 3D scene ... ok
> status: ONLINE`}
            </code>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
