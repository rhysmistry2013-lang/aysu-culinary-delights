import { useEffect, useRef, useState } from "react";
import { Phone, X } from "lucide-react";
import { branches, telHref } from "@/data/branches";
import { bookingUrl } from "@/config/site";

type Mode = "order" | "book";

/**
 * "Order now" / "Book a table" both open a small branch chooser.
 * - Ordering: uses the branch `orderUrl` from src/data/branches.ts when set,
 *   otherwise offers the branch telephone number (which always works).
 * - Booking: uses `bookingUrl` from src/config/site.ts when set, otherwise
 *   offers the branch telephone number.
 */
export function BranchActionButton({
  mode,
  className,
  children,
}: {
  mode: Mode;
  className?: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const heading = mode === "order" ? "Order now" : "Book a table";

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        {children}
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/60 p-4 sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-label={heading}
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="w-full max-w-md rounded-sm border border-gold/25 bg-card p-6 text-card-foreground shadow-xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow">{heading}</p>
                <h2 className="mt-2 font-display text-2xl">Choose your restaurant</h2>
              </div>
              <button
                ref={closeRef}
                type="button"
                aria-label="Close"
                onClick={() => setOpen(false)}
                className="rounded-full border border-border p-2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <ul className="mt-6 space-y-3">
              {branches.map((b) => {
                const link = mode === "order" ? b.orderUrl : bookingUrl;
                return (
                  <li key={b.slug}>
                    {link ? (
                      <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between gap-3 rounded-sm border border-gold bg-gold/10 px-5 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-gold"
                      >
                        {b.shortName}
                        <span className="text-[11px] normal-case tracking-normal">
                          {mode === "order" ? "Order online" : "Book online"}
                        </span>
                      </a>
                    ) : (
                      <a
                        href={telHref(b.phone)}
                        className="flex items-center justify-between gap-3 rounded-sm border border-gold px-5 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-gold transition-colors hover:bg-gold/10"
                      >
                        <span>{b.shortName}</span>
                        <span className="flex items-center gap-2 text-[11px] normal-case tracking-normal">
                          <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                          {b.phone}
                        </span>
                      </a>
                    )}
                    <p className="mt-1 px-1 text-xs text-muted-foreground">
                      {b.addressLines[0]}, {b.postcode}
                    </p>
                  </li>
                );
              })}
            </ul>

            <p className="mt-5 text-xs text-muted-foreground">
              {mode === "order"
                ? "Takeaway orders are taken over the phone."
                : "Tables are reserved over the phone with the restaurant team."}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
