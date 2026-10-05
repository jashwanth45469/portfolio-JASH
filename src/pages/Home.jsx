import Button from '../components/Button';
import SocialLinks from '../components/SocialLinks';

const resumeUrl = 'https://drive.google.com/file/d/11kf17rAfpwX1zTLqRDtwOyyCXQmCQQnT/view?usp=sharing';

export default function Home() {
  return (
    <div className="page-shell">
      <section className="hero-panel px-6 py-12 sm:px-10 lg:px-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-sky-300">
              Welcome
            </p>
            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Hi, I&apos;m <span className="gradient-text">Jashwanth Kumar</span>
            </h1>
            <h2 className="mt-4 text-lg font-medium text-slate-200 sm:text-xl">
              Computer Science Engineering Student &amp; Aspiring AI Developer
            </h2>
            <p className="mt-5 max-w-xl text-base text-slate-300 sm:text-lg">
              I build practical software, AI-powered applications, and creative digital experiences while continuously improving my programming, problem-solving, and development skills.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/projects">View My Projects</Button>
              <Button variant="secondary" href={resumeUrl} className="px-6 py-3" target="_blank" rel="noreferrer">
                Download Resume
              </Button>
              <Button variant="secondary" to="/contact">Let&apos;s Connect</Button>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <SocialLinks />
            </div>
          </div>

          <div className="glass-card rounded-[26px] p-6 sm:p-8">
            <div className="rounded-2xl border border-white/10 bg-[#0b1120] p-5">
              <div className="mb-6 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="rounded-xl border border-sky-400/20 bg-sky-500/5 p-3">
                  <p className="text-sky-300">Focus</p>
                  <p className="mt-1 text-base font-semibold text-white">AI • Web • Problem Solving</p>
                </div>
                <div className="rounded-xl border border-violet-400/20 bg-violet-500/5 p-3">
                  <p className="text-violet-300">Currently learning</p>
                  <p className="mt-1 text-base font-semibold text-white">Machine Learning &amp; Full Stack Development</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <p className="text-slate-200">Engineering vision</p>
                  <p className="mt-1 text-base font-semibold text-white">Build useful products that make real impact.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
