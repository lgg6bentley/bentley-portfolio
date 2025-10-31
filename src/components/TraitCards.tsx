// src/components/TraitCard.tsx
import { motion } from 'framer-motion';

type TraitCardsProps = {
  visible: boolean;
};

export default function TraitCards({ visible }: TraitCardsProps) {
  const traits = ['Grit', 'Myth', 'Signal', 'Pulse'];

  return (
    <div className="trait-orbit">
      {traits.map((trait, index) => (
        <motion.div
          key={trait}
          className="trait-card"
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: index * 0.2 }}
        >
          {trait}
        </motion.div>
      ))}
    </div>
  );
}
