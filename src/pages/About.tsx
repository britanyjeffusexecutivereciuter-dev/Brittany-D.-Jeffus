import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, IMAGES, CAREER_HISTORY } from '../data/content';
import {
  ArrowRight,
  MapPin,
  Mail,
  Linkedin,
  PhoneCall,
  CheckCircle2,
  Award,
  HeartHandshake,
  Target,
  Sparkles,
} from 'lucide-react';

interface AboutProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div className="py-12 sm:py-16 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero / Introduction Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Portrait & Personal Card (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 aspect-3/4 max-w-md mx-auto">
            <img
              src={IMAGES.brittanyPortrait}
              alt="Brittany D. Jeffus, Owner and Operator of Jeffus Recruitment Solutions, LLC."
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D]/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <h3 className="font-serif-brand font-bold text-xl text-white">
                Brittany D. Jeffus
              </h3>
              <p className="text-xs text-[#C5A059] font-medium tracking-wide">
                Owner & Operator · Executive Recruiter
              </p>
            </div>
          </div>

          {/* Quick Contact Card */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-2.5 max-w-md mx-auto">
            <div className="flex items-center gap-2 text-slate-800">
              <MapPin className="w-4 h-4 text-[#8C6E33] shrink-0" />
              <span>Gainesville, Texas, United States</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#8C6E33] shrink-0" />
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="text-[#0B1B3D] hover:underline font-medium break-all"
              >
                {BUSINESS_INFO.email}
              </a>
            </div>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-500">Recruiting Experience: 7 Years</span>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B1B3D] hover:text-[#8C6E33]"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Founder Narrative (7 cols) */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8C6E33]">
            <span>Founder & Recruiter Story</span>
            <span aria-hidden="true">·</span>
            <span>Independent Practice</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-serif-brand font-bold text-[#0B1B3D] tracking-tight">
            "Your hiring goals deserve a dedicated partner who genuinely cares about the outcome."
          </h1>

          <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
            <p>
              Hello, I'm <strong>Brittany D. Jeffus</strong>, Owner and Operator of Jeffus
              Recruitment Solutions, LLC. I bring seven years of recruiting experience, including
              deep experience supporting manufacturing organizations and corporate recruiting teams.
            </p>
            <p>
              After working in established corporate environments and staffing firms, I launched my
              own independent practice to provide businesses with a more personal, accountable, and
              hands-on approach to recruitment.
            </p>
            <p>
              I understand that hiring takes time, attention, and careful coordination. My goal is to
              work closely with businesses, understand their real workplace needs, and provide
              practical recruiting support aligned with their operational objectives.
            </p>
            <p>
              Whether your company needs flexible contract recruiting assistance or help finding the
              right person for a permanent position, I welcome the opportunity to discuss how we can
              work together.
            </p>
          </div>

          {/* Personal Motto Badge */}
          <div className="bg-amber-50/70 p-5 rounded-xl border border-amber-200/80">
            <span className="text-[11px] font-semibold text-[#8C6E33] uppercase tracking-wider block mb-1">
              Personal Brand Motto
            </span>
            <div className="font-serif-brand text-xl sm:text-2xl font-bold text-[#0B1B3D] italic">
              "{BUSINESS_INFO.motto}"
            </div>
            <p className="text-xs text-slate-600 mt-1.5">
              A guiding mindset rooted in optimism, daily discipline, and getting real results for
              every client and candidate I represent.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3 bg-[#0B1B3D] hover:bg-[#122550] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm border border-[#C5A059]/40 transition-colors inline-flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#C5A059]" />
              <span>Connect with Brittany</span>
            </button>
            <button
              onClick={() => onNavigate('employers')}
              className="px-6 py-3 bg-white border border-slate-300 text-slate-800 text-xs sm:text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors"
            >
              Tell Us About Your Hiring Needs
            </button>
          </div>
        </div>

      </div>

      {/* Career History & Corporate Foundation */}
      <section className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200 space-y-10">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#8C6E33]">
            Verified Background
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif-brand font-bold text-[#0B1B3D] mt-2">
            Professional Experience & Foundation
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            A track record spanning corporate recruiting, business relations, and industrial talent
            acquisition.
          </p>
        </div>

        <div className="space-y-6">
          {CAREER_HISTORY.map((exp, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row md:items-start justify-between gap-4 p-5 rounded-xl bg-neutral-50 border border-slate-200/80"
            >
              <div className="space-y-1 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-[#8C6E33] uppercase">
                    {exp.period}
                  </span>
                </div>
                <h3 className="font-serif-brand font-bold text-lg text-slate-900">
                  {exp.role} · <span className="text-[#0B1B3D]">{exp.organization}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy & Approach */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-7 rounded-xl border border-slate-200 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-lg bg-[#0B1B3D]/5 text-[#0B1B3D] flex items-center justify-center font-bold">
            <HeartHandshake className="w-5 h-5 text-[#8C6E33]" />
          </div>
          <h3 className="font-serif-brand font-bold text-lg text-slate-900">
            True Partnership, Not Transactions
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            I act as an extension of your company. That means understanding your leadership style,
            shift schedules, compensation boundaries, and candidate must-haves before reaching out to
            the market.
          </p>
        </div>

        <div className="bg-white p-7 rounded-xl border border-slate-200 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-lg bg-[#0B1B3D]/5 text-[#0B1B3D] flex items-center justify-center font-bold">
            <Target className="w-5 h-5 text-[#8C6E33]" />
          </div>
          <h3 className="font-serif-brand font-bold text-lg text-slate-900">
            Focus on Quality Over Volume
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Hiring managers don't need twenty mediocre resumes; they need three thoroughly screened,
            qualified professionals who are genuinely interested and aligned with the role.
          </p>
        </div>

        <div className="bg-white p-7 rounded-xl border border-slate-200 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-lg bg-[#0B1B3D]/5 text-[#0B1B3D] flex items-center justify-center font-bold">
            <Award className="w-5 h-5 text-[#8C6E33]" />
          </div>
          <h3 className="font-serif-brand font-bold text-lg text-slate-900">
            Adaptability & Responsiveness
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Recruiting needs shift quickly. Because I operate independently, I can pivot immediately
            to adjust sourcing priorities or ramp up urgency without waiting for layers of corporate
            approval.
          </p>
        </div>
      </section>

      {/* Final Connect CTA */}
      <div className="bg-[#0B1B3D] rounded-2xl p-8 sm:p-12 text-white text-center space-y-6 border border-[#C5A059]/40">
        <h2 className="text-2xl sm:text-3xl font-serif-brand font-bold">
          Ready to Work Together?
        </h2>
        <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
          Whether you need a confidential sounding board on your current recruitment challenges or
          immediate contract recruiting support, I am here to help.
        </p>
        <div className="pt-2">
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3 bg-[#C5A059] hover:bg-[#d4b065] text-[#0B1B3D] font-bold text-xs sm:text-sm rounded-lg transition-colors inline-flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Schedule an Introductory Discussion</span>
          </button>
        </div>
      </div>
    </div>
  );
};
