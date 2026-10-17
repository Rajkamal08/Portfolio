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

  const fullName = personalInfo.fullName || 'Raj Kamal Mehta';
  const words = fullName.split(' ');

  let charCounter = 0;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={styles.preloader}
          exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
          <div className={styles.logo}>
            {words.map((word, wIdx) => (
              <span key={wIdx} className={styles.word}>
                {word.split('').map((char, cIdx) => {
                  const currentDelay = charCounter * 0.07;
                  charCounter++;
                  return (
                    <motion.span
                      key={cIdx}
                      className={styles.char}
                      initial={{ y: '100%' }}
                      animate={{ y: '0%' }}
                      transition={{
                        duration: 0.8,
                        ease: [0.76, 0, 0.24, 1],
                        delay: currentDelay,
                      }}
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </span>
            ))}
            <motion.span
              className={`${styles.char} ${styles.dot}`}
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
                delay: charCounter * 0.07 + 0.15,
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
