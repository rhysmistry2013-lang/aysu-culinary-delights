/**
 * ---------------------------------------------------------------------------
 * AYSU — SINGLE PLACE TO EDIT SITE-WIDE SETTINGS
 * ---------------------------------------------------------------------------
 * Site-wide contact and service settings.
 */

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

