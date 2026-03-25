import React from 'react';
import styles from './DevicesSection.module.css';

/**
 * DevicesSection Component
 *
 * Displays the "We Support Every Device" section found on the Home page.
 * Shows a CTA text block on the left and device icons on the right,
 * matching the Figma layout.
 *
 * @component
 */
// PUBLIC_INTERFACE
const DevicesSection = () => {
  const devices = [
    {
      name: 'Smartphones',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <rect x="5" y="2" width="14" height="20" rx="2" stroke="#BFBFBF" strokeWidth="1.5"/>
          <circle cx="12" cy="17" r="1" fill="#BFBFBF"/>
        </svg>
      ),
    },
    {
      name: 'Tablet',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="2" width="18" height="20" rx="2" stroke="#BFBFBF" strokeWidth="1.5"/>
          <circle cx="12" cy="17" r="1" fill="#BFBFBF"/>
        </svg>
      ),
    },
    {
      name: 'Smart TV',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="3" width="20" height="14" rx="2" stroke="#BFBFBF" strokeWidth="1.5"/>
          <path d="M8 21h8M12 17v4" stroke="#BFBFBF" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      name: 'Laptop',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="4" width="18" height="13" rx="2" stroke="#BFBFBF" strokeWidth="1.5"/>
          <path d="M1 20h22" stroke="#BFBFBF" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      name: 'Gaming Console',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="7" width="20" height="10" rx="3" stroke="#BFBFBF" strokeWidth="1.5"/>
          <path d="M7 11v2M8 10v4" stroke="#BFBFBF" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="16" cy="12" r="1" fill="#BFBFBF"/>
          <circle cx="14" cy="10" r="0.5" fill="#BFBFBF"/>
        </svg>
      ),
    },
    {
      name: 'VR Headset',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M2 9h20v6a4 4 0 01-4 4H6a4 4 0 01-4-4V9z" stroke="#BFBFBF" strokeWidth="1.5"/>
          <circle cx="9" cy="12" r="2" stroke="#BFBFBF" strokeWidth="1.5"/>
          <circle cx="15" cy="12" r="2" stroke="#BFBFBF" strokeWidth="1.5"/>
        </svg>
      ),
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Text block (left) */}
        <div className={styles.textBlock}>
          <h2 className={styles.heading}>We Support Every Device</h2>
          <p className={styles.paragraph}>
            StreamVibe is optimized for all your devices, so you can enjoy your favorite content
            anywhere, anytime. From smartphones to smart TVs, gaming consoles to VR headsets, we've
            got you covered.
          </p>
          <button className={styles.btn}>Get StreamVibe App</button>
        </div>

        {/* Devices grid (right) */}
        <div className={styles.devicesGrid}>
          {devices.map((device) => (
            <div key={device.name} className={styles.deviceCard}>
              <div className={styles.deviceIcon}>{device.icon}</div>
              <span className={styles.deviceName}>{device.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevicesSection;
