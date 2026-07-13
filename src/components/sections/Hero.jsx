import { motion } from 'framer-motion';
import { site } from '../../data/site';
import Button from '../ui/Button';
import ScrollIndicator from '../ui/ScrollIndicator';
import TextReveal from '../ui/TextReveal';
import FloatingOrbs from '../ui/FloatingOrbs';
import { useParallax } from '../../hooks/useParallax';
import { heroContainer, heroChild } from '../../utils/motion';
import styles from './Hero.module.scss';

export default function Hero() {
  const { ref, y, scale, opacity } = useParallax(80);

  return (
    <section className={styles.hero} aria-label="Hero" ref={ref}>
      <motion.div className={styles.mediaWrap} style={{ y, scale, opacity }}>
        <motion.img
          src={site.heroImage}
          alt={`${site.name} — Mansarovar, Jaipur`}
          className={styles.media}
          onError={(e) => {
            e.currentTarget.src = site.heroImageFallback;
          }}
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>

      <div className={styles.overlay} />
      <FloatingOrbs />
      <motion.div
        className={styles.shimmer}
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 4, repeat: Infinity, repeatDelay: 6, ease: 'easeInOut' }}
        aria-hidden="true"
      />

      <motion.div
        className={styles.content}
        variants={heroContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.span className={styles.eyebrow} variants={heroChild}>
          {site.heroEyebrow} · {site.locationTag}
        </motion.span>
        <h1 className={styles.heading}>
          <TextReveal text="SALT" as="span" className={styles.line} delay={0.5} />
          <TextReveal text="Dance Academy" as="em" className={styles.lineGold} delay={0.85} />
        </h1>
        <motion.p className={styles.subheading} variants={heroChild}>
          {site.tagline}
        </motion.p>
        <motion.div className={styles.actions} variants={heroChild}>
          <Button to="/#contact" variant="primary">
            Join Academy
          </Button>
          <Button href={`tel:${site.phoneTel}`} variant="secondary">
            Call {site.phone}
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.scrollWrap}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <ScrollIndicator />
      </motion.div>
    </section>
  );
}
