"use client";

import { images } from "@/content/site";
import { ProjectCard } from "@/components/ProjectCard";

export function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {images.projects.map((p) => (
        <ProjectCard
          key={p.slug}
          title={p.title}
          subtitle={p.subtitle}
          image={p.image}
          href={`/projects/${p.slug}`}
        />
      ))}
    </div>
  );
}
