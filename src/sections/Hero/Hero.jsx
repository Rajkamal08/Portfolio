import { motion } from 'framer-motion';
import { Mail, ArrowDown, Eye, Download, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../../components/Icons';
import MagneticButton from '../../components/MagneticButton/MagneticButton';
import { personalInfo } from '../../constants/data';
import { heroHeadline, heroWord, fadeInUp, fadeIn, staggerContainer } from '../../animations/variants';
import { useMouseParallax } from '../../hooks/useMouseParallax';
import styles from './Hero.module.css';

export default function Hero() {
  const parallax = useMouseParallax(0.02);

  const headlineWords = personalInfo.headline.split(' ');

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroInner}>
        {/* Left — Content */}
        <motion.div
          className={styles.heroContent}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.heroLabel} variants={fadeInUp}>
            <span className={styles.heroDot} />
            {personalInfo.subheadline}
          </motion.div>

          <motion.h1
            className={styles.heroHeadline}
            variants={heroHeadline}
            initial="hidden"
            animate="visible"
          >
            {headlineWords.map((word, i) => (
              <motion.span key={i} className={styles.heroWord} variants={heroWord}>
                {word === 'React' || word === 'Native.' ? (
                  <span className={styles.heroAccent}>{word}</span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p className={styles.heroDescription} variants={fadeInUp}>
            Full Stack Engineer building production-ready mobile apps and AI-powered software.
            IEEE-published researcher with hands-on industry experience.
          </motion.p>

          <motion.div className={styles.heroCtas} variants={fadeInUp}>
            <MagneticButton
              variant="primary"
              size="lg"
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Eye /> View Projects
            </MagneticButton>
            <MagneticButton
              variant="secondary"
              size="lg"
              href={personalInfo.resumeFile}
              target="_blank"
              download
            >
              <Download /> Resume
            </MagneticButton>
            <MagneticButton
              variant="ghost"
              size="lg"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Send /> Contact
            </MagneticButton>
          </motion.div>

          <motion.div className={styles.heroSocial} variants={fadeInUp}>
            <a href={personalInfo.social.github} className={styles.socialLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GithubIcon />
            </a>
            <a href={personalInfo.social.linkedin} className={styles.socialLink} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
            <a href={personalInfo.social.email} className={styles.socialLink} aria-label="Email">
              <Mail />
            </a>
          </motion.div>
        </motion.div>

        {/* Right — Phone Mockup */}
        <motion.div
          className={styles.heroVisual}
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.div
            className={styles.phoneWrapper}
            style={{ x: parallax.x * 2, y: parallax.y * 2 }}
            transition={{ type: 'spring', stiffness: 50, damping: 30 }}
          >
            <div className={styles.phoneGlow} />
            <div className={styles.floatingOrb + ' ' + styles.orb1} />
            <div className={styles.floatingOrb + ' ' + styles.orb2} />
            <div className={styles.floatingOrb + ' ' + styles.orb3} />

            <div className={styles.phone}>
              <div className={styles.phoneNotch} />
              <div className={styles.phoneScreen}>
                <div className={styles.phoneAppName}>MittiCard</div>
                <div className={styles.phoneAppTag}>AI Soil Health Assistant</div>

                <div className={styles.phoneCard}>
                  <div className={styles.phoneCardTitle}>Soil Health Score</div>
                  <div className={styles.phoneScore}>
                    <span className={styles.phoneScoreValue}>78</span>
                    <span className={styles.phoneScoreLabel}>/ 100</span>
                  </div>
                  <div className={styles.phoneBar}>
                    <div
                      className={styles.phoneBarFill}
                      style={{ width: '78%', background: 'linear-gradient(90deg, #22C55E, #4ADE80)' }}
                    />
                  </div>
                </div>

                <div className={styles.phoneCard}>
                  <div className={styles.phoneCardTitle}>NPK Analysis</div>
                  <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                    {[
                      { label: 'N', value: '240', color: '#4F46E5' },
                      { label: 'P', value: '18', color: '#F59E0B' },
                      { label: 'K', value: '312', color: '#22C55E' },
                    ].map((item) => (
                      <div key={item.label} style={{
                        flex: 1, textAlign: 'center', padding: '8px 4px',
                        background: 'var(--overlay-subtle)', borderRadius: '8px',
                      }}>
                        <div style={{ fontSize: '9px', color: item.color, marginBottom: '2px' }}>{item.label}</div>
                        <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--primary)' }}>{item.value}</div>
                        <div style={{ fontSize: '8px', color: 'var(--muted)' }}>kg/ha</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.phoneChips}>
                  <span className={styles.phoneChip}>Wheat</span>
                  <span className={styles.phoneChip}>Rice</span>
                  <span className={styles.phoneChip}>Hindi</span>
                  <span className={styles.phoneChip}>7 Crops</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span>Scroll</span>
        <div className={styles.scrollLine} />
        <ArrowDown size={14} />
      </motion.div>
    </section>
  );
}
