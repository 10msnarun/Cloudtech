import React, { useState } from 'react';
import { 
  Compass, 
  ArrowUpRight, 
  GitBranch, 
  ShieldCheck, 
  Coins, 
  ServerCog,
  CheckCircle2,
  X,
  Layers,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'consulting',
    title: 'AWS Cloud Consulting',
    description: 'Plan and implement cloud architectures aligned with your business requirements, performance needs, and budget.',
    iconName: 'Compass',
    features: [
      'AWS Well-Architected Framework reviews',
      'Target-state architecture design',
      'Scalability and failover planning',
      'Technology stack modernization'
    ],
    awsServices: ['AWS Well-Architected Tool', 'AWS Organizations', 'AWS Control Tower'],
    deliverables: ['Architecture Blueprint', 'Risk Analysis Report', 'Implementation Roadmap']
  },
  {
    id: 'migration',
    title: 'Cloud Migration',
    description: 'Move applications, databases, and workloads to AWS with a structured migration approach focused on reliability and minimal disruption.',
    iconName: 'ArrowUpRight',
    features: [
      'Workload discovery and dependency mapping',
      'Rehost, replatform, and refactor strategies',
      'Zero-downtime database migration',
      'Cutover planning and post-migration validation'
    ],
    awsServices: ['AWS Application Migration Service (MGN)', 'AWS Database Migration Service (DMS)', 'AWS DataSync'],
    deliverables: ['Migration Runbook', 'Data Sync Plan', 'Rollback Strategy']
  },
  {
    id: 'devops',
    title: 'DevOps & Automation',
    description: 'Streamline software delivery through CI/CD pipelines, infrastructure automation, containerization, and modern DevOps practices.',
    iconName: 'GitBranch',
    features: [
      'Infrastructure as Code (Terraform, AWS CDK, CloudFormation)',
      'Automated CI/CD pipelines for zero-downtime deploys',
      'Container orchestration (Amazon ECS, EKS)',
      'GitOps and automated configuration management'
    ],
    awsServices: ['AWS CodePipeline', 'Amazon EKS', 'Amazon ECS', 'AWS CloudFormation'],
    deliverables: ['Terraform/CDK Repositories', 'CI/CD Pipeline Configurations', 'Container Blueprints']
  },
  {
    id: 'security',
    title: 'Cloud Security',
    description: 'Strengthen your cloud environment with identity and access management, security configurations, monitoring, and best-practice reviews.',
    iconName: 'ShieldCheck',
    features: [
      'Zero-Trust IAM policies and principle of least privilege',
      'Encryption at rest and in transit via AWS KMS',
      'Automated threat detection and compliance auditing',
      'Network perimeter hardening (VPC, WAF, Shield)'
    ],
    awsServices: ['AWS IAM', 'AWS KMS', 'AWS WAF', 'Amazon GuardDuty', 'AWS Security Hub'],
    deliverables: ['Security Posture Audit', 'IAM Access Matrix', 'Compliance Checklist']
  },
  {
    id: 'cost',
    title: 'Cost Optimization',
    description: 'Identify unnecessary cloud expenditure, review resource utilization, and implement practical strategies to improve cost efficiency.',
    iconName: 'Coins',
    features: [
      'Idle and overprovisioned resource reclamation',
      'Savings Plans and Reserved Instance portfolio tuning',
      'Storage lifecycle rules (S3 Intelligent-Tiering)',
      'Automated budget alerts and cost anomaly detection'
    ],
    awsServices: ['AWS Cost Explorer', 'AWS Budgets', 'AWS Compute Optimizer', 'Amazon S3 Storage Lens'],
    deliverables: ['Cost Optimization Audit', 'Savings Forecast', 'Automated Budget Guards']
  },
  {
    id: 'management',
    title: 'Cloud Infrastructure Management',
    description: 'Manage and maintain cloud infrastructure through monitoring, troubleshooting, resource management, and operational support.',
    iconName: 'ServerCog',
    features: [
      '24/7 telemetry and proactive anomaly alert triage',
      'Patch management and routine maintenance automation',
      'Incident response and root cause analysis',
      'Backup automation and disaster recovery testing'
    ],
    awsServices: ['Amazon CloudWatch', 'AWS Systems Manager', 'AWS Backup', 'AWS CloudTrail'],
    deliverables: ['Monitoring Dashboards', 'SLA Runbooks', 'Disaster Recovery Plan']
  }
];

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-6 h-6 text-cyan-400" />;
      case 'ArrowUpRight': return <ArrowUpRight className="w-6 h-6 text-cyan-400" />;
      case 'GitBranch': return <GitBranch className="w-6 h-6 text-cyan-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-cyan-400" />;
      case 'Coins': return <Coins className="w-6 h-6 text-cyan-400" />;
      case 'ServerCog': return <ServerCog className="w-6 h-6 text-cyan-400" />;
      default: return <Layers className="w-6 h-6 text-cyan-400" />;
    }
  };

  const handleInquire = (serviceTitle: string) => {
    setSelectedService(null);
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative py-24 bg-[#071126] border-t border-b border-sky-900/20">
      {/* Ambient background glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Core Capabilities
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Cloud Solutions Built for Your Business
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            From infrastructure design to continuous optimization, CloudTech helps you get more from the cloud.
          </p>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service, idx) => (
            <div
              key={service.id}
              className="group relative rounded-2xl bg-[#091733]/90 border border-sky-950 hover:border-cyan-500/40 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-cyan-950/30 flex flex-col justify-between"
            >
              {/* Subtle top gradient line */}
              <div 
                aria-hidden="true" 
                className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
              />

              <div>
                {/* Icon & Index */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-sky-950/80 border border-sky-800/50 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-400/60 group-hover:bg-sky-900/40 transition-all duration-300">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    0{idx + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-200">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Key Points Preview */}
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 group/btn focus:outline-none"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>

                <button
                  type="button"
                  onClick={() => handleInquire(service.title)}
                  className="text-xs font-medium text-slate-400 hover:text-white px-2.5 py-1 rounded-md bg-slate-800/60 hover:bg-slate-700/60 border border-slate-700/50 transition-colors"
                >
                  Consult
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedService(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
        >
          <div 
            className="relative w-full max-w-xl rounded-2xl bg-[#091836] border border-cyan-500/30 p-6 sm:p-8 shadow-2xl text-left max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 focus:outline-none"
              aria-label="Close service details"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-sky-950 border border-cyan-500/40 flex items-center justify-center">
                {getIcon(selectedService.iconName)}
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase text-cyan-400">AWS Cloud Service</span>
                <h3 id="service-modal-title" className="text-2xl font-bold text-white">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {selectedService.description}
            </p>

            {/* Scope & Focus */}
            <div className="mb-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5">
                Core Focus Areas
              </h4>
              <div className="space-y-2">
                {selectedService.features.map((item, i) => (
                  <div key={i} className="flex items-start text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AWS Technologies Used */}
            <div className="mb-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Primary AWS Services
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedService.awsServices.map((awsSvc, i) => (
                  <span 
                    key={i} 
                    className="text-xs px-2.5 py-1 rounded-md bg-slate-800/80 border border-sky-800/40 text-slate-200"
                  >
                    {awsSvc}
                  </span>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Standard Deliverables
              </h4>
              <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                {selectedService.deliverables.map((del, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-md bg-cyan-950/40 border border-cyan-800/40 text-cyan-300">
                    {del}
                  </span>
                ))}
              </div>
            </div>

            {/* Inquire CTA */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 text-xs sm:text-sm font-medium text-slate-300 hover:text-white"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => handleInquire(selectedService.title)}
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-md shadow-cyan-950/50"
              >
                Request Consultation for this Service
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
