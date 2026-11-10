import React from 'react';
import { useNavigation } from '../context/NavigationContext';

export default function ServicesSection() {
  const { navigate } = useNavigation();

  const services = [
    {
      num: '01',
      title: 'ACRYLIC ELASTOMERIC\nWATERPROOFING',
      subtitle: 'FTR NOSEEP® 1 & 2 • 300%+ Elongation Membrane',
      desc: 'Engineered liquid elastomeric polymer membrane that stretches dynamically with concrete thermal movement. Creates an impervious negative & positive hydrostatic seal across terraces, basements, and wet walls.',
      bgClass: 'rt-bg-neutral-500',
    },
    {
      num: '02',
      title: 'CORROSION REBAR\nPASSIVATION',
      subtitle: 'FTR NORUST® • Molecular Rust-to-Iron Converter',
      desc: 'Active chemical converter that stabilizes rust into an inert metallic iron shield without destructive sandblasting. Eliminates rust expansion, rebar necking, and structural concrete spalling.',
      bgClass: 'rt-bg-accent',
    },
    {
      num: '03',
      title: 'POLYMERIZED AAC\nBLOCK ADHESIVE',
      subtitle: 'FTR BlockBond® • 3mm Thin-Bed High-Shear Joint',
      desc: 'Self-curing polymerized adhesive replacing 15mm thick sand mortar with a precision 3mm cross-linking joint. Eliminates drying shrinkage stair-step cracks with certified bonding exceeding AAC block tensile strength.',
      bgClass: 'rt-bg-primary-accent',
    },
    {
      num: '04',
      title: 'ELASTOMERIC RESURFACING\nPUTTY (SMOOTH)',
      subtitle: 'FTR ERP® Putty • Hydrophobic Breathable Barrier',
      desc: 'High-flex acrylic putty engineered to bridge microscopic substrate movement while providing hydrophobic moisture resistance. Prevents efflorescence salt leaching, paint peeling, and recurring hairline fractures.',
      bgClass: 'rt-bg-accent',
    },
    {
      num: '05',
      title: 'ELASTOMERIC REPAIR\nPLASTER (FIBER)',
      subtitle: 'FTR ERP® Plaster • Active Microfiber Matrix',
      desc: 'Fiber-reinforced elastomeric repair plaster formulated to bridge active structural fissures up to 3mm. Unmatched impact resistance and elasticity, eliminating seasonal monsoon repair cycles forever.',
      bgClass: 'rt-bg-neutral-500',
    },
  ];

  return (
    <section id="services-section" style={{ position: 'relative' }}>
      <div className="w-layout-blockcontainer rt-container w-container">
        {/* Header Stack */}
        <div className="rt-vertical-top rt-heading-divider">
          <h2 className="rt-gap-off">Chemical Systems &amp; Services</h2>
        </div>

        <div className="rt-col-eight rt-center-stack">
          <div className="rt-horizontal-between" style={{ marginBottom: '40px' }}>
            <div className="rt-col-five rt-flex-expand">
              From negative-side moisture barriers to molecular rust passivation,{' '}
              <span className="rt-color-primary">we engineer 5 specialized chemical systems</span>{' '}
              designed to protect, bond, and endure the harshest Indian environmental stresses.
            </div>

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
              <div className="rt-button-text-v1" style={{ color: '#ffffff' }}>Explore All 5 Systems</div>
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

          {/* Stacking Cards List - Original Bentro Animation & Hierarchy */}
          <div className="rt-stack-list">
            {services.map((svc) => (
              <div key={svc.num} className={`rt-stack-card ${svc.bgClass}`}>
                <div className="rt-fill-behind">
                  <img
                    src="/assets/images/6ab61c83ea25c199065b33a7_home-service-card-line-bg.webp"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="/assets/images/6ab61c83ea25c199065b33a7_home-service-card-line-bg-p-500.webp 500w, /assets/images/6ab61c83ea25c199065b33a7_home-service-card-line-bg.webp 1192w"
                    alt="Faint grid line texture for the service card background"
                  />
                </div>

                <h3 className="rt-gap-off rt-stack-title">
                  {svc.title.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i === 0 && <br />}
                    </React.Fragment>
                  ))}
                </h3>

                <div className="rt-card-bottom">
                  <div className="rt-icon-text">
                    <div className="rt-icon w-embed">
                      <svg width="30" height="37" viewBox="0 0 30 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.2142 15.3045C13.9189 12.774 13.6072 10.1023 13.6072 7H16.3928C16.3928 10.0675 16.0825 12.7358 15.7876 15.2691C15.5474 17.3335 15.3176 19.3082 15.275 21.3362C16.6737 19.8773 17.8973 18.3302 19.179 16.7097C20.7593 14.7117 22.4282 12.6021 24.6217 10.4085L26.5915 12.3783C24.4225 14.5473 22.316 16.2146 20.3163 17.7974L20.3144 17.7989C18.6856 19.0884 17.1274 20.3218 15.6638 21.725C17.6843 21.6824 19.6433 21.4538 21.6954 21.2143C24.2258 20.919 26.8977 20.6072 30 20.6072V23.3928C26.9327 23.3928 24.2643 23.0824 21.7312 22.7876L21.7293 22.7875C19.6653 22.5473 17.6912 22.3177 15.6638 22.275C17.1218 23.6727 18.6679 24.8957 20.2874 26.1765L20.29 26.1787C22.2881 27.7592 24.3978 29.4279 26.5915 31.6217L24.6217 33.5915C22.4527 31.4225 20.7855 29.3162 19.2028 27.3167L19.1991 27.3115L19.196 27.3074C17.9081 25.6811 16.6762 24.1254 15.275 22.6638C15.3176 24.6918 15.5474 26.6665 15.7876 28.7309C16.0825 31.2642 16.3928 33.9325 16.3928 37H13.6072C13.6072 33.8977 13.9189 31.226 14.2142 28.6956L14.2148 28.6914C14.454 26.6408 14.6824 24.6829 14.725 22.6638C13.3238 24.1254 12.0919 25.6811 10.8041 27.3074L10.8009 27.3115L10.7972 27.3167C9.2145 29.3162 7.54733 31.4225 5.37828 33.5915L3.40848 31.6217C5.60219 29.4279 7.71195 27.7592 9.71003 26.1787L9.71257 26.1765C11.3321 24.8957 12.8782 23.6727 14.3362 22.275C12.3082 22.3178 10.3334 22.5475 8.26882 22.7876C5.7357 23.0824 3.06738 23.3928 0 23.3928V20.6072C3.10233 20.6072 5.7742 20.919 8.3046 21.2143C10.3567 21.4538 12.3157 21.6824 14.3362 21.725C12.872 20.3213 11.3132 19.0874 9.6837 17.7974C7.68398 16.2146 5.5775 14.5473 3.40848 12.3783L5.37828 10.4085C7.57178 12.6021 9.24068 14.7117 10.821 16.7097C12.1028 18.3302 13.3263 19.8772 14.725 21.3361C14.6824 19.317 14.454 17.3592 14.2148 15.3086L14.2142 15.3045Z" fill="#D94646"/>
                      </svg>
                    </div>
                    <div className="rt-font-b2">{svc.subtitle}</div>
                  </div>
                  <p className="rt-gap-off rt-card-desc">{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
