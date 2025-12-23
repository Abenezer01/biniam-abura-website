import React from 'react';

interface TiletPatternProps {
  className?: string;
  opacity?: number;
}

export const TiletPattern: React.FC<TiletPatternProps> = ({ className = "", opacity = 0.05 }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} style={{ opacity }}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="tilet_modern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            {/* Minimalist geometric interpretation of Tilet */}
            <path d="M0 20 L20 0 L40 20 L20 40 Z" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="20" cy="20" r="3" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tilet_modern)" className="text-deep-earth" />
      </svg>
    </div>
  );
};