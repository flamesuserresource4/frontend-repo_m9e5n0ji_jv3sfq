import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-[#050816] text-cyan-50">
      <div className="container mx-auto px-6 md:px-10 py-20">
        <div className="mx-auto max-w-4xl rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-[#0b1028]/80 to-[#0a0f24]/80 p-8 shadow-[0_0_40px_rgba(34,211,238,0.12)] backdrop-blur">
          <h2 className="text-2xl md:text-3xl font-bold text-cyan-200 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">Contact</h2>
          <p className="mt-3 text-cyan-100/85">Feel free to reach out for collaborations, opportunities, or just to say hello.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <form action="mailto:abidzarsabil@example.com" method="post" encType="text/plain" className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full rounded-lg border border-cyan-400/20 bg-[#0b1028]/60 px-4 py-3 text-cyan-100 placeholder-cyan-100/40 outline-none focus:border-cyan-300 focus:ring-2 focus:ring-cyan-500/30"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full rounded-lg border border-cyan-400/20 bg-[#0b1028]/60 px-4 py-3 text-cyan-100 placeholder-cyan-100/40 outline-none focus:border-cyan-300 focus:ring-2 focus:ring-cyan-500/30"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                className="w-full rounded-lg border border-cyan-400/20 bg-[#0b1028]/60 px-4 py-3 text-cyan-100 placeholder-cyan-100/40 outline-none focus:border-cyan-300 focus:ring-2 focus:ring-cyan-500/30"
                required
              />
              <button type="submit" className="w-full rounded-lg border border-cyan-400/40 bg-cyan-400/10 py-3 text-cyan-100 hover:bg-cyan-400/20 hover:border-cyan-400 transition shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                Send Message
              </button>
            </form>

            <div className="rounded-xl border border-cyan-400/20 bg-[#0b1028]/60 p-6">
              <div className="space-y-3 text-cyan-100/85">
                <a href="mailto:abidzarsabil@example.com" className="flex items-center gap-3 hover:text-cyan-200">
                  <Mail className="h-5 w-5" /> abidzarsabil@example.com
                </a>
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-cyan-200">
                  <Github className="h-5 w-5" /> github.com/yourprofile
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-cyan-200">
                  <Linkedin className="h-5 w-5" /> linkedin.com/in/yourprofile
                </a>
              </div>
              <p className="mt-6 text-sm text-cyan-100/60">I aim to respond within 1–2 days.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
