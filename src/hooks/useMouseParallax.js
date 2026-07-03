import { useEffect, useState } from 'react';

export function useMouseParallax(strength = 0.02) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let rafId;
    const handleMouseMove = (e) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        setPosition({
          x: (e.clientX - centerX) * strength,
          y: (e.clientY - centerY) * strength,
        });
      });
    };

    /* Disable on touch devices */
    if (window.matchMedia('(hover: hover)').matches) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [strength]);

  return position;
}
