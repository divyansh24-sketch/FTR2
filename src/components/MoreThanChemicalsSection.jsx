import React from 'react';

export default function MoreThanChemicalsSection() {
  const comparisons = [
    {
      feature: 'Polymer Purity',
      conventional: 'Diluted styrene-butadiene or reclaimed acrylic fillers',
      ftr: '100% Virgin elastomeric acrylate co-polymers with reactive cross-linking',
    },
    {
      feature: 'Crack Bridging Capacity',
      conventional: 'Fails under micro-fissures beyond 0.5mm',
      ftr: 'Maintains elastomeric memory up to 2.5mm dynamic crack expansion',
    },
    {
      feature: 'Substrate Breathability',
      conventional: 'Traps vapor blisters causing delamination and peeling',
      ftr: 'Micro-porous matrix releases internal moisture vapor while blocking liquid head',
    },
    {
      feature: 'Field Support',
      conventional: 'Sold off-the-shelf through dealers with zero job site accountability',
      ftr: 'FTR materials engineers provide on-site audits, pull-off tests, and quality signoff',
    },
  ];

  return (
    <section className="ftr-section" style={{ background: '#ffffff' }}>
      <div className="ftr-container">
        <div style={{ maxWidth: '680px', marginBottom: '40px' }}>
          <div className="badge-red">PERFORMANCE ADVANTAGE</div>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            color: '#111827',
            lineHeight: 1.15,
            marginBottom: '16px',
          }}>
            More Than Chemicals. <br />
            <span style={{ color: '#c8102e' }}>Engineered for Structural Tolerances.</span>
          </h2>
          <p style={{ color: '#6b7280', fontSize: '15px' }}>
            A direct side-by-side contrast between conventional commodity chemicals and FTR engineered materials.
          </p>
        </div>

        {/* Comparison Table */}
        <div style={{
          overflowX: 'auto',
          border: '1px solid #e5e7eb',
          borderRadius: '12px',
          background: '#ffffff',
          boxShadow: '0 4px 20px -5px rgba(0,0,0,0.05)',
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
            <thead>
              <tr style={{ background: '#f9fafb', borderBottom: '2px solid #e5e7eb' }}>
                <th style={{ padding: '18px 24px', fontSize: '13px', fontWeight: 800, color: '#6b7280', textTransform: 'uppercase' }}>Parameters</th>
                <th style={{ padding: '18px 24px', fontSize: '13px', fontWeight: 800, color: '#9ca3af', textTransform: 'uppercase' }}>Conventional Market Products</th>
                <th style={{ padding: '18px 24px', fontSize: '13px', fontWeight: 800, color: '#c8102e', textTransform: 'uppercase', background: '#fff1f2' }}>FTR Engineered Solutions</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((c, i) => (
                <tr key={c.feature} style={{ borderBottom: i < comparisons.length - 1 ? '1px solid #f3f4f6' : 'none' }}>
                  <td style={{ padding: '20px 24px', fontSize: '14px', fontWeight: 700, color: '#111827' }}>{c.feature}</td>
                  <td style={{ padding: '20px 24px', fontSize: '14px', color: '#6b7280', lineHeight: 1.5 }}>
                    <span style={{ color: '#ef4444', marginRight: '6px' }}>✕</span>
                    {c.conventional}
                  </td>
                  <td style={{ padding: '20px 24px', fontSize: '14px', color: '#111827', fontWeight: 600, background: '#fff1f2', lineHeight: 1.5 }}>
                    <span style={{ color: '#c8102e', marginRight: '6px' }}>✓</span>
                    {c.ftr}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
