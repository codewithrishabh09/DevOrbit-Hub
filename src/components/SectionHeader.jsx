export function SectionHeader({ eyebrow, title, copy, align = "center" }) {
  const alignClass = align === "left" ? "text-left items-start" : "text-center items-center mx-auto";
  const maxWidthClass = align === "left" ? "max-w-3xl" : "max-w-4xl";

  return (
    <div className={`flex flex-col gap-3 mb-10 ${alignClass}`}>
      {eyebrow && (
        <span className="text-xs font-extrabold uppercase tracking-widest text-[var(--color-accent-cyan)] mb-1">
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-[var(--color-text-primary)] m-0 ${maxWidthClass}`}>
        {title}
      </h2>
      {copy && (
        <p className={`text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mt-2 ${maxWidthClass}`}>
          {copy}
        </p>
      )}
    </div>
  );
}
