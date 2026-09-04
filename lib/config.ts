/**
 * Central site configuration.
 *
 * All external integrations are driven by environment variables so the page
 * works cleanly when they are absent. See `.env.example` for documentation.
 */

const DEFAULT_SITE_URL = "https://funnel.aethonintelligence.com";

/**
 * Resolve the canonical site URL defensively: an unset, empty, or malformed
 * NEXT_PUBLIC_SITE_URL must never break the build (`new URL("")` throws).
 * Falls back to the Vercel deployment URL, then to the default domain.
 */
function resolveSiteUrl(): string {
  const candidates = [
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined,
  ];
  for (const raw of candidates) {
    const value = raw?.trim();
    if (!value) continue;
    const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;
    try {
      return new URL(withProtocol).origin;
    } catch {
      // fall through to the next candidate
    }
  }
  return DEFAULT_SITE_URL;
}

export const site = {
  name: "Aethon Intelligence",
  legalName: "Aethon Intelligence LLC",
  founder: "Jahan Patel",
  location: "San Antonio, Texas",
  url: resolveSiteUrl(),
  mainSite: "https://aethonintelligence.com",
  caseStudies: "https://aethonintelligence.com/case-studies/",
} as const;

/**
 * Vidalytics VSL embed.
 *
 * Set NEXT_PUBLIC_VIDALYTICS_EMBED_ID to the embed id from the Vidalytics
 * embed snippet (the part after "vidalytics_embed_", e.g. "AbC123xyz").
 * When unset, the player renders a polished poster state with no layout shift.
 */
export const vsl = {
  embedId: (process.env.NEXT_PUBLIC_VIDALYTICS_EMBED_ID ?? "").trim(),
} as const;

/**
 * Cal.com booking.
 *
 * Set NEXT_PUBLIC_CAL_LINK to the Cal.com link slug, e.g. "jahan/walkthrough"
 * (the part after cal.com/). When unset, booking CTAs fall back to the
 * contact section of the main Aethon site so the button never dead-ends.
 *
 * NEXT_PUBLIC_CAL_REDIRECT_URL (optional) is the post-booking redirect,
 * planned to be "/confirm" once that page exists.
 */
export const booking = {
  calLink: (process.env.NEXT_PUBLIC_CAL_LINK ?? "").trim(),
  redirectUrl: (process.env.NEXT_PUBLIC_CAL_REDIRECT_URL ?? "").trim(),
  fallbackHref: "https://aethonintelligence.com/#contact",
} as const;

export const isBookingConfigured = booking.calLink.length > 0;

/**
 * Where the primary CTA sends the visitor: the Cal.com booking page when
 * configured, otherwise the contact section of the main Aethon site so the
 * button never dead-ends.
 */
export const bookingHref = isBookingConfigured
  ? `https://cal.com/${booking.calLink}`
  : booking.fallbackHref;
export const isVslConfigured = vsl.embedId.length > 0;

/**
 * Route constants. `/confirm` and `/faq` are planned but intentionally not
 * built yet — reference routes only through this object so wiring them up
 * later is a one-line change.
 */
export const routes = {
  home: "/",
  // Planned pages (not yet implemented):
  confirm: "/confirm",
  faq: "/faq",
  // Legal pages live on the main Aethon site today. Swap these to local
  // routes ("/privacy", "/terms") once those pages are built here.
  privacy: "https://aethonintelligence.com/privacy-policy/",
  terms: "https://aethonintelligence.com/terms/",
  contact: "https://aethonintelligence.com/#contact",
} as const;
