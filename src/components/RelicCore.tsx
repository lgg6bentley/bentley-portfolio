// src/components/RelicCore.tsx
import { motion } from 'framer-motion';

type RelicCoreProps = {
  phase: number;
};

export default function RelicCore({ phase }: RelicCoreProps) {
  const glowLevels = ['opacity-40', 'opacity-60', 'opacity-80', 'opacity-100'];
  const glow = glowLevels[phase] || 'opacity-40';

  return (
    <motion.div
      className={`relic-core ${glow}`}
      animate={{ scale: 1 + phase * 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="pulse-ring" />
      <div className="core-glow" />
    </motion.div>
  );
}
