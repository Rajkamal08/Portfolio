import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowDown, Eye, Download, Send, User, Briefcase, Award, Layers, ExternalLink, FileText } from 'lucide-react';
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
                        <p className={styles.profileTitle}>B.Tech Computer Science • IEEE Published</p>

                        {/* Tech Stack Card */}
                        <div className={styles.profileCard}>
                          <div className={styles.profileCardHeader}>
                            <Layers size={13} className={styles.cardHeaderIconAccent} />
                            <span className={styles.cardHeaderTitle}>Core Stack</span>
                          </div>
                          <div className={styles.profileTechGrid}>
                            <span className={styles.techTag}>React Native</span>
                            <span className={styles.techTag}>React.js</span>
                            <span className={styles.techTag}>MERN Stack</span>
                            <span className={styles.techTag}>JavaScript</span>
                            <span className={styles.techTag}>AI</span>
                            <span className={styles.techTag}>Node.js</span>
                          </div>
                        </div>

                        {/* Highlights Card */}
                        <div className={styles.profileCard}>
                          <div className={styles.profileCardHeader}>
                            <Award size={13} className={styles.cardHeaderIconGreen} />
                            <span className={styles.cardHeaderTitle}>Career Highlights</span>
                          </div>
                          <p className={styles.cardText}>
                            2 Industry Internships • IEEE-supported PPG Research • 5+ Production Projects Shipped.
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {/* TAB 2: EXPERIENCE */}
                    {activeTab === 'experience' && (
                      <motion.div
                        key="experience"
                        className={styles.tabContent}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.22 }}
                      >
                        <div className={styles.phoneAppName}>Work Experience</div>
                        <div className={styles.phoneAppTag}>Industry Internships & Research</div>

                        {/* Experience 1: AMSN */}
                        <div className={styles.phoneCard}>
                          <div className={styles.expCompany}>AMSN Syntax IT Solution</div>
                          <div className={styles.expRole}>Mobile & Web Dev Intern • 2026</div>
                          <div className={styles.expPills}>
                            <span className={styles.expPill}>React Native</span>
                            <span className={styles.expPill}>React.js</span>
                            <span className={styles.expPill}>REST APIs</span>
                          </div>
                          <p className={styles.cardText}>
                            Engineered responsive mobile & web interfaces, resolved critical UI bugs, and improved cross-platform performance.
                          </p>
                        </div>

                        {/* Experience 2: IIIT */}
                        <div className={styles.phoneCard}>
                          <div className={styles.expCompany}>IIIT Naya Raipur</div>
                          <div className={styles.expRole}>ML & DL Trainee • 2025</div>
                          <div className={styles.expPills}>
                            <span className={styles.expPill}>Python</span>
                            <span className={styles.expPill}>FastAPI</span>
                            <span className={styles.expPill}>Kotlin</span>
                            <span className={styles.expPill}>DSP</span>
                          </div>
                          <p className={styles.cardText}>
                            Built cardiovascular PPG optical monitoring system with 95% accuracy; co-authored research paper on TechRxiv.
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {/* TAB 3: CONNECT */}
                    {activeTab === 'connect' && (
                      <motion.div
                        key="connect"
                        className={`${styles.tabContent} ${styles.tabContentProfile}`}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.22 }}
                      >
                        <div className={styles.phoneAppName}>Get In Touch</div>
                        <div className={styles.phoneAppTag}>Let's Build Something Great</div>

                        <div className={styles.statusBadge} style={{ marginBottom: '12px' }}>
                          <span className={styles.onlineDot} />
                          <span>Open for Full-Time Roles</span>
                        </div>

                        <div className={styles.connectActions}>
                          <a
                            href={personalInfo.social.email}
                            className={styles.connectBtn}
                            aria-label="Send Email"
                          >
                            <div className={styles.connectBtnLeft}>
                              <Mail size={14} color="#818CF8" />
                              <span>cheerychuckle07@gmail.com</span>
                            </div>
                            <ExternalLink size={11} color="var(--phone-text-muted)" />
                          </a>

                          <a
                            href={personalInfo.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.connectBtn}
                            aria-label="LinkedIn"
                          >
                            <div className={styles.connectBtnLeft}>
                              <LinkedinIcon />
                              <span>LinkedIn Profile</span>
                            </div>
                            <ExternalLink size={11} color="var(--phone-text-muted)" />
                          </a>

                          <a
                            href={personalInfo.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.connectBtn}
                            aria-label="GitHub"
                          >
                            <div className={styles.connectBtnLeft}>
                              <GithubIcon />
                              <span>GitHub Profile</span>
                            </div>
                            <ExternalLink size={11} color="var(--phone-text-muted)" />
                          </a>

                          <a
                            href={personalInfo.resumeFile}
                            target="_blank"
                            download
                            className={styles.connectBtn}
                            aria-label="Download Resume"
                          >
                            <div className={styles.connectBtnLeft}>
                              <FileText size={14} color="#4ADE80" />
                              <span>Download Resume (PDF)</span>
                            </div>
                            <Download size={11} color="var(--phone-text-muted)" />
                          </a>
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
                    <User size={15} />
                    <span>Profile</span>
                  </button>

                  <button
                    type="button"
                    className={`${styles.navTab} ${activeTab === 'experience' ? styles.navTabActiveGreen : ''}`}
                    onClick={() => setActiveTab('experience')}
                    aria-label="Work Experience"
                  >
                    <Briefcase size={15} />
                    <span>Experience</span>
                  </button>

                  <button
                    type="button"
                    className={`${styles.navTab} ${activeTab === 'connect' ? styles.navTabActiveRed : ''}`}
                    onClick={() => setActiveTab('connect')}
                    aria-label="Connect With Raj"
                  >
                    <Send size={15} />
                    <span>Connect</span>
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

