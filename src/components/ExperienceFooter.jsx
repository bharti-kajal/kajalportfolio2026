import React from 'react';
import { Calendar } from 'lucide-react';

export default function ExperienceFooter() {
  return (
    <footer className="relative pt-2 pb-16 z-30 w-full">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        {/* Total Experience Glass Widget */}
        <div className="glass-widget px-6 py-4 flex items-center gap-4 shadow-lg">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-[#0a5cff] flex-shrink-0">
            <Calendar className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Total Experience
            </span>
            <span className="text-lg sm:text-xl font-extrabold text-[#0b1a45] tracking-tight leading-tight">
              5 Years 5 Months
            </span>
            <span className="text-[11px] sm:text-xs text-slate-500 font-medium">
              (Jun 2021 – Present, as of Nov 2026)
            </span>
          </div>
        </div>

        {/* Minimal Copyright */}
        <div className="flex items-center gap-3 text-xs sm:text-sm text-[#0b1a45] font-semibold">
          <span>© 2026 Kajal Bharti</span>
          <span>•</span>
          <span>Designed with Glassmorphism</span>
          <span>•</span>
          <a
            href="mailto:kajal.cloudops@gmail.com"
            className="text-[#0a5cff] hover:text-[#0a3fc4] transition-colors underline decoration-sky-300/40"
          >
            kajal.cloudops@gmail.com
          </a>
        </div>
      </div>

    </footer>
  );
}
