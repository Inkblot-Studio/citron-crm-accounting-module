import { importShared } from './__federation_fn_import-BF-AfqT6.js';
import { j as jsxRuntimeExports } from './jsx-runtime-XI9uIe3W.js';
import { u as useInvoiceStore, i as invoiceGrandTotal, f as formatUsd } from './invoiceStore-CH64SPmX.js';
import { c as createLucideIcon, u as useToast, n as normalizeInvoiceListStatusParam, a as accountingPath, I as INVOICE_STATUS_TABS } from './accountingConstants-Cfl6rq38.js';
import { b as CRM_TOOLBAR_SEARCH_WRAP, d as crmFilterChip, e as CRM_HEADER_BTN_SECONDARY, f as CRM_PANEL_SURFACE } from './crmToolbarClasses-DO0dkTie.js';
import { D as DraggableChrome, a as DRAGGABLE_DIALOG_SURFACE, b as DraggableDialogFrame } from './DraggableChrome-Bbk5jmT_.js';

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
];
const EllipsisVertical = createLucideIcon("ellipsis-vertical", __iconNode);

const {useCallback,useEffect,useMemo,useRef,useState} = await importShared('react');

const {createPortal} = await importShared('react-dom');

const {useNavigate,useSearchParams} = await importShared('react-router-dom');

const {Dialog,DialogClose,DialogContent,SearchBar,StatusBadge} = await importShared('@citron-systems/citron-ui');
function statusBadgeVariant(s) {
  switch (s) {
    case "paid":
      return "success";
    case "pending":
      return "warning";
    case "overdue":
      return "error";
    default:
      return "info";
  }
}
function statusLabel(s) {
  switch (s) {
    case "paid":
      return "Paid";
    case "pending":
      return "Pending";
    case "overdue":
      return "Overdue";
    case "draft":
      return "Draft";
    default:
      return s;
  }
}
function formatListDate(iso) {
  if (!iso) return "—";
  const d = /* @__PURE__ */ new Date(iso + "T12:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}
function parseAmountForSort(record) {
  return invoiceGrandTotal(record.draft);
}
const ACTION_MENU_MIN_W = 160;
const ACTION_MENU_GAP = 8;
function actionMenuItemClass(destructive) {
  return [
    "flex min-h-[var(--inkblot-size-touch-target-min)] w-full items-center rounded-[var(--inkblot-radius-md)]",
    "px-[var(--inkblot-spacing-3)] py-[var(--inkblot-spacing-2)] text-left text-sm",
    "[font:var(--inkblot-semantic-typography-body-medium)]",
    "text-[var(--inkblot-semantic-color-text-primary)] hover:bg-[var(--inkblot-semantic-color-background-tertiary)]",
    "transition-colors focus:outline-none focus-visible:outline-none focus-visible:ring-0",
    destructive ? "text-destructive hover:text-destructive hover:bg-destructive/10" : ""
  ].filter(Boolean).join(" ");
}
function InvoicesHome() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToast } = useToast();
  const { invoices, deleteInvoice, duplicateInvoice } = useInvoiceStore();
  const [search, setSearch] = useState("");
  const [statusTab, setStatusTab] = useState(() => normalizeInvoiceListStatusParam(searchParams.get("status")));
  useEffect(() => {
    setStatusTab(normalizeInvoiceListStatusParam(searchParams.get("status")));
  }, [searchParams]);
  const setStatusTabAndUrl = useCallback(
    (id) => {
      setStatusTab(id);
      setSearchParams(
        (prev) => {
          const next = new URLSearchParams(prev);
          if (id === "all") next.delete("status");
          else next.set("status", id);
          return next;
        },
        { replace: true }
      );
    },
    [setSearchParams]
  );
  const [sortKey, setSortKey] = useState("date");
  const [sortDir, setSortDir] = useState("desc");
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [actionMenu, setActionMenu] = useState(null);
  const actionMenuRef = useRef(null);
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return invoices.filter((inv) => {
      if (statusTab !== "all" && inv.status !== statusTab) return false;
      if (!q) return true;
      const d = inv.draft;
      return d.invoiceNumber.toLowerCase().includes(q) || d.clientName.toLowerCase().includes(q) || d.clientEmail.toLowerCase().includes(q);
    });
  }, [invoices, search, statusTab]);
  const sorted = useMemo(() => {
    const copy = [...filtered];
    copy.sort((a, b) => {
      let cmp = 0;
      if (sortKey === "date") {
        const da = a.draft.issueDate ?? "";
        const db = b.draft.issueDate ?? "";
        cmp = da.localeCompare(db);
      } else {
        cmp = parseAmountForSort(a) - parseAmountForSort(b);
      }
      return sortDir === "asc" ? cmp : -cmp;
    });
    return copy;
  }, [filtered, sortKey, sortDir]);
  const toggleSort = useCallback(
    (key) => {
      if (sortKey === key) {
        setSortDir((d) => d === "asc" ? "desc" : "asc");
      } else {
        setSortKey(key);
        setSortDir("desc");
      }
    },
    [sortKey]
  );
  const openInvoice = useCallback(
    (recordId) => {
      navigate(accountingPath(`editor/${recordId}`));
    },
    [navigate]
  );
  const handleDuplicate = useCallback(
    (inv) => {
      const newId = duplicateInvoice(inv.recordId);
      if (!newId) return;
      addToast({ title: "Duplicated", description: "Draft copy created.", variant: "success" });
      navigate(accountingPath(`editor/${newId}`));
    },
    [duplicateInvoice, navigate, addToast]
  );
  const handleCopyNumber = useCallback(
    async (num) => {
      try {
        await navigator.clipboard.writeText(num);
        addToast({ title: "Copied", description: "Invoice number copied.", variant: "success" });
      } catch {
        addToast({ title: "Copy failed", description: "Clipboard unavailable.", variant: "error" });
      }
    },
    [addToast]
  );
  const confirmDelete = useCallback(() => {
    if (!deleteTarget) return;
    deleteInvoice(deleteTarget.recordId);
    addToast({ title: "Deleted", description: `${deleteTarget.draft.invoiceNumber} removed.`, variant: "success" });
    setDeleteTarget(null);
  }, [deleteTarget, deleteInvoice, addToast]);
  const actionMenuInvoice = useMemo(
    () => actionMenu ? invoices.find((i) => i.recordId === actionMenu.recordId) : void 0,
    [actionMenu, invoices]
  );
  useEffect(() => {
    if (actionMenu && !actionMenuInvoice) setActionMenu(null);
  }, [actionMenu, actionMenuInvoice]);
  useEffect(() => {
    if (!actionMenu) return;
    const onKey = (e) => {
      if (e.key === "Escape") setActionMenu(null);
    };
    const onScroll = () => setActionMenu(null);
    let removePointer;
    const openTid = window.setTimeout(() => {
      const onPointerDown = (e) => {
        const t = e.target;
        if (actionMenuRef.current?.contains(t)) return;
        const trigger = e.target.closest(`[data-invoice-row-actions="${actionMenu.recordId}"]`);
        if (trigger) return;
        setActionMenu(null);
      };
      document.addEventListener("pointerdown", onPointerDown);
      removePointer = () => document.removeEventListener("pointerdown", onPointerDown);
    }, 0);
    document.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, true);
    return () => {
      window.clearTimeout(openTid);
      removePointer?.();
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll, true);
    };
  }, [actionMenu]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-full min-w-0 px-3 min-[400px]:px-4 sm:px-6 lg:px-8 py-4 sm:py-6 pb-[max(1.25rem,env(safe-area-inset-bottom,0px))] sm:pb-6 overflow-y-auto hide-scrollbar h-full box-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 flex flex-col gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `min-w-0 flex-1 [&_label]:sr-only ${CRM_TOOLBAR_SEARCH_WRAP}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        SearchBar,
        {
          label: "Search",
          placeholder: "Invoice #, client name or email…",
          value: search,
          onChange: (e) => setSearch(e.target.value),
          className: "w-full"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center gap-1.5 sm:justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex flex-wrap items-center gap-1", "aria-label": "Filter by status", children: INVOICE_STATUS_TABS.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setStatusTabAndUrl(tab.id),
          className: crmFilterChip(statusTab === tab.id),
          children: tab.label
        },
        tab.id
      )) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-3", children: "Recent invoices" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border/50 bg-muted/10 overflow-hidden w-full min-w-0 dark:bg-muted/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto touch-scroll-x touch-pan-x", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-[780px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[2.5rem_minmax(5rem,0.9fr)_minmax(8rem,1.1fr)_5.5rem_6.5rem_5.75rem_2.5rem] gap-2 sm:gap-3 items-center px-3 sm:px-5 py-2.5 sm:py-3 border-b border-border text-[10px] text-muted-foreground uppercase tracking-wider text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tabular-nums", children: "#" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-start justify-center gap-0.5 min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Client" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-start justify-center gap-0.5 min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Email" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "w-full uppercase tracking-wider hover:text-foreground transition-colors",
            onClick: () => toggleSort("amount"),
            children: "Amount"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-left", children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "w-full uppercase tracking-wider hover:text-foreground transition-colors",
            onClick: () => toggleSort("date"),
            children: "Date"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sr-only", children: "Actions" })
      ] }),
      sorted.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-14 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: "No invoices" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2 max-w-sm mx-auto", children: search.trim() || statusTab !== "all" ? "Try adjusting search or filters." : "Create your first invoice with the + button above." })
      ] }) : sorted.map((inv, rowIndex) => {
        const d = inv.draft;
        const total = invoiceGrandTotal(d);
        const st = inv.status;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            role: "button",
            tabIndex: 0,
            onClick: () => openInvoice(inv.recordId),
            onKeyDown: (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openInvoice(inv.recordId);
              }
            },
            className: "grid grid-cols-[2.5rem_minmax(5rem,0.9fr)_minmax(8rem,1.1fr)_5.5rem_6.5rem_5.75rem_2.5rem] gap-2 sm:gap-3 items-center px-3 sm:px-5 py-2.5 sm:py-3 min-h-[48px] sm:min-h-[52px] border-b border-border/50 hover:bg-secondary/30 transition-colors cursor-pointer text-left",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-mono text-citrus-lemon tabular-nums", children: rowIndex }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-start justify-center text-left min-w-0 px-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground leading-tight truncate max-w-full w-full", children: d.clientName }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-start justify-center text-left min-w-0 px-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-xs text-foreground/90 leading-tight truncate max-w-full w-full",
                  title: d.clientEmail || void 0,
                  children: d.clientEmail || "—"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-mono text-foreground tabular-nums text-left", children: formatUsd(total) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { label: statusLabel(st), variant: statusBadgeVariant(st) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground text-left", children: formatListDate(d.issueDate) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-start", onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-invoice-row-actions": inv.recordId,
                  title: "Invoice actions",
                  "aria-label": "Open invoice actions",
                  "aria-expanded": actionMenu?.recordId === inv.recordId,
                  onClick: (e) => {
                    e.stopPropagation();
                    const rect = e.currentTarget.getBoundingClientRect();
                    setActionMenu(
                      (m) => m?.recordId === inv.recordId ? null : { recordId: inv.recordId, rect }
                    );
                  },
                  className: `${CRM_HEADER_BTN_SECONDARY} text-muted-foreground hover:text-accent focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus:ring-0`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(EllipsisVertical, { className: "h-4 w-4", strokeWidth: 2, "aria-hidden": true })
                }
              ) })
            ]
          },
          inv.recordId
        );
      })
    ] }) }) }),
    actionMenu && actionMenuInvoice && createPortal(
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          ref: actionMenuRef,
          "data-invoice-action-portal": true,
          role: "menu",
          className: "fixed z-[200]",
          style: {
            top: actionMenu.rect.bottom + ACTION_MENU_GAP,
            left: Math.max(
              ACTION_MENU_GAP,
              Math.min(
                actionMenu.rect.right - ACTION_MENU_MIN_W,
                window.innerWidth - ACTION_MENU_MIN_W - ACTION_MENU_GAP
              )
            )
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(DraggableChrome, { resetKey: actionMenu.recordId, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `${CRM_PANEL_SURFACE} animate-popover-enter overflow-y-auto overscroll-contain shadow-xl`,
              style: {
                minWidth: ACTION_MENU_MIN_W,
                maxHeight: Math.min(280, Math.max(120, window.innerHeight - actionMenu.rect.bottom - ACTION_MENU_GAP - 12))
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-0.5 p-[var(--inkblot-spacing-2)]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    className: actionMenuItemClass(),
                    onClick: () => {
                      setActionMenu(null);
                      openInvoice(actionMenuInvoice.recordId);
                    },
                    children: "View"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    className: actionMenuItemClass(),
                    onClick: () => {
                      setActionMenu(null);
                      handleDuplicate(actionMenuInvoice);
                    },
                    children: "Duplicate"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    className: actionMenuItemClass(),
                    onClick: () => {
                      setActionMenu(null);
                      void handleCopyNumber(actionMenuInvoice.draft.invoiceNumber);
                    },
                    children: "Copy invoice number"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    className: actionMenuItemClass(true),
                    onClick: () => {
                      setActionMenu(null);
                      setDeleteTarget(actionMenuInvoice);
                    },
                    children: "Delete"
                  }
                )
              ] })
            }
          ) })
        }
      ),
      document.body
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: !!deleteTarget, onOpenChange: (open) => !open && setDeleteTarget(null), children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { showCloseButton: false, className: `sm:max-w-md ${DRAGGABLE_DIALOG_SURFACE}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      DraggableDialogFrame,
      {
        resetKey: deleteTarget?.recordId ?? "closed",
        title: "Delete invoice?",
        description: deleteTarget ? `This will remove ${deleteTarget.draft.invoiceNumber} permanently.` : void 0,
        footer: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            DialogClose,
            {
              className: "inline-flex min-h-[var(--inkblot-size-touch-target-min)] items-center justify-center rounded-[var(--inkblot-radius-lg)] border border-[var(--inkblot-semantic-color-border-default)] px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-2)] [font:var(--inkblot-semantic-typography-body-small)] text-[var(--inkblot-semantic-color-text-primary)] transition-colors duration-[var(--inkblot-duration-fast)] hover:bg-[var(--inkblot-semantic-color-background-tertiary)]",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "inline-flex min-h-[var(--inkblot-size-touch-target-min)] items-center justify-center rounded-[var(--inkblot-radius-lg)] bg-destructive px-[var(--inkblot-spacing-6)] py-[var(--inkblot-spacing-2)] text-sm font-medium text-destructive-foreground transition-colors hover:bg-destructive/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              onClick: () => {
                confirmDelete();
              },
              children: "Delete"
            }
          )
        ] })
      }
    ) }) })
  ] });
}

export { InvoicesHome as default };
