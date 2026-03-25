import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import ContentRow from '../../components/ContentRow/ContentRow';
import DevicesSection from '../../components/DevicesSection/DevicesSection';
import FAQSection from '../../components/FAQSection/FAQSection';
import { CONTENT_DATA } from '../../constants/theme';
import styles from './HomePage.module.css';

/**
 * HomePage
 *
 * Main landing page of the StreamVibe OTT application.
 * Sections:
 *  1. HeroSection - Full-width hero with movie grid background and CTA
 *  2. Trending Content row
 *  3. New Releases row
 *  4. Must Watch row
 *  5. DevicesSection - Supported devices
 *  6. Top Rated row
 *  7. FAQSection - Accordion FAQ
 *
 * @component
 */
// PUBLIC_INTERFACE
const HomePage = () => {
  return (
    <main className={styles.page}>
      {/* Hero Section */}
      <HeroSection />

      {/* Content Rows */}
      <div className={styles.contentSection}>
        <ContentRow title="Trending Now" items={CONTENT_DATA.trending} />
        <ContentRow title="New Releases" items={CONTENT_DATA.newReleases} />
        <ContentRow title="Must Watch" items={CONTENT_DATA.mustWatch} />
      </div>

      {/* Devices Section */}
      <DevicesSection />

      {/* More Content Rows */}
      <div className={styles.contentSection}>
        <ContentRow title="Top Rated" items={CONTENT_DATA.topRated} />
      </div>

      {/* FAQ Section */}
      <div className={styles.faqSection}>
        <FAQSection />
      </div>
    </main>
  );
};

export default HomePage;
