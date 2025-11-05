'use client';
import Link from 'next/link';
import { useScrollProgress } from './app/hooks/useScrollProgress';
import { useTrait } from './components/context/TraitContext';
// Assuming these custom components will also be refactored to fit the new theme
import DataModule from './components/DataModule'; // Refactored RelicCore
import ConsoleStatus from './components/ConsoleStatus'; // Refactored SymbolCard 
import { GiConsoleController } from 'react-icons/gi';

// Refactor Trait to represent System Status
type SystemStatus = 'Operational' | 'Alert' | 'Dormant';

interface FeaturedProject {
  title: string;
  description: string;
  href: string;
  status: SystemStatus; // Changed from 'trait' to 'status'
}

// NOTE: You would need to create or refactor DataModule and ConsoleStatus 
// to replace RelicCore and SymbolCard for this to work perfectly.

export default function HeroSection() {
  const scrollPhase = useScrollProgress();
  const { trait } = useTrait(); // Retaining for now, but assume context provides SystemStatus

  const featuredProjects: FeaturedProject[] = [
    {
      title: 'Mind Relic [Archive]',
      description: 'A distraction-based memory game which includes Tic Tac Toe. (Status: Deprecated)',
      href: 'https://mindrelic-orcin.vercel.app',
      status: 'Dormant',
    },
    {
      title: 'Tic Tac Toe [Simulation]',
      description: 'Classic game simulation, currently running in debug mode.',
      href: '/projects/tic-tac-toe',
      status: 'Operational',
    },
    {
      title: 'ArcanaForge [Core]',
      description: 'A card-based universe builder with lore encoding and founder rituals.',
      href: '/projects/arcanaforge',
      status: 'Alert',
    },
    {
      title: 'UFC AI Bet Predictor [Model-V3]',
      description: 'An AI-powered fight outcome predictor trained on UFC stats, styles, and momentum signals.',
      href: '/projects/ufc-ai-bet-predictor',
      status: 'Operational',
    },
  ];

  // Map the old trait to a color for the new aesthetic (e.g., from TraitContext)
  const statusColorMap = {
    'Signalborn': 'text-cyan-400',
    'Firekeeper': 'text-orange-500',
    'Chainbreaker': 'text-green-500',
  };
  const activeColor = statusColorMap[trait] || 'text-cyan-400';

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-zinc-950 text-white px-4 py-24 overflow-hidden font-mono">
      
      {/* 1. System Status Scanlines / Background Noise */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
        {/* Simple animated vertical scanline effect */}
        <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,transparent_0px,rgba(0,255,255,0.05)_1px,transparent_2px)] animate-scanlines" />
        {/* Current Trait/Status Glow (repurposed) */}
        <div
          className={`w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-colors duration-1000`}
          style={{ 
            // Dynamic color based on the current trait for the glow
            backgroundColor: trait === 'Signalborn' ? 'rgba(0, 255, 255, 0.1)' : trait === 'Firekeeper' ? 'rgba(255, 165, 0, 0.1)' : 'rgba(76, 175, 80, 0.1)'
          }}
        />
      </div>

      {/* 2. Hero Header - Console Style */}
      <div className="z-10 text-center max-w-4xl border-b border-cyan-800 pb-4 mb-12">
        <p className="text-xs uppercase tracking-widest text-zinc-500 mb-2">
          // PERSONNEL_FILE_ACCESS // STATUS: <span className={activeColor}>ONLINE</span>
        </p>
        <h1 className="text-5xl font-light mb-2 tracking-wider uppercase text-cyan-400">
          BENTLEY BOND <span className="text-xl text-white">[{'DEV_UNIT'}]</span>
        </h1>
        <p className="text-base text-zinc-400 tracking-wider pt-2">
          <GiConsoleController className="inline mr-2 text-xl" /> FULL-STACK SYSTEMS / DATA ARCHITECT
        </p>
      </div>

      {/* 3. Featured Log/Grid */}
      <div className="mt-8 w-full max-w-6xl z-10">
        <h2 className="text-xl font-bold text-orange-400 mb-6 text-center uppercase border-b border-orange-800 pb-2">
          {'>'} ACTIVE_PROJECT_LOGS:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          
          {/* Using a placeholder component that would replace RelicCore */}
          {featuredProjects.map((project) => (
            <div key={project.title} className="p-4 border border-zinc-700 hover:border-cyan-500 transition-colors bg-zinc-900/50">
              <h3 className="text-lg uppercase tracking-wide text-cyan-400">{project.title}</h3>
              <p className="text-xs text-zinc-500 my-2">STATUS: {project.status}</p>
              <p className="text-sm text-zinc-400 mb-4">{project.description}</p>
              <Link href={project.href} className="text-xs text-orange-500 hover:text-white transition-colors">
                [ ACCESS_LOG {'>'} ]
              </Link>
            </div>
          ))}

          {/* Using a placeholder component that would replace SymbolCard */}
          <div className="p-4 border border-zinc-700 bg-zinc-900/50 flex flex-col justify-center items-center text-center">
             <p className="text-2xl text-green-400 mb-2">{'[ OK ]'}</p>
             <p className="text-sm uppercase tracking-widest text-zinc-400">CORE_SYSTEMS_NOMINAL</p>
          </div>
          <div className="p-4 border border-zinc-700 bg-zinc-900/50 flex flex-col justify-center items-center text-center">
             <p className="text-2xl text-red-500 mb-2">{'[ ! ]'}</p>
             <p className="text-sm uppercase tracking-widest text-zinc-400">EXTERNAL_COMMS_PING</p>
          </div>

        </div>
      </div>
    </section>
  );
}

