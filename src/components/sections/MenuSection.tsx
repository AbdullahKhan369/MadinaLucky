import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { menuPosters, popularItems } from "@/data/menu";
import { SectionHeading } from "@/components/sections/SectionHeading";

export function MenuSection() {
  const [active, setActive] = useState<string | null>(null);
  const activePoster = menuPosters.find((p) => p.id === active);

  return (
    <section id="menu" className="relative bg-[#0e0e0e] py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeading
          eyebrow="Full Menu"
          title="Menu Gallery"
          subtitle="Everything on the grill, in the roll, and on the tray — tap any card to zoom in."
        />

        {/* Popular quick-scan strip */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {popularItems.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-3 rounded-full border border-[var(--color-card-line)] bg-[var(--color-card)] px-4 py-2"
            >
              <span className="text-sm font-medium text-white/85">{item.name}</span>
              <span className="font-tag text-sm font-bold text-[var(--color-secondary)]">
                Rs {item.price}
              </span>
            </div>
          ))}
        </div>

        {/* Poster grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {menuPosters.map((poster, i) => (
            <motion.button
              key={poster.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => setActive(poster.id)}
              className="group relative overflow-hidden rounded-2xl border border-[var(--color-card-line)] bg-[var(--color-card)] text-left"
            >
              <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[16/10]">
                <img
                  src={poster.image}
                  alt={poster.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                  <ZoomIn className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold uppercase tracking-wide">
                  {poster.title}
                </h3>
                <p className="mt-1 text-sm text-white/60">{poster.caption}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activePoster && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-5"
            onClick={() => setActive(null)}
          >
            <motion.img
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              src={activePoster.image}
              alt={activePoster.title}
              className="max-h-[90vh] max-w-full rounded-xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
