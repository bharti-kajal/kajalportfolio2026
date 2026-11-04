import React, { useState } from 'react';
import {
  Home, ChevronRight, ExternalLink, Code2, Database, Server, Cloud, Plug, Layers, Target, Star, Lightbulb,
  Wrench, ListChecks, Cpu, ArrowLeft, CheckCircle2, PhoneCall, Headphones, Volume2, Bot, Wallet, Users, Bell,
  Shield, Zap, Workflow, Check, Monitor, Smartphone, Settings, Laptop, Building2, Network, UserCheck, ShieldCheck,
  BadgeCheck, UsersRound, FileCheck, FileText, TrendingUp, Phone, MessageSquare, BookOpen, TriangleAlert,
  LayoutDashboard, Link2, BarChart3, ChevronDown, Table2, ClipboardList, Megaphone, Circle,
} from 'lucide-react';
import { allProjects, projectIconComponents } from '../data/projects.jsx';
import { projectDetails } from '../data/projectDetails.jsx';
import { projectShowcase, techRoles } from '../data/projectShowcase.js';
import {
  NodeJsIcon, ExpressIcon, PostgresIcon, MySQLIcon, MongoIcon, RedisIcon, AWSIcon, DockerIcon,
  JenkinsIcon, WebSocketsIcon, ReactIcon, TypeScriptIcon, FastAPIIcon,
} from './TechIcons';

const techIcons = {
  'Node.js': NodeJsIcon, 'Express.js': ExpressIcon, PostgreSQL: PostgresIcon, MySQL: MySQLIcon, MongoDB: MongoIcon,
  Redis: RedisIcon, AWS: AWSIcon, Docker: DockerIcon, Jenkins: JenkinsIcon, WebSockets: WebSocketsIcon,
  React: ReactIcon, TypeScript: TypeScriptIcon, FastAPI: FastAPIIcon,
};

const iconMap = {
  users: Users, users2: UsersRound, idcard: FileCheck, badge: BadgeCheck, shield: ShieldCheck, layers: Layers, zap: Zap,
  phone: Phone, trend: TrendingUp, building: Building2, file: FileText, alert: TriangleAlert, chat: MessageSquare,
  bell: Bell, book: BookOpen, wallet: Wallet,
};

const tabIcons = { Architecture: Network, 'Database Design': Database, 'My Contributions': UserCheck, Challenges: Target };
const tabs = ['Overview', 'Architecture', 'Database Design', 'My Contributions', 'Challenges'];

const brandBg = {
  swiftdial: 'linear-gradient(135deg,#0f5a43,#0f5a43)',
  upniva: 'linear-gradient(135deg,#19b6d8,#0a7fd6)',
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

/* ---------- shared bits ---------- */
const Card = ({ icon: Icon, title, sub, children, className = '' }) => (
  <section className={`glass-light-card rounded-[22px] p-5 sm:p-6 ${className}`}>
    <div className={`flex items-center gap-3 ${sub ? 'mb-0.5' : 'mb-4'}`}>
      {Icon && <Icon className="w-[22px] h-[22px] text-[#0f5a43] flex-shrink-0" strokeWidth={1.9} />}
      <h2 className="text-lg font-extrabold text-[#14261e] tracking-tight">{title}</h2>
    </div>
    {sub && <p className="text-[13px] text-[#5d6f64] mb-4 ml-[34px]">{sub}</p>}
    {children}
  </section>
);

function CheckCircle({ tone = 'green' }) {
  const c = tone === 'green' ? 'text-[#1fa36a] border-[#1fa36a]' : tone === 'blue' ? 'text-[#0f5a43] border-[#0f5a43]' : 'text-[#e49b13] border-[#e49b13]';
  return (
    <span className={`w-5 h-5 rounded-full border-[1.6px] flex items-center justify-center flex-shrink-0 ${c}`}>
      <Check className="w-3 h-3" strokeWidth={3} />
    </span>
  );
}

/* ---------- hero dashboard preview (white mini app) ---------- */
function HeroDashboard({ title, hero, Icon, iconBg, image }) {
  if (image) {
    return (
      <div style={{ containerType: 'inline-size' }} className="w-full">
        <div
          className="w-full bg-[#fcf8ee] text-[#14261e] relative overflow-hidden rounded-[1.4em] border border-[#f3ead6] shadow-[0_1em_2.2em_-.8em_rgba(0,10,80,.5)]"
          style={{ aspectRatio: '531 / 243' }}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    );
  }
  const { menu, stats, chart } = hero;
  const n = chart.values.length;
  const pts = chart.values.map((v, i) => [3 + (i / (n - 1)) * 94, 94 - v * 88]);
  const line = pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x} ${y}`).join(' ');
  return (
    <div style={{ containerType: 'inline-size' }} className="w-full">
      <div
        className="w-full bg-[#fcf8ee] text-[#14261e] flex overflow-hidden"
        style={{ fontSize: '1.6cqw', aspectRatio: '531 / 243', borderRadius: '1.4em', boxShadow: '0 1em 2.2em -.8em rgba(0,10,80,.6), 0 0 0 1px rgba(220,230,255,.9)' }}
      >
        <div className="bg-white border-r border-[#f3ead6] flex flex-col" style={{ width: '24%', padding: '1em .8em', gap: '.25em' }}>
          <div className="flex items-center font-extrabold" style={{ gap: '.5em', marginBottom: '.9em', fontSize: '.95em' }}>
            <span className="flex items-center justify-center text-white flex-shrink-0" style={{ width: '1.7em', height: '1.7em', borderRadius: '.45em', background: iconBg }}>
              {Icon && <Icon style={{ width: '1em', height: '1em' }} />}
            </span>
            <span className="truncate">{title}</span>
          </div>
          {menu.map((m, i) => {
            const I = { Dashboard: LayoutDashboard, Leads: Users, KYC: ShieldCheck, Credit: Layers, Disbursal: Wallet, Reports: BarChart3, Settings, Campaigns: Megaphone, Contacts: Users, Calls: Phone, Billing: Wallet, Entities: Building2, Compliances: ClipboardList, Tasks: ClipboardList, Documents: FileText, Conversations: MessageSquare, Broadcasts: Megaphone, Audience: UsersRound, Templates: FileText, Analytics: BarChart3, Students: Users, Institutes: Building2, Courses: BookOpen, Admissions: ClipboardList, Exams: FileText, Referrals: Users, Applications: FileCheck, Disbursals: Wallet, Payouts: Wallet }[m] || Circle;
            return (
              <div key={m} className={`flex items-center truncate ${i === 0 ? 'font-semibold text-[#0f5a43] bg-[#f3ead6]' : 'text-[#5d6f64]'}`} style={{ gap: '.6em', padding: '.5em .6em', borderRadius: '.45em', fontSize: '.85em' }}>
                <I style={{ width: '1.05em', height: '1.05em', flexShrink: 0 }} />
                <span className="truncate">{m}</span>
              </div>
            );
          })}
        </div>
        <div className="flex-1 min-w-0 flex flex-col" style={{ padding: '.9em 1.1em', gap: '.8em' }}>
          <div className="flex items-center justify-between">
            <b style={{ fontSize: '1em' }}>Dashboard</b>
            <span className="flex items-center" style={{ gap: '.8em' }}>
              <Bell style={{ width: '1.15em', height: '1.15em' }} className="text-[#5d6f64]" />
              <span className="rounded-full bg-[#efe6d2] text-[#0f5a43] flex items-center justify-center" style={{ width: '1.7em', height: '1.7em' }}>
                <Users style={{ width: '1em', height: '1em' }} />
              </span>
            </span>
          </div>
          <div className="grid grid-cols-4" style={{ gap: '.6em' }}>
            {stats.map((s) => {
              const SI = iconMap[s.icon] || Users;
              return (
                <div key={s.label} className="bg-white border border-[#f3ead6] flex items-center" style={{ borderRadius: '.7em', padding: '.6em .7em', gap: '.6em' }}>
                  <span className="flex items-center justify-center flex-shrink-0" style={{ width: '2.1em', height: '2.1em', borderRadius: '.55em', background: `${s.color}22`, color: s.color }}>
                    <SI style={{ width: '1.15em', height: '1.15em' }} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[#8a978e] truncate" style={{ fontSize: '.72em' }}>{s.label}</span>
                    <span className="block font-extrabold" style={{ fontSize: '1.2em', lineHeight: 1.15 }}>{s.value}</span>
                  </span>
                </div>
              );
            })}
          </div>
          <div className="flex-1 min-h-0 bg-white border border-[#f3ead6] flex flex-col" style={{ borderRadius: '.8em', padding: '.7em .9em', gap: '.4em' }}>
            <div className="flex items-center justify-between">
              <b style={{ fontSize: '.88em' }}>{chart.title}</b>
              <span className="inline-flex items-center border border-[#efe6d2] text-[#5d6f64]" style={{ gap: '.3em', padding: '.2em .6em', borderRadius: '.45em', fontSize: '.72em' }}>
                {chart.range} <ChevronDown style={{ width: '1em', height: '1em' }} />
              </span>
            </div>
            <div className="flex-1 min-h-0 flex" style={{ gap: '.6em' }}>
              <div className="flex flex-col justify-between text-[#8a978e] text-right" style={{ fontSize: '.68em' }}>
                {chart.yLabels.map((y) => <span key={y}>{y}</span>)}
              </div>
              <div className="flex-1 flex flex-col min-w-0" style={{ gap: '.3em' }}>
                <div className="relative flex-1">
                  <div className="absolute inset-0 flex flex-col justify-between" aria-hidden="true">
                    {chart.yLabels.map((y) => <span key={y} className="block border-t border-[#f3ead6]" />)}
                  </div>
                  <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full overflow-visible" aria-hidden="true">
                    <path d={line} fill="none" stroke={chart.color} strokeWidth="2.2" vectorEffect="non-scaling-stroke" strokeLinejoin="round" strokeLinecap="round" />
                  </svg>
                  {pts.map(([x, y], i) => (
                    <span key={i} className="absolute rounded-full bg-white" style={{ left: `${x}%`, top: `${y}%`, width: '.75em', height: '.75em', transform: 'translate(-50%,-50%)', border: `.2em solid ${chart.color}` }} />
                  ))}
                </div>
                <div className="flex justify-between text-[#8a978e]" style={{ fontSize: '.68em', padding: '0 4%' }}>
                  {chart.months.map((m) => <span key={m}>{m}</span>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- architecture diagram ---------- */
function StoreIcon({ name }) {
  const wrap = 'w-5 h-5 flex items-center justify-center flex-shrink-0 [&>*]:w-5 [&>*]:h-5';
  if (/mongo/i.test(name)) return <span className={wrap}><MongoIcon /></span>;
  if (/redis/i.test(name)) return <span className={wrap}><RedisIcon /></span>;
  if (/postgres/i.test(name)) return <span className={wrap}><PostgresIcon /></span>;
  if (/mysql/i.test(name)) return <span className={wrap}><MySQLIcon /></span>;
  if (/s3|storage/i.test(name)) return <Cloud className="w-5 h-5 text-[#1b7a5a] flex-shrink-0" strokeWidth={1.8} />;
  return <Link2 className="w-5 h-5 text-[#0f5a43] flex-shrink-0" strokeWidth={1.9} />;
}

function clientIcon(name) {
  if (/mobile/i.test(name)) return Smartphone;
  if (/admin/i.test(name)) return Settings;
  if (/partner|client|student/i.test(name)) return Building2;
  return Laptop;
}

function Bracket({ n, dir }) {
  // draws connectors between a column of n boxes (each row = 100/n %) and a single box centred vertically
  const ys = Array.from({ length: n }, (_, i) => ((i + 0.5) / n) * 100);
  const first = ys[0];
  const last = ys[n - 1];
  return (
    <div className="relative flex-shrink-0 self-stretch" style={{ width: 34 }}>
      <svg viewBox="0 0 34 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full" aria-hidden="true">
        <g stroke="#0f5a43" strokeWidth="1.4" fill="none" vectorEffect="non-scaling-stroke" strokeLinecap="round">
          {dir === 'in' ? (
            <>
              {ys.map((y) => <path key={y} d={`M0 ${y} H17`} vectorEffect="non-scaling-stroke" />)}
              <path d={`M17 ${first} V${last}`} vectorEffect="non-scaling-stroke" />
              <path d="M17 50 H34" vectorEffect="non-scaling-stroke" />
            </>
          ) : (
            <>
              <path d="M0 50 H17" vectorEffect="non-scaling-stroke" />
              <path d={`M17 ${first} V${last}`} vectorEffect="non-scaling-stroke" />
              {ys.map((y) => <path key={y} d={`M17 ${y} H34`} vectorEffect="non-scaling-stroke" />)}
            </>
          )}
        </g>
      </svg>
      {dir === 'out' && ys.map((y) => (
        <span key={y} className="absolute right-0 -translate-y-1/2 border-y-[4px] border-y-transparent border-l-[6px] border-l-[#0f5a43]" style={{ top: `${y}%` }} />
      ))}
    </div>
  );
}

function Arrow() {
  return (
    <div className="flex items-center flex-shrink-0 self-center" style={{ width: 'clamp(28px,6vw,86px)' }} aria-hidden="true">
      <span className="flex-1 h-[1.4px] bg-[#0f5a43]" />
      <span className="border-y-[4px] border-y-transparent border-l-[6px] border-l-[#0f5a43]" />
    </div>
  );
}

function ArchDiagram({ a }) {
  const box = 'bg-white/90 rounded-xl border border-[#ece1c9] shadow-[0_2px_6px_rgba(80,55,10,0.1)]';
  const fix = (s) => s.replace('S3 / Storage', 'S3 Storage').replace(/^External Integration$/, 'External Integrations');
  return (
    <div className="overflow-x-auto no-scrollbar">
      <div className="flex items-stretch min-w-[640px]">
        <div className="grid flex-1 min-w-0" style={{ gridTemplateRows: `repeat(${a.clients.length}, 1fr)` }}>
          {a.clients.map((c) => {
            const CI = clientIcon(c);
            return (
              <div key={c} className="py-[5px]">
                <div className={`${box} h-full px-4 flex items-center gap-3 min-h-[40px]`}>
                  <CI className="w-5 h-5 text-[#0f5a43] flex-shrink-0" strokeWidth={1.8} />
                  <span className="text-[13px] font-bold text-[#14261e]">{c}</span>
                </div>
              </div>
            );
          })}
        </div>
        <Bracket n={a.clients.length} dir="in" />
        <div className="self-center">
          <div className={`${box} px-4 py-2.5 flex items-center gap-3 w-[170px]`}>
            <Server className="w-6 h-6 text-[#0f5a43] flex-shrink-0" strokeWidth={1.7} />
            <span className="leading-tight">
              <span className="block text-[13px] font-bold text-[#14261e]">{a.gateway[0]}</span>
              <span className="block text-xs text-[#5d6f64]">({a.gateway[1]})</span>
            </span>
          </div>
        </div>
        <Arrow />
        <div className="self-center">
          <div className="rounded-xl border border-[#9bd5ae] bg-gradient-to-br from-[#e4f8e8] to-[#cfeedb] shadow-[0_2px_6px_rgba(20,120,70,0.15)] px-4 py-2.5 flex items-center gap-3 w-[200px]">
            <span className="w-6 h-6 flex-shrink-0 [&>*]:w-6 [&>*]:h-6"><NodeJsIcon /></span>
            <span className="leading-tight">
              <span className="block text-[13px] font-bold text-[#14261e]">{a.service[0]}</span>
              <span className="block text-xs text-[#3a5a48]">({a.service[1]})</span>
            </span>
          </div>
        </div>
        <Bracket n={a.stores.length} dir="out" />
        <div className="grid flex-1 min-w-0" style={{ gridTemplateRows: `repeat(${a.stores.length}, 1fr)` }}>
          {a.stores.map(([n, s]) => (
            <div key={n} className="py-[4px]">
              <div className={`${box} h-full px-3.5 flex items-center gap-2.5 min-h-[36px]`}>
                <StoreIcon name={n} />
                <span className="text-[13px] leading-tight">
                  <b className="text-[#14261e]">{fix(n)}</b> <span className="text-[#5d6f64]">({s})</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- database schema ---------- */
function SchemaTables({ tables }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {tables.map((t) => (
        <div key={t.name} className="rounded-xl bg-[#efe6d2]/70 border border-white/80 overflow-hidden">
          <div className="flex items-center gap-2 px-3 py-2 bg-[#eadfc6]/70 font-bold text-[13px] text-[#14261e]">
            <Table2 className="w-4 h-4 text-[#0f5a43]" strokeWidth={1.9} /> {t.name}
          </div>
          <ul className="px-3 py-2 space-y-1.5">
            {t.cols.map(([c, ty]) => (
              <li key={c} className="flex items-center justify-between gap-2 text-xs">
                <span className="text-[#14261e]">{c}</span>
                <span className="text-[#5d6f64] text-[11px] whitespace-nowrap">{ty}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function Relationships({ relations }) {
  return (
    <div className="mt-4">
      <div className="text-[13px] font-extrabold text-[#14261e] mb-2">Relationships</div>
      <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
        {relations.map(([name, mult, ic], i) => {
          const RI = iconMap[ic] || Users;
          return (
            <React.Fragment key={name}>
              {i > 0 && (
                <span className="flex items-center gap-1 text-[11px] font-bold text-[#0f5a43] flex-shrink-0 px-1">
                  <span className="w-3 h-px bg-[#0f5a43]" /> 1 <span className="w-5 h-px bg-[#0f5a43]" /> N <span className="w-3 h-px bg-[#0f5a43]" />
                </span>
              )}
              <span className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/85 border border-[#ece1c9] shadow-sm flex-shrink-0">
                <RI className="w-5 h-5 text-[#0f5a43]" strokeWidth={1.8} />
                <span className="text-xs font-bold text-[#14261e] leading-tight">{name}<br /><span className="font-medium text-[#5d6f64]">{mult}</span></span>
              </span>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default function ProjectDetailPage({ projectId, onOpenCaseStudy }) {
  const [tab, setTab] = useState('Overview');
  const project = allProjects.find((p) => p.id === projectId);
  const d = projectDetails[projectId];
  let s = projectShowcase[projectId];

  if (!s && d) {
    const statPairs = d.mock?.stats || [['Status', 'Live'], ['Uptime', '99.9%'], ['Latency', '<45ms'], ['Tier', 'Production']];
    s = {
      overviewTitle: 'Project Overview',
      summary: d.overview,
      hero: {
        menu: d.mock?.menu || ['Dashboard', 'Overview', 'Reports', 'Settings'],
        stats: statPairs.map(([label, value], i) => ({
          label,
          value,
          icon: ['users', 'badge', 'layers', 'trend'][i % 4],
          color: ['#1b7a5a', '#10b981', '#22c55e', '#0f5a43'][i % 4],
        })),
        chart: {
          title: 'System Activity & Performance Trend',
          range: 'Last 6 Months',
          months: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
          yLabels: ['10K', '8K', '6K', '4K', '2K', '0'],
          values: [0.18, 0.36, 0.26, 0.63, 0.43, 0.8, 0.68, 0.91],
          color: '#1b7a5a',
        },
      },
      execSummary: d.overview,
      scale: ['Built actively over ', d.info?.Duration || 'Production', ' with enterprise-grade stability and scalable cloud services.'],
      impact: d.outcomes || [],
      capabilities: (d.features || []).map((f, i) => ({
        icon: ['layers', 'zap', 'shield', 'users'][i % 4],
        title: f,
        desc: `High-performance module engineered for ${f.toLowerCase()}.`,
      })),
      techTiles: d.tech || [],
      archDesc: d.archNotes?.[0] || 'Modular, reliable, and scalable backend architecture.',
      schemaDesc: 'Core relational database schemas and indexed storage collections.',
      tables: (d.database || []).map(([name, desc]) => ({
        name,
        cols: [['id', 'UUID (PK)'], ['name', 'VARCHAR(255)'], ['status', 'VARCHAR(50)'], ['created_at', 'TIMESTAMP']],
      })),
      relations: [['Primary Table', '(1)', 'layers'], ['Associated Records', '(N)', 'file']],
      myContributions: d.contributions || [],
    };
  }

  if (!project || !d || !s) {
    return (
      <div className="glass-light-card rounded-3xl p-8 text-center text-[#14261e]">
        <p className="font-semibold">Project not found.</p>
        <a href="#/projects" className="text-[#0f5a43] font-semibold inline-flex items-center gap-1 mt-3"><ArrowLeft className="w-4 h-4" /> Back to all projects</a>
      </div>
    );
  }

  const isSwiftDial = project.id === 'swiftdial';
  const projectTabs = isSwiftDial
    ? ['Overview', '9 Core Modules', '4 Calling Channels', 'Architecture & Stack', '10-Stage Scaling Roadmap', 'Database & Ledger', 'My Contributions', 'Challenges']
    : tabs;

  const ProjIcon = projectIconComponents[project.id];
  const bg = brandBg[project.id] || 'linear-gradient(135deg,#0f5a43,#0b3d2e)';

  /* ----- overview sections (match mockup, top to bottom) ----- */
  const ExecutiveSummary = () => (
    <Card icon={Star} title="Executive Summary" className="h-full">
      <p className="text-sm text-[#2f4a3d] leading-relaxed mb-4">{s.execSummary}</p>
      <div className="flex items-start gap-3 p-3 rounded-xl bg-white/70 border border-white">
        <BarChart3 className="w-6 h-6 text-[#0f5a43] flex-shrink-0 mt-0.5" strokeWidth={1.8} />
        <p className="text-[13px] text-[#2f4a3d] leading-relaxed">
          <b className="text-[#0f5a43]">Production Scale:</b> {s.scale[0]}<b className="text-[#14261e]">{s.scale[1]}</b>{s.scale[2]}
        </p>
      </div>
    </Card>
  );

  const Outcomes = () => (
    <Card icon={Target} title="Business Outcomes & Impact" className="h-full">
      <ul className="space-y-3.5">
        {s.impact.map((o) => (
          <li key={o} className="flex items-start gap-3 text-sm text-[#2f4a3d]">
            <CheckCircle /> <span className="leading-snug">{o}</span>
          </li>
        ))}
      </ul>
    </Card>
  );

  const Capabilities = () => (
    <Card icon={ListChecks} title="Key Platform Capabilities" className="h-full">
      <ul className="space-y-2.5">
        {s.capabilities.map((c) => {
          const CI = iconMap[c.icon] || Layers;
          return (
            <li key={c.title} className="flex items-center gap-4 px-4 py-3 rounded-xl bg-white/70 border border-white">
              <CI className="w-6 h-6 text-[#0f5a43] flex-shrink-0" strokeWidth={1.7} />
              <span className="leading-snug">
                <span className="block text-sm font-bold text-[#14261e]">{c.title}</span>
                <span className="block text-xs text-[#5d6f64] mt-0.5">{c.desc}</span>
              </span>
            </li>
          );
        })}
      </ul>
    </Card>
  );

  const TechStack = () => (
    <Card icon={Code2} title="Core Tech Stack" className="h-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 auto-rows-fr gap-3 md:h-[calc(100%-3rem)]">
        {s.techTiles.map((t) => {
          const I = techIcons[t];
          return (
            <div key={t} className="rounded-xl bg-white/70 border border-white py-3.5 px-2 flex flex-col items-center justify-center gap-1.5 text-center shadow-[0_2px_8px_rgba(80,55,10,0.08)]">
              <span className="w-8 h-8 flex items-center justify-center [&>*]:w-8 [&>*]:h-8">
                {I ? <I /> : <span className="rounded-lg bg-slate-100 border border-slate-300 text-[11px] font-bold flex items-center justify-center text-slate-700">{t.slice(0, 2)}</span>}
              </span>
              <span className="text-sm font-bold text-[#14261e] leading-tight">{t}</span>
              <span className="text-[11px] text-[#5d6f64] leading-none">({techRoles[t] || 'Tech'})</span>
            </div>
          );
        })}
      </div>
    </Card>
  );

  const Architecture = ({ withNotes }) => (
    <Card icon={Layers} title="System Architecture Overview" sub={s.archDesc}>
      <ArchDiagram a={d.architecture} />
      {withNotes && (
        <ul className="mt-5 space-y-2">
          {d.archNotes.map((n) => (
            <li key={n} className="text-sm text-[#2f4a3d] flex gap-2"><ChevronRight className="w-4 h-4 text-[#0f5a43] mt-0.5 flex-shrink-0" />{n}</li>
          ))}
        </ul>
      )}
    </Card>
  );

  const Schema = () => (
    <Card icon={Database} title="Database Design" sub={s.schemaDesc} className="h-full">
      <SchemaTables tables={s.tables} />
      <Relationships relations={s.relations} />
    </Card>
  );

  const ContribList = ({ items }) => (
    <ul className="space-y-3">
      {items.map((c) => (
        <li key={c} className="flex items-start gap-3 text-[13px] text-[#2f4a3d]">
          <CheckCircle /> <span className="leading-snug">{c}</span>
        </li>
      ))}
    </ul>
  );

  const Contributions = () => (
    <Card icon={UserCheck} title="My Contributions" className="h-full">
      <ContribList items={s.myContributions} />
    </Card>
  );

  const Overview = () => (
    <div className="flex flex-col gap-4 sm:gap-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5"><ExecutiveSummary /><Outcomes /></div>

      {isSwiftDial && d.callingModes && (
        <Card icon={PhoneCall} title="4 Calling Channels Unification">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {d.callingModes.map((mode, i) => {
              const icons = [PhoneCall, Headphones, Volume2, Bot];
              const ModeIcon = icons[i % icons.length];
              return (
                <div key={mode.name} className="rounded-xl bg-white/70 border border-white p-3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-[#0f5a43]"><ModeIcon className="w-4 h-4" /></div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">{mode.badge}</span>
                    </div>
                    <h3 className="text-xs font-bold text-[#14261e] mb-1">{mode.name}</h3>
                    <p className="text-[11px] text-[#2f4a3d] line-clamp-3 leading-relaxed">{mode.desc}</p>
                  </div>
                  <button onClick={() => setTab('4 Calling Channels')} className="mt-3 text-[11px] font-semibold text-[#0f5a43] inline-flex items-center gap-1 hover:underline self-start">
                    View Specs <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              );
            })}
          </div>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5"><Capabilities /><TechStack /></div>
      <Architecture />
      <div className="grid grid-cols-1 lg:grid-cols-[1.62fr_1fr] gap-4 sm:gap-5"><Schema /><Contributions /></div>
    </div>
  );

  const NineModulesView = () => (
    <div className="space-y-4">
      <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-900 text-white shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <span className="text-xs uppercase font-extrabold tracking-wider text-sky-400">Complete Production Modular Architecture</span>
          <h3 className="text-base sm:text-lg font-black text-white">9 Core Modules of SwiftDial</h3>
          <p className="text-xs text-blue-200 mt-0.5">Comprehensive breakdown with direct codebase references and production functions.</p>
        </div>
        {onOpenCaseStudy && (
          <button
            onClick={onOpenCaseStudy}
            className="px-4 py-2 rounded-xl bg-white text-[#0b4634] hover:bg-blue-50 text-xs font-bold shadow-md flex items-center gap-1.5 self-start sm:self-auto flex-shrink-0"
          >
            <span>Open Interactive Modal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {d.modules && d.modules.map((m) => (
          <div key={m.id} className="glass-widget p-4 rounded-2xl flex flex-col justify-between border border-blue-100/70 hover:shadow-lg transition-all">
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-[#0f5a43] text-white text-xs font-extrabold flex items-center justify-center shadow-sm">
                    {String(m.id).padStart(2, '0')}
                  </span>
                  <h4 className="text-sm font-bold text-[#14261e] leading-snug">{m.title}</h4>
                </div>
              </div>

              {m.codeRef && (
                <div className="mb-3 px-2.5 py-1 rounded-md bg-slate-100/90 border border-slate-200/80 font-mono text-[10px] text-slate-700 flex items-center gap-1.5 overflow-x-auto">
                  <Code2 className="w-3 h-3 text-[#0f5a43] flex-shrink-0" />
                  <span className="truncate">{m.codeRef}</span>
                </div>
              )}

              <p className="text-xs text-[#2f4a3d] mb-3 leading-relaxed">{m.desc}</p>

              {m.features && (
                <ul className="space-y-1.5 border-t border-slate-100 pt-3">
                  {m.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-xs text-[#2f4a3d]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const CallingChannelsView = () => (
    <div className="space-y-4">
      <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900 to-blue-950 text-white shadow-lg">
        <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-400">Hybrid Cloud & Telecom Layer</span>
        <h3 className="text-base sm:text-lg font-black text-white">4 Distinct Calling Modes in Production</h3>
        <p className="text-xs text-slate-300 mt-1">
          SwiftDial solves the enterprise telephony dilemma by unifying low-cost mobile SIMs, browser WebRTC VoIP, high-scale telecom OBD broadcasts, and autonomous AI voice bot.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {d.callingModes && d.callingModes.map((mode, i) => {
          const icons = [PhoneCall, Headphones, Volume2, Bot];
          const colors = ['emerald', 'sky', 'amber', 'purple'];
          const ModeIcon = icons[i % icons.length];
          const color = colors[i % colors.length];

          return (
            <div key={mode.name} className="glass-widget p-5 rounded-2xl border border-blue-100/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0f5a43]">
                      <ModeIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-extrabold text-[#14261e]">{mode.name}</h4>
                      <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        {mode.badge}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#2f4a3d] leading-relaxed mb-4">{mode.desc}</p>

                {mode.highlights && (
                  <div className="bg-slate-50/80 rounded-xl p-3 border border-slate-200/80">
                    <span className="text-[11px] font-bold text-[#14261e] uppercase tracking-wider block mb-1.5">Key Highlights:</span>
                    <ul className="space-y-1">
                      {mode.highlights.map((h, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-[#2f4a3d]">
                          <Check className="w-3.5 h-3.5 text-[#0f5a43] flex-shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const ArchitectureAndStackView = () => (
    <div className="space-y-5">
      <Card icon={Layers} title="System Architecture & Component Diagram">
        <ArchDiagram a={d.architecture} />
        <ul className="mt-4 space-y-2">
          {d.archNotes.map((n) => (
            <li key={n} className="text-xs sm:text-sm text-[#2f4a3d] flex gap-2">
              <ChevronRight className="w-4 h-4 text-[#0f5a43] mt-0.5 flex-shrink-0" />
              <span>{n}</span>
            </li>
          ))}
        </ul>
      </Card>

      {d.techStackTable && (
        <Card icon={Cpu} title="Complete Technology Stack & Integrations Table">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-200 bg-blue-50/60 text-[#0f5a43]">
                  <th className="p-2.5 font-bold rounded-l-lg">Architectural Layer</th>
                  <th className="p-2.5 font-bold">Technologies / Services Used</th>
                  <th className="p-2.5 font-bold rounded-r-lg">Purpose in SwiftDial</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-[#2f4a3d]">
                {d.techStackTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-blue-50/40">
                    <td className="p-2.5 font-bold text-[#14261e] whitespace-nowrap">{row.layer}</td>
                    <td className="p-2.5 font-semibold text-[#0f5a43] font-mono text-[11px]">{row.tech}</td>
                    <td className="p-2.5 text-xs">{row.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {d.portals && (
        <Card icon={Monitor} title="4 Operational Portals & User Roles">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {d.portals.map((portal) => (
              <div key={portal.name} className="glass-item rounded-xl p-3.5 border border-blue-100/60">
                <div className="text-xs sm:text-sm font-bold text-[#14261e] flex items-center gap-2 mb-1">
                  <Monitor className="w-4 h-4 text-[#0f5a43]" />
                  <span>{portal.name}</span>
                </div>
                <p className="text-xs text-[#2f4a3d] leading-relaxed">{portal.desc}</p>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );

  const DatabaseAndLedgerView = () => (
    <div className="space-y-4">
      <Card icon={Database} title="Database Design & 55+ Relational Tables Schema">
        <p className="text-xs sm:text-sm text-[#2f4a3d] mb-4">
          MySQL 8.0 with Sequelize ORM (v6). Every single business table includes <code className="px-1.5 py-0.5 rounded bg-blue-100 text-[#0f5a43] font-mono text-xs">company_id</code> indexing to enforce strict multi-tenant tenant isolation and row-level pessimistic locking.
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {d.database.map(([t, desc]) => (
            <div key={t} className="glass-item rounded-xl p-3 border border-blue-100/60">
              <div className="text-xs sm:text-sm font-bold text-[#14261e] font-mono flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-[#0f5a43]" />
                <span>{t}</span>
              </div>
              <p className="text-xs text-[#2f4a3d] mt-1 leading-snug">{desc}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card icon={Wallet} title="Prepaid Corporate Wallet & Pulse Micro-Billing Architecture">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-[11px] font-bold text-[#0f5a43] uppercase">1. Integer-Paise Precision</span>
            <p className="text-xs text-[#2f4a3d] mt-1">
              Balances are stored exclusively as integers (1 INR = 100 paise). Eliminates JavaScript IEEE-754 floating-point rounding errors during high-frequency billing deduction.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-[11px] font-bold text-emerald-700 uppercase">2. Append-Only Ledger</span>
            <p className="text-xs text-[#2f4a3d] mt-1">
              Every financial transaction records an immutable debit/credit row containing pre-balance and post-balance snapshots with transaction hashes for auditing.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-[11px] font-bold text-amber-700 uppercase">3. Two-Phase Reserve & Capture</span>
            <p className="text-xs text-[#2f4a3d] mt-1">
              Outbound IVR campaigns reserve estimated amounts upfront based on pulse ceiling formula $\lceil \text{Duration} / (\text{Pulse} \times 1000) \rceil$; actual connects are captured and difference refunded upon campaign completion.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );

  const ContributionsView = () => (
    <div className="space-y-4 sm:space-y-5">
      <Card icon={UserCheck} title={isSwiftDial ? 'My Core Engineering Contributions as Senior Backend Engineer' : 'My Contributions'}>
        <ContribList items={isSwiftDial ? d.contributions : s.myContributions} />
      </Card>

      {d.useCases && (
        <Card icon={Workflow} title="Real-World Business Use Cases Powered by SwiftDial">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {d.useCases.map((uc) => (
              <div key={uc.title} className="rounded-xl bg-white/70 border border-white p-3.5">
                <h4 className="text-sm font-bold text-[#14261e] mb-1">{uc.title}</h4>
                <p className="text-xs text-[#2f4a3d] leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );

  const content = {
    Overview: <Overview />,
    '9 Core Modules': <NineModulesView />,
    '4 Calling Channels': <CallingChannelsView />,
    'Architecture & Stack': <ArchitectureAndStackView />,
    '10-Stage Scaling Roadmap': (
      <Card icon={Cpu} title="SwiftDial 10-Stage Scaling Roadmap (10 to 1 Crore Users/Day)">
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-bold text-[#0f5a43] uppercase">Senior Backend Architecture</span>
              <h4 className="text-sm sm:text-base font-extrabold text-[#14261e]">From 10 Users/Day to 1 Crore (10M) Users/Day</h4>
              <p className="text-xs text-[#2f4a3d]">What breaks, why it breaks, and the 5 diagnostic questions asked at every scaling step.</p>
            </div>
            {onOpenCaseStudy && (
              <button
                onClick={onOpenCaseStudy}
                className="px-4 py-2 rounded-xl bg-[#0f5a43] hover:bg-[#0b4634] text-white text-xs font-bold shadow-md flex items-center gap-1.5 self-start sm:self-auto flex-shrink-0"
              >
                <span>Open Full Master Case Study</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse min-w-[500px]">
              <thead>
                <tr className="border-b border-slate-200 text-[#0f5a43]">
                  <th className="p-2 font-bold">Stage</th>
                  <th className="p-2 font-bold">Traffic</th>
                  <th className="p-2 font-bold">Core Bottleneck</th>
                  <th className="p-2 font-bold">Engineering Fix</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-[#2f4a3d]">
                {d.scalingRoadmap && d.scalingRoadmap.map((row) => (
                  <tr key={row.stage} className="hover:bg-blue-50/50">
                    <td className="p-2 font-bold text-[#14261e]">Stage {row.stage}</td>
                    <td className="p-2 font-semibold text-emerald-700">{row.traffic}</td>
                    <td className="p-2 font-medium">{row.bottleneck}</td>
                    <td className="p-2 font-mono text-[11px] text-[#0f5a43]">{row.fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    ),
    Architecture: <Architecture withNotes />,
    'Database Design': <Schema />,
    'Database & Ledger': <DatabaseAndLedgerView />,
    'My Contributions': <ContributionsView />,
    Challenges: (
      <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
        <Card icon={Wrench} title="Production Challenges & Solutions" className="h-full">
          <ul className="space-y-3">
            {d.challenges.map((c) => (
              <li key={c} className="flex items-start gap-3 text-sm text-[#2f4a3d]">
                <CheckCircle tone="blue" /> <span className="leading-snug">{c}</span>
              </li>
            ))}
          </ul>
        </Card>
        <Card icon={Lightbulb} title="Key Architectural Learnings" className="h-full">
          <ul className="space-y-3">
            {d.learnings.map((c) => (
              <li key={c} className="flex items-start gap-3 text-sm text-[#2f4a3d]">
                <CheckCircle tone="amber" /> <span className="leading-snug">{c}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    ),
  };

  return (
    <div className="flex flex-col gap-4 sm:gap-5">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-[13px] text-[#5d6f64]" aria-label="Breadcrumb">
        <a href="#/" className="hover:text-[#0f5a43]"><Home className="w-4 h-4" /></a>
        <ChevronRight className="w-3.5 h-3.5 opacity-70" />
        <a href="#/projects" className="hover:text-[#0f5a43]">Projects</a>
        <ChevronRight className="w-3.5 h-3.5 opacity-70" />
        <span className="font-semibold text-[#14261e]">{project.title}</span>
      </nav>

      {/* Header + overview */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.62fr_1fr] gap-4 sm:gap-5">
        <section className="glass-blue-card rounded-[26px] p-4 sm:p-5 flex flex-col gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-[54px] h-[54px] rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 text-white border border-white/40" style={{ background: bg }}>
              {ProjIcon && <ProjIcon className="w-7 h-7" strokeWidth={1.8} />}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2.5 flex-wrap">
                <h1 className="text-3xl font-extrabold text-[#14261e] tracking-tight leading-tight">{project.title}</h1>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#c9f0d9] text-[#17794a] border border-[#a9e2c1]">{project.tag}</span>
              </div>
              <p className="text-sm text-[#4d6257]">{d.subtitle}</p>
            </div>
          </div>

          <HeroDashboard title={project.title} hero={s.hero} Icon={ProjIcon} iconBg={bg} image={project.image} />

          <div className="flex flex-wrap gap-3">
            {isSwiftDial && onOpenCaseStudy && (
              <button onClick={onOpenCaseStudy} className="inline-flex items-center gap-2 px-5 h-11 rounded-full btn-blue text-white text-sm font-bold hover:scale-[1.03] transition-transform">
                <span>⚡ 10-Stage Scaling Case Study</span> <ExternalLink className="w-4 h-4" />
              </button>
            )}
            <a href={d.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 h-11 rounded-full btn-blue text-white text-sm font-bold hover:scale-[1.03] transition-transform">
              Visit Live Site <ExternalLink className="w-4 h-4" />
            </a>
            <a href={d.codeUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 h-11 rounded-full border border-white bg-white/70 text-[#0f5a43] text-sm font-semibold hover:bg-white transition-colors">
              <Code2 className="w-4 h-4" /> View Code
            </a>
          </div>
        </section>

        <aside className="glass-blue-card rounded-[26px] p-5 sm:p-6 lg:self-start">
          <div className="flex items-center gap-3 mb-4">
            <Layers className="w-6 h-6 text-[#0f5a43]" strokeWidth={1.7} />
            <h2 className="text-xl font-bold text-[#14261e]">{s.overviewTitle}</h2>
          </div>
          <dl className="space-y-3.5">
            {[['Domain', d.info.Domain], ['Role', d.info.Role], ['Team', d.info['Team Size']], ['Duration', d.info.Duration], ['Status', d.info.Status]].map(([k, v]) => (
              <div key={k} className="grid grid-cols-[5.5rem_1fr] gap-2 text-sm items-center">
                <dt className="text-[#5d6f64]">{k}</dt>
                <dd className="text-[#14261e] font-semibold">
                  {k === 'Status' ? <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#c9f0d9] text-[#17794a]">{v}</span> : v}
                </dd>
              </div>
            ))}
          </dl>
          <div className="border-t border-[#dccfb2]/50 mt-5 pt-4">
            <div className="flex items-center gap-2.5 mb-2">
              <FileText className="w-5 h-5 text-[#0f5a43]" strokeWidth={1.7} />
              <h3 className="text-base font-bold text-[#14261e]">Summary</h3>
            </div>
            <p className="text-[13px] text-[#2f4a3d] leading-relaxed">{s.summary}</p>
          </div>
        </aside>
      </div>

      {/* Tabs */}
      <div className="glass-bar rounded-full p-1.5 flex gap-1 overflow-x-auto no-scrollbar" role="tablist">
        {projectTabs.map((t) => {
          const TI = tabIcons[t];
          const active = tab === t;
          return (
            <button
              key={t}
              role="tab"
              aria-selected={active}
              onClick={() => setTab(t)}
              className={`whitespace-nowrap flex-1 inline-flex items-center justify-center gap-2 px-4 h-11 rounded-full text-sm font-semibold transition-all ${
                active ? 'btn-blue text-white' : 'text-[#14261e] hover:bg-white/70'
              }`}
            >
              {TI && <TI className="w-[18px] h-[18px]" strokeWidth={1.8} />}
              {t}
            </button>
          );
        })}
      </div>

      {content[tab] || content.Overview}
    </div>
  );
}
