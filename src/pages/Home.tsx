import React, { useState } from 'react';
import { PageId, ServiceType } from '../types';
import { BUSINESS_INFO, IMAGES, SERVICES, THREE_STEPS, FAQS, CAREER_HISTORY } from '../data/content';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Building2,
  Users2,
  Factory,
  Compass,
  Briefcase,
  Layers,
  Sparkles,
  PhoneCall,
  Clock,
  ShieldAlert,
} from 'lucide-react';

interface HomeProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
  onSelectService: (service: ServiceType) => void;
}

export const Home: React.FC<HomeProps> = ({
  onNavigate,
  onOpenConsultation,
  onSelectService,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleDiscussService = (serviceTitle: string) => {
    onSelectService(serviceTitle as ServiceType);
    onNavigate('employers');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 sm:pt-12 pb-16 lg:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Copy Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Unboxed editorial kicker - NO PILL */}
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8C6E33]">
                <span>Independent Talent Acquisition</span>
                <span aria-hidden="true">·</span>
                <span>Gainesville, Texas</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-brand font-bold text-[#0B1B3D] tracking-tight leading-[1.15] text-balance">
                {BUSINESS_INFO.headline}
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl">
                {BUSINESS_INFO.subheadline}
              </p>

              {/* Subtle Trust Statement */}
              <div className="py-2 flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-600">
                <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
                <span>{BUSINESS_INFO.trustStatement}</span>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onOpenConsultation}
                  className="px-6 py-3.5 bg-[#0B1B3D] hover:bg-[#152a5c] text-white font-semibold text-sm rounded-lg shadow-sm border border-[#C5A059]/40 transition-all duration-150 flex items-center justify-center gap-2 group whitespace-nowrap"
                >
                  <PhoneCall className="w-4 h-4 text-[#C5A059]" />
                  <span>Let's Discuss Your Hiring Needs</span>
                  <ArrowRight className="w-4 h-4 text-slate-300 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => onNavigate('services')}
                  className="px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-medium text-sm rounded-lg border border-slate-300 hover:border-slate-400 transition-colors flex items-center justify-center whitespace-nowrap"
                >
                  Explore Our Services
                </button>
              </div>

              {/* Key Credentials Strip */}
              <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600">
                <div className="flex items-center gap-1.5 font-medium text-slate-900">
                  <span className="font-serif-brand font-bold text-sm text-[#0B1B3D]">7 Years</span>
                  <span>Recruiting Experience</span>
                </div>
                <span className="text-slate-300" aria-hidden="true">|</span>
                <span>Manufacturing & Plant Hiring</span>
                <span className="text-slate-300" aria-hidden="true">|</span>
                <span>Direct Hands-On Partner</span>
              </div>
            </div>

            {/* Right Hero Image (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 aspect-16/10 sm:aspect-4/3 lg:aspect-square">
                <img
                  src={IMAGES.heroManufacturing}
                  alt="Precision manufacturing plant floor with operations supervisors reviewing plans"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D]/70 via-transparent to-transparent pointer-events-none" />
                
                {/* Subtle caption overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
                    Manufacturing & Corporate Expertise
                  </p>
                  <p className="text-sm font-medium mt-0.5 text-slate-100">
                    Practical recruitment grounded in operational reality.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST & EXPERIENCE SECTION */}
      <section className="bg-white py-16 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#8C6E33]">
              Credibility & Practical Background
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif-brand font-bold text-[#0B1B3D] mt-2">
              Seven Years of Hands-On Recruiting Experience
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              Recruiting isn't about pushing resumes through automated algorithms. It's about
              understanding the technical demands of a facility, the cultural environment of a team,
              and the personal dedication needed to find dependable talent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CAREER_HISTORY.map((item, idx) => (
              <div
                key={idx}
                className="bg-neutral-50/70 p-6 rounded-xl border border-slate-200 flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div>
                  <span className="text-[11px] font-semibold text-[#8C6E33] uppercase tracking-wider block mb-1">
                    {item.period}
                  </span>
                  <h3 className="font-serif-brand font-bold text-slate-900 text-base">
                    {item.role}
                  </h3>
                  <p className="text-xs font-medium text-slate-700 mt-0.5">
                    {item.organization}
                  </p>
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#8C6E33]">
              Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif-brand font-bold text-[#0B1B3D] mt-2">
              Recruitment Solutions Aligned with Your Goals
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Whether you need flexible contract capacity to navigate a busy quarter or dedicated
              direct-hire placement for key personnel, support is tailored to your scope.
            </p>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="text-sm font-semibold text-[#0B1B3D] hover:text-[#122550] inline-flex items-center gap-1.5 whitespace-nowrap self-start md:self-auto group"
          >
            <span>View All Service Details</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 sm:p-7 rounded-xl border border-slate-200/90 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold text-[#8C6E33] tracking-wider uppercase">
                    {service.badge}
                  </span>
                </div>
                <h3 className="font-serif-brand font-bold text-lg text-slate-900 group-hover:text-[#0B1B3D] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {service.shortDescription}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-100">
                  <span className="text-[11px] font-semibold text-slate-700 uppercase tracking-wider block mb-1.5">
                    What Support May Include:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {service.supportIncludes.slice(0, 2).map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => onNavigate('services')}
                  className="text-xs font-medium text-slate-600 hover:text-slate-900"
                >
                  Learn More
                </button>
                <button
                  onClick={() => handleDiscussService(service.title)}
                  className="text-xs font-semibold text-[#0B1B3D] hover:text-[#8C6E33] inline-flex items-center gap-1 group/btn"
                >
                  <span>Discuss Service</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WHY WORK WITH JEFFUS RECRUITMENT SOLUTIONS */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-14 text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
              The Independent Advantage
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-brand font-bold text-white mt-2">
              Why Work With Jeffus Recruitment Solutions?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              When you engage Jeffus Recruitment Solutions, you are not handed off to a rotating
              cast of inexperienced recruiters. You collaborate directly with an experienced recruiter
              who invests the time to understand your operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-[#C5A059]/20 flex items-center justify-center text-[#C5A059] mb-4">
                <Users2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif-brand font-semibold text-lg text-white">
                Personalized Attention
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Direct partnership with Brittany D. Jeffus on every requisition. Consistent
                accountability, personal ownership, and tailored communication.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-[#C5A059]/20 flex items-center justify-center text-[#C5A059] mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-serif-brand font-semibold text-lg text-white">
                Adaptable Support
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Tailored engagement structures: project-based contract recruiting, full-cycle
                direct-hire placement, or targeted candidate sourcing.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-[#C5A059]/20 flex items-center justify-center text-[#C5A059] mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-serif-brand font-semibold text-lg text-white">
                Clear Communication
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Prompt updates, honest feedback on talent market conditions, and realistic hiring
                timelines without artificial sales pressure.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-[#C5A059]/20 flex items-center justify-center text-[#C5A059] mb-4">
                <Factory className="w-5 h-5" />
              </div>
              <h3 className="font-serif-brand font-semibold text-lg text-white">
                Practical Experience
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Grounded corporate and manufacturing experience that understands plant culture,
                technical specifications, and hiring priorities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MANUFACTURING & CORPORATE FOCUS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100 aspect-4/3">
              <img
                src={IMAGES.manufacturingSpecialists}
                alt="Manufacturing workforce collaborating in clean high-tech plant"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#8C6E33]">
              Specialized Industry Focus
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif-brand font-bold text-[#0B1B3D] leading-tight">
              Manufacturing & Corporate Talent Acquisition
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Manufacturing environments require recruiters who understand the difference between
              shift structures, machine operator qualifications, maintenance technician proficiencies,
              and plant leadership capabilities.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white border border-slate-200">
                <Factory className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-900">
                    Industrial & Manufacturing Operations
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Supporting positions including plant supervisors, CNC operators, maintenance
                    technicians, quality inspectors, and operations managers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white border border-slate-200">
                <Building2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-900">
                    Corporate & Functional Leadership
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Assisting corporate teams with recruitment for supply chain, logistics, human
                    resources, accounting, and administrative functions.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('employers')}
                className="px-5 py-2.5 bg-[#0B1B3D] text-white text-xs sm:text-sm font-semibold rounded-lg hover:bg-[#152a5c] transition-colors inline-flex items-center gap-2"
              >
                <span>Request Hiring Support for Your Facility</span>
                <ArrowRight className="w-4 h-4 text-[#C5A059]" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 6. HOW IT WORKS: 3-STEP PROCESS */}
      <section className="bg-neutral-100/70 py-20 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#8C6E33]">
              Simple & Transparent
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif-brand font-bold text-[#0B1B3D] mt-2">
              A Straightforward Three-Step Recruiting Process
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              No convoluted jargon or unnecessary red tape. We keep the recruiting workflow
              transparent, collaborative, and aligned with your timeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {THREE_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="font-serif-brand text-3xl font-bold text-[#C5A059] mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-serif-brand font-bold text-lg text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('how-it-works')}
              className="text-sm font-semibold text-[#0B1B3D] hover:text-[#8C6E33] inline-flex items-center gap-1.5"
            >
              <span>Explore Detailed Recruiting Stages</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. ABOUT BRITTANY PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white rounded-2xl p-8 sm:p-12 border border-slate-200/90 shadow-sm">
          
          <div className="lg:col-span-4">
            <div className="relative rounded-xl overflow-hidden aspect-3/4 max-w-sm mx-auto shadow-md border border-slate-200 bg-slate-50">
              <img
                src={IMAGES.brittanyPortrait}
                alt="Brittany D. Jeffus, Owner and Operator of Jeffus Recruitment Solutions, LLC."
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-8 space-y-5 text-left">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8C6E33]">
              <span>Meet the Founder</span>
              <span aria-hidden="true">·</span>
              <span>Gainesville, Texas</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif-brand font-bold text-[#0B1B3D]">
              Brittany D. Jeffus
            </h2>
            <p className="text-xs sm:text-sm font-medium text-slate-500">
              Owner & Operator, Jeffus Recruitment Solutions, LLC.
            </p>

            <blockquote className="border-l-2 border-[#C5A059] pl-4 italic font-serif-brand text-slate-700 text-sm sm:text-base leading-relaxed">
              "After working in established corporate and agency recruiting environments, I launched
              Jeffus Recruitment Solutions to provide companies with a more personalized, responsive
              approach to recruitment. When you work with me, your hiring goals receive hands-on
              attention."
            </blockquote>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              With seven years of recruiting experience across manufacturing environments (Southwire
              Company), corporate distribution (ReaderLink), and commercial staffing (Express
              Employment Professionals), Brittany brings practical knowledge to every engagement.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('about')}
                className="px-5 py-2.5 bg-[#0B1B3D] text-white text-xs sm:text-sm font-semibold rounded-lg hover:bg-[#152a5c] transition-colors inline-flex items-center gap-2"
              >
                <span>Read Brittany's Background</span>
                <ArrowRight className="w-4 h-4 text-[#C5A059]" />
              </button>

              <button
                onClick={onOpenConsultation}
                className="px-5 py-2.5 bg-white border border-slate-300 text-slate-800 text-xs sm:text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors"
              >
                Schedule an Introduction
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 8. TESTIMONIALS & VERIFIED RECOMMENDATIONS (Honest Placeholder as requested) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-50 rounded-2xl p-8 sm:p-10 border border-slate-200">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#8C6E33]">
              Client Endorsements & References
            </span>
            <h2 className="text-2xl font-serif-brand font-bold text-[#0B1B3D] mt-2">
              Recommendations & Professional Endorsements
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              We uphold strict standards of integrity and confidentiality. We do not publish
              fabricated testimonials or unverified claims. Approved client endorsements and
              professional references are provided upon request during employer consultations.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-dashed border-slate-300">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                Client Recommendation Slot · Ready to Publish
              </span>
              <p className="text-xs sm:text-sm text-slate-600 italic">
                "[Reserved for verified recommendation from manufacturing partner or corporate HR
                client detailing contract recruiting or placement experience.]"
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 font-medium">
                — Hiring Leader / Plant Operations Manager (Available upon request)
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-dashed border-slate-300">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                Professional Reference Slot · Ready to Publish
              </span>
              <p className="text-xs sm:text-sm text-slate-600 italic">
                "[Reserved for verified colleague or talent acquisition leader recommendation on
                sourcing rigor and communication responsiveness.]"
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 font-medium">
                — Corporate Talent Acquisition Colleague (Available upon request)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#8C6E33]">
            Common Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif-brand font-bold text-[#0B1B3D] mt-2">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Clear, transparent answers about recruiting services, process, and engagement models.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.slice(0, 6).map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-150"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-serif-brand font-semibold text-slate-900 text-sm sm:text-base hover:text-[#0B1B3D]"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#8C6E33] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => onNavigate('contact')}
            className="text-xs sm:text-sm font-semibold text-[#0B1B3D] hover:text-[#8C6E33] inline-flex items-center gap-1"
          >
            <span>Have a specific question not listed here? Contact us directly</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* 10. FINAL CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-[#0B1B3D] rounded-2xl p-8 sm:p-14 text-center text-white relative overflow-hidden border border-[#C5A059]/40 shadow-xl">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
              Start the Conversation
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-brand font-bold text-white text-balance">
              Let's Discuss Your Hiring Needs
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              Whether you need contract recruiting support to relieve an overloaded HR team or help
              filling a critical manufacturing vacancy, Brittany Jeffus is ready to help.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#C5A059] hover:bg-[#d8b56f] text-[#0B1B3D] font-bold text-sm rounded-lg shadow-sm transition-colors whitespace-nowrap flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Schedule a Consultation</span>
              </button>
              <button
                onClick={() => onNavigate('employers')}
                className="w-full sm:w-auto px-7 py-3.5 bg-white/10 hover:bg-white/15 text-white font-medium text-sm rounded-lg border border-white/20 transition-colors whitespace-nowrap"
              >
                Submit Hiring Requisition
              </button>
            </div>

            <div className="pt-4 text-xs text-slate-400">
              Direct inquiries:{' '}
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="text-slate-200 hover:text-[#C5A059] underline font-medium"
              >
                {BUSINESS_INFO.email}
              </a>{' '}
              · Gainesville, Texas
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
