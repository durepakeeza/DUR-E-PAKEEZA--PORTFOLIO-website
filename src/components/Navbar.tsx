import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  onResumeClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onResumeClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Simple active section detection
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[#0B0B0D]/90 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'py-5 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark & Monogram */}
            <a
              href="#hero"
              onClick={(e) => handleSmoothScroll(e, '#hero')}
              className="outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-lg"
              aria-label="Dur E Pakeeza Homepage"
            >
              <BrandLogo variant={isScrolled ? 'navbar' : 'large'} />
            </a>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav className="hidden md:flex items-center gap-7 text-xs font-medium tracking-wide">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className={`relative py-1 whitespace-nowrap transition-colors duration-200 ${
                      isActive
                        ? 'text-[#F5F3EF]'
                        : 'text-[#A6A39D] hover:text-[#F5F3EF]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#D4AF37] rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Zone 3: Primary Action Button (Resume) + Mobile Menu Toggle */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={onResumeClick}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-[#0B0B0D] bg-[#D4AF37] hover:bg-[#E5C378] active:scale-[0.98] rounded-lg transition-all duration-200 shadow-sm"
              >
                <FileText className="w-3.5 h-3.5" />
                <span className="whitespace-nowrap">Resume</span>
              </button>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-[#A6A39D] hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden animate-fadeIn">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-16 right-0 bottom-0 w-3/4 max-w-xs bg-[#111115] border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl">
            <div className="space-y-6 pt-4">
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] font-mono">
                Navigation
              </div>
              <nav className="flex flex-col space-y-3">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.replace('#', '');
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className={`text-base font-serif py-2 px-3 rounded-lg transition-colors flex items-center justify-between ${
                        isActive
                          ? 'text-[#F5F3EF] bg-white/10 font-semibold'
                          : 'text-[#A6A39D] hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />}
                    </a>
                  );
                })}
              </nav>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onResumeClick();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-[#0B0B0D] bg-[#D4AF37] rounded-lg shadow"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Resume</span>
              </button>

              <p className="text-[11px] text-[#A6A39D] text-center">
                durepakeeza2007@gmail.com
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
