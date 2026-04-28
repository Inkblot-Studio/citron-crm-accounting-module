/**
 * OfferBuilder — a thin host around OfferDocument.
 *
 * Layout: a slim action bar at the top, then the document-as-editor filling the
 * rest of the viewport. The preview IS the form — no split pane. Edits are
 * debounce-committed to the offer store so nothing can be lost.
 *
 * Print: a view-only clone of the document is portalled to <body> so that
 * `window.print()` can hide everything else via CSS (`body > *:not(...)`)
 * without breaking document layout or producing blank pages. The screen UI
 * itself is never repositioned during print.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, Copy, Palette, Printer, Trash2 } from 'lucide-react'
import { AdvancedDropdown, type AdvancedDropdownOption } from '@citron-systems/citron-ui'
import { useToast } from '@/lib/ToastContext'
import OfferDocument from './OfferDocument'
import { accountingPath } from './accountingConstants'
import { emptyOfferDraft, type OfferDraft } from './offerDraft'
import { NEW_OFFER_ROUTE, useOfferStore } from './offerStore'
import { useBrandingStore } from './brandingStore'

const actionBtnClass =
  'inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-transparent px-3 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-background/70 focus:outline-none focus-visible:ring-1 focus-visible:ring-border disabled:opacity-50'

const primaryActionBtnClass =
  'inline-flex h-8 items-center gap-1.5 rounded-md bg-accent px-3 text-xs font-semibold text-accent-foreground transition-colors hover:bg-accent/90 focus:outline-none focus-visible:ring-1 focus-visible:ring-border'

export default function OfferBuilder() {
  const navigate = useNavigate()
  const { recordId: routeRecordId } = useParams<{ recordId?: string }>()
  const { addToast } = useToast()
  const { offers, getOffer, createBlank, updateDraft, updateStatus, deleteOffer, duplicateOffer } =
    useOfferStore()
  const { profiles, resolveProfile } = useBrandingStore()

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

  const activeBrand = useMemo(
    () => resolveProfile(draft.brandProfileId),
    [draft.brandProfileId, resolveProfile],
  )

  const brandProfileOptions = useMemo(
    (): AdvancedDropdownOption[] => [
      { value: '', label: 'Default brand' },
      ...profiles.map((p) => ({ value: p.id, label: p.name })),
    ],
    [profiles],
  )

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

  /* ─── Print portal ───────────────────────────────────────────────────── */

  const [printHost, setPrintHost] = useState<HTMLElement | null>(null)
  useEffect(() => {
    if (typeof document === 'undefined') return
    const el = document.createElement('div')
    el.className = 'offer-print-host'
    el.setAttribute('aria-hidden', 'true')
    document.body.appendChild(el)
    setPrintHost(el)
    return () => {
      if (el.parentNode) el.parentNode.removeChild(el)
    }
  }, [])

  /* ─── Actions ────────────────────────────────────────────────────────── */

  const handleMarkSent = useCallback(() => {
    if (!workingId) return
    updateStatus(workingId, 'pending')
    addToast({ title: 'Marked as sent', description: 'Offer status updated.', variant: 'success' })
  }, [workingId, updateStatus, addToast])

  const handleDuplicate = useCallback(() => {
    if (!workingId) return
    const newId = duplicateOffer(workingId)
    if (!newId) return
    addToast({ title: 'Duplicated', description: 'A draft copy was created.', variant: 'success' })
    navigate(accountingPath(`offers/${newId}`))
  }, [workingId, duplicateOffer, navigate, addToast])

  const handleDelete = useCallback(() => {
    if (!workingId) return
    const ok = typeof window === 'undefined' ? true : window.confirm('Delete this offer?')
    if (!ok) return
    deleteOffer(workingId)
    addToast({ title: 'Deleted', description: 'Offer removed.', variant: 'success' })
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

  const statusLabelBg: Record<typeof record.status, string> = {
    draft: 'draft',
    pending: 'sent',
    paid: 'accepted',
    overdue: 'expired',
  }

  return (
    <div className="offer-builder-screen flex h-full min-h-0 w-full flex-col">
      <div className="flex shrink-0 flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-2">
          <Link
            to={accountingPath('offers')}
            aria-label="Back to offers"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-foreground hover:bg-background/70"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
          </Link>
          <p className="truncate text-xs text-muted-foreground">
            <span className="text-foreground font-semibold">
              {draft.projectName || 'Untitled'}
            </span>
            {' · '}
            {statusLabelBg[record.status]}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          <div className="inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-transparent px-2.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-background/70 focus-within:ring-1 focus-within:ring-border">
            <Palette className="h-3.5 w-3.5 shrink-0" aria-hidden />
            <AdvancedDropdown
              options={brandProfileOptions}
              value={draft.brandProfileId ?? ''}
              onChange={(v) => setDraft((d) => ({ ...d, brandProfileId: v || null }))}
              placeholder="Brand"
              aria-label="Brand profile"
              className="h-7 min-w-[9rem] border-0 bg-transparent px-0 text-xs text-foreground shadow-none focus-visible:ring-0"
            />
          </div>
          <button type="button" className={actionBtnClass} onClick={handlePrint} title="Print / export PDF">
            <Printer className="h-3.5 w-3.5" aria-hidden /> Print
          </button>
          <button type="button" className={actionBtnClass} onClick={handleDuplicate}>
            <Copy className="h-3.5 w-3.5" aria-hidden /> Duplicate
          </button>
          <button
            type="button"
            className={`${actionBtnClass} text-destructive hover:text-destructive hover:border-destructive/40`}
            onClick={handleDelete}
          >
            <Trash2 className="h-3.5 w-3.5" aria-hidden /> Delete
          </button>
          {record.status === 'draft' ? (
            <button type="button" className={primaryActionBtnClass} onClick={handleMarkSent}>
              <CheckCircle2 className="h-3.5 w-3.5" aria-hidden /> Mark as sent
            </button>
          ) : null}
        </div>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto hide-scrollbar bg-[var(--inkblot-semantic-color-background-tertiary)]">
        <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8">
          <OfferDocument
            draft={draft}
            brand={activeBrand}
            documentId="offer-document"
            editable={{ onChange: setDraft }}
          />
        </div>
      </div>

      {/* View-only print copy — hidden on screen, unveiled by print CSS */}
      {printHost
        ? createPortal(
            <OfferDocument
              draft={draft}
              brand={activeBrand}
              documentId="offer-print-document"
              className="offer-print-doc"
            />,
            printHost,
          )
        : null}

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
