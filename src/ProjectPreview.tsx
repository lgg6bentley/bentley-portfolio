'use client';

import { useTrait } from '../context/TraitContext'; // adjust path if needed
import RelicCard from './RelicCard'; // or RelicCore if you're using that

const projects = [
  {
    title: 'Squid Memory',
    description: 'A distraction-based memory game with trait overlays and time rituals.',
    href: '/projects/squid-memory',
    trait: 'Chainbreaker',
  },
  {
    title: 'Tic Tac Toe',
    description: 'Classic game reimagined with founder relics and mythic tension.',
    href: '/projects/tic-tac-toe',
    trait: 'Signalborn',
  },
  {
    title: 'ArcanaForge',
    description: 'A card-based universe builder with lore encoding and founder rituals.',
    href: '/projects/arcanaforge',
    trait: 'Firekeeper',
  },
];

export default function ProjectPreview() {
  const { trait, switchTrait } = useTrait();

  return (
    <section className="mt-20 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 text-center">
        Featured Projects
      </h2>

      {/* Trait Toggle Button */}
      <div className="text-center mb-6">
        <button
          onClick={switchTrait}
          className="text-xs text-zinc-400 hover:text-orange-400 transition-colors duration-200"
        >
          Switch Trait Mode ({trait})
        </button>
      </div>

      {/* Trait-Aligned Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects
          .filter((project) => project.trait === trait)
          .map((project) => (
            <RelicCard key={project.title} {...project} />
          ))}
      </div>
    </section>
  );
}
