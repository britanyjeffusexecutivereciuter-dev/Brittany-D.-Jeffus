import React, { useState } from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/content';
import {
  Mail,
  MapPin,
  Linkedin,
  PhoneCall,
  CheckCircle2,
  Clock,
  ArrowRight,
  Send,
  Building,
  User,
  MessageSquare,
} from 'lucide-react';

interface ContactProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const Contact: React.FC<ContactProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: 'Employer Inquiry / Consultation',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <div className="py-12 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8C6E33]">
          <span>Direct Connection</span>
          <span aria-hidden="true">·</span>
          <span>Jeffus Recruitment Solutions, LLC.</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-brand font-bold text-[#0B1B3D] tracking-tight">
          Let's Start a Conversation About Your Hiring Needs
        </h1>
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
          Whether you're looking for contract recruiting support or help with a permanent placement,
          I'd welcome the opportunity to learn more about your business and hiring goals.
        </p>
      </div>

      {/* Main Grid: Details + Quick Contact Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Contact Information & Hours (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-xl font-serif-brand font-bold text-[#0B1B3D]">
              Business Contact Information
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#8C6E33] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-slate-900">Headquarters & Location</h3>
                  <p className="text-slate-600 mt-0.5 leading-relaxed">
                    {BUSINESS_INFO.location}
                  </p>
                  <span className="text-[11px] text-slate-400 block mt-0.5">
                    Supporting North Texas employers & remote corporate teams nationwide
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#8C6E33] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-slate-900">Direct Email</h3>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="text-[#0B1B3D] hover:underline font-medium break-all block mt-0.5"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                  <span className="text-[11px] text-slate-400 block mt-0.5">
                    Monitored directly by Brittany D. Jeffus
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#8C6E33] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-slate-900">Response Expectations</h3>
                  <p className="text-slate-600 mt-0.5 leading-relaxed">
                    Standard business inquiries are acknowledged within one business day (Monday –
                    Friday, Central Time).
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">Connect on Professional Network:</span>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B1B3D] hover:text-[#8C6E33]"
              >
                <Linkedin className="w-4 h-4 text-[#C5A059]" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          {/* Quick Schedule Prompt Card */}
          <div className="bg-[#0B1B3D] text-white p-6 sm:p-7 rounded-2xl border border-[#C5A059]/40 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
              Fast-Track Scheduling
            </div>
            <h3 className="text-lg font-serif-brand font-bold text-white">
              Need to Discuss Immediate Requisitions?
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Book a phone discovery session directly with Brittany to talk through roles, candidate
              profiles, and engagement options.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="w-full py-2.5 px-4 bg-[#C5A059] hover:bg-[#d8b56f] text-[#0B1B3D] text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Schedule a Phone Consultation</span>
              </button>
            </div>
          </div>
        </div>

        {/* Contact Message Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-md">
            
            {submitted ? (
              <div className="py-8 text-center space-y-4 animate-in fade-in duration-200">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl font-serif-brand font-bold text-[#0B1B3D]">
                    Message Sent Successfully
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>.
                    Brittany Jeffus has received your note and will be in touch shortly at{' '}
                    <span className="font-medium text-slate-800">{formData.email}</span>.
                  </p>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        subject: 'Employer Inquiry / Consultation',
                        message: '',
                      });
                    }}
                    className="px-5 py-2.5 bg-[#0B1B3D] text-white text-xs font-semibold rounded-lg hover:bg-[#122550] transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-xl font-serif-brand font-bold text-[#0B1B3D]">
                    Send a Message
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Fill out the fields below or email us directly at{' '}
                    <span className="font-semibold text-slate-800">{BUSINESS_INFO.email}</span>.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
                      <input
                        type="text"
                        required
                        placeholder="e.g., Brittany D. Jeffus"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B1B3D] focus:border-transparent bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
                      <input
                        type="email"
                        required
                        placeholder="britany.jeffus.executivereciuter@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B1B3D] focus:border-transparent bg-white"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Company / Organization (Optional)
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
                      <input
                        type="text"
                        placeholder="Jeffus Recruitment Solutions, LLC."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B1B3D] focus:border-transparent bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Topic / Reason for Contact
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B1B3D] focus:border-transparent bg-white"
                    >
                      <option>Employer Inquiry / Consultation</option>
                      <option>Contract Recruiting Partnership</option>
                      <option>Direct-Hire Placement Question</option>
                      <option>Manufacturing Recruiting Inquiry</option>
                      <option>General Business Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your hiring goals, timeline, or any specific questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B1B3D] focus:border-transparent bg-white"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 bg-[#0B1B3D] hover:bg-[#122550] text-white font-bold text-xs sm:text-sm rounded-lg shadow-sm border border-[#C5A059]/40 transition-colors flex items-center justify-center gap-2 group disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#C5A059]" />
                        <span>Send Message to Brittany</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-[11px] text-slate-500 text-center pt-1">
                  Privacy guaranteed: We never share contact details with third-party solicitors.
                </div>
              </form>
            )}

          </div>
        </div>

      </div>
    </div>
  );
};
