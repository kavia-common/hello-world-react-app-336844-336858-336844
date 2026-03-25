import React, { useState, useRef } from 'react';
import styles from './GenreFilterBar.module.css';

/**
 * GenreFilterBar Component
 *
 * Horizontally scrollable filter bar with genre/category buttons.
 * Used on the Movies & Shows page to filter content.
 *
 * @component
 * @param {Object} props
 * @param {string[]} props.genres - List of genre labels
 * @param {string} props.activeGenre - Currently selected genre
 * @param {Function} props.onSelect - Callback when a genre is selected
 */
// PUBLIC_INTERFACE
const GenreFilterBar = ({ genres = [], activeGenre, onSelect }) => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'left' ? -200 : 200, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.scrollArrow} onClick={() => scroll('left')} aria-label="Scroll left">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <div className={styles.bar} ref={scrollRef}>
        {genres.map((genre) => (
          <button
            key={genre}
            className={`${styles.genreBtn} ${activeGenre === genre ? styles.active : ''}`}
            onClick={() => onSelect(genre)}
          >
            {genre}
          </button>
        ))}
      </div>

      <button className={styles.scrollArrow} onClick={() => scroll('right')} aria-label="Scroll right">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
};

export default GenreFilterBar;
