import React from 'react';
import {
  LayoutDashboard, Megaphone, Users, Phone, BarChart3, Settings, Target, ShieldCheck, CreditCard,
  Banknote, Building2, Scale, CheckSquare, FileText, MessageSquare, Radio, UsersRound, LayoutTemplate,
  LineChart, GraduationCap, Building, BookOpen, ClipboardList, PenLine, Share2, FileCheck, Wallet, ChevronDown, Circle,
} from 'lucide-react';

const menuIcons = {
  Dashboard: LayoutDashboard, Campaigns: Megaphone, Contacts: Users, Calls: Phone, Reports: BarChart3,
  Settings, Leads: Target, KYC: ShieldCheck, 'Credit Check': CreditCard, Disbursals: Banknote,
  Entities: Building2, Compliances: Scale, Tasks: CheckSquare, Documents: FileText,
  Conversations: MessageSquare, Broadcasts: Radio, Audience: UsersRound, Templates: LayoutTemplate,
  Analytics: LineChart, Students: GraduationCap, Institutes: Building, Courses: BookOpen,
  Admissions: ClipboardList, Exams: PenLine, Referrals: Share2, Applications: FileCheck, Payouts: Wallet,
};

const toneColor = { good: '#15a05a', bad: '#e0342f' };

function LineChartMini({ values, color, id }) {
  const n = values.length;
  const pts = values.map((v, i) => [(i / (n - 1)) * 100, 100 - v * 100]);
  const line = pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x} ${y}`).join(' ');
  return (
    <div className="relative w-full h-full">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full overflow-visible" aria-hidden="true">
        <defs>
          <linearGradient id={`a-${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={color} stopOpacity="0.35" />
            <stop offset="1" stopColor={color} stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <path d={`${line} L100 100 L0 100 Z`} fill={`url(#a-${id})`} />
        <path d={line} fill="none" stroke={color} strokeWidth="2.2" vectorEffect="non-scaling-stroke" strokeLinejoin="round" strokeLinecap="round" />
      </svg>
      {pts.map(([x, y], i) =>
        i % 2 === 0 || i === n - 1 ? (
          <span
            key={i}
            className="absolute rounded-full bg-white"
            style={{ left: `${x}%`, top: `${y}%`, width: '.7em', height: '.7em', transform: 'translate(-50%,-50%)', border: `.18em solid ${color}` }}
          />
        ) : null
      )}
    </div>
  );
}

function BarsMini({ values, color }) {
  return (
    <div className="w-full h-full flex items-end" style={{ gap: '.45em' }}>
      {values.map((v, i) => (
        <span key={i} className="flex-1 rounded-t-[.2em]" style={{ height: `${v * 100}%`, background: color, opacity: 0.55 + (i / values.length) * 0.45 }} />
      ))}
    </div>
  );
}

function DonutMini({ percent, color, legend }) {
  const r = 15.9;
  const c = 2 * Math.PI * r;
  return (
    <div className="w-full h-full flex items-center" style={{ gap: '1.6em' }}>
      <div className="relative h-full aspect-square flex-shrink-0">
        <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90" aria-hidden="true">
          <circle cx="18" cy="18" r={r} fill="none" stroke="#f3ead6" strokeWidth="4.2" />
          <circle cx="18" cy="18" r={r} fill="none" stroke={color} strokeWidth="4.2" strokeLinecap="round" strokeDasharray={`${(percent / 100) * c} ${c}`} />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-extrabold text-[#14261e]" style={{ fontSize: '1.35em' }}>{percent}%</span>
      </div>
      <ul className="flex-1 flex flex-col" style={{ gap: '.5em' }}>
        {legend.map((l) => (
          <li key={l.label} className="flex items-center justify-between text-[#4d6257]" style={{ fontSize: '.95em' }}>
            <span className="flex items-center" style={{ gap: '.5em' }}>
              <i className="rounded-full inline-block" style={{ width: '.7em', height: '.7em', background: l.color }} />
              {l.label}
            </span>
            <b className="text-[#14261e]">{l.value}</b>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Miniature product dashboard. Everything is sized in `em` and the font-size follows the
// card width (container query units) so the preview scales perfectly with the card.
export default function ProjectPreview({ preview, Icon, iconBg, id, image }) {
  if (image) {
    return (
      <div style={{ containerType: 'inline-size' }} className="w-full">
        <div
          className="w-full bg-[#fcf8ee] text-[#14261e] relative overflow-hidden group/img flex items-center justify-center border border-[#efe6d2]"
          style={{
            aspectRatio: '404 / 165',
            borderRadius: '1.4em',
            boxShadow: '0 .6em 1.8em -.6em rgba(8,25,100,.3), 0 0 0 1px rgba(210,222,250,.7)',
          }}
        >
          <img
            src={image}
            alt={preview?.brand || id}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a45]/70 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end p-3">
            <span className="text-white text-xs font-bold drop-shadow flex items-center gap-1.5">
              {Icon && <Icon className="w-3.5 h-3.5 text-white" />}
              <span>{preview?.brand || id}</span>
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (!preview) return null;
  const { brand = '', menu = [], heading = '', range = null, stats = [], chart = null } = preview;
  return (
    <div style={{ containerType: 'inline-size' }} className="w-full">
      <div
        className="w-full bg-white text-[#14261e] flex overflow-hidden"
        style={{ fontSize: '1.95cqw', aspectRatio: '404 / 153', borderRadius: '1.5em', boxShadow: '0 .6em 1.8em -.6em rgba(8,25,100,.45), 0 0 0 1px rgba(210,222,250,.9)' }}
      >
        {/* sidebar */}
        <div className="flex flex-col border-r border-[#f3ead6]" style={{ width: '27%', padding: '.9em .7em', gap: '.2em' }}>
          <div className="flex items-center font-extrabold" style={{ gap: '.5em', marginBottom: '.7em', fontSize: '1.05em' }}>
            <span className="flex items-center justify-center flex-shrink-0 text-white" style={{ width: '1.8em', height: '1.8em', borderRadius: '.5em', background: iconBg }}>
              {Icon && <Icon style={{ width: '1.05em', height: '1.05em' }} />}
            </span>
            <span className="truncate">{brand}</span>
          </div>
          {menu.map((m, i) => {
            const I = menuIcons[m] || Circle;
            return (
              <div
                key={m}
                className={`flex items-center truncate ${i === 0 ? 'text-white font-semibold' : 'text-[#4d6257]'}`}
                style={{ gap: '.6em', padding: '.42em .6em', borderRadius: '.5em', fontSize: '.92em', background: i === 0 ? '#0f5a43' : 'transparent' }}
              >
                <I style={{ width: '1em', height: '1em', flexShrink: 0 }} />
                <span className="truncate">{m}</span>
              </div>
            );
          })}
        </div>
        {/* main */}
        <div className="flex-1 flex flex-col min-w-0" style={{ padding: '.9em 1.1em', gap: '.7em' }}>
          <div className="flex items-center justify-between">
            <b style={{ fontSize: '1.05em' }}>{heading}</b>
            {range && (
              <span className="inline-flex items-center border border-[#efe6d2] text-[#4d6257]" style={{ gap: '.3em', padding: '.25em .6em', borderRadius: '.5em', fontSize: '.8em' }}>
                {range} <ChevronDown style={{ width: '1em', height: '1em' }} />
              </span>
            )}
          </div>
          <div className="grid" style={{ gridTemplateColumns: `repeat(${stats.length}, 1fr)`, gap: '.6em' }}>
            {stats.map((s) => (
              <div key={s.label} className="border border-[#f3ead6] bg-white" style={{ borderRadius: '.6em', padding: '.5em .7em' }}>
                <div className="text-[#8a978e] truncate" style={{ fontSize: '.8em' }}>{s.label}</div>
                <div className="font-extrabold" style={{ fontSize: '1.45em', lineHeight: 1.25, color: toneColor[s.tone] || '#14261e' }}>{s.value}</div>
              </div>
            ))}
          </div>
          <div className="flex-1 min-h-0" style={{ paddingTop: '.2em' }}>
            {chart.type === 'line' && <LineChartMini values={chart.values} color={chart.color} id={id} />}
            {chart.type === 'bars' && <BarsMini values={chart.values} color={chart.color} />}
            {chart.type === 'donut' && <DonutMini percent={chart.percent} color={chart.color} legend={chart.legend} />}
          </div>
        </div>
      </div>
    </div>
  );
}
