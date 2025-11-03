// components/TraitCards.tsx
'use client';

import RelicCore from './RelicCore';
import { useTrait } from './context/TraitContext';

interface TraitCard {
  title: string;
  description: string;
  href: string;
  trait: 'Signalborn' | 'Firekeeper' | 'Chainbreaker';
}

const traitCards: TraitCard[] = [
  {
    title: 'PulseGrid MVP',
    description: 'A real-time trait fusion grid with staking, governance, and PvP mechanics.',
    href: '/projects/pulsegrid',
    trait: 'Signalborn',
  },
  {
    title: 'ArcanaForge',
    description: 'A card-based universe builder with lore encoding and founder rituals.',
    href: '/projects/arcanaforge',
    trait: 'Firekeeper',
  },
  {
    title: 'Squid Memory',
    description: 'A distraction-based memory game with time variance and trait overlays.',
    href: '/projects/squid-memory',
    trait: 'Chainbreaker',
  },
];

export default function TraitCards() {
  const { trait } = useTrait();

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-8 text-center">
        Trait-Aligned Relics ({trait})
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {traitCards
          .filter((card) => card.trait === trait)
          .map((card) => (
            <RelicCore key={card.title} {...card} />
          ))}
      </div>
    </section>
  );
}
