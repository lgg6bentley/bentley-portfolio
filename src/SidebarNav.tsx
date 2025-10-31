'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function SidebarNav() {
  return (
    <aside className="fixed left-0 top-0 h-full w-48 bg-black text-white flex flex-col items-start px-4 py-8 space-y-6 shadow-lg z-50">
      <h2 className="text-lg font-bold tracking-wide">Bentley</h2>

      <nav className="flex flex-col space-y-4 text-sm">
        <Link href="/about" className="hover:text-blue-400">About</Link>
        <Link href="/projects" className="hover:text-blue-400">Projects</Link>

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
      </nav>
    </aside>
  );
}
