import { motion } from "framer-motion";
import { MapPin, Clock, MessageCircle, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { config, whatsappOrderUrl } from "@/config";

export function Hero() {
  return (
    <section
      id="top"
      className="ember-noise relative flex min-h-[100svh] items-center overflow-hidden bg-[#0e0e0e] pt-28 pb-16"
    >
      {/* backdrop image */}
      <div className="absolute inset-0">
        <img
          src="/deals/chest-broast.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/85 to-[#0e0e0e]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0e] via-transparent to-[#0e0e0e]/60" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/40 bg-[var(--color-primary)]/10 px-4 py-1.5 font-display text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-secondary)]"
        >
          North Karachi&apos;s Bar B.Q &amp; Fast Food
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-4xl font-display text-[13vw] font-bold uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl"
        >
          Madina <span className="text-gradient-ember">Lucky</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-3 font-display text-2xl font-medium uppercase tracking-wide text-white/90 sm:text-3xl"
        >
          Premium BBQ · Burgers · Rolls · Fast Food
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
        >
          Charcoal-grilled tikka, hand-rolled kababs, and crispy fast food —
          made fresh every night and on your table fast.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6 flex flex-wrap items-center gap-5 text-sm text-white/70"
        >
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-[var(--color-secondary)]" />
            {config.hours}
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-[var(--color-secondary)]" />
            {config.addressShort}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Button asChild size="lg">
            <a href={whatsappOrderUrl()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" /> Order on WhatsApp
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={config.googleMapsUrl} target="_blank" rel="noopener noreferrer">
              <Navigation className="h-5 w-5" /> Get Directions
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
