export interface InvoiceDraft {
  invoiceNumber: string
  clientName: string
  clientEmail: string
  productLabel: string
  quantity: number
  unitPrice: number
  invoiceTypeLabel: string
  paymentMethodLabel: string
  taxTypeLabel: string
  taxRatePct: number
  bankAccountLabel: string
  notes: string
  dueTerms: string
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
