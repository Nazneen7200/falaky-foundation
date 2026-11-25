import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#071E1A',
        color: '#BAC7C1',
        borderTop: '1px solid rgba(198, 164, 91, 0.3)',
        paddingTop: '3.25rem',
        paddingBottom: '2.25rem',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Main Footer Row: Clean, balanced 2-column layout on desktop, stacked on mobile */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'start',
            paddingBottom: '2.25rem',
            borderBottom: '1px solid rgba(198, 164, 91, 0.18)'
          }}
        >
          {/* Left Column: Official Logo, Foundation Name & Brief Description */}
          <div style={{ maxWidth: '520px' }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <Logo height={48} variant="footer" />
            </div>

            <p style={{ color: '#BAC7C1', fontSize: '0.94rem', lineHeight: '1.75', margin: 0 }}>
              Falaky Foundation is dedicated to honouring students who achieve outstanding performance in the Arabic language, celebrating the scholarship, poetry, and educational contributions of Falaky Muhammed Moulavi (1913–1983).
            </p>
          </div>

          {/* Right Column: Contact Information */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              justifyContent: 'flex-start'
            }}
          >
            <h4
              style={{
                color: '#F8F5EC',
                fontSize: '1.05rem',
                margin: 0,
                fontFamily: 'var(--font-heading)',
                letterSpacing: '0.04em'
              }}
            >
              Contact
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.92rem', color: '#BAC7C1' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <MapPin size={18} color="#C6A45B" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ lineHeight: 1.5 }}>
                  Vilathur, Thiruvegappura, Palakkad District, Kerala 679304, India
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Mail size={18} color="#C6A45B" style={{ flexShrink: 0 }} />
                <a
                  href="mailto:info@falakyfoundation.org"
                  style={{ color: '#BAC7C1', textDecoration: 'none', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#C6A45B')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#BAC7C1')}
                >
                  info@falakyfoundation.org
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & BrainIT Future Credit Line */}
        <div
          style={{
            paddingTop: '1.75rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.86rem',
            color: '#8FA199'
          }}
        >
          <div>
            © {new Date().getFullYear()} Falaky Foundation. All rights reserved.
          </div>

          <div
            style={{
              color: '#8FA199',
              fontSize: '0.82rem',
              letterSpacing: '0.02em',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem'
            }}
          >
            <span>Designed &amp; Developed by</span>
            <span style={{ color: '#C6A45B', fontWeight: 600 }}>BrainIT Future</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
