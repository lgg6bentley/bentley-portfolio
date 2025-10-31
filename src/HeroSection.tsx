'use client';

import { useScrollProgress } from './hooks/useScrollProgress';
import AstroRelic from './components/AstroRelic';
import Link from 'next/link';

export default function HeroSection() {
  const scrollPhase = useScrollProgress();

  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center items-center text-white px-4 py-20 overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black opacity-60 z-0" />

      {/* AstroBoy Silhouette Relic (Background Image) */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
        style={{
          backgroundImage: "url('/assets/astroboy-relic.jpg')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: '400px',
          backgroundPosition: 'top left',
          opacity: 0.08,
          mixBlendMode: 'overlay',
        }}
      />

      {/* Scroll-reactive Relic */}
      <AstroRelic phase={scrollPhase} className="z-10" />

      {/* Hero Text */}
      <div className="z-10 text-center max-w-2xl">
        <h1 className="text-3xl font-semibold mb-2 tracking-tight">
          Bentley Bond / Systems Architect
        </h1>
        <p className="text-sm text-zinc-400 tracking-wide">
          Full-stack systems and mythic games—designed to signal.
        </p>
      </div>

      {/* Balanced Grid Below */}
      <div className="mt-20 w-full max-w-6xl z-10">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {/* Project Card 1 */}
          <div className="relative bg-zinc-900 rounded-lg p-6 shadow-md h-full flex flex-col justify-between overflow-hidden">
            <div
              className="absolute inset-0 opacity-5 pointer-events-none"
              style={{
                backgroundImage: "url('/assets/noise-texture.png')",
                backgroundSize: 'cover',
                mixBlendMode: 'overlay',
              }}
            />
            <h3 className="text-xl font-semibold text-white mb-2">Squid Memory</h3>
            <p className="text-sm text-zinc-300 mb-4">
              A distraction-based memory game with trait overlays and time rituals.
            </p>
            <Link href="/projects/squid-memory" className="text-blue-400 hover:underline mt-auto">
              View Project →
            </Link>
          </div>

          {/* Project Card 2 */}
          <div className="relative bg-zinc-900 rounded-lg p-6 shadow-md h-full flex flex-col justify-between overflow-hidden">
            <div
              className="absolute inset-0 opacity-5 pointer-events-none"
              style={{
                backgroundImage: "url('/assets/noise-texture.png')",
                backgroundSize: 'cover',
                mixBlendMode: 'overlay',
              }}
            />
            <h3 className="text-xl font-semibold text-white mb-2">Tic Tac Toe</h3>
            <p className="text-sm text-zinc-300 mb-4">
              Classic game reimagined with founder relics and mythic tension.
            </p>
            <Link href="/projects/tic-tac-toe" className="text-blue-400 hover:underline mt-auto">
              View Project →
            </Link>
          </div>

          {/* Project Card 3 */}
          <div className="relative bg-zinc-900 rounded-lg p-6 shadow-md h-full flex flex-col justify-between overflow-hidden">
            <div
              className="absolute inset-0 opacity-5 pointer-events-none"
              style={{
                backgroundImage: "url('/assets/noise-texture.png')",
                backgroundSize: 'cover',
                mixBlendMode: 'overlay',
              }}
            />
            <h3 className="text-xl font-semibold text-white mb-2">ArcanaForge</h3>
            <p className="text-sm text-zinc-300 mb-4">
              A card-based universe builder with lore encoding and founder rituals.
            </p>
            <Link href="/projects/arcanaforge" className="text-blue-400 hover:underline mt-auto">
              View Project →
            </Link>
          </div>

          {/* Project Card 4 */}
          <div className="relative bg-zinc-900 rounded-lg p-6 shadow-md h-full flex flex-col justify-between overflow-hidden">
            <div
              className="absolute inset-0 opacity-5 pointer-events-none"
              style={{
                backgroundImage: "url('/assets/noise-texture.png')",
                backgroundSize: 'cover',
                mixBlendMode: 'overlay',
              }}
            />
            <h3 className="text-xl font-semibold text-white mb-2">UFC AI Bet Predictor</h3>
            <p className="text-sm text-zinc-300 mb-4">
              An AI-powered fight outcome predictor trained on UFC stats, styles, and momentum signals.
            </p>
            <Link href="/projects/ufc-ai-bet-predictor" className="text-blue-400 hover:underline mt-auto">
              View Project →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
