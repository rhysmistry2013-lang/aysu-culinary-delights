import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero-spread.jpg";
import interior from "@/assets/interior.jpg";
import shish from "@/assets/dish-lamb-shish.jpg";
import mezze from "@/assets/dish-mezze.jpg";
import iskender from "@/assets/dish-iskender.jpg";
import dessert from "@/assets/dessert.jpg";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const title = "Gallery | Aysu Restaurants";
const description =
  "Photographs of Aysu: charcoal-grilled food, mezze, desserts, drinks, our dining rooms and family tables.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: GalleryPage,
});

const groups = [
  {
    heading: "Food",
    items: [
      { src: hero, alt: "Turkish sharing spread of grilled meats, mezze and bread" },
      { src: shish, alt: "Lamb shish skewer with bulgur rice and grilled tomato" },
      { src: iskender, alt: "İskender kebab with yoghurt and tomato butter sauce" },
    ],
  },
  {
    heading: "Mezze & starters",
    items: [
      { src: mezze, alt: "Cold mezze platter with hummus, cacık and flatbread" },
      { src: hero, alt: "Copper tray of kofte, lamb chops and grilled peppers" },
    ],
  },
  {
    heading: "Desserts & drinks",
    items: [{ src: dessert, alt: "Pistachio baklava and Turkish tea on a gold plate" }],
  },
  {
    heading: "Our restaurants",
    items: [
      { src: interior, alt: "Aysu dining room with green velvet banquettes and brass lighting" },
      { src: interior, alt: "Marble tables set for a family dinner at Aysu" },
    ],
  },
];

function GalleryPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
      <SectionHeading
        eyebrow="Gallery"
        title="A look inside Aysu"
        intro="Food, drinks, desserts, interiors and family dining. Chef-at-work and event photography coming soon."
      />
      {groups.map((group, gi) => (
        <section key={group.heading} className="mt-16">
          <h2 className="font-display text-2xl text-gold">{group.heading}</h2>
          <ul className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
            {group.items.map((item, i) => (
              <li key={`${group.heading}-${i}`}>
                <Reveal delay={(gi + i) * 0.04}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="h-56 w-full rounded-sm object-cover md:h-72"
                  />
                </Reveal>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}