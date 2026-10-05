import SectionTitle from '../components/SectionTitle';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <div className="page-shell">
      <SectionTitle
        eyebrow="Projects"
        title="Featured Work"
        description="A selection of practical projects and learning-focused builds that reflect my software, data, and AI journey."
      />

      <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article key={project.name} className="glass-card group overflow-hidden rounded-[26px]">
            <div className="h-52 overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
              <p className="mt-3 text-slate-300">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3">
                {project.github && project.github !== '#' ? (
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-sm font-medium text-sky-300 hover:text-white">
                    GitHub
                  </a>
                ) : (
                  <span className="text-sm font-medium text-slate-500">GitHub</span>
                )}

                {project.liveDemo && project.liveDemo !== '#' ? (
                  <a href={project.liveDemo} target="_blank" rel="noreferrer" className="text-sm font-medium text-violet-300 hover:text-white">
                    Live Demo
                  </a>
                ) : (
                  <span className="text-sm font-medium text-slate-500">Live Demo</span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
