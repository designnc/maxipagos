'use client';

import { useEffect } from 'react';

const ScrollRevealInitializer = () => {
  useEffect(() => {
    const initScrollReveal = async () => {
      const ScrollReveal = (await import('scrollreveal')).default;
      const sr = ScrollReveal({
        distance: '60px',
        duration: 2800,
        reset: false,
      });

      sr.reveal(`.animate_top`, {
        origin: 'top',
        interval: 100,
      });

      sr.reveal(`.animate_bottom`, {
        origin: 'bottom',
        interval: 100,
      });

      sr.reveal(`.animate_left`, {
        origin: 'left',
        interval: 100,
      });

      sr.reveal(`.animate_right`, {
        origin: 'right',
        interval: 100,
      });
    };

    initScrollReveal();
  }, []);

  return null;
};

export default ScrollRevealInitializer;