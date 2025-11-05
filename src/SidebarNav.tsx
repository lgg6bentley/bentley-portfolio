// components/SidebarNav.tsx

'use client';

import Link from 'next/link';
// Import the Home icon
import { FaGithub, FaLinkedin, FaSitemap, FaCodeBranch, FaHome } from 'react-icons/fa'; 
import { useTrait } from './components/context/TraitContext';

export default function SidebarNav() {
  const { trait, switchTrait } = useTrait();

  const statusColors = {
    Signalborn: 'text-cyan-400', 
    Firekeeper: 'text-orange-400', 
    Chainbreaker: 'text-green-500', 
  };

  const navLinkClass = "py-1 hover:text-cyan-400 transition-colors uppercase tracking-widest text-sm";
  const externalLinkClass = "flex items-center gap-3 hover:text-orange-400 transition-colors text-xs";

  return (
    <aside 
      className="hidden md:flex fixed left-0 top-0 h-screen w-56 bg-zinc-950 text-white flex-col px-5 py-8 space-y-10 shadow-lg shadow-zinc-900/50 z-50 font-mono border-r border-zinc-800"
    >
      
      {/* 1. Founder Identity / Console Header */}
      <div>
        <h2 className="text-xl font-bold tracking-widest text-white border-b border-cyan-800 pb-2">
          // CONSOLE_UNIT //
        </h2>
        
        {/* Trait Status Display */}
        <p className={`text-xs mt-3 uppercase tracking-wide ${statusColors[trait]} flex items-center gap-2`}>
          <FaSitemap className="text-base" /> STATUS_MODE: <span className="font-semibold">{trait}</span>
        </p>
      </div>

      {/* 2. Navigation - SYSTEM_ROUTES */}
      <nav className="flex flex-col space-y-2 pt-2 border-t border-zinc-800">
        <p className="text-xs uppercase tracking-widest text-zinc-500 mb-2">
          {'>'} SYSTEM_ROUTES:
        </p>
        
        {/* === NEW: RETURN HOME BUTTON === */}
        <Link 
          href="/" 
          className="text-white bg-cyan-600/10 border border-cyan-500 hover:bg-cyan-500/30 transition-colors py-2 px-3 flex items-center gap-2 uppercase tracking-widest text-base font-bold mb-3"
        >
          <FaHome className="text-lg" /> // INIT_HOME
        </Link>
        {/* =============================== */}

        <Link href="/about" className={navLinkClass}>
          [ 01 ] // ABOUT
        </Link>
        <Link href="#featured" scroll={false} className={navLinkClass}>
          [ 02 ] // LOGS_ACTIVE
        </Link>
        <Link href="/contact" scroll={false} className={navLinkClass}>
          [ 03 ] // COMMS_LINK
        </Link>
      </nav>

      {/* 3. External Links - DATA_STREAM (rest of component remains the same) */}
      <div className="flex flex-col space-y-3 pt-2 border-t border-zinc-800">
        <p className="text-xs uppercase tracking-widest text-zinc-500 mb-2">
          {'>'} EXTERNAL_DATA_STREAM:
        </p>
        <a
          href="https://github.com/lgg6bentley"
          target="_blank"
          rel="noopener noreferrer"
          className={externalLinkClass}
        >
          <FaGithub className="text-base" /> {'<GITHUB_REPO>'}
        </a>
        <a
          href="https://www.linkedin.com/in/bentley-bond-89b39a375/"
          target="_blank"
          rel="noopener noreferrer"
          className={externalLinkClass}
        >
          <FaLinkedin className="text-base" /> {'<PERSONNEL_FILE>'}
        </a>
      </div>

      {/* 4. Trait Switcher - System Command Button */}
      <div className="mt-auto flex flex-col space-y-2 pt-4 border-t border-zinc-800">
        <p className="text-xs uppercase tracking-widest text-zinc-500">
          {'>'} CONFIGURATION:
        </p>
        <button
          onClick={switchTrait}
          className="text-sm text-white bg-transparent border border-orange-500 hover:bg-orange-500/20 transition-all py-1.5 uppercase tracking-widest"
        >
          // SWITCH_MODE //
        </button>
        <p className="text-[10px] text-zinc-600 italic">
          [ CONFIG_NOTE: GRID RECALIBRATION INITIATED ]
        </p>
      </div>
    </aside>
  );
}
