import React, { useState } from 'react';
import { Briefcase, Layers, ChevronRight, ChevronDown, ArrowRight, MapPin } from 'lucide-react';
import { allProjects } from '../data/projects.jsx';
import { experiences } from '../data/experience.js';

export default function ExperienceAndProjects({ onProjectClick, onViewAllProjects }) {
  const projects = allProjects.slice(0, 3);
  // Compact timeline (as in the design); click a role to read its details.
  const [open, setOpen] = useState(-1);

  return (
    <section id="experience" className="relative z-30 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {/* ---------------- Work Experience ---------------- */}
        <div className="glass-widget p-6 sm:p-7 flex flex-col">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center text-[#0a5cff]">
              <Briefcase className="w-4 h-4" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0b1a45] tracking-tight">Work Experience</h2>
            <span className="ml-auto px-2.5 py-1 rounded-full text-[11px] font-bold text-[#0a3fc4] bg-white/80 border border-white shadow-sm whitespace-nowrap">
              5+ years
            </span>
          </div>

          <p className="text-xs text-[#3a4a7a] -mt-3 mb-4">Click a role to see what I worked on.</p>

          <div className="relative pl-6 space-y-4 before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-[#8fb0f5]/70">
            {experiences.map((exp, i) => {
              const isOpen = open === i;
              return (
                <div key={exp.company + exp.period} className="relative">
                  <div className="absolute -left-[27px] top-1.5 w-3.5 h-3.5 rounded-full bg-gradient-to-b from-[#3d93ff] to-[#0052e6] ring-4 ring-white/80 shadow-[0_0_10px_rgba(10,92,255,0.6)]" />

                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="w-full text-left flex items-start justify-between gap-3 group"
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-sm sm:text-base font-bold text-[#0b1a45]">{exp.title}</h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-semibold bg-[#0284c7] text-white">Current</span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm font-medium text-[#26356b] mt-0.5">{exp.company}</p>
                      <p className="text-[11px] sm:text-xs text-[#5b6a99] mt-0.5">{exp.period} ({exp.duration})</p>
                    </div>
                    <ChevronDown className={`w-4 h-4 mt-1 text-[#0a5cff] flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="mt-2.5">
                      <p className="flex items-center gap-1 text-[11px] text-[#3a4a7a] mb-1.5"><MapPin className="w-3 h-3" />{exp.location}</p>
                      <ul className="space-y-1.5">
                        {exp.points.map((pt) => (
                          <li key={pt} className="flex items-start gap-2 text-xs sm:text-[13px] text-[#16275c] leading-relaxed">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0a5cff] flex-shrink-0" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1.5 mt-2.5">
                        {exp.tech.map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded-full text-[10px] font-semibold text-[#0b1a45] bg-white/85 border border-white shadow-sm">{t}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ---------------- Featured Projects ---------------- */}
        <div id="projects" className="glass-widget p-6 sm:p-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center text-[#0a5cff]">
                <Layers className="w-4 h-4" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0b1a45] tracking-tight">Featured Projects</h2>
            </div>

            <div className="space-y-3 sm:space-y-3.5">
              {projects.map((proj) => (
                <div
                  key={proj.id}
                  onClick={() => onProjectClick(proj)}
                  className="glass-item rounded-2xl p-4 flex items-center justify-between cursor-pointer group"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className={`w-10 h-10 rounded-xl ${proj.iconBg} flex items-center justify-center shadow-md flex-shrink-0`}>
                      {proj.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm sm:text-base font-bold text-[#0b1a45]">{proj.title}</span>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${proj.tagColor}`}>{proj.tag}</span>
                      </div>
                      <p className="text-xs text-[#3a4a7a] mt-0.5 truncate">{proj.category}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#0a5cff]/70 group-hover:text-[#0a5cff] group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-[#9db3ea]/40 mt-4">
            <button
              onClick={onViewAllProjects}
              className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0a5cff] hover:text-[#0a3fc4] transition-colors group"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
