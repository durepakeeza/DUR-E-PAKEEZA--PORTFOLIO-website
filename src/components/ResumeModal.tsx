import React from 'react';
import { X, Printer, Mail, Download, ExternalLink, Check, Briefcase, GraduationCap, Code } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, SKILL_CATEGORIES } from '../data/portfolioData';
import { BrandLogo } from './BrandLogo';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      {/* Backdrop click dismiss */}
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#111115] border border-white/10 rounded-2xl shadow-2xl overflow-y-auto my-auto flex flex-col text-[#E8E5DF]">
        {/* Sticky Modal Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#111115]/95 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-medium font-sans">
              Curriculum Vitae
            </span>
            <span className="text-white/20">/</span>
            <span className="text-xs text-[#A6A39D] hidden sm:inline">
              Verified Experience & Credentials
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#E8E5DF] hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors"
              title="Copy Email Address"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />}
              <span>{copied ? 'Copied' : 'Copy Email'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#0B0B0D] font-medium bg-[#D4AF37] hover:bg-[#E5C378] rounded-lg transition-colors shadow-sm"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
              <span className="sm:hidden">Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-[#A6A39D] hover:text-white hover:bg-white/10 rounded-lg transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="p-6 md:p-10 space-y-8 font-sans print:bg-white print:text-black">
          {/* Header Profile Section */}
          <div className="border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="space-y-2">
              <BrandLogo variant="large" showSubtitle={false} />
              <h1 id="resume-title" className="text-2xl md:text-3xl font-serif text-[#F5F3EF] font-bold tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm md:text-base text-[#D4AF37] font-medium tracking-wide">
                {PERSONAL_INFO.title}
              </p>
              <p className="text-xs text-[#A6A39D] max-w-xl leading-relaxed pt-1">
                {PERSONAL_INFO.shortBio}
              </p>
            </div>

            <div className="text-xs space-y-2 shrink-0 md:text-right border-t md:border-t-0 pt-4 md:pt-0 border-white/10">
              <p className="text-[#A6A39D]">
                Email:{' '}
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#F5F3EF] hover:text-[#D4AF37] underline decoration-[#D4AF37]/50">
                  {PERSONAL_INFO.email}
                </a>
              </p>
              <p className="text-[#A6A39D]">
                Location:{' '}
                <span className="text-[#F5F3EF]">{PERSONAL_INFO.location}</span>
              </p>
              <p className="text-[#A6A39D]">
                Status:{' '}
                <span className="text-emerald-400 font-medium">Available for Opportunities</span>
              </p>
              <div className="flex items-center md:justify-end gap-3 pt-1">
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#D4AF37] hover:underline"
                >
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <span className="text-white/20">·</span>
                <a
                  href={PERSONAL_INFO.behanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#D4AF37] hover:underline"
                >
                  <span>Behance</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Technical Summary */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#D4AF37] font-semibold">
              <Code className="w-4 h-4" />
              <span>Core Technical Competencies</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <span className="font-semibold text-[#F5F3EF] block">Frontend Engineering</span>
                <p className="text-[#A6A39D] leading-relaxed">
                  HTML5 (Semantic markup, accessibility), CSS3 (Grid, Flexbox, responsive typography), Modern JavaScript (ES6+, DOM manipulation, asynchronous logic), Responsive Web Design.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <span className="font-semibold text-[#F5F3EF] block">WordPress Ecosystem</span>
                <p className="text-[#A6A39D] leading-relaxed">
                  WordPress CMS architecture, Elementor & Elementor Pro Theme Builder, WooCommerce integration, Website Customization, Landing Page Development, Child Themes.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <span className="font-semibold text-[#F5F3EF] block">Design & Performance</span>
                <p className="text-[#A6A39D] leading-relaxed">
                  UI/UX Design principles, Website Performance Optimization (Core Web Vitals, 90+ PageSpeed), Basic On-Page SEO, Cross-Browser Compatibility (Safari, Chrome, Firefox).
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <span className="font-semibold text-[#F5F3EF] block">Tooling & Environment</span>
                <p className="text-[#A6A39D] leading-relaxed">
                  Git Version Control, GitHub repositories & collaboration, Visual Studio Code customized development setup, Chrome DevTools profiling.
                </p>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#D4AF37] font-semibold">
              <Briefcase className="w-4 h-4" />
              <span>Professional Experience</span>
            </div>

            <div className="space-y-6">
              {EXPERIENCES.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-white/5 pb-2">
                    <div>
                      <h3 className="text-base font-semibold text-[#F5F3EF] font-serif">
                        {exp.company}
                      </h3>
                      <p className="text-xs text-[#D4AF37] font-medium">
                        {exp.role} <span className="text-[#A6A39D]">({exp.location})</span>
                      </p>
                    </div>
                    <span className="text-xs text-[#A6A39D] font-mono shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-1.5 text-xs text-[#A6A39D]">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2">
                        <span className="text-[#D4AF37] mt-0.5">·</span>
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#D4AF37] font-semibold">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Education</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {EDUCATION.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2"
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <h4 className="text-sm font-semibold text-[#F5F3EF]">
                      {edu.degree}
                    </h4>
                    <span className="text-xs text-[#D4AF37] font-mono shrink-0">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-xs text-[#A6A39D] font-medium">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-[#A6A39D]/80 leading-relaxed pt-1">
                    {edu.highlights}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer note inside resume */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#A6A39D] gap-2">
            <span>Portfolio & Case Studies: Available online</span>
            <span>Direct Inquiries: durepakeeza2007@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};
