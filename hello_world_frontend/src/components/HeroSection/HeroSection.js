import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeroSection.module.css';

/**
 * HeroSection Component
 *
 * Full-width hero section for the home page.
 * Displays an animated movie poster grid background with a central CTA.
 * Background shows rows of movie posters with fade effects.
 *
 * @component
 */
// PUBLIC_INTERFACE
const HeroSection = () => {
  // Movie posters for background grid
  const row1 = [
    '/assets/movie-1.png',
    '/assets/movie-2.png',
    '/assets/movie-3.png',
    '/assets/movie-4.png',
    '/assets/movie-5.png',
    '/assets/movie-6.png',
    '/assets/movie-7.png',
    '/assets/movie-8.png',
    '/assets/movie-9.png',
  ];
  const row2 = [
    '/assets/movie-10.png',
    '/assets/movie-11.png',
    '/assets/movie-12.png',
    '/assets/movie-13.png',
    '/assets/movie-14.png',
    '/assets/movie-15.png',
    '/assets/movie-16.png',
    '/assets/movie-17.png',
    '/assets/movie-1.png',
  ];
  const row3 = [
    '/assets/movie-2.png',
    '/assets/movie-3.png',
    '/assets/movie-4.png',
    '/assets/movie-5.png',
    '/assets/movie-6.png',
    '/assets/movie-7.png',
    '/assets/movie-8.png',
    '/assets/movie-9.png',
    '/assets/movie-10.png',
  ];
  const row4 = [
    '/assets/movie-11.png',
    '/assets/movie-12.png',
    '/assets/movie-13.png',
    '/assets/movie-14.png',
    '/assets/movie-15.png',
    '/assets/movie-16.png',
    '/assets/movie-17.png',
    '/assets/movie-1.png',
    '/assets/movie-2.png',
  ];

  return (
    <div className={styles.heroWrapper}>
      {/* Background movie grid */}
      <div className={styles.bgGrid} aria-hidden="true">
        <div className={styles.gridRow}>
          {row1.map((src, i) => (
            <img key={i} src={src} alt="" className={styles.bgPoster} loading="lazy" />
          ))}
        </div>
        <div className={styles.gridRow}>
          {row2.map((src, i) => (
            <img key={i} src={src} alt="" className={styles.bgPoster} loading="lazy" />
          ))}
        </div>
        <div className={styles.gridRow}>
          {row3.map((src, i) => (
            <img key={i} src={src} alt="" className={styles.bgPoster} loading="lazy" />
          ))}
        </div>
        <div className={styles.gridRow}>
          {row4.map((src, i) => (
            <img key={i} src={src} alt="" className={styles.bgPoster} loading="lazy" />
          ))}
        </div>

        {/* Fade overlays */}
        <div className={styles.fadeTop} />
        <div className={styles.fadeBottom} />
      </div>

      {/* CTA Content */}
      <div className={styles.ctaContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.heading}>The Best Streaming Experience</h1>
          <p className={styles.paragraph}>
            StreamVibe is the best streaming experience for watching your favorite movies and shows
            on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content,
            including the latest blockbusters, classic movies, popular TV shows, and more. You can
            also create your own watchlists, so you can easily find the content you want to watch.
          </p>
        </div>

        <Link to="/movies-shows" className={styles.ctaButton}>
          {/* Play icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 4l14 8-14 8V4z" fill="white"/>
          </svg>
          <span>Start Watching Now</span>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
