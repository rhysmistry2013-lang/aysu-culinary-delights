import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/section-heading";

const title = "Terms & Conditions | Aysu Restaurants";
const description = "Terms and conditions for bookings and use of the Aysu Restaurants website.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
      <SectionHeading align="left" eyebrow="Legal" title="Terms & Conditions" />
      <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground">
        <p>Placeholder terms — to be reviewed by Aysu Restaurants before publication.</p>
        <p>Tables are held for 15 minutes after the reserved time. Large party bookings may require a deposit.</p>
        <p>This website is for information only — menus, prices and opening hours are published in good faith and may change without notice. Please call the branch to confirm before travelling.</p>
      </div>
    </div>
  );
}
