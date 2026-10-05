import SectionTitle from '../components/SectionTitle';
import { skills } from '../data/skills';

export default function Skills() {
  return (
    <div className="page-shell">
      <SectionTitle
        eyebrow="Skills"
        title="Technical Skills"
        description="I am continuously learning and strengthening my foundation across programming, web technologies, AI, and software engineering tools."
      />

      <div className="grid-3">
        {skills.map((category) => (
          <div key={category.title} className="glass-card rounded-[26px] p-6">
            <h3 className="mb-5 text-xl font-semibold text-white">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-sky-400/20 bg-sky-500/5 px-3 py-2 text-sm font-medium text-sky-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
