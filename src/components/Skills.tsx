import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code, Globe, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Competencies', icon: Sparkles },
    { id: 'frontend', name: 'Frontend', icon: Code },
    { id: 'wordpress', name: 'WordPress', icon: Globe },
    { id: 'design-optimization', name: 'Design & Optimization', icon: Sparkles },
    { id: 'tools', name: 'Tools', icon: Terminal }
  ];

  const filteredCategories =
    activeCategoryId === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === activeCategoryId);

  return (
    <section id="skills" className="py-24 md:py-32 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-sans font-medium flex items-center gap-2">
              <span>Technical Expertise</span>
              <span className="text-white/20">·</span>
              <span>Full-Stack Overview</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#F5F3EF] tracking-tight">
              Tools & Technologies Mastered
            </h2>
          </div>

          {/* Interactive Category Filter Bar */}
          <div className="flex items-center gap-1.5 p-1 bg-white/[0.03] border border-white/10 rounded-xl overflow-x-auto max-w-full">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = activeCategoryId === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategoryId(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-all duration-200 ${
                    isSelected
                      ? 'bg-[#D4AF37] text-[#0B0B0D] font-semibold shadow-sm'
                      : 'text-[#A6A39D] hover:text-[#F5F3EF] hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Categorized Skills Grid */}
        <div className="space-y-12">
          {filteredCategories.map((cat) => (
            <div key={cat.id} className="space-y-5">
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <h3 className="text-lg sm:text-xl font-serif font-semibold text-[#F5F3EF]">
                    {cat.name}
                  </h3>
                </div>
                <p className="text-xs text-[#A6A39D] font-sans">
                  {cat.description}
                </p>
              </div>

              {/* Skills Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {cat.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-[#131317]/80 border border-white/5 hover:border-[#D4AF37]/35 transition-all duration-300 group flex flex-col justify-between space-y-4 shadow-sm hover:shadow-[0_4px_25px_rgba(0,0,0,0.3)]"
                  >
                    <div className="space-y-2">
                      <div className="flex items-baseline justify-between gap-2">
                        <h4 className="font-serif text-base font-semibold text-[#F5F3EF] group-hover:text-[#D4AF37] transition-colors">
                          {skill.name}
                        </h4>
                        <span className="text-[10px] font-mono tracking-wider uppercase text-[#C5A059]">
                          {skill.level}
                        </span>
                      </div>

                      <div className="text-[11px] text-[#C5A059] font-mono leading-tight">
                        {skill.focus}
                      </div>

                      <p className="text-xs text-[#A6A39D] leading-relaxed pt-1">
                        {skill.description}
                      </p>
                    </div>

                    {/* Subtle proficiency meter */}
                    <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-[#A6A39D] font-mono">
                      <span>Proficiency</span>
                      <span className="text-[#F5F3EF] flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-[#D4AF37]" />
                        <span>Verified</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
