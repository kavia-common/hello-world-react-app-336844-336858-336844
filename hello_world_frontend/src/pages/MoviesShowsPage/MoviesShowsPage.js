import React, { useState } from 'react';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import GenreFilterBar from '../../components/GenreFilterBar/GenreFilterBar';
import ContentRow from '../../components/ContentRow/ContentRow';
import DevicesSection from '../../components/DevicesSection/DevicesSection';
import { CONTENT_DATA } from '../../constants/theme';
import styles from './MoviesShowsPage.module.css';

const GENRES = [
  'All', 'Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy',
  'Horror', 'Mystery', 'Romance', 'Sci-Fi', 'Thriller', 'Animation',
];

/**
 * MoviesShowsPage
 *
 * Page displaying movies and shows with a hero banner, genre filter bar,
 * and multiple content rows (Trending, New Releases, Top Rated, etc.).
 *
 * @component
 */
// PUBLIC_INTERFACE
const MoviesShowsPage = () => {
  const [activeGenre, setActiveGenre] = useState('All');

  const filterContent = (items) => {
    if (activeGenre === 'All') return items;
    return items.filter((item) =>
      item.genre && item.genre.toLowerCase().includes(activeGenre.toLowerCase())
    );
  };

  return (
    <main className={styles.page}>
      {/* Hero Banner */}
      <div className={styles.heroBannerWrapper}>
        <HeroBanner
          title="Avengers: Endgame"
          description="After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more to reverse Thanos' actions and restore balance to the universe."
          bgImage="/assets/hero-movies.png"
          tags={['Action', 'Adventure', 'Sci-Fi']}
          rating="8.4"
          year="2019"
        />
      </div>

      {/* Genre Filter */}
      <div className={styles.filterSection}>
        <GenreFilterBar
          genres={GENRES}
          activeGenre={activeGenre}
          onSelect={setActiveGenre}
        />
      </div>

      {/* Content Rows */}
      <div className={styles.contentSection}>
        <ContentRow
          title="Trending Movies & Shows"
          items={filterContent(CONTENT_DATA.trending)}
        />
        <ContentRow
          title="New Releases"
          items={filterContent(CONTENT_DATA.newReleases)}
        />
        <ContentRow
          title="Must Watch"
          items={filterContent(CONTENT_DATA.mustWatch)}
        />
        <ContentRow
          title="Top Rated"
          items={filterContent(CONTENT_DATA.topRated)}
        />
      </div>

      {/* Devices Section (matches Figma: present on Movies page too) */}
      <DevicesSection />

      <div className={styles.spacer} />
    </main>
  );
};

export default MoviesShowsPage;
