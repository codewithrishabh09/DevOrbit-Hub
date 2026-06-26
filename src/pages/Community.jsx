import { Card } from "../components/Card.jsx";
import { PageShell } from "../components/PageShell.jsx";
import { SectionHeader } from "../components/SectionHeader.jsx";
import { Stats } from "../components/Stats.jsx";
import { Timeline } from "../components/Timeline.jsx";
import { communityItems } from "../data/siteData.js";

export function Community() {
  return (
    <PageShell>
      <section className="pt-24 pb-16 w-full max-w-[1200px] mx-auto px-4 text-center">
        <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[var(--color-accent-cyan)] mb-4">
          Developer Ecosystem
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-[var(--color-text-primary)] mb-6 max-w-4xl mx-auto">
          Fostering engineering talent.
        </h1>
        <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-3xl mx-auto">
          Beyond our core client work, DevOrbit Hub actively maintains an ecosystem dedicated to open-source contributions, rigorous technical training, and professional development.
        </p>
      </section>

      <Stats />

      <section className="py-20 w-full max-w-[1200px] mx-auto px-4">
        <SectionHeader
          eyebrow="Community Initiatives"
          title="Ways we give back to the developer community."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {communityItems.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="flex flex-col items-start text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-brand)]/20 to-[var(--color-accent-cyan)]/10 border border-[var(--color-accent-cyan)]/30 text-[var(--color-accent-cyan)] mb-5">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">{item.title}</h3>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                  Structured programs designed to elevate coding standards and technical architecture skills.
                </p>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="py-20 w-full max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <SectionHeader
            align="left"
            eyebrow="Milestones"
            title="Recognizing technical excellence."
            copy="We publicly acknowledge significant contributions to our internal tooling, open-source repositories, and exceptional performance during internship cycles."
          />
          <Timeline items={[
            "Quarterly Open Source Sprint",
            "Monthly Architecture Reviews",
            "Intern Showcase Presentations",
            "Technical Mentorship Awards",
            "Engineering Blog Contributions"
          ]} />
        </div>
      </section>
    </PageShell>
  );
}
