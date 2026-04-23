/**
 * Offer configuration — edit this file to change defaults for the whole module.
 *
 * Kept deliberately small & declarative so product decisions (starting number,
 * default currency, brand, VAT %) are obvious and out of the builder code.
 */

import type { OfferCurrency } from './offerDraft.types'

export interface OfferBrand {
  name: string
  tagline: string
  url: string
}

export interface OfferModuleConfig {
  /**
   * Branding profile id for new offers (must exist in branding profiles).
   * Set to `null` to rely on Branding → default profile instead.
   */
  defaultBrandProfileId: string | null
  /** First offer number auto-assigned when creating a blank offer. */
  documentNumberStart: number
  /** Optional prefix prepended to the numeric part (e.g. "INK-2026-"). */
  documentNumberPrefix: string
  /** Zero-pad width for the numeric part. 0 = no padding (e.g. 41). */
  documentNumberPad: number
  /** Default currency on new offers. */
  defaultCurrency: OfferCurrency
  /** Default VAT percentage on new pricing blocks. */
  defaultVatPct: number
  /** Default validity window, in days, from the issue date. */
  defaultValidityDays: number
  /** Default brand shown in the footer block. */
  defaultBrand: OfferBrand
}

export const OFFER_CONFIG: OfferModuleConfig = {
  defaultBrandProfileId: 'inkblot-studio',
  documentNumberStart: 41,
  documentNumberPrefix: '',
  documentNumberPad: 0,
  defaultCurrency: 'EUR',
  defaultVatPct: 20,
  defaultValidityDays: 21,
  defaultBrand: {
    name: 'INKBLOT STUDIO',
    tagline: 'Accelerating Every Industry through AI',
    url: 'inkblotstudio.eu',
  },
}

/** Format a numeric offer counter according to the configured prefix/padding. */
export function formatOfferNumber(n: number, cfg: OfferModuleConfig = OFFER_CONFIG): string {
  const core = cfg.documentNumberPad > 0 ? String(n).padStart(cfg.documentNumberPad, '0') : String(n)
  return `${cfg.documentNumberPrefix}${core}`
}

/** Extract the numeric value embedded in a free-form offer number (or NaN). */
export function extractOfferNumber(raw: string): number {
  const m = raw.match(/\d+/)
  return m ? Number.parseInt(m[0], 10) : Number.NaN
}
