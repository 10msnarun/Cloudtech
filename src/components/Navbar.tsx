import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Cloud, ShieldCheck } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'services', 'solutions', 'architecture', 'why-us', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Solutions', href: '#solutions', id: 'solutions' },
    { label: 'Architecture', href: '#architecture', id: 'architecture' },
    { label: 'Why CloudTech', href: '#why-us', id: 'why-us' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050B18]/90 backdrop-blur-md border-b border-sky-900/30 shadow-lg shadow-black/40 py-2.5'
          : 'bg-[#050B18]/60 backdrop-blur-sm border-b border-white/[0.04] py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <BrandLogo size="md" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`px-3.5 py-1.5 text-sm font-medium transition-colors duration-200 relative group ${
                    isActive ? 'text-cyan-400' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-transform duration-200 origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="#contact"
              onClick={(e) => {
                if (onOpenConsultation) {
                  e.preventDefault();
                  onOpenConsultation();
                }
              }}
              className="relative inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white rounded-lg overflow-hidden group transition-all duration-200 shadow-md shadow-cyan-950/40 bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#050B18]"
            >
              <span className="relative flex items-center gap-1.5">
                <span>Get a Free Consultation</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-slate-800/80 bg-[#071126]/95 backdrop-blur-xl rounded-2xl px-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1.5 pt-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                      isActive
                        ? 'bg-blue-900/30 text-cyan-400 border-l-2 border-cyan-400'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}

              <div className="pt-3">
                <a
                  href="#contact"
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    if (onOpenConsultation) {
                      e.preventDefault();
                      onOpenConsultation();
                    }
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg shadow-blue-950/50"
                >
                  <span>Get a Free Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
