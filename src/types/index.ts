export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  awsServices: string[];
  deliverables: string[];
}

export interface SolutionItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  architectureHighlights: string[];
  benefits: string[];
  useCases: string[];
}

export interface WhyFeature {
  title: string;
  description: string;
  iconName: string;
  highlight: string;
}

export interface ArchitectureNode {
  id: string;
  step: number;
  label: string;
  title: string;
  shortDesc: string;
  awsServices: string[];
  details: string;
  securityNote: string;
  iconName: string;
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  company: string;
  serviceInterest: string;
  projectRequirements: string;
}
