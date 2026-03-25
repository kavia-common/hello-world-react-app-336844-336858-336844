import React, { useRef } from 'react';
import ContentCard from '../ContentCard/ContentCard';
import styles from './ContentRow.module.css';

/**
 * ContentRow Component
 *
 * Displays a horizontally scrollable row of content cards with a section heading.
 * Includes navigation arrows for scroll control.
 *
 * @component
 * @param {Object} props
 * @param {string} props.title - Section heading
 * @param {Array} props.items - Array of content objects to display
 * @param {string} [props.cardSize='medium'] - Card size passed to ContentCard
 */
// PUBLIC_INTERFACE
const ContentRow = ({ title, items = [], cardSize = 'medium' }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -600 : 600;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.arrows}>
          <button
            className={styles.arrowBtn}
            onClick={() => scroll('left')}
            aria-label="Scroll left"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            className={styles.arrowBtn}
            onClick={() => scroll('right')}
            aria-label="Scroll right"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <div className={styles.scrollContainer} ref={scrollRef}>
        {items.map((item) => (
          <ContentCard key={item.id} item={item} size={cardSize} />
        ))}
      </div>
    </section>
  );
};

export default ContentRow;
