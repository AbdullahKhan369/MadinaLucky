import { cn } from "@/lib/utils";

/**
 * Signature element of this build: a circular "ember" price badge,
 * echoing the hand-made price bursts already used on Madina Lucky's
 * real flyers (see the "400 RPS." burst on the Chest Broast poster).
 * Reused consistently across Deals + Menu so the whole site feels
 * like one continuous brand system rather than a generic template.
 */
export function PriceTag({
  price,
  className,
  size = "md",
}: {
  price: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: "h-14 w-14 text-[11px]",
    md: "h-20 w-20 text-sm",
    lg: "h-24 w-24 text-base",
  };

  return (
    <div
      className={cn(
        "relative flex shrink-0 -rotate-6 items-center justify-center rounded-full font-tag font-bold text-white shadow-[0_10px_20px_-6px_rgba(255,61,0,0.7)]",
        "bg-gradient-to-br from-[var(--color-ember)] via-[var(--color-primary)] to-[var(--color-secondary)]",
        sizes[size],
        className
      )}
    >
      <span className="absolute inset-[3px] rounded-full border border-dashed border-white/30" />
      <span className="relative leading-none">Rs {price}</span>
    </div>
  );
}
