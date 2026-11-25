import React from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  Sparkles,
  BookOpen,
  Feather,
  ShieldCheck
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import GeometricPattern from '../components/GeometricPattern';
import { foundationData } from '../data/foundation';

export default function VisionMission() {
  return (
    <div style={{ backgroundColor: 'var(--color-ivory)', paddingBottom: '3.5rem' }}>
      {/* Header Banner */}
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
                Purpose & Aspirations
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
              Vision
            </h1>

            <GeometricPattern opacity={0.7} width={130} />

            <p style={{ fontSize: '1.08rem', color: '#D4DDD9', lineHeight: 1.8, marginTop: '1.25rem' }}>
              Dedicated to honouring student excellence in the Arabic language while preserving the educational and literary legacy of Falaky Muhammed Moulavi.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container" style={{ marginTop: '2.75rem' }}>

        {/* Foundational Mandate */}
        <section style={{ marginBottom: '3.25rem' }}>
          <div
            className="editorial-card-gold"
            style={{
              padding: '2.75rem 2.5rem',
              backgroundColor: '#FFFFFF',
              borderRadius: '8px',
              textAlign: 'center'
            }}
          >
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#103C32', marginBottom: '1.25rem' }}>
              Our Core Purpose
            </h2>

            <p
              style={{
                fontSize: '1.2rem',
                lineHeight: 1.8,
                color: 'var(--color-charcoal)',
                maxWidth: '820px',
                margin: '0 auto 1.5rem',
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic'
              }}
            >
              "{foundationData.corePurpose}"
            </p>

            <GeometricPattern opacity={0.65} width={120} />
          </div>
        </section>

        {/* Our Vision */}
        <section style={{ marginBottom: '3.25rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center'
            }}
          >
            {/* Vision Statement Box */}
            <div
              className="editorial-card"
              style={{
                backgroundColor: '#103C32',
                color: '#F8F5EC',
                border: '1px solid rgba(198, 164, 91, 0.4)',
                padding: '2.5rem',
                borderRadius: '8px',
                boxShadow: 'var(--shadow-emerald)'
              }}
            >
              <div style={{ display: 'inline-flex', marginBottom: '1rem' }}>
                <span className="badge-gold">
                  Our Vision
                </span>
              </div>

              <h3 style={{ fontSize: '1.5rem', color: '#FFFFFF', lineHeight: 1.5, marginBottom: '1.5rem', fontFamily: 'var(--font-serif)' }}>
                "{foundationData.draftVision.statement}"
              </h3>

              <p style={{ color: '#BAC7C1', fontSize: '0.94rem', lineHeight: 1.7, margin: 0 }}>
                Guiding students to appreciate Arabic not only for examinations, but as a rich language of literature, culture, and communication.
              </p>
            </div>

            {/* Strategic Aspirations */}
            <div>
              <span className="badge-gold" style={{ marginBottom: '0.75rem' }}>
                Long-Term Goals
              </span>
              <h2 style={{ fontSize: '1.85rem', color: '#103C32', marginBottom: '1rem' }}>
                Aspirations for Arabic Education
              </h2>
              <p style={{ fontSize: '0.98rem', color: 'var(--color-charcoal-light)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                The foundation envisions an educational environment where student dedication to the Arabic language receives genuine encouragement, public recognition, and academic support.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {foundationData.draftVision.aspirations.map((asp, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', backgroundColor: '#FFFFFF', padding: '1rem', borderRadius: '4px', border: '1px solid #ECE3D2' }}>
                    <Sparkles size={18} color="#8F7234" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.92rem', color: 'var(--color-charcoal)', lineHeight: 1.6 }}>
                      {asp}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission & Four Pillars */}
        <section style={{ marginBottom: '4.5rem' }}>
          <SectionHeading
            tag="Action Areas"
            title="Our Mission & Key Pillars"
            subtitle="Focused initiatives to support students, assist teachers, and preserve literature."
          />

          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '8px',
              padding: '2.5rem',
              border: '1px solid var(--color-cream-border)',
              marginBottom: '2.5rem',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto' }}>
              <p style={{ fontSize: '1.15rem', color: 'var(--color-charcoal)', lineHeight: 1.8, fontFamily: 'var(--font-serif)', fontStyle: 'italic', margin: 0 }}>
                "{foundationData.draftMission.statement}"
              </p>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
              gap: '1.75rem',
              alignItems: 'stretch'
            }}
          >
            {foundationData.draftMission.keyPillars.map((pillar, idx) => (
              <div
                key={pillar.id}
                className="editorial-card-gold"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <span className="badge-gold" style={{ fontSize: '0.72rem' }}>
                    Pillar {idx + 1}
                  </span>
                  <Award size={20} color="#8F7234" />
                </div>

                <h3 style={{ fontSize: '1.25rem', color: '#103C32', marginBottom: '0.75rem', lineHeight: 1.35 }}>
                  {pillar.title}
                </h3>

                <p style={{ fontSize: '0.92rem', color: 'var(--color-charcoal-light)', lineHeight: 1.7, flexGrow: 1, margin: 0 }}>
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Foundation Values */}
        <section style={{ marginBottom: '3.25rem' }}>
          <SectionHeading
            tag="Values"
            title="Core Foundation Values"
            subtitle="The principles that guide all foundation initiatives and awards."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.25rem',
              alignItems: 'stretch'
            }}
          >
            {foundationData.coreValues.map((val, idx) => (
              <div
                key={idx}
                className="editorial-card"
                style={{
                  padding: '1.75rem 1.25rem',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  height: '100%'
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    backgroundColor: '#FAF4E6',
                    border: '1.5px solid #C6A45B',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                    flexShrink: 0
                  }}
                >
                  <ShieldCheck size={22} color="#8F7234" />
                </div>

                <h4 style={{ fontSize: '1.08rem', color: '#103C32', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                  {val.name}
                </h4>

                <p style={{ fontSize: '0.88rem', color: 'var(--color-charcoal-light)', lineHeight: 1.6, margin: 0, flexGrow: 1 }}>
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Student Achievement in Arabic Matters */}
        <section style={{ marginBottom: '3.25rem' }}>
          <div
            className="editorial-card-gold"
            style={{
              padding: '2.75rem 2.5rem',
              backgroundColor: '#FAF8F3',
              borderRadius: '8px'
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2.5rem',
                alignItems: 'center'
              }}
            >
              <div>
                <span className="badge-gold" style={{ marginBottom: '0.75rem' }}>
                  Educational Value
                </span>

                <h2 style={{ fontSize: '1.85rem', color: '#103C32', marginBottom: '1rem' }}>
                  {foundationData.whyArabicMatters.heading}
                </h2>

                <p style={{ fontSize: '1.05rem', color: 'var(--color-charcoal)', fontWeight: 500, fontStyle: 'italic', marginBottom: '1rem' }}>
                  {foundationData.whyArabicMatters.subheading}
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {foundationData.whyArabicMatters.paragraphs.map((para, idx) => (
                  <p key={idx} style={{ fontSize: '0.94rem', lineHeight: 1.75, color: 'var(--color-charcoal-light)', margin: 0 }}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Closing Call to Action */}
        <section>
          <div
            style={{
              backgroundColor: '#0B2924',
              color: '#F8F5EC',
              borderRadius: '8px',
              padding: '3rem 2rem',
              textAlign: 'center',
              border: '1px solid #C6A45B',
              boxShadow: 'var(--shadow-lg)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ maxWidth: '680px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
              <h2 style={{ color: '#FFFFFF', fontSize: '2rem', marginBottom: '1rem' }}>
                Join Us in Honoring Student Excellence
              </h2>

              <p style={{ color: '#D4DDD9', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                Learn more about the life, teaching career, and poetry of Falaky Moulavi that inspire our foundation's work.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
                <Link to="/about" className="btn btn-primary">
                  <BookOpen size={16} /> Read About Falaky Moulavi
                </Link>
                <Link to="/gallery" className="btn btn-secondary">
                  <Feather size={16} /> Explore Poetry Collection
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
