// app/not-found.tsx

'use client';

import Link from 'next/link';
import { FaExclamationTriangle } from 'react-icons/fa'; 

export default function NotFound() {
  return (
    <section 
      // Prevents hydration error on the main container's class
      suppressHydrationWarning 
      className="min-h-screen flex flex-col items-center justify-center bg-zinc-950 text-white px-6 py-20 text-center font-mono"
    >
      
      {/* Icon: High-visibility warning */}
      <FaExclamationTriangle className="text-6xl text-orange-500 mb-6 animate-pulse" />

      {/* Title */}
      <h1 className="text-4xl font-light mb-4 tracking-wider uppercase text-red-500">
        // 404 ERROR //
      </h1>
      <h2 className="text-2xl font-light mb-4 tracking-wider text-cyan-400">
        SYSTEM: ROUTE PATH UNKNOWN
      </h2>

      {/* Description: System Log */}
      <p className="text-zinc-400 text-sm max-w-lg mb-8 leading-relaxed border-t border-b border-zinc-700 py-3">
        **LOG ENTRY:** Signal integrity compromised. Requested URL could not be located in the primary routing matrix (404). **STATUS:** Critical. Recommended action is immediate return to known parameters.
      </p>

      {/* Return Button: Command Protocol Style */}
      <Link
        href="/"
        // Prevents hydration error on the rendered <a> tag
        suppressHydrationWarning 
        className="px-6 py-3 rounded-sm border border-cyan-500 bg-transparent hover:bg-cyan-500/20 
                   transition-all text-cyan-400 hover:text-white text-sm uppercase tracking-widest"
      >
        // INIT_RETURN_PROTOCOL //
      </Link>
      
      {/* ASCII/Tech detail */}
       <div className="mt-8 text-xs text-zinc-700">
         [ {'>'} AWAITING INSTRUCTIONS ... ]
       </div>
    </section>
  );
}