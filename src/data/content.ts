import { ServiceDetail, FaqItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Jeffus Recruitment Solutions, LLC.',
  monogram: 'BDJ',
  owner: 'Brittany D. Jeffus',
  title: 'Owner & Operator | Executive Recruiter',
  location: 'Gainesville, Texas, United States',
  email: 'britany.jeffus.executivereciuter@gmail.com',
  experienceYears: '7 Years',
  motto: 'Stay Positive. Work Hard. Make It Happen!',
  headline: 'Your Hiring Goals Deserve the Right Recruiting Partner.',
  subheadline:
    'Personalized recruiting solutions for companies that need the right talent without the added pressure of managing every step alone. With seven years of recruiting experience and a strong manufacturing background, Brittany D. Jeffus provides hands-on recruitment support tailored to your hiring needs.',
  trustStatement:
    'Personalized recruiting support. Industry experience. A focus on the right fit.',
};

export const IMAGES = {
  logo: 'https://cdn.phototourl.com/member/2026-10-30-147bcc85-efa6-467e-9564-c81a52ec2b88.png',
  heroManufacturing: 'https://cdn.phototourl.com/member/2026-10-30-50106023-3f36-407e-b988-521d827ded5e.png',
  brittanyPortrait: 'https://cdn.phototourl.com/member/2026-10-30-d44b9696-63b9-479e-8992-3021b3d3e828.png',
  corporateConsultation: '/src/assets/images/corporate_consultation_1793364139629.jpg',
  manufacturingSpecialists: '/src/assets/images/manufacturing_specialists_1793364139845.jpg',
};

export const CAREER_HISTORY = [
  {
    role: 'Owner & Operator',
    organization: 'Jeffus Recruitment Solutions, LLC.',
    description:
      'Providing dedicated contract recruiting, direct-hire placement, and strategic talent acquisition support tailored to manufacturing and corporate employers.',
    period: 'Present',
  },
  {
    role: 'Corporate Recruiter',
    organization: 'Southwire Company',
    description:
      'Led manufacturing and operational talent acquisition initiatives, managing high-volume requisitions and specialized technical engineering searches.',
    period: 'Prior Corporate Experience',
  },
  {
    role: 'Corporate Recruiter',
    organization: 'ReaderLink',
    description:
      'Drove corporate recruiting across distribution, supply chain operations, and management teams in fast-paced corporate environments.',
    period: 'Prior Corporate Experience',
  },
  {
    role: 'Recruiter & Business Relations Specialist',
    organization: 'Express Employment Professionals',
    description:
      'Managed commercial client partnerships, workforce consultation, candidate evaluations, and industrial placements.',
    period: 'Foundational Agency Experience',
  },
];

export const SERVICES: ServiceDetail[] = [
  {
    id: 'contract-recruiting',
    badge: 'Flexible Capacity',
    title: 'Contract Recruiting',
    shortDescription:
      'Flexible, high-impact recruiting bandwidth for businesses experiencing hiring spikes, temporary recruiter shortages, or project-based staffing initiatives.',
    problemAddressed:
      'Internal teams overloaded by sudden requisition surges or temporary vacancies in talent acquisition, risking project delays and burnout.',
    whoBenefits: [
      'Fast-growing manufacturers facing sudden shift expansions',
      'Corporate HR departments during annual ramp-ups or leaves of absence',
      'Small to mid-sized businesses without dedicated full-time recruiters',
    ],
    supportIncludes: [
      'Dedicated sourcing and pipeline development for designated roles',
      'Initial candidate screenings and qualification evaluations',
      'Interview coordination and hiring manager feedback loops',
      'Seamless extension of your internal team and talent brand',
    ],
    potentialValue:
      'Delivers immediate recruiting horsepower without the overhead or long-term commitment of hiring additional permanent HR staff.',
  },
  {
    id: 'direct-hire-placement',
    badge: 'Permanent Talent',
    title: 'Direct-Hire Placement',
    shortDescription:
      'Targeted search, rigorous evaluation, and end-to-end placement coordination for critical permanent positions across your organization.',
    problemAddressed:
      'Critical permanent roles remaining unfilled for months because standard job postings attract high volume with low qualification match.',
    whoBenefits: [
      'Plant and operations managers needing specialized technical leads',
      'Executive leadership filling key managerial or functional vacancies',
      'Companies needing discreet, confidential executive searches',
    ],
    supportIncludes: [
      'In-depth intake on technical requirements, culture, and operational realities',
      'Active sourcing of passive, qualified candidates in your industry',
      'Competency-based candidate screening and structured presentation dossiers',
      'Offer communication assistance and reference check coordination',
    ],
    potentialValue:
      'Reduces the cost of prolonged vacancies and helps secure employees who align with both technical specifications and team culture.',
  },
  {
    id: 'corporate-recruiting-support',
    badge: 'HR Partnership',
    title: 'Corporate Recruiting Support',
    shortDescription:
      'Collaborative recruiting support designed specifically to relieve pressure on existing HR directors and talent acquisition teams.',
    problemAddressed:
      'HR leaders stretched thin across compliance, payroll, benefits, and employee relations, leaving insufficient time for dedicated proactive sourcing.',
    whoBenefits: [
      'HR Directors managing solo or lean internal departments',
      'Talent Acquisition Managers with overflowing requisition pipelines',
      'Multi-site corporate organizations requiring consistent recruiting execution',
    ],
    supportIncludes: [
      'Triage and active management of selected requisition backlogs',
      'Proactive headhunting across professional platforms and industry networks',
      'Weekly pipeline status reviews with transparent reporting',
      'Structured interview scheduling and candidate touchpoint management',
    ],
    potentialValue:
      'Enables HR leaders to focus on core strategic operations while open roles receive dedicated, uninterrupted attention.',
  },
  {
    id: 'manufacturing-recruitment',
    badge: 'Specialized Domain',
    title: 'Manufacturing Recruitment',
    shortDescription:
      'Specialized talent acquisition built upon deep familiarity with industrial plants, production floor dynamics, and shift-based operations.',
    problemAddressed:
      'Generalist staffing agencies lacking understanding of industrial terminology, machine operations, plant safety standards, and manufacturing schedules.',
    whoBenefits: [
      'Industrial manufacturers, fabrication facilities, and assembly plants',
      'Operations Directors, Plant Managers, and Maintenance Superintendents',
      'Logistics, distribution, and industrial engineering employers',
    ],
    supportIncludes: [
      'Targeted recruiting for plant supervisors, technicians, maintenance mechanics, and production leads',
      'Verification of shift willingness, physical working environment expectations, and safety certifications',
      'Knowledgeable candidate discussions grounded in real industrial workplace requirements',
      'Pre-screening for mechanical aptitude, reliability, and technical proficiencies',
    ],
    potentialValue:
      'Minimizes costly turnover by presenting candidates who truly understand and thrive in manufacturing environments.',
  },
  {
    id: 'talent-sourcing-screening',
    badge: 'Pipeline Focus',
    title: 'Talent Sourcing & Candidate Screening',
    shortDescription:
      'Targeted candidate generation and structured phone screenings to deliver a vetted shortlist of qualified individuals ready for your team.',
    problemAddressed:
      'Hiring managers spending countless evening hours sifting through hundreds of irrelevant résumés to find two qualified applicants.',
    whoBenefits: [
      'Hiring managers who prefer to handle final interviews internally but need an accurate shortlist',
      'Companies wanting to build proactive talent pipelines for anticipated growth',
      'Teams wanting to benchmark market talent availability',
    ],
    supportIncludes: [
      'Exhaustive Boolean sourcing, direct outreach, and network mining',
      'Standardized first-round screening calls evaluating core qualifications and salary alignment',
      'Concise candidate summaries highlighting key strengths and potential fit considerations',
      'Organized pipeline handoff formatted to your internal workflow',
    ],
    potentialValue:
      'Saves dozens of internal managerial hours each week by replacing resume clutter with a clean, pre-screened candidate roster.',
  },
  {
    id: 'recruitment-process-support',
    badge: 'Workflow Optimization',
    title: 'Recruitment Process Support',
    shortDescription:
      'Organized candidate communication, interview scheduling, and recruitment workflow coordination to provide a smooth, professional hiring experience.',
    problemAddressed:
      'Candidates dropping out of hiring pipelines due to slow communication, scheduling friction, or disorganization during interview rounds.',
    whoBenefits: [
      'Fast-paced companies where interviewers struggle to align calendars',
      'Businesses wanting to protect and enhance their employer brand reputation',
      'Organizations needing structured candidate communication from initial contact to decision',
    ],
    supportIncludes: [
      'Timely interview scheduling across multi-party interviewer panels',
      'Candidate preparation briefings and respectful follow-ups',
      'Professional rejection notices and talent rediscovery cataloging',
      'Hiring manager briefing notes and feedback consolidation',
    ],
    potentialValue:
      'Maintains candidate momentum, prevents losing top talent to competitors, and ensures every applicant experiences a professional process.',
  },
];

export const THREE_STEPS = [
  {
    number: '01',
    title: 'Understand Your Hiring Needs',
    description:
      'We begin with an in-depth consultation discussing the exact role requirements, technical qualifications, team culture, schedule, and desired level of recruiting support.',
  },
  {
    number: '02',
    title: 'Build a Recruiting Approach',
    description:
      'We agree on a clear scope of work tailored to your priorities—defining sourcing channels, screening criteria, communication cadences, and target candidate profiles.',
  },
  {
    number: '03',
    title: 'Support Your Hiring Process',
    description:
      'We actively source, screen, and coordinate agreed recruiting activities, presenting thoroughly vetted candidates and maintaining momentum through offer acceptance.',
  },
];

export const FAQS: FaqItem[] = [
  {
    category: 'Services',
    question: 'What types of recruiting services do you offer?',
    answer:
      'Jeffus Recruitment Solutions provides contract recruiting, direct-hire placement, corporate recruiting support, manufacturing recruitment, talent sourcing and screening, and recruitment process coordination. Each engagement is customized to your organization’s immediate needs.',
  },
  {
    category: 'Services',
    question: 'Do you provide contract recruiting?',
    answer:
      'Yes. Contract recruiting provides flexible recruiting bandwidth for companies experiencing hiring surges, temporary talent acquisition vacancies, or seasonal project ramp-ups without committing to permanent internal HR headcount.',
  },
  {
    category: 'Services',
    question: 'Do you assist with permanent placements?',
    answer:
      'Yes. Through direct-hire placement services, we handle active candidate sourcing, structured screening, interview coordination, and offer communication to help you hire dependable permanent team members.',
  },
  {
    category: 'Services',
    question: 'Do you recruit for manufacturing positions?',
    answer:
      'Manufacturing recruitment is one of our core specialties. With deep corporate recruiting experience at industrial organizations including Southwire Company and ReaderLink, Brittany Jeffus brings practical familiarity with plant operations, shift environments, and technical roles.',
  },
  {
    category: 'Process',
    question: 'Can you support an existing HR or talent acquisition team?',
    answer:
      'Absolutely. Many of our clients are HR Directors or Talent Acquisition Leaders who have an established internal process but simply need dedicated sourcing capacity or assistance managing specific high-priority requisitions.',
  },
  {
    category: 'Process',
    question: 'How does the recruiting process begin?',
    answer:
      'The process begins with an introductory discussion about your open positions, required qualifications, ideal timeline, and challenges you are facing. From there, we propose a clear, straightforward scope of work tailored to your goals.',
  },
  {
    category: 'Terms & Support',
    question: 'How are recruiting fees and engagement terms determined?',
    answer:
      'Engagement terms vary depending on the service model—whether an hourly or weekly contract recruiting arrangement, a project-based sourcing engagement, or a direct-hire placement agreement. We discuss specific terms transparently during our initial consultation based on your hiring scope.',
  },
  {
    category: 'Terms & Support',
    question: 'Can you support remote recruiting engagements?',
    answer:
      'Yes. While based in Gainesville, Texas, we support both local Texas employers and remote corporate recruiting engagements across the United States utilizing modern sourcing platforms and structured virtual communication.',
  },
  {
    category: 'Process',
    question: 'How can a company request recruiting assistance?',
    answer:
      'You can submit a hiring inquiry through our online employer form, request an introductory phone consultation, or email us directly at britany.jeffus.executivereciuter@gmail.com. We respond promptly to discuss your hiring requirements.',
  },
];
