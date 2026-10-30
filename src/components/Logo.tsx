import React, { useState } from 'react';
import { IMAGES } from '../data/content';

interface LogoProps {
  variant?: 'light' | 'dark' | 'monogram-only';
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'dark', className = '', onClick }) => {
  const isLight = variant === 'light';
  const [imageError, setImageError] = useState(false);

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-3 select-none cursor-pointer group transition-opacity hover:opacity-95 ${className}`}
      role="banner"
      title="Jeffus Recruitment Solutions, LLC."
    >
      {!imageError ? (
        <div
          className={`flex items-center justify-center transition-transform duration-200 group-hover:scale-[1.02] ${
            isLight
              ? 'bg-white/95 p-1.5 rounded-lg shadow-sm border border-[#C5A059]/40'
              : ''
          }`}
        >
          <img
            src={IMAGES.logo}
            alt="Jeffus Recruitment Solutions, LLC."
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="h-10 sm:h-12 w-auto max-w-[200px] sm:max-w-[240px] object-contain"
          />
        </div>
      ) : (
        /* Fallback Monogram & Text if network image is unavailable */
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-[#0B1B3D] border border-[#C5A059]/50 shadow-sm">
            <span className="font-serif-brand font-semibold text-[#C5A059] text-base tracking-tight">
              BDJ
            </span>
          </div>
          <div className="flex flex-col text-left">
            <span
              className={`font-serif-brand font-bold text-base sm:text-lg tracking-tight leading-none ${
                isLight ? 'text-white' : 'text-[#0B1B3D]'
              }`}
            >
              Jeffus Recruitment
            </span>
            <span
              className={`text-[10px] sm:text-[11px] font-sans font-medium tracking-[0.14em] uppercase mt-1 leading-none ${
                isLight ? 'text-[#C5A059]' : 'text-[#8C6E33]'
              }`}
            >
              Solutions, LLC.
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
