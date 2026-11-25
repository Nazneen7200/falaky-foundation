import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle,
  Calendar,
  GraduationCap,
  Feather,
  Award,
  Globe,
  Compass,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import GeometricPattern from '../components/GeometricPattern';
import BrotherCard from '../components/BrotherCard';
import BrotherProfileModal from '../components/BrotherProfileModal';
import { biographyData } from '../data/biography';
import { brothersData } from '../data/brothersData';

export default function AboutFalakiMoulavi() {
  const [activeModalProfile, setActiveModalProfile] = useState(null);
  const [modalInitialLang, setModalInitialLang] = useState('en');
  const [primaryCardLang, setPrimaryCardLang] = useState('en');

  const muhammedProfile = brothersData.find((b) => b.id === 'muhammed-moulavi') || brothersData[0];
  const siblingProfiles = brothersData.filter((b) => b.id !== 'muhammed-moulavi');

  const handleOpenModal = (profile, lang = 'en') => {
    setActiveModalProfile(profile);
    setModalInitialLang(lang);
  };

  const isPrimaryMl = primaryCardLang === 'ml';

  return (
    <div style={{ backgroundColor: 'var(--color-ivory)', paddingBottom: '3.5rem' }}>
      {/* Editorial Header Banner */}
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
          <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
            <h1
              style={{
                color: '#FFFFFF',
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                marginBottom: '0.75rem',
                fontWeight: 700
              }}
            >
              Falaky Muhammed Moulavi
            </h1>

            <div style={{ fontSize: '1rem', color: '#E5D29E', marginBottom: '1.25rem' }}>
              [1913 – 1983 CE] • Vilathur, Malabar, Kerala
            </div>

            <GeometricPattern opacity={0.7} width={130} />

            <p style={{ fontSize: '1.08rem', color: '#D4DDD9', lineHeight: 1.8, marginTop: '1.25rem' }}>
              A distinguished scholar, school inspector, and extempore Arabic poet of twentieth-century Kerala, alongside his accomplished brothers who together enriched Arabic education, scholarship, and public service.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container" style={{ marginTop: '2.75rem' }}>

        {/* SECTION 1: PRIMARY PROFILE — FALAKY MUHAMMED MOULAVI */}
        <section style={{ marginBottom: '3.25rem' }}>
          <div
            className="editorial-card-gold"
            style={{
              padding: '2.5rem',
              backgroundColor: '#FFFFFF',
              borderRadius: '8px'
            }}
          >
            {/* Top Bar with Language Switcher */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                paddingBottom: '1.5rem',
                marginBottom: '2rem',
                borderBottom: '1px solid #ECE2CD'
              }}
            >
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="badge-gold" style={{ fontSize: '0.78rem' }}>
                  Primary Profile
                </span>
                <span style={{ fontSize: '0.85rem', color: '#8F7234', fontWeight: 600 }}>
                  {isPrimaryMl ? 'മുഖ്യ ജീവചരിത്രം' : 'Foundational Scholar of the Foundation'}
                </span>
              </div>

              {/* Working Language Switcher */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  backgroundColor: '#FAF4E6',
                  padding: '3px',
                  borderRadius: '20px',
                  border: '1px solid #C6A45B'
                }}
              >
                <button
                  type="button"
                  onClick={() => setPrimaryCardLang('en')}
                  style={{
                    padding: '4px 12px',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    borderRadius: '16px',
                    border: 'none',
                    cursor: 'pointer',
                    backgroundColor: !isPrimaryMl ? '#103C32' : 'transparent',
                    color: !isPrimaryMl ? '#FFFFFF' : '#8F7234',
                    transition: 'all 0.2s ease'
                  }}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => setPrimaryCardLang('ml')}
                  style={{
                    padding: '4px 12px',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    borderRadius: '16px',
                    border: 'none',
                    cursor: 'pointer',
                    backgroundColor: isPrimaryMl ? '#103C32' : 'transparent',
                    color: isPrimaryMl ? '#FFFFFF' : '#8F7234',
                    fontFamily: 'var(--font-malayalam)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  മലയാളം
                </button>
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
                gap: '3rem',
                alignItems: 'center'
              }}
            >
              {/* Portrait Photograph — Clean Framing, Consistent Sizing, Zero Cropping of Face */}
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: '100%',
                    maxWidth: '320px',
                    height: '380px',
                    backgroundColor: '#071E1A',
                    borderRadius: '8px',
                    border: '2px solid #C6A45B',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    boxShadow: '0 12px 30px rgba(0,0,0,0.18)'
                  }}
                >
                  <img
                    src="/images/muhamed.jpeg"
                    alt="Portrait of Falaky Muhammed Moulavi"
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                      display: 'block'
                    }}
                    onError={(e) => {
                      e.currentTarget.src = '/muhamed.jpeg';
                    }}
                  />
                </div>

                <div style={{ marginTop: '0.85rem', fontSize: '0.84rem', color: 'var(--color-charcoal-muted)' }}>
                  <strong>Source:</strong> Historical Research Archives & Records
                </div>
              </div>

              {/* Identity & Bilingual Summary */}
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.35rem' }}>
                  <h2
                    style={{
                      fontSize: '1.95rem',
                      color: '#103C32',
                      margin: 0,
                      fontFamily: isPrimaryMl ? 'var(--font-malayalam)' : 'var(--font-heading)'
                    }}
                  >
                    {isPrimaryMl ? muhammedProfile.nameMl : muhammedProfile.nameEn}
                  </h2>
                  <span
                    style={{
                      fontSize: '0.95rem',
                      color: '#8F7234',
                      fontWeight: 600,
                      fontFamily: 'var(--font-body)'
                    }}
                  >
                    [{muhammedProfile.lifespan}]
                  </span>
                </div>

                <div
                  style={{
                    fontSize: '1.1rem',
                    color: '#8F7234',
                    fontWeight: 600,
                    marginBottom: '0.85rem',
                    fontFamily: isPrimaryMl ? 'var(--font-heading)' : 'var(--font-malayalam)'
                  }}
                >
                  {isPrimaryMl ? muhammedProfile.nameEn : muhammedProfile.nameMl}
                </div>

                <div
                  style={{
                    fontSize: '0.88rem',
                    color: 'var(--color-charcoal-muted)',
                    marginBottom: '1rem',
                    fontWeight: 500
                  }}
                >
                  {isPrimaryMl ? muhammedProfile.roleMl : muhammedProfile.roleEn}
                </div>

                <p
                  style={{
                    fontSize: '1rem',
                    lineHeight: isPrimaryMl ? 1.85 : 1.75,
                    color: 'var(--color-charcoal)',
                    marginBottom: '1.25rem',
                    fontFamily: isPrimaryMl ? 'var(--font-malayalam)' : 'var(--font-body)'
                  }}
                >
                  {isPrimaryMl ? muhammedProfile.introMl : muhammedProfile.introEn}
                </p>

                {/* Origin of Title Callout */}
                <div
                  style={{
                    backgroundColor: '#FAF7F0',
                    borderLeft: '4px solid #C6A45B',
                    padding: '1.15rem',
                    borderRadius: '0 6px 6px 0',
                    marginBottom: '1.5rem'
                  }}
                >
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#8F7234', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.3rem' }}>
                    {isPrimaryMl ? "പദവി നാമം: 'ഫലക്കി'" : "Origin of the Title 'Falaky'"}
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-charcoal)', margin: 0, lineHeight: 1.65, fontFamily: isPrimaryMl ? 'var(--font-malayalam)' : 'var(--font-body)' }}>
                    {isPrimaryMl
                      ? "ഗോളശാസ്ത്രവുമായി (ഇൽമുൽ ഫലക്) ബന്ധപ്പെട്ടതാണ് 'ഫലക്കി' എന്ന നാമം. അദ്ദേഹത്തിന്റെ പിതാമഹൻ പൊക്കർ മുസ്ലിയാർ ഗോളശാസ്ത്ര കണക്കുകൂട്ടലുകളിലും മാസപ്പിറവി നിരീക്ഷണത്തിലും പ്രശസ്തനായിരുന്നു. തുടർന്ന് ഈ ബഹുമതി കുടുംബപ്പേരായി ഫലക്കി മുഹമ്മദ് മൗലവിയിലേക്കും തുടർതലമുറകളിലേക്കും പകർന്നു."
                      : "The title 'Falaky' comes from 'Ilm al-Falak', meaning astronomy. His grandfather, Pokker Musliyar, was renowned for his astronomical calculations, moon sighting observations, and determining the Qibla. Over time, 'Falaky' became an honored family name carried forward by Falaky Muhammed Moulavi."}
                  </p>
                </div>

                {/* Read Full Biography Button */}
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    onClick={() => handleOpenModal(muhammedProfile, primaryCardLang)}
                    className="btn btn-primary"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
                  >
                    <BookOpen size={16} />
                    <span>{isPrimaryMl ? 'പൂർണ്ണ ജീവചരിത്രം വായിക്കുക' : 'Read Full Biography'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE FALAKY BROTHERS / ഫലക്കി സഹോദരന്മാർ */}
        <section id="brothers-section" style={{ marginBottom: '3.25rem' }}>
          <SectionHeading
            tag="Family Heritage & Scholarship"
            title="The Falaky Brothers / ഫലക്കി സഹോദരന്മാർ"
            subtitle="Three distinguished sons of Moythukutty Musliyar and Ayisha of Vilathur who dedicated their lives to Arabic education, literature, research, and public service."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '2.5rem',
              alignItems: 'stretch'
            }}
          >
            {siblingProfiles.map((brother) => (
              <BrotherCard
                key={brother.id}
                profile={brother}
                onOpenModal={handleOpenModal}
                isPrimary={false}
              />
            ))}
          </div>
        </section>

        {/* SECTION 3: EARLY LIFE & EDUCATION (FALAKY MUHAMMED MOULAVI) */}
        <section style={{ marginBottom: '3.25rem' }}>
          <SectionHeading
            tag="Formative Years"
            title="Early Life & Education"
            subtitle="Combining traditional Dars learning with modern collegiate studies in Madras."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
              gap: '2rem'
            }}
          >
            {/* Traditional Dars Studies */}
            <div className="editorial-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{ backgroundColor: '#FAF4E6', padding: '0.65rem', borderRadius: '4px', border: '1px solid #C6A45B' }}>
                  <GraduationCap size={20} color="#8F7234" />
                </div>
                <h3 style={{ fontSize: '1.25rem', color: '#103C32' }}>Traditional Dars Studies</h3>
              </div>

              <p style={{ fontSize: '0.94rem', lineHeight: 1.7 }}>
                His early education began under his father, <strong>Moythukutty Musliyar</strong>, at their native village Dars in Vilathur. He then studied Arabic grammar, literature, and Islamic law at <strong>Pattambi Palli Dars</strong> under <strong>Abubacker Musliyar</strong> and <strong>Kaithakkara Moytheenkutty Musliyar</strong>.
              </p>

              <div style={{ backgroundColor: '#F8F5EC', padding: '1rem', borderRadius: '4px', border: '1px solid #ECE2CD', marginTop: '1rem' }}>
                <strong style={{ fontSize: '0.88rem', color: '#103C32' }}>Influence of Chalilakath:</strong>
                <p style={{ fontSize: '0.88rem', margin: '0.3rem 0 0', color: 'var(--color-charcoal-light)' }}>
                  A significant influence was his time studying under <strong>Chalilakath Kunhahammed Haji</strong> (1866–1919), a pioneer of modern Arabic education in Kerala. Chalilakath emphasized practical language skills, organized textbooks, and astronomy, which deeply influenced Falaky Moulavi's teaching approach.
                </p>
              </div>
            </div>

            {/* Higher Education at Jamalia & Madras University */}
            <div className="editorial-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{ backgroundColor: '#FAF4E6', padding: '0.65rem', borderRadius: '4px', border: '1px solid #C6A45B' }}>
                  <Award size={20} color="#8F7234" />
                </div>
                <h3 style={{ fontSize: '1.25rem', color: '#103C32' }}>Collegiate Studies in Madras</h3>
              </div>

              <p style={{ fontSize: '0.94rem', lineHeight: 1.7 }}>
                To pursue advanced studies, he traveled to Madras (Chennai) to attend <strong>Jamalia Arabic College</strong> in Perambur, a leading center for Arabic learning in South India.
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0 0', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <CheckCircle size={16} color="#156247" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>
                    <strong>Respected Mentors:</strong> Studied classical literature and theology under scholars <strong>Muhammad Yusuf Kokan</strong> and <strong>Maulana Bukhari</strong>.
                  </span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <CheckCircle size={16} color="#156247" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>
                    <strong>Afzal-ul-Ulama Degree:</strong> Awarded by the University of Madras at age 33, qualifying him in classical Arabic and Islamic studies.
                  </span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <CheckCircle size={16} color="#156247" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>
                    <strong>Oriental Title Degree:</strong> Awarded by the University of Madras at age 42 for advanced work in language and literature.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 4: TEACHING JOURNEY & TIMELINE */}
        <section style={{ marginBottom: '3.25rem' }}>
          <SectionHeading
            tag="Career Timeline"
            title="Teaching Journey & Public Service"
            subtitle="Over four decades of dedicated service in government schools, collegiate institutions, and educational administration."
          />

          <div
            style={{
              position: 'relative',
              maxWidth: '840px',
              margin: '0 auto',
              paddingLeft: '2rem',
              borderLeft: '2px solid #C6A45B'
            }}
          >
            {biographyData.careerTimeline.map((item, idx) => (
              <div
                key={idx}
                style={{
                  position: 'relative',
                  marginBottom: '2.5rem',
                  paddingLeft: '1.5rem'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    left: '-2.65rem',
                    top: '2px',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    backgroundColor: '#103C32',
                    border: '3px solid #C6A45B'
                  }}
                />

                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                  <span className="badge-gold" style={{ fontSize: '0.75rem' }}>
                    <Calendar size={12} /> {item.period}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: '#103C32', fontWeight: 600 }}>
                    {item.institution}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', color: '#103C32', marginBottom: '0.4rem' }}>
                  {item.role}
                </h3>

                <p style={{ fontSize: '0.94rem', lineHeight: 1.7, color: 'var(--color-charcoal-light)', margin: 0 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: LANGUAGES & LEADERSHIP */}
        <section style={{ marginBottom: '3.25rem' }}>
          <SectionHeading
            tag="Languages & Leadership"
            title="Languages & Educational Leadership"
            subtitle="Fluent in five languages, he actively supported Arabic teachers and schools across Kerala."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}
          >
            {/* Languages Card */}
            <div className="editorial-card-gold">
              <h3 style={{ fontSize: '1.3rem', color: '#103C32', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Globe size={20} color="#8F7234" /> Fluency in Five Languages
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {biographyData.languages.map((lang, idx) => (
                  <div key={idx} style={{ paddingBottom: '0.75rem', borderBottom: idx < biographyData.languages.length - 1 ? '1px solid #EFE8D8' : 'none' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.2rem' }}>
                      <strong style={{ color: '#103C32', fontSize: '0.98rem' }}>{lang.name}</strong>
                    </div>
                    <p style={{ fontSize: '0.88rem', color: 'var(--color-charcoal-light)', margin: 0 }}>
                      {lang.level}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership Card */}
            <div className="editorial-card-gold">
              <h3 style={{ fontSize: '1.3rem', color: '#103C32', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Compass size={20} color="#8F7234" /> Educational Leadership
              </h3>

              <p style={{ fontSize: '0.94rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                During an era when Arabic language teachers lacked proper recognition and support in the school system, Falaky Moulavi worked actively to organize and guide the community.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem' }}>
                <div style={{ backgroundColor: '#FAF7F0', padding: '0.85rem', borderRadius: '4px', borderLeft: '3px solid #103C32' }}>
                  <strong>Kerala Arabic Teachers Federation (KATEF):</strong>
                  <p style={{ margin: '0.2rem 0 0', color: 'var(--color-charcoal-light)' }}>
                    Helped lead the early Arabic teachers' movement, securing proper status and training opportunities for teachers in government schools.
                  </p>
                </div>

                <div style={{ backgroundColor: '#FAF7F0', padding: '0.85rem', borderRadius: '4px', borderLeft: '3px solid #103C32' }}>
                  <strong>Educational Meetings & Community Initiatives:</strong>
                  <p style={{ margin: '0.2rem 0 0', color: 'var(--color-charcoal-light)' }}>
                    Participated in educational conferences alongside community leaders such as Dr. P. K. Abdul Gafoor, supporting the growth of educational societies in Kerala.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: POETIC ARTISTRY */}
        <section style={{ marginBottom: '3.25rem' }}>
          <SectionHeading
            tag="Poetic Artistry"
            title="The Extempore Arabic Poet (Nimisha Kavi)"
            subtitle="Gifted with the ability to compose classical Arabic verses spontaneously on the spot."
          />

          <div className="editorial-card" style={{ padding: '2.5rem' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2.5rem'
              }}
            >
              <div>
                <h3 style={{ fontSize: '1.35rem', color: '#103C32', marginBottom: '1rem' }}>
                  The Art of Spontaneous Verse
                </h3>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.75 }}>
                  In Arabic poetry, composing verses spontaneously requires deep knowledge of vocabulary, grammar, and poetic meters. Falaky Moulavi was widely recognized for his ability to compose couplets on the spot to welcome guests, honor community leaders, or mark important events.
                </p>

                <p style={{ fontSize: '0.95rem', lineHeight: 1.75 }}>
                  His poems include touching elegies commemorating the sacrifices of Malabar freedom fighters as well as verses encouraging students to master the Arabic language.
                </p>

                <div style={{ marginTop: '1.5rem' }}>
                  <Link to="/gallery" className="btn btn-primary">
                    <Feather size={16} /> Explore Poems in the Gallery <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              <div>
                <h4 style={{ fontSize: '1.15rem', color: '#8F7234', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Main Themes in His Poetry
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {biographyData.literaryContributions.majorThemes.map((th, idx) => (
                    <div key={idx} style={{ padding: '0.85rem', backgroundColor: '#FAF8F3', borderRadius: '4px', border: '1px solid #ECE3D0' }}>
                      <strong style={{ color: '#103C32', fontSize: '0.95rem' }}>{th.theme}</strong>
                      <p style={{ fontSize: '0.88rem', color: 'var(--color-charcoal-light)', margin: '0.25rem 0 0', lineHeight: 1.6 }}>
                        {th.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: THREE GENERATIONS OF SCHOLARSHIP */}
        <section style={{ marginBottom: '3.25rem' }}>
          <SectionHeading
            tag="Scholarly Lineage"
            title="Influence Across Three Generations"
            subtitle="The family tradition of scholarship and Arabic poetry continued through his son Jabir Falaky."
          />

          <div
            className="editorial-card-gold"
            style={{
              padding: '2.5rem',
              backgroundColor: '#FFFFFF',
              borderRadius: '8px'
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2.5rem',
                alignItems: 'center'
              }}
            >
              <div>
                <div style={{ display: 'inline-flex', marginBottom: '0.75rem' }}>
                  <span className="badge-gold">
                    Continuing Knowledge
                  </span>
                </div>

                <h3 style={{ fontSize: '1.45rem', color: '#103C32', marginBottom: '0.85rem' }}>
                  Jabir Falaky (1945–2020) & 'Arabic Kavyasasthram'
                </h3>

                <p style={{ fontSize: '0.95rem', lineHeight: 1.75 }}>
                  Falaky Moulavi's son, <strong>Jabir Falaky</strong> (1945–2020), continued the family tradition as an esteemed teacher and scholar. Educated at Tirurangadi and Farook College, he taught Arabic in schools across Palakkad for decades.
                </p>

                <p style={{ fontSize: '0.95rem', lineHeight: 1.75 }}>
                  Jabir Falaky wrote <strong>'Arabic Kavyasasthram' (2011)</strong>, an important book on Arabic poetic meters and criticism referenced in university curricula across Kerala. This unbroken lineage from Pokker Musliyar to Falaky Muhammed Moulavi and Jabir Falaky represents one of the region's respected families of learning.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: '#0B2924',
                  color: '#F8F5EC',
                  padding: '2rem',
                  borderRadius: '6px',
                  border: '1px solid #C6A45B'
                }}
              >
                <div style={{ fontFamily: 'var(--font-heading)', color: '#C6A45B', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  The Falaky Scholarly Lineage
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem' }}>
                  <div style={{ borderLeft: '2px solid #C6A45B', paddingLeft: '0.85rem' }}>
                    <div style={{ color: '#E5D29E', fontWeight: 600 }}>Generation 1: Pokker Musliyar</div>
                    <div style={{ color: '#BAC7C1', fontSize: '0.82rem' }}>Pioneering scholar and astronomer of Vilathur</div>
                  </div>

                  <div style={{ borderLeft: '2px solid #C6A45B', paddingLeft: '0.85rem' }}>
                    <div style={{ color: '#E5D29E', fontWeight: 600 }}>Generation 2: Falaky Muhammed Moulavi (1913–1983)</div>
                    <div style={{ color: '#BAC7C1', fontSize: '0.82rem' }}>School inspector, teacher, and extempore Arabic poet</div>
                  </div>

                  <div style={{ borderLeft: '2px solid #C6A45B', paddingLeft: '0.85rem' }}>
                    <div style={{ color: '#E5D29E', fontWeight: 600 }}>Generation 3: Jabir Falaky (1945–2020)</div>
                    <div style={{ color: '#BAC7C1', fontSize: '0.82rem' }}>Author of 'Arabic Kavyasasthram' and educator</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: VERIFIED HISTORICAL FACTS */}
        <section style={{ marginBottom: '3rem' }}>
          <SectionHeading
            title="Verified Historical Facts"
            subtitle="Key biographical milestones and documented historical records of Falaky Muhammed Moulavi."
          />

          <div
            className="editorial-card-gold"
            style={{
              padding: '2.5rem',
              backgroundColor: '#FFFFFF',
              borderRadius: '8px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <span className="badge-verified">
                <CheckCircle size={14} /> Authenticated Biographical Record
              </span>
            </div>

            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '1.25rem',
                fontSize: '0.93rem'
              }}
            >
              {biographyData.verifiedFacts.map((fact, idx) => (
                <li
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    backgroundColor: '#FAF8F3',
                    padding: '1rem 1.25rem',
                    borderRadius: '4px',
                    border: '1px solid #ECE2CD'
                  }}
                >
                  <CheckCircle size={17} color="#156247" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ color: 'var(--color-charcoal)', lineHeight: 1.6 }}>{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

      </div>

      {/* Interactive Bilingual Biography Modal */}
      {activeModalProfile && (
        <BrotherProfileModal
          profile={activeModalProfile}
          initialLang={modalInitialLang}
          onClose={() => setActiveModalProfile(null)}
        />
      )}
    </div>
  );
}
