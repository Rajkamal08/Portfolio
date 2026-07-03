import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { achievements } from '../../constants/data';
import { fadeInUp, staggerContainer, viewportOnce } from '../../animations/variants';
import styles from './Achievements.module.css';

export default function Achievements() {
  return (
    <section className={`section ${styles.achievements}`} id="achievements">
      <div className="container">
        <SectionHeader
          label="Achievements"
          title="Certifications & Hackathons"
        />

        <motion.div
          className={styles.achieveGrid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {achievements.map((item, i) => {
            const Icon = LucideIcons[item.icon] || LucideIcons.Award;
            return (
              <motion.div key={i} className={styles.achieveCard} variants={fadeInUp}>
                <div className={`${styles.achieveIcon} ${styles[item.type]}`}>
                  <Icon size={18} />
                </div>
                <div className={styles.achieveInfo}>
                  <div className={styles.achieveTitle}>{item.title}</div>
                  <div className={styles.achieveOrg}>{item.org}</div>
                </div>
                <div className={styles.achieveYear}>{item.year}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
