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
  ExternalLink,
  PhoneCall,
  Volume2,
  Bot,
  Wallet,
  Users,
  Bell,
  FileSpreadsheet,
  Lock,
  Headphones,
  Sliders,
  DollarSign
} from 'lucide-react';

export default function SwiftDialCaseStudyModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('summary');
  const [selectedModule, setSelectedModule] = useState(1);
  const [selectedStage, setSelectedStage] = useState(1);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const callingModes = [
    {
      id: 'sim',
      title: '1. Native SIM Calling (GSM)',
      icon: <PhoneCall className="w-5 h-5 text-emerald-700" />,
      tag: 'Zero Telecom Cost',
      desc: "Invokes the smartphone's native cellular dialer via Android intents. Agents use regular SIM minutes while the SwiftDial background service tracks call duration, recording timestamps, and disposition remarks.",
      highlights: ['Uses agent regular mobile SIM plan', 'Automatic next-lead pop upon call disposition', 'Zero PBX / PRI trunk charges']
    },
    {
      id: 'voip',
      title: '2. VoIP Cloud Calling (QKonnect SIP)',
      icon: <Headphones className="w-5 h-5 text-sky-700" />,
      tag: 'Browser & App Calling',
      desc: 'Routes audio over internet data using QKonnect SIP/WebRTC servers. No physical SIM card needed. Built directly into browser dialers (SIP.js / JsSIP) and mobile apps with seat entitlement validation.',
      highlights: ['WebRTC browser dialer without deskphones', 'Seat entitlement checks before call dispatch', 'Remote encrypted audio recording storage']
    },
    {
      id: 'ivr',
      title: '3. Outbound IVR / OBD Broadcast',
      icon: <Volume2 className="w-5 h-5 text-amber-700" />,
      tag: 'Mass Voice Broadcast',
      desc: 'Automated mass outbound voice broadcasting via telecom gateway (obdapi2.ivrsms.com). Handles batch call dispatching, SHA-256 prompt hashing, two-tier telecom regulatory approval, and pulse-based billing.',
      highlights: ['High-volume pre-recorded voice broadcasting', '60-second automated approval polling worker', 'Prepaid pulse-based billing hold & capture']
    },
    {
      id: 'ai',
      title: '4. Realtime AI Voice Calling',
      icon: <Bot className="w-5 h-5 text-purple-700" />,
      tag: 'Autonomous Sales Agent',
      desc: 'Full-duplex conversational voice bot streaming 16kHz PCM audio bidirectionally over WebSockets. Combines Deepgram Nova-3 (STT), Google Gemini Flash (LLM), and Deepgram Aura (TTS) with real-time barge-in interruption detection.',
      highlights: ['Sub-second latency voice conversation', 'Barge-In interruption detection', 'Contextual qualification & human agent transfer']
    }
  ];

  const modules = [
    {
      id: 1,
      name: 'Module 1: Dual-Mode Telephony Engine (SIM + VoIP)',
      codeRef: 'modules_v2/campaign/controller/campaignController.js • voipCampaignEligibility.js',
      description: 'Unified telephony controller that dynamically switches between native GSM cellular dialing and cloud VoIP calling.',
      features: [
        'SIM Calling Mode: Invokes native smartphone dialer; background listener hooks into Android call state to track exact duration, status, and remarks.',
        'VoIP Calling Mode: Connects to QKonnect SIP/WebRTC infrastructure over internet data with no SIM card required.',
        'VoIP Seat Entitlement Validation: Automatically verifies whether an agent’s company has paid, active VoIP allocations before connecting cloud calls.',
        'Auto-Dialer Capability: Feeds the next prioritized lead to the telecaller immediately upon disposition submission, saving 30–40% manual dialing time.'
      ]
    },
    {
      id: 2,
      name: 'Module 2: QKonnect Call Recording & Matching Engine',
      codeRef: 'voipRecordingWebhook.js • callRecordingService.js',
      description: 'Webhook correlation engine that matches remote VoIP recording files to internal customer CRM leads with millisecond precision.',
      features: [
        'Dedicated Webhook Receivers: Secure endpoints (/recordings/qkonnect-webhook and incoming) receive call events and recording URLs.',
        'Timing-Safe HMAC Authentication: Incoming webhooks are validated using timing-safe SHA-256 x-api-key comparison to block spoofed events.',
        'Smart Recording Correlation: QKonnect assigns random UUIDs differing from SIP session IDs. Reconciled using agent extension, destination phone, and a 2-second timestamp tolerance window.',
        'Supervisor Playback & Audit: In-app secure audio player with speed controls, transcription review, and compliance export.'
      ]
    },
    {
      id: 3,
      name: 'Module 3: Outbound IVR & Voice Broadcasting Engine (OBD)',
      codeRef: 'modules_v2/ivr/routes.js • provider-client.js • billing.js • approval-worker.js',
      description: 'High-volume voice broadcast campaign engine connecting to telecom OBD gateway for mass outreach.',
      features: [
        'Audio Upload & Governance: Accepts PCM WAV audio prompts (up to 10 MB / 5 mins) and calculates immutable SHA-256 hashes for version auditing.',
        'Two-Tier Regulatory Approval: 1) Internal admin content review -> 2) Upload to obdapi2.ivrsms.com for telecom regulatory clearance.',
        'Automated Approval Worker: Background worker (approval-worker.js) polls provider approval status every 60 seconds with lease locks to prevent race conditions.',
        'Pulse-Based Billing Hold: Computes pulses as ⌈Duration / (Pulse × 1000)⌉ (e.g. 15s pulse @ 15 paise/attempt). Reserves estimated wallet balance before launch and captures only on completed attempts.',
        'Daily Batch Quota Management: Enforces campaign pacing with daily call quotas resetting at Asia/Kolkata midnight.'
      ]
    },
    {
      id: 4,
      name: 'Module 4: Realtime Conversational AI Voice Calling',
      codeRef: 'services/realtimeVoice/voiceSession.js • geminiProvider.js • deepgramProvider.js',
      description: 'Sub-second latency AI phone caller that conducts human-like sales discovery conversations.',
      features: [
        'WebSocket Media Bridge: Streams 16kHz mono linear PCM audio bidirectionally via /ws/realtime-voice.',
        'Deepgram Nova-3 STT: Converts customer speech to text with sub-second latency and Voice Activity Detection (VAD).',
        'Google Gemini Flash LLM: Contextually processes customer inquiries and generates natural objection-handling dialogue.',
        'Deepgram Aura TTS: Synthesizes Gemini responses into natural human speech chunks (aura-2-asteria-en).',
        'Barge-In (Interruption Detection): If the customer speaks while the AI is talking, audio output immediately aborts to listen to the caller.',
        'AI Outbound Job Dispatcher: REST API (POST /api/realtime-voice/outbound-call-jobs) dispatches automated AI qualification campaigns.'
      ]
    },
    {
      id: 5,
      name: 'Module 5: Multi-Channel Campaign Management Engine',
      codeRef: 'modules_v2/campaign/controller/campaignController.js',
      description: 'High-throughput campaign orchestrator supporting SIM, IVR, AI Voice, and WhatsApp broadcasts.',
      features: [
        '4 Campaign Types: Manual (SIM dialer), IVR (OBD broadcast), AI (Conversational bot), and WhatsApp broadcast.',
        'Finite State Machine: Strict lifecycle transitions: Draft -> Scheduled -> Active -> Paused -> Completed / Stopped.',
        'Bulk Lead Ingestion: Uploads up to 5,000 records via CSV or Excel (.xlsx, .xls) with header mapping, deduplication, and E.164 normalization.',
        'Meta Lead Ads OAuth Sync: Real-time webhook ingestion from Facebook & Instagram Lead Ads to automatically pipe ad inquiries directly into calling pools.',
        'Lead Distribution Engine: Distributes leads among selected telecallers via Round-Robin, Priority Weighted, or Pooled pickup.'
      ]
    },
    {
      id: 6,
      name: 'Module 6: Telecalling CRM & Dynamic Pipelines',
      codeRef: 'modules_v2/lead_status/controller/leadStatusController.js • dashboardController.js',
      description: 'Customizable lead lifecycle CRM with industry-specific sales pipelines and follow-up automations.',
      features: [
        'Dynamic Outcome Pipelines: Custom company-specific lead stages (e.g. New, Contacted, Interested, Callback, Converted, Lost).',
        'Industry Presets: Out-of-the-box configurations for Real Estate, BFSI, EdTech, Healthcare, and SaaS.',
        'Dual Callback Alarms: Notifies agents 5 minutes prior and at the exact scheduled callback time via FCM push notifications.',
        'Agent Break Tracker: Monitors agent pauses (Lunch, Tea, Training, Meeting) to ensure accurate talk-time and productivity metrics.'
      ]
    },
    {
      id: 7,
      name: 'Module 7: Corporate Wallet & Micro-Billing Ledger',
      codeRef: 'modules_v2/wallet/service.js • ledger.js • payments.js',
      description: 'Financial ledger engine managing pre-paid credits, pulse deductions, and gateway settlements.',
      features: [
        'Integer Paise Accounting: All balances stored as integer paise (₹1 = 100 paise) to eliminate floating-point rounding errors.',
        'Immutable Append-Only Ledger: Supports atomic ACID operations: credit, debit, reserve, capture, and release.',
        'Prepaid Reserve-Capture Mechanics: Prevents balance overdrafts by holding funds before IVR/call dispatch and capturing only when calls are attempted.',
        'Easebuzz Payment Gateway: Seamless online wallet top-ups with HMAC-SHA512 checksum validation and instant credit.'
      ]
    },
    {
      id: 8,
      name: 'Module 8: Supervision, Dashboards & Call Detail Records (CDR)',
      codeRef: 'modules_v2/reports/controller/reportsController.js • callHistory.js',
      description: 'Real-time analytics engine tracking agent productivity, connect ratios, and call recordings.',
      features: [
        'Super Admin & Employer Dashboards: Real-time charts showing total calls, connect ratios, average handle time (AHT), agent rankings, and campaign progress.',
        'Telecaller Personal Dashboard: Shows pending leads, today’s callbacks, talk-time leaderboards, and personal conversion ratios.',
        'Granular CDR Logging: Logs dialed number, calling mode (SIM vs. VOIP), duration in seconds, agent identity, call notes, and audio recording links.'
      ]
    },
    {
      id: 9,
      name: 'Module 9: Multi-Tenant RBAC & Multi-Channel Notifications',
      codeRef: 'modules_v2/team/controller/teamController.js • modules_v2/notifications/worker.js',
      description: 'Tenant isolation layer with hierarchical role-based permissions and omni-channel messaging.',
      features: [
        'Strict Multi-Tenancy: All SQL queries scoped by company_id with composite indexes to guarantee absolute tenant data isolation.',
        '4-Tier RBAC: Super Admin -> Company Employer -> Reporting Manager -> Telecaller.',
        'Multi-Level Reporting Trees: Managers oversee only their reporting hierarchy (UserReportTo table).',
        'Push Notifications (FCM): Sends background callback reminders, live caller alarms, and new lead assignment alerts.',
        'DLT Transactional SMS: Powered by Fast2SMS for OTPs, lead confirmations, and team invitation links.'
      ]
    }
  ];

  const techStackData = [
    { layer: 'Backend Framework', tech: 'Node.js (v24 LTS), Express.js (v4.21)', purpose: 'High-throughput REST API, route controllers, middleware stack, and cluster process management' },
    { layer: 'Realtime Audio Stream', tech: 'WebSockets (ws library)', purpose: 'Bidirectional streaming of 16kHz linear PCM audio frames between callers and AI voice bot' },
    { layer: 'Database & ORM', tech: 'MySQL 8.0, Sequelize ORM (v6)', purpose: 'Relational data persistence, 55+ tables, row-level pessimistic locks (FOR UPDATE) for wallet balance' },
    { layer: 'Cloud Telephony (VoIP)', tech: 'QKonnect (SIP / WebRTC, SIP.js, JsSIP)', purpose: 'Cloud call origination, browser web dialer, agent SIP extensions, and remote audio recording storage' },
    { layer: 'Outbound IVR / OBD', tech: 'Telecom OBD Gateway (obdapi2.ivrsms.com)', purpose: 'High-volume voice prompt uploads, SHA-256 verification, and automated mass voice broadcasting' },
    { layer: 'Speech-to-Text (STT)', tech: 'Deepgram Nova-3 (Streaming API)', purpose: 'Real-time speech transcription with sub-second latency and Voice Activity Detection (VAD)' },
    { layer: 'Conversational AI (LLM)', tech: 'Google Gemini Flash', purpose: 'Context-aware sales responses, natural dialogue generation, and dynamic objection handling' },
    { layer: 'Text-to-Speech (TTS)', tech: 'Deepgram Aura (aura-2-asteria-en)', purpose: 'Streaming conversational voice synthesis chunked back to the caller in real time' },
    { layer: 'Payment Gateway', tech: 'Easebuzz PG (HMAC-SHA512)', purpose: 'Online company wallet top-ups, subscription plan checkout, and webhook reconciliation' },
    { layer: 'Lead Generation Sync', tech: 'Meta Graph API (Facebook / Instagram)', purpose: 'Real-time webhook ingestion of Meta Lead Ads into campaign pools without manual export' },
    { layer: 'Messaging & Push', tech: 'Firebase Admin (FCM), Fast2SMS, WhatsApp', purpose: 'Push alarms, DLT-registered OTP SMS, and WhatsApp Cloud / whatsapp-web.js integration' },
    { layer: 'Scheduling & Workers', tech: 'node-cron, Custom in-process workers', purpose: 'Background IVR polling (60s), follow-up alarms, and daily midnight quota resets' },
    { layer: 'API Documentation', tech: 'Swagger UI / OpenAPI, YAML', purpose: 'Interactive API testing documentation accessible at /api-docs' },
  ];

  const portals = [
    {
      name: '1. Super Admin Portal (/superadmin)',
      target: 'Platform Owners & DevOps',
      desc: 'Master administrative panel overseeing all employer companies, callers, agents, subscription plans, platform-wide OTP audits, and global VoIP provider configurations.',
      keyRoles: 'Protected by automated rotating passwords (specialSuperadminRotation.js), global wallet audits, and VoIP trunk management.'
    },
    {
      name: '2. Admin / Employer Portal (/admin)',
      target: 'Company Owners & Telecalling Managers',
      desc: 'Tenant-level portal used by company owners/managers to manage teams, lead pipelines, data distribution, call reports, product collateral, and subscription renewals.',
      keyRoles: 'Lead allocation, campaign creation, IVR prompt uploads, wallet recharge via Easebuzz, and agent talk-time supervision.'
    },
    {
      name: '3. Telecaller / Agent Operations',
      target: 'Sales Executives & Support Callers',
      desc: 'Features web-based dialing (WebRTC & QKonnect SIP.js), SIM-mode calling, incoming/outgoing call logs, lead follow-ups, disposition updates, and training videos.',
      keyRoles: 'Auto-dialing, instant WhatsApp follow-up templates, dual-alarm callback notifications, and break time tracking.'
    },
    {
      name: '4. Sales & Inquiries Dashboard (/salesdashboard)',
      target: 'Growth & Business Development Teams',
      desc: 'Dedicated portal for internal sales teams to monitor incoming web leads, filter by company size or GST status, and dispatch lead batches to WhatsApp with one click.',
      keyRoles: 'Filtering enterprise inquiries from /api/hire_talent and /api/help-form, one-click WhatsApp outreach, and conversion tracking.'
    }
  ];

  const useCases = [
    {
      title: 'Real Estate Sales & Site Visit Scheduling',
      problem: 'Brokers generate hundreds of inquiries daily from Meta Ads, but agents call hours late, losing prospect interest.',
      solution: '1) Inquiries from Facebook/Instagram ads flow into SwiftDial instantly via Meta Webhook. 2) Campaign engine distributes leads to available telecallers via round-robin. 3) Mobile app triggers auto-dial on agent phone. 4) Caller sets status to "Site Visit Scheduled" with dual-alarm reminder.'
    },
    {
      title: 'BFSI / Loan & Credit Card Telecalling',
      problem: 'Banks & NBFCs require mandatory call recordings for compliance, but enterprise deskphones are cost-prohibitive.',
      solution: '1) Telecallers log into app in VoIP mode (QKonnect). 2) Calls route through cloud WebRTC extensions. 3) Recording captured by QKonnect webhook and linked to customer loan record. 4) Compliance managers audit calls directly in CDR dashboard.'
    },
    {
      title: 'High-Volume Event Announcements (Outbound IVR)',
      problem: 'Announcing a product launch or webinar to 50,000 customers in a single day is impossible with manual agents.',
      solution: '1) Marketing uploads audio prompt (announcement.wav). 2) Local approval checks content; submits to OBD telecom gateway. 3) Approval worker polls status; reserves wallet balance. 4) Engine broadcasts 5,000 calls/hour within configured daily quota.'
    },
    {
      title: 'Autonomous AI Voice Lead Qualification',
      problem: 'Cold-calling thousands of raw database contacts leads to agent burnout due to 90% rejection rates.',
      solution: '1) Outbound AI call job created via /api/realtime-voice/outbound-call-jobs. 2) Bot dials and speaks opening line via Deepgram Aura. 3) Customer responds; Deepgram Nova-3 transcribes; Gemini Flash handles objections. 4) If interested, bot triggers live transfer to human sales executive.'
    }
  ];

  const cheatSheet = [
    { q: 'How do callers dial?', a: 'Dual mode: SIM mode (native phone dialer, low cost) or VoIP mode (QKonnect WebRTC/SIP cloud calling).' },
    { q: 'Where are call recordings stored?', a: 'Captured via QKonnect webhooks, verified with timing-safe HMAC, matched by agent & timestamp, and playable in the CDR report.' },
    { q: 'Does it have Voice Broadcasting / IVR?', a: 'Yes. OBD module with WAV uploads, two-tier telecom regulatory approval, 60-second polling worker, and pulse-based billing holds.' },
    { q: 'Does it have AI Voice Calling?', a: 'Yes. A full-duplex WebSocket pipeline using Deepgram Nova-3 (STT) + Google Gemini Flash (LLM) + Deepgram Aura (TTS) with interruption detection.' },
    { q: 'Where do leads come from?', a: 'Bulk CSV/Excel imports (up to 5,000 rows), direct Meta Ads (Facebook/Instagram) integration, or generic REST webhooks.' },
    { q: 'How does billing work?', a: 'Corporate prepaid wallet denominated in integer paise, ledger-backed with reserve/capture holds and Easebuzz gateway integration.' },
    { q: 'Can I give this to my supervisors?', a: 'Yes. Multi-tenant RBAC with dedicated dashboards for Super Admins, Employers, Reporting Managers, and Telecallers.' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-[#eadfc6]/55 backdrop-blur-xl animate-fadeIn overflow-y-auto">
      <div
        className="relative w-full max-w-6xl rounded-3xl glass-light-card !bg-white/70 backdrop-blur-2xl shadow-[0_25px_80px_rgba(40,70,160,0.45)] text-[#14261e] my-4 max-h-[94vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-6 border-b border-white/90 flex items-center justify-between flex-shrink-0 bg-white/55">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#0f5a43] to-[#c9962b] flex items-center justify-center text-white shadow-lg flex-shrink-0">
              <Radio className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-[#14261e] tracking-tight">
                  SwiftDial: Multi-Tenant Telecalling CRM & AI Voice Platform
                </h2>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold bg-emerald-500/20 text-emerald-700 border border-emerald-500/30">
                  Built & Scaled Over Last 2 Years
                </span>
              </div>
              <p className="text-xs sm:text-[13px] text-[#5d6f64] font-medium">
                Dual Telephony (SIM + VoIP) • Outbound IVR (OBD) • Deepgram + Gemini AI Voice • Corporate Wallet Ledger • Lead Backend: Kajal Bharti
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/55 hover:bg-white/80 text-xs font-semibold text-[#0f5a43] transition-colors border border-white/90"
              title="Share Case Study"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copied ? 'Copied Link!' : 'Share'}</span>
            </button>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl bg-white/55 hover:bg-white/80 flex items-center justify-center text-[#14261e] transition-colors border border-white/90"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="px-4 sm:px-6 py-2.5 bg-white/50 border-b border-white/90 flex items-center gap-2 overflow-x-auto no-scrollbar flex-shrink-0">
          {[
            { id: 'summary', label: '1. What is SwiftDial & 4 Calling Channels', icon: <Sparkles className="w-3.5 h-3.5" /> },
            { id: 'modules', label: '2. The 9 Core Modules Breakdown', icon: <Layers className="w-3.5 h-3.5" /> },
            { id: 'techstack', label: '3. Full Tech Stack & Integrations Table', icon: <Cpu className="w-3.5 h-3.5" /> },
            { id: 'portals', label: '4. 4 Portals & User Roles', icon: <Users className="w-3.5 h-3.5" /> },
            { id: 'usecases', label: '5. Business Use Cases & Pitch Cheat-Sheet', icon: <Workflow className="w-3.5 h-3.5" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-semibold whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-[#0f5a43] to-[#1b7a5a] text-white shadow-[0_2px_15px_rgba(15,90,67,0.5)] scale-100'
                  : 'text-[#4d6257] hover:text-[#14261e] hover:bg-white/55'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Modal Content Body */}
        <div className="p-4 sm:p-6 md:p-8 overflow-y-auto flex-1 space-y-6">
          {/* TAB 1: HIGH LEVEL SUMMARY & 4 CALLING MODES */}
          {activeTab === 'summary' && (
            <div className="space-y-6 animate-fadeIn">
              {/* Executive Summary Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white/60 border border-white backdrop-blur-md">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1b7a5a] animate-ping"></span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#14261e]">
                    1. High-Level Summary: What is SwiftDial?
                  </h3>
                </div>
                <p className="text-sm sm:text-[15px] text-[#4d6257] leading-relaxed font-normal">
                  <strong className="text-[#14261e]">SwiftDial</strong> is an enterprise multi-tenant Telecalling CRM, Cloud Telephony, and AI Voice Automation Platform actively built and scaled over the last <strong className="text-cyan-700">2 years</strong>.
                </p>

                <div className="mt-4 p-4 rounded-xl bg-white/70 border border-white/90 text-xs sm:text-sm text-[#4d6257] space-y-2">
                  <p className="font-semibold text-[#14261e]">Most telecalling tools force companies into a painful trade-off:</p>
                  <ul className="list-disc ml-4 space-y-1 text-[#4d6257] text-xs">
                    <li><strong className="text-red-600">Traditional Cloud Contact Centers:</strong> Expensive PRI/trunk lines, complex IP-PBX appliances, and exorbitant monthly hardware/seat fees.</li>
                    <li><strong className="text-amber-700">Unmanaged Mobile SIM Calling:</strong> Low cost, but suffers from unrecorded calls, manual dialing fatigue, lead leakage, zero supervision, and unmonitored conversions.</li>
                  </ul>
                  <p className="pt-2 text-cyan-700 font-semibold">
                    SwiftDial unites both worlds: It provides an automated dialer for mobile SIMs, browser/app-based VoIP cloud calling (WebRTC/SIP), automated Outbound IVR (OBD) voice broadcasting, and an autonomous Conversational AI Voice Bot powered by Deepgram and Google Gemini.
                  </p>
                </div>
              </div>

              {/* 4 Calling Channels Grid */}
              <div>
                <h4 className="text-sm font-bold text-[#14261e] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-[#c9962b]" />
                  SwiftDial 4 Calling Channels
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {callingModes.map((mode) => (
                    <div key={mode.id} className="p-4 sm:p-5 rounded-2xl bg-white/55 border border-white/90 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-xl bg-white/55 flex items-center justify-center">
                            {mode.icon}
                          </div>
                          <h5 className="font-bold text-[#14261e] text-sm sm:text-base">{mode.title}</h5>
                        </div>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-white/55 text-cyan-700 border border-white/90">
                          {mode.tag}
                        </span>
                      </div>
                      <p className="text-xs text-[#4d6257] leading-relaxed">{mode.desc}</p>
                      <ul className="space-y-1 text-[11px] text-[#4d6257] border-t border-white/90 pt-2">
                        {mode.highlights.map((h, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: THE 9 CORE MODULES */}
          {activeTab === 'modules' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#14261e]">
                    3. Core Modules & Detailed Feature Breakdown
                  </h3>
                  <p className="text-xs text-[#5d6f64]">
                    Exhaustive architecture of all 9 production modules built inside SwiftDial.
                  </p>
                </div>

                <div className="flex items-center gap-1.5 flex-wrap">
                  {modules.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setSelectedModule(m.id)}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                        selectedModule === m.id
                          ? 'bg-[#c9962b] text-slate-900 shadow-[0_0_15px_rgba(0,210,255,0.7)] scale-105'
                          : 'bg-white/55 text-[#4d6257] hover:bg-white/80'
                      }`}
                    >
                      M{m.id}
                    </button>
                  ))}
                </div>
              </div>

              {/* Selected Module Detail View */}
              {(() => {
                const m = modules.find((item) => item.id === selectedModule) || modules[0];
                return (
                  <div className="p-5 sm:p-6 rounded-2xl bg-white/60 border border-white backdrop-blur-md space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/90 pb-3">
                      <div>
                        <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-sky-700">
                          MODULE {m.id} OF 9
                        </span>
                        <h4 className="text-base sm:text-xl font-black text-[#14261e]">{m.name}</h4>
                      </div>
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#0f5a43] text-white self-start sm:self-auto">
                        Production Ready
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white/70 border border-white/90 font-mono text-[11px] text-cyan-700">
                      <strong>Code Reference:</strong> {m.codeRef}
                    </div>

                    <p className="text-xs sm:text-sm text-[#4d6257] leading-relaxed">
                      {m.description}
                    </p>

                    <div className="space-y-2 pt-2">
                      <h5 className="text-xs font-bold uppercase tracking-wider text-[#14261e]">Key Features & Engineering Functions:</h5>
                      <div className="grid grid-cols-1 gap-2.5 text-xs">
                        {m.features.map((feat, idx) => (
                          <div key={idx} className="p-3 rounded-xl bg-white/55 border border-white/90 flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                            <span className="text-[#4d6257] leading-relaxed">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })()}

              {/* All 9 Modules Quick Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {modules.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setSelectedModule(m.id)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedModule === m.id
                        ? 'bg-blue-100 border-[#0f5a43]'
                        : 'bg-white/55 border-white/90 hover:bg-white/55'
                    }`}
                  >
                    <span className="text-[10px] font-bold text-sky-700 block">Module {m.id}</span>
                    <span className="text-xs font-bold text-[#14261e] block truncate">{m.name.replace(/^Module \d+: /, '')}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: FULL TECH STACK & INTEGRATIONS */}
          {activeTab === 'techstack' && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#14261e]">
                  2. Technology Stack & Integrations Table
                </h3>
                <p className="text-xs text-[#5d6f64]">
                  Complete architectural stack powering SwiftDial's production environment.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white/55 border border-white/90 overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse min-w-[700px]">
                  <thead>
                    <tr className="border-b border-white/90 text-cyan-700">
                      <th className="p-3 font-bold">Architectural Layer</th>
                      <th className="p-3 font-bold">Technologies / Services Used</th>
                      <th className="p-3 font-bold">Purpose in SwiftDial</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-[#4d6257]">
                    {techStackData.map((item, idx) => (
                      <tr key={idx} className="hover:bg-white/55 transition-colors">
                        <td className="p-3 font-bold text-[#14261e] whitespace-nowrap">{item.layer}</td>
                        <td className="p-3 font-mono text-[11px] text-sky-700 whitespace-nowrap">{item.tech}</td>
                        <td className="p-3 text-[#4d6257] leading-relaxed">{item.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 4: 4 PORTALS & USER ROLES */}
          {activeTab === 'portals' && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#14261e]">
                  4 Operational Portals & User Roles
                </h3>
                <p className="text-xs text-[#5d6f64]">
                  Multi-tenant application architecture split into four distinct operational interfaces.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {portals.map((p, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-white/55 border border-white/90 space-y-3">
                    <div className="flex items-center justify-between border-b border-white/90 pb-2">
                      <h4 className="font-bold text-[#14261e] text-sm sm:text-base">{p.name}</h4>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-500/20 text-sky-700">
                        {p.target}
                      </span>
                    </div>
                    <p className="text-xs text-[#4d6257] leading-relaxed">{p.desc}</p>
                    <div className="p-3 rounded-xl bg-white/70 border border-white/90 text-[11px] text-[#14261e]">
                      <strong>Operational Focus:</strong> {p.keyRoles}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: USE CASES & CHEAT SHEET */}
          {activeTab === 'usecases' && (
            <div className="space-y-6 animate-fadeIn">
              {/* 4 Real World Business Use Cases */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#14261e] mb-3">
                  4. Real-World Business Use Cases
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {useCases.map((uc, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-white/55 border border-white/90 space-y-2.5">
                      <h4 className="font-bold text-cyan-700 text-sm flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                        {uc.title}
                      </h4>
                      <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-[#4d6257]">
                        <strong className="text-red-600 block mb-0.5">The Challenge:</strong>
                        {uc.problem}
                      </div>
                      <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-[#4d6257]">
                        <strong className="text-emerald-700 block mb-0.5">How SwiftDial Solves It:</strong>
                        {uc.solution}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Summary Cheat Sheet */}
              <div className="p-5 rounded-2xl bg-white/55 border border-white/90">
                <h4 className="text-sm font-bold text-[#14261e] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-amber-700" />
                  5. Summary Cheat-Sheet: What to Pitch & Present in Interviews
                </h4>
                <div className="grid grid-cols-1 gap-2.5 text-xs">
                  {cheatSheet.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-white/55 border border-white/90 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <span className="font-bold text-sky-700 sm:w-1/3">{item.q}</span>
                      <span className="text-[#4d6257] sm:w-2/3">{item.a}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Bar */}
        <div className="p-4 sm:p-5 border-t border-white/90 bg-white/55 flex items-center justify-between flex-shrink-0 flex-wrap gap-3">
          <div className="flex items-center gap-2 text-xs text-[#4d6257]">
            <CheckCircle2 className="w-4 h-4 text-emerald-700" />
            <span>Built & Engineered by Kajal Bharti (2 Years Production Experience)</span>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#0f5a43] to-[#1b7a5a] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
}
