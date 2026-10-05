import SectionTitle from '../components/SectionTitle';

const highlights = [
  {
    title: 'Software Development',
    text: 'I enjoy designing and building reliable digital experiences with strong problem-solving fundamentals and a practical mindset.'
  },
  {
    title: 'Artificial Intelligence',
    text: 'I am driven by AI systems that can solve real-world problems, automate workflows, and improve decision-making.'
  },
  {
    title: 'Machine Learning',
    text: 'I explore models, patterns, and data-driven learning approaches to turn raw information into meaningful insights.'
  },
  {
    title: 'Web Development',
    text: 'I build responsive, engaging interfaces with clean architecture, usability, and modern front-end practices.'
  },
  {
    title: 'Problem Solving',
    text: 'I value analytical thinking, debugging, and efficient implementation to tackle technical challenges with confidence.'
  }
];

export default function About() {
  return (
    <div className="page-shell">
      <SectionTitle
        eyebrow="About"
        title="About Me"
        description="I am a Computer Science Engineering student at Reva University, Bengaluru, with a strong interest in software development, AI, and building practical digital products."
      />

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-card rounded-[28px] p-7">
          <h3 className="mb-4 text-2xl font-semibold text-white">My Journey</h3>
          <p className="mb-4 text-slate-300">
            I am passionate about turning ideas into working software and exploring the intersection of development and intelligent systems. My focus lies in understanding how technology can solve meaningful problems while creating experiences that are both functional and user-friendly.
          </p>
          <p className="mb-4 text-slate-300">
            Through continuous learning, personal projects, and practical coding practice, I am building a strong foundation in programming, software design, AI concepts, and web engineering.
          </p>
          <p className="text-slate-300">
            I am especially interested in the ways AI can support innovation across industries, while also refining my capabilities in problem solving, system thinking, and product-oriented development.
          </p>
        </div>

        <div className="glass-card rounded-[28px] p-7">
          <h3 className="mb-4 text-2xl font-semibold text-white">Quick Profile</h3>
          <ul className="space-y-3 text-slate-300">
            <li><span className="font-semibold text-white">Name:</span> Jashwanth Kumar</li>
            <li><span className="font-semibold text-white">Degree:</span> BTech – Computer Science Engineering</li>
            <li><span className="font-semibold text-white">University:</span> Reva University, Bengaluru</li>
            <li><span className="font-semibold text-white">Role:</span> Computer Science Engineering Student &amp; Aspiring AI Developer</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {highlights.map((card) => (
          <div key={card.title} className="glass-card rounded-2xl p-6 transition hover:-translate-y-1 hover:border-sky-400/30">
            <h4 className="mb-3 text-xl font-semibold text-white">{card.title}</h4>
            <p className="text-slate-300">{card.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="glass-card rounded-[28px] p-7">
          <h3 className="mb-4 text-2xl font-semibold text-white">Interests</h3>
          <p className="text-slate-300">
            I am interested in AI applications, software engineering, web technologies, data-driven insights, coding challenges, and building projects that combine creativity with technical depth.
          </p>
        </div>

        <div className="glass-card rounded-[28px] p-7">
          <h3 className="mb-4 text-2xl font-semibold text-white">Career Goals</h3>
          <p className="text-slate-300">
            My goal is to grow as an AI-focused developer by building meaningful software, learning advanced technologies, and contributing to impactful solutions in the technology space.
          </p>
        </div>
      </div>

      <div className="mt-12 glass-card rounded-[28px] p-7">
        <h3 className="mb-4 text-2xl font-semibold text-white">Current Learning</h3>
        <p className="text-slate-300">
          I am currently strengthening my skills in software development, machine learning, web technologies, and project execution while building practical applications that demonstrate my learning and growth.
        </p>
      </div>
    </div>
  );
}
