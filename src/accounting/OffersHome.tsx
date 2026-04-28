/**
 * OffersHome — lightweight list page for offers / proposals.
 *
 * Sibling of InvoicesHome but purposely simple: offers are rich documents, so
 * a big table is overkill. This is a card grid with the key metadata.
 */

import { useCallback, useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SearchBar, StatusBadge } from '@citron-systems/citron-ui'
import { FileText, Plus, Sparkles } from 'lucide-react'
import { useToast } from '@/lib/ToastContext'
import { accountingPath, bgDocumentTypeById } from './accountingConstants'
import {
  CRM_TOOLBAR_SEARCH_WRAP,
  CRM_TOOLBAR_SURFACE,
} from './crmToolbarClasses'
import { draftCurrency, draftGrandTotal, formatMoney } from './offerDraft'
import { NEW_OFFER_ROUTE, useOfferStore, type OfferRecord, type OfferStatus } from './offerStore'

function statusVariant(s: OfferStatus): 'success' | 'warning' | 'error' | 'info' {
  switch (s) {
    case 'paid':
      return 'success'
    case 'pending':
      return 'warning'
    case 'overdue':
      return 'error'
    default:
      return 'info'
  }
}

function statusLabel(s: OfferStatus): string {
  switch (s) {
    case 'paid':
      return 'Accepted'
    case 'pending':
      return 'Sent'
    case 'overdue':
      return 'Expired'
    default:
      return 'Draft'
  }
}

export default function OffersHome() {
  const navigate = useNavigate()
  const { addToast } = useToast()
  const { offers, duplicateOffer, deleteOffer } = useOfferStore()
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return offers
    return offers.filter((o) => {
      const d = o.draft
      return (
        (d.documentNumber ?? '').toLowerCase().includes(q) ||
        d.clientName.toLowerCase().includes(q) ||
        d.projectName.toLowerCase().includes(q) ||
        (d.clientEmail ?? '').toLowerCase().includes(q)
      )
    })
  }, [offers, search])

  const openOffer = useCallback(
    (recordId: string) => navigate(accountingPath(`offers/${recordId}`)),
    [navigate],
  )

  const handleDuplicate = useCallback(
    (rec: OfferRecord) => {
      const newId = duplicateOffer(rec.recordId)
      if (!newId) return
      addToast({ title: 'Duplicated', description: 'Draft copy created.', variant: 'success' })
      navigate(accountingPath(`offers/${newId}`))
    },
    [duplicateOffer, navigate, addToast],
  )

  const handleDelete = useCallback(
    (rec: OfferRecord) => {
      const ok = typeof window === 'undefined' ? true : window.confirm(`Delete offer for ${rec.draft.clientName || '—'}?`)
      if (!ok) return
      deleteOffer(rec.recordId)
      addToast({ title: 'Deleted', description: 'Offer removed.', variant: 'success' })
    },
    [deleteOffer, addToast],
  )

  return (
    <div className="w-full max-w-full min-w-0 px-3 min-[400px]:px-4 sm:px-6 lg:px-8 py-4 sm:py-6 pb-[max(1.25rem,env(safe-area-inset-bottom,0px))] sm:pb-6 overflow-y-auto hide-scrollbar h-full box-border">
      <div className={`mb-4 ${CRM_TOOLBAR_SURFACE}`}>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-2">
          <div className={`flex-1 min-w-0 [&_label]:sr-only ${CRM_TOOLBAR_SEARCH_WRAP}`}>
            <SearchBar
              label="Search offers"
              placeholder="Client, project, number or email…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full"
            />
          </div>
          <Link
            to={accountingPath(`offers/${NEW_OFFER_ROUTE}`)}
            className="inline-flex h-8 shrink-0 items-center gap-1.5 self-start rounded-lg bg-accent px-2.5 text-xs font-medium text-accent-foreground transition-all duration-150 ease-out hover:bg-accent/90 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 sm:self-center"
          >
            <Plus className="h-3.5 w-3.5 shrink-0" aria-hidden /> New offer
          </Link>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-border/50 bg-muted/15 px-6 py-14 text-center dark:bg-muted/10">
          <Sparkles className="h-6 w-6 text-citrus-lemon" aria-hidden />
          <div>
            <p className="text-sm font-medium text-foreground">No offers yet</p>
            <p className="mt-1 text-xs text-muted-foreground">
              {search.trim()
                ? 'No results for this search.'
                : 'Start from "New offer" — a live-preview builder.'}
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((rec) => {
            const d = rec.draft
            const docType = bgDocumentTypeById(d.documentTypeId)
            const total = draftGrandTotal(d)
            const currency = draftCurrency(d)
            const firstParagraph = d.blocks.find((b) => b.kind === 'paragraph' && b.text)
            const snippet = firstParagraph && firstParagraph.kind === 'paragraph' ? firstParagraph.text : ''
            return (
              <article
                key={rec.recordId}
                role="button"
                tabIndex={0}
                onClick={() => openOffer(rec.recordId)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    openOffer(rec.recordId)
                  }
                }}
                className="group relative flex cursor-pointer flex-col gap-3 rounded-xl border border-border/60 bg-background p-4 text-left shadow-none transition-colors duration-150 hover:bg-muted/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 dark:bg-card"
              >
                <header className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-accent/15 text-citrus-lemon">
                      <FileText className="h-3.5 w-3.5" aria-hidden />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                        {docType?.label ?? 'Offer'}
                      </p>
                      {d.documentNumber ? (
                        <p className="font-mono text-[11px] text-citrus-lemon truncate">{d.documentNumber}</p>
                      ) : null}
                    </div>
                  </div>
                  <StatusBadge label={statusLabel(rec.status)} variant={statusVariant(rec.status)} />
                </header>

                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-foreground truncate" title={d.projectName}>
                    {d.projectName || 'Untitled project'}
                  </h3>
                  <p className="text-xs text-muted-foreground truncate" title={d.clientName}>
                    {d.clientName || 'No client'}
                  </p>
                </div>

                {snippet ? (
                  <p className="line-clamp-2 text-xs text-[var(--inkblot-semantic-color-text-secondary)]">
                    {snippet}
                  </p>
                ) : null}

                <footer className="mt-auto flex items-end justify-between gap-2 pt-2 border-t border-border/60">
                  <div className="text-[11px] text-muted-foreground">
                    {d.issueDate ?? '—'}
                    {d.validUntil ? ` → ${d.validUntil}` : ''}
                  </div>
                  <div className="font-mono text-sm font-semibold text-foreground tabular-nums">
                    {total > 0 ? formatMoney(total, currency) : <span className="text-muted-foreground">—</span>}
                  </div>
                </footer>

                <div
                  className="pointer-events-none absolute inset-x-3 bottom-2 flex justify-end gap-1 opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleDuplicate(rec)
                    }}
                    className="rounded-md border border-border bg-background px-2 py-1 text-[10px] font-medium text-muted-foreground hover:text-foreground"
                  >
                    Duplicate
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleDelete(rec)
                    }}
                    className="rounded-md border border-border bg-background px-2 py-1 text-[10px] font-medium text-destructive hover:border-destructive/40"
                  >
                    Delete
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      )}
    </div>
  )
}
