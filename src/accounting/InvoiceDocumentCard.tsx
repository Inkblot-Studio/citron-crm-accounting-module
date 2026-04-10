import type { InvoiceDraft } from './invoiceDraft'
import { computeLineTotal, computeTax, computeTotal, draftSubtotal, formatUsd } from './invoiceDraft'

interface InvoiceDocumentCardProps {
  draft: InvoiceDraft
  /** DOM id for print / PDF capture */
  documentId?: string
  className?: string
}

export default function InvoiceDocumentCard({ draft, documentId = 'invoice-document', className = '' }: InvoiceDocumentCardProps) {
  const subtotal = draftSubtotal(draft)
  const tax = computeTax(subtotal, draft.taxRatePct)
  const total = computeTotal(subtotal, tax)

  return (
    <div
      id={documentId}
      className={`rounded-[var(--inkblot-radius-xl)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-primary)] p-[var(--inkblot-spacing-6)] shadow-[var(--inkblot-shadow-sm)] ${className}`}
    >
      <div className="flex justify-between gap-4 border-b border-[var(--inkblot-semantic-color-border-default)] pb-[var(--inkblot-spacing-4)]">
        <div>
          <p className="text-xs uppercase tracking-wider text-[var(--inkblot-semantic-color-text-tertiary)]">Invoice</p>
          <p className="font-mono text-sm text-[var(--inkblot-semantic-color-status-warning)]">{draft.invoiceNumber}</p>
        </div>
        <div className="text-right text-xs text-[var(--inkblot-semantic-color-text-tertiary)]">
          <p>{draft.invoiceTypeLabel}</p>
          <p>{draft.paymentMethodLabel}</p>
        </div>
      </div>

      <div className="py-[var(--inkblot-spacing-4)] space-y-1">
        <p className="text-sm font-medium text-[var(--inkblot-semantic-color-text-primary)]">{draft.clientName}</p>
        <p className="text-xs text-[var(--inkblot-semantic-color-text-tertiary)]">{draft.clientEmail}</p>
        {(draft.issueDate || draft.dueDate) && (
          <p className="text-xs text-[var(--inkblot-semantic-color-text-tertiary)] pt-1">
            {draft.issueDate && <span>Issue: {draft.issueDate}</span>}
            {draft.issueDate && draft.dueDate && ' · '}
            {draft.dueDate && <span>Due: {draft.dueDate}</span>}
          </p>
        )}
      </div>

      <div className="border-t border-[var(--inkblot-semantic-color-border-default)] pt-[var(--inkblot-spacing-3)] space-y-2">
        {draft.lineItems.map((li) => (
          <div key={li.id} className="flex justify-between gap-3 text-sm">
            <span className="text-[var(--inkblot-semantic-color-text-secondary)] min-w-0">{li.productLabel}</span>
            <span className="font-mono text-[var(--inkblot-semantic-color-text-primary)] shrink-0 text-right">
              ×{li.quantity} @ {formatUsd(li.unitPrice)}
              <span className="text-[var(--inkblot-semantic-color-text-tertiary)] ml-2">
                = {formatUsd(computeLineTotal(li.quantity, li.unitPrice))}
              </span>
            </span>
          </div>
        ))}
        <div className="flex justify-between text-xs text-[var(--inkblot-semantic-color-text-tertiary)] pt-1">
          <span>Subtotal</span>
          <span className="font-mono">{formatUsd(subtotal)}</span>
        </div>
        <div className="flex justify-between text-xs text-[var(--inkblot-semantic-color-text-tertiary)]">
          <span>Tax ({draft.taxTypeLabel})</span>
          <span className="font-mono">{formatUsd(tax)}</span>
        </div>
        <div className="flex justify-between text-xs text-[var(--inkblot-semantic-color-text-tertiary)]">
          <span>Payment terms</span>
          <span>{draft.dueTerms}</span>
        </div>
        <div className="flex justify-between text-xs text-[var(--inkblot-semantic-color-text-tertiary)]">
          <span>Bank</span>
          <span className="text-right max-w-[60%]">{draft.bankAccountLabel}</span>
        </div>
      </div>

      <div className="border-t border-[var(--inkblot-semantic-color-border-default)] mt-[var(--inkblot-spacing-4)] pt-[var(--inkblot-spacing-4)] flex justify-between items-baseline">
        <span className="text-sm font-medium text-[var(--inkblot-semantic-color-text-primary)]">Total</span>
        <span className="text-lg font-mono text-[var(--inkblot-semantic-color-status-success)]">{formatUsd(total)}</span>
      </div>

      {draft.notes.trim() ? (
        <p className="mt-[var(--inkblot-spacing-4)] text-xs text-[var(--inkblot-semantic-color-text-tertiary)] border-t border-[var(--inkblot-semantic-color-border-default)] pt-[var(--inkblot-spacing-3)] whitespace-pre-wrap">
          {draft.notes}
        </p>
      ) : null}
    </div>
  )
}
