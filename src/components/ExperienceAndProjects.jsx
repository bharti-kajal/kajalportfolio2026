import React from 'react';
import { Briefcase, Layers, ChevronRight, ArrowRight, Calendar } from 'lucide-react';
import { allProjects } from '../data/projects.jsx';
import { projectDetails } from '../data/projectDetails.jsx';

const experiences = [
  { title: 'Senior Backend Developer', isCurrent: true, company: 'Hydear Tech Pvt Ltd', period: 'Jun 2025 – Present (1 Year 5 Months)' },
  { title: 'Backend Developer (Freelance)', company: 'Independent Contractor', period: 'Jan 2025 – Jun 2025 (6 Months)' },
  { title: 'Software Engineer – Backend', company: 'Actiknow Consulting Pvt Ltd', period: 'Jan 2023 – Jan 2025 (2 Years)' },
  { title: 'Web Developer', company: 'Paridhi Webtech Pvt Ltd', period: 'Jun 2021 – Jan 2023 (1 Year 7 Months)' },
  { title: 'Software Developer', company: 'FinHeal Finserve Pvt Ltd', period: 'Nov 2020 – Jun 2021 (7 Months)' },
];

const featuredIds = ['swiftdial', 'upniva', 'complianceseva', 'unirr'];

function LaptopThumb({ accent = '#38bdf8' }) {
  return (
    <svg viewBox="0 0 120 58" className="hidden min-[430px]:block w-20 sm:w-28 h-auto flex-shrink-0" aria-hidden="true">
      <rect x="16" y="2" width="88" height="45" rx="3" fill="#0f2557" />
      <rect x="19" y="5" width="82" height="39" rx="1.5" fill="#f4f7ff" />
      <rect x="19" y="5" width="15" height="39" fill="#e3ebff" />
      {[0, 1, 2, 3].map((i) => <rect key={i} x={38 + i * 16} y="9" width="13" height="7" rx="1" fill="#fff" stroke="#d5e0fb" strokeWidth=".6" />)}
      <path d="M38 38 L50 30 L60 34 L72 22 L84 28 L98 15" fill="none" stroke={accent} strokeWidth="1.8" strokeLinejoin="round" />
      <rect x="38" y="20" width="8" height="2.5" rx="1" fill="#c7d4f2" />
      <path d="M4 49 H116 L110 55 H10 Z" fill="#a9b8dc" />
    </svg>
  );
}

export default function ExperienceAndProjects({ onProjectClick, onViewAllProjects }) {
  const projects = featuredIds.map((id) => allProjects.find((p) => p.id === id)).filter(Boolean);

  return (
    <section id="experience" className="relative z-30 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {/* Work Experience */}
        <div className="glass-widget p-6 sm:p-7">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center text-[#0a5cff]"><Briefcase className="w-5 h-5" /></div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0b1a45] tracking-tight">Work Experience</h2>
            </div>
            <span className="px-3 py-1 rounded-full bg-white/70 border border-white text-xs font-semibold text-[#26356b]">5+ years</span>
          </div>

          <div className="relative pl-6 space-y-4 before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-[#8fb0f5]/70">
            {experiences.map((exp) => (
              <div key={exp.title + exp.company} className="relative">
                <div className="absolute -left-[27px] top-1.5 w-3.5 h-3.5 rounded-full bg-gradient-to-b from-[#3d93ff] to-[#0052e6] ring-4 ring-white/80 shadow-[0_0_10px_rgba(10,92,255,0.6)]" />
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-sm sm:text-base font-bold text-[#0b1a45]">{exp.title}</h3>
                  {exp.isCurrent && <span className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-semibold bg-[#0284c7] text-white">Current</span>}
                </div>
                <p className="text-xs sm:text-sm font-medium text-[#26356b] mt-0.5">{exp.company}</p>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 flex items-center gap-1.5"><Calendar className="w-3 h-3" />{exp.period}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Projects */}
        <div id="projects" className="glass-widget p-6 sm:p-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center text-[#0a5cff]"><Layers className="w-5 h-5" /></div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0b1a45] tracking-tight">Featured Projects</h2>
            </div>

            <div className="space-y-3">
              {projects.map((proj) => (
                <div
                  key={proj.id}
                  onClick={() => onProjectClick(proj)}
                  className="glass-item rounded-2xl p-3 sm:p-3.5 flex items-center gap-3 cursor-pointer hover:border-blue-300 group"
                >
                  <div className={`w-11 h-11 rounded-xl ${proj.iconBg} flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-105 transition-transform [&>svg]:w-5 [&>svg]:h-5`}>
                    {proj.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm sm:text-base font-bold text-[#0b1a45] truncate">{proj.title}</span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold bg-emerald-100 text-emerald-700">{proj.tag}</span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-[#26356b]/80 leading-snug mt-0.5">{projectDetails[proj.id]?.subtitle}</p>
                  </div>
                  <LaptopThumb accent={proj.thumb?.accent} />
                  <ChevronRight className="w-4 h-4 text-[#0066ff] group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 mt-4">
            <button onClick={onViewAllProjects} className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0066ff] hover:text-blue-700 transition-colors group">
              <span>View All Projects</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
