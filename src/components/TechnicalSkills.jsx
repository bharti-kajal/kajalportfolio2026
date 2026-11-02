import React, { useState } from 'react';
import { Layers, ArrowRight, Server, Database, Cloud, Network, Bot } from 'lucide-react';
import {
  NodeJsIcon,
  ExpressIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  PythonIcon,
  FastAPIIcon,
  PHPIcon,
  ReactIcon,
  PostgresIcon,
  MySQLIcon,
  MongoIcon,
  RedisIcon,
  SequelizeIcon,
  MongooseIcon,
  AWSIcon,
  DockerIcon,
  NestJSIcon,
  RestApiIcon,
  JwtIcon,
  MicroservicesIcon,
  WebSocketsIcon,
  KubernetesIcon,
  CicdIcon,
  TerraformIcon,
  JenkinsIcon,
  SystemDesignIcon,
  DistributedIcon,
  EventDrivenIcon,
  QueueIcon,
} from './TechIcons';

const LlmIcon = () => (
  <div className="w-6 h-6 rounded-lg bg-violet-500/10 border border-violet-500/30 flex items-center justify-center flex-shrink-0">
    <Bot className="w-4 h-4 text-violet-600" />
  </div>
);

const groups = [
  { title: 'Backend', Icon: Server, items: [['Node.js', NodeJsIcon], ['Express.js', ExpressIcon], ['NestJS', NestJSIcon], ['TypeScript', TypeScriptIcon]] },
  { title: 'Databases', Icon: Database, items: [['PostgreSQL', PostgresIcon], ['MySQL', MySQLIcon], ['MongoDB', MongoIcon], ['Redis', RedisIcon]] },
  { title: 'DevOps & Cloud', Icon: Cloud, items: [['AWS', AWSIcon], ['Docker', DockerIcon], ['Kubernetes', KubernetesIcon], ['Terraform', TerraformIcon]] },
  { title: 'Architecture & Others', tab: 'Architecture', Icon: Network, items: [['System Design', SystemDesignIcon], ['Microservices', MicroservicesIcon], ['CI/CD', CicdIcon], ['LLM & RAG', LlmIcon]] },
];

const tabs = ['All', 'Backend', 'Databases', 'DevOps & Cloud', 'Architecture'];

export default function TechnicalSkills({ onViewAllSkills }) {
  const [activeTab, setActiveTab] = useState('All');
  const visible = groups.filter((g) => activeTab === 'All' || (g.tab || g.title) === activeTab);
  const single = visible.length === 1;

  return (
    <section id="skills" className="relative z-30 w-full">
      <div className="glass-widget p-6 sm:p-7">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center text-[#0a5cff]"><Layers className="w-5 h-5" /></div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0b1a45] tracking-tight">Technical Skills</h2>
          </div>

          <div className="flex items-center gap-4 min-w-0">
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap transition-all ${
                    activeTab === tab
                      ? 'bg-gradient-to-b from-[#2f8bff] to-[#0052e6] text-white shadow-[0_4px_12px_rgba(0,82,230,0.4)]'
                      : 'text-[#26356b] hover:text-[#0b1a45] bg-white/55 hover:bg-white/90 border border-white/80'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <button onClick={onViewAllSkills} className="hidden sm:flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0066ff] hover:text-blue-700 transition-colors flex-shrink-0 group">
              <span>View All Skills</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        <div className={`grid gap-3 sm:gap-4 ${single ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'}`}>
          {visible.map(({ title, Icon, items }) => (
            <div key={title} className="glass-item rounded-2xl p-4">
              <div className="flex items-center gap-2 pb-2.5 mb-2.5 border-b border-[#9db3ea]/40">
                <Icon className="w-4 h-4 text-[#0a5cff]" />
                <h3 className="text-sm font-bold text-[#0b1a45]">{title}</h3>
              </div>
              <ul className={single ? 'grid grid-cols-2 sm:grid-cols-4 gap-2.5' : 'space-y-2.5'}>
                {items.map(([name, I]) => (
                  <li key={name} className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-[#0b1a45]">
                    <I /> {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
