import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, FileText } from 'lucide-react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import MagneticButton from '../../components/MagneticButton/MagneticButton';
import { publication } from '../../constants/data';
import { scaleIn, viewportOnce } from '../../animations/variants';
import styles from './Publication.module.css';

export default function Publication() {
  return (
    <section className={`section ${styles.publication}`} id="publication">
      <div className="container">
        <SectionHeader
          label="Research"
          title="Published Research"
          description="Contributing to the academic community."
        />

        <motion.div
          className={styles.pubCard}
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div className={styles.pubDecor}>
            <BookOpen size={36} />
          </div>

          <div className={styles.pubHeader}>
            <span className={styles.pubBadge}>
              <FileText size={12} />
              {publication.badge}
            </span>
            <span className={styles.pubYear}>{publication.year}</span>
          </div>

          <h3 className={styles.pubTitle}>{publication.title}</h3>
          <div className={styles.pubAuthors}>{publication.authors}</div>
          <div className={styles.pubPlatform}>{publication.platform} — IEEE-supported preprint</div>

          <blockquote className={styles.pubAbstract}>
            {publication.abstract}
          </blockquote>

          <div className={styles.pubTech}>
            {publication.tech.map((tech) => (
              <span key={tech} className={styles.pubTechTag}>{tech}</span>
            ))}
          </div>

          <div className={styles.pubActions}>
            <MagneticButton variant="primary" href={publication.link} target="_blank">
              <ExternalLink size={14} /> Read Paper
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
