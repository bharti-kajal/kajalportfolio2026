import React from 'react';
import { X, CheckCircle, Database, Server, Cloud, Cpu, Terminal } from 'lucide-react';

export default function SkillsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const categories = [
    {
      title: 'Backend & Runtimes',
      icon: <Server className="w-4 h-4 text-[#0f5a43]" />,
      skills: ['Node.js', 'Express.js', 'TypeScript', 'JavaScript (ES6+)', 'Python', 'FastAPI', 'PHP'],
    },
    {
      title: 'Databases & In-Memory Stores',
      icon: <Database className="w-4 h-4 text-emerald-600" />,
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Sequelize ORM', 'Mongoose ODM'],
    },
    {
      title: 'Cloud & Infrastructure',
      icon: <Cloud className="w-4 h-4 text-sky-500" />,
      skills: ['AWS (EC2, S3, RDS, Lambda)', 'Docker & Containers', 'CI/CD Pipelines', 'Nginx', 'PM2'],
    },
    {
      title: 'Architecture & Design',
      icon: <Cpu className="w-4 h-4 text-purple-600" />,
      skills: ['Microservices', 'System Design', 'RESTful API Architecture', 'GraphQL', 'WebSockets', 'Message Queues (BullMQ, RabbitMQ)', 'Event-Driven Systems'],
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#eadfc6]/55 backdrop-blur-xl animate-fadeIn">
      <div
        className="relative w-full max-w-2xl rounded-3xl bg-white/95 backdrop-blur-2xl border border-white p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,10,40,0.35)] text-slate-900 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <h3 className="text-xl font-bold text-slate-900 mb-1">Complete Technical Competencies</h3>
        <p className="text-xs text-slate-500 mb-6">A deep dive into 5+ years of backend engineering expertise.</p>

        <div className="space-y-5">
          {categories.map((cat, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-2 mb-3">
                {cat.icon}
                <h4 className="text-sm font-bold text-slate-900">{cat.title}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-800 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          className="w-full mt-6 py-3 rounded-xl bg-gradient-to-r from-[#0f5a43] to-[#1b7a5a] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all"
        >
          Close
        </button>
      </div>
    </div>
  );
}

