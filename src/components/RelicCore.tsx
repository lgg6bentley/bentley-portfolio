'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  GiBrain,
  GiNetworkBars,
  GiCardBurn,
  GiPunch,
} from 'react-icons/gi';

type RelicCoreProps = {
  title: string;
  description: string;
  href: string;
  trait: 'Signalborn' | 'Firekeeper' | 'Chainbreaker';
};

const traitStyles = {
  Signalborn: {
    border: 'border-blue-500',
    shadow: 'shadow-blue-500/30',
    glow: 'from-blue-600/10',
  },
  Firekeeper: {
    border: 'border-orange-500',
    shadow: 'shadow-orange-500/30',
    glow: 'from-orange-600/10',
  },
  Chainbreaker: {
    border: 'border-purple-500',
    shadow: 'shadow-purple-500/30',
    glow: 'from-purple-600/10',
  },
};

// Icon map based on title
const iconMap: Record<string, JSX.Element> = {
  'Mind Relic': <GiBrain className="text-4xl mb-4 text-purple-400 animate-pulse z-10" />,
  'Tic Tac Toe': <GiNetworkBars className="text-4xl mb-4 text-blue-400 animate-pulse z-10" />,
  ArcanaForge: <GiCardBurn className="text-4xl mb-4 text-orange-400 animate-pulse z-10" />,
  'UFC AI Bet Predictor': <GiPunch className="text-4xl mb-4 text-purple-400 animate-pulse z-10" />,
};

export default function RelicCore({ title, description, href, trait }: RelicCoreProps) {
  const style = traitStyles[trait];
  const icon = iconMap[title];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: [0.9, 1, 0.95], scale: [0.98, 1, 0.97] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      }}
      className={`relative bg-zinc-900 rounded-lg p-6 min-h-[350px] flex flex-col justify-between border ${style.border} ${style.shadow} hover:scale-[1.02] transition-transform duration-300`}
    >
      {/* Trait Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.05, 1] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className={`w-96 h-96 mx-auto mt-20 bg-gradient-radial ${style.glow} to-transparent rounded-full blur-2xl`}
        />
      </div>

      {/* Icon */}
      {icon}

      {/* Content */}
      <h3 className="text-xl font-semibold text-white mb-2 z-10">{title}</h3>
      <p className="text-sm text-zinc-300 mb-4 z-10">{description}</p>
      <Link
        href={href}
        className="text-blue-400 hover:underline mt-auto text-sm sm:text-base z-10"
      >
        Enter Project →
      </Link>
    </motion.div>
  );
}
