/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ProjectModal } from './components/ProjectModal';
import { Project } from './types';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const navOffset = 70;
      const pos = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: pos - navOffset,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-[#0B0B0D] text-[#F5F3EF] selection:bg-[#D4AF37]/30 selection:text-[#F5F3EF] relative">
      {/* Luxury subtle background noise pattern */}
      <div className="fixed inset-0 pointer-events-none luxury-noise opacity-40 -z-20" />

      {/* Navigation Bar */}
      <Navbar onResumeClick={() => setResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About
          onResumeClick={() => setResumeModalOpen(true)}
          onContactClick={scrollToContact}
        />
        <Skills />
        <Projects
          onOpenProject={(project) => setSelectedProject(project)}
        />
        <Experience
          onResumeClick={() => setResumeModalOpen(true)}
        />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onResumeClick={() => setResumeModalOpen(true)} />

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-30 p-3 rounded-full bg-[#16161A]/90 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-[#0B0B0D] border border-white/10 hover:border-[#D4AF37] shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 group focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
        </button>
      )}

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        onContactClick={scrollToContact}
      />
    </div>
  );
}
