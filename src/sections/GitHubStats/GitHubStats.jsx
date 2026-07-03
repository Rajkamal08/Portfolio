import { motion } from 'framer-motion';
import { GitBranch, Star, BookOpen } from 'lucide-react';
import { GithubIcon } from '../../components/Icons';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import MagneticButton from '../../components/MagneticButton/MagneticButton';
import { personalInfo } from '../../constants/data';
import { fadeInUp, staggerContainer, viewportOnce } from '../../animations/variants';
import styles from './GitHubStats.module.css';

export default function GitHubStats() {
  const username = 'Rajkamal08';

  return (
    <section className={`section ${styles.github}`} id="github">
      <div className="container">
        <SectionHeader
          label="Open Source"
          title="GitHub Activity"
          description="Shipping code in the open."
        />

        <motion.div
          className={styles.githubContent}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {/* Contribution Graph */}
          <motion.div className={styles.graphCard} variants={fadeInUp}>
            <img
              src={`https://ghchart.rshah.org/4F46E5/${username}`}
              alt="GitHub contribution graph"
              loading="lazy"
              width="722"
              height="112"
            />
          </motion.div>

          {/* Stats */}
          <motion.div className={styles.githubStats} variants={staggerContainer}>
            {[
              { icon: BookOpen, num: '15+', desc: 'Repositories', },
              { icon: GitBranch, num: '200+', desc: 'Contributions', },
              { icon: Star, num: '5+', desc: 'Projects Shipped', },
            ].map((stat, i) => (
              <motion.div key={i} className={styles.githubStat} variants={fadeInUp}>
                <div className={styles.statIcon}>
                  <stat.icon size={18} />
                </div>
                <div className={styles.statNum}>{stat.num}</div>
                <div className={styles.statDesc}>{stat.desc}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className={styles.viewProfile} variants={fadeInUp}>
            <MagneticButton variant="secondary" href={personalInfo.social.github} target="_blank">
              <GithubIcon size={16} /> View GitHub Profile
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
