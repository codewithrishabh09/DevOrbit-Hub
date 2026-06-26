import { Button } from "../components/Button.jsx";
import { Card } from "../components/Card.jsx";
import { PageShell } from "../components/PageShell.jsx";
import { SectionHeader } from "../components/SectionHeader.jsx";
import { Timeline } from "../components/Timeline.jsx";
import { careerRoles } from "../data/siteData.js";

export function Careers() {
  return (
    <PageShell>
      <section className="pt-24 pb-16 w-full max-w-[1200px] mx-auto px-4 text-center">
        <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[var(--color-accent-cyan)] mb-4">
          Open Opportunities
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-[var(--color-text-primary)] mb-6 max-w-4xl mx-auto">
          Join an engineering-first culture.
        </h1>
        <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-3xl mx-auto">
          We are seeking experienced professionals who are passionate about delivering high-quality enterprise software and dedicated to mentoring the next generation of engineers.
        </p>
      </section>

      <section className="py-20 w-full max-w-[1200px] mx-auto px-4">
        <SectionHeader
          eyebrow="Roles"
          title="Current leadership and engineering positions."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careerRoles.map((role) => (
            <Card key={role} className="flex flex-col">
              <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">{role}</h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6 flex-1">
                Take ownership of complex client architectures, lead development sprints, and actively participate in our internship code review cycles.
              </p>
              <Button to="/contact" variant="ghost" className="w-full">Apply Now</Button>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-20 w-full max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <SectionHeader
            align="left"
            eyebrow="Hiring Process"
            title="Technical capability & mentorship focus."
          />
          <Timeline items={[
            "Initial Application Review",
            "Technical Phone Screen",
            "Architecture & System Design Interview",
            "Mentorship Scenario Assessment",
            "Final Discussion with Founders",
            "Formal Offer"
          ]} />
        </div>
      </section>

      <section className="my-20 mx-auto w-full max-w-[1200px] px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-14 border border-[var(--color-border)] rounded-2xl bg-[radial-gradient(ellipse_at_20%_10%,rgba(0,229,255,0.12),transparent_40%),linear-gradient(135deg,rgba(79,110,247,0.15),rgba(129,140,248,0.1))]">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[var(--color-text-primary)] max-w-2xl m-0">
            Growth, architectural ownership, and startup energy define our daily work environment.
          </h2>
          <Button to="/contact" className="whitespace-nowrap">Start Application</Button>
        </div>
      </section>
    </PageShell>
  );
}
