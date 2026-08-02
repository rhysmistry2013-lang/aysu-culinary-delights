import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { MapPin, Phone, Star } from "lucide-react";
import hero from "@/assets/hero-spread.jpg";
import interior from "@/assets/interior.jpg";
import mezze from "@/assets/dish-mezze.jpg";
import shish from "@/assets/dish-lamb-shish.jpg";
import iskender from "@/assets/dish-iskender.jpg";
import dessert from "@/assets/dessert.jpg";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { branches, mapsDirectionsUrl, mapsEmbedUrl, telHref } from "@/data/branches";
import { gbp } from "@/lib/format";

const title = "Aysu Restaurants | Authentic Turkish Dining in London";
const description =
  "Charcoal-grilled kebabs, fresh mezze and all-day Turkish breakfast at Aysu in Queensbury and Harrow. Book a table, order takeaway or find your nearest branch.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

const featured = [
  { name: "Mix Grill", price: 21.5, image: shish, blurb: "Lamb shish, chicken shish and lamb kofte from the charcoal grill." },
  { name: "İskender", price: 15.5, image: iskender, blurb: "Doner on warm bread with yoghurt and tomato butter sauce." },
  { name: "Mix Cold Starter", price: 14.5, image: mezze, blurb: "Hummus, cacık, potato salad, tarama and aubergine salad." },
  { name: "Baklava & Çay", image: dessert, blurb: "Pistachio baklava with Turkish tea. Price to be confirmed." },
];

const reviews = [
  {
    name: "Multi Vitamins",
    meta: "Local Guide · 270 reviews",
    text: "We had an absolute best experience from start to finish. Aysu Restaurant team looked after us all evening.",
    stars: 5,
  },
  {
    name: "Jola Jolah",
    meta: "4 reviews",
    text: "From the moment we stepped through the doors we were greeted with such warmth. Elegant and clean, yet comfortable and welcoming.",
    stars: 5,
  },
  {
    name: "Rajashekar K",
    meta: "Local Guide · 39 reviews",
    text: "Friendly staff and a lively room. The sauce was a little tomato-dominant for my taste, but the service was attentive.",
    stars: 3,
  },
];

const gallery = [
  { src: hero, alt: "Turkish sharing spread with grilled meats, mezze and bread" },
  { src: interior, alt: "Aysu dining room with green velvet banquettes and gold lighting" },
  { src: shish, alt: "Lamb shish skewer with bulgur rice" },
  { src: mezze, alt: "Cold mezze platter with hummus and flatbread" },
  { src: iskender, alt: "İskender kebab with yoghurt and tomato butter sauce" },
  { src: dessert, alt: "Baklava and Turkish tea on a gold plate" },
];

function Index() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Aysu Restaurants",
    servesCuisine: "Turkish",
    priceRange: "££",
    url: "https://aysu.uk",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "499" },
    address: branches.map((b) => ({
      "@type": "PostalAddress",
      streetAddress: b.addressLines[0],
      addressLocality: "London",
      postalCode: b.postcode,
      addressCountry: "GB",
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative isolate flex min-h-[92dvh] items-center justify-center overflow-hidden bg-forest-deep">
        <img
          src={hero}
          alt="Turkish charcoal grill and mezze sharing spread at Aysu"
          width={1920}
          height={1280}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-forest-deep/80 via-forest-deep/50 to-forest-deep" />
        <div className="mx-auto max-w-3xl px-4 py-24 text-center text-forest-foreground sm:px-6">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Queensbury · Harrow
          </motion.p>
          <motion.h1
            className="mt-6 text-4xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Authentic Turkish Cuisine, Served with Passion.
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-xl text-base text-forest-foreground/80 sm:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            Discover the flavours of Aysu across all of our locations.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <Link
              to="/menu"
              className="w-full rounded-sm bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-foreground transition-opacity hover:opacity-90 sm:w-auto"
            >
              View menu
            </Link>
            <Link
              to="/locations"
              className="w-full rounded-sm border border-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold/10 sm:w-auto"
            >
              Find your nearest restaurant
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src={interior}
              alt="The Aysu dining room, with green velvet seating and warm gold lighting"
              loading="lazy"
              width={1536}
              height={1024}
              className="w-full rounded-sm object-cover"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              align="left"
              eyebrow="Our story"
              title="A family table, set in North West London"
              intro="Aysu began with a simple idea: cook the food we grew up with, exactly as it should be. Charcoal grills lit every morning, dough proved on site, mezze made fresh through the day."
            />
            <dl className="mt-8 grid gap-6 sm:grid-cols-2">
              {[
                ["Fresh ingredients", "Produce delivered daily; nothing sits waiting. Meat is halal and sourced from trusted butchers."],
                ["Authentic recipes", "Adana, İskender, Ali Nazik and çılbır made the traditional way — no shortcuts."],
                ["Family friendly", "Highchairs, children's plates and space for large tables and celebrations."],
                ["Genuine service", "Rated 4.8 from 499 Google reviews for warm, attentive hospitality."],
              ].map(([term, def]) => (
                <div key={term}>
                  <dt className="font-display text-xl text-gold">{term}</dt>
                  <dd className="mt-2 text-sm text-muted-foreground">{def}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Featured dishes */}
      <section className="bg-secondary/60 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="From the grill"
              title="Featured dishes"
              intro="A few of the plates our regulars come back for."
            />
          </Reveal>
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((dish, i) => (
              <li key={dish.name}>
                <Reveal delay={i * 0.08}>
                  <article className="group h-full overflow-hidden rounded-sm border border-border bg-card">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      loading="lazy"
                      width={1024}
                      height={1024}
                      className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="p-5">
                      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3">
                        <h3 className="min-w-0 text-xl">{dish.name}</h3>
                        <span className="shrink-0 font-display text-lg text-gold">
                          {dish.price != null ? gbp(dish.price) : "—"}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{dish.blurb}</p>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
          <div className="mt-12 text-center">
            <Link
              to="/menu"
              className="inline-block rounded-sm border border-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold hover:bg-gold hover:text-gold-foreground"
            >
              See the full menu
            </Link>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Find us"
            title="Our restaurants"
            intro="Two kitchens, one standard. Choose a branch for menus, opening times and directions."
          />
        </Reveal>
        <ul className="mt-14 grid gap-8 lg:grid-cols-2">
          {branches.map((b, i) => (
            <li key={b.slug}>
              <Reveal delay={i * 0.1}>
                <article className="h-full overflow-hidden rounded-sm border border-border bg-card">
                  <iframe
                    title={`Map showing ${b.name}`}
                    src={mapsEmbedUrl(b.mapsQuery)}
                    loading="lazy"
                    className="h-56 w-full border-0"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl">{b.name}</h3>
                    <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                      <span>
                        {b.addressLines.join(", ")}, {b.postcode}
                      </span>
                    </p>
                    <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                      {b.phone ? (
                        <a href={telHref(b.phone)} className="hover:text-gold">
                          {b.phone}
                        </a>
                      ) : (
                        <span className="italic">Telephone to be confirmed</span>
                      )}
                    </p>
                    <dl className="mt-4 space-y-1 text-sm">
                      {b.hours.map((h) => (
                        <div key={h.day} className="flex justify-between gap-4 border-b border-border/60 py-1">
                          <dt className="text-muted-foreground">{h.day}</dt>
                          <dd>{h.time}</dd>
                        </div>
                      ))}
                    </dl>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <a
                        href={mapsDirectionsUrl(b.mapsQuery)}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-sm bg-gold px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-gold-foreground"
                      >
                        Directions
                      </a>
                      {b.phone ? (
                        <a
                          href={telHref(b.phone)}
                          className="rounded-sm border border-gold px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-gold hover:bg-gold/10"
                        >
                          Call now
                        </a>
                      ) : null}
                      <Link
                        to="/branches/$slug"
                        params={{ slug: b.slug }}
                        className="rounded-sm border border-border px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em]"
                      >
                        Branch page
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* Reviews */}
      <section className="bg-forest-deep py-20 text-forest-foreground md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="4.8 ★ from 499 Google reviews"
              title="What our guests say"
              intro="Live Google Reviews integration is ready to be connected — the quotes below are taken from our current listing."
            />
          </Reveal>
          <ul className="mt-14 grid gap-6 md:grid-cols-3">
            {reviews.map((r, i) => (
              <li key={r.name}>
                <Reveal delay={i * 0.08}>
                  <figure className="h-full rounded-sm border border-gold/20 bg-forest p-6">
                    <div className="flex items-center gap-3">
                      <span
                        aria-hidden="true"
                        className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold/20 font-display text-lg text-gold"
                      >
                        {r.name.charAt(0)}
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold">{r.name}</p>
                        <p className="truncate text-xs text-forest-foreground/60">{r.meta}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex gap-0.5" aria-label={`${r.stars} out of 5 stars`}>
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star
                          key={s}
                          aria-hidden="true"
                          className={`h-4 w-4 ${s < r.stars ? "fill-gold text-gold" : "text-forest-foreground/25"}`}
                        />
                      ))}
                    </div>
                    <blockquote className="mt-4 text-sm text-forest-foreground/80">“{r.text}”</blockquote>
                  </figure>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
        <Reveal>
          <SectionHeading eyebrow="Gallery" title="Inside Aysu" />
        </Reveal>
        <ul className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3">
          {gallery.map((g, i) => (
            <li key={g.alt} className={i === 0 ? "col-span-2 row-span-2" : ""}>
              <Reveal delay={i * 0.05}>
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="h-full w-full rounded-sm object-cover"
                />
              </Reveal>
            </li>
          ))}
        </ul>
        <div className="mt-12 text-center">
          <Link
            to="/gallery"
            className="inline-block rounded-sm border border-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold hover:bg-gold hover:text-gold-foreground"
          >
            View full gallery
          </Link>
        </div>
      </section>
    </>
  );
}
