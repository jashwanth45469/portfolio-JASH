import SectionTitle from '../components/SectionTitle';

const items = [
  { category: 'Coding', summary: 'Focused on improving logic, data structures, and algorithmic thinking through regular practice.' },
  { category: 'LeetCode', summary: 'Continuing practice with problem-solving exercises and pattern-based challenges.' },
  { category: 'Hackathons', summary: 'Exploring project-based learning opportunities and collaborative problem solving.' },
  { category: 'Projects', summary: 'Building practical portfolio and development projects to demonstrate real-world application of skills.' },
  { category: 'Certifications', summary: 'Working toward relevant learning milestones and technical certifications as they become available.' },
  { category: 'Academic Achievements', summary: 'Maintaining strong academic focus while pursuing technical growth in computer science.' }
];

export default function Achievements() {
  return (
    <div className="page-shell">
      <SectionTitle
        eyebrow="Achievements"
        title="Milestones & Growth"
        description="This section highlights key learning areas and ongoing progress. Update the details as new achievements become available."
      />

      <div className="relative space-y-6 before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-white/10">
        {items.map((item, index) => (
          <div key={item.category} className="relative pl-12">
            <span className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-sky-400/30 bg-sky-500/10 text-sm font-bold text-sky-300">
              {index + 1}
            </span>
            <div className="glass-card rounded-[24px] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">{item.category}</p>
              <p className="mt-3 text-slate-300">{item.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
