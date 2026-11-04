import React, { useState } from 'react';
import {
  X,
  Server,
  Database,
  Layers,
  Cpu,
  Zap,
  Shield,
  Activity,
  ArrowRight,
  ChevronRight,
  GitBranch,
  CheckCircle2,
  Clock,
  Code2,
  Radio,
  Share2,
  MessageSquare,
  HelpCircle,
  TrendingUp,
  Workflow,
  Sparkles,
  ExternalLink
} from 'lucide-react';

export default function SwiftDialCaseStudyModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('summary');
  const [selectedStage, setSelectedStage] = useState(1);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const stagesData = [
    {
      stage: 1,
      title: 'Company Started — Baseline Architecture',
      traffic: '10 users / day',
      architecture: 'Users -> Internet -> Nginx -> Node.js -> MySQL',
      bottleneck: 'None yet — establish clean baseline & production standards.',
      howDetected: 'Initial healthcheck ping (200 OK), basic server uptime monitor.',
      rootCause: 'Low traffic, single EC2 t3.micro / VPS sufficient.',
      solution: 'Clean separation of concerns: Nginx as reverse proxy, Node.js runtime, MySQL InnoDB relational store. Avoid premature complexity.',
      whyNotOther: 'No Kubernetes, no Kafka, no microservices needed. Writing clean modular code is the only priority.',
      nextBottleneck: 'Lack of metrics: As traffic grows, how will we know if CPU, RAM, or event loop are struggling?'
    },
    {
      stage: 2,
      title: 'Traffic Reaches 1,000 Users/Day',
      traffic: '1,000 users / day',
      architecture: 'Users -> Nginx -> Node.js -> MySQL + Prometheus & Grafana',
      bottleneck: 'Observability gap: Is the server okay? How do engineers know before users complain?',
      howDetected: 'Engineers inspect CPU %, memory utilization, disk I/O, and API response logs via CloudWatch/Prometheus.',
      rootCause: 'Silent failures and unmonitored memory leaks can kill a backend without warning.',
      solution: 'Introduce APM (Application Performance Monitoring): Prometheus metrics exporter, Grafana dashboards, Winston/Pino structured JSON logs, and alert thresholds (CPU > 80%).',
      whyNotOther: 'Fix observability before buying bigger servers. You cannot optimize what you do not measure.',
      nextBottleneck: 'Database starts slowing down as table rows cross tens of thousands.'
    },
    {
      stage: 3,
      title: 'Traffic Reaches 10,000 Users/Day',
      traffic: '10,000 users / day',
      architecture: 'Users -> Nginx (Gzip) -> Node.js -> MySQL (B-Tree Indexes + Query Tuning)',
      bottleneck: 'Slow API response times (p99 > 2.5s), DB CPU spikes, full table scans.',
      howDetected: 'MySQL Slow Query Log enabled (queries > 500ms), Grafana alert on API latency.',
      rootCause: 'Unindexed WHERE, ORDER BY, and JOIN columns causing O(N) table scans; heavy JSON payloads uncompressed.',
      solution: '1) Add composite B-Tree indexes on tenant_id, lead_status, created_at. 2) Use EXPLAIN to eliminate table scans. 3) Enable Nginx Gzip/Brotli compression for 70% smaller payloads. 4) Node.js in-memory LRU cache for static settings.',
      whyNotOther: 'NOT Kafka or Kubernetes! Fix the code and database first. A missing index costs 0 dollars to fix.',
      nextBottleneck: 'Single server CPU & RAM reach capacity during peak daytime calling hours.'
    },
    {
      stage: 4,
      title: 'Traffic Reaches 1 Lakh Users/Day (Vertical Scaling)',
      traffic: '100,000 users / day',
      architecture: 'Users -> Nginx -> Node.js (Scaled to 64GB / 16 Core) -> MySQL',
      bottleneck: 'Single Node instance event loop lag (> 150ms), OS file descriptor limits hit.',
      howDetected: 'High CPU utilization (92%), event loop delay metrics, socket connection drops.',
      rootCause: 'High concurrent telecalling webhooks and socket connections overloading a single CPU core.',
      solution: 'Vertical Scaling (Scale-Up): Upgrade instance 8GB -> 16GB -> 32GB -> 64GB; utilize Node.js Cluster module / PM2 to fork worker processes matching CPU core count; increase ulimit -n file descriptors.',
      whyNotOther: 'Vertical scaling requires zero architectural code refactoring. Fast and predictable while planning horizontal scale.',
      nextBottleneck: 'Vertical scaling reaches hardware and cost limits (single point of failure).'
    },
    {
      stage: 5,
      title: 'Vertical Scaling Limit Reached — Horizontal Scaling',
      traffic: '2.5 Lakh users / day',
      architecture: 'Users -> AWS ALB / Nginx Load Balancer -> [Node 1, Node 2, Node 3, Node 4] -> MySQL',
      bottleneck: 'Single server cannot grow larger; any server restart causes total downtime.',
      howDetected: 'Cannot provision larger cloud instance cost-effectively; single point of failure (SPOF) risk.',
      rootCause: 'Hardware vertical limits reached; tight coupling of state prevents distributing traffic.',
      solution: 'Horizontal Scaling (Scale-Out): Place Application Load Balancer (ALB) with Round-Robin / Least-Connections algorithm in front of multiple stateless Node.js instances; implement automated healthchecks (/health).',
      whyNotOther: 'Must make Node.js instances completely stateless (move user sessions out of local memory).',
      nextBottleneck: 'Now 4 Node servers are all pounding the SAME single MySQL database simultaneously!'
    },
    {
      stage: 6,
      title: 'Database Becomes the Bottleneck (Read/Write Contention)',
      traffic: '5 Lakh users / day',
      architecture: 'ALB -> Node Cluster -> [MySQL Primary (Write)] + [MySQL Replicas 1 & 2 (Read)]',
      bottleneck: 'Database connection exhaustion, read locking, disk I/O 100%, write latency spikes.',
      howDetected: 'MySQL "Too many connections" errors, replication lag alerts, connection pool timeouts.',
      rootCause: '80% of database traffic is SELECT reads (leads list, agent dashboards), starving WRITE queries.',
      solution: '1) Master-Slave Database Replication: 1 Master for INSERT/UPDATE/DELETE; 2 Read Replicas for SELECT queries. 2) Connection pooling with strict max_connections and pool reuse (Hikari / mysql2 pool).',
      whyNotOther: 'Sharding is too complex right now. Master-replica cleanly handles 80/20 read/write asymmetry.',
      nextBottleneck: 'Repeated identical queries for dashboards and lead lookups keeping DB CPU at 90%.'
    },
    {
      stage: 7,
      title: 'Database CPU at 90% — Redis In-Memory Caching Enters',
      traffic: '10 Lakh (1M) users / day',
      architecture: 'ALB -> Node Cluster -> Redis Cluster (Cache) -> MySQL Primary & Replicas',
      bottleneck: 'MySQL CPU at 90% due to repeated identical queries (dashboard stats, tenant configs, agent sessions).',
      howDetected: 'Database CPU graphs pegged near 90%; 10,000 calls fetching the exact same lead metadata.',
      rootCause: 'Disk-based databases are not designed for high-frequency sub-millisecond repetitive reads.',
      solution: 'Introduce Redis in-memory cache using Cache-Aside Pattern: Check Redis first (sub-millisecond hit). If cache miss, fetch from MySQL and set Redis with TTL (Time To Live). Cache invalidation on updates.',
      whyNotOther: 'Why Redis and not Kafka? Kafka is for asynchronous message queues; Redis is for high-speed sub-millisecond RAM caching.',
      nextBottleneck: 'A single API request (e.g. Create Lead / Call Finished) takes 10 seconds because it synchronously triggers SMS, WhatsApp, Email, Webhooks, CRM, and Payments!'
    },
    {
      stage: 8,
      title: 'Rising Traffic — Kafka / RabbitMQ Asynchronous Queues Enter',
      traffic: '25 Lakh (2.5M) users / day',
      architecture: 'Node API -> RabbitMQ/Kafka Topics -> Worker Services (SMS, Email, Webhook, Analytics) -> DB',
      bottleneck: 'API response takes 10+ seconds; 3rd party SMS/WhatsApp gateway latency blocks the Node request lifecycle.',
      howDetected: 'High p99 API latency, client timeouts, cascading failures when external WhatsApp/Twilio gateway slows down.',
      rootCause: 'Synchronous execution of non-critical secondary tasks in the HTTP request-response cycle.',
      solution: 'Introduce Message Queues (RabbitMQ / Kafka): API persists lead, publishes "LeadCreated" / "CallEnded" event to queue, and responds 200 OK in 45ms. Dedicated async background workers consume events and send SMS, WhatsApp, Webhooks, and Payments with automatic retry & DLQ (Dead Letter Queue).',
      whyNotOther: 'Why Kafka/RabbitMQ here and not earlier? There was no heavy async multi-service workload until now!',
      nextBottleneck: 'Codebase grows to 20 lakh lines; 40 developers changing the same monolith; 3-hour deploys causing frequent regressions.'
    },
    {
      stage: 9,
      title: 'Team Scalability Crisis — Monolith to Microservices',
      traffic: '50 Lakh (5M) users / day',
      architecture: 'API Gateway -> Auth Service, Dialing Engine, CRM Service, Billing Service, Webhook Service',
      bottleneck: 'Development velocity plummets: Monolith is 20 lakh lines, deploys take 3 hours, one bug crashes the whole app.',
      howDetected: 'Release bottlenecks, cross-team deployment blockers, merge conflicts, inconsistent scaling needs.',
      rootCause: 'Team scaling crisis: Microservices are introduced primarily for team ownership and independent releases, NOT just traffic!',
      solution: 'Decompose monolith into domain-driven Microservices: 1) Auth & Identity Service 2) Real-time Voice & Dialing Service 3) CRM & Lead Management 4) Billing & Payments 5) Notification & Webhook Engine. Each service has its own DB, CI/CD pipeline, and independent auto-scaling.',
      whyNotOther: 'Senior insight: Microservices add network complexity and distributed state overhead. They are only justified when team and deployment boundaries demand it.',
      nextBottleneck: 'Database volume explodes into terabytes; single MySQL primary cannot handle global writes.'
    },
    {
      stage: 10,
      title: '1 Crore (10M) Users/Day — Enterprise Distributed Scale',
      traffic: '10,000,000 users / day',
      architecture: 'Global Cloudflare CDN -> K8s Auto-scaled Cluster -> Sharded MySQL + Redis Cluster + Kafka + Distributed Tracing',
      bottleneck: 'Terabytes of call recordings and logs; database write limits; cascading cascading network failures.',
      howDetected: 'Storage capacity alerts, cross-region latency differences, network jitter on WebRTC calling.',
      rootCause: 'Single database cannot hold terabytes of transactional records; high volume requires distributed partitioning.',
      solution: '1) Database Sharding & Partitioning: Shard by Tenant_ID/Organization_ID. 2) Global CDN (Cloudflare) for static assets & edge caching. 3) Kubernetes (EKS) Horizontal Pod Autoscaling (HPA) based on CPU & queue depth. 4) Circuit Breakers (Opossum) to isolate failed downstream services. 5) Distributed Tracing with OpenTelemetry & Jaeger. 6) Redis Token-Bucket rate limiting.',
      whyNotOther: 'Full enterprise distributed resilience: Zero single points of failure, resilient to cloud region outages.',
      nextBottleneck: 'Global multi-region data sovereignty and compliance laws (GDPR, HIPAA, RBI guidelines).'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-[#020a24]/85 backdrop-blur-xl animate-fadeIn overflow-y-auto">
      <div
        className="relative w-full max-w-5xl rounded-3xl bg-gradient-to-br from-[#0c2356]/95 via-[#081a42]/95 to-[#040e29]/95 backdrop-blur-2xl border border-white/25 shadow-[0_25px_80px_rgba(0,10,40,0.85)] text-white my-4 max-h-[92vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-6 border-b border-white/15 flex items-center justify-between flex-shrink-0 bg-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#0066ff] to-[#00d2ff] flex items-center justify-center text-white shadow-lg flex-shrink-0">
              <Radio className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-white tracking-tight">
                  SwiftDial: High-Throughput Voice & CRM Architecture
                </h2>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Production Case Study
                </span>
              </div>
              <p className="text-xs sm:text-[13px] text-sky-200/80 font-medium">
                Scaling from 10 Users/Day to 1 Crore (10M) Users/Day • Lead Backend Engineer: Kajal Bharti
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-sky-200 transition-colors border border-white/15"
              title="Share Case Study"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copied ? 'Copied Link!' : 'Share'}</span>
            </button>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors border border-white/20"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Sub-Tabs Navigation */}
        <div className="px-4 sm:px-6 py-2.5 bg-black/20 border-b border-white/10 flex items-center gap-2 overflow-x-auto no-scrollbar flex-shrink-0">
          {[
            { id: 'summary', label: '1. What is SwiftDial?', icon: <Sparkles className="w-3.5 h-3.5" /> },
            { id: 'roadmap', label: '2. 10-Stage Scaling Roadmap', icon: <TrendingUp className="w-3.5 h-3.5" /> },
            { id: 'mindset', label: '3. How Senior Engineers Think', icon: <Cpu className="w-3.5 h-3.5" /> },
            { id: 'lifecycle', label: '4. Deep Request Lifecycle', icon: <Workflow className="w-3.5 h-3.5" /> },
            { id: 'interviews', label: '5. Senior Interview Bank', icon: <HelpCircle className="w-3.5 h-3.5" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-semibold whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-[#0066ff] to-[#00aaff] text-white shadow-[0_2px_15px_rgba(0,102,255,0.5)] scale-100'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Modal Content Body */}
        <div className="p-4 sm:p-6 md:p-8 overflow-y-auto flex-1 space-y-6">
          {/* TAB 1: HIGH LEVEL SUMMARY */}
          {activeTab === 'summary' && (
            <div className="space-y-6 animate-fadeIn">
              {/* Executive Summary Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    1. High-Level Summary: What is SwiftDial?
                  </h3>
                </div>
                <p className="text-sm sm:text-[15px] text-slate-200 leading-relaxed font-normal">
                  <strong className="text-white">SwiftDial</strong> is an enterprise-grade, high-throughput cloud telecalling and CRM automation platform designed for modern sales, fintech, and customer service teams. It replaces slow manual dialing with an automated predictive dialer, real-time WebRTC/SIP call management, lead distribution algorithms, and instantaneous omni-channel triggers (WhatsApp, SMS, Email, Webhooks, Payments).
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 pt-4 border-t border-white/15 text-xs text-slate-200">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-sky-300 font-bold block mb-1">Target Throughput</span>
                    <span className="text-base sm:text-lg font-black text-white">1 Crore (10M)</span> calls/day
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-sky-300 font-bold block mb-1">Latency SLA</span>
                    <span className="text-base sm:text-lg font-black text-white">&lt; 45ms</span> API p99 response
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-sky-300 font-bold block mb-1">System Uptime</span>
                    <span className="text-base sm:text-lg font-black text-white">99.99%</span> zero dropped call state
                  </div>
                </div>
              </div>

              {/* Core Engineering Challenges */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/15">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-2">
                    <Zap className="w-4 h-4 text-amber-400" />
                    The Business Problem
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300 leading-relaxed list-disc ml-4">
                    <li>Sales reps waste 65% of their day manually dialing numbers and waiting through busy tones.</li>
                    <li>Leads go cold when follow-up WhatsApp/SMS messages are delayed by slow CRM servers.</li>
                    <li>Lack of real-time visibility into agent call duration, conversions, and call recordings.</li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/15">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-2">
                    <Server className="w-4 h-4 text-sky-400" />
                    The Engineering Challenge
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300 leading-relaxed list-disc ml-4">
                    <li>Handling 50,000+ simultaneous WebSockets connections without event loop blockage.</li>
                    <li>Preventing database write bottlenecks when thousands of agents log dispositions at 5:00 PM.</li>
                    <li>Offloading heavy 3rd-party webhook triggers (WhatsApp, Twilio, Stripe) asynchronously so users get immediate 50ms confirmation.</li>
                  </ul>
                </div>
              </div>

              {/* End-to-End Technology Stack */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/15">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#00d2ff]" />
                  SwiftDial Production Technology Stack
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-white/10 border border-white/15">
                    <span className="text-slate-400 text-[11px] block">Gateway & Ingress</span>
                    <span className="font-bold text-white text-sm">Nginx Reverse Proxy</span>
                    <span className="text-slate-300 text-[10px] block mt-1">SSL termination, Brotli compression, Rate limiting</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/10 border border-white/15">
                    <span className="text-slate-400 text-[11px] block">Application Core</span>
                    <span className="font-bold text-white text-sm">Node.js + Express</span>
                    <span className="text-slate-300 text-[10px] block mt-1">TypeScript, Cluster mode, Event-driven architecture</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/10 border border-white/15">
                    <span className="text-slate-400 text-[11px] block">Databases</span>
                    <span className="font-bold text-white text-sm">MySQL + Read Replicas</span>
                    <span className="text-slate-300 text-[10px] block mt-1">InnoDB, B-Tree indexes, Connection pooling, Sharding</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/10 border border-white/15">
                    <span className="text-slate-400 text-[11px] block">In-Memory Store</span>
                    <span className="font-bold text-white text-sm">Redis Cluster</span>
                    <span className="text-slate-300 text-[10px] block mt-1">Cache-aside, JWT sessions, Rate counters, Pub/Sub</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/10 border border-white/15">
                    <span className="text-slate-400 text-[11px] block">Message Queues</span>
                    <span className="font-bold text-white text-sm">RabbitMQ & Kafka</span>
                    <span className="text-slate-300 text-[10px] block mt-1">Async task processing, Dead letter queues (DLQ)</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/10 border border-white/15">
                    <span className="text-slate-400 text-[11px] block">Voice & Media</span>
                    <span className="font-bold text-white text-sm">WebRTC & SIP Trunks</span>
                    <span className="text-slate-300 text-[10px] block mt-1">Twilio / Asterisk, S3 storage for recordings</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/10 border border-white/15">
                    <span className="text-slate-400 text-[11px] block">Cloud Infrastructure</span>
                    <span className="font-bold text-white text-sm">AWS + Docker + K8s</span>
                    <span className="text-slate-300 text-[10px] block mt-1">ALB, EKS Auto-scaling, S3, CloudFront CDN</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/10 border border-white/15">
                    <span className="text-slate-400 text-[11px] block">Observability</span>
                    <span className="font-bold text-white text-sm">Prometheus & Grafana</span>
                    <span className="text-slate-300 text-[10px] block mt-1">Pino JSON logs, Jaeger distributed tracing, PagerDuty</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: THE 10-STAGE SCALING ROADMAP */}
          {activeTab === 'roadmap' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    The Full Growth Journey — Stage 1 to Stage 10
                  </h3>
                  <p className="text-xs text-sky-200/80">
                    From 10 users a day to 10,000,000 users a day: What breaks, why it breaks, and how we solve it.
                  </p>
                </div>

                <div className="flex items-center gap-1.5 flex-wrap">
                  {stagesData.map((s) => (
                    <button
                      key={s.stage}
                      onClick={() => setSelectedStage(s.stage)}
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg text-xs font-bold transition-all ${
                        selectedStage === s.stage
                          ? 'bg-[#00d2ff] text-slate-900 shadow-[0_0_15px_rgba(0,210,255,0.7)] scale-110'
                          : 'bg-white/10 text-slate-300 hover:bg-white/20'
                      }`}
                    >
                      {s.stage}
                    </button>
                  ))}
                </div>
              </div>

              {/* Selected Stage Deep Dive Card */}
              {(() => {
                const s = stagesData.find((item) => item.stage === selectedStage) || stagesData[0];
                return (
                  <div className="p-5 sm:p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/15 pb-3">
                      <div>
                        <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-sky-300">
                          STAGE {s.stage} OF 10
                        </span>
                        <h4 className="text-lg sm:text-xl font-black text-white">{s.title}</h4>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#0066ff] text-white self-start sm:self-auto">
                        Traffic: {s.traffic}
                      </span>
                    </div>

                    {/* Architecture Topology */}
                    <div className="p-3.5 rounded-xl bg-black/30 border border-white/10 font-mono text-xs text-cyan-300 flex items-center gap-2 overflow-x-auto">
                      <Workflow className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>{s.architecture}</span>
                    </div>

                    {/* Problem vs Diagnosis vs Fix Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/25 space-y-2">
                        <span className="font-bold text-red-300 uppercase tracking-wider flex items-center gap-1.5">
                          <Activity className="w-3.5 h-3.5" /> What Breaks & The Core Problem
                        </span>
                        <p className="text-slate-200">{s.bottleneck}</p>
                        <p className="text-slate-300 text-[11px]"><strong className="text-white">How engineers know:</strong> {s.howDetected}</p>
                        <p className="text-slate-300 text-[11px]"><strong className="text-white">Root Cause:</strong> {s.rootCause}</p>
                      </div>

                      <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/25 space-y-2">
                        <span className="font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Engineering Fix & Trade-offs
                        </span>
                        <p className="text-slate-200">{s.solution}</p>
                        <p className="text-slate-300 text-[11px]"><strong className="text-white">Why this solution:</strong> {s.whyNotOther}</p>
                        <p className="text-amber-200 text-[11px]"><strong className="text-amber-300">Next Bottleneck:</strong> {s.nextBottleneck}</p>
                      </div>
                    </div>
                  </div>
                );
              })()}

              {/* Quick Reference Table Matrix */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 overflow-x-auto">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                  Quick Reference Scaling Matrix (Stages 1 – 10)
                </h4>
                <table className="w-full text-left text-xs border-collapse min-w-[600px]">
                  <thead>
                    <tr className="border-b border-white/15 text-sky-300">
                      <th className="p-2 font-bold">Stage</th>
                      <th className="p-2 font-bold">Traffic</th>
                      <th className="p-2 font-bold">Core Bottleneck</th>
                      <th className="p-2 font-bold">Introduced Architecture</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-slate-300">
                    {stagesData.map((row) => (
                      <tr
                        key={row.stage}
                        onClick={() => setSelectedStage(row.stage)}
                        className={`cursor-pointer hover:bg-white/10 transition-colors ${
                          selectedStage === row.stage ? 'bg-white/15 font-semibold text-white' : ''
                        }`}
                      >
                        <td className="p-2 text-cyan-300 font-bold">Stage {row.stage}</td>
                        <td className="p-2">{row.traffic}</td>
                        <td className="p-2 max-w-xs truncate">{row.bottleneck}</td>
                        <td className="p-2 max-w-xs truncate">{row.solution}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: HOW SENIOR ENGINEERS THINK */}
          {activeTab === 'mindset' && (
            <div className="space-y-6 animate-fadeIn">
              {/* Monday Scenario */}
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-900/40 to-cyan-900/30 border border-blue-400/30 backdrop-blur-md">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-500/30 text-blue-200">
                    Monday Morning Scenario
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-white mb-2">
                  CEO: "Kajal, yesterday we had 500 users. Today we have 50,000. What should we do first?"
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic bg-black/20 p-3 rounded-xl border border-white/10 mb-4">
                  "Should we upgrade the database? Buy a new server? Introduce Redis? Introduce Kafka? Move to microservices? Add another Node server? Optimize the SQL? Use a CDN? How do we decide?"
                </p>
                <div className="space-y-2 text-xs sm:text-[13px] text-slate-100 leading-relaxed">
                  <p>
                    <strong className="text-emerald-300">The Senior Engineer Answer:</strong> We do <span className="underline decoration-red-400">NOT</span> jump to the trendiest tool. We do not introduce Kafka or Kubernetes blindfolded.
                  </p>
                  <p>
                    We check the metrics first: <strong>CPU, Memory, Disk I/O, Event Loop delay, Network Bandwidth, and Database Lock contention</strong>. The smallest pipe in the plumbing determines the fix.
                  </p>
                </div>
              </div>

              {/* The 5 Golden Questions */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/15 space-y-4">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  The Five Questions Asked at Every Scaling Decision
                </h4>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="font-bold text-cyan-300 block mb-0.5">1. What problem happened?</span>
                    <span className="text-slate-300">Quantifiable symptom: CPU reached 95%, p99 latency shot to 8.5 seconds, or API returned 504 Gateway Timeout.</span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="font-bold text-cyan-300 block mb-0.5">2. How did engineers know?</span>
                    <span className="text-slate-300">Through Grafana dashboards, Prometheus metrics, CloudWatch alarms, structured Winston/Pino JSON logs, or PagerDuty incident alerts.</span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="font-bold text-cyan-300 block mb-0.5">3. What is the root cause?</span>
                    <span className="text-slate-300">Is it missing database index causing full table scan? Connection pool exhaustion? Event loop blocking synchronous code? Or memory leak?</span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="font-bold text-cyan-300 block mb-0.5">4. Why this solution and not another?</span>
                    <span className="text-slate-300">Why Redis and not Kafka? (Redis solves read latency; Kafka solves async decouple). Why not Kubernetes yet? (K8s doesn't fix a slow SQL query). Match the fix to the problem size.</span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="font-bold text-cyan-300 block mb-0.5">5. What happened after the fix — what is tomorrow's bottleneck?</span>
                    <span className="text-slate-300">Every solution creates the next bottleneck. Scaling is the continuous cycle of finding today's constraint, fixing it, and monitoring for tomorrow's.</span>
                  </div>
                </div>
              </div>

              {/* Mental Model: Water Through Pipes */}
              <div className="p-5 rounded-2xl bg-white/10 border border-white/20">
                <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-2">
                  <Workflow className="w-4 h-4 text-sky-400" />
                  Mental Model: Water Through Pipes
                </h4>
                <p className="text-xs text-slate-200 leading-relaxed mb-3">
                  Think of your backend as water flowing through a chain of connected pipes:
                </p>
                <div className="p-3 rounded-xl bg-black/40 font-mono text-xs text-sky-300 overflow-x-auto">
                  Users -&gt; Internet -&gt; DNS -&gt; Load Balancer -&gt; Nginx -&gt; Node.js -&gt; Redis -&gt; MySQL
                </div>
                <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                  If water backs up, making the Node pipe 10x wider does nothing if MySQL is the 1-inch bottleneck. A senior engineer finds the narrowest pipe, widens it, and anticipates which pipe will overflow next.
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: DEEP REQUEST LIFECYCLE */}
          {activeTab === 'lifecycle' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="p-5 rounded-2xl bg-white/10 border border-white/20">
                <h3 className="text-lg font-bold text-white mb-2">
                  The Complete Request Journey: https://swiftdial.com/login
                </h3>
                <p className="text-xs text-sky-200/90 leading-relaxed">
                  From the instant the user presses Enter in the browser until the dashboard renders on screen. A true 5-year senior backend engineer understands every single layer.
                </p>
              </div>

              {/* Step-by-step Interactive Journey */}
              <div className="space-y-3 text-xs sm:text-sm">
                {[
                  {
                    step: '1. Browser & URL Parsing',
                    detail: 'Browser parses URL scheme (https), host (swiftdial.com), and path (/login). Checks browser HSTS cache and local DNS cache.'
                  },
                  {
                    step: '2. DNS Resolution (Domain to IP)',
                    detail: 'Recursive query: Browser cache -> OS hosts file -> ISP Resolver -> Root DNS Server (.) -> TLD Server (.com) -> Authoritative Nameserver (Route 53) -> Returns server IP (e.g. 13.235.44.12).'
                  },
                  {
                    step: '3. TCP 3-Way Handshake',
                    detail: 'Reliable transport establishment over Port 443: Client sends SYN -> Server returns SYN-ACK -> Client sends ACK. Connection is now ESTABLISHED.'
                  },
                  {
                    step: '4. TLS 1.3 Handshake (HTTPS Encryption)',
                    detail: 'ClientHello with cipher suites -> ServerHello with SSL certificate & public key -> Diffie-Hellman key exchange generates symmetric session keys -> Encrypted communication begins, immune to MITM attacks.'
                  },
                  {
                    step: '5. Nginx Reverse Proxy & Edge Layer',
                    detail: 'Nginx receives encrypted packets, terminates SSL, checks IP rate-limiting, handles DDoS filtering, and forwards HTTP request to internal Node.js port (e.g. http://127.0.0.1:3000).'
                  },
                  {
                    step: '6. Node.js Event Loop & Libuv',
                    detail: 'V8 parses incoming HTTP stream. Event loop registers socket file descriptor in epoll (Linux) or IOCP (Windows). Non-blocking I/O delegates heavy work without blocking the single thread.'
                  },
                  {
                    step: '7. Express Middleware Pipeline',
                    detail: 'Request passes through Helmet (security headers) -> CORS (origins) -> Express.json() (body parsing) -> Rate Limiter -> JWT Auth Middleware (verifying Bearer token signature).'
                  },
                  {
                    step: '8. Controller -> Service -> Repository Pattern',
                    detail: 'Routing triggers AuthController.login() -> AuthService.validateCredentials() hashes password with bcrypt -> UserRepository.findByEmail() prepares database query.'
                  },
                  {
                    step: '9. MySQL Connection Pool & Query Execution',
                    detail: 'Connection pool checks out an active MySQL connection -> Executes indexed query: SELECT id, password_hash, tenant_id FROM users WHERE email = ? LIMIT 1 -> B-Tree index scan in < 2ms -> Connection returned to pool.'
                  },
                  {
                    step: '10. Redis Session & Async Event Offloading',
                    detail: 'AuthService creates signed JWT; caches session profile in Redis (TTL 24 hours); pushes "UserLoggedIn" audit event to RabbitMQ/Kafka queue for background security analytics.'
                  },
                  {
                    step: '11. JSON Response Streamed Back to Client',
                    detail: 'Controller returns 200 OK with JSON payload -> Node serializes response -> Nginx compresses with Gzip/Brotli -> TCP packets travel over fiber optic cables -> Browser receives response.'
                  },
                  {
                    step: '12. Browser DOM, CSSOM & React Hydration',
                    detail: 'Browser parses HTML/JSON -> Executes React bundle -> Updates Virtual DOM -> Mounts SwiftDial Agent Dashboard with active WebSockets connection for live incoming calls.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-colors flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-blue-500/20 text-cyan-300 font-bold flex items-center justify-center flex-shrink-0 text-xs mt-0.5">
                      {idx + 1}
                    </div>
                    <div>
                      <h5 className="font-bold text-white text-xs sm:text-sm">{item.step}</h5>
                      <p className="text-slate-300 text-xs mt-0.5 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: SENIOR INTERVIEW QUESTION BANK */}
          {activeTab === 'interviews' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="p-5 rounded-2xl bg-white/10 border border-white/20">
                <h3 className="text-lg font-bold text-white mb-2">
                  Senior Backend Interview Defense — 8 Core Questions
                </h3>
                <p className="text-xs text-sky-200/90">
                  How a 5-year senior backend engineer answers questions without rote memorization.
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                {[
                  {
                    q: 'Q1: Why use Nginx at all? Why not expose Node.js directly to the internet?',
                    a: 'Exposing Node directly is dangerous and inefficient. 1) Security: Nginx runs as an unprivileged process, handles slowloris attacks, and prevents Node memory buffer overflows. 2) SSL Termination: Nginx offloads compute-heavy TLS handshakes using hardware crypto, freeing Node CPU for business logic. 3) Static File Serving: Nginx serves images/assets directly from OS kernel buffer (sendfile syscall) without entering Node event loop. 4) Reverse Proxy & Load Balancing: Nginx seamlessly distributes traffic to multiple Node worker clusters.'
                  },
                  {
                    q: 'Q2: Why is Node.js single-threaded and how does it handle 50,000 concurrent calls?',
                    a: 'Node.js is single-threaded in its JavaScript execution, but multi-threaded under the hood via Libuv. The Event Loop registers non-blocking socket connections with OS-level multiplexing (epoll on Linux, kqueue on Mac, IOCP on Windows). When an I/O event occurs (DB return or incoming network packet), the OS notifies Node, which queues the callback. CPU-intensive operations (bcrypt hashing, file compression, crypto) are dispatched to Libuv thread pool (default 4 threads), keeping the main thread free to accept new incoming connections.'
                  },
                  {
                    q: 'Q3: When do you scale Vertically vs Horizontally?',
                    a: 'Vertical scaling (bigger RAM/CPU) is the first choice when traffic grows quickly because it requires zero code refactoring and maintains single-instance simplicity. However, vertical scaling has a hard hardware ceiling and leaves a Single Point of Failure (SPOF). Once the application exceeds a 64GB/16-core instance, or when 99.99% high availability is required, you must scale horizontally by placing a Load Balancer in front of stateless worker nodes.'
                  },
                  {
                    q: 'Q4: Why introduce Redis at Stage 7 and not earlier?',
                    a: 'Premature caching adds cache invalidation bugs and distributed state synchronization complexity. At Stage 1-6, the database with proper B-Tree indexes easily handles traffic. Redis is only introduced at Stage 7 when repeated identical read queries (e.g. agent dashboards, tenant permissions) drive database CPU to 90%. Redis cache-aside eliminates 85% of repeated SELECT queries with sub-millisecond RAM retrieval.'
                  },
                  {
                    q: 'Q5: Why introduce Kafka / RabbitMQ at Stage 8?',
                    a: 'At Stage 8, a single user action like "Create Lead" or "Call Ended" requires 6+ downstream tasks: send SMS, send WhatsApp message, notify CRM webhook, update analytics, generate invoice. If executed synchronously, external network timeouts cause the API to take 10 seconds. Message queues decouple the architecture: the API publishes an event in 5ms and responds 200 OK immediately; background workers consume the queue reliably with retry mechanisms and dead letter queues.'
                  },
                  {
                    q: 'Q6: Are microservices introduced because of traffic?',
                    a: 'No! This is the #1 misconception in backend engineering. Microservices are introduced primarily because of TEAM SCALABILITY and DEPLOYMENT VELOCITY. When 40+ engineers touch a 20-lakh-line monolith, deployments take hours and one developer\'s bug breaks another team\'s feature. Microservices allow independent deployments, clear domain boundaries, and fault isolation. Traffic scaling is a secondary benefit.'
                  },
                  {
                    q: 'Q7: How do you optimize a slow database query under heavy load?',
                    a: '1) Run EXPLAIN on the SQL query to inspect access type (ALL vs ref/range) and rows examined. 2) Create composite indexes matching the exact query pattern (WHERE + ORDER BY). 3) Eliminate SELECT * to prevent fetching unused columns and large BLOBs. 4) Avoid functions in WHERE clauses (e.g., WHERE YEAR(created_at) = 2026 prevents index usage). 5) Implement pagination with cursor-based keyset pagination (WHERE id > last_id) instead of OFFSET/LIMIT.'
                  },
                  {
                    q: 'Q8: What is a Database Connection Pool and why does it matter?',
                    a: 'Establishing a new TCP and database connection requires a 3-way handshake, authentication, and memory allocation taking 50-100ms. A connection pool maintains a set of pre-opened, persistent database connections (e.g. pool size 20-50). When a request arrives, it checks out an active connection, executes the query in 2ms, and returns the connection to the pool. This prevents database socket exhaustion under high concurrency.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                    <h5 className="font-bold text-cyan-300 text-xs sm:text-sm">{item.q}</h5>
                    <p className="text-slate-200 text-xs leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Bar */}
        <div className="p-4 sm:p-5 border-t border-white/15 bg-white/5 flex items-center justify-between flex-shrink-0 flex-wrap gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Documented & Engineered by Kajal Bharti (5+ Years Experience)</span>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#0066ff] to-[#00aaff] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
}

