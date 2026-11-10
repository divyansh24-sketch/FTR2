import React from 'react';
import { useNavigation } from '../context/NavigationContext';

export default function BlogSection() {
  const { navigate } = useNavigation();

  const products = [
    {
      num: '01',
      tag: 'PRODUCT SYSTEM 01 • CRACK STOP',
      name: 'FTR ERP® Plaster Fiber',
      category: 'Elastomeric Repair Plaster',
      subtitle: 'Dynamic Microfiber-Elastomeric Crack-Stop Plaster',
      desc: 'Formulated with active crack-bridging elastomeric polymers and synthetic microfibers to permanently eliminate recurring monsoon cracks.',
      specs: 'Coverage: 35–40 sq.ft @ 2mm • 20kg Bucket',
      img: '/assets/images/product-erp-fiber.png',
    },
    {
      num: '02',
      tag: 'PRODUCT SYSTEM 02 • WATERPROOFING',
      name: 'FTR NOSEEP® 1',
      category: 'Elastomeric Membrane',
      subtitle: 'Multi-Layer Acrylic Elastomeric Terrace & Wet Wall Barrier',
      desc: 'Seamless liquid polymer waterproofing with 300%+ elongation that flexes with structural slab movement across terraces and wet areas.',
      specs: 'Coverage: 18–22 sq.ft/kg (2 coats) • 20kg Bucket',
      img: '/assets/images/product-noseep-1-transparent.png',
    },
    {
      num: '03',
      tag: 'PRODUCT SYSTEM 03 • RUST PROTECTION',
      name: 'FTR NORUST® Advanced Shield',
      category: 'Molecular Rust Converter',
      subtitle: 'Molecular Rebar Passivation & Metallic Iron Shield',
      desc: 'Direct chemical converter that passivates corroded ferric rebar into an inert, non-corrosive metallic iron shield without sandblasting.',
      specs: 'Coverage: 120–140 sq.ft/L • 20L Metal Can',
      img: '/assets/images/product-norust.png',
    },
  ];

  return (
    <section id="products-section" className="rt-small-gutter" style={{ padding: '100px 0 110px' }}>
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="w-layout-vflex rt-vertical-main">
          {/* Header matching original Bentro */}
          <div className="w-layout-vflex rt-vertical-top" style={{ position: 'relative' }}>
            <h2 className="rt-gap-off rt-col-seven" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
              PRODUCTS
            </h2>
            <p className="rt-gap-off rt-label-text">
              [ 350+ Happy <span className="rt-color-primary" style={{ color: '#e53935' }}>customers</span> ]
            </p>
            <div className="rt-blog-button-wrapper">
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
                <div className="rt-button-text-v1" style={{ color: '#ffffff' }}>Explore products</div>
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

          {/* 3-Column Bento Showcase: Clean, Editorial, No squished buckets, No overlapping text */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '28px',
              width: '100%',
              marginTop: '48px',
            }}
          >
            {products.map((item) => (
              <div
                key={item.num}
                className="rt-post-card"
                style={{
                  background: '#f8f9fa',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  borderRadius: '22px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                  cursor: 'pointer',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = 'rgba(229, 57, 53, 0.45)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.08)';
                  const img = e.currentTarget.querySelector('.product-stage-img');
                  if (img) img.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.08)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.04)';
                  const img = e.currentTarget.querySelector('.product-stage-img');
                  if (img) img.style.transform = 'scale(1)';
                }}
                onClick={() => {
                  const el = document.getElementById('site-inspection-form');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else navigate('contact');
                }}
              >
                {/* Dedicated Product Showcase Stage */}
                <div
                  style={{
                    height: '280px',
                    width: '100%',
                    background: 'radial-gradient(ellipse at center, #ffffff 0%, #f0f2f5 85%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '24px',
                    position: 'relative',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
                  }}
                >
                  <img
                    className="product-stage-img"
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    style={{
                      maxHeight: '230px',
                      maxWidth: '85%',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 12px 24px rgba(0, 0, 0, 0.15))',
                      transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  />

                  {/* Top Category Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                      background: '#ffffff',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(0, 0, 0, 0.1)',
                      borderRadius: '100px',
                      padding: '4px 12px',
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#e53935',
                      letterSpacing: '0.04em',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                    }}
                  >
                    {item.category}
                  </div>
                </div>

                {/* Content Box with Zero Overlap */}
                <div
                  style={{
                    padding: '26px 24px 22px',
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                  }}
                >
                  <div
                    style={{
                      fontSize: '11px',
                      fontWeight: 800,
                      color: '#e53935',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      marginBottom: '8px',
                    }}
                  >
                    {item.tag}
                  </div>

                  <h3
                    style={{
                      fontSize: '20px',
                      fontWeight: 800,
                      color: '#111214',
                      lineHeight: 1.3,
                      marginBottom: '6px',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {item.name}
                  </h3>

                  <div
                    style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      color: '#374151',
                      marginBottom: '10px',
                    }}
                  >
                    {item.subtitle}
                  </div>

                  <p
                    style={{
                      fontSize: '13.5px',
                      lineHeight: 1.6,
                      color: '#52525b',
                      marginBottom: '20px',
                      flexGrow: 1,
                    }}
                  >
                    {item.desc}
                  </p>

                  {/* Specs & Link Row */}
                  <div
                    style={{
                      borderTop: '1px solid rgba(0, 0, 0, 0.08)',
                      paddingTop: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span style={{ fontSize: '12px', color: '#71717a', fontWeight: 600 }}>
                      {item.specs}
                    </span>
                    <span style={{ fontSize: '13px', fontWeight: 800, color: '#e53935', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      View TDS ↗
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
