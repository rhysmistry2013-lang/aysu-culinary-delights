import { Flame, Leaf, Search, Sprout, WheatOff } from "lucide-react";
import { useMemo, useState } from "react";
import { categories, menu, type MenuItem } from "@/data/menu";
import { imageFor } from "@/components/dish-image";
import { gbp } from "@/lib/format";

const filters = [
  { key: "vegetarian", label: "Vegetarian" },
  { key: "vegan", label: "Vegan" },
  { key: "gluten-free", label: "Gluten free" },
  { key: "spicy", label: "Spicy" },
] as const;

type FilterKey = (typeof filters)[number]["key"];

function Badges({ item }: { item: MenuItem }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {item.diets.includes("vegan") ? (
        <span className="inline-flex items-center gap-1 rounded-full border border-border px-2 py-0.5 text-[10px] uppercase tracking-wider">
          <Sprout className="h-3 w-3" aria-hidden="true" /> Vegan
        </span>
      ) : item.diets.includes("vegetarian") ? (
        <span className="inline-flex items-center gap-1 rounded-full border border-border px-2 py-0.5 text-[10px] uppercase tracking-wider">
          <Leaf className="h-3 w-3" aria-hidden="true" /> Vegetarian
        </span>
      ) : null}
      {item.diets.includes("gluten-free") ? (
        <span className="inline-flex items-center gap-1 rounded-full border border-border px-2 py-0.5 text-[10px] uppercase tracking-wider">
          <WheatOff className="h-3 w-3" aria-hidden="true" /> Gluten free
        </span>
      ) : null}
      {item.diets.includes("halal") ? (
        <span className="rounded-full border border-border px-2 py-0.5 text-[10px] uppercase tracking-wider">
          Halal
        </span>
      ) : null}
      {item.spice > 0 ? (
        <span
          className="inline-flex items-center gap-0.5 text-destructive"
          aria-label={`Spice level ${item.spice} of 3`}
        >
          {Array.from({ length: item.spice }).map((_, i) => (
            <Flame key={i} className="h-3 w-3" aria-hidden="true" />
          ))}
        </span>
      ) : null}
    </div>
  );
}

export function MenuBrowser({ branchName }: { branchName?: string }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [active, setActive] = useState<FilterKey[]>([]);
  const [sort, setSort] = useState<"menu" | "popular" | "price-asc" | "price-desc">("menu");

  const toggle = (key: FilterKey) =>
    setActive((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]));

  const results = useMemo(() => {
    let list = menu.filter((item) => {
      if (category !== "All" && item.category !== category) return false;
      if (query) {
        const q = query.toLowerCase();
        if (!`${item.name} ${item.description} ${item.category}`.toLowerCase().includes(q))
          return false;
      }
      for (const key of active) {
        if (key === "spicy" && item.spice === 0) return false;
        if (key !== "spicy" && !item.diets.includes(key)) return false;
      }
      return true;
    });
    if (sort === "popular")
      list = [...list].sort((a, b) => Number(!!b.popular) - Number(!!a.popular));
    if (sort === "price-asc") list = [...list].sort((a, b) => (a.price ?? 999) - (b.price ?? 999));
    if (sort === "price-desc") list = [...list].sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
    return list;
  }, [query, category, active, sort]);

  return (
    <div>
      <div className="rounded-sm border border-border bg-card p-4 sm:p-6">
        <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto]">
          <div className="relative min-w-0">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <label htmlFor="menu-search" className="sr-only">
              Search the menu
            </label>
            <input
              id="menu-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search dishes, e.g. lamb shish"
              className="w-full rounded-sm border border-input bg-background py-3 pl-9 pr-3 text-sm"
            />
          </div>
          <div>
            <label htmlFor="menu-sort" className="sr-only">
              Sort menu
            </label>
            <select
              id="menu-sort"
              value={sort}
              onChange={(e) => setSort(e.target.value as typeof sort)}
              className="w-full rounded-sm border border-input bg-background px-3 py-3 text-sm sm:w-56"
            >
              <option value="menu">Menu order</option>
              <option value="popular">Most popular</option>
              <option value="price-asc">Price: low to high</option>
              <option value="price-desc">Price: high to low</option>
            </select>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {filters.map((f) => {
            const on = active.includes(f.key);
            return (
              <button
                key={f.key}
                type="button"
                aria-pressed={on}
                onClick={() => toggle(f.key)}
                className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.14em] transition-colors ${
                  on
                    ? "border-gold bg-gold text-gold-foreground"
                    : "border-border text-muted-foreground hover:border-gold/60"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </div>

      <nav aria-label="Menu categories" className="mt-6 overflow-x-auto pb-2">
        <ul className="flex gap-2">
          {["All", ...categories].map((c) => (
            <li key={c}>
              <button
                type="button"
                aria-current={category === c ? "true" : undefined}
                onClick={() => setCategory(c)}
                className={`whitespace-nowrap rounded-sm border px-4 py-2 text-xs uppercase tracking-[0.14em] transition-colors ${
                  category === c
                    ? "border-gold bg-gold/10 text-gold"
                    : "border-border text-muted-foreground hover:border-gold/50"
                }`}
              >
                {c}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <p className="mt-4 text-sm text-muted-foreground" role="status">
        {results.length} dish{results.length === 1 ? "" : "es"}
        {branchName ? ` available at ${branchName}` : ""}
      </p>

      <ul className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {results.map((item) => (
          <li
            key={item.id}
            className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card transition-shadow hover:shadow-lg"
          >
            <img
              src={imageFor(item.category, item.name)}
              alt={item.name}
              loading="lazy"
              width={1024}
              height={1024}
              className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="flex flex-1 flex-col gap-3 p-5">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                <h3 className="min-w-0 text-xl leading-snug">
                  {item.no ? <span className="text-gold">{item.no}. </span> : null}
                  {item.name}
                </h3>
                <span className="shrink-0 font-display text-lg text-gold">
                  {item.price != null ? gbp(item.price) : null}
                  {item.priceLarge != null ? (
                    <span className="block text-xs text-muted-foreground">
                      large {gbp(item.priceLarge)}
                    </span>
                  ) : null}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{item.description}</p>
              <Badges item={item} />
              <p className="text-xs text-muted-foreground">
                <span className="font-semibold">Allergens:</span>{" "}
                {item.allergens.length ? item.allergens.join(", ") : "None declared"}
              </p>
              {item.price == null ? (
                <p className="mt-auto pt-2 text-xs text-muted-foreground">
                  Please ask in the restaurant for today's price.
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ul>

      {results.length === 0 ? (
        <p className="mt-10 text-center text-muted-foreground">
          No dishes match those filters. Try clearing a filter or searching for something else.
        </p>
      ) : null}
    </div>
  );
}