import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { reels, reelPhotos, reelLinks } from '../../data/reels';
import { site } from '../../data/site';
import { fadeUpStagger, fadeUpItem, viewportOnce } from '../../utils/motion';
import styles from './VideoShowcase.module.scss';

export default function VideoShowcase() {
  const [active, setActive] = useState(reels[0]);

  const selectByPhoto = (reelId) => {
    const match = reels.find((r) => r.id === reelId);
    if (match) setActive(match);
  };

  return (
    <section id="reels" className={styles.section} aria-labelledby="reels-title">
      <div className={styles.container}>
        <SectionTitle
          label="Watch Us Move"
          title="Reels & Photos from SALT"
          subtitle="Real academy photos and Facebook reels — follow @salt_it_is for the latest class clips and showcases."
        />
        <h2 id="reels-title" className="sr-only">
          Instagram & Facebook Reels
        </h2>

        <motion.div
          className={styles.photoStrip}
          variants={fadeUpStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {reelPhotos.map((photo) => (
            <motion.button
              key={photo.id}
              type="button"
              className={`${styles.photoCard} ${active.id === photo.reelId ? styles.photoActive : ''}`}
              onClick={() => selectByPhoto(photo.reelId)}
              variants={fadeUpItem}
              aria-label={`Play reel for ${photo.alt}`}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <span className={styles.photoPlay} aria-hidden="true">
                ▶
              </span>
            </motion.button>
          ))}
        </motion.div>

        <div className={styles.layout}>
          <motion.div
            className={styles.player}
            key={active.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className={styles.frame}>
              <img
                src={active.thumbnail}
                alt=""
                className={styles.poster}
                aria-hidden="true"
              />
              <iframe
                src={active.embedUrl}
                title={active.title}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className={styles.meta}>
              <h3>{active.title}</h3>
              <p>{active.views} views · Facebook Reel</p>
              <a href={active.url} target="_blank" rel="noopener noreferrer">
                Open on Facebook →
              </a>
            </div>
          </motion.div>

          <motion.div
            className={styles.list}
            variants={fadeUpStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {reels.map((reel) => (
              <motion.button
                key={reel.id}
                type="button"
                className={`${styles.thumb} ${active.id === reel.id ? styles.active : ''}`}
                onClick={() => setActive(reel)}
                variants={fadeUpItem}
              >
                <img src={reel.thumbnail} alt={reel.title} loading="lazy" />
                <span className={styles.play} aria-hidden="true">
                  ▶
                </span>
                <span className={styles.thumbInfo}>
                  <strong>{reel.title}</strong>
                  <small>{reel.views} views</small>
                </span>
              </motion.button>
            ))}
          </motion.div>
        </div>

        <div className={styles.cta}>
          <Button href={reelLinks.instagramReels} variant="primary" external>
            Watch on Instagram @salt_it_is
          </Button>
          <Button href={reelLinks.facebookReels} variant="secondary" external>
            More Facebook Reels
          </Button>
          <Button href={reelLinks.googleImages} variant="secondary" external>
            More Photos on Google
          </Button>
          <a
            href={site.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ratingLink}
          >
            ★ {site.rating.value} on Google ({site.rating.count} reviews)
          </a>
        </div>
      </div>
    </section>
  );
}
