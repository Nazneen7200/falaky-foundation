import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Compass, Feather, Award, BookOpen } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: 'Home', icon: Compass },
    { to: '/about', label: 'About', icon: BookOpen },
    { to: '/gallery', label: 'Gallery', icon: Feather },
    { to: '/vision', label: 'Vision', icon: Award }
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: isScrolled ? '#071E1A' : '#0B2924',
        borderBottom: '1px solid rgba(198, 164, 91, 0.25)',
        boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.25)' : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '82px' }}>
        
        {/* Official Brand Logo (Links to Home) */}
        <Logo height={48} variant="header" />

        {/* Desktop Navigation */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '2.2rem'
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              style={({ isActive }) => ({
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                fontWeight: isActive ? 600 : 500,
                color: isActive ? '#C6A45B' : '#E8ECE9',
                padding: '0.5rem 0',
                position: 'relative',
                transition: 'color 0.2s ease',
                textDecoration: 'none'
              })}
            >
              {({ isActive }) => (
                <>
                  <span>{link.label}</span>
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        backgroundColor: '#C6A45B',
                        borderRadius: '2px',
                        boxShadow: '0 0 8px rgba(198, 164, 91, 0.6)'
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '42px',
            height: '42px',
            borderRadius: '4px',
            border: '1px solid rgba(198, 164, 91, 0.4)',
            color: '#C6A45B',
            backgroundColor: 'transparent',
            cursor: 'pointer'
          }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          style={{
            backgroundColor: '#071E1A',
            borderTop: '1px solid rgba(198, 164, 91, 0.2)',
            padding: '1.5rem',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)'
          }}
          className="mobile-menu"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  style={({ isActive }) => ({
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                    padding: '0.85rem 1rem',
                    borderRadius: '4px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? '#0B2924' : '#F8F5EC',
                    backgroundColor: isActive ? '#C6A45B' : 'rgba(16, 60, 50, 0.4)',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease'
                  })}
                >
                  <Icon size={18} />
                  <span>{link.label}</span>
                </NavLink>
              );
            })}
          </div>
        </div>
      )}

      {/* Responsive CSS for Navbar */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
