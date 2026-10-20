import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowDown, Eye, Download, Send, User, Sprout, Activity, Heart, Sparkles, MapPin, CheckCircle2, Smartphone, Award, Layers } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../../components/Icons';
import MagneticButton from '../../components/MagneticButton/MagneticButton';
import { personalInfo } from '../../constants/data';
import { heroHeadline, heroWord, fadeInUp, fadeIn, staggerContainer } from '../../animations/variants';
import { useMouseParallax } from '../../hooks/useMouseParallax';
import styles from './Hero.module.css';

export default function Hero() {
  const parallax = useMouseParallax(0.02);
  const [activeTab, setActiveTab] = useState('profile');

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

        {/* Right — Interactive Phone Showcase */}
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
            <div className={`${styles.floatingOrb} ${styles.orb1}`} />
            <div className={`${styles.floatingOrb} ${styles.orb2}`} />
            <div className={`${styles.floatingOrb} ${styles.orb3}`} />

            {/* Subtle floating badge (Concept 3 touch - top only, non-competing) */}
            <div className={`${styles.floatingBadge} ${styles.badgeTopLeft}`}>
              <Sparkles size={12} className={styles.badgeIcon} />
              <span>Mobile & Full Stack</span>
            </div>

            <div className={styles.phone}>
              <div className={styles.phoneNotch} />
              
              {/* Phone Screen Area */}
              <div className={styles.phoneScreen}>
                {/* Status Bar */}
                <div className={styles.phoneStatusBar}>
                  <span className={styles.statusTime}>9:41</span>
                  <div className={styles.statusIcons}>
                    <span className={styles.statusDot} />
                    <span className={styles.statusDot} />
                    <span className={styles.statusBattery} />
                  </div>
                </div>

                {/* Tab Views with Animation */}
                <div className={styles.screenScrollArea}>
                  <AnimatePresence mode="wait">
                    {/* TAB 1: DEVELOPER PROFILE (Default Screen) */}
                    {activeTab === 'profile' && (
                      <motion.div
                        key="profile"
                        className={`${styles.tabContent} ${styles.tabContentProfile}`}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.22 }}
                      >
                        {/* Large Avatar Circle (Unzoomed original photo) */}
                        <div className={styles.avatarContainer}>
                          <div className={styles.avatarGlowRing} />
                          <img
                            src="/projects/RAJ_PHOTO.png"
                            alt="Raj Kamal Mehta"
                            className={styles.avatarImage}
                            loading="eager"
                          />
                        </div>

                        {/* Open to Opportunities Pill */}
                        <div className={styles.statusBadge}>
                          <span className={styles.onlineDot} />
                          <span>Open to Opportunities</span>
                        </div>

                        {/* Developer Identity */}
                        <h3 className={styles.profileName}>Raj Kamal Mehta</h3>
                        <p className={styles.profileTitle}>Mobile App Developer & Full Stack Developer</p>

                        {/* Tech Stack Card */}
                        <div className={styles.profileCard}>
                          <div className={styles.profileCardHeader}>
                            <Layers size={13} className={styles.cardHeaderIconAccent} />
                            <span className={styles.cardHeaderTitle}>Tech Stack</span>
                          </div>
                          <div className={styles.profileTechGrid}>
                            <span className={styles.techTag}>React Native</span>
                            <span className={styles.techTag}>React.js</span>
                            <span className={styles.techTag}>MERN Stack</span>
                            <span className={styles.techTag}>Node.js</span>
                            <span className={styles.techTag}>FastAPI</span>
                            <span className={styles.techTag}>TypeScript</span>
                          </div>
                        </div>

                        {/* Research & Contributions Card */}
                        <div className={styles.profileCard}>
                          <div className={styles.profileCardHeader}>
                            <Award size={13} className={styles.cardHeaderIconGreen} />
                            <span className={styles.cardHeaderTitle}>Research & Contributions</span>
                          </div>
                          <p className={styles.cardText}>
                            IEEE-published researcher with production mobile apps and active open-source GitHub contributions.
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {/* TAB 2: MITTICARD */}
                    {activeTab === 'mitticard' && (
                      <motion.div
                        key="mitticard"
                        className={styles.tabContent}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.22 }}
                      >
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
                              <div
                                key={item.label}
                                style={{
                                  flex: 1,
                                  textAlign: 'center',
                                  padding: '8px 4px',
                                  background: 'var(--overlay-subtle)',
                                  borderRadius: '8px',
                                }}
                              >
                                <div style={{ fontSize: '9px', color: item.color, marginBottom: '2px', fontWeight: '600' }}>
                                  {item.label}
                                </div>
                                <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--primary)' }}>
                                  {item.value}
                                </div>
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
                      </motion.div>
                    )}

                    {/* TAB 3: PPG MONITOR */}
                    {activeTab === 'ppg' && (
                      <motion.div
                        key="ppg"
                        className={styles.tabContent}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.22 }}
                      >
                        <div className={styles.phoneAppName}>PPG Monitor</div>
                        <div className={styles.phoneAppTag}>Cardiovascular Waveform & DSP</div>

                        <div className={styles.phoneCard}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                            <div className={styles.phoneCardTitle} style={{ margin: 0 }}>Optical Pulse Wave</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#F43F5E', fontSize: '11px', fontWeight: '600' }}>
                              <Heart size={12} className={styles.heartPulse} fill="#F43F5E" />
                              <span>72 BPM</span>
                            </div>
                          </div>

                          {/* Live Waveform SVG Canvas */}
                          <div className={styles.waveCanvas}>
                            <svg viewBox="0 0 220 50" className={styles.waveSvg}>
                              <path
                                d="M 0 25 L 20 25 L 28 25 L 34 8 L 40 42 L 46 25 L 56 25 L 64 25 L 70 8 L 76 42 L 82 25 L 94 25 L 102 25 L 108 8 L 114 42 L 120 25 L 132 25 L 140 25 L 146 8 L 152 42 L 158 25 L 170 25 L 178 25 L 184 8 L 190 42 L 196 25 L 220 25"
                                fill="none"
                                stroke="#F43F5E"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className={styles.wavePath}
                              />
                            </svg>
                          </div>
                        </div>

                        <div className={styles.phoneCard}>
                          <div className={styles.phoneCardTitle}>DSP Pipeline Status</div>
                          <div className={styles.dspRow}>
                            <span className={styles.dspLabel}>Filter</span>
                            <span className={styles.dspVal}>4th-Order Butterworth</span>
                          </div>
                          <div className={styles.dspRow}>
                            <span className={styles.dspLabel}>Bridge</span>
                            <span className={styles.dspVal}>Kotlin Native Driver</span>
                          </div>
                          <div className={styles.dspRow}>
                            <span className={styles.dspLabel}>Quality</span>
                            <span className={styles.dspBadge}>Grade A (95% Conf.)</span>
                          </div>
                        </div>

                        <div className={styles.phoneChips}>
                          <span className={styles.phoneChipRed}>Real-time DSP</span>
                          <span className={styles.phoneChipRed}>Optical PPG</span>
                          <span className={styles.phoneChipRed}>FastAPI</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Pinned Bottom Navigation Bar */}
                <div className={styles.phoneNavBar}>
                  <button
                    type="button"
                    className={`${styles.navTab} ${activeTab === 'profile' ? styles.navTabActive : ''}`}
                    onClick={() => setActiveTab('profile')}
                    aria-label="Developer Profile"
                  >
                    <User size={16} />
                    <span>Profile</span>
                  </button>

                  <button
                    type="button"
                    className={`${styles.navTab} ${activeTab === 'mitticard' ? styles.navTabActiveGreen : ''}`}
                    onClick={() => setActiveTab('mitticard')}
                    aria-label="MittiCard App"
                  >
                    <Sprout size={16} />
                    <span>MittiCard</span>
                  </button>

                  <button
                    type="button"
                    className={`${styles.navTab} ${activeTab === 'ppg' ? styles.navTabActiveRed : ''}`}
                    onClick={() => setActiveTab('ppg')}
                    aria-label="PPG Monitor App"
                  >
                    <Activity size={16} />
                    <span>PPG Monitor</span>
                  </button>
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

