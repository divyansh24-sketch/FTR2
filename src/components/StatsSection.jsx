import React, { useState, useEffect, useRef } from 'react';
import { useNavigation } from '../context/NavigationContext';

export default function StatsSection() {
  const { navigate } = useNavigation();
  
  // Initialize with target numbers so it NEVER stays stuck at 0 under any circumstance!
  const [counts, setCounts] = useState({
    c1: 100,
    c2: 50,
    c3: 25,
    c4: 5,
  });

  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let ctx;
    const runAnimation = () => {
      if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
        ctx = window.gsap.context(() => {
          const obj = { v1: 0, v2: 0, v3: 0, v4: 0 };
          window.ScrollTrigger.create({
            trigger: sectionRef.current || '#stats-section',
            start: 'top 85%',
            once: true,
            onEnter: () => {
              window.gsap.to(obj, {
                v1: 100,
                v2: 50,
                v3: 25,
                v4: 5,
                duration: 1.8,
                ease: 'power2.out',
                onUpdate: () => {
                  setCounts({
                    c1: Math.round(obj.v1),
                    c2: Math.round(obj.v2),
                    c3: Math.round(obj.v3),
                    c4: Math.round(obj.v4),
                  });
                },
                onComplete: () => {
                  setCounts({ c1: 100, c2: 50, c3: 25, c4: 5 });
                },
              });
            },
          });
        }, sectionRef);
      }
    };

    // Small delay to ensure GSAP and ScrollTrigger are registered
    const t = setTimeout(runAnimation, 150);

    return () => {
      clearTimeout(t);
      if (ctx && ctx.revert) ctx.revert();
    };
  }, []);

  return (
    <section
      id="stats-section"
      ref={sectionRef}
      className="rt-section rt-overflow-hidden"
      style={{ position: 'relative', padding: '90px 0 110px' }}
    >
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="rt-vertical-stack">
          {/* Header Tag */}
         

          {/* Main Title */}
          <h2
            className="rt-gap-off rt-text-style-h2 rt-text-center"
            style={{
              fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              maxWidth: '850px',
              margin: '0 auto 20px',
              color: '#111214',
            }}
          >
            Built with Intention. <br />
            <span
              style={{
                color: '#e53935',
                display: 'inline-block',
                fontWeight: 900,
              }}
            >
              Engineered to Last.
            </span>
          </h2>

          {/* Description */}
          <p
            className="rt-gap-off rt-color-primary rt-text-center"
            style={{
              maxWidth: '740px',
              margin: '0 auto 50px',
              fontSize: '15.5px',
              lineHeight: 1.7,
              color: '#52525b',
            }}
          >
            From initial site diagnosis to multi-layer polymer barriers, we eliminate guesswork and deliver permanent, certified structural protection.
          </p>

          {/* 4 Counter Cards */}
          <div className="rt-counter-row" style={{ marginTop: '10px' }}>
            <div className="rt-counter-line"></div>
            <div className="rt-counter-list" style={{ width: '100%' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '24px',
                  width: '100%',
                }}
              >
                {/* Stat 1: 100% */}
                <div
                  className="rt-counter-card"
                  style={{
                    background: '#f8f9fa',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    borderRadius: '16px',
                    padding: '36px 24px',
                    textAlign: 'center',
                    backdropFilter: 'blur(8px)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                    transition: 'transform 0.3s ease, border-color 0.3s ease',
                  }}
                >
                  <h3
                    className="rt-gap-off rt-text-style-h4"
                    style={{
                      fontSize: 'clamp(3rem, 5vw, 4.2rem)',
                      fontWeight: 900,
                      color: '#e53935',
                      lineHeight: 1,
                      marginBottom: '12px',
                    }}
                  >
                    <span>{counts.c1}%</span>
                  </h3>
                  <p
                    className="rt-gap-off rt-font-b2"
                    style={{
                      fontSize: '15px',
                      fontWeight: 700,
                      color: '#111214',
                      margin: 0,
                    }}
                  >
                    Leak-Proof Warranty
                  </p>
                </div>

                {/* Stat 2: 50M+ */}
                <div
                  className="rt-counter-card"
                  style={{
                    background: '#f8f9fa',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    borderRadius: '16px',
                    padding: '36px 24px',
                    textAlign: 'center',
                    backdropFilter: 'blur(8px)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                    transition: 'transform 0.3s ease, border-color 0.3s ease',
                  }}
                >
                  <h3
                    className="rt-gap-off rt-text-style-h4"
                    style={{
                      fontSize: 'clamp(3rem, 5vw, 4.2rem)',
                      fontWeight: 900,
                      color: '#e53935',
                      lineHeight: 1,
                      marginBottom: '12px',
                    }}
                  >
                    <span>{counts.c2}M+</span>
                  </h3>
                  <p
                    className="rt-gap-off rt-font-b2"
                    style={{
                      fontSize: '15px',
                      fontWeight: 700,
                      color: '#111214',
                      margin: 0,
                    }}
                  >
                    Sq. Ft. Protected
                  </p>
                </div>

                {/* Stat 3: 25+ */}
                <div
                  className="rt-counter-card"
                  style={{
                    background: '#f8f9fa',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    borderRadius: '16px',
                    padding: '36px 24px',
                    textAlign: 'center',
                    backdropFilter: 'blur(8px)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                    transition: 'transform 0.3s ease, border-color 0.3s ease',
                  }}
                >
                  <h3
                    className="rt-gap-off rt-text-style-h4"
                    style={{
                      fontSize: 'clamp(3rem, 5vw, 4.2rem)',
                      fontWeight: 900,
                      color: '#e53935',
                      lineHeight: 1,
                      marginBottom: '12px',
                    }}
                  >
                    <span>{counts.c3}+</span>
                  </h3>
                  <p
                    className="rt-gap-off rt-font-b2"
                    style={{
                      fontSize: '15px',
                      fontWeight: 700,
                      color: '#111214',
                      margin: 0,
                    }}
                  >
                    Years Structural Longevity
                  </p>
                </div>

                {/* Stat 4: 05+ */}
                <div
                  className="rt-counter-card"
                  style={{
                    background: '#f8f9fa',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    borderRadius: '16px',
                    padding: '36px 24px',
                    textAlign: 'center',
                    backdropFilter: 'blur(8px)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                    transition: 'transform 0.3s ease, border-color 0.3s ease',
                  }}
                >
                  <h3
                    className="rt-gap-off rt-text-style-h4"
                    style={{
                      fontSize: 'clamp(3rem, 5vw, 4.2rem)',
                      fontWeight: 900,
                      color: '#e53935',
                      lineHeight: 1,
                      marginBottom: '12px',
                    }}
                  >
                    <span>{counts.c4 < 10 ? `0${counts.c4}` : counts.c4}+</span>
                  </h3>
                  <p
                    className="rt-gap-off rt-font-b2"
                    style={{
                      fontSize: '15px',
                      fontWeight: 700,
                      color: '#111214',
                      margin: 0,
                    }}
                  >
                    Engineered Systems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
