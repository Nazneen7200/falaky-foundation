import React, { useState } from 'react';
import { BookOpen, Calendar, ArrowRight, Languages } from 'lucide-react';

/**
 * BrotherCard
 * Renders an individual profile card for one of the three Falaky brothers with
 * consistent portrait framing, bilingual toggle, concise summary, and "Read More" modal trigger.
 */
export default function BrotherCard({ profile, onOpenModal, isPrimary = false }) {
  const [cardLang, setCardLang] = useState('en');

  const isMl = cardLang === 'ml';
  const name = isMl ? profile.nameMl : profile.nameEn;
  const role = isMl ? profile.roleMl : profile.roleEn;
  const intro = isMl ? profile.introMl : profile.introEn;

  return (
    <div
      className={isPrimary ? "editorial-card-gold" : "editorial-card"}
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '8px',
        padding: isPrimary ? '2.5rem' : '2rem',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        boxShadow: isPrimary ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        border: isPrimary ? '1.5px solid #C6A45B' : '1px solid var(--color-cream-border)'
      }}
    >
      {/* Top Bar: Lifespan Badge + Language Switcher */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.75rem',
          marginBottom: '1.25rem'
        }}
      >
        <span
          className="badge-gold"
          style={{
            fontSize: '0.76rem',
            padding: '0.25rem 0.65rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem'
          }}
        >
          <Calendar size={12} /> {profile.lifespan}
        </span>

        {/* Card-Level Language Toggle */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: '#FAF4E6',
            padding: '2px',
            borderRadius: '16px',
            border: '1px solid #E5D5B3'
          }}
        >
          <button
            type="button"
            onClick={() => setCardLang('en')}
            style={{
              padding: '2px 8px',
              fontSize: '0.72rem',
              fontWeight: 600,
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: !isMl ? '#103C32' : 'transparent',
              color: !isMl ? '#FFFFFF' : '#8F7234',
              transition: 'all 0.2s ease'
            }}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => setCardLang('ml')}
            style={{
              padding: '2px 8px',
              fontSize: '0.72rem',
              fontWeight: 600,
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: isMl ? '#103C32' : 'transparent',
              color: isMl ? '#FFFFFF' : '#8F7234',
              fontFamily: 'var(--font-malayalam)',
              transition: 'all 0.2s ease'
            }}
          >
            മലയാളം
          </button>
        </div>
      </div>

      {/* Portrait Framing Container — Consistent Dimensions & Face-Safe Aspect Ratio */}
      <div
        style={{
          width: '100%',
          height: isPrimary ? '360px' : '320px',
          backgroundColor: '#071E1A',
          borderRadius: '8px',
          border: '2px solid #C6A45B',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.5rem',
          position: 'relative',
          boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.4)'
        }}
      >
        <img
          src={profile.image}
          alt={profile.nameEn}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
            display: 'block'
          }}
          onError={(e) => {
            if (profile.fallbackImage) e.currentTarget.src = profile.fallbackImage;
          }}
        />
      </div>

      {/* Name in English and Malayalam */}
      <div style={{ marginBottom: '0.75rem' }}>
        <h3
          style={{
            fontSize: isPrimary ? '1.55rem' : '1.35rem',
            color: '#103C32',
            margin: '0 0 0.25rem 0',
            fontFamily: isMl ? 'var(--font-malayalam)' : 'var(--font-heading)',
            lineHeight: 1.25
          }}
        >
          {name}
        </h3>

        {/* Secondary Name Display (Malayalam if in EN mode, English if in ML mode) */}
        <div
          style={{
            fontSize: '0.92rem',
            color: '#8F7234',
            fontWeight: 600,
            fontFamily: isMl ? 'var(--font-body)' : 'var(--font-malayalam)'
          }}
        >
          {isMl ? profile.nameEn : profile.nameMl}
        </div>

        <div
          style={{
            fontSize: '0.84rem',
            color: 'var(--color-charcoal-muted)',
            marginTop: '0.25rem',
            fontFamily: isMl ? 'var(--font-malayalam)' : 'var(--font-body)'
          }}
        >
          {role}
        </div>
      </div>

      {/* Concise Introductory Summary */}
      <p
        style={{
          fontSize: '0.94rem',
          lineHeight: isMl ? 1.8 : 1.7,
          color: 'var(--color-charcoal-light)',
          flexGrow: 1,
          marginBottom: '1.5rem',
          fontFamily: isMl ? 'var(--font-malayalam)' : 'var(--font-body)'
        }}
      >
        {intro}
      </p>

      {/* "Read More" Button */}
      <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid #ECE2CD' }}>
        <button
          type="button"
          onClick={() => onOpenModal(profile, cardLang)}
          className={isPrimary ? "btn btn-primary" : "btn btn-outline-dark"}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            fontSize: '0.88rem',
            cursor: 'pointer'
          }}
        >
          <BookOpen size={16} />
          <span>{isMl ? 'പൂർണ്ണ ജീവചരിത്രം വായിക്കുക' : 'Read Full Biography'}</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}
