'use client';

import Link from 'next/link';

export default function ProjectPreview() {
  return (
    <section className="mt-20 w-full max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project 1 */}
        <div className="bg-zinc-900 rounded-lg p-6 shadow-md h-full flex flex-col justify-between">
          <h3 className="text-xl font-semibold text-white mb-2">Squid Memory</h3>
          <p className="text-sm text-zinc-300 mb-4">
            A distraction-based memory game with trait overlays and time rituals.
          </p>
          <Link href="/projects/squid-memory" className="text-blue-400 hover:underline mt-auto">
            View Project →
          </Link>
        </div>

        {/* Project 2 */}
        <div className="bg-zinc-900 rounded-lg p-6 shadow-md h-full flex flex-col justify-between">
          <h3 className="text-xl font-semibold text-white mb-2">Tic Tac Toe</h3>
          <p className="text-sm text-zinc-300 mb-4">
            Classic game reimagined with founder relics and mythic tension.
          </p>
          <Link href="/projects/tic-tac-toe" className="text-blue-400 hover:underline mt-auto">
            View Project →
          </Link>
        </div>

        {/* Project 3 */}
        <div className="bg-zinc-900 rounded-lg p-6 shadow-md h-full flex flex-col justify-between">
          <h3 className="text-xl font-semibold text-white mb-2">ArcanaForge</h3>
          <p className="text-sm text-zinc-300 mb-4">
            A card-based universe builder with lore encoding and founder rituals.
          </p>
          <Link href="/projects/arcanaforge" className="text-blue-400 hover:underline mt-auto">
            View Project →
          </Link>
        </div>
      </div>
    </section>
  );
}