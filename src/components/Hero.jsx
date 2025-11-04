import { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Mail, ArrowDown, Volume2, VolumeX } from 'lucide-react';

export default function Hero() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      setParallax({ x, y });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.volume = 0.25;
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-[#050816] text-white">
      {/* Stars background */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.4), transparent),\n             radial-gradient(1px 1px at 30% 80%, rgba(255,255,255,0.35), transparent),\n             radial-gradient(1px 1px at 70% 10%, rgba(255,255,255,0.45), transparent),\n             radial-gradient(2px 2px at 80% 60%, rgba(94,234,212,0.35), transparent),\n             radial-gradient(1px 1px at 50% 50%, rgba(167,139,250,0.35), transparent)'
        }}
      />

      {/* Misty light waves */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(60% 40% at 20% 20%, rgba(34,211,238,0.15), transparent 60%),\n             radial-gradient(50% 40% at 80% 30%, rgba(139,92,246,0.12), transparent 60%),\n             radial-gradient(50% 40% at 50% 80%, rgba(56,189,248,0.12), transparent 60%)',
          filter: 'blur(40px)'
        }}
      />

      {/* Neon vignette */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 150px rgba(0,0,0,0.6)'
        }}
      />

      {/* Spline Scene (magical fairy / firefly) */}
      <div className="absolute inset-0" style={{ transform: `translate3d(${parallax.x * -1}px, ${parallax.y * -1}px, 0)` }}>
        <Spline scene="https://prod.spline.design/iO74mq3KeYTXVmpB/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient glow overlays that do not block interactions */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background:
          'radial-gradient(600px 200px at 20% 30%, rgba(14,165,233,0.18), transparent 60%),\n           radial-gradient(600px 200px at 80% 60%, rgba(147,51,234,0.18), transparent 60%)'
      }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-10 pt-24 pb-12 min-h-screen flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-cyan-200 drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]">
            Abidzar Sabil Handoyo
          </h1>
          <p className="mt-3 text-lg md:text-xl text-cyan-100/90">
            Informatics Student & Developer
          </p>
          <p className="mt-4 text-base md:text-lg text-cyan-50/80">
            "Dreaming in code under neon skies."
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-cyan-100 hover:bg-cyan-400/20 hover:border-cyan-400 transition shadow-[0_0_20px_rgba(34,211,238,0.25)]">
              View Projects
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-purple-400/40 bg-purple-400/10 px-5 py-2 text-purple-100 hover:bg-purple-400/20 hover:border-purple-400 transition shadow-[0_0_20px_rgba(168,85,247,0.25)]">
              Get in Touch
            </a>
            <button onClick={toggleAudio} className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-2 text-cyan-100 hover:bg-cyan-300/20 hover:border-cyan-300 transition shadow-[0_0_20px_rgba(34,211,238,0.25)]">
              {playing ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
              <span className="hidden sm:inline">Ambient</span>
            </button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-5">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-cyan-200/80 hover:text-cyan-200 transition drop-shadow-[0_0_10px_rgba(34,211,238,0.35)]">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-cyan-200/80 hover:text-cyan-200 transition drop-shadow-[0_0_10px_rgba(34,211,238,0.35)]">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#contact" className="text-cyan-200/80 hover:text-cyan-200 transition drop-shadow-[0_0_10px_rgba(34,211,238,0.35)]">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <audio ref={audioRef} loop preload="auto" src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_0f0424d19b.mp3?filename=ambient-110253.mp3" />
      </div>
    </section>
  );
}
