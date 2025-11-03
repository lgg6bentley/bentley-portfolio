'use client';

import Link from 'next/link';
import { GiAlienSkull } from 'react-icons/gi';

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 py-20 text-center">
      {/* Alien Icon */}
      <GiAlienSkull className="text-6xl text-purple-500 mb-6 animate-pulse" />

      {/* Title */}
      <h1 className="text-4xl font-bold mb-4 tracking-tight">
        Signal Lost in Deep Space
      </h1>

      {/* Description */}
      <p className="text-zinc-400 text-sm max-w-md mb-8">
        This route doesn’t exist in this dimension. Either the relic was sunset, or the portal misfired.
      </p>

      {/* Return Button */}
      <Link
        href="/"
        className="px-4 py-2 rounded bg-purple-600 hover:bg-purple-700 transition-colors text-white text-sm"
      >
        Return to Shrine →
      </Link>
    </section>
  );
}
