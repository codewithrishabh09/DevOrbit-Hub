import { Button } from "../components/Button.jsx";
import { Card } from "../components/Card.jsx";
import { PageShell } from "../components/PageShell.jsx";
import { SectionHeader } from "../components/SectionHeader.jsx";
import { Timeline } from "../components/Timeline.jsx";
import { careerRoles } from "../data/siteData.js";

export function Careers() {
  return (
    <PageShell>
      <section className="page-hero">
        <span className="eyebrow">Open Opportunities</span>
        <h1>Join a company built around learning velocity and product craft.</h1>
        <p>DevOrbit Hub is creating opportunities for engineers, analysts, designers, mentors, and product-minded builders.</p>
      </section>
      <section className="section">
        <SectionHeader eyebrow="Roles" title="Build your career while building meaningful systems." />
        <div className="card-grid">{careerRoles.map((role) => <Card key={role}><h3>{role}</h3><p>Contribute to client projects, internal products, community systems, and mentorship programs.</p><Button to="/contact" variant="ghost">Apply</Button></Card>)}</div>
      </section>
      <section className="section split-section">
        <SectionHeader align="left" eyebrow="Hiring Process" title="Clear, respectful, and skill-focused." />
        <Timeline items={["Apply", "Portfolio review", "Technical conversation", "Practical task", "Final discussion", "Offer"]} />
      </section>
      <section className="cta-band"><h2>Growth, ownership, mentorship, and startup energy are part of the work culture.</h2><Button to="/contact">Start application</Button></section>
    </PageShell>
  );
}
