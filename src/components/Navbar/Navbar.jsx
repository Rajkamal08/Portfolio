import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Command } from 'lucide-react';
import { navItems, personalInfo } from '../../constants/data';
import { navVariants } from '../../animations/variants';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);
      setHidden(currentY > 200 && currentY > lastScrollY);
      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  /* Lock body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const triggerCmdK = () => {
    const event = new KeyboardEvent('keydown', { key: 'k', metaKey: true });
    document.dispatchEvent(event);
  };

  return (
    <>
      <motion.nav
        className={`${styles.nav} ${scrolled ? styles.scrolled : ''} ${hidden && !mobileOpen ? styles.hidden : ''}`}
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <div className={styles.navInner}>
          <div className={styles.logo} onClick={scrollToTop} role="button" tabIndex={0} aria-label="Scroll to top">
            {personalInfo.name}<span className={styles.logoAccent}>.</span>
          </div>

          <div className={styles.navLinks}>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={styles.navLink}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}
            <button className={styles.cmdKBtn} onClick={triggerCmdK} aria-label="Open Command Menu">
              <Command size={14} /> <span>⌘K</span>
            </button>
            <ThemeToggle />
            <a
              href={personalInfo.resumeFile}
              className={styles.resumeBtn}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <Download /> Resume
            </a>
          </div>

          <div
            className={`${styles.menuToggle} ${mobileOpen ? styles.open : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            role="button"
            tabIndex={0}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={styles.mobileNavLink}
            onClick={(e) => handleNavClick(e, item.href)}
          >
            {item.label}
          </a>
        ))}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
          <ThemeToggle />
          <a
            href={personalInfo.resumeFile}
            className={styles.resumeBtn}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <Download /> Resume
          </a>
        </div>
      </div>
    </>
  );
}
