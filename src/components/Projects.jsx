import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Neon Forest UI',
    desc: 'A collection of glowing UI components with soft, ethereal animations and accessible design.',
    tags: ['React', 'Tailwind', 'A11y'],
    link: '#'
  },
  {
    title: 'Starlit Portfolio',
    desc: 'A performance-focused personal site template featuring parallax starfields and smooth motion.',
    tags: ['Vite', 'Framer Motion', 'Design'],
    link: '#'
  },
  {
    title: 'GlideFX',
    desc: 'A tiny animation helper library for silky transitions and hover glow effects.',
    tags: ['JavaScript', 'Effects', 'Open Source'],
    link: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-[#040714] text-cyan-50">
      <div className="container mx-auto px-6 md:px-10 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-cyan-200 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">Projects</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <a
                key={p.title}
                href={p.link}
                className="group rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-[#0b1028]/80 to-[#0a0f24]/80 p-5 shadow-[0_0_30px_rgba(34,211,238,0.12)] hover:shadow-[0_0_50px_rgba(34,211,238,0.2)] transition"
              >
                <div className="h-28 rounded-xl bg-gradient-to-tr from-cyan-500/20 via-purple-500/10 to-transparent ring-1 ring-cyan-400/20" />
                <h3 className="mt-4 text-lg font-semibold text-cyan-100 group-hover:text-cyan-200">{p.title}</h3>
                <p className="mt-2 text-sm text-cyan-100/80">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2 py-0.5 text-xs text-cyan-100/90">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 inline-flex items-center gap-1 text-cyan-200/80 group-hover:text-cyan-200">
                  <ExternalLink className="h-4 w-4" />
                  <span className="text-sm">Open</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
