import React, { useState } from 'react';
import { Search, ZoomIn, CheckCircle, Info, AlertCircle, Calendar, Image as ImageIcon } from 'lucide-react';
import { galleryCategories as rawCategories, galleryItems as rawItems } from '../data/gallery';

export default function GalleryGrid({ onSelectItem }) {
  const [activeCategory, setActiveCategory] = useState("All Items");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = Array.isArray(rawCategories) ? rawCategories : ["All Items"];
  const items = Array.isArray(rawItems) ? rawItems : [];

  const filteredItems = items.filter((item) => {
    if (!item) return false;
    const matchesCategory =
      activeCategory === "All Items" || item.category === activeCategory;
    const q = (searchQuery || "").trim().toLowerCase();
    const matchesSearch =
      q === "" ||
      (item.title && item.title.toLowerCase().includes(q)) ||
      (item.caption && item.caption.toLowerCase().includes(q)) ||
      (item.category && item.category.toLowerCase().includes(q));
    return matchesCategory && matchesSearch;
  });

  const handleCardClick = (item) => {
    if (typeof onSelectItem === 'function') {
      onSelectItem(item);
    }
  };

  return (
    <div>
      {/* Filter and Search Controls */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.25rem',
          marginBottom: '2.5rem',
          backgroundColor: '#FFFFFF',
          padding: '1.25rem 1.75rem',
          borderRadius: '6px',
          border: '1px solid var(--color-cream-border)',
          boxShadow: 'var(--shadow-sm)'
        }}
      >
        {/* Category Tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
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

        {/* Search Field */}
        <div style={{ position: 'relative', minWidth: '240px', flexGrow: 0 }}>
          <Search
            size={16}
            color="#8F7234"
            style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }}
          />
          <input
            type="text"
            placeholder="Search archival collection..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
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

      {/* Grid Display */}
      {filteredItems.length === 0 ? (
        <div
          style={{
            textAlign: 'center',
            padding: '3.5rem',
            backgroundColor: '#FAF8F3',
            border: '1px dashed #D5CAB5',
            borderRadius: '6px'
          }}
        >
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: '#EFE8D8',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem'
            }}
          >
            <ImageIcon size={22} color="#8F7234" />
          </div>
          <h4 style={{ fontSize: '1.2rem', color: '#103C32', marginBottom: '0.5rem' }}>
            No Archival Records Found
          </h4>
          <p style={{ color: 'var(--color-charcoal-muted)', fontSize: '0.95rem', margin: 0 }}>
            No visual items matched your query. Try clearing your search keywords or switching category filters.
          </p>
        </div>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '2rem'
          }}
        >
          {filteredItems.map((item) => {
            const isAuthenticPortrait = item.authenticity === 'AUTHENTIC_PORTRAIT';
            const isIllustrative = item.authenticity === 'ILLUSTRATIVE_CONTEXT';

            return (
              <div
                key={item.id || item.title}
                onClick={() => handleCardClick(item)}
                className="editorial-card-gold"
                style={{
                  cursor: 'pointer',
                  padding: 0,
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '6px'
                }}
              >
                {/* Image Container with Hover Overlay */}
                <div
                  style={{
                    position: 'relative',
                    height: '240px',
                    backgroundColor: '#0B2924',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  className="gallery-card-img"
                >
                  <img
                    src={item.imageSrc || '/images/falaki_portrait_main.jpg'}
                    alt={item.title || 'Falaky Foundation Archival Item'}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = '/images/falaki_portrait_main.jpg';
                    }}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: isAuthenticPortrait ? 'contain' : 'cover',
                      transition: 'transform 0.4s ease'
                    }}
                  />

                  {/* Top Authenticity Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      zIndex: 2
                    }}
                  >
                    {isAuthenticPortrait ? (
                      <span className="badge-verified" style={{ boxShadow: '0 2px 6px rgba(0,0,0,0.2)' }}>
                        <CheckCircle size={12} /> Authentic Historical Photo
                      </span>
                    ) : isIllustrative ? (
                      <span className="badge-illustrative" style={{ boxShadow: '0 2px 6px rgba(0,0,0,0.2)' }}>
                        <AlertCircle size={12} /> Illustrative Context
                      </span>
                    ) : (
                      <span className="badge-gold" style={{ boxShadow: '0 2px 6px rgba(0,0,0,0.2)' }}>
                        <Info size={12} /> Archival Document
                      </span>
                    )}
                  </div>

                  {/* Hover Inspect Pill */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '12px',
                      backgroundColor: 'rgba(7, 30, 26, 0.85)',
                      color: '#F8F5EC',
                      fontSize: '0.75rem',
                      padding: '0.35rem 0.65rem',
                      borderRadius: '3px',
                      border: '1px solid #C6A45B',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      backdropFilter: 'blur(4px)'
                    }}
                  >
                    <ZoomIn size={13} color="#C6A45B" /> Click to Inspect
                  </div>
                </div>

                {/* Card Content */}
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.8rem', color: '#8F7234' }}>
                    <span style={{ fontWeight: 600 }}>{item.category || 'Archive'}</span>
                    {item.year && (
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', color: 'var(--color-charcoal-muted)' }}>
                        <Calendar size={12} /> {item.year}
                      </span>
                    )}
                  </div>

                  <h4
                    style={{
                      fontSize: '1.15rem',
                      marginBottom: '0.65rem',
                      color: 'var(--color-primary-dark)',
                      lineHeight: 1.35
                    }}
                  >
                    {item.title}
                  </h4>

                  {item.caption && (
                    <p
                      style={{
                        fontSize: '0.9rem',
                        color: 'var(--color-charcoal-light)',
                        lineHeight: 1.6,
                        flexGrow: 1,
                        marginBottom: '1rem',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                    >
                      {item.caption}
                    </p>
                  )}

                  {item.source && (
                    <div style={{ fontSize: '0.78rem', color: 'var(--color-charcoal-muted)', borderTop: '1px solid #EFE8D8', paddingTop: '0.75rem' }}>
                      <strong>Source:</strong> {item.source}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Hover zoom CSS */}
      <style>{`
        .gallery-card-img:hover img {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}
