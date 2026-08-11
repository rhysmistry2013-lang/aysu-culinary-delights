import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/section-heading";

const title = "Terms & Conditions | Aysu Restaurants";
const description = "Terms and conditions for Aysu Restaurants.";

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
        <p>Walk-ins are always welcome. For large parties or special occasions, please call the branch directly.</p>
      </div>
    </div>
  );
}
