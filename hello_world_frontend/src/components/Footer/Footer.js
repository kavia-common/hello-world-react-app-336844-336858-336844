import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

/**
 * Footer Component
 *
 * Site-wide footer for StreamVibe OTT application.
 * Displays navigation columns (Home, Movies, Shows, Support, Subscription),
 * social media links, and copyright information.
 *
 * @component
 */
// PUBLIC_INTERFACE
const Footer = () => {
  const footerColumns = [
    {
      heading: 'Home',
      links: ['Categories', 'Devices', 'Pricing', 'FAQ'],
    },
    {
      heading: 'Movies',
      links: ['Genres', 'Trending', 'New Release', 'Popular'],
    },
    {
      heading: 'Shows',
      links: ['Genres', 'Trending', 'New Release', 'Popular'],
    },
    {
      heading: 'Support',
      links: ['Contact Us'],
    },
    {
      heading: 'Subscription',
      links: ['Plans', 'Features'],
    },
  ];

  return (
    <footer className={styles.footer}>
      {/* Main Footer Content */}
      <div className={styles.mainContent}>
        {/* Nav columns */}
        {footerColumns.map((col) => (
          <div key={col.heading} className={styles.column}>
            <h4 className={styles.columnHeading}>{col.heading}</h4>
            <ul className={styles.linkList}>
              {col.links.map((link) => (
                <li key={link}>
                  <Link to="#" className={styles.footerLink}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Connect With Us */}
        <div className={styles.column}>
          <h4 className={styles.columnHeading}>Connect With Us</h4>
          <div className={styles.socialButtons}>
            {/* Facebook */}
            <button className={styles.socialBtn} aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="#BFBFBF" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
            </button>
            {/* Twitter / X */}
            <button className={styles.socialBtn} aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" stroke="#BFBFBF" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
            </button>
            {/* Instagram */}
            <button className={styles.socialBtn} aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="#BFBFBF" strokeWidth="1.5"/>
                <circle cx="12" cy="12" r="4" stroke="#BFBFBF" strokeWidth="1.5"/>
                <circle cx="17.5" cy="6.5" r="1" fill="#BFBFBF"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className={styles.divider} />

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <p className={styles.copyright}>@2023 streamvib, All Rights Reserved</p>
        <div className={styles.legalLinks}>
          <Link to="#" className={styles.legalLink}>Terms of Use</Link>
          <span className={styles.legalSep}>|</span>
          <Link to="#" className={styles.legalLink}>Privacy Policy</Link>
          <span className={styles.legalSep}>|</span>
          <Link to="#" className={styles.legalLink}>Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
