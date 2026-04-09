import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AdvancedDropdown, type AdvancedDropdownOption } from '@citron-systems/citron-ui'
import { Plus, Loader2 } from 'lucide-react'
import { useToast } from '@/lib/ToastContext'
import ClientCreateDialog, { type NewClient } from './ClientCreateDialog'
import type { InvoiceDraft } from './invoiceDraft'

interface ClientOption {
  id: string
  name: string
  email: string
}

const INITIAL_CLIENTS: ClientOption[] = [
  { id: 'cl-1', name: 'Acme Corp', email: 'billing@acme.com' },
  { id: 'cl-2', name: 'TechVentures', email: 'ap@techventures.io' },
  { id: 'cl-3', name: 'DataFlow Labs', email: 'finance@dataflow.dev' },
  { id: 'cl-4', name: 'GlobalTech', email: 'invoices@globaltech.com' },
]

const PRODUCTS: AdvancedDropdownOption[] = [
  { value: 'web-dev', label: 'Web Development', description: '$150 / hr' },
  { value: 'design', label: 'UI/UX Design', description: '$175 / hr' },
  { value: 'hosting', label: 'Hosting & Infrastructure', description: '$500 flat' },
  { value: 'consulting', label: 'Strategy Consulting', description: '$200 / hr' },
  { value: 'support', label: 'Support Package', description: '$1,200 / mo' },
]

const INVOICE_TYPES: AdvancedDropdownOption[] = [
  { value: 'standard', label: 'Standard' },
  { value: 'proforma', label: 'Proforma' },
  { value: 'credit-note', label: 'Credit Note' },
  { value: 'debit-note', label: 'Debit Note' },
]

const PAYMENT_METHODS: AdvancedDropdownOption[] = [
  { value: 'bank-transfer', label: 'Bank Transfer' },
  { value: 'credit-card', label: 'Credit Card' },
  { value: 'cash', label: 'Cash' },
  { value: 'check', label: 'Check' },
]

const TAX_CONFIGS: AdvancedDropdownOption[] = [
  { value: 'vat-21', label: 'VAT 21%' },
  { value: 'vat-10', label: 'VAT 10%' },
  { value: 'vat-0', label: 'VAT 0%' },
  { value: 'exempt', label: 'Tax Exempt' },
]

const BANK_ACCOUNTS: AdvancedDropdownOption[] = [
  { value: 'main', label: 'Main Account', description: '****4821' },
  { value: 'secondary', label: 'Secondary Account', description: '****7390' },
]

const PRODUCT_RATES: Record<string, number> = {
  'web-dev': 150,
  design: 175,
  hosting: 500,
  consulting: 200,
  support: 1200,
}

function findLabel(options: AdvancedDropdownOption[], value: string | null): string {
  if (!value) return ''
  return options.find((o) => o.value === value)?.label ?? ''
}

function taxRateFromId(id: string | null): number {
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

const labelClass = '[font:var(--inkblot-semantic-typography-body-small)] font-medium text-[var(--inkblot-semantic-color-text-secondary)]'
const errorText = 'text-xs text-[var(--inkblot-semantic-color-status-error)] mt-[var(--inkblot-spacing-1)]'

const quantityInputClass = [
  'min-h-[var(--inkblot-size-touch-target-min)] w-full rounded-[var(--inkblot-radius-md)]',
  'border border-[var(--inkblot-semantic-color-border-default)]',
  'bg-[var(--inkblot-semantic-color-background-primary)]',
  'px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-2)]',
  '[font:var(--inkblot-semantic-typography-body-small)]',
  'text-[var(--inkblot-semantic-color-text-primary)] placeholder:text-[var(--inkblot-semantic-color-text-tertiary)]',
  'transition-colors duration-[var(--inkblot-duration-fast)]',
  'focus:outline-none focus:ring-2 focus:ring-[var(--inkblot-semantic-color-border-focus)]',
].join(' ')

const notesClass = quantityInputClass + ' resize-y'

export default function SmartInvoiceBuilder() {
  const { addToast } = useToast()
  const navigate = useNavigate()

  const [clients, setClients] = useState<ClientOption[]>(INITIAL_CLIENTS)
  const [dialogOpen, setDialogOpen] = useState(false)

  const [clientId, setClientId] = useState<string | null>(null)
  const [productId, setProductId] = useState<string | null>(null)
  const [invoiceType, setInvoiceType] = useState<string | null>('standard')
  const [paymentMethod, setPaymentMethod] = useState<string | null>('bank-transfer')
  const [taxConfig, setTaxConfig] = useState<string | null>('vat-21')
  const [bankAccount, setBankAccount] = useState<string | null>('main')
  const [quantity, setQuantity] = useState<number | ''>(1)
  const [notes, setNotes] = useState('')

  const [attempted, setAttempted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const clientOptions: AdvancedDropdownOption[] = clients.map((c) => ({
    value: c.id,
    label: c.name,
    description: c.email,
  }))

  const handleClientCreated = (newClient: NewClient) => {
    setClients((prev) => [...prev, { id: newClient.id, name: newClient.name, email: newClient.email }])
    setClientId(newClient.id)
    setDialogOpen(false)
    addToast({ title: 'Client created', description: `${newClient.name} added.`, variant: 'success' })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setAttempted(true)
    if (!clientId || !productId || !quantity) return

    const client = clients.find((c) => c.id === clientId)
    if (!client) return

    setSubmitting(true)
    const draft: InvoiceDraft = {
      invoiceNumber: `INV-${Date.now().toString(36).toUpperCase()}`,
      clientName: client.name,
      clientEmail: client.email,
      productLabel: findLabel(PRODUCTS, productId),
      quantity: Number(quantity),
      unitPrice: PRODUCT_RATES[productId] ?? 0,
      invoiceTypeLabel: findLabel(INVOICE_TYPES, invoiceType),
      paymentMethodLabel: findLabel(PAYMENT_METHODS, paymentMethod),
      taxTypeLabel: findLabel(TAX_CONFIGS, taxConfig),
      taxRatePct: taxRateFromId(taxConfig),
      bankAccountLabel: findLabel(BANK_ACCOUNTS, bankAccount),
      notes,
      dueTerms: 'Net 30',
    }

    setTimeout(() => {
      setSubmitting(false)
      navigate('/editor', { state: { draft } })
    }, 300)
  }

  return (
    <div className="h-full overflow-y-auto hide-scrollbar px-8 py-6">
      <form
        onSubmit={handleSubmit}
        className="rounded-[var(--inkblot-radius-xl)] bg-[var(--inkblot-semantic-color-background-secondary)] p-[var(--inkblot-spacing-6)] max-w-4xl"
      >
        <h2 className="[font:var(--inkblot-semantic-typography-heading-4)] text-[var(--inkblot-semantic-color-text-primary)] mb-[var(--inkblot-spacing-6)]">
          New Invoice
        </h2>

        <div className="grid grid-cols-1 gap-[var(--inkblot-spacing-5)] md:grid-cols-2">
          {/* Client */}
          <div className="flex flex-col gap-[var(--inkblot-spacing-2)]">
            <div className="flex items-center justify-between">
              <label className={labelClass}>Client</label>
              <button
                type="button"
                onClick={() => setDialogOpen(true)}
                className="inline-flex items-center gap-1 text-xs text-[var(--inkblot-semantic-color-interactive-primary)] hover:underline"
              >
                <Plus className="h-3 w-3" /> Add client
              </button>
            </div>
            <AdvancedDropdown
              options={clientOptions}
              value={clientId ?? undefined}
              onChange={(v) => setClientId(v)}
              placeholder="Search client..."
              clearable
            />
            {attempted && !clientId && <p className={errorText}>Client is required</p>}
          </div>

          {/* Product / Service */}
          <div className="flex flex-col gap-[var(--inkblot-spacing-2)]">
            <label className={labelClass}>Product / Service</label>
            <AdvancedDropdown
              options={PRODUCTS}
              value={productId ?? undefined}
              onChange={(v) => setProductId(v)}
              placeholder="Search product..."
              clearable
            />
            {attempted && !productId && <p className={errorText}>Product is required</p>}
          </div>

          {/* Quantity */}
          <div className="flex flex-col gap-[var(--inkblot-spacing-2)]">
            <label className={labelClass}>Quantity</label>
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value === '' ? '' : Number(e.target.value))}
              placeholder="1"
              className={`${quantityInputClass} ${attempted && !quantity ? 'border-[var(--inkblot-semantic-color-status-error)]' : ''}`}
            />
            {attempted && !quantity && <p className={errorText}>Quantity is required</p>}
          </div>

          {/* Invoice type */}
          <div className="flex flex-col gap-[var(--inkblot-spacing-2)]">
            <label className={labelClass}>Invoice type</label>
            <AdvancedDropdown
              options={INVOICE_TYPES}
              value={invoiceType ?? undefined}
              onChange={(v) => setInvoiceType(v)}
              placeholder="Select type..."
            />
          </div>

          {/* Payment method */}
          <div className="flex flex-col gap-[var(--inkblot-spacing-2)]">
            <label className={labelClass}>Payment method</label>
            <AdvancedDropdown
              options={PAYMENT_METHODS}
              value={paymentMethod ?? undefined}
              onChange={(v) => setPaymentMethod(v)}
              placeholder="Select method..."
            />
          </div>

          {/* Tax configuration */}
          <div className="flex flex-col gap-[var(--inkblot-spacing-2)]">
            <label className={labelClass}>Tax configuration</label>
            <AdvancedDropdown
              options={TAX_CONFIGS}
              value={taxConfig ?? undefined}
              onChange={(v) => setTaxConfig(v)}
              placeholder="Select tax..."
            />
          </div>

          {/* Bank account */}
          <div className="flex flex-col gap-[var(--inkblot-spacing-2)]">
            <label className={labelClass}>Bank account</label>
            <AdvancedDropdown
              options={BANK_ACCOUNTS}
              value={bankAccount ?? undefined}
              onChange={(v) => setBankAccount(v)}
              placeholder="Select account..."
            />
          </div>

          {/* Notes */}
          <div className="flex flex-col gap-[var(--inkblot-spacing-2)] md:col-span-2">
            <label className={labelClass}>Notes</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              placeholder="Additional notes or terms..."
              className={notesClass}
            />
          </div>
        </div>

        <div className="mt-[var(--inkblot-spacing-6)] flex justify-end">
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex min-h-[var(--inkblot-size-touch-target-min)] items-center justify-center gap-[var(--inkblot-spacing-2)] rounded-[var(--inkblot-radius-lg)] bg-[var(--inkblot-semantic-color-interactive-primary)] px-[var(--inkblot-spacing-6)] py-[var(--inkblot-spacing-2)] [font:var(--inkblot-semantic-typography-body-small)] font-medium text-[var(--inkblot-semantic-color-text-inverse)] transition-colors duration-[var(--inkblot-duration-fast)] hover:bg-[var(--inkblot-semantic-color-interactive-primary-hover)] active:bg-[var(--inkblot-semantic-color-interactive-primary-active)] disabled:opacity-[var(--inkblot-opacity-disabled)] disabled:cursor-not-allowed"
          >
            {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
            Continue to editor
          </button>
        </div>
      </form>

      <ClientCreateDialog open={dialogOpen} onOpenChange={setDialogOpen} onCreated={handleClientCreated} />
    </div>
  )
}
