import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero-spread.jpg";
import interior from "@/assets/interior.jpg";
import { photos } from "@/assets/photos";
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
    heading: "From the charcoal grill",
    items: [
      { src: photos.mixedGrill, alt: "Mixed grill with lavash bread, peppers and onions" },
      { src: photos.kebabPlatter, alt: "Lamb and chicken shish with rice and bulgur" },
      { src: photos.familyPlatter, alt: "Family sharing platter of assorted kebabs" },
      { src: photos.lambKofta, alt: "Lamb kofta with grilled tomato and green pepper" },
      { src: photos.smallLambShish, alt: "Small lamb shish with rice, bulgur and yoghurt" },
      { src: photos.grilledFish, alt: "Whole grilled fish with chips, lemon and salad" },
    ],
  },
  {
    heading: "Mezze, starters & mains",
    items: [
      { src: photos.hummus, alt: "Hummus with olive oil, pomegranate and flatbread" },
      { src: photos.springRoll, alt: "Spring rolls with chilli dipping sauce and salad" },
      { src: photos.quesadilla, alt: "Quesadilla served with salad and bread basket" },
      { src: photos.lambStew, alt: "Lamb stew with rice, bread and salad" },
      { src: photos.lambShank, alt: "Lamb shank with rice, bread and sauces" },
      { src: photos.lambShankGravy, alt: "Lamb shank in rich tomato gravy with bread" },
    ],
  },
  {
    heading: "Desserts & drinks",
    items: [
      { src: photos.kanafeh, alt: "Kanafeh fresh from the pan with ice cream" },
      { src: photos.custard, alt: "Turkish baked custard dessert with ice cream" },
      { src: photos.tiramisu, alt: "Slice of tiramisu cake with chocolate drizzle" },
      { src: photos.ferreroIcecream, alt: "Ferrero Rocher ice cream dessert" },
      { src: photos.jalebi, alt: "Jalebi and sweets served at the table" },
      { src: photos.juice, alt: "Fresh green juice served in a chilled glass" },
      { src: photos.espressoMartini, alt: "Espresso martini on a marble table" },
      { src: photos.barSpirits, alt: "Bar display with spirits and hanging glassware" },
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