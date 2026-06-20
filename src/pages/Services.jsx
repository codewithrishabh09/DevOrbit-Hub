import { ServiceGrid } from "../components/ServiceGrid.jsx";
import { PageShell } from "../components/PageShell.jsx";
import { SectionHeader } from "../components/SectionHeader.jsx";
import { Timeline } from "../components/Timeline.jsx";
import { Button } from "../components/Button.jsx";

export function Services() {
  return (
    <PageShell>
      <section className="page-hero">
        <span className="eyebrow">Premium Service Showcase</span>
        <h1>Software services for founders, teams, and institutions ready to ship.</h1>
        <p>From polished web platforms to AI prototypes and analytics dashboards, DevOrbit Hub delivers practical technology with premium execution.</p>
      </section>
      <section className="section">
        <SectionHeader eyebrow="Capabilities" title="Choose a focused service or bring us the full product challenge." />
        <ServiceGrid detailed />
      </section>
      <section className="section split-section">
        <SectionHeader align="left" eyebrow="Process" title="A clear path from requirement to production." />
        <Timeline items={["Discovery", "UX and architecture", "Build sprint", "QA and refinement", "Launch", "Growth iteration"]} />
      </section>
      <section className="cta-band"><h2>Have a web app, dashboard, AI idea, or cloud project in mind?</h2><Button to="/contact">Request proposal</Button></section>
    </PageShell>
  );
}
