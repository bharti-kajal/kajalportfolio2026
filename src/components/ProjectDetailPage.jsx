import React, { useState } from 'react';
import {
  Home, ChevronRight, ExternalLink, Code2, Monitor, Smartphone, Settings, Database, Server,
  HardDrive, Cloud, Plug, Layers, Target, Star, Lightbulb, Wrench, ListChecks, Cpu, ArrowLeft, CheckCircle2,
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

const tabs = ['Overview', 'Architecture', 'Database Design', 'My Contributions', 'Challenges'];
const featureIcons = [ListChecks, Cpu, Target, Layers];
const storeIcons = [Database, HardDrive, Cloud, Plug];
const clientIcons = [Monitor, Smartphone, Settings];

const Card = ({ icon: Icon, title, children, className = '' }) => (
  <section className={`glass-widget p-3 sm:p-5 ${className}`}>
    <div className="flex items-center gap-2.5 mb-3">
      <Icon className="w-5 h-5 text-[#0a5cff]" />
      <h2 className="text-sm sm:text-lg font-bold text-[#0b1a45]">{title}</h2>
    </div>
    {children}
  </section>
);

function DashboardMock({ mock, accent }) {
  return (
    <div className="rounded-xl overflow-hidden border border-white/30 bg-[#f4f7ff] shadow-[0_12px_30px_-10px_rgba(0,10,60,0.7)] flex text-[#0b1a45] text-[8px] sm:text-[10px] aspect-[16/10] lg:aspect-[16/8]">
      <div className="w-[26%] bg-white/90 border-r border-slate-200 p-2 flex flex-col gap-1">
        <div className="flex items-center gap-1 font-bold mb-1">
          <span className="w-2.5 h-2.5 rounded-sm" style={{ background: accent }} />
          <span className="truncate">{mock.title}</span>
        </div>
        {mock.menu.map((m, i) => (
          <div key={m} className={`px-1.5 py-1 rounded truncate ${i === 0 ? 'bg-[#e6eeff] text-[#0a5cff] font-semibold' : 'text-slate-500'}`}>{m}</div>
        ))}
      </div>
      <div className="flex-1 p-2 flex flex-col gap-2">
        <div className="font-bold">{mock.title}</div>
        <div className="grid grid-cols-4 gap-1">
          {mock.stats.map(([k, v]) => (
            <div key={k} className="bg-white rounded p-1 border border-slate-200">
              <div className="text-slate-500 truncate">{k}</div>
              <div className="font-bold text-[9px] sm:text-xs">{v}</div>
            </div>
          ))}
        </div>
        <div className="flex-1 bg-white rounded border border-slate-200 p-1.5">
          <svg viewBox="0 0 120 40" className="w-full h-full" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 32 L15 26 L30 29 L48 16 L66 22 L84 10 L102 14 L120 6" fill="none" stroke={accent} strokeWidth="2" strokeLinejoin="round" />
            <path d="M0 36 L20 33 L40 34 L60 28 L80 30 L100 24 L120 22" fill="none" stroke="#94a3b8" strokeWidth="1.2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ArchDiagram({ a }) {
  const Box = ({ icon: Icon, name, sub, tone = 'bg-white' }) => (
    <div className={`${tone} rounded-lg border border-[#c9d8fb] px-1.5 sm:px-2 py-1.5 flex items-center gap-1 sm:gap-1.5 shadow-sm min-w-0`}>
      <Icon className="hidden min-[420px]:block w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0a5cff] flex-shrink-0" />
      <div className="min-w-0 leading-tight">
        <div className="text-[9px] sm:text-xs font-semibold text-[#0b1a45] break-words">{name}</div>
        {sub && <div className="text-[8px] sm:text-[10px] text-slate-500 break-words">{sub}</div>}
      </div>
    </div>
  );
  const Arrow = () => <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-[#0a5cff] flex-shrink-0" />;
  return (
    <div className="flex items-center gap-1 sm:gap-3">
      <div className="flex-1 flex flex-col gap-1.5 min-w-0">
        {a.clients.map((c, i) => <Box key={c} icon={clientIcons[i % 3]} name={c} />)}
      </div>
      <Arrow />
      <div className="flex-1 min-w-0"><Box icon={Server} name={a.gateway[0]} sub={a.gateway[1]} /></div>
      <Arrow />
      <div className="flex-1 min-w-0"><Box icon={Cpu} name={a.service[0]} sub={a.service[1]} tone="bg-[#e3f7e6]" /></div>
      <Arrow />
      <div className="flex-1 flex flex-col gap-1.5 min-w-0">
        {a.stores.map(([n, s], i) => <Box key={n} icon={storeIcons[i % 4]} name={n} sub={s} />)}
      </div>
    </div>
  );
}

export default function ProjectDetailPage({ projectId, onOpenCaseStudy }) {
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

  const isSwiftDial = project.id === 'swiftdial';
  const projectTabs = isSwiftDial
    ? ['Overview', '10-Stage Scaling Roadmap', 'Architecture', 'Database Design', 'My Contributions', 'Challenges']
    : tabs;

  const accent = project.thumb?.accent || '#38bdf8';

  const Overview = () => (
    <div className="grid grid-cols-2 gap-3 sm:gap-5">
      <Card icon={Star} title="Overview">
        <p className="text-xs sm:text-sm text-[#26356b] leading-relaxed">{d.overview}</p>
      </Card>
      <Card icon={Target} title="Business Outcome">
        <ul className="space-y-1.5">
          {d.outcomes.map((o) => (
            <li key={o} className="flex items-start gap-2 text-xs sm:text-sm text-[#26356b]"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />{o}</li>
          ))}
        </ul>
      </Card>

      <Card icon={ListChecks} title="Key Features">
        <ul className="space-y-2.5">
          {d.features.map((f, i) => {
            const I = featureIcons[i % featureIcons.length];
            return (
              <li key={f} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#26356b]">
                <span className="w-7 h-7 rounded-lg bg-[#e6eeff] flex items-center justify-center flex-shrink-0"><I className="w-4 h-4 text-[#0a5cff]" /></span>{f}
              </li>
            );
          })}
        </ul>
      </Card>
      <Card icon={Code2} title="Tech Stack">
        <div className="grid grid-cols-4 gap-1.5 sm:gap-3">
          {d.tech.map((t) => {
            const I = techIcons[t];
            return (
              <div key={t} className="glass-item rounded-lg sm:rounded-xl py-2 px-0.5 flex flex-col items-center gap-1.5 text-center">
                {I ? <I /> : <span className="w-6 h-6 rounded-lg bg-slate-100 border border-slate-300 text-[10px] font-bold flex items-center justify-center text-slate-700">{t.slice(0, 2)}</span>}
                <span className="text-[7px] sm:text-xs font-semibold text-[#0b1a45] leading-tight break-words">{t}</span>
              </div>
            );
          })}
        </div>
      </Card>

      <Card icon={Layers} title="System Architecture" className="col-span-2">
        <ArchDiagram a={d.architecture} />
      </Card>

      <Card icon={Wrench} title="Challenges">
        <ul className="space-y-1.5">
          {d.challenges.map((c) => <li key={c} className="flex items-start gap-2 text-xs sm:text-sm text-[#26356b]"><CheckCircle2 className="w-4 h-4 text-[#0a5cff] mt-0.5 flex-shrink-0" />{c}</li>)}
        </ul>
      </Card>
      <Card icon={Lightbulb} title="Key Learnings">
        <ul className="space-y-1.5">
          {d.learnings.map((c) => <li key={c} className="flex items-start gap-2 text-xs sm:text-sm text-[#26356b]"><CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />{c}</li>)}
        </ul>
      </Card>
    </div>
  );

  const content = {
    Overview: <Overview />,
    '10-Stage Scaling Roadmap': (
      <Card icon={Cpu} title="SwiftDial 10-Stage Scaling Roadmap (10 to 1 Crore Users/Day)">
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-bold text-[#0a5cff] uppercase">Senior Backend Architecture</span>
              <h4 className="text-sm sm:text-base font-extrabold text-[#0b1a45]">From 10 Users/Day to 1 Crore (10M) Users/Day</h4>
              <p className="text-xs text-[#26356b]">What breaks, why it breaks, and the 5 diagnostic questions asked at every scaling step.</p>
            </div>
            {onOpenCaseStudy && (
              <button
                onClick={onOpenCaseStudy}
                className="px-4 py-2 rounded-xl bg-[#0066ff] hover:bg-[#0052e6] text-white text-xs font-bold shadow-md flex items-center gap-1.5 self-start sm:self-auto flex-shrink-0"
              >
                <span>Open Full Master Case Study</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse min-w-[500px]">
              <thead>
                <tr className="border-b border-slate-200 text-[#0a5cff]">
                  <th className="p-2 font-bold">Stage</th>
                  <th className="p-2 font-bold">Traffic</th>
                  <th className="p-2 font-bold">Core Bottleneck</th>
                  <th className="p-2 font-bold">Engineering Fix</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-[#26356b]">
                {d.scalingRoadmap && d.scalingRoadmap.map((row) => (
                  <tr key={row.stage} className="hover:bg-blue-50/50">
                    <td className="p-2 font-bold text-[#0b1a45]">Stage {row.stage}</td>
                    <td className="p-2 font-semibold text-emerald-700">{row.traffic}</td>
                    <td className="p-2 font-medium">{row.bottleneck}</td>
                    <td className="p-2 font-mono text-[11px] text-[#0a5cff]">{row.fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    ),
    Architecture: (
      <Card icon={Layers} title="System Architecture">
        <ArchDiagram a={d.architecture} />
        <ul className="mt-4 space-y-2">
          {d.archNotes.map((n) => <li key={n} className="text-xs sm:text-sm text-[#26356b] flex gap-2"><ChevronRight className="w-4 h-4 text-[#0a5cff] mt-0.5 flex-shrink-0" />{n}</li>)}
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
      <Card icon={Star} title="My Contributions">
        <ul className="space-y-2.5">
          {d.contributions.map((c) => <li key={c} className="flex items-start gap-2 text-xs sm:text-sm text-[#26356b]"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />{c}</li>)}
        </ul>
      </Card>
    ),
    Challenges: (
      <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
        <Card icon={Wrench} title="Challenges">
          <ul className="space-y-2">{d.challenges.map((c) => <li key={c} className="flex items-start gap-2 text-xs sm:text-sm text-[#26356b]"><CheckCircle2 className="w-4 h-4 text-[#0a5cff] mt-0.5 flex-shrink-0" />{c}</li>)}</ul>
        </Card>
        <Card icon={Lightbulb} title="Key Learnings">
          <ul className="space-y-2">{d.learnings.map((c) => <li key={c} className="flex items-start gap-2 text-xs sm:text-sm text-[#26356b]"><CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />{c}</li>)}</ul>
        </Card>
      </div>
    ),
  };

  return (
    <div className="flex flex-col gap-4 sm:gap-5">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-200" aria-label="Breadcrumb">
        <a href="#/" className="hover:text-white"><Home className="w-4 h-4" /></a>
        <ChevronRight className="w-3.5 h-3.5 opacity-70" />
        <a href="#/projects" className="hover:text-white">Projects</a>
        <ChevronRight className="w-3.5 h-3.5 opacity-70" />
        <span className="font-semibold text-white">{project.title}</span>
      </nav>

      {/* Header + info */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-5">
        <section className="glass-dark-card rounded-3xl p-4 sm:p-6 lg:col-span-3 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${project.iconBg} flex items-center justify-center shadow-lg flex-shrink-0 [&>svg]:w-6 [&>svg]:h-6`}>{project.icon}</div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{project.title}</h1>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-400/90 text-emerald-950">{project.tag}</span>
              </div>
              <p className="text-sm text-slate-200">{d.subtitle}</p>
            </div>
          </div>
          <DashboardMock mock={d.mock} accent={accent} />
          <div className="flex flex-wrap gap-2.5">
            {isSwiftDial && onOpenCaseStudy && (
              <button
                onClick={onOpenCaseStudy}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#0066ff] to-[#00d2ff] text-white text-sm font-bold shadow-[0_4px_18px_rgba(0,102,255,0.6)] hover:scale-[1.03] transition-transform border border-white/30"
              >
                <span>⚡ 10-Stage Scaling Case Study</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            )}
            <a href={d.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/90 text-[#0a4fd6] text-sm font-semibold hover:scale-[1.03] transition-transform">
              Visit Live Site <ExternalLink className="w-4 h-4" />
            </a>
            <a href={d.codeUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-btn-secondary text-sm font-semibold">
              <Code2 className="w-4 h-4" /> View Code
            </a>
          </div>
        </section>

        <aside className="glass-dark-card rounded-3xl p-4 sm:p-6 lg:col-span-2 lg:self-start">
          <h2 className="text-lg font-bold text-white mb-3">Project Info</h2>
          <dl className="space-y-3">
            {Object.entries(d.info).map(([k, v]) => (
              <div key={k} className="grid grid-cols-[6.5rem_1fr] gap-2 text-sm items-start">
                <dt className="text-slate-300">{k}</dt>
                <dd className="text-white font-semibold">
                  {k === 'Status' ? <span className="px-2.5 py-0.5 rounded-full text-xs bg-emerald-400/90 text-emerald-950">{v}</span> : v}
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>

      {/* Tabs */}
      <div className="glass-dark-card rounded-full p-1.5 flex gap-1 overflow-x-auto no-scrollbar" role="tablist">
        {projectTabs.map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={tab === t}
            onClick={() => setTab(t)}
            className={`whitespace-nowrap flex-1 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              tab === t ? 'bg-gradient-to-b from-[#2f8bff] to-[#0052e6] text-white shadow-[0_4px_14px_rgba(0,82,230,0.55)]' : 'text-slate-100 hover:bg-white/10'
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
