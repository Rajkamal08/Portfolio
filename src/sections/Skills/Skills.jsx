import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { skills } from '../../constants/data';
import { fadeInUp, staggerContainer, viewportOnce } from '../../animations/variants';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section className={`section ${styles.skills}`} id="skills">
      <div className="container">
        <SectionHeader
          label="Skills"
          title="What I work with"
          description="Technologies I use to build production-quality software."
        />

        <motion.div
          className={styles.skillsGrid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {skills.map((category) => {
            const Icon = LucideIcons[category.icon] || LucideIcons.Code;
            return (
              <motion.div
                key={category.category}
                className={styles.category}
                variants={fadeInUp}
              >
                <div className={styles.categoryHeader}>
                  <div className={styles.categoryIcon}>
                    <Icon size={18} />
                  </div>
                  <h3 className={styles.categoryTitle}>{category.category}</h3>
                </div>
                <div className={styles.chips}>
                  {category.items.map((skill) => (
                    <span key={skill} className={styles.chip}>{skill}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
