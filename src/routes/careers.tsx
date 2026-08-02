import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { SectionHeading } from "@/components/section-heading";
import { branches } from "@/data/branches";

const title = "Careers | Work at Aysu Restaurants";
const description =
  "Join the Aysu team. Current vacancies across our Queensbury and Harrow restaurants, plus an online application form with CV upload.";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: CareersPage,
});

const vacancies = [
  { role: "Grill Chef", branch: "Queensbury", type: "Full time" },
  { role: "Waiting Staff", branch: "Queensbury", type: "Full or part time" },
  { role: "Kitchen Porter", branch: "Harrow", type: "Part time" },
  { role: "Front of House Supervisor", branch: "Harrow", type: "Full time" },
];

const field = "mt-2 w-full rounded-sm border border-input bg-background px-3 py-3 text-sm";
const labelCls = "block text-xs uppercase tracking-[0.16em] text-muted-foreground";

function CareersPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-24">
      <SectionHeading
        align="left"
        eyebrow="Careers"
        title="Work at Aysu"
        intro="We train, we promote from within, and we feed you well. Vacancies below are placeholder listings pending confirmation by each branch."
      />

      <h2 className="mt-14 text-2xl">Current vacancies</h2>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {vacancies.map((v) => (
          <li key={`${v.role}-${v.branch}`} className="rounded-sm border border-border bg-card p-5">
            <h3 className="text-xl">{v.role}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {v.branch} · {v.type}
            </p>
          </li>
        ))}
      </ul>

      <h2 className="mt-14 text-2xl">Why work at Aysu</h2>
      <ul className="mt-4 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
        {[
          "Fair pay, shared tips and paid breaks",
          "Staff meals on every shift",
          "Training on the charcoal grill and mezze section",
          "Flexible rotas around study and family",
        ].map((x) => (
          <li key={x} className="rounded-sm border border-border p-4">
            {x}
          </li>
        ))}
      </ul>

      <h2 className="mt-14 text-2xl">Apply</h2>
      <form
        className="mt-6 grid gap-5 rounded-sm border border-border bg-card p-6 sm:grid-cols-2 sm:p-8"
        onSubmit={(e) => {
          e.preventDefault();
          e.currentTarget.reset();
          toast.success("Application received — thank you.");
        }}
      >
        <div>
          <label className={labelCls} htmlFor="j-name">Full name</label>
          <input id="j-name" name="name" required className={field} autoComplete="name" />
        </div>
        <div>
          <label className={labelCls} htmlFor="j-email">Email</label>
          <input id="j-email" name="email" type="email" required className={field} autoComplete="email" />
        </div>
        <div>
          <label className={labelCls} htmlFor="j-role">Role</label>
          <select id="j-role" name="role" className={field} required>
            {vacancies.map((v) => (
              <option key={`${v.role}-${v.branch}`}>{`${v.role} — ${v.branch}`}</option>
            ))}
            <option>General application</option>
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="j-branch">Preferred branch</label>
          <select id="j-branch" name="branch" className={field} required>
            {branches.map((b) => (
              <option key={b.slug}>{b.shortName}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="j-cv">Upload CV (PDF or Word)</label>
          <input id="j-cv" name="cv" type="file" accept=".pdf,.doc,.docx" className={field} />
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="j-about">Tell us about yourself</label>
          <textarea id="j-about" name="about" rows={5} className={field} />
        </div>
        <div className="sm:col-span-2">
          <button
            type="submit"
            className="w-full rounded-sm bg-gold px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-foreground"
          >
            Submit application
          </button>
          <p className="mt-3 text-center text-xs italic text-muted-foreground">
            Demo form — connect a backend to store applications and CV files.
          </p>
        </div>
      </form>
    </div>
  );
}