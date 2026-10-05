import SectionTitle from '../components/SectionTitle';
import { education } from '../data/education';

export default function Education() {
  return (
    <div className="page-shell">
      <SectionTitle
        eyebrow="Education"
        title="Academic Background"
        description="Building a strong technical foundation through engineering education and focused learning in computer science and emerging technologies."
      />

      <div className="glass-card rounded-[30px] p-7 sm:p-9">
        {education.map((item) => (
          <div key={item.institution}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">{item.status}</p>
            <h3 className="mt-3 text-3xl font-bold text-white">{item.institution}</h3>
            <p className="mt-2 text-xl text-slate-200">{item.degree}</p>
            <p className="mt-2 text-slate-400">{item.location}</p>

            <div className="mt-8">
              <h4 className="mb-4 text-lg font-semibold text-white">Relevant Coursework</h4>
              <div className="flex flex-wrap gap-2">
                {item.coursework.map((course) => (
                  <span key={course} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
