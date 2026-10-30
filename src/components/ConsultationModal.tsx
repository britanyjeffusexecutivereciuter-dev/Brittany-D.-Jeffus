import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, Building, Mail, User, Phone, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { ServiceType } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: ServiceType;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialService,
}) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    fullName: '',
    businessEmail: '',
    companyName: '',
    phone: '',
    serviceInterest: (initialService || 'Contract recruiting') as ServiceType,
    preferredTimeOfDay: 'Morning (9:00 AM - 12:00 PM CT)',
    preferredDate: '',
    notes: '',
  });

  const [referenceId, setReferenceId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.businessEmail || !formData.companyName) {
      return;
    }
    const newRef = `JRS-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(newRef);
    setStep('success');
  };

  const resetAndClose = () => {
    setStep('form');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="bg-[#0B1B3D] text-white px-6 py-5 flex items-start justify-between border-b border-[#C5A059]/30">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Discovery Session</span>
            </div>
            <h3 className="text-xl font-serif-brand font-bold text-white mt-1">
              Discuss Your Hiring Goals with Brittany
            </h3>
            <p className="text-xs text-slate-300 mt-0.5">
              Hands-on consultation · No obligation · Gainesville, TX & Remote Nationwide
            </p>
          </div>
          <button
            onClick={resetAndClose}
            className="text-slate-400 hover:text-white p-1 rounded-md transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {step === 'form' ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="text"
                      required
                      placeholder="e.g., Sarah Jenkins"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B1B3D] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Business Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="email"
                      required
                      placeholder="s.jenkins@company.com"
                      value={formData.businessEmail}
                      onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B1B3D] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="text"
                      required
                      placeholder="e.g., Apex Manufacturing Inc."
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B1B3D] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Phone Number (Optional)
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="tel"
                      placeholder="(940) 555-0123"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B1B3D] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Primary Recruiting Need
                  </label>
                  <select
                    value={formData.serviceInterest}
                    onChange={(e) =>
                      setFormData({ ...formData, serviceInterest: e.target.value as ServiceType })
                    }
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B1B3D] focus:border-transparent bg-white"
                  >
                    <option value="Contract recruiting">Contract recruiting</option>
                    <option value="Direct-hire placement">Direct-hire placement</option>
                    <option value="Corporate recruiting support">Corporate recruiting support</option>
                    <option value="Manufacturing recruitment">Manufacturing recruitment</option>
                    <option value="Talent sourcing and screening">Talent sourcing & screening</option>
                    <option value="Recruitment process support">Recruitment process support</option>
                    <option value="Other">Other / HR Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Preferred Time of Day (Central Time)
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                    <select
                      value={formData.preferredTimeOfDay}
                      onChange={(e) =>
                        setFormData({ ...formData, preferredTimeOfDay: e.target.value })
                      }
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B1B3D] focus:border-transparent bg-white"
                    >
                      <option>Morning (9:00 AM - 12:00 PM CT)</option>
                      <option>Early Afternoon (12:00 PM - 3:00 PM CT)</option>
                      <option>Late Afternoon (3:00 PM - 5:30 PM CT)</option>
                      <option>Flexible / Any Available Window</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Brief Overview of Open Roles or Current Challenges (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g., We need to hire 2 plant maintenance supervisors within 45 days, or we need flexible contract recruiting capacity for Q2..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full p-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B1B3D] focus:border-transparent"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-3 border-t border-slate-100">
                <span className="text-[11px] text-slate-500">
                  Brittany personally reviews all employer inquiries within 1 business day.
                </span>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#0B1B3D] hover:bg-[#122550] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm border border-[#C5A059]/40 transition-colors shrink-0"
                >
                  Confirm Consultation Request
                </button>
              </div>
            </form>
          ) : (
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xl font-serif-brand font-bold text-slate-900">
                  Consultation Request Received
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>.
                  Brittany Jeffus has received your request regarding{' '}
                  <span className="font-medium text-[#0B1B3D]">{formData.serviceInterest}</span> for{' '}
                  <span className="font-medium text-slate-900">{formData.companyName}</span>.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                  <span className="text-slate-500">Reference Number:</span>
                  <span className="font-mono font-semibold text-slate-900">{referenceId}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Notification Sent To:</span>
                  <span className="font-medium text-slate-800">{formData.businessEmail}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Direct Recruiter Contact:</span>
                  <span className="font-medium text-[#0B1B3D]">{BUSINESS_INFO.email}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={resetAndClose}
                  className="px-6 py-2.5 bg-[#0B1B3D] text-white text-sm font-semibold rounded-lg hover:bg-[#122550] transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
