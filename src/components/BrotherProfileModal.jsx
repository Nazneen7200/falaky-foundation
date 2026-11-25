import React, { useEffect, useState } from 'react';
import { X, Calendar, BookOpen, GraduationCap, Languages } from 'lucide-react';

/**
 * BrotherProfileModal
 * Displays full bilingual biography for Falaky Muhammed Moulavi,
 * Falaky Aboobackar Moulavi, or Dr. P. M. Abdurahiman.
 */
export default function BrotherProfileModal({ profile, onClose, initialLang = 'en' }) {
  const [lang, setLang] = useState(initialLang);

  // Close on Escape key press & prevent background scrolling
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!profile) return null;

  const isMl = lang === 'ml';
  const bio = isMl ? profile.biographyMl : profile.biographyEn;
  const name = isMl ? profile.nameMl : profile.nameEn;
  const role = isMl ? profile.roleMl : profile.roleEn;

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(7, 30, 26, 0.85)',
        backdropFilter: 'blur(6px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '10px',
          border: '1.5px solid #C6A45B',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.45)',
          maxWidth: '820px',
          width: '100%',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          style={{
            backgroundColor: '#0B2924',
            color: '#F8F5EC',
            padding: '1.25rem 1.75rem',
            borderBottom: '1px solid rgba(198, 164, 91, 0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', minWidth: 0 }}>
            <div
              style={{
                width: '58px',
                height: '58px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid #C6A45B',
                backgroundColor: '#071E1A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <img
                src={profile.image}
                alt={profile.nameEn}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
                onError={(e) => {
                  if (profile.fallbackImage) e.currentTarget.src = profile.fallbackImage;
                }}
              />
            </div>

            <div style={{ minWidth: 0 }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '0.5rem' }}>
                <h3
                  style={{
                    color: '#FFFFFF',
                    fontSize: '1.25rem',
                    margin: 0,
                    fontFamily: isMl ? 'var(--font-malayalam)' : 'var(--font-heading)',
                    fontWeight: 700
                  }}
                >
                  {name}
                </h3>
                <span
                  style={{
                    fontSize: '0.85rem',
                    color: '#C6A45B',
                    fontWeight: 600,
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  [{profile.lifespan}]
                </span>
              </div>

              <div
                style={{
                  fontSize: '0.82rem',
                  color: '#D4DDD9',
                  marginTop: '2px',
                  fontFamily: isMl ? 'var(--font-malayalam)' : 'var(--font-body)'
                }}
              >
                {role}
              </div>
            </div>
          </div>

          {/* Controls: Language Switch + Close Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
            {/* Language Switcher Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                padding: '3px',
                borderRadius: '20px',
                border: '1px solid rgba(198, 164, 91, 0.4)'
              }}
            >
              <button
                type="button"
                onClick={() => setLang('en')}
                style={{
                  padding: '4px 10px',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  borderRadius: '16px',
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor: !isMl ? '#C6A45B' : 'transparent',
                  color: !isMl ? '#0B2924' : '#E5D29E',
                  transition: 'all 0.2s ease'
                }}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLang('ml')}
                style={{
                  padding: '4px 10px',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  borderRadius: '16px',
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor: isMl ? '#C6A45B' : 'transparent',
                  color: isMl ? '#0B2924' : '#E5D29E',
                  fontFamily: 'var(--font-malayalam)',
                  transition: 'all 0.2s ease'
                }}
              >
                മലയാളം
              </button>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(198, 164, 91, 0.4)',
                color: '#F8F5EC',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#C6A45B';
                e.currentTarget.style.color = '#0B2924';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.color = '#F8F5EC';
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Body: Scrollable Verified Content */}
        <div
          style={{
            padding: '2rem',
            overflowY: 'auto',
            backgroundColor: '#FAF8F3',
            fontFamily: isMl ? 'var(--font-malayalam)' : 'var(--font-body)',
            lineHeight: isMl ? 1.85 : 1.75
          }}
        >
          {/* Introductory Summary Callout */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderLeft: '4px solid #C6A45B',
              padding: '1.25rem 1.5rem',
              borderRadius: '0 6px 6px 0',
              marginBottom: '2rem',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <div
              style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#8F7234',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '0.35rem'
              }}
            >
              {isMl ? 'ജീവചരിത്ര സംഗ്രഹം' : 'Biographical Summary'}
            </div>
            <p
              style={{
                fontSize: '0.98rem',
                color: 'var(--color-charcoal)',
                margin: 0,
                fontWeight: 500
              }}
            >
              {isMl ? profile.introMl : profile.introEn}
            </p>
          </div>

          {/* Sections List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {bio && bio.sections && bio.sections.map((sec, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '1.5rem',
                  borderRadius: '6px',
                  border: '1px solid #ECE2CD',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <h4
                  style={{
                    fontSize: '1.12rem',
                    color: '#103C32',
                    marginBottom: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontFamily: isMl ? 'var(--font-malayalam)' : 'var(--font-heading)'
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: '#C6A45B'
                    }}
                  />
                  {sec.heading}
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {sec.content.map((paragraph, pIdx) => (
                    <p
                      key={pIdx}
                      style={{
                        margin: 0,
                        fontSize: '0.95rem',
                        color: 'var(--color-charcoal-light)'
                      }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div
          style={{
            padding: '1rem 1.75rem',
            backgroundColor: '#FFFFFF',
            borderTop: '1px solid #EAE1D0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.82rem',
            color: 'var(--color-charcoal-muted)'
          }}
        >
          <div>
            {isMl
              ? 'ഫലക്കി ഫൗണ്ടേഷൻ ചരിത്ര രേഖകളിൽ നിന്ന് സ്ഥിരീകരിച്ച വിവരങ്ങൾ'
              : 'Verified records preserved by Falaky Foundation'}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="btn btn-primary"
            style={{ padding: '0.45rem 1.25rem', fontSize: '0.84rem' }}
          >
            {isMl ? 'അടയ്ക്കുക' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
}
