import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const inner = (
    <div className="group relative isolate h-full overflow-hidden rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#141414] p-8 lg:p-10 transition-[transform,border-color,box-shadow,background-color] duration-500 hover:-translate-y-1.5 hover:border-accent/40 hover:bg-[#0066FF]/[0.04] dark:hover:bg-[#0066FF]/[0.06] hover:shadow-[0_20px_60px_rgba(0,102,255,0.08)] dark:hover:shadow-[0_20px_60px_rgba(0,102,255,0.15)]">
      <span
        aria-hidden
        className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#0066FF]"
      />

      <div className="relative flex items-start justify-between gap-4 mb-8">
        <p className="text-[11px] uppercase tracking-[0.22em] text-[#777770] dark:text-[#666660]">
          {project.role}
        </p>
        <span className="shrink-0 text-[10px] font-medium uppercase tracking-[0.18em] text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">
          {project.tag}
        </span>
      </div>

      <h3
        className="relative font-display leading-[1.05] mb-4 text-[#111111] dark:text-[#F0F0EB]"
        style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}
      >
        {project.name}
      </h3>

      <p className="relative text-[#444440] dark:text-[#888880] leading-relaxed text-[15px] mb-10 max-w-prose">
        {project.description}
      </p>

      <div className="relative flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] text-[#777770] dark:text-[#666660] group-hover:text-accent transition-colors duration-300">
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
