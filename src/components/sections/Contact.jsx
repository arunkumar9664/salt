import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { site } from '../../data/site';
import styles from './Contact.module.scss';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-title">
      <div className={styles.container}>
        <SectionTitle
          label="Contact"
          title="Begin Your Journey"
          subtitle={`Visit us in ${site.addressShort}, Jaipur — book a free trial class or speak with our team today.`}
          align="left"
        />
        <h2 id="contact-title" className="sr-only">
          Contact Us
        </h2>

        <div className={styles.grid}>
          <motion.form
            className={styles.form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <p className={styles.success}>
                Thank you! Our team will reach out within 24 hours to welcome you to{' '}
                {site.name}.
              </p>
            ) : (
              <>
                <div className={styles.row}>
                  <label>
                    Full Name
                    <input type="text" name="name" required placeholder="Your name" />
                  </label>
                  <label>
                    Email
                    <input type="email" name="email" required placeholder="you@email.com" />
                  </label>
                </div>
                <label>
                  Phone
                  <input type="tel" name="phone" placeholder="+91 98XXX XXXXX" />
                </label>
                <label>
                  Program Interest
                  <select name="program" defaultValue="">
                    <option value="" disabled>
                      Select a program
                    </option>
                    <option>Professional Dance Courses</option>
                    <option>All Street Dance Styles</option>
                    <option>Open Style Choreography</option>
                    <option>Wedding Event Production</option>
                    <option>Latin Dance Forms</option>
                    <option>Reels Batch</option>
                    <option>Yoga / Zumba</option>
                    <option>Regular / Weekend Batches</option>
                    <option>Other</option>
                  </select>
                </label>
                <label>
                  Message
                  <textarea name="message" rows={4} placeholder="Tell us about your dance goals..." />
                </label>
                <Button type="submit" variant="primary">
                  Send Message
                </Button>
              </>
            )}
          </motion.form>

          <motion.aside
            className={styles.info}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.block}>
              <h4>Google Rating</h4>
              <p className={styles.rating}>
                ★ {site.rating.value} · {site.rating.count} Google reviews
              </p>
              <a
                href={site.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapLink}
              >
                Read reviews on Google
              </a>
            </div>
            <div className={styles.block}>
              <h4>Hours</h4>
              <p>{site.hours.summary}</p>
            </div>
            <div className={styles.block}>
              <h4>Phone</h4>
              <a href={`tel:${site.phoneTel}`}>{site.phone}</a>
              {site.phoneAlt && (
                <a href={`tel:${site.phoneAltTel}`} className={styles.altPhone}>
                  {site.phoneAlt}
                </a>
              )}
            </div>
            <div className={styles.block}>
              <h4>WhatsApp</h4>
              <a href={site.social.whatsapp} target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
            </div>
            <div className={styles.block}>
              <h4>Email</h4>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
            <div className={styles.block}>
              <h4>Location</h4>
              <p>{site.address}</p>
              {site.landmark && <p className={styles.landmark}>{site.landmark}</p>}
              {site.plusCode && <p className={styles.landmark}>{site.plusCode}</p>}
              <a
                href={site.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapLink}
              >
                View on Google Maps
              </a>
            </div>
            <div className={styles.social}>
              <h4>Follow Us</h4>
              <div className={styles.socialLinks}>
                <a href={site.social.instagram} target="_blank" rel="noopener noreferrer">
                  Instagram @salt_it_is
                </a>
                <a href={`${site.social.instagram}reels/`} target="_blank" rel="noopener noreferrer">
                  Instagram Reels
                </a>
                <a href={site.social.facebook} target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
                <a href={site.social.whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
                <a href={site.social.justdial} target="_blank" rel="noopener noreferrer">
                  JustDial
                </a>
              </div>
            </div>
            <div className={styles.map}>
              <img
                src="/photos/salt-3.jpg"
                alt="SALT Dance Academy studio — Mansarovar, Jaipur"
                loading="lazy"
              />
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
