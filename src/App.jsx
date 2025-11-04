import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="scroll-smooth bg-[#050816] text-white">
      {/* Top navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur border-b border-cyan-400/10 bg-[#050816]/60">
        <nav className="container mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#home" className="text-cyan-200 font-semibold tracking-wide drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">Abidzar S H</a>
          <div className="hidden sm:flex items-center gap-6 text-cyan-100/85">
            <a href="#about" className="hover:text-cyan-200 transition">About</a>
            <a href="#projects" className="hover:text-cyan-200 transition">Projects</a>
            <a href="#contact" className="hover:text-cyan-200 transition">Contact</a>
          </div>
        </nav>
      </header>

      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-cyan-400/10 bg-[#040714]">
        <div className="container mx-auto px-6 md:px-10 py-6 text-center text-cyan-100/70">
          <p>
            © {new Date().getFullYear()} Abidzar Sabil Handoyo — Crafted with calm neon vibes.
          </p>
        </div>
      </footer>
    </div>
  );
}
