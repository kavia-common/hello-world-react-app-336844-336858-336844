import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

/**
 * Navbar Component
 *
 * Main navigation bar for StreamVibe OTT application.
 * Displays the logo, nav links (Home, Movies & Shows, Support, Subscriptions),
 * and action buttons (search, notification, user avatar).
 * Becomes sticky/scrolled on scroll.
 *
 * @component
 */
// PUBLIC_INTERFACE
const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Movies & Shows', path: '/movies-shows' },
    { label: 'Support', path: '/support' },
    { label: 'Subscriptions', path: '/subscriptions' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        {/* StreamVibe Logo */}
        <Link to="/" className={styles.logoLink}>
          <svg width="166" height="50" viewBox="0 0 166 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="50" height="50" rx="8" fill="#E50000"/>
            <path d="M12 18L25 12L38 18V32L25 38L12 32V18Z" fill="white" opacity="0.9"/>
            <path d="M20 22L25 19L30 22V28L25 31L20 28V22Z" fill="#E50000"/>
            <text x="58" y="33" fill="white" fontFamily="Manrope" fontWeight="700" fontSize="20">StreamVibe</text>
          </svg>
        </Link>
      </div>

      {/* Center Navigation Links */}
      <div className={styles.navLinksContainer}>
        <div className={styles.navLinks}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${styles.navLink} ${isActive(item.path) ? styles.navLinkActive : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className={styles.actionButtons}>
        {/* Search */}
        <button className={styles.iconBtn} aria-label="Search">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="7" stroke="#BFBFBF" strokeWidth="1.5"/>
            <path d="M16.5 16.5L21 21" stroke="#BFBFBF" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Notification */}
        <button className={styles.iconBtn} aria-label="Notifications">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 10a6 6 0 0112 0v4l2 2H4l2-2v-4z" stroke="#BFBFBF" strokeWidth="1.5" strokeLinejoin="round"/>
            <path d="M10 18a2 2 0 004 0" stroke="#BFBFBF" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>

        {/* User Avatar */}
        <button className={styles.avatarBtn} aria-label="User profile">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill="#1F1F1F"/>
            <circle cx="16" cy="13" r="5" fill="#BFBFBF"/>
            <path d="M6 26c0-5.523 4.477-8 10-8s10 2.477 10 8" fill="#BFBFBF"/>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
