import { motion } from 'framer-motion';
import { fadeInUp, viewportOnce } from '../../animations/variants';
import styles from './SectionHeader.module.css';

export default function SectionHeader({ label, title, description }) {
  return (
    <motion.div
      className={styles.header}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {label && (
        <div className={styles.label}>
          <span className={styles.labelLine} />
          <span className={styles.labelText}>{label}</span>
        </div>
      )}
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </motion.div>
  );
}
