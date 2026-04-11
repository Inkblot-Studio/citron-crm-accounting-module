import { forwardRef, useCallback, useLayoutEffect, useRef } from 'react'
import { Textarea, type TextareaProps } from '@citron-systems/citron-ui'

type Props = Omit<TextareaProps, 'resize'>

/**
 * Notes field: no resize handle; height follows content as the user types.
 */
const AutoGrowTextarea = forwardRef<HTMLTextAreaElement, Props>(function AutoGrowTextarea(
  { className = '', value, onChange, ...rest },
  forwardedRef,
) {
  const innerRef = useRef<HTMLTextAreaElement | null>(null)

  const setRefs = useCallback(
    (node: HTMLTextAreaElement | null) => {
      innerRef.current = node
      if (typeof forwardedRef === 'function') forwardedRef(node)
      else if (forwardedRef) forwardedRef.current = node
    },
    [forwardedRef],
  )

  useLayoutEffect(() => {
    const el = innerRef.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = `${el.scrollHeight}px`
  }, [value])

  return (
    <Textarea
      ref={setRefs}
      {...rest}
      value={value}
      onChange={onChange}
      resize="none"
      rows={1}
      className={`min-h-[5.5rem] overflow-hidden ${className}`.trim()}
    />
  )
})

export default AutoGrowTextarea
