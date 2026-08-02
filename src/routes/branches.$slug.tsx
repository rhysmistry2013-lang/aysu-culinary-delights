import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Accessibility, Car, MapPin, Phone, Star } from "lucide-react";
import hero from "@/assets/hero-spread.jpg";
import interior from "@/assets/interior.jpg";
import shish from "@/assets/dish-lamb-shish.jpg";
import mezze from "@/assets/dish-mezze.jpg";
import iskender from "@/assets/dish-iskender.jpg";
import dessert from "@/assets/dessert.jpg";
import { Reveal } from "@/components/reveal";
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
    const title = `${b.name} | Turkish Restaurant in ${b.shortName}`;
    const description = `Visit ${b.name} at ${b.addressLines.join(", ")}, ${b.postcode}. Opening hours, parking, accessibility, menu, booking and takeaway.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
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
  { src: shish, alt: "Lamb shish from the charcoal grill" },
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
    priceRange: "££",
    address: {
      "@type": "PostalAddress",
      streetAddress: b.addressLines[0],
      addressLocality: "London",
      postalCode: b.postcode,
      addressCountry: "GB",
    },
    ...(b.rating
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: String(b.rating.score),
            reviewCount: String(b.rating.count),
          },
        }
      : {}),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative isolate flex min-h-[60dvh] items-end overflow-hidden bg-forest-deep">
        <img
          src={hero}
          alt={`Food served at ${b.name}`}
          width={1920}
          height={1280}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-deep via-forest-deep/60 to-transparent" />
        <div className="mx-auto w-full max-w-7xl px-4 pb-14 pt-28 text-forest-foreground sm:px-6">
          <p className="eyebrow">Aysu Restaurants</p>
          <h1 className="mt-4 text-4xl tracking-tight sm:text-6xl">{b.name}</h1>
          <p className="mt-4 max-w-xl text-forest-foreground/80">
            {b.addressLines.join(", ")}, {b.postcode}
          </p>
          {b.rating ? (
            <p className="mt-3 flex items-center gap-2 text-sm text-gold">
              <Star className="h-4 w-4 fill-gold" aria-hidden="true" />
              {b.rating.score} from {b.rating.count} Google reviews
            </p>
          ) : null}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/book" className="rounded-sm bg-gold px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-foreground">
              Book a table
            </Link>
            <Link to="/order" className="rounded-sm border border-gold px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold hover:bg-gold/10">
              Order takeaway
            </Link>
            <Link to="/menu" className="rounded-sm border border-forest-foreground/30 px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em]">
              View menu
            </Link>
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
              className="h-[420px] w-full rounded-sm border-0"
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

            <h3 className="mt-8 flex items-center gap-2 font-display text-xl text-gold">
              <Car className="h-4 w-4" aria-hidden="true" /> Parking
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">{b.parking}</p>

            <h3 className="mt-6 flex items-center gap-2 font-display text-xl text-gold">
              <Accessibility className="h-4 w-4" aria-hidden="true" /> Accessibility
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">{b.accessibility}</p>

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
            </div>

            {b.note ? (
              <p className="mt-6 rounded-sm border border-border bg-card p-4 text-xs italic text-muted-foreground">
                {b.note}
              </p>
            ) : null}
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/60 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-3xl">Photo gallery</h2>
          <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-5">
            {photos.map((p) => (
              <li key={p.alt}>
                <img src={p.src} alt={p.alt} loading="lazy" className="h-44 w-full rounded-sm object-cover" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
        <h2 className="text-3xl">Customer reviews</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Placeholder feed — ready to connect to the Google Reviews API for this branch.
        </p>
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            ["Multi Vitamins", "An absolute best experience from start to finish.", 5],
            ["Jola Jolah", "Elegant and clean, yet comfortable and welcoming.", 5],
            ["Anonymous guest", "Generous portions and lovely outdoor tables.", 5],
          ].map(([name, text, stars]) => (
            <li key={name as string} className="rounded-sm border border-border bg-card p-6">
              <div className="flex gap-0.5" aria-label={`${stars} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    aria-hidden="true"
                    className={`h-4 w-4 ${s < (stars as number) ? "fill-gold text-gold" : "text-muted-foreground/30"}`}
                  />
                ))}
              </div>
              <blockquote className="mt-3 text-sm text-muted-foreground">“{text as string}”</blockquote>
              <p className="mt-3 text-sm font-semibold">{name as string}</p>
            </li>
          ))}
        </ul>
      </section>

      <nav aria-label="Other branches" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <h2 className="text-2xl">Other Aysu restaurants</h2>
        <ul className="mt-4 flex flex-wrap gap-3">
          {branches
            .filter((o) => o.slug !== b.slug)
            .map((o) => (
              <li key={o.slug}>
                <Link
                  to="/branches/$slug"
                  params={{ slug: o.slug }}
                  className="inline-block rounded-sm border border-gold px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-gold hover:bg-gold/10"
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