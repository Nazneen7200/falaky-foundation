import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * Official Logo Component for Falaky Foundation
 *
 * Displays the official user-provided logo (falaki.jpeg)
 * Preserves original proportions, circular geometry, and links to Home.
 */
export default function Logo({
  height = 46,
  variant = 'header', // 'header' | 'footer'
  showText = true,
  className = ''
}) {
  const [logoLoaded, setLogoLoaded] = useState(true);
  const [currentSrcIndex, setCurrentSrcIndex] = useState(0);

  const candidateLogos = [
    '/logo/falaki.jpeg',
    '/logo/falaki-foundation-logo.png',
    '/images/falaki.jpeg'
  ];

  const handleImageError = () => {
    if (currentSrcIndex < candidateLogos.length - 1) {
      setCurrentSrcIndex((prev) => prev + 1);
    } else {
      setLogoLoaded(false);
    }
  };

  const isFooter = variant === 'footer';

  return (
    <Link
      to="/"
      className={`falaki-logo-link ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.85rem',
        textDecoration: 'none',
        color: 'inherit'
      }}
      aria-label="Falaky Foundation Home"
    >
      {logoLoaded ? (
        <img
          src={candidateLogos[currentSrcIndex]}
          alt="Falaky Foundation Logo"
          onError={handleImageError}
          style={{
            height: `${height}px`,
            width: `${height}px`,
            objectFit: 'contain',
            borderRadius: '50%',
            display: 'block',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
            border: '1.5px solid rgba(198, 164, 91, 0.55)',
            flexShrink: 0
          }}
        />
      ) : (
        <div
          style={{
            width: `${height}px`,
            height: `${height}px`,
            borderRadius: '50%',
            backgroundColor: '#103C32',
            border: '1.5px solid #C6A45B',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 10px rgba(198, 164, 91, 0.2)',
            flexShrink: 0
          }}
        >
          <svg width={height * 0.6} height={height * 0.6} viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="14" stroke="#C6A45B" strokeWidth="1" strokeDasharray="1.5 2" />
            <polygon points="16,4 17.5,12 25,12 19,16.5 21,24 16,19.5 11,24 13,16.5 7,12 14.5,12" fill="#C6A45B" />
          </svg>
        </div>
      )}

      {showText && (
        <div>
          <div
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: isFooter ? '1.18rem' : '1.25rem',
              fontWeight: 700,
              letterSpacing: '0.06em',
              color: '#F8F5EC',
              lineHeight: 1.15
            }}
          >
            FALAKY <span style={{ color: '#C6A45B' }}>FOUNDATION</span>
          </div>
          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: isFooter ? '0.74rem' : '0.78rem',
              color: 'rgba(198, 164, 91, 0.95)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontWeight: 500,
              marginTop: '3px'
            }}
          >
            Honouring Scholarly Excellence
          </div>
        </div>
      )}
    </Link>
  );
}
