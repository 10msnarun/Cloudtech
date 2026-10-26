import React from 'react';
import { Target, ShieldCheck, PiggyBank, Expand, CheckCircle2 } from 'lucide-react';
import { WhyFeature } from '../types';

export const whyFeatures: WhyFeature[] = [
  {
    title: 'Business-Focused Solutions',
    description: 'Cloud decisions designed around your actual business requirements.',
    iconName: 'Target',
    highlight: 'Pragmatic Engineering',
  },
  {
    title: 'Security-Conscious Architecture',
    description: 'Infrastructure built with security, access control, and operational reliability in mind.',
    iconName: 'ShieldCheck',
    highlight: 'Zero-Trust Foundation',
  },
  {
    title: 'Cost Awareness',
    description: 'Practical recommendations to help control unnecessary cloud spending.',
    iconName: 'PiggyBank',
    highlight: 'FinOps Discipline',
  },
  {
    title: 'Scalable by Design',
    description: 'Cloud environments designed to evolve as your business grows.',
    iconName: 'Expand',
    highlight: 'Future-Proof Elasticity',
  },
];

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target':
        return <Target className="w-6 h-6 text-cyan-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-cyan-400" />;
      case 'PiggyBank':
        return <PiggyBank className="w-6 h-6 text-cyan-400" />;
      case 'Expand':
        return <Expand className="w-6 h-6 text-cyan-400" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="why-us" className="relative py-24 bg-[#071126] border-t border-sky-900/20">
      {/* Background glow effects */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Why Partner With Us
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Your Cloud. Your Goals. Our Expertise.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We operate as an extension of your technical team, delivering clear architectures, hands-on implementation, and lasting cloud reliability.
          </p>
        </div>

        {/* 4 Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl bg-[#091733]/80 border border-sky-900/30 hover:border-cyan-400/50 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/20 flex flex-col justify-between"
            >
              <div>
                {/* Header with icon and index */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-sky-950/80 border border-sky-800/60 flex items-center justify-center group-hover:scale-105 group-hover:border-cyan-400/60 transition-all duration-200">
                    {getIcon(feat.iconName)}
                  </div>
                  <span className="text-[10px] font-mono tracking-wider text-cyan-400/90 uppercase px-2 py-0.5 rounded bg-cyan-950/50 border border-cyan-800/30">
                    {feat.highlight}
                  </span>
                </div>

                {/* Feature Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {feat.title}
                </h3>

                {/* Feature Description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {feat.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/70 flex items-center text-xs text-slate-400">
                <span className="font-mono text-cyan-400 mr-2">0{idx + 1}.</span>
                <span>Production-Tested Practice</span>
              </div>
            </div>
          ))}
        </div>

        {/* Supporting Assurance Banner */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-sky-950/60 via-slate-900/80 to-blue-950/60 border border-sky-800/40 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left max-w-2xl">
            <h4 className="text-base sm:text-lg font-bold text-white mb-1">
              Direct Access to Cloud Infrastructure Engineers
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              No layered account managers or boilerplate solutions. You collaborate directly with senior cloud engineers who design, implement, and document your AWS infrastructure.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-md shadow-cyan-950/40 transition-all"
          >
            Start a Conversation
          </a>
        </div>

      </div>
    </section>
  );
};
