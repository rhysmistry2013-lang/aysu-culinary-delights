import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const title = "FAQ | Aysu Restaurants";
const description =
  "Answers on allergies, halal meat, parking, accessibility, catering and private dining at Aysu Restaurants.";

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
  ["Is your meat halal?", "Yes. All meat served at Aysu is halal, as shown on our menu."],
  ["Is there parking?", "Queensbury has street parking on the Station Parade and is one minute from Queensbury Underground. Harrow and Watford parking details are to be confirmed."],
  ["Do you host private dining or events?", "Placeholder — private dining and event packages to be confirmed. Please contact us with your requirements."],
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