import React, { useState } from 'react';
import {
  Home, ChevronRight, ExternalLink, Code2, Monitor, Smartphone, Laptop, Database, Server, HardDrive,
  Cloud, Plug, Layers, Target, Lightbulb, Flag, Cpu, ArrowLeft, Check, Github, Globe, Crosshair,
  Users, Clock, Activity, BarChart3, Share2, ShieldCheck, Lock,
} from 'lucide-react';
import { allProjects } from '../data/projects.jsx';
import { projectDetails } from '../data/projectDetails.jsx';
import {
  NodeJsIcon, ExpressIcon, PostgresIcon, MySQLIcon, MongoIcon, RedisIcon, AWSIcon, DockerIcon,
  JenkinsIcon, WebSocketsIcon, ReactIcon, TypeScriptIcon, FastAPIIcon,
} from './TechIcons';

const techIcons = {
  'Node.js': NodeJsIcon, 'Express.js': ExpressIcon, PostgreSQL: PostgresIcon, MySQL: MySQLIcon, MongoDB: MongoIcon,
  Redis: RedisIcon, AWS: AWSIcon, Docker: DockerIcon, Jenkins: JenkinsIcon, WebSockets: WebSocketsIcon,
  React: ReactIcon, TypeScript: TypeScriptIcon, FastAPI: FastAPIIcon,
};

const infoIcons = { Domain: Globe, Role: Crosshair, 'Team Size': Users, Duration: Users, Status: Clock };
const tabs = ['Overview', 'Architecture', 'Database Design', 'My Contributions', 'Challenges'];
const storeIcons = [Database, Database, Lock, Cloud];
const clientIcons = [Monitor, Smartphone, Laptop];

/* ---------- small building blocks ---------- */
const Card = ({ icon: Icon, title, children, className = '' }) => (
  <section className={`glass-widget p-3.5 sm:p-5 ${className}`}>
    <div className="flex items-center gap-2.5 mb-3">
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#0a5cff] flex-shrink-0" />
      <h2 className="text-sm sm:text-xl font-extrabold text-[#0b1a45] tracking-tight">{title}</h2>
    </div>
    {children}
  </section>
);

const CheckList = ({ items, className = '' }) => (
  <ul className={`space-y-1.5 sm:space-y-2 ${className}`}>
    {items.map((o) => (
      <li key={o} className="flex items-start gap-2 text-[11px] sm:text-sm text-[#16275c] leading-snug">
        <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0a5cff] mt-0.5 flex-shrink-0" strokeWidth={3} />
        <span>{o}</span>
      </li>
    ))}
  </ul>
);

/* ---------- dashboard screenshot (dark sidebar + white content) ---------- */
function DashboardMock({ mock }) {
  const green = '#22c55e';
  return (
    <div className="rounded-[1.4rem] p-2 sm:p-3 bg-gradient-to-br from-white/35 to-white/10 border border-white/60 shadow-[0_0_40px_rgba(90,150,255,0.45),0_1px_0_rgba(255,255,255,0.7)_inset] backdrop-blur-xl">
      <div className="rounded-xl overflow-hidden flex bg-[#0b1650] aspect-[16/10] text-[7px] sm:text-[11px]">
        <div className="w-[27%] p-2 sm:p-3 flex flex-col gap-0.5 sm:gap-1 text-white">
          <div className="flex items-center gap-1 font-bold mb-1 sm:mb-2">
            <span className="w-3 h-3 sm:w-4 sm:h-4 rounded bg-sky-400" />
            <span className="truncate">{mock.logo || 'App'}</span>
          </div>
          {mock.menu.map((m, i) => (
            <div key={m} className={`flex items-center gap-1 px-1 sm:px-1.5 py-1 sm:py-1.5 rounded truncate ${i === 0 ? 'bg-white/15 font-semibold' : 'text-white/80'}`}>
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full border border-white/70 flex-shrink-0" />
              <span className="truncate">{m}</span>
            </div>
          ))}
        </div>
        <div className="flex-1 bg-[#f6f8ff] rounded-l-xl p-1.5 sm:p-3 flex flex-col gap-1.5 sm:gap-2 text-[#0b1a45]">
          <div className="font-bold text-[8px] sm:text-xs text-[#0b3fb0]">{mock.title}</div>
          <div className="grid grid-cols-4 gap-1">
            {mock.stats.map(([k, v], i) => (
              <div key={k} className="bg-white rounded p-1 sm:p-1.5 border border-slate-200 shadow-sm">
                <div className="truncate" style={{ color: i === 0 ? '#64748b' : green }}>{k}</div>
                <div className="font-extrabold text-[8px] sm:text-sm">{v}</div>
              </div>
            ))}
          </div>
          <div className="flex-1 min-h-0 flex gap-1.5">
            <div className="flex-1 bg-white rounded border border-slate-200 p-1">
              <svg viewBox="0 0 120 40" className="w-full h-full" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0 34 L12 28 L24 32 L36 18 L48 26 L60 14 L72 22 L84 10 L96 16 L108 8 L120 4" fill="none" stroke={green} strokeWidth="1.8" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
              </svg>
            </div>
            <div className="w-[26%] bg-white rounded border border-slate-200 p-1 flex flex-col justify-around">
              {[0, 1, 2].map((i) => (<div key={i} className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /><span className="h-1 flex-1 rounded bg-slate-200" /></div>))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1">
            {[0, 1, 2].map((i) => (<div key={i} className="bg-white rounded border border-slate-200 p-1 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full" style={{ background: i === 2 ? '#3b82f6' : green }} /><span className="h-1 flex-1 rounded bg-slate-200" /></div>))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- architecture diagram with elbow connectors ---------- */
function ArchDiagram({ a }) {
  const Box = ({ icon: Icon, name, sub, tone = 'glass-item' }) => (
    <div className={`${tone} rounded-lg sm:rounded-xl px-1.5 sm:px-3 py-1 sm:py-2 flex items-center gap-1 sm:gap-2 min-w-0 w-full`}>
      <Icon className="hidden min-[420px]:block w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#0a5cff] flex-shrink-0" />
      <div className="min-w-0 leading-tight">
        <div className="text-[8px] sm:text-xs font-bold text-[#0b1a45] break-words">{name}</div>
        {sub && <div className="text-[7px] sm:text-[11px] text-[#3a4a7a] break-words">({sub})</div>}
      </div>
    </div>
  );
  const Fan = ({ n, dir }) => {
    const ys = Array.from({ length: n }, (_, i) => ((i + 0.5) / n) * 100);
    return (
      <div className="relative w-6 sm:w-14 self-stretch flex-shrink-0">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full" aria-hidden="true">
          {ys.map((y) => (
            <path key={y} d={dir === 'in' ? `M0 ${y} H50 V50 H100` : `M0 50 H50 V${y} H100`} fill="none" stroke="#1e3a8a" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
          ))}
        </svg>
        {dir === 'out' && ys.map((y) => (
          <ChevronRight key={y} className="absolute -right-1 w-3 h-3 text-[#1e3a8a] -translate-y-1/2" style={{ top: `${y}%` }} />
        ))}
        {dir === 'in' && <ChevronRight className="absolute -right-1 top-1/2 w-3 h-3 text-[#1e3a8a] -translate-y-1/2" />}
      </div>
    );
  };
  return (
    <div className="flex items-stretch gap-0 h-[150px] sm:h-[210px]">
      <div className="w-[27%] grid gap-1.5" style={{ gridTemplateRows: `repeat(${a.clients.length}, 1fr)` }}>
        {a.clients.map((c, i) => <div key={c} className="flex items-center"><Box icon={clientIcons[i % 3]} name={c} /></div>)}
      </div>
      <Fan n={a.clients.length} dir="in" />
      <div className="w-[17%] flex items-center"><Box icon={ShieldCheck} name={a.gateway[0]} sub={a.gateway[1]} /></div>
      <div className="w-4 sm:w-8 flex items-center justify-center flex-shrink-0">
        <div className="w-full h-px bg-[#1e3a8a] relative"><ChevronRight className="absolute -right-1 -top-1.5 w-3 h-3 text-[#1e3a8a]" /></div>
      </div>
      <div className="w-[19%] flex items-center"><Box icon={Cpu} name={a.service[0]} sub={a.service[1]} tone="bg-gradient-to-b from-[#e3f9e8] to-[#c9f1d3] border border-emerald-300/70 shadow-sm" /></div>
      <Fan n={a.stores.length} dir="out" />
      <div className="flex-1 grid gap-1 min-w-0" style={{ gridTemplateRows: `repeat(${a.stores.length}, 1fr)` }}>
        {a.stores.map(([n, s], i) => <div key={n} className="flex items-center"><Box icon={storeIcons[i % 4]} name={n} sub={s} /></div>)}
      </div>
    </div>
  );
}

export default function ProjectDetailPage({ projectId }) {
  const [tab, setTab] = useState('Overview');
  const project = allProjects.find((p) => p.id === projectId);
  const d = projectDetails[projectId];

  if (!project || !d) {
    return (
      <div className="glass-widget p-8 text-center text-[#0b1a45]">
        <p className="font-semibold">Project not found.</p>
        <a href="#/projects" className="text-[#0a5cff] font-semibold inline-flex items-center gap-1 mt-3"><ArrowLeft className="w-4 h-4" /> Back to all projects</a>
      </div>
    );
  }

  const Overview = () => (
    <div className="grid grid-cols-2 gap-3 sm:gap-5">
      <Card icon={Target} title="Overview">
        <p className="text-[11px] sm:text-sm text-[#16275c] leading-relaxed">{d.overview}</p>
      </Card>
      <Card icon={BarChart3} title="Business Outcome">
        <CheckList items={d.outcomes} />
      </Card>

      <Card icon={Layers} title="Key Features">
        <CheckList items={d.features} />
      </Card>
      <Card icon={Code2} title="Tech Stack">
        <div className="grid grid-cols-4 gap-1.5 sm:gap-2.5">
          {d.tech.map((t) => {
            const I = techIcons[t];
            return (
              <div key={t} className="glass-item rounded-lg sm:rounded-xl py-1.5 sm:py-2.5 px-0.5 flex flex-col items-center gap-1 text-center">
                {I ? <I /> : <span className="w-6 h-6 rounded-lg bg-slate-100 border border-slate-300 text-[10px] font-bold flex items-center justify-center text-slate-700">{t.slice(0, 2)}</span>}
                <span className="text-[7px] sm:text-xs font-bold text-[#0b1a45] leading-tight break-words">{t}</span>
              </div>
            );
          })}
        </div>
      </Card>

      <Card icon={Share2} title="System Architecture" className="col-span-2">
        <ArchDiagram a={d.architecture} />
      </Card>

      <Card icon={Flag} title="Challenges">
        <CheckList items={d.challenges} />
      </Card>
      <Card icon={Lightbulb} title="Key Learnings">
        <CheckList items={d.learnings} />
      </Card>
    </div>
  );

  const content = {
    Overview: <Overview />,
    Architecture: (
      <Card icon={Share2} title="System Architecture">
        <ArchDiagram a={d.architecture} />
        <ul className="mt-4 space-y-2">
          {d.archNotes.map((n) => <li key={n} className="text-xs sm:text-sm text-[#16275c] flex gap-2"><ChevronRight className="w-4 h-4 text-[#0a5cff] mt-0.5 flex-shrink-0" />{n}</li>)}
        </ul>
      </Card>
    ),
    'Database Design': (
      <Card icon={Database} title="Database Design">
        <div className="grid sm:grid-cols-2 gap-3">
          {d.database.map(([t, desc]) => (
            <div key={t} className="glass-item rounded-xl p-3">
              <div className="text-sm font-bold text-[#0b1a45] font-mono">{t}</div>
              <p className="text-xs text-[#26356b] mt-1 leading-snug">{desc}</p>
            </div>
          ))}
        </div>
      </Card>
    ),
    'My Contributions': (
      <Card icon={Target} title="My Contributions">
        <CheckList items={d.contributions} />
      </Card>
    ),
    Challenges: (
      <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
        <Card icon={Flag} title="Challenges"><CheckList items={d.challenges} /></Card>
        <Card icon={Lightbulb} title="Key Learnings"><CheckList items={d.learnings} /></Card>
      </div>
    ),
  };

  return (
    <div className="flex flex-col gap-4 sm:gap-5">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs sm:text-sm text-white" aria-label="Breadcrumb">
        <a href="#/" className="hover:text-sky-200"><Home className="w-4 h-4" /></a>
        <ChevronRight className="w-3.5 h-3.5 opacity-80" />
        <a href="#/projects" className="font-semibold hover:text-sky-200">Projects</a>
        <ChevronRight className="w-3.5 h-3.5 opacity-80" />
        <span className="font-semibold">{project.title}</span>
      </nav>

      {/* Title row */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
          <div className={`w-14 h-14 sm:w-[72px] sm:h-[72px] rounded-2xl ${project.iconBg} border border-white/40 flex items-center justify-center shadow-[0_8px_24px_rgba(80,40,200,0.5)] flex-shrink-0 [&>svg]:w-7 [&>svg]:h-7 sm:[&>svg]:w-9 sm:[&>svg]:h-9`}>
            {project.icon}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2.5 flex-wrap">
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-none">{project.title}</h1>
              <span className="px-3 py-0.5 rounded-full text-xs sm:text-sm font-semibold bg-emerald-300 text-emerald-900">{project.tag}</span>
            </div>
            <p className="text-sm sm:text-lg text-white/90 mt-1">{d.subtitle}</p>
          </div>
        </div>
        <div className="flex gap-2.5">
          <a href={d.liveUrl} target="_blank" rel="noreferrer" className="glass-btn-secondary inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold">
            Visit Live Site <ExternalLink className="w-4 h-4" />
          </a>
          <a href={d.codeUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#071a5e]/70 border border-sky-300/70 shadow-[0_0_18px_rgba(56,189,248,0.35)] hover:scale-[1.03] transition-transform">
            <Github className="w-4 h-4" /> View Code
          </a>
        </div>
      </div>

      {/* Screenshot + info */}
      <div className="grid grid-cols-1 min-[560px]:grid-cols-5 gap-4 sm:gap-5">
        <div className="min-[560px]:col-span-3"><DashboardMock mock={d.mock} /></div>
        <aside className="glass-dark-card rounded-3xl p-4 sm:p-6 min-[560px]:col-span-2 flex flex-col">
          <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-3 sm:mb-4">Project Info</h2>
          <dl className="flex-1 flex flex-col justify-around gap-3">
            {Object.entries(d.info).map(([k, v]) => {
              const I = infoIcons[k] || Activity;
              return (
                <div key={k} className="grid grid-cols-[7.2rem_1fr] sm:grid-cols-[8.5rem_1fr] gap-2 items-center text-xs sm:text-sm">
                  <dt className="flex items-center gap-2 font-bold text-white"><I className="w-4 h-4 sm:w-5 sm:h-5 text-sky-200 flex-shrink-0" />{k}</dt>
                  <dd className="text-white/95">
                    {k === 'Status' ? <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-300 text-emerald-900">{v}</span> : v}
                  </dd>
                </div>
              );
            })}
          </dl>
        </aside>
      </div>

      {/* Tabs */}
      <div className="glass-widget !rounded-full p-1.5 flex gap-1 overflow-x-auto no-scrollbar" role="tablist">
        {tabs.map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={tab === t}
            onClick={() => setTab(t)}
            className={`whitespace-nowrap flex-1 px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
              tab === t ? 'bg-gradient-to-b from-[#2f8bff] to-[#0052e6] text-white shadow-[0_4px_14px_rgba(0,82,230,0.55)]' : 'text-[#0b1a45] hover:bg-white/60'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {content[tab]}
    </div>
  );
}
