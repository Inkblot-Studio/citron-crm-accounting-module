import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@citron-systems/citron-ui'
import { Loader2 } from 'lucide-react'

export interface NewClient {
  id: string
  name: string
  email: string
}

interface ClientCreateDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onCreated: (client: NewClient) => void
}

const inputClass = [
  'min-h-[var(--inkblot-size-touch-target-min)] w-full rounded-[var(--inkblot-radius-md)]',
  'border border-[var(--inkblot-semantic-color-border-default)]',
  'bg-[var(--inkblot-semantic-color-background-primary)]',
  'px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-2)]',
  '[font:var(--inkblot-semantic-typography-body-small)]',
  'text-[var(--inkblot-semantic-color-text-primary)] placeholder:text-[var(--inkblot-semantic-color-text-tertiary)]',
  'transition-colors duration-[var(--inkblot-duration-fast)]',
  'focus:outline-none focus:ring-2 focus:ring-[var(--inkblot-semantic-color-border-focus)]',
].join(' ')

const errorBorder = 'border-[var(--inkblot-semantic-color-status-error)]'

export default function ClientCreateDialog({ open, onOpenChange, onCreated }: ClientCreateDialogProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [saving, setSaving] = useState(false)
  const [attempted, setAttempted] = useState(false)

  const valid = name.trim().length > 0 && email.trim().length > 0

  const reset = () => {
    setName('')
    setEmail('')
    setSaving(false)
    setAttempted(false)
  }

  const handleSubmit = () => {
    setAttempted(true)
    if (!valid) return
    setSaving(true)
    setTimeout(() => {
      onCreated({ id: crypto.randomUUID(), name: name.trim(), email: email.trim() })
      reset()
    }, 400)
  }

  return (
    <Dialog open={open} onOpenChange={(next) => { onOpenChange(next); if (!next) reset() }}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>New client</DialogTitle>
          <DialogDescription>Add a client to use in invoices.</DialogDescription>
        </DialogHeader>

        <div className="grid gap-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-2)]">
          <div className="flex flex-col gap-[var(--inkblot-spacing-1)]">
            <label className="[font:var(--inkblot-semantic-typography-body-small)] font-medium text-[var(--inkblot-semantic-color-text-secondary)]">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Acme Corp"
              className={`${inputClass} ${attempted && !name.trim() ? errorBorder : ''}`}
            />
            {attempted && !name.trim() && (
              <span className="text-xs text-[var(--inkblot-semantic-color-status-error)]">Required</span>
            )}
          </div>

          <div className="flex flex-col gap-[var(--inkblot-spacing-1)]">
            <label className="[font:var(--inkblot-semantic-typography-body-small)] font-medium text-[var(--inkblot-semantic-color-text-secondary)]">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="billing@acme.com"
              className={`${inputClass} ${attempted && !email.trim() ? errorBorder : ''}`}
            />
            {attempted && !email.trim() && (
              <span className="text-xs text-[var(--inkblot-semantic-color-status-error)]">Required</span>
            )}
          </div>
        </div>

        <DialogFooter>
          <DialogClose
            className="inline-flex min-h-[var(--inkblot-size-touch-target-min)] items-center justify-center rounded-[var(--inkblot-radius-lg)] border border-[var(--inkblot-semantic-color-border-default)] px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-2)] [font:var(--inkblot-semantic-typography-body-small)] text-[var(--inkblot-semantic-color-text-primary)] transition-colors duration-[var(--inkblot-duration-fast)] hover:bg-[var(--inkblot-semantic-color-background-tertiary)]"
          >
            Cancel
          </DialogClose>
          <button
            type="button"
            disabled={saving}
            onClick={handleSubmit}
            className="inline-flex min-h-[var(--inkblot-size-touch-target-min)] items-center justify-center gap-[var(--inkblot-spacing-2)] rounded-[var(--inkblot-radius-lg)] bg-[var(--inkblot-semantic-color-interactive-primary)] px-[var(--inkblot-spacing-6)] py-[var(--inkblot-spacing-2)] [font:var(--inkblot-semantic-typography-body-small)] font-medium text-[var(--inkblot-semantic-color-text-inverse)] transition-colors duration-[var(--inkblot-duration-fast)] hover:bg-[var(--inkblot-semantic-color-interactive-primary-hover)] disabled:opacity-[var(--inkblot-opacity-disabled)] disabled:cursor-not-allowed"
          >
            {saving && <Loader2 className="h-4 w-4 animate-spin" />}
            Create
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
