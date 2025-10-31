// src/components/AstroRelic.tsx
import { motion } from 'framer-motion';
import RelicCore from './RelicCore';
import TraitCards from './TraitCards';

type AstroRelicProps = {
  phase: number;
};

export default function AstroRelic({ phase }: AstroRelicProps) {
  const poses = ['idle', 'ignite', 'traitReveal', 'multiverse'];

  const variants = {
    idle: { scale: 1, opacity: 0.8 },
    ignite: { scale: 1.1, opacity: 1 },
    traitReveal: { scale: 1.2, rotate: 10 },
    multiverse: { scale: 1.3, rotate: 0, filter: 'hue-rotate(90deg)' },
  };

  return (
    <motion.div
      className="astro-relic"
      initial="idle"
      animate={poses[phase]}
      variants={variants}
      transition={{ duration: 0.8 }}
    >
      <RelicCore phase={phase} />
      <TraitCards visible={phase >= 2} />
    </motion.div>
  );
}
