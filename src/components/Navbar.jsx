import React, { useState, useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';

export default function Navbar() {
  const { currentRoute, navigate } = useNavigation();
  const [activeTab, setActiveTab] = useState('solutions');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'solutions', label: 'Solutions', target: 'services-section' },
    { id: 'why-ftr', label: 'Why FTR', target: 'integrity-section' },
    { id: 'products', label: 'Products', target: 'products-section' },
    { id: 'clients', label: 'Our Clients', target: 'clients-section' },
    { id: 'testimonials', label: 'Testimonials', target: 'testimonials-section' },
    { id: 'faq', label: 'FAQ', target: 'faq-section' },
  ];

  return (
    <>
      <nav
        className="rt-floating-navbar"
        style={{
          position: 'fixed',
          top: '16px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
          width: 'calc(100% - 40px)',
          maxWidth: '1200px',
          background: '#ffffff',
          borderRadius: '9999px',
          padding: '8px 12px 8px 22px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 12px 32px rgba(0, 0, 0, 0.22)',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Left: Brand Logo (FTR with red checkmark & subtitle) */}
        <div
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            navigate('home');
          }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            cursor: 'pointer',
            userSelect: 'none',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span
              style={{
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontSize: '22px',
                fontWeight: 900,
                color: '#111214',
                letterSpacing: '-0.04em',
                lineHeight: 1,
              }}
            >
              FTR
            </span>
            {/* Red Circle with Checkmark */}
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '18px',
                height: '18px',
                backgroundColor: '#e53935',
                borderRadius: '50%',
                color: '#ffffff',
                fontSize: '11px',
                fontWeight: 800,
                lineHeight: 1,
                boxShadow: '0 2px 6px rgba(229, 57, 53, 0.4)',
              }}
            >
              ✓
            </span>
          </div>
          <span
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontSize: '8.5px',
              fontWeight: 700,
              color: '#71717a',
              letterSpacing: '0.04em',
              lineHeight: 1,
              marginTop: '2px',
            }}
          >
            First Time Right
          </span>
        </div>

        {/* Center: Navigation Links in soft pill container (Desktop) */}
        <div
          className="rt-nav-links-center rt-landscape-display-none"
          style={{
            display: 'flex',
            alignItems: 'center',
            background: '#f4f4f5',
            borderRadius: '9999px',
            padding: '3px 4px',
            gap: '2px',
          }}
        >
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  scrollTo(item.target);
                }}
                style={{
                  border: 'none',
                  outline: 'none',
                  cursor: 'pointer',
                  padding: '7px 18px',
                  borderRadius: '9999px',
                  fontSize: '13.5px',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#111214' : '#52525b',
                  background: isActive ? '#ffffff' : 'transparent',
                  boxShadow: isActive ? '0 2px 8px rgba(0, 0, 0, 0.08)' : 'none',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = '#111214';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = '#52525b';
                }}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Right: Black rounded CTA button (cloud/moon icon removed per user request) */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Black Pill Action Button: BROCHURE */}
          <a
            href="#site-inspection-form"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('site-inspection-form');
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#111214',
              color: '#ffffff',
              padding: '10px 24px',
              borderRadius: '9999px',
              fontSize: '13px',
              fontWeight: 800,
              letterSpacing: '0.04em',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.2)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#e53935';
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#111214';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <span>BROCHURE</span>
            <span style={{ fontSize: '13px' }}>↓</span>
          </a>

          {/* Hamburger Menu Toggle (Mobile / Tablet only) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rt-mobile-menu-trigger"
            style={{
              display: 'none',
              border: 'none',
              background: '#f4f4f5',
              borderRadius: '50%',
              width: '38px',
              height: '38px',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              marginLeft: '8px',
            }}
            aria-label="Toggle menu"
          >
            <div style={{ width: '18px', height: '14px', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <span style={{ height: '2px', background: '#111', borderRadius: '2px' }}></span>
              <span style={{ height: '2px', background: '#111', borderRadius: '2px' }}></span>
              <span style={{ height: '2px', background: '#111', borderRadius: '2px' }}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '76px',
            left: '16px',
            right: '16px',
            background: '#ffffff',
            borderRadius: '24px',
            padding: '24px',
            zIndex: 999,
            boxShadow: '0 20px 48px rgba(0, 0, 0, 0.25)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.target)}
              style={{
                border: 'none',
                background: 'transparent',
                textAlign: 'left',
                fontSize: '16px',
                fontWeight: 600,
                color: '#111214',
                padding: '10px 0',
                borderBottom: '1px solid #f4f4f5',
                cursor: 'pointer',
              }}
            >
              {item.label}
            </button>
          ))}
          <a
            href="#site-inspection-form"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('site-inspection-form');
            }}
            style={{
              backgroundColor: '#e53935',
              color: '#ffffff',
              padding: '12px 20px',
              borderRadius: '9999px',
              textAlign: 'center',
              fontWeight: 700,
              textDecoration: 'none',
              marginTop: '8px',
            }}
          >
            Book Site Diagnosis ↗
          </a>
        </div>
      )}
    </>
  );
}
