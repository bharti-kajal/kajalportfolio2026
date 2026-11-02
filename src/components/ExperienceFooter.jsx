import React from 'react';
import { Send, Download, Mail } from 'lucide-react';

export default function ExperienceFooter({ onContactClick, onDownloadResume }) {
  return (
    <footer className="relative pb-10 z-30 w-full space-y-5">
      <div className="glass-dark-bar rounded-3xl px-6 sm:px-8 py-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="lg:flex-1">
          <p className="text-[11px] sm:text-xs font-semibold tracking-widest text-sky-200 uppercase">Open for Full-time &amp; Freelance</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">Have a backend project in mind?</h2>
          <p className="text-sm text-slate-200/90 mt-1">Let&apos;s talk about building something secure, scalable and reliable.</p>
        </div>
        <div className="flex items-center gap-3 flex-wrap lg:flex-shrink-0 lg:max-w-[520px] lg:pl-8 lg:border-l lg:border-white/20">
          <button onClick={onContactClick} className="glass-btn-secondary flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold">
            <Send className="w-4 h-4" /> Contact Me
          </button>
          <a href="/Kajal_Bharti_Backend_Engineer.pdf" download="Kajal_Bharti_Backend_Engineer.pdf" onClick={onDownloadResume} className="glass-btn-secondary flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium">
            <Download className="w-4 h-4" /> Download Resume
          </a>
          <a href="mailto:kajal.cloudops@gmail.com" className="flex items-center gap-2 text-sm text-white hover:text-sky-200 transition-colors">
            <Mail className="w-4 h-4" /> kajal.cloudops@gmail.com
          </a>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm text-white/90 font-medium">
        <span>© 2026 Kajal Bharti</span>
        <a href="mailto:kajal.cloudops@gmail.com" className="hover:text-white">kajal.cloudops@gmail.com</a>
      </div>
    </footer>
  );
}
