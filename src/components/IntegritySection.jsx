import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';

export default function IntegritySection() {
  const { navigate } = useNavigation();
  const [activeTab, setActiveTab] = useState('pillars'); // 'pillars' or 'vs'

  const pillars = [
    {
      num: '01',
      icon: '🎯',
      name: 'ROOT-CAUSE ENGINEERING',
      sub: 'Solution First, Product Next',
      desc: 'We diagnose negative moisture and structural movement first. Never pushing standalone buckets off a shelf.',
      badge: 'Zero shelf-pushing',
    },
    {
      num: '02',
      icon: '🛡️',
      name: 'MATERIAL RESPONSIBILITY',
      sub: 'Workmanship-Proof Chemistry',
      desc: 'Performance is engineered directly into our polymer matrix — forgiving on-site labor errors and mixing variances.',
      badge: 'Site-tolerant formulation',
    },
    {
      num: '03',
      icon: '🔬',
      name: 'PROBLEM ➔ DIAGNOSIS ➔ SYSTEM',
      sub: 'The FTR Principle',
      desc: 'Every recommendation follows a scientific 4-stage engineering protocol. Grounded in technical data, not guesswork.',
      badge: '100% scientific protocol',
    },
    {
      num: '04',
      icon: '⚡',
      name: 'MULTI-LAYER BARRIER',
      sub: 'Engineered Systems, Not Buckets',
      desc: 'Complete synchronized systems combining substrate primers, flexible elastomeric cores, and protective top-coats.',
      badge: 'Multi-layer protection',
    },
    {
      num: '05',
      icon: '🧪',
      name: 'PROOF BEFORE COMMITMENT',
      sub: 'Free On-Site Sample Demo',
      desc: 'We apply a live test patch directly onto your actual problem substrate to prove bonding and zero seepage before you order.',
      badge: 'Live on-site test trial',
    },
    {
      num: '06',
      icon: '🏆',
      name: 'ZERO RECURRING CALLBACKS',
      sub: 'First Time Right Standard',
      desc: 'High-flex synthetic polymers and rust passivators engineered to permanently stop the cycle of annual monsoon repairs.',
      badge: 'Permanent structural defense',
    },
  ];

  const comparisons = [
    {
      parameter: 'Polymer Flexibility & Stretch',
      traditional: 'Rigid cementitious slurries or brittle white putty that snap when concrete moves beyond 0.2mm.',
      ftr: 'High-tensile synthetic elastomeric polymers with 300%+ elongation that flex dynamically across seasons.',
    },
    {
      parameter: 'Substrate Diagnosis',
      traditional: 'Over-the-counter shelf products sold without understanding negative hydrostatic pressure.',
      ftr: 'Certified technical engineers visit your project to diagnose moisture pathways before prescribing any system.',
    },
    {
      parameter: 'Labor Sensitivity',
      traditional: 'Extremely fragile water-ratio requirements that fail completely if laborers misjudge mixing.',
      ftr: 'Engineered with forgiving active polymer ratios that cure reliably despite job site labor variability.',
    },
    {
      parameter: 'Long-Term Durability',
      traditional: 'Requires recurring patch repairs every 1 to 2 monsoons, multiplying lifetime expenditure.',
      ftr: 'First Time Right permanent defense backed by verified warranties and zero annual callbacks.',
    },
  ];

  return (
    <section id="integrity-section" style={{ padding: '90px 0 110px', position: 'relative' }}>
      <div className="w-layout-blockcontainer rt-container w-container">
        {/* Header */}
        <div style={{ maxWidth: '820px', margin: '0 auto 40px', textAlign: 'center' }}>
          <h2 data-scroll-text="" className="rt-gap-off rt-text-style-h2" style={{
            fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            color: '#111214',
            marginBottom: '16px',
          }}>
            Built with Integrity. <br />
            <span
              style={{
                color: '#e53935',
                display: 'inline-block',
                fontWeight: 900,
              }}
            >
              Engineered to Never Fail .
            </span>
          </h2>

          <p style={{ fontSize: '16px', color: '#52525b', lineHeight: 1.7, margin: 0 }}>
            We eliminate recurring structural failures at the substrate level. No rigid fillers, no guesswork, and zero seasonal callbacks.
          </p>

          {/* Tab Controls */}
          <div style={{
            display: 'inline-flex',
            gap: '12px',
            marginTop: '32px',
            padding: '6px',
            background: '#f4f4f5',
            borderRadius: '30px',
            border: '1px solid rgba(0, 0, 0, 0.08)',
          }}>
            <button
              onClick={() => setActiveTab('pillars')}
              style={{
                background: activeTab === 'pillars' ? '#e53935' : 'transparent',
                color: activeTab === 'pillars' ? '#ffffff' : '#52525b',
                border: 'none',
                padding: '10px 22px',
                borderRadius: '24px',
                fontSize: '13px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
            >
              01. The 6 FTR Engineering Pillars
            </button>
            <button
              onClick={() => setActiveTab('vs')}
              style={{
                background: activeTab === 'vs' ? '#e53935' : 'transparent',
                color: activeTab === 'vs' ? '#ffffff' : '#52525b',
                border: 'none',
                padding: '10px 22px',
                borderRadius: '24px',
                fontSize: '13px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
            >
              02. Traditional Method vs. The FTR Way
            </button>
          </div>
        </div>

        {/* Tab 1: The 6 Pillars */}
        {activeTab === 'pillars' && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}>
            {pillars.map((p) => (
              <div key={p.num} style={{
                background: '#f8f9fa',
                borderRadius: '20px',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                padding: '36px 30px',
                position: 'relative',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                transition: 'border-color 0.3s ease, transform 0.3s ease',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <div style={{
                    fontSize: '28px',
                    width: '54px',
                    height: '54px',
                    borderRadius: '14px',
                    background: 'rgba(229, 57, 53, 0.12)',
                    border: '1px solid rgba(229, 57, 53, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {p.icon}
                  </div>
                  <div style={{
                    fontSize: '11px',
                    fontWeight: 800,
                    color: '#e53935',
                    padding: '4px 10px',
                    borderRadius: '12px',
                    background: 'rgba(229, 57, 53, 0.1)',
                    border: '1px solid rgba(229, 57, 53, 0.25)',
                    letterSpacing: '0.05em',
                  }}>
                    PILLAR {p.num}
                  </div>
                </div>

                <div style={{
                  fontSize: '12px',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: '#e53935',
                  marginBottom: '6px',
                }}>
                  {p.name}
                </div>

                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 800,
                  color: '#111214',
                  marginBottom: '12px',
                  lineHeight: 1.25,
                }}>
                  {p.sub}
                </h3>

                <p style={{
                  fontSize: '14.5px',
                  color: '#52525b',
                  lineHeight: 1.6,
                  marginBottom: '20px',
                }}>
                  {p.desc}
                </p>

                <div style={{
                  display: 'inline-block',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#111214',
                  background: 'rgba(0, 0, 0, 0.04)',
                  padding: '4px 12px',
                  borderRadius: '14px',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                }}>
                  ✓ {p.badge}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Comparison */}
        {activeTab === 'vs' && (
          <div style={{
            background: '#ffffff',
            borderRadius: '20px',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
            overflow: 'hidden',
          }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '650px' }}>
                <thead>
                  <tr style={{ background: '#f4f4f5', borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}>
                    <th style={{ padding: '20px 24px', fontSize: '13px', fontWeight: 800, color: '#52525b', textTransform: 'uppercase' }}>Engineering Parameter</th>
                    <th style={{ padding: '20px 24px', fontSize: '13px', fontWeight: 800, color: '#ef4444', textTransform: 'uppercase' }}>Traditional Method</th>
                    <th style={{ padding: '20px 24px', fontSize: '13px', fontWeight: 800, color: '#e53935', textTransform: 'uppercase', background: 'rgba(229, 57, 53, 0.08)' }}>The FTR Way</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((c, i) => (
                    <tr key={i} style={{ borderBottom: i < comparisons.length - 1 ? '1px solid rgba(0, 0, 0, 0.06)' : 'none' }}>
                      <td style={{ padding: '22px 24px', fontSize: '14px', fontWeight: 700, color: '#111214' }}>{c.parameter}</td>
                      <td style={{ padding: '22px 24px', fontSize: '14px', color: '#52525b', lineHeight: 1.6 }}>
                        <span style={{ color: '#ef4444', marginRight: '8px' }}>✕</span>
                        {c.traditional}
                      </td>
                      <td style={{ padding: '22px 24px', fontSize: '14px', color: '#111214', fontWeight: 600, background: 'rgba(229, 57, 53, 0.06)', lineHeight: 1.6 }}>
                        <span style={{ color: '#22c55e', marginRight: '8px' }}>✓</span>
                        {c.ftr}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
