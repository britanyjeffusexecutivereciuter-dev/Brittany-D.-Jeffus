/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId, ServiceType } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { PrivacyModal } from './components/PrivacyModal';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { HowItWorks } from './pages/HowItWorks';
import { ForEmployers } from './pages/ForEmployers';
import { ForCandidates } from './pages/ForCandidates';
import { Contact } from './pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceType | undefined>(undefined);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home',
        'services',
        'about',
        'how-it-works',
        'employers',
        'candidates',
        'contact',
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectService = (service: ServiceType) => {
    setSelectedService(service);
    navigateTo('employers');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF9] text-slate-800 selection:bg-[#C5A059]/20 selection:text-[#0B1B3D]">
      {/* Top Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <Home
            onNavigate={navigateTo}
            onOpenConsultation={() => setIsConsultationOpen(true)}
            onSelectService={handleSelectService}
          />
        )}
        {currentPage === 'services' && (
          <Services
            onNavigate={navigateTo}
            onSelectService={handleSelectService}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}
        {currentPage === 'about' && (
          <About
            onNavigate={navigateTo}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}
        {currentPage === 'how-it-works' && (
          <HowItWorks
            onNavigate={navigateTo}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}
        {currentPage === 'employers' && (
          <ForEmployers
            onNavigate={navigateTo}
            selectedService={selectedService}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}
        {currentPage === 'candidates' && (
          <ForCandidates
            onNavigate={navigateTo}
            onOpenPrivacy={() => setIsPrivacyOpen(true)}
          />
        )}
        {currentPage === 'contact' && (
          <Contact
            onNavigate={navigateTo}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Modals */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialService={selectedService}
      />

      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
    </div>
  );
}
