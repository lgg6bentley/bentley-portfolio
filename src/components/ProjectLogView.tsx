// components/TraitCards.tsx (Recommended file rename: ProjectLogView.tsx)
'use client';

// Corrected import name: RelicCore -> DataModule
import DataModule from './DataModule'; 
import { useTrait } from './context/TraitContext';
import { FaFilter } from 'react-icons/fa'; 

// Renamed interface and data array for thematic consistency
interface ProjectLog { 
  title: string;
  description: string;
  href: string;
  trait: 'Signalborn' | 'Firekeeper' | 'Chainbreaker';
}

const projectLogs: ProjectLog[] = [
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

// Renamed function to reflect its role as a log view
export default function ProjectLogView() { 
  const { trait } = useTrait();
  
  const statusColors = {
    Signalborn: 'text-cyan-400',
    Firekeeper: 'text-orange-400',
    Chainbreaker: 'text-green-500',
  };

  return (
    // **LAYOUT FIX APPLIED:** Removed 'mx-auto' to prevent centering and align content left.
    <section className="w-full max-w-6xl px-4 sm:px-6 md:px-8 py-12 font-mono" id="featured">
      
      {/* Console Header */}
      <div className="border-b border-cyan-800 pb-3 mb-8">
        <h2 className="text-2xl lg:text-3xl font-bold tracking-widest uppercase text-white mb-2 text-center">
          // FEATURED_PROJECT_LOGS //
        </h2>
        
        {/* Status Filter Indicator */}
        <p className={`text-sm uppercase tracking-wider text-zinc-500 text-center flex items-center justify-center gap-3`}>
          <FaFilter className="text-base" />
          FILTER_ACTIVE: 
          <span className={`font-semibold ${statusColors[trait]}`}>
            [{trait}_MODE]
          </span>
        </p>
      </div>

      {/* Data Modules Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectLogs
          // Filter logic remains the same
          .filter((log) => log.trait === trait)
          .map((log) => (
            // Using the new DataModule component
            <DataModule key={log.title} {...log} /> 
          ))}
      </div>
    </section>
  );
}
