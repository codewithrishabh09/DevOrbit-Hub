import { useState } from "react";
import { projects } from "../data/siteData.js";
import { Button } from "./Button.jsx";
import { Card } from "./Card.jsx";

export function ProjectGrid() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors border ${
                filter === c
                  ? "bg-[rgba(0,229,255,0.14)] text-[var(--color-text-primary)] border-[rgba(0,229,255,0.4)]"
                  : "bg-[rgba(255,255,255,0.06)] text-[var(--color-text-secondary)] border-[var(--color-border)] hover:border-[rgba(0,229,255,0.3)]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((project) => (
          <Card key={project.title} className="p-0 overflow-hidden flex flex-col group">
            <div className="relative overflow-hidden w-full aspect-video">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)] mb-2">
                {project.category}
              </span>
              <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-3">{project.title}</h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4 flex-1">
                {project.copy}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded border border-[var(--color-border)] bg-[rgba(255,255,255,0.04)] text-xs text-[#dbe5ff]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <Button variant="secondary" icon={false}>View Case Study</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
