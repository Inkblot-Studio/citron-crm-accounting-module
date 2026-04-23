import type { AdvancedDropdownOption } from '@citron-systems/citron-ui'
import type { InvoiceClient, InvoiceProduct } from '@citron-systems/citron-ui'

/** Base path del módulo montado en el host CRM (`/invoices/*`). */
export const ACCOUNTING_BASE_PATH = '/invoices'

/** Ruta bajo el host: `create` → `/invoices/create`, `editor/x` → `/invoices/editor/x`. */
export function accountingPath(suffix = ''): string {
  if (!suffix) return ACCOUNTING_BASE_PATH
  const clean = suffix.startsWith('/') ? suffix.slice(1) : suffix
  return `${ACCOUNTING_BASE_PATH}/${clean}`
}

/** Status filters for the invoice list (toolbar pills + header popover). */
export const INVOICE_STATUS_TABS: { id: string; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'paid', label: 'Paid' },
  { id: 'pending', label: 'Pending' },
  { id: 'overdue', label: 'Overdue' },
  { id: 'draft', label: 'Draft' },
]

export function normalizeInvoiceListStatusParam(param: string | null): string {
  if (!param) return 'all'
  return INVOICE_STATUS_TABS.some((t) => t.id === param) ? param : 'all'
}

export interface ClientEntry {
  id: string
  name: string
  email: string
}

export const INITIAL_CLIENTS: ClientEntry[] = [
  { id: 'cl-1', name: 'Acme Corp', email: 'billing@acme.com' },
  { id: 'cl-2', name: 'TechVentures', email: 'ap@techventures.io' },
  { id: 'cl-3', name: 'DataFlow Labs', email: 'finance@dataflow.dev' },
  { id: 'cl-4', name: 'GlobalTech', email: 'invoices@globaltech.com' },
]

export const INVOICE_CLIENTS_FOR_FORM: InvoiceClient[] = INITIAL_CLIENTS.map((c) => ({
  id: c.id,
  name: c.name,
  email: c.email,
}))

export const INVOICE_PRODUCTS: InvoiceProduct[] = [
  { id: 'web-dev', name: 'Web Development', unitPrice: 150 },
  { id: 'design', name: 'UI/UX Design', unitPrice: 175 },
  { id: 'hosting', name: 'Hosting & Infrastructure', unitPrice: 500 },
  { id: 'consulting', name: 'Strategy Consulting', unitPrice: 200 },
  { id: 'support', name: 'Support Package', unitPrice: 1200 },
]

export const PRODUCT_OPTIONS: AdvancedDropdownOption[] = [
  { value: 'web-dev', label: 'Web Development', description: '$150 / hr' },
  { value: 'design', label: 'UI/UX Design', description: '$175 / hr' },
  { value: 'hosting', label: 'Hosting & Infrastructure', description: '$500 flat' },
  { value: 'consulting', label: 'Strategy Consulting', description: '$200 / hr' },
  { value: 'support', label: 'Support Package', description: '$1,200 / mo' },
]

export const INVOICE_TYPES: AdvancedDropdownOption[] = [
  { value: 'standard', label: 'Standard' },
  { value: 'proforma', label: 'Proforma' },
  { value: 'credit-note', label: 'Credit Note' },
  { value: 'debit-note', label: 'Debit Note' },
]

/**
 * Bulgarian document types recognized by the module.
 *
 * Legal basis (Закон за ДДС / ЗДДС):
 *   - `Фактура`             — чл. 113 ЗДДС (tax invoice)
 *   - `Кредитно известие`   — чл. 115 ЗДДС (credit note)
 *   - `Дебитно известие`    — чл. 115 ЗДДС (debit note)
 *   - `Стокова разписка`    — Търговски закон (goods receipt; commercial)
 *   - `Проформа фактура`    — commercial document, not regulated by ЗДДС
 *   - `Оферта`              — commercial proposal, not a tax document
 *
 * `legal: false` → informational/commercial only (no tax effect).
 * `legal: true`  → VAT document under ЗДДС.
 * `offerCapable` → can be authored in the Offer Builder (rich layout).
 */
export interface BgDocumentType {
  id: string
  label: string
  labelEn: string
  legal: boolean
  offerCapable: boolean
}

export const BG_DOCUMENT_TYPES: BgDocumentType[] = [
  { id: 'oferta', label: 'Оферта', labelEn: 'Offer', legal: false, offerCapable: true },
  { id: 'proforma', label: 'Проформа фактура', labelEn: 'Pro-forma invoice', legal: false, offerCapable: true },
  { id: 'faktura', label: 'Фактура', labelEn: 'Invoice', legal: true, offerCapable: false },
  { id: 'kreditno-izvestie', label: 'Кредитно известие', labelEn: 'Credit note', legal: true, offerCapable: false },
  { id: 'debitno-izvestie', label: 'Дебитно известие', labelEn: 'Debit note', legal: true, offerCapable: false },
  { id: 'stokova-razpiska', label: 'Стокова разписка', labelEn: 'Goods receipt', legal: false, offerCapable: false },
]

export function bgDocumentTypeById(id: string): BgDocumentType | undefined {
  return BG_DOCUMENT_TYPES.find((t) => t.id === id)
}

export const BG_DOCUMENT_TYPE_OPTIONS: AdvancedDropdownOption[] = BG_DOCUMENT_TYPES.map((t) => ({
  value: t.id,
  label: t.label,
  description: t.labelEn + (t.legal ? ' · ЗДДС' : ''),
}))

export const PAYMENT_METHOD_OPTIONS: AdvancedDropdownOption[] = [
  { value: 'bank-transfer', label: 'Bank Transfer' },
  { value: 'credit-card', label: 'Credit Card' },
  { value: 'cash', label: 'Cash' },
  { value: 'check', label: 'Check' },
]

export const TAX_CONFIG_OPTIONS: AdvancedDropdownOption[] = [
  { value: 'vat-21', label: 'VAT 21%' },
  { value: 'vat-10', label: 'VAT 10%' },
  { value: 'vat-0', label: 'VAT 0%' },
  { value: 'exempt', label: 'Tax Exempt' },
]

export const BANK_ACCOUNT_OPTIONS: AdvancedDropdownOption[] = [
  { value: 'main', label: 'Main Account', description: '****4821' },
  { value: 'secondary', label: 'Secondary Account', description: '****7390' },
]

/** Payment terms for invoice create / editor (shared). */
export const DUE_TERMS: AdvancedDropdownOption[] = [
  { value: 'Due on receipt', label: 'Due on receipt' },
  { value: 'Net 7', label: 'Net 7' },
  { value: 'Net 15', label: 'Net 15' },
  { value: 'Net 30', label: 'Net 30' },
  { value: 'Net 45', label: 'Net 45' },
  { value: 'Net 60', label: 'Net 60' },
]

/** String lists for citron-ui `InvoiceForm` / `InvoicePreview` */
export const FORM_PAYMENT_METHODS = PAYMENT_METHOD_OPTIONS.map((o) => o.label)
export const FORM_TAX_TYPES = TAX_CONFIG_OPTIONS.map((o) => o.label)
export const FORM_INVOICE_TYPES = INVOICE_TYPES.map((o) => o.label)
export const FORM_BANK_ACCOUNTS = BANK_ACCOUNT_OPTIONS.map((o) => o.label)

export const PRODUCT_RATES: Record<string, number> = {
  'web-dev': 150,
  design: 175,
  hosting: 500,
  consulting: 200,
  support: 1200,
}

export function findOptionLabel(options: AdvancedDropdownOption[], value: string | null): string {
  if (!value) return ''
  return options.find((o) => o.value === value)?.label ?? ''
}

export function taxRateFromTaxLabel(label: string): number {
  const id = TAX_CONFIG_OPTIONS.find((o) => o.label === label)?.value
  switch (id) {
    case 'vat-21':
      return 21
    case 'vat-10':
      return 10
    case 'vat-0':
    case 'exempt':
      return 0
    default:
      return 0
  }
}

export interface TaxPresetEntry {
  label: string
  ratePct: number
}

/** Built-in tax labels plus user-defined presets (label must be unique). */
export function resolveTaxRate(taxLabel: string, extraPresets: TaxPresetEntry[]): number {
  const hit = extraPresets.find((p) => p.label === taxLabel)
  if (hit) return Math.max(0, Math.min(100, hit.ratePct))
  return taxRateFromTaxLabel(taxLabel)
}

export function bankLabelFromFormLabel(label: string): string {
  const opt = BANK_ACCOUNT_OPTIONS.find((o) => o.label === label)
  return opt ? `${opt.label}${opt.description ? ` (${opt.description})` : ''}` : label
}
