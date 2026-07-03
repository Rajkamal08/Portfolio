import { useEffect, useRef } from 'react';
import styles from './CursorGlow.module.css';

export default function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    /* Skip on touch devices */
    if (!window.matchMedia('(hover: hover)').matches) return;

    const glow = glowRef.current;
    if (!glow) return;

    let rafId;
    const handleMouseMove = (e) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className={styles.glow} aria-hidden="true">
      <div ref={glowRef} className={styles.glowInner} />
    </div>
  );
}
