import { motion } from "framer-motion";
import { ArrowUpRight, BrainCircuit, CheckCircle2, Code2, Database, GitBranch, ShieldCheck, Terminal, Zap } from "lucide-react";
import { reveal, stagger } from "../animations/reveal.js";
import { Button } from "../components/Button.jsx";
import { Card } from "../components/Card.jsx";
import { PageShell } from "../components/PageShell.jsx";
import { ProjectGrid } from "../components/ProjectGrid.jsx";
import { SectionHeader } from "../components/SectionHeader.jsx";
import { ServiceGrid } from "../components/ServiceGrid.jsx";
import { Stats } from "../components/Stats.jsx";
import { technologies, testimonials } from "../data/siteData.js";

export function Home() {
  return (
    <PageShell>
      <section className="hero">
        <motion.div className="hero-content" variants={stagger} initial="hidden" animate="visible">
          <motion.span className="eyebrow" variants={reveal}>Future of Technology</motion.span>
          <motion.h1 variants={reveal}>Building The Future Through Code, AI & Innovation</motion.h1>
          <motion.p variants={reveal}>Empowering businesses and developers through cutting-edge software solutions, AI technologies, real-world projects, and innovation.</motion.p>
          <motion.div className="hero-actions" variants={reveal}>
            <Button to="/services">Explore Services</Button>
            <Button to="/internships" variant="secondary">Join Internship</Button>
            <Button to="/portfolio" variant="ghost">View Projects</Button>
          </motion.div>
        </motion.div>
        <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }}>
          <div className="code-cockpit">
            <div className="code-window">
              <div className="window-bar">
                <span />
                <span />
                <span />
                <strong>devorbit.ai</strong>
              </div>
              <div className="code-body">
                <div className="line"><span>01</span><code>const company = "DevOrbit Hub";</code></div>
                <div className="line"><span>02</span><code>build({"{"} web, ai, analytics {"}"});</code></div>
                <div className="line active"><span>03</span><code>deploy.future("startup-ready");</code></div>
                <div className="line"><span>04</span><code>mentor(developers).ship(realProjects);</code></div>
                <div className="line"><span>05</span><code>scale.clients.with(cloudSystems);</code></div>
              </div>
              <div className="terminal-strip">
                <Terminal size={16} />
                <span>npm run launch</span>
                <strong>ready in 517ms</strong>
              </div>
            </div>

            <div className="system-card ai-card">
              <BrainCircuit size={18} />
              <span>AI pipeline</span>
              <strong>98%</strong>
            </div>
            <div className="system-card api-card">
              <Database size={18} />
              <span>API health</span>
              <strong>online</strong>
            </div>
            <div className="system-card git-card">
              <GitBranch size={18} />
              <span>Deploy</span>
              <strong>main</strong>
            </div>

            <div className="code-metrics">
              <div><CheckCircle2 size={16} /><span>Production QA</span></div>
              <div><Code2 size={16} /><span>Full-stack</span></div>
              <div><Zap size={16} /><span>Fast launch</span></div>
            </div>
          </div>
        </motion.div>
      </section>

      <Stats />

      <section className="section">
        <SectionHeader eyebrow="Company Introduction" title="A software studio, learning ecosystem, and builder community in one orbit." copy="DevOrbit Hub blends execution with mentorship: we design and build modern software while helping developers gain real-world experience." />
        <div className="feature-row">
          {["Client-ready engineering", "Internship-first learning", "AI-enabled products"].map((item) => (
            <Card key={item}><ShieldCheck className="inline-icon" /><h3>{item}</h3><p>Professional systems, thoughtful processes, and measurable outcomes for ambitious teams.</p></Card>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeader eyebrow="Services Overview" title="Everything needed to take an idea from concept to launch." />
        <ServiceGrid />
      </section>

      <section className="section split-section">
        <SectionHeader align="left" eyebrow="Why Choose DevOrbit Hub" title="Startup speed with engineering discipline." copy="We combine product thinking, strong UI craft, backend reliability, AI awareness, and community energy so every project has both polish and purpose." />
        <div className="stack-panel">
          {technologies.map((tech) => (
            <div key={tech.group}>
              <strong>{tech.group}</strong>
              <div className="tag-row">{tech.items.map((item) => <span key={item}>{item}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeader eyebrow="Featured Projects" title="Premium project showcase built for trust." />
        <ProjectGrid />
      </section>

      <section className="section">
        <SectionHeader eyebrow="Internship Highlights" title="Real project experience for developers who want proof, not just promises." />
        <div className="feature-row">
          {["Offer Letter", "Mentorship", "Portfolio Building", "Certificate"].map((item) => <Card key={item}><h3>{item}</h3><p>Structured learning with review loops, tasks, project outcomes, and professional documentation.</p></Card>)}
        </div>
      </section>

      <section className="section">
        <SectionHeader eyebrow="Testimonials" title="Trusted by builders, learners, and growing teams." />
        <div className="feature-row">
          {testimonials.map((item) => <Card key={item.name}><p className="quote">"{item.quote}"</p><h3>{item.name}</h3><span className="stack-line">{item.role}</span></Card>)}
        </div>
      </section>

      <section className="cta-band">
        <div>
          <span className="eyebrow">Latest Updates</span>
          <h2>New internship cohorts, AI experiments, and startup builds are always in motion.</h2>
        </div>
        <Button to="/contact">Build with us <ArrowUpRight size={16} /></Button>
      </section>
    </PageShell>
  );
}
