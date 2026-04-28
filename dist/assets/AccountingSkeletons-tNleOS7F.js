import { j as jsxRuntimeExports } from './jsx-runtime-XI9uIe3W.js';
import { f as CRM_PANEL_SURFACE, g as CRM_TOOLBAR_SURFACE } from './crmToolbarClasses-DO0dkTie.js';

const INVOICE_LIST_GRID = "grid grid-cols-[2.5rem_minmax(5rem,0.9fr)_minmax(8rem,1.1fr)_5.5rem_6.5rem_5.75rem_2.5rem] gap-2 sm:gap-3 items-center px-3 sm:px-5";
function Sk({ className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `rounded-md animate-shimmer ${className}`, "aria-hidden": true });
}
function AccountingLayoutHeaderSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex shrink-0 flex-col gap-3 border-b border-border px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-3 md:px-6 md:py-4 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 flex-1 items-center gap-2.5 sm:gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sk, { className: "h-8 w-8 shrink-0 rounded-lg" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1 space-y-2 py-0.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sk, { className: "h-4 w-32 max-w-[55%]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sk, { className: "h-2.5 w-full max-w-[min(100%,280px)]" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 flex-wrap items-center justify-start gap-2 sm:justify-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sk, { className: "h-8 w-[11rem] max-w-[70vw] shrink rounded-lg" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sk, { className: "h-8 w-8 shrink-0 rounded-lg" })
    ] })
  ] });
}
function InvoicesHomeSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-full min-w-0 px-3 min-[400px]:px-4 sm:px-6 lg:px-8 py-4 sm:py-6 pb-[max(1.25rem,env(safe-area-inset-bottom,0px))] sm:pb-6 overflow-y-auto hide-scrollbar h-full box-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mb-4 ${CRM_TOOLBAR_SURFACE}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-[36px] flex-1 min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sk, { className: "h-9 w-full rounded-lg" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sk, { className: "h-8 w-8 shrink-0 rounded-lg" }),
        Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Sk, { className: "h-7 w-11 shrink-0 rounded-md" }, i))
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sk, { className: "h-4 w-36" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border/50 bg-muted/10 overflow-hidden w-full min-w-0 dark:bg-muted/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto touch-scroll-x touch-pan-x", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-[780px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `${INVOICE_LIST_GRID} py-2.5 sm:py-3 border-b border-border`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sk, { className: "h-3 w-4 justify-self-center" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sk, { className: "h-3 w-12 justify-self-center" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sk, { className: "h-3 w-10 justify-self-center" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sk, { className: "h-3 w-14 justify-self-center" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sk, { className: "h-3 w-12 justify-self-center" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sk, { className: "h-3 w-9 justify-self-center" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sk, { className: "h-3 w-4 justify-self-center opacity-0" })
          ]
        }
      ),
      Array.from({ length: 8 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `${INVOICE_LIST_GRID} py-2.5 sm:py-3 min-h-[48px] sm:min-h-[52px] border-b border-border/50`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sk, { className: "h-3.5 w-4 justify-self-center" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sk, { className: "h-4 w-[70%] max-w-full justify-self-center" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sk, { className: "h-3.5 w-[80%] max-w-full justify-self-center" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sk, { className: "h-4 w-14 justify-self-center" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sk, { className: "h-5 w-16 rounded-full justify-self-center" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sk, { className: "h-3.5 w-20 justify-self-center" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sk, { className: "h-6 w-6 rounded-md justify-self-center" })
          ]
        },
        i
      ))
    ] }) }) })
  ] });
}
function AccountingModuleSuspenseFallback() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "h-full flex min-h-0 w-full max-w-full overflow-hidden",
      role: "status",
      "aria-busy": "true",
      "aria-label": "Loading accounting",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Loading accounting" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col min-w-0 max-w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccountingLayoutHeaderSkeleton, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-h-0 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(InvoicesHomeSkeleton, {}) })
        ] })
      ]
    }
  );
}
function FormFieldSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Sk, { className: "h-3 w-20" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Sk, { className: "h-10 w-full rounded-[var(--inkblot-radius-md)]" })
  ] });
}
function LineItemCardSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-lg border border-border/50 bg-muted/10 p-[var(--inkblot-spacing-4)] space-y-3 dark:bg-muted/15`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sk, { className: "h-8 w-8 rounded-md" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-[var(--inkblot-spacing-3)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormFieldSkeleton, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FormFieldSkeleton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FormFieldSkeleton, {})
    ] })
  ] });
}
function InvoiceDocumentCardSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `min-w-0 max-w-full overflow-hidden ${CRM_PANEL_SURFACE} p-4 sm:p-5 md:p-[var(--inkblot-spacing-6)] space-y-0`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 sm:flex-row sm:justify-between border-b border-[var(--inkblot-semantic-color-border-default)] pb-[var(--inkblot-spacing-4)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sk, { className: "h-3 w-14" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sk, { className: "h-4 w-24 max-w-full" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 sm:text-right", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sk, { className: "h-3 w-28 max-w-full sm:ml-auto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sk, { className: "h-3 w-32 max-w-full sm:ml-auto" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-[var(--inkblot-spacing-4)] space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sk, { className: "h-4 w-full max-w-[240px]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sk, { className: "h-3 w-full max-w-[280px]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sk, { className: "h-3 w-48 pt-1" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-[var(--inkblot-semantic-color-border-default)] pt-[var(--inkblot-spacing-3)] space-y-2", children: [
      Array.from({ length: 3 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1 sm:flex-row sm:justify-between sm:items-baseline", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sk, { className: "h-3.5 w-[55%]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sk, { className: "h-3.5 w-32 sm:w-36" })
      ] }, i)),
      Array.from({ length: 4 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between pt-1 first:pt-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sk, { className: "h-3 w-20" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sk, { className: "h-3 w-16" })
      ] }, `t-${i}`))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-[var(--inkblot-semantic-color-border-default)] mt-[var(--inkblot-spacing-4)] pt-[var(--inkblot-spacing-4)] flex flex-wrap justify-between items-baseline gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sk, { className: "h-4 w-12" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sk, { className: "h-6 w-28" })
    ] })
  ] });
}
function InvoiceFormPageSkeleton({ variant }) {
  const actionCount = variant === "create" ? 2 : 7;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "h-full min-w-0 max-w-full overflow-y-auto hide-scrollbar pb-[max(2.5rem,env(safe-area-inset-bottom,0px))] print:h-auto",
      role: "status",
      "aria-busy": "true",
      "aria-label": "Loading invoice",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Loading invoice" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1280px] mx-auto w-full min-w-0 px-3 min-[400px]:px-4 sm:px-6 lg:px-8 py-5 sm:py-8 pb-8 sm:pb-12 box-border print:px-0 print:py-0 print:max-w-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mb-5 sm:mb-6 flex flex-wrap items-start sm:items-center gap-2 sm:gap-3 min-w-0 print:hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sk, { className: "h-8 w-8 shrink-0 rounded-lg" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sk, { className: "h-7 w-48 max-w-[60%] rounded-md" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_min(100%,380px)] gap-6 sm:gap-8 lg:gap-8 items-start print:block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 sm:space-y-6 min-w-0 print:hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: `${CRM_PANEL_SURFACE} p-4 sm:p-5 md:p-[var(--inkblot-spacing-6)] space-y-[var(--inkblot-spacing-5)]`, children: [
                variant === "create" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-[var(--inkblot-spacing-2)] max-w-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormFieldSkeleton, {}) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-[var(--inkblot-spacing-4)]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:max-w-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormFieldSkeleton, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:max-w-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormFieldSkeleton, {}) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Sk, { className: "h-4 w-24" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Sk, { className: "h-8 w-8 rounded-md shrink-0" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LineItemCardSkeleton, {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LineItemCardSkeleton, {})
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-[var(--inkblot-spacing-4)]", children: Array.from({ length: 4 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FormFieldSkeleton, {}, i)) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormFieldSkeleton, {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sk, { className: "h-20 w-full mt-2 rounded-[var(--inkblot-radius-md)]" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: `${CRM_PANEL_SURFACE} p-4 sm:p-5 md:p-[var(--inkblot-spacing-6)]`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sk, { className: "h-4 w-32 mb-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-[var(--inkblot-spacing-4)] mb-[var(--inkblot-spacing-4)]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormFieldSkeleton, {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FormFieldSkeleton, {})
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormFieldSkeleton, {}) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col-reverse sm:flex-row sm:flex-wrap sm:items-center sm:justify-end gap-2 sm:gap-3 pt-2", children: Array.from({ length: actionCount }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Sk,
                {
                  className: `h-10 rounded-[var(--inkblot-radius-lg)] ${variant === "create" ? "w-full sm:w-40" : "w-full sm:w-[7.5rem]"}`
                },
                i
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "lg:sticky lg:top-4 w-full min-w-0 max-w-xl lg:max-w-none mx-auto lg:mx-0 space-y-3 print:max-w-none print:mx-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 rounded-lg border border-border/60 bg-muted/15 px-3 py-2 print:hidden dark:bg-muted/10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sk, { className: "h-4 w-24 min-w-0 flex-1 max-w-[70%]" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sk, { className: "h-8 w-12 rounded-md shrink-0" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(InvoiceDocumentCardSkeleton, {})
            ] })
          ] })
        ] })
      ]
    }
  );
}

export { AccountingModuleSuspenseFallback as A, InvoicesHomeSkeleton as I, InvoiceFormPageSkeleton as a };
