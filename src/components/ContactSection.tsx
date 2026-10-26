import React, { useState, useEffect } from 'react';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Mail, 
  Building, 
  User, 
  MessageSquare, 
  ShieldCheck, 
  Clock, 
  ExternalLink,
  Code2,
  RefreshCw
} from 'lucide-react';
import { ConsultationFormData } from '../types';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    company: '',
    serviceInterest: 'AWS Cloud Consulting',
    projectRequirements: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ConsultationFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<ConsultationFormData | null>(null);
  const [showIntegrationDoc, setShowIntegrationDoc] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, serviceInterest: preselectedService }));
    }
  }, [preselectedService]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ConsultationFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter a valid full name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Business Email is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company Name is required.';
    }

    if (!formData.projectRequirements.trim()) {
      newErrors.projectRequirements = 'Please share a brief summary of your project requirements.';
    } else if (formData.projectRequirements.trim().length < 15) {
      newErrors.projectRequirements = 'Please provide at least 15 characters describing your cloud goals.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    // Simulate brief network submission validation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
    }, 600);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      fullName: '',
      email: '',
      company: '',
      serviceInterest: 'AWS Cloud Consulting',
      projectRequirements: '',
    });
    setErrors({});
  };

  return (
    <section id="contact" className="relative py-24 bg-[#071126] border-t border-sky-900/20">
      {/* Background illumination */}
      <div 
        aria-hidden="true" 
        className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-blue-600/5 blur-[140px] rounded-full pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Get in Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let's Build Your Cloud Strategy
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Tell us about your infrastructure, migration plans, or cloud challenges. Let's explore the right solution for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Context, SLA, Direct Consultation Notice */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            <div className="p-7 rounded-2xl bg-[#091733]/90 border border-sky-900/30">
              <span className="text-xs font-mono uppercase text-cyan-400 block mb-2">
                Secondary Contact
              </span>
              <h3 className="text-2xl font-bold text-white mb-3">
                Have a cloud challenge? Let's talk.
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Whether you need an urgent architectural review, guidance on reducing AWS invoices, or a comprehensive migration strategy, our cloud engineers are ready to assist.
              </p>

              <div className="space-y-4 pt-4 border-t border-slate-800/80">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-sky-950 text-cyan-400 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-white block">Response SLA</span>
                    <span className="text-xs text-slate-400">We respond within 1 business day with preliminary scoping notes.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-sky-950 text-cyan-400 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-white block">Confidentiality Assured</span>
                    <span className="text-xs text-slate-400">All architecture discussions and technical disclosures are held in strict confidence.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Integration Details Disclosure Card */}
            <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 text-xs text-slate-400">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                  Backend Integration Note
                </span>
                <button
                  type="button"
                  onClick={() => setShowIntegrationDoc(!showIntegrationDoc)}
                  className="text-cyan-400 hover:text-cyan-300 underline font-mono text-[11px]"
                >
                  {showIntegrationDoc ? 'Hide specs' : 'How to connect backend'}
                </button>
              </div>
              <p className="leading-relaxed">
                This is a frontend demonstration. No private credentials or live mail relays are exposed on this client applet.
              </p>

              {showIntegrationDoc && (
                <div className="mt-3 pt-3 border-t border-slate-800/80 text-[11px] text-slate-300 space-y-1.5 font-mono">
                  <p className="text-cyan-300 font-sans font-medium">To connect a real production email or CRM endpoint:</p>
                  <p>1. Forward this form payload to an Amazon API Gateway + AWS Lambda function.</p>
                  <p>2. Send notifications via Amazon SES (Simple Email Service) or webhook to Slack.</p>
                  <p>3. Store inquiries in DynamoDB with encryption at rest.</p>
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-[#091735]/95 border border-sky-500/25 shadow-2xl relative">
              
              {submittedData ? (
                /* Success State */
                <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-cyan-950/80 border border-cyan-400/50 flex items-center justify-center mx-auto text-cyan-400">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Consultation Request Received
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="text-cyan-300 font-semibold">{submittedData.fullName}</span> from <span className="text-white font-medium">{submittedData.company}</span>. 
                      Our cloud consulting team has logged your inquiry for <span className="text-cyan-300 font-medium">{submittedData.serviceInterest}</span>.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 text-left text-xs max-w-md mx-auto space-y-2">
                    <div className="text-slate-400">
                      <span className="font-semibold text-slate-300">Target Email:</span> {submittedData.email}
                    </div>
                    <div className="text-slate-400">
                      <span className="font-semibold text-slate-300">Service:</span> {submittedData.serviceInterest}
                    </div>
                    <div className="text-slate-400">
                      <span className="font-semibold text-slate-300">Summary:</span> {submittedData.projectRequirements}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Submit Another Inquiry</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Active Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Full Name <span className="text-cyan-400">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          id="fullName"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Sarah Jenkins"
                          className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-[#061126] border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                            errors.fullName ? 'border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500' : 'border-sky-900/50 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
                          }`}
                        />
                      </div>
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Business Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Business Email <span className="text-cyan-400">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="s.jenkins@company.com"
                          className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-[#061126] border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                            errors.email ? 'border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500' : 'border-sky-900/50 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
                          }`}
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Company Name */}
                    <div>
                      <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Company Name <span className="text-cyan-400">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Building className="w-4 h-4" />
                        </div>
                        <input
                          id="company"
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Acme Corp, Inc."
                          className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-[#061126] border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                            errors.company ? 'border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500' : 'border-sky-900/50 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
                          }`}
                        />
                      </div>
                      {errors.company && (
                        <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.company}</span>
                        </p>
                      )}
                    </div>

                    {/* Service of Interest */}
                    <div>
                      <label htmlFor="serviceInterest" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Service of Interest
                      </label>
                      <select
                        id="serviceInterest"
                        value={formData.serviceInterest}
                        onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#061126] border border-sky-900/50 text-sm text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                      >
                        <option value="AWS Cloud Consulting">AWS Cloud Consulting</option>
                        <option value="Cloud Migration">Cloud Migration</option>
                        <option value="DevOps & Automation">DevOps &amp; Automation</option>
                        <option value="Cloud Security">Cloud Security</option>
                        <option value="Cost Optimization">Cost Optimization</option>
                        <option value="Cloud Infrastructure Management">Cloud Infrastructure Management</option>
                        <option value="General AWS Architecture Assessment">General AWS Architecture Assessment</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Requirements */}
                  <div>
                    <label htmlFor="projectRequirements" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Project Requirements <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="projectRequirements"
                      rows={4}
                      required
                      value={formData.projectRequirements}
                      onChange={(e) => setFormData({ ...formData, projectRequirements: e.target.value })}
                      placeholder="Describe your current cloud infrastructure, upcoming AWS migration, or immediate technical priorities..."
                      className={`w-full p-3.5 rounded-xl bg-[#061126] border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.projectRequirements ? 'border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500' : 'border-sky-900/50 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
                      }`}
                    />
                    {errors.projectRequirements && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.projectRequirements}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-lg shadow-cyan-950/60 transition-all duration-200 disabled:opacity-60 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Processing Inquiry...</span>
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <span>Request a Consultation</span>
                          <Send className="w-4 h-4" />
                        </span>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
