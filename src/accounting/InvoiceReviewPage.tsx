import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { AdvancedDropdown, Button, Input, Label, type AdvancedDropdownOption } from '@citron-systems/citron-ui'
import { ArrowLeft, Copy, FileDown, Loader2, Plus, Printer, Send, Trash2 } from 'lucide-react'
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
import AutoGrowTextarea from './AutoGrowTextarea'
import { CRM_HEADER_BTN_SECONDARY, CRM_PANEL_SURFACE } from './crmToolbarClasses'
import InvoiceDocumentCard from './InvoiceDocumentCard'
import { TokenDateField, INVOICE_DATE_TRIGGER_CLASS } from './TokenDateField'
import { useToast } from '@/lib/ToastContext'
import { NEW_RECORD_ROUTE, useInvoiceStore } from './invoiceStore'
import { exportInvoiceDraftToPdf } from './exportInvoicePdf'
import { InvoiceFormPageSkeleton } from './AccountingSkeletons'
import {
  ACCOUNTING_BASE_PATH,
  DUE_TERMS,
  FORM_BANK_ACCOUNTS,
  FORM_INVOICE_TYPES,
  FORM_PAYMENT_METHODS,
  FORM_TAX_TYPES,
  accountingPath,
  bankLabelFromFormLabel,
  resolveTaxRate,
} from './accountingConstants'

const labelClass = '[font:var(--inkblot-semantic-typography-body-small)] font-medium text-[var(--inkblot-semantic-color-text-secondary)]'

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
    extraBankLabels,
    extraPaymentMethods,
    extraTaxPresets,
  } = useInvoiceStore()

  const isNew = recordId === NEW_RECORD_ROUTE

  const [form, setForm] = useState<InvoiceDraft | null>(null)
  const [hydrated, setHydrated] = useState(false)
  const [pdfBusy, setPdfBusy] = useState(false)

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
      if (!prev) return prev
      return { ...prev, lineItems: prev.lineItems.filter((li) => li.id !== lineId) }
    })
  }, [])

  const mergedBankLabels = useMemo(() => {
    const seen = new Set<string>()
    const out: string[] = []
    for (const b of [...FORM_BANK_ACCOUNTS, ...extraBankLabels]) {
      if (!seen.has(b)) {
        seen.add(b)
        out.push(b)
      }
    }
    return out
  }, [extraBankLabels])

  const mergedPayments = useMemo(() => {
    const seen = new Set<string>()
    const out: string[] = []
    for (const p of [...FORM_PAYMENT_METHODS, ...extraPaymentMethods]) {
      if (!seen.has(p)) {
        seen.add(p)
        out.push(p)
      }
    }
    return out
  }, [extraPaymentMethods])

  const mergedTaxLabels = useMemo(() => {
    const seen = new Set<string>()
    const out: string[] = []
    for (const t of [...FORM_TAX_TYPES, ...extraTaxPresets.map((x) => x.label)]) {
      if (!seen.has(t)) {
        seen.add(t)
        out.push(t)
      }
    }
    return out
  }, [extraTaxPresets])

  const bankOptions = useMemo((): AdvancedDropdownOption[] => {
    const base = mergedBankLabels.map((b) => ({ value: b, label: b }))
    if (form?.bankAccountLabel) {
      const matches = mergedBankLabels.some((b) => bankLabelFromFormLabel(b) === form.bankAccountLabel)
      if (!matches && !base.some((o) => o.value === form.bankAccountLabel)) {
        return [{ value: form.bankAccountLabel, label: form.bankAccountLabel }, ...base]
      }
    }
    return base
  }, [form, mergedBankLabels])

  const bankDropdownValue = useMemo(() => {
    if (!form) return undefined
    const hit = mergedBankLabels.find((b) => bankLabelFromFormLabel(b) === form.bankAccountLabel)
    return hit ?? form.bankAccountLabel
  }, [form, mergedBankLabels])

  const paymentOptions = useMemo(
    (): AdvancedDropdownOption[] => mergedPayments.map((p) => ({ value: p, label: p })),
    [mergedPayments],
  )

  const taxOptions = useMemo(
    (): AdvancedDropdownOption[] => mergedTaxLabels.map((t) => ({ value: t, label: t })),
    [mergedTaxLabels],
  )

  const invoiceTypeOptions = useMemo(
    (): AdvancedDropdownOption[] => FORM_INVOICE_TYPES.map((t) => ({ value: t, label: t })),
    [],
  )

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
    const hasBillableLines = form.lineItems.some(
      (li) => li.productLabel.trim().length > 0 && li.quantity > 0,
    )
    if (!hasBillableLines) {
      addToast({
        title: 'Line items required',
        description: 'Add at least one line item with quantity before sending to the client.',
        variant: 'error',
      })
      return
    }
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

  const downloadPdf = useCallback(() => {
    if (!form) return
    setPdfBusy(true)
    try {
      exportInvoiceDraftToPdf(form, form.invoiceNumber)
      addToast({ title: 'PDF downloaded', description: 'Invoice exported.', variant: 'success' })
    } catch {
      addToast({ title: 'Export failed', description: 'Could not create PDF.', variant: 'error' })
    } finally {
      setPdfBusy(false)
    }
  }, [form, addToast])

  const setTaxType = useCallback(
    (label: string) => {
      setForm((prev) => {
        if (!prev) return prev
        return {
          ...prev,
          taxTypeLabel: label,
          taxRatePct: resolveTaxRate(label, extraTaxPresets),
        }
      })
    },
    [extraTaxPresets],
  )

  if (!hydrated || !form) {
    return <InvoiceFormPageSkeleton variant="edit" />
  }

  const existingRecord = recordId && !isNew ? getInvoice(recordId) : undefined
  const showMarkPaid = Boolean(existingRecord && existingRecord.status !== 'paid')

  return (
    <div className="h-full min-w-0 max-w-full overflow-y-auto hide-scrollbar print:h-auto pb-[max(2.5rem,env(safe-area-inset-bottom,0px))] print:pb-0">
      <div className="max-w-[1280px] mx-auto w-full min-w-0 px-3 min-[400px]:px-4 sm:px-6 lg:px-8 py-5 sm:py-8 pb-8 sm:pb-12 box-border print:px-0 print:py-0 print:max-w-none">
        <header className="mb-5 sm:mb-6 flex flex-wrap items-start sm:items-center gap-2 sm:gap-3 min-w-0 print:hidden">
          <Link
            to={ACCOUNTING_BASE_PATH}
            aria-label="Back to invoices"
            className={CRM_HEADER_BTN_SECONDARY}
          >
            <ArrowLeft className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
          </Link>
          <h1 className="text-lg min-[400px]:text-xl font-semibold tracking-tight text-foreground min-w-0 flex-1 basis-[12rem]">
            Edit invoice
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_min(100%,380px)] gap-6 sm:gap-8 lg:gap-8 items-start print:block">
          <div className="space-y-5 sm:space-y-6 min-w-0 print:hidden">
            <section
              className={`${CRM_PANEL_SURFACE} p-4 sm:p-5 md:p-[var(--inkblot-spacing-6)] space-y-[var(--inkblot-spacing-5)]`}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--inkblot-spacing-4)]">
                <div className="flex flex-col gap-[var(--inkblot-spacing-2)] sm:max-w-md">
                  <Label htmlFor="edit-client-name">Client</Label>
                  <Input
                    id="edit-client-name"
                    value={form.clientName}
                    onChange={(e) => update('clientName', e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-[var(--inkblot-spacing-2)] sm:max-w-md">
                  <Label htmlFor="edit-client-email">Email</Label>
                  <Input
                    id="edit-client-email"
                    type="email"
                    value={form.clientEmail}
                    onChange={(e) => update('clientEmail', e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <Label>Line items</Label>
                  <Button type="button" variant="secondary" className="h-8 w-8 p-0 shrink-0" onClick={addLine} aria-label="Add line item">
                    <Plus className="h-4 w-4" aria-hidden />
                  </Button>
                </div>
                {form.lineItems.length === 0 ? (
                  <p className="text-xs text-[var(--inkblot-semantic-color-text-tertiary)]">No line items yet. Use + to add one.</p>
                ) : null}
                <div className="space-y-4">
                  {form.lineItems.map((li) => (
                    <div
                      key={li.id}
                      className="rounded-lg border border-border/50 bg-muted/10 p-[var(--inkblot-spacing-4)] space-y-3 dark:bg-muted/15"
                    >
                      <div className="flex items-center justify-end">
                        <button
                          type="button"
                          className="text-[var(--inkblot-semantic-color-text-tertiary)] hover:text-[var(--inkblot-semantic-color-status-error)] p-1"
                          aria-label="Remove line"
                          onClick={() => removeLine(li.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--inkblot-spacing-3)]">
                        <div className="flex flex-col gap-[var(--inkblot-spacing-2)] md:col-span-2">
                          <Label htmlFor={`desc-${li.id}`}>Description</Label>
                          <Input
                            id={`desc-${li.id}`}
                            value={li.productLabel}
                            onChange={(e) => updateLine(li.id, { productLabel: e.target.value })}
                          />
                        </div>
                        <div className="flex flex-col gap-[var(--inkblot-spacing-2)]">
                          <Label htmlFor={`qty-${li.id}`}>Quantity</Label>
                          <Input
                            id={`qty-${li.id}`}
                            type="number"
                            min={0}
                            value={li.quantity}
                            onChange={(e) => updateLine(li.id, { quantity: Math.max(0, Number(e.target.value) || 0) })}
                          />
                        </div>
                        <div className="flex flex-col gap-[var(--inkblot-spacing-2)]">
                          <Label htmlFor={`unit-${li.id}`}>Unit price (USD)</Label>
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--inkblot-spacing-4)]">
                <div className="flex flex-col gap-[var(--inkblot-spacing-2)]">
                  <Label>Invoice type</Label>
                  <AdvancedDropdown
                    options={invoiceTypeOptions}
                    value={form.invoiceTypeLabel}
                    onChange={(v) => update('invoiceTypeLabel', v ?? 'Standard')}
                    placeholder="Type…"
                  />
                </div>
                <div className="flex flex-col gap-[var(--inkblot-spacing-2)]">
                  <Label>Payment method</Label>
                  <AdvancedDropdown
                    options={paymentOptions}
                    value={form.paymentMethodLabel}
                    onChange={(v) => update('paymentMethodLabel', v ?? '')}
                    placeholder="Select…"
                  />
                </div>
                <div className="flex flex-col gap-[var(--inkblot-spacing-2)]">
                  <Label>Tax</Label>
                  <AdvancedDropdown
                    options={taxOptions}
                    value={form.taxTypeLabel}
                    onChange={(v) => setTaxType(v ?? '')}
                    placeholder="Select…"
                  />
                </div>
                <div className="flex flex-col gap-[var(--inkblot-spacing-2)]">
                  <Label>Bank account</Label>
                  <AdvancedDropdown
                    options={bankOptions}
                    value={bankDropdownValue}
                    onChange={(v) => {
                      const next = v ?? ''
                      if (mergedBankLabels.includes(next)) {
                        update('bankAccountLabel', bankLabelFromFormLabel(next))
                      } else {
                        update('bankAccountLabel', next)
                      }
                    }}
                    placeholder="Select…"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-[var(--inkblot-spacing-2)]">
                <Label htmlFor="edit-notes">Notes (optional)</Label>
                <AutoGrowTextarea
                  id="edit-notes"
                  value={form.notes}
                  onChange={(e) => update('notes', e.target.value)}
                  placeholder="Internal note or message to the client…"
                />
              </div>
            </section>

            <section className={`${CRM_PANEL_SURFACE} p-4 sm:p-5 md:p-[var(--inkblot-spacing-6)]`}>
              <h2 className="text-sm font-semibold text-foreground mb-3">Dates & terms</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--inkblot-spacing-4)] mb-[var(--inkblot-spacing-4)]">
                <TokenDateField
                  id="edit-issue-date"
                  label="Issue date"
                  labelClassName={labelClass}
                  value={form.issueDate ?? ''}
                  onChange={(iso) => update('issueDate', iso)}
                  triggerClassName={INVOICE_DATE_TRIGGER_CLASS}
                />
                <TokenDateField
                  id="edit-due-date"
                  label="Due date"
                  labelClassName={labelClass}
                  value={form.dueDate ?? ''}
                  onChange={(iso) => update('dueDate', iso)}
                  triggerClassName={INVOICE_DATE_TRIGGER_CLASS}
                />
              </div>
              <div className="flex flex-col gap-[var(--inkblot-spacing-2)] max-w-md">
                <label className={labelClass}>Payment terms</label>
                <AdvancedDropdown
                  options={DUE_TERMS}
                  value={form.dueTerms}
                  onChange={(v) => update('dueTerms', v ?? 'Net 30')}
                  placeholder="Select terms…"
                />
              </div>
            </section>

            <div className="flex flex-col-reverse sm:flex-row sm:flex-wrap sm:items-center sm:justify-end gap-2 sm:gap-3 pt-2">
              <Button
                type="button"
                variant="secondary"
                disabled={pdfBusy}
                onClick={downloadPdf}
                className="w-full sm:w-auto"
              >
                {pdfBusy ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <FileDown className="h-4 w-4 mr-2" />}
                Download PDF
              </Button>
              <Button type="button" variant="secondary" onClick={handlePrint} className="w-full sm:w-auto">
                <Printer className="h-4 w-4 mr-2" />
                Print
              </Button>
              <Button type="button" variant="secondary" onClick={() => void handleCopyTotals()} className="w-full sm:w-auto">
                <Copy className="h-4 w-4 mr-2" />
                Copy totals
              </Button>
              {showMarkPaid ? (
                <Button type="button" variant="secondary" onClick={handleMarkPaid} className="w-full sm:w-auto">
                  Mark paid
                </Button>
              ) : null}
              <Button type="button" variant="secondary" onClick={handleSave} className="w-full sm:w-auto">
                Save changes
              </Button>
              <button
                type="button"
                onClick={handleSend}
                className="inline-flex w-full sm:w-auto min-h-[var(--inkblot-size-touch-target-min)] items-center justify-center gap-[var(--inkblot-spacing-2)] rounded-[var(--inkblot-radius-lg)] bg-[var(--inkblot-semantic-color-interactive-primary)] px-[var(--inkblot-spacing-6)] py-[var(--inkblot-spacing-2)] [font:var(--inkblot-semantic-typography-body-small)] font-medium text-[var(--inkblot-semantic-color-text-inverse)] transition-colors duration-[var(--inkblot-duration-fast)] hover:bg-[var(--inkblot-semantic-color-interactive-primary-hover)]"
              >
                <Send className="h-4 w-4" />
                Send invoice
              </button>
            </div>
          </div>

          <aside className="lg:sticky lg:top-4 w-full min-w-0 max-w-xl lg:max-w-none mx-auto lg:mx-0 space-y-3 print:max-w-none print:mx-0">
            <div className="flex items-center justify-between gap-3 rounded-lg border border-border/60 bg-muted/15 px-3 py-2 dark:bg-muted/10 print:hidden">
              <p className="font-mono text-xs text-citrus-lemon truncate min-w-0">{form.invoiceNumber}</p>
              <Button type="button" variant="secondary" className="shrink-0 h-8 px-3" disabled={pdfBusy} onClick={downloadPdf}>
                {pdfBusy ? <Loader2 className="h-4 w-4 animate-spin" /> : <FileDown className="h-4 w-4" />}
              </Button>
            </div>
            <InvoiceDocumentCard draft={form} documentId="invoice-print-root" />
          </aside>
        </div>
      </div>
    </div>
  )
}
