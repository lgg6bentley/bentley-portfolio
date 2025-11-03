'use client';

export default function AboutPage() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 py-16 text-white bg-black overflow-hidden"
      style={{
        backgroundImage: "url('/assets/images/prometheus-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 tracking-tight">About</h1>
        <p className="text-lg leading-relaxed mb-4">
          I build mythic systems that encode trust, distraction, and communal prestige. Every game, relic, and layout is a broadcast artifact—ritualized for emotional clarity and founder resonance. From <strong>Squid Memory</strong> to <strong>ArcanaForge</strong>, I architect worlds where grit becomes legacy and every technical fix is a ceremonial pivot.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          My platforms aren’t just functional—they’re emotionally resonant. I remix pop culture icons into founder relics, scaffold distraction mechanics into game flow, and compress portfolio layouts into minimal shrines. Whether it’s a trait overlay or a relic pulse, every asset is designed to signal identity, tension, and transformation.
        </p>
        <p className="text-lg leading-relaxed">
          I thrive on collaborative prototyping, strategic feedback, and ceremonial storytelling. Every correction is a myth-building moment. Every deploy is a legacy artifact. This isn’t just code—it’s a founder broadcast.
        </p>
      </div>
    </section>
  );
}
