import React, { useState } from 'react';
import { 
  AppWindow, 
  Maximize2, 
  Workflow, 
  ShieldAlert, 
  Check, 
  ArrowRight,
  Layers,
  Terminal,
  Cpu,
  Lock,
  CloudCog
} from 'lucide-react';
import { SolutionItem } from '../types';

export const solutionsData: SolutionItem[] = [
  {
    id: 'cloud-native',
    title: 'Cloud-Native Applications',
    subtitle: 'Microservices & Event-Driven Systems',
    description: 'Transform legacy monolithic software into resilient, independently deployable microservices utilizing AWS serverless computing and managed container frameworks.',
    iconName: 'AppWindow',
    architectureHighlights: [
      'AWS Lambda & Amazon API Gateway for on-demand compute',
      'Amazon EventBridge for asynchronous messaging',
      'Amazon ECS (Fargate) for serverless container workloads',
      'Stateless API architectures with global caching'
    ],
    benefits: [
      'Near-instant scaling with zero idle server overhead',
      'Rapid release cadences and isolated service failures',
      'Simplified maintenance without OS patching'
    ],
    useCases: ['SaaS platforms', 'High-traffic customer portals', 'Event-driven data processing']
  },
  {
    id: 'scalable-infra',
    title: 'Scalable Infrastructure',
    subtitle: 'Elastic Compute & Multi-AZ Resilience',
    description: 'Engineer high-throughput cloud environments that automatically adapt to traffic surges while maintaining low latency, fault tolerance, and zero unplanned downtime.',
    iconName: 'Maximize2',
    architectureHighlights: [
      'Application Load Balancers (ALB) with health checking',
      'EC2 Auto Scaling Groups spanning multiple Availability Zones',
      'Amazon Aurora Multi-AZ clusters with automated failover',
      'CloudFront CDN edge acceleration and static asset caching'
    ],
    benefits: [
      'Automated horizontal scale up and scale down based on load',
      'Regional fault isolation and 99.99% availability targets',
      'Global low-latency delivery across distributed user bases'
    ],
    useCases: ['E-commerce spikes', 'Enterprise ERP workloads', 'Real-time media streaming']
  },
  {
    id: 'automated-pipelines',
    title: 'Automated Deployment Pipelines',
    subtitle: 'CI/CD & Infrastructure as Code (IaC)',
    description: 'Accelerate engineering velocity and eliminate human configuration errors with codified pipelines, automated testing, and predictable staging-to-production rollouts.',
    iconName: 'Workflow',
    architectureHighlights: [
      'Terraform and AWS CDK for declarative infrastructure',
      'AWS CodePipeline & GitHub Actions continuous integration',
      'Canary and Blue/Green automated release deployments',
      'Automated pre-deployment security and lint validations'
    ],
    benefits: [
      'Deploy code in minutes with automated rollback safety',
      'Reproducible, version-controlled cloud environments',
      'Consistent configuration across Dev, Staging, and Prod'
    ],
    useCases: ['Rapid software release cycles', 'Multi-tenant cloud platforms', 'Strict audit environments']
  },
  {
    id: 'secure-cost',
    title: 'Secure and Cost-Efficient Cloud Environments',
    subtitle: 'Zero-Trust Security & Cloud FinOps',
    description: 'Balance airtight security controls with rigorous financial governance, ensuring every dollar invested in AWS delivers measurable business performance.',
    iconName: 'ShieldAlert',
    architectureHighlights: [
      'AWS IAM Identity Center with least-privilege role boundaries',
      'AWS KMS envelope encryption across all databases and S3 buckets',
      'AWS Compute Optimizer and Cost Anomaly Detection',
      'Automated lifecycle management and S3 Intelligent-Tiering'
    ],
    benefits: [
      'Proactive protection against unauthorized access and leaks',
      'Elimination of zombie and over-provisioned cloud resources',
      'Transparent attribution of AWS spending per team and project'
    ],
    useCases: ['Regulated fintech & healthcare systems', 'Cost-conscious scale-ups', 'Enterprise cloud audits']
  }
];

export const Solutions: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(solutionsData[0].id);

  const activeSolution = solutionsData.find((s) => s.id === activeTab) || solutionsData[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'AppWindow': return <AppWindow className="w-5 h-5" />;
      case 'Maximize2': return <Maximize2 className="w-5 h-5" />;
      case 'Workflow': return <Workflow className="w-5 h-5" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5" />;
      default: return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <section id="solutions" className="relative py-24 bg-[#050B18]">
      {/* Background illumination */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Enterprise Solutions
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Technology That Moves Your Business Forward
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Architected for reliability, speed, and long-term financial predictability. Explore our specialized solution frameworks.
          </p>
        </div>

        {/* 4 Solution Categories Navigation Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {solutionsData.map((sol) => {
            const isSelected = activeTab === sol.id;
            return (
              <button
                key={sol.id}
                type="button"
                onClick={() => setActiveTab(sol.id)}
                className={`p-4 rounded-xl text-left transition-all duration-200 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#0c224a] to-[#08152e] border-cyan-400/80 shadow-lg shadow-cyan-950/40 text-white'
                    : 'bg-[#09152e]/50 border-slate-800/80 hover:border-sky-700/50 text-slate-300 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-lg ${isSelected ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-800/60 text-slate-400'}`}>
                    {getIcon(sol.iconName)}
                  </div>
                  <span className={`text-[10px] font-mono uppercase tracking-wider ${isSelected ? 'text-cyan-400' : 'text-slate-400'}`}>
                    Framework
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">
                    {sol.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-1">
                    {sol.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Solution In-Depth Showcase Panel */}
        <div className="rounded-3xl bg-gradient-to-b from-[#081736] to-[#061129] border border-sky-500/20 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Subtle decorative grid */}
          <div aria-hidden="true" className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Detail Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-medium mb-4">
                <span>{activeSolution.subtitle}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                {activeSolution.title}
              </h3>

              <p className="text-base text-slate-300 leading-relaxed mb-6">
                {activeSolution.description}
              </p>

              {/* Architecture Highlights */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  Key Architectural Components
                </h4>
                <div className="space-y-2.5">
                  {activeSolution.architectureHighlights.map((hl, i) => (
                    <div key={i} className="flex items-start text-xs sm:text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 mr-2.5 flex-shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Use Cases */}
              <div className="pt-4 border-t border-slate-800/80">
                <span className="text-xs font-semibold text-slate-400 mr-2">Target Workloads:</span>
                <div className="inline-flex flex-wrap gap-2 mt-2">
                  {activeSolution.useCases.map((uc, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 rounded-md bg-slate-800/70 text-slate-200 border border-slate-700/60">
                      {uc}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Value & Benefits Column */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full bg-[#07132c]/80 rounded-2xl border border-sky-500/20 p-6 sm:p-7 backdrop-blur-md">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-4 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  Business &amp; Technical Outcomes
                </h4>

                <div className="space-y-4 mb-6">
                  {activeSolution.benefits.map((benefit, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-3">
                      <div className="p-1 rounded-md bg-cyan-950 text-cyan-400 flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm text-slate-200 font-medium">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-md shadow-cyan-950/40 transition-all duration-200"
                >
                  <span>Discuss This Solution for Your Team</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
