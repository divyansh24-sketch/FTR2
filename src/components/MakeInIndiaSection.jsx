import React from 'react';

export default function MakeInIndiaSection() {
  return (
    <section
      className="rt-section"
      style={{
        padding: '90px 0 80px',
        backgroundColor: '#ffffff',
        position: 'relative',
        borderTop: '1px solid rgba(0, 0, 0, 0.06)',
      }}
    >
      <div className="w-layout-blockcontainer rt-container w-container" style={{ textAlign: 'center' }}>
        {/* Tricolor Saffron & Green Accent Bars */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '22px',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              width: '46px',
              height: '7px',
              backgroundColor: '#ff9933',
              borderRadius: '9999px',
            }}
          />
          <span
            style={{
              display: 'inline-block',
              width: '46px',
              height: '7px',
              backgroundColor: '#138808',
              borderRadius: '9999px',
            }}
          />
        </div>

        {/* MADE IN INDIA Tag Badge */}
        <div>
          <span
            style={{
              display: 'inline-block',
              backgroundColor: '#fff3e8',
              color: '#ea580c',
              fontSize: '11.5px',
              fontWeight: 800,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '6px 20px',
              borderRadius: '9999px',
              border: '1px solid rgba(234, 88, 12, 0.15)',
              marginBottom: '24px',
            }}
          >
            MADE IN INDIA
          </span>
        </div>

        {/* Heading */}
        <h2
          style={{
            fontSize: 'clamp(2rem, 4.4vw, 3.2rem)',
            fontWeight: 850,
            color: '#111214',
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            margin: '0 auto 32px',
            maxWidth: '850px',
          }}
        >
          Proudly{' '}
          <span
            style={{
              color: '#ea580c',
              display: 'inline-block',
              fontWeight: 900,
            }}
          >
            Indian
          </span>
          , Globally Trusted
        </h2>

        {/* Make in India Gear Lion Artwork */}
        <div
          style={{
            margin: '0 auto 32px',
            maxWidth: '440px',
            width: '88%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src="/assets/images/make-in-india-lion.png"
            alt="Make in India Gear Lion"
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '260px',
              objectFit: 'contain',
              display: 'block',
              filter: 'drop-shadow(0 10px 24px rgba(0, 0, 0, 0.08))',
            }}
            loading="lazy"
          />
        </div>

        {/* Subtitle */}
        <h4
          style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
            fontWeight: 700,
            color: '#18181b',
            margin: '0 auto 14px',
            letterSpacing: '-0.01em',
          }}
        >
          Engineering excellence from the heart of India
        </h4>

        {/* Description Body */}
        <p
          style={{
            fontSize: '15px',
            lineHeight: 1.7,
            color: '#52525b',
            maxWidth: '720px',
            margin: '0 auto',
            fontWeight: 400,
          }}
        >
          All FTR Solutions products are manufactured in India using advanced technology and
          stringent quality control measures, ensuring world-class performance for construction
          projects across the country.
        </p>
      </div>
    </section>
  );
}
