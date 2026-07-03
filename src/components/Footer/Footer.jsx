import { ArrowUp } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerLeft}>
          Designed & Built by Raj Kamal Mehta · <span>{year}</span>
        </div>
        <div className={styles.footerRight}>
          <button className={styles.backToTop} onClick={scrollToTop} aria-label="Back to top">
            <ArrowUp /> Top
          </button>
        </div>
      </div>
    </footer>
  );
}
