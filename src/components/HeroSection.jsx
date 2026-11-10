import React from 'react';
import { useNavigation } from '../context/NavigationContext';

export default function HeroSection() {
  const { navigate } = useNavigation();

  return (
    <section className="rt-banner" style={{ paddingTop: '100px', position: 'relative' }}>
      <div className="w-layout-blockcontainer rt-container w-container">
        {/* Tagline comfortably positioned below navbar */}
       

        {/* Hero Title */}
        <div className="rt-banner-title" style={{ marginBottom: '10px' }}>
          <h1
            style={{
              fontSize: 'clamp(3.8rem, 12.5vw, 12.5rem)',
              fontWeight: 950,
              letterSpacing: '-0.05em',
              lineHeight: 0.86,
              textTransform: 'uppercase',
              margin: '0 auto',
              textAlign: 'center',
              color: '#111214',
              display: 'block',
              fontFamily: '"Stack Sans Headline", sans-serif',
              textShadow: 'none',
            }}
          >
            BUILT TO <span style={{ color: '#e53935' }}>LAST</span>
          </h1>
        </div>

        {/* Mountain Backdrop */}
        <div className="rt-banner-mountain">
          <img
            src="/assets/images/6ab60e882c31e5fd217ee343_home-hero-mountain-image.webp"
            alt="Dark rocky mountain range silhouette"
            sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
            srcSet="/assets/images/6ab60e882c31e5fd217ee343_home-hero-mountain-image-p-500.webp 500w, /assets/images/6ab60e882c31e5fd217ee343_home-hero-mountain-image-p-800.webp 800w, /assets/images/6ab60e882c31e5fd217ee343_home-hero-mountain-image-p-1080.webp 1080w, /assets/images/6ab60e882c31e5fd217ee343_home-hero-mountain-image-p-1600.webp 1600w, /assets/images/6ab60e882c31e5fd217ee343_home-hero-mountain-image.webp 1920w"
          />
        </div>

        {/* 5 Product Showcase Cards & Specs */}
        <div className="rt-banner-slider" style={{ opacity: 1, visibility: 'visible' }}>
          <div className="rt-banner-pair rt-tab-display-none" style={{ opacity: 1, visibility: 'visible' }}>
            <div className="rt-banner-card" style={{ opacity: 1, visibility: 'visible', background: 'transparent', border: 'none', boxShadow: 'none' }}>
              <img
                src="/assets/images/product-erp-fiber.png"
                alt="FTR ERP Elastomeric Repair Plaster Fiber"
                loading="eager"
              />
            </div>
            <div className="rt-banner-card" style={{ opacity: 1, visibility: 'visible', background: 'transparent', border: 'none', boxShadow: 'none' }}>
              <img
                src="/assets/images/product-noseep-1-transparent.png"
                alt="FTR NOSEEP Acrylic Elastomeric Membrane Waterproofing"
                loading="eager"
              />
            </div>
          </div>

          <div className="rt-banner-card" style={{ opacity: 1, visibility: 'visible', background: 'transparent', border: 'none', boxShadow: 'none' }}>
            <img
              src="/assets/images/product-norust.png"
              alt="FTR NORUST Advanced Rust Protection"
              loading="eager"
            />
          </div>

          <div className="rt-banner-aside" style={{ opacity: 1, visibility: 'visible' }}>
            <div className="rt-banner-intro" style={{ opacity: 1, visibility: 'visible' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '8px',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#e53935',
                  marginBottom: '10px',
                  letterSpacing: '0.02em',
                }}
              >
                <span>💧 Waterproofing</span>
                <span style={{ color: 'rgba(0,0,0,0.2)' }}>|</span>
                <span>🧱 Adhesive</span>
                <span style={{ color: 'rgba(0,0,0,0.2)' }}>|</span>
                <span>🛡️ Rust Protection</span>
              </div>

              <p
                className="rt-gap-off rt-color-primary rt-body-text-v1"
                style={{
                  fontSize: '13.5px',
                  lineHeight: 1.6,
                  marginBottom: '14px',
                  color: '#ebebf3',
                }}
              >
                High-performance engineered construction chemicals and protective systems designed to shield, bond, and withstand the harshest environmental stresses. Certified durability from structural foundation to final finish.
              </p>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  fontSize: '12.5px',
                  fontWeight: 600,
                  color: '#dde2eb',
                  marginBottom: '18px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>💧</span>
                  <span>100% Water Impermeable</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>🧱</span>
                  <span>High Polymer Strength</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>🛡️</span>
                  <span>Converts Rust into Stable Iron</span>
                </div>
              </div>

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
                  backgroundColor: '#e53935',
                  color: '#ffffff',
                  borderColor: 'transparent',
                }}
              >
                <div className="rt-button-text-v1" style={{ color: '#ffffff' }}>Get in touch</div>
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

            <div className="rt-banner-pair rt-banner-pair-end" style={{ opacity: 1, visibility: 'visible' }}>
              <div className="rt-banner-card" style={{ opacity: 1, visibility: 'visible', background: 'transparent', border: 'none', boxShadow: 'none' }}>
                <img
                  src="/assets/images/product-block-bond-transparent.png"
                  alt="FTR BlockBond Polymerized Adhesive"
                  loading="eager"
                />
              </div>
              <div className="rt-banner-card" style={{ opacity: 1, visibility: 'visible', background: 'transparent', border: 'none', boxShadow: 'none' }}>
                <img
                  src="/assets/images/product-erp-smooth-transparent.png"
                  alt="FTR ERP Elastomeric Resurfacing Putty Smooth"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>

        

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
            backgroundColor: '#e53935',
            color: '#ffffff',
            borderColor: 'transparent',
          }}
        >
          <div className="rt-button-text-v1" style={{ color: '#ffffff' }}>Start site diagnosis</div>
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
    </section>
  );
}
