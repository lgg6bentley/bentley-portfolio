// src/components/ProjectVault.tsx
import Link from 'next/link';

type Project = {
  title: string;
  description: string;
  href: string;
  trait?: string;
};

const projects: Project[] = [
  {
    title: 'Squid Memory',
    description: 'Distraction mechanics, trait overlays, and time rituals.',
    href: '/squid-memory',
    trait: 'Signal Caster',
  },
  {
    title: 'Tic Tac Toe',
    description: 'Standalone game with lore pulses and level timers.',
    href: '/tic-tac-toe',
    trait: 'Neural Architect',
  },
  {
    title: 'ArcanaForge',
    description: 'Card-based universe with Genesis traits and relic reveals.',
    href: '/arcanaforge',
    trait: 'Forge',
  },
  {
    title: 'UFC AI Bet Predictor',
    description: 'Fight outcome predictor trained on stats, styles, and momentum signals.',
    href: '/ufc-ai-bet-predictor',
    trait: 'Probabilist',
  },
];


export default function ProjectVault() {
  return (
    <section className="project-vault">
      <h2 className="vault-title">Modular Systems & Games</h2>
      <div className="vault-grid">
        {projects.map((project, i) => (
          <Link key={i} href={project.href} className="vault-card">
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.trait && <span className="trait-tag">{project.trait}</span>}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
