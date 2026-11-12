import React from 'react';
import { EXPERIENCES, EDUCATION } from '../data/portfolioData';
import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle, ArrowRight } from 'lucide-react';

interface ExperienceProps {
  onResumeClick: () => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onResumeClick }) => {
  return (
    <section id="experience" className="py-24 md:py-32 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-sans font-medium flex items-center gap-2">
              <span>Career Trajectory</span>
              <span className="text-white/20">·</span>
              <span>Experience & Education</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#F5F3EF] tracking-tight">
              Work History & Academic Foundations
            </h2>
          </div>

          <button
            onClick={onResumeClick}
            className="self-start md:self-auto inline-flex items-center gap-2 text-xs text-[#D4AF37] hover:text-[#E5C378] underline decoration-[#D4AF37]/50 underline-offset-4 transition-colors font-medium"
          >
            <span>View Full Printable Resume</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 2-Column Split: Experience Timeline (Left 7 cols) & Education (Right 5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Work Experience Timeline */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#A6A39D] font-mono">
              <Briefcase className="w-4 h-4 text-[#D4AF37]" />
              <span>Professional Experience</span>
            </div>

            {/* Timeline wrapper */}
            <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-12">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Gold Node */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#0B0B0D] border-2 border-[#D4AF37] group-hover:scale-125 transition-transform duration-200" />

                  {/* Card Body */}
                  <div className="p-6 rounded-2xl bg-[#131317]/70 border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-300 space-y-4">
                    {/* Header info */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-white/5 pb-3">
                      <div>
                        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#F5F3EF]">
                          {exp.company}
                        </h3>
                        <div className="text-xs text-[#D4AF37] font-medium tracking-wide pt-0.5">
                          {exp.role}
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-xs text-[#A6A39D] font-mono pt-1 sm:pt-0">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[#D4AF37]" />
                          <span>{exp.period}</span>
                        </span>
                        <span className="text-white/20">·</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#A6A39D]" />
                          <span>{exp.location}</span>
                        </span>
                      </div>
                    </div>

                    {/* Exact Responsibilities from prompt */}
                    <div className="space-y-2">
                      <div className="text-[11px] uppercase tracking-wider text-white/40 font-mono">
                        Key Responsibilities:
                      </div>
                      <ul className="space-y-2 text-xs text-[#A6A39D]">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2.5">
                            <span className="text-[#D4AF37] mt-1 shrink-0">·</span>
                            <span className="leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Results */}
                    <div className="pt-2 border-t border-white/5 space-y-1.5">
                      <div className="text-[10px] uppercase tracking-wider text-[#C5A059] font-mono">
                        Impact & Highlights:
                      </div>
                      <div className="space-y-1 text-xs text-[#E8E5DF]/90">
                        {exp.keyHighlights.map((hl, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-2">
                            <CheckCircle className="w-3 h-3 text-[#D4AF37] shrink-0" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Academic Education & Continuous Learning */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#A6A39D] font-mono">
              <GraduationCap className="w-4 h-4 text-[#D4AF37]" />
              <span>Academic Education</span>
            </div>

            <div className="space-y-6">
              {EDUCATION.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#131317]/70 border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-300 space-y-3"
                >
                  <div className="flex items-baseline justify-between gap-2 border-b border-white/5 pb-2">
                    <span className="text-xs font-mono text-[#D4AF37]">
                      {edu.period}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#A6A39D]">
                      Formal Degree
                    </span>
                  </div>

                  <h4 className="font-serif text-lg font-semibold text-[#F5F3EF]">
                    {edu.degree}
                  </h4>

                  <p className="text-xs text-[#D4AF37] font-medium">
                    {edu.institution}
                  </p>

                  <p className="text-xs text-[#A6A39D] leading-relaxed pt-1">
                    {edu.highlights}
                  </p>
                </div>
              ))}

              {/* Developer Standards Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#141418] to-[#0E0E12] border border-[#D4AF37]/20 space-y-3">
                <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-mono block">
                  Commitment to Quality
                </span>
                <h5 className="font-serif text-base font-semibold text-[#F5F3EF]">
                  Clean Code & Performance Standards
                </h5>
                <p className="text-xs text-[#A6A39D] leading-relaxed">
                  Every project adheres to W3C semantic markup standards, zero layout shift principles, and disciplined modular CSS/Elementor structuring to ensure longevity and seamless maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
