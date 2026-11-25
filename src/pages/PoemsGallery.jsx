import React, { useState } from 'react';
import { Feather, Search, BookOpen, CheckCircle } from 'lucide-react';
import GeometricPattern from '../components/GeometricPattern';
import PoemCard from '../components/PoemCard';
import { poemsData as rawPoemsData } from '../data/poems';

export default function PoemsGallery() {
  const [poemCategory, setPoemCategory] = useState('All Themes');
  const [poemSearch, setPoemSearch] = useState('');

  const poems = Array.isArray(rawPoemsData) ? rawPoemsData : [];

  const poemCategories = [
    'All Themes',
    'Freedom & History',
    'Language & Literature',
    'Elegies & Tributes',
    'Science & Wisdom'
  ];

  const filteredPoems = poems.filter((poem) => {
    if (!poem) return false;
    const matchesCat =
      poemCategory === 'All Themes' || poem.category === poemCategory;
    const q = (poemSearch || '').trim().toLowerCase();
    const matchesSearch =
      q === '' ||
      (poem.titleEnglish && poem.titleEnglish.toLowerCase().includes(q)) ||
      (poem.theme && poem.theme.toLowerCase().includes(q)) ||
      (Array.isArray(poem.englishTranslation) &&
        poem.englishTranslation.some((t) => typeof t === 'string' && t.toLowerCase().includes(q)));
    return matchesCat && matchesSearch;
  });

  return (
    <div style={{ backgroundColor: 'var(--color-ivory)', paddingBottom: '4rem' }}>
      {/* Hero Section */}
      <section
        className="islamic-pattern-bg islamic-subtle-overlay"
        style={{
          color: '#F8F5EC',
          paddingTop: '3.75rem',
          paddingBottom: '3.75rem',
          borderBottom: '1px solid rgba(198, 164, 91, 0.3)'
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ marginBottom: '0.85rem' }}>
              <span className="badge-gold">
                Literary Archive
              </span>
            </div>

            <h1
              style={{
                color: '#FFFFFF',
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                marginBottom: '1rem',
                fontWeight: 700
              }}
            >
              Poetry Collection
            </h1>

            <GeometricPattern opacity={0.7} width={130} />

            <p style={{ fontSize: '1.08rem', color: '#D4DDD9', lineHeight: 1.8, marginTop: '1.25rem' }}>
              Preserving the classical Arabic poetry, commemorative elegies, and educational verses of Falaky Muhammed Moulavi (1913–1983).
            </p>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="container" style={{ marginTop: '2.75rem' }}>
        {/* Introduction to Falaky Moulavi's Literary Contributions */}
        <div
          className="editorial-card-gold"
          style={{
            padding: '2.25rem 2.5rem',
            backgroundColor: '#FFFFFF',
            borderRadius: '8px',
            marginBottom: '2.5rem'
          }}
        >
          <div style={{ display: 'inline-flex', marginBottom: '0.5rem' }}>
            <span className="badge-verified">
              <CheckCircle size={13} /> Sourced Literary Archive
            </span>
          </div>
          <h2 style={{ fontSize: '1.75rem', color: '#103C32', marginBottom: '0.75rem' }}>
            The Poetic Works of Falaky Moulavi
          </h2>
          <p style={{ fontSize: '0.98rem', lineHeight: 1.8, color: 'var(--color-charcoal-light)', margin: 0 }}>
            As a respected extempore Arabic poet (<em>Nimisha Kavi / Shair al-Badihah</em>), Falaky Muhammed Moulavi possessed the rare ability to compose classical Arabic verses spontaneously on the spot. His poetry celebrated the Arabic language, honored educators like M.K. Haji, commemorated martyrs of the Malabar freedom movement, and inspired young students to learn and write.
          </p>
        </div>

        {/* Filter and Search Bar for Poems */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.25rem',
            marginBottom: '2rem',
            backgroundColor: '#FFFFFF',
            padding: '1.25rem 1.75rem',
            borderRadius: '6px',
            border: '1px solid var(--color-cream-border)',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          {/* Category buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {poemCategories.map((cat) => {
              const isSelected = poemCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setPoemCategory(cat)}
                  style={{
                    padding: '0.45rem 1rem',
                    fontSize: '0.84rem',
                    fontWeight: isSelected ? 600 : 500,
                    borderRadius: '3px',
                    backgroundColor: isSelected ? '#103C32' : 'transparent',
                    color: isSelected ? '#F8F5EC' : '#242821',
                    border: isSelected ? '1px solid #103C32' : '1px solid #DFD7C5',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer'
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search input */}
          <div style={{ position: 'relative', minWidth: '240px' }}>
            <Search
              size={16}
              color="#8F7234"
              style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }}
            />
            <input
              type="text"
              placeholder="Search poem titles, text or themes..."
              value={poemSearch}
              onChange={(e) => setPoemSearch(e.target.value)}
              style={{
                width: '100%',
                padding: '0.5rem 1rem 0.5rem 2.3rem',
                fontSize: '0.88rem',
                border: '1px solid #D6CCB9',
                borderRadius: '4px',
                backgroundColor: '#FAF8F3',
                color: 'var(--color-charcoal)'
              }}
            />
          </div>
        </div>

        {/* Poetry Collection with Graceful Fallbacks */}
        {poems.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              padding: '3.5rem 2rem',
              backgroundColor: '#FFFFFF',
              border: '1px dashed #C6A45B',
              borderRadius: '8px',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: '#FAF4E6',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
                border: '1px solid #C6A45B'
              }}
            >
              <BookOpen size={26} color="#8F7234" />
            </div>
            <h3 style={{ fontSize: '1.4rem', color: '#103C32', marginBottom: '0.5rem' }}>
              Literary Collection Coming Soon
            </h3>
            <p style={{ color: 'var(--color-charcoal-light)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
              The Falaky Foundation is actively cataloguing and verifying additional manuscripts and oral transcriptions of Falaky Moulavi's poetry. Verified selections will be added as they are confirmed.
            </p>
          </div>
        ) : filteredPoems.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              padding: '3.5rem',
              backgroundColor: '#FAF8F3',
              border: '1px dashed #D5CAB5',
              borderRadius: '6px'
            }}
          >
            <p style={{ color: 'var(--color-charcoal-muted)', fontSize: '1.05rem', margin: 0 }}>
              No poems matched your search. Try selecting "All Themes" or clearing your search term.
            </p>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '2rem',
              alignItems: 'stretch'
            }}
          >
            {filteredPoems.map((poem) => (
              <PoemCard key={poem.id || poem.titleEnglish} poem={poem} defaultExpanded={true} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
