import React from 'react';
import styles from './EpisodeCard.module.css';

/**
 * EpisodeCard Component
 *
 * Displays a single episode item with thumbnail, episode number, title, and duration.
 * Used in the episode list on the Shows Open page.
 *
 * @component
 * @param {Object} props
 * @param {Object} props.episode - Episode data
 * @param {number} props.episode.id - Episode ID
 * @param {string} props.episode.title - Episode title
 * @param {string} props.episode.duration - Episode duration string
 * @param {number} props.episode.season - Season number
 * @param {number} props.episode.ep - Episode number
 * @param {string} props.episode.img - Thumbnail image URL
 */
// PUBLIC_INTERFACE
const EpisodeCard = ({ episode }) => {
  return (
    <div className={styles.card}>
      {/* Thumbnail */}
      <div className={styles.thumbnail}>
        <img src={episode.img} alt={episode.title} className={styles.thumbImg} loading="lazy" />
        <div className={styles.playOverlay}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 4l14 8-14 8V4z" fill="white"/>
          </svg>
        </div>
        <span className={styles.duration}>{episode.duration}</span>
      </div>

      {/* Info */}
      <div className={styles.info}>
        <div className={styles.epNum}>
          S{episode.season} E{episode.ep}
        </div>
        <h4 className={styles.title}>{episode.title}</h4>
      </div>
    </div>
  );
};

export default EpisodeCard;
