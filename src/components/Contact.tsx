import React, { useState } from 'react';
import { Mail, Send, Check, Copy, ExternalLink, MessageSquare, AlertCircle, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'WordPress & Elementor Development',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const projectTypes = [
    'WordPress & Elementor Development',
    'Custom Frontend (HTML/CSS/JS)',
    'E-Commerce & WooCommerce',
    'Landing Page & Conversion Design',
    'Website Speed & Performance Optimization',
    'Full-Time / Contract Role'
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please share a brief message or project brief';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Please provide at least 10 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form fields
      setFormData({
        name: '',
        email: '',
        projectType: 'WordPress & Elementor Development',
        message: ''
      });
    }, 900);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative & Contact Touchpoints */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-sans font-medium flex items-center gap-2">
                <span>Inquiries & Collaborations</span>
                <span className="text-white/20">·</span>
                <span>Get In Touch</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#F5F3EF] tracking-tight">
                Let's Build Something Great
              </h2>
              <p className="text-sm sm:text-base text-[#A6A39D] leading-relaxed pt-1">
                Have a project in mind or looking for a frontend developer? Let's talk.
              </p>
            </div>

            {/* Direct Email Card with One-Click Copy */}
            <div className="p-6 rounded-2xl bg-[#131317]/80 border border-white/5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-mono">
                  Direct Inquiries
                </span>
                <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Available</span>
                </span>
              </div>

              <div className="space-y-1">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-serif text-lg sm:text-xl font-semibold text-[#F5F3EF] hover:text-[#D4AF37] transition-colors break-all block"
                >
                  {PERSONAL_INFO.email}
                </a>
                <p className="text-xs text-[#A6A39D]">
                  Response time: Usually within 24 hours
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#E8E5DF] hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#0B0B0D] bg-[#D4AF37] hover:bg-[#E5C378] rounded-lg transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Mail</span>
                </a>
              </div>
            </div>

            {/* Professional Profiles */}
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-wider text-[#A6A39D] font-mono block">
                Professional Networks
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#D4AF37]/40 transition-colors flex items-center justify-between group"
                >
                  <div>
                    <span className="text-xs font-semibold text-[#F5F3EF] block group-hover:text-[#D4AF37] transition-colors">
                      LinkedIn
                    </span>
                    <span className="text-[11px] text-[#A6A39D]">
                      Professional Profile
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#A6A39D] group-hover:text-[#D4AF37] transition-colors" />
                </a>

                <a
                  href={PERSONAL_INFO.behanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#D4AF37]/40 transition-colors flex items-center justify-between group"
                >
                  <div>
                    <span className="text-xs font-semibold text-[#F5F3EF] block group-hover:text-[#D4AF37] transition-colors">
                      Behance
                    </span>
                    <span className="text-[11px] text-[#A6A39D]">
                      Design Portfolio
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#A6A39D] group-hover:text-[#D4AF37] transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#131317]/90 border border-white/10 shadow-2xl relative">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center mx-auto text-[#D4AF37]">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#F5F3EF]">
                    Message Transmitted Successfully
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A6A39D] max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. Dur E Pakeeza will review your project brief and respond promptly via <span className="text-[#D4AF37]">{PERSONAL_INFO.email}</span>.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-5 py-2 text-xs font-medium text-[#E8E5DF] hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="space-y-1">
                    <h3 className="font-serif text-xl font-semibold text-[#F5F3EF]">
                      Project Inquiry Form
                    </h3>
                    <p className="text-xs text-[#A6A39D]">
                      Fill out the details below to discuss your timeline, scope, and technical requirements.
                    </p>
                  </div>

                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-medium text-[#E8E5DF]">
                      Your Name <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="e.g. Eleanor Vance"
                      className={`w-full px-4 py-2.5 rounded-lg bg-black/40 border text-xs text-[#F5F3EF] placeholder-white/30 transition-colors focus:outline-none ${
                        errors.name
                          ? 'border-rose-500 focus:border-rose-400'
                          : 'border-white/10 focus:border-[#D4AF37]'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-medium text-[#E8E5DF]">
                      Your Email Address <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="e.g. eleanor@studio.com"
                      className={`w-full px-4 py-2.5 rounded-lg bg-black/40 border text-xs text-[#F5F3EF] placeholder-white/30 transition-colors focus:outline-none ${
                        errors.email
                          ? 'border-rose-500 focus:border-rose-400'
                          : 'border-white/10 focus:border-[#D4AF37]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Project Type Selector */}
                  <div className="space-y-1.5">
                    <label htmlFor="projectType" className="block text-xs font-medium text-[#E8E5DF]">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({ ...formData, projectType: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-lg bg-[#0B0B0D] border border-white/10 text-xs text-[#F5F3EF] transition-colors focus:outline-none focus:border-[#D4AF37]"
                    >
                      {projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-[#111115] text-[#F5F3EF]">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message Textarea */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-medium text-[#E8E5DF]">
                      Project Brief / Message <span className="text-[#D4AF37]">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      placeholder="Share project goals, pages needed, design references, or timeline..."
                      className={`w-full px-4 py-2.5 rounded-lg bg-black/40 border text-xs text-[#F5F3EF] placeholder-white/30 transition-colors focus:outline-none resize-none ${
                        errors.message
                          ? 'border-rose-500 focus:border-rose-400'
                          : 'border-white/10 focus:border-[#D4AF37]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-lg bg-[#D4AF37] hover:bg-[#E5C378] active:scale-[0.99] text-[#0B0B0D] font-semibold text-xs uppercase tracking-wider transition-all duration-200 shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          <span>Dispatching Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
