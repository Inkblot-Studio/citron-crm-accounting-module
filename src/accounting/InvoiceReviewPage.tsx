import { useCallback, useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate, Link, useParams } from 'react-router-dom'
import {
  ActionButtons,
  Button,
  Input,
  Label,
  Textarea,
} from '@citron-systems/citron-ui'
import { ArrowLeft, Copy, Plus, Printer, Send, Trash2 } from 'lucide-react'
import type { InvoiceDraft } from './invoiceDraft'
import {
  computeLineTotal,
  computeTax,
  computeTotal,
  draftSubtotal,
  formatUsd,
  newEmptyLineItem,
  normalizeInvoiceDraft,
} from './invoiceDraft'
import InvoiceDocumentCard from './InvoiceDocumentCard'
import { useToast } from '@/lib/ToastContext'
import { NEW_RECORD_ROUTE, useInvoiceStore } from './invoiceStore'
import { ACCOUNTING_BASE_PATH, accountingPath } from './accountingConstants'

export default function InvoiceReviewPage() {
  const { recordId } = useParams<{ recordId: string }>()
  const location = useLocation()
  const navigate = useNavigate()
  const { addToast } = useToast()
  const {
    getInvoice,
    createFromDraft,
    updateDraft,
    markSent,
    markPaid,
  } = useInvoiceStore()

  const isNew = recordId === NEW_RECORD_ROUTE

  const [form, setForm] = useState<InvoiceDraft | null>(null)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    if (!recordId) {
      navigate(accountingPath('create'), { replace: true })
      return
    }
    if (isNew) {
      const stateDraft = (location.state as { draft?: unknown } | undefined)?.draft
      if (!stateDraft) {
        navigate(accountingPath('create'), { replace: true })
        return
      }
      setForm(normalizeInvoiceDraft(stateDraft))
      setHydrated(true)
      return
    }
    const inv = getInvoice(recordId)
    if (!inv) {
      addToast({
        title: 'Invoice not found',
        description: 'This invoice no longer exists or the link is invalid.',
        variant: 'error',
      })
      navigate(ACCOUNTING_BASE_PATH, { replace: true })
      return
    }
    setForm(normalizeInvoiceDraft(inv.draft as unknown))
    setHydrated(true)
  }, [recordId, isNew, navigate, addToast, getInvoice, location.state])

  const update = useCallback(<K extends keyof InvoiceDraft>(key: K, value: InvoiceDraft[K]) => {
    setForm((prev) => (prev ? { ...prev, [key]: value } : prev))
  }, [])

  const updateLine = useCallback((lineId: string, patch: Partial<InvoiceDraft['lineItems'][number]>) => {
    setForm((prev) => {
      if (!prev) return prev
      return {
        ...prev,
        lineItems: prev.lineItems.map((li) => (li.id === lineId ? { ...li, ...patch } : li)),
      }
    })
  }, [])

  const addLine = useCallback(() => {
    setForm((prev) => (prev ? { ...prev, lineItems: [...prev.lineItems, newEmptyLineItem()] } : prev))
  }, [])

  const removeLine = useCallback((lineId: string) => {
    setForm((prev) => {
      if (!prev || prev.lineItems.length <= 1) return prev
      return { ...prev, lineItems: prev.lineItems.filter((li) => li.id !== lineId) }
    })
  }, [])

  const subtotal = useMemo(() => (form ? draftSubtotal(form) : 0), [form])

  const tax = useMemo(() => {
    if (!form) return 0
    return computeTax(subtotal, form.taxRatePct)
  }, [form, subtotal])

  const total = useMemo(() => computeTotal(subtotal, tax), [subtotal, tax])

  const handleSave = useCallback(() => {
    if (!form || !recordId) return
    if (isNew) {
      const id = createFromDraft(form, 'draft')
      addToast({ title: 'Draft saved', description: `${form.invoiceNumber} saved.`, variant: 'success' })
      navigate(accountingPath(`editor/${id}`), { replace: true, state: {} })
      return
    }
    updateDraft(recordId, form)
    addToast({ title: 'Saved', description: 'Invoice updated.', variant: 'success' })
  }, [form, recordId, isNew, createFromDraft, updateDraft, navigate, addToast])

  const handleSend = useCallback(() => {
    if (!form || !recordId) return
    if (isNew) {
      createFromDraft(form, 'pending')
    } else {
      markSent(recordId, form)
    }
    addToast({
      title: 'Invoice sent',
      description: `${form.invoiceNumber} sent to ${form.clientEmail}.`,
      variant: 'success',
    })
    navigate(ACCOUNTING_BASE_PATH, { replace: true })
  }, [form, recordId, isNew, createFromDraft, markSent, navigate, addToast])

  const handleMarkPaid = useCallback(() => {
    if (!form || !recordId || isNew) return
    markPaid(recordId)
    addToast({ title: 'Marked paid', description: `${form.invoiceNumber} is now paid.`, variant: 'success' })
  }, [form, recordId, isNew, markPaid, addToast])

  const handlePrint = useCallback(() => {
    window.print()
  }, [])

  const handleCopyTotals = useCallback(async () => {
    if (!form) return
    const lines = form.lineItems.map(
      (li) =>
        `  ${li.productLabel}: ${li.quantity} × ${formatUsd(li.unitPrice)} = ${formatUsd(computeLineTotal(li.quantity, li.unitPrice))}`,
    )
    const text = [
      `Invoice ${form.invoiceNumber}`,
      `Bill to: ${form.clientName}`,
      ...lines,
      `Subtotal: ${formatUsd(subtotal)}`,
      `Tax (${form.taxTypeLabel}): ${formatUsd(tax)}`,
      `Total: ${formatUsd(total)}`,
    ].join('\n')
    try {
      await navigator.clipboard.writeText(text)
      addToast({ title: 'Copied', description: 'Totals copied to clipboard.', variant: 'success' })
    } catch {
      addToast({ title: 'Copy failed', description: 'Clipboard is not available.', variant: 'error' })
    }
  }, [form, subtotal, tax, total, addToast])

  if (!hydrated || !form) {
    return (
      <div className="h-full flex items-center justify-center text-sm text-muted-foreground px-8">
        Loading…
      </div>
    )
  }

  const existingRecord = recordId && !isNew ? getInvoice(recordId) : undefined
  const showMarkPaid = Boolean(existingRecord && existingRecord.status !== 'paid')

  return (
    <div className="h-full flex flex-col min-h-0 print:h-auto">
      <div className="px-8 py-3 border-b border-border flex items-center gap-4 shrink-0 print:hidden">
        <Link
          to={accountingPath('create')}
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-3 h-3" />
          Back
        </Link>
        <span className="text-xs font-mono text-citrus-lemon">{form.invoiceNumber}</span>
      </div>

      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-2 gap-6 p-8 overflow-y-auto hide-scrollbar print:block print:overflow-visible">
        <div className="space-y-[var(--inkblot-spacing-4)] min-w-0 print:hidden">
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

          <div className="space-y-3">
            <div className="flex items-center justify-between gap-2">
              <Label>Line items</Label>
              <Button type="button" variant="secondary" className="h-8 px-3 text-xs" onClick={addLine}>
                <Plus className="h-3.5 w-3.5 mr-1" />
                Add line
              </Button>
            </div>
            <div className="space-y-4">
              {form.lineItems.map((li, idx) => (
                <div
                  key={li.id}
                  className="rounded-[var(--inkblot-radius-lg)] border border-[var(--inkblot-semantic-color-border-default)] p-[var(--inkblot-spacing-4)] space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-[var(--inkblot-semantic-color-text-tertiary)]">Line {idx + 1}</span>
                    {form.lineItems.length > 1 && (
                      <button
                        type="button"
                        className="text-[var(--inkblot-semantic-color-text-tertiary)] hover:text-[var(--inkblot-semantic-color-status-error)] p-1"
                        aria-label="Remove line"
                        onClick={() => removeLine(li.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                  <div className="space-y-[var(--inkblot-spacing-2)]">
                    <Label htmlFor={`desc-${li.id}`}>Description</Label>
                    <Input
                      id={`desc-${li.id}`}
                      value={li.productLabel}
                      onChange={(e) => updateLine(li.id, { productLabel: e.target.value })}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-[var(--inkblot-spacing-3)]">
                    <div className="space-y-[var(--inkblot-spacing-2)]">
                      <Label htmlFor={`qty-${li.id}`}>Quantity</Label>
                      <Input
                        id={`qty-${li.id}`}
                        type="number"
                        min={0}
                        value={li.quantity}
                        onChange={(e) => updateLine(li.id, { quantity: Math.max(0, Number(e.target.value) || 0) })}
                      />
                    </div>
                    <div className="space-y-[var(--inkblot-spacing-2)]">
                      <Label htmlFor={`unit-${li.id}`}>Unit price</Label>
                      <Input
                        id={`unit-${li.id}`}
                        type="number"
                        min={0}
                        step="0.01"
                        value={li.unitPrice}
                        onChange={(e) => updateLine(li.id, { unitPrice: Math.max(0, Number(e.target.value) || 0) })}
                      />
                    </div>
                  </div>
                </div>
              ))}
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

          <div className="flex flex-col gap-[var(--inkblot-spacing-3)] sm:flex-row sm:flex-wrap">
            <ActionButtons
              className="flex-wrap"
              buttons={[
                {
                  id: 'save',
                  label: 'Save changes',
                  variant: 'secondary',
                  onClick: handleSave,
                },
                {
                  id: 'send',
                  label: 'Send invoice',
                  variant: 'primary',
                  icon: <Send className="h-4 w-4" />,
                  onClick: handleSend,
                },
                {
                  id: 'print',
                  label: 'Print',
                  variant: 'secondary',
                  icon: <Printer className="h-4 w-4" />,
                  onClick: handlePrint,
                },
                {
                  id: 'copy',
                  label: 'Copy totals',
                  variant: 'secondary',
                  icon: <Copy className="h-4 w-4" />,
                  onClick: () => void handleCopyTotals(),
                },
              ]}
            />
            {showMarkPaid && (
              <Button type="button" variant="secondary" onClick={handleMarkPaid}>
                Mark paid
              </Button>
            )}
          </div>
        </div>

        <div className="min-w-0">
          <p className="text-sm font-medium text-foreground mb-[var(--inkblot-spacing-3)] print:mb-2">Preview</p>
          <InvoiceDocumentCard draft={form} documentId="invoice-print-root" />
        </div>
      </div>
    </div>
  )
}
