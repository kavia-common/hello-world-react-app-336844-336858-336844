import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import EpisodeCard from '../../components/EpisodeCard/EpisodeCard';
import ContentRow from '../../components/ContentRow/ContentRow';
import { SHOW_DETAIL, CONTENT_DATA } from '../../constants/theme';
import styles from './ShowsPage.module.css';

/**
 * ShowsPage (Shows Open / Show Detail Page)
 *
 * Detailed page for a specific show. Displays:
 *  - Hero banner with show backdrop
 *  - Season/episode selector tabs
 *  - Episode list
 *  - Cast section
 *  - More like this content row
 *  - Devices section CTA
 *
 * @component
 */
// PUBLIC_INTERFACE
const ShowsPage = () => {
  const { id } = useParams();
  const show = SHOW_DETAIL; // In a real app, fetch by id
  const [activeSeason, setActiveSeason] = useState(1);
  const [activeTab, setActiveTab] = useState('episodes');

  const seasons = Array.from({ length: show.seasons }, (_, i) => i + 1);
  const filteredEpisodes = show.episodes_list.filter(
    (ep) => ep.season === activeSeason
  );

  return (
    <main className={styles.page}>
      {/* Hero Banner */}
      <div className={styles.heroBannerWrapper}>
        <HeroBanner
          title={show.title}
          description={show.description}
          bgImage={show.heroImg}
          tags={show.genre}
          rating={String(show.rating)}
          year={String(show.year)}
        />
      </div>

      {/* Show Info Tabs */}
      <div className={styles.mainContent}>
        {/* Left: Episodes / Cast / More Like This */}
        <div className={styles.leftCol}>
          {/* Tabs */}
          <div className={styles.tabs}>
            {['episodes', 'cast', 'reviews'].map((tab) => (
              <button
                key={tab}
                className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Episodes tab */}
          {activeTab === 'episodes' && (
            <div className={styles.episodesSection}>
              {/* Season selector */}
              <div className={styles.seasonSelector}>
                {seasons.map((s) => (
                  <button
                    key={s}
                    className={`${styles.seasonBtn} ${activeSeason === s ? styles.seasonActive : ''}`}
                    onClick={() => setActiveSeason(s)}
                  >
                    Season {s}
                  </button>
                ))}
              </div>

              {/* Episode list */}
              <div className={styles.episodeList}>
                {filteredEpisodes.map((ep) => (
                  <EpisodeCard key={ep.id} episode={ep} />
                ))}
                {filteredEpisodes.length === 0 && (
                  <p className={styles.emptyMsg}>No episodes found for this season.</p>
                )}
              </div>
            </div>
          )}

          {/* Cast tab */}
          {activeTab === 'cast' && (
            <div className={styles.castGrid}>
              {show.cast.map((member) => (
                <div key={member.name} className={styles.castCard}>
                  <img
                    src={member.img}
                    alt={member.name}
                    className={styles.castImg}
                    loading="lazy"
                  />
                  <div className={styles.castInfo}>
                    <span className={styles.castName}>{member.name}</span>
                    <span className={styles.castRole}>{member.role}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Reviews tab placeholder */}
          {activeTab === 'reviews' && (
            <div className={styles.reviewsPlaceholder}>
              <p className={styles.emptyMsg}>Reviews coming soon.</p>
            </div>
          )}
        </div>

        {/* Right: Show Metadata */}
        <div className={styles.rightCol}>
          <div className={styles.metaCard}>
            <h3 className={styles.metaHeading}>Show Info</h3>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Genre</span>
              <span className={styles.metaValue}>{show.genre.join(', ')}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Year</span>
              <span className={styles.metaValue}>{show.year}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Seasons</span>
              <span className={styles.metaValue}>{show.seasons}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Episodes</span>
              <span className={styles.metaValue}>{show.episodes}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Rating</span>
              <span className={styles.metaValueHighlight}>⭐ {show.rating}</span>
            </div>

            <button className={styles.watchNowBtn}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M6 4l14 8-14 8V4z" fill="white"/>
              </svg>
              Watch Now
            </button>
            <button className={styles.addBtn}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 5v14M5 12h14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Add to Watchlist
            </button>
          </div>
        </div>
      </div>

      {/* More Like This */}
      <div className={styles.moreLikeSection}>
        <ContentRow title="More Like This" items={show.moreLikeThis} />
      </div>
    </main>
  );
};

export default ShowsPage;
