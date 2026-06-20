import { Search } from "lucide-react";
import { Card } from "../components/Card.jsx";
import { PageShell } from "../components/PageShell.jsx";
import { SectionHeader } from "../components/SectionHeader.jsx";
import { blogPosts } from "../data/siteData.js";

export function Blog() {
  return (
    <PageShell>
      <section className="page-hero">
        <span className="eyebrow">Modern Tech Blog</span>
        <h1>Ideas on AI, software, internships, startups, analytics, and developer growth.</h1>
        <p>Practical writing for people who want to understand technology and use it to build better careers or businesses.</p>
      </section>
      <section className="section">
        <SectionHeader eyebrow="Featured Articles" title="Readable, useful, and made for builders." />
        <div className="search-box blog-search"><Search size={18} /><input placeholder="Search articles, tags, topics" /></div>
        <div className="card-grid">
          {blogPosts.map((post) => <Card key={post.title} className="blog-card"><span className="eyebrow">{post.category}</span><h3>{post.title}</h3><p>Actionable perspective from the DevOrbit Hub team for founders, students, and product builders.</p><span className="stack-line">{post.read}</span></Card>)}
        </div>
      </section>
      <section className="cta-band"><h2>Subscribe for launch notes, internship updates, and practical engineering insights.</h2><form className="newsletter"><input placeholder="Email address" /><button>Subscribe</button></form></section>
    </PageShell>
  );
}
