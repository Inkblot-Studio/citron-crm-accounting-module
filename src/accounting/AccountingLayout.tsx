import { Outlet, NavLink, Link } from 'react-router-dom'
import { FileText, Plus } from 'lucide-react'
import { ACCOUNTING_BASE_PATH, accountingPath } from './accountingConstants'

export default function AccountingLayout() {
  const navClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
      isActive ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
    }`

  return (
    <div className="h-full flex min-h-0">
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-8 py-4 border-b border-border flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-citrus-lemon/10 flex items-center justify-center">
              <FileText className="w-4 h-4 text-citrus-lemon" />
            </div>
            <div>
              <h1 className="text-lg font-semibold tracking-tight text-foreground">Accounting</h1>
              <p className="text-xs text-muted-foreground mt-0.5">Invoices</p>
            </div>
          </div>

          <Link
            to={accountingPath('create')}
            aria-label="New invoice"
            className="inline-flex items-center justify-center min-h-[var(--inkblot-size-touch-target-min,2.5rem)] min-w-[var(--inkblot-size-touch-target-min,2.5rem)] rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <Plus className="w-5 h-5" strokeWidth={2.25} />
          </Link>
        </header>

        <div className="px-8 py-2 border-b border-border flex gap-1 shrink-0">
          <NavLink to={ACCOUNTING_BASE_PATH} end className={navClass}>
            Invoices
          </NavLink>
          <NavLink to={accountingPath('create')} className={navClass}>
            Create
          </NavLink>
        </div>

        <div className="flex-1 min-h-0 overflow-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
