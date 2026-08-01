import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { SectionHeading } from "@/components/section-heading";
import { useBasket } from "@/context/basket";
import { branches } from "@/data/branches";
import { gbp } from "@/lib/format";

const title = "Order Takeaway | Aysu Restaurants";
const description =
  "Order Aysu Turkish food for collection or delivery. Build your basket, apply a promo code and see estimated collection and delivery times.";

export const Route = createFileRoute("/order")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: OrderPage,
});

const DELIVERY_FEE = 3.5;
const PROMO = { AYSU10: 0.1 };
const field = "mt-2 w-full rounded-sm border border-input bg-background px-3 py-3 text-sm";
const labelCls = "block text-xs uppercase tracking-[0.16em] text-muted-foreground";

function OrderPage() {
  const { lines, setQty, remove, clear, subtotal } = useBasket();
  const [mode, setMode] = useState<"collection" | "delivery">("collection");
  const [promo, setPromo] = useState("");
  const [applied, setApplied] = useState<number>(0);
  const [placed, setPlaced] = useState(false);

  const totals = useMemo(() => {
    const discount = subtotal * applied;
    const fee = mode === "delivery" ? DELIVERY_FEE : 0;
    return { discount, fee, total: Math.max(0, subtotal - discount + fee) };
  }, [subtotal, applied, mode]);

  if (placed) {
    return (
      <div className="mx-auto max-w-xl px-4 py-24 text-center sm:px-6">
        <h1 className="text-4xl">Order received</h1>
        <p className="mt-4 text-muted-foreground">
          Thank you. Your {mode} order is estimated for{" "}
          {mode === "delivery" ? "45–60 minutes" : "20–30 minutes"}.
        </p>
        <p className="mt-6 text-xs italic text-muted-foreground">
          Demo checkout — no payment has been taken. Payment gateway and order routing can be
          connected next.
        </p>
        <Link
          to="/menu"
          className="mt-8 inline-block rounded-sm bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-foreground"
        >
          Back to the menu
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <SectionHeading
        eyebrow="Takeaway"
        title="Your basket"
        intro="Add dishes from the menu, choose collection or delivery, then check out."
      />

      {lines.length === 0 ? (
        <div className="mt-12 rounded-sm border border-border bg-card p-10 text-center">
          <p className="text-muted-foreground">Your basket is empty.</p>
          <Link
            to="/menu"
            className="mt-6 inline-block rounded-sm bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-foreground"
          >
            Browse the menu
          </Link>
        </div>
      ) : (
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <ul className="divide-y divide-border rounded-sm border border-border bg-card">
              {lines.map((l) => (
                <li key={l.id} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 p-4">
                  <div className="min-w-0">
                    <p className="truncate font-semibold">{l.name}</p>
                    <p className="text-sm text-muted-foreground">{gbp(l.price)} each</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <button
                      type="button"
                      aria-label={`Decrease quantity of ${l.name}`}
                      onClick={() => setQty(l.id, l.qty - 1)}
                      className="grid h-11 w-11 place-items-center rounded-sm border border-border"
                    >
                      <Minus className="h-4 w-4" aria-hidden="true" />
                    </button>
                    <span aria-live="polite" className="w-8 text-center">
                      {l.qty}
                    </span>
                    <button
                      type="button"
                      aria-label={`Increase quantity of ${l.name}`}
                      onClick={() => setQty(l.id, l.qty + 1)}
                      className="grid h-11 w-11 place-items-center rounded-sm border border-border"
                    >
                      <Plus className="h-4 w-4" aria-hidden="true" />
                    </button>
                    <span className="w-16 text-right font-display text-lg text-gold">
                      {gbp(l.price * l.qty)}
                    </span>
                    <button
                      type="button"
                      aria-label={`Remove ${l.name}`}
                      onClick={() => remove(l.id)}
                      className="grid h-11 w-11 place-items-center rounded-sm border border-border text-destructive"
                    >
                      <Trash2 className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={clear}
              className="mt-4 text-xs uppercase tracking-[0.16em] text-muted-foreground underline"
            >
              Empty basket
            </button>
          </div>

          <form
            className="h-fit rounded-sm border border-border bg-card p-6"
            onSubmit={(e) => {
              e.preventDefault();
              clear();
              setPlaced(true);
            }}
          >
            <h2 className="text-2xl">Checkout</h2>

            <fieldset className="mt-6">
              <legend className={labelCls}>Order type</legend>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {(["collection", "delivery"] as const).map((m) => (
                  <button
                    key={m}
                    type="button"
                    aria-pressed={mode === m}
                    onClick={() => setMode(m)}
                    className={`rounded-sm border px-4 py-3 text-xs uppercase tracking-[0.14em] ${
                      mode === m ? "border-gold bg-gold text-gold-foreground" : "border-border"
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="mt-5">
              <label className={labelCls} htmlFor="order-branch">
                Branch
              </label>
              <select id="order-branch" name="branch" className={field} required>
                {branches.map((b) => (
                  <option key={b.slug}>{b.name}</option>
                ))}
              </select>
            </div>

            <div className="mt-5">
              <label className={labelCls} htmlFor="order-name">
                Name
              </label>
              <input id="order-name" name="name" className={field} required autoComplete="name" />
            </div>
            <div className="mt-5">
              <label className={labelCls} htmlFor="order-phone">
                Telephone
              </label>
              <input id="order-phone" name="phone" type="tel" className={field} required autoComplete="tel" />
            </div>
            {mode === "delivery" ? (
              <div className="mt-5">
                <label className={labelCls} htmlFor="order-address">
                  Delivery address
                </label>
                <textarea id="order-address" name="address" rows={3} className={field} required />
              </div>
            ) : null}

            <div className="mt-5">
              <label className={labelCls} htmlFor="promo">
                Promo code
              </label>
              <div className="mt-2 flex gap-2">
                <input
                  id="promo"
                  value={promo}
                  onChange={(e) => setPromo(e.target.value.toUpperCase())}
                  className="min-w-0 flex-1 rounded-sm border border-input bg-background px-3 py-3 text-sm"
                  placeholder="AYSU10"
                />
                <button
                  type="button"
                  onClick={() => {
                    const rate = PROMO[promo as keyof typeof PROMO];
                    if (rate) {
                      setApplied(rate);
                      toast.success("Promo code applied — 10% off");
                    } else {
                      setApplied(0);
                      toast.error("That promo code isn't recognised");
                    }
                  }}
                  className="shrink-0 rounded-sm border border-gold px-4 py-3 text-xs uppercase tracking-[0.14em] text-gold"
                >
                  Apply
                </button>
              </div>
            </div>

            <dl className="mt-6 space-y-2 border-t border-border pt-5 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Subtotal</dt>
                <dd>{gbp(subtotal)}</dd>
              </div>
              {totals.discount > 0 ? (
                <div className="flex justify-between text-gold">
                  <dt>Promo discount</dt>
                  <dd>−{gbp(totals.discount)}</dd>
                </div>
              ) : null}
              {totals.fee > 0 ? (
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Delivery</dt>
                  <dd>{gbp(totals.fee)}</dd>
                </div>
              ) : null}
              <div className="flex justify-between border-t border-border pt-3 text-lg">
                <dt>Total</dt>
                <dd className="font-display text-gold">{gbp(totals.total)}</dd>
              </div>
            </dl>

            <p className="mt-4 text-xs text-muted-foreground">
              Estimated {mode === "delivery" ? "delivery: 45–60 minutes" : "collection: 20–30 minutes"}
            </p>

            <button
              type="submit"
              className="mt-6 w-full rounded-sm bg-gold px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-foreground"
            >
              Place order
            </button>
            <p className="mt-3 text-center text-xs italic text-muted-foreground">
              Demo checkout — no payment is taken.
            </p>
          </form>
        </div>
      )}
    </div>
  );
}