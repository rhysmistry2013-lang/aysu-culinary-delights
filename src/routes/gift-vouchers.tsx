import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { SectionHeading } from "@/components/section-heading";
import { gbp } from "@/lib/format";

const title = "Gift Vouchers | Aysu Restaurants";
const description =
  "Buy an Aysu gift voucher for family and friends. Choose an amount, add a message and send it by email or post.";

export const Route = createFileRoute("/gift-vouchers")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: VoucherPage,
});

const amounts = [25, 50, 75, 100];
const field = "mt-2 w-full rounded-sm border border-input bg-background px-3 py-3 text-sm";
const labelCls = "block text-xs uppercase tracking-[0.16em] text-muted-foreground";

function VoucherPage() {
  const [amount, setAmount] = useState(50);

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
      <SectionHeading
        eyebrow="Gift vouchers"
        title="Give the gift of Aysu"
        intro="Valid at both restaurants for 12 months. Delivered by email or printed in-store."
      />
      <form
        className="mt-12 rounded-sm border border-border bg-card p-6 sm:p-8"
        onSubmit={(e) => {
          e.preventDefault();
          e.currentTarget.reset();
          toast.success(`${gbp(amount)} voucher requested — we'll email the details.`);
        }}
      >
        <fieldset>
          <legend className={labelCls}>Voucher amount</legend>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {amounts.map((a) => (
              <button
                key={a}
                type="button"
                aria-pressed={amount === a}
                onClick={() => setAmount(a)}
                className={`rounded-sm border px-4 py-4 font-display text-xl ${
                  amount === a ? "border-gold bg-gold text-gold-foreground" : "border-border"
                }`}
              >
                {gbp(a)}
              </button>
            ))}
          </div>
        </fieldset>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelCls} htmlFor="v-from">Your name</label>
            <input id="v-from" name="from" required className={field} />
          </div>
          <div>
            <label className={labelCls} htmlFor="v-to">Recipient name</label>
            <input id="v-to" name="to" required className={field} />
          </div>
          <div className="sm:col-span-2">
            <label className={labelCls} htmlFor="v-email">Recipient email</label>
            <input id="v-email" name="email" type="email" required className={field} />
          </div>
          <div className="sm:col-span-2">
            <label className={labelCls} htmlFor="v-message">Message</label>
            <textarea id="v-message" name="message" rows={4} className={field} />
          </div>
        </div>
        <button
          type="submit"
          className="mt-6 w-full rounded-sm bg-gold px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-foreground"
        >
          Buy voucher — {gbp(amount)}
        </button>
        <p className="mt-3 text-center text-xs italic text-muted-foreground">
          Demo form — no payment is taken. A payment gateway can be connected next.
        </p>
      </form>
    </div>
  );
}