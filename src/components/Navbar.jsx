import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { navItems } from "../routes/routes.jsx";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 flex items-center gap-4 w-full max-w-[1200px] mx-auto mt-3 px-5 py-3 rounded-full border border-[var(--color-border)] bg-[rgba(5,8,22,0.80)] backdrop-blur-2xl shadow-[var(--shadow-card)]"
      style={{ width: "min(1200px, calc(100% - 32px))" }}
    >
      {/* Brand */}
      <NavLink
        className="flex items-center gap-2.5 font-extrabold text-[var(--color-text-primary)] whitespace-nowrap"
        to="/"
        onClick={() => setOpen(false)}
        aria-label="DevOrbit Hub home"
      >
        <span className="inline-grid place-items-center w-9 h-9 rounded-lg overflow-hidden bg-[rgba(255,255,255,0.08)] p-0.5">
          <img src="/assets/logo.jpeg" alt="" className="w-full h-full rounded-md object-cover" />
        </span>
        <span className="text-base">DevOrbit Hub</span>
      </NavLink>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex items-center justify-center flex-1 gap-0.5" aria-label="Primary navigation">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? "bg-[rgba(255,255,255,0.10)] text-[var(--color-text-primary)]"
                  : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[rgba(255,255,255,0.06)]"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* Desktop CTA */}
      <NavLink
        className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-accent)] text-white text-sm font-semibold shadow-[0_8px_24px_rgba(79,110,247,0.3)] hover:-translate-y-0.5 transition-transform duration-200"
        to="/contact"
      >
        Start a Project
      </NavLink>

      {/* Mobile Toggle */}
      <button
        className="lg:hidden ml-auto inline-grid place-items-center w-10 h-10 rounded-lg border border-[var(--color-border)] bg-[rgba(255,255,255,0.06)] text-[var(--color-text-primary)]"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 top-[calc(100%+8px)] grid p-2 rounded-2xl border border-[var(--color-border)] bg-[rgba(5,8,22,0.96)] backdrop-blur-2xl shadow-[var(--shadow-elevated)]"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "bg-[rgba(255,255,255,0.10)] text-[var(--color-text-primary)]"
                      : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[rgba(255,255,255,0.06)]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-accent)] text-white text-sm font-semibold"
            >
              Start a Project
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
