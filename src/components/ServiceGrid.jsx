import { services } from "../data/siteData.js";
import { Card } from "./Card.jsx";

export function ServiceGrid({ detailed }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {services.map((service) => {
        const Icon = service.icon;
        return (
          <Card key={service.title} className="flex flex-col">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-brand)]/20 to-[var(--color-accent-cyan)]/10 border border-[var(--color-accent-cyan)]/30 text-[var(--color-accent-cyan)] mb-5">
              <Icon size={24} />
            </div>
            <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2.5">
              {service.title}
            </h3>
            {detailed && (
              <span className="inline-flex text-sm font-semibold text-[var(--color-accent)] mb-3">
                {service.stack}
              </span>
            )}
            <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm flex-1">
              {service.copy}
            </p>
          </Card>
        );
      })}
    </div>
  );
}
