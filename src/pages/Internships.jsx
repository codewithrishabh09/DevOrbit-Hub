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
      <section className="pt-24 pb-16 w-full max-w-[1200px] mx-auto px-4 text-center">
        <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[var(--color-accent-cyan)] mb-4">
          Internship Program
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-[var(--color-text-primary)] mb-6 max-w-4xl mx-auto">
          Learn by shipping real code to production.
        </h1>
        <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-3xl mx-auto">
          Our internships aren't simulated exercises. You will be assigned to actual client projects, participate in rigorous code reviews, and learn exactly what it takes to build software at an enterprise standard.
        </p>
      </section>

      <section className="py-20 w-full max-w-[1200px] mx-auto px-4">
        <SectionHeader
          eyebrow="Open Positions"
          title="Current internship tracks."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {internships.map((role) => (
            <Card key={role} className="flex flex-col">
              <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">{role}</h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6 flex-1">
                Contribute directly to live project repositories, adhere to professional coding standards, and learn under senior mentorship.
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
            eyebrow="Program Benefits"
            title="What you gain from DevOrbit Hub."
            copy="We provide the structure and professional environment necessary to transform academic knowledge into hireable industry experience."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {internshipBenefits.map((item) => (
              <span key={item} className="flex items-center gap-3 px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[rgba(255,255,255,0.04)] text-sm text-[#dbe5ff] font-medium">
                <CheckCircle2 size={18} className="text-[var(--color-success)] flex-shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 w-full max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <SectionHeader
            align="left"
            eyebrow="Selection Process"
            title="Rigorous but transparent."
          />
          <Timeline items={process} />
        </div>
      </section>

      <section className="py-20 w-full max-w-[1200px] mx-auto px-4">
        <SectionHeader
          eyebrow="FAQ"
          title="Common internship questions."
        />
        <Faq />
      </section>
    </PageShell>
  );
}
