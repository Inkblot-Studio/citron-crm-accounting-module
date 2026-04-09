import { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { Button, Input, Label, Textarea } from '@citron-systems/citron-ui'
import { ArrowLeft, Send } from 'lucide-react'
import type { InvoiceDraft } from './invoiceDraft'
import { computeLineTotal, computeTax, computeTotal } from './invoiceDraft'
import { useToast } from '@/lib/ToastContext'

export default function InvoiceEditorPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const { addToast } = useToast()

  const initial = (location.state as { draft?: InvoiceDraft } | undefined)?.draft

  const [form, setForm] = useState<InvoiceDraft | null>(initial ?? null)

  useEffect(() => {
    if (!initial) {
      navigate('/create', { replace: true })
    }
  }, [initial, navigate])

  const update = <K extends keyof InvoiceDraft>(key: K, value: InvoiceDraft[K]) => {
    setForm((prev) => (prev ? { ...prev, [key]: value } : prev))
  }

  const subtotal = useMemo(() => {
    if (!form) return 0
    return computeLineTotal(form.quantity, form.unitPrice)
  }, [form])

  const tax = useMemo(() => {
    if (!form) return 0
    return computeTax(subtotal, form.taxRatePct)
  }, [form, subtotal])

  const total = useMemo(() => computeTotal(subtotal, tax), [subtotal, tax])

  const handleSend = () => {
    if (!form) return
    addToast({
      title: 'Invoice sent',
      description: `${form.invoiceNumber} sent to ${form.clientEmail}.`,
      variant: 'success',
    })
    navigate('/', { replace: true })
  }

  if (!form) {
    return (
      <div className="h-full flex items-center justify-center text-sm text-muted-foreground px-8">
        Redirecting…
      </div>
    )
  }

  return (
    <div className="h-full flex flex-col min-h-0">
      <div className="px-8 py-3 border-b border-border flex items-center gap-4 shrink-0">
        <Link
          to="/create"
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-3 h-3" />
          Back
        </Link>
        <span className="text-xs font-mono text-citrus-lemon">{form.invoiceNumber}</span>
      </div>

      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-2 gap-6 p-8 overflow-y-auto hide-scrollbar">
        <div className="space-y-[var(--inkblot-spacing-4)] min-w-0">
          <p className="text-sm font-medium text-foreground">Edit details</p>

          <div className="space-y-[var(--inkblot-spacing-2)]">
            <Label htmlFor="clientName">Bill to</Label>
            <Input id="clientName" value={form.clientName} onChange={(e) => update('clientName', e.target.value)} />
          </div>

          <div className="space-y-[var(--inkblot-spacing-2)]">
            <Label htmlFor="clientEmail">Email</Label>
            <Input
              id="clientEmail"
              type="email"
              value={form.clientEmail}
              onChange={(e) => update('clientEmail', e.target.value)}
            />
          </div>

          <div className="space-y-[var(--inkblot-spacing-2)]">
            <Label htmlFor="productLabel">Line item</Label>
            <Input id="productLabel" value={form.productLabel} onChange={(e) => update('productLabel', e.target.value)} />
          </div>

          <div className="grid grid-cols-2 gap-[var(--inkblot-spacing-3)]">
            <div className="space-y-[var(--inkblot-spacing-2)]">
              <Label htmlFor="qty">Quantity</Label>
              <Input
                id="qty"
                type="number"
                min={1}
                value={form.quantity}
                onChange={(e) => update('quantity', Number(e.target.value) || 1)}
              />
            </div>
            <div className="space-y-[var(--inkblot-spacing-2)]">
              <Label htmlFor="unit">Unit price</Label>
              <Input
                id="unit"
                type="number"
                min={0}
                step="0.01"
                value={form.unitPrice}
                onChange={(e) => update('unitPrice', Number(e.target.value) || 0)}
              />
            </div>
          </div>

          <div className="space-y-[var(--inkblot-spacing-2)]">
            <Label htmlFor="due">Due</Label>
            <Input id="due" value={form.dueTerms} onChange={(e) => update('dueTerms', e.target.value)} />
          </div>

          <div className="space-y-[var(--inkblot-spacing-2)]">
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              rows={4}
              value={form.notes}
              onChange={(e) => update('notes', e.target.value)}
              resize="vertical"
            />
          </div>

          <Button type="button" variant="primary" className="w-full sm:w-auto" onClick={handleSend}>
            <Send className="w-4 h-4 mr-2" />
            Send invoice
          </Button>
        </div>

        <div className="min-w-0">
          <p className="text-sm font-medium text-foreground mb-[var(--inkblot-spacing-3)]">Preview</p>
          <div
            className="rounded-[var(--inkblot-radius-xl)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-primary)] p-[var(--inkblot-spacing-6)] shadow-[var(--inkblot-shadow-sm)]"
          >
            <div className="flex justify-between gap-4 border-b border-[var(--inkblot-semantic-color-border-default)] pb-[var(--inkblot-spacing-4)]">
              <div>
                <p className="text-xs uppercase tracking-wider text-[var(--inkblot-semantic-color-text-tertiary)]">Invoice</p>
                <p className="font-mono text-sm text-[var(--inkblot-semantic-color-status-warning)]">{form.invoiceNumber}</p>
              </div>
              <div className="text-right text-xs text-[var(--inkblot-semantic-color-text-tertiary)]">
                <p>{form.invoiceTypeLabel}</p>
                <p>{form.paymentMethodLabel}</p>
              </div>
            </div>

            <div className="py-[var(--inkblot-spacing-4)] space-y-1">
              <p className="text-sm font-medium text-[var(--inkblot-semantic-color-text-primary)]">{form.clientName}</p>
              <p className="text-xs text-[var(--inkblot-semantic-color-text-tertiary)]">{form.clientEmail}</p>
            </div>

            <div className="border-t border-[var(--inkblot-semantic-color-border-default)] pt-[var(--inkblot-spacing-3)] space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-[var(--inkblot-semantic-color-text-secondary)]">{form.productLabel}</span>
                <span className="font-mono text-[var(--inkblot-semantic-color-text-primary)]">
                  ×{form.quantity} @ ${form.unitPrice}
                </span>
              </div>
              <div className="flex justify-between text-xs text-[var(--inkblot-semantic-color-text-tertiary)]">
                <span>Tax ({form.taxTypeLabel})</span>
                <span className="font-mono">${tax.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-xs text-[var(--inkblot-semantic-color-text-tertiary)]">
                <span>Due</span>
                <span>{form.dueTerms}</span>
              </div>
              <div className="flex justify-between text-xs text-[var(--inkblot-semantic-color-text-tertiary)]">
                <span>Bank</span>
                <span>{form.bankAccountLabel}</span>
              </div>
            </div>

            <div className="border-t border-[var(--inkblot-semantic-color-border-default)] mt-[var(--inkblot-spacing-4)] pt-[var(--inkblot-spacing-4)] flex justify-between items-baseline">
              <span className="text-sm font-medium text-[var(--inkblot-semantic-color-text-primary)]">Total</span>
              <span className="text-lg font-mono text-[var(--inkblot-semantic-color-status-success)]">${total.toLocaleString()}</span>
            </div>

            {form.notes.trim() && (
              <p className="mt-[var(--inkblot-spacing-4)] text-xs text-[var(--inkblot-semantic-color-text-tertiary)] border-t border-[var(--inkblot-semantic-color-border-default)] pt-[var(--inkblot-spacing-3)]">
                {form.notes}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
