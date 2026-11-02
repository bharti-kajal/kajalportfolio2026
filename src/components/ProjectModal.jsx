import React from 'react';
import { X, ExternalLink, CheckCircle, Server, Database, Shield, Zap } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#020a24]/75 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-xl rounded-3xl bg-gradient-to-br from-[#14307f]/90 to-[#071a4d]/95 backdrop-blur-2xl border border-white/30 p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,10,40,0.6)] text-white max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className={`w-12 h-12 rounded-2xl ${project.iconBg} flex items-center justify-center text-white shadow-md flex-shrink-0`}>
            {project.icon}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${project.tagColor}`}>
                {project.tag}
              </span>
            </div>
            <p className="text-xs text-sky-200/90 font-medium">{project.category}</p>
          </div>
        </div>

        {/* Summary */}
        <p className="text-sm text-slate-100/90 leading-relaxed mb-6 font-normal">
          {project.summary}
        </p>

        {/* Key Architectural Highlights */}
        <div className="mb-6 space-y-2.5">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">Key Architecture & Highlights</h4>
          <div className="grid grid-cols-1 gap-2 text-xs text-slate-100/90">
            <div className="p-3 rounded-xl bg-white/10 border border-white/20 flex items-start gap-2.5">
              <Zap className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
              <span>Optimized throughput with Redis in-memory caching and connection pooling, reducing p99 latency to &lt;45ms.</span>
            </div>
            <div className="p-3 rounded-xl bg-white/10 border border-white/20 flex items-start gap-2.5">
              <Server className="w-4 h-4 text-[#0066ff] flex-shrink-0 mt-0.5" />
              <span>Modular microservice architecture orchestrated with Docker containers and automated CI/CD deployments.</span>
            </div>
            <div className="p-3 rounded-xl bg-white/10 border border-white/20 flex items-start gap-2.5">
              <Shield className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>Robust authentication layer with JWT, RBAC permissions, encrypted payloads, and strict rate limiting.</span>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-6">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {project.tech && project.tech.map((t, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/12 text-sky-200 border border-white/25"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-gradient-to-b from-[#2f8bff] to-[#0052e6] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all"
        >
          Close Preview
        </button>
      </div>
    </div>
  );
}

