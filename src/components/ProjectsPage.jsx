import React, { useMemo, useState, useEffect } from 'react';
import { Search, ChevronDown, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectThumb from './ProjectThumb';
import { allProjects, projectCategories } from '../data/projects.jsx';

const PAGE_SIZE = 6;

// 1 2 3 4 5 … N style page list
function pageList(page, total) {
  if (total <= 6) return Array.from({ length: total }, (_, i) => i + 1);
  const head = page <= 4 ? [1, 2, 3, 4, 5] : [1, '…', page - 1, page, page + 1];
  const tail = page <= 4 || page >= total - 2 ? ['…', total] : ['…', total];
  return [...head, ...tail];
}

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
      const inQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
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
    <div className="flex flex-col gap-6 sm:gap-8">
      {/* Heading */}
      <section>
        <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-sky-300 uppercase">Projects</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mt-1">All Projects</h1>
        <p className="text-sm sm:text-base text-slate-200/90 mt-2 max-w-2xl">
          A collection of {allProjects.length} projects across FinTech, CRM, SaaS and enterprise domains.
        </p>
      </section>

      {/* Search + category dropdown */}
      <section className="flex flex-col sm:flex-row gap-3">
        <label className="glass-dark-card flex-1 flex items-center gap-3 rounded-full px-5 py-3 focus-within:border-sky-300/80 transition-colors">
          <Search className="w-4 h-4 text-slate-300" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects..."
            className="w-full bg-transparent outline-none text-sm text-white placeholder:text-slate-300/70"
          />
        </label>
        <div className="glass-dark-card relative rounded-full sm:w-56">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full appearance-none bg-transparent text-sm font-semibold text-white pl-5 pr-10 py-3 outline-none cursor-pointer"
            aria-label="Filter by category"
          >
            <option className="text-slate-900" value="All">All Categories</option>
            {projectCategories.map((c) => (
              <option className="text-slate-900" key={c} value={c}>{c}</option>
            ))}
          </select>
          <ChevronDown className="w-4 h-4 text-slate-200 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </section>

      {/* Filter chips */}
      <section className="flex gap-2.5 overflow-x-auto no-scrollbar pb-1">
        {chips.map((chip) => {
          const active = category === chip.key;
          return (
            <button
              key={chip.key}
              onClick={() => setCategory(chip.key)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all border ${
                active
                  ? 'bg-gradient-to-b from-[#2f8bff] to-[#0052e6] text-white border-white/40 shadow-[0_4px_16px_rgba(0,82,230,0.55)]'
                  : 'glass-dark-card text-slate-100 hover:bg-white/15'
              }`}
            >
              {chip.label}
            </button>
          );
        })}
      </section>

      {/* Grid */}
      {visible.length === 0 ? (
        <div className="glass-dark-card rounded-3xl p-10 text-center text-slate-200">
          No projects match your search.
        </div>
      ) : (
        <section className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {visible.map((proj) => (
            <article
              key={proj.id}
              onClick={() => onProjectClick(proj)}
              className="glass-widget group cursor-pointer !rounded-[1.4rem] overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-[0_22px_44px_-12px_rgba(10,60,200,0.55)] transition-all duration-200"
            >
              <div className="aspect-[16/9] overflow-hidden bg-[#0a1740]">
                <div className="w-full h-full transition-transform duration-500 group-hover:scale-105">
                  <ProjectThumb {...proj.thumb} />
                </div>
              </div>

              <div className="p-3 sm:p-4 flex flex-col gap-2.5 flex-1">
                <div className="flex items-start gap-2.5">
                  <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl ${proj.iconBg} flex items-center justify-center flex-shrink-0 shadow-md`}>
                    {proj.icon}
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <h3 className="text-[13px] sm:text-base font-bold text-[#0b1a45] leading-tight break-words">{proj.title}</h3>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-200/90 text-emerald-800">
                        {proj.tag}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-[11px] sm:text-xs text-[#26356b] leading-snug">{proj.category}</p>

                <div className="mt-auto pt-1 flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold text-[#0b1a45] bg-white/90 border border-white shadow-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="w-8 h-8 rounded-full bg-gradient-to-b from-[#1f5fe0] to-[#0a2f9e] flex items-center justify-center flex-shrink-0 shadow-[0_4px_12px_rgba(10,47,158,0.5)] group-hover:translate-x-0.5 transition-transform">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </section>
      )}

      {/* Pagination */}
      <nav className="glass-widget self-center !rounded-full px-3 py-2 flex items-center gap-1 text-sm font-bold text-[#0b1a45]" aria-label="Pagination">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="flex items-center gap-1 px-3 py-1.5 rounded-full text-[#0a3fc4] disabled:opacity-40 hover:bg-white/60"
        >
          <ChevronLeft className="w-4 h-4" /> Prev
        </button>
        {pageList(page, totalPages).map((n, i) =>
          n === '…' ? (
            <span key={`e${i}`} className="px-1.5 text-slate-500">…</span>
          ) : (
            <button
              key={n}
              onClick={() => setPage(n)}
              className={`w-8 h-8 rounded-lg ${
                n === page ? 'bg-gradient-to-b from-[#1f5fe0] to-[#0a2f9e] text-white shadow-[0_4px_12px_rgba(10,47,158,0.5)]' : 'hover:bg-white/60'
              }`}
            >
              {n}
            </button>
          )
        )}
        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          className="flex items-center gap-1 px-3 py-1.5 rounded-full text-[#0a3fc4] disabled:opacity-40 hover:bg-white/60"
        >
          Next <ChevronRight className="w-4 h-4" />
        </button>
      </nav>

      {/* CTA */}
      <section className="rounded-3xl p-5 sm:p-8 flex flex-col md:flex-row bg-gradient-to-br from-[#16399a] via-[#1a46b8] to-[#0f2c7a] border border-white/50 shadow-[0_20px_50px_-14px_rgba(5,20,90,0.7),0_1px_0_rgba(255,255,255,0.5)_inset] items-center gap-6 overflow-hidden relative">
        <div className="w-full md:w-60 flex-shrink-0">
          <svg viewBox="0 0 240 150" className="w-full drop-shadow-[0_0_30px_rgba(56,189,248,0.6)]" aria-hidden="true">
            <defs>
              <linearGradient id="lap" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#1e4fd8" />
                <stop offset="1" stopColor="#0a2a7a" />
              </linearGradient>
            </defs>
            <rect x="40" y="12" width="160" height="100" rx="8" fill="#0b1b4d" stroke="#7dd3fc" strokeWidth="2" />
            <rect x="48" y="20" width="144" height="84" rx="4" fill="url(#lap)" />
            <text x="120" y="70" textAnchor="middle" fontSize="26" fontWeight="800" fill="#7dd3fc" fontFamily="monospace">&lt;/&gt;</text>
            <path d="M20 122 H220 L206 138 H34 Z" fill="#9fb4e8" opacity="0.85" />
            <rect x="100" y="124" width="40" height="4" rx="2" fill="#5b74b8" />
          </svg>
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl font-extrabold text-white">Want to see the full technical details?</h2>
          <p className="text-sm text-slate-200/90 mt-1.5">
            Explore in-depth case studies with architecture, challenges, decisions and outcomes.
          </p>
          <button
            onClick={onExploreCaseStudies}
            className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-b from-white to-[#cfe3ff] text-[#0a3fc4] text-sm font-bold border border-white shadow-[0_6px_24px_rgba(125,211,252,0.6)] hover:scale-[1.03] active:scale-[0.98] transition-all"
          >
            Explore Case Studies <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
