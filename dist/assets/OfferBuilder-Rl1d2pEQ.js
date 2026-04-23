import { importShared } from './__federation_fn_import-BF-AfqT6.js';
import { j as jsxRuntimeExports } from './jsx-runtime-XI9uIe3W.js';
import { c as createLucideIcon, i as bgDocumentTypeById, u as useToast, a as accountingPath } from './accountingConstants-Cfl6rq38.js';
import { c as cloneBlock, b as createBlock, B as BLOCK_KIND_LABEL, e as formatMoneyRange, o as offerVatAmount, g as offerGrandTotal, f as formatMoney, n as newSupportPlan, u as useOfferStore, N as NEW_OFFER_ROUTE, h as emptyOfferDraft } from './offerStore-CKFzdNIY.js';
import { P as Plus } from './plus-CRsttFmX.js';
import { C as Copy, P as Printer } from './printer-B7dMZUzk.js';
import { T as Trash2, A as ArrowLeft } from './trash-2-BhWtp_Kn.js';

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$3 = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
];
const ArrowDown = createLucideIcon("arrow-down", __iconNode$3);

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$2 = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
];
const ArrowUp = createLucideIcon("arrow-up", __iconNode$2);

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode$1);

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode);

const {useCallback: useCallback$1,useEffect: useEffect$1,useLayoutEffect,useRef: useRef$1,useState: useState$1} = await importShared('react');
function OfferDocument({
  draft,
  documentId = "offer-document",
  className = "",
  editable
}) {
  const editMode = editable != null;
  const patchDraft = useCallback$1(
    (p) => editable?.onChange({ ...draft, ...p }),
    [draft, editable]
  );
  const patchBlock = useCallback$1(
    (id, updater) => {
      if (!editable) return;
      editable.onChange({
        ...draft,
        blocks: draft.blocks.map((b) => b.id === id ? updater(b) : b)
      });
    },
    [draft, editable]
  );
  const moveBlock = useCallback$1(
    (id, dir) => {
      if (!editable) return;
      const i = draft.blocks.findIndex((b) => b.id === id);
      if (i < 0) return;
      const j = i + dir;
      if (j < 0 || j >= draft.blocks.length) return;
      const next = [...draft.blocks];
      const [moved] = next.splice(i, 1);
      if (!moved) return;
      next.splice(j, 0, moved);
      editable.onChange({ ...draft, blocks: next });
    },
    [draft, editable]
  );
  const duplicateBlock = useCallback$1(
    (id) => {
      if (!editable) return;
      const src = draft.blocks.find((b) => b.id === id);
      if (!src) return;
      const i = draft.blocks.findIndex((b) => b.id === id);
      const copy = cloneBlock(src);
      const next = [...draft.blocks];
      next.splice(i + 1, 0, copy);
      editable.onChange({ ...draft, blocks: next });
      setSelected(copy.id);
    },
    [draft, editable]
  );
  const deleteBlock = useCallback$1(
    (id) => {
      if (!editable) return;
      const next = draft.blocks.filter((b) => b.id !== id);
      editable.onChange({ ...draft, blocks: next.length > 0 ? next : [createBlock("paragraph")] });
    },
    [draft, editable]
  );
  const insertBlockAt = useCallback$1(
    (index, kind) => {
      if (!editable) return;
      const block = createBlock(kind);
      const next = [...draft.blocks];
      next.splice(index, 0, block);
      editable.onChange({ ...draft, blocks: next });
      setSelected(block.id);
    },
    [draft, editable]
  );
  const [selectedId, setSelected] = useState$1(null);
  const [addMenuIndex, setAddMenuIndex] = useState$1(null);
  const rootRef = useRef$1(null);
  useEffect$1(() => {
    if (!editMode) return;
    function onDocClick(e) {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target)) setSelected(null);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [editMode]);
  const docType = bgDocumentTypeById(draft.documentTypeId);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      id: documentId,
      ref: rootRef,
      className: `offer-doc flex flex-col gap-6 rounded-[var(--inkblot-radius-2xl)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-primary)] p-5 sm:p-7 md:p-9 shadow-[var(--inkblot-shadow-md)] ${className}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex flex-col gap-4 border-b border-[var(--inkblot-semantic-color-border-default)] pb-5 sm:flex-row sm:items-start sm:justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] uppercase tracking-[0.18em] text-[var(--inkblot-semantic-color-text-tertiary)]", children: [
              docType?.label ?? "Оферта",
              docType?.legal ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-citrus-lemon", children: "· ЗДДС" }) : null
            ] }),
            editMode ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              EditableText,
              {
                as: "p",
                value: draft.documentNumber,
                onCommit: (v) => patchDraft({ documentNumber: v }),
                placeholder: "№",
                className: "mt-1 font-mono text-xs text-citrus-lemon break-all"
              }
            ) : draft.documentNumber ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-mono text-xs text-citrus-lemon break-all", children: draft.documentNumber }) : null,
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              EditableHeading,
              {
                value: draft.projectName,
                editable: editMode,
                onCommit: (v) => patchDraft({ projectName: v }),
                placeholder: "Име на проекта",
                className: "mt-3 text-xl sm:text-2xl font-semibold tracking-tight text-foreground break-words"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "grid min-w-0 grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-[11px] text-[var(--inkblot-semantic-color-text-tertiary)] sm:min-w-[240px] sm:max-w-[55%] sm:justify-self-end", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "uppercase tracking-wider", children: "Клиент" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              EditableText,
              {
                value: draft.clientName,
                editable: editMode,
                onCommit: (v) => patchDraft({ clientName: v }),
                placeholder: "Име на клиента",
                className: "font-medium text-foreground break-words"
              }
            ) }),
            editMode || draft.clientOrg && draft.clientOrg !== draft.clientName ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "uppercase tracking-wider", children: "Орг." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                EditableText,
                {
                  value: draft.clientOrg,
                  editable: editMode,
                  onCommit: (v) => patchDraft({ clientOrg: v }),
                  placeholder: "—",
                  className: "break-words"
                }
              ) })
            ] }) : null,
            editMode || draft.clientEmail ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "uppercase tracking-wider", children: "Имейл" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                EditableText,
                {
                  value: draft.clientEmail,
                  editable: editMode,
                  onCommit: (v) => patchDraft({ clientEmail: v }),
                  placeholder: "—",
                  className: "break-all"
                }
              ) })
            ] }) : null,
            /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "uppercase tracking-wider", children: "Издадена" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              EditableDate,
              {
                value: draft.issueDate,
                editable: editMode,
                onCommit: (v) => patchDraft({ issueDate: v || void 0 })
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "uppercase tracking-wider", children: "Валидна до" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              EditableDate,
              {
                value: draft.validUntil,
                editable: editMode,
                onCommit: (v) => patchDraft({ validUntil: v || void 0 })
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
          editMode ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            AddBlockGap,
            {
              open: addMenuIndex === 0,
              onOpen: (open) => setAddMenuIndex(open ? 0 : null),
              onPick: (kind) => {
                insertBlockAt(0, kind);
                setAddMenuIndex(null);
              }
            }
          ) : null,
          draft.blocks.map((block, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              BlockFrame,
              {
                block,
                editMode,
                isFirst: idx === 0,
                isLast: idx === draft.blocks.length - 1,
                isSelected: selectedId === block.id,
                onSelect: () => setSelected(block.id),
                onMoveUp: () => moveBlock(block.id, -1),
                onMoveDown: () => moveBlock(block.id, 1),
                onDuplicate: () => duplicateBlock(block.id),
                onDelete: () => deleteBlock(block.id),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(BlockBody, { block, editMode, onPatch: patchBlock })
              }
            ),
            editMode ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              AddBlockGap,
              {
                open: addMenuIndex === idx + 1,
                onOpen: (open) => setAddMenuIndex(open ? idx + 1 : null),
                onPick: (kind) => {
                  insertBlockAt(idx + 1, kind);
                  setAddMenuIndex(null);
                }
              }
            ) : null
          ] }, block.id))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "flex flex-col gap-1 border-t border-[var(--inkblot-semantic-color-border-default)] pt-4 text-[11px] text-[var(--inkblot-semantic-color-text-tertiary)] sm:flex-row sm:items-center sm:justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            EditableText,
            {
              value: draft.brandName,
              editable: editMode,
              onCommit: (v) => patchDraft({ brandName: v }),
              placeholder: "Бранд",
              className: "font-semibold tracking-wide text-foreground"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            EditableText,
            {
              value: draft.brandTagline,
              editable: editMode,
              onCommit: (v) => patchDraft({ brandTagline: v }),
              placeholder: "Слоган",
              className: "truncate"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            EditableText,
            {
              value: draft.brandUrl,
              editable: editMode,
              onCommit: (v) => patchDraft({ brandUrl: v }),
              placeholder: "url",
              className: "font-mono text-citrus-lemon"
            }
          )
        ] })
      ]
    }
  );
}
function BlockFrame({
  block,
  editMode,
  isFirst,
  isLast,
  isSelected,
  onSelect,
  onMoveUp,
  onMoveDown,
  onDuplicate,
  onDelete,
  children
}) {
  if (!editMode) return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "data-block-id": block.id,
      "data-selected": isSelected || void 0,
      onMouseDown: (e) => {
        if (e.target.closest("[data-block-toolbar]")) return;
        onSelect();
      },
      className: "group relative rounded-[var(--inkblot-radius-lg)] transition-colors data-[selected]:ring-2 data-[selected]:ring-accent/40",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "data-block-toolbar": true,
            className: "pointer-events-none absolute -top-3 right-2 z-10 flex items-center gap-0.5 rounded-md border border-border bg-[var(--inkblot-semantic-color-background-primary)] p-0.5 opacity-0 shadow-[var(--inkblot-shadow-sm)] transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 data-[selected]:opacity-100",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BlockToolbarBtn, { label: "Move up", disabled: isFirst, onClick: onMoveUp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { className: "h-3.5 w-3.5", "aria-hidden": true }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(BlockToolbarBtn, { label: "Move down", disabled: isLast, onClick: onMoveDown, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "h-3.5 w-3.5", "aria-hidden": true }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(BlockToolbarBtn, { label: "Duplicate", onClick: onDuplicate, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-3.5 w-3.5", "aria-hidden": true }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(BlockToolbarBtn, { label: "Delete", onClick: onDelete, destructive: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5", "aria-hidden": true }) })
            ]
          }
        ),
        children
      ]
    }
  );
}
function BlockToolbarBtn({
  label,
  onClick,
  children,
  disabled,
  destructive
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      "aria-label": label,
      title: label,
      disabled,
      onClick,
      className: `pointer-events-auto inline-flex h-6 w-6 items-center justify-center rounded text-muted-foreground transition-colors hover:bg-background/70 disabled:opacity-40 disabled:hover:bg-transparent ${destructive ? "hover:text-destructive" : "hover:text-foreground"}`,
      children
    }
  );
}
const ADD_BLOCK_KINDS = [
  "paragraph",
  "heading",
  "feature",
  "bullets",
  "pricing",
  "plans",
  "quote",
  "divider"
];
function AddBlockGap({
  open,
  onOpen,
  onPick
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `group relative flex items-center justify-center transition-all ${open ? "my-2" : "my-0.5 h-4 hover:my-2"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => onOpen(!open),
            "aria-expanded": open,
            className: `inline-flex h-5 items-center gap-1 rounded-full border border-border bg-[var(--inkblot-semantic-color-background-primary)] px-2 text-[10px] font-medium text-muted-foreground transition-opacity hover:text-foreground ${open ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3 w-3", "aria-hidden": true }),
              " Добави блок"
            ]
          }
        ),
        open ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            role: "menu",
            className: "absolute top-6 z-20 grid w-[240px] grid-cols-2 gap-1 rounded-md border border-border bg-[var(--inkblot-semantic-color-background-primary)] p-1 shadow-[var(--inkblot-shadow-md)]",
            children: [
              ADD_BLOCK_KINDS.map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  role: "menuitem",
                  onClick: () => onPick(k),
                  className: "flex items-center gap-2 rounded px-2 py-1.5 text-left text-[11px] text-foreground hover:bg-background/70",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-5 w-5 items-center justify-center rounded bg-accent/15 font-mono text-[10px] text-citrus-lemon", children: BLOCK_GLYPH[k] }),
                    BLOCK_KIND_LABEL[k]
                  ]
                },
                k
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => onOpen(false),
                  "aria-label": "Close",
                  className: "col-span-2 mt-0.5 inline-flex items-center justify-center gap-1 rounded px-2 py-1 text-[10px] text-muted-foreground hover:bg-background/70",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3 w-3", "aria-hidden": true }),
                    " Затвори"
                  ]
                }
              )
            ]
          }
        ) : null
      ]
    }
  );
}
const BLOCK_GLYPH = {
  heading: "H",
  paragraph: "¶",
  feature: "★",
  bullets: "•",
  quote: "❝",
  pricing: "€",
  plans: "◫",
  divider: "—"
};
function BlockBody({
  block,
  editMode,
  onPatch
}) {
  switch (block.kind) {
    case "heading":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(HeadingBody, { block, editMode, onPatch });
    case "paragraph":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(ParagraphBody, { block, editMode, onPatch });
    case "feature":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureBody, { block, editMode, onPatch });
    case "bullets":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(BulletsBody, { block, editMode, onPatch });
    case "quote":
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "rounded-[var(--inkblot-radius-lg)] border-l-2 border-accent bg-[var(--inkblot-semantic-color-background-secondary)] px-4 py-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          EditableText,
          {
            value: block.text,
            editable: editMode,
            onCommit: (v) => onPatch(block.id, (b) => ({ ...b, text: v })),
            placeholder: "Цитат от клиент или стойностно твърдение…",
            multiline: true,
            className: "text-sm italic leading-relaxed text-[var(--inkblot-semantic-color-text-secondary)]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          EditableText,
          {
            value: block.cite,
            editable: editMode,
            onCommit: (v) => onPatch(block.id, (b) => ({ ...b, cite: v })),
            placeholder: "— източник",
            className: "mt-2 block text-[11px] text-[var(--inkblot-semantic-color-text-tertiary)]"
          }
        )
      ] });
    case "pricing":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(PricingBody, { block, editMode, onPatch });
    case "plans":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(PlansBody, { block, editMode, onPatch });
    case "divider":
      return /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "my-2 border-t border-[var(--inkblot-semantic-color-border-default)]" });
  }
}
function HeadingBody({ block, editMode, onPatch }) {
  const size = block.level === 1 ? "text-2xl sm:text-3xl font-semibold tracking-tight" : block.level === 2 ? "text-lg sm:text-xl font-semibold" : "text-sm font-semibold uppercase tracking-wider";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      EditableHeading,
      {
        value: block.text,
        editable: editMode,
        onCommit: (v) => onPatch(block.id, (b) => ({ ...b, text: v })),
        placeholder: `Заглавие H${block.level}`,
        className: `${size} text-foreground break-words flex-1`
      }
    ),
    editMode ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "select",
      {
        value: block.level,
        onChange: (e) => onPatch(block.id, (b) => ({
          ...b,
          level: Number(e.target.value) === 1 ? 1 : Number(e.target.value) === 3 ? 3 : 2
        })),
        className: "mt-1 shrink-0 rounded-md border border-border bg-[var(--inkblot-semantic-color-background-primary)] px-1.5 py-0.5 text-[10px] text-muted-foreground",
        title: "Heading level",
        "aria-label": "Heading level",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 1, children: "H1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 2, children: "H2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 3, children: "H3" })
        ]
      }
    ) : null
  ] });
}
function ParagraphBody({
  block,
  editMode,
  onPatch
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    EditableText,
    {
      value: block.text,
      editable: editMode,
      onCommit: (v) => onPatch(block.id, (b) => ({ ...b, text: v })),
      placeholder: "Напиши параграф…",
      multiline: true,
      className: "text-sm leading-relaxed text-[var(--inkblot-semantic-color-text-secondary)] sm:text-base"
    }
  );
}
function FeatureBody({ block, editMode, onPatch }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "grid grid-cols-1 gap-4 rounded-[var(--inkblot-radius-xl)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)] p-4 sm:p-5 md:grid-cols-[1fr_minmax(0,0.9fr)] md:gap-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex flex-col gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        EditableText,
        {
          value: block.kicker,
          editable: editMode,
          onCommit: (v) => onPatch(block.id, (b) => ({ ...b, kicker: v })),
          placeholder: "Подзаглавие (по желание)",
          className: "text-[10px] uppercase tracking-[0.16em] text-[var(--inkblot-semantic-color-text-tertiary)]"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        EditableHeading,
        {
          value: block.title,
          editable: editMode,
          onCommit: (v) => onPatch(block.id, (b) => ({ ...b, title: v })),
          placeholder: "Име на функционалност",
          className: "text-base font-semibold text-foreground sm:text-lg leading-snug"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        EditableText,
        {
          value: block.description,
          editable: editMode,
          onCommit: (v) => onPatch(block.id, (b) => ({ ...b, description: v })),
          placeholder: "Описание…",
          multiline: true,
          className: "text-sm leading-relaxed text-[var(--inkblot-semantic-color-text-secondary)]"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        BulletsList,
        {
          items: block.bullets,
          editMode,
          onChange: (items) => onPatch(block.id, (b) => ({ ...b, bullets: items })),
          placeholder: "Булет"
        }
      )
    ] }),
    editMode || block.comparisonNote ? /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "rounded-[var(--inkblot-radius-lg)] border border-accent/20 bg-accent/5 p-3 text-xs leading-relaxed text-[var(--inkblot-semantic-color-text-secondary)] md:max-w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1 text-[10px] font-semibold uppercase tracking-wider text-citrus-lemon", children: "Конкурентно предимство" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        EditableText,
        {
          value: block.comparisonNote,
          editable: editMode,
          onCommit: (v) => onPatch(block.id, (b) => ({ ...b, comparisonNote: v })),
          placeholder: "Как това ни отличава от конкуренцията…",
          multiline: true
        }
      )
    ] }) : null
  ] });
}
function BulletsBody({
  block,
  editMode,
  onPatch
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    BulletsList,
    {
      items: block.items,
      editMode,
      onChange: (items) => onPatch(block.id, (b) => ({
        ...b,
        items
      })),
      placeholder: "Елемент от списъка"
    }
  );
}
function PricingBody({ block, editMode, onPatch }) {
  const marketRange = formatMoneyRange(block.marketValueFrom, block.marketValueTo, block.currency);
  const vatAmount = offerVatAmount(block);
  const total = offerGrandTotal(block);
  const patchP = (u) => onPatch(block.id, u);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid grid-cols-1 gap-4 rounded-[var(--inkblot-radius-xl)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)] p-4 sm:p-5 md:grid-cols-[1fr_auto]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 min-w-0 text-sm", children: [
      editMode ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-baseline gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-wider text-[var(--inkblot-semantic-color-text-tertiary)]", children: "Пазарна стойност" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          InlineNumber,
          {
            value: block.marketValueFrom,
            onCommit: (v) => patchP((b) => ({ ...b, marketValueFrom: v })),
            placeholder: "от"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "–" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          InlineNumber,
          {
            value: block.marketValueTo,
            onCommit: (v) => patchP((b) => ({ ...b, marketValueTo: v })),
            placeholder: "до"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: block.currency })
      ] }) : marketRange ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-baseline gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-wider text-[var(--inkblot-semantic-color-text-tertiary)]", children: "Пазарна стойност" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-sm text-[var(--inkblot-semantic-color-text-secondary)]", children: marketRange })
      ] }) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        PricingRow,
        {
          label: "Срок за изпълнение",
          value: block.timeline,
          editMode,
          onCommit: (v) => patchP((b) => ({ ...b, timeline: v })),
          placeholder: "напр. 1.5 месеца"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        PricingRow,
        {
          label: "Гаранция",
          value: block.guarantee,
          editMode,
          onCommit: (v) => patchP((b) => ({ ...b, guarantee: v })),
          placeholder: "напр. SEO и техническа поддръжка"
        }
      ),
      editMode || block.note ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        EditableText,
        {
          value: block.note,
          editable: editMode,
          onCommit: (v) => patchP((b) => ({ ...b, note: v })),
          placeholder: "Пояснение / сравнение с пазара…",
          multiline: true,
          className: "mt-2 text-xs leading-relaxed text-[var(--inkblot-semantic-color-text-tertiary)]"
        }
      ) : null
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start gap-1 rounded-[var(--inkblot-radius-lg)] border border-accent/25 bg-accent/10 p-4 md:items-end md:min-w-[180px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-wider text-[var(--inkblot-semantic-color-text-tertiary)]", children: "Предложена цена" }),
      editMode ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            value: block.currency,
            onChange: (e) => patchP((b) => ({ ...b, currency: e.target.value })),
            "aria-label": "Currency",
            className: "rounded-md border border-border bg-[var(--inkblot-semantic-color-background-primary)] px-1 py-0.5 text-[10px] text-muted-foreground",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "EUR", children: "EUR" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "BGN", children: "BGN" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "USD", children: "USD" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          InlineNumber,
          {
            value: block.price,
            onCommit: (v) => patchP((b) => ({ ...b, price: v ?? 0 })),
            placeholder: "0",
            className: "font-mono text-2xl font-semibold text-foreground tabular-nums min-w-[5ch]",
            allowZero: true
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-2xl font-semibold text-foreground tabular-nums", children: formatMoney(block.price, block.currency) }),
      editMode ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-1 text-[11px] text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "+" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          InlineNumber,
          {
            value: block.vatPct,
            onCommit: (v) => patchP((b) => ({ ...b, vatPct: Math.max(0, Math.min(100, v ?? 0)) })),
            placeholder: "0",
            allowZero: true
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "% VAT" })
      ] }) : block.vatPct > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-[var(--inkblot-semantic-color-text-tertiary)]", children: [
        "+ ",
        block.vatPct,
        "% VAT (",
        formatMoney(vatAmount, block.currency),
        ")"
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-[var(--inkblot-semantic-color-text-tertiary)]", children: "без VAT" }),
      block.vatPct > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-1 text-[11px] font-medium text-citrus-lemon", children: [
        "Общо: ",
        formatMoney(total, block.currency)
      ] }) : null
    ] })
  ] });
}
function PricingRow({
  label,
  value,
  editMode,
  onCommit,
  placeholder
}) {
  if (!editMode && !value) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-baseline gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-wider text-[var(--inkblot-semantic-color-text-tertiary)]", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      EditableText,
      {
        value,
        editable: editMode,
        onCommit,
        placeholder,
        className: "text-sm text-foreground"
      }
    )
  ] });
}
function PlansBody({ block, editMode, onPatch }) {
  const patchP = (u) => onPatch(block.id, u);
  const updatePlan = (id, p) => patchP((b) => ({ ...b, plans: b.plans.map((pl) => pl.id === id ? { ...pl, ...p } : pl) }));
  const removePlan = (id) => patchP((b) => ({ ...b, plans: b.plans.filter((pl) => pl.id !== id) }));
  const addPlan = () => patchP((b) => ({ ...b, plans: [...b.plans, newSupportPlan()] }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      EditableText,
      {
        value: block.title,
        editable: editMode,
        onCommit: (v) => patchP((b) => ({ ...b, title: v })),
        placeholder: "Заглавие на секцията",
        className: "text-[10px] uppercase tracking-[0.14em] text-[var(--inkblot-semantic-color-text-tertiary)]"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3", children: [
      block.plans.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "group/plan relative flex flex-col gap-1 rounded-[var(--inkblot-radius-lg)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)] p-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              EditableText,
              {
                value: p.title,
                editable: editMode,
                onCommit: (v) => updatePlan(p.id, { title: v }),
                placeholder: "Заглавие",
                className: "text-[10px] uppercase tracking-wider text-[var(--inkblot-semantic-color-text-tertiary)]"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              EditableText,
              {
                value: p.subtitle ?? "",
                editable: editMode,
                onCommit: (v) => updatePlan(p.id, { subtitle: v }),
                placeholder: "Подзаглавие",
                className: "text-xs text-[var(--inkblot-semantic-color-text-secondary)]"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              EditableText,
              {
                value: p.priceLabel,
                editable: editMode,
                onCommit: (v) => updatePlan(p.id, { priceLabel: v }),
                placeholder: "Цена",
                className: "font-mono text-sm font-medium text-foreground mt-1"
              }
            ),
            editMode ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => removePlan(p.id),
                "aria-label": "Remove plan",
                className: "absolute top-1.5 right-1.5 inline-flex h-5 w-5 items-center justify-center rounded text-muted-foreground opacity-0 transition-opacity hover:text-destructive group-hover/plan:opacity-100",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3 w-3", "aria-hidden": true })
              }
            ) : null
          ]
        },
        p.id
      )),
      editMode ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: addPlan,
          className: "inline-flex min-h-[68px] items-center justify-center gap-1.5 rounded-[var(--inkblot-radius-lg)] border border-dashed border-border text-xs text-muted-foreground hover:text-foreground hover:border-foreground/40",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5", "aria-hidden": true }),
            " Добави план"
          ]
        }
      ) : null
    ] })
  ] });
}
function BulletsList({
  items,
  editMode,
  onChange,
  placeholder
}) {
  const patch = (i, v) => onChange(items.map((it, idx) => idx === i ? v : it));
  const remove = (i) => onChange(items.filter((_, idx) => idx !== i));
  const add = () => onChange([...items, ""]);
  if (!editMode && items.every((it) => !it)) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-1 flex flex-col gap-1", children: [
    items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "relative flex items-start gap-2 pl-4 text-xs text-[var(--inkblot-semantic-color-text-secondary)] sm:text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "absolute left-0 top-[0.55rem] h-1 w-1 rounded-full bg-accent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        EditableText,
        {
          value: it,
          editable: editMode,
          onCommit: (v) => patch(i, v),
          placeholder: placeholder ?? "Булет",
          className: "flex-1"
        }
      ),
      editMode ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => remove(i),
          "aria-label": "Remove bullet",
          className: "shrink-0 text-muted-foreground opacity-0 transition-opacity hover:text-destructive group-hover:opacity-100",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3 w-3", "aria-hidden": true })
        }
      ) : null
    ] }, i)),
    editMode ? /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: add,
        className: "inline-flex items-center gap-1 text-[11px] text-muted-foreground hover:text-foreground",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3 w-3", "aria-hidden": true }),
          " Добави булет"
        ]
      }
    ) }) : null
  ] });
}
function EditableText({
  value,
  onCommit,
  editable = true,
  placeholder,
  multiline,
  className = "",
  as = "span",
  style
}) {
  const ref = useRef$1(null);
  const focusedRef = useRef$1(false);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (focusedRef.current) return;
    if (el.textContent !== value) el.textContent = value;
  }, [value]);
  if (!editable) {
    if (!value) return null;
    const Tag2 = as;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Tag2, { className, style, children: value });
  }
  const Tag = as;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Tag,
    {
      ref: (node) => {
        ref.current = node;
        if (node && node.textContent !== value) node.textContent = value;
      },
      className: `offer-editable ${className}`.trim(),
      "data-placeholder": placeholder ?? "",
      "data-multiline": multiline || void 0,
      contentEditable: true,
      suppressContentEditableWarning: true,
      spellCheck: true,
      onFocus: () => {
        focusedRef.current = true;
      },
      onBlur: (e) => {
        focusedRef.current = false;
        const text = (e.currentTarget.textContent ?? "").replace(/\r/g, "");
        if (text !== value) onCommit(text);
      },
      onKeyDown: (e) => {
        if (!multiline && e.key === "Enter") {
          e.preventDefault();
          e.currentTarget.blur();
        }
        if (e.key === "Escape") {
          e.currentTarget.blur();
        }
      },
      style
    }
  );
}
function EditableHeading(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(EditableText, { ...props, as: "div" });
}
function EditableDate({
  value,
  editable,
  onCommit
}) {
  if (!editable) return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: value || "—" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      type: "date",
      value: value ?? "",
      onChange: (e) => onCommit(e.target.value),
      className: "rounded-md border border-border bg-[var(--inkblot-semantic-color-background-primary)] px-1.5 py-0.5 text-[11px] text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--inkblot-semantic-color-border-focus)]"
    }
  );
}
function InlineNumber({
  value,
  onCommit,
  placeholder,
  className,
  allowZero
}) {
  const [draft, setDraft] = useState$1(value == null ? "" : String(value));
  useEffect$1(() => {
    setDraft(value == null ? "" : String(value));
  }, [value]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      type: "number",
      inputMode: "decimal",
      min: 0,
      step: "any",
      value: draft,
      placeholder,
      onChange: (e) => setDraft(e.target.value),
      onBlur: () => {
        if (draft === "") {
          onCommit(void 0);
          return;
        }
        const n = Number(draft);
        if (!Number.isFinite(n) || n < 0) {
          setDraft(value == null ? "" : String(value));
          return;
        }
        if (!allowZero && n === 0) {
          onCommit(void 0);
          return;
        }
        onCommit(n);
      },
      className: `rounded-md border border-border bg-[var(--inkblot-semantic-color-background-primary)] px-1.5 py-0.5 font-mono text-sm tabular-nums text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--inkblot-semantic-color-border-focus)] w-[6ch] ${className ?? ""}`
    }
  );
}

const {useCallback,useEffect,useMemo,useRef,useState} = await importShared('react');

const {Link,useNavigate,useParams} = await importShared('react-router-dom');
const toolbarBtnClass = "inline-flex items-center gap-1.5 rounded-md border border-border bg-transparent px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-background/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--inkblot-semantic-color-border-focus)] disabled:opacity-50";
const primaryBtnClass = "inline-flex items-center gap-1.5 rounded-md bg-accent px-2.5 py-1.5 text-xs font-semibold text-accent-foreground transition-colors hover:bg-accent/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--inkblot-semantic-color-border-focus)]";
function OfferBuilder() {
  const navigate = useNavigate();
  const { recordId: routeRecordId } = useParams();
  const { addToast } = useToast();
  const { offers, getOffer, createBlank, updateDraft, updateStatus, deleteOffer, duplicateOffer } = useOfferStore();
  const [workingId, setWorkingId] = useState(null);
  const createdOnceRef = useRef(false);
  useEffect(() => {
    if (routeRecordId && routeRecordId !== NEW_OFFER_ROUTE) {
      setWorkingId(routeRecordId);
      return;
    }
    if (createdOnceRef.current) return;
    createdOnceRef.current = true;
    const id = createBlank();
    setWorkingId(id);
    navigate(accountingPath(`offers/${id}`), { replace: true });
  }, [routeRecordId, createBlank, navigate]);
  const record = useMemo(
    () => workingId ? offers.find((o) => o.recordId === workingId) : void 0,
    [offers, workingId]
  );
  const [draft, setDraft] = useState(() => record?.draft ?? emptyOfferDraft());
  const hydratedForRef = useRef(null);
  useEffect(() => {
    if (!workingId) return;
    if (hydratedForRef.current === workingId) return;
    const rec = getOffer(workingId);
    if (rec) {
      setDraft(rec.draft);
      hydratedForRef.current = workingId;
    }
  }, [workingId, getOffer]);
  const commitRef = useRef(null);
  useEffect(() => {
    if (!workingId) return;
    if (commitRef.current) clearTimeout(commitRef.current);
    commitRef.current = setTimeout(() => updateDraft(workingId, draft), 200);
    return () => {
      if (commitRef.current) clearTimeout(commitRef.current);
    };
  }, [draft, workingId, updateDraft]);
  const handleMarkSent = useCallback(() => {
    if (!workingId) return;
    updateStatus(workingId, "pending");
    addToast({ title: "Маркирана", description: "Офертата е маркирана като изпратена.", variant: "success" });
  }, [workingId, updateStatus, addToast]);
  const handleDuplicate = useCallback(() => {
    if (!workingId) return;
    const newId = duplicateOffer(workingId);
    if (!newId) return;
    addToast({ title: "Duplicated", description: "Създадено е копие като чернова.", variant: "success" });
    navigate(accountingPath(`offers/${newId}`));
  }, [workingId, duplicateOffer, navigate, addToast]);
  const handleDelete = useCallback(() => {
    if (!workingId) return;
    const ok = typeof window === "undefined" ? true : window.confirm("Изтриване на тази оферта?");
    if (!ok) return;
    deleteOffer(workingId);
    addToast({ title: "Deleted", description: "Офертата е изтрита.", variant: "success" });
    navigate(accountingPath("offers"));
  }, [workingId, deleteOffer, navigate, addToast]);
  const handlePrint = useCallback(() => {
    if (typeof window !== "undefined") window.print();
  }, []);
  if (!workingId || !record) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full items-center justify-center text-sm text-muted-foreground", children: "Loading…" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full min-h-0 w-full flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5 sm:px-6 lg:px-8 print:hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: accountingPath("offers"),
            "aria-label": "Back to offers",
            className: "inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-background/70",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4", "aria-hidden": true })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "truncate text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-semibold", children: draft.projectName || "Без заглавие" }),
          " · ",
          record.status === "draft" ? "чернова" : record.status === "pending" ? "изпратена" : record.status === "paid" ? "приета" : "изтекла"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: toolbarBtnClass, onClick: handlePrint, title: "Print / export PDF", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "h-3.5 w-3.5", "aria-hidden": true }),
          " Print"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: toolbarBtnClass, onClick: handleDuplicate, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-3.5 w-3.5", "aria-hidden": true }),
          " Duplicate"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: `${toolbarBtnClass} text-destructive hover:text-destructive hover:border-destructive/40`,
            onClick: handleDelete,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5", "aria-hidden": true }),
              " Delete"
            ]
          }
        ),
        record.status === "draft" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: primaryBtnClass, onClick: handleMarkSent, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5", "aria-hidden": true }),
          " Mark as sent"
        ] }) : null
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-h-0 overflow-y-auto hide-scrollbar bg-[var(--inkblot-semantic-color-background-tertiary)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(OfferDocument, { draft, documentId: "offer-document", editable: { onChange: setDraft } }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RouteSafeguard, {})
  ] });
}
function RouteSafeguard() {
  const { recordId } = useParams();
  const { offers } = useOfferStore();
  const navigate = useNavigate();
  useEffect(() => {
    if (!recordId || recordId === NEW_OFFER_ROUTE) return;
    const found = offers.some((o) => o.recordId === recordId);
    if (!found) navigate(accountingPath("offers"), { replace: true });
  }, [recordId, offers, navigate]);
  return null;
}

export { OfferBuilder as default };
