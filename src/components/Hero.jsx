import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero({ onViewProjects, onDownloadResume }) {
  return (
    <section id="home" className="relative pt-4 sm:pt-6 pb-2 z-30">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
        {/* Left Column - Headline & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-4 sm:space-y-5">
          {/* Top Pill Badges */}
          <div className="flex items-center gap-2.5">
            <span className="px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-medium text-white glass-tag">
              Backend Engineer
            </span>
            <span className="px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-medium text-white glass-tag">
              System Designer
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight leading-[1.12]">
            Building Scalable <br />
            Backend Systems for <br />
            <span className="inline-block pr-3 pb-1 italic text-transparent bg-clip-text bg-gradient-to-r from-[#22e3f5] via-[#3fd0ff] to-[#6aa8ff] drop-shadow-[0_2px_22px_rgba(0,242,254,0.45)]">
              Real Business Impact
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-slate-200/90 font-normal leading-relaxed max-w-xl">
            5+ years of experience in designing secure, scalable and high-performance systems for FinTech, CRM and SaaS products.
          </p>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-2 flex-wrap">
            <button
              onClick={onViewProjects}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-b from-[#2f8bff] to-[#0052e6] text-white text-xs sm:text-sm font-semibold shadow-[0_4px_25px_rgba(0,102,255,0.45)] hover:shadow-[0_6px_30px_rgba(0,102,255,0.65)] hover:scale-[1.02] active:scale-[0.98] transition-all border border-white/20"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="/Kajal_Bharti_Backend_Engineer.pdf"
              download="Kajal_Bharti_Backend_Engineer.pdf"
              onClick={onDownloadResume}
              className="glass-btn-secondary flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-medium shadow-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-4 h-4 text-white/90" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Quick proof of stack */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-xs font-semibold text-sky-200/90 mr-1">Core stack</span>
            {['Node.js', 'Express', 'MongoDB', 'MySQL', 'Docker', 'AWS'].map((t) => (
              <span key={t} className="glass-tag px-3 py-1 rounded-full text-xs font-medium">{t}</span>
            ))}
          </div>
        </div>

        {/* Right Column - Glass portrait frame (cut-out portrait sits inside frosted glass) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
          <div className="absolute -inset-6 bg-gradient-to-tr from-[#0a66ff]/60 via-[#00d2ff]/35 to-[#8b5cf6]/25 rounded-[48px] blur-3xl opacity-80 pointer-events-none" />

          <div className="portrait-glass relative w-full max-w-[300px] sm:max-w-[360px] md:max-w-[400px] aspect-[1/1.1] rounded-[34px] overflow-hidden group">
            {/* light streaks inside the glass */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.55),transparent_45%),radial-gradient(circle_at_100%_60%,rgba(0,210,255,0.35),transparent_50%)] pointer-events-none" />
            <img
              src="/portrait-cutout.png"
              alt="Kajal Bharti - Senior Backend Engineer"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[104%] max-w-none h-auto select-none drop-shadow-[0_18px_25px_rgba(0,20,80,0.45)] transition-transform duration-700 group-hover:scale-[1.03]"
              draggable="false"
            />
            <div className="absolute inset-0 rounded-[34px] ring-1 ring-inset ring-white/50 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
