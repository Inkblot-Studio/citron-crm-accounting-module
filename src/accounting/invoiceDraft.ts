export interface InvoiceLineItem {
  id: string
  productLabel: string
  quantity: number
  unitPrice: number
}

export interface InvoiceDraft {
  invoiceNumber: string
  clientName: string
  clientEmail: string
  lineItems: InvoiceLineItem[]
  invoiceTypeLabel: string
  paymentMethodLabel: string
  taxTypeLabel: string
  taxRatePct: number
  bankAccountLabel: string
  notes: string
  dueTerms: string
  issueDate?: string
  dueDate?: string
}

export function computeLineTotal(qty: number, unit: number): number {
  return Math.round(qty * unit * 100) / 100
}

export function computeTax(subtotal: number, ratePct: number): number {
  return Math.round(subtotal * (ratePct / 100) * 100) / 100
}

export function computeTotal(subtotal: number, tax: number): number {
  return Math.round((subtotal + tax) * 100) / 100
}

export function draftSubtotal(draft: InvoiceDraft): number {
  return draft.lineItems.reduce((sum, li) => sum + computeLineTotal(li.quantity, li.unitPrice), 0)
}

export function invoiceGrandTotal(draft: InvoiceDraft): number {
  const subtotal = draftSubtotal(draft)
  const tax = computeTax(subtotal, draft.taxRatePct)
  return computeTotal(subtotal, tax)
}

export function formatUsd(amount: number): string {
  return `$${amount.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`
}

/** Normalize stored JSON (legacy single-line fields → lineItems). */
export function normalizeInvoiceDraft(input: unknown): InvoiceDraft {
  const d = input as Record<string, unknown>
  let lineItems: InvoiceLineItem[] = []
  if (Array.isArray(d.lineItems)) {
    lineItems = (d.lineItems as unknown[]).map((row, i) => {
      const r = row as Record<string, unknown>
      return {
        id: String(r.id ?? `line-${i}-${Math.random().toString(36).slice(2)}`),
        productLabel: String(r.productLabel ?? ''),
        quantity: Math.max(0, Number(r.quantity) || 0),
        unitPrice: Math.max(0, Number(r.unitPrice) || 0),
      }
    })
  }
  if (lineItems.length === 0 && (d.productLabel != null || d.quantity != null || d.unitPrice != null)) {
    lineItems = [
      {
        id: crypto.randomUUID(),
        productLabel: String(d.productLabel ?? 'Line item'),
        quantity: Math.max(1, Number(d.quantity) || 1),
        unitPrice: Math.max(0, Number(d.unitPrice) || 0),
      },
    ]
  }
  if (lineItems.length === 0) {
    lineItems = [{ id: crypto.randomUUID(), productLabel: '', quantity: 1, unitPrice: 0 }]
  }

  return {
    invoiceNumber: String(d.invoiceNumber ?? ''),
    clientName: String(d.clientName ?? ''),
    clientEmail: String(d.clientEmail ?? ''),
    lineItems,
    invoiceTypeLabel: String(d.invoiceTypeLabel ?? 'Standard'),
    paymentMethodLabel: String(d.paymentMethodLabel ?? ''),
    taxTypeLabel: String(d.taxTypeLabel ?? ''),
    taxRatePct: Math.max(0, Math.min(100, Number(d.taxRatePct) || 0)),
    bankAccountLabel: String(d.bankAccountLabel ?? ''),
    notes: String(d.notes ?? ''),
    dueTerms: String(d.dueTerms ?? 'Net 30'),
    issueDate: d.issueDate != null ? String(d.issueDate) : undefined,
    dueDate: d.dueDate != null ? String(d.dueDate) : undefined,
  }
}

export function newEmptyLineItem(): InvoiceLineItem {
  return { id: crypto.randomUUID(), productLabel: '', quantity: 1, unitPrice: 0 }
}
