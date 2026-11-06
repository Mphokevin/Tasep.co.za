export type PageId = 'home' | 'services' | 'about' | 'contact';

export interface ServiceDivision {
  id: string;
  title: string;
  shortTitle: string;
  tagline: string;
  image: string;
  iconName: string;
  summary: string;
  description: string;
  capabilities: string[];
  specs: { label: string; value: string }[];
  accentColor: string;
}

export interface CompanyPillar {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  description: string;
  details: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  serviceCategory: string;
  projectLocation: string;
  estimatedBudget: string;
  timeline: string;
  message: string;
  formType: 'quote' | 'general' | 'callback';
  callbackDate?: string;
  callbackTime?: string;
}

export interface SubmittedInquiry extends ContactFormData {
  id: string;
  submittedAt: string;
}
