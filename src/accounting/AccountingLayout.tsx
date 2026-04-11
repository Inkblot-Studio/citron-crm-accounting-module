import { useMemo } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Plus, Receipt } from 'lucide-react'
import { accountingPath } from './accountingConstants'
import { useInvoiceStore } from './invoiceStore'

export default function AccountingLayout() {
  const { invoices } = useInvoiceStore()

  const subtitle = useMemo(() => {
    const n = invoices.length
    const pending = invoices.filter((i) => i.status === 'pending').length
    const overdue = invoices.filter((i) => i.status === 'overdue').length
    const paid = invoices.filter((i) => i.status === 'paid').length
    const parts = [
      `${n} invoice${n === 1 ? '' : 's'}`,
      `${paid} paid`,
      `${pending} pending`,
      `${overdue} overdue`,
    ]
    return parts.join(' · ')
  }, [invoices])

  return (
    <div className="h-full flex min-h-0 w-full max-w-full overflow-hidden">
      <div className="flex-1 flex flex-col min-w-0 max-w-full">
        <header className="flex shrink-0 flex-col gap-3 border-b border-border px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-3 md:px-6 md:py-4 lg:px-8">
          <div className="flex min-w-0 flex-1 items-center gap-2.5 sm:gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10">
              <Receipt className="h-4 w-4 shrink-0 text-accent" aria-hidden />
            </div>
            <div className="min-w-0">
              <h1 className="truncate text-base font-semibold tracking-tight text-foreground sm:text-lg">Accounting</h1>
              <p className="mt-0.5 truncate text-[10px] leading-snug text-muted-foreground" title={subtitle}>
                {subtitle}
              </p>
            </div>
          </div>

          <div className="flex min-w-0 flex-wrap items-center justify-start gap-2 sm:justify-end">
            <Link
              to={accountingPath('create')}
              title="New invoice"
              aria-label="New invoice"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-all duration-150 hover:bg-accent/90 active:scale-95"
            >
              <Plus className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
            </Link>
          </div>
        </header>

        <div className="flex-1 min-h-0 overflow-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
