export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#050816] text-cyan-50">
      <div className="container mx-auto px-6 md:px-10 py-20">
        <div className="mx-auto max-w-4xl rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-[#0b1028]/80 to-[#0a0f24]/80 p-8 shadow-[0_0_40px_rgba(34,211,238,0.12)] backdrop-blur">
          <h2 className="text-2xl md:text-3xl font-bold text-cyan-200 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">About Me</h2>
          <p className="mt-4 leading-relaxed text-cyan-100/85">
            I am Abidzar Sabil Handoyo — an Informatics student and developer who loves blending
            technology with artful, atmospheric design. I enjoy crafting immersive user experiences,
            building smooth, performant interfaces, and experimenting with creative visuals that feel
            both futuristic and serene. My interests include web development, interactive graphics,
            and minimalist systems that glow with personality.
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-xl border border-cyan-400/20 bg-[#0b1028]/60 p-4 text-cyan-100/85 shadow-[0_0_20px_rgba(34,211,238,0.08)]">
              <p className="text-sm opacity-80">Focus</p>
              <p className="mt-1 font-semibold">Frontend & UX</p>
            </div>
            <div className="rounded-xl border border-cyan-400/20 bg-[#0b1028]/60 p-4 text-cyan-100/85 shadow-[0_0_20px_rgba(34,211,238,0.08)]">
              <p className="text-sm opacity-80">Toolkit</p>
              <p className="mt-1 font-semibold">React, Tailwind, Framer Motion</p>
            </div>
            <div className="rounded-xl border border-cyan-400/20 bg-[#0b1028]/60 p-4 text-cyan-100/85 shadow-[0_0_20px_rgba(34,211,238,0.08)]">
              <p className="text-sm opacity-80">Vibes</p>
              <p className="mt-1 font-semibold">Anime cyber-fantasy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
