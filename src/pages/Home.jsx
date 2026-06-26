import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";
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
      <section className="relative min-h-[calc(100vh-92px)] flex items-center pt-24 pb-16 w-full max-w-[1200px] mx-auto px-4" style={{ width: "min(1200px, calc(100% - 32px))" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[var(--color-accent-cyan)] mb-4">
              Production Software Studio
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-extrabold tracking-tight leading-[1.05] text-[var(--color-text-primary)] mb-6 max-w-3xl">
              We Build Production Software. <br />
              <span className="gradient-text">Interns Learn By Doing.</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-8 max-w-2xl">
              DevOrbit Hub bridges the gap between enterprise client delivery and practical engineering education. We take on real-world projects and build them to scale, while our interns gain hands-on experience under strict technical mentorship.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button to="/services">Explore Services</Button>
              <Button to="/internships" variant="secondary">Join as an Intern</Button>
              <Button to="/portfolio" variant="ghost">View Projects</Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Team collaborating on software"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-bg)]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-card p-4 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white">Client Delivery</span>
                    <span className="text-xs text-[var(--color-text-secondary)]">Production Grade</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[var(--color-success)]/20 flex items-center justify-center border border-[var(--color-success)]/40">
                    <CheckCircle2 size={20} className="text-[var(--color-success)]" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Stats />

      <section className="py-20 w-full max-w-[1200px] mx-auto px-4">
        <SectionHeader
          eyebrow="Company Model"
          title="A dual-engine software studio."
          copy="DevOrbit Hub combines execution with mentorship. We design and build modern software for clients while providing a structured environment for developers to gain real-world experience."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Client-ready Engineering", "Production Environments", "Strict Code Reviews"].map((item) => (
            <Card key={item} className="flex flex-col">
              <ShieldCheck className="text-[var(--color-accent-cyan)] mb-4" size={28} />
              <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">{item}</h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                Professional systems, thoughtful architectural decisions, and measurable outcomes tailored for ambitious enterprise teams.
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-20 w-full max-w-[1200px] mx-auto px-4">
        <SectionHeader
          eyebrow="Services Overview"
          title="End-to-end product delivery."
        />
        <ServiceGrid />
      </section>

      <section className="py-20 w-full max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <SectionHeader
            align="left"
            eyebrow="Technology Stack"
            title="Built with modern, scalable tools."
            copy="We use industry-standard technologies to ensure that every project we deliver is robust, secure, and ready for scale from day one."
          />
          <div className="grid gap-4 p-6 border border-[var(--color-border)] rounded-2xl bg-[rgba(255,255,255,0.02)]">
            {technologies.map((tech) => (
              <div key={tech.group} className="flex flex-col gap-2">
                <strong className="text-sm font-bold text-[var(--color-text-primary)] uppercase tracking-wider">{tech.group}</strong>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item) => (
                    <span key={item} className="px-3 py-1.5 rounded-lg border border-[var(--color-border)] bg-[rgba(255,255,255,0.04)] text-xs text-[#dbe5ff]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 w-full max-w-[1200px] mx-auto px-4">
        <SectionHeader
          eyebrow="Featured Projects"
          title="Our latest client deliveries."
        />
        <ProjectGrid />
      </section>

      <section className="py-20 w-full max-w-[1200px] mx-auto px-4">
        <SectionHeader
          eyebrow="Internship Model"
          title="Real projects. Real expectations."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {["Formal Code Reviews", "Production Access", "Client Exposure", "Mentorship"].map((item) => (
            <Card key={item}>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">{item}</h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                Structured learning integrated directly into live development cycles.
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-20 w-full max-w-[1200px] mx-auto px-4">
        <SectionHeader
          eyebrow="Testimonials"
          title="Trusted by clients and developers."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <Card key={item.name} className="flex flex-col">
              <p className="text-lg italic text-[var(--color-text-secondary)] mb-6 flex-1">"{item.quote}"</p>
              <div>
                <h3 className="text-base font-bold text-[var(--color-text-primary)]">{item.name}</h3>
                <span className="text-sm font-semibold text-[var(--color-accent)]">{item.role}</span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="my-20 mx-auto w-full max-w-[1200px] px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-14 border border-[var(--color-border)] rounded-2xl bg-[radial-gradient(ellipse_at_20%_10%,rgba(0,229,255,0.12),transparent_40%),linear-gradient(135deg,rgba(79,110,247,0.15),rgba(129,140,248,0.1))]">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[var(--color-accent-cyan)] mb-3">
              Ready to start?
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--color-text-primary)] m-0">
              Have a client project or want to join our next cohort?
            </h2>
          </div>
          <Button to="/contact" className="whitespace-nowrap">
            Let's Talk <ArrowUpRight size={18} />
          </Button>
        </div>
      </section>
    </PageShell>
  );
}
