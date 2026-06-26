import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { navItems } from "../routes/routes.jsx";

export function Footer() {
  return (
    <footer className="relative z-1 w-full max-w-[1200px] mx-auto px-4 pt-12 pb-8" style={{ width: "min(1200px, calc(100% - 32px))" }}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
        {/* Brand Column */}
        <div>
          <Link className="flex items-center gap-2.5 font-extrabold text-[var(--color-text-primary)] mb-4" to="/">
            <span className="inline-grid place-items-center w-9 h-9 rounded-lg overflow-hidden bg-[rgba(255,255,255,0.08)] p-0.5">
              <img src="/assets/logo.jpeg" alt="" className="w-full h-full rounded-md object-cover" />
            </span>
            <span>DevOrbit Hub</span>
          </Link>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-1">
            Production-focused software studio.
          </p>
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
            We build client projects with production quality while training interns through hands-on, real-world experience.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-[var(--color-text-primary)] font-semibold mb-4 text-sm uppercase tracking-wider">Company</h3>
          {navItems.slice(1, 5).map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block py-1.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Opportunities */}
        <div>
          <h3 className="text-[var(--color-text-primary)] font-semibold mb-4 text-sm uppercase tracking-wider">Opportunities</h3>
          <Link to="/internships" className="block py-1.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-200">Internships</Link>
          <Link to="/careers" className="block py-1.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-200">Careers</Link>
          <Link to="/community" className="block py-1.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-200">Community</Link>
          <Link to="/blog" className="block py-1.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-200">Blog</Link>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-[var(--color-text-primary)] font-semibold mb-4 text-sm uppercase tracking-wider">Connect</h3>
          <a href="mailto:hello@devorbithub.com" className="flex items-center gap-2 py-1.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-200">
            <Mail size={14} /> hello@devorbithub.com
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 py-1.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-200">
            <Github size={14} /> GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 py-1.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-200">
            <Linkedin size={14} /> LinkedIn
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 py-1.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-200">
            <Twitter size={14} /> Twitter
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col sm:flex-row justify-between gap-3 pt-5 text-xs text-[var(--color-text-muted)]">
        <span>© 2026 DevOrbit Hub. All rights reserved.</span>
        <span>Built for founders, developers, and ambitious teams.</span>
      </div>
    </footer>
  );
}
