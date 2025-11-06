import React from 'react';
import { Sparkles, Zap, Cpu } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Lightweight 3D',
    desc: 'Carefully chosen Spline assets reduce memory footprint while keeping interactions delightful.',
  },
  {
    icon: Zap,
    title: 'Smooth Performance',
    desc: 'Optimized rendering and transitions minimize jank and keep frame rates high.',
  },
  {
    icon: Cpu,
    title: 'Smart Loading',
    desc: 'Lazy loading and progressive enhancement ensure fast first paint across devices.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-transparent to-white/[0.02]">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Performance-first, by design</h2>
        <p className="mt-3 text-white/70 max-w-2xl">Each element is tuned for a balance of clarity and interaction without the heavy cost.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.05] transition">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
