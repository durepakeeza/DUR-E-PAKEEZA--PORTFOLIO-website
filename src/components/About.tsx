import React, { useState } from 'react';
import { Check, ArrowRight, Sparkles, Layout, Gauge, Smartphone, Eye } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutProps {
  onResumeClick: () => void;
  onContactClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onResumeClick, onContactClick }) => {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      title: 'Frontend Craftsmanship',
      subtitle: 'HTML5 · CSS3 · Modern JavaScript',
      icon: Layout,
      description:
        'Clean, accessible DOM architecture written with strict semantic discipline, modern CSS Grid/Flexbox layouts, and modular vanilla JavaScript.'
    },
    {
      title: 'WordPress & Elementor Pro',
      subtitle: 'Dynamic Templates · Theme Customization',
      icon: Sparkles,
      description:
        'Bespoke implementations using Elementor & Elementor Pro Theme Builder, custom WooCommerce shop architectures, dynamic post loops, and lightweight child themes.'
    },
    {
      title: 'Fluid Responsive Precision',
      subtitle: 'Mobile-First · Touch-Friendly',
      icon: Smartphone,
      description:
        'Every layout is engineered from 320px mobile viewports up to ultrawide 4K monitors, preventing horizontal overflow, clipping, or unreadable typography.'
    },
    {
      title: 'Speed & Core Web Vitals',
      subtitle: 'Asset Minification · 90+ PageSpeed',
      icon: Gauge,
      description:
        'Optimized images, efficient script deferral, clean DOM trees, and zero layout shifts so visitors experience immediate, effortless interactions.'
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-sans font-medium flex items-center gap-2">
            <span>Philosophy & Background</span>
            <span className="text-white/20">·</span>
            <span>About Dur E Pakeeza</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#F5F3EF] tracking-tight">
            Bridging Intentional Design & Dependable Engineering
          </h2>
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Narrative Column */}
          <div className="lg:col-span-6 space-y-6 text-[#A6A39D] leading-relaxed text-sm sm:text-base">
            <p className="text-[#F5F3EF] font-serif text-lg sm:text-xl leading-relaxed italic border-l-2 border-[#D4AF37]/50 pl-4 py-1">
              "Great websites shouldn't just look visually breathtaking—they must perform flawlessly on every screen and empower clients to grow without technical friction."
            </p>

            <p>
              I am <span className="text-[#F5F3EF] font-medium">Dur E Pakeeza</span>, a dedicated Frontend Developer and WordPress Developer with over <span className="text-[#D4AF37] font-semibold">3 years of professional experience</span> building responsive, modern websites. My work brings together clean interfaces, thoughtful user experiences, and reliable frontend development.
            </p>

            <p>
              Throughout my work with studios and clients worldwide, I have specialized in <span className="text-[#F5F3EF]">Elementor and Elementor Pro</span> site architecture, custom page layouts, landing page design, and deep <span className="text-[#F5F3EF]">website customization</span>. I focus intensely on <span className="text-[#F5F3EF]">UI/UX-focused design</span> and <span className="text-[#F5F3EF]">performance optimization</span>, ensuring every build achieves rapid load times, smooth scrolling, and complete cross-browser compatibility.
            </p>

            <p>
              I take pride in clear communication, clean deliverables, and dependable post-launch support. From high-converting e-commerce shops to boutique design portfolios, I ensure every digital touchpoint feels refined and durable.
            </p>

            {/* Quick action buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onResumeClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0B0B0D] bg-[#D4AF37] hover:bg-[#E5C378] rounded-lg transition-colors"
              >
                <span>Read Full Credentials</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onContactClick}
                className="text-xs text-[#D4AF37] hover:text-[#E5C378] underline decoration-[#D4AF37]/40 underline-offset-4 transition-colors font-medium"
              >
                Start a Conversation →
              </button>
            </div>
          </div>

          {/* Right Interactive Pillars Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="text-xs uppercase tracking-[0.2em] text-[#A6A39D] font-mono mb-2">
              Core Principles & Capabilities
            </div>

            <div className="space-y-3">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                const isSelected = activePillar === idx;

                return (
                  <div
                    key={idx}
                    onClick={() => setActivePillar(idx)}
                    className={`p-5 rounded-xl border transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'bg-[#141418] border-[#D4AF37]/40 shadow-[0_0_20px_rgba(212,175,55,0.06)]'
                        : 'bg-white/[0.02] border-white/5 hover:border-white/15'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3.5">
                        <div
                          className={`p-2.5 rounded-lg shrink-0 transition-colors ${
                            isSelected
                              ? 'bg-[#D4AF37]/20 text-[#D4AF37]'
                              : 'bg-white/5 text-[#A6A39D]'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>

                        <div className="space-y-1">
                          <h3
                            className={`font-serif text-base sm:text-lg font-semibold transition-colors ${
                              isSelected ? 'text-[#F5F3EF]' : 'text-[#E8E5DF]'
                            }`}
                          >
                            {pillar.title}
                          </h3>
                          <div className="text-xs text-[#C5A059] font-mono">
                            {pillar.subtitle}
                          </div>
                          <p className="text-xs text-[#A6A39D] leading-relaxed pt-1">
                            {pillar.description}
                          </p>
                        </div>
                      </div>

                      {isSelected && (
                        <div className="shrink-0 pt-1">
                          <Check className="w-4 h-4 text-[#D4AF37]" />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
