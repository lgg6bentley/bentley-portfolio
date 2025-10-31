// src/app/hooks/useScrollProgress.ts
import { useEffect, useState } from 'react';

export function useScrollProgress(): number {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Ritual thresholds (adjust as needed)
      if (scrollY < 200) setPhase(0);           // Idle float
      else if (scrollY < 600) setPhase(1);      // Relic ignition
      else if (scrollY < 1000) setPhase(2);     // Trait reveal
      else setPhase(3);                         // Multiverse gate
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return phase;
}
