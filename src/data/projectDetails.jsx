// Detail-page content for each project in data/projects.jsx (matched by id).
// Edit freely: the page renders whatever is here. Replace liveUrl / codeUrl with real links.
// Tech names map to icons in components/ProjectDetailPage.jsx (unknown names fall back to a text badge).

const arch = (clients, gateway, service, stores) => ({ clients, gateway, service, stores });

export const projectDetails = {
  swiftdial: {
    subtitle: 'CRM & AI Telecalling Platform',
    liveUrl: '#',
    codeUrl: '#',
    mock: { logo: 'SwiftDial', title: 'Dashboard', stats: [['Calls', '10,432'], ['Connected', '5,280'], ['Leads', '4,650'], ['Success', '70%']], menu: ['Dashboard', 'Campaigns', 'Leads', 'Call Reports', 'Billing', 'Settings'] },
    info: { Domain: 'CRM / AI Telecalling', Role: 'Backend Development, System Design, DevOps', 'Team Size': '5 Members', Duration: '6+ Months', Status: 'Live & In Production' },
    overview: 'SwiftDial is a scalable multi-tenant CRM and AI telecalling platform supporting lead, campaign, subscription and operational workflows, with real-time billing and WhatsApp / VoIP integrations.',
    outcomes: ['10K+ daily call transactions', '70% faster campaign processing', '99.9% system uptime', 'Reduced manual effort by 60%'],
    features: ['Multi-tenant lead, campaign & subscription management', 'VoIP, WhatsApp & Meta Graph API integrations', 'Real-time billing engine with usage tracking', 'Redis caching, queue workflows & lead distribution'],
    tech: ['Node.js', 'Express.js', 'MySQL', 'Redis', 'AWS', 'Docker', 'Jenkins', 'WebSockets'],
    architecture: arch(['Web App', 'Mobile App', 'Admin Panel'], ['API Gateway', 'NGINX'], ['Node.js Services', 'Express'], [
      ['MySQL', 'Main DB'], ['Redis', 'Cache'], ['S3 / Storage', 'Recordings'], ['External Integration', 'IVR / Telco'],
    ]),
    archNotes: [
      'NGINX terminates TLS and routes web, mobile and admin traffic to the Express services.',
      'Redis caches hot campaign and lead data and backs real-time call state.',
      'Call recordings go to S3; the IVR / telco provider is integrated behind a service layer.',
    ],
    database: [
      ['tenants', 'One row per business; every other table carries tenant_id for isolation.'],
      ['users, roles', 'Role-based access per tenant (admin, manager, agent).'],
      ['leads, lead_activities', 'Lead records and their full call/follow-up history.'],
      ['campaigns, campaign_leads', 'Campaign setup, scheduling and per-lead dialing status.'],
      ['calls, call_reports', 'Call logs, IVR outcomes and aggregated reporting.'],
      ['wallets, transactions', 'Balances, billing and payment records.'],
    ],
    contributions: ['Architected the multi-tenant CRM and AI telecalling platform.', 'Developed REST APIs, RBAC modules, backend services and real-time workflows with Node.js, Express.js and MySQL.', 'Integrated Meta Graph API, VoIP systems, WhatsApp APIs, webhook pipelines and payment processing.', 'Built a real-time billing engine with subscription validation, usage tracking and Easebuzz S2S payments.', 'Implemented Redis caching, queue-based workflows, cron automation and scalable lead distribution.', 'Managed AWS production infrastructure with Docker, NGINX, PM2 and CI/CD pipelines.'],
    challenges: ['Handle high-volume concurrent calls', 'Ensure multi-tenant data isolation', 'Optimize call reporting & analytics', 'Integrate IVR & payment workflows'],
    learnings: ['Designing a multi-tenant scalable system', 'Optimizing real-time call processing', 'Handling third-party integrations (IVR)', 'Improving API performance & reliability'],
  },

  upniva: {
    subtitle: 'Lead Orchestration Platform',
    liveUrl: '#', codeUrl: '#',
    mock: { logo: 'Upniva', title: 'Applications', stats: [['Leads', '8,214'], ['KYC Done', '5,960'], ['Approved', '3,120'], ['Disbursed', '2,740']], menu: ['Dashboard', 'Leads', 'KYC', 'Credit', 'Disbursal', 'Settings'] },
    info: { Domain: 'FinTech / Lending', Role: 'Backend Development, API Design', 'Team Size': '4 Members', Duration: '6+ Months', Status: 'Live & In Production' },
    overview: 'Upniva is a lead orchestration platform for high-volume CRM operations, with intelligent lead routing, real-time agent monitoring, analytics and a multi-tenant subscription architecture.',
    outcomes: ['Faster lead-to-disbursal turnaround', 'Automated KYC verification', 'Audit-ready transaction trail', 'Lower manual review effort'],
    features: ['Intelligent lead assignment & routing engine', 'Real-time agent activity monitoring', 'Reporting & analytics: conversions, revenue, KPIs', 'Bulk Excel / CSV processing pipelines'],
    tech: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Redis', 'WebSockets', 'AWS', 'Docker'],
    architecture: arch(['Web App', 'Partner Portal', 'Admin Panel'], ['API Gateway', 'NGINX'], ['Node.js Services', 'Express'], [
      ['MongoDB', 'Main DB'], ['Redis', 'Cache'], ['S3 / Storage', 'Documents'], ['External Integration', 'KYC / Banks'],
    ]),
    archNotes: ['Lead and loan state is managed as a workflow with clear status transitions.', 'KYC, credit and bank providers sit behind adapter services.', 'Documents are stored encrypted in S3.'],
    database: [['leads', 'Lead details and source.'], ['applications', 'Loan application state machine.'], ['kyc_records', 'Verification results and documents.'], ['credit_lines', 'Assessed limits and usage.'], ['disbursements', 'Payout requests and bank responses.']],
    contributions: ['Designed scalable database schemas, indexing strategies and optimized SQL queries for high-volume CRM operations.', 'Implemented real-time agent monitoring and WebSocket-based dashboard synchronization.', 'Built secure authentication with JWT, RBAC, session validation and permission-driven middleware.', 'Engineered fault-tolerant webhook pipelines with retries, logging and failure handling.', 'Built bulk Excel/CSV processing with validation, duplicate handling and async processing.', 'Optimized performance with Redis caching, lazy loading, pagination and response compression.', 'Integrated VoIP providers, WhatsApp APIs, SMS gateways and email notifications.', 'Developed SaaS subscription architecture with tenant isolation and usage-based billing.'],
    challenges: ['Reliable third-party KYC integrations', 'Secure handling of sensitive data', 'Consistent loan state across steps', 'Idempotent disbursement calls'],
    learnings: ['Designing workflow-driven backends', 'Security-first API design', 'Making provider calls idempotent', 'Audit logging for regulated flows'],
  },

  complianceseva: {
    subtitle: 'Corporate Compliance & Legal Operations System',
    liveUrl: '#', codeUrl: '#',
    mock: { logo: 'ComplianceSeva', title: 'Compliance', stats: [['Clients', '1,240'], ['Filings', '6,830'], ['Pending', '412'], ['Verified', '92%']], menu: ['Dashboard', 'Clients', 'Filings', 'Documents', 'Reminders', 'Settings'] },
    info: { Domain: 'Enterprise / Legal Tech', Role: 'Backend Development, System Design', 'Team Size': '5 Members', Duration: '6+ Months', Status: 'Live & In Production' },
    overview: 'ComplianceSeva automates compliance tracking, GST filings and document verification for enterprise businesses across India.',
    outcomes: ['Fewer missed filing deadlines', 'Faster document verification', 'Single view of compliance status', 'Less manual follow-up'],
    features: ['Compliance calendar & reminders', 'GST filing tracking', 'Document upload & verification', 'Role-based client access'],
    tech: ['Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
    architecture: arch(['Client Portal', 'Admin Panel', 'Mobile App'], ['API Gateway', 'NGINX'], ['Node.js Services', 'Express'], [
      ['PostgreSQL', 'Main DB'], ['Redis', 'Queues'], ['S3 / Storage', 'Documents'], ['External Integration', 'GST / Email'],
    ]),
    archNotes: ['Scheduled jobs create reminders and filing tasks per client.', 'Documents are versioned in S3 with access checks.', 'RBAC separates clients, staff and admins.'],
    database: [['clients', 'Business entities and registrations.'], ['compliance_tasks', 'Deadlines, owners and status.'], ['filings', 'GST and other filing records.'], ['documents', 'Uploaded files and verification state.'], ['audit_logs', 'Who changed what, and when.']],
    contributions: ['Built compliance task and filing APIs.', 'Implemented RBAC and audit logging.', 'Set up scheduled reminder jobs with Redis queues.', 'Handled document upload and verification flows.'],
    challenges: ['Deadline-driven scheduling at scale', 'Strict access control per client', 'Reliable document handling', 'Keeping an audit trail for every change'],
    learnings: ['Queue-based job scheduling', 'Designing fine-grained RBAC', 'Audit-first data modelling', 'Working with regulatory workflows'],
  },

  interactify: {
    subtitle: 'Customer Engagement Platform',
    liveUrl: '#', codeUrl: '#',
    mock: { logo: 'Interactify', title: 'Conversations', stats: [['Chats', '12,480'], ['Open', '860'], ['Follow-ups', '2,310'], ['Resolved', '88%']], menu: ['Dashboard', 'Inbox', 'Campaigns', 'Contacts', 'Reports', 'Settings'] },
    info: { Domain: 'CRM / Engagement', Role: 'Backend Development', 'Team Size': '4 Members', Duration: '6+ Months', Status: 'Live & In Production' },
    overview: 'Interactify lets teams manage conversations, follow-ups and campaigns across channels from a single backend.',
    outcomes: ['One inbox for all channels', 'Timely follow-ups', 'Campaign tracking in one place', 'Less context switching'],
    features: ['Unified conversation inbox', 'Follow-up reminders', 'Campaign management', 'Engagement reports'],
    tech: ['Node.js', 'Express.js', 'MySQL', 'Redis', 'WebSockets'],
    architecture: arch(['Web App', 'Mobile App', 'Admin Panel'], ['API Gateway', 'NGINX'], ['Node.js Services', 'Express'], [
      ['MySQL', 'Main DB'], ['Redis', 'Cache'], ['S3 / Storage', 'Media'], ['External Integration', 'Channels'],
    ]),
    archNotes: ['WebSockets push new messages to agents instantly.', 'Channel integrations are isolated behind adapters.', 'Redis caches inbox counts and session data.'],
    database: [['contacts', 'People and their channel identities.'], ['conversations', 'Threads per contact and channel.'], ['messages', 'Individual messages and delivery status.'], ['campaigns', 'Campaign definitions and audiences.'], ['followups', 'Scheduled reminders.']],
    contributions: ['Built conversation and campaign APIs.', 'Added real-time updates over WebSockets.', 'Integrated external messaging channels.', 'Tuned MySQL queries and Redis caching.'],
    challenges: ['Real-time delivery to many agents', 'Normalising different channel formats', 'Keeping inbox queries fast', 'Avoiding duplicate messages'],
    learnings: ['Designing channel adapters', 'Real-time messaging patterns', 'Query tuning for large inboxes', 'Idempotent webhook handling'],
  },

  unirr: {
    subtitle: 'University & Institute Management',
    liveUrl: '#', codeUrl: '#',
    mock: { logo: 'Unirr', title: 'Institute', stats: [['Students', '18,200'], ['Courses', '320'], ['Admissions', '2,140'], ['Fees Paid', '84%']], menu: ['Dashboard', 'Admissions', 'Students', 'Courses', 'Fees', 'Settings'] },
    info: { Domain: 'EdTech / SaaS', Role: 'Backend Development, System Design', 'Team Size': '5 Members', Duration: '6+ Months', Status: 'Live & In Production' },
    overview: 'Unirr is a multi-institute SaaS covering admissions, students, courses and administration workflows.',
    outcomes: ['One platform for many institutes', 'Faster admissions processing', 'Less paperwork', 'Clear admin reporting'],
    features: ['Admissions management', 'Student & course records', 'Role-based administration', 'Reports & exports'],
    tech: ['Node.js', 'Express.js', 'MySQL', 'React', 'AWS'],
    architecture: arch(['Web App', 'Student Portal', 'Admin Panel'], ['API Gateway', 'NGINX'], ['Node.js Services', 'Express'], [
      ['MySQL', 'Main DB'], ['Redis', 'Cache'], ['S3 / Storage', 'Documents'], ['External Integration', 'Payments / SMS'],
    ]),
    archNotes: ['Every record is scoped to an institute for tenant isolation.', 'Documents and certificates live in S3.', 'Payments and SMS go through provider integrations.'],
    database: [['institutes', 'Tenants and their settings.'], ['students', 'Student profiles and enrolment.'], ['courses', 'Courses, batches and subjects.'], ['admissions', 'Applications and decisions.'], ['fees, payments', 'Fee structures and payments.']],
    contributions: ['Designed the multi-institute data model.', 'Built admissions, student and course APIs.', 'Implemented role-based access for staff.', 'Added report exports and payment integrations.'],
    challenges: ['Isolating data per institute', 'Flexible workflows per institute', 'Heavy report queries', 'Reliable payment reconciliation'],
    learnings: ['Multi-tenant SaaS design', 'Configurable workflow modelling', 'Optimising reporting queries', 'Payment reconciliation patterns'],
  },

  referloan: {
    subtitle: 'Referral-based Loan Platform',
    liveUrl: '#', codeUrl: '#',
    mock: { logo: 'ReferLoan', title: 'Referrals', stats: [['Referrers', '3,450'], ['Applicants', '9,120'], ['Approved', '4,310'], ['Payouts', '₹ 18.4L']], menu: ['Dashboard', 'Referrals', 'Applicants', 'Lenders', 'Payouts', 'Settings'] },
    info: { Domain: 'FinTech / Referrals', Role: 'Backend Development', 'Team Size': '4 Members', Duration: '6+ Months', Status: 'Live & In Production' },
    overview: 'ReferLoan connects referrers, applicants and lenders, with tracked lead status and payouts for every referral.',
    outcomes: ['Transparent referral tracking', 'Timely payouts', 'Less manual reconciliation', 'Clear status for every lead'],
    features: ['Referral links & tracking', 'Applicant and lender workflow', 'Lead status updates', 'Payout management'],
    tech: ['Node.js', 'Express.js', 'MySQL', 'AWS', 'Redis'],
    architecture: arch(['Web App', 'Mobile App', 'Admin Panel'], ['API Gateway', 'NGINX'], ['Node.js Services', 'Express'], [
      ['MySQL', 'Main DB'], ['Redis', 'Cache'], ['S3 / Storage', 'Documents'], ['External Integration', 'Lenders / Pay'],
    ]),
    archNotes: ['Each referral carries a trackable code through the whole funnel.', 'Lender updates arrive via webhooks and update lead status.', 'Payouts are calculated from verified status changes.'],
    database: [['referrers', 'People who refer applicants.'], ['applicants', 'Applicant details and source referral.'], ['lender_leads', 'Leads sent to lenders and their status.'], ['payouts', 'Computed and paid referral rewards.'], ['status_history', 'Every status change with timestamps.']],
    contributions: ['Built referral tracking and lead status APIs.', 'Integrated lender webhooks.', 'Implemented payout calculation and history.', 'Deployed services on AWS.'],
    challenges: ['Attributing leads correctly', 'Keeping lender status in sync', 'Accurate payout calculation', 'Preventing duplicate referrals'],
    learnings: ['Attribution and funnel tracking', 'Webhook-driven state sync', 'Financial calculation accuracy', 'De-duplication strategies'],
  },
};
