import { Card } from "../components/Card.jsx";
import { PageShell } from "../components/PageShell.jsx";
import { SectionHeader } from "../components/SectionHeader.jsx";
import { Stats } from "../components/Stats.jsx";
import { Timeline } from "../components/Timeline.jsx";
import { communityItems } from "../data/siteData.js";

export function Community() {
  return (
    <PageShell>
      <section className="page-hero">
        <span className="eyebrow">Developer Community Hub</span>
        <h1>A place for builders to practice, collaborate, and grow in public.</h1>
        <p>Challenges, hackathons, events, workshops, resources, and open source contributions for developers who want momentum.</p>
      </section>
      <Stats />
      <section className="section">
        <SectionHeader eyebrow="Community Programs" title="Multiple ways to learn by building." />
        <div className="card-grid">{communityItems.map((item) => { const Icon = item.icon; return <Card key={item.title}><div className="card-icon"><Icon /></div><h3>{item.title}</h3><p>Join structured activities that strengthen skills, collaboration, and professional confidence.</p></Card>; })}</div>
      </section>
      <section className="section split-section">
        <SectionHeader align="left" eyebrow="Achievement Wall" title="Developer showcase, contribution milestones, and community wins." />
        <Timeline items={["Weekly challenges", "Monthly showcase", "Open source sprint", "Mentor reviews", "Builder leaderboard"]} />
      </section>
    </PageShell>
  );
}
