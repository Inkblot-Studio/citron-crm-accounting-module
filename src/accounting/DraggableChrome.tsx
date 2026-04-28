import type { ReactNode } from 'react'
import {
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@citron-systems/citron-ui'
import { X } from 'lucide-react'
import { shouldIgnoreDragTarget, useDragOffset } from './useDragOffset'

/**
 * Host DialogContent must use `showCloseButton={false}` — the close control lives
 * inside DraggableDialogFrame so it sits above the draggable panel.
 */
export const DRAGGABLE_DIALOG_SURFACE =
  '!border-0 !bg-transparent !p-0 !shadow-none gap-0 overflow-visible !ring-0 max-w-full'

const INTERACTIVE_CURSOR_OVERRIDES =
  '[&_button]:cursor-pointer [&_a]:cursor-pointer [&_input]:cursor-text [&_textarea]:cursor-text [&_[role=combobox]]:cursor-pointer [&_[role=menuitem]]:cursor-pointer [&_[role=option]]:cursor-pointer'

/**
 * Wraps a popup panel and makes the whole window draggable.
 * Place the visible panel (bg, border, shadow…) as its child — the transform
 * applies to it, so the entire popup moves together. Pointer events on
 * interactive controls (buttons/inputs/etc.) are ignored for dragging.
 */
export function DraggableChrome({
  resetKey,
  children,
}: {
  resetKey?: unknown
  children: ReactNode
}) {
  const { style, onDragPointerDown } = useDragOffset(resetKey)

  return (
    <div
      style={style}
      className={`cursor-grab active:cursor-grabbing ${INTERACTIVE_CURSOR_OVERRIDES}`}
      onPointerDownCapture={(e) => {
        if (shouldIgnoreDragTarget(e.target)) return
        onDragPointerDown(e)
      }}
    >
      {children}
    </div>
  )
}

/**
 * Modal frame that owns the full visible surface (bg, border, shadow) and is
 * draggable from anywhere — header, body padding, footer — except interactive
 * controls. Use with `DRAGGABLE_DIALOG_SURFACE` on the host `DialogContent`.
 */
export function DraggableDialogFrame({
  resetKey,
  title,
  description,
  children,
  footer,
}: {
  resetKey: unknown
  title: ReactNode
  description?: ReactNode
  children?: ReactNode
  footer: ReactNode
}) {
  const { style, onDragPointerDown } = useDragOffset(resetKey)

  return (
    <div
      style={style}
      className={`relative flex w-full min-w-0 cursor-grab flex-col overflow-hidden rounded-[var(--inkblot-radius-xl)] border border-border bg-card shadow-[0_24px_60px_-16px_rgba(0,0,0,0.42)] active:cursor-grabbing animate-dialog-enter ${INTERACTIVE_CURSOR_OVERRIDES}`}
      onPointerDownCapture={(e) => {
        if (shouldIgnoreDragTarget(e.target)) return
        onDragPointerDown(e)
      }}
    >
      <DialogClose
        type="button"
        aria-label="Close dialog"
        className="absolute right-[var(--inkblot-spacing-3)] top-[var(--inkblot-spacing-3)] z-20 rounded-[var(--inkblot-radius-md)] p-[var(--inkblot-spacing-2)] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus:outline-none focus-visible:ring-1 focus-visible:ring-border"
      >
        <X className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
      </DialogClose>
      <DialogHeader className="space-y-1 px-6 pb-2 pr-14 pt-5 text-left">
        <DialogTitle className="text-left text-lg">{title}</DialogTitle>
        {description ? (
          <DialogDescription className="text-left text-muted-foreground">{description}</DialogDescription>
        ) : null}
      </DialogHeader>
      {children != null ? <div className="px-6">{children}</div> : null}
      <DialogFooter className="flex flex-row flex-wrap gap-2 px-6 pb-6 pt-4 sm:justify-end">{footer}</DialogFooter>
    </div>
  )
}
