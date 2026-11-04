import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-30 w-full border-t border-[#14261e]/15 pt-5 pb-3">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[#14261e] font-medium">
        <span>© {new Date().getFullYear()} Kajal Bharti • Senior Backend Engineer</span>
        <div className="flex items-center gap-4 flex-wrap text-xs sm:text-sm font-semibold text-[#0b4634]">
          <a href="mailto:kajal.cloudops@gmail.com" className="inline-flex items-center gap-1.5 hover:underline">
            <Mail className="w-3.5 h-3.5" /> kajal.cloudops@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/kajal-bharti-26a968213/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:underline">
            <Linkedin className="w-3.5 h-3.5 text-[#0a66c2]" /> LinkedIn
          </a>
          <a href="https://github.com/bharti-kajal" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:underline">
            <Github className="w-3.5 h-3.5 text-[#24292f]" /> GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
