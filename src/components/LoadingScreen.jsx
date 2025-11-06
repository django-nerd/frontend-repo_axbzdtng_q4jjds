import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function LoadingScreen({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [loadedEvent, setLoadedEvent] = useState(false);

  // Simulate incremental loading while we wait for window load
  useEffect(() => {
    setMounted(true);
    const inc = () => setProgress((p) => Math.min(95, p + Math.random() * 10));
    const id = setInterval(inc, 200);

    const onLoad = () => setLoadedEvent(true);
    if (document.readyState === 'complete') setLoadedEvent(true);
    else window.addEventListener('load', onLoad, { once: true });

    return () => {
      clearInterval(id);
      window.removeEventListener('load', onLoad);
    };
  }, []);

  // When window has loaded, quickly finish to 100 and then close
  useEffect(() => {
    if (!loadedEvent) return;
    const start = Date.now();
    const finisher = setInterval(() => {
      setProgress((p) => {
        const next = Math.min(100, p + 8);
        if (next >= 100 && Date.now() - start > 400) {
          clearInterval(finisher);
          setTimeout(() => onDone?.(), 200);
        }
        return next;
      });
    }, 80);
    return () => clearInterval(finisher);
  }, [loadedEvent, onDone]);

  const percent = useMemo(() => Math.round(progress), [progress]);

  return (
    <AnimatePresence>
      {mounted && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black"
          aria-label="Loading"
          role="status"
        >
          {/* Spline loading animation */}
          <div className="absolute inset-0">
            <Spline
              scene="https://prod.spline.design/igThmltzmqv5hkWo/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </div>

          {/* Overlay info - pointer events none so Spline stays interactive */}
          <div className="pointer-events-none relative z-10 flex flex-col items-center gap-4 p-6 text-center">
            <div className="font-mono text-sm tracking-widest text-white/80">LOADING</div>
            <div className="h-1.5 w-64 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#00FFC6] via-[#00BFFF] to-[#8A2BE2]"
                style={{ width: `${percent}%` }}
              />
            </div>
            <div className="font-mono text-xs text-white/60">{percent}%</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
