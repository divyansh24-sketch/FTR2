import React from 'react';
import { useNavigation } from '../context/NavigationContext';

export default function ClientsSection() {
  const { navigate } = useNavigation();

  return (
    <section id="clients-section" className="rt-section-bottom-gap" style={{ paddingTop: '80px', paddingBottom: '90px' }}>
      <div className="w-layout-blockcontainer rt-container w-container">
        {/* ================= ABOUT US CONTENT ================= */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '48px',
          alignItems: 'center',
          marginBottom: '80px',
        }}>
          {/* Left Column: Product Showcase Badges */}
          <div style={{
            display: 'flex',
            gap: '20px',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            {/* Card 1: Bucket Mockup Card */}
            <div style={{
              width: '210px',
              textAlign: 'center',
              padding: '28px 18px',
              background: '#f8f9fa',
              borderRadius: '16px',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)',
            }}>
              <div style={{
                width: '90px',
                height: '96px',
                margin: '0 auto 14px',
                background: 'rgba(229, 57, 53, 0.08)',
                borderRadius: '12px',
                border: '1px solid rgba(229, 57, 53, 0.25)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6px',
              }}>
                <img
                  src="/assets/images/hero-product-1.png"
                  alt="FTR ERP Fiber"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <div style={{ color: '#f59e0b', fontSize: '14px', marginBottom: '4px' }}>★★★★★</div>
              <div style={{ fontSize: '13px', fontWeight: 800, color: '#111214' }}>4.9/5 Rating</div>
              <div style={{ fontSize: '11px', color: '#71717a', marginTop: '2px' }}>1,200+ Contractors</div>
            </div>

            {/* Card 2: 100% Quality Assurance Card */}
            <div style={{
              width: '220px',
              textAlign: 'center',
              padding: '32px 18px',
              background: 'linear-gradient(180deg, rgba(229, 57, 53, 0.08) 0%, #ffffff 100%)',
              borderRadius: '16px',
              border: '1px solid rgba(229, 57, 53, 0.3)',
              transform: 'translateY(-12px)',
              boxShadow: '0 10px 30px rgba(229, 57, 53, 0.12)',
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                background: '#e53935',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 14px',
                color: '#ffffff',
                fontSize: '20px',
                fontWeight: 900,
                boxShadow: '0 8px 16px rgba(229, 57, 53, 0.4)',
              }}>
                ✓
              </div>
              <div style={{ fontSize: '26px', fontWeight: 900, color: '#e53935', lineHeight: 1.1 }}>100%</div>
              <div style={{ fontSize: '13px', fontWeight: 800, color: '#111214', margin: '4px 0' }}>Quality Assurance</div>
              <p style={{ fontSize: '11px', color: '#52525b', lineHeight: 1.4, margin: 0 }}>
                Every batch laboratory checked for elongation & shear tensile strength.
              </p>
            </div>
          </div>

          {/* Right Column: Text & Headings */}
          <div>
            <h2 className="rt-gap-off rt-text-style-h3" style={{
              color: '#111214',
              fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: '20px',
            }}>
              ABOUT US
            </h2>

            <p style={{
              fontSize: '15px',
              color: '#4b5563',
              lineHeight: 1.7,
              marginBottom: '16px',
            }}>
              FTR Solutions Pvt. Ltd. is a dynamic company established with a clear vision—to become a reliable solution provider in the construction and surface solutions industry. Incorporated in 2026 in New Delhi, we focus on chemical and construction-related innovation, high performance, and practical problem-solving.
            </p>

            <p style={{
              fontSize: '14.5px',
              color: '#52525b',
              lineHeight: 1.7,
              marginBottom: '28px',
            }}>
              At FTR Solutions, every on-site challenge is an opportunity to engineer a better system. Our approach is not just to sell products, but to deliver end-to-end solutions for real issues like cracks, bonding failures, and waterproofing concerns—backed by consistent quality and field performance.
            </p>

            <a
              data-wf--rt-button-v1--variant="base"
              href="/contact"
              onClick={(e) => { e.preventDefault(); navigate("contact"); }}
              className="rt-button w-inline-block"
              style={{
                backgroundColor: '#e53935',
                color: '#ffffff',
                borderColor: 'transparent',
              }}
            >
              <div className="rt-button-text-v1" style={{ color: '#ffffff' }}>Explore Solutions</div>
              <div className="rt-icon rt-color-primary w-embed" style={{ color: '#ffffff' }}>
                <svg width="9" height="9" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.750001 9.75L9.75 0.75M9.75 9.75L9.75 0.75L0.75 0.750001" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="rt-button-line w-embed" style={{ color: 'rgba(255, 255, 255, 0.45)' }}>
                <svg width="100%" height="100%" fill="none" overflow="visible" aria-hidden="true">
                  <rect width="100%" height="100%" rx="26.5" pathLength="1" stroke="currentColor" strokeWidth="1" strokeDasharray="1" strokeDashoffset="1"/>
                </svg>
              </div>
            </a>
          </div>
        </div>

        {/* ================= MARQUEE TRACK ================= */}
        <div className="rt-clients-main" style={{ marginTop: '20px' }}>
          <div className="rt-clients-logos">
            {/* Row 1 - Marquee Left */}
            <div className="rt-clients-row">
              <div className="rt-clients-track">
                <div className="rt-client-card"><div className="rt-icon"><img src="/assets/images/6ab616af7d89cd01fc49dab9_home-client-logo-six.svg" loading="lazy" alt="Client Logo 6"/></div></div>
                <div className="rt-client-card"><div className="rt-icon"><img src="/assets/images/6ab603df4da205cdc8480f0b_home-client-logo-one.svg" loading="lazy" alt="Client Logo 1"/></div></div>
                <div className="rt-client-card"><div className="rt-icon"><img src="/assets/images/6ab616afa9791b1f2d11d6ba_home-client-logo-two-grey.svg" loading="lazy" alt="Client Logo 2"/></div></div>
                <div className="rt-client-card"><div className="rt-icon"><img src="/assets/images/6ab603dfc905185805e3a63a_home-client-logo-three.svg" loading="lazy" alt="Client Logo 3"/></div></div>
                <div className="rt-client-card"><div className="rt-icon"><img src="/assets/images/6ab603df89d1a360f5747d55_home-client-logo-four.svg" loading="lazy" alt="Client Logo 4"/></div></div>
                <div className="rt-client-card"><div className="rt-icon"><img src="/assets/images/6ab603dfc557cd2f5d2429e0_home-client-logo-five.svg" loading="lazy" alt="Client Logo 5"/></div></div>
                {/* Loop clone */}
                <div className="rt-client-card"><div className="rt-icon"><img src="/assets/images/6ab616af7d89cd01fc49dab9_home-client-logo-six.svg" loading="lazy" alt="Client Logo 6"/></div></div>
                <div className="rt-client-card"><div className="rt-icon"><img src="/assets/images/6ab603df4da205cdc8480f0b_home-client-logo-one.svg" loading="lazy" alt="Client Logo 1"/></div></div>
                <div className="rt-client-card"><div className="rt-icon"><img src="/assets/images/6ab616afa9791b1f2d11d6ba_home-client-logo-two-grey.svg" loading="lazy" alt="Client Logo 2"/></div></div>
                <div className="rt-client-card"><div className="rt-icon"><img src="/assets/images/6ab603dfc905185805e3a63a_home-client-logo-three.svg" loading="lazy" alt="Client Logo 3"/></div></div>
                <div className="rt-client-card"><div className="rt-icon"><img src="/assets/images/6ab603df89d1a360f5747d55_home-client-logo-four.svg" loading="lazy" alt="Client Logo 4"/></div></div>
                <div className="rt-client-card"><div className="rt-icon"><img src="/assets/images/6ab603dfc557cd2f5d2429e0_home-client-logo-five.svg" loading="lazy" alt="Client Logo 5"/></div></div>
              </div>
            </div>

            {/* Row 2 - Marquee Right */}
            <div className="rt-clients-row" style={{ marginTop: '14px' }}>
              <div className="rt-clients-track">
                <div className="rt-client-card"><div className="rt-icon"><img src="/assets/images/6ab616afa9791b1f2d11d6ba_home-client-logo-two-grey.svg" loading="lazy" alt="Client Logo 2"/></div></div>
                <div className="rt-client-card"><div className="rt-icon"><img src="/assets/images/6ab603dfc905185805e3a63a_home-client-logo-three.svg" loading="lazy" alt="Client Logo 3"/></div></div>
                <div className="rt-client-card"><div className="rt-icon"><img src="/assets/images/6ab616af7d89cd01fc49dab9_home-client-logo-six.svg" loading="lazy" alt="Client Logo 6"/></div></div>
                <div className="rt-client-card"><div className="rt-icon"><img src="/assets/images/6ab603df4da205cdc8480f0b_home-client-logo-one.svg" loading="lazy" alt="Client Logo 1"/></div></div>
                <div className="rt-client-card"><div className="rt-icon"><img src="/assets/images/6ab603dfc557cd2f5d2429e0_home-client-logo-five.svg" loading="lazy" alt="Client Logo 5"/></div></div>
                <div className="rt-client-card"><div className="rt-icon"><img src="/assets/images/6ab603df89d1a360f5747d55_home-client-logo-four.svg" loading="lazy" alt="Client Logo 4"/></div></div>
                {/* Loop clone */}
                <div className="rt-client-card"><div className="rt-icon"><img src="/assets/images/6ab616afa9791b1f2d11d6ba_home-client-logo-two-grey.svg" loading="lazy" alt="Client Logo 2"/></div></div>
                <div className="rt-client-card"><div className="rt-icon"><img src="/assets/images/6ab603dfc905185805e3a63a_home-client-logo-three.svg" loading="lazy" alt="Client Logo 3"/></div></div>
                <div className="rt-client-card"><div className="rt-icon"><img src="/assets/images/6ab616af7d89cd01fc49dab9_home-client-logo-six.svg" loading="lazy" alt="Client Logo 6"/></div></div>
                <div className="rt-client-card"><div className="rt-icon"><img src="/assets/images/6ab603df4da205cdc8480f0b_home-client-logo-one.svg" loading="lazy" alt="Client Logo 1"/></div></div>
                <div className="rt-client-card"><div className="rt-icon"><img src="/assets/images/6ab603dfc557cd2f5d2429e0_home-client-logo-five.svg" loading="lazy" alt="Client Logo 5"/></div></div>
                <div className="rt-client-card"><div className="rt-icon"><img src="/assets/images/6ab603df89d1a360f5747d55_home-client-logo-four.svg" loading="lazy" alt="Client Logo 4"/></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
