import { useMemo, useState } from 'react'
import { Calendar, Popover, PopoverContent, PopoverTrigger } from '@citron-systems/citron-ui'
import { CalendarDays } from 'lucide-react'
import { DraggableChrome } from './DraggableChrome'

/** Matches invoice text-field styling — reuse as TokenDateField trigger. */
export const INVOICE_DATE_TRIGGER_CLASS = [
  'min-h-[var(--inkblot-size-touch-target-min)] w-full rounded-[var(--inkblot-radius-md)]',
  'border border-[var(--inkblot-semantic-color-border-default)]',
  'bg-[var(--inkblot-semantic-color-background-primary)]',
  'px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-2)]',
  '[font:var(--inkblot-semantic-typography-body-small)]',
  'text-[var(--inkblot-semantic-color-text-primary)]',
  'transition-colors duration-[var(--inkblot-duration-fast)]',
  'focus:outline-none focus-visible:ring-1 focus-visible:ring-border',
].join(' ')

function parseIsoToLocalDate(iso: string): Date | undefined {
  if (!iso || !/^\d{4}-\d{2}-\d{2}$/.test(iso)) return undefined
  const parts = iso.split('-').map(Number)
  const y = parts[0]
  const m = parts[1]
  const d = parts[2]
  if (y === undefined || m === undefined || d === undefined) return undefined
  return new Date(y, m - 1, d)
}

function toIsoFromLocal(d: Date): string {
  const y = d.getFullYear()
  const mo = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${mo}-${day}`
}

function formatDisplayEn(iso: string): string {
  const parsed = parseIsoToLocalDate(iso)
  if (!parsed) return 'Pick a date'
  return parsed.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export function TokenDateField({
  id,
  label,
  labelClassName,
  value,
  onChange,
  triggerClassName,
}: {
  id: string
  label: string
  labelClassName: string
  value: string
  onChange: (iso: string) => void
  triggerClassName: string
}) {
  const [open, setOpen] = useState(false)

  const calendarValue = useMemo(() => {
    const p = parseIsoToLocalDate(value)
    return p ?? new Date()
  }, [value])

  return (
    <div className="flex flex-col gap-[var(--inkblot-spacing-2)]">
      <label className={labelClassName} htmlFor={id}>
        {label}
      </label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          type="button"
          id={id}
          className={`${triggerClassName} inline-flex w-full cursor-pointer items-center justify-between gap-2 text-left`}
        >
          <span className={value ? '' : 'text-[var(--inkblot-semantic-color-text-tertiary)]'}>
            {value ? formatDisplayEn(value) : 'Pick a date'}
          </span>
          <CalendarDays className="h-4 w-4 shrink-0 opacity-60" aria-hidden />
        </PopoverTrigger>
        <PopoverContent className="w-auto !border-0 !bg-transparent !p-0 !shadow-none">
          <DraggableChrome resetKey={open}>
            <div className="overflow-hidden rounded-[var(--inkblot-radius-lg)] border border-border bg-popover p-2 text-popover-foreground shadow-xl animate-popover-enter">
              <Calendar
                value={calendarValue}
                onChange={(d) => {
                  onChange(toIsoFromLocal(d))
                  setOpen(false)
                }}
                className="rounded-lg border border-border/70 bg-background p-1"
              />
            </div>
          </DraggableChrome>
        </PopoverContent>
      </Popover>
    </div>
  )
}
