import { motion } from "framer-motion";
import { Flame, Gem, Wallet, Rocket, Users } from "lucide-react";
import { SectionHeading } from "@/components/sections/SectionHeading";

const points = [
  { icon: Flame, title: "Fresh BBQ", desc: "Grilled to order over live charcoal — never pre-cooked, never reheated." },
  { icon: Gem, title: "Premium Ingredients", desc: "Quality chicken, beef & spices sourced fresh every single day." },
  { icon: Wallet, title: "Pocket Friendly", desc: "Restaurant-quality taste at prices built for everyday ordering." },
  { icon: Rocket, title: "Fast Delivery", desc: "Hot, fresh, and at your door — quickly, every time." },
  { icon: Users, title: "Family Friendly", desc: "Deals and portions made for sharing with the whole family." },
];

export function WhyChooseUs() {
  return (
    <section className="relative bg-[#0e0e0e] py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeading eyebrow="The Madina Lucky Standard" title="Why Choose Us" />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-[var(--color-card-line)] bg-[var(--color-card)] p-6 text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-ember)]">
                <p.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold uppercase tracking-wide">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
