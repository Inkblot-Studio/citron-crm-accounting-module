import { useState, useCallback } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { AssistantPanel, type AssistantMessage } from '@citron-systems/citron-ui'
import { FileText } from 'lucide-react'

const CANNED_REPLIES = [
  'For this invoice, Net 30 is a solid default payment term.',
  'Double-check the tax rate matches your client jurisdiction.',
  'You can attach a PO reference in the notes before sending.',
  'Bank transfer details will appear on the PDF from your selected account.',
]

export default function AccountingLayout() {
  const [messages, setMessages] = useState<AssistantMessage[]>([])
  const [isProcessing, setIsProcessing] = useState(false)

  const handleSend = useCallback((payload: { text: string; files: File[] }) => {
    const content = payload.text.trim()
    if (!content) return

    const userMsg: AssistantMessage = { id: crypto.randomUUID(), role: 'user', content }
    setMessages((prev) => [...prev, userMsg])
    setIsProcessing(true)

    setTimeout(() => {
      const reply = CANNED_REPLIES[Math.floor(Math.random() * CANNED_REPLIES.length)]!
      const assistantMsg: AssistantMessage = { id: crypto.randomUUID(), role: 'assistant', content: reply }
      setMessages((prev) => [...prev, assistantMsg])
      setIsProcessing(false)
    }, 700)
  }, [])

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
        </header>

        <div className="px-8 py-2 border-b border-border flex gap-1 shrink-0">
          <NavLink to="/" end className={navClass}>
            Invoices
          </NavLink>
          <NavLink to="/create" className={navClass}>
            Create
          </NavLink>
        </div>

        <div className="flex-1 min-h-0 overflow-hidden">
          <Outlet />
        </div>
      </div>

      <AssistantPanel
        open
        title="Accounting"
        subtitle="Assistant"
        messages={messages}
        onSend={handleSend}
        isProcessing={isProcessing}
        placeholder="Ask about invoicing..."
        emptyStateMessage="Ask anything about invoices, taxes, or payment terms."
        className="h-full w-80 shrink-0 border-l border-[var(--inkblot-semantic-color-border-default)]"
      />
    </div>
  )
}
