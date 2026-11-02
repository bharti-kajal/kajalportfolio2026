import React from 'react';
import { Send, Download, Mail } from 'lucide-react';

export default function ContactCTA({ onContactClick }) {
  return (
    <section id="contact" className="relative z-30 w-full rounded-3xl px-6 py-8 sm:px-10 sm:py-10 bg-gradient-to-br from-[#16399a] via-[#1a46b8] to-[#0f2c7a] border border-white/50 shadow-[0_20px_50px_-14px_rgba(5,20,90,0.7),0_1px_0_rgba(255,255,255,0.5)_inset] flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div className="max-w-xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-sky-200 uppercase">Open for Full-time & Freelance</p>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1.5 tracking-tight">Have a backend project in mind?</h2>
        <p className="text-sm sm:text-base text-slate-100/90 mt-2">
          Let's talk about building something secure, scalable and reliable.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={onContactClick}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-b from-white to-[#cfe3ff] text-[#0a3fc4] text-sm font-bold border border-white shadow-[0_6px_24px_rgba(125,211,252,0.6)] hover:scale-[1.03] active:scale-[0.98] transition-all"
        >
          <Send className="w-4 h-4" /> Contact Me
        </button>
        <a
          href="/Kajal_Bharti_Backend_Engineer.pdf"
          download="Kajal_Bharti_Backend_Engineer.pdf"
          className="glass-btn-secondary inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold"
        >
          <Download className="w-4 h-4" /> Download Resume
        </a>
        <a
          href="mailto:kajal.cloudops@gmail.com"
          className="inline-flex items-center gap-2 px-3 py-3 text-sm font-semibold text-sky-100 hover:text-white"
        >
          <Mail className="w-4 h-4" /> kajal.cloudops@gmail.com
        </a>
      </div>
    </section>
  );
}
