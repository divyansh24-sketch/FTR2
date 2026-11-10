import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="ftr-section" style={{ background: '#ffffff' }}>
      <div className="ftr-container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '60px',
        alignItems: 'center',
      }}>
        {/* Left Side: Product Cards & Rating Badges */}
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center' }}>
          {/* Card 1: Bucket Mockup Card */}
          <div className="ftr-card" style={{ width: '220px', textAlign: 'center', padding: '30px 20px' }}>
            <div style={{
              width: '100px',
              height: '110px',
              margin: '0 auto 16px',
              background: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)',
              borderRadius: '12px',
              border: '1px solid #7dd3fc',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <span style={{ fontSize: '10px', fontWeight: 800, color: '#0369a1' }}>FTR</span>
              <span style={{ fontSize: '18px', fontWeight: 900, color: '#0284c7' }}>2K</span>
              <span style={{ fontSize: '8px', color: '#0284c7' }}>SEALANT</span>
            </div>
            <div style={{ color: '#eab308', fontSize: '14px', marginBottom: '4px' }}>★★★★★</div>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#111827' }}>4.9/5 Rating</div>
            <div style={{ fontSize: '11px', color: '#6b7280' }}>1,200+ Contractors</div>
          </div>

          {/* Card 2: 100% Assurance Card */}
          <div className="ftr-card" style={{
            width: '230px',
            textAlign: 'center',
            padding: '36px 20px',
            background: 'linear-gradient(180deg, #ffffff 0%, #fef2f2 100%)',
            borderColor: '#fecaca',
            transform: 'translateY(-16px)',
          }}>
            <div style={{
              width: '56px',
              height: '56px',
              background: '#fee2e2',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px',
              color: '#c8102e',
              fontSize: '22px',
              fontWeight: 900,
            }}>
              ✓
            </div>
            <div style={{ fontSize: '24px', fontWeight: 900, color: '#c8102e', lineHeight: 1.1 }}>100%</div>
            <div style={{ fontSize: '13px', fontWeight: 800, color: '#111827', margin: '4px 0' }}>Quality Assurance</div>
            <p style={{ fontSize: '11px', color: '#6b7280', lineHeight: 1.4 }}>
              Every batch laboratory checked for elongation & shear tensile strength.
            </p>
          </div>
        </div>

        {/* Right Side: Text & Headline */}
        <div>
          <div className="badge-red" style={{ marginBottom: '12px' }}>A BIT ABOUT US</div>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
            color: '#111827',
            marginBottom: '20px',
          }}>
            ABOUT US
          </h2>

          <p style={{ fontSize: '16px', color: '#4b5563', lineHeight: 1.7, marginBottom: '16px' }}>
            FTR Solutions Pvt. Ltd. is a dynamic company established with a clear vision—to become a reliable solution provider in the construction and surface solutions industry. Incorporated in 2026 in New Delhi, we focus on chemical and construction-related innovation, high performance, and practical problem-solving.
          </p>

          <p style={{ fontSize: '15px', color: '#6b7280', lineHeight: 1.7, marginBottom: '32px' }}>
            At FTR Solutions, every on-site challenge is an opportunity to engineer a better system. Our approach is not just to sell products, but to deliver end-to-end solutions for real issues like cracks, bonding failures, and waterproofing concerns—backed by consistent quality and field performance.
          </p>

          <a href="#assurance" className="btn-red">
            Learn More About FTR
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
