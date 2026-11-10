import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';

export default function FAQSection() {
  const { navigate } = useNavigation();
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      num: '01',
      question: 'Why do traditional construction repairs fail after 1–2 monsoons?',
      answer:
        'Ordinary contractors apply rigid fillers (thick sand-cement, brittle white putty, or tar felts) that treat only visible surface symptoms. Under 50°C summer heat and ambient slab movement, rigid bonds snap. FTR engineers high-tensile elastomeric polymers with 300%+ stretch that flex with building movement permanently.',
    },
    {
      num: '02',
      question: 'What is FTR’s “Solution First, Product Next” philosophy?',
      answer:
        'We do not push standalone buckets off a retail shelf. Our certified technical sales engineers visit your ongoing project to diagnose negative-side dampness, structural cracks, and substrate porosity first — prescribing a complete synchronized multi-layer system.',
    },
    {
      num: '03',
      question: 'How do you guarantee performance against poor site workmanship?',
      answer:
        'As stated in the FTR Mission Statement: "Performance is the responsibility of the material — not an excuse left to execution." Our synthetic formulations are engineered with forgiving water ratios and active polymers that cure reliably despite job site labor variability.',
    },
    {
      num: '04',
      question: 'Can we test an FTR live sample on our ongoing project before ordering?',
      answer:
        'Yes, 100% free of cost. We provide strategic on-site mockups where an FTR technical engineer applies a live test patch directly onto your problem substrate to prove tensile adhesion, workability, and zero-leakage defense before you order.',
    },
    {
      num: '05',
      question: 'How does 3mm FTR Block Bond® replace 15mm thick sand mortar?',
      answer:
        'Traditional 15mm sand mortar undergoes severe drying shrinkage, causing diagonal stair-step cracks. FTR Block Bond® utilizes self-curing molecular polymers to create a 3mm cross-linking joint stronger than the AAC block itself, with zero shrinkage cracking.',
    },
    {
      num: '06',
      question: 'What is the FTR NORUST® advantage over wire brushing corroded rebar?',
      answer:
        'Wire brushing leaves microscopic active rust behind, which continues oxidising, expands 600%, and bursts surrounding concrete. FTR NORUST® is a direct chemical converter that passivates ferric oxides into an inert, non-corrosive metallic iron shield without sandblasting.',
    },
  ];

  return (
    <section id="faq-section" data-wf--rt-faq--variant="base" className="rt-small-gutter" style={{ padding: '90px 0 60px', position: 'relative' }}>
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="rt-bg-primary-accent rt-faq-box" style={{
          background: '#f8f9fa',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          borderRadius: '24px',
          padding: '48px 40px',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.03)',
        }}>
          <div className="w-layout-hflex rt-faq-main" style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
            {/* Left FAQ Info */}
            <div className="w-layout-vflex rt-faq-left" style={{ flex: '1 1 300px', maxWidth: '380px' }}>
              <h2 className="rt-gap-off" style={{
                fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
                fontWeight: 800,
                color: '#111214',
                lineHeight: 1.1,
                marginBottom: '16px',
              }}>
                Frequently Asked Questions.
              </h2>

              <p className="rt-gap-off rt-label-text rt-faq-description" style={{ fontSize: '15px', lineHeight: 1.6, color: '#52525b' }}>
                Straight from the FTR Engineering Playbook. Everything you need to know about <span className="rt-color-primary" style={{ color: '#e53935' }}>molecular polymer defense</span>.
              </p>
            </div>

            {/* Right Accordion List */}
            <div className="w-layout-vflex rt-faq-right" style={{ flex: '2 1 480px' }}>
              {faqs.map((f, i) => {
                const isOpen = openIndex === i;
                return (
                  <div
                    key={f.num}
                    className="rt-faq"
                    style={{
                      borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
                      padding: '20px 0',
                      cursor: 'pointer',
                    }}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    <div className="w-layout-hflex rt-faq-toggle" style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '16px',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <span style={{ fontSize: '13px', fontWeight: 800, color: '#e53935' }}>{f.num}</span>
                        <div className="rt-body-text-v2 rt-color-primary" style={{
                          fontSize: '16.5px',
                          fontWeight: 700,
                          color: isOpen ? '#111214' : '#27272a',
                          lineHeight: 1.4,
                        }}>
                          {f.question}
                        </div>
                      </div>

                      <div style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        background: isOpen ? '#e53935' : 'rgba(0, 0, 0, 0.06)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: isOpen ? '#ffffff' : '#111214',
                        fontSize: '14px',
                        flexShrink: 0,
                        transition: 'transform 0.3s ease, background 0.3s ease',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}>
                        ▼
                      </div>
                    </div>

                    {isOpen && (
                      <div faq="answer" style={{
                        marginTop: '14px',
                        paddingLeft: '32px',
                        fontSize: '14.5px',
                        lineHeight: 1.7,
                        color: '#52525b',
                      }}>
                        <p className="rt-gap-off rt-font-b2" style={{ margin: 0 }}>
                          {f.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
