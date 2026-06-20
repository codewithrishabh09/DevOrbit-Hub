import { CheckCircle2 } from "lucide-react";
import { Button } from "../components/Button.jsx";
import { Card } from "../components/Card.jsx";
import { Faq } from "../components/Faq.jsx";
import { PageShell } from "../components/PageShell.jsx";
import { SectionHeader } from "../components/SectionHeader.jsx";
import { Timeline } from "../components/Timeline.jsx";
import { internshipBenefits, internships, process } from "../data/siteData.js";

export function Internships() {
  return (
    <PageShell>
      <section className="page-hero">
        <span className="eyebrow">Modern Internship Portal</span>
        <h1>Real projects, real feedback, and a portfolio you can stand behind.</h1>
        <p>DevOrbit Hub internships are designed for students and emerging developers who want structured tasks, mentorship, and visible outcomes.</p>
      </section>
      <section className="section">
        <SectionHeader eyebrow="Open Roles" title="Pick your track and start building." />
        <div className="card-grid">{internships.map((role) => <Card key={role}><h3>{role}</h3><p>Work on practical assignments, code reviews, project milestones, and launch-focused learning.</p><Button to="/contact" variant="ghost">Apply Now</Button></Card>)}</div>
      </section>
      <section className="section split-section">
        <SectionHeader align="left" eyebrow="Benefits" title="Professional proof for your next opportunity." />
        <div className="benefit-grid">{internshipBenefits.map((item) => <span key={item}><CheckCircle2 size={18} />{item}</span>)}</div>
      </section>
      <section className="section"><SectionHeader eyebrow="Process" title="Transparent from application to onboarding." /><Timeline items={process} /></section>
      <section className="section"><SectionHeader eyebrow="FAQ" title="Common internship questions." /><Faq /></section>
    </PageShell>
  );
}
