import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { branches } from "@/data/branches";

const title = "Book a Table | Aysu Restaurants";
const description =
  "Reserve a table at Aysu Queensbury or Harrow. Choose your branch, date, time, party size and let us know about any special requests.";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: BookPage,
});

const times = [
  "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "17:00", "17:30",
  "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30",
];

const field =
  "mt-2 w-full rounded-sm border border-input bg-background px-3 py-3 text-sm focus:outline-none";
const labelCls = "block text-xs uppercase tracking-[0.16em] text-muted-foreground";

function BookPage() {
  const [confirmed, setConfirmed] = useState<null | Record<string, string>>(null);

  if (confirmed) {
    return (
      <div className="mx-auto max-w-xl px-4 py-24 text-center sm:px-6">
        <CheckCircle2 className="mx-auto h-12 w-12 text-gold" aria-hidden="true" />
        <h1 className="mt-6 text-4xl">Booking request received</h1>
        <p className="mt-4 text-muted-foreground">
          Thank you, {confirmed["name"]}. We've noted a table for {confirmed["guests"]} at{" "}
          {confirmed["branch"]} on {confirmed["date"]} at {confirmed["time"]}. A member of the team
          will call you on {confirmed["phone"]} to confirm.
        </p>
        <p className="mt-6 text-xs italic text-muted-foreground">
          This demo confirmation is stored in your browser only. Connect a backend to save
          reservations and send confirmation emails.
        </p>
        <button
          type="button"
          onClick={() => setConfirmed(null)}
          className="mt-8 rounded-sm border border-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold hover:bg-gold/10"
        >
          Make another booking
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
      <SectionHeading
        eyebrow="Reservations"
        title="Book a table"
        intro="Tables are held for 15 minutes. For parties of 10 or more, please call your branch directly."
      />
      <form
        className="mt-12 grid gap-6 rounded-sm border border-border bg-card p-6 sm:grid-cols-2 sm:p-8"
        onSubmit={(e) => {
          e.preventDefault();
          const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
          setConfirmed(data);
        }}
      >
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="branch">
            Restaurant
          </label>
          <select id="branch" name="branch" required className={field}>
            {branches.map((b) => (
              <option key={b.slug}>{b.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="date">
            Date
          </label>
          <input id="date" name="date" type="date" required className={field} />
        </div>
        <div>
          <label className={labelCls} htmlFor="time">
            Time
          </label>
          <select id="time" name="time" required className={field}>
            {times.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="guests">
            Number of guests
          </label>
          <select id="guests" name="guests" required className={field}>
            {Array.from({ length: 12 }).map((_, i) => (
              <option key={i}>{i + 1}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="name">
            Full name
          </label>
          <input id="name" name="name" required className={field} autoComplete="name" />
        </div>
        <div>
          <label className={labelCls} htmlFor="phone">
            Telephone
          </label>
          <input id="phone" name="phone" type="tel" required className={field} autoComplete="tel" />
        </div>
        <div>
          <label className={labelCls} htmlFor="email">
            Email
          </label>
          <input id="email" name="email" type="email" required className={field} autoComplete="email" />
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="requests">
            Special requests (allergies, high chairs, celebrations)
          </label>
          <textarea id="requests" name="requests" rows={4} className={field} />
        </div>
        <div className="sm:col-span-2">
          <button
            type="submit"
            className="w-full rounded-sm bg-gold px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-foreground hover:opacity-90"
          >
            Request booking
          </button>
        </div>
      </form>
    </div>
  );
}