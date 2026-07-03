import { useEffect, lazy, Suspense, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar/Navbar';
import CursorGlow from './components/CursorGlow/CursorGlow';
import Footer from './components/Footer/Footer';
import Preloader from './components/Preloader/Preloader';
import CommandMenu from './components/CommandMenu/CommandMenu';
import Hero from './sections/Hero/Hero';

/* Lazy load below-fold sections for performance */
const About = lazy(() => import('./sections/About/About'));
const Experience = lazy(() => import('./sections/Experience/Experience'));
const Skills = lazy(() => import('./sections/Skills/Skills'));
const Projects = lazy(() => import('./sections/Projects/Projects'));
const Publication = lazy(() => import('./sections/Publication/Publication'));
const Achievements = lazy(() => import('./sections/Achievements/Achievements'));
const GitHubStats = lazy(() => import('./sections/GitHubStats/GitHubStats'));
const Contact = lazy(() => import('./sections/Contact/Contact'));

function SectionLoader() {
  return (
    <div style={{
      minHeight: '200px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        width: '24px',
        height: '24px',
        border: '2px solid var(--border)',
        borderTopColor: 'var(--accent)',
        borderRadius: '50%',
        animation: 'rotate-slow 0.8s linear infinite',
      }} />
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) return; // Don't init smooth scroll until preloader is done

    /* Initialize Lenis smooth scrolling */
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [loading]);

  return (
    <>
      <Preloader onComplete={() => setLoading(false)} />
      
      {!loading && (
        <>
          <CommandMenu />
          <CursorGlow />
      <Navbar />

      <main>
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Publication />
          <Achievements />
          <GitHubStats />
          <Contact />
        </Suspense>
      </main>

      <Footer />
        </>
      )}
    </>
  );
}
