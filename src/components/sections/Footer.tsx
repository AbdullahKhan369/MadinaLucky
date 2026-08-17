import type { SVGProps } from "react";
import { Flame, Phone, MessageCircle, Clock, MapPin } from "lucide-react";
import { config, whatsappOrderUrl, callUrl } from "@/config";

// lucide-react no longer ships brand/logo icons, so these two are small
// inline SVGs sized to match the surrounding lucide icon set (h-4 w-4).
function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#0e0e0e] pb-28 pt-16 lg:pb-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-display text-lg font-semibold tracking-wide">
              <Flame className="h-6 w-6 text-[var(--color-primary)]" />
              <span>
                Madina <span className="text-gradient-ember">Lucky</span>
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/50">{config.tagline}</p>
            <div className="mt-4 flex gap-3">
              <a
                href={config.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-full border border-white/15 p-2 text-white/60 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={config.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full border border-white/15 p-2 text-white/60 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wide text-white/90">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[var(--color-primary)]" />
                <a href={callUrl()} className="hover:text-white">{config.phoneDisplay}</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-[var(--color-primary)]" />
                <a
                  href={whatsappOrderUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {config.whatsappDisplay}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wide text-white/90">
              Hours
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm text-white/60">
              <Clock className="h-4 w-4 text-[var(--color-primary)]" />
              {config.hours}
            </p>
          </div>

          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wide text-white/90">
              Address
            </p>
            <p className="mt-4 flex items-start gap-2 text-sm text-white/60">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]" />
              {config.address}
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} {config.fullName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
