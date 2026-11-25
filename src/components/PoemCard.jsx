import React, { useState } from 'react';
import { Feather, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function PoemCard({ poem, defaultExpanded = false }) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  if (!poem) {
    return null;
  }

  const category = poem.category || 'Classical Verse';
  const bahr = poem.bahr || null;
  const verificationStatus = poem.verificationStatus || 'Verified Literary Excerpt';
  const titleArabic = poem.titleArabic || '';
  const titleEnglish = poem.titleEnglish || 'Poem Title';
  const arabicVerses = Array.isArray(poem.arabicVerses) ? poem.arabicVerses : [];
  const englishTranslation = Array.isArray(poem.englishTranslation) ? poem.englishTranslation : [];
  const occasion = poem.occasion || null;
  const malayalamNote = poem.malayalamNote || null;
  const sourceReference = poem.sourceReference || null;

  return (
    <article
      className="editorial-card-gold"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: '6px'
      }}
    >
      {/* Header Meta */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.75rem',
          marginBottom: '1.25rem',
          paddingBottom: '0.85rem',
          borderBottom: '1px solid #ECE4D3'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span className="badge-gold">
            <Feather size={12} /> {category}
          </span>
          {bahr && (
            <span style={{ fontSize: '0.78rem', color: 'var(--color-charcoal-muted)', fontStyle: 'italic' }}>
              {bahr}
            </span>
          )}
        </div>

        <span className="badge-verified">
          <CheckCircle size={12} /> {verificationStatus}
        </span>
      </div>

      {/* Titles */}
      <div style={{ marginBottom: '1.25rem' }}>
        {titleArabic && (
          <h3
            className="arabic-heading"
            style={{
              fontSize: '1.75rem',
              marginBottom: '0.35rem',
              color: 'var(--color-primary-dark)'
            }}
          >
            {titleArabic}
          </h3>
        )}
        <h4
          style={{
            fontSize: '1.15rem',
            fontFamily: 'var(--font-heading)',
            color: 'var(--color-gold-dark)',
            fontWeight: 600
          }}
        >
          {titleEnglish}
        </h4>
      </div>

      {/* Arabic Verses Container (RTL) */}
      {arabicVerses.length > 0 && (
        <div
          style={{
            backgroundColor: '#FAF7F0',
            border: '1px solid #E5DCC9',
            borderRadius: '4px',
            padding: '1.5rem',
            marginBottom: '1.5rem',
            boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.02)'
          }}
        >
          <div
            className="arabic-text"
            style={{
              color: '#103C32',
              fontSize: '1.35rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
          >
            {arabicVerses.map((verse, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  borderBottom: idx < arabicVerses.length - 1 ? '1px dashed #E2D7BF' : 'none',
                  paddingBottom: idx < arabicVerses.length - 1 ? '0.75rem' : '0'
                }}
              >
                <span style={{ flex: '1 1 45%', textAlign: 'right' }}>
                  {verse.shatr1 || verse.verseText || ''}
                </span>
                {verse.shatr2 && (
                  <>
                    <span style={{ margin: '0 0.5rem', color: '#C6A45B', fontSize: '1rem' }}>***</span>
                    <span style={{ flex: '1 1 45%', textAlign: 'right' }}>{verse.shatr2}</span>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* English Translation */}
      {englishTranslation.length > 0 && (
        <div style={{ marginBottom: '1.25rem', flexGrow: 1 }}>
          <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#8F7234', fontWeight: 700, marginBottom: '0.5rem' }}>
            English Translation
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontStyle: 'italic', color: 'var(--color-charcoal-light)', fontSize: '0.94rem' }}>
            {englishTranslation.map((line, idx) => (
              <p key={idx} style={{ margin: 0, lineHeight: 1.6 }}>
                "{line}"
              </p>
            ))}
          </div>
        </div>
      )}

      {/* Expandable Section: Context & Malayalam notes */}
      {isExpanded && (occasion || malayalamNote || sourceReference) && (
        <div
          style={{
            marginTop: '1rem',
            paddingTop: '1rem',
            borderTop: '1px dashed #DCCFB7',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem'
          }}
        >
          {occasion && (
            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#103C32', marginBottom: '0.2rem' }}>
                Historical Occasion:
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--color-charcoal)' }}>
                {occasion}
              </div>
            </div>
          )}

          {malayalamNote && (
            <div style={{ backgroundColor: '#F4EFE3', padding: '0.75rem', borderRadius: '4px', borderLeft: '3px solid #C6A45B' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#8F7234', marginBottom: '0.2rem' }}>
                മലയാള വിവരണം (Malayalam Context):
              </div>
              <div className="malayalam-text" style={{ fontSize: '0.88rem', color: 'var(--color-charcoal)' }}>
                {malayalamNote}
              </div>
            </div>
          )}

          {sourceReference && (
            <div style={{ fontSize: '0.8rem', color: 'var(--color-charcoal-muted)' }}>
              <strong>Source:</strong> {sourceReference}
            </div>
          )}
        </div>
      )}

      {/* Toggle Button */}
      {(occasion || malayalamNote || sourceReference) && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            marginTop: '1rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontSize: '0.84rem',
            fontWeight: 600,
            color: '#103C32',
            padding: '0.4rem 0',
            borderTop: '1px solid #EFE8D8',
            justifyContent: 'center',
            width: '100%',
            backgroundColor: '#FAF8F3',
            cursor: 'pointer'
          }}
          aria-expanded={isExpanded}
        >
          <span>{isExpanded ? 'Hide Historical Context & Notes' : 'View Historical Context & Source'}</span>
          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      )}
    </article>
  );
}
