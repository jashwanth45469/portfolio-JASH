import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';

const github = 'https://github.com/jashwanth45469';
const linkedin = 'https://www.linkedin.com/in/jashwanth-kumar-757229371/';
const email = 'mailto:jashwanthkumar.dev@gmail.com';

export default function Contact() {
  return (
    <div className="page-shell">
      <SectionTitle
        eyebrow="Contact"
        title="Let&apos;s Connect"
        description="I am open to collaboration, internships, learning opportunities, and conversations around software, AI, and building useful products."
      />

      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="glass-card rounded-[28px] p-7 sm:p-8">
          <h3 className="mb-6 text-3xl font-semibold text-white">Reach out</h3>
          <div className="space-y-5 text-slate-300">
            <a href={email} className="group block rounded-2xl border border-sky-400/20 bg-sky-500/5 p-4 transition hover:-translate-y-1 hover:border-sky-300/40 hover:bg-sky-500/10">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">Email</p>
              <p className="text-lg font-medium text-white">jashwanthkumar.dev@gmail.com</p>
            </a>

            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-2xl border border-violet-400/20 bg-violet-500/5 p-4 transition hover:-translate-y-1 hover:border-violet-300/40 hover:bg-violet-500/10"
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">GitHub</p>
              <p className="text-lg font-medium text-white">github.com/jashwanth45469</p>
            </a>

            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-2xl border border-cyan-400/20 bg-cyan-500/5 p-4 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-500/10"
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">LinkedIn</p>
              <p className="text-lg font-medium text-white">linkedin.com/in/jashwanth-kumar-757229371</p>
            </a>
          </div>
        </div>

        <form className="glass-card rounded-[28px] p-7 sm:p-8" action={email} method="POST">
          <div className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">Name</label>
              <input
                type="text"
                name="name"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-sky-400/50 focus:bg-white/10"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">Email</label>
              <input
                type="email"
                name="email"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-sky-400/50 focus:bg-white/10"
                placeholder="Your email"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">Message</label>
              <textarea
                rows="5"
                name="message"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-sky-400/50 focus:bg-white/10"
                placeholder="Write your message here"
              />
            </div>

            <Button type="submit" className="px-6 py-3">Send Message</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
