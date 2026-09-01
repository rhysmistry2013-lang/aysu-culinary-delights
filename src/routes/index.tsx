import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { MapPin, Phone } from "lucide-react";
import hero from "@/assets/hero-spread.jpg";
import interior from "@/assets/interior.jpg";
import mezze from "@/assets/dish-mezze.jpg";
import shish from "@/assets/dish-lamb-shish.jpg";
import iskender from "@/assets/dish-iskender.jpg";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { BranchActionButton } from "@/components/branch-action";
import { hoursDisclaimer } from "@/config/site";
import { branches, mapsDirectionsUrl, mapsEmbedUrl, telHref } from "@/data/branches";
import { gbp } from "@/lib/format";

const title = "Aysu Restaurant | Turkish Restaurant in Harrow & Queensbury";
const description =
  "Aysu is a Turkish restaurant and grill in Harrow and Queensbury. Kebabs, grills, starters, salads, sides and desserts. View the menu, find us or call to order.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const featured = [
  { name: "Mix Grill", price: 21.5, image: shish, blurb: "Lamb shish, chicken shish and lamb kofte from the grill." },
  { name: "İskender", price: 15.5, image: iskender, blurb: "Doner on warm bread with yoghurt and tomato butter sauce." },
  { name: "Mix Cold Starter", price: 14.5, image: mezze, blurb: "Hummus, cacık, potato salad, tarama and aubergine salad." },
];

const gallery = [
  { src: hero, alt: "Turkish sharing spread with grilled meats, mezze and bread" },
  { src: interior, alt: "Aysu dining room with green velvet banquettes and gold lighting" },
  { src: shish, alt: "Lamb shish skewer with bulgur rice" },
  { src: mezze, alt: "Cold mezze platter with hummus and flatbread" },
  { src: iskender, alt: "İskender kebab with yoghurt and tomato butter sauce" },
];

function Index() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Aysu Restaurant",
    servesCuisine: "Turkish",
    url: "https://aysu-culinary-delights.lovable.app",
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
      <section className="relative isolate flex min-h-[88dvh] items-center justify-center overflow-hidden bg-forest-deep">
        <img
          src={hero}
          alt="Turkish grill and mezze sharing spread at Aysu"
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
            className="mt-6 text-4xl leading-[1.1] tracking-tight sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Aysu Restaurant
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-xl text-base text-forest-foreground/80 sm:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            A selection of Turkish-inspired dishes, grilled favourites, starters, sides and
            desserts — served in Queensbury and Harrow.
          </motion.p>
          <motion.div
            className="mt-10 grid gap-3 sm:flex sm:flex-wrap sm:justify-center"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Link
              to="/menu"
              className="rounded-sm bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-foreground transition-opacity hover:opacity-90"
            >
              View menu
            </Link>
            <BranchActionButton
              mode="book"
              className="w-full rounded-sm border border-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-gold-foreground sm:w-auto"
            >
              Book a table
            </BranchActionButton>
            <BranchActionButton
              mode="order"
              className="w-full rounded-sm border border-forest-foreground/40 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-forest-foreground transition-colors hover:border-gold hover:text-gold sm:w-auto"
            >
              Order now
            </BranchActionButton>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src={interior}
              alt="The Aysu dining room, with green seating and warm lighting"
              loading="lazy"
              width={1536}
              height={1024}
              className="w-full rounded-sm object-cover"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              align="left"
              eyebrow="About Aysu"
              title="Turkish dining in North West London"
              intro="Discover Aysu Restaurant, serving a selection of Turkish-inspired dishes, grilled favourites, starters, sides and desserts. Visit one of our locations or explore the menu online."
            />
            <dl className="mt-8 grid gap-6 sm:grid-cols-2">
              {[
                ["Two restaurants", "Queensbury (HA8 5NN) and Harrow (HA3 8HU)."],
                ["Halal menu", "Meat dishes on our menu are halal."],
                ["Dine in or takeaway", "Eat with us or call your local branch to order."],
                ["Groups welcome", "Space for families and larger tables — please call ahead."],
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
            <SectionHeading eyebrow="From the grill" title="From our menu" />
          </Reveal>
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                        <span className="shrink-0 font-display text-lg text-gold">{gbp(dish.price)}</span>
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
              className="inline-block rounded-sm border border-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-gold-foreground"
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
            intro="Choose a branch for the address, opening times and directions."
          />
        </Reveal>
        <ul className="mt-14 grid gap-8 md:grid-cols-2">
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

      {/* Gallery */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 md:pb-28">
        <Reveal>
          <SectionHeading eyebrow="Gallery" title="Inside Aysu" />
        </Reveal>
        <ul className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3">
          {gallery.map((g, i) => (
            <li key={g.alt} className={i === 0 ? "col-span-2 row-span-2" : ""}>
              <Reveal delay={i * 0.05}>
                <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full rounded-sm object-cover" />
              </Reveal>
            </li>
          ))}
        </ul>
        <div className="mt-12 text-center">
          <Link
            to="/gallery"
            className="inline-block rounded-sm border border-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-gold-foreground"
          >
            View full gallery
          </Link>
        </div>
      </section>
    </>
  );
}
