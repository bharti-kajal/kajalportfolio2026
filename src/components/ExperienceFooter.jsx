import React from 'react';
import { Send, Download, Mail, ArrowRight, Layers, Linkedin, Github } from 'lucide-react';

export default function ExperienceFooter({ onContactClick, onDownloadResume, onCaseStudyClick }) {
  return (
    <footer className="relative pb-6 z-30 w-full space-y-4">
      {/* Explore My Work band */}
      <div className="cta-green px-6 sm:px-8 py-5 flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div className="flex items-center gap-5">
          <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-white/10 border border-white/20 items-center justify-center text-[#e6c77a]">
            <Layers className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">Explore My Work</h2>
            <p className="text-sm text-[#d6e5d3] mt-1 max-w-md">Dive into real projects, system designs and engineering case studies.</p>
          </div>
        </div>
        <button
          onClick={onCaseStudyClick}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#e8b84a] hover:bg-[#f0c45c] text-[#14261e] text-sm font-bold shadow-[0_10px_24px_-10px_rgba(0,0,0,0.5)] transition-all hover:scale-[1.03] active:scale-[0.98]"
        >
          View Case Studies <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Contact card */}
      <div className="glass-light-card rounded-3xl px-5 sm:px-7 py-4 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="lg:flex-1">
          <p className="text-[11px] sm:text-xs font-bold tracking-[0.22em] text-[#0f5a43] uppercase">Open for Full-time &amp; Freelance</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#14261e] mt-1">Have a backend project in mind?</h2>
          <p className="text-sm text-[#4d6257] mt-1">Let&apos;s talk about building something secure, scalable and reliable.</p>
          <div className="flex items-center gap-2.5 mt-3 flex-wrap text-xs font-semibold text-[#14261e]">
            <a href="mailto:kajal.cloudops@gmail.com" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/80 hover:bg-[#0f5a43] hover:text-white border border-[#e6dac0] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#0f5a43]" /> kajal.cloudops@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/kajal-bharti-26a968213/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/80 hover:bg-[#0a66c2] hover:text-white border border-[#e6dac0] transition-colors">
              <Linkedin className="w-3.5 h-3.5 text-[#0a66c2]" /> LinkedIn
            </a>
            <a href="https://github.com/bharti-kajal" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/80 hover:bg-[#24292f] hover:text-white border border-[#e6dac0] transition-colors">
              <Github className="w-3.5 h-3.5 text-[#24292f]" /> GitHub
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3 flex-wrap lg:flex-shrink-0 lg:max-w-[420px] lg:pl-8 lg:border-l lg:border-[#e6dac0]">
          <button onClick={onContactClick} className="btn-blue text-white flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold hover:scale-105 transition-transform">
            <Send className="w-4 h-4" /> Contact Me
          </button>
          <a href="/Kajal_Bharti_Backend_Engineer.pdf" download="Kajal_Bharti_Backend_Engineer.pdf" onClick={onDownloadResume} className="glass-btn-secondary flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold hover:scale-105 transition-transform">
            <Download className="w-4 h-4" /> Download Resume
          </a>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm text-[#4d6257] font-medium pt-1">
        <span>© 2026 Kajal Bharti</span>
        <a href="mailto:kajal.cloudops@gmail.com" className="hover:text-[#0f5a43]">kajal.cloudops@gmail.com</a>
      </div>
    </footer>
  );
}
