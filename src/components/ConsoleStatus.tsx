// src/components/ConsoleStatus.tsx
'use client';

import { IconType } from 'react-icons';
import { FaCode, FaServer, FaDatabase, FaFileAlt, FaLock } from 'react-icons/fa'; 

// Props for the new status module
interface ConsoleStatusProps {
  label: string; // e.g., 'CORE_SKILL'
  value: string; // e.g., 'Next.js / React'
  color: 'cyan' | 'orange' | 'green' | 'red';
  icon: IconType;
}

const colorStyles = {
  cyan: { border: 'border-cyan-700', text: 'text-cyan-400', shadow: 'shadow-cyan-900/40' },
  orange: { border: 'border-orange-700', text: 'text-orange-400', shadow: 'shadow-orange-900/40' },
  green: { border: 'border-green-700', text: 'text-green-400', shadow: 'shadow-green-900/40' },
  red: { border: 'border-red-700', text: 'text-red-400', shadow: 'shadow-red-900/40' },
};

export default function ConsoleStatus({ label, value, color, icon: Icon }: ConsoleStatusProps) {
  const style = colorStyles[color];

  return (
    // Card Container: Simple, border-driven aesthetic
    <div 
      className={`p-4 border-2 ${style.border} bg-zinc-900/80 font-mono shadow-md ${style.shadow} transition-shadow duration-300 hover:shadow-lg`}
    >
      
      {/* Label / Header */}
      <div className="flex items-center justify-between mb-1 border-b border-zinc-700 pb-1">
        <p className="text-xs uppercase tracking-widest text-zinc-500">{label}</p>
        <Icon className={`text-sm ${style.text}`} />
      </div>
      
      {/* Value / Data Output */}
      <h4 className="text-lg font-bold uppercase tracking-wider text-white">
        {value}
      </h4>
      
      {/* Footer Text */}
      <p className={`text-[10px] italic tracking-wide ${style.text} mt-1`}>
        // STATUS: 0xOK
      </p>
    </div>
  );
}