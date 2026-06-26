import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const variants = {
  primary:
    "bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-accent)] text-white shadow-[0_8px_24px_rgba(79,110,247,0.25)]",
  secondary:
    "bg-[rgba(255,255,255,0.08)] border border-[var(--color-border-accent)] text-[var(--color-text-primary)]",
  ghost:
    "bg-transparent border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-accent)] shadow-none",
};

export function Button({ to, children, variant = "primary", icon = true, onClick, type }) {
  const classes = `inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 rounded-lg font-semibold text-sm hover:-translate-y-0.5 transition-all duration-200 ${variants[variant] || variants.primary}`;

  if (to) {
    return (
      <Link className={classes} to={to}>
        <span>{children}</span>
        {icon && <ArrowRight size={16} />}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} type={type}>
      <span>{children}</span>
      {icon && <ArrowRight size={16} />}
    </button>
  );
}
