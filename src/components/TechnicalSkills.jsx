import React, { useState } from 'react';
import { Layers, ArrowRight } from 'lucide-react';
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

export default function TechnicalSkills({ onViewAllSkills }) {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Backend', 'Databases', 'DevOps & Cloud', 'Architecture'];

  const allSkills = [
    { name: 'Node.js', icon: <NodeJsIcon />, category: 'Backend' },
    { name: 'Express.js', icon: <ExpressIcon />, category: 'Backend' },
    { name: 'TypeScript', icon: <TypeScriptIcon />, category: 'Backend' },
    { name: 'JavaScript', icon: <JavaScriptIcon />, category: 'Backend' },
    { name: 'Python', icon: <PythonIcon />, category: 'Backend' },
    { name: 'FastAPI', icon: <FastAPIIcon />, category: 'Backend' },
    { name: 'PHP', icon: <PHPIcon />, category: 'Backend' },
    { name: 'React', icon: <ReactIcon />, category: 'Other' },
    { name: 'PostgreSQL', icon: <PostgresIcon />, category: 'Databases' },
    { name: 'MySQL', icon: <MySQLIcon />, category: 'Databases' },
    { name: 'MongoDB', icon: <MongoIcon />, category: 'Databases' },
    { name: 'Redis', icon: <RedisIcon />, category: 'Databases' },
    { name: 'Sequelize', icon: <SequelizeIcon />, category: 'Databases' },
    { name: 'Mongoose', icon: <MongooseIcon />, category: 'Databases' },
    { name: 'AWS', icon: <AWSIcon />, category: 'DevOps & Cloud' },
    { name: 'Docker', icon: <DockerIcon />, category: 'DevOps & Cloud' },
  ];

  const categorySkills = {
    All: allSkills,
    Backend: [
      { name: 'Node.js', icon: <NodeJsIcon /> },
      { name: 'Express.js', icon: <ExpressIcon /> },
      { name: 'NestJS', icon: <NestJSIcon /> },
      { name: 'REST APIs', icon: <RestApiIcon /> },
      { name: 'JWT', icon: <JwtIcon /> },
      { name: 'Microservices', icon: <MicroservicesIcon /> },
      { name: 'WebSockets', icon: <WebSocketsIcon /> },
      { name: 'Redis', icon: <RedisIcon /> },
    ],
    Databases: [
      { name: 'PostgreSQL', icon: <PostgresIcon /> },
      { name: 'MySQL', icon: <MySQLIcon /> },
      { name: 'MongoDB', icon: <MongoIcon /> },
      { name: 'Redis', icon: <RedisIcon /> },
      { name: 'Sequelize', icon: <SequelizeIcon /> },
      { name: 'Mongoose', icon: <MongooseIcon /> },
    ],
    'DevOps & Cloud': [
      { name: 'AWS', icon: <AWSIcon /> },
      { name: 'Docker', icon: <DockerIcon /> },
      { name: 'Kubernetes', icon: <KubernetesIcon /> },
      { name: 'CI/CD', icon: <CicdIcon /> },
      { name: 'Terraform', icon: <TerraformIcon /> },
      { name: 'Jenkins', icon: <JenkinsIcon /> },
    ],
    Architecture: [
      { name: 'System Design', icon: <SystemDesignIcon /> },
      { name: 'Distributed Systems', icon: <DistributedIcon /> },
      { name: 'Event-Driven', icon: <EventDrivenIcon /> },
      { name: 'Message Queues', icon: <QueueIcon /> },
    ],
  };

  const displayedSkills = categorySkills[activeTab] || allSkills;

  return (
    <section id="skills" className="relative z-30 w-full">
      <div className="glass-widget p-6 sm:p-7">
        {/* Header matching Ref Image 2 */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center text-[#0a5cff]">
              <Layers className="w-4 h-4" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0b1a45] tracking-tight">Technical Skills</h2>
          </div>

          <div className="flex items-center gap-4">
            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {tabs.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap transition-all ${
                      isActive
                        ? 'bg-gradient-to-b from-[#2f8bff] to-[#0052e6] text-white shadow-[0_4px_12px_rgba(0,82,230,0.4)]'
                        : 'text-[#26356b] hover:text-[#0b1a45] bg-white/55 hover:bg-white/90 border border-white/80'
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            <button
              onClick={onViewAllSkills}
              className="hidden sm:flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0066ff] hover:text-blue-700 transition-colors group flex-shrink-0"
            >
              <span>View All Skills</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* 4-Column Horizontal Pill Grid (Exact Ref Image 2 Layout) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-3.5 pt-1">
          {displayedSkills.map((skill, idx) => (
            <div
              key={idx}
              className="glass-item rounded-2xl px-3.5 py-3 flex items-center gap-3 cursor-default hover:border-blue-300"
            >
              <div className="flex items-center justify-center flex-shrink-0">
                {skill.icon}
              </div>
              <span className="text-xs sm:text-sm font-bold text-[#0b1a45] tracking-tight truncate">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
