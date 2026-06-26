import { ServiceGrid } from "../components/ServiceGrid.jsx";
import { PageShell } from "../components/PageShell.jsx";
import { SectionHeader } from "../components/SectionHeader.jsx";
import { Timeline } from "../components/Timeline.jsx";
import { Button } from "../components/Button.jsx";

export function Services() {
  return (
    <PageShell>
      <section className="pt-24 pb-16 w-full max-w-[1200px] mx-auto px-4 text-center">
        <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[var(--color-accent-cyan)] mb-4">
          Client Services
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-[var(--color-text-primary)] mb-6 max-w-4xl mx-auto">
          Production-grade engineering for ambitious companies.
        </h1>
        <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-3xl mx-auto">
          We offer comprehensive software development services tailored to enterprise standards. From complex web platforms to AI integration, we deliver robust solutions that scale.
        </p>
      </section>

      <section className="py-20 w-full max-w-[1200px] mx-auto px-4">
        <SectionHeader
          eyebrow="Capabilities"
          title="End-to-end technical execution."
        />
        <ServiceGrid detailed />
      </section>

      <section className="py-20 w-full max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <SectionHeader
            align="left"
            eyebrow="Delivery Process"
            title="A structured path to production."
            copy="Our development lifecycle is designed to minimize risk, ensure quality through rigorous code reviews, and deliver on time."
          />
          <Timeline items={[
            "Requirements Discovery & Technical Scoping",
            "System Architecture & UX Design",
            "Iterative Build Sprints",
            "Strict QA & Code Review Cycles",
            "Staging & Client UAT",
            "Production Launch & Handover",
            "Ongoing Analytics & Support"
          ]} />
        </div>
      </section>

      <section className="my-20 mx-auto w-full max-w-[1200px] px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-14 border border-[var(--color-border)] rounded-2xl bg-[radial-gradient(ellipse_at_20%_10%,rgba(0,229,255,0.12),transparent_40%),linear-gradient(135deg,rgba(79,110,247,0.15),rgba(129,140,248,0.1))]">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[var(--color-text-primary)] max-w-2xl m-0">
            Have a complex technical requirement? Let's discuss your project's scope.
          </h2>
          <Button to="/contact" className="whitespace-nowrap">Request Proposal</Button>
        </div>
      </section>
    </PageShell>
  );
}
