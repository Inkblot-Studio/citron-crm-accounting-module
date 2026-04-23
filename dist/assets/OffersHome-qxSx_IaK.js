import { importShared } from './__federation_fn_import-BF-AfqT6.js';
import { j as jsxRuntimeExports } from './jsx-runtime-XI9uIe3W.js';
import { u as useToast, a as accountingPath, i as bgDocumentTypeById } from './accountingConstants-Cfl6rq38.js';
import { u as useOfferStore, d as draftGrandTotal, a as draftCurrency, f as formatMoney, N as NEW_OFFER_ROUTE } from './offerStore-B7nnp6gS.js';
import { P as Plus } from './plus-CRsttFmX.js';
import { S as Sparkles, F as FileText } from './sparkles-CZyhPppu.js';

const {useCallback,useMemo,useState} = await importShared('react');

const {Link,useNavigate} = await importShared('react-router-dom');

const {SearchBar,StatusBadge} = await importShared('@citron-systems/citron-ui');
function statusVariant(s) {
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
      return "Accepted";
    case "pending":
      return "Sent";
    case "overdue":
      return "Expired";
    default:
      return "Draft";
  }
}
function OffersHome() {
  const navigate = useNavigate();
  const { addToast } = useToast();
  const { offers, duplicateOffer, deleteOffer } = useOfferStore();
  const [search, setSearch] = useState("");
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return offers;
    return offers.filter((o) => {
      const d = o.draft;
      return (d.documentNumber ?? "").toLowerCase().includes(q) || d.clientName.toLowerCase().includes(q) || d.projectName.toLowerCase().includes(q) || (d.clientEmail ?? "").toLowerCase().includes(q);
    });
  }, [offers, search]);
  const openOffer = useCallback(
    (recordId) => navigate(accountingPath(`offers/${recordId}`)),
    [navigate]
  );
  const handleDuplicate = useCallback(
    (rec) => {
      const newId = duplicateOffer(rec.recordId);
      if (!newId) return;
      addToast({ title: "Duplicated", description: "Draft copy created.", variant: "success" });
      navigate(accountingPath(`offers/${newId}`));
    },
    [duplicateOffer, navigate, addToast]
  );
  const handleDelete = useCallback(
    (rec) => {
      const ok = typeof window === "undefined" ? true : window.confirm(`Delete offer for ${rec.draft.clientName || "—"}?`);
      if (!ok) return;
      deleteOffer(rec.recordId);
      addToast({ title: "Deleted", description: "Offer removed.", variant: "success" });
    },
    [deleteOffer, addToast]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-full min-w-0 px-3 min-[400px]:px-4 sm:px-6 lg:px-8 py-4 sm:py-6 pb-[max(1.25rem,env(safe-area-inset-bottom,0px))] sm:pb-6 overflow-y-auto hide-scrollbar h-full box-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-5 rounded-[var(--inkblot-radius-xl)] border border-border bg-[var(--inkblot-semantic-color-background-secondary)] p-3 sm:p-4 shadow-[var(--inkblot-shadow-sm)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 sm:flex-row sm:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-w-0 [&_label]:sr-only", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        SearchBar,
        {
          label: "Search offers",
          placeholder: "Client, project, number or email…",
          value: search,
          onChange: (e) => setSearch(e.target.value),
          className: "w-full"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: accountingPath(`offers/${NEW_OFFER_ROUTE}`),
          className: "inline-flex items-center gap-1.5 rounded-md bg-accent px-3 py-2 text-xs font-semibold text-accent-foreground transition-colors hover:bg-accent/90 active:scale-[0.98]",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5", "aria-hidden": true }),
            " New offer"
          ]
        }
      )
    ] }) }),
    filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center gap-3 rounded-xl border border-border bg-[var(--inkblot-semantic-color-background-secondary)] px-6 py-14 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-6 w-6 text-citrus-lemon", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: "No offers yet" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: search.trim() ? "No results for this search." : 'Start from "New offer" — a live-preview builder.' })
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3", children: filtered.map((rec) => {
      const d = rec.draft;
      const docType = bgDocumentTypeById(d.documentTypeId);
      const total = draftGrandTotal(d);
      const currency = draftCurrency(d);
      const firstParagraph = d.blocks.find((b) => b.kind === "paragraph" && b.text);
      const snippet = firstParagraph && firstParagraph.kind === "paragraph" ? firstParagraph.text : "";
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "article",
        {
          role: "button",
          tabIndex: 0,
          onClick: () => openOffer(rec.recordId),
          onKeyDown: (e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              openOffer(rec.recordId);
            }
          },
          className: "group relative flex cursor-pointer flex-col gap-3 rounded-[var(--inkblot-radius-xl)] border border-border bg-[var(--inkblot-semantic-color-background-secondary)] p-4 text-left shadow-[var(--inkblot-shadow-sm)] transition-colors hover:bg-[var(--inkblot-semantic-color-background-tertiary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--inkblot-semantic-color-border-focus)]",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-start justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-accent/15 text-citrus-lemon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-3.5 w-3.5", "aria-hidden": true }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: docType?.label ?? "Offer" }),
                  d.documentNumber ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] text-citrus-lemon truncate", children: d.documentNumber }) : null
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { label: statusLabel(rec.status), variant: statusVariant(rec.status) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-foreground truncate", title: d.projectName, children: d.projectName || "Untitled project" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", title: d.clientName, children: d.clientName || "No client" })
            ] }),
            snippet ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "line-clamp-2 text-xs text-[var(--inkblot-semantic-color-text-secondary)]", children: snippet }) : null,
            /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-auto flex items-end justify-between gap-2 pt-2 border-t border-border/60", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground", children: [
                d.issueDate ?? "—",
                d.validUntil ? ` → ${d.validUntil}` : ""
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-sm font-semibold text-foreground tabular-nums", children: total > 0 ? formatMoney(total, currency) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "—" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "pointer-events-none absolute inset-x-3 bottom-2 flex justify-end gap-1 opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100",
                onClick: (e) => e.stopPropagation(),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: (e) => {
                        e.stopPropagation();
                        handleDuplicate(rec);
                      },
                      className: "rounded-md border border-border bg-background px-2 py-1 text-[10px] font-medium text-muted-foreground hover:text-foreground",
                      children: "Duplicate"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: (e) => {
                        e.stopPropagation();
                        handleDelete(rec);
                      },
                      className: "rounded-md border border-border bg-background px-2 py-1 text-[10px] font-medium text-destructive hover:border-destructive/40",
                      children: "Delete"
                    }
                  )
                ]
              }
            )
          ]
        },
        rec.recordId
      );
    }) })
  ] });
}

export { OffersHome as default };
