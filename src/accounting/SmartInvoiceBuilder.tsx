import { useCallback, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  AdvancedDropdown,
  Button,
  Input,
  Label,
  Textarea,
  type AdvancedDropdownOption,
} from '@citron-systems/citron-ui'
import type { InvoiceProduct } from '@citron-systems/citron-ui'
import { FileDown, Loader2, Plus, Trash2 } from 'lucide-react'
import { useToast } from '@/lib/ToastContext'
import ClientCreateDialog, { type NewClient } from './ClientCreateDialog'
import InvoiceDocumentCard from './InvoiceDocumentCard'
import {
  BankAccountCreateDialog,
  PaymentMethodCreateDialog,
  ProductCreateDialog,
  TaxPresetCreateDialog,
} from './InvoiceQuickCreateDialogs'
import type { InvoiceDraft } from './invoiceDraft'
import { newEmptyLineItem } from './invoiceDraft'
import { NEW_RECORD_ROUTE, useInvoiceStore } from './invoiceStore'
import { exportInvoiceDraftToPdf } from './exportInvoicePdf'
import {
  INVOICE_PRODUCTS,
  FORM_BANK_ACCOUNTS,
  FORM_INVOICE_TYPES,
  FORM_PAYMENT_METHODS,
  FORM_TAX_TYPES,
  bankLabelFromFormLabel,
  resolveTaxRate,
  accountingPath,
} from './accountingConstants'

const ADD_CLIENT = '__citron_add_client__'
const ADD_PRODUCT = '__citron_add_product__'
const ADD_BANK = '__citron_add_bank__'
const ADD_PAYMENT = '__citron_add_payment__'
const ADD_TAX = '__citron_add_tax__'

function isoToday(): string {
  const d = new Date()
  return d.toISOString().slice(0, 10)
}

function isoPlusDays(days: number): string {
  const d = new Date()
  d.setDate(d.getDate() + days)
  return d.toISOString().slice(0, 10)
}

const dateInputClass = [
  'min-h-[var(--inkblot-size-touch-target-min)] w-full rounded-[var(--inkblot-radius-md)]',
  'border border-[var(--inkblot-semantic-color-border-default)]',
  'bg-[var(--inkblot-semantic-color-background-primary)]',
  'px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-2)]',
  '[font:var(--inkblot-semantic-typography-body-small)]',
  'text-[var(--inkblot-semantic-color-text-primary)]',
  'transition-colors duration-[var(--inkblot-duration-fast)]',
  'focus:outline-none focus:ring-2 focus:ring-[var(--inkblot-semantic-color-border-focus)]',
].join(' ')

const labelClass = '[font:var(--inkblot-semantic-typography-body-small)] font-medium text-[var(--inkblot-semantic-color-text-secondary)]'

const DUE_TERMS: AdvancedDropdownOption[] = [
  { value: 'Due on receipt', label: 'Due on receipt' },
  { value: 'Net 7', label: 'Net 7' },
  { value: 'Net 15', label: 'Net 15' },
  { value: 'Net 30', label: 'Net 30' },
  { value: 'Net 45', label: 'Net 45' },
  { value: 'Net 60', label: 'Net 60' },
]

interface LineRow {
  id: string
  productId: string | null
  quantity: number
  unitPrice: number
}

function newLineRow(): LineRow {
  return {
    id: crypto.randomUUID(),
    productId: null,
    quantity: 1,
    unitPrice: 0,
  }
}

function buildDraft(
  clientId: string,
  lines: LineRow[],
  clients: { id: string; name: string; email: string }[],
  products: InvoiceProduct[],
  extraTaxPresets: { label: string; ratePct: number }[],
  issueDate: string,
  dueDate: string,
  dueTerms: string,
  invoiceNumber: string,
  invoiceType: string,
  paymentMethod: string,
  taxType: string,
  bankAccount: string,
  notes: string,
): InvoiceDraft | null {
  if (!clientId) return null
  const client = clients.find((c) => c.id === clientId)
  if (!client) return null

  const valid = lines.filter((l) => l.productId && l.quantity >= 1)
  if (valid.length === 0) return null

  const lineItems = valid.map((l) => {
    const p = products.find((x) => x.id === l.productId)
    return {
      id: l.id,
      productLabel: p?.name ?? 'Item',
      quantity: l.quantity,
      unitPrice: Math.max(0, l.unitPrice),
    }
  })

  return {
    invoiceNumber,
    clientName: client.name,
    clientEmail: client.email,
    lineItems,
    invoiceTypeLabel: invoiceType || 'Standard',
    paymentMethodLabel: paymentMethod,
    taxTypeLabel: taxType,
    taxRatePct: resolveTaxRate(taxType, extraTaxPresets),
    bankAccountLabel: bankLabelFromFormLabel(bankAccount),
    notes: notes ?? '',
    dueTerms,
    issueDate,
    dueDate,
  }
}

export default function SmartInvoiceBuilder() {
  const { addToast } = useToast()
  const navigate = useNavigate()
  const {
    clients,
    addClient,
    extraProducts,
    extraBankLabels,
    extraPaymentMethods,
    extraTaxPresets,
    addProduct,
    addBankLabel,
    addPaymentMethod,
    addTaxPreset,
  } = useInvoiceStore()

  const [invoiceNumber] = useState(() => `INV-${Date.now().toString(36).toUpperCase()}`)
  const [clientId, setClientId] = useState('')
  const [lines, setLines] = useState<LineRow[]>(() => [newLineRow()])
  const [invoiceType, setInvoiceType] = useState('Standard')
  const [paymentMethod, setPaymentMethod] = useState('Bank Transfer')
  const [taxType, setTaxType] = useState('VAT 21%')
  const [bankAccount, setBankAccount] = useState('Main Account')
  const [notes, setNotes] = useState('')
  const [issueDate, setIssueDate] = useState(isoToday)
  const [dueDate, setDueDate] = useState(() => isoPlusDays(30))
  const [dueTerms, setDueTerms] = useState<string | null>('Net 30')
  const [attempted, setAttempted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [pdfBusy, setPdfBusy] = useState(false)

  const [openClient, setOpenClient] = useState(false)
  const [openProduct, setOpenProduct] = useState(false)
  const [productDialogLineId, setProductDialogLineId] = useState<string | null>(null)
  const [openBank, setOpenBank] = useState(false)
  const [openPayment, setOpenPayment] = useState(false)
  const [openTax, setOpenTax] = useState(false)

  const mergedProducts = useMemo(() => [...INVOICE_PRODUCTS, ...extraProducts], [extraProducts])
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

  const clientOptions = useMemo(
    (): AdvancedDropdownOption[] => [
      ...clients.map((c) => ({ value: c.id, label: c.name })),
      { value: ADD_CLIENT, label: '+ Add new client…' },
    ],
    [clients],
  )

  const productOptions = useMemo(
    (): AdvancedDropdownOption[] => [
      ...mergedProducts.map((p) => ({ value: p.id, label: p.name })),
      { value: ADD_PRODUCT, label: '+ Add new product…' },
    ],
    [mergedProducts],
  )

  const bankOptions = useMemo(
    (): AdvancedDropdownOption[] => [
      ...mergedBankLabels.map((b) => ({ value: b, label: b })),
      { value: ADD_BANK, label: '+ Add new bank account…' },
    ],
    [mergedBankLabels],
  )

  const paymentOptions = useMemo(
    (): AdvancedDropdownOption[] => [
      ...mergedPayments.map((p) => ({ value: p, label: p })),
      { value: ADD_PAYMENT, label: '+ Add new payment method…' },
    ],
    [mergedPayments],
  )

  const taxOptions = useMemo(
    (): AdvancedDropdownOption[] => [
      ...mergedTaxLabels.map((t) => ({ value: t, label: t })),
      { value: ADD_TAX, label: '+ Add new tax rate…' },
    ],
    [mergedTaxLabels],
  )

  const invoiceTypeOptions = useMemo(
    (): AdvancedDropdownOption[] => FORM_INVOICE_TYPES.map((t) => ({ value: t, label: t })),
    [],
  )

  const previewDraft: InvoiceDraft = useMemo(() => {
    const client = clients.find((c) => c.id === clientId)
    const terms = dueTerms ?? 'Net 30'
    const built = lines
      .filter((l) => l.productId)
      .map((l) => {
        const p = mergedProducts.find((x) => x.id === l.productId)
        return {
          id: l.id,
          productLabel: p?.name ?? '—',
          quantity: Math.max(0, l.quantity),
          unitPrice: Math.max(0, l.unitPrice),
        }
      })
    const lineItems =
      built.length > 0
        ? built
        : [{ ...newEmptyLineItem(), productLabel: '— Add line items —', quantity: 0, unitPrice: 0 }]

    return {
      invoiceNumber,
      clientName: client?.name ?? '— Select client —',
      clientEmail: client?.email ?? '—',
      lineItems,
      invoiceTypeLabel: invoiceType || '—',
      paymentMethodLabel: paymentMethod || '—',
      taxTypeLabel: taxType || '—',
      taxRatePct: resolveTaxRate(taxType, extraTaxPresets),
      bankAccountLabel: bankAccount ? bankLabelFromFormLabel(bankAccount) : '—',
      notes,
      dueTerms: terms,
      issueDate,
      dueDate,
    }
  }, [
    clients,
    clientId,
    lines,
    mergedProducts,
    extraTaxPresets,
    issueDate,
    dueDate,
    dueTerms,
    invoiceNumber,
    invoiceType,
    paymentMethod,
    taxType,
    bankAccount,
    notes,
  ])

  const setLine = useCallback((id: string, patch: Partial<LineRow>) => {
    setLines((prev) => prev.map((row) => (row.id === id ? { ...row, ...patch } : row)))
  }, [])

  const onProductSelect = useCallback((lineId: string, value: string | null) => {
    if (value === ADD_PRODUCT) {
      setProductDialogLineId(lineId)
      setOpenProduct(true)
      return
    }
    if (!value) {
      setLine(lineId, { productId: null, unitPrice: 0 })
      return
    }
    const p = mergedProducts.find((x) => x.id === value)
    setLine(lineId, { productId: value, unitPrice: p?.unitPrice ?? 0 })
  }, [mergedProducts, setLine])

  const handleClientCreated = (newClient: NewClient) => {
    addClient({ id: newClient.id, name: newClient.name, email: newClient.email })
    setClientId(newClient.id)
    setOpenClient(false)
    addToast({ title: 'Client created', description: `${newClient.name} added.`, variant: 'success' })
  }

  const handleProductCreated = (p: InvoiceProduct) => {
    addProduct(p)
    if (productDialogLineId) {
      setLine(productDialogLineId, { productId: p.id, unitPrice: p.unitPrice ?? 0 })
    }
    setProductDialogLineId(null)
    setOpenProduct(false)
    addToast({ title: 'Product added', description: `${p.name} is available in the list.`, variant: 'success' })
  }

  const handleBankCreated = (label: string) => {
    addBankLabel(label)
    setBankAccount(label)
    setOpenBank(false)
    addToast({ title: 'Bank account added', description: label, variant: 'success' })
  }

  const handlePaymentCreated = (label: string) => {
    addPaymentMethod(label)
    setPaymentMethod(label)
    setOpenPayment(false)
    addToast({ title: 'Payment method added', description: label, variant: 'success' })
  }

  const handleTaxCreated = (preset: { label: string; ratePct: number }) => {
    addTaxPreset(preset)
    setTaxType(preset.label)
    setOpenTax(false)
    addToast({ title: 'Tax rate added', description: preset.label, variant: 'success' })
  }

  const downloadPdf = useCallback(() => {
    setPdfBusy(true)
    try {
      exportInvoiceDraftToPdf(previewDraft, invoiceNumber)
      addToast({ title: 'PDF downloaded', description: 'Invoice exported.', variant: 'success' })
    } catch {
      addToast({ title: 'Export failed', description: 'Could not create PDF.', variant: 'error' })
    } finally {
      setPdfBusy(false)
    }
  }, [addToast, invoiceNumber, previewDraft])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setAttempted(true)
    const draft = buildDraft(
      clientId,
      lines,
      clients,
      mergedProducts,
      extraTaxPresets,
      issueDate,
      dueDate,
      dueTerms ?? 'Net 30',
      invoiceNumber,
      invoiceType,
      paymentMethod,
      taxType,
      bankAccount,
      notes,
    )
    if (!draft) return

    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      navigate(accountingPath(`editor/${NEW_RECORD_ROUTE}`), { state: { draft } })
    }, 280)
  }

  const addLine = () => setLines((prev) => [...prev, newLineRow()])
  const removeLine = (id: string) => {
    setLines((prev) => (prev.length <= 1 ? prev : prev.filter((r) => r.id !== id)))
  }

  const clientError = attempted && !clientId
  const linesError = attempted && !lines.some((l) => l.productId && l.quantity >= 1)

  return (
    <div className="h-full overflow-y-auto hide-scrollbar">
      <div className="max-w-[1280px] mx-auto px-8 py-8 pb-12">
        <header className="mb-6">
          <h1 className="text-xl font-semibold tracking-tight text-foreground">Create invoice</h1>
        </header>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 xl:grid-cols-[1fr_400px] xl:gap-10 gap-10 items-start">
          <div className="space-y-6 min-w-0">
            <section className="rounded-[var(--inkblot-radius-xl)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-primary)] p-[var(--inkblot-spacing-6)] shadow-[var(--inkblot-shadow-sm)] space-y-[var(--inkblot-spacing-5)]">
              <div className="flex flex-col gap-[var(--inkblot-spacing-2)] max-w-md">
                <Label htmlFor="create-client">Client</Label>
                <AdvancedDropdown
                  options={clientOptions}
                  value={clientId || undefined}
                  onChange={(v) => {
                    if (v === ADD_CLIENT) {
                      setOpenClient(true)
                      return
                    }
                    setClientId(v ?? '')
                  }}
                  placeholder="Select client…"
                />
                {clientError && <span className="text-xs text-[var(--inkblot-semantic-color-status-error)]">Select a client.</span>}
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <Label>Line items</Label>
                  <Button type="button" variant="secondary" className="h-8 px-3 text-xs" onClick={addLine}>
                    <Plus className="h-3.5 w-3.5 mr-1" />
                    Add line
                  </Button>
                </div>
                {linesError && (
                  <p className="text-xs text-[var(--inkblot-semantic-color-status-error)]">Add at least one product with quantity ≥ 1.</p>
                )}
                <div className="space-y-4">
                  {lines.map((row, idx) => (
                    <div
                      key={row.id}
                      className="rounded-[var(--inkblot-radius-lg)] border border-[var(--inkblot-semantic-color-border-default)] p-[var(--inkblot-spacing-4)] space-y-3"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-medium text-[var(--inkblot-semantic-color-text-tertiary)]">Line {idx + 1}</span>
                        {lines.length > 1 && (
                          <button
                            type="button"
                            className="text-[var(--inkblot-semantic-color-text-tertiary)] hover:text-[var(--inkblot-semantic-color-status-error)] p-1"
                            aria-label="Remove line"
                            onClick={() => removeLine(row.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--inkblot-spacing-3)]">
                        <div className="flex flex-col gap-[var(--inkblot-spacing-2)] md:col-span-2">
                          <span className={labelClass}>Product</span>
                          <AdvancedDropdown
                            options={productOptions}
                            value={row.productId ?? undefined}
                            onChange={(v) => onProductSelect(row.id, v)}
                            placeholder="Select product…"
                          />
                        </div>
                        <div className="flex flex-col gap-[var(--inkblot-spacing-2)]">
                          <Label htmlFor={`qty-${row.id}`}>Quantity</Label>
                          <Input
                            id={`qty-${row.id}`}
                            type="number"
                            min={1}
                            value={row.quantity}
                            onChange={(e) => setLine(row.id, { quantity: Math.max(1, Number(e.target.value) || 1) })}
                          />
                        </div>
                        <div className="flex flex-col gap-[var(--inkblot-spacing-2)]">
                          <Label htmlFor={`unit-${row.id}`}>Unit price (USD)</Label>
                          <Input
                            id={`unit-${row.id}`}
                            type="number"
                            min={0}
                            step="0.01"
                            value={row.unitPrice}
                            onChange={(e) => setLine(row.id, { unitPrice: Math.max(0, Number(e.target.value) || 0) })}
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
                    value={invoiceType}
                    onChange={(v) => setInvoiceType(v ?? 'Standard')}
                    placeholder="Type…"
                  />
                </div>
                <div className="flex flex-col gap-[var(--inkblot-spacing-2)]">
                  <Label>Payment method</Label>
                  <AdvancedDropdown
                    options={paymentOptions}
                    value={paymentMethod}
                    onChange={(v) => {
                      if (v === ADD_PAYMENT) {
                        setOpenPayment(true)
                        return
                      }
                      setPaymentMethod(v ?? '')
                    }}
                    placeholder="Select…"
                  />
                </div>
                <div className="flex flex-col gap-[var(--inkblot-spacing-2)]">
                  <Label>Tax</Label>
                  <AdvancedDropdown
                    options={taxOptions}
                    value={taxType}
                    onChange={(v) => {
                      if (v === ADD_TAX) {
                        setOpenTax(true)
                        return
                      }
                      setTaxType(v ?? '')
                    }}
                    placeholder="Select…"
                  />
                </div>
                <div className="flex flex-col gap-[var(--inkblot-spacing-2)]">
                  <Label>Bank account</Label>
                  <AdvancedDropdown
                    options={bankOptions}
                    value={bankAccount}
                    onChange={(v) => {
                      if (v === ADD_BANK) {
                        setOpenBank(true)
                        return
                      }
                      setBankAccount(v ?? '')
                    }}
                    placeholder="Select…"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-[var(--inkblot-spacing-2)]">
                <Label htmlFor="create-notes">Notes (optional)</Label>
                <Textarea
                  id="create-notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  resize="vertical"
                  placeholder="Internal note or message to the client…"
                />
              </div>
            </section>

            <section className="rounded-[var(--inkblot-radius-xl)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-primary)] p-[var(--inkblot-spacing-6)] shadow-[var(--inkblot-shadow-sm)]">
              <h2 className="text-sm font-semibold text-foreground mb-3">Dates & terms</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--inkblot-spacing-4)] mb-[var(--inkblot-spacing-4)]">
                <div className="flex flex-col gap-[var(--inkblot-spacing-2)]">
                  <label className={labelClass} htmlFor="issue-date">
                    Issue date
                  </label>
                  <input
                    id="issue-date"
                    type="date"
                    value={issueDate}
                    onChange={(e) => setIssueDate(e.target.value)}
                    className={dateInputClass}
                  />
                </div>
                <div className="flex flex-col gap-[var(--inkblot-spacing-2)]">
                  <label className={labelClass} htmlFor="due-date">
                    Due date
                  </label>
                  <input
                    id="due-date"
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className={dateInputClass}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[var(--inkblot-spacing-2)] max-w-md">
                <label className={labelClass}>Payment terms</label>
                <AdvancedDropdown
                  options={DUE_TERMS}
                  value={dueTerms ?? undefined}
                  onChange={(v) => setDueTerms(v)}
                  placeholder="Select terms…"
                />
              </div>
            </section>

            <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-end gap-3 pt-2">
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
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex w-full sm:w-auto min-h-[var(--inkblot-size-touch-target-min)] items-center justify-center gap-[var(--inkblot-spacing-2)] rounded-[var(--inkblot-radius-lg)] bg-[var(--inkblot-semantic-color-interactive-primary)] px-[var(--inkblot-spacing-6)] py-[var(--inkblot-spacing-2)] [font:var(--inkblot-semantic-typography-body-small)] font-medium text-[var(--inkblot-semantic-color-text-inverse)] transition-colors duration-[var(--inkblot-duration-fast)] hover:bg-[var(--inkblot-semantic-color-interactive-primary-hover)] disabled:opacity-[var(--inkblot-opacity-disabled)] disabled:cursor-not-allowed"
              >
                {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
                Continue to editor
              </button>
            </div>
          </div>

          <aside className="xl:sticky xl:top-6 w-full space-y-3">
            <div className="flex items-center justify-between gap-3 rounded-[var(--inkblot-radius-lg)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)] px-3 py-2.5">
              <p className="font-mono text-xs text-citrus-lemon truncate min-w-0">{invoiceNumber}</p>
              <Button
                type="button"
                variant="secondary"
                className="shrink-0 h-8 px-3"
                disabled={pdfBusy}
                onClick={downloadPdf}
              >
                {pdfBusy ? <Loader2 className="h-4 w-4 animate-spin" /> : <FileDown className="h-4 w-4" />}
              </Button>
            </div>
            <InvoiceDocumentCard draft={previewDraft} documentId="invoice-create-preview" />
          </aside>
        </form>
      </div>

      <ClientCreateDialog open={openClient} onOpenChange={setOpenClient} onCreated={handleClientCreated} />
      <ProductCreateDialog
        open={openProduct}
        onOpenChange={(o) => {
          setOpenProduct(o)
          if (!o) setProductDialogLineId(null)
        }}
        onCreated={handleProductCreated}
      />
      <BankAccountCreateDialog open={openBank} onOpenChange={setOpenBank} onCreated={handleBankCreated} />
      <PaymentMethodCreateDialog open={openPayment} onOpenChange={setOpenPayment} onCreated={handlePaymentCreated} />
      <TaxPresetCreateDialog open={openTax} onOpenChange={setOpenTax} onCreated={handleTaxCreated} />
    </div>
  )
}
