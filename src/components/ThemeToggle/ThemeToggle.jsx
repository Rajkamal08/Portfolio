import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <motion.div
        className={styles.iconWrapper}
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 0 : 180,
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        {theme === 'dark' ? (
          <Sun size={16} strokeWidth={2} />
        ) : (
          <Moon size={16} strokeWidth={2} />
        )}
      </motion.div>
    </motion.button>
  );
}
