import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { branches, mapsDirectionsUrl, mapsEmbedUrl, telHref } from "@/data/branches";

const title = "Our Restaurants | Aysu Queensbury & Harrow";
const description =
  "Find your nearest Aysu restaurant. Addresses, phone numbers, opening hours, maps and directions for our Queensbury and Harrow branches.";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
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
        intro="Every branch serves the same charcoal-grill menu with its own daily specials."
      />
      <ul className="mt-14 grid gap-8 lg:grid-cols-2">
        {branches.map((b, i) => (
          <li key={b.slug}>
            <Reveal delay={i * 0.08}>
              <article className="h-full overflow-hidden rounded-sm border border-border bg-card">
                <iframe
                  title={`Map showing ${b.name}`}
                  src={mapsEmbedUrl(b.mapsQuery)}
                  loading="lazy"
                  className="h-64 w-full border-0"
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
                  {b.note ? <p className="mt-3 text-xs italic text-muted-foreground">{b.note}</p> : null}
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={mapsDirectionsUrl(b.mapsQuery)}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-sm bg-gold px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-gold-foreground"
                    >
                      Directions
                    </a>
                    <a
                      href={telHref(b.phone)}
                      className="rounded-sm border border-gold px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-gold hover:bg-gold/10"
                    >
                      Call now
                    </a>
                    <Link
                      to="/branches/$slug"
                      params={{ slug: b.slug }}
                      className="rounded-sm border border-border px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em]"
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
    </div>
  );
}