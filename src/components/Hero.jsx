import React from 'react';
import { ArrowRight, Download, Code2, Layers } from 'lucide-react';
import { NodeJsIcon, ExpressIcon, PostgresIcon, DockerIcon, AWSIcon } from './TechIcons';

const coreStack = [
  ['Node.js', NodeJsIcon], ['Express', ExpressIcon], ['PostgreSQL', PostgresIcon], ['Docker', DockerIcon], ['AWS', AWSIcon],
];

const Float = ({ className = '', children }) => (
  <div className={`absolute w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#071d5c]/75 border border-sky-300/40 backdrop-blur-md shadow-[0_10px_25px_rgba(0,10,60,0.55)] flex items-center justify-center [&>div]:scale-150 ${className}`}>
    {children}
  </div>
);

export default function Hero({ onViewProjects, onDownloadResume }) {
  return (
    <section id="home" className="relative pt-2 sm:pt-4 pb-2 z-30">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-center">
        {/* Left column */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-4 sm:space-y-5 order-2 lg:order-1">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-medium text-white glass-tag">
              <Code2 className="w-3.5 h-3.5" /> Backend Engineer
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-medium text-white glass-tag">
              <Layers className="w-3.5 h-3.5" /> System Designer
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight leading-[1.12]">
            Building Scalable <br />
            Backend Systems for <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#22e3f5] via-[#3fd0ff] to-[#6aa8ff] drop-shadow-[0_2px_22px_rgba(0,242,254,0.45)]">
              Real Business Impact
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-200/90 leading-relaxed max-w-xl">
            5+ years of experience in designing secure, scalable and high-performance systems for FinTech, CRM and SaaS products.
          </p>

          <div className="flex items-center gap-3 pt-1 flex-wrap">
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
              className="glass-btn-secondary flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-medium hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-4 h-4 text-white/90" />
              <span>Download Resume</span>
            </a>
          </div>

          <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap pt-1">
            <span className="text-xs font-semibold text-white mr-1">Core stack:</span>
            {coreStack.map(([name, Icon]) => (
              <span key={name} className="inline-flex items-center gap-1.5 pl-1.5 pr-3 py-1 rounded-full glass-tag text-xs text-white">
                <Icon /> {name}
              </span>
            ))}
          </div>
        </div>

        {/* Right column: portrait in a glowing circle with floating tech badges */}
        <div className="lg:col-span-5 order-1 lg:order-2">
          <div className="relative w-full max-w-[440px] xl:max-w-[540px] h-[360px] sm:h-[470px] xl:h-[560px] mx-auto lg:ml-auto">
            <div className="absolute top-0 right-0 w-24 h-20 opacity-60 [background-image:radial-gradient(circle,#fff_1.5px,transparent_1.7px)] [background-size:16px_16px]" />
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[82%] aspect-square rounded-full bg-gradient-to-br from-[#2f8bff] via-[#0a50d8] to-[#0a2a8a] border border-sky-300/50 shadow-[0_0_80px_rgba(0,140,255,0.55)]" />
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[8%] w-[104%] h-[34%] rounded-[50%] border-2 border-sky-300/70 -rotate-[8deg] shadow-[0_0_18px_rgba(56,189,248,0.7)]" />

            <img
              src="/portrait-cutout.png"
              alt="Kajal Bharti, Senior Backend Engineer"
              draggable="false"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[84%] h-auto select-none drop-shadow-[0_18px_25px_rgba(0,20,80,0.45)]"
              style={{ WebkitMaskImage: 'linear-gradient(to bottom,#000 84%,transparent 100%)', maskImage: 'linear-gradient(to bottom,#000 84%,transparent 100%)' }}
            />

            <Float className="left-[4%] top-[14%]"><NodeJsIcon /></Float>
            <Float className="left-[-2%] top-[46%]"><AWSIcon /></Float>
            <Float className="right-[2%] top-[8%]"><PostgresIcon /></Float>
            <Float className="right-[-2%] top-[44%]"><DockerIcon /></Float>
          </div>
        </div>
      </div>
    </section>
  );
}
