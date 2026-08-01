export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-3 text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl">{title}</h2>
      <div
        className={`gold-rule mt-5 h-px w-24 ${align === "center" ? "mx-auto" : ""}`}
        aria-hidden="true"
      />
      {intro ? <p className="mt-5 text-base text-muted-foreground">{intro}</p> : null}
    </div>
  );
}