// components/MobileNav.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-50 text-white text-xl"
        onClick={() => setOpen(true)}
      >
        <FaBars />
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col px-6 py-8 space-y-6">
          <button className="self-end text-white text-xl" onClick={() => setOpen(false)}>
            <FaTimes />
          </button>

          <h2 className="text-lg font-bold tracking-wide text-white">Bentley</h2>

          <nav className="flex flex-col space-y-4 text-sm text-white">
            <Link href="/about" onClick={() => setOpen(false)} className="hover:text-blue-400">About</Link>
            <Link href="/projects" onClick={() => setOpen(false)} className="hover:text-blue-400">Projects</Link>
          </nav>

          <div className="flex flex-col space-y-4 text-sm text-white">
            <a href="https://github.com/lgg6bentley" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400">
              <FaGithub /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/bentley-bond-89b39a375/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      )}
    </>
  );
}
