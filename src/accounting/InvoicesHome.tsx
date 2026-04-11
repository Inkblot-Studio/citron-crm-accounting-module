import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { AlertDialog, SearchBar, StatusBadge } from '@citron-systems/citron-ui'
import { MoreVertical } from 'lucide-react'
import type { InvoiceStatus, InvoiceRecord } from './invoiceStore'
import { useInvoiceStore } from './invoiceStore'
import { formatUsd, invoiceGrandTotal } from './invoiceDraft'
import { useToast } from '@/lib/ToastContext'
import { INVOICE_STATUS_TABS, accountingPath, normalizeInvoiceListStatusParam } from './accountingConstants'

type SortKey = 'date' | 'amount'
type SortDir = 'asc' | 'desc'

function statusBadgeVariant(s: InvoiceStatus): 'success' | 'warning' | 'error' | 'info' {
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

function statusLabel(s: InvoiceStatus): string {
  switch (s) {
    case 'paid':
      return 'Paid'
    case 'pending':
      return 'Pending'
    case 'overdue':
      return 'Overdue'
    case 'draft':
      return 'Draft'
    default:
      return s
  }
}

function formatListDate(iso?: string): string {
  if (!iso) return '—'
  const d = new Date(iso + 'T12:00:00')
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

function parseAmountForSort(record: InvoiceRecord): number {
  return invoiceGrandTotal(record.draft)
}

const ACTION_MENU_MIN_W = 160
const ACTION_MENU_GAP = 8

type ActionMenuState = { recordId: string; rect: DOMRect }

function actionMenuItemClass(destructive?: boolean) {
  return [
    'flex min-h-[var(--inkblot-size-touch-target-min)] w-full items-center rounded-[var(--inkblot-radius-md)]',
    'px-[var(--inkblot-spacing-3)] py-[var(--inkblot-spacing-2)] text-left text-sm',
    '[font:var(--inkblot-semantic-typography-body-medium)]',
    'text-[var(--inkblot-semantic-color-text-primary)] hover:bg-[var(--inkblot-semantic-color-background-tertiary)]',
    'transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--inkblot-semantic-color-border-focus)] focus-visible:ring-offset-0',
    destructive ? 'text-destructive hover:text-destructive hover:bg-destructive/10' : '',
  ]
    .filter(Boolean)
    .join(' ')
}

export default function InvoicesHome() {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const { addToast } = useToast()
  const { invoices, deleteInvoice, duplicateInvoice } = useInvoiceStore()

  const [search, setSearch] = useState('')
  const [statusTab, setStatusTab] = useState(() => normalizeInvoiceListStatusParam(searchParams.get('status')))

  useEffect(() => {
    setStatusTab(normalizeInvoiceListStatusParam(searchParams.get('status')))
  }, [searchParams])

  const setStatusTabAndUrl = useCallback(
    (id: string) => {
      setStatusTab(id)
      setSearchParams(
        (prev) => {
          const next = new URLSearchParams(prev)
          if (id === 'all') next.delete('status')
          else next.set('status', id)
          return next
        },
        { replace: true },
      )
    },
    [setSearchParams],
  )
  const [sortKey, setSortKey] = useState<SortKey>('date')
  const [sortDir, setSortDir] = useState<SortDir>('desc')
  const [deleteTarget, setDeleteTarget] = useState<InvoiceRecord | null>(null)
  const [actionMenu, setActionMenu] = useState<ActionMenuState | null>(null)
  const actionMenuRef = useRef<HTMLDivElement | null>(null)

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return invoices.filter((inv) => {
      if (statusTab !== 'all' && inv.status !== statusTab) return false
      if (!q) return true
      const d = inv.draft
      return (
        d.invoiceNumber.toLowerCase().includes(q) ||
        d.clientName.toLowerCase().includes(q) ||
        d.clientEmail.toLowerCase().includes(q)
      )
    })
  }, [invoices, search, statusTab])

  const sorted = useMemo(() => {
    const copy = [...filtered]
    copy.sort((a, b) => {
      let cmp = 0
      if (sortKey === 'date') {
        const da = a.draft.issueDate ?? ''
        const db = b.draft.issueDate ?? ''
        cmp = da.localeCompare(db)
      } else {
        cmp = parseAmountForSort(a) - parseAmountForSort(b)
      }
      return sortDir === 'asc' ? cmp : -cmp
    })
    return copy
  }, [filtered, sortKey, sortDir])

  const toggleSort = useCallback(
    (key: SortKey) => {
      if (sortKey === key) {
        setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
      } else {
        setSortKey(key)
        setSortDir('desc')
      }
    },
    [sortKey],
  )

  const openInvoice = useCallback(
    (recordId: string) => {
      navigate(accountingPath(`editor/${recordId}`))
    },
    [navigate],
  )

  const handleDuplicate = useCallback(
    (inv: InvoiceRecord) => {
      const newId = duplicateInvoice(inv.recordId)
      if (!newId) return
      addToast({ title: 'Duplicated', description: 'Draft copy created.', variant: 'success' })
      navigate(accountingPath(`editor/${newId}`))
    },
    [duplicateInvoice, navigate, addToast],
  )

  const handleCopyNumber = useCallback(
    async (num: string) => {
      try {
        await navigator.clipboard.writeText(num)
        addToast({ title: 'Copied', description: 'Invoice number copied.', variant: 'success' })
      } catch {
        addToast({ title: 'Copy failed', description: 'Clipboard unavailable.', variant: 'error' })
      }
    },
    [addToast],
  )

  const confirmDelete = useCallback(() => {
    if (!deleteTarget) return
    deleteInvoice(deleteTarget.recordId)
    addToast({ title: 'Deleted', description: `${deleteTarget.draft.invoiceNumber} removed.`, variant: 'success' })
    setDeleteTarget(null)
  }, [deleteTarget, deleteInvoice, addToast])

  const actionMenuInvoice = useMemo(
    () => (actionMenu ? invoices.find((i) => i.recordId === actionMenu.recordId) : undefined),
    [actionMenu, invoices],
  )

  useEffect(() => {
    if (actionMenu && !actionMenuInvoice) setActionMenu(null)
  }, [actionMenu, actionMenuInvoice])

  useEffect(() => {
    if (!actionMenu) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActionMenu(null)
    }
    const onScroll = () => setActionMenu(null)
    let removePointer: (() => void) | undefined
    const openTid = window.setTimeout(() => {
      const onPointerDown = (e: PointerEvent) => {
        const t = e.target as Node
        if (actionMenuRef.current?.contains(t)) return
        const trigger = (e.target as HTMLElement).closest(`[data-invoice-row-actions="${actionMenu.recordId}"]`)
        if (trigger) return
        setActionMenu(null)
      }
      document.addEventListener('pointerdown', onPointerDown)
      removePointer = () => document.removeEventListener('pointerdown', onPointerDown)
    }, 0)
    document.addEventListener('keydown', onKey)
    window.addEventListener('scroll', onScroll, true)
    return () => {
      window.clearTimeout(openTid)
      removePointer?.()
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('scroll', onScroll, true)
    }
  }, [actionMenu])

  const tabButtonClass = (active: boolean) =>
    `px-2.5 py-2 sm:px-3 rounded-[var(--inkblot-radius-md)] text-[11px] sm:text-xs font-medium leading-tight transition-colors ${
      active
        ? 'bg-background text-foreground shadow-sm border border-border'
        : 'text-muted-foreground border border-transparent hover:text-foreground hover:bg-background/60'
    }`

  return (
    <div className="w-full max-w-full min-w-0 px-3 min-[400px]:px-4 sm:px-6 lg:px-8 py-4 sm:py-6 pb-[max(1.25rem,env(safe-area-inset-bottom,0px))] sm:pb-6 overflow-y-auto hide-scrollbar h-full box-border">
      <div className="mb-5 rounded-[var(--inkblot-radius-xl)] border border-border bg-[var(--inkblot-semantic-color-background-secondary)] p-3 sm:p-4 shadow-[var(--inkblot-shadow-sm)]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6">
          <div className="w-full lg:flex-1 lg:min-w-0 lg:max-w-xl [&_label]:sr-only">
            <SearchBar
              label="Search"
              placeholder="Invoice #, client name or email…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full"
            />
          </div>
          <nav
            className="flex flex-wrap items-center gap-1 sm:gap-1.5 lg:shrink-0"
            aria-label="Filter by status"
          >
            {INVOICE_STATUS_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setStatusTabAndUrl(tab.id)}
                className={tabButtonClass(statusTab === tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-3">Recent invoices</p>

      <div className="glass rounded-xl overflow-hidden w-full min-w-0">
        <div className="overflow-x-auto touch-scroll-x touch-pan-x">
          <div className="min-w-[780px]">
            <div className="grid grid-cols-[2.5rem_minmax(5rem,0.9fr)_minmax(8rem,1.1fr)_5.5rem_6.5rem_5.75rem_2.5rem] gap-2 sm:gap-3 items-center px-3 sm:px-5 py-2.5 sm:py-3 border-b border-border text-[10px] text-muted-foreground uppercase tracking-wider text-center">
              <div className="tabular-nums">#</div>
              <div className="flex flex-col items-center justify-center gap-0.5">
                <span>Client</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-0.5">
                <span>Email</span>
              </div>
              <div>
                <button
                  type="button"
                  className="w-full uppercase tracking-wider hover:text-foreground transition-colors"
                  onClick={() => toggleSort('amount')}
                >
                  Amount
                </button>
              </div>
              <div>Status</div>
              <div>
                <button
                  type="button"
                  className="w-full uppercase tracking-wider hover:text-foreground transition-colors"
                  onClick={() => toggleSort('date')}
                >
                  Date
                </button>
              </div>
              <div className="sr-only">Actions</div>
            </div>

            {sorted.length === 0 ? (
              <div className="px-5 py-14 text-center">
                <p className="text-sm font-medium text-foreground">No invoices</p>
                <p className="text-xs text-muted-foreground mt-2 max-w-sm mx-auto">
                  {search.trim() || statusTab !== 'all'
                    ? 'Try adjusting search or filters.'
                    : 'Create your first invoice with the + button above.'}
                </p>
              </div>
            ) : (
              sorted.map((inv, rowIndex) => {
                const d = inv.draft
                const total = invoiceGrandTotal(d)
                const st = inv.status
                return (
                  <div
                    key={inv.recordId}
                    role="button"
                    tabIndex={0}
                    onClick={() => openInvoice(inv.recordId)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        openInvoice(inv.recordId)
                      }
                    }}
                    className="grid grid-cols-[2.5rem_minmax(5rem,0.9fr)_minmax(8rem,1.1fr)_5.5rem_6.5rem_5.75rem_2.5rem] gap-2 sm:gap-3 items-center px-3 sm:px-5 py-2.5 sm:py-3 min-h-[48px] sm:min-h-[52px] border-b border-border/50 hover:bg-secondary/30 transition-colors cursor-pointer text-center"
                  >
                    <div className="text-xs font-mono text-citrus-lemon tabular-nums">{rowIndex}</div>
                    <div className="flex flex-col items-center justify-center text-center min-w-0 px-0.5">
                      <span className="text-sm font-medium text-foreground leading-tight truncate max-w-full w-full">
                        {d.clientName}
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center min-w-0 px-0.5">
                      <span
                        className="text-xs text-foreground/90 leading-tight truncate max-w-full w-full"
                        title={d.clientEmail || undefined}
                      >
                        {d.clientEmail || '—'}
                      </span>
                    </div>
                    <div className="text-sm font-mono text-foreground tabular-nums">{formatUsd(total)}</div>
                    <div className="flex justify-center">
                      <StatusBadge label={statusLabel(st)} variant={statusBadgeVariant(st)} />
                    </div>
                    <div className="text-xs text-muted-foreground">{formatListDate(d.issueDate)}</div>
                    <div className="flex justify-center" onClick={(e) => e.stopPropagation()}>
                      <button
                        type="button"
                        data-invoice-row-actions={inv.recordId}
                        title="Invoice actions"
                        aria-label="Open invoice actions"
                        aria-expanded={actionMenu?.recordId === inv.recordId}
                        onClick={(e) => {
                          e.stopPropagation()
                          const rect = (e.currentTarget as HTMLButtonElement).getBoundingClientRect()
                          setActionMenu((m) =>
                            m?.recordId === inv.recordId ? null : { recordId: inv.recordId, rect },
                          )
                        }}
                        className="inline-flex items-center justify-center rounded-md p-1.5 bg-transparent border-0 shadow-none text-muted-foreground hover:text-citrus-lemon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--inkblot-semantic-color-border-focus)] focus-visible:ring-offset-0 [&_svg]:pointer-events-none [&_svg]:shrink-0"
                      >
                        <MoreVertical className="h-[18px] w-[18px]" strokeWidth={2.25} aria-hidden />
                      </button>
                    </div>
                  </div>
                )
              })
            )}
          </div>
        </div>
      </div>

      {actionMenu &&
        actionMenuInvoice &&
        createPortal(
          <div
            ref={actionMenuRef}
            data-invoice-action-portal
            role="menu"
            className="fixed z-[200] min-w-[160px] overflow-y-auto overscroll-contain rounded-[var(--inkblot-radius-lg)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-primary)] p-[var(--inkblot-spacing-2)] shadow-[var(--inkblot-shadow-md)]"
            style={{
              top: actionMenu.rect.bottom + ACTION_MENU_GAP,
              left: Math.max(
                ACTION_MENU_GAP,
                Math.min(
                  actionMenu.rect.right - ACTION_MENU_MIN_W,
                  window.innerWidth - ACTION_MENU_MIN_W - ACTION_MENU_GAP,
                ),
              ),
              maxHeight: Math.min(280, Math.max(120, window.innerHeight - actionMenu.rect.bottom - ACTION_MENU_GAP - 12)),
            }}
          >
            <button
              type="button"
              role="menuitem"
              className={actionMenuItemClass()}
              onClick={() => {
                setActionMenu(null)
                openInvoice(actionMenuInvoice.recordId)
              }}
            >
              View
            </button>
            <button
              type="button"
              role="menuitem"
              className={actionMenuItemClass()}
              onClick={() => {
                setActionMenu(null)
                handleDuplicate(actionMenuInvoice)
              }}
            >
              Duplicate
            </button>
            <button
              type="button"
              role="menuitem"
              className={actionMenuItemClass()}
              onClick={() => {
                setActionMenu(null)
                void handleCopyNumber(actionMenuInvoice.draft.invoiceNumber)
              }}
            >
              Copy invoice number
            </button>
            <button
              type="button"
              role="menuitem"
              className={actionMenuItemClass(true)}
              onClick={() => {
                setActionMenu(null)
                setDeleteTarget(actionMenuInvoice)
              }}
            >
              Delete
            </button>
          </div>,
          document.body,
        )}

      <AlertDialog
        open={!!deleteTarget}
        title="Delete invoice?"
        description={deleteTarget ? `This will remove ${deleteTarget.draft.invoiceNumber} permanently.` : undefined}
        confirmLabel="Delete"
        cancelLabel="Cancel"
        destructive
        onOpenChange={(open) => !open && setDeleteTarget(null)}
        onConfirm={confirmDelete}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  )
}
