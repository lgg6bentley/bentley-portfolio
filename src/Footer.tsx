'use client';

import { FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiTailwindcss } from 'react-icons/si';
import { useTrait } from './context/TraitContext'; // Adjusted path

export default function Footer() {
  const { trait } = useTrait();

  const traitColor = {
    Signalborn: 'text-blue-400',
    Firekeeper: 'text-orange-400',
    Chainbreaker: 'text-purple-400',
  };

  return (
    <footer className="w-full text-center text-xs text-zinc-500 py-6">
      <p className="mb-3 tracking-wide">
        © {new Date().getFullYear()} Bentley Bond — Software Developer
      </p>
      <div className={`flex justify-center items-center space-x-4 text-lg ${traitColor[trait]}`}>
        <FaReact title="React" />
        <SiTypescript title="TypeScript" />
        <SiJavascript title="JavaScript" />
        <FaNodeJs title="Node.js" />
        <SiTailwindcss title="Tailwind CSS" />
        <FaGithub title="GitHub" />
      </div>
    </footer>
  );
}
