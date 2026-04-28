import { useState } from 'react'
import { Dialog, DialogClose, DialogContent } from '@citron-systems/citron-ui'
import type { InvoiceProduct } from '@citron-systems/citron-ui'
import { Loader2 } from 'lucide-react'
import type { TaxPresetEntry } from './accountingConstants'
import { DRAGGABLE_DIALOG_SURFACE, DraggableDialogFrame } from './DraggableChrome'

const inputClass = [
  'min-h-[var(--inkblot-size-touch-target-min)] w-full rounded-[var(--inkblot-radius-md)]',
  'border border-[var(--inkblot-semantic-color-border-default)]',
  'bg-[var(--inkblot-semantic-color-background-primary)]',
  'px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-2)]',
  '[font:var(--inkblot-semantic-typography-body-small)]',
  'text-[var(--inkblot-semantic-color-text-primary)] placeholder:text-[var(--inkblot-semantic-color-text-tertiary)]',
  'transition-colors duration-[var(--inkblot-duration-fast)]',
  'focus:outline-none focus:ring-2 focus:ring-[var(--inkblot-semantic-color-border-focus)]',
].join(' ')

const errorBorder = 'border-[var(--inkblot-semantic-color-status-error)]'

function footerCancelClass() {
  return 'inline-flex min-h-[var(--inkblot-size-touch-target-min)] items-center justify-center rounded-[var(--inkblot-radius-lg)] border border-[var(--inkblot-semantic-color-border-default)] px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-2)] [font:var(--inkblot-semantic-typography-body-small)] text-[var(--inkblot-semantic-color-text-primary)] transition-colors duration-[var(--inkblot-duration-fast)] hover:bg-[var(--inkblot-semantic-color-background-tertiary)]'
}

function footerPrimaryClass() {
  return 'inline-flex min-h-[var(--inkblot-size-touch-target-min)] items-center justify-center gap-[var(--inkblot-spacing-2)] rounded-[var(--inkblot-radius-lg)] bg-[var(--inkblot-semantic-color-interactive-primary)] px-[var(--inkblot-spacing-6)] py-[var(--inkblot-spacing-2)] [font:var(--inkblot-semantic-typography-body-small)] font-medium text-[var(--inkblot-semantic-color-text-inverse)] transition-colors duration-[var(--inkblot-duration-fast)] hover:bg-[var(--inkblot-semantic-color-interactive-primary-hover)] disabled:opacity-[var(--inkblot-opacity-disabled)] disabled:cursor-not-allowed'
}

const labelClass =
  '[font:var(--inkblot-semantic-typography-body-small)] font-medium text-[var(--inkblot-semantic-color-text-secondary)]'

// —— Product ——

export function ProductCreateDialog({
  open,
  onOpenChange,
  onCreated,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  onCreated: (product: InvoiceProduct) => void
}) {
  const [name, setName] = useState('')
  const [unitPrice, setUnitPrice] = useState('')
  const [saving, setSaving] = useState(false)
  const [attempted, setAttempted] = useState(false)

  const priceNum = parseFloat(unitPrice)
  const valid = name.trim().length > 0 && !Number.isNaN(priceNum) && priceNum >= 0

  const reset = () => {
    setName('')
    setUnitPrice('')
    setSaving(false)
    setAttempted(false)
  }

  const submit = () => {
    setAttempted(true)
    if (!valid) return
    setSaving(true)
    setTimeout(() => {
      const id = `pr-${crypto.randomUUID().replace(/-/g, '').slice(0, 10)}`
      onCreated({ id, name: name.trim(), unitPrice: priceNum })
      reset()
    }, 350)
  }

  return (
    <Dialog open={open} onOpenChange={(n) => { onOpenChange(n); if (!n) reset() }}>
      <DialogContent showCloseButton={false} className={`sm:max-w-md ${DRAGGABLE_DIALOG_SURFACE}`}>
        <DraggableDialogFrame
          resetKey={open}
          title="New product or service"
          description="Add a line item you can reuse on invoices."
          footer={
            <>
              <DialogClose className={footerCancelClass()}>Cancel</DialogClose>
              <button type="button" disabled={saving} onClick={submit} className={footerPrimaryClass()}>
                {saving && <Loader2 className="h-4 w-4 animate-spin" />}
                Add product
              </button>
            </>
          }
        >
          <div className="grid gap-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-2)]">
            <div className="flex flex-col gap-[var(--inkblot-spacing-1)]">
              <label className={labelClass}>Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Retainer — Q2"
                className={`${inputClass} ${attempted && !name.trim() ? errorBorder : ''}`}
              />
              {attempted && !name.trim() && (
                <span className="text-xs text-[var(--inkblot-semantic-color-status-error)]">Required</span>
              )}
            </div>
            <div className="flex flex-col gap-[var(--inkblot-spacing-1)]">
              <label className={labelClass}>Unit price (USD)</label>
              <input
                type="number"
                min={0}
                step="0.01"
                value={unitPrice}
                onChange={(e) => setUnitPrice(e.target.value)}
                placeholder="0.00"
                className={`${inputClass} ${attempted && (Number.isNaN(priceNum) || priceNum < 0) ? errorBorder : ''}`}
              />
              {attempted && (Number.isNaN(priceNum) || priceNum < 0) && (
                <span className="text-xs text-[var(--inkblot-semantic-color-status-error)]">Enter a valid amount</span>
              )}
            </div>
          </div>
        </DraggableDialogFrame>
      </DialogContent>
    </Dialog>
  )
}

// —— Bank ——

export function BankAccountCreateDialog({
  open,
  onOpenChange,
  onCreated,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  onCreated: (displayLabel: string) => void
}) {
  const [bankName, setBankName] = useState('')
  const [lastFour, setLastFour] = useState('')
  const [saving, setSaving] = useState(false)
  const [attempted, setAttempted] = useState(false)

  const four = lastFour.replace(/\D/g, '').slice(0, 4)
  const valid = bankName.trim().length > 0

  const reset = () => {
    setBankName('')
    setLastFour('')
    setSaving(false)
    setAttempted(false)
  }

  const submit = () => {
    setAttempted(true)
    if (!valid) return
    setSaving(true)
    setTimeout(() => {
      const label = four.length === 4 ? `${bankName.trim()} (****${four})` : bankName.trim()
      onCreated(label)
      reset()
    }, 350)
  }

  return (
    <Dialog open={open} onOpenChange={(n) => { onOpenChange(n); if (!n) reset() }}>
      <DialogContent showCloseButton={false} className={`sm:max-w-md ${DRAGGABLE_DIALOG_SURFACE}`}>
        <DraggableDialogFrame
          resetKey={open}
          title="New bank account"
          description="Shown on the invoice for payment instructions."
          footer={
            <>
              <DialogClose className={footerCancelClass()}>Cancel</DialogClose>
              <button type="button" disabled={saving} onClick={submit} className={footerPrimaryClass()}>
                {saving && <Loader2 className="h-4 w-4 animate-spin" />}
                Add account
              </button>
            </>
          }
        >
          <div className="grid gap-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-2)]">
            <div className="flex flex-col gap-[var(--inkblot-spacing-1)]">
              <label className={labelClass}>Account label</label>
              <input
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                placeholder="e.g. Operating — Chase"
                className={`${inputClass} ${attempted && !bankName.trim() ? errorBorder : ''}`}
              />
              {attempted && !bankName.trim() && (
                <span className="text-xs text-[var(--inkblot-semantic-color-status-error)]">Required</span>
              )}
            </div>
            <div className="flex flex-col gap-[var(--inkblot-spacing-1)]">
              <label className={labelClass}>Last 4 digits (optional)</label>
              <input
                value={lastFour}
                onChange={(e) => setLastFour(e.target.value.replace(/\D/g, '').slice(0, 4))}
                placeholder="4821"
                className={inputClass}
              />
            </div>
          </div>
        </DraggableDialogFrame>
      </DialogContent>
    </Dialog>
  )
}

// —— Payment method ——

export function PaymentMethodCreateDialog({
  open,
  onOpenChange,
  onCreated,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  onCreated: (label: string) => void
}) {
  const [label, setLabel] = useState('')
  const [saving, setSaving] = useState(false)
  const [attempted, setAttempted] = useState(false)

  const reset = () => {
    setLabel('')
    setSaving(false)
    setAttempted(false)
  }

  const submit = () => {
    setAttempted(true)
    if (!label.trim()) return
    setSaving(true)
    setTimeout(() => {
      onCreated(label.trim())
      reset()
    }, 350)
  }

  return (
    <Dialog open={open} onOpenChange={(n) => { onOpenChange(n); if (!n) reset() }}>
      <DialogContent showCloseButton={false} className={`sm:max-w-md ${DRAGGABLE_DIALOG_SURFACE}`}>
        <DraggableDialogFrame
          resetKey={open}
          title="New payment method"
          description="Appears on the invoice (e.g. ACH, Wire, Wise)."
          footer={
            <>
              <DialogClose className={footerCancelClass()}>Cancel</DialogClose>
              <button type="button" disabled={saving} onClick={submit} className={footerPrimaryClass()}>
                {saving && <Loader2 className="h-4 w-4 animate-spin" />}
                Add method
              </button>
            </>
          }
        >
          <div className="py-[var(--inkblot-spacing-2)]">
            <label className={labelClass}>Method name</label>
            <input
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              placeholder="e.g. ACH transfer"
              className={`${inputClass} mt-[var(--inkblot-spacing-1)] ${attempted && !label.trim() ? errorBorder : ''}`}
            />
            {attempted && !label.trim() && (
              <span className="text-xs text-[var(--inkblot-semantic-color-status-error)] mt-1 block">Required</span>
            )}
          </div>
        </DraggableDialogFrame>
      </DialogContent>
    </Dialog>
  )
}

// —— Tax preset ——

export function TaxPresetCreateDialog({
  open,
  onOpenChange,
  onCreated,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  onCreated: (preset: TaxPresetEntry) => void
}) {
  const [taxLabel, setTaxLabel] = useState('')
  const [rate, setRate] = useState('')
  const [saving, setSaving] = useState(false)
  const [attempted, setAttempted] = useState(false)

  const rateNum = parseFloat(rate)
  const valid = taxLabel.trim().length > 0 && !Number.isNaN(rateNum) && rateNum >= 0 && rateNum <= 100

  const reset = () => {
    setTaxLabel('')
    setRate('')
    setSaving(false)
    setAttempted(false)
  }

  const submit = () => {
    setAttempted(true)
    if (!valid) return
    setSaving(true)
    setTimeout(() => {
      onCreated({ label: taxLabel.trim(), ratePct: rateNum })
      reset()
    }, 350)
  }

  return (
    <Dialog open={open} onOpenChange={(n) => { onOpenChange(n); if (!n) reset() }}>
      <DialogContent showCloseButton={false} className={`sm:max-w-md ${DRAGGABLE_DIALOG_SURFACE}`}>
        <DraggableDialogFrame
          resetKey={open}
          title="New tax rate"
          description="Add a custom rate (e.g. state sales tax)."
          footer={
            <>
              <DialogClose className={footerCancelClass()}>Cancel</DialogClose>
              <button type="button" disabled={saving} onClick={submit} className={footerPrimaryClass()}>
                {saving && <Loader2 className="h-4 w-4 animate-spin" />}
                Add tax rate
              </button>
            </>
          }
        >
          <div className="grid gap-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-2)]">
            <div className="flex flex-col gap-[var(--inkblot-spacing-1)]">
              <label className={labelClass}>Label</label>
              <input
                value={taxLabel}
                onChange={(e) => setTaxLabel(e.target.value)}
                placeholder="e.g. Sales tax 8.25%"
                className={`${inputClass} ${attempted && !taxLabel.trim() ? errorBorder : ''}`}
              />
            </div>
            <div className="flex flex-col gap-[var(--inkblot-spacing-1)]">
              <label className={labelClass}>Rate (%)</label>
              <input
                type="number"
                min={0}
                max={100}
                step="0.01"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                placeholder="8.25"
                className={`${inputClass} ${attempted && !valid && taxLabel.trim() ? errorBorder : ''}`}
              />
              {attempted && !valid && taxLabel.trim() && (
                <span className="text-xs text-[var(--inkblot-semantic-color-status-error)]">Enter 0–100</span>
              )}
            </div>
          </div>
        </DraggableDialogFrame>
      </DialogContent>
    </Dialog>
  )
}
