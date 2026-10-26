/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Solutions } from './components/Solutions';
import { ArchitectureShowcase } from './components/ArchitectureShowcase';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('AWS Cloud Consulting');

  const handleOpenConsultation = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
      // Focus on the first form input after scroll
      setTimeout(() => {
        const input = document.getElementById('fullName');
        if (input) {
          input.focus();
        }
      }, 500);
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
  };

  return (
    <div className="min-h-screen bg-[#050B18] text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-slate-950">
      {/* Skip to Main Content Link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-slate-950 focus:font-semibold focus:rounded-md"
      >
        Skip to main content
      </a>

      {/* Sticky Navigation */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Page Content */}
      <main id="main-content" className="flex-grow">
        {/* Hero Section with Advanced Cloud Visualization */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* Core Cloud Services */}
        <Services onSelectService={handleSelectService} />

        {/* Enterprise Solutions Frameworks */}
        <Solutions />

        {/* Interactive Architecture Showcase Diagram */}
        <ArchitectureShowcase />

        {/* Why Choose CloudTech */}
        <WhyChooseUs />

        {/* Consultation Contact Form */}
        <ContactSection preselectedService={selectedService} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
