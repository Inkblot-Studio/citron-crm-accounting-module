import { useCallback, useEffect, useRef, useState } from 'react'

/** Skip drag when interaction targets controls inside a draggable overlay. */
export function shouldIgnoreDragTarget(target: EventTarget | null): boolean {
  const el = target instanceof Element ? target : null
  if (!el) return true
  return !!el.closest(
    'button,a,input,textarea,select,option,[role="menuitem"],[role="option"],[role="listbox"],[role="combobox"],label,[contenteditable="true"],[data-no-drag]',
  )
}

/**
 * Drag offset for repositionable overlays (dialogs, menus). Reset when `resetKey` changes.
 */
export function useDragOffset(resetKey?: unknown) {
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const offsetRef = useRef(offset)
  offsetRef.current = offset

  useEffect(() => {
    setOffset({ x: 0, y: 0 })
  }, [resetKey])

  const dragging = useRef(false)
  const origin = useRef({ cx: 0, cy: 0, ox: 0, oy: 0 })

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!dragging.current) return
      const o = origin.current
      setOffset({ x: o.ox + e.clientX - o.cx, y: o.oy + e.clientY - o.cy })
    }
    const onUp = () => {
      dragging.current = false
    }
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
    window.addEventListener('pointercancel', onUp)
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
      window.removeEventListener('pointercancel', onUp)
    }
  }, [])

  const onDragPointerDown = useCallback((e: React.PointerEvent) => {
    e.preventDefault()
    dragging.current = true
    origin.current = {
      cx: e.clientX,
      cy: e.clientY,
      ox: offsetRef.current.x,
      oy: offsetRef.current.y,
    }
  }, [])

  return {
    style: { transform: `translate(${offset.x}px, ${offset.y}px)` } as const,
    onDragPointerDown,
  }
}
