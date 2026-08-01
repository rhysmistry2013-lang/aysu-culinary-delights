import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { SectionHeading } from "@/components/section-heading";

const title = "Loyalty Programme | Aysu Rewards";
const description =
  "Join Aysu Rewards: collect points on every visit, enjoy a birthday treat and get exclusive member offers.";

export const Route = createFileRoute("/loyalty")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: LoyaltyPage,
});

const field = "mt-2 w-full rounded-sm border border-input bg-background px-3 py-3 text-sm";
const labelCls = "block text-xs uppercase tracking-[0.16em] text-muted-foreground";

function LoyaltyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
      <SectionHeading
        eyebrow="Aysu Rewards"
        title="Eat well, earn well"
        intro="Placeholder programme details — final rewards structure to be confirmed by Aysu."
      />
      <ul className="mt-12 grid gap-4 sm:grid-cols-3">
        {[
          ["Rewards points", "Earn 1 point per £1 spent in restaurant or on takeaway."],
          ["Birthday reward", "A complimentary dessert during your birthday month."],
          ["Exclusive offers", "Member-only specials, early access to events and seasonal menus."],
        ].map(([h, d]) => (
          <li key={h} className="rounded-sm border border-border bg-card p-5">
            <h2 className="font-display text-xl text-gold">{h}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
          </li>
        ))}
      </ul>
      <form
        className="mt-12 rounded-sm border border-border bg-card p-6 sm:p-8"
        onSubmit={(e) => {
          e.preventDefault();
          e.currentTarget.reset();
          toast.success("Welcome to Aysu Rewards — check your inbox.");
        }}
      >
        <h2 className="text-2xl">Sign up</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelCls} htmlFor="l-name">Full name</label>
            <input id="l-name" name="name" required className={field} autoComplete="name" />
          </div>
          <div>
            <label className={labelCls} htmlFor="l-email">Email</label>
            <input id="l-email" name="email" type="email" required className={field} autoComplete="email" />
          </div>
          <div>
            <label className={labelCls} htmlFor="l-phone">Telephone</label>
            <input id="l-phone" name="phone" type="tel" className={field} autoComplete="tel" />
          </div>
          <div>
            <label className={labelCls} htmlFor="l-birthday">Date of birth</label>
            <input id="l-birthday" name="birthday" type="date" className={field} />
          </div>
        </div>
        <button
          type="submit"
          className="mt-6 w-full rounded-sm bg-gold px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-foreground"
        >
          Join Aysu Rewards
        </button>
      </form>
    </div>
  );
}