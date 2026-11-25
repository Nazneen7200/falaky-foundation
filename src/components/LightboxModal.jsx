import React, { useEffect } from 'react';
import { X, CheckCircle, AlertCircle, Info, Calendar, MapPin } from 'lucide-react';

export default function LightboxModal({ item, onClose }) {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (typeof onClose === 'function') onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    // Lock background scroll only while an active item is shown
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [item, onClose]);

  if (!item) return null;

  const renderBadge = () => {
    if (item.authenticity === 'AUTHENTIC_PORTRAIT') {
      return (
        <span className="badge-verified">
          <CheckCircle size={14} /> Authentic Historical Photograph
        </span>
      );
    } else if (item.authenticity === 'HISTORICAL_ARCHIVE') {
      return (
        <span className="badge-gold">
          <Info size={14} /> Archival Record / Institutional Landmark
        </span>
      );
    } else {
      return (
        <span className="badge-illustrative">
          <AlertCircle size={14} /> Illustrative Context (Not a Personal Portrait)
        </span>
      );
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget && typeof onClose === 'function') {
      onClose();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      onClick={handleBackdropClick}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 2000,
        backgroundColor: 'rgba(7, 30, 26, 0.94)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        backdropFilter: 'blur(6px)'
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '8px',
          maxWidth: '920px',
          width: '100%',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          border: '1px solid #C6A45B',
          position: 'relative'
        }}
      >
        {/* Modal Top Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem 1.5rem',
            backgroundColor: '#0B2924',
            color: '#F8F5EC',
            borderBottom: '1px solid rgba(198, 164, 91, 0.3)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {renderBadge()}
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              color: '#C6A45B',
              backgroundColor: 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.35rem',
              borderRadius: '4px',
              cursor: 'pointer',
              border: 'none',
              transition: 'background-color 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(198, 164, 91, 0.15)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <X size={24} />
          </button>
        </div>

        {/* Modal Body with Image & Details */}
        <div
          style={{
            overflowY: 'auto',
            padding: '1.75rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem'
          }}
        >
          {/* Main Image Container */}
          <div
            style={{
              backgroundColor: '#071E1A',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              maxHeight: '440px',
              minHeight: '220px',
              overflow: 'hidden',
              border: '1px solid #D6CEBE'
            }}
          >
            <img
              src={item.fullImageSrc || item.imageSrc || '/images/falaki_portrait_main.jpg'}
              alt={item.title || 'Archival image'}
              onError={(e) => {
                e.currentTarget.src = '/images/falaki_portrait_main.jpg';
              }}
              style={{
                maxHeight: '440px',
                width: 'auto',
                maxWidth: '100%',
                objectFit: 'contain'
              }}
            />
          </div>

          {/* Metadata & Title */}
          <div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', color: 'var(--color-charcoal-muted)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
              {item.year && (
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Calendar size={14} color="#C6A45B" /> {item.year}
                </span>
              )}
              {item.location && (
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <MapPin size={14} color="#C6A45B" /> {item.location}
                </span>
              )}
            </div>

            <h3
              id="lightbox-title"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.5rem',
                color: 'var(--color-primary-dark)',
                marginBottom: '0.5rem'
              }}
            >
              {item.title}
            </h3>

            {item.caption && (
              <p style={{ fontSize: '1rem', color: 'var(--color-charcoal)', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                {item.caption}
              </p>
            )}

            {item.description && (
              <p style={{ fontSize: '0.92rem', color: 'var(--color-charcoal-light)', lineHeight: 1.7, backgroundColor: '#FAF8F2', padding: '0.85rem', borderRadius: '4px', border: '1px solid #EFE8D8' }}>
                {item.description}
              </p>
            )}

            {/* Source Credit */}
            {item.source && (
              <div
                style={{
                  marginTop: '1rem',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid #EAE3D2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.82rem',
                  color: 'var(--color-charcoal-muted)'
                }}
              >
                <div>
                  <strong>Archival Source:</strong> {item.source}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
