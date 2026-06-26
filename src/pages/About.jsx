import { leaders } from "../data/siteData.js";
import { Button } from "../components/Button.jsx";
import { Card } from "../components/Card.jsx";
import { PageShell } from "../components/PageShell.jsx";
import { SectionHeader } from "../components/SectionHeader.jsx";
import { Timeline } from "../components/Timeline.jsx";

export function About() {
  return (
    <PageShell>
      <section className="pt-24 pb-16 w-full max-w-[1200px] mx-auto px-4 text-center">
        <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[var(--color-accent-cyan)] mb-4">
          About DevOrbit Hub
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-[var(--color-text-primary)] mb-6 max-w-4xl mx-auto">
          Delivering enterprise software while building the next generation of engineers.
        </h1>
        <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-3xl mx-auto">
          DevOrbit Hub operates with a dual purpose: providing high-quality, production-ready software solutions for our clients, and utilizing those real-world projects to train and mentor emerging engineering talent.
        </p>
      </section>

      <section className="py-16 w-full max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Mission", copy: "To bridge the gap between academic theory and production reality by delivering exceptional client projects." },
            { title: "Vision", copy: "To be the most trusted technical partner for growing businesses while serving as the premier launchpad for technical careers." },
            { title: "Culture", copy: "Rigorous standards, continuous feedback loops, relentless execution, and a commitment to mentorship." }
          ].map((item) => (
            <Card key={item.title}>
              <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">{item.title}</h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">{item.copy}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-20 w-full max-w-[1200px] mx-auto px-4">
        <SectionHeader
          eyebrow="Leadership Team"
          title="Experienced engineers driving product delivery."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leaders.map((leader) => {
            const Icon = leader.icon;
            return (
              <Card key={leader.name} className="flex flex-col md:flex-row gap-6 items-start">
                <div className="relative flex-shrink-0 w-32 h-40 rounded-xl overflow-hidden border border-[var(--color-border-accent)] bg-[rgba(255,255,255,0.04)]">
                  {leader.image ? (
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: leader.imagePosition }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[var(--color-accent)]">
                      <Icon size={40} />
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-1">{leader.name}</h3>
                  <span className="block text-sm font-semibold text-[var(--color-accent)] mb-3">{leader.role}</span>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4">
                    {leader.bio}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {leader.skills.map((skill) => (
                      <span key={skill} className="px-2 py-1 rounded border border-[var(--color-border)] bg-[rgba(255,255,255,0.04)] text-xs text-[#dbe5ff]">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <ul className="pl-4 list-disc text-[var(--color-text-muted)] text-sm space-y-1">
                    {leader.highlights.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="py-20 w-full max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <SectionHeader
            align="left"
            eyebrow="Company Trajectory"
            title="Building momentum through execution."
          />
          <Timeline items={[
            "Established core leadership team",
            "Launched initial internship cohorts",
            "Secured first enterprise client contracts",
            "Scaled AI solution offerings",
            "Expanded into full-stack product studio"
          ]} />
        </div>
      </section>

      <section className="my-20 mx-auto w-full max-w-[1200px] px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-14 border border-[var(--color-border)] rounded-2xl bg-[radial-gradient(ellipse_at_20%_10%,rgba(0,229,255,0.12),transparent_40%),linear-gradient(135deg,rgba(79,110,247,0.15),rgba(129,140,248,0.1))]">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[var(--color-text-primary)] max-w-2xl m-0">
            Our goal is to continually scale our delivery capabilities while fostering top engineering talent.
          </h2>
          <Button to="/contact" className="whitespace-nowrap">Meet the team</Button>
        </div>
      </section>
    </PageShell>
  );
}
