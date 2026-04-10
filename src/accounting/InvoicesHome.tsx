import { useCallback, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  AlertDialog,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  SearchBar,
  StatCards,
  StatusBadge,
  TabSystem,
} from '@citron-systems/citron-ui'
import { ArrowDown, ArrowUp, Settings } from 'lucide-react'
import type { InvoiceStatus, InvoiceRecord } from './invoiceStore'
import { useInvoiceStore } from './invoiceStore'
import { formatUsd, invoiceGrandTotal } from './invoiceDraft'
import { useToast } from '@/lib/ToastContext'
import { accountingPath } from './accountingConstants'

const STATUS_TABS: { id: string; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'paid', label: 'Paid' },
  { id: 'pending', label: 'Pending' },
  { id: 'overdue', label: 'Overdue' },
  { id: 'draft', label: 'Draft' },
]

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

export default function InvoicesHome() {
  const navigate = useNavigate()
  const { addToast } = useToast()
  const { invoices, deleteInvoice, duplicateInvoice } = useInvoiceStore()

  const [search, setSearch] = useState('')
  const [statusTab, setStatusTab] = useState('all')
  const [sortKey, setSortKey] = useState<SortKey>('date')
  const [sortDir, setSortDir] = useState<SortDir>('desc')
  const [deleteTarget, setDeleteTarget] = useState<InvoiceRecord | null>(null)

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

  const kpis = useMemo(() => {
    const now = new Date()
    const y = now.getFullYear()
    const m = now.getMonth()
    let outstanding = 0
    let overdueCount = 0
    let paidThisMonth = 0
    for (const inv of invoices) {
      const total = invoiceGrandTotal(inv.draft)
      if (inv.status === 'pending' || inv.status === 'overdue') outstanding += total
      if (inv.status === 'overdue') overdueCount += 1
      if (inv.status === 'paid' && inv.draft.issueDate) {
        const d = new Date(inv.draft.issueDate + 'T12:00:00')
        if (d.getFullYear() === y && d.getMonth() === m) paidThisMonth += 1
      }
    }
    return { outstanding, overdueCount, paidThisMonth }
  }, [invoices])

  const toggleSort = useCallback(
    (key: SortKey) => {
      if (sortKey === key) {
        setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
      } else {
        setSortKey(key)
        setSortDir(key === 'date' ? 'desc' : 'desc')
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

  const SortHint = ({ column }: { column: SortKey }) =>
    sortKey === column ? (
      sortDir === 'asc' ? (
        <ArrowUp className="inline w-3 h-3 ml-0.5 opacity-70" />
      ) : (
        <ArrowDown className="inline w-3 h-3 ml-0.5 opacity-70" />
      )
    ) : null

  return (
    <div className="px-8 py-6 overflow-y-auto hide-scrollbar h-full">
      <div className="mb-6">
        <StatCards
          className="mb-4"
          items={[
            { label: 'Outstanding', value: formatUsd(kpis.outstanding), changeVariant: 'neutral' },
            { label: 'Overdue', value: String(kpis.overdueCount), changeVariant: kpis.overdueCount ? 'error' : 'neutral' },
            { label: 'Paid this month', value: String(kpis.paidThisMonth), changeVariant: 'success' },
          ]}
        />
        <SearchBar
          label="Search"
          placeholder="Invoice number or client…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-md"
        />
      </div>

      <TabSystem tabs={STATUS_TABS} activeTabId={statusTab} onTabChange={setStatusTab} className="mb-4" />

      <p className="text-sm text-muted-foreground mb-3">Recent invoices</p>

      <div className="glass rounded-xl overflow-hidden">
        <div className="flex items-center gap-3 px-5 py-3 border-b border-border text-[10px] text-muted-foreground uppercase tracking-wider">
          <div className="w-[5.5rem] shrink-0">
            <button type="button" className="text-left hover:text-foreground transition-colors" onClick={() => toggleSort('date')}>
              Invoice
              <SortHint column="date" />
            </button>
          </div>
          <div className="flex-1 min-w-0">Client</div>
          <div className="w-[5.5rem] shrink-0 text-right">
            <button type="button" className="hover:text-foreground transition-colors" onClick={() => toggleSort('amount')}>
              Amount
              <SortHint column="amount" />
            </button>
          </div>
          <div className="w-[6.5rem] shrink-0">Status</div>
          <div className="w-[5.75rem] shrink-0">Date</div>
          <div className="w-9 shrink-0 flex justify-center items-center text-muted-foreground/50" aria-hidden>
            <Settings className="h-4 w-4" strokeWidth={2.25} />
            <span className="sr-only">Settings</span>
          </div>
        </div>

        {sorted.length === 0 ? (
          <div className="px-5 py-14 text-center">
            <p className="text-sm font-medium text-foreground">No invoices</p>
            <p className="text-xs text-muted-foreground mt-2 max-w-sm mx-auto">
              {search.trim() || statusTab !== 'all'
                ? 'Try adjusting search or filters.'
                : 'Create your first invoice from the Create tab.'}
            </p>
          </div>
        ) : (
          sorted.map((inv) => {
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
                className="flex items-center gap-3 px-5 py-3 min-h-[52px] border-b border-border/50 hover:bg-secondary/30 transition-colors cursor-pointer"
              >
                <div className="w-[5.5rem] shrink-0 text-xs font-mono text-citrus-lemon truncate">{d.invoiceNumber}</div>
                <div className="flex-1 min-w-0 text-sm font-medium text-foreground truncate">{d.clientName}</div>
                <div className="w-[5.5rem] shrink-0 text-sm font-mono text-foreground text-right tabular-nums">
                  {formatUsd(total)}
                </div>
                <div className="w-[6.5rem] shrink-0 flex items-center">
                  <StatusBadge label={statusLabel(st)} variant={statusBadgeVariant(st)} />
                </div>
                <div className="w-[5.75rem] shrink-0 text-xs text-muted-foreground">{formatListDate(d.issueDate)}</div>
                <div className="w-9 shrink-0 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      type="button"
                      title="Invoice settings"
                      className="inline-flex items-center justify-center rounded-md p-1.5 bg-transparent border-0 shadow-none text-muted-foreground hover:text-citrus-lemon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--inkblot-semantic-color-border-focus)] focus-visible:ring-offset-0 [&_svg]:pointer-events-none [&_svg]:shrink-0"
                      aria-label="Open invoice settings menu"
                    >
                      <Settings className="h-[18px] w-[18px]" strokeWidth={2.25} aria-hidden />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="min-w-[160px]">
                      <DropdownMenuItem onClick={() => openInvoice(inv.recordId)}>View</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleDuplicate(inv)}>Duplicate</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleCopyNumber(d.invoiceNumber)}>Copy invoice number</DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => setDeleteTarget(inv)}
                        className="text-destructive focus:text-destructive"
                      >
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            )
          })
        )}
      </div>

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
