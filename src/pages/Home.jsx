import React from 'react';
import HeroSection from '../components/HeroSection';
import ClientsSection from '../components/ClientsSection';
import WorksSection from '../components/WorksSection';
import StatsSection from '../components/StatsSection';
import ServicesSection from '../components/ServicesSection';
import AccentSection from '../components/AccentSection';
import VideoExpandSection from '../components/VideoExpandSection';
import IntegritySection from '../components/IntegritySection';
import PricingSection from '../components/PricingSection';
import BlogSection from '../components/BlogSection';
import FAQSection from '../components/FAQSection';
import MakeInIndiaSection from '../components/MakeInIndiaSection';
import SiteInspectionFormSection from '../components/SiteInspectionFormSection';
import ShowSection from '../components/ShowSection';
import CTABannerSection from '../components/CTABannerSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="main-wrapper">
      {/* 1. Hero Section: BUILT TO LAST & 5 Bucket Mockups */}
      <HeroSection />

      {/* 2. Clients / Marquee: A Bit About Us + 60fps Marquee */}
      <ClientsSection />

      {/* 3. Works Section: 4 Featured Works + See all works button */}
      <WorksSection />

      {/* 4. The FTR Engineering Playbook Stats: 100%, 50M+, 25+, 05+ */}
      <StatsSection />

      {/* 5. 5 Chemical Systems: Sticky Stacking Cards (Original Bentro Animation) */}
      <ServicesSection />

      {/* 6. Accent: Turning Ideas Into Iconic Brands */}
      <AccentSection />

      {/* 7. Video Expand: we create bold ideas and meaningful brand experiences */}
      <VideoExpandSection />

      {/* 8. Built with Integrity. Engineered to Never Fail. (6 Pillars & Comparison) */}
      <IntegritySection />

      {/* 9. Clients Say [ Hear from our clients ] - 5-Star Testimonials Marquee */}
      <PricingSection />

      {/* 10. Stories and Insights [ 350+ Happy customers ] - Product Systems Showcase */}
      <BlogSection />

      {/* 11. Technical FAQs: 6 Core Engineering Questions */}
      <FAQSection />

      {/* 12. Proudly Indian, Globally Trusted - Make In India */}
      <MakeInIndiaSection />

      {/* 13. Technical Site Inspection & Live Demo Booking Form */}
      <SiteInspectionFormSection />

      {/* 13. Show Section - 3-Column Masonry Video Grid (HALVERN poster, team video) */}
      <ShowSection />

      {/* 14. Pinned Cover: CTA Banner + Footer (Slides up cleanly over ShowSection without gaps) */}
      <div data-wf--rt-footer--variant="base" className="rt-bg-primary rt-index-5">
        <CTABannerSection />
        <Footer />
      </div>
    </main>
  );
}
