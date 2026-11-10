import React from 'react';
import { useNavigation } from '../context/NavigationContext';

export default function CTABannerSection() {
  const { navigate } = useNavigation();

  return (
    <section className="rt-section" style={{ position: 'relative', padding: '50px 0 30px' }}>
      <div className="w-layout-blockcontainer rt-container w-container">
        {/* Simple 80% Width, 150px Height CTA Card with rich orange background */}
        <div
          className="rt-cta-card-box"
          style={{
            width: '80%',
            maxWidth: '1000px',
            minHeight: '150px',
            margin: '0 auto',
            background: 'linear-gradient(135deg, #000000 0%, #e88d8b 100%)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            borderRadius: '20px',
            padding: '24px 36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            boxShadow: '0 20px 45px rgba(234, 88, 12, 0.28)',
            boxSizing: 'border-box',
          }}
        >
          <div style={{ flex: '1 1 320px', maxWidth: '640px' }}>
            <h3
              style={{
                fontSize: 'clamp(1.15rem, 2.2vw, 1.6rem)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.35,
                margin: 0,
                letterSpacing: '-0.01em',
              }}
            >
              Ready to permanently eliminate structural seepage and rebar corrosion?
            </h3>
          </div>

          <div style={{ flexShrink: 0 }}>
            <a
              data-wf--rt-button-v1--variant="base"
              href="#site-inspection-form"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('site-inspection-form');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else navigate('contact');
              }}
              className="rt-button w-inline-block"
              style={{
                backgroundColor: '#ffffff',
                borderColor: '#ffffff',
                color: '#111214',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)',
              }}
            >
              <div className="rt-button-text-v1" style={{ color: '#f5f6f7', fontWeight: 800, whiteSpace: 'nowrap' }}>
                Book Free Site Diagnosis
              </div>
              <div className="rt-icon rt-color-primary w-embed" style={{ color: '#f9f9fa' }}>
                <svg width="10" height="10" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.750001 9.75L9.75 0.75M9.75 9.75L9.75 0.75L0.75 0.750001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="rt-button-line w-embed">
                <svg width="100%" height="100%" fill="none" overflow="visible" aria-hidden="true">
                  <rect width="100%" height="100%" rx="26.5" pathLength="1" stroke="currentColor" strokeWidth="1" strokeDasharray="1" strokeDashoffset="1"/>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
