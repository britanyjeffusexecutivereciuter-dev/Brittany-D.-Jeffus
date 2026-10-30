import React, { useState } from 'react';
import { PageId, ServiceType } from '../types';
import { SERVICES, BUSINESS_INFO } from '../data/content';
import {
  CheckCircle2,
  AlertCircle,
  Users,
  Layers,
  ArrowRight,
  TrendingUp,
  Sparkles,
  PhoneCall,
} from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: PageId) => void;
  onSelectService: (service: ServiceType) => void;
  onOpenConsultation: () => void;
}

export const Services: React.FC<ServicesProps> = ({
  onNavigate,
  onSelectService,
  onOpenConsultation,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const handleDiscuss = (title: string) => {
    onSelectService(title as ServiceType);
    onNavigate('employers');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredServices =
    activeFilter === 'all'
      ? SERVICES
      : SERVICES.filter((s) => s.id === activeFilter);

  return (
    <div className="py-12 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8C6E33]">
          <span>Tailored Talent Solutions</span>
          <span aria-hidden="true">·</span>
          <span>Jeffus Recruitment Solutions, LLC.</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-brand font-bold text-[#0B1B3D] tracking-tight">
          Recruiting Services Built Around Your Operational Realities
        </h1>
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
          Every organization faces unique talent demands. Whether you need an experienced contract
          recruiter to tackle sudden volume or a dedicated direct-hire search for a key industrial
          role, we provide hands-on, practical recruiting support.
        </p>
      </div>

      {/* Filter / Quick Jump Navigation (Clean segmented buttons, not pill badge sandwiches) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200">
        <button
          onClick={() => setActiveFilter('all')}
          className={`px-4 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
            activeFilter === 'all'
              ? 'bg-[#0B1B3D] text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 bg-white border border-slate-200'
          }`}
        >
          All Services ({SERVICES.length})
        </button>
        {SERVICES.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveFilter(s.id)}
            className={`px-4 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
              activeFilter === s.id
                ? 'bg-[#0B1B3D] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 bg-white border border-slate-200'
            }`}
          >
            {s.title}
          </button>
        ))}
      </div>

      {/* Services List: In-Depth Detailed Sections */}
      <div className="space-y-12">
        {filteredServices.map((service, idx) => (
          <section
            key={service.id}
            id={service.id}
            className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200/90 shadow-sm hover:border-slate-300 transition-colors"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Title, Short Summary, Problem Addressed & CTA */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#8C6E33] mb-1">
                    {service.badge}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif-brand font-bold text-[#0B1B3D]">
                    {service.title}
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 mt-2 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Problem Addressed Box */}
                <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-200/70 text-xs text-amber-950">
                  <div className="flex items-center gap-2 font-semibold mb-1 text-[#8C6E33]">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>The Challenge This Solves:</span>
                  </div>
                  <p className="leading-relaxed text-slate-700">{service.problemAddressed}</p>
                </div>

                {/* Potential Value */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-700">
                  <div className="flex items-center gap-2 font-semibold mb-1 text-[#0B1B3D]">
                    <TrendingUp className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Expected Business Value:</span>
                  </div>
                  <p className="leading-relaxed">{service.potentialValue}</p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => handleDiscuss(service.title)}
                    className="px-5 py-3 bg-[#0B1B3D] hover:bg-[#122550] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm border border-[#C5A059]/40 transition-colors inline-flex items-center justify-center gap-2 group whitespace-nowrap"
                  >
                    <span>Discuss This Service</span>
                    <ArrowRight className="w-4 h-4 text-[#C5A059] transition-transform group-hover:translate-x-1" />
                  </button>
                  <button
                    onClick={onOpenConsultation}
                    className="px-4 py-3 bg-white border border-slate-300 text-slate-700 text-xs sm:text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors whitespace-nowrap"
                  >
                    Ask a Question
                  </button>
                </div>
              </div>

              {/* Right Column: Who Benefits & What Support Includes */}
              <div className="lg:col-span-7 bg-neutral-50/70 p-6 sm:p-8 rounded-xl border border-slate-200 space-y-6">
                
                {/* Who Benefits */}
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#C5A059]" />
                    <span>Who Benefits Most From This Service:</span>
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {service.whoBenefits.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0B1B3D] mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What Support May Include */}
                <div className="pt-4 border-t border-slate-200">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#C5A059]" />
                    <span>What Hands-On Support May Include:</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                    {service.supportIncludes.map((item, i) => (
                      <div
                        key={i}
                        className="bg-white p-3 rounded-lg border border-slate-200/80 flex items-start gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-slate-500 italic">
                  * Note: Sourcing criteria and deliverables are customized to your specific scope
                  of work agreed upon before engagement launch.
                </div>
              </div>

            </div>
          </section>
        ))}
      </div>

      {/* Bottom CTA Block */}
      <div className="bg-[#0B1B3D] text-white rounded-2xl p-8 sm:p-12 border border-[#C5A059]/40 text-center space-y-6">
        <div className="max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
            Custom Arrangements
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif-brand font-bold text-white">
            Unsure Which Service Model Fits Your Situation?
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Many clients combine elements of contract sourcing with dedicated direct-hire support.
            We will gladly review your hiring pipeline and suggest the most cost-effective arrangement.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3 bg-[#C5A059] hover:bg-[#d4b065] text-[#0B1B3D] text-xs sm:text-sm font-bold rounded-lg transition-colors flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Schedule a Free Strategy Call</span>
          </button>
          <button
            onClick={() => onNavigate('employers')}
            className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-medium rounded-lg border border-white/20 transition-colors"
          >
            Submit an Employer Inquiry
          </button>
        </div>
      </div>
    </div>
  );
};
