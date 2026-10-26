import React, { useState } from 'react';
import { 
  Users, 
  Globe, 
  ShieldCheck, 
  Cpu, 
  Database, 
  HardDrive, 
  Activity, 
  ArrowRight, 
  Layers, 
  Zap, 
  Lock, 
  Server,
  Network,
  Info,
  CheckCircle2
} from 'lucide-react';
import { ArchitectureNode } from '../types';

export const architectureSteps: ArchitectureNode[] = [
  {
    id: 'users-edge',
    step: 1,
    label: 'Users & Edge',
    title: 'Global Clients & Edge Ingress',
    shortDesc: 'Low-latency global distribution with DDoS mitigation.',
    awsServices: ['Amazon Route 53', 'Amazon CloudFront CDN', 'AWS WAF', 'AWS Shield'],
    details: 'User requests around the world are routed via Route 53 Anycast DNS to the nearest CloudFront edge location. AWS WAF inspects HTTP/S requests for malicious payloads, SQL injection, and rate anomalies before hitting the origin.',
    securityNote: 'Automatic TLS 1.3 encryption and DDoS Layer 3/4/7 inspection at the edge.',
    iconName: 'Globe'
  },
  {
    id: 'traffic-routing',
    step: 2,
    label: 'DNS & Networking',
    title: 'VPC & Traffic Routing Layer',
    shortDesc: 'Isolated network topologies and smart load balancing.',
    awsServices: ['Amazon VPC', 'Application Load Balancer (ALB)', 'NAT Gateway', 'VPC Flow Logs'],
    details: 'Encapsulated within custom Amazon Virtual Private Clouds (VPCs) across multiple Availability Zones. Application Load Balancers terminate SSL, perform granular path-based routing, and route healthy requests to target groups.',
    securityNote: 'Strict security group rules and private subnets with no direct public IP exposure.',
    iconName: 'Network'
  },
  {
    id: 'app-layer',
    step: 3,
    label: 'Application Layer',
    title: 'Microservices & API Management',
    shortDesc: 'API routing, authentication gates, and service meshes.',
    awsServices: ['Amazon API Gateway', 'AWS App Mesh', 'Amazon EventBridge', 'Amazon Cognito'],
    details: 'Unified API Gateway handles request throttling, JWT token verification, and payload transformations. Decoupled microservices communicate through asynchronous event buses and message queues.',
    securityNote: 'OAuth2 / OIDC token verification before requests reach compute workloads.',
    iconName: 'Layers'
  },
  {
    id: 'compute',
    step: 4,
    label: 'Compute Resources',
    title: 'Elastic Containers & Serverless',
    shortDesc: 'Auto-scaling compute clusters without management overhead.',
    awsServices: ['Amazon ECS (Fargate)', 'Amazon EKS (Kubernetes)', 'AWS Lambda', 'EC2 Auto Scaling'],
    details: 'Containerized workloads run in serverless ECS Fargate or Kubernetes (EKS) pods that scale dynamically based on CPU, memory, and queue depth. Ephemeral AWS Lambda functions handle background batch tasks.',
    securityNote: 'Immutable container images scanned via Amazon ECR and run with read-only root filesystems.',
    iconName: 'Cpu'
  },
  {
    id: 'database',
    step: 5,
    label: 'Database Tier',
    title: 'Multi-AZ Relational & NoSQL Datastores',
    shortDesc: 'High-availability storage engines with automatic failover.',
    awsServices: ['Amazon Aurora Multi-AZ', 'Amazon DynamoDB', 'Amazon ElastiCache (Redis)', 'Amazon DocumentDB'],
    details: 'High-performance database clusters with synchronous replication across three Availability Zones. Fast in-memory caching via ElastiCache accelerates response times and absorbs read spikes.',
    securityNote: 'Hardware-accelerated encryption at rest via AWS KMS and automated point-in-time snapshots.',
    iconName: 'Database'
  },
  {
    id: 'storage',
    step: 6,
    label: 'Storage & Backup',
    title: 'Object & Archive Storage',
    shortDesc: 'Durable, cost-optimized asset storage and backups.',
    awsServices: ['Amazon S3 Intelligent-Tiering', 'Amazon EBS Encrypted Volumes', 'AWS Backup', 'Amazon S3 Glacier'],
    details: 'Unstructured media and document storage in Amazon S3 with 99.999999999% (11 9s) durability. Intelligent-Tiering automatically moves cold objects to lower-cost tiers to reduce cloud spend.',
    securityNote: 'S3 Block Public Access enabled by default with bucket-level KMS key policies.',
    iconName: 'HardDrive'
  }
];

export const ArchitectureShowcase: React.FC = () => {
  const [activeStep, setActiveStep] = useState<ArchitectureNode>(architectureSteps[0]);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-5 h-5" />;
      case 'Network': return <Network className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Database': return <Database className="w-5 h-5" />;
      case 'HardDrive': return <HardDrive className="w-5 h-5" />;
      default: return <Server className="w-5 h-5" />;
    }
  };

  return (
    <section id="architecture" className="relative py-24 bg-[#050B18]">
      {/* Background illumination */}
      <div 
        aria-hidden="true" 
        className="absolute top-10 left-1/3 w-[500px] h-[500px] bg-cyan-600/5 blur-[140px] rounded-full pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Interactive Blueprint
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            See How CloudTech Connects Your Infrastructure
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Follow the flow of data across resilient, multi-tier AWS environments designed for security, low latency, and zero single points of failure.
          </p>
        </div>

        {/* Diagram Visualization Container */}
        <div className="rounded-3xl bg-gradient-to-b from-[#081838] via-[#07132c] to-[#050E21] border border-sky-500/20 p-6 sm:p-8 lg:p-10 shadow-2xl relative">
          
          {/* Cross-cutting Security & Telemetry Ribbon */}
          <div className="mb-8 p-3 rounded-xl bg-[#091b3d]/90 border border-cyan-500/30 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-cyan-300 font-semibold">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Cross-Cutting Security: AWS IAM Least-Privilege &amp; AWS KMS Envelope Encryption</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>Telemetry: CloudWatch Metrics &amp; Amazon GuardDuty Threat Scans</span>
            </div>
          </div>

          {/* Connected Flow Diagram Pipeline (Horizontal on Desktop, stacked on mobile) */}
          <div className="relative mb-10">
            {/* Animated Connector Line for Desktop */}
            <div 
              aria-hidden="true" 
              className="hidden lg:block absolute top-1/2 left-8 right-8 h-1 -translate-y-1/2 bg-slate-800/80 rounded-full z-0 overflow-hidden"
            >
              <div className="w-full h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-sky-300 opacity-70 animate-[pulse_3s_ease-in-out_infinite]" />
            </div>

            {/* Steps Grid */}
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {architectureSteps.map((node) => {
                const isSelected = activeStep.id === node.id;
                const isHovered = hoveredNode === node.id;

                return (
                  <div
                    key={node.id}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    onClick={() => setActiveStep(node)}
                    className={`relative p-3.5 sm:p-4 rounded-2xl cursor-pointer transition-all duration-200 border text-center flex flex-col items-center justify-between ${
                      isSelected
                        ? 'bg-gradient-to-b from-[#0e2752] to-[#0a1936] border-cyan-400 shadow-lg shadow-cyan-950/60 scale-105'
                        : isHovered
                        ? 'bg-[#091b3b] border-sky-600/70'
                        : 'bg-[#08152e]/80 border-sky-900/40 hover:border-sky-700/60'
                    }`}
                  >
                    {/* Tooltip on hover */}
                    {isHovered && !isSelected && (
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-[10px] text-cyan-300 px-2 py-1 rounded shadow-lg border border-cyan-500/40 whitespace-nowrap z-30 pointer-events-none">
                        Click to inspect {node.label}
                      </div>
                    )}

                    {/* Step indicator */}
                    <div className="w-full flex items-center justify-between text-[10px] font-mono text-slate-400 mb-2">
                      <span>Step 0{node.step}</span>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                      )}
                    </div>

                    {/* Node Icon */}
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-2.5 transition-transform duration-200 ${
                      isSelected 
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 scale-110' 
                        : 'bg-slate-800/80 text-slate-300 border border-slate-700/50'
                    }`}>
                      {getStepIcon(node.iconName)}
                    </div>

                    {/* Label */}
                    <div className="text-xs font-bold text-white mb-1">
                      {node.label}
                    </div>
                    
                    <div className="text-[10px] text-slate-400 line-clamp-1">
                      {node.awsServices[0]}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive Inspection Detail Panel */}
          <div className="rounded-2xl bg-[#061126]/90 border border-sky-500/30 p-6 sm:p-8 backdrop-blur-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-300 text-xs font-mono font-medium border border-cyan-800/40">
                    Stage 0{activeStep.step} of 06
                  </span>
                  <span className="text-xs text-slate-400 font-medium">Architecture Inspection</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {activeStep.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {activeStep.details}
                </p>

                {/* Security and Resilience Note */}
                <div className="p-3.5 rounded-xl bg-blue-950/40 border border-sky-800/40 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider block mb-0.5">
                      Security &amp; Resilience Guarantee
                    </span>
                    <span className="text-xs text-slate-300">
                      {activeStep.securityNote}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Services List */}
              <div className="lg:col-span-5 bg-[#091838]/70 rounded-xl border border-sky-900/40 p-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-1.5">
                  <Info className="w-4 h-4 text-cyan-400" />
                  Associated AWS Services
                </h4>

                <div className="space-y-2 mb-6">
                  {activeStep.awsServices.map((svc, i) => (
                    <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 border border-slate-800/70 text-xs">
                      <span className="font-semibold text-slate-200">{svc}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-white rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-colors shadow-md"
                >
                  <span>Request Custom Topology Design</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
