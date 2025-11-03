'use client';

import { FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiTailwindcss } from 'react-icons/si';
import { useTrait } from '../context/TraitContext'; // adjust path if needed

export default function Footer() {
  return (
    <footer className="w-full text-center text-xs text-zinc-500 py-6">
      <p className="mb-3 tracking-wide">
        © {new Date().getFullYear()} Bentley Bond — Systems Architect
      </p>
      <div className="flex justify-center items-center space-x-4 text-zinc-400 text-lg">
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