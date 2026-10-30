import React, { useState, useEffect } from 'react';
import { PageId, ServiceType, EmployerInquiry } from '../types';
import { BUSINESS_INFO, IMAGES } from '../data/content';
import {
  Building2,
  CheckCircle2,
  Clock,
  Briefcase,
  Users,
  ShieldCheck,
  Send,
  ArrowRight,
  PhoneCall,
  Sparkles,
  FileText,
  AlertTriangle,
} from 'lucide-react';

interface ForEmployersProps {
  onNavigate: (page: PageId) => void;
  selectedService?: ServiceType;
  onOpenConsultation: () => void;
}

export const ForEmployers: React.FC<ForEmployersProps> = ({
  onNavigate,
  selectedService,
  onOpenConsultation,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    businessEmail: '',
    companyName: '',
    jobTitle: '',
    supportType: (selectedService || 'Contract recruiting') as ServiceType,
    numberOfPositions: '1-2 roles',
    hiringTimeline: 'Within 30 days',
    additionalDetails: '',
  });

  const [submittedInquiry, setSubmittedInquiry] = useState<EmployerInquiry | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, supportType: selectedService }));
    }
  }, [selectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const newInquiry: EmployerInquiry = {
        id: `EMP-${Math.floor(100000 + Math.random() * 900000)}`,
        fullName: formData.fullName,
        businessEmail: formData.businessEmail,
        companyName: formData.companyName,
        jobTitle: formData.jobTitle,
        supportType: formData.supportType,
        numberOfPositions: formData.numberOfPositions,
        hiringTimeline: formData.hiringTimeline,
        additionalDetails: formData.additionalDetails,
        createdAt: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }),
      };

      setSubmittedInquiry(newInquiry);
      setIsSubmitting(false);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }, 600);
  };

  const handleReset = () => {
    setSubmittedInquiry(null);
    setFormData({
      fullName: '',
      businessEmail: '',
      companyName: '',
      jobTitle: '',
      supportType: 'Contract recruiting',
      numberOfPositions: '1-2 roles',
      hiringTimeline: 'Within 30 days',
      additionalDetails: '',
    });
  };

  return (
    <div className="py-12 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8C6E33]">
          <span>For Hiring Managers & HR Leaders</span>
          <span aria-hidden="true">·</span>
          <span>Jeffus Recruitment Solutions, LLC.</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-brand font-bold text-[#0B1B3D] tracking-tight">
          Dependable Recruiting Bandwidth When You Need It Most
        </h1>
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
          Whether your internal HR department is stretched thin across multiple operations or you
          need experienced assistance sourcing specialized manufacturing personnel, we provide
          adaptable recruiting partnerships designed around your targets.
        </p>
      </div>

      {/* Main Grid: Challenges + High-Converting Inquiry Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Common Employer Pain Points Addressed (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#8C6E33]">
                Hiring Bottlenecks We Relieve
              </span>
              <h2 className="text-xl sm:text-2xl font-serif-brand font-bold text-[#0B1B3D] mt-1">
                Common Challenges We Help Solve
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-neutral-50 border border-slate-150">
                <Clock className="w-5 h-5 text-[#8C6E33] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Recruiter Shortages & Capacity Caps
                  </h3>
                  <p className="text-slate-600 mt-0.5 leading-relaxed">
                    Surging open requisitions while internal talent teams have zero bandwidth to source
                    passively.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-neutral-50 border border-slate-150">
                <Users className="w-5 h-5 text-[#8C6E33] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-slate-900">
                    HR Teams Stretched Across Priorities
                  </h3>
                  <p className="text-slate-600 mt-0.5 leading-relaxed">
                    Internal personnel managing compliance, payroll, and employee relations with no
                    hours left for outbound phone screens.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-neutral-50 border border-slate-150">
                <Briefcase className="w-5 h-5 text-[#8C6E33] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Hard-to-Fill Manufacturing & Plant Roles
                  </h3>
                  <p className="text-slate-600 mt-0.5 leading-relaxed">
                    General job boards failing to attract skilled shift supervisors, maintenance
                    technicians, or plant leadership.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-neutral-50 border border-slate-150">
                <ShieldCheck className="w-5 h-5 text-[#8C6E33] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Prolonged Unfilled Vacancy Costs
                  </h3>
                  <p className="text-slate-600 mt-0.5 leading-relaxed">
                    Key seats remaining empty for months, slowing plant throughput or increasing
                    expensive overtime burden.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Direct partnership with Brittany D. Jeffus</span>
              <button
                onClick={onOpenConsultation}
                className="text-[#0B1B3D] font-semibold hover:underline"
              >
                Schedule Call
              </button>
            </div>
          </div>

          {/* Consultation Highlight Box */}
          <div className="bg-[#0B1B3D] text-white p-6 rounded-2xl border border-[#C5A059]/40 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
              Fast Response Commitment
            </span>
            <h3 className="font-serif-brand font-bold text-lg text-white">
              Prefer a Direct Conversation?
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              If you have an urgent requisition or prefer to discuss hiring priorities directly over
              the phone, Brittany is available for an introductory call.
            </p>
            <div className="pt-1">
              <button
                onClick={onOpenConsultation}
                className="px-4 py-2 bg-[#C5A059] text-[#0B1B3D] text-xs font-bold rounded-lg hover:bg-[#d8b56f] transition-colors flex items-center gap-1.5"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Book 15-Minute Intro Call</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: High-Converting Inquiry Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-md">
            
            {submittedInquiry ? (
              /* Success Confirmation State */
              <div className="space-y-6 text-center py-6 animate-in fade-in duration-200">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#8C6E33]">
                    Inquiry Confirmed
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif-brand font-bold text-[#0B1B3D]">
                    Thank You, {submittedInquiry.fullName}
                  </h3>
                  <p className="text-sm text-slate-600 max-w-lg mx-auto">
                    Your hiring inquiry has been successfully delivered directly to{' '}
                    <strong>Brittany D. Jeffus</strong> at Jeffus Recruitment Solutions, LLC.
                  </p>
                </div>

                {/* Summary Card */}
                <div className="bg-neutral-50 rounded-xl p-5 border border-slate-200 text-left text-xs sm:text-sm space-y-3 max-w-lg mx-auto">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                    <span className="text-slate-500">Inquiry Tracking ID:</span>
                    <span className="font-mono font-bold text-[#0B1B3D]">{submittedInquiry.id}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-slate-500 block">Company:</span>
                      <span className="font-medium text-slate-800">{submittedInquiry.companyName}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Service Model:</span>
                      <span className="font-medium text-slate-800">{submittedInquiry.supportType}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Positions to Fill:</span>
                      <span className="font-medium text-slate-800">{submittedInquiry.numberOfPositions}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Expected Timeline:</span>
                      <span className="font-medium text-slate-800">{submittedInquiry.hiringTimeline}</span>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-slate-200 text-xs">
                    <span className="text-slate-500 block">Confirmation Email:</span>
                    <span className="font-medium text-slate-800">{submittedInquiry.businessEmail}</span>
                  </div>
                </div>

                <div className="text-xs text-slate-500 max-w-md mx-auto">
                  Brittany reviews employer requisitions promptly and will reply with recommended
                  next steps and candidate market availability.
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleReset}
                    className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-colors"
                  >
                    Submit Another Requisition
                  </button>
                  <button
                    onClick={onOpenConsultation}
                    className="px-5 py-2.5 bg-[#0B1B3D] hover:bg-[#122550] text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-2"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Select Preferred Call Time Now</span>
                  </button>
                </div>
              </div>
            ) : (
              /* High-Converting Form */
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif-brand font-bold text-[#0B1B3D]">
                    Request Recruiting Support
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Fill out the form below to receive a prompt evaluation of recruiting support
                    tailored to your company's open positions.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Brittany D. Jeffus"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B1B3D] focus:border-transparent bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Business Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g., name@company.com"
                      value={formData.businessEmail}
                      onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                      className="w-full px-3 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B1B3D] focus:border-transparent bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Jeffus Manufacturing, LLC."
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-3 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B1B3D] focus:border-transparent bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Job Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., HR Director / Plant Manager"
                      value={formData.jobTitle}
                      onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                      className="w-full px-3 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B1B3D] focus:border-transparent bg-white"
                    />
                  </div>
                </div>

                {/* Dropdown for type of recruiting support */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Type of Recruiting Support Needed <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.supportType}
                    onChange={(e) =>
                      setFormData({ ...formData, supportType: e.target.value as ServiceType })
                    }
                    className="w-full px-3 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B1B3D] focus:border-transparent bg-white"
                  >
                    <option value="Contract recruiting">Contract recruiting</option>
                    <option value="Direct-hire placement">Direct-hire placement</option>
                    <option value="Corporate recruiting support">Corporate recruiting support</option>
                    <option value="Manufacturing recruitment">Manufacturing recruitment</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Number of Positions to Fill
                    </label>
                    <select
                      value={formData.numberOfPositions}
                      onChange={(e) =>
                        setFormData({ ...formData, numberOfPositions: e.target.value })
                      }
                      className="w-full px-3 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B1B3D] focus:border-transparent bg-white"
                    >
                      <option value="1 role">1 critical position</option>
                      <option value="2-4 roles">2 - 4 open roles</option>
                      <option value="5-10 roles">5 - 10 roles (Expansion)</option>
                      <option value="10+ roles">10+ roles (High Volume)</option>
                      <option value="Ongoing contract">Ongoing contract support</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Expected Hiring Timeline
                    </label>
                    <select
                      value={formData.hiringTimeline}
                      onChange={(e) =>
                        setFormData({ ...formData, hiringTimeline: e.target.value })
                      }
                      className="w-full px-3 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B1B3D] focus:border-transparent bg-white"
                    >
                      <option value="Immediate (1-2 weeks)">Immediate (1-2 weeks)</option>
                      <option value="Within 30 days">Within 30 days</option>
                      <option value="Next 60-90 days">Next 60-90 days</option>
                      <option value="Planning for next quarter">Planning for next quarter</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Additional Details / Job Description Notes (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide any context about the roles, shifts, required certifications, or location requirements..."
                    value={formData.additionalDetails}
                    onChange={(e) => setFormData({ ...formData, additionalDetails: e.target.value })}
                    className="w-full p-3 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B1B3D] focus:border-transparent bg-white"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 bg-[#0B1B3D] hover:bg-[#122550] active:scale-[0.99] text-white font-bold text-sm rounded-lg shadow-sm border border-[#C5A059]/40 transition-all flex items-center justify-center gap-2 group disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span>Processing Your Request...</span>
                    ) : (
                      <>
                        <span>Request Recruiting Support</span>
                        <ArrowRight className="w-4 h-4 text-[#C5A059] transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                  <span>🔒 Information treated with strict confidentiality.</span>
                  <span>Gainesville, TX · Remote Nationwide</span>
                </div>
              </form>
            )}

          </div>
        </div>

      </div>
    </div>
  );
};
