import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '../../components/Icons';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import MagneticButton from '../../components/MagneticButton/MagneticButton';
import { projects } from '../../constants/data';
import { fadeInUp, staggerContainer, viewportOnce } from '../../animations/variants';
import styles from './Projects.module.css';

function ProjectCard({ project, isFeatured }) {
  return (
    <Tilt
      tiltMaxAngleX={isFeatured ? 4 : 8}
      tiltMaxAngleY={isFeatured ? 4 : 8}
      perspective={1000}
      scale={1.02}
      transitionSpeed={1000}
      glareEnable={true}
      glareMaxOpacity={0.05}
      glarePosition="all"
      className={isFeatured ? styles.tiltFeatured : styles.tiltSmall}
    >
      <motion.div
        className={`${styles.projectCard} ${isFeatured ? styles.featured : styles.smallCard}`}
        variants={fadeInUp}
      >
        {/* Visual / Tagline Area */}
        <div className={styles.projectVisual}>
          {project.image ? (
            <img src={project.image} alt={project.title} className={styles.projectImage} loading="lazy" />
          ) : (
            <>
              <div
                className={styles.projectGradient}
                style={{ background: `radial-gradient(circle at center, ${project.color}, transparent 70%)` }}
              />
              <div className={styles.taglineContainer}>
                {project.tagline.map((word, i) => (
                  <motion.span
                    key={i}
                    className={styles.taglineWord}
                    style={i === 0 ? { color: project.color } : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            </>
          )}
        </div>

      {/* Content */}
      <div className={styles.projectContent}>
        <div className={styles.projectLabel}>{project.year}</div>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <div className={styles.projectSubtitle}>{project.subtitle}</div>
        <p className={styles.projectDescription}>{project.description}</p>

        {isFeatured && (
          <div className={styles.projectMeta}>
            <div className={styles.metaLabel}>Key Metrics</div>
            <div className={styles.metricsList}>
              {project.metrics.map((metric) => (
                <span key={metric} className={styles.metric}>{metric}</span>
              ))}
            </div>
          </div>
        )}

        <div className={styles.projectTech}>
          {project.tech.map((tech) => (
            <span key={tech} className={styles.techTag}>{tech}</span>
          ))}
        </div>

        <div className={styles.projectActions}>
          <MagneticButton variant="secondary" size="sm" href={project.github} target="_blank">
            <GithubIcon size={14} /> GitHub
          </MagneticButton>
          {project.demo && (
            <MagneticButton variant="primary" size="sm" href={project.demo} target="_blank">
              <ExternalLink size={14} /> Live Demo
            </MagneticButton>
          )}
        </div>
      </div>
    </motion.div>
    </Tilt>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section className={`section ${styles.projects}`} id="projects">
      <div className="container">
        <SectionHeader
          label="Projects"
          title="What I've built"
          description="Production-level applications solving real problems."
        />

        <motion.div
          className={styles.projectsList}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} isFeatured />
          ))}
        </motion.div>

        {others.length > 0 && (
          <motion.div
            className={styles.otherProjects}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {others.map((project) => (
              <ProjectCard key={project.id} project={project} isFeatured={false} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
