import React, { useState } from 'react';
import { PageId } from '../types';
import { Logo } from './Logo';
import { Menu, X, PhoneCall } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenConsultation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About Brittany' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'employers', label: 'For Employers' },
    { id: 'candidates', label: 'For Candidates' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-shadow">
      {/* Strict 1-row, 3-zone Top Bar Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single Brand Wordmark with Monogram */}
        <Logo
          variant="dark"
          onClick={() => handleNavClick('home')}
          className="whitespace-nowrap shrink-0"
        />

        {/* Zone 2: Concise single-line text navigation links */}
        <nav
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 font-medium ${
                  isActive
                    ? 'text-[#0B1B3D] border-[#C5A059] font-semibold'
                    : 'text-slate-600 hover:text-[#0B1B3D] border-transparent hover:border-slate-300'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Exactly 1 Primary Action */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <button
            onClick={onOpenConsultation}
            className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0B1B3D] hover:bg-[#122550] active:scale-[0.99] rounded-lg transition-all duration-150 shadow-sm border border-[#C5A059]/40 hover:border-[#C5A059] whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4 text-[#C5A059]" />
            <span>Let's Discuss Hiring</span>
          </button>
        </div>

        {/* Mobile Hamburger toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenConsultation}
            className="px-3 py-1.5 text-xs font-semibold text-white bg-[#0B1B3D] rounded-md border border-[#C5A059]/50"
          >
            Discuss Hiring
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-[#0B1B3D] rounded-md focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-left px-3 py-2.5 rounded-md text-sm font-medium ${
                currentPage === 'home' ? 'bg-slate-100 text-[#0B1B3D] font-semibold' : 'text-slate-700'
              }`}
            >
              Home
            </button>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-3 py-2.5 rounded-md text-sm font-medium ${
                  currentPage === link.id
                    ? 'bg-slate-100 text-[#0B1B3D] font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-2.5 px-4 text-center text-sm font-semibold text-white bg-[#0B1B3D] rounded-lg border border-[#C5A059]/40 flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#C5A059]" />
              Schedule a Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
