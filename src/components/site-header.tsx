import { Link } from "@tanstack/react-router";
import { Menu as MenuIcon, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { useBasket } from "@/context/basket";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { to: "/menu", label: "Menu" },
  { to: "/locations", label: "Locations" },
  { to: "/gallery", label: "Gallery" },
  { to: "/order", label: "Order" },
  { to: "/gift-vouchers", label: "Gift Vouchers" },
  { to: "/loyalty", label: "Loyalty" },
  { to: "/careers", label: "Careers" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { count } = useBasket();

  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-forest-deep/95 text-forest-foreground backdrop-blur supports-[backdrop-filter]:bg-forest-deep/80">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded focus:bg-gold focus:px-3 focus:py-2 focus:text-gold-foreground"
      >
        Skip to content
      </a>
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:grid-cols-[auto_minmax(0,1fr)_auto]">
        <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Aysu Restaurants home">
          <span className="font-display text-2xl tracking-[0.35em] text-gold">AYSU</span>
          <span className="hidden text-[10px] uppercase tracking-[0.28em] text-forest-foreground/60 sm:inline">
            Turkish Kitchen
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden justify-center lg:flex">
          <ul className="flex flex-wrap items-center gap-5 text-xs uppercase tracking-[0.16em]">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-forest-foreground/80 transition-colors hover:text-gold"
                  activeProps={{ className: "text-gold" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-end gap-2">
          <Link
            to="/order"
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors hover:bg-gold/10"
            aria-label={`Basket, ${count} item${count === 1 ? "" : "s"}`}
          >
            <ShoppingBag className="h-4 w-4" aria-hidden="true" />
            {count > 0 ? (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-gold px-1 text-[10px] font-bold text-gold-foreground">
                {count}
              </span>
            ) : null}
          </Link>
          <ThemeToggle />
          <Link
            to="/book"
            className="hidden rounded-sm bg-gold px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-foreground transition-opacity hover:opacity-90 sm:inline-block"
          >
            Book a table
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-gold lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <MenuIcon className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-gold/20 lg:hidden">
          <ul className="mx-auto max-w-7xl px-4 py-2 sm:px-6">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block border-b border-gold/10 py-3 text-sm uppercase tracking-[0.18em] text-forest-foreground/85"
                  activeProps={{ className: "text-gold" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/book"
                onClick={() => setOpen(false)}
                className="my-3 block rounded-sm bg-gold px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-gold-foreground"
              >
                Book a table
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}