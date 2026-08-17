import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { deals } from "@/data/deals";
import { PriceTag } from "@/components/ui/price-tag";
import { Button } from "@/components/ui/button";
import { whatsappOrderUrl } from "@/config";
import { SectionHeading } from "@/components/sections/SectionHeading";

export function Deals() {
  return (
    <section id="deals" className="relative bg-[#0e0e0e] py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeading
          eyebrow="Limited-Time"
          title="Featured Deals"
          subtitle="Hand-picked combos, made for sharing — order straight to WhatsApp."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {deals.map((deal, i) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-[var(--color-card-line)] bg-[var(--color-card)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={deal.image}
                  alt={deal.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/10 to-transparent" />
                <PriceTag
                  price={deal.price}
                  size="md"
                  className="absolute right-4 top-4"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold uppercase tracking-wide">
                  {deal.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{deal.subtitle}</p>
                <Button asChild size="sm" className="mt-4 w-full">
                  <a
                    href={whatsappOrderUrl(`Hello Madina Lucky, I want to order: ${deal.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" /> Order Now
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

