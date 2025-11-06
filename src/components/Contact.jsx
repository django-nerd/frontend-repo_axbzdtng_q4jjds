import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send } from 'lucide-react';

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setStatus('');
    setTimeout(() => {
      setSending(false);
      setStatus('Message sent! I will get back to you soon.');
    }, 900);
  }

  return (
    <section id="contact" className="relative w-full bg-[#0A0A0A] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,191,255,0.12),transparent_50%)]" />
      <div className="relative mx-auto max-w-5xl px-6 md:px-12 lg:px-16">
        <h2 className="mb-8 font-mono text-3xl text-white/90">&gt; contact</h2>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-[0_0_30px_rgba(0,255,198,0.12)]"
          >
            <div className="mb-4 font-mono text-sm text-teal-200">$ echo "send_message"</div>
            <label className="mb-3 block font-mono text-sm text-white/70">Name</label>
            <input required className="mb-4 w-full rounded-md border border-white/10 bg-black/40 p-3 font-mono text-sm text-white outline-none ring-0 placeholder:text-white/40 focus:border-teal-300/40" placeholder="Your name" />
            <label className="mb-3 block font-mono text-sm text-white/70">Email</label>
            <input type="email" required className="mb-4 w-full rounded-md border border-white/10 bg-black/40 p-3 font-mono text-sm text-white outline-none placeholder:text-white/40 focus:border-teal-300/40" placeholder="you@email.com" />
            <label className="mb-3 block font-mono text-sm text-white/70">Message</label>
            <textarea required rows="4" className="mb-4 w-full rounded-md border border-white/10 bg-black/40 p-3 font-mono text-sm text-white outline-none placeholder:text-white/40 focus:border-teal-300/40" placeholder="Say hello..." />

            <button disabled={sending} className="group inline-flex items-center gap-2 rounded-md border border-teal-300/40 bg-white/5 px-4 py-2 font-mono text-teal-200 transition hover:border-teal-300 hover:shadow-[0_0_30px_rgba(0,255,198,0.25)] disabled:opacity-60">
              {sending ? 'Sending…' : 'Send'}
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            {status && <p className="mt-3 font-mono text-sm text-teal-200">{status}</p>}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6"
          >
            <div className="font-mono text-sm text-white/70">Find me on:</div>
            <div className="mt-4 flex items-center gap-3">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 font-mono text-sm text-white/80 hover:border-white/20 hover:text-white">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 font-mono text-sm text-white/80 hover:border-white/20 hover:text-white">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a href="mailto:preyas@example.com" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 font-mono text-sm text-white/80 hover:border-white/20 hover:text-white">
                <Mail className="h-4 w-4" /> Email
              </a>
            </div>

            <div className="mt-8 rounded-lg border border-white/10 bg-black/40 p-4 font-mono text-sm text-white/70">
              <div>&gt; Switch Theme: <span className="text-teal-300">toggle()</span> in header</div>
              <div>&gt; Resume: <span className="text-teal-300">Download("Resume.pdf")</span></div>
              <div>&gt; Ping: <span className="text-teal-300">preyas@example.com</span></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
