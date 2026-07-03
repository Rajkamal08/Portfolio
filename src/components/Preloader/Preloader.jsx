import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../../constants/data';
import styles from './Preloader.module.css';

export default function Preloader({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Lock body scroll while preloader is visible
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        document.body.style.overflow = '';
        onComplete();
      }, 800); // Wait for exit animation
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  const chars = personalInfo.name.split('');

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={styles.preloader}
          exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
          <div className={styles.logo}>
            {chars.map((char, i) => (
              <motion.span
                key={i}
                className={styles.char}
                initial={{ y: '100%' }}
                animate={{ y: '0%' }}
                transition={{
                  duration: 0.8,
                  ease: [0.76, 0, 0.24, 1],
                  delay: i * 0.1,
                }}
              >
                {char}
              </motion.span>
            ))}
            <motion.span
              className={`${styles.char} ${styles.dot}`}
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
                delay: chars.length * 0.1 + 0.2,
              }}
            >
              .
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
