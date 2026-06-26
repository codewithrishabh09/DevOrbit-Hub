import { stats } from "../data/siteData.js";

export function Stats() {
  return (
    <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-[1200px] mx-auto mb-16 border border-[var(--color-border)] rounded-2xl bg-[rgba(255,255,255,0.04)] backdrop-blur-xl overflow-hidden shadow-xl" style={{ width: "min(1200px, calc(100% - 32px))" }}>
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={`p-8 ${i < stats.length - 1 ? 'border-b sm:border-b-0 sm:border-r border-[var(--color-border)]' : ''}`}
        >
          <strong className="block text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] mb-2">
            {stat.value}
          </strong>
          <span className="text-sm md:text-base text-[var(--color-text-secondary)] font-medium">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
