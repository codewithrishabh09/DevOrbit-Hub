import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";
import { Card } from "../components/Card.jsx";
import { Faq } from "../components/Faq.jsx";
import { PageShell } from "../components/PageShell.jsx";
import { SectionHeader } from "../components/SectionHeader.jsx";
import { Button } from "../components/Button.jsx";

export function Contact() {
  return (
    <PageShell>
      <section className="relative pt-24 pb-16 w-full max-w-[1200px] mx-auto px-4 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(79,110,247,0.1),transparent_50%)] pointer-events-none" />
        <div className="relative z-10">
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[var(--color-accent-cyan)] mb-4">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-[var(--color-text-primary)] mb-6 max-w-4xl mx-auto">
            Start a conversation.
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-3xl mx-auto">
            Whether you need an enterprise software solution built from scratch or you're a developer applying for our internship program, we are ready to connect.
          </p>
        </div>
      </section>

      <section className="py-10 w-full max-w-[1200px] mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-10 items-start">
          <Card className="p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-brand)] opacity-[0.03] rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-[rgba(0,229,255,0.1)] flex items-center justify-center text-[var(--color-accent-cyan)]">
                  <MessageSquare size={20} />
                </div>
                <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">Business Inquiry Form</h3>
              </div>
              
              <form className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-[var(--color-text-secondary)] pl-1">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="h-12 px-4 rounded-xl border border-[var(--color-border)] bg-[rgba(255,255,255,0.03)] text-[var(--color-text-primary)] focus:bg-[rgba(255,255,255,0.05)] focus:border-[var(--color-brand-light)] outline-none transition-all duration-200 shadow-inner"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-[var(--color-text-secondary)] pl-1">Corporate Email</label>
                    <input
                      type="email"
                      placeholder="john@company.com"
                      className="h-12 px-4 rounded-xl border border-[var(--color-border)] bg-[rgba(255,255,255,0.03)] text-[var(--color-text-primary)] focus:bg-[rgba(255,255,255,0.05)] focus:border-[var(--color-brand-light)] outline-none transition-all duration-200 shadow-inner"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[var(--color-text-secondary)] pl-1">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="h-12 px-4 rounded-xl border border-[var(--color-border)] bg-[rgba(255,255,255,0.03)] text-[var(--color-text-primary)] focus:bg-[rgba(255,255,255,0.05)] focus:border-[var(--color-brand-light)] outline-none transition-all duration-200 shadow-inner"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[var(--color-text-secondary)] pl-1">Inquiry Type</label>
                  <div className="relative">
                    <select
                      defaultValue=""
                      className="w-full h-12 px-4 rounded-xl border border-[var(--color-border)] bg-[rgba(255,255,255,0.03)] text-[var(--color-text-primary)] focus:bg-[rgba(255,255,255,0.05)] focus:border-[var(--color-brand-light)] outline-none appearance-none transition-all duration-200 shadow-inner"
                    >
                      <option value="" disabled className="bg-[var(--color-bg-soft)] text-[var(--color-text-muted)]">Select an option...</option>
                      <option className="bg-[var(--color-bg-soft)]">Client Project Proposal</option>
                      <option className="bg-[var(--color-bg-soft)]">Internship Application</option>
                      <option className="bg-[var(--color-bg-soft)]">Career Opportunity</option>
                      <option className="bg-[var(--color-bg-soft)]">Partnership</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[var(--color-text-secondary)]">
                      ▼
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[var(--color-text-secondary)] pl-1">Message</label>
                  <textarea
                    placeholder="Provide project details, required scope, or your background..."
                    rows="6"
                    className="p-4 rounded-xl border border-[var(--color-border)] bg-[rgba(255,255,255,0.03)] text-[var(--color-text-primary)] focus:bg-[rgba(255,255,255,0.05)] focus:border-[var(--color-brand-light)] outline-none resize-y min-h-[160px] transition-all duration-200 shadow-inner"
                  />
                </div>

                <div className="mt-4">
                  <Button type="button" className="w-full md:w-auto">Submit Request</Button>
                </div>
              </form>
            </div>
          </Card>

          <div className="flex flex-col gap-5 sticky top-28">
            <Card className="flex flex-col gap-4 p-7 group hover:border-[rgba(0,229,255,0.3)] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-brand)]/20 to-[var(--color-accent-cyan)]/10 border border-[var(--color-accent-cyan)]/30 text-[var(--color-accent-cyan)] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">Email Us</h3>
                <p className="text-[var(--color-text-secondary)] text-sm mb-2">For general queries and proposals</p>
                <a href="mailto:hello@devorbithub.com" className="text-[var(--color-brand-light)] font-medium hover:underline">hello@devorbithub.com</a>
              </div>
            </Card>

            <Card className="flex flex-col gap-4 p-7 group hover:border-[rgba(139,92,246,0.3)] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-brand)]/10 border border-[var(--color-accent)]/30 text-[var(--color-accent)] flex items-center justify-center group-hover:scale-110 transition-transform">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">Headquarters</h3>
                <p className="text-[var(--color-text-secondary)] text-sm mb-2">Our physical operations base</p>
                <span className="text-[var(--color-text-primary)] font-medium">Bangalore, India (Remote-First)</span>
              </div>
            </Card>

            <Card className="flex flex-col gap-4 p-7 group hover:border-[rgba(110,231,183,0.3)] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-success)]/20 to-[var(--color-success)]/5 border border-[var(--color-success)]/30 text-[var(--color-success)] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">Phone</h3>
                <p className="text-[var(--color-text-secondary)] text-sm mb-2">Available for scheduled calls</p>
                <span className="text-[var(--color-text-primary)] font-medium">Available upon request</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 w-full max-w-[1200px] mx-auto px-4">
        <SectionHeader
          eyebrow="FAQ"
          title="Common Questions"
          copy="Quick answers to things you might be wondering before reaching out."
        />
        <Faq />
      </section>
    </PageShell>
  );
}
