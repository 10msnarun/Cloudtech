import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtext?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
}) => {
  // Size classes for responsive heights maintaining exact aspect ratio
  const heightClasses = {
    sm: 'h-9 md:h-10',
    md: 'h-11 md:h-12',
    lg: 'h-14 md:h-16',
  };

  return (
    <a
      href="#home"
      aria-label="CloudTech Home"
      className={`inline-flex items-center group transition-transform duration-200 active:scale-98 ${className}`}
    >
      <div className="relative flex items-center overflow-hidden rounded-md bg-[#050B18]">
        <img
          src="/assets/aistudio/WhatsApp_Image_2026-10-26_at_3.47.09_PM_5e2358ba.jpeg"
          alt="CloudTech - AWS Cloud Consulting Services Logo"
          className={`${heightClasses[size]} w-auto object-contain transition-opacity duration-300 group-hover:opacity-95`}
          loading="eager"
        />
        {/* Subtle cyan ambient glow on hover */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-cyan-400 blur-md rounded"
        />
      </div>
    </a>
  );
};
