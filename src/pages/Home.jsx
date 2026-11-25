import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Feather, Award, Sparkles, CheckCircle, ArrowRight, Globe, GraduationCap } from 'lucide-react';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import PoemCard from '../components/PoemCard';
import { poemsData } from '../data/poems';
import { biographyData } from '../data/biography';

export default function Home() {
  const featuredPoems = Array.isArray(poemsData) ? poemsData.slice(0, 2) : [];

  return (
    <div style={{ backgroundColor: 'var(--color-ivory)' }}>
      {/* 1. Full-Width Premium Hero Section */}
      <Hero />

      {/* 2. Short Introduction to Falaky Moulavi */}
      <section className="section-py" style={{ borderBottom: '1px solid #EAE3D2' }}>
        <div className="container">
          <SectionHeading
            tag="Biographical Profile"
            title="The Scholar, Educator & Poet"
            subtitle="Combining traditional Islamic scholarship with modern school education, Falaky Moulavi was an esteemed teacher and literary figure from twentieth-century Kerala."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
              alignItems: 'stretch'
            }}
          >
            {/* Left Column: Portrait & Key Facts */}
            <div className="editorial-card-gold" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <img
                    src="/images/falaki_portrait_main.jpg"
                    alt="Falaky Muhammed Moulavi"
                    style={{
                      width: '100px',
                      height: '120px',
                      objectFit: 'cover',
                      borderRadius: '6px',
                      border: '1.5px solid #C6A45B'
                    }}
                  />
                  <div>
                    <h3 style={{ fontSize: '1.35rem', marginBottom: '0.2rem' }}>{biographyData.fullName}</h3>
                    <div style={{ color: '#8F7234', fontWeight: 600, fontSize: '0.92rem' }}>
                      Educator & Extempore Arabic Poet
                    </div>
                    <div style={{ marginTop: '0.5rem' }}>
                      <span className="badge-verified" style={{ fontSize: '0.72rem' }}>
                        <CheckCircle size={11} /> 1913 – 1983 CE
                      </span>
                    </div>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid #ECE4D3', paddingTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.92rem' }}>
                  <div>
                    <strong style={{ color: '#103C32' }}>Origin of the Name 'Falaky':</strong>
                    <p style={{ margin: '0.25rem 0 0', color: 'var(--color-charcoal-light)' }}>
                      Given in honour of his grandfather Pokker Musliyar's and his own knowledge of astronomy (Ilm al-Falak) and celestial calculations.
                    </p>
                  </div>

                  <div>
                    <strong style={{ color: '#103C32' }}>Key Achievement:</strong>
                    <p style={{ margin: '0.25rem 0 0', color: 'var(--color-charcoal-light)' }}>
                      Served as the first Muslim School Inspector in Malabar, and worked as a dedicated Arabic teacher in Kadirur, Kumaranellur, and Chavakkad.
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '1.5rem' }}>
                <Link to="/about" className="btn btn-outline-dark" style={{ width: '100%' }}>
                  Learn More About Falaky Moulavi <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Right Column: Three Main Highlights */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="editorial-card" style={{ padding: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ backgroundColor: '#FAF4E6', padding: '0.75rem', borderRadius: '4px', border: '1px solid #E5D5B3' }}>
                    <Feather size={22} color="#8F7234" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.4rem', color: '#103C32' }}>
                      Master of Extempore Arabic Verse (Nimisha Kavi)
                    </h4>
                    <p style={{ fontSize: '0.93rem', lineHeight: 1.6, margin: 0 }}>
                      Widely celebrated across Kerala and Tamil Nadu for composing classical Arabic poetry spontaneously on the spot during academic gatherings and events.
                    </p>
                  </div>
                </div>
              </div>

              <div className="editorial-card" style={{ padding: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ backgroundColor: '#FAF4E6', padding: '0.75rem', borderRadius: '4px', border: '1px solid #E5D5B3' }}>
                    <GraduationCap size={22} color="#8F7234" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.4rem', color: '#103C32' }}>
                      Pioneering Arabic Language Teacher
                    </h4>
                    <p style={{ fontSize: '0.93rem', lineHeight: 1.6, margin: 0 }}>
                      Mentored under educational reformer Chalilakath Kunhahammed Haji, he introduced clear and practical teaching methods to Arabic language classrooms across Malabar.
                    </p>
                  </div>
                </div>
              </div>

              <div className="editorial-card" style={{ padding: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ backgroundColor: '#FAF4E6', padding: '0.75rem', borderRadius: '4px', border: '1px solid #E5D5B3' }}>
                    <Globe size={22} color="#8F7234" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.4rem', color: '#103C32' }}>
                      Scholar of Five Languages
                    </h4>
                    <p style={{ fontSize: '0.93rem', lineHeight: 1.6, margin: 0 }}>
                      Fluent in Arabic, Malayalam, English, Urdu, and Tamil; he actively supported teachers' associations and participated in important community educational initiatives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Section: Arabic Language Heritage & Student Excellence */}
      <section
        className="section-py islamic-pattern-bg"
        style={{
          color: '#F8F5EC',
          borderBottom: '1px solid rgba(198, 164, 91, 0.3)'
        }}
      >
        <div className="container">
          <SectionHeading
            tag="Foundation Purpose"
            title="Encouraging Outstanding Achievement in Arabic"
            subtitle="The central purpose of Falaky Foundation is to honour students who demonstrate outstanding academic performance in the Arabic language."
            light={true}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem'
            }}
          >
            <div className="dark-card">
              <div style={{ display: 'inline-flex', padding: '0.75rem', backgroundColor: 'rgba(198, 164, 91, 0.15)', borderRadius: '4px', border: '1px solid #C6A45B', marginBottom: '1.25rem' }}>
                <Award size={24} color="#E5D29E" />
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.65rem' }}>Recognizing Student Merit</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                Instituting merit awards in Falaky Moulavi's name for high-achieving students across school, college, and university Arabic examinations.
              </p>
            </div>

            <div className="dark-card">
              <div style={{ display: 'inline-flex', padding: '0.75rem', backgroundColor: 'rgba(198, 164, 91, 0.15)', borderRadius: '4px', border: '1px solid #C6A45B', marginBottom: '1.25rem' }}>
                <BookOpen size={24} color="#E5D29E" />
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.65rem' }}>Inspiring Literary Skills</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                Encouraging young learners to explore classical Arabic poetry, creative writing, and clear expression beyond standard classroom textbooks.
              </p>
            </div>

            <div className="dark-card">
              <div style={{ display: 'inline-flex', padding: '0.75rem', backgroundColor: 'rgba(198, 164, 91, 0.15)', borderRadius: '4px', border: '1px solid #C6A45B', marginBottom: '1.25rem' }}>
                <Sparkles size={24} color="#E5D29E" />
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.65rem' }}>Preserving Literary Heritage</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                Building an accessible archive to preserve and publish the poems, writings, and educational contributions of Falaky Moulavi.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/vision" className="btn btn-primary">
              <Award size={16} /> Explore Our Vision
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Preview of Selected Poems */}
      <section className="section-py" style={{ borderBottom: '1px solid #EAE3D2', backgroundColor: '#F8F5EC' }}>
        <div className="container">
          <SectionHeading
            tag="Poetry Archive Preview"
            title="Selected Arabic Verses"
            subtitle="Falaky Moulavi's poetry reflects heartfelt historical memory, dedication to students, and love for the Arabic language."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '2rem',
              alignItems: 'stretch',
              marginBottom: '2rem'
            }}
          >
            {featuredPoems.map((poem) => (
              <PoemCard key={poem.id} poem={poem} defaultExpanded={false} />
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/gallery" className="btn btn-outline-dark">
              <Feather size={16} /> Explore Poetry Collection <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Historical Authenticity Section */}
      <section className="section-py" style={{ backgroundColor: '#EFE8D8' }}>
        <div className="container-narrow">
          <div
            className="editorial-card-gold"
            style={{
              backgroundColor: '#FFFFFF',
              padding: '2.5rem',
              textAlign: 'center'
            }}
          >
            <div style={{ display: 'inline-flex', marginBottom: '1rem' }}>
              <span className="badge-verified">
                <CheckCircle size={14} /> Historical Accuracy Standard
              </span>
            </div>

            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: '#103C32' }}>
              Based on Documented Historical Records
            </h3>

            <p style={{ fontSize: '0.98rem', color: 'var(--color-charcoal-light)', lineHeight: 1.75, marginBottom: '1.75rem' }}>
              Falaky Foundation is committed to historical accuracy. Biographical information, dates, and poetic verses on this website are referenced from published studies — including research publications by former Calicut University Arabic Department Head Dr. K.V. Veeran Moidheen and documented educational records.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
              <Link to="/about" className="btn btn-primary" style={{ fontSize: '0.86rem' }}>
                Read Biography
              </Link>
              <Link to="/vision" className="btn btn-outline-dark" style={{ fontSize: '0.86rem' }}>
                Read Foundation Vision
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
