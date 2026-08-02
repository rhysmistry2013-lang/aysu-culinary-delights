import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { branches, telHref } from "@/data/branches";

export function SiteFooter() {
  const [email, setEmail] = useState("");

  return (
    <footer className="border-t border-gold/20 bg-forest-deep text-forest-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="font-display text-3xl tracking-[0.35em] text-gold">AYSU</span>
          <p className="mt-4 max-w-xs text-sm text-forest-foreground/70">
            Indulge in authentic Turkish flavours. Charcoal grills, mezze and warm hospitality across
            North West London.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="https://instagram.com" aria-label="Aysu on Instagram" className="rounded-full border border-gold/30 p-2 text-gold hover:bg-gold/10">
              <Instagram className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="https://facebook.com" aria-label="Aysu on Facebook" className="rounded-full border border-gold/30 p-2 text-gold hover:bg-gold/10">
              <Facebook className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="https://x.com" aria-label="Aysu on X" className="rounded-full border border-gold/30 p-2 text-gold hover:bg-gold/10">
              <Twitter className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="eyebrow">Our Restaurants</h2>
          <ul className="mt-4 space-y-3 text-sm text-forest-foreground/75">
            {branches.map((b) => (
              <li key={b.slug}>
                <Link to="/branches/$slug" params={{ slug: b.slug }} className="hover:text-gold">
                  {b.shortName}
                </Link>
                <div className="text-xs text-forest-foreground/50">
                  {b.addressLines[0]}, {b.postcode}
                </div>
                {b.phone ? (
                  <a href={telHref(b.phone)} className="text-xs hover:text-gold">
                    {b.phone}
                  </a>
                ) : null}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm text-forest-foreground/75">
            {(
              [
                { to: "/menu", label: "Menus" },
                { to: "/book", label: "Book a table" },
                { to: "/locations", label: "Locations" },
                { to: "/gallery", label: "Gallery" },
                { to: "/faq", label: "FAQ" },
                { to: "/contact", label: "Contact" },
                { to: "/privacy", label: "Privacy Policy" },
                { to: "/cookies", label: "Cookie Policy" },
                { to: "/terms", label: "Terms & Conditions" },
              ] as const
            ).map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="hover:text-gold">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow">Newsletter</h2>
          <p className="mt-4 text-sm text-forest-foreground/70">
            Seasonal specials, events and offers — straight to your inbox.
          </p>
          <form
            className="mt-4 flex flex-col gap-2 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("Thanks — you're on the list.");
              setEmail("");
            }}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="min-w-0 flex-1 rounded-sm border border-gold/30 bg-transparent px-3 py-3 text-sm text-forest-foreground placeholder:text-forest-foreground/40"
            />
            <button
              type="submit"
              className="shrink-0 rounded-sm bg-gold px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-foreground"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gold/15 px-4 py-6 text-center text-xs text-forest-foreground/50 sm:px-6">
        © {new Date().getFullYear()} Aysu Restaurants. All rights reserved. Some branch details are
        placeholder content pending confirmation.
      </div>
    </footer>
  );
}