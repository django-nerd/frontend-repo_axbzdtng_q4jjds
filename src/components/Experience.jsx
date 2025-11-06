import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  { time: '2024', text: '> Worked at Prodigy InfoTech' },
  { time: '2023', text: '> Internship: Code Alpha – Cybersecurity' },
];

export default function Experience() {
  return (
    <section id="experience" className="relative w-full bg-[#0A0A0A] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.04),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-6 md:px-12 lg:px-16">
        <h2 className="mb-8 font-mono text-3xl text-white/90">&gt; experience_log</h2>

        <div className="relative border-l border-white/10 pl-6">
          {experiences.map((e, i) => (
            <motion.div
              key={e.text}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="mb-8"
            >
              <div className="absolute -left-2.5 mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#00FFC6] to-[#8A2BE2] shadow-[0_0_12px_rgba(138,43,226,0.6)]" />
              <div className="font-mono text-xs text-white/50">{e.time}</div>
              <div className="font-mono text-white/80">{e.text}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
