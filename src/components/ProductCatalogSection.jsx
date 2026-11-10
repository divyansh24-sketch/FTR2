import React, { useState } from 'react';

export default function ProductCatalogSection() {
  const products = [
    {
      id: 'waterproofing',
      name: 'AquaProof 2K Elastomeric Membrane',
      category: 'Waterproofing Systems',
      desc: 'Two-component acrylic-modified cementitious coating designed for positive and negative hydrostatic pressure resistance up to 5 bar.',
      color: '#0284c7',
      highlights: ['300% Elongation with Crack Bridging', 'Direct tileable after 48 hours', 'Zero VOC & Potable Water Safe', 'UV & Weather Resilient'],
      packSize: '20kg (10kg Powder + 10kg Liquid)',
    },
    {
      id: 'aac-mortar',
      name: 'BlockBond Pro Jointing Mortar',
      category: 'Masonry Polymers',
      desc: 'High-strength, thin-bed polymer mortar engineered specifically for AAC block masonry, preventing thermal shrinkage cracks.',
      color: '#ca8a04',
      highlights: ['3mm Thin Bed Jointing', '3x Stronger than Sand-Cement Mortar', 'Eliminates Thermal Bridging', 'Zero Curing Required'],
      packSize: '40kg Moisture-Proof Bag',
    },
    {
      id: 'repair',
      name: 'PlastoCrete Structural Repair Mortar',
      category: 'Concrete Repair & Restoration',
      desc: 'Fibre-reinforced, non-shrink polymer mortar for structural concrete restoration, spalling repair, and column re-profiling.',
      color: '#c8102e',
      highlights: ['Compressive Strength > 45 MPa', 'Monolithic Adhesion with Steel Rebar', 'Chloride & Sulfate Barrier', 'Rapid Setting within 24 Hours'],
      packSize: '25kg Polymer Pack',
    },
    {
      id: 'repellent',
      name: 'HydroShield Clear Silane Barrier',
      category: 'Surface Repellents',
      desc: 'Deep-penetrating organo-silane water repellent that leaves natural stone, exposed concrete, and brick breathable yet 100% waterproof.',
      color: '#059669',
      highlights: ['Molecular Capillary Penetration', '100% Breathable & Non-Film Forming', 'Prevents Efflorescence & Fungal Stains', 'Clear Natural Matte Finish'],
      packSize: '5L & 20L Cans',
    },
    {
      id: 'tile-adhesive',
      name: 'TileFix Ultimate Polymer Fortified Adhesive',
      category: 'Tile & Stone Adhesives',
      desc: 'Heavy-duty polymer-modified cementitious adhesive engineered for large-format porcelain slabs and vitrified facade tiles.',
      color: '#7c3aed',
      highlights: ['Zero Vertical Slip on Facades', 'Extra Extended Open Time', 'Flexible Deformable C2TES1 Class', 'Submerged Swimming Pool Grade'],
      packSize: '20kg Heavy Duty Bag',
    },
  ];

  const [activeId, setActiveId] = useState(products[0].id);
  const activeProduct = products.find((p) => p.id === activeId) || products[0];

  return (
    <section id="products" className="ftr-section" style={{ background: '#ffffff' }}>
      <div className="ftr-container">
        {/* Section Header */}
        <div style={{ maxWidth: '720px', marginBottom: '50px' }}>
          <div className="badge-red">OUR PRODUCT PORTFOLIO</div>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            color: '#111827',
            lineHeight: 1.15,
            marginBottom: '16px',
          }}>
            Everything Your Structure Needs. <br />
            <span style={{ color: '#c8102e' }}>Engineered to Stand Out.</span>
          </h2>
          <p style={{ color: '#6b7280', fontSize: '15px', lineHeight: 1.6 }}>
            Every FTR formulation is purpose-built to address specific job-site stress points: differential thermal movement, hydrostatic pressure, and heavy load dynamics.
          </p>
        </div>

        {/* 2-Column Catalog Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '36px',
          alignItems: 'start',
        }}>
          {/* Left Category List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {products.map((p) => {
              const isSelected = p.id === activeId;
              return (
                <div
                  key={p.id}
                  onClick={() => setActiveId(p.id)}
                  style={{
                    padding: '20px 24px',
                    borderRadius: '10px',
                    border: isSelected ? '2px solid #c8102e' : '1px solid #e5e7eb',
                    background: isSelected ? '#fff1f2' : '#ffffff',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div>
                    <span style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      color: isSelected ? '#c8102e' : '#6b7280',
                      letterSpacing: '0.05em',
                    }}>
                      {p.category}
                    </span>
                    <h3 style={{
                      fontSize: '17px',
                      fontWeight: 800,
                      color: isSelected ? '#c8102e' : '#111827',
                      marginTop: '4px',
                    }}>
                      {p.name}
                    </h3>
                  </div>
                  <span style={{
                    fontSize: '18px',
                    color: isSelected ? '#c8102e' : '#9ca3af',
                    fontWeight: 900,
                  }}>
                    →
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right Featured Product Display Card */}
          <div className="ftr-card" style={{
            padding: '36px',
            background: 'linear-gradient(145deg, #ffffff 0%, #f9fafb 100%)',
            border: '2px solid #e5e7eb',
            position: 'sticky',
            top: '100px',
          }}>
            {/* Visual Container */}
            <div style={{
              height: '180px',
              background: 'radial-gradient(circle, #f3f4f6 0%, #ffffff 80%)',
              borderRadius: '12px',
              border: '1px solid #e5e7eb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '24px',
              position: 'relative',
            }}>
              <div style={{
                width: '120px',
                height: '130px',
                background: `linear-gradient(180deg, #ffffff 0%, ${activeProduct.color}20 100%)`,
                border: `2px solid ${activeProduct.color}`,
                borderRadius: '16px 16px 20px 20px',
                boxShadow: `0 15px 30px -10px ${activeProduct.color}40`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px',
              }}>
                <span style={{ fontSize: '9px', fontWeight: 900, color: activeProduct.color }}>FTR TECH</span>
                <span style={{ fontSize: '18px', fontWeight: 900, color: '#111827', margin: '4px 0' }}>PRO</span>
                <span style={{ fontSize: '8px', fontWeight: 700, color: '#6b7280', textAlign: 'center' }}>{activeProduct.category}</span>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span className="badge-red" style={{ marginBottom: 0 }}>{activeProduct.category}</span>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#6b7280', background: '#f3f4f6', padding: '3px 8px', borderRadius: '4px' }}>
                {activeProduct.packSize}
              </span>
            </div>

            <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#111827', marginBottom: '12px' }}>
              {activeProduct.name}
            </h3>

            <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.6, marginBottom: '20px' }}>
              {activeProduct.desc}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '28px' }}>
              {activeProduct.highlights.map((h) => (
                <div key={h} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>
                  <span style={{ color: '#c8102e', fontWeight: 900 }}>✓</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="#contact" className="btn-red" style={{ flex: 1, textAlign: 'center' }}>
                Get a Quote
              </a>
              <a href="#contact" className="btn-outline" style={{ flex: 1, textAlign: 'center' }}>
                Download TDS
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
