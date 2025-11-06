import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-black/30">
      <div className="mx-auto max-w-7xl px-6 py-12 text-sm text-white/60">
        <p>© {new Date().getFullYear()} Preyas Pandya. All rights reserved.</p>
      </div>
    </footer>
  );
}
