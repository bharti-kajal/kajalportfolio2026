import React from 'react';
import { User, Layers, MapPin, Calendar, Code2, Network, Cloud, Database } from 'lucide-react';

export default function AboutAndWhatIDo({ onCategoryClick }) {
  const whatIDoItems = [
    {
      title: 'Backend Development',
      sub: 'Node.js, Express, NestJS',
      icon: <Code2 className="w-6 h-6 text-[#0066ff]" />,
    },
    {
      title: 'System Design',
      sub: 'Scalable & resilient systems',
      icon: <Network className="w-6 h-6 text-[#0066ff]" />,
    },
    {
      title: 'DevOps & Cloud',
      sub: 'AWS, Docker, Kubernetes, CI/CD',
      icon: <Cloud className="w-6 h-6 text-[#0066ff]" />,
    },
    {
      title: 'Database Architecture',
      sub: 'PostgreSQL, MongoDB, Redis, MySQL',
      icon: <Database className="w-6 h-6 text-[#0066ff]" />,
    },
  ];

  return (
    <section id="about" className="relative z-30 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {/* About Me Card */}
        <div className="glass-widget relative overflow-hidden p-6 sm:p-7 flex flex-col justify-between">
          <svg viewBox="0 0 200 150" className="!absolute right-2 bottom-2 w-28 sm:w-44 z-0 opacity-90 pointer-events-none" aria-hidden="true">
            <ellipse cx="100" cy="138" rx="80" ry="8" fill="#93b4f5" opacity=".35" />
            <path d="M52 40 L132 28 L152 100 L70 116 Z" fill="#4c4fc9" />
            <path d="M58 46 L127 35 L144 95 L74 108 Z" fill="#2c2f93" />
            <text x="82" y="82" fontSize="22" fontWeight="700" fill="#8fd3ff" transform="rotate(-9 100 70)">&lt;/&gt;</text>
            <path d="M70 116 L152 100 L170 112 L84 130 Z" fill="#b9c4ff" />
            <path d="M28 130 q-8-22 6-30 q4 16-6 30z M30 130 q10-18 24-18 q-6 14-24 18z" fill="#34c99a" />
            <rect x="22" y="128" width="16" height="10" rx="2" fill="#7c8cf0" />
          </svg>
          <div>
            <div className="flex items-center gap-3 mb-3.5">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center text-[#0a5cff]">
                <User className="w-4 h-4" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0b1a45] tracking-tight">About Me</h2>
            </div>

            <p className="text-sm sm:text-base text-[#26356b] leading-relaxed font-normal mb-6">
              I design and build scalable, reliable backend systems using Node.js, with a strong focus on system design, database architecture and DevOps.
            </p>
          </div>

          <div className="space-y-2.5 pt-3 border-t border-[#9db3ea]/40">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#26356b] font-medium">
              <MapPin className="w-4 h-4 text-slate-500" />
              <span>New Delhi, India</span>
            </div>

            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#26356b] font-medium">
              <Calendar className="w-4 h-4 text-slate-500" />
              <span>5+ Years of Experience</span>
            </div>

            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#0b1a45]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Open for Full-time & Freelance</span>
            </div>
          </div>
        </div>

        {/* What I Do Card */}
        <div className="glass-widget p-6 sm:p-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center text-[#0a5cff]">
                <Layers className="w-4 h-4" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0b1a45] tracking-tight">What I Do</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
              {whatIDoItems.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => onCategoryClick && onCategoryClick(item)}
                  className="glass-item rounded-2xl p-4 flex items-center gap-3.5 cursor-pointer hover:border-blue-300 group"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm font-bold text-[#0b1a45] leading-snug">{item.title}</div>
                    <div className="text-[10px] sm:text-xs text-[#26356b]/80 leading-snug mt-0.5">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
