import React, { useState } from 'react';
import { ArrowDownRight, Sparkles, Monitor, Tablet, Smartphone, CheckCircle2, ChevronRight } from 'lucide-react';
import { PERSONAL_INFO, STATS } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [previewViewport, setPreviewViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

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
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-between pt-28 md:pt-36 pb-12 overflow-hidden">
      {/* Ambient background gold glow & subtle geometric halo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,rgba(11,11,13,0)_70%)] pointer-events-none -z-10" />
      <div className="absolute top-12 right-12 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.05)_0%,transparent_70%)] pointer-events-none -z-10 animate-pulse-subtle" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        {/* Main 2-column split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Subtle editorial kicker */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C5A059] font-sans font-medium">
              <span>Bespoke Web Development</span>
              <span className="text-white/20">·</span>
              <span>Available for Projects</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#F5F3EF] tracking-tight leading-[1.05] text-balance">
              DUR E PAKEEZA
            </h1>

            {/* Supporting Title */}
            <div className="text-lg sm:text-xl md:text-2xl font-light text-[#D4AF37] font-serif italic tracking-wide">
              {PERSONAL_INFO.title}
            </div>

            {/* Short Description */}
            <p className="text-sm sm:text-base text-[#A6A39D] max-w-xl leading-relaxed font-sans font-normal pt-1">
              {PERSONAL_INFO.shortBio}
            </p>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo('projects')}
                className="group inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#0B0B0D] bg-[#D4AF37] hover:bg-[#E5C378] active:scale-[0.98] rounded-lg transition-all duration-200 shadow-[0_0_25px_rgba(212,175,55,0.2)]"
              >
                <span>View My Work</span>
                <ArrowDownRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#F5F3EF] hover:text-white bg-white/[0.04] hover:bg-white/[0.08] active:scale-[0.98] border border-white/10 hover:border-[#D4AF37]/50 rounded-lg transition-all duration-200"
              >
                <span>Let's Work Together</span>
                <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
              </button>
            </div>

            {/* Quiet trust markers */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-[#A6A39D] font-mono">
              <span className="text-white/40">Specializing in:</span>
              <span className="text-[#F5F3EF]">Elementor Pro</span>
              <span className="text-white/20">/</span>
              <span className="text-[#F5F3EF]">WooCommerce</span>
              <span className="text-white/20">/</span>
              <span className="text-[#F5F3EF]">Custom Frontend</span>
            </div>
          </div>

          {/* Right Column: Abstract Luxury Digital Interface Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative halo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37]/20 via-[#C5A059]/10 to-transparent rounded-2xl blur-xl opacity-50" />

              {/* Main Luxury Glass Card */}
              <div className="relative rounded-2xl bg-[#131317]/90 border border-white/10 backdrop-blur-xl p-5 shadow-2xl space-y-4 animate-float-subtle">
                {/* Interface Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <span className="text-[11px] font-mono text-[#A6A39D] ml-2">
                      viewport-engine.ts
                    </span>
                  </div>

                  {/* Responsive Viewport Switcher */}
                  <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-white/5">
                    <button
                      onClick={() => setPreviewViewport('desktop')}
                      className={`p-1 rounded transition-colors ${
                        previewViewport === 'desktop' ? 'bg-[#D4AF37] text-black' : 'text-[#A6A39D] hover:text-white'
                      }`}
                      title="Desktop Layout"
                    >
                      <Monitor className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setPreviewViewport('tablet')}
                      className={`p-1 rounded transition-colors ${
                        previewViewport === 'tablet' ? 'bg-[#D4AF37] text-black' : 'text-[#A6A39D] hover:text-white'
                      }`}
                      title="Tablet Layout"
                    >
                      <Tablet className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setPreviewViewport('mobile')}
                      className={`p-1 rounded transition-colors ${
                        previewViewport === 'mobile' ? 'bg-[#D4AF37] text-black' : 'text-[#A6A39D] hover:text-white'
                      }`}
                      title="Mobile Layout"
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Simulated Interactive Architecture Canvas */}
                <div
                  className={`mx-auto transition-all duration-300 bg-[#0B0B0D] rounded-xl border border-white/10 p-4 space-y-3 ${
                    previewViewport === 'desktop'
                      ? 'w-full'
                      : previewViewport === 'tablet'
                      ? 'w-[85%]'
                      : 'w-[68%]'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-serif tracking-wider text-[#F5F3EF] uppercase font-semibold">
                      Dur E Pakeeza
                    </span>
                    <span className="text-[#D4AF37] font-mono text-[10px]">
                      {previewViewport === 'desktop' ? '1440 × 900' : previewViewport === 'tablet' ? '768 × 1024' : '375 × 812'}
                    </span>
                  </div>

                  {/* Mini UI Layout Grid */}
                  <div className="space-y-2">
                    <div className="h-10 rounded bg-gradient-to-r from-white/[0.04] to-white/[0.08] border border-white/5 p-2 flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="w-20 h-1.5 rounded bg-[#D4AF37]/60" />
                        <div className="w-12 h-1 rounded bg-white/20" />
                      </div>
                      <div className="w-4 h-4 rounded-full border border-[#D4AF37]/50" />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-12 rounded bg-white/[0.03] border border-white/5 p-2 flex flex-col justify-between">
                        <div className="w-14 h-1.5 rounded bg-white/30" />
                        <div className="w-8 h-1 rounded bg-[#D4AF37]/40" />
                      </div>
                      <div className="h-12 rounded bg-white/[0.03] border border-white/5 p-2 flex flex-col justify-between">
                        <div className="w-10 h-1.5 rounded bg-white/30" />
                        <div className="w-12 h-1 rounded bg-[#D4AF37]/40" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Core Web Vitals Micro Banner */}
                <div className="pt-2 grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5">
                    <span className="block font-serif font-bold text-sm text-[#D4AF37]">99</span>
                    <span className="text-[10px] text-[#A6A39D]">PageSpeed</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5">
                    <span className="block font-serif font-bold text-sm text-[#D4AF37]">0.00</span>
                    <span className="text-[10px] text-[#A6A39D]">CLS Shift</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5">
                    <span className="block font-serif font-bold text-sm text-[#D4AF37]">100%</span>
                    <span className="text-[10px] text-[#A6A39D]">Responsive</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Claim-to-Proof Adjacency Strip below the Hero Split */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {STATS.map((stat, idx) => (
            <div key={idx} className="space-y-1 group">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#F5F3EF] group-hover:text-[#D4AF37] transition-colors duration-200">
                {stat.number}
              </div>
              <div className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold font-sans">
                {stat.label}
              </div>
              <div className="text-[11px] text-[#A6A39D] leading-normal">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
