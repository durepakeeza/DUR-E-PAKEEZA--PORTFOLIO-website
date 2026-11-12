import React from 'react';

interface BrandLogoProps {
  variant?: 'navbar' | 'footer' | 'large';
  showSubtitle?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'navbar',
  showSubtitle = true,
  className = ''
}) => {
  const isLarge = variant === 'large';
  const isFooter = variant === 'footer';

  return (
    <div className={`flex items-center gap-3 select-none group ${className}`}>
      {/* Refined DP Monogram Mark */}
      <div
        className={`relative flex items-center justify-center shrink-0 rounded-lg transition-transform duration-300 group-hover:scale-105 ${
          isLarge
            ? 'w-12 h-12 border border-[#D4AF37]/40 bg-[#16161A]/80 shadow-[0_0_20px_rgba(212,175,55,0.15)]'
            : isFooter
            ? 'w-10 h-10 border border-[#D4AF37]/35 bg-[#141418]'
            : 'w-9 h-9 border border-[#D4AF37]/30 bg-[#141418]'
        }`}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full p-1.5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5E4B5" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#9C7A28" />
            </linearGradient>
            <linearGradient id="goldLine" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9C7A28" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#F5E4B5" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Elegant geometric frame */}
          <rect
            x="8"
            y="8"
            width="84"
            height="84"
            rx="12"
            stroke="url(#goldLine)"
            strokeWidth="1.5"
            strokeDasharray="180 8"
          />

          {/* Letter 'D' architectural stem and arch */}
          <path
            d="M 28 26 L 46 26 C 60 26 68 34 68 50 C 68 66 60 74 46 74 L 28 74 Z"
            stroke="url(#goldGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Inner vertical serif spine */}
          <line
            x1="36"
            y1="26"
            x2="36"
            y2="74"
            stroke="url(#goldGrad)"
            strokeWidth="1.75"
          />

          {/* Letter 'P' subtle intersecting loop */}
          <path
            d="M 46 26 L 56 26 C 66 26 72 32 72 43 C 72 54 66 60 56 60 L 46 60"
            stroke="url(#goldGrad)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Micro diamond center accent */}
          <polygon
            points="50,48 53,51 50,54 47,51"
            fill="url(#goldGrad)"
          />
        </svg>
      </div>

      {/* Brand Wordmark */}
      <div className="flex flex-col text-left">
        <span
          className={`font-serif tracking-widest uppercase transition-colors duration-200 group-hover:text-[#F5E4B5] ${
            isLarge
              ? 'text-2xl font-semibold text-[#F5F3EF]'
              : isFooter
              ? 'text-lg font-semibold text-[#F5F3EF]'
              : 'text-base font-semibold text-[#F5F3EF]'
          }`}
        >
          Dur E Pakeeza
        </span>
        {showSubtitle && (
          <span className="text-[10px] tracking-[0.22em] uppercase text-[#C5A059] font-medium font-sans">
            Frontend · WordPress
          </span>
        )}
      </div>
    </div>
  );
};
