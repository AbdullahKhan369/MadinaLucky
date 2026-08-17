import { motion } from "framer-motion";
import { Bike, ShoppingBag, UtensilsCrossed } from "lucide-react";
import { SectionHeading } from "@/components/sections/SectionHeading";

const options = [
  { icon: Bike, title: "Home Delivery", desc: "Order on WhatsApp and we'll bring it hot to your door." },
  { icon: ShoppingBag, title: "Take Away", desc: "Call ahead, skip the wait, pick up fresh and fast." },
  { icon: UtensilsCrossed, title: "Dine In", desc: "Come sit down and enjoy it fresh off the grill." },
];

export function Delivery() {
  return (
    <section className="relative bg-[#0e0e0e] py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeading eyebrow="However You Like It" title="Delivery Options" />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {options.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center rounded-2xl border border-[var(--color-card-line)] bg-gradient-to-b from-[var(--color-card)] to-[#141414] p-10 text-center"
            >
              <o.icon className="h-10 w-10 text-[var(--color-primary)]" strokeWidth={1.8} />
              <h3 className="mt-5 font-display text-xl font-semibold uppercase tracking-wide">
                {o.title}
              </h3>
              <p className="mt-2 text-sm text-white/60">{o.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
