import React from 'react';
import styles from './HeroBanner.module.css';

/**
 * HeroBanner Component
 *
 * Full-width hero banner with background image, gradient overlay, title, and action buttons.
 * Used on the Movies & Shows page and Shows Open page.
 *
 * @component
 * @param {Object} props
 * @param {string} props.title - Banner title text
 * @param {string} props.description - Optional description text
 * @param {string} props.bgImage - Background image URL
 * @param {Array} [props.tags] - Genre/category tags
 * @param {string} [props.rating] - Rating string
 * @param {string} [props.year] - Release year
 * @param {Function} [props.onPlay] - Play button click handler
 * @param {Function} [props.onWatchlist] - Watchlist button click handler
 */
// PUBLIC_INTERFACE
const HeroBanner = ({
  title,
  description,
  bgImage,
  tags = [],
  rating,
  year,
  onPlay,
  onWatchlist,
}) => {
  return (
    <div className={styles.banner}>
      {/* Background Image */}
      {bgImage && (
        <img src={bgImage} alt="" className={styles.bgImage} />
      )}

      {/* Gradient overlay */}
      <div className={styles.gradient} />

      {/* Content */}
      <div className={styles.content}>
        {/* Tags */}
        {tags.length > 0 && (
          <div className={styles.tags}>
            {tags.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className={styles.title}>{title}</h1>

        {/* Meta info */}
        {(rating || year) && (
          <div className={styles.meta}>
            {rating && (
              <span className={styles.rating}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#FFD700">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                {rating}
              </span>
            )}
            {year && <span className={styles.year}>{year}</span>}
          </div>
        )}

        {/* Description */}
        {description && (
          <p className={styles.description}>{description}</p>
        )}

        {/* Action buttons */}
        <div className={styles.actions}>
          <button className={styles.playBtn} onClick={onPlay}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M6 4l14 8-14 8V4z" fill="white"/>
            </svg>
            Play Now
          </button>
          <button className={styles.watchlistBtn} onClick={onWatchlist}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 5v14M5 12h14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Add to Watchlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
