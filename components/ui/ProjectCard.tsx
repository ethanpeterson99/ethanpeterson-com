import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const inner = (
    <div className="group relative isolate h-full overflow-hidden rounded-2xl border border-line bg-bg p-8 lg:p-10 transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_30px_70px_-30px_rgba(0,102,255,0.35)]">
      <span
        aria-hidden
        className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent"
      />
      <span
        aria-hidden
        className="absolute inset-0 bg-accent/[0.04] origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 pointer-events-none"
      />

      <div className="relative flex items-start justify-between gap-4 mb-8">
        <p className="text-[11px] uppercase tracking-[0.22em] text-text-primary/55">
          {project.role}
        </p>
        <span className="shrink-0 text-[10px] font-medium uppercase tracking-[0.18em] text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">
          {project.tag}
        </span>
      </div>

      <h3
        className="relative font-display leading-[1.05] mb-4"
        style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}
      >
        {project.name}
      </h3>

      <p className="relative text-text-primary/70 leading-relaxed text-[15px] mb-10 max-w-prose">
        {project.description}
      </p>

      <div className="relative flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] text-text-primary/55 group-hover:text-accent transition-colors duration-300">
        <span>{project.href ? "Visit" : "In progress"}</span>
        <svg
          width="20"
          height="10"
          viewBox="0 0 20 10"
          fill="none"
          className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
        >
          <path
            d="M0 5h18m0 0L14 1m4 4l-4 4"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );

  if (project.href) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full cursor-text"
        aria-label={`${project.name} — ${project.role}`}
      >
        {inner}
      </a>
    );
  }
  return inner;
}
