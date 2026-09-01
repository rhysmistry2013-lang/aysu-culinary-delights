import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { BranchActionButton } from "@/components/branch-action";
import { hoursDisclaimer } from "@/config/site";
import { branches, mapsDirectionsUrl, mapsEmbedUrl, telHref } from "@/data/branches";

const title = "Locations | Aysu Turkish Restaurant in Queensbury & Harrow";
const description =
  "Aysu restaurant addresses, phone numbers, opening times, maps and directions for our Queensbury (HA8 5NN) and Harrow (HA3 8HU) branches.";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: LocationsPage,
});

function LocationsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
      <SectionHeading
        eyebrow="Locations"
        title="Find your nearest Aysu"
        intro="Two restaurants in North West London, both serving the full Aysu menu."
      />
      <ul className="mt-14 grid gap-8 md:grid-cols-2">
        {branches.map((b, i) => (
          <li key={b.slug}>
            <Reveal delay={i * 0.08}>
              <article className="h-full overflow-hidden rounded-sm border border-border bg-card">
                <iframe
                  title={`Map showing ${b.name}`}
                  src={mapsEmbedUrl(b.mapsQuery)}
                  loading="lazy"
                  className="h-56 w-full border-0 md:h-64"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="p-6">
                  <h2 className="text-2xl">{b.name}</h2>
                  <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                    <span>
                      {b.addressLines.join(", ")}, {b.postcode}
                    </span>
                  </p>
                  <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                    <a href={telHref(b.phone)} className="hover:text-gold">
                      {b.phone}
                    </a>
                  </p>
                  <dl className="mt-4 space-y-1 text-sm">
                    {b.hours.map((h) => (
                      <div key={h.day} className="flex justify-between gap-4 border-b border-border/60 py-1">
                        <dt className="text-muted-foreground">{h.day}</dt>
                        <dd>{h.time}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-2 text-xs text-muted-foreground">{hoursDisclaimer}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={mapsDirectionsUrl(b.mapsQuery)}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-sm bg-gold px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-gold-foreground transition-opacity hover:opacity-90"
                    >
                      Directions
                    </a>
                    <a
                      href={telHref(b.phone)}
                      className="rounded-sm border border-gold px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-gold transition-colors hover:bg-gold/10"
                    >
                      Call now
                    </a>
                    <Link
                      to="/branches/$slug"
                      params={{ slug: b.slug }}
                      className="rounded-sm border border-border px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] transition-colors hover:border-gold/60"
                    >
                      Branch details
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>

      <div className="mt-12 flex flex-wrap justify-center gap-3">
        <BranchActionButton
          mode="book"
          className="rounded-sm bg-gold px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-foreground transition-opacity hover:opacity-90"
        >
          Book a table
        </BranchActionButton>
        <BranchActionButton
          mode="order"
          className="rounded-sm border border-gold px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold transition-colors hover:bg-gold/10"
        >
          Order now
        </BranchActionButton>
      </div>
    </div>
  );
}
