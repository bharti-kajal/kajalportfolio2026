import React from 'react';
import { Mail, MapPin } from 'lucide-react';

export default function Footer({ onGoHome, onGoProjects, onContactClick }) {
  const links = [
    { label: 'Home', onClick: () => onGoHome() },
    { label: 'About', onClick: () => onGoHome('#about') },
    { label: 'Projects', onClick: () => onGoProjects() },
    { label: 'Skills', onClick: () => onGoHome('#skills') },
    { label: 'Contact', onClick: () => onContactClick() },
  ];

  return (
    <footer className="relative z-30 w-full glass-widget !rounded-3xl px-6 sm:px-8 pt-7 pb-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0066ff] to-[#00c6ff] flex items-center justify-center text-white font-black shadow-[0_6px_18px_rgba(0,102,255,0.45)] border border-white/40">
            KB
          </div>
          <div className="leading-tight">
            <div className="font-extrabold text-[#0b1a45] text-base">Kajal Bharti</div>
            <div className="text-xs text-[#3a4a7a] font-medium">Senior Backend Engineer</div>
          </div>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2" aria-label="Footer">
          {links.map((l) => (
            <button key={l.label} onClick={l.onClick} className="text-sm font-semibold text-[#26356b] hover:text-[#0a5cff] transition-colors">
              {l.label}
            </button>
          ))}
        </nav>

        {/* Contact */}
        <div className="flex flex-col gap-1.5 text-sm text-[#26356b]">
          <a href="mailto:kajal.cloudops@gmail.com" className="inline-flex items-center gap-2 font-semibold text-[#0a5cff] hover:text-[#0a3fc4]">
            <Mail className="w-4 h-4" /> kajal.cloudops@gmail.com
          </a>
          <span className="inline-flex items-center gap-2"><MapPin className="w-4 h-4 text-[#3a4a7a]" /> New Delhi, India</span>
        </div>
      </div>

      <div className="mt-5 pt-4 border-t border-[#9db3ea]/50 flex flex-col sm:flex-row items-center justify-between gap-1.5 text-xs text-[#3a4a7a] font-medium">
        <span>© {new Date().getFullYear()} Kajal Bharti. All rights reserved.</span>
        <span>Designed &amp; built with Glassmorphism</span>
      </div>
    </footer>
  );
}
