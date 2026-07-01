import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-8" }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="20" y="20" width="60" height="60" rx="12" fill="url(#paint0_linear)" fillOpacity="0.1" stroke="url(#paint1_linear)" strokeWidth="4"/>
    <path d="M35 35L65 65M65 35L35 65" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
    <circle cx="50" cy="50" r="8" fill="currentColor"/>
    <defs>
      <linearGradient id="paint0_linear" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="#60A5FA" />
        <stop offset="1" stopColor="#4F46E5" />
      </linearGradient>
      <linearGradient id="paint1_linear" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="#60A5FA" />
        <stop offset="1" stopColor="#4F46E5" />
      </linearGradient>
    </defs>
  </svg>
);
