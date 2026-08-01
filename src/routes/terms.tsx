import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/section-heading";

const title = "Terms & Conditions | Aysu Restaurants";
const description = "Terms and conditions for bookings, takeaway orders and gift vouchers at Aysu Restaurants.";

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
        <p>Takeaway orders are prepared once confirmed and cannot be cancelled after preparation begins. Estimated collection and delivery times are indicative.</p>
        <p>Gift vouchers are valid for 12 months from purchase, are non-refundable and cannot be exchanged for cash.</p>
      </div>
    </div>
  );
}
