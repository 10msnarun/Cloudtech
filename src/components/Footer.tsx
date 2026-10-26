import React, { useState } from 'react';
import { ArrowUp, Shield, FileText, CheckCircle2, X } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Why CloudTech', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ];

  const serviceLinks = [
    { label: 'AWS Cloud Consulting', href: '#services' },
    { label: 'Cloud Migration', href: '#services' },
    { label: 'DevOps & Automation', href: '#services' },
    { label: 'Cloud Security', href: '#services' },
    { label: 'Cost Optimization', href: '#services' },
    { label: 'Infrastructure Management', href: '#services' },
  ];

  return (
    <footer className="relative bg-[#040813] text-slate-400 border-t border-sky-950/80 pt-16 pb-12 overflow-hidden">
      {/* Subtle background glow */}
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-cyan-600/5 blur-[100px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info & Uploaded Logo */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo size="md" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm pt-2">
              CloudTech delivers enterprise-grade AWS cloud consulting, architecture modernization, and automated infrastructure management for forward-thinking businesses.
            </p>
            <div className="text-xs text-slate-400 pt-1">
              Architecture Reviews · Migration Strategy · FinOps Optimization
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-cyan-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              AWS Services
            </h4>
            <ul className="space-y-2 text-xs">
              {serviceLinks.map((s, idx) => (
                <li key={idx}>
                  <a
                    href={s.href}
                    className="hover:text-cyan-300 transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Inquiries Placeholder */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Consultation Inquiries
            </h4>
            <div className="text-xs space-y-2">
              <p className="text-slate-300">Direct Consultation Requests</p>
              <p className="text-slate-400">Response Window: 24 Business Hours</p>
              <a
                href="#contact"
                className="inline-block mt-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Request a Consultation &rarr;
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Dynamic Copyright & Legal Placeholders */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} CloudTech. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            <button
              type="button"
              onClick={() => setActiveModal('privacy')}
              className="hover:text-slate-300 transition-colors focus:outline-none"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              type="button"
              onClick={() => setActiveModal('terms')}
              className="hover:text-slate-300 transition-colors focus:outline-none"
            >
              Terms of Engagement
            </button>
            <span>·</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition-colors focus:outline-none"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Privacy Policy & Terms Modal */}
      {activeModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="relative w-full max-w-lg rounded-2xl bg-[#091735] border border-cyan-500/30 p-6 sm:p-8 shadow-2xl text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              {activeModal === 'privacy' ? <Shield className="w-5 h-5 text-cyan-400" /> : <FileText className="w-5 h-5 text-cyan-400" />}
              {activeModal === 'privacy' ? 'Privacy Policy' : 'Terms of Engagement'}
            </h3>

            <div className="text-xs sm:text-sm text-slate-300 space-y-3 max-h-[60vh] overflow-y-auto pr-2 leading-relaxed">
              {activeModal === 'privacy' ? (
                <>
                  <p>
                    CloudTech prioritizes confidentiality and security. Information submitted through consultation requests is used strictly to evaluate your technical requirements and prepare customized architecture recommendations.
                  </p>
                  <p>
                    We do not sell, rent, or share proprietary infrastructure disclosures, system schemas, or contact details with third-party marketers.
                  </p>
                  <p>
                    All consultations are conducted under standard non-disclosure practices to protect your cloud assets and intellectual property.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    CloudTech advisory services provide architectural guidance, infrastructure-as-code implementations, and migration planning aligned with the AWS Well-Architected Framework.
                  </p>
                  <p>
                    All recommendations are developed based on technical specifications provided by the client. Actual cloud infrastructure costs are billed directly by Amazon Web Services according to client resource usage.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-right">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 text-xs font-semibold text-white rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
};
