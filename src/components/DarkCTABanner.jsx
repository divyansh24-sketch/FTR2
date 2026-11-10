import React from 'react';

export default function DarkCTABanner() {
  return (
    <section style={{
      background: '#0c121e',
      color: '#ffffff',
      padding: '70px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background Accent Lines */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '400px',
        height: '100%',
        background: 'radial-gradient(circle at top right, rgba(200, 16, 46, 0.25) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="ftr-container" style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '30px',
        position: 'relative',
        zIndex: 1,
      }}>
        <div style={{ maxWidth: '640px' }}>
          <span style={{
            fontSize: '11px',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: '#c8102e',
            display: 'block',
            marginBottom: '8px',
          }}>
            COMMERCIAL & INFRASTRUCTURE SITE SUPPORT
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            fontWeight: 900,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            marginBottom: '12px',
          }}>
            Let's Engineer Something <br />
            <span style={{ color: '#c8102e' }}>Built to Last.</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '15px', lineHeight: 1.6 }}>
            Connect directly with an FTR senior materials engineer. Request custom drawing reviews, pull-off mockups, or comprehensive substrate audits.
          </p>
        </div>

        <div>
          <a href="#contact" className="btn-red" style={{ padding: '16px 36px', fontSize: '16px' }}>
            Book Site Audit
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
