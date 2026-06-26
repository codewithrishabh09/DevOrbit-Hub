import { Search } from "lucide-react";
import { Card } from "../components/Card.jsx";
import { PageShell } from "../components/PageShell.jsx";
import { SectionHeader } from "../components/SectionHeader.jsx";
import { blogPosts } from "../data/siteData.js";
import { Button } from "../components/Button.jsx";

export function Blog() {
  return (
    <PageShell>
      <section className="pt-24 pb-16 w-full max-w-[1200px] mx-auto px-4 text-center">
        <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[var(--color-accent-cyan)] mb-4">
          Engineering & Strategy Blog
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-[var(--color-text-primary)] mb-6 max-w-4xl mx-auto">
          Insights from production environments.
        </h1>
        <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-3xl mx-auto">
          Technical writing focused on enterprise software architecture, AI implementation strategies, and methodologies for integrating internships with client delivery.
        </p>
      </section>

      <section className="py-20 w-full max-w-[1200px] mx-auto px-4">
        <div className="max-w-2xl mx-auto mb-12">
          <div className="flex items-center gap-3 h-14 px-4 border border-[var(--color-border)] rounded-xl bg-[rgba(255,255,255,0.04)] focus-within:border-[var(--color-border-accent)] transition-colors">
            <Search size={20} className="text-[var(--color-text-muted)]" />
            <input
              type="text"
              placeholder="Search articles by topic or keyword..."
              className="flex-1 bg-transparent text-[var(--color-text-primary)] outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.title} className="flex flex-col group cursor-pointer">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[var(--color-accent)]">{post.category}</span>
                <span className="text-sm font-medium text-[var(--color-text-muted)]">{post.read}</span>
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-3 group-hover:text-[var(--color-brand-light)] transition-colors">
                {post.title}
              </h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                Actionable perspectives from the DevOrbit Hub engineering team.
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section className="my-20 mx-auto w-full max-w-[1200px] px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-14 border border-[var(--color-border)] rounded-2xl bg-[radial-gradient(ellipse_at_20%_10%,rgba(0,229,255,0.12),transparent_40%),linear-gradient(135deg,rgba(79,110,247,0.15),rgba(129,140,248,0.1))]">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[var(--color-text-primary)] m-0 mb-2">
              Subscribe for technical insights.
            </h2>
            <p className="text-[var(--color-text-secondary)]">Receive updates on architectural patterns, AI solutions, and our latest project case studies.</p>
          </div>
          <form className="flex w-full md:max-w-md gap-3">
            <input
              type="email"
              placeholder="Corporate email address"
              className="flex-1 h-12 px-4 rounded-lg border border-[var(--color-border)] bg-[rgba(255,255,255,0.06)] text-[var(--color-text-primary)] outline-none focus:border-[var(--color-brand)]"
            />
            <Button type="button">Subscribe</Button>
          </form>
        </div>
      </section>
    </PageShell>
  );
}
