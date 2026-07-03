import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { personalInfo, stats, education } from '../../constants/data';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportOnce } from '../../animations/variants';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={`section ${styles.about}`} id="about">
      <div className="container">
        <SectionHeader label="About" title="Who I am" />

        <div className={styles.aboutGrid}>
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <p className={styles.aboutText}>
              {personalInfo.about.split(/(React Native|Full Stack Development|Machine Learning|IEEE-supported research publication)/g).map((part, i) => {
                if (['React Native', 'Full Stack Development', 'Machine Learning', 'IEEE-supported research publication'].includes(part)) {
                  return <span key={i} className={styles.aboutHighlight}>{part}</span>;
                }
                return part;
              })}
            </p>
          </motion.div>

          <motion.div
            className={styles.statsGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} className={styles.statCard} variants={fadeInUp}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </motion.div>
            ))}

            <motion.div className={styles.educationCard} variants={fadeInUp}>
              <div className={styles.eduIcon}>
                <GraduationCap size={20} />
              </div>
              <div className={styles.eduInfo}>
                <div className={styles.eduDegree}>{education.degree}</div>
                <div className={styles.eduInstitution}>{education.institution}</div>
              </div>
              <div className={styles.eduMeta}>
                <div className={styles.eduCgpa}>{education.cgpa}</div>
                <div className={styles.eduPeriod}>{education.period}</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
