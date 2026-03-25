import React, { useState } from 'react';
import { FAQ_DATA } from '../../constants/theme';
import styles from './FAQSection.module.css';

/**
 * FAQItem Component (internal)
 *
 * Single accordion FAQ item with expand/collapse functionality.
 *
 * @param {Object} props
 * @param {Object} props.item - FAQ data item
 * @param {boolean} props.isOpen - Whether the item is expanded
 * @param {Function} props.onToggle - Toggle handler
 */
const FAQItem = ({ item, isOpen, onToggle }) => (
  <div className={styles.faqItem}>
    <button
      className={styles.faqQuestion}
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-controls={`faq-answer-${item.id}`}
    >
      {/* Number badge */}
      <div className={styles.numBadge}>
        <span className={styles.numText}>{String(item.id).padStart(2, '0')}</span>
      </div>

      <span className={styles.questionText}>{item.question}</span>

      {/* Plus/Minus icon */}
      <div className={styles.icon}>
        {isOpen ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12h14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )}
      </div>
    </button>

    {isOpen && (
      <div
        className={styles.faqAnswer}
        id={`faq-answer-${item.id}`}
        role="region"
      >
        <p className={styles.answerText}>{item.answer}</p>
      </div>
    )}

    {/* Separator line with gradient */}
    <div className={styles.separator} />
  </div>
);

/**
 * FAQSection Component
 *
 * Displays a section with frequently asked questions in an accordion format.
 * FAQ items are split into two columns matching the Figma design.
 *
 * @component
 */
// PUBLIC_INTERFACE
const FAQSection = () => {
  const [openId, setOpenId] = useState(1);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  // Split FAQ data into two columns (left: first 4, right: last 4)
  const leftColumn = FAQ_DATA.slice(0, 4);
  const rightColumn = FAQ_DATA.slice(4);

  return (
    <section className={styles.section}>
      {/* Section header */}
      <div className={styles.sectionHeader}>
        <div className={styles.headingGroup}>
          <h2 className={styles.heading}>Frequently Asked Questions</h2>
          <p className={styles.subheading}>
            Got questions? We've got answers! Check out our FAQ section to find answers to the most
            common questions about StreamVibe.
          </p>
        </div>
        <button className={styles.askBtn}>Ask a Question</button>
      </div>

      {/* FAQ columns */}
      <div className={styles.columns}>
        <div className={styles.column}>
          {leftColumn.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>
        <div className={styles.column}>
          {rightColumn.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
