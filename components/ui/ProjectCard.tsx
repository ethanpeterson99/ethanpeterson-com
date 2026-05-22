import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const inner = (
    <div className="group h-full rounded-2xl border border-text-light/10 dark:border-text-dark/15 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg bg-bg-light dark:bg-bg-dark">
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="font-display text-3xl md:text-4xl leading-tight">
          {project.name}
        </h3>
        <span className="shrink-0 text-xs font-medium uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full">
          {project.tag}
        </span>
      </div>
      <p className="text-sm uppercase tracking-wider text-text-light/60 dark:text-text-dark/60 mb-3">
        {project.role}
      </p>
      <p className="text-text-light/80 dark:text-text-dark/80 leading-relaxed">
        {project.description}
      </p>
    </div>
  );

  if (project.href) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        {inner}
      </a>
    );
  }
  return inner;
}
