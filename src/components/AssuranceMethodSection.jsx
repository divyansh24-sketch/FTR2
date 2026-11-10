import React from 'react';

export default function AssuranceMethodSection() {
  const steps = [
    {
      num: '01',
      title: 'Moisture & Substrate Audit',
      desc: 'On-site rebound hammer mapping, moisture meter core testing, and structural movement profiling before chemical selection.',
    },
    {
      num: '02',
      title: 'Precision Chemical Specification',
      desc: 'Formulation customized to exact hydrostatic pressure, temperature swings, and chemical exposure parameters.',
    },
    {
      num: '03',
      title: 'Mechanical Surface Prep',
      desc: 'Scarification, grit-blasting, and crack stitch debonding to ensure direct 100% molecular adhesion with parent concrete.',
    },
    {
      num: '04',
      title: 'Supervised Field Application',
      desc: 'Execution by trained applicator partners under direct supervision of FTR certified materials engineers.',
    },
    {
      num: '05',
      title: '10-Year Warranty Signoff',
      desc: '72-hour continuous flood testing, non-destructive moisture verification, and issuance of joint performance warranty.',
    },
  ];

  return (
    <section id="assurance" className="ftr-section" style={{
      background: '#f9fafb',
      borderTop: '1px solid #f3f4f6',
      borderBottom: '1px solid #f3f4f6',
    }}>
      <div className="ftr-container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 60px' }}>
          <div className="badge-red" style={{ justifyContent: 'center' }}>FIELD EXECUTION PROTOCOL</div>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            color: '#111827',
            lineHeight: 1.15,
            marginBottom: '16px',
          }}>
            The 5-Step Assurance Method. <br />
            <span style={{ color: '#c8102e' }}>Built for Permanent Protection.</span>
          </h2>
          <p style={{ color: '#6b7280', fontSize: '15px' }}>
            Products fail when application chemistry doesn’t match substrate reality. Our 5-step engineering playbook closes the loop.
          </p>
        </div>

        {/* 5-Step Circular Timeline */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '24px',
          position: 'relative',
        }}>
          {steps.map((st) => (
            <div key={st.num} className="ftr-card" style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              padding: '32px 20px',
              position: 'relative',
            }}>
              {/* Step Circle */}
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: '#fff1f2',
                border: '2px solid #c8102e',
                color: '#c8102e',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                fontWeight: 900,
                marginBottom: '20px',
              }}>
                {st.num}
              </div>

              <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#111827', marginBottom: '10px' }}>
                {st.title}
              </h3>

              <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.5 }}>
                {st.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
