import React from 'react';

export default function BuildersMarqueeSection() {
  const builders = [
    'LARSEN & TOUBRO',
    'TATA PROJECTS',
    'GODREJ PROPERTIES',
    'DLF LIMITED',
    'SHAPOORJI PALLONJI',
    'OBEROI REALTY',
    'PRESTIGE GROUP',
    'BRIGADE ENTERPRISES'
  ];

  return (
    <section className="ftr-section" style={{
      background: '#f9fafb',
      borderTop: '1px solid #f3f4f6',
      borderBottom: '1px solid #f3f4f6',
      padding: '60px 0',
    }}>
      <div className="ftr-container" style={{ textAlign: 'center' }}>
        <div className="badge-red" style={{ justifyContent: 'center' }}>INFRASTRUCTURE CLIENTELE</div>
        <h2 style={{
          fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
          fontWeight: 800,
          color: '#111827',
          marginBottom: '12px',
        }}>
          Engineered for India's Leading Builders. <br />
          <span style={{ color: '#c8102e' }}>Tested on 50M+ Sq. Ft. of Concrete.</span>
        </h2>
        <p style={{ color: '#6b7280', fontSize: '14px', maxWidth: '600px', margin: '0 auto 40px' }}>
          Approved and specified by premier developers, EPC contractors, and structural consultants across high-rise, commercial, and metro projects.
        </p>

        {/* Builder Name Pills */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
        }}>
          {builders.map((b) => (
            <div key={b} style={{
              background: '#ffffff',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '16px 28px',
              fontSize: '13px',
              fontWeight: 800,
              letterSpacing: '0.08em',
              color: '#374151',
              boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
            }}>
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
