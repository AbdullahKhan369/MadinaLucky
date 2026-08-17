import { motion } from "framer-motion";
import { MapPin, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { config } from "@/config";

export function Location() {
  return (
    <section id="location" className="relative bg-[#0e0e0e] py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeading eyebrow="Find Us" title="Location" />

        <div className="mt-14 grid grid-cols-1 gap-8 overflow-hidden rounded-2xl border border-[var(--color-card-line)] bg-[var(--color-card)] lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center gap-6 p-8 lg:p-12"
          >
            <div className="flex items-start gap-4">
              <MapPin className="mt-0.5 h-6 w-6 shrink-0 text-[var(--color-primary)]" />
              <div>
                <p className="font-display text-sm font-semibold uppercase tracking-wide text-white/90">
                  Address
                </p>
                <p className="mt-1 text-white/60">{config.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="mt-0.5 h-6 w-6 shrink-0 text-[var(--color-primary)]" />
              <div>
                <p className="font-display text-sm font-semibold uppercase tracking-wide text-white/90">
                  Opening Hours
                </p>
                <p className="mt-1 text-white/60">{config.hours} · {config.hoursNote}</p>
              </div>
            </div>
            <Button asChild size="lg" className="mt-2 w-fit">
              <a href={config.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                <Navigation className="h-5 w-5" /> Get Directions
              </a>
            </Button>
          </motion.div>

          <div className="min-h-[320px] w-full">
            <iframe
              src={config.googleMapsEmbed}
              title="Madina Lucky Bar B.Q & Fast Food location map"
              className="h-full min-h-[320px] w-full border-0 grayscale contrast-125 invert-[0.92]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
