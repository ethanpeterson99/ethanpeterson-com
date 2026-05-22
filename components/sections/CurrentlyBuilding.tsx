"use client";

import { m } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/lib/projects";

export function CurrentlyBuilding() {
  return (
    <section className="py-24 lg:py-32 border-b border-line">
      <Container>
        <m.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-end justify-between mb-14 lg:mb-20 gap-8"
        >
          <h2
            className="font-display tracking-tight leading-[1.02]"
            style={{ fontSize: "clamp(32px, 5.5vw, 64px)" }}
          >
            Currently building
          </h2>
          <span className="hidden md:block text-[11px] uppercase tracking-[0.22em] text-text-primary/45">
            §02 / Index
          </span>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {projects.map((project, i) => (
            <m.div
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: (i % 2) * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <ProjectCard project={project} />
            </m.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
