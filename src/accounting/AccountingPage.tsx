import { useState, useCallback } from 'react'
import { ModuleAssistantPanel, type ModuleAssistantMessage } from '@citron-systems/citron-ui'
import { FileText, Plus, CheckCircle2, Clock, AlertCircle } from 'lucide-react'
import SmartInvoiceBuilder from './SmartInvoiceBuilder'

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

type Tab = 'invoices' | 'create'

const CANNED_REPLIES = [
  'Based on your recent invoicing data, I recommend using Net 30 payment terms for this client.',
  'The average payment cycle for similar invoices is about 12 days. Consider offering a 2% early-payment discount.',
  'I can help draft follow-up emails for overdue invoices — just let me know which client.',
  'Your tax configuration looks correct. VAT 21% is the standard rate for domestic services.',
]

export default function AccountingPage() {
  const [activeTab, setActiveTab] = useState<Tab>('invoices')

  const [messages, setMessages] = useState<ModuleAssistantMessage[]>([])
  const [isProcessing, setIsProcessing] = useState(false)

  const handleSend = useCallback((content: string) => {
    const userMsg: ModuleAssistantMessage = { id: crypto.randomUUID(), role: 'user', content }
    setMessages((prev) => [...prev, userMsg])
    setIsProcessing(true)

    setTimeout(() => {
      const reply = CANNED_REPLIES[Math.floor(Math.random() * CANNED_REPLIES.length)]!
      const assistantMsg: ModuleAssistantMessage = { id: crypto.randomUUID(), role: 'assistant', content: reply }
      setMessages((prev) => [...prev, assistantMsg])
      setIsProcessing(false)
    }, 800)
  }, [])

  return (
    <div className="h-full flex">
      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-8 py-5 border-b border-border flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-citrus-lemon/10 flex items-center justify-center">
              <FileText className="w-4 h-4 text-citrus-lemon" />
            </div>
            <div>
              <h1 className="text-lg font-semibold tracking-tight text-foreground">Accounting</h1>
              <p className="text-xs text-muted-foreground mt-0.5">Invoices &middot; Smart creation</p>
            </div>
          </div>
          <button
            onClick={() => setActiveTab('create')}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-colors"
          >
            <Plus className="w-3 h-3" />
            New Invoice
          </button>
        </header>

        <div className="px-8 py-3 border-b border-border flex gap-1 shrink-0">
          {(['invoices', 'create'] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                activeTab === tab ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
              }`}
            >
              {tab === 'create' ? 'Create' : 'Invoices'}
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto hide-scrollbar px-8 py-6">
          {activeTab === 'invoices' && (
            <>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { label: 'Total Revenue', value: '$46.7K', sub: 'This month' },
                  { label: 'Outstanding', value: '$12.3K', sub: '3 invoices' },
                  { label: 'Overdue', value: '$7.8K', sub: '1 invoice' },
                  { label: 'Avg. Payment', value: '12d', sub: '-2d vs prior' },
                ].map((kpi) => (
                  <div key={kpi.label} className="glass rounded-xl p-4">
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{kpi.label}</span>
                    <p className="text-2xl font-semibold text-foreground mt-1">{kpi.value}</p>
                    <span className="text-[10px] text-citrus-lime">{kpi.sub}</span>
                  </div>
                ))}
              </div>
              <div className="glass rounded-xl overflow-hidden">
                <div className="grid grid-cols-[80px_1fr_100px_80px_100px] gap-4 px-5 py-3 border-b border-border text-[10px] text-muted-foreground uppercase tracking-wider">
                  <span>Invoice</span><span>Client</span><span>Amount</span><span>Status</span><span>Date</span>
                </div>
                {existingInvoices.map((inv) => {
                  const st = statusConfig[inv.status]
                  return (
                    <div key={inv.id} className="grid grid-cols-[80px_1fr_100px_80px_100px] gap-4 px-5 py-3.5 border-b border-border/50 hover:bg-secondary/30 transition-colors items-center">
                      <span className="text-xs font-mono text-citrus-lemon">{inv.id}</span>
                      <span className="text-sm font-medium text-foreground">{inv.client}</span>
                      <span className="text-sm font-mono text-foreground">{inv.amount}</span>
                      <span className={`text-xs flex items-center gap-1.5 ${st.color}`}>
                        <st.icon className="w-3 h-3" />{st.label}
                      </span>
                      <span className="text-xs text-muted-foreground">{inv.date}</span>
                    </div>
                  )
                })}
              </div>
            </>
          )}

          {activeTab === 'create' && <SmartInvoiceBuilder />}
        </div>
      </div>

      {/* Right rail — assistant panel (visible on Create tab) */}
      {activeTab === 'create' && (
        <ModuleAssistantPanel
          moduleId="accounting"
          moduleLabel="Accounting"
          agentLabel="Accounting assistant"
          messages={messages}
          onSend={handleSend}
          isProcessing={isProcessing}
          placeholder="Ask about invoicing..."
        />
      )}
    </div>
  )
}
