import { importShared } from './__federation_fn_import-BF-AfqT6.js';
import { j as jsxRuntimeExports } from './jsx-runtime-XI9uIe3W.js';
import { X } from './x-T6cgYTg0.js';

const {useCallback,useEffect,useRef,useState} = await importShared('react');

function shouldIgnoreDragTarget(target) {
  const el = target instanceof Element ? target : null;
  if (!el) return true;
  return !!el.closest(
    'button,a,input,textarea,select,option,[role="menuitem"],[role="option"],[role="listbox"],[role="combobox"],label,[contenteditable="true"],[data-no-drag]'
  );
}
function useDragOffset(resetKey) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const offsetRef = useRef(offset);
  offsetRef.current = offset;
  useEffect(() => {
    setOffset({ x: 0, y: 0 });
  }, [resetKey]);
  const dragging = useRef(false);
  const origin = useRef({ cx: 0, cy: 0, ox: 0, oy: 0 });
  useEffect(() => {
    const onMove = (e) => {
      if (!dragging.current) return;
      const o = origin.current;
      setOffset({ x: o.ox + e.clientX - o.cx, y: o.oy + e.clientY - o.cy });
    };
    const onUp = () => {
      dragging.current = false;
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, []);
  const onDragPointerDown = useCallback((e) => {
    e.preventDefault();
    dragging.current = true;
    origin.current = {
      cx: e.clientX,
      cy: e.clientY,
      ox: offsetRef.current.x,
      oy: offsetRef.current.y
    };
  }, []);
  return {
    style: { transform: `translate(${offset.x}px, ${offset.y}px)` },
    onDragPointerDown
  };
}

const {DialogClose,DialogDescription,DialogFooter,DialogHeader,DialogTitle} = await importShared('@citron-systems/citron-ui');
const DRAGGABLE_DIALOG_SURFACE = "!border-0 !bg-transparent !p-0 !shadow-none gap-0 overflow-visible !ring-0 max-w-full";
const INTERACTIVE_CURSOR_OVERRIDES = "[&_button]:cursor-pointer [&_a]:cursor-pointer [&_input]:cursor-text [&_textarea]:cursor-text [&_[role=combobox]]:cursor-pointer [&_[role=menuitem]]:cursor-pointer [&_[role=option]]:cursor-pointer";
function DraggableChrome({
  resetKey,
  children
}) {
  const { style, onDragPointerDown } = useDragOffset(resetKey);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      style,
      className: `cursor-grab active:cursor-grabbing ${INTERACTIVE_CURSOR_OVERRIDES}`,
      onPointerDownCapture: (e) => {
        if (shouldIgnoreDragTarget(e.target)) return;
        onDragPointerDown(e);
      },
      children
    }
  );
}
function DraggableDialogFrame({
  resetKey,
  title,
  description,
  children,
  footer
}) {
  const { style, onDragPointerDown } = useDragOffset(resetKey);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      style,
      className: `relative flex w-full min-w-0 cursor-grab flex-col overflow-hidden rounded-[var(--inkblot-radius-xl)] border border-border bg-card shadow-[0_24px_60px_-16px_rgba(0,0,0,0.42)] active:cursor-grabbing animate-dialog-enter ${INTERACTIVE_CURSOR_OVERRIDES}`,
      onPointerDownCapture: (e) => {
        if (shouldIgnoreDragTarget(e.target)) return;
        onDragPointerDown(e);
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          DialogClose,
          {
            type: "button",
            "aria-label": "Close dialog",
            className: "absolute right-[var(--inkblot-spacing-3)] top-[var(--inkblot-spacing-3)] z-20 rounded-[var(--inkblot-radius-md)] p-[var(--inkblot-spacing-2)] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus:outline-none focus-visible:ring-1 focus-visible:ring-border",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4 shrink-0", strokeWidth: 2, "aria-hidden": true })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { className: "space-y-1 px-6 pb-2 pr-14 pt-5 text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "text-left text-lg", children: title }),
          description ? /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { className: "text-left text-muted-foreground", children: description }) : null
        ] }),
        children != null ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6", children }) : null,
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogFooter, { className: "flex flex-row flex-wrap gap-2 px-6 pb-6 pt-4 sm:justify-end", children: footer })
      ]
    }
  );
}

export { DraggableChrome as D, DRAGGABLE_DIALOG_SURFACE as a, DraggableDialogFrame as b };
