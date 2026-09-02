import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/section-heading";

const title = "Cookie Policy | Aysu Restaurant";
const description = "How Aysu Restaurant uses cookies and similar technologies on this website.";

export const Route = createFileRoute("/cookies")({
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
      <SectionHeading align="left" eyebrow="Legal" title="Cookie Policy" />
      <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground">
        <p>We use essential cookies and local browser storage to remember your light or dark theme preference and your cookie choices.</p>
        <p>Analytics and marketing cookies are not currently in use. If we add them, you will be asked to consent first.</p>
        <p>You can clear cookies and local storage at any time in your browser settings.</p>
      </div>
    </div>
  );
}
