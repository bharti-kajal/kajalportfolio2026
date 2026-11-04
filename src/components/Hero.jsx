import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero({ onViewProjects, onDownloadResume }) {
  return (
    <section id="home" className="relative pt-0 sm:pt-2 pb-0 z-30">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-4 items-center">
        {/* Left */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-3.5 sm:space-y-4 order-2 lg:order-1">
          <p className="text-[11px] sm:text-xs font-bold tracking-[0.28em] text-[#0f5a43] uppercase">Senior Backend Engineer</p>

          <h1 className="text-[34px] sm:text-5xl lg:text-[50px] text-[#14261e] leading-[1.1]">
            Building Scalable <br />
            Backend Systems <br />
            for <span className="accent-italic">Real Business Impact</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#4d6257] leading-relaxed max-w-xl">
            5+ years of experience in designing secure, scalable and high-performance systems for FinTech, CRM and SaaS products.
          </p>

          <div className="flex items-center gap-3 pt-1 flex-wrap">
            <button
              onClick={onViewProjects}
              className="flex items-center gap-2 px-6 py-3 rounded-xl btn-blue text-white text-xs sm:text-sm font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="/Kajal_Bharti_Backend_Engineer.pdf"
              download="Kajal_Bharti_Backend_Engineer.pdf"
              onClick={onDownloadResume}
              className="glass-btn-secondary flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        {/* Right: portrait on cream arch with gold swoosh + leaf accents (like reference) */}
        <div className="lg:col-span-5 order-1 lg:order-2">
          <div className="relative w-full max-w-[420px] xl:max-w-[480px] h-[290px] sm:h-[340px] xl:h-[380px] mx-auto lg:ml-auto">
            {/* soft cream arch */}
            <div className="absolute inset-x-[4%] bottom-0 top-[6%] rounded-t-[999px] rounded-b-[40px] bg-gradient-to-b from-[#fffdf6] via-[#f8efd9] to-[#efe0b8] opacity-95" />
            {/* leaves behind her (right) */}
            <svg viewBox="0 0 200 260" className="absolute right-[-2%] top-[18%] h-[60%] opacity-80 pointer-events-none" aria-hidden="true">
              <g fill="#7fae8e">
                <path d="M120 250 C 118 190, 124 150, 140 110 C 156 150, 150 200, 120 250Z" />
                <path d="M120 250 C 80 210, 62 170, 70 120 C 104 150, 122 200, 120 250Z" opacity=".85" />
                <path d="M122 250 C 160 220, 186 190, 190 140 C 150 160, 128 200, 122 250Z" opacity=".7" />
                <path d="M120 250 C 100 200, 98 160, 108 70 C 130 120, 132 200, 120 250Z" opacity=".6" />
              </g>
            </svg>
            {/* gold swoosh */}
            <svg viewBox="0 0 400 200" className="absolute left-[-6%] right-[-6%] bottom-[-2%] w-[112%] pointer-events-none" aria-hidden="true">
              <defs>
                <linearGradient id="goldSwoosh" x1="0" x2="1">
                  <stop offset="0" stopColor="#e8b84a" stopOpacity="0" />
                  <stop offset=".25" stopColor="#d8a53a" />
                  <stop offset=".6" stopColor="#c9962b" />
                  <stop offset="1" stopColor="#e8c470" stopOpacity=".2" />
                </linearGradient>
              </defs>
              <path d="M0 150 C 70 205, 200 205, 300 120 C 345 82, 385 60, 410 56 C 360 98, 330 150, 240 184 C 140 218, 50 190, 0 150Z" fill="url(#goldSwoosh)" />
              <path d="M10 170 C 100 215, 220 205, 320 135" fill="none" stroke="#0f5a43" strokeOpacity=".25" strokeWidth="1.2" />
            </svg>
            <img
              src="/portrait-cutout.png"
              alt="Kajal Bharti, Senior Backend Engineer"
              draggable="false"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[96%] w-auto max-w-none select-none drop-shadow-[0_14px_18px_rgba(70,50,10,0.18)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
