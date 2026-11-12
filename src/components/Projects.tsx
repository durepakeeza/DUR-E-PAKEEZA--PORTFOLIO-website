import React from 'react';
import { ArrowUpRight, Eye, Sparkles, Layers } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';

interface ProjectsProps {
  onOpenProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenProject }) => {
  return (
    <section id="projects" className="py-24 md:py-32 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-sans font-medium flex items-center gap-2">
              <span>Curated Portfolio</span>
              <span className="text-white/20">·</span>
              <span>Selected Works</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#F5F3EF] tracking-tight">
              Featured Case Studies & Applications
            </h2>
          </div>

          <div className="text-xs text-[#A6A39D] font-mono flex items-center gap-2">
            <span>Showing 03 Signature Projects</span>
            <span className="text-white/20">/</span>
            <span className="text-[#D4AF37]">Click to Inspect</span>
          </div>
        </div>

        {/* Projects Showcase Grid */}
        <div className="space-y-16 lg:space-y-24">
          {PROJECTS.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center group`}
              >
                {/* Media Mockup Column */}
                <div
                  className={`lg:col-span-7 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div
                    onClick={() => onOpenProject(project)}
                    className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#111115] cursor-pointer shadow-xl transition-all duration-500 hover:border-[#D4AF37]/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
                  >
                    {/* Project Number Watermark */}
                    <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 font-mono text-xs font-semibold text-[#D4AF37]">
                      {project.number}
                    </div>

                    {/* Interactive Overlay Hover Cue */}
                    <div className="absolute inset-0 z-10 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#D4AF37] text-[#0B0B0D] text-xs font-semibold shadow-lg">
                        <Eye className="w-4 h-4" />
                        <span>Open Case Study & Live Simulator</span>
                      </div>
                    </div>

                    {/* Unique Image Mockup */}
                    <div className="aspect-video w-full overflow-hidden bg-[#0B0B0D]">
                      <img
                        src={project.image}
                        alt={project.alt}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>

                {/* Narrative Details Column */}
                <div
                  className={`lg:col-span-5 space-y-6 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-[#C5A059] font-mono uppercase tracking-wider">
                      <span>{project.client}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.year}</span>
                    </div>

                    <h3
                      onClick={() => onOpenProject(project)}
                      className="text-2xl sm:text-3xl font-serif font-bold text-[#F5F3EF] hover:text-[#D4AF37] transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>

                    <p className="text-xs text-[#D4AF37] font-medium tracking-wide">
                      {project.category}
                    </p>
                  </div>

                  <p className="text-sm text-[#A6A39D] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Unboxed Technology Stack List */}
                  <div className="space-y-2 pt-1">
                    <div className="text-[11px] uppercase tracking-wider text-white/40 font-mono">
                      Technologies
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#E8E5DF]">
                      {project.technologies.map((tech, tIdx) => (
                        <React.Fragment key={tIdx}>
                          <span className="font-mono text-[#F5F3EF] bg-white/[0.04] px-2.5 py-1 rounded border border-white/10 text-[11px]">
                            {tech}
                          </span>
                          {tIdx < project.technologies.length - 1 && (
                            <span className="text-white/20">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Metrics snippet */}
                  <div className="grid grid-cols-2 gap-4 py-3 border-y border-white/5 text-xs">
                    <div>
                      <span className="block font-serif font-bold text-lg text-[#D4AF37]">
                        {project.metrics[0].value}
                      </span>
                      <span className="text-[11px] text-[#A6A39D]">
                        {project.metrics[0].label}
                      </span>
                    </div>
                    <div>
                      <span className="block font-serif font-bold text-lg text-[#D4AF37]">
                        {project.metrics[1].value}
                      </span>
                      <span className="text-[11px] text-[#A6A39D]">
                        {project.metrics[1].label}
                      </span>
                    </div>
                  </div>

                  {/* Dual Action Buttons: View Project & Case Study */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => onOpenProject(project)}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-[#0B0B0D] bg-[#D4AF37] hover:bg-[#E5C378] active:scale-[0.98] rounded-lg transition-colors shadow-sm"
                    >
                      <span>View Project</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onOpenProject(project)}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium text-[#E8E5DF] hover:text-white bg-white/5 hover:bg-white/10 active:scale-[0.98] border border-white/10 rounded-lg transition-colors"
                    >
                      <Layers className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Case Study</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
