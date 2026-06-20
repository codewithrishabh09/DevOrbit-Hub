import { ProjectGrid } from "../components/ProjectGrid.jsx";
import { PageShell } from "../components/PageShell.jsx";
import { SectionHeader } from "../components/SectionHeader.jsx";

export function Portfolio() {
  return (
    <PageShell>
      <section className="page-hero">
        <span className="eyebrow">Premium Project Showcase</span>
        <h1>Projects that communicate capability before a meeting begins.</h1>
        <p>Browse web applications, AI projects, analytics dashboards, mobile concepts, and open source initiatives.</p>
      </section>
      <section className="section">
        <SectionHeader eyebrow="Gallery" title="Search, filter, and explore DevOrbit Hub builds." />
        <ProjectGrid />
      </section>
    </PageShell>
  );
}
