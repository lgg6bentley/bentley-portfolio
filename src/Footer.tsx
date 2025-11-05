// components/Footer.tsx

'use client';

import { FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiTailwindcss } from 'react-icons/si';
import { GiConsoleController } from 'react-icons/gi'; // Adding a system icon

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    // Footer is now fixed width, uses monospace font, and has a defined border/background
    <footer className="w-full text-center py-4 bg-zinc-950/80 border-t border-cyan-900 font-mono">
      
      {/* Top Line: Copyright / Founder Broadcast */}
      <p className="text-xs uppercase tracking-widest text-zinc-500 mb-3">
        // FOUNDER_BROADCAST // {currentYear} BENTLEY_SYSTEMS
      </p>

      {/* --- Core Protocol Status --- */}
      <div className="flex justify-center items-center space-x-5 text-zinc-400">
        
        {/* Identifier */}
        <div className="text-xs uppercase tracking-widest text-cyan-400 flex items-center gap-2">
            <GiConsoleController className="text-base" /> CORE_PROTOCOL:
        </div>
        
        {/* Tech Stack Icons (Styled as Status Indicators) */}
        <div className="flex items-center space-x-4 text-lg">
            {/* Using text-cyan-500 for a consistent high-status color */}
            <FaReact className="text-cyan-500 hover:text-white transition-colors" title="React Status: Operational" />
            <SiTypescript className="text-cyan-500 hover:text-white transition-colors" title="TypeScript Status: Operational" />
            <SiJavascript className="text-cyan-500 hover:text-white transition-colors" title="JavaScript Status: Operational" />
            <FaNodeJs className="text-cyan-500 hover:text-white transition-colors" title="Node.js Status: Operational" />
            <SiTailwindcss className="text-cyan-500 hover:text-white transition-colors" title="Tailwind CSS Status: Operational" />
        </div>
      </div>
      
      {/* Bottom Line: Legacy Status */}
      <div className="mt-3 pt-2 border-t border-zinc-800/50">
          <a 
            href="https://github.com/lgg6bentley"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] uppercase tracking-widest text-orange-400 hover:text-white transition-colors flex items-center justify-center gap-2"
          >
            <FaGithub /> LEGACY_REPOSITORY // ACCESS_FILE
          </a>
      </div>
    </footer>
  );
}
