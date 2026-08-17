import { motion } from "framer-motion";
import { SectionHeading } from "@/components/sections/SectionHeading";

const images = [
  { src: "/gallery/gallery-1.jpg", alt: "Chest broast with fries and mayo dip" },
  { src: "/gallery/gallery-2.jpg", alt: "Five zinger burgers on a wooden board" },
  { src: "/gallery/gallery-3.jpg", alt: "Crispy leg broast with fries" },
  { src: "/gallery/gallery-4.jpg", alt: "Charcoal-grilled chicken leg tikka" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative bg-[#0e0e0e] py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeading
          eyebrow="Fresh Off The Grill"
          title="Food Gallery"
          subtitle="A closer look at what's coming out of the kitchen tonight."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-[var(--color-card-line)]"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
