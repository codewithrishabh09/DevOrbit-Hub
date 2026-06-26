export function Faq() {
  const faqs = [
    {
      q: "What kind of projects does DevOrbit Hub take on?",
      a: "We specialize in web applications, SaaS platforms, AI integrations, data dashboards, and full-stack enterprise solutions."
    },
    {
      q: "How does the internship program work with client projects?",
      a: "Interns are mentored by senior engineers and contribute to real-world, production-level codebases. We ensure strict quality control while providing hands-on learning experiences."
    },
    {
      q: "What is your typical project timeline?",
      a: "Depending on complexity, an MVP or V1 product usually takes 6 to 12 weeks from discovery to deployment."
    },
    {
      q: "Do you offer post-launch support?",
      a: "Yes. We offer maintenance, analytics integration, and iterative growth development to ensure your product scales reliably."
    }
  ];

  return (
    <div className="flex flex-col gap-4 w-full max-w-3xl mx-auto">
      {faqs.map((faq, i) => (
        <details key={i} className="group border border-[var(--color-border)] rounded-xl bg-[rgba(255,255,255,0.04)] overflow-hidden">
          <summary className="cursor-pointer px-6 py-4 font-bold text-[var(--color-text-primary)] hover:text-[var(--color-brand-light)] transition-colors list-none flex justify-between items-center">
            {faq.q}
            <span className="text-[var(--color-accent)] transform group-open:rotate-180 transition-transform">
              ▼
            </span>
          </summary>
          <p className="px-6 pb-5 m-0 text-[var(--color-text-secondary)] leading-relaxed text-sm">
            {faq.a}
          </p>
        </details>
      ))}
    </div>
  );
}
