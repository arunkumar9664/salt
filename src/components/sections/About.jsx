import { motion } from 'framer-motion';
import { fadeUpStagger, fadeUpItem, slideFromLeft, slideFromRight, viewportOnce } from '../../utils/motion';
import SectionTitle from '../ui/SectionTitle';
import AnimatedCounter from '../ui/AnimatedCounter';
import { site, stats } from '../../data/site';
import styles from './About.module.scss';

export default function About() {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-title">
      <div className={styles.container}>
        <motion.div
          className={styles.imageWrap}
          variants={slideFromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.img
            src="/photos/salt-2.jpg"
            alt={`Dancers and events at ${site.name}, Jaipur`}
            loading="lazy"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.6 }}
          />
          <motion.span
            className={styles.badge}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
          >
            Est. {site.established} · Jaipur
          </motion.span>
        </motion.div>

        <motion.div
          className={styles.content}
          variants={slideFromRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <SectionTitle
            label="About Academy"
            title="Sweat. Dedication. Attitude."
            subtitle={`${site.name} offers professional dance courses, street styles, wedding production, reels batches, Yoga/Zumba, and more — with regular and weekend batches.`}
            align="left"
          />

          <div className={styles.story}>
            <h3 id="about-title">Our Story</h3>
            <p>
              Founded in Mansarovar, SALT Dance Academy trains dancers with a clear ethos:{' '}
              <strong>Sweat. Dedication. Attitude.</strong> From professional courses and all street
              dance styles to open-style choreography, Latin forms, wedding event production, reels
              batches, and Yoga/Zumba — we help every student find their rhythm and perform with
              confidence.
            </p>
            <ul className={styles.serviceList}>
              {site.services.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <motion.div
            className={styles.missionVision}
            variants={fadeUpStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.article variants={fadeUpItem}>
              <h4>Mission</h4>
              <p>
                To train dancers with sweat, dedication, and attitude — through professional courses,
                street styles, choreography, wedding production, Latin forms, reels, and fitness
                movement for every schedule.
              </p>
            </motion.article>
            <motion.article variants={fadeUpItem}>
              <h4>Vision</h4>
              <p>
                To be Mansarovar&apos;s go-to dance academy — where students of every age grow into
                confident performers for stage, weddings, and the camera.
              </p>
            </motion.article>
          </motion.div>

          <motion.div
            className={styles.stats}
            variants={fadeUpStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={fadeUpItem}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} label={stat.label} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
