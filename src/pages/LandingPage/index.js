import React from 'react';

import Header from './Header';
import HomeSection from './HomeSection';
import AboutSection from './AboutSection';
import OurChefSection from './OurChefSection';
import MenuSection from './MenuSection';
import GallerySection from './GallerySection';
import ReserveSection from './ReserveSection';
import Footer from './Footer';

export default function LandingPage() {
  return (
    <div className="landing-page">
      <Header />
      <HomeSection />
      <AboutSection />
      <OurChefSection />
      <MenuSection />
      <GallerySection />
      <ReserveSection />
      <Footer />
    </div>
  );
}
