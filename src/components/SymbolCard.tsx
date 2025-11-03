'use client';

import { motion } from 'framer-motion';
import { GiAlienSkull, GiFire, GiChainLightning } from 'react-icons/gi';

type SymbolCardProps = {
  title: string;
  trait: 'Signalborn' | 'Firekeeper' | 'Chainbreaker';
  mode?: 'glyph' | 'portal';
};

const traitStyles = {
  Signalborn: {
    border: 'border-blue-500',
    shadow: 'shadow-blue-500/30',
    glow: 'from-blue-600/10',
    icon: <GiAlienSkull className="text-6xl text-blue-400 mb-4 animate-pulse z-10" />,
  },
  Firekeeper: {
    border: 'border-orange-500',
    shadow: 'shadow-orange-500/30',
    glow: 'from-orange-600/10',
    icon: <GiFire className="text-6xl text-orange-400 mb-4 animate-pulse z-10" />,
  },
  Chainbreaker: {
    border: 'border-purple-500',
    shadow: 'shadow-purple-500/30',
    glow: 'from-purple-600/10',
    icon: <GiChainLightning className="text-6xl text-purple-400 mb-4 animate-pulse z-10" />,
  },
};

export default function SymbolCard({ title, trait, mode = 'glyph' }: SymbolCardProps) {
  const style = traitStyles[trait];
  const isPortal = mode === 'portal';

  return (
    <motion.div
      animate={{
        opacity: isPortal ? [0.7, 1, 0.7] : [0.6, 1, 0.6],
        scale: isPortal ? [0.95, 1.1, 0.95] : [0.95, 1, 0.95],
        rotate: isPortal ? [0, 1.5, -1.5, 0] : 0,
      }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className={`relative bg-zinc-950 rounded-lg p-6 min-h-[350px] flex flex-col justify-center items-center border ${style.border} ${style.shadow}`}
    >
      {/* Trait Glow */}
      <motion.div
        animate={{
          opacity: isPortal ? [0.3, 0.6, 0.3] : [0.2, 0.4, 0.2],
          scale: isPortal ? [1, 1.15, 1] : [1, 1.05, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className={`absolute inset-0 pointer-events-none bg-gradient-radial ${style.glow} to-transparent rounded-full blur-2xl`}
      />

      {/* Trait Icon */}
      {style.icon}

      {/* Title */}
      <h3 className="text-lg font-semibold text-white z-10">{title}</h3>

      {/* Mode Label */}
      {isPortal ? (
        <div className="mt-auto text-sm text-orange-400 italic z-10 animate-pulse">
          Multiverse Gate Portal
        </div>
      ) : (
        <p className="text-xs text-zinc-500 italic z-10 mt-2">Symbol Relic</p>
      )}
    </motion.div>
  );
}
