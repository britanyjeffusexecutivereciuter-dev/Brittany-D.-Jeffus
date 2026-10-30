import React, { useState } from 'react';
import { PageId, CandidateSubmission } from '../types';
import { BUSINESS_INFO } from '../data/content';
import {
  UploadCloud,
  FileCheck,
  CheckCircle2,
  ShieldCheck,
  Lock,
  ArrowRight,
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  AlertCircle,
  FileText,
} from 'lucide-react';

interface ForCandidatesProps {
  onNavigate: (page: PageId) => void;
  onOpenPrivacy: () => void;
}

export const ForCandidates: React.FC<ForCandidatesProps> = ({
  onNavigate,
  onOpenPrivacy,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    desiredRole: 'Manufacturing & Plant Operations',
    experienceYears: '3-5 years',
    notes: '',
    privacyConsent: false,
  });

  const [uploadedFile, setUploadedFile] = useState<{
    name: string;
    size: string;
  } | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<CandidateSubmission | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setErrorMessage('File size exceeds 10MB limit. Please upload a smaller file.');
        return;
      }
      setErrorMessage('');
      const sizeInMb = (file.size / (1024 * 1024)).toFixed(2);
      setUploadedFile({
        name: file.name,
        size: `${sizeInMb} MB`,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyConsent) {
      setErrorMessage('Please accept the privacy consent to submit your details.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    setTimeout(() => {
      const submission: CandidateSubmission = {
        id: `CAN-${Math.floor(100000 + Math.random() * 900000)}`,
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        location: formData.location,
        desiredRole: formData.desiredRole,
        experienceYears: formData.experienceYears,
        resumeFileName: uploadedFile?.name,
        privacyConsent: true,
        notes: formData.notes,
        createdAt: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }),
      };

      setSubmittedData(submission);
      setIsSubmitting(false);
      window.scrollTo({ top: 200, behavior: 'smooth' });
    }, 600);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setUploadedFile(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      location: '',
      desiredRole: 'Manufacturing & Plant Operations',
      experienceYears: '3-5 years',
      notes: '',
      privacyConsent: false,
    });
  };

  return (
    <div className="py-12 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8C6E33]">
          <span>Confidential Candidate Portal</span>
          <span aria-hidden="true">·</span>
          <span>Jeffus Recruitment Solutions, LLC.</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-brand font-bold text-[#0B1B3D] tracking-tight">
          Explore Your Next Career Move with Confidence
        </h1>
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
          Submit your background and resume for consideration in manufacturing, industrial, and
          corporate career opportunities across Texas and nationwide.
        </p>
      </div>

      {/* Realistic Transparent Disclosure Notice */}
      <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-5 text-xs text-amber-900 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-[#8C6E33] shrink-0 mt-0.5" />
        <div className="space-y-1">
          <strong className="font-semibold text-slate-900 block">
            Important Information for Applicants:
          </strong>
          <p className="leading-relaxed text-slate-700">
            Submitting your information allows Brittany D. Jeffus to review your profile and match you
            with active or upcoming client requisitions. Submission does not imply an immediate open
            vacancy in every specialty or guarantee job placement. All candidate materials are
            treated with strict professional confidentiality and will never be shared without your
            explicit knowledge and permission.
          </p>
        </div>
      </div>

      {/* Main Form & Privacy Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Why Submit & Privacy Standards (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-xl font-serif-brand font-bold text-[#0B1B3D]">
              How We Work with Candidates
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-slate-900">Personalized Review</h3>
                  <p className="text-slate-600 mt-0.5 leading-relaxed text-xs">
                    Your resume is reviewed directly by Brittany Jeffus—not filtered out by arbitrary
                    uncalibrated bot algorithms.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-slate-900">100% Confidentiality</h3>
                  <p className="text-slate-600 mt-0.5 leading-relaxed text-xs">
                    We never present your resume or reveal your current employer to any hiring
                    manager without first speaking with you.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-slate-900">No Candidate Fees</h3>
                  <p className="text-slate-600 mt-0.5 leading-relaxed text-xs">
                    Candidates are never charged any fees for placement or career representation; all
                    fees are paid by hiring client companies.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-slate-900">Direct Interview Preparation</h3>
                  <p className="text-slate-600 mt-0.5 leading-relaxed text-xs">
                    When an opportunity aligns, you receive detailed briefings on company culture,
                    hiring managers, and key technical expectations.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <button
                onClick={onOpenPrivacy}
                className="text-xs text-[#0B1B3D] hover:underline font-semibold flex items-center gap-1.5"
              >
                <ShieldCheck className="w-4 h-4 text-[#8C6E33]" />
                <span>Read Candidate Data Privacy Policy</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Submission Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-md">
            
            {submittedData ? (
              <div className="py-8 text-center space-y-5 animate-in fade-in duration-200">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#8C6E33]">
                    Submission Received
                  </span>
                  <h3 className="text-2xl font-serif-brand font-bold text-[#0B1B3D]">
                    Thank You, {submittedData.fullName}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    Your profile and career preferences have been received. We will reach out when
                    an opportunity matches your background.
                  </p>
                </div>

                <div className="bg-neutral-50 p-4 rounded-xl border border-slate-200 text-left text-xs space-y-2 max-w-md mx-auto">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                    <span className="text-slate-500">Applicant ID:</span>
                    <span className="font-mono font-bold text-slate-900">{submittedData.id}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Focus Discipline:</span>
                    <span className="font-medium text-slate-800">{submittedData.desiredRole}</span>
                  </div>
                  {submittedData.resumeFileName && (
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500">Uploaded Document:</span>
                      <span className="font-medium text-emerald-700 flex items-center gap-1">
                        <FileCheck className="w-3.5 h-3.5" />
                        {submittedData.resumeFileName}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Status:</span>
                    <span className="font-medium text-slate-800">In Confidential Talent Pool</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="px-5 py-2.5 bg-[#0B1B3D] text-white text-xs font-semibold rounded-lg hover:bg-[#122550] transition-colors"
                  >
                    Submit Another Profile
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-xl font-serif-brand font-bold text-[#0B1B3D]">
                    Confidential Candidate Inquiry
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Fill out your information below. Your data is stored securely and never published.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., John Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B1B3D] focus:border-transparent bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g., john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B1B3D] focus:border-transparent bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(940) 555-0199"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B1B3D] focus:border-transparent bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Current Location (City, State) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Gainesville, TX or Dallas, TX"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B1B3D] focus:border-transparent bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Primary Discipline / Field
                    </label>
                    <select
                      value={formData.desiredRole}
                      onChange={(e) => setFormData({ ...formData, desiredRole: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B1B3D] focus:border-transparent bg-white"
                    >
                      <option>Manufacturing & Plant Operations</option>
                      <option>Industrial Maintenance & Electrical</option>
                      <option>Plant Supervision & Operations Management</option>
                      <option>Quality Assurance & Safety / EHS</option>
                      <option>Supply Chain, Logistics & Warehouse</option>
                      <option>Corporate HR, Talent Acquisition & Admin</option>
                      <option>Engineering & Technical Support</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Years of Relevant Experience
                    </label>
                    <select
                      value={formData.experienceYears}
                      onChange={(e) =>
                        setFormData({ ...formData, experienceYears: e.target.value })
                      }
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B1B3D] focus:border-transparent bg-white"
                    >
                      <option>1 - 2 years</option>
                      <option>3 - 5 years</option>
                      <option>6 - 10 years</option>
                      <option>10+ years (Senior / Leadership)</option>
                    </select>
                  </div>
                </div>

                {/* Resume Upload Box */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Upload Résumé (PDF, DOCX up to 10MB)
                  </label>
                  <div className="border-2 border-dashed border-slate-300 rounded-xl p-4 text-center hover:border-slate-400 transition-colors bg-neutral-50/50">
                    {uploadedFile ? (
                      <div className="flex items-center justify-between p-2 bg-white rounded-lg border border-slate-200 text-xs">
                        <div className="flex items-center gap-2 truncate">
                          <FileText className="w-4 h-4 text-[#8C6E33] shrink-0" />
                          <span className="font-medium text-slate-800 truncate">
                            {uploadedFile.name}
                          </span>
                          <span className="text-slate-400 text-[11px]">({uploadedFile.size})</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => setUploadedFile(null)}
                          className="text-red-500 hover:text-red-700 text-xs font-semibold ml-2"
                        >
                          Remove
                        </button>
                      </div>
                    ) : (
                      <label className="cursor-pointer block">
                        <UploadCloud className="w-8 h-8 text-slate-400 mx-auto mb-1" />
                        <span className="text-xs font-semibold text-[#0B1B3D] hover:underline block">
                          Click to browse or drag and drop your résumé
                        </span>
                        <span className="text-[11px] text-slate-400 block mt-0.5">
                          Supported formats: .pdf, .doc, .docx
                        </span>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Career Preferences or Target Roles (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g., Looking for 1st shift supervisor role in Cooke County, or open to CNC machining positions..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full p-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B1B3D] focus:border-transparent bg-white"
                  />
                </div>

                {/* Privacy Consent Checkbox */}
                <div className="pt-2">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={formData.privacyConsent}
                      onChange={(e) =>
                        setFormData({ ...formData, privacyConsent: e.target.checked })
                      }
                      className="mt-1 w-4 h-4 text-[#0B1B3D] border-slate-300 rounded focus:ring-[#0B1B3D]"
                    />
                    <span className="text-xs text-slate-600 leading-normal">
                      I agree that Jeffus Recruitment Solutions, LLC. may store my submitted
                      information for career matching and contact me regarding relevant
                      opportunities. I understand my information is never shared without my prior
                      consent.
                    </span>
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 bg-[#0B1B3D] hover:bg-[#122550] text-white font-bold text-xs sm:text-sm rounded-lg shadow-sm border border-[#C5A059]/40 transition-colors flex items-center justify-center gap-2 group disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span>Submitting Your Profile...</span>
                    ) : (
                      <>
                        <span>Submit Information for Consideration</span>
                        <ArrowRight className="w-4 h-4 text-[#C5A059] transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>

      </div>
    </div>
  );
};
