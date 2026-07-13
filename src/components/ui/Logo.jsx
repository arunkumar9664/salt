import { site } from '../../data/site';
import styles from './Logo.module.scss';

export default function Logo({ variant = 'header', showText = true, className = '' }) {
  const src = variant === 'full' ? site.logoFullSrc : site.logoSrc;

  return (
    <span className={`${styles.logo} ${styles[variant]} ${className}`.trim()}>
      <img
        src={src}
        alt={`${site.name} logo`}
        className={styles.mark}
        width={variant === 'full' ? 200 : 48}
        height={variant === 'full' ? 48 : 48}
      />
      {showText && variant !== 'full' && (
        <span className={styles.text}>
          <strong>{site.shortName}</strong>
          <small>{site.locationTag}</small>
        </span>
      )}
    </span>
  );
}
