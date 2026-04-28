import { useMemo } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { FileText, Palette, Plus, Receipt, Sparkles } from 'lucide-react'
import { accountingPath } from './accountingConstants'
import {
  CRM_HEADER_BTN_PRIMARY,
  CRM_SEGMENT_TRACK,
  crmSegmentTab,
} from './crmToolbarClasses'
import { useInvoiceStore } from './invoiceStore'
import { NEW_OFFER_ROUTE, useOfferStore } from './offerStore'

type Section = 'invoices' | 'offers' | 'brands'

export default function AccountingLayout() {
  const { invoices } = useInvoiceStore()
  const { offers } = useOfferStore()
  const location = useLocation()

  const section: Section = location.pathname.startsWith(accountingPath('offers'))
    ? 'offers'
    : location.pathname.startsWith(accountingPath('brands'))
    ? 'brands'
    : 'invoices'

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
      `${offers.length} offer${offers.length === 1 ? '' : 's'}`,
    ]
    return parts.join(' · ')
  }, [invoices, offers])

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
            <nav className={CRM_SEGMENT_TRACK} aria-label="Accounting sections">
              <Link
                to={accountingPath()}
                className={crmSegmentTab(section === 'invoices')}
                aria-current={section === 'invoices' ? 'page' : undefined}
              >
                <Receipt className="h-3 w-3 shrink-0" aria-hidden /> Invoices
              </Link>
              <Link
                to={accountingPath('offers')}
                className={crmSegmentTab(section === 'offers')}
                aria-current={section === 'offers' ? 'page' : undefined}
              >
                <Sparkles className="h-3 w-3 shrink-0" aria-hidden /> Offers
              </Link>
              <Link
                to={accountingPath('brands')}
                className={crmSegmentTab(section === 'brands')}
                aria-current={section === 'brands' ? 'page' : undefined}
              >
                <Palette className="h-3 w-3 shrink-0" aria-hidden /> Branding
              </Link>
            </nav>

            {section === 'offers' ? (
              <Link
                to={accountingPath(`offers/${NEW_OFFER_ROUTE}`)}
                title="New offer"
                aria-label="New offer"
                className="inline-flex h-8 shrink-0 items-center gap-1.5 rounded-lg bg-accent px-2.5 text-xs font-medium text-accent-foreground transition-all duration-150 ease-out hover:bg-accent/90 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0"
              >
                <FileText className="h-3.5 w-3.5 shrink-0" aria-hidden />
                <span className="hidden sm:inline">New offer</span>
                <Plus className="h-3.5 w-3.5 shrink-0 sm:hidden" aria-hidden />
              </Link>
            ) : section === 'brands' ? null : (
              <Link
                to={accountingPath('create')}
                title="New invoice"
                aria-label="New invoice"
                className={CRM_HEADER_BTN_PRIMARY}
              >
                <Plus className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
              </Link>
            )}
          </div>
        </header>

        <div className="flex-1 min-h-0 overflow-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
