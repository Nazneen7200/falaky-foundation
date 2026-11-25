import React from 'react';
import GeometricPattern from './GeometricPattern';

export default function SectionHeading({
  tag,
  title,
  subtitle,
  align = "center",
  light = false,
  className = ""
}) {
  const isCenter = align === "center";
  
  return (
    <div
      className={`section-heading ${className}`}
      style={{
        textAlign: align,
        marginBottom: '3rem',
        maxWidth: isCenter ? '780px' : '100%',
        marginLeft: isCenter ? 'auto' : '0',
        marginRight: isCenter ? 'auto' : '0'
      }}
    >
      {tag && (
        <div style={{ marginBottom: '0.75rem' }}>
          <span className="badge-gold">
            {tag}
          </span>
        </div>
      )}

      <h2
        style={{
          color: light ? 'var(--color-ivory)' : 'var(--color-primary-dark)',
          marginBottom: '0.75rem',
          fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)',
          fontWeight: 700
        }}
      >
        {title}
      </h2>

      <div style={{ margin: '0.85rem 0' }}>
        <GeometricPattern opacity={light ? 0.8 : 0.65} width={130} />
      </div>

      {subtitle && (
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: '1.75',
            color: light ? '#D0DBD6' : 'var(--color-charcoal-light)',
            margin: '0 auto',
            maxWidth: '680px'
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
