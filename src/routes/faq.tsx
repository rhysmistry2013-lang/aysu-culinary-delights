import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const title = "FAQ | Aysu Turkish Restaurant, Harrow, Queensbury & Watford";
const description =
  "Contact information for common questions about Aysu Restaurant in Harrow, Queensbury and Watford.";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: FaqPage,
});

const faqs: [string, string][] = [
  ["Do you cater for allergies?", "Yes — tell your server before ordering. Our kitchens handle nuts, gluten, sesame, dairy, egg and shellfish, so we cannot guarantee an allergen-free dish, but we will always advise honestly."],
  ["Is your meat halal?", "Please call your nearest branch and the team will confirm this for you."],
  ["Do you host private dining or events?", "Please contact your nearest branch with your date, party size and requirements and the team will let you know what they can arrange."],
];

function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SectionHeading align="left" eyebrow="Help" title="Frequently asked questions" />
      <Accordion type="single" collapsible className="mt-10">
        {faqs.map(([q, a]) => (
          <AccordionItem key={q} value={q}>
            <AccordionTrigger className="text-left text-lg">{q}</AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">{a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}