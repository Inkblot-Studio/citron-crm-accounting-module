/**
 * Branding profile — a reusable identity applied to offers & invoices.
 *
 * A profile carries everything that makes a document look and feel like it
 * belongs to a specific sender: logo, accent color, sender contact info, and
 * banking details for invoices. Profiles are persisted in localStorage and
 * seeded from `src/config/brandingProfiles.json` at first run.
 */

export interface BrandingProfile {
  /** Stable id. For seed profiles this matches the JSON id. */
  id: string
  /** Internal display name shown in the profile picker (e.g. "Inkblot Studio"). */
  name: string

  /* ─── Brand identity (rendered in document footer + masthead) ─────────── */

  /** Optional logo URL (https:// or data: URI). Shown in the offer masthead. */
  logoUrl?: string
  /** Brand mark text (e.g. "INKBLOT STUDIO"). */
  brandName: string
  /** One-line tagline (e.g. "Accelerating Every Industry through AI"). */
  brandTagline: string
  /** Public website (e.g. "inkblotstudio.eu"). */
  brandWebsite: string

  /* ─── Accent / theme ──────────────────────────────────────────────────── */

  /** Hex color (#RRGGBB). Overrides citrus-lemon accent locally on documents. */
  accentColor: string

  /* ─── Sender (used on invoices; optional on offers) ───────────────────── */

  /** Legal company name (e.g. "Inkblot Studio Ltd."). */
  senderLegalName: string
  /** Multi-line address (\n preserved in rendering). */
  senderAddress: string
  /** VAT / tax ID (e.g. "BG123456789"). */
  senderVatId: string
  senderPhone: string
  senderEmail: string

  /* ─── Banking (used on invoices) ──────────────────────────────────────── */

  bankName: string
  bankIban: string
  bankBic: string
}

/** Build a partial update-safe clone. */
export function cloneProfile(p: BrandingProfile): BrandingProfile {
  return { ...p }
}

/** Empty profile used when creating a new one in the editor. */
export function emptyBrandingProfile(): BrandingProfile {
  return {
    id: typeof crypto !== 'undefined' && 'randomUUID' in crypto ? crypto.randomUUID() : `profile-${Date.now()}`,
    name: 'Untitled brand',
    logoUrl: '',
    brandName: '',
    brandTagline: '',
    brandWebsite: '',
    accentColor: '#C9A227',
    senderLegalName: '',
    senderAddress: '',
    senderVatId: '',
    senderPhone: '',
    senderEmail: '',
    bankName: '',
    bankIban: '',
    bankBic: '',
  }
}

/** Basic hex-color validation (#RGB / #RRGGBB); falls back to the token default. */
export function normalizeHex(color: unknown): string {
  if (typeof color !== 'string') return '#C9A227'
  const m = color.trim().match(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/)
  return m ? `#${m[1]}` : '#C9A227'
}
