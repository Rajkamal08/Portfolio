import { motion } from 'framer-motion';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { experience } from '../../constants/data';
import { fadeInUp, lineGrow, staggerContainerSlow, viewportOnce } from '../../animations/variants';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section className={`section ${styles.experience}`} id="experience">
      <div className="container">
        <SectionHeader
          label="Experience"
          title="Where I've worked"
          description="Building real products at real companies."
        />

        <motion.div
          className={styles.timeline}
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div
            className={styles.timelineLine}
            variants={lineGrow}
          />

          {experience.map((exp) => (
            <motion.div
              key={exp.id}
              className={styles.timelineItem}
              variants={fadeInUp}
            >
              <div className={styles.timelineDot} />
              <div className={styles.timelineCard}>
                <div className={styles.cardHeader}>
                  <div>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <div className={styles.company}>{exp.company}</div>
                  </div>
                  <div className={styles.meta}>
                    <div className={styles.period}>{exp.period}</div>
                    <div className={styles.location}>{exp.location}</div>
                  </div>
                </div>

                <div className={styles.bulletList}>
                  {exp.description.map((bullet, i) => (
                    <div key={i} className={styles.bullet}>{bullet}</div>
                  ))}
                </div>

                <div className={styles.techChips}>
                  {exp.tech.map((tech) => (
                    <span key={tech} className={styles.techChip}>{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
