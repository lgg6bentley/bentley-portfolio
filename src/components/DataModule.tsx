// C:\Users\balle\bentleys-portfolio\src\components\DataModule.tsx
'use client';

import Link from 'next/link';
// Import the new technical icons
import { FaExternalLinkAlt, FaDatabase, FaWrench, FaTerminal } from 'react-icons/fa'; 

// Renamed the type to reflect the new Data Log theme
type DataModuleProps = {
  title: string;
  description: string;
  href: string;
  trait: 'Signalborn' | 'Firekeeper' | 'Chainbreaker';
};

// --- PROMETHEUS STYLES ---
const statusStyles = {
  // Cyan for primary focus / Signalborn
  Signalborn: { 
    color: 'text-cyan-400', 
    border: 'border-cyan-700', 
    hoverBorder: 'hover:border-cyan-500',
    icon: FaTerminal, 
    statusText: 'OPERATIONAL' 
  },
  // Orange for critical/founder projects / Firekeeper
  Firekeeper: { 
    color: 'text-orange-500', 
    border: 'border-orange-700', 
    hoverBorder: 'hover:border-orange-500',
    icon: FaWrench, 
    statusText: 'ALERT/MAINTENANCE' 
  },
  // Green for stable/archived projects / Chainbreaker
  Chainbreaker: { 
    color: 'text-green-500', 
    border: 'border-green-700', 
    hoverBorder: 'hover:border-green-500',
    icon: FaDatabase, 
    statusText: 'ARCHIVED/STABLE' 
  },
};
// ------------------------------

export default function DataModule({ title, description, href, trait }: DataModuleProps) {
  const style = statusStyles[trait];
  const StatusIcon = style.icon; // Get the appropriate icon component
  
  return (
    // Card Container: Technical styling, uses a hover border for interactivity
    <div 
      className={`p-5 border ${style.border} bg-zinc-900/70 ${style.hoverBorder} transition-colors duration-300 font-mono flex flex-col h-full shadow-lg shadow-zinc-900/50`}
    >
      
      {/* Status Header (Top Border) */}
      <div className="flex items-center justify-between mb-3 border-b border-zinc-700 pb-2">
        <div className={`text-xs uppercase tracking-widest flex items-center gap-2 ${style.color}`}>
          <StatusIcon className="text-base" /> {style.statusText}
        </div>
        <p className="text-zinc-600 text-[10px] uppercase">LOG_ID: {title.substring(0, 4).toUpperCase()}</p>
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-bold uppercase tracking-wider text-white mb-2">
        {title}
      </h3>
      
      {/* Description / Data Output */}
      <p className="text-sm text-zinc-400 mb-6 flex-grow">
        // DATA_OUTPUT: {description}
      </p>

      {/* Access Link (Styled as a system command) */}
      <Link
        href={href}
        className={`mt-auto px-4 py-2 text-xs uppercase tracking-widest text-white border border-transparent ${style.color} hover:border-current transition-colors duration-200 flex items-center justify-center gap-2`}
        target={href.startsWith('http') ? '_blank' : '_self'}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        [ ACCESS_LOG_FILE {'>'} ] <FaExternalLinkAlt className="text-xs" />
      </Link>
    </div>
  );
}
