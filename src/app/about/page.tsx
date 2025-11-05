'use client';

import { FaRegFileCode, FaTerminal } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <section
      className="min-h-screen flex items-center justify-center bg-zinc-950 text-white font-mono px-4 py-20 overflow-hidden"
    >
      
      {/* Background Grid/Noise (Simple Scanline Effect) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,transparent_0px,rgba(0,255,255,0.02)_1px,transparent_2px)]" />
      </div>

      {/* Content Container - Defined borders and maximal readability */}
      <div className="relative z-10 max-w-4xl mx-auto p-8 border border-zinc-700 bg-zinc-900/60 shadow-xl shadow-cyan-900/10">
        
        {/* Title Header - Personnel/File designation */}
        <p className="text-xs uppercase tracking-widest text-zinc-500 mb-2">
          [ ACCESSING: FILE_BENTLEY_01.DAT ]
        </p>
        <h1 className="text-3xl font-light mb-8 tracking-wider uppercase text-cyan-400 border-b border-cyan-800 pb-3">
          // PERSONNEL_RECORD // STATUS: ACTIVE
        </h1>
        
        {/* Section 1: Core Function */}
        <div className="mb-8 border-l-4 border-cyan-500 pl-4">
          <h2 className="text-lg uppercase tracking-wider text-orange-400 mb-3 flex items-center gap-2">
            <FaRegFileCode /> MODULE 01: CORE_FUNCTIONALITY
          </h2>
          <p className="text-sm leading-relaxed text-zinc-300 mb-4">
            **LOG ENTRY:** Developer tasked with architecting full-stack systems and specialized modules for emotional clarity and signal identity. Specialization in **distraction scaffolding** and **founder resonance** mechanics. Every delivered artifact functions as a dedicated broadcast endpoint.
          </p>
          <p className="text-sm leading-relaxed text-zinc-300">
            **CURRENT SYSTEMS:** [Mind Relic], [ArcanaForge], [UFC AI Bet Predictor], and proprietary **Squid Memory** architecture.
          </p>
        </div>

        {/* Section 2: Methodology */}
        <div className="mb-8 border-l-4 border-zinc-500 pl-4">
          <h2 className="text-lg uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
            <FaTerminal /> MODULE 02: DEPLOYMENT_PROTOCOL
          </h2>
          <p className="text-sm leading-relaxed text-zinc-300 mb-4">
            **PROTOCOL SUMMARY:** Methodology centers on transmuting pop culture data into founder **Relics** and encoding grit metrics into system legacy. Platforms are prioritized for **emotional resonance** over minimal function. Portfolio structure is treated as a minimal shrine layout for artifact compression.
          </p>
        </div>

       {/* Footer/Status Line */}
        <div className="mt-10 pt-4 border-t border-zinc-800">
          <p className="text-xs uppercase tracking-widest text-green-500">
            {/* FIX: Replaced literal > with the JSX expression {'>'} */}
            [ {'>'} RECORD_INTEGRITY: 100% ] [ {'>'} END_OF_FILE ]
          </p>
        </div>
      </div>
    </section>
  );
}