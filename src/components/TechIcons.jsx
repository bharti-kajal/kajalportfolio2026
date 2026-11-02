import React from 'react';

export const NodeJsIcon = () => (
  <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 32 32" fill="none">
    <path d="M16 3L3.88 10V22L16 29L28.12 22V10L16 3Z" fill="#339933" />
    <path d="M16 5.5L6 11.2V20.8L16 26.5L26 20.8V11.2L16 5.5Z" fill="#43A047" />
    <path d="M16 11V21M11 14L16 11L21 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ExpressIcon = () => (
  <div className="w-6 h-6 rounded-lg bg-slate-100 border border-slate-300 text-slate-800 flex items-center justify-center font-bold text-[11px] tracking-tight flex-shrink-0 shadow-sm">
    EX
  </div>
);

export const NestJSIcon = () => (
  <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 256 256" fill="none">
    <path d="M228.4 46.7c-13.6-14-35.3-15.6-50.6-3.7l-71.1 55.4-32.9-25.6c-13.5-10.5-32.8-9.1-44.8 3.2L6 100.2l56.8 44.2 32.8 25.6c13.6 10.6 32.9 9.1 44.9-3.2l71.1-73.1c11.7-12 11.8-31.5-3.2-47z" fill="#E0234E"/>
    <path d="M136.2 122.9l-29.4 30.2c-5.8 6-14.7 7.7-22.3 4.2L6 100.2l58.8 60.5c15.2 15.6 39.5 17.5 56.6 4.3l37.8-29.4-23-12.7z" fill="#E0234E" opacity="0.8"/>
  </svg>
);

export const RestApiIcon = () => (
  <div className="w-6 h-6 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
    <svg className="w-4 h-4 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 11a9 9 0 0 1 9 9" />
      <path d="M4 4a16 16 0 0 1 16 16" />
      <circle cx="5" cy="19" r="1" fill="currentColor" />
    </svg>
  </div>
);

export const JwtIcon = () => (
  <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="45" fill="none" stroke="url(#jwt-gradient)" strokeWidth="8" strokeDasharray="14 6" />
    <circle cx="50" cy="50" r="16" fill="#D63AFF" />
    <defs>
      <linearGradient id="jwt-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FB015B" />
        <stop offset="50%" stopColor="#D63AFF" />
        <stop offset="100%" stopColor="#00B9F1" />
      </linearGradient>
    </defs>
  </svg>
);

export const MicroservicesIcon = () => (
  <div className="w-6 h-6 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
    <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.3" />
      <circle cx="4" cy="6" r="2" />
      <circle cx="20" cy="6" r="2" />
      <circle cx="4" cy="18" r="2" />
      <circle cx="20" cy="18" r="2" />
      <path d="M6 7l4 3.5M18 7l-4 3.5M6 17l4-3.5M18 17l-4-3.5" />
    </svg>
  </div>
);

export const WebSocketsIcon = () => (
  <div className="w-6 h-6 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center flex-shrink-0">
    <svg className="w-4 h-4 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 10v4M17 10v4M12 4v16M2 12h3M19 12h3" />
      <circle cx="12" cy="12" r="6" strokeDasharray="3 3" />
    </svg>
  </div>
);

export const GraphQLIcon = () => (
  <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 100 100" fill="none">
    <polygon points="50,10 85,30 85,70 50,90 15,70 15,30" stroke="#E10098" strokeWidth="6" fill="none"/>
    <circle cx="50" cy="10" r="7" fill="#E10098" />
    <circle cx="85" cy="30" r="7" fill="#E10098" />
    <circle cx="85" cy="70" r="7" fill="#E10098" />
    <circle cx="50" cy="90" r="7" fill="#E10098" />
    <circle cx="15" cy="70" r="7" fill="#E10098" />
    <circle cx="15" cy="30" r="7" fill="#E10098" />
    <polygon points="50,26 71,62 29,62" stroke="#E10098" strokeWidth="4" fill="none"/>
  </svg>
);

export const TypeScriptIcon = () => (
  <div className="w-6 h-6 rounded-lg bg-[#3178C6] text-white flex items-center justify-center font-bold text-[11px] flex-shrink-0 shadow-sm">
    TS
  </div>
);

export const JavaScriptIcon = () => (
  <div className="w-6 h-6 rounded-lg bg-[#F7DF1E] text-[#323330] flex items-center justify-center font-black text-[11px] flex-shrink-0 shadow-sm">
    JS
  </div>
);

export const PythonIcon = () => (
  <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 128 128">
    <path d="M63.9 8.2c-15.1 0-25 6.6-25 19.3v14.1h25.4v3.5H23.6C10.7 45.1 0 54.7 0 71.9c0 17.5 10.7 27.6 25 27.6h8.8v-12.7c0-12.8 11.2-24 24.3-24h25.2c10.3 0 18.7-8.7 18.7-19.1V27.5c0-12.7-10.8-19.3-28.1-19.3zm-13.8 8.1c3.1 0 5.6 2.5 5.6 5.6s-2.5 5.6-5.6 5.6-5.6-2.5-5.6-5.6 2.5-5.6 5.6-5.6z" fill="#387EB8" />
    <path d="M64.1 119.8c15.1 0 25-6.6 25-19.3V86.4H63.7v-3.5h40.7c12.9 0 23.6-9.6 23.6-26.8 0-17.5-10.7-27.6-25-27.6h-8.8v12.7c0 12.8-11.2 24-24.3 24H44.7c-10.3 0-18.7 8.7-18.7 19.1v15.9c0 12.7 10.8 19.4 28.1 19.4zm13.8-8.1c-3.1 0-5.6-2.5-5.6-5.6s2.5-5.6 5.6-5.6 5.6 2.5 5.6 5.6-2.5 5.6-5.6 5.6z" fill="#FFE052" />
  </svg>
);

export const FastAPIIcon = () => (
  <div className="w-6 h-6 rounded-full bg-[#05998B] flex items-center justify-center flex-shrink-0 shadow-sm">
    <svg className="w-3.5 h-3.5 text-white fill-current" viewBox="0 0 24 24">
      <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z"/>
    </svg>
  </div>
);

export const PHPIcon = () => (
  <div className="w-7 h-5 rounded-full bg-[#777BB4] text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0 shadow-sm">
    php
  </div>
);

export const ReactIcon = () => (
  <svg className="w-6 h-6 flex-shrink-0 animate-[spin_8s_linear_infinite]" viewBox="-11.5 -10.23174 23 20.46348">
    <circle cx="0" cy="0" r="2.05" fill="#00d8ff"/>
    <g stroke="#00d8ff" strokeWidth="1.2" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

export const PostgresIcon = () => (
  <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 128 128">
    <path d="M93.3 54.4c.5-5.1-.3-10.4-2.6-15.1-4.8-9.8-14.8-15.8-25.7-16-10.8-.2-21.2 5.5-26.4 15.1-2.4 4.5-3.3 9.6-3 14.7-6.5 1-12.3 4.6-16.1 10-5.4 7.6-6.4 17.6-2.6 26.2 3.6 8 11.2 13.5 19.9 14.6 2.3 7 7.6 12.6 14.5 15.3 7.8 3.1 16.7 2.1 23.6-2.7 6.9 4.8 15.8 5.8 23.6 2.7 6.9-2.7 12.2-8.3 14.5-15.3 8.7-1.1 16.3-6.6 19.9-14.6 3.8-8.6 2.8-18.6-2.6-26.2-3.8-5.4-9.6-9-16.1-10z" fill="#336791" />
    <path d="M64 30c-15.5 0-28 12.5-28 28v18c0 10.5 7.5 19.2 17.5 21.3V82c0-3.3 2.7-6 6-6s6 2.7 6 6v15.3c10-2.1 17.5-10.8 17.5-21.3V58c0-15.5-12.5-28-28-28z" fill="#FFFFFF" opacity="0.9" />
  </svg>
);

export const MySQLIcon = () => (
  <div className="w-6 h-6 rounded-lg bg-[#00618A] flex items-center justify-center flex-shrink-0 text-white font-black text-[10px] shadow-sm">
    <span className="text-[#E48E00]">My</span>SQL
  </div>
);

export const MongoIcon = () => (
  <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 32 32">
    <path d="M16 2C16 2 8 9.5 8 16.5C8 21.2 11.6 25 16 25C20.4 25 24 21.2 24 16.5C24 9.5 16 2 16 2Z" fill="#47A248" />
    <path d="M16 2C16 2 15.5 9.5 15.5 16.5C15.5 21.2 13 25 16 25C19 25 24 21.2 24 16.5C24 9.5 16 2 16 2Z" fill="#499D4A" />
    <path d="M16 25V28M16 2V4" stroke="#13AA52" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const RedisIcon = () => (
  <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 32 32">
    <polygon points="16,3 29,10 16,17 3,10" fill="#DC382D" />
    <polygon points="3,10 16,17 16,29 3,22" fill="#A81F17" />
    <polygon points="29,10 29,22 16,29 16,17" fill="#C62828" />
  </svg>
);

export const SequelizeIcon = () => (
  <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 32 32">
    <polygon points="16,2 28,9 28,23 16,30 4,23 4,9" fill="#29B6F6" />
    <polygon points="16,6 24,11 24,21 16,26 8,21 8,11" fill="#0288D1" />
  </svg>
);

export const MongooseIcon = () => (
  <div className="w-6 h-6 rounded-lg bg-[#880000] text-white flex items-center justify-center font-black text-sm flex-shrink-0 shadow-sm">
    m
  </div>
);

export const FirebaseIcon = () => (
  <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none">
    <path d="M4.5 18L10 3l3.5 6.5" stroke="#FFA000" strokeWidth="2" strokeLinecap="round"/>
    <path d="M19.5 18L15 8l-2 3.5" stroke="#F57C00" strokeWidth="2" strokeLinecap="round"/>
    <path d="M4.5 18L12 22l7.5-4" stroke="#FFCA28" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const AWSIcon = () => (
  <div className="w-7 h-5 rounded-md bg-[#232F3E] text-white flex flex-col items-center justify-center flex-shrink-0 px-0.5 shadow-sm">
    <span className="text-[9px] font-black leading-none text-white tracking-tighter">aws</span>
    <div className="w-4 h-[2px] bg-[#FF9900] rounded-full mt-0.5"></div>
  </div>
);

export const DockerIcon = () => (
  <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 32 32">
    <path d="M29 13.5c-.5-.4-1.6-.7-2.7-.4-.3-1.6-1.5-2.8-3.1-3.1-.3-.1-.6-.1-.9-.1-1.3.1-2.4.7-3.1 1.7-.8-.2-1.7-.3-2.6-.3-7.5 0-13.6 4.9-14.8 11.5-.1.6-.1 1.3-.1 1.9 0 .4.1.8.2 1.2 1.3 4.1 6.5 6.6 13.5 6.6 8.5 0 14.5-4.1 15-11.2.9-.6 1.4-1.7 1.3-2.8 0-.1-.1-.3-.2-.5-.8-1.5-1.9-2.3-2.5-2.5z" fill="#2496ED" />
    <rect x="5" y="14" width="3" height="2.5" rx="0.5" fill="#FFFFFF" opacity="0.9" />
    <rect x="9" y="14" width="3" height="2.5" rx="0.5" fill="#FFFFFF" opacity="0.9" />
    <rect x="13" y="14" width="3" height="2.5" rx="0.5" fill="#FFFFFF" opacity="0.9" />
    <rect x="9" y="10.5" width="3" height="2.5" rx="0.5" fill="#FFFFFF" opacity="0.9" />
    <rect x="13" y="10.5" width="3" height="2.5" rx="0.5" fill="#FFFFFF" opacity="0.9" />
  </svg>
);

export const KubernetesIcon = () => (
  <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="#326CE5" strokeWidth="2" />
    <path d="M12 6v12M6 12h12M7.5 7.5l9 9M7.5 16.5l9-9" stroke="#326CE5" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const CicdIcon = () => (
  <div className="w-6 h-6 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center flex-shrink-0">
    <svg className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.356-8-5.096 0-5.096 8 0 8 5.223 0 7.261-8 12.356-8z" />
    </svg>
  </div>
);

export const TerraformIcon = () => (
  <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="#844FBA">
    <polygon points="3,3 10,7 10,15 3,11" />
    <polygon points="10.5,7.3 17.5,11.3 17.5,19.3 10.5,15.3" />
    <polygon points="18,11.6 24,8 24,16 18,19.6" />
  </svg>
);

export const JenkinsIcon = () => (
  <div className="w-6 h-6 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center flex-shrink-0">
    <svg className="w-4 h-4 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="4" />
      <path d="M6 20v-2a6 6 0 0 1 12 0v2" />
      <path d="M12 12v3" />
    </svg>
  </div>
);

export const GitHubActionsIcon = () => (
  <div className="w-6 h-6 rounded-lg bg-slate-900 text-white flex items-center justify-center flex-shrink-0 border border-slate-700">
    <svg className="w-3.5 h-3.5 fill-current text-[#2088FF]" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  </div>
);

export const NginxIcon = () => (
  <div className="w-6 h-6 rounded-lg bg-[#009639] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 shadow-sm">
    N
  </div>
);

export const GitIcon = () => (
  <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="#F05032">
    <path d="M2.6 10.6L10.6 2.6c.8-.8 2-.8 2.8 0l8 8c.8.8.8 2 0 2.8l-8 8c-.8.8-2 .8-2.8 0l-8-8c-.8-.8-.8-2 0-2.8z"/>
    <circle cx="12" cy="8" r="2" fill="white" />
    <circle cx="12" cy="16" r="2" fill="white" />
    <circle cx="16" cy="12" r="2" fill="white" />
  </svg>
);

export const PostmanIcon = () => (
  <div className="w-6 h-6 rounded-full bg-[#FF6C37] text-white flex items-center justify-center flex-shrink-0 shadow-sm font-bold text-xs">
    P
  </div>
);

export const LinuxIcon = () => (
  <div className="w-6 h-6 rounded-lg bg-amber-100 border border-amber-300 flex items-center justify-center flex-shrink-0">
    <span className="text-sm">🐧</span>
  </div>
);

export const SwaggerIcon = () => (
  <div className="w-6 h-6 rounded-full bg-[#85EA2D] text-[#173647] flex items-center justify-center font-bold text-[10px] flex-shrink-0 shadow-sm border border-emerald-500/30">
    {}
  </div>
);

export const SystemDesignIcon = () => (
  <div className="w-6 h-6 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center flex-shrink-0">
    <svg className="w-4 h-4 text-sky-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="3" width="6" height="6" rx="1"/>
      <rect x="16" y="3" width="6" height="6" rx="1"/>
      <rect x="9" y="15" width="6" height="6" rx="1"/>
      <path d="M5 9v3a2 2 0 002 2h5m7-5v3a2 2 0 01-2 2h-5m0 0v1"/>
    </svg>
  </div>
);

export const DistributedIcon = () => (
  <div className="w-6 h-6 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
    <svg className="w-4 h-4 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="3"/>
      <circle cx="5" cy="6" r="2"/>
      <circle cx="19" cy="6" r="2"/>
      <circle cx="5" cy="18" r="2"/>
      <circle cx="19" cy="18" r="2"/>
      <path d="M7 7l3.5 3.5m3 3L17 17M17 7l-3.5 3.5m-3 3L7 17"/>
    </svg>
  </div>
);

export const EventDrivenIcon = () => (
  <div className="w-6 h-6 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
    <svg className="w-4 h-4 text-amber-500 fill-current" viewBox="0 0 24 24">
      <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z"/>
    </svg>
  </div>
);

export const QueueIcon = () => (
  <div className="w-6 h-6 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center flex-shrink-0">
    <svg className="w-4 h-4 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="4" rx="1"/>
      <rect x="3" y="10" width="18" height="4" rx="1"/>
      <rect x="3" y="16" width="18" height="4" rx="1"/>
    </svg>
  </div>
);

export const SecurityIcon = () => (
  <div className="w-6 h-6 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
    <svg className="w-4 h-4 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="M9 12l2 2 4-4"/>
    </svg>
  </div>
);

export const OAuthIcon = () => (
  <div className="w-6 h-6 rounded-lg bg-slate-800 text-amber-400 flex items-center justify-center flex-shrink-0 border border-slate-700">
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  </div>
);
