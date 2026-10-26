import React, { useState } from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  TrendingDown, 
  Layers, 
  Server, 
  Database, 
  Cloud, 
  Cpu, 
  Lock, 
  Activity, 
  CheckCircle2, 
  Sparkles,
  Globe,
  Radio
} from 'lucide-react';

interface HeroProps {
  onOpenConsultation?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const [activeNode, setActiveNode] = useState<string | null>('cloud-core');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden flex items-center">
      {/* Background atmosphere lighting */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-sky-500/10 blur-[130px] rounded-full pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute top-10 right-10 w-[400px] h-[400px] bg-blue-600/10 blur-[110px] rounded-full pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left z-10">
            
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 bg-sky-950/70 border border-cyan-500/25 rounded-full shadow-inner">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                AWS CLOUD SOLUTIONS &amp; CONSULTING
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
              Build Smarter.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500">
                Scale Faster.
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-200">
                Cloud Without Limits.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8">
              Empower your business with secure, scalable, and cost-efficient cloud infrastructure. 
              CloudTech helps businesses modernize their systems, optimize AWS spending, and accelerate innovation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                href="#contact"
                onClick={(e) => {
                  if (onOpenConsultation) {
                    e.preventDefault();
                    onOpenConsultation();
                  }
                }}
                className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-white rounded-xl bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-lg shadow-cyan-950/60 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 group focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('services');
                }}
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-slate-200 hover:text-white rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-700/70 hover:border-sky-500/50 transition-all duration-200"
              >
                Explore Our Services
              </a>
            </div>

            {/* Three Compact Trust Indicators */}
            <div className="pt-6 border-t border-slate-800/80">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                
                <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-slate-900/40 border border-slate-800/60">
                  <div className="p-1.5 rounded-md bg-blue-950/70 text-cyan-400">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-200">
                    Secure Cloud Infrastructure
                  </span>
                </div>

                <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-slate-900/40 border border-slate-800/60">
                  <div className="p-1.5 rounded-md bg-blue-950/70 text-cyan-400">
                    <TrendingDown className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-200">
                    Cost-Conscious Architecture
                  </span>
                </div>

                <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-slate-900/40 border border-slate-800/60">
                  <div className="p-1.5 rounded-md bg-blue-950/70 text-cyan-400">
                    <Layers className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-200">
                    Scalable Solutions
                  </span>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: Advanced Cloud Visualization */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Ambient visual container with subtle glow */}
            <div className="relative w-full max-w-[520px] aspect-square rounded-3xl p-4 sm:p-6 bg-gradient-to-b from-sky-950/30 via-slate-950/50 to-blue-950/20 border border-sky-500/20 shadow-2xl shadow-sky-950/50 backdrop-blur-md">
              
              {/* Outer decorative ring */}
              <div 
                aria-hidden="true" 
                className="absolute inset-4 rounded-full border border-dashed border-sky-400/20 animate-[spin_60s_linear_infinite]" 
              />
              <div 
                aria-hidden="true" 
                className="absolute inset-16 rounded-full border border-sky-500/15" 
              />

              {/* Connecting animated SVG Lines */}
              <svg 
                className="absolute inset-0 w-full h-full pointer-events-none" 
                viewBox="0 0 500 500"
                fill="none"
              >
                <defs>
                  <linearGradient id="flowGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="flowGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#2563eb" stopOpacity="0.2" />
                  </linearGradient>
                </defs>

                {/* Network rays connecting to center (250, 240) */}
                <line x1="100" y1="100" x2="250" y2="240" stroke="url(#flowGrad1)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-[pulse_3s_ease-in-out_infinite]" />
                <line x1="400" y1="100" x2="250" y2="240" stroke="url(#flowGrad2)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-[pulse_2.5s_ease-in-out_infinite]" />
                <line x1="80" y1="260" x2="250" y2="240" stroke="url(#flowGrad1)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-[pulse_4s_ease-in-out_infinite]" />
                <line x1="420" y1="270" x2="250" y2="240" stroke="url(#flowGrad2)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-[pulse_3.5s_ease-in-out_infinite]" />
                <line x1="130" y1="390" x2="250" y2="240" stroke="url(#flowGrad1)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-[pulse_2.8s_ease-in-out_infinite]" />
                <line x1="370" y1="390" x2="250" y2="240" stroke="url(#flowGrad2)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-[pulse_3.2s_ease-in-out_infinite]" />

                {/* Animated traveling photon particles */}
                <circle cx="175" cy="170" r="3" fill="#38bdf8" className="animate-ping" style={{ animationDuration: '3s' }} />
                <circle cx="325" cy="170" r="3" fill="#00F0FF" className="animate-ping" style={{ animationDuration: '2.5s' }} />
                <circle cx="190" cy="315" r="3" fill="#38bdf8" className="animate-ping" style={{ animationDuration: '3.5s' }} />
                <circle cx="310" cy="315" r="3" fill="#60a5fa" className="animate-ping" style={{ animationDuration: '2.8s' }} />
              </svg>

              {/* Central Luminous Cloud Node */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center cursor-pointer group z-20"
                onClick={() => setActiveNode('cloud-core')}
              >
                <div className="relative">
                  {/* Concentric Glow Pulses */}
                  <div className="absolute -inset-4 bg-cyan-500/25 blur-xl rounded-full animate-pulse pointer-events-none" />
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-blue-700 via-sky-600 to-cyan-400 p-[2px] shadow-xl shadow-cyan-500/20 transition-transform duration-300 group-hover:scale-105">
                    <div className="w-full h-full rounded-full bg-[#07122b] flex flex-col items-center justify-center p-2 text-center">
                      <Cloud className="w-9 h-9 sm:w-11 sm:h-11 text-cyan-300 transition-transform group-hover:scale-110 duration-200" />
                      <span className="text-[10px] sm:text-xs font-bold text-white tracking-wider mt-0.5">
                        AWS CLOUD
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Node 1: Route 53 / Global Edge (Top Left) */}
              <div 
                className="absolute top-6 left-6 sm:top-8 sm:left-8 z-20 group cursor-pointer"
                onClick={() => setActiveNode('edge')}
              >
                <div className="flex items-center gap-2 p-2 sm:px-3 sm:py-2 rounded-xl bg-[#081530]/90 border border-sky-500/30 hover:border-cyan-400 shadow-lg shadow-black/40 backdrop-blur-md transition-all duration-200 group-hover:-translate-y-1">
                  <div className="p-1.5 rounded-lg bg-sky-950 text-cyan-300">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div className="hidden sm:block text-left">
                    <div className="text-[11px] font-bold text-white">Route 53 &amp; CDN</div>
                    <div className="text-[9px] text-sky-300">Global Edge Routing</div>
                  </div>
                </div>
              </div>

              {/* Node 2: Security & WAF (Top Right) */}
              <div 
                className="absolute top-6 right-6 sm:top-8 sm:right-8 z-20 group cursor-pointer"
                onClick={() => setActiveNode('security')}
              >
                <div className="flex items-center gap-2 p-2 sm:px-3 sm:py-2 rounded-xl bg-[#081530]/90 border border-sky-500/30 hover:border-cyan-400 shadow-lg shadow-black/40 backdrop-blur-md transition-all duration-200 group-hover:-translate-y-1">
                  <div className="p-1.5 rounded-lg bg-sky-950 text-cyan-300">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div className="hidden sm:block text-left">
                    <div className="text-[11px] font-bold text-white">IAM &amp; KMS</div>
                    <div className="text-[9px] text-cyan-300">Zero-Trust Security</div>
                  </div>
                </div>
              </div>

              {/* Node 3: Compute & Containers ECS/EKS (Middle Left) */}
              <div 
                className="absolute top-[48%] -left-2 sm:left-2 -translate-y-1/2 z-20 group cursor-pointer"
                onClick={() => setActiveNode('compute')}
              >
                <div className="flex items-center gap-2 p-2 sm:px-3 sm:py-2 rounded-xl bg-[#081530]/90 border border-sky-500/30 hover:border-cyan-400 shadow-lg shadow-black/40 backdrop-blur-md transition-all duration-200 group-hover:-translate-y-1">
                  <div className="p-1.5 rounded-lg bg-sky-950 text-blue-400">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div className="hidden sm:block text-left">
                    <div className="text-[11px] font-bold text-white">ECS &amp; Lambda</div>
                    <div className="text-[9px] text-sky-300">Elastic Compute</div>
                  </div>
                </div>
              </div>

              {/* Node 4: Monitoring CloudWatch (Middle Right) */}
              <div 
                className="absolute top-[48%] -right-2 sm:right-2 -translate-y-1/2 z-20 group cursor-pointer"
                onClick={() => setActiveNode('monitoring')}
              >
                <div className="flex items-center gap-2 p-2 sm:px-3 sm:py-2 rounded-xl bg-[#081530]/90 border border-sky-500/30 hover:border-cyan-400 shadow-lg shadow-black/40 backdrop-blur-md transition-all duration-200 group-hover:-translate-y-1">
                  <div className="p-1.5 rounded-lg bg-sky-950 text-cyan-300">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div className="hidden sm:block text-left">
                    <div className="text-[11px] font-bold text-white">CloudWatch</div>
                    <div className="text-[9px] text-emerald-400">Telemetry Active</div>
                  </div>
                </div>
              </div>

              {/* Node 5: Database Aurora / DynamoDB (Bottom Left) */}
              <div 
                className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-20 group cursor-pointer"
                onClick={() => setActiveNode('database')}
              >
                <div className="flex items-center gap-2 p-2 sm:px-3 sm:py-2 rounded-xl bg-[#081530]/90 border border-sky-500/30 hover:border-cyan-400 shadow-lg shadow-black/40 backdrop-blur-md transition-all duration-200 group-hover:-translate-y-1">
                  <div className="p-1.5 rounded-lg bg-sky-950 text-cyan-400">
                    <Database className="w-4 h-4" />
                  </div>
                  <div className="hidden sm:block text-left">
                    <div className="text-[11px] font-bold text-white">Aurora Multi-AZ</div>
                    <div className="text-[9px] text-sky-300">Resilient Storage</div>
                  </div>
                </div>
              </div>

              {/* Node 6: Object Storage S3 (Bottom Right) */}
              <div 
                className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-20 group cursor-pointer"
                onClick={() => setActiveNode('storage')}
              >
                <div className="flex items-center gap-2 p-2 sm:px-3 sm:py-2 rounded-xl bg-[#081530]/90 border border-sky-500/30 hover:border-cyan-400 shadow-lg shadow-black/40 backdrop-blur-md transition-all duration-200 group-hover:-translate-y-1">
                  <div className="p-1.5 rounded-lg bg-sky-950 text-blue-400">
                    <Server className="w-4 h-4" />
                  </div>
                  <div className="hidden sm:block text-left">
                    <div className="text-[11px] font-bold text-white">Amazon S3</div>
                    <div className="text-[9px] text-cyan-300">Intelligent Tiering</div>
                  </div>
                </div>
              </div>

              {/* Glassmorphism Dashboard Status Card pinned at the bottom-center */}
              <div className="absolute -bottom-5 sm:-bottom-6 left-1/2 -translate-x-1/2 w-[92%] sm:w-[86%] z-30">
                <div className="p-3 sm:p-3.5 rounded-2xl bg-[#071329]/95 border border-cyan-500/30 shadow-2xl backdrop-blur-xl">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="font-semibold text-white">Infrastructure Blueprint</span>
                    </div>
                    <span className="text-[10px] text-cyan-300 font-mono">AWS Well-Architected</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center pt-1 border-t border-slate-800/80">
                    <div>
                      <div className="text-[10px] text-slate-400">High Availability</div>
                      <div className="text-xs font-semibold text-cyan-300">Multi-AZ Active</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400">Cost Efficiency</div>
                      <div className="text-xs font-semibold text-emerald-400">Optimized</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400">Security Posture</div>
                      <div className="text-xs font-semibold text-blue-400">Enforced</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
