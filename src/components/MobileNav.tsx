// components/MobileNav.tsx

'use client';

import { useState } from 'react';
import Link from 'next/link';
// Swapping standard icons for something more technical
import { GiHamburgerMenu, GiConsoleController } from 'react-icons/gi';
import { FaTimesCircle } from 'react-icons/fa';
// ⚠️ DELETED: import MobileNav from '../components/MobileNav'; ⚠️

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  // Styling for the navigation links
  const navLinkClass = "py-2 border-b border-zinc-800 hover:text-cyan-400 transition-colors uppercase tracking-widest";
  const socialLinkClass = "flex items-center gap-3 text-sm hover:text-orange-500 transition-colors tracking-wide";

  return (
    <>
      {/* 1. Toggle Button - Apply fix here */}
      <button
        suppressHydrationWarning // Fixes hydration error on the button's class or content
        className="md:hidden fixed top-6 left-6 z-50 text-cyan-400 text-2xl hover:text-white transition-colors"
        onClick={() => setOpen(true)}
        aria-label="Open System Menu"
      >
        <GiHamburgerMenu /> 
      </button>

      {open && (
        // 2. Overlay Panel - Apply fix here
        <div 
          suppressHydrationWarning // Fixes hydration error on the overlay container
          className="fixed inset-0 bg-zinc-950/95 z-[999] flex flex-col px-8 py-10 space-y-8 font-mono text-white"
        >
          
          {/* 3. Close Button - Apply fix here */}
          <button 
            suppressHydrationWarning // Fixes hydration error on the close button
            className="self-end text-orange-500 text-2xl hover:text-red-500 transition-colors" 
            onClick={() => setOpen(false)}
            aria-label="Close System Menu"
          >
            <FaTimesCircle />
          </button>

          {/* 4. Console Title/User ID */}
          <h2 className="text-xl font-bold tracking-widest text-cyan-400 border-b border-zinc-800 pb-2">
            // USER ID: BENTLEY_01 //
          </h2>
          
          <p className="text-zinc-500 text-xs">
            [ DIAGNOSTIC CONSOLE ONLINE ]
          </p>

          {/* 5. Navigation Links */}
          <nav className="flex flex-col text-lg text-white space-y-1 pt-4">
            <Link href="/about" onClick={() => setOpen(false)} className={navLinkClass}>
              {'[ 01 ] // ABOUT_ME'}
            </Link>
            <Link href="/projects" onClick={() => setOpen(false)} className={navLinkClass}>
              {'[ 02 ] // PROJECTS'}
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)} className={navLinkClass}>
              {'[ 03 ] // CONTACT'}
            </Link>
          </nav>
          
          {/* 6. Social/External Links */}
          <div className="flex flex-col space-y-4 text-zinc-400 pt-8 border-t border-zinc-800">
            <p className="text-sm uppercase tracking-wider text-zinc-500">
              <GiConsoleController className="inline-block mr-2 text-base" /> EXTERNAL_COMMS:
            </p>
            
            <a href="https://github.com/lgg6bentley" target="_blank" rel="noopener noreferrer" className={socialLinkClass}>
              <span className="text-xl">{'<GITHUB>'}</span> // SYSTEM_REPOSITORY
            </a>
            <a href="https://www.linkedin.com/in/bentley-bond-89b39a375/" target="_blank" rel="noopener noreferrer" className={socialLinkClass}>
              <span className="text-xl">{'<LINKEDIN>'}</span> // PERSONNEL_FILE
            </a>
          </div>
        </div>
      )}
    </>
  );
}
