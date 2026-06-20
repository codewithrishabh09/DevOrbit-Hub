import { Github, Linkedin, Mail, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { navItems } from "../routes/routes.jsx";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <Link className="brand" to="/">
            <span className="brand-mark"><Rocket size={18} /></span>
            <span>DevOrbit Hub</span>
          </Link>
          <p>Learn. Build. Share. Grow.</p>
          <p>Software development, AI solutions, analytics, cloud systems, internship programs, and developer community.</p>
        </div>
        <div>
          <h3>Company</h3>
          {navItems.slice(1, 6).map((item) => <Link key={item.path} to={item.path}>{item.label}</Link>)}
        </div>
        <div>
          <h3>Opportunities</h3>
          <Link to="/internships">Internships</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/community">Community</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <div>
          <h3>Connect</h3>
          <a href="mailto:hello@devorbithub.com"><Mail size={16} /> hello@devorbithub.com</a>
          <a href="https://github.com" target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 DevOrbit Hub. All rights reserved.</span>
        <span>Designed for founders, developers, students, and ambitious teams.</span>
      </div>
    </footer>
  );
}
