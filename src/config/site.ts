/**
 * ---------------------------------------------------------------------------
 * AYSU — SINGLE PLACE TO EDIT SITE-WIDE SETTINGS
 * ---------------------------------------------------------------------------
 * Everything in this file is intended to be updated by the restaurant once the
 * real details are supplied. Nothing here is displayed as a public "placeholder"
 * warning — the customer-facing site simply hides anything that isn't set yet.
 */

/**
 * "concept"  — shows a small internal banner reminding the viewer that some
 *              details are awaiting confirmation by Aysu.
 * "live"     — no banner; fully customer-facing.
 * Change this one word to switch modes.
 */
export const siteStatus: "concept" | "live" = "live";

/** Items still awaiting confirmation from Aysu (internal note, shown only in concept mode). */
export const awaitingConfirmation = [
  "Opening hours for both branches",
  "Dessert and drinks pricing",
  "Online ordering links",
  "Online table booking system",
  "Official social media accounts",
];

/** Public contact email shown across the site. */
export const contactEmail = "info@aysu.uk";

/**
 * Online booking URL (OpenTable, ResDiary, Quandoo, etc.).
 * Leave as null until Aysu provides one — the site then invites guests to
 * book by phone instead of showing a dead button.
 */
export const bookingUrl: string | null = null;

/**
 * Official social accounts. Add entries once the real profile URLs are known.
 * Example: { label: "Instagram", href: "https://www.instagram.com/..." }
 */
export const socialLinks: { label: string; href: string }[] = [];

/** Shown next to opening times so guests know to check before travelling. */
export const hoursDisclaimer =
  "Times can vary on bank holidays — please call the restaurant before travelling.";
