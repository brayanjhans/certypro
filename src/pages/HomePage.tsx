import React from 'react';
import { HeroSlider } from '../components/HeroSlider';
import { FeaturedCourses } from '../components/FeaturedCourses';
import { HomeFeatures } from '../components/HomeFeatures';
import { HomeAbout } from '../components/HomeAbout';
import { HomeStats } from '../components/HomeStats';
import { HomePricing } from '../components/HomePricing';
import { HomePaymentSecurity } from '../components/HomePaymentSecurity';

export const HomePage: React.FC = () => {
  return (
    <main className="min-h-screen bg-white font-sans">
      {/* 1. Hero Carousel (Xx) */}
      <section className="w-full">
        <HeroSlider />
      </section>

      {/* 2. Courses Grid Section (Sg) */}
      <section className="w-full">
        <FeaturedCourses />
      </section>

      {/* 3. Features Bar (rb) - Alianzas y certificaciones */}
      <section className="w-full">
        <HomeFeatures />
      </section>

      {/* 4. About Summary (e4) - Formación profesional con respaldo y proyección */}
      <section className="w-full">
        <HomeAbout />
      </section>

      {/* 5. Stats Band (u4) - Somos un equipo comprometido en cada proyecto */}
      <section className="w-full">
        <HomeStats />
      </section>

      {/* 6. Promotional Pricing Plans (b4) - Hasta un 50% de dscto en nuestros planes */}
      <section className="w-full">
        <HomePricing />
      </section>

      {/* 7. Payment Methods & Security (B4) - Yape QR y garantía de protección */}
      <section className="w-full">
        <HomePaymentSecurity />
      </section>
    </main>
  );
};
