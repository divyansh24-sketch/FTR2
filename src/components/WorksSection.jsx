import React from 'react';
import { useNavigation } from '../context/NavigationContext';

export default function WorksSection() {
  const { navigate } = useNavigation();

  return (
    <section className="rt-section-bottom-gap">
      <div className="w-layout-blockcontainer rt-container w-container">
        {/* Heading Row with Iconic W [Ring] rk Heading */}
        <div className="rt-vertical-top rt-heading-row" style={{ marginBottom: '32px' }}>
          <h2
            className="rt-gap-off"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              letterSpacing: '-0.02em',
              fontWeight: 900,
              fontSize: 'clamp(3.2rem, 7.5vw, 6.2rem)',
              lineHeight: 1,
              margin: 0,
              color: '#111214',
            }}
          >
            <span style={{ color: '#111214', display: 'inline-block' }}>W</span>
            <span
              style={{
                display: 'inline-block',
                width: '1.45em',
                height: '0.68em',
                border: '0.14em solid #111214',
                borderRadius: '9999px',
                margin: '0 0.06em',
                verticalAlign: 'middle',
              }}
            />
            <span style={{ color: '#111214', display: 'inline-block' }}>rk</span>
          </h2>
          <p className="rt-gap-off rt-label-text">
            [{' '}04 Selected{' '}<span className="rt-color-primary">FTR solutions</span>{' '} ]
          </p>
        </div>

        {/* 4 FTR Featured Systems Grid */}
        <div className="rt-work-grid">
          {/* 1. FTR NOSEEP Barrier System */}
          <a
            href="#site-inspection-form"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('site-inspection-form');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              else navigate('work-detail', 'ftr-noseep-barrier-system');
            }}
            className="rt-work-card w-inline-block"
          >
            <div className="rt-work-card-top">
              <div className="rt-work-text">
                <p className="rt-gap-off rt-body-text-v4 rt-color-primary">
                  FTR NOSEEP® Barrier System
                </p>
                <p className="rt-gap-off rt-font-b2">
                  Terrace &amp; Roof Hydrostatic Waterproofing
                </p>
              </div>
              <div className="rt-icon rt-color-primary w-embed">
                <svg width="10" height="10" viewBox="0 0 11.5 11.5" fill="none" overflow="visible" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.750001 10.75L10.75 0.75M10.75 10.75L10.75 0.75L0.75 0.750001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="rt-banner-card">
              <img
                src="/assets/images/6ab603dfc8a61abc8d1d0387_f6716b41301bc392366782107d512132_home-work-gimbono-image.webp"
                loading="lazy"
                sizes="100vw"
                srcSet="/assets/images/6ab603dfc8a61abc8d1d0387_f6716b41301bc392366782107d512132_home-work-gimbono-image-p-500.webp 500w, /assets/images/6ab603dfc8a61abc8d1d0387_f6716b41301bc392366782107d512132_home-work-gimbono-image-p-800.webp 800w, /assets/images/6ab603dfc8a61abc8d1d0387_f6716b41301bc392366782107d512132_home-work-gimbono-image-p-1080.webp 1080w, /assets/images/6ab603dfc8a61abc8d1d0387_f6716b41301bc392366782107d512132_home-work-gimbono-image.webp 1740w"
                alt="FTR NOSEEP Waterproofing Application"
              />
            </div>
          </a>

          {/* 2. FTR NORUST Advanced Passivation */}
          <a
            href="#site-inspection-form"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('site-inspection-form');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              else navigate('work-detail', 'ftr-norust-passivation');
            }}
            className="rt-work-card w-inline-block"
          >
            <div className="rt-work-card-top">
              <div className="rt-work-text">
                <p className="rt-gap-off rt-body-text-v4 rt-color-primary">
                  FTR NORUST® Advanced Passivation
                </p>
                <p className="rt-gap-off rt-font-b2">
                  Molecular Rebar Corrosion Conversion
                </p>
              </div>
              <div className="rt-icon rt-color-primary w-embed">
                <svg width="10" height="10" viewBox="0 0 11.5 11.5" fill="none" overflow="visible" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.750001 10.75L10.75 0.75M10.75 10.75L10.75 0.75L0.75 0.750001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="rt-banner-card">
              <img
                src="/assets/images/6ab603df112ddd1321763bf9_home-work-branding-image.avif"
                loading="lazy"
                sizes="100vw"
                srcSet="/assets/images/6ab603df112ddd1321763bf9_home-work-branding-image-p-500.avif 500w, /assets/images/6ab603df112ddd1321763bf9_home-work-branding-image-p-800.avif 800w, /assets/images/6ab603df112ddd1321763bf9_home-work-branding-image-p-1080.avif 1080w, /assets/images/6ab603df112ddd1321763bf9_home-work-branding-image-p-1600.avif 1600w, /assets/images/6ab603df112ddd1321763bf9_home-work-branding-image.avif 1740w"
                alt="FTR NORUST Rebar Passivation"
              />
            </div>
          </a>

          {/* 3. FTR BlockBond Thin-Bed Adhesion */}
          <a
            href="#site-inspection-form"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('site-inspection-form');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              else navigate('work-detail', 'ftr-blockbond-adhesion');
            }}
            className="rt-work-card w-inline-block"
          >
            <div className="rt-work-card-top">
              <div className="rt-work-text">
                <p className="rt-gap-off rt-body-text-v4 rt-color-primary">
                  FTR BlockBond® Thin-Bed Adhesion
                </p>
                <p className="rt-gap-off rt-font-b2">
                  3mm High-Tensile AAC Block Jointing
                </p>
              </div>
              <div className="rt-icon rt-color-primary w-embed">
                <svg width="10" height="10" viewBox="0 0 11.5 11.5" fill="none" overflow="visible" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.750001 10.75L10.75 0.75M10.75 10.75L10.75 0.75L0.75 0.750001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="rt-banner-card">
              <img
                src="/assets/images/6ab603df17b9e5b0b68d6b91_home-work-mock-up-billboard-image-image.avif"
                loading="lazy"
                sizes="100vw"
                srcSet="/assets/images/6ab603df17b9e5b0b68d6b91_home-work-mock-up-billboard-image-image-p-500.avif 500w, /assets/images/6ab603df17b9e5b0b68d6b91_home-work-mock-up-billboard-image-image-p-800.avif 800w, /assets/images/6ab603df17b9e5b0b68d6b91_home-work-mock-up-billboard-image-image-p-1080.avif 1080w, /assets/images/6ab603df17b9e5b0b68d6b91_home-work-mock-up-billboard-image-image-p-1600.avif 1600w, /assets/images/6ab603df17b9e5b0b68d6b91_home-work-mock-up-billboard-image-image.avif 1740w"
                alt="FTR BlockBond AAC Jointing"
              />
            </div>
          </a>

          {/* 4. FTR ERP Plaster & Putty Matrix */}
          <a
            href="#site-inspection-form"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('site-inspection-form');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              else navigate('work-detail', 'ftr-erp-plaster-matrix');
            }}
            className="rt-work-card w-inline-block"
          >
            <div className="rt-work-card-top">
              <div className="rt-work-text">
                <p className="rt-gap-off rt-body-text-v4 rt-color-primary">
                  FTR ERP® Plaster &amp; Putty Matrix
                </p>
                <p className="rt-gap-off rt-font-b2">
                  Microfiber Structural Crack-Stop Defense
                </p>
              </div>
              <div className="rt-icon rt-color-primary w-embed">
                <svg width="10" height="10" viewBox="0 0 11.5 11.5" fill="none" overflow="visible" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.750001 10.75L10.75 0.75M10.75 10.75L10.75 0.75L0.75 0.750001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="rt-banner-card">
              <img
                src="/assets/images/6ab603df1c6549650648ed29_home-work-packaging-image.avif"
                loading="lazy"
                sizes="100vw"
                srcSet="/assets/images/6ab603df1c6549650648ed29_home-work-packaging-image-p-500.avif 500w, /assets/images/6ab603df1c6549650648ed29_home-work-packaging-image-p-800.avif 800w, /assets/images/6ab603df1c6549650648ed29_home-work-packaging-image-p-1080.avif 1080w, /assets/images/6ab603df1c6549650648ed29_home-work-packaging-image-p-1600.avif 1600w, /assets/images/6ab603df1c6549650648ed29_home-work-packaging-image.avif 1740w"
                alt="FTR ERP Structural Plaster & Putty"
              />
            </div>
          </a>
        </div>

        {/* Bottom Link */}
        <div className="rt-text-center" style={{ marginTop: '36px' }}>
          <a
            href="#site-inspection-form"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('site-inspection-form');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              else navigate('works');
            }}
            className="rt-text-style-h5 rt-link-underline"
          >
            Explore all engineering systems
          </a>
        </div>
      </div>
    </section>
  );
}
