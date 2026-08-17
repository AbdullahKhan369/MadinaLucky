import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { reviews } from "@/data/reviews";
import { SectionHeading } from "@/components/sections/SectionHeading";

export function Reviews() {
  return (
    <section id="reviews" className="relative bg-[#0e0e0e] py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeading
          eyebrow="Word On The Street"
          title="Customer Reviews"
          subtitle="What North Karachi is saying about Madina Lucky."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-2xl border border-[var(--color-card-line)] bg-[var(--color-card)] p-6"
            >
              <Quote className="h-8 w-8 text-[var(--color-primary)]/40" />
              <p className="mt-3 text-base leading-relaxed text-white/80">{r.text}</p>
              <div className="mt-5 flex items-center justify-between">
                <div>
                  <p className="font-display text-sm font-semibold uppercase tracking-wide">
                    {r.name}
                  </p>
                  <p className="text-xs text-white/50">{r.area}</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className={`h-4 w-4 ${
                        idx < r.rating
                          ? "fill-[var(--color-secondary)] text-[var(--color-secondary)]"
                          : "text-white/20"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
