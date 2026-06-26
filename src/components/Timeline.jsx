export function Timeline({ items }) {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-6 p-5 border border-[var(--color-border)] rounded-xl bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.05)] transition-colors"
        >
          <span className="flex-shrink-0 text-xl font-black text-[var(--color-brand-light)]">
            {(index + 1).toString().padStart(2, "0")}
          </span>
          <span className="text-[var(--color-text-primary)] font-medium text-lg">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}
