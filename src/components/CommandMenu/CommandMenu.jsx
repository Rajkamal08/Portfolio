import { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Briefcase, Code, FileText, Award, BarChart, Mail, Download } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../Icons';
import { personalInfo } from '../../constants/data';
import styles from './CommandMenu.module.css';

export default function CommandMenu() {
  const [open, setOpen] = useState(false);

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const runCommand = (command) => {
    setOpen(false);
    command();
  };

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <Command className={styles.command} loop>
              <Command.Input placeholder="Type a command or search..." autoFocus />
              
              <Command.List>
                <Command.Empty>No results found.</Command.Empty>

                <Command.Group heading="Navigation">
                  <Command.Item onSelect={() => runCommand(() => scrollTo('#hero'))}>
                    <Home /> Home
                  </Command.Item>
                  <Command.Item onSelect={() => runCommand(() => scrollTo('#about'))}>
                    <User /> About
                  </Command.Item>
                  <Command.Item onSelect={() => runCommand(() => scrollTo('#experience'))}>
                    <Briefcase /> Experience
                  </Command.Item>
                  <Command.Item onSelect={() => runCommand(() => scrollTo('#skills'))}>
                    <Code /> Skills
                  </Command.Item>
                  <Command.Item onSelect={() => runCommand(() => scrollTo('#projects'))}>
                    <FileText /> Projects
                  </Command.Item>
                  <Command.Item onSelect={() => runCommand(() => scrollTo('#publication'))}>
                    <FileText /> Research
                  </Command.Item>
                  <Command.Item onSelect={() => runCommand(() => scrollTo('#contact'))}>
                    <Mail /> Contact
                  </Command.Item>
                </Command.Group>

                <Command.Group heading="Social & Links">
                  <Command.Item onSelect={() => runCommand(() => window.open(personalInfo.social.github, '_blank'))}>
                    <GithubIcon /> GitHub Profile
                  </Command.Item>
                  <Command.Item onSelect={() => runCommand(() => window.open(personalInfo.social.linkedin, '_blank'))}>
                    <LinkedinIcon /> LinkedIn Profile
                  </Command.Item>
                  <Command.Item onSelect={() => runCommand(() => {
                    const a = document.createElement('a');
                    a.href = personalInfo.resumeFile;
                    a.download = true;
                    a.click();
                  })}>
                    <Download /> Download Resume
                  </Command.Item>
                </Command.Group>
                
                <Command.Group heading="Actions">
                  <Command.Item onSelect={() => runCommand(() => {
                    navigator.clipboard.writeText(personalInfo.email);
                    // Could add a toast notification here
                  })}>
                    <Mail /> Copy Email Address
                  </Command.Item>
                  <Command.Item onSelect={() => runCommand(() => window.open('https://github.com/Rajkamal08/Portfolio', '_blank'))}>
                    <Code /> View Source Code
                  </Command.Item>
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
