import { Link } from 'react-router-dom'
import { FileText, Plus, CheckCircle2, Clock, AlertCircle } from 'lucide-react'

const existingInvoices = [
  { id: 'INV-2026-001', client: 'Acme Corp', amount: '$12,400', status: 'paid' as const, date: 'Feb 10, 2026' },
  { id: 'INV-2026-002', client: 'TechVentures', amount: '$4,500', status: 'pending' as const, date: 'Feb 18, 2026' },
  { id: 'INV-2026-003', client: 'DataFlow Labs', amount: '$7,800', status: 'overdue' as const, date: 'Jan 28, 2026' },
  { id: 'INV-2026-004', client: 'GlobalTech', amount: '$22,000', status: 'draft' as const, date: 'Feb 25, 2026' },
]

const statusConfig = {
  paid: { label: 'Paid', icon: CheckCircle2, color: 'text-citrus-lime' },
  pending: { label: 'Pending', icon: Clock, color: 'text-citrus-lemon' },
  overdue: { label: 'Overdue', icon: AlertCircle, color: 'text-destructive' },
  draft: { label: 'Draft', icon: FileText, color: 'text-muted-foreground' },
}

export default function InvoicesHome() {
  return (
    <div className="px-8 py-6 overflow-y-auto hide-scrollbar h-full">
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-muted-foreground">Recent invoices</p>
        <Link
          to="/create"
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-colors"
        >
          <Plus className="w-3 h-3" />
          New invoice
        </Link>
      </div>

      <div className="glass rounded-xl overflow-hidden">
        <div className="grid grid-cols-[80px_1fr_100px_80px_100px] gap-4 px-5 py-3 border-b border-border text-[10px] text-muted-foreground uppercase tracking-wider">
          <span>Invoice</span>
          <span>Client</span>
          <span>Amount</span>
          <span>Status</span>
          <span>Date</span>
        </div>
        {existingInvoices.map((inv) => {
          const st = statusConfig[inv.status]
          return (
            <div
              key={inv.id}
              className="grid grid-cols-[80px_1fr_100px_80px_100px] gap-4 px-5 py-3.5 border-b border-border/50 hover:bg-secondary/30 transition-colors items-center"
            >
              <span className="text-xs font-mono text-citrus-lemon">{inv.id}</span>
              <span className="text-sm font-medium text-foreground">{inv.client}</span>
              <span className="text-sm font-mono text-foreground">{inv.amount}</span>
              <span className={`text-xs flex items-center gap-1.5 ${st.color}`}>
                <st.icon className="w-3 h-3" />
                {st.label}
              </span>
              <span className="text-xs text-muted-foreground">{inv.date}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
