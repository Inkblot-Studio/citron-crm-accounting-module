/**
 * OfferBuilder — a thin host around OfferDocument.
 *
 * Layout: toolbar (status + actions) on top, the document-as-editor filling the
 * rest of the viewport. No split pane, no separate "form" — the preview IS the
 * form. Edits debounce-commit into the offer store so nothing can be lost.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, Copy, Printer, Trash2 } from 'lucide-react'
import { useToast } from '@/lib/ToastContext'
import OfferDocument from './OfferDocument'
import { accountingPath } from './accountingConstants'
import { emptyOfferDraft, type OfferDraft } from './offerDraft'
import { NEW_OFFER_ROUTE, useOfferStore } from './offerStore'

const toolbarBtnClass =
  'inline-flex items-center gap-1.5 rounded-md border border-border bg-transparent px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-background/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--inkblot-semantic-color-border-focus)] disabled:opacity-50'

const primaryBtnClass =
  'inline-flex items-center gap-1.5 rounded-md bg-accent px-2.5 py-1.5 text-xs font-semibold text-accent-foreground transition-colors hover:bg-accent/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--inkblot-semantic-color-border-focus)]'

export default function OfferBuilder() {
  const navigate = useNavigate()
  const { recordId: routeRecordId } = useParams<{ recordId?: string }>()
  const { addToast } = useToast()
  const { offers, getOffer, createBlank, updateDraft, updateStatus, deleteOffer, duplicateOffer } =
    useOfferStore()

  /* ─── Resolve working record ─────────────────────────────────────────── */

  const [workingId, setWorkingId] = useState<string | null>(null)
  const createdOnceRef = useRef(false)

  useEffect(() => {
    if (routeRecordId && routeRecordId !== NEW_OFFER_ROUTE) {
      setWorkingId(routeRecordId)
      return
    }
    if (createdOnceRef.current) return
    createdOnceRef.current = true
    const id = createBlank()
    setWorkingId(id)
    navigate(accountingPath(`offers/${id}`), { replace: true })
  }, [routeRecordId, createBlank, navigate])

  const record = useMemo(
    () => (workingId ? offers.find((o) => o.recordId === workingId) : undefined),
    [offers, workingId],
  )

  const [draft, setDraft] = useState<OfferDraft>(() => record?.draft ?? emptyOfferDraft())

  // Load from store when the working record changes.
  const hydratedForRef = useRef<string | null>(null)
  useEffect(() => {
    if (!workingId) return
    if (hydratedForRef.current === workingId) return
    const rec = getOffer(workingId)
    if (rec) {
      setDraft(rec.draft)
      hydratedForRef.current = workingId
    }
  }, [workingId, getOffer])

  // Commit edits → store (debounced).
  const commitRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  useEffect(() => {
    if (!workingId) return
    if (commitRef.current) clearTimeout(commitRef.current)
    commitRef.current = setTimeout(() => updateDraft(workingId, draft), 200)
    return () => {
      if (commitRef.current) clearTimeout(commitRef.current)
    }
  }, [draft, workingId, updateDraft])

  /* ─── Actions ────────────────────────────────────────────────────────── */

  const handleMarkSent = useCallback(() => {
    if (!workingId) return
    updateStatus(workingId, 'pending')
    addToast({ title: 'Маркирана', description: 'Офертата е маркирана като изпратена.', variant: 'success' })
  }, [workingId, updateStatus, addToast])

  const handleDuplicate = useCallback(() => {
    if (!workingId) return
    const newId = duplicateOffer(workingId)
    if (!newId) return
    addToast({ title: 'Duplicated', description: 'Създадено е копие като чернова.', variant: 'success' })
    navigate(accountingPath(`offers/${newId}`))
  }, [workingId, duplicateOffer, navigate, addToast])

  const handleDelete = useCallback(() => {
    if (!workingId) return
    const ok = typeof window === 'undefined' ? true : window.confirm('Изтриване на тази оферта?')
    if (!ok) return
    deleteOffer(workingId)
    addToast({ title: 'Deleted', description: 'Офертата е изтрита.', variant: 'success' })
    navigate(accountingPath('offers'))
  }, [workingId, deleteOffer, navigate, addToast])

  const handlePrint = useCallback(() => {
    if (typeof window !== 'undefined') window.print()
  }, [])

  /* ─── Render ─────────────────────────────────────────────────────────── */

  if (!workingId || !record) {
    return (
      <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
        Loading…
      </div>
    )
  }

  return (
    <div className="flex h-full min-h-0 w-full flex-col">
      <div className="flex shrink-0 flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5 sm:px-6 lg:px-8 print:hidden">
        <div className="flex min-w-0 items-center gap-2">
          <Link
            to={accountingPath('offers')}
            aria-label="Back to offers"
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-background/70"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
          </Link>
          <p className="truncate text-xs text-muted-foreground">
            <span className="text-foreground font-semibold">
              {draft.projectName || 'Без заглавие'}
            </span>
            {' · '}
            {record.status === 'draft' ? 'чернова' : record.status === 'pending' ? 'изпратена' : record.status === 'paid' ? 'приета' : 'изтекла'}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          <button type="button" className={toolbarBtnClass} onClick={handlePrint} title="Print / export PDF">
            <Printer className="h-3.5 w-3.5" aria-hidden /> Print
          </button>
          <button type="button" className={toolbarBtnClass} onClick={handleDuplicate}>
            <Copy className="h-3.5 w-3.5" aria-hidden /> Duplicate
          </button>
          <button
            type="button"
            className={`${toolbarBtnClass} text-destructive hover:text-destructive hover:border-destructive/40`}
            onClick={handleDelete}
          >
            <Trash2 className="h-3.5 w-3.5" aria-hidden /> Delete
          </button>
          {record.status === 'draft' ? (
            <button type="button" className={primaryBtnClass} onClick={handleMarkSent}>
              <CheckCircle2 className="h-3.5 w-3.5" aria-hidden /> Mark as sent
            </button>
          ) : null}
        </div>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto hide-scrollbar bg-[var(--inkblot-semantic-color-background-tertiary)]">
        <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8">
          <OfferDocument draft={draft} documentId="offer-document" editable={{ onChange: setDraft }} />
        </div>
      </div>

      <RouteSafeguard />
    </div>
  )
}

/**
 * If the URL's `recordId` no longer exists in the store (deleted in another
 * tab, etc.), send the user back to the list rather than showing an empty
 * builder.
 */
function RouteSafeguard() {
  const { recordId } = useParams<{ recordId?: string }>()
  const { offers } = useOfferStore()
  const navigate = useNavigate()

  useEffect(() => {
    if (!recordId || recordId === NEW_OFFER_ROUTE) return
    const found = offers.some((o) => o.recordId === recordId)
    if (!found) navigate(accountingPath('offers'), { replace: true })
  }, [recordId, offers, navigate])

  return null
}
