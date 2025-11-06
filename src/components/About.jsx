import React from 'react';
import { motion } from 'framer-motion';

const code = `const skills = [
  "Web Dev",
  "UI/UX",
  "Cybersecurity",
  "AI",
];`;

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#0A0A0A] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,191,255,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(138,43,226,0.12),transparent_45%)]" />
      <div className="relative mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-8 font-mono text-3xl text-white/90"
        >
          &gt; about_me
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-[0_0_30px_rgba(0,191,255,0.15)] backdrop-blur-md"
          >
            <p className="font-mono text-white/80">
              I'm Preyas Pandya — a Computer Science student and creative technologist.
              I love building immersive, accessible web apps that blend design, code, and security.
            </p>
            <p className="mt-4 font-mono text-white/70">
              I focus on performance, usability, and delightful interactions powered by modern tooling.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-0 shadow-[0_0_36px_rgba(138,43,226,0.18)]"
          >
            <div className="rounded-t-xl border-b border-white/10 bg-black/40 px-4 py-2 font-mono text-xs text-white/60">console.js</div>
            <pre className="p-4 font-mono text-sm leading-relaxed text-teal-200">
              <code>{code}</code>
            </pre>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
