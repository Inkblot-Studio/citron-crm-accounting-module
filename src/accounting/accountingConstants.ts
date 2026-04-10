import type { AdvancedDropdownOption } from '@citron-systems/citron-ui'
import type { InvoiceClient, InvoiceProduct } from '@citron-systems/citron-ui'

/** Base URL when Accounting is mounted in the CRM host (`/invoices/*`). */
export const ACCOUNTING_BASE_PATH = '/invoices'

/** Path under the host, e.g. `create` → `/invoices/create`, `editor/abc` → `/invoices/editor/abc`. */
export function accountingPath(suffix = ''): string {
  if (!suffix) return ACCOUNTING_BASE_PATH
  const clean = suffix.startsWith('/') ? suffix.slice(1) : suffix
  return `${ACCOUNTING_BASE_PATH}/${clean}`
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
