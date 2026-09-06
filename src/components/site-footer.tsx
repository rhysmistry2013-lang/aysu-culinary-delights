import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { branches, telHref } from "@/data/branches";
import { contactEmail, socialLinks } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-gold/20 bg-forest-deep text-forest-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <span className="font-display text-3xl tracking-[0.35em] text-gold">AYSU</span>
          <p className="mt-4 max-w-xs text-sm text-forest-foreground/70">
            Explore Aysu's menu, locations and restaurant information.
          </p>
          <p className="mt-4 flex items-center gap-2 text-sm text-forest-foreground/70">
            <Mail className="h-4 w-4 text-gold" aria-hidden="true" />
            <a href={`mailto:${contactEmail}`} className="hover:text-gold">
              {contactEmail}
            </a>
          </p>
          {socialLinks.length ? (
            <ul className="mt-5 flex gap-3">
              {socialLinks.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-gold/30 px-3 py-1.5 text-xs text-gold hover:bg-gold/10"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
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
                <a href={telHref(b.phone)} className="text-xs hover:text-gold">
                  {b.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm text-forest-foreground/75">
            {(
              [
                { to: "/menu", label: "Menu" },
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
      </div>

      <div className="border-t border-gold/15 px-4 py-6 text-center text-xs text-forest-foreground/50 sm:px-6">
        © {new Date().getFullYear()} Aysu Restaurant. All rights reserved.
      </div>
    </footer>
  );
}
