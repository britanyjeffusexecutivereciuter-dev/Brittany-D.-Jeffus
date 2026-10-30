export type PageId =
  | 'home'
  | 'services'
  | 'about'
  | 'how-it-works'
  | 'employers'
  | 'candidates'
  | 'contact';

export type ServiceType =
  | 'Contract recruiting'
  | 'Direct-hire placement'
  | 'Corporate recruiting support'
  | 'Manufacturing recruitment'
  | 'Talent sourcing and screening'
  | 'Recruitment process support'
  | 'Other';

export interface EmployerInquiry {
  id: string;
  fullName: string;
  businessEmail: string;
  companyName: string;
  jobTitle: string;
  supportType: ServiceType;
  numberOfPositions: string;
  hiringTimeline: string;
  additionalDetails: string;
  createdAt: string;
}

export interface CandidateSubmission {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  location: string;
  desiredRole: string;
  experienceYears: string;
  resumeFileName?: string;
  privacyConsent: boolean;
  notes?: string;
  createdAt: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  shortDescription: string;
  problemAddressed: string;
  whoBenefits: string[];
  supportIncludes: string[];
  potentialValue: string;
  badge: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'Services' | 'Process' | 'Terms & Support';
}
