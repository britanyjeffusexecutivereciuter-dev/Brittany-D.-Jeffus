import React from 'react';
import { PageId } from '../types';
import { THREE_STEPS, BUSINESS_INFO } from '../data/content';
import {
  Compass,
  FileCheck,
  UserCheck,
  Clock,
  ArrowRight,
  PhoneCall,
  CheckCircle2,
  Calendar,
  Layers,
  HelpCircle,
} from 'lucide-react';

interface HowItWorksProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const stepBreakdowns = [
    {
      step: '01',
      title: 'Understand Your Hiring Needs',
      tagline: 'Discovery, Alignment & Technical Profiling',
      description:
        'We begin by diving into the specifics of your organization and open position. Rather than relying on generic job descriptions, we discuss the actual operational context.',
      details: [
        'Detailed intake discussion on daily responsibilities and technical must-haves',
        'Review of work schedules, shift arrangements, plant safety expectations, and reporting lines',
        'Cultural fit assessment: team dynamics, management styles, and workplace values',
        'Compensation and timeline alignment based on current market availability',
        'Identification of desired support scope: contract capacity vs. full direct-hire placement',
      ],
      icon: Compass,
    },
    {
      step: '02',
      title: 'Build a Recruiting Approach',
      tagline: 'Scope Agreement, Sourcing Plan & Criteria',
      description:
        'Once we understand the exact requirements, we establish an agreed-upon scope of work, clear communication cadences, and customized sourcing strategies.',
      details: [
        'Definition of precise candidate target profiles and industry search parameters',
        'Proactive direct sourcing across industry networks, specialized databases, and passive talent',
        'Tailored screening question sets evaluating technical proficiency and work history',
        'Clear milestones and scheduled progress touchpoints established with your hiring team',
        'Transparent engagement terms and expectations confirmed in writing',
      ],
      icon: Layers,
    },
    {
      step: '03',
      title: 'Support Your Hiring Process',
      tagline: 'Vetting, Coordination & Offer Support',
      description:
        'We execute the agreed recruiting activities, presenting thoroughly vetted candidates and managing interview communication through decision and offer stages.',
      details: [
        'Conducting structured telephone and video candidate qualification interviews',
        'Presenting comprehensive candidate profiles highlighting key strengths and considerations',
        'Coordinating interview scheduling between hiring managers and candidate calendars',
        'Gathering candidate feedback and facilitating timely communication',
        'Assisting with offer preparation, communication, and initial start date coordination',
      ],
      icon: UserCheck,
    },
  ];

  return (
    <div className="py-12 sm:py-16 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8C6E33]">
          <span>Collaborative Workflow</span>
          <span aria-hidden="true">·</span>
          <span>Transparent Execution</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-brand font-bold text-[#0B1B3D] tracking-tight">
          How the Recruiting Process Works
        </h1>
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
          Recruitment should never feel chaotic or opaque. We keep the process structured,
          collaborative, and focused on finding dependable talent aligned with your organization.
        </p>
      </div>

      {/* 3 Step In-Depth Timeline */}
      <div className="space-y-12">
        {stepBreakdowns.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Step Number & Header (4 cols) */}
                <div className="lg:col-span-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="font-serif-brand text-4xl sm:text-5xl font-bold text-[#C5A059]">
                      {step.step}
                    </span>
                    <div className="p-2.5 rounded-lg bg-[#0B1B3D]/5 text-[#0B1B3D]">
                      <Icon className="w-5 h-5 text-[#8C6E33]" />
                    </div>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-serif-brand font-bold text-[#0B1B3D]">
                    {step.title}
                  </h2>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#8C6E33]">
                    {step.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                    {step.description}
                  </p>
                </div>

                {/* Details Breakdown (8 cols) */}
                <div className="lg:col-span-8 bg-neutral-50/70 p-6 sm:p-8 rounded-xl border border-slate-200">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-800 mb-4">
                    Key Activities in This Stage:
                  </h3>
                  <div className="space-y-3">
                    {step.details.map((detail, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Collaboration Principles */}
      <section className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200 space-y-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#8C6E33]">
            What You Can Expect
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif-brand font-bold text-[#0B1B3D] mt-2">
            Our Communication & Accountability Standards
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-xl bg-neutral-50 border border-slate-200 space-y-2">
            <Clock className="w-5 h-5 text-[#8C6E33]" />
            <h4 className="font-serif-brand font-bold text-slate-900 text-base">
              Consistent Updates
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              You will never be left wondering about candidate progress. We maintain agreed status
              check-ins with honest pipeline visibility.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-neutral-50 border border-slate-200 space-y-2">
            <FileCheck className="w-5 h-5 text-[#8C6E33]" />
            <h4 className="font-serif-brand font-bold text-slate-900 text-base">
              Vetted Profiles Only
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every candidate submitted has been personally interviewed and evaluated against your
              specific job criteria, salary parameters, and schedule requirements.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-neutral-50 border border-slate-200 space-y-2">
            <Calendar className="w-5 h-5 text-[#8C6E33]" />
            <h4 className="font-serif-brand font-bold text-slate-900 text-base">
              Flexible Scheduling
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              We handle the logistics of interview coordination to prevent hiring fatigue from
              distracting your plant managers or executive team.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="bg-[#0B1B3D] rounded-2xl p-8 sm:p-14 text-white text-center space-y-6 border border-[#C5A059]/40">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-brand font-bold">
          Let's Talk About Your Open Positions
        </h2>
        <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
          Schedule an initial conversation to discuss your hiring goals, timeline, and the level of
          recruiting support that makes the most sense for your business.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3.5 bg-[#C5A059] hover:bg-[#d8b56f] text-[#0B1B3D] font-bold text-xs sm:text-sm rounded-lg transition-colors inline-flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Schedule Discovery Call</span>
          </button>
          <button
            onClick={() => onNavigate('employers')}
            className="px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white font-medium text-xs sm:text-sm rounded-lg border border-white/20 transition-colors"
          >
            Submit Requisition Details
          </button>
        </div>
      </div>
    </div>
  );
};
