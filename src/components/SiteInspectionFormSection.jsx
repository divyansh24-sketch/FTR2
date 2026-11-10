import React, { useState } from 'react';

export default function SiteInspectionFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    requirement: 'Terrace & Roof Waterproofing (FTR NOSEEP®)',
    details: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setSubmitted(true);
    }
  };

  return (
    <section id="site-inspection-form" style={{ padding: '80px 0 110px', position: 'relative' }}>
      <div className="w-layout-blockcontainer rt-container w-container">
        <div style={{
          background: '#f8f9fa',
          borderRadius: '28px',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          padding: '60px 48px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '50px',
          alignItems: 'center',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.03)',
        }}>
          {/* Left Details */}
          <div>
            <h2 style={{
              fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
              fontWeight: 800,
              color: '#111214',
              lineHeight: 1.15,
              marginBottom: '18px',
              letterSpacing: '-0.02em',
            }}>
              Book a Technical Site Inspection. <br />
              <span
                style={{
                  color: '#e53935',
                  display: 'inline-block',
                  fontWeight: 900,
                }}
              >
                Proof on Your Substrate Before Commitment.
              </span>
            </h2>

            <p style={{ color: '#52525b', fontSize: '15.5px', lineHeight: 1.7, marginBottom: '32px' }}>
              We don't ask you to trust a spec sheet. Our field engineers visit your live construction site, perform core tests, and apply a complimentary test patch on your actual concrete.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(229, 57, 53, 0.12)',
                  color: '#e53935',
                  fontSize: '14px',
                  fontWeight: 900,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  ✓
                </div>
                <div>
                  <div style={{ fontWeight: 800, color: '#111214', fontSize: '15px' }}>100% Free Live On-Site Demo</div>
                  <div style={{ fontSize: '13.5px', color: '#52525b', marginTop: '2px' }}>
                    We apply a test patch directly on your problem substrate to prove tensile adhesion before you purchase.
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(229, 57, 53, 0.12)',
                  color: '#e53935',
                  fontSize: '14px',
                  fontWeight: 900,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  ✓
                </div>
                <div>
                  <div style={{ fontWeight: 800, color: '#111214', fontSize: '15px' }}>Direct Materials Engineer Advice</div>
                  <div style={{ fontSize: '13.5px', color: '#52525b', marginTop: '2px' }}>
                    Speak directly with the chemists and field engineers who formulate the polymers, not commission salesmen.
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(229, 57, 53, 0.12)',
                  color: '#e53935',
                  fontSize: '14px',
                  fontWeight: 900,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  ✓
                </div>
                <div>
                  <div style={{ fontWeight: 800, color: '#111214', fontSize: '15px' }}>Pan-India Support &amp; Delhi NCR Hub</div>
                  <div style={{ fontSize: '13.5px', color: '#52525b', marginTop: '2px' }}>
                    Fast dispatch from our New Delhi manufacturing plant directly to job sites across India.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div style={{
            background: '#ffffff',
            borderRadius: '20px',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            padding: '36px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.06)',
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(34, 197, 94, 0.15)',
                  color: '#22c55e',
                  fontSize: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                }}>
                  ✓
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#111214', marginBottom: '10px' }}>
                  Inspection Request Received!
                </h3>
                <p style={{ fontSize: '15px', color: '#52525b', lineHeight: 1.6 }}>
                  An FTR certified technical sales engineer will contact you within 2 hours to confirm your site location and demo schedule.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#111214', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. your name "
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: '#f4f4f5',
                      border: '1px solid rgba(0, 0, 0, 0.1)',
                      borderRadius: '10px',
                      color: '#111214',
                      fontSize: '14px',
                      outline: 'none',
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#111214', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 xxxxx xxxxx"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: '#f4f4f5',
                        border: '1px solid rgba(0, 0, 0, 0.1)',
                        borderRadius: '10px',
                        color: '#111214',
                        fontSize: '14px',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#111214', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      City / Site Location *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. New Delhi / Noida"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: '#f4f4f5',
                        border: '1px solid rgba(0, 0, 0, 0.1)',
                        borderRadius: '10px',
                        color: '#111214',
                        fontSize: '14px',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#111214', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@company.com"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: '#f4f4f5',
                      border: '1px solid rgba(0, 0, 0, 0.1)',
                      borderRadius: '10px',
                      color: '#111214',
                      fontSize: '14px',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#111214', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Structural Challenge / Requirement
                  </label>
                  <select
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: '#f4f4f5',
                      border: '1px solid rgba(0, 0, 0, 0.1)',
                      borderRadius: '10px',
                      color: '#111214',
                      fontSize: '14px',
                      outline: 'none',
                    }}
                  >
                    <option value="Terrace & Roof Waterproofing (FTR NOSEEP®)">Terrace & Roof Waterproofing (FTR NOSEEP®)</option>
                    <option value="Active Plaster Cracks (FTR ERP® Plaster Fiber)">Active Plaster Cracks (FTR ERP® Plaster Fiber)</option>
                    <option value="Rebar Rust & Concrete Spalling (FTR NORUST®)">Rebar Rust & Concrete Spalling (FTR NORUST®)</option>
                    <option value="AAC Block Adhesive Mortar (FTR BlockBond®)">AAC Block Adhesive Mortar (FTR BlockBond®)</option>
                    <option value="Anti-Efflorescence Putty (FTR ERP® Smooth)">Anti-Efflorescence Putty (FTR ERP® Smooth)</option>
                    <option value="Complete Structural Chemical Package">Complete Structural Chemical Package</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#111214', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Project Area / Notes
                  </label>
                  <textarea
                    rows={2}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="Approx sq. ft., current issue (e.g. 5,000 sq ft terrace seepage)..."
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: '#f4f4f5',
                      border: '1px solid rgba(0, 0, 0, 0.1)',
                      borderRadius: '10px',
                      color: '#111214',
                      fontSize: '14px',
                      outline: 'none',
                      resize: 'none',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    background: '#e53935',
                    color: '#ffffff',
                    padding: '15px 24px',
                    borderRadius: '12px',
                    fontWeight: 800,
                    fontSize: '15px',
                    border: 'none',
                    cursor: 'pointer',
                    marginTop: '8px',
                    boxShadow: '0 8px 24px rgba(229, 57, 53, 0.3)',
                    transition: 'all 0.2s ease',
                  }}
                >
                  Book Complimentary Site Diagnosis →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
