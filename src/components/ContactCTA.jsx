import React from 'react';
import { Send, Download, Mail, Linkedin, Github } from 'lucide-react';

export default function ContactCTA({ onContactClick }) {
  return (
    <section id="contact" className="relative z-30 w-full rounded-3xl px-6 py-8 sm:px-10 sm:py-10 cta-green flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div className="max-w-xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-[#e6c77a] uppercase">Open for Full-time & Freelance</p>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1.5 tracking-tight">Have a backend project in mind?</h2>
        <p className="text-sm sm:text-base text-slate-100/90 mt-2">
          Let's talk about building something secure, scalable and reliable.
        </p>
        <div className="flex items-center gap-3 mt-4 text-xs font-semibold text-[#f5eee0]/90 flex-wrap">
          <a href="mailto:kajal.cloudops@gmail.com" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
            <Mail className="w-3.5 h-3.5" /> kajal.cloudops@gmail.com
          </a>
          <span>•</span>
          <a href="https://www.linkedin.com/in/kajal-bharti-26a968213/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
            <Linkedin className="w-3.5 h-3.5" /> LinkedIn
          </a>
          <span>•</span>
          <a href="https://github.com/bharti-kajal" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
            <Github className="w-3.5 h-3.5" /> GitHub
          </a>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={onContactClick}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-b from-white to-[#efe6d2] text-[#0b4634] text-sm font-bold border border-white shadow-[0_6px_24px_rgba(125,211,252,0.6)] hover:scale-[1.03] active:scale-[0.98] transition-all"
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
      </div>
    </section>
  );
}
