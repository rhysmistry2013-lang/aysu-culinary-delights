import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/section-heading";
import { branches, mapsEmbedUrl, telHref } from "@/data/branches";
import { contactEmail } from "@/config/site";

const title = "Contact | Aysu Turkish Restaurant, Harrow & Queensbury";
const description =
  "Contact Aysu Restaurant: telephone numbers, email address, branch addresses and maps for Harrow and Queensbury.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactPage,
});

const field = "mt-2 w-full rounded-sm border border-input bg-background px-3 py-3 text-sm";
const labelCls = "block text-xs uppercase tracking-[0.16em] text-muted-foreground";

function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
      <SectionHeading align="left" eyebrow="Contact" title="Get in touch" />
      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        <form
          className="rounded-sm border border-border bg-card p-6 sm:p-8"
          onSubmit={(e) => {
            // No mail server is connected yet: open the guest's email client
            // addressed to the restaurant so nothing is silently lost.
            e.preventDefault();
            const form = new FormData(e.currentTarget);
            const body = [
              `Name: ${form.get("name")}`,
              `Email: ${form.get("email")}`,
              `Telephone: ${form.get("phone") || "-"}`,
              "",
              String(form.get("message") ?? ""),
            ].join("\n");
            window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
              "Website enquiry",
            )}&body=${encodeURIComponent(body)}`;
          }}
        >
          <div>
            <label className={labelCls} htmlFor="c-name">Name</label>
            <input id="c-name" name="name" required className={field} autoComplete="name" />
          </div>
          <div className="mt-5">
            <label className={labelCls} htmlFor="c-email">Email</label>
            <input id="c-email" name="email" type="email" required className={field} autoComplete="email" />
          </div>
          <div className="mt-5">
            <label className={labelCls} htmlFor="c-phone">Telephone</label>
            <input id="c-phone" name="phone" type="tel" className={field} autoComplete="tel" />
          </div>
          <div className="mt-5">
            <label className={labelCls} htmlFor="c-message">Message</label>
            <textarea id="c-message" name="message" rows={5} required className={field} />
          </div>
          <button
            type="submit"
            className="mt-6 w-full rounded-sm bg-gold px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-foreground"
          >
            Send enquiry
          </button>
          <p className="mt-3 text-xs text-muted-foreground">
            This opens your email app with the message ready to send to {contactEmail}.
          </p>
        </form>

        <div>
          <p className="text-sm text-muted-foreground">
            Email:{" "}
            <a href={`mailto:${contactEmail}`} className="text-gold hover:underline">
              {contactEmail}
            </a>
          </p>
          <ul className="mt-8 space-y-8">
            {branches.map((b) => (
              <li key={b.slug}>
                <h2 className="text-2xl">{b.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {b.addressLines.join(", ")}, {b.postcode}
                </p>
                <a href={telHref(b.phone)} className="text-sm text-gold hover:underline">
                  {b.phone}
                </a>
                <iframe
                  title={`Map showing ${b.name}`}
                  src={mapsEmbedUrl(b.mapsQuery)}
                  loading="lazy"
                  className="mt-4 h-56 w-full rounded-sm border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}