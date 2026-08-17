export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">
        {eyebrow}
      </span>
      <h2
        className={`mt-3 font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl ${
          light ? "text-[#0e0e0e]" : "text-white"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base ${light ? "text-black/60" : "text-white/60"}`}>{subtitle}</p>
      )}
    </div>
  );
}
