'use client';

import { useScrollProgress } from './app/hooks/useScrollProgress';
import { useTrait } from './components/context/TraitContext';
import RelicCore from './components/RelicCore';
import SymbolCard from './components/SymbolCard';

export default function HeroSection() {
  const scrollPhase = useScrollProgress();
  const { trait } = useTrait();

  const featuredProjects = [
    {
  title: 'Mind Relic',
  description: 'A distraction-based memory game which includes Tic Tac Toe.',
  href: 'https://mindrelic-orcin.vercel.app',
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
    {
      title: 'UFC AI Bet Predictor',
      description: 'An AI-powered fight outcome predictor trained on UFC stats, styles, and momentum signals.',
      href: '/projects/ufc-ai-bet-predictor',
      trait: 'Chainbreaker',
    },
  ];

  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center items-center text-white px-4 py-20 overflow-hidden">
      {/* Trait Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className={`w-[500px] h-[500px] mx-auto mt-20 bg-gradient-radial from-${trait.toLowerCase()}-500/10 to-transparent rounded-full blur-3xl`}
        />
      </div>

      {/* Hero Text */}
      <div className="z-10 text-center max-w-2xl">
        <h1 className="text-3xl font-semibold mb-2 tracking-tight">
          Bentley Bond / Software Developer
        </h1>
        <p className="text-sm text-zinc-400 tracking-wide">
          Full-stack systems and game design.
        </p>
      </div>

      {/* Featured Grid */}
      <div className="mt-20 w-full max-w-6xl z-10">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
  {featuredProjects.map((project) => (
    <RelicCore key={project.title} {...project} />
  ))}

  {/* Symbol Relics */}
  <SymbolCard title="Signal Glyph" trait="Signalborn" />
  <SymbolCard title="Multiverse Gate" trait="Firekeeper" mode="portal" />
</div>
      </div>
    </section>
  );
}
