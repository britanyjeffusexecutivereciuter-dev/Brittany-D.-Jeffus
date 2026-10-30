import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/content';
import { Logo } from './Logo';
import { MapPin, Mail, Linkedin, ArrowRight, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenPrivacy: () => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenPrivacy,
  onOpenConsultation,
}) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B1B3D] text-slate-300 border-t border-[#C5A059]/30">
      {/* Top Banner / Philosophy */}
      <div className="border-b border-white/10 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="text-[#C5A059] text-xs font-semibold tracking-wider uppercase">
              Brand Motto:
            </span>
            <span className="font-serif-brand italic text-white text-sm sm:text-base">
              "{BUSINESS_INFO.motto}"
            </span>
          </div>
          <button
            onClick={onOpenConsultation}
            className="text-xs sm:text-sm font-medium text-[#C5A059] hover:text-white inline-flex items-center gap-1.5 transition-colors group"
          >
            <span>Let's Discuss Your Hiring Needs</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Introduction (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="light" onClick={() => handleNav('home')} />
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm mt-3">
              Independent recruitment and talent acquisition services founded by Brittany D. Jeffus.
              Hands-on recruitment support tailored for manufacturing, industrial, and corporate
              organizations.
            </p>
            <div className="pt-2 text-xs text-slate-400">
              <span className="text-[#C5A059] font-medium">Gainesville, Texas</span> · Serving
              employers locally and nationwide.
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors"
                >
                  Recruiting Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors"
                >
                  About Brittany
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('how-it-works')}
                  className="hover:text-white transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Dedicated Portals (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider">
              Solutions & Portals
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNav('employers')}
                  className="hover:text-[#C5A059] transition-colors text-left font-medium"
                >
                  For Employers & Hiring Managers
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('candidates')}
                  className="hover:text-[#C5A059] transition-colors text-left"
                >
                  For Candidates (Confidential Submissions)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-slate-100 transition-colors text-left text-xs text-slate-400"
                >
                  Contract Recruiting Bandwidth
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-slate-100 transition-colors text-left text-xs text-slate-400"
                >
                  Manufacturing & Plant Placements
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-slate-100 transition-colors text-left text-xs text-slate-400"
                >
                  Corporate HR Augmentation
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Direct (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider">
              Get In Touch
            </h4>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span className="text-slate-300 text-xs sm:text-sm">
                  {BUSINESS_INFO.location}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="text-slate-300 hover:text-[#C5A059] transition-colors text-xs sm:text-sm break-all"
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5 pt-2">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs text-slate-200 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal & Attribution */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Jeffus Recruitment Solutions, LLC. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-slate-200 transition-colors inline-flex items-center gap-1"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Privacy & Information Security</span>
            </button>
            <span className="text-slate-600">·</span>
            <span>Independent Recruitment Partner</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
