import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ContentCard.module.css';

/**
 * ContentCard Component
 *
 * Displays a movie/show card with poster image, title, genre, and rating.
 * Supports hover effects with a play button overlay.
 * Links to the show detail page when clicked.
 *
 * @component
 * @param {Object} props
 * @param {Object} props.item - Content data object
 * @param {string} props.item.img - Poster image path
 * @param {string} props.item.title - Content title
 * @param {string} props.item.genre - Content genre
 * @param {number} props.item.rating - Content rating (out of 10)
 * @param {number} props.item.year - Release year
 * @param {string} [props.size='medium'] - Card size variant: 'small' | 'medium' | 'large'
 */
// PUBLIC_INTERFACE
const ContentCard = ({ item, size = 'medium' }) => {
  const [imgError, setImgError] = useState(false);

  const handleImgError = () => {
    setImgError(true);
  };

  return (
    <Link
      to={`/shows/${item.id}`}
      className={`${styles.card} ${styles[size]}`}
      aria-label={`View ${item.title}`}
    >
      {/* Poster image */}
      <div className={styles.imageWrapper}>
        {!imgError ? (
          <img
            src={item.img}
            alt={item.title}
            className={styles.poster}
            onError={handleImgError}
            loading="lazy"
          />
        ) : (
          <div className={styles.placeholder}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="3" width="20" height="14" rx="2" stroke="#666" strokeWidth="1.5"/>
              <path d="M8 21h8M12 17v4" stroke="#666" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        )}

        {/* Overlay with play button on hover */}
        <div className={styles.overlay}>
          <button className={styles.playBtn} aria-label={`Play ${item.title}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M6 4l14 8-14 8V4z" fill="white"/>
            </svg>
          </button>
        </div>

        {/* Rating badge */}
        {item.rating && (
          <div className={styles.ratingBadge}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="#FFD700">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span>{item.rating}</span>
          </div>
        )}
      </div>

      {/* Card info */}
      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
        <div className={styles.meta}>
          {item.genre && <span className={styles.genre}>{item.genre}</span>}
          {item.year && <span className={styles.year}>{item.year}</span>}
        </div>
      </div>
    </Link>
  );
};

export default ContentCard;
