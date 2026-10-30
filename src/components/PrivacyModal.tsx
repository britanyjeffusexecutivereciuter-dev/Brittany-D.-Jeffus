import React from 'react';
import { X, ShieldCheck, Lock, UserCheck, FileText } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#0B1B3D] text-white px-6 py-4 flex items-center justify-between border-b border-[#C5A059]/30 shrink-0">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
            <h3 className="font-serif-brand font-bold text-lg text-white">
              Privacy Policy & Information Governance
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-md transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm text-slate-700 leading-relaxed">
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 flex items-start gap-3">
            <Lock className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
            <p className="text-xs text-slate-600">
              <strong>Our Commitment to Privacy:</strong> Jeffus Recruitment Solutions, LLC. is an
              independent recruiting practice operated by Brittany D. Jeffus. We treat all candidate
              materials and employer hiring requirements with the highest level of professional
              confidentiality.
            </p>
          </div>

          <section className="space-y-2">
            <h4 className="font-serif-brand font-bold text-slate-900 text-base flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-[#C5A059]" />
              1. Candidate Information & Résumé Protection
            </h4>
            <p>
              When candidates submit their contact information, background details, or résumés
              through this website:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600">
              <li>Your information is stored securely and never published publicly.</li>
              <li>
                We will never submit your résumé or represent you to an employer without your prior
                knowledge and direct consent.
              </li>
              <li>
                We do not sell, rent, or trade candidate contact lists to third-party marketing brokers.
              </li>
              <li>
                Candidate records are retained solely for matching with active or future recruitment
                engagements. You may request deletion of your records at any time.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h4 className="font-serif-brand font-bold text-slate-900 text-base flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#C5A059]" />
              2. Employer Inquiry & Organizational Confidentiality
            </h4>
            <p className="text-xs text-slate-600">
              Information submitted by hiring managers, human resource personnel, or corporate
              representatives—including requisition headcount, salary budgets, and operational
              challenges—is maintained strictly between Jeffus Recruitment Solutions, LLC. and your
              organization. Confidential executive searches are conducted under strict non-disclosure
              standards.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-serif-brand font-bold text-slate-900 text-base">
              3. Communication Practices
            </h4>
            <p className="text-xs text-slate-600">
              By submitting an inquiry, you consent to receive direct business correspondence
              regarding your recruiting needs or application status from{' '}
              <span className="font-semibold">{BUSINESS_INFO.email}</span>. We do not engage in
              automated telemarketing spam.
            </p>
          </section>

          <section className="space-y-1 pt-2 border-t border-slate-100 text-xs text-slate-500">
            <p>
              <strong>Governing Entity:</strong> Jeffus Recruitment Solutions, LLC. · Gainesville,
              Texas, United States.
            </p>
            <p>
              Questions regarding data handling can be addressed to Brittany D. Jeffus at{' '}
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="text-[#0B1B3D] underline font-medium"
              >
                {BUSINESS_INFO.email}
              </a>
              .
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#0B1B3D] text-white text-xs font-semibold rounded-lg hover:bg-[#122550] transition-colors"
          >
            Close Privacy Terms
          </button>
        </div>
      </div>
    </div>
  );
};
