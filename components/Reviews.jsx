'use client';

import styles from './Reviews.module.css';
import { Star } from 'lucide-react';

// Add REAL customer reviews here (copied from Google with the reviewer's first name).
// While this list is empty, the section shows a "See our reviews on Google" panel instead.
// Example: { id: 1, name: "Rahul S.", initial: "R", text: "…", rating: 5 },
const reviewsData = [];

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/maps/search/?api=1&query=Activerse+Golf+Course+Road+Gurugram';

export default function Reviews() {
  // Duplicate the array so the marquee loops seamlessly
  const marqueeItems = [...reviewsData, ...reviewsData];
  const hasReviews = reviewsData.length > 0;

  return (
    <section id="reviews" className={styles.reviewsSection}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Player Intel</h2>
        <div className={styles.sectionLine}></div>
      </div>

      {!hasReviews && (
        <div className={styles.googlePanel}>
          <p className={styles.googleText}>
            Played at Activerse? Tell us how you did. Read what other players said, or leave your own review on Google.
          </p>
          <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className={styles.googleBtn}>
            See our reviews on Google
          </a>
        </div>
      )}

      {hasReviews && (
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          {marqueeItems.map((review, index) => (
            <div key={`${review.id}-${index}`} className={styles.card}>
              <div className={styles.header}>
                <div className={styles.avatar}>{review.initial}</div>
                <div>
                  <div className={styles.name}>{review.name}</div>
                  <div className={styles.stars}>
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#ffb300" color="#ffb300" />
                    ))}
                  </div>
                </div>
              </div>
              <p className={styles.text}>"{review.text}"</p>
              <div className={styles.quoteIcon}>"</div>
            </div>
          ))}
        </div>
      </div>
      )}
    </section>
  );
}
