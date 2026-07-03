import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Mail, Download, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../../components/Icons';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import MagneticButton from '../../components/MagneticButton/MagneticButton';
import { personalInfo } from '../../constants/data';
import { fadeInLeft, fadeInRight, viewportOnce } from '../../animations/variants';
import styles from './Contact.module.css';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); /* 'success' | 'error' | 'loading' | null */

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await emailjs.send(
        'service_qeckoxs',
        'template_p02ilho',
        {
          name: formState.name,
          email: formState.email,
          message: formState.message,
        },
        '7wIK5VMJ85X1jkDrr'
      );
      
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(null), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <section className={`section ${styles.contact}`} id="contact">
      <div className="container">
        <SectionHeader label="Contact" title="Get in touch" />

        <div className={styles.contactGrid}>
          {/* Left — Info */}
          <motion.div
            className={styles.contactLeft}
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <h3>
              Let's build something <span>amazing.</span>
            </h3>
            <p className={styles.contactDesc}>
              Whether you have a project in mind, want to collaborate, or just want to say hi — my inbox is always open.
            </p>

            <div className={styles.contactLinks}>
              <a href={personalInfo.social.email} className={styles.contactLink}>
                <Mail /> {personalInfo.email}
              </a>
              <a href={personalInfo.social.linkedin} className={styles.contactLink} target="_blank" rel="noopener noreferrer">
                <LinkedinIcon size={18} /> LinkedIn Profile
              </a>
              <a href={personalInfo.social.github} className={styles.contactLink} target="_blank" rel="noopener noreferrer">
                <GithubIcon size={18} /> GitHub Profile
              </a>
              <a href={personalInfo.resumeFile} className={styles.contactLink} download>
                <Download /> Download Resume
              </a>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.form
            className={styles.contactForm}
            onSubmit={handleSubmit}
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                className={styles.formInput}
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                className={styles.formInput}
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                className={styles.formTextarea}
                name="message"
                value={formState.message}
                onChange={handleChange}
                placeholder="What would you like to discuss?"
                required
              />
            </div>

            {status === 'success' && (
              <div className={styles.successMsg}>
                <CheckCircle size={16} /> Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {status === 'error' && (
              <div className={styles.errorMsg}>
                <AlertCircle size={16} /> Something went wrong. Please try again or email me directly.
              </div>
            )}

            <div className={styles.submitBtn}>
              <MagneticButton variant="primary" size="lg" onClick={handleSubmit}>
                <Send size={16} /> {status === 'loading' ? 'Sending...' : 'Send Message'}
              </MagneticButton>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
