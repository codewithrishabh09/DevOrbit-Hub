import { Mail, MapPin, Phone } from "lucide-react";
import { Card } from "../components/Card.jsx";
import { Faq } from "../components/Faq.jsx";
import { PageShell } from "../components/PageShell.jsx";
import { SectionHeader } from "../components/SectionHeader.jsx";

export function Contact() {
  return (
    <PageShell>
      <section className="page-hero">
        <span className="eyebrow">Modern Contact Experience</span>
        <h1>Tell DevOrbit Hub what you want to build, join, or explore.</h1>
        <p>Use the form for client projects, internship applications, partnerships, community requests, or general business inquiries.</p>
      </section>
      <section className="section contact-grid">
        <Card className="contact-form-card">
          <h3>Business Inquiry Form</h3>
          <form className="form">
            <input placeholder="Full name" />
            <input placeholder="Email" type="email" />
            <input placeholder="Phone" />
            <select defaultValue="">
              <option value="" disabled>Inquiry type</option>
              <option>Client Project</option>
              <option>Internship Application</option>
              <option>Career Opportunity</option>
              <option>Community Partnership</option>
            </select>
            <textarea placeholder="Project, role, or message" rows="6" />
            <button type="button">Send Message</button>
          </form>
        </Card>
        <div className="contact-side">
          <Card><Mail className="inline-icon" /><h3>Email</h3><p>hello@devorbithub.com</p></Card>
          <Card><Phone className="inline-icon" /><h3>Phone</h3><p>Available on request</p></Card>
          <Card><MapPin className="inline-icon" /><h3>Location</h3><p>Bangalore, India (Remote).</p></Card>
          <div className="map-placeholder">Google Maps Placeholder</div>
        </div>
      </section>
      <section className="section"><SectionHeader eyebrow="FAQ" title="Before you send the message." /><Faq /></section>
    </PageShell>
  );
}
