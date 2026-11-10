import React from 'react';
import { useNavigation } from '../context/NavigationContext';

export default function Footer() {
  const { navigate } = useNavigation();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else navigate('contact');
  };

  return (
    <footer
      className="rt-footer-section"
      style={{
        visibility: 'visible',
        opacity: 1,
        display: 'block',
        position: 'relative',
        zIndex: 5,
        backgroundColor: '#ffffff',
        borderTop: '1px solid rgba(0, 0, 0, 0.08)',
      }}
    >
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="w-layout-vflex rt-footer-main" style={{ visibility: 'visible', opacity: 1 }}>
          {/* Top Row: 4 Columns with exact user requested content */}
          <div className="w-layout-hflex rt-footer-top" style={{ visibility: 'visible', opacity: 1 }}>
            {/* Col 1: Brand Info */}
            <div className="w-layout-vflex rt-footer-col-1" style={{ visibility: 'visible', opacity: 1, maxWidth: '340px' }}>
              <div
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                style={{ cursor: 'pointer', marginBottom: '16px' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '28px', fontWeight: 900, color: '#111214', letterSpacing: '-0.03em', fontFamily: '"Stack Sans Headline", sans-serif' }}>
                    FTR
                  </span>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '20px',
                    height: '20px',
                    backgroundColor: '#e53935',
                    borderRadius: '50%',
                    color: '#ffffff',
                    fontSize: '12px',
                    fontWeight: 800,
                  }}>
                    ✓
                  </span>
                </div>
                <div style={{ fontSize: '10.5px', fontWeight: 800, color: '#71717a', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '3px' }}>
                  FIRST TIME RIGHT • BUILT BETTER
                </div>
              </div>

              <div className="w-layout-vflex rt-footer-col-1-inside">
                <div className="rt-body-text-v5" style={{ color: '#111214', fontWeight: 700, fontSize: '15px', lineHeight: 1.35, marginBottom: '8px' }}>
                  Engineered for permanent structural protection.
                </div>
                <p style={{ fontSize: '13.5px', lineHeight: 1.6, color: '#52525b', margin: '0 0 16px' }}>
                  FTR eliminates terrace seepage, masonry cracks, and rebar corrosion with high-tensile molecular polymer defense across India.
                </p>
                <div className="w-layout-vflex" style={{ gap: '8px' }}>
                  <a
                    href="#site-inspection-form"
                    onClick={(e) => { e.preventDefault(); scrollTo('site-inspection-form'); }}
                    className="rt-footer-link-hover"
                    style={{ color: '#e53935', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }}
                  >
                    Book Site Diagnosis →
                  </a>
                  <a href="mailto:info@ftr.co.in" className="rt-body-text-v5 rt-footer-link-hover" style={{ color: '#52525b' }}>
                    info@ftr.co.in
                  </a>
                </div>
              </div>
            </div>

            {/* Col 2: Menu */}
            <div className="w-layout-vflex rt-footer-col-2" style={{ visibility: 'visible', opacity: 1 }}>
              <div className="rt-body-text-v2 rt-color-primary">Menu</div>
              <div className="w-layout-vflex rt-link-wrapper">
                <a href="#services-section" onClick={(e) => { e.preventDefault(); scrollTo('services-section'); }} className="rt-footer-link-hover">
                  Solutions
                </a>
                <a href="#integrity-section" onClick={(e) => { e.preventDefault(); scrollTo('integrity-section'); }} className="rt-footer-link-hover">
                  Why FTR
                </a>
                <a href="#products-section" onClick={(e) => { e.preventDefault(); scrollTo('products-section'); }} className="rt-footer-link-hover">
                  Products
                </a>
                <a href="#clients-section" onClick={(e) => { e.preventDefault(); scrollTo('clients-section'); }} className="rt-footer-link-hover">
                  Our Clients
                </a>
                <a href="#testimonials-section" onClick={(e) => { e.preventDefault(); scrollTo('testimonials-section'); }} className="rt-footer-link-hover">
                  Testimonials
                </a>
                <a href="#faq-section" onClick={(e) => { e.preventDefault(); scrollTo('faq-section'); }} className="rt-footer-link-hover">
                  FAQ
                </a>
              </div>
            </div>

            {/* Col 3: Navigation */}
            <div className="w-layout-vflex rt-footer-col-3" style={{ visibility: 'visible', opacity: 1 }}>
              <div className="rt-body-text-v2 rt-color-primary">Navigation</div>
              <div className="w-layout-vflex rt-link-wrapper">
                <a href="#site-inspection-form" onClick={(e) => { e.preventDefault(); scrollTo('site-inspection-form'); }} className="rt-footer-link-hover">
                  Contact
                </a>
                <a href="#stats-section" onClick={(e) => { e.preventDefault(); scrollTo('stats-section'); }} className="rt-footer-link-hover">
                  Engineering Playbook
                </a>
                <a href="#integrity-section" onClick={(e) => { e.preventDefault(); scrollTo('integrity-section'); }} className="rt-footer-link-hover">
                  5-Step Method
                </a>
                <a href="#site-inspection-form" onClick={(e) => { e.preventDefault(); scrollTo('site-inspection-form'); }} className="rt-footer-link-hover">
                  Schedule On-Site Demo
                </a>
                <a href="#products-section" onClick={(e) => { e.preventDefault(); scrollTo('products-section'); }} className="rt-footer-link-hover">
                  Technical TDS Sheets
                </a>
                <a href="mailto:info@ftr.co.in" className="rt-footer-link-hover" style={{ color: '#e53935', fontWeight: 600 }}>
                  Customer Support
                </a>
              </div>
            </div>

            {/* Col 4: Chemical Systems */}
            <div className="w-layout-vflex rt-footer-col-4" style={{ visibility: 'visible', opacity: 1 }}>
              <div className="rt-body-text-v2 rt-color-primary">Chemical Systems</div>
              <div className="w-layout-vflex rt-link-wrapper">
                <a href="#products-section" onClick={(e) => { e.preventDefault(); scrollTo('products-section'); }} className="rt-footer-link-hover">
                  FTR NOSEEP® 1 &amp; 2 Barrier
                </a>
                <a href="#products-section" onClick={(e) => { e.preventDefault(); scrollTo('products-section'); }} className="rt-footer-link-hover">
                  FTR Block Bond® Thin-Bed
                </a>
                <a href="#products-section" onClick={(e) => { e.preventDefault(); scrollTo('products-section'); }} className="rt-footer-link-hover">
                  FTR NORUST® Shield
                </a>
                <a href="#products-section" onClick={(e) => { e.preventDefault(); scrollTo('products-section'); }} className="rt-footer-link-hover">
                  FTR ERP® Putty Smooth
                </a>
                <a href="#products-section" onClick={(e) => { e.preventDefault(); scrollTo('products-section'); }} className="rt-footer-link-hover">
                  FTR ERP® Plaster Fiber
                </a>
                <a href="#site-inspection-form" onClick={(e) => { e.preventDefault(); scrollTo('site-inspection-form'); }} className="rt-footer-link-hover" style={{ color: '#e53935' }}>
                  Custom Formulations
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Row: Giant Typography + Red Pill Button */}
          <div className="w-layout-vflex rt-footer-bottom" style={{ visibility: 'visible', opacity: 1 }}>
            <div className="w-layout-hflex rt-footer-bottom-top" style={{ visibility: 'visible', opacity: 1 }}>
              {/* Giant Typography Wordmark: FTR replacing Bentro matching exact style & size */}
              <div className="rt-footer-bottom-col-1" style={{ visibility: 'visible', opacity: 1, display: 'flex', alignItems: 'center' }}>
                <img
                  loading="lazy"
                  src="/assets/images/ftr-text-logo.svg"
                  alt="FTR"
                  style={{
                    display: 'block',
                    width: '100%',
                    maxWidth: '560px',
                    height: 'auto',
                  }}
                />
              </div>

              {/* Red Pill Button: Book Site Diagnosis / Get in touch */}
              <a
                href="#site-inspection-form"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('site-inspection-form');
                }}
                className="rt-footer-button w-inline-block"
                style={{
                  visibility: 'visible',
                  opacity: 1,
                  backgroundColor: '#e53935',
                  borderRadius: '9999px',
                }}
              >
                <div className="rt-button-text-v2" style={{ color: '#ffffff', fontWeight: 700 }}>
                  Book Site Diagnosis
                </div>
                <div className="rt-icon rt-color-primary w-embed" style={{ color: '#ffffff' }}>
                  <svg width="13" height="13" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.750001 9.75L9.75 0.75M9.75 9.75L9.75 0.75L0.75 0.750001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </a>
            </div>

            {/* Bottom Credits Strip */}
            <div className="w-layout-hflex rt-footer-bottom-strip" style={{ visibility: 'visible', opacity: 1 }}>
              <div className="rt-small-text">
                © 2026 FTR Solutions Pvt. Ltd. All rights reserved. Engineered with ❤️ in New Delhi, India
              </div>

              {/* Follow Us & Social Icons */}
              <div className="rt-footer-social">
                <p className="rt-gap-off rt-small-text">Follow us</p>

                {/* Facebook */}
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook" className="rt-footer-social-link w-inline-block">
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8.9801 14.1405" height="14" width="9">
                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="0.870825" stroke="currentColor" d="M0.435412 5.59586V8.54468H2.64703V13.7051H5.59586V8.54468H7.80747L8.54468 5.59586H5.59586V4.12144C5.59586 3.71967 5.93128 3.38424 6.33306 3.38424H8.54468V0.435412H6.33306C4.32565 0.435412 2.64703 2.11403 2.64703 4.12144V5.59586H0.435412Z"></path>
                  </svg>
                </a>

                {/* Instagram */}
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" className="rt-footer-social-link w-inline-block">
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14.1405 14.1405" height="14" width="14">
                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="0.870825" stroke="currentColor" d="M10.7563 3.01563H11.1249M0.435412 5.15353C0.435412 3.50219 0.435412 2.67652 0.756834 2.04547C1.03954 1.49064 1.49064 1.03954 2.04547 0.756834C2.67652 0.435412 3.50219 0.435412 5.15353 0.435412H8.987C10.6383 0.435412 11.464 0.435412 12.0951 0.756834C12.6499 1.03954 13.101 1.49064 13.3837 2.04547C13.7051 2.67652 13.7051 3.50219 13.7051 5.15353V8.987C13.7051 10.6383 13.7051 11.464 13.3837 12.0951C13.101 12.6499 12.6499 13.101 12.0951 13.3837C11.464 13.7051 10.6383 13.7051 8.987 13.7051H5.15353C3.50219 13.7051 2.67652 13.7051 2.04547 13.3837C1.49064 13.101 1.03954 12.6499 0.756834 12.0951C0.435412 11.464 0.435412 10.6383 0.435412 8.987V5.15353ZM9.62248 6.69208C9.67214 7.02729 9.65529 7.369 9.5729 7.6977C9.4905 8.0264 9.34417 8.33565 9.14226 8.60779C8.94035 8.87994 8.68681 9.10965 8.39613 9.28381C8.10544 9.45798 7.78329 9.57318 7.44809 9.62284C7.11288 9.67251 6.77117 9.65566 6.44247 9.57327C6.11377 9.49087 5.80452 9.34454 5.53237 9.14263C4.98275 8.73485 4.61762 8.12544 4.51732 7.44845C4.41702 6.77147 4.58976 6.08237 4.99754 5.53274C5.40531 4.98312 6.01473 4.61799 6.69171 4.51769C7.3687 4.41739 8.0578 4.59013 8.60743 4.99791C9.15705 5.40568 9.52217 6.0151 9.62248 6.69208Z"></path>
                  </svg>
                </a>

                {/* X */}
                <a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="X" className="rt-footer-social-link w-inline-block">
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 11.1914 11.1917" height="11" width="11">
                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="0.870825" stroke="currentColor" d="M10.1111 0.43542L6.28597 4.90565M6.28597 4.90565L10.6182 9.83065C10.9497 10.208 10.6459 10.7563 10.1066 10.7563H9.15582C8.95521 10.7563 8.76621 10.6744 8.64365 10.5351L4.90555 6.28607M6.28597 4.90565L2.54787 0.656674C2.42531 0.517342 2.23566 0.43542 2.0357 0.43542H1.08489C0.544974 0.43542 0.241798 0.983718 0.573357 1.36108L4.90555 6.28607M1.08037 10.7563L4.90555 6.28607"></path>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rt-footer-social-link w-inline-block">
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12.4818 12.4818" height="12" width="12">
                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="0.870825" stroke="currentColor" d="M3.66069 3.41879V3.74132M3.66069 9.06303V5.43459M6.24091 9.06303V7.20849M6.24091 7.20849V5.43459M6.24091 7.20849C6.24091 6.37766 7.02917 5.91838 7.78904 5.91838C8.82113 5.91838 8.82113 6.80533 8.82113 7.77292V9.06303M0.435412 4.56377C0.435412 3.11884 0.435412 2.39638 0.716657 1.84421C0.964028 1.35874 1.35874 0.964028 1.84421 0.716657C2.39638 0.435412 3.11884 0.435412 4.56377 0.435412H7.91806C9.36298 0.435412 10.0854 0.435412 10.6376 0.716657C11.1231 0.964028 11.5178 1.35874 11.7652 1.84421C12.0464 2.39638 12.0464 3.11884 12.0464 4.56377V7.91806C12.0464 9.36298 12.0464 10.0854 11.7652 10.6376C11.5178 11.1231 11.1231 11.5178 10.6376 11.7652C10.0854 12.0464 9.36298 12.0464 7.91806 12.0464H4.56377C3.11884 12.0464 2.39638 12.0464 1.84421 11.7652C1.35874 11.5178 0.964028 11.1231 0.716657 10.6376C0.435412 10.0854 0.435412 9.36298 0.435412 7.91806V4.56377Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
