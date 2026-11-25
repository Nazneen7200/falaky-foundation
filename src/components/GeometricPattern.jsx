import React from 'react';

/**
 * GeometricPattern — Subtle Islamic geometric motif divider
 */
export default function GeometricPattern({ className = "", opacity = 0.6, width = 120, height = 24 }) {
  return (
    <div className={`geometric-pattern-container ${className}`} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 120 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity }}
        aria-hidden="true"
      >
        <line x1="0" y1="12" x2="42" y2="12" stroke="#C6A45B" strokeWidth="1" strokeDasharray="3 3" />
        {/* Central 8-Point Star / Astrolabe rosette */}
        <polygon points="60,3 62.5,9.5 69,7 66.5,13.5 73,12 66.5,14.5 69,21 62.5,18.5 60,25 57.5,18.5 51,21 53.5,14.5 47,12 53.5,9.5 51,7 57.5,9.5" fill="#C6A45B" />
        <circle cx="60" cy="12" r="2.5" fill="#103C32" />
        <line x1="78" y1="12" x2="120" y2="12" stroke="#C6A45B" strokeWidth="1" strokeDasharray="3 3" />
      </svg>
    </div>
  );
}
