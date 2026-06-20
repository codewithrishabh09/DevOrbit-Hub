import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navItems } from "../routes/routes.jsx";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <NavLink className="brand" to="/" onClick={() => setOpen(false)} aria-label="DevOrbit Hub home">
        <span className="brand-mark logo-mark">
          <img src="/assets/logo.jpeg" alt="" />
        </span>
        <span>DevOrbit Hub</span>
      </NavLink>

      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <NavLink key={item.path} to={item.path}>{item.label}</NavLink>
        ))}
      </nav>

      <NavLink className="nav-cta magnetic" to="/contact">Start a Project</NavLink>
      <button className="icon-button mobile-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {open ? <X /> : <Menu />}
      </button>

      {open && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} onClick={() => setOpen(false)}>{item.label}</NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
