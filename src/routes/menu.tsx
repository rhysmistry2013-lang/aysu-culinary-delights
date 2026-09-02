import { createFileRoute } from "@tanstack/react-router";
import { MenuBrowser } from "@/components/menu-browser";
import { SectionHeading } from "@/components/section-heading";

const title = "Menu & Prices | Aysu Turkish Restaurant, Harrow & Queensbury";
const description =
  "Browse the full Aysu menu with prices: cold and hot starters, kebabs and grills, special Turkish kebabs, seafood, stews, salads, burgers, sides, desserts and drinks.";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
      <SectionHeading
        eyebrow="Our menu"
        title="Everything from the Aysu kitchen"
        intro="Search, filter and sort the full menu. Prices are taken from the current in-restaurant menu and may vary."
      />
      <div className="mt-12">
        <MenuBrowser />
      </div>
      <p className="mt-12 rounded-sm border border-border bg-card p-5 text-sm text-muted-foreground">
        <strong className="text-foreground">Allergen notice:</strong> allergen tags are indicative
        only and provided as a guide. Our kitchens handle nuts, gluten, sesame, dairy, egg and
        shellfish, so we cannot guarantee an allergen-free dish. Please speak to a member of staff
        before you order.
      </p>
    </div>
  );
}