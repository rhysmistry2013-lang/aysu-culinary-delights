import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/section-heading";

const title = "Privacy Policy | Aysu Restaurants";
const description = "How Aysu Restaurants collects, uses and protects your personal data.";

export const Route = createFileRoute("/privacy")({
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
      <SectionHeading align="left" eyebrow="Legal" title="Privacy Policy" />
      <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground">
        <p>Placeholder policy — to be reviewed by Aysu Restaurants before publication.</p>
        <p>We collect only the information needed to take a booking, answer an enquiry or send you our newsletter: your name, telephone number and email address.</p>
        <p>We do not sell your data. We share it only with service providers who help us operate the restaurant, such as payment and delivery partners.</p>
        <p>You can ask us to correct or delete your data at any time by emailing info@aysu.uk.</p>
      </div>
    </div>
  );
}
