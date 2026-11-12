import React from 'react';
import { ArrowUp, Mail, ExternalLink } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onResumeClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onResumeClick }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 70;
      const pos = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: pos - navOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="border-t border-white/10 bg-[#070709] text-[#A6A39D] text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Footer Tier */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/5">
          {/* Brand Logo & Monogram */}
          <div className="space-y-2">
            <BrandLogo variant="footer" />
            <p className="text-xs text-[#A6A39D] max-w-sm pt-1">
              Frontend & WordPress Developer crafting responsive, modern digital experiences.
            </p>
          </div>

          {/* Quick Section Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-[#E8E5DF]">
            <button
              onClick={() => scrollTo('hero')}
              className="hover:text-[#D4AF37] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollTo('about')}
              className="hover:text-[#D4AF37] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollTo('skills')}
              className="hover:text-[#D4AF37] transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollTo('projects')}
              className="hover:text-[#D4AF37] transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollTo('experience')}
              className="hover:text-[#D4AF37] transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="hover:text-[#D4AF37] transition-colors"
            >
              Contact
            </button>
            <button
              onClick={onResumeClick}
              className="text-[#D4AF37] hover:underline transition-colors font-medium"
            >
              Resume
            </button>
          </div>
        </div>

        {/* Bottom Footer Tier */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#A6A39D]">
          <div>
            © {new Date().getFullYear()} DUR E PAKEEZA. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-[#F5F3EF] transition-colors"
            >
              {PERSONAL_INFO.email}
            </a>
            <span className="text-white/20">·</span>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D4AF37] transition-colors flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
            <span className="text-white/20">·</span>
            <a
              href={PERSONAL_INFO.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D4AF37] transition-colors flex items-center gap-1"
            >
              <span>Behance</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>

          {/* Working Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-[#E8E5DF] hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#D4AF37]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
