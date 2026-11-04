// Content for the redesigned Project Details page (hero dashboard, overview, capabilities, schema ...).
// Upniva Fintech is copied 1:1 from the design mockup; the other projects follow the same shape.
// Icons are referenced by name and mapped in components/ProjectDetailPage.jsx.

const months = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
const yLabels = ['10K', '8K', '6K', '4K', '2K', '0'];
const trend = [0.18, 0.36, 0.26, 0.63, 0.43, 0.8, 0.68, 0.91];

export const projectShowcase = {
  upniva: {
    overviewTitle: 'Project Overview',
    summary:
      'Upniva is a fintech backend platform that orchestrates the end-to-end lending journey — from lead capture and KYC verification to credit assessment and instant disbursement, with secure, scalable and reliable APIs.',
    hero: {
      menu: ['Dashboard', 'Leads', 'KYC', 'Credit', 'Disbursal', 'Reports', 'Settings'],
      stats: [
        { label: 'Leads', value: '8,214', icon: 'users', color: '#1b7a5a' },
        { label: 'KYC Done', value: '5,960', icon: 'idcard', color: '#10b981' },
        { label: 'Approved', value: '3,120', icon: 'badge', color: '#22c55e' },
        { label: 'Disbursed', value: '2,740', icon: 'users2', color: '#0f5a43' },
      ],
      chart: { title: 'Lead to Disbursal Trend', range: 'Last 6 Months', months, yLabels, values: trend, color: '#18b46b' },
    },
    execSummary:
      'Upniva is a fintech backend platform that moves a loan lead from KYC through credit line assessment to instant disbursement, with bank-grade security, high reliability and seamless API integrations.',
    scale: ['Built actively over ', '2+ years', ' in production, powering multi-tenant corporate lending, regulatory OBD broadcasts and sub-second real-time AI voice agents.'],
    impact: [
      '70% faster lead-to-disbursal turnaround',
      'Automated KYC verification, reducing manual effort by 80%',
      'Audit-ready transaction trail with improved compliance',
      'Lower manual review effort, increasing operational efficiency',
    ],
    capabilities: [
      { icon: 'users', title: 'Lead Orchestration', desc: 'Capture, enrich and route leads with smart workflow and rules.' },
      { icon: 'shield', title: 'KYC & Document Verification', desc: 'Integrate with KYC partners for identity, PAN and document validation.' },
      { icon: 'layers', title: 'Credit Assessment', desc: 'Credit scoring and risk evaluation using business rules and external data.' },
      { icon: 'zap', title: 'Instant Disbursement', desc: 'Automated disbursement with bank integrations and real-time status.' },
    ],
    techTiles: ['Node.js', 'Express.js', 'MongoDB', 'React', 'AWS', 'Docker'],
    archDesc: 'High-level architecture for a scalable, secure and modular lending platform.',
    schemaDesc: 'Core schema for lead lifecycle, application processing and disbursement.',
    tables: [
      { name: 'leads', cols: [['id', 'UUID (PK)'], ['user_id', 'UUID (FK)'], ['name', 'VARCHAR(255)'], ['mobile', 'VARCHAR(15)'], ['source', 'VARCHAR(50)'], ['created_at', 'TIMESTAMP']] },
      { name: 'applications', cols: [['id', 'UUID (PK)'], ['lead_id', 'UUID (FK)'], ['amount', 'DECIMAL(14,2)'], ['status', 'VARCHAR(50)'], ['credit_score', 'INT'], ['created_at', 'TIMESTAMP']] },
      { name: 'disbursements', cols: [['id', 'UUID (PK)'], ['application_id', 'UUID (FK)'], ['amount', 'DECIMAL(14,2)'], ['bank_ref', 'VARCHAR(100)'], ['status', 'VARCHAR(50)'], ['disbursed_at', 'TIMESTAMP']] },
    ],
    relations: [['Leads', '(1)', 'users'], ['Applications', '(N)', 'file'], ['Disbursements', '(N)', 'layers']],
    myContributions: [
      'Designed and developed scalable REST APIs using Node.js and Express.js.',
      'Designed database schema and optimized queries for high-volume lead and application data.',
      'Integrated KYC and bank/partner systems with secure, reliable workflows.',
      'Implemented background jobs (cron/queues) for processing, reconciliation and notifications.',
      'Improved system performance, observability and deployment using AWS and Docker.',
    ],
  },

  swiftdial: {
    overviewTitle: 'Project Overview',
    summary:
      'SwiftDial is a multi-tenant telecalling CRM, cloud telephony and AI voice automation platform that unifies SIM, VoIP, IVR and AI calling with a prepaid wallet ledger.',
    hero: {
      menu: ['Dashboard', 'Campaigns', 'Contacts', 'Calls', 'Reports', 'Billing', 'Settings'],
      stats: [
        { label: 'Total Calls', value: '12,480', icon: 'phone', color: '#0f5a43' },
        { label: 'Connected', value: '8,260', icon: 'badge', color: '#10b981' },
        { label: 'Leads', value: '4,650', icon: 'users', color: '#1b7a5a' },
        { label: 'Conversion', value: '66.2%', icon: 'trend', color: '#0f5a43' },
      ],
      chart: { title: 'Campaign Performance Trend', range: 'Last 6 Months', months, yLabels, values: trend, color: '#0f5a43' },
    },
    execSummary:
      'SwiftDial is a multi-tenant Telecalling CRM, Cloud Telephony and AI Voice Automation platform. It unifies native SIM calling, VoIP, outbound IVR broadcasts and a conversational AI voice bot behind one campaign engine.',
    scale: ['Built actively over ', '2 years', ' in production, powering multi-tenant corporate calling, regulatory OBD broadcasts and sub-second real-time AI voice agents.'],
    impact: [
      'Unifies SIM, VoIP, IVR & AI calling in one platform',
      'Sub-45ms API p99 response time with Redis caching',
      '99.99% uptime with an integer-paise wallet ledger',
      'Integrated with Meta Lead Ads, QKonnect & Easebuzz PG',
    ],
    capabilities: [
      { icon: 'phone', title: 'Multi-Channel Calling', desc: 'Native SIM, QKonnect VoIP, OBD voice broadcast and AI voice calling.' },
      { icon: 'users', title: 'Telecalling CRM', desc: 'Dynamic lead pipelines, callbacks, alarms and agent break tracking.' },
      { icon: 'layers', title: 'Campaign Engine', desc: 'Manual, IVR, AI and WhatsApp campaigns with a strict state machine.' },
      { icon: 'zap', title: 'Wallet & Billing', desc: 'Prepaid wallet with append-only ledger and pulse-based billing.' },
    ],
    techTiles: ['Node.js', 'Express.js', 'MySQL', 'WebSockets', 'AWS', 'Docker'],
    archDesc: 'Multi-tenant telephony architecture spanning SIM, VoIP, IVR and AI voice channels.',
    schemaDesc: 'Core schema for campaigns, calls and the prepaid wallet ledger.',
    tables: [
      { name: 'campaigns', cols: [['id', 'BIGINT (PK)'], ['company_id', 'BIGINT (FK)'], ['type', 'VARCHAR(20)'], ['status', 'VARCHAR(20)'], ['daily_quota', 'INT'], ['created_at', 'TIMESTAMP']] },
      { name: 'calls', cols: [['id', 'BIGINT (PK)'], ['campaign_id', 'BIGINT (FK)'], ['agent_id', 'BIGINT (FK)'], ['duration_sec', 'INT'], ['status', 'VARCHAR(30)'], ['recording_url', 'VARCHAR(255)']] },
      { name: 'ledger_entries', cols: [['id', 'BIGINT (PK)'], ['wallet_id', 'BIGINT (FK)'], ['amount_paise', 'BIGINT'], ['type', 'VARCHAR(10)'], ['balance_after', 'BIGINT'], ['created_at', 'TIMESTAMP']] },
    ],
    relations: [['Campaigns', '(1)', 'layers'], ['Calls', '(N)', 'phone'], ['Ledger Entries', '(N)', 'file']],
    myContributions: [
      'Architected the telephony engine integrating native SIM calling and QKonnect cloud VoIP.',
      'Built the full-duplex WebSocket AI voice pipeline with Deepgram Nova-3 and Google Gemini Flash.',
      'Engineered the Outbound IVR (OBD) engine with two-tier approval, polling worker and pulse billing.',
      'Designed the prepaid wallet with append-only ledger and reserve-capture holds.',
      'Implemented Meta Graph API OAuth sync for real-time Facebook/Instagram Lead Ads ingestion.',
    ],
  },

  complianceseva: {
    overviewTitle: 'Project Overview',
    summary:
      'ComplianceSeva automates compliance tracking, GST filings and document verification so enterprise businesses across India never miss a deadline.',
    hero: {
      menu: ['Dashboard', 'Entities', 'Compliances', 'Tasks', 'Documents', 'Reports', 'Settings'],
      stats: [
        { label: 'Total Entities', value: '128', icon: 'building', color: '#1b7a5a' },
        { label: 'Due This Month', value: '24', icon: 'file', color: '#f59e0b' },
        { label: 'Overdue', value: '6', icon: 'alert', color: '#ef4444' },
        { label: 'Completed', value: '98', icon: 'badge', color: '#22c55e' },
      ],
      chart: { title: 'Filings Completed Trend', range: 'Last 6 Months', months, yLabels, values: [0.2, 0.3, 0.42, 0.38, 0.55, 0.62, 0.7, 0.86], color: '#12a77f' },
    },
    execSummary:
      'ComplianceSeva is a compliance and legal operations system that tracks deadlines, GST filings and document verification for enterprise clients, with strict role-based access and a full audit trail.',
    scale: ['Running in ', 'production', ' for enterprise clients, handling scheduled reminders, filings and document workflows across India.'],
    impact: [
      'Fewer missed filing deadlines with automated reminders',
      'Faster document verification and approvals',
      'Single view of compliance status across entities',
      'Audit-ready change history for every record',
    ],
    capabilities: [
      { icon: 'layers', title: 'Compliance Calendar', desc: 'Deadline-driven tasks and reminders generated per entity.' },
      { icon: 'zap', title: 'GST Filing Tracking', desc: 'Track filing status, due dates and acknowledgements in one place.' },
      { icon: 'shield', title: 'Document Verification', desc: 'Versioned uploads with review workflow and access checks.' },
      { icon: 'users', title: 'Role-based Access', desc: 'RBAC separating clients, staff and admins with audit logging.' },
    ],
    techTiles: ['Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
    archDesc: 'Queue-driven architecture for scheduled compliance workflows and secure documents.',
    schemaDesc: 'Core schema for entities, compliance tasks and filings.',
    tables: [
      { name: 'entities', cols: [['id', 'UUID (PK)'], ['name', 'VARCHAR(255)'], ['gstin', 'VARCHAR(20)'], ['state', 'VARCHAR(50)'], ['owner_id', 'UUID (FK)'], ['created_at', 'TIMESTAMP']] },
      { name: 'compliance_tasks', cols: [['id', 'UUID (PK)'], ['entity_id', 'UUID (FK)'], ['title', 'VARCHAR(255)'], ['due_date', 'DATE'], ['status', 'VARCHAR(30)'], ['assignee_id', 'UUID (FK)']] },
      { name: 'filings', cols: [['id', 'UUID (PK)'], ['task_id', 'UUID (FK)'], ['type', 'VARCHAR(30)'], ['ack_no', 'VARCHAR(60)'], ['status', 'VARCHAR(30)'], ['filed_at', 'TIMESTAMP']] },
    ],
    relations: [['Entities', '(1)', 'building'], ['Tasks', '(N)', 'file'], ['Filings', '(N)', 'layers']],
    myContributions: [
      'Built compliance task and filing APIs with Node.js and PostgreSQL.',
      'Implemented RBAC and audit logging for every change.',
      'Set up scheduled reminder jobs with Redis queues.',
      'Handled document upload and verification flows.',
      'Containerised services and deployed them on AWS.',
    ],
  },

  interactify: {
    overviewTitle: 'Project Overview',
    summary:
      'Interactify lets teams manage conversations, follow-ups and campaigns across channels from a single, real-time backend.',
    hero: {
      menu: ['Dashboard', 'Conversations', 'Broadcasts', 'Audience', 'Templates', 'Analytics', 'Settings'],
      stats: [
        { label: 'Total Users', value: '24,560', icon: 'users', color: '#1b7a5a' },
        { label: 'Engaged', value: '18,420', icon: 'chat', color: '#0f5a43' },
        { label: 'Follow-ups', value: '2,310', icon: 'bell', color: '#f59e0b' },
        { label: 'Response Rate', value: '74.9%', icon: 'trend', color: '#22c55e' },
      ],
      chart: { title: 'Engagement Trend', range: 'Last 6 Months', months, yLabels, values: [0.2, 0.34, 0.3, 0.5, 0.44, 0.62, 0.58, 0.8], color: '#0f5a43' },
    },
    execSummary:
      'Interactify is a customer engagement platform that brings conversations, follow-ups and broadcast campaigns from multiple channels into one unified inbox backed by real-time delivery.',
    scale: ['Live in ', 'production', ', delivering real-time messages to agents and powering broadcast campaigns across channels.'],
    impact: [
      'One inbox for every channel',
      'Timely follow-ups with scheduled reminders',
      'Campaign tracking and engagement analytics in one place',
      'Less context switching for support teams',
    ],
    capabilities: [
      { icon: 'chat', title: 'Unified Inbox', desc: 'All conversations from every channel in a single real-time inbox.' },
      { icon: 'bell', title: 'Follow-up Reminders', desc: 'Scheduled reminders so no conversation goes cold.' },
      { icon: 'layers', title: 'Campaign Management', desc: 'Audiences, templates and broadcasts managed from one backend.' },
      { icon: 'zap', title: 'Engagement Analytics', desc: 'Response rate and engagement reports per campaign and agent.' },
    ],
    techTiles: ['Node.js', 'Express.js', 'MySQL', 'Redis', 'WebSockets'],
    archDesc: 'Real-time architecture with channel adapters and cached inbox state.',
    schemaDesc: 'Core schema for contacts, conversations and messages.',
    tables: [
      { name: 'contacts', cols: [['id', 'BIGINT (PK)'], ['name', 'VARCHAR(255)'], ['phone', 'VARCHAR(15)'], ['channel', 'VARCHAR(30)'], ['tags', 'JSON'], ['created_at', 'TIMESTAMP']] },
      { name: 'conversations', cols: [['id', 'BIGINT (PK)'], ['contact_id', 'BIGINT (FK)'], ['channel', 'VARCHAR(30)'], ['status', 'VARCHAR(20)'], ['assignee_id', 'BIGINT (FK)'], ['updated_at', 'TIMESTAMP']] },
      { name: 'messages', cols: [['id', 'BIGINT (PK)'], ['conversation_id', 'BIGINT (FK)'], ['direction', 'VARCHAR(10)'], ['body', 'TEXT'], ['delivery', 'VARCHAR(20)'], ['sent_at', 'TIMESTAMP']] },
    ],
    relations: [['Contacts', '(1)', 'users'], ['Conversations', '(N)', 'chat'], ['Messages', '(N)', 'file']],
    myContributions: [
      'Built conversation and campaign APIs with Node.js and Express.js.',
      'Added real-time updates over WebSockets.',
      'Integrated external messaging channels behind adapters.',
      'Tuned MySQL queries and Redis caching for fast inbox loads.',
      'Handled idempotent webhooks to avoid duplicate messages.',
    ],
  },

  unirr: {
    overviewTitle: 'Project Overview',
    summary:
      'Unirr is a multi-institute SaaS covering admissions, students, courses and administration workflows on a tenant-isolated backend.',
    hero: {
      menu: ['Dashboard', 'Students', 'Institutes', 'Courses', 'Admissions', 'Exams', 'Settings'],
      stats: [
        { label: 'Institutes', value: '42', icon: 'building', color: '#1b7a5a' },
        { label: 'Students', value: '16,280', icon: 'users', color: '#0f5a43' },
        { label: 'Active Courses', value: '186', icon: 'book', color: '#10b981' },
        { label: 'Admissions', value: '2,140', icon: 'badge', color: '#22c55e' },
      ],
      chart: { title: 'Admissions Trend', range: 'This Year', months, yLabels, values: [0.15, 0.3, 0.4, 0.38, 0.58, 0.66, 0.74, 0.9], color: '#1b7a5a' },
    },
    execSummary:
      'Unirr is a university and institute management SaaS that serves many institutes from one platform, with per-institute data isolation, configurable admission workflows and clear admin reporting.',
    scale: ['Live in ', 'production', ' as a multi-tenant SaaS managing institutes, students, courses and fees.'],
    impact: [
      'One platform for many institutes',
      'Faster admissions processing',
      'Less paperwork with digital records',
      'Clear admin reporting and exports',
    ],
    capabilities: [
      { icon: 'users', title: 'Admissions Management', desc: 'Applications, decisions and enrolment in one configurable workflow.' },
      { icon: 'layers', title: 'Student & Course Records', desc: 'Profiles, batches, subjects and courses per institute.' },
      { icon: 'shield', title: 'Role-based Administration', desc: 'Granular roles for staff, faculty and institute admins.' },
      { icon: 'zap', title: 'Reports & Payments', desc: 'Report exports and fee payment integrations.' },
    ],
    techTiles: ['Node.js', 'Express.js', 'MySQL', 'React', 'AWS'],
    archDesc: 'Tenant-isolated architecture with cached reads and managed document storage.',
    schemaDesc: 'Core schema for institutes, students and admissions.',
    tables: [
      { name: 'institutes', cols: [['id', 'BIGINT (PK)'], ['name', 'VARCHAR(255)'], ['code', 'VARCHAR(30)'], ['plan', 'VARCHAR(30)'], ['status', 'VARCHAR(20)'], ['created_at', 'TIMESTAMP']] },
      { name: 'students', cols: [['id', 'BIGINT (PK)'], ['institute_id', 'BIGINT (FK)'], ['name', 'VARCHAR(255)'], ['course_id', 'BIGINT (FK)'], ['status', 'VARCHAR(20)'], ['enrolled_at', 'TIMESTAMP']] },
      { name: 'admissions', cols: [['id', 'BIGINT (PK)'], ['institute_id', 'BIGINT (FK)'], ['student_id', 'BIGINT (FK)'], ['fee', 'DECIMAL(12,2)'], ['decision', 'VARCHAR(20)'], ['applied_at', 'TIMESTAMP']] },
    ],
    relations: [['Institutes', '(1)', 'building'], ['Students', '(N)', 'users'], ['Admissions', '(N)', 'file']],
    myContributions: [
      'Designed the multi-institute data model with tenant isolation.',
      'Built admissions, student and course APIs.',
      'Implemented role-based access for staff and admins.',
      'Added report exports and payment integrations.',
      'Optimised heavy reporting queries on MySQL.',
    ],
  },

  referloan: {
    overviewTitle: 'Project Overview',
    summary:
      'ReferLoan connects referrers, applicants and lenders, with tracked lead status and automatic payouts for every referral.',
    hero: {
      menu: ['Dashboard', 'Referrals', 'Applications', 'Disbursals', 'Payouts', 'Reports', 'Settings'],
      stats: [
        { label: 'Total Referrals', value: '3,420', icon: 'users', color: '#1b7a5a' },
        { label: 'Applications', value: '1,260', icon: 'file', color: '#0f5a43' },
        { label: 'Approved', value: '960', icon: 'badge', color: '#22c55e' },
        { label: 'Disbursed', value: '842', icon: 'wallet', color: '#f59e0b' },
      ],
      chart: { title: 'Referral to Disbursal Trend', range: 'Last 6 Months', months, yLabels, values: [0.14, 0.26, 0.36, 0.32, 0.5, 0.56, 0.7, 0.88], color: '#22b573' },
    },
    execSummary:
      'ReferLoan is a referral-driven loan platform that tracks every referral from first click to lender decision, keeps lead status in sync through lender webhooks, and calculates referrer payouts accurately.',
    scale: ['Live in ', 'production', ', tracking referrals end-to-end and syncing lender status through webhooks.'],
    impact: [
      'Transparent referral tracking for every lead',
      'Timely and accurate referrer payouts',
      'Less manual reconciliation with lenders',
      'Clear status history for every application',
    ],
    capabilities: [
      { icon: 'users', title: 'Referral Tracking', desc: 'Trackable referral codes and links across the full funnel.' },
      { icon: 'layers', title: 'Applicant & Lender Workflow', desc: 'Applications routed to lenders with tracked decisions.' },
      { icon: 'zap', title: 'Lead Status Sync', desc: 'Lender webhooks keep status current in real time.' },
      { icon: 'shield', title: 'Payout Management', desc: 'Payouts computed from verified status changes with history.' },
    ],
    techTiles: ['Node.js', 'Express.js', 'MySQL', 'AWS', 'Redis'],
    archDesc: 'Webhook-driven architecture for lead attribution, lender sync and payouts.',
    schemaDesc: 'Core schema for referrals, lender leads and payouts.',
    tables: [
      { name: 'referrers', cols: [['id', 'BIGINT (PK)'], ['name', 'VARCHAR(255)'], ['mobile', 'VARCHAR(15)'], ['code', 'VARCHAR(20)'], ['status', 'VARCHAR(20)'], ['created_at', 'TIMESTAMP']] },
      { name: 'lender_leads', cols: [['id', 'BIGINT (PK)'], ['referrer_id', 'BIGINT (FK)'], ['lender_id', 'BIGINT (FK)'], ['amount', 'DECIMAL(14,2)'], ['status', 'VARCHAR(30)'], ['updated_at', 'TIMESTAMP']] },
      { name: 'payouts', cols: [['id', 'BIGINT (PK)'], ['referrer_id', 'BIGINT (FK)'], ['lead_id', 'BIGINT (FK)'], ['amount', 'DECIMAL(12,2)'], ['status', 'VARCHAR(20)'], ['paid_at', 'TIMESTAMP']] },
    ],
    relations: [['Referrers', '(1)', 'users'], ['Lender Leads', '(N)', 'file'], ['Payouts', '(N)', 'wallet']],
    myContributions: [
      'Built referral tracking and lead status APIs.',
      'Integrated lender webhooks for real-time status sync.',
      'Implemented payout calculation and status history.',
      'De-duplicated referrals and prevented attribution leaks.',
      'Deployed services on AWS.',
    ],
  },
};

// Role label shown under each technology tile.
export const techRoles = {
  'Node.js': 'Backend',
  'Express.js': 'Web Framework',
  MongoDB: 'Database',
  MySQL: 'Database',
  PostgreSQL: 'Database',
  React: 'Frontend',
  AWS: 'Cloud Infra',
  Docker: 'Containerization',
  Redis: 'Cache',
  WebSockets: 'Realtime',
  Kafka: 'Messaging',
};
