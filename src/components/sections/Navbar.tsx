import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Flame, Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappOrderUrl, callUrl } from "@/config";

const links = [
  { href: "#deals", label: "Deals" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#location", label: "Location" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0e0e0e]/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold tracking-wide">
          <Flame className="h-6 w-6 text-[var(--color-primary)]" strokeWidth={2.5} />
          <span>
            Madina <span className="text-gradient-ember">Lucky</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-sm font-medium uppercase tracking-wider text-white/70 transition-colors hover:text-[var(--color-secondary)]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="ghost" size="sm">
            <a href={callUrl()}>
              <Phone className="h-4 w-4" /> Call
            </a>
          </Button>
          <Button asChild size="sm">
            <a href={whatsappOrderUrl()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" /> Order Now
            </a>
          </Button>
        </div>

        <button
          className="text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="flex flex-col gap-1 border-t border-white/10 bg-[#0e0e0e] px-5 py-4 lg:hidden"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 font-display text-sm font-medium uppercase tracking-wider text-white/80 hover:bg-white/5"
            >
              {l.label}
            </a>
          ))}
        </motion.nav>
      )}
    </header>
  );
}
