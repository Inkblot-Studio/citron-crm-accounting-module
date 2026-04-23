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
  const [selectedId, setSelected] = useState$1(null);
  const [addMenuForId, setAddMenuForId] = useState$1(null);
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
      setSelected(null);
    },
    [draft, editable]
  );
  const insertAfter = useCallback$1(
    (afterId, kind) => {
      if (!editable) return;
      const i = draft.blocks.findIndex((b) => b.id === afterId);
      const block = createBlock(kind);
      const next = [...draft.blocks];
      next.splice(i + 1, 0, block);
      editable.onChange({ ...draft, blocks: next });
      setSelected(block.id);
      setAddMenuForId(null);
    },
    [draft, editable]
  );
  const rootRef = useRef$1(null);
  useEffect$1(() => {
    if (!editMode) return;
    function onDocClick(e) {
      if (!rootRef.current) return;
      const t = e.target;
      if (rootRef.current.contains(t)) return;
      setSelected(null);
      setAddMenuForId(null);
    }
    function onKey(e) {
      if (e.key === "Escape") {
        setSelected(null);
        setAddMenuForId(null);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [editMode]);
  const docType = bgDocumentTypeById(draft.documentTypeId);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      id: documentId,
      ref: rootRef,
      className: `offer-doc relative mx-auto max-w-[720px] bg-[var(--inkblot-semantic-color-background-primary)] text-foreground shadow-[var(--inkblot-shadow-sm)] [font-feature-settings:'ss01','cv11'] ${className}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-10 px-8 py-10 sm:gap-12 sm:px-12 sm:py-14 md:px-16 md:py-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex flex-col gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--inkblot-semantic-color-text-tertiary)]", children: [
                docType?.label ?? "Оферта",
                docType?.legal ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-citrus-lemon", children: "· ЗДДС" }) : null
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                EditableText,
                {
                  as: "span",
                  value: draft.documentNumber,
                  editable: editMode,
                  onCommit: (v) => patchDraft({ documentNumber: v }),
                  placeholder: "№",
                  className: "font-mono text-[13px] text-citrus-lemon"
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "grid min-w-0 grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-2 text-[11px] sm:max-w-[58%] sm:justify-self-end", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MetaLabel, { children: "Клиент" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(MetaValue, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                EditableText,
                {
                  value: draft.clientName,
                  editable: editMode,
                  onCommit: (v) => patchDraft({ clientName: v }),
                  placeholder: "Име на клиента",
                  className: "font-medium text-foreground"
                }
              ) }),
              editMode || draft.clientOrg && draft.clientOrg !== draft.clientName ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MetaLabel, { children: "Организация" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(MetaValue, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  EditableText,
                  {
                    value: draft.clientOrg,
                    editable: editMode,
                    onCommit: (v) => patchDraft({ clientOrg: v }),
                    placeholder: "—",
                    className: "text-[var(--inkblot-semantic-color-text-secondary)]"
                  }
                ) })
              ] }) : null,
              editMode || draft.clientEmail ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MetaLabel, { children: "Имейл" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(MetaValue, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  EditableText,
                  {
                    value: draft.clientEmail,
                    editable: editMode,
                    onCommit: (v) => patchDraft({ clientEmail: v }),
                    placeholder: "—",
                    className: "break-all text-[var(--inkblot-semantic-color-text-secondary)]"
                  }
                ) })
              ] }) : null,
              /* @__PURE__ */ jsxRuntimeExports.jsx(MetaLabel, { children: "Издадена" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(MetaValue, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                EditableDate,
                {
                  value: draft.issueDate,
                  editable: editMode,
                  onCommit: (v) => patchDraft({ issueDate: v || void 0 })
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(MetaLabel, { children: "Валидна до" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(MetaValue, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                EditableDate,
                {
                  value: draft.validUntil,
                  editable: editMode,
                  onCommit: (v) => patchDraft({ validUntil: v || void 0 })
                }
              ) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            EditableHeading,
            {
              value: draft.projectName,
              editable: editMode,
              onCommit: (v) => patchDraft({ projectName: v }),
              placeholder: "Име на проекта",
              className: "text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-foreground sm:text-4xl md:text-[2.75rem]"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-16 bg-foreground", "aria-hidden": true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-10 sm:gap-12", children: draft.blocks.map((block, idx) => {
          const featureIdx = draft.blocks.slice(0, idx + 1).filter((b) => b.kind === "feature").length;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            BlockFrame,
            {
              block,
              editMode,
              isFirst: idx === 0,
              isLast: idx === draft.blocks.length - 1,
              isSelected: selectedId === block.id,
              isAddMenuOpen: addMenuForId === block.id,
              onSelect: () => setSelected(block.id),
              onMoveUp: () => moveBlock(block.id, -1),
              onMoveDown: () => moveBlock(block.id, 1),
              onDuplicate: () => duplicateBlock(block.id),
              onDelete: () => deleteBlock(block.id),
              onToggleAddMenu: () => setAddMenuForId((cur) => cur === block.id ? null : block.id),
              onCloseAddMenu: () => setAddMenuForId(null),
              onPickAdd: (k) => insertAfter(block.id, k),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                BlockBody,
                {
                  block,
                  editMode,
                  isSelected: selectedId === block.id,
                  featureNumber: block.kind === "feature" ? featureIdx : 0,
                  onPatch: patchBlock
                }
              )
            },
            block.id
          );
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "grid grid-cols-1 items-baseline gap-2 border-t border-border pt-5 text-[11px] text-[var(--inkblot-semantic-color-text-tertiary)] sm:grid-cols-[auto_1fr_auto] sm:gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            EditableText,
            {
              value: draft.brandName,
              editable: editMode,
              onCommit: (v) => patchDraft({ brandName: v }),
              placeholder: "Бранд",
              className: "font-semibold uppercase tracking-[0.18em] text-foreground"
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
      ] })
    }
  );
}
function BlockFrame({
  editMode,
  isFirst,
  isLast,
  isSelected,
  isAddMenuOpen,
  onSelect,
  onMoveUp,
  onMoveDown,
  onDuplicate,
  onDelete,
  onToggleAddMenu,
  onCloseAddMenu,
  onPickAdd,
  children
}) {
  if (!editMode) return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      "data-selected": isSelected || void 0,
      onMouseDown: (e) => {
        if (e.target.closest("[data-block-toolbar]")) return;
        onSelect();
      },
      className: "group/blk relative -mx-4 rounded-md px-4 py-1 transition-colors data-[selected]:bg-[var(--inkblot-semantic-color-background-secondary)]",
      children: [
        isSelected ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "data-block-toolbar": true,
            className: "absolute right-4 -top-4 z-10 flex items-center gap-0.5 rounded-md border border-border bg-[var(--inkblot-semantic-color-background-primary)] p-0.5 shadow-[var(--inkblot-shadow-sm)]",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarBtn, { label: "Move up", disabled: isFirst, onClick: onMoveUp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { className: "h-4 w-4", "aria-hidden": true }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarBtn, { label: "Move down", disabled: isLast, onClick: onMoveDown, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "h-4 w-4", "aria-hidden": true }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarBtn, { label: "Add below", onClick: onToggleAddMenu, active: isAddMenuOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4", "aria-hidden": true }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarBtn, { label: "Duplicate", onClick: onDuplicate, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-4 w-4", "aria-hidden": true }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarBtn, { label: "Delete", onClick: onDelete, destructive: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4", "aria-hidden": true }) })
            ]
          }
        ) : null,
        isSelected && isAddMenuOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(AddBlockMenu, { onPick: onPickAdd, onClose: onCloseAddMenu }) : null,
        children
      ]
    }
  );
}
function ToolbarBtn({
  label,
  onClick,
  children,
  disabled,
  destructive,
  active
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      "aria-label": label,
      title: label,
      disabled,
      onClick,
      "aria-pressed": active,
      className: `inline-flex h-7 w-7 items-center justify-center rounded text-muted-foreground transition-colors hover:bg-background/80 disabled:opacity-40 disabled:hover:bg-transparent ${destructive ? "hover:text-destructive" : "hover:text-foreground"} ${active ? "bg-background text-foreground" : ""}`,
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
function AddBlockMenu({ onPick, onClose }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      role: "menu",
      "aria-label": "Тип блок",
      className: "absolute right-4 top-6 z-20 grid w-[min(320px,calc(100vw-3rem))] grid-cols-2 gap-1 rounded-lg border border-border bg-[var(--inkblot-semantic-color-background-primary)] p-1.5 shadow-[var(--inkblot-shadow-md)]",
      onMouseDown: (e) => e.stopPropagation(),
      children: [
        ADD_BLOCK_KINDS.map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            role: "menuitem",
            onClick: () => onPick(k),
            className: "flex items-center gap-2 rounded-md px-2.5 py-2 text-left text-xs text-foreground transition-colors hover:bg-[var(--inkblot-semantic-color-background-secondary)]",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-6 w-6 items-center justify-center rounded-md bg-[var(--inkblot-semantic-color-background-secondary)] font-mono text-[11px] text-citrus-lemon", children: BLOCK_GLYPH[k] }),
              BLOCK_KIND_LABEL[k]
            ]
          },
          k
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: onClose,
            "aria-label": "Close",
            className: "col-span-2 mt-1 inline-flex items-center justify-center gap-1.5 rounded-md px-2.5 py-1.5 text-[11px] text-muted-foreground hover:bg-[var(--inkblot-semantic-color-background-secondary)]",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3.5 w-3.5", "aria-hidden": true }),
              " Затвори"
            ]
          }
        )
      ]
    }
  );
}
function BlockBody({
  block,
  editMode,
  isSelected,
  featureNumber,
  onPatch
}) {
  switch (block.kind) {
    case "heading":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(HeadingBody, { block, editMode, onPatch });
    case "paragraph":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(ParagraphBody, { block, editMode, onPatch });
    case "feature":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureBody, { block, editMode, index: featureNumber, onPatch });
    case "bullets":
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
    case "quote":
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "border-l-[2px] border-citrus-lemon pl-6 [font-feature-settings:'ss01']", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          EditableText,
          {
            value: block.text,
            editable: editMode,
            onCommit: (v) => onPatch(block.id, (b) => ({ ...b, text: v })),
            placeholder: "Цитат от клиент или стойностно твърдение…",
            multiline: true,
            className: "text-lg italic leading-[1.6] text-foreground sm:text-xl"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          EditableText,
          {
            value: block.cite,
            editable: editMode,
            onCommit: (v) => onPatch(block.id, (b) => ({ ...b, cite: v })),
            placeholder: "— източник",
            className: "mt-3 block text-[11px] uppercase tracking-[0.16em] text-[var(--inkblot-semantic-color-text-tertiary)]"
          }
        )
      ] });
    case "pricing":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(PricingBody, { block, editMode, isSelected, onPatch });
    case "plans":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(PlansBody, { block, editMode, onPatch });
    case "divider":
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center text-muted-foreground", "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg tracking-[0.6em]", children: "·   ·   ·" }) });
  }
}
function HeadingBody({ block, editMode, onPatch }) {
  if (block.level === 1) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        EditableHeading,
        {
          value: block.text,
          editable: editMode,
          onCommit: (v) => onPatch(block.id, (b) => ({ ...b, text: v })),
          placeholder: "Заглавие H1",
          className: "flex-1 text-[28px] font-semibold leading-[1.15] tracking-[-0.02em] text-foreground sm:text-[32px]"
        }
      ),
      editMode ? /* @__PURE__ */ jsxRuntimeExports.jsx(HeadingLevelSelect, { block, onPatch }) : null
    ] });
  }
  if (block.level === 2) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-border", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          EditableHeading,
          {
            value: block.text,
            editable: editMode,
            onCommit: (v) => onPatch(block.id, (b) => ({ ...b, text: v })),
            placeholder: "ЗАГЛАВИЕ НА СЕКЦИЯ",
            className: "text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground"
          }
        ),
        editMode ? /* @__PURE__ */ jsxRuntimeExports.jsx(HeadingLevelSelect, { block, onPatch }) : null
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      EditableHeading,
      {
        value: block.text,
        editable: editMode,
        onCommit: (v) => onPatch(block.id, (b) => ({ ...b, text: v })),
        placeholder: "Подзаглавие",
        className: "flex-1 text-base font-semibold tracking-tight text-foreground"
      }
    ),
    editMode ? /* @__PURE__ */ jsxRuntimeExports.jsx(HeadingLevelSelect, { block, onPatch }) : null
  ] });
}
function HeadingLevelSelect({ block, onPatch }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "select",
    {
      value: block.level,
      onChange: (e) => onPatch(block.id, (b) => ({
        ...b,
        level: Number(e.target.value) === 1 ? 1 : Number(e.target.value) === 3 ? 3 : 2
      })),
      className: "mt-1 hidden h-6 shrink-0 rounded border border-border bg-[var(--inkblot-semantic-color-background-primary)] px-1.5 text-[10px] text-muted-foreground group-data-[selected]/blk:inline-block",
      title: "Heading level",
      "aria-label": "Heading level",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 1, children: "H1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 2, children: "H2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 3, children: "H3" })
      ]
    }
  );
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
      className: "text-[15px] leading-[1.75] text-foreground [text-wrap:pretty]"
    }
  );
}
function FeatureBody({
  block,
  editMode,
  index,
  onPatch
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "grid grid-cols-[3rem_minmax(0,1fr)] gap-x-6 gap-y-2 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-x-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: "text-[40px] font-light leading-none text-muted-foreground tabular-nums sm:text-[52px]",
        "aria-hidden": true,
        children: String(index).padStart(2, "0")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
      editMode || block.kicker ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        EditableText,
        {
          value: block.kicker,
          editable: editMode,
          onCommit: (v) => onPatch(block.id, (b) => ({ ...b, kicker: v })),
          placeholder: "Подзаглавие (по желание)",
          className: "text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--inkblot-semantic-color-text-tertiary)]"
        }
      ) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        EditableHeading,
        {
          value: block.title,
          editable: editMode,
          onCommit: (v) => onPatch(block.id, (b) => ({ ...b, title: v })),
          placeholder: "Име на функционалност",
          className: "text-xl font-semibold leading-snug tracking-tight text-foreground sm:text-[22px]"
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
          className: "text-[14px] leading-[1.7] text-[var(--inkblot-semantic-color-text-secondary)]"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        BulletsList,
        {
          items: block.bullets,
          editMode,
          onChange: (items) => onPatch(block.id, (b) => ({ ...b, bullets: items })),
          placeholder: "Булет",
          compact: true
        }
      ),
      editMode || block.comparisonNote ? /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "mt-3 border-t border-border pt-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1 text-[10px] font-medium uppercase tracking-[0.2em] text-citrus-lemon", children: "Конкурентно предимство" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          EditableText,
          {
            value: block.comparisonNote,
            editable: editMode,
            onCommit: (v) => onPatch(block.id, (b) => ({ ...b, comparisonNote: v })),
            placeholder: "Как това ни отличава от конкуренцията…",
            multiline: true,
            className: "text-[13px] italic leading-[1.65] text-[var(--inkblot-semantic-color-text-secondary)]"
          }
        )
      ] }) : null
    ] })
  ] });
}
function PricingBody({
  block,
  editMode,
  isSelected,
  onPatch
}) {
  const marketRange = formatMoneyRange(block.marketValueFrom, block.marketValueTo, block.currency);
  const vatAmount = offerVatAmount(block);
  const total = offerGrandTotal(block);
  const patchP = (u) => onPatch(block.id, u);
  const editing = editMode && isSelected;
  const rows = [
    {
      label: "Пазарна стойност",
      show: editing || marketRange != null,
      node: editing ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-1.5", children: [
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 text-[11px] text-muted-foreground", children: block.currency })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono tabular-nums", children: marketRange ?? "—" })
    },
    {
      label: "Срок за изпълнение",
      show: editMode || !!block.timeline,
      node: /* @__PURE__ */ jsxRuntimeExports.jsx(
        EditableText,
        {
          value: block.timeline,
          editable: editMode,
          onCommit: (v) => patchP((b) => ({ ...b, timeline: v })),
          placeholder: "напр. 1.5 месеца",
          className: "text-[14px]"
        }
      )
    },
    {
      label: "Гаранция",
      show: editMode || !!block.guarantee,
      node: /* @__PURE__ */ jsxRuntimeExports.jsx(
        EditableText,
        {
          value: block.guarantee,
          editable: editMode,
          onCommit: (v) => patchP((b) => ({ ...b, guarantee: v })),
          placeholder: "напр. SEO и техническа поддръжка",
          className: "text-[14px]"
        }
      )
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "flex flex-col gap-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Ценообразуване" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-8 sm:grid-cols-[minmax(0,1fr)_auto]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("dl", { className: "flex flex-col divide-y divide-border", children: rows.filter((r) => r.show).map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[minmax(0,11rem)_minmax(0,1fr)] items-baseline gap-x-6 py-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--inkblot-semantic-color-text-tertiary)]", children: r.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-foreground", children: r.node })
      ] }, r.label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start gap-1 sm:items-end sm:text-right", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--inkblot-semantic-color-text-tertiary)]", children: "Предложена цена" }),
        editing ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: block.currency,
              onChange: (e) => patchP((b) => ({ ...b, currency: e.target.value })),
              "aria-label": "Currency",
              className: "rounded border border-border bg-[var(--inkblot-semantic-color-background-primary)] px-1 py-0.5 text-[10px] text-muted-foreground",
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
              allowZero: true,
              className: "!w-[10ch] font-mono text-[32px] font-semibold tabular-nums sm:text-[40px]"
            }
          )
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[32px] font-semibold leading-none tabular-nums text-foreground sm:text-[40px]", children: formatMoney(block.price, block.currency) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex flex-col items-start gap-0.5 text-[11px] text-[var(--inkblot-semantic-color-text-tertiary)] sm:items-end", children: [
          editing ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-1", children: [
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
          ] }) : block.vatPct > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "+ ",
            block.vatPct,
            "% VAT · ",
            formatMoney(vatAmount, block.currency)
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "без VAT" }),
          block.vatPct > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-foreground", children: [
            "Общо · ",
            formatMoney(total, block.currency)
          ] }) : null
        ] })
      ] })
    ] }),
    editMode || block.note ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      EditableText,
      {
        value: block.note,
        editable: editMode,
        onCommit: (v) => patchP((b) => ({ ...b, note: v })),
        placeholder: "Пояснение / сравнение с пазара…",
        multiline: true,
        className: "max-w-[60ch] text-[13px] italic leading-[1.7] text-[var(--inkblot-semantic-color-text-secondary)]"
      }
    ) : null
  ] });
}
function PlansBody({ block, editMode, onPatch }) {
  const patchP = (u) => onPatch(block.id, u);
  const updatePlan = (id, p) => patchP((b) => ({ ...b, plans: b.plans.map((pl) => pl.id === id ? { ...pl, ...p } : pl) }));
  const removePlan = (id) => patchP((b) => ({ ...b, plans: b.plans.filter((pl) => pl.id !== id) }));
  const addPlan = () => patchP((b) => ({ ...b, plans: [...b.plans, newSupportPlan()] }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "flex flex-col gap-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        EditableText,
        {
          value: block.title,
          editable: editMode,
          onCommit: (v) => patchP((b) => ({ ...b, title: v })),
          placeholder: "ЗАГЛАВИЕ",
          className: "text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--inkblot-semantic-color-text-tertiary)]"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-border", "aria-hidden": true })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 md:grid-cols-3", children: [
      block.plans.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group/plan relative flex flex-col gap-1.5 px-0 py-3 sm:px-5 sm:py-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          EditableText,
          {
            value: p.title,
            editable: editMode,
            onCommit: (v) => updatePlan(p.id, { title: v }),
            placeholder: "Заглавие",
            className: "text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--inkblot-semantic-color-text-tertiary)]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          EditableText,
          {
            value: p.subtitle ?? "",
            editable: editMode,
            onCommit: (v) => updatePlan(p.id, { subtitle: v }),
            placeholder: "Подзаглавие",
            className: "text-[13px] text-[var(--inkblot-semantic-color-text-secondary)]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          EditableText,
          {
            value: p.priceLabel,
            editable: editMode,
            onCommit: (v) => updatePlan(p.id, { priceLabel: v }),
            placeholder: "Цена",
            className: "mt-0.5 font-mono text-lg font-semibold tabular-nums text-foreground"
          }
        ),
        editMode ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => removePlan(p.id),
            "aria-label": "Remove plan",
            title: "Премахни",
            className: "absolute top-2 right-0 hidden h-7 w-7 items-center justify-center rounded-md text-muted-foreground hover:bg-background/70 hover:text-destructive focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--inkblot-semantic-color-border-focus)] group-data-[selected]/blk:inline-flex sm:right-2",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4", "aria-hidden": true })
          }
        ) : null
      ] }, p.id)),
      editMode ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: addPlan,
          className: "hidden min-h-[88px] items-center justify-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground group-data-[selected]/blk:flex",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4", "aria-hidden": true }),
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
  placeholder,
  compact
}) {
  const patch = (i, v) => onChange(items.map((it, idx) => idx === i ? v : it));
  const remove = (i) => onChange(items.filter((_, idx) => idx !== i));
  const add = () => onChange([...items, ""]);
  if (!editMode && items.every((it) => !it)) return null;
  const liCls = compact ? "relative flex items-start gap-2 pl-5 text-[14px] leading-[1.65] text-[var(--inkblot-semantic-color-text-secondary)]" : "relative flex items-start gap-2 pl-5 text-[15px] leading-[1.75] text-[var(--inkblot-semantic-color-text-secondary)]";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-1 flex flex-col gap-1.5", children: [
    items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: liCls, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "absolute left-0 top-[0.65em] h-[3px] w-[3px] rounded-full bg-foreground" }),
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
          className: "hidden h-6 w-6 shrink-0 items-center justify-center rounded text-muted-foreground hover:bg-background/70 hover:text-destructive focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--inkblot-semantic-color-border-focus)] group-data-[selected]/blk:inline-flex",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5", "aria-hidden": true })
        }
      ) : null
    ] }, i)),
    editMode ? /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "mt-0.5 hidden group-data-[selected]/blk:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: add,
        className: "inline-flex h-7 items-center gap-1.5 rounded-md border border-dashed border-border px-2.5 text-[11px] text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5", "aria-hidden": true }),
          " Добави булет"
        ]
      }
    ) }) : null
  ] });
}
function SectionLabel({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--inkblot-semantic-color-text-tertiary)]", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-border", "aria-hidden": true })
  ] });
}
function MetaLabel({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-[9px] font-medium uppercase tracking-[0.22em] text-[var(--inkblot-semantic-color-text-tertiary)]", children });
}
function MetaValue({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-[12px]", children });
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
      className: "min-h-[28px] rounded-md border border-border bg-[var(--inkblot-semantic-color-background-primary)] px-2 py-1 text-[11px] text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--inkblot-semantic-color-border-focus)]"
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
      className: `min-h-[28px] w-[7ch] rounded-md border border-border bg-[var(--inkblot-semantic-color-background-primary)] px-2 py-1 font-mono text-sm tabular-nums text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--inkblot-semantic-color-border-focus)] ${className ?? ""}`
    }
  );
}

const {useCallback,useEffect,useMemo,useRef,useState} = await importShared('react');

const {createPortal} = await importShared('react-dom');

const {Link,useNavigate,useParams} = await importShared('react-router-dom');
const actionBtnClass = "inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-transparent px-3 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-background/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--inkblot-semantic-color-border-focus)] disabled:opacity-50";
const primaryActionBtnClass = "inline-flex h-8 items-center gap-1.5 rounded-md bg-accent px-3 text-xs font-semibold text-accent-foreground transition-colors hover:bg-accent/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--inkblot-semantic-color-border-focus)]";
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
  const [printHost, setPrintHost] = useState(null);
  useEffect(() => {
    if (typeof document === "undefined") return;
    const el = document.createElement("div");
    el.className = "offer-print-host";
    el.setAttribute("aria-hidden", "true");
    document.body.appendChild(el);
    setPrintHost(el);
    return () => {
      if (el.parentNode) el.parentNode.removeChild(el);
    };
  }, []);
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
  const statusLabelBg = {
    draft: "чернова",
    pending: "изпратена",
    paid: "приета",
    overdue: "изтекла"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "offer-builder-screen flex h-full min-h-0 w-full flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: accountingPath("offers"),
            "aria-label": "Back to offers",
            className: "inline-flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-foreground hover:bg-background/70",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4", "aria-hidden": true })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "truncate text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-semibold", children: draft.projectName || "Без заглавие" }),
          " · ",
          statusLabelBg[record.status]
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: actionBtnClass, onClick: handlePrint, title: "Print / export PDF", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "h-3.5 w-3.5", "aria-hidden": true }),
          " Print"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: actionBtnClass, onClick: handleDuplicate, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-3.5 w-3.5", "aria-hidden": true }),
          " Duplicate"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: `${actionBtnClass} text-destructive hover:text-destructive hover:border-destructive/40`,
            onClick: handleDelete,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5", "aria-hidden": true }),
              " Delete"
            ]
          }
        ),
        record.status === "draft" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: primaryActionBtnClass, onClick: handleMarkSent, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5", "aria-hidden": true }),
          " Mark as sent"
        ] }) : null
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-h-0 overflow-y-auto hide-scrollbar bg-[var(--inkblot-semantic-color-background-tertiary)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(OfferDocument, { draft, documentId: "offer-document", editable: { onChange: setDraft } }) }) }),
    printHost ? createPortal(
      /* @__PURE__ */ jsxRuntimeExports.jsx(OfferDocument, { draft, documentId: "offer-print-document", className: "offer-print-doc" }),
      printHost
    ) : null,
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
