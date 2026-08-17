import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { whatsappOrderUrl, callUrl } from "@/config";

export function StickyMobileBar() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="fixed inset-x-0 bottom-0 z-50 flex gap-3 border-t border-white/10 bg-[#0e0e0e]/95 p-3 backdrop-blur-md lg:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <a
        href={callUrl()}
        className="flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-[var(--color-secondary)] py-3 font-display text-sm font-semibold uppercase tracking-wide text-[var(--color-secondary)]"
      >
        <Phone className="h-4 w-4" /> Call Now
      </a>
      <a
        href={whatsappOrderUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-ember)] py-3 font-display text-sm font-semibold uppercase tracking-wide text-white shadow-[0_8px_20px_-6px_rgba(255,61,0,0.6)]"
      >
        <MessageCircle className="h-4 w-4" /> WhatsApp
      </a>
    </motion.div>
  );
}
