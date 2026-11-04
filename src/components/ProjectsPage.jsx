import React, { useMemo, useState, useEffect } from 'react';
import { Search, ChevronDown, ArrowRight, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import ProjectPreview from './ProjectPreview';
import { allProjects, projectCategories, projectIconComponents } from '../data/projects.jsx';
import { projectPreviews } from '../data/projectPreviews.js';

const PAGE_SIZE = 12;

export default function ProjectsPage({ onProjectClick, onExploreCaseStudies }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [page, setPage] = useState(1);

  const counts = useMemo(() => {
    const c = {};
    allProjects.forEach((p) => { c[p.filter] = (c[p.filter] || 0) + 1; });
    return c;
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allProjects.filter((p) => {
      const inCat = category === 'All' || p.filter === category;
      const sub = projectPreviews[p.id]?.subtitle || p.category;
      const inQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        sub.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q));
      return inCat && inQuery;
    });
  }, [query, category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  useEffect(() => { setPage(1); }, [query, category]);
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const chips = [
    { key: 'All', label: `All (${allProjects.length})` },
    ...projectCategories.map((c) => ({ key: c, label: `${c} (${counts[c] || 0})` })),
  ];

  return (
    <div className="flex flex-col gap-4 sm:gap-4 pb-2">
      {/* Heading */}
      <section className="pt-1">
        <p className="text-xs sm:text-[13px] font-bold tracking-[0.28em] text-[#0f5a43] uppercase">Projects</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#14261e] tracking-tight leading-[1.05] mt-1">Selected Projects</h1>
        <p className="text-sm sm:text-base text-[#4d6257] mt-1.5">
          A collection of {allProjects.length} projects across FinTech, CRM, SaaS and enterprise domains.
        </p>
      </section>

      {/* Search + chips + category (one glass bar) */}
      <section className="glass-bar rounded-[28px] lg:rounded-full px-3 sm:px-4 py-2.5 flex flex-col lg:flex-row lg:items-center gap-3">
        <label className="flex items-center gap-3 rounded-full px-5 h-11 border border-white bg-white/70 lg:w-[400px] flex-shrink-0 focus-within:border-[#0f5a43]/60 transition-colors">
          <Search className="w-[18px] h-[18px] text-[#5d6f64]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects..."
            className="w-full bg-transparent outline-none text-sm text-[#14261e] placeholder:text-[#8a978e]"
          />
        </label>

        <span className="hidden lg:block w-px h-9 bg-[#dccfb2]/50" />

        <div className="flex gap-2.5 overflow-x-auto no-scrollbar flex-1 py-0.5">
          {chips.map((chip) => {
            const active = category === chip.key;
            return (
              <button
                key={chip.key}
                onClick={() => setCategory(chip.key)}
                className={`whitespace-nowrap rounded-full px-4 h-9 text-[13px] font-semibold transition-all border ${
                  active ? 'btn-blue text-white' : 'border-white bg-white/70 text-[#14261e] hover:bg-white'
                }`}
              >
                {chip.label}
              </button>
            );
          })}
        </div>

        <span className="hidden lg:block w-px h-9 bg-[#dccfb2]/50" />

        <div className="relative rounded-full border border-white bg-white/70 lg:w-[183px] flex-shrink-0">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full h-11 appearance-none bg-transparent text-sm font-semibold text-[#14261e] pl-5 pr-10 outline-none cursor-pointer"
            aria-label="Filter by category"
          >
            <option className="text-slate-900" value="All">All Categories</option>
            {projectCategories.map((c) => (
              <option className="text-slate-900" key={c} value={c}>{c}</option>
            ))}
          </select>
          <ChevronDown className="w-4 h-4 text-[#14261e] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </section>

      {/* Grid */}
      {visible.length === 0 ? (
        <div className="glass-light-card rounded-3xl p-10 text-center text-[#2f4a3d] font-medium">
          No projects match your search.
        </div>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {visible.map((proj) => {
            const pv = projectPreviews[proj.id] || {
              subtitle: proj.category,
              brand: proj.title,
              menu: ['Dashboard', 'Overview', 'Reports', 'Settings'],
              heading: proj.title,
              range: null,
              stats: [{ label: 'Status', value: 'Live' }, { label: 'Platform', value: 'Production' }],
              chart: { type: 'line', color: '#1b7a5a', values: [0.2, 0.4, 0.35, 0.6, 0.5, 0.75, 0.9] },
            };
            const Icon = projectIconComponents[proj.id];
            const bgGrad = iconHex[proj.id] || 'linear-gradient(135deg,#0f5a43,#0b3d2e)';
            return (
              <article
                key={proj.id}
                onClick={() => onProjectClick(proj)}
                className="glass-light-card group cursor-pointer rounded-[26px] p-[18px] flex flex-col gap-3.5 hover:-translate-y-1 hover:shadow-[0_26px_50px_-18px_rgba(8,25,100,0.75)] transition-all duration-200"
              >
                <div className="transition-transform duration-500 group-hover:scale-[1.015]">
                  <ProjectPreview preview={pv} Icon={Icon} iconBg={bgGrad} id={proj.id} image={proj.image} />
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-[42px] h-[42px] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md text-white" style={{ background: bgGrad }}>
                    {Icon && <Icon className="w-5 h-5" />}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <a
                        href={proj.liveUrl || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        title={`Open ${proj.title} website in new tab`}
                        className="text-lg font-extrabold text-[#14261e] hover:text-[#0f5a43] hover:underline inline-flex items-center gap-1.5 transition-colors group/title"
                      >
                        <span className="truncate">{proj.title}</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover/title:opacity-100 transition-opacity flex-shrink-0" />
                      </a>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#c9f0d9] text-[#17794a] border border-[#a9e2c1]">
                        {proj.tag}
                      </span>
                    </div>
                    <p className="text-[13px] text-[#4d6257] leading-snug mt-0.5 line-clamp-1">{pv.subtitle}</p>
                  </div>
                </div>

                <div className="mt-auto flex items-center justify-between gap-2 pt-2 border-t border-black/5">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-full text-[11.5px] font-semibold text-[#14261e] bg-white/75 border border-white shadow-[0_1px_2px_rgba(80,55,10,0.12)]">
                        {t}
                      </span>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onProjectClick(proj);
                    }}
                    title={`View ${proj.title} Details`}
                    aria-label={`View ${proj.title} Details`}
                    className="w-10 h-10 rounded-full btn-blue flex items-center justify-center flex-shrink-0 group-hover:scale-105 hover:scale-110 transition-transform shadow-md"
                  >
                    <ArrowRight className="w-[18px] h-[18px] text-white" />
                  </button>
                </div>
              </article>
            );
          })}
        </section>
      )}

      {/* Pagination */}
      <nav className="glass-bar self-center rounded-full px-2 py-1.5 flex items-center gap-1 text-sm font-semibold text-[#14261e]" aria-label="Pagination">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="flex items-center gap-1.5 pl-4 pr-3 h-9 rounded-full disabled:opacity-60 hover:bg-white/70"
        >
          <ChevronLeft className="w-4 h-4" /> Prev
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
          <button
            key={n}
            onClick={() => setPage(n)}
            className={`w-9 h-9 rounded-full ${n === page ? 'btn-blue' : 'hover:bg-white/70'}`}
          >
            {n}
          </button>
        ))}
        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          className="flex items-center gap-1.5 pl-3 pr-4 h-9 rounded-full disabled:opacity-60 hover:bg-white/70"
        >
          Next <ChevronRight className="w-4 h-4" />
        </button>
      </nav>

      {/* CTA */}
      <section className="glass-light-card rounded-[26px] p-5 sm:px-8 sm:py-6 flex flex-col md:flex-row items-center gap-6 overflow-hidden relative">
        <div className="w-44 sm:w-52 flex-shrink-0">
          <svg viewBox="0 0 240 150" className="w-full drop-shadow-[0_8px_16px_rgba(11,70,52,0.35)]" aria-hidden="true">
            <defs>
              <linearGradient id="lap" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#13694e" />
                <stop offset="1" stopColor="#0b3d2e" />
              </linearGradient>
            </defs>
            <rect x="40" y="12" width="160" height="100" rx="8" fill="#0b3d2e" stroke="#efe6d2" strokeWidth="3" />
            <rect x="48" y="20" width="144" height="84" rx="4" fill="url(#lap)" />
            <text x="120" y="70" textAnchor="middle" fontSize="26" fontWeight="800" fill="#f3ead6" fontFamily="monospace">&lt;/&gt;</text>
            <path d="M14 122 H226 L210 140 H30 Z" fill="#efe6d2" />
            <rect x="98" y="124" width="44" height="4" rx="2" fill="#dccfb2" />
          </svg>
        </div>
        <span className="hidden md:block w-px self-stretch bg-[#dccfb2]/50" />
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-xl sm:text-[28px] font-extrabold text-[#14261e] leading-tight">Want to see the full technical details?</h2>
          <p className="text-sm sm:text-base text-[#4d6257] mt-1.5">
            Explore in-depth case studies with architecture, challenges, decisions and outcomes.
          </p>
        </div>
        <button
          onClick={onExploreCaseStudies}
          className="inline-flex items-center gap-2 px-7 h-12 rounded-full btn-blue text-white text-[15px] font-semibold hover:scale-[1.03] active:scale-[0.98] transition-all flex-shrink-0"
        >
          Explore Case Studies <ArrowRight className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
}

const iconHex = {
  swiftdial: 'linear-gradient(135deg,#0f5a43,#0f5a43)',
  upniva: 'linear-gradient(135deg,#1b7a5a,#0f5a43)',
  complianceseva: 'linear-gradient(135deg,#fbbf24,#f59e0b)',
  interactify: 'linear-gradient(135deg,#22c55e,#10a050)',
  unirr: 'linear-gradient(135deg,#1b7a5a,#0f5a43)',
  referloan: 'linear-gradient(135deg,#fbbf24,#f59e0b)',
  kallo: 'linear-gradient(135deg,#0f5a43,#0b3d2e)',
  apnidiary: 'linear-gradient(135deg,#10b981,#059669)',
  expensetracker: 'linear-gradient(135deg,#10b981,#059669)',
  grocmart: 'linear-gradient(135deg,#f59e0b,#d97706)',
  glocalmd: 'linear-gradient(135deg,#0284c7,#0369a1)',
  ecommapi: 'linear-gradient(135deg,#6366f1,#4f46e5)',
  astrology: 'linear-gradient(135deg,#8b5cf6,#7c3aed)',
  bugreporting: 'linear-gradient(135deg,#ef4444,#dc2626)',
  affiliatepro: 'linear-gradient(135deg,#0d9488,#0f766e)',
  quontifi: 'linear-gradient(135deg,#0284c7,#075985)',
  glidecleaners: 'linear-gradient(135deg,#3b82f6,#2563eb)',
  yellowbrick: 'linear-gradient(135deg,#eab308,#ca8a04)',
  ptecra: 'linear-gradient(135deg,#059669,#047857)',
  pma: 'linear-gradient(135deg,#4f46e5,#3730a3)',
  dropshippingdirect: 'linear-gradient(135deg,#ea580c,#c2410c)',
  paridhiwebtech: 'linear-gradient(135deg,#2563eb,#1d4ed8)',
  cashondevice: 'linear-gradient(135deg,#16a34a,#15803d)',
  saffotech: 'linear-gradient(135deg,#7c3aed,#6d28d9)',
  chunavchanakya: 'linear-gradient(135deg,#ea580c,#c2410c)',
  tipcoengineering: 'linear-gradient(135deg,#0284c7,#0369a1)',
  scortishealthcare: 'linear-gradient(135deg,#10b981,#047857)',
  sahyadriestates: 'linear-gradient(135deg,#0f5a43,#0b3d2e)',
  cash2phone: 'linear-gradient(135deg,#16a34a,#15803d)',
  jaguarsecurity: 'linear-gradient(135deg,#334155,#0f172a)',
};
