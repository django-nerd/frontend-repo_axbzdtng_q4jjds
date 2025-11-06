import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] md:h-[88vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative h-full flex items-center">
        <div className="mx-auto max-w-7xl w-full px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative z-10 max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-white drop-shadow-[0_1px_20px_rgba(255,255,255,0.1)]">
              Minimal, interactive 3D that feels effortless
            </h1>
            <p className="mt-4 text-white/80 text-lg md:text-xl">
              A lighter Spline background using a responsive grid of cubes. It reacts to your cursor with a soft, red ripple—clean, modern, and fast.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#features" className="rounded-md bg-white text-black px-4 py-2 font-medium hover:bg-white/90 transition">Explore</a>
              <a href="#contact" className="rounded-md border border-white/20 bg-white/5 text-white px-4 py-2 font-medium hover:bg-white/10 transition">Contact</a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
    </section>
  );
}
