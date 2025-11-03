'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTrait } from './components/context/TraitContext';

export default function SidebarNav() {
  const { trait, switchTrait } = useTrait();

  const traitColors = {
    Signalborn: 'text-blue-400',
    Firekeeper: 'text-orange-400',
    Chainbreaker: 'text-purple-400',
  };

  return (
    <aside className="hidden md:flex fixed left-0 top-0 h-screen w-52 bg-black text-white flex-col px-4 py-8 space-y-8 shadow-lg z-50">
      {/* Founder Identity */}
      <div>
        <h2 className="text-lg font-bold tracking-wide">Bentley</h2>
        <p className={`text-xs mt-1 italic ${traitColors[trait]}`}>
          Trait Mode: {trait}
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col space-y-4 text-sm">
        <Link href="/about" className="hover:text-blue-400">About</Link>
        <Link href="#featured" scroll={false} className="hover:text-blue-400">Featured</Link>
        <Link href="#contact" scroll={false} className="hover:text-blue-400">Contact</Link>
      </nav>

      {/* External Links */}
      <div className="flex flex-col space-y-4 text-sm">
        <a
          href="https://github.com/lgg6bentley"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-400"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/bentley-bond-89b39a375/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-400"
        >
          <FaLinkedin /> LinkedIn
        </a>
      </div>

      {/* Trait Switcher */}
      <div className="mt-auto flex flex-col space-y-2">
        <button
          onClick={switchTrait}
          className="text-xs text-zinc-400 hover:text-orange-400 transition-colors"
        >
          Switch Trait Mode
        </button>
        <p className="text-[10px] text-zinc-600 italic">
          Ritualize your grid with trait overlays.
        </p>
      </div>
    </aside>
  );
}
