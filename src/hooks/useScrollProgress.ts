'use client';

import { useEffect, useState } from 'react';

export function useScrollProgress(): number {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      const progress = scrollY / height;

      if (progress < 0.25) setPhase(0);
      else if (progress < 0.5) setPhase(1);
      else if (progress < 0.75) setPhase(2);
      else setPhase(3);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initialize

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return phase;
}
