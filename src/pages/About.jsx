import { leaders } from "../data/siteData.js";
import { Button } from "../components/Button.jsx";
import { Card } from "../components/Card.jsx";
import { PageShell } from "../components/PageShell.jsx";
import { SectionHeader } from "../components/SectionHeader.jsx";
import { Timeline } from "../components/Timeline.jsx";

export function About() {
  return (
    <PageShell>
      <section className="page-hero">
        <span className="eyebrow">About DevOrbit Hub</span>
        <h1>Built for the next generation of software, startups, and developers.</h1>
        <p>DevOrbit Hub exists to help people learn, build, share, and grow through high-quality software development, AI solutions, and practical mentorship.</p>
      </section>
      <section className="section feature-row">
        {["Mission: turn ambition into shipped software.", "Vision: become a trusted technology orbit for startups and developers.", "Culture: curious, precise, generous, and relentlessly practical."].map((item) => <Card key={item}><h3>{item}</h3><p>Every engagement is shaped around clarity, execution, and long-term capability.</p></Card>)}
      </section>
      <section className="section">
        <SectionHeader eyebrow="Leadership Team" title="Founder-led, product-minded, and builder-focused." />
        <div className="leader-grid">
          {leaders.map((leader) => {
            const Icon = leader.icon;
            return (
              <Card key={leader.name} className="leader-card">
                <div className="leader-photo">
                  {leader.image ? (
                    <img src={leader.image} alt={leader.name} style={{ objectPosition: leader.imagePosition }} />
                  ) : (
                    <Icon size={34} />
                  )}
                </div>
                <h3>{leader.name}</h3>
                <span className="stack-line">{leader.role}</span>
                <p>{leader.bio}</p>
                <div className="tag-row">{leader.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
                <ul className="micro-list">{leader.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
              </Card>
            );
          })}
        </div>
      </section>
      <section className="section split-section">
        <SectionHeader align="left" eyebrow="Journey Timeline" title="From learning hub to professional software company." />
        <Timeline items={["Community idea", "Internship ecosystem", "Client services", "AI solution lab", "Startup-ready product studio"]} />
      </section>
      <section className="cta-band">
        <h2>Future goals: scale client delivery, launch AI products, grow developer cohorts, and build an ecosystem people trust.</h2>
        <Button to="/contact">Meet the team</Button>
      </section>
    </PageShell>
  );
}
