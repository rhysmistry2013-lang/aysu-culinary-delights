import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Accessibility, Car, MapPin, Phone } from "lucide-react";
import hero from "@/assets/hero-spread.jpg";
import interior from "@/assets/interior.jpg";
import shish from "@/assets/dish-lamb-shish.jpg";
import mezze from "@/assets/dish-mezze.jpg";
import iskender from "@/assets/dish-iskender.jpg";
import dessert from "@/assets/dessert.jpg";
import { Reveal } from "@/components/reveal";
import { BranchActionButton } from "@/components/branch-action";
import { hoursDisclaimer } from "@/config/site";
import {
  branches,
  getBranch,
  mapsDirectionsUrl,
  mapsEmbedUrl,
  telHref,
  type Branch,
} from "@/data/branches";

export const Route = createFileRoute("/branches/$slug")({
  loader: ({ params }) => {
    const branch = getBranch(params.slug);
    if (!branch) throw notFound();
    return { branch };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Branch not found | Aysu" }, { name: "robots", content: "noindex" }] };
    }
    const b = loaderData.branch;
    const title = `${b.name} | Turkish Restaurant & Grill in ${b.shortName}`;
    const description = `Aysu in ${b.shortName}: ${b.addressLines.join(", ")}, ${b.postcode}. Turkish kebabs, grills, mezze and breakfast. Address, phone, opening times, map and menu.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
      ],
    };
  },
  component: BranchPage,
  notFoundComponent: BranchNotFound,
});

function BranchNotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-32 text-center">
      <h1 className="text-4xl">Branch not found</h1>
      <p className="mt-4 text-muted-foreground">We couldn't find that Aysu restaurant.</p>
      <Link to="/locations" className="mt-8 inline-block rounded-sm bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-foreground">
        All locations
      </Link>
    </div>
  );
}

const photos = [
  { src: interior, alt: "Dining room interior" },
  { src: shish, alt: "Lamb shish from the grill" },
  { src: mezze, alt: "Cold mezze platter" },
  { src: iskender, alt: "İskender kebab" },
  { src: dessert, alt: "Baklava and Turkish tea" },
];

function BranchPage() {
  const { branch } = Route.useLoaderData();
  const b = branch as Branch;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: b.name,
    servesCuisine: "Turkish",
    telephone: b.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: b.addressLines[0],
      addressLocality: "London",
      postalCode: b.postcode,
      addressCountry: "GB",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative isolate flex min-h-[55dvh] items-end overflow-hidden bg-forest-deep">
        <img
          src={hero}
          alt={`Food served at ${b.name}`}
          width={1920}
          height={1280}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-deep via-forest-deep/60 to-transparent" />
        <div className="mx-auto w-full max-w-7xl px-4 pb-14 pt-24 text-forest-foreground sm:px-6">
          <p className="eyebrow">Aysu Restaurants</p>
          <h1 className="mt-4 text-3xl tracking-tight sm:text-5xl md:text-6xl">{b.name}</h1>
          <p className="mt-4 max-w-xl text-forest-foreground/80">
            {b.addressLines.join(", ")}, {b.postcode}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/menu" className="rounded-sm bg-gold px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-foreground transition-opacity hover:opacity-90">
              View menu
            </Link>
            <a
              href={telHref(b.phone)}
              className="rounded-sm border border-gold px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold transition-colors hover:bg-gold/10"
            >
              Call {b.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <iframe
              title={`Map showing ${b.name}`}
              src={mapsEmbedUrl(b.mapsQuery)}
              loading="lazy"
              className="h-[320px] w-full rounded-sm border-0 md:h-[420px]"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl">Visit us</h2>
            <p className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
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

            <h3 className="mt-8 font-display text-xl text-gold">Opening times</h3>
            <dl className="mt-3 space-y-1 text-sm">
              {b.hours.map((h) => (
                <div key={h.day} className="flex justify-between gap-4 border-b border-border/60 py-1.5">
                  <dt className="text-muted-foreground">{h.day}</dt>
                  <dd>{h.time}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-2 text-xs text-muted-foreground">{hoursDisclaimer}</p>

            {b.parking ? (
              <>
                <h3 className="mt-8 flex items-center gap-2 font-display text-xl text-gold">
                  <Car className="h-4 w-4" aria-hidden="true" /> Parking
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.parking}</p>
              </>
            ) : null}

            {b.accessibility ? (
              <>
                <h3 className="mt-6 flex items-center gap-2 font-display text-xl text-gold">
                  <Accessibility className="h-4 w-4" aria-hidden="true" /> Accessibility
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.accessibility}</p>
              </>
            ) : null}

            <ul className="mt-6 flex flex-wrap gap-2">
              {b.facilities.map((f) => (
                <li key={f} className="rounded-full border border-border px-3 py-1 text-xs uppercase tracking-wider">
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={mapsDirectionsUrl(b.mapsQuery)}
                target="_blank"
                rel="noreferrer"
                className="rounded-sm bg-gold px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-gold-foreground transition-opacity hover:opacity-90"
              >
                Directions
              </a>
              <BranchActionButton
                mode="book"
                className="rounded-sm border border-gold px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-gold transition-colors hover:bg-gold/10"
              >
                Book a table
              </BranchActionButton>
              <BranchActionButton
                mode="order"
                className="rounded-sm border border-border px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] transition-colors hover:border-gold/60"
              >
                Order now
              </BranchActionButton>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/60 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-3xl">Photo gallery</h2>
          <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-5">
            {photos.map((p) => (
              <li key={p.alt}>
                <img src={p.src} alt={p.alt} loading="lazy" className="h-32 w-full rounded-sm object-cover md:h-44" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <nav aria-label="Other branches" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl">Other Aysu restaurants</h2>
        <ul className="mt-4 flex flex-wrap gap-3">
          {branches
            .filter((o) => o.slug !== b.slug)
            .map((o) => (
              <li key={o.slug}>
                <Link
                  to="/branches/$slug"
                  params={{ slug: o.slug }}
                  className="inline-block rounded-sm border border-gold px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-gold transition-colors hover:bg-gold/10"
                >
                  {o.shortName}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </>
  );
}
