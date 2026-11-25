import React from 'react';
import { Sparkles } from 'lucide-react';
import GeometricPattern from './GeometricPattern';

export default function Hero() {
  return (
    <section
      className="islamic-pattern-bg islamic-subtle-overlay"
      style={{
        position: 'relative',
        color: '#F8F5EC',
        paddingTop: '4.5rem',
        paddingBottom: '4.5rem',
        borderBottom: '1px solid rgba(198, 164, 91, 0.35)',
        overflow: 'hidden'
      }}
    >
      {/* Decorative ambient gold radial light */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          right: '5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(198, 164, 91, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center',
            gap: '3.5rem'
          }}
        >
          {/* Left Column: Typography & Scholarly Overview (Balanced & Uncluttered) */}
          <div style={{ maxWidth: '640px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
              <span className="badge-gold">
                <Sparkles size={13} /> Arabic Language Excellence & Scholarly Heritage
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                color: '#FFFFFF',
                fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                marginBottom: '1.25rem',
                textShadow: '0 2px 10px rgba(0,0,0,0.3)'
              }}
            >
              Honouring a Legacy <br />
              <span style={{ color: '#C6A45B', fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>
                Inspiring a Generation
              </span>
            </h1>

            {/* Geometric ornament */}
            <div style={{ marginBottom: '1.5rem' }}>
              <GeometricPattern opacity={0.75} width={140} />
            </div>

            {/* Supporting Text in Simple, Dignified English */}
            <p
              style={{
                fontSize: '1.14rem',
                color: '#D4DDD9',
                lineHeight: 1.8,
                marginBottom: '1.5rem',
                fontWeight: 400
              }}
            >
              Falaky Foundation honours students who achieve outstanding performance in the Arabic language, celebrating the life, poetry, and educational contributions of <strong style={{ color: '#F8F5EC' }}>Falaky Muhammed Moulavi (1913–1983)</strong>.
            </p>

            <p
              style={{
                fontSize: '1rem',
                color: '#BAC7C1',
                lineHeight: 1.7,
                marginBottom: '2.5rem'
              }}
            >
              A respected educator, astronomer, and extempore Arabic poet from Kerala, he spent over four decades mentoring generations of students and advancing Arabic literature.
            </p>

            {/* Quick Metrics / Key Attributes - Well-spaced, balanced grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1.25rem',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(198, 164, 91, 0.25)'
              }}
            >
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  padding: '1rem',
                  borderRadius: '6px',
                  border: '1px solid rgba(198, 164, 91, 0.15)'
                }}
              >
                <div style={{ fontFamily: 'var(--font-heading)', color: '#C6A45B', fontSize: '1.45rem', fontWeight: 700 }}>
                  1913–1983
                </div>
                <div style={{ fontSize: '0.8rem', color: '#BAC7C1', marginTop: '0.25rem', letterSpacing: '0.03em' }}>
                  Historic Era
                </div>
              </div>

              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  padding: '1rem',
                  borderRadius: '6px',
                  border: '1px solid rgba(198, 164, 91, 0.15)'
                }}
              >
                <div style={{ fontFamily: 'var(--font-heading)', color: '#C6A45B', fontSize: '1.45rem', fontWeight: 700 }}>
                  5 Languages
                </div>
                <div style={{ fontSize: '0.8rem', color: '#BAC7C1', marginTop: '0.25rem', letterSpacing: '0.03em' }}>
                  Polyglot Scholar
                </div>
              </div>

              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  padding: '1rem',
                  borderRadius: '6px',
                  border: '1px solid rgba(198, 164, 91, 0.15)'
                }}
              >
                <div style={{ fontFamily: 'var(--font-heading)', color: '#C6A45B', fontSize: '1.45rem', fontWeight: 700 }}>
                  Extempore Poet
                </div>
                <div style={{ fontSize: '0.8rem', color: '#BAC7C1', marginTop: '0.25rem', letterSpacing: '0.03em' }}>
                  Arabic Verses
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Framed Archival Portrait without Caption Badge */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}
          >
            {/* Outer Decorative Gold Frame with Moorish/Islamic Arched Styling */}
            <div
              style={{
                position: 'relative',
                padding: '12px',
                borderRadius: '160px 160px 8px 8px',
                background: 'linear-gradient(145deg, #DFCA8F, #8F7234, #C6A45B)',
                boxShadow: '0 20px 45px rgba(0, 0, 0, 0.5), 0 0 30px rgba(198, 164, 91, 0.25)',
                maxWidth: '380px',
                width: '100%'
              }}
            >
              <div
                style={{
                  backgroundColor: '#071E1A',
                  borderRadius: '150px 150px 4px 4px',
                  padding: '8px',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <img
                  src="/images/falaki_portrait_main.jpg"
                  alt="Portrait of Falaky Muhammed Moulavi"
                  style={{
                    width: '100%',
                    height: '420px',
                    objectFit: 'cover',
                    borderRadius: '144px 144px 0 0',
                    filter: 'contrast(1.05)',
                    display: 'block'
                  }}
                />

                {/* Portrait Identifier without the removed caption badge */}
                <div
                  style={{
                    backgroundColor: 'rgba(7, 30, 26, 0.95)',
                    borderTop: '1px solid rgba(198, 164, 91, 0.3)',
                    padding: '1.1rem 1rem',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-heading)', color: '#F8F5EC', fontSize: '1.08rem', fontWeight: 600 }}>
                    Falaky Muhammed Moulavi
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#C6A45B', marginTop: '3px' }}>
                    1913 – 1983
                  </div>
                </div>
              </div>
            </div>

            {/* Background Astrolabe Orbit Line */}
            <div
              style={{
                position: 'absolute',
                width: '440px',
                height: '440px',
                borderRadius: '50%',
                border: '1px dashed rgba(198, 164, 91, 0.25)',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none',
                zIndex: -1
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
