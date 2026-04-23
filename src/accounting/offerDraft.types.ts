/**
 * Offer types — kept in a separate file (no imports from other module files)
 * so that offerConfig.ts can reference them without creating a cycle.
 */

export type OfferCurrency = 'BGN' | 'EUR' | 'USD'

export interface OfferSupportPlan {
  id: string
  title: string
  subtitle?: string
  priceLabel: string
}

/* ─── Block model ────────────────────────────────────────────────────────── */

interface BlockBase {
  id: string
}

export interface HeadingBlock extends BlockBase {
  kind: 'heading'
  level: 1 | 2 | 3
  text: string
}

export interface ParagraphBlock extends BlockBase {
  kind: 'paragraph'
  text: string
}

export interface FeatureBlock extends BlockBase {
  kind: 'feature'
  kicker: string
  title: string
  description: string
  bullets: string[]
  comparisonNote: string
}

export interface BulletsBlock extends BlockBase {
  kind: 'bullets'
  items: string[]
}

export interface QuoteBlock extends BlockBase {
  kind: 'quote'
  text: string
  cite: string
}

export interface PricingBlock extends BlockBase {
  kind: 'pricing'
  currency: OfferCurrency
  price: number
  vatPct: number
  marketValueFrom?: number
  marketValueTo?: number
  timeline: string
  guarantee: string
  note: string
}

export interface PlansBlock extends BlockBase {
  kind: 'plans'
  title: string
  plans: OfferSupportPlan[]
}

export interface DividerBlock extends BlockBase {
  kind: 'divider'
}

export type OfferBlock =
  | HeadingBlock
  | ParagraphBlock
  | FeatureBlock
  | BulletsBlock
  | QuoteBlock
  | PricingBlock
  | PlansBlock
  | DividerBlock

export type OfferBlockKind = OfferBlock['kind']

/* ─── Draft ──────────────────────────────────────────────────────────────── */

export interface OfferDraft {
  documentTypeId: string
  documentNumber: string

  /** Id of the active BrandingProfile, or null/undefined to use the store default. */
  brandProfileId?: string | null

  clientName: string
  clientOrg: string
  clientEmail: string

  projectName: string

  blocks: OfferBlock[]

  /**
   * Optional per-draft overrides of the brand footer. If left empty, the
   * branding profile's values are used at render time. Keeping the fields
   * allows a user to customise a specific offer without editing the profile.
   */
  brandName: string
  brandTagline: string
  brandUrl: string

  issueDate?: string
  validUntil?: string
}
