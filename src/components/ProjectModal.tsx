import React, { useState } from 'react';
import { X, Check, ArrowRight, Eye, Layers, ShieldCheck, ShoppingBag, BookOpen, Sparkles, SlidersHorizontal, Plus, Trash2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onContactClick: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
  onContactClick
}) => {
  const [activeTab, setActiveTab] = useState<'case-study' | 'interactive-demo'>('case-study');

  // Interactive state for E-Commerce demo
  const [cartCount, setCartCount] = useState(1);
  const [cartNotification, setCartNotification] = useState<string | null>(null);
  const [selectedCurrency, setSelectedCurrency] = useState<'USD' | 'EUR' | 'GBP'>('USD');

  // Interactive state for Notes App demo
  const [notes, setNotes] = useState([
    { id: 1, title: 'Project Kickoff Notes', tag: 'Architecture', body: 'Finalize Elementor responsive breakpoints and CSS custom properties.' },
    { id: 2, title: 'Client Feedback - Oct 2024', tag: 'UX Review', body: 'Typography hierarchy approved. Enhance button touch targets on mobile view.' }
  ]);
  const [activeNoteId, setActiveNoteId] = useState(1);
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [newNoteBody, setNewNoteBody] = useState('');

  if (!isOpen || !project) return null;

  const handleAddToCart = (productName: string) => {
    setCartCount((prev) => prev + 1);
    setCartNotification(`Added "${productName}" to shopping bag`);
    setTimeout(() => setCartNotification(null), 2500);
  };

  const handleCreateNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoteTitle.trim()) return;
    const newNote = {
      id: Date.now(),
      title: newNoteTitle,
      tag: 'New Note',
      body: newNoteBody || 'Enter note details here...'
    };
    setNotes([newNote, ...notes]);
    setActiveNoteId(newNote.id);
    setNewNoteTitle('');
    setNewNoteBody('');
  };

  const handleDeleteNote = (id: number) => {
    const remaining = notes.filter((n) => n.id !== id);
    setNotes(remaining);
    if (remaining.length > 0) setActiveNoteId(remaining[0].id);
  };

  const activeNote = notes.find((n) => n.id === activeNoteId);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      <div className="relative w-full max-w-5xl max-h-[92vh] bg-[#111115] border border-white/10 rounded-2xl shadow-2xl overflow-y-auto my-auto flex flex-col text-[#E8E5DF]">
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#111115]/95 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-mono font-semibold">
              Project {project.number}
            </span>
            <span className="text-white/20">/</span>
            <span className="text-xs text-[#A6A39D] truncate max-w-[200px] sm:max-w-none">
              {project.title}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* View switcher tabs */}
            <div className="flex items-center gap-1 p-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium mr-2">
              <button
                onClick={() => setActiveTab('case-study')}
                className={`px-3 py-1 rounded-md transition-colors ${
                  activeTab === 'case-study'
                    ? 'bg-[#D4AF37] text-[#0B0B0D] font-semibold'
                    : 'text-[#A6A39D] hover:text-white'
                }`}
              >
                Case Study
              </button>
              <button
                onClick={() => setActiveTab('interactive-demo')}
                className={`px-3 py-1 rounded-md transition-colors flex items-center gap-1.5 ${
                  activeTab === 'interactive-demo'
                    ? 'bg-[#D4AF37] text-[#0B0B0D] font-semibold'
                    : 'text-[#A6A39D] hover:text-white'
                }`}
              >
                <Sparkles className="w-3 h-3" />
                <span>Live Simulator</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-[#A6A39D] hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab 1: Case Study View */}
        {activeTab === 'case-study' && (
          <div className="p-6 md:p-10 space-y-8">
            {/* Hero Project Title & Meta */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#A6A39D]">
                <span>{project.client}</span>
                <span aria-hidden="true">·</span>
                <span>{project.category}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono text-[#D4AF37]">{project.year}</span>
              </div>

              <h2 id="case-study-title" className="text-2xl md:text-4xl font-serif text-[#F5F3EF] font-bold">
                {project.title}
              </h2>

              <p className="text-base text-[#D4AF37] font-medium max-w-2xl">
                {project.role}
              </p>

              {/* Technologies unboxed list */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-[#E8E5DF]">
                <span className="text-[#A6A39D]">Tech Stack:</span>
                {project.technologies.map((tech, idx) => (
                  <React.Fragment key={idx}>
                    <span className="font-mono text-[#F5F3EF] bg-white/5 px-2 py-0.5 rounded border border-white/10">
                      {tech}
                    </span>
                    {idx < project.technologies.length - 1 && <span className="text-white/20">·</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* High-Fidelity Mockup Container */}
            <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#0B0B0D] group shadow-2xl">
              <img
                src={project.image}
                alt={project.alt}
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[520px] object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111115] via-transparent to-transparent opacity-60 pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/80 bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                <span className="truncate">{project.alt}</span>
                <span className="text-[#D4AF37] font-mono shrink-0 ml-2">High-Res Mockup</span>
              </div>
            </div>

            {/* 3 Metric Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-white/10 py-6">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-2xl md:text-3xl font-serif font-bold text-[#D4AF37]">
                    {m.value}
                  </div>
                  <div className="text-xs text-[#A6A39D]">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Overview / Challenge / Solution Narrative */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
              <div className="space-y-2">
                <h3 className="text-xs uppercase tracking-[0.18em] text-[#D4AF37] font-semibold flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>The Project</span>
                </h3>
                <p className="text-[#A6A39D] leading-relaxed text-xs">
                  {project.overview}
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xs uppercase tracking-[0.18em] text-[#D4AF37] font-semibold flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  <span>The Challenge</span>
                </h3>
                <p className="text-[#A6A39D] leading-relaxed text-xs">
                  {project.challenge}
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xs uppercase tracking-[0.18em] text-[#D4AF37] font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Technical Solution</span>
                </h3>
                <p className="text-[#A6A39D] leading-relaxed text-xs">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Deliverables List */}
            <div className="space-y-3 p-5 rounded-xl bg-white/[0.02] border border-white/5">
              <h4 className="text-xs uppercase tracking-[0.18em] text-[#D4AF37] font-semibold">
                Key Technical Deliverables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#A6A39D]">
                {project.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#D4AF37] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
              <button
                onClick={() => setActiveTab('interactive-demo')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#0B0B0D] bg-[#D4AF37] hover:bg-[#E5C378] rounded-lg transition-colors"
              >
                <Sparkles className="w-4 h-4" />
                <span>Test Interactive Live Simulator</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onContactClick();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-medium text-[#E8E5DF] hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors"
              >
                <span>Inquire About A Similar Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: Interactive Live Demo Simulator */}
        {activeTab === 'interactive-demo' && (
          <div className="p-6 md:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h3 className="text-lg font-serif font-semibold text-[#F5F3EF]">
                  Interactive Component Playground
                </h3>
                <p className="text-xs text-[#A6A39D]">
                  Experience the interactive functionality Dur E Pakeeza built for this project.
                </p>
              </div>
              <span className="text-xs text-[#D4AF37] font-mono bg-[#D4AF37]/10 px-2.5 py-1 rounded border border-[#D4AF37]/20">
                Live Simulation
              </span>
            </div>

            {/* 1. E-Commerce Simulator */}
            {project.liveDemoType === 'ecommerce' && (
              <div className="space-y-6">
                {/* Simulator Top bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-[#0B0B0D] rounded-xl border border-white/10 text-xs">
                  <div className="flex items-center gap-3">
                    <span className="font-serif tracking-widest text-[#F5F3EF] uppercase font-semibold">
                      Aurélia Timepieces
                    </span>
                    <span className="text-white/20">|</span>
                    <span className="text-[#A6A39D]">WooCommerce + Elementor Engine</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <span className="text-[#A6A39D]">Currency:</span>
                      {(['USD', 'EUR', 'GBP'] as const).map((curr) => (
                        <button
                          key={curr}
                          onClick={() => setSelectedCurrency(curr)}
                          className={`px-2 py-0.5 rounded text-[11px] ${
                            selectedCurrency === curr
                              ? 'bg-[#D4AF37] text-black font-semibold'
                              : 'text-[#A6A39D] hover:text-white'
                          }`}
                        >
                          {curr}
                        </button>
                      ))}
                    </div>

                    <div className="relative flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-lg text-white">
                      <ShoppingBag className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Bag ({cartCount})</span>
                    </div>
                  </div>
                </div>

                {cartNotification && (
                  <div className="p-3 bg-emerald-950/80 border border-emerald-500/30 rounded-lg text-xs text-emerald-300 flex items-center justify-between animate-fadeIn">
                    <span>{cartNotification}</span>
                    <Check className="w-4 h-4 text-emerald-400" />
                  </div>
                )}

                {/* Product catalog cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
                  {[
                    { name: 'Aethel Chrono Grand Complication', price: 4200, category: 'Handcrafted Timepiece', year: 'Limited 50' },
                    { name: 'Elowen Solid Gold Signature Ring', price: 1350, category: '18k Yellow Gold', year: 'Artisan Finish' },
                    { name: 'Vesper Brushed Cuff Bangle', price: 1200, category: 'Satin Finish Metal', year: 'Custom Sized' }
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#D4AF37]/30 transition-colors flex flex-col justify-between space-y-4"
                    >
                      <div className="space-y-1.5">
                        <span className="text-[10px] uppercase tracking-wider text-[#A6A39D]">
                          {item.category}
                        </span>
                        <h4 className="font-serif text-sm font-semibold text-[#F5F3EF]">
                          {item.name}
                        </h4>
                        <span className="text-xs text-[#A6A39D] block">
                          {item.year}
                        </span>
                      </div>

                      <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                        <span className="font-mono text-sm text-[#D4AF37] font-semibold">
                          {selectedCurrency === 'USD' ? '$' : selectedCurrency === 'EUR' ? '€' : '£'}
                          {selectedCurrency === 'USD' ? item.price : Math.round(item.price * 0.92)}
                        </span>
                        <button
                          onClick={() => handleAddToCart(item.name)}
                          className="px-3 py-1 text-xs bg-[#D4AF37]/15 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-black rounded border border-[#D4AF37]/30 transition-colors font-medium"
                        >
                          Add to Bag
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-[#A6A39D] space-y-1">
                  <span className="text-[#D4AF37] font-medium block">Key Engineering Highlights:</span>
                  <p>
                    Built with Elementor Pro dynamic query loops, custom AJAX drawer controllers, and instant currency conversions without page reloads.
                  </p>
                </div>
              </div>
            )}

            {/* 2. Portfolio Simulator */}
            {project.liveDemoType === 'portfolio' && (
              <div className="space-y-6">
                <div className="p-4 bg-[#0B0B0D] rounded-xl border border-white/10 text-xs flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="font-serif tracking-widest text-[#F5F3EF] uppercase font-semibold">
                      Studio Aeterna Architecture
                    </span>
                  </div>
                  <span className="text-xs text-[#A6A39D]">Elementor Pro Custom Archive Framework</span>
                </div>

                {/* Monograph Preview Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-3">
                    <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-mono">
                      Residential · Marfa, Texas
                    </span>
                    <h4 className="font-serif text-lg font-semibold text-[#F5F3EF]">
                      Casa Selene: Monolithic Concrete & Desert Horizon
                    </h4>
                    <p className="text-[#A6A39D] leading-relaxed">
                      A residence integrated into the high desert landscape, defining a harmonious relationship between monolithic board-formed concrete and the sky.
                    </p>
                    <div className="flex items-center gap-3 pt-2 text-[11px] text-[#A6A39D] border-t border-white/5">
                      <span>Area: 4,200 sq ft</span>
                      <span>·</span>
                      <span>Completed: 2023</span>
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-3">
                    <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-mono">
                      Civic · Aspen, Colorado
                    </span>
                    <h4 className="font-serif text-lg font-semibold text-[#F5F3EF]">
                      The Observatory: Timber Cantilever Over Alpine Crest
                    </h4>
                    <p className="text-[#A6A39D] leading-relaxed">
                      Engineered alpine pavilion featuring charred cedar rainscreens and triple-glazed curtain walls capturing 360-degree mountain vistas.
                    </p>
                    <div className="flex items-center gap-3 pt-2 text-[11px] text-[#A6A39D] border-t border-white/5">
                      <span>Elevation: 9,400 ft</span>
                      <span>·</span>
                      <span>Completed: 2024</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-[#A6A39D]">
                  <span className="text-[#D4AF37] font-medium block pb-1">Fluid Typography Scaling:</span>
                  <p>
                    Utilizes clamp(1.25rem, 3vw, 2.5rem) custom CSS math ensuring proportional headline presence across 320px mobile screens to 3840px 4K displays with zero layout shift.
                  </p>
                </div>
              </div>
            )}

            {/* 3. Notes Taking App Simulator */}
            {project.liveDemoType === 'notes' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Notes Sidebar list */}
                  <div className="md:col-span-1 p-3 bg-[#0B0B0D] rounded-xl border border-white/10 space-y-3 text-xs">
                    <div className="flex items-center justify-between pb-2 border-b border-white/10">
                      <span className="font-medium text-[#F5F3EF]">Notebooks</span>
                      <span className="font-mono text-[#D4AF37]">{notes.length} Notes</span>
                    </div>

                    <div className="space-y-1.5 max-h-[220px] overflow-y-auto">
                      {notes.map((n) => (
                        <div
                          key={n.id}
                          onClick={() => setActiveNoteId(n.id)}
                          className={`p-2.5 rounded-lg cursor-pointer transition-colors flex items-center justify-between ${
                            n.id === activeNoteId
                              ? 'bg-white/10 border border-[#D4AF37]/30 text-white'
                              : 'text-[#A6A39D] hover:bg-white/5'
                          }`}
                        >
                          <div className="truncate pr-2">
                            <span className="font-medium block truncate text-[#F5F3EF]">{n.title}</span>
                            <span className="text-[10px] text-[#D4AF37]">{n.tag}</span>
                          </div>
                          {notes.length > 1 && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDeleteNote(n.id);
                              }}
                              className="text-white/30 hover:text-rose-400 p-1"
                              title="Delete note"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Active Note Preview & Editor */}
                  <div className="md:col-span-2 p-4 bg-[#0B0B0D] rounded-xl border border-white/10 space-y-3 text-xs flex flex-col justify-between">
                    {activeNote ? (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between border-b border-white/10 pb-2">
                          <h4 className="font-serif text-base font-semibold text-[#F5F3EF]">
                            {activeNote.title}
                          </h4>
                          <span className="px-2 py-0.5 rounded text-[10px] bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30">
                            {activeNote.tag}
                          </span>
                        </div>
                        <p className="text-[#A6A39D] leading-relaxed whitespace-pre-wrap font-mono text-xs">
                          {activeNote.body}
                        </p>
                      </div>
                    ) : (
                      <p className="text-[#A6A39D]">Select a note or create one below.</p>
                    )}

                    {/* Quick Add Form */}
                    <form onSubmit={handleCreateNote} className="space-y-2 pt-3 border-t border-white/10">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="New note title..."
                          value={newNoteTitle}
                          onChange={(e) => setNewNoteTitle(e.target.value)}
                          className="flex-1 px-3 py-1.5 rounded bg-white/5 border border-white/10 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37]"
                        />
                        <button
                          type="submit"
                          className="px-3 py-1.5 bg-[#D4AF37] hover:bg-[#E5C378] text-black font-semibold rounded text-xs transition-colors flex items-center gap-1 shrink-0"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add Note</span>
                        </button>
                      </div>
                      <input
                        type="text"
                        placeholder="Note content..."
                        value={newNoteBody}
                        onChange={(e) => setNewNoteBody(e.target.value)}
                        className="w-full px-3 py-1.5 rounded bg-white/5 border border-white/10 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37]"
                      />
                    </form>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-[#A6A39D]">
                  <span className="text-[#D4AF37] font-medium block">Pure Vanilla Engineering:</span>
                  <p>
                    Demonstrates lightweight DOM synchronization, zero third-party dependencies, sub-5ms keystroke latency, and complete keyboard navigation accessibility.
                  </p>
                </div>
              </div>
            )}

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveTab('case-study')}
                className="text-xs text-[#D4AF37] hover:underline"
              >
                ← Return to Case Study details
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
