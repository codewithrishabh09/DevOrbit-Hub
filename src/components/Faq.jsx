export function Faq() {
  const faqs = [
    ["Who can apply for internships?", "Students and self-taught developers with curiosity, discipline, and a portfolio-building mindset."],
    ["Do you work with startups?", "Yes. We support founders with MVPs, dashboards, web apps, AI prototypes, and launch-ready websites."],
    ["Can DevOrbit Hub handle end-to-end delivery?", "Yes. We cover strategy, UX, frontend, backend, database, deployment, and post-launch iteration."],
    ["How do business inquiries work?", "Share your goals through the contact form and the team will respond with scope, timeline, and next steps."]
  ];

  return (
    <div className="faq-list">
      {faqs.map(([question, answer]) => (
        <details key={question}>
          <summary>{question}</summary>
          <p>{answer}</p>
        </details>
      ))}
    </div>
  );
}
