import React, { useEffect } from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CTABannerSection from './components/CTABannerSection';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import WorksPage from './pages/WorksPage';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

function AppContent() {
  const { currentRoute, navigate } = useNavigation();

  useEffect(() => {
    const triggerAnimations = () => {
      if (typeof window.triggerBentro === 'function') {
        window.triggerBentro();
      }
      if (window.ScrollTrigger) {
        window.ScrollTrigger.refresh();
      }
    };

    const timer = setTimeout(triggerAnimations, 150);
    return () => clearTimeout(timer);
  }, [currentRoute]);

  const isHome = currentRoute.page === 'home';

  return (
    <div className="page-wrapper" style={{ minHeight: '100vh', background: '#ffffff', color: '#111214' }}>
      <Navbar />

      {isHome && <Home />}

      {!isHome && (
        <>
          {currentRoute.page === 'about' && <AboutPage />}
          {currentRoute.page === 'works' && <WorksPage />}
          {currentRoute.page === 'service' && <ServicesPage />}
          {currentRoute.page === 'pricing' && <PricingPage />}
          {currentRoute.page === 'blog' && <BlogPage />}
          {currentRoute.page === 'contact' && <ContactPage />}

          {/* Detail Pages */}
          {currentRoute.page.includes('detail') && (
            <div style={{ padding: '120px 24px 80px', maxWidth: '1200px', margin: '0 auto', minHeight: '70vh' }}>
              <button
                onClick={() => navigate('works')}
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#fff',
                  padding: '8px 20px',
                  borderRadius: '100px',
                  cursor: 'pointer',
                  marginBottom: '40px',
                  fontSize: '14px',
                  fontWeight: 500,
                }}
              >
                ← Back to Works
              </button>

              <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontFamily: '"Stack Sans Headline", sans-serif', textTransform: 'capitalize', marginBottom: '20px' }}>
                {currentRoute.param ? currentRoute.param.replace(/-/g, ' ') : currentRoute.page.replace(/-/g, ' ')}
              </h1>
              
              <p style={{ color: '#aaa', fontSize: '1.25rem', maxWidth: '700px', lineHeight: 1.6, marginBottom: '40px' }}>
                Deep dive into the branding, product design, and cultural impact created for {currentRoute.param ? currentRoute.param.replace(/-/g, ' ') : 'this project'}.
              </p>

              <div style={{ padding: '40px', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#fff' }}>Case Study Architecture</h3>
                <p style={{ color: '#888', lineHeight: 1.8 }}>
                  This case study is connected with the full asset pipeline. View all related design assets and visual explorations in the primary portfolio.
                </p>
              </div>
            </div>
          )}

          {/* Standard Footer Wrapper for Non-Home Pages */}
          <div data-wf--rt-footer--variant="base" className="rt-bg-primary rt-index-5">
            {currentRoute.page !== 'contact' && <CTABannerSection />}
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

export default function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}
