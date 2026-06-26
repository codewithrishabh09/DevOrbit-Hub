import { ProjectGrid } from "../components/ProjectGrid.jsx";
import { PageShell } from "../components/PageShell.jsx";
import { SectionHeader } from "../components/SectionHeader.jsx";

export function Portfolio() {
  return (
    <PageShell>
      <section className="pt-24 pb-16 w-full max-w-[1200px] mx-auto px-4 text-center">
        <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[var(--color-accent-cyan)] mb-4">
          Client Portfolio
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-[var(--color-text-primary)] mb-6 max-w-4xl mx-auto">
          Delivered in production.
        </h1>
        <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-3xl mx-auto">
          A showcase of enterprise web applications, AI integrations, analytics dashboards, and internal platforms built by the DevOrbit Hub team.
        </p>
      </section>

      <section className="py-20 w-full max-w-[1200px] mx-auto px-4">
        <ProjectGrid />
      </section>
    </PageShell>
  );
}
