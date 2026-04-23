import { _ as __vitePreload } from './preload-helper-Dea3Szod.js';
import { importShared } from './__federation_fn_import-BF-AfqT6.js';
import { j as jsxRuntimeExports } from './jsx-runtime-XI9uIe3W.js';
import { c as createLucideIcon, a as accountingPath, T as ToastProvider, u as useToast } from './accountingConstants-Cfl6rq38.js';
import { u as useInvoiceStore, I as InvoiceStoreProvider } from './invoiceStore-CH64SPmX.js';
import { u as useOfferStore, N as NEW_OFFER_ROUTE, O as OfferStoreProvider } from './offerStore-B7nnp6gS.js';
import { S as Sparkles, F as FileText } from './sparkles-CZyhPppu.js';
import { P as Palette } from './palette-W_Yxaw1i.js';
import { P as Plus } from './plus-CRsttFmX.js';
import { I as InvoicesHomeSkeleton, a as InvoiceFormPageSkeleton } from './AccountingSkeletons-BBpJ38wk.js';
import { B as BrandingStoreProvider } from './brandingStore-BVRnF0-c.js';

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode = [
  [
    "path",
    { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z", key: "q3az6g" }
  ],
  ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8", key: "1h4pet" }],
  ["path", { d: "M12 17.5v-11", key: "1jc1ny" }]
];
const Receipt = createLucideIcon("receipt", __iconNode);

const {useMemo} = await importShared('react');

const {Link,Outlet,useLocation} = await importShared('react-router-dom');
function AccountingLayout() {
  const { invoices } = useInvoiceStore();
  const { offers } = useOfferStore();
  const location = useLocation();
  const section = location.pathname.startsWith(accountingPath("offers")) ? "offers" : location.pathname.startsWith(accountingPath("brands")) ? "brands" : "invoices";
  const subtitle = useMemo(() => {
    const n = invoices.length;
    const pending = invoices.filter((i) => i.status === "pending").length;
    const overdue = invoices.filter((i) => i.status === "overdue").length;
    const paid = invoices.filter((i) => i.status === "paid").length;
    const parts = [
      `${n} invoice${n === 1 ? "" : "s"}`,
      `${paid} paid`,
      `${pending} pending`,
      `${overdue} overdue`,
      `${offers.length} offer${offers.length === 1 ? "" : "s"}`
    ];
    return parts.join(" · ");
  }, [invoices, offers]);
  const tabCls = (active) => `inline-flex items-center gap-1.5 rounded px-2 py-1 text-[11px] font-medium transition-colors ${active ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full flex min-h-0 w-full max-w-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col min-w-0 max-w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex shrink-0 flex-col gap-3 border-b border-border px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-3 md:px-6 md:py-4 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 flex-1 items-center gap-2.5 sm:gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Receipt, { className: "h-4 w-4 shrink-0 text-accent", "aria-hidden": true }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "truncate text-base font-semibold tracking-tight text-foreground sm:text-lg", children: "Accounting" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 truncate text-[10px] leading-snug text-muted-foreground", title: subtitle, children: subtitle })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 flex-wrap items-center justify-start gap-1.5 sm:justify-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "nav",
          {
            className: "inline-flex items-center gap-0.5 rounded-md border border-border bg-[var(--inkblot-semantic-color-background-secondary)] p-0.5",
            "aria-label": "Accounting sections",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: accountingPath(),
                  className: tabCls(section === "invoices"),
                  "aria-current": section === "invoices" ? "page" : void 0,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Receipt, { className: "h-3 w-3", "aria-hidden": true }),
                    " Invoices"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: accountingPath("offers"),
                  className: tabCls(section === "offers"),
                  "aria-current": section === "offers" ? "page" : void 0,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3", "aria-hidden": true }),
                    " Offers"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: accountingPath("brands"),
                  className: tabCls(section === "brands"),
                  "aria-current": section === "brands" ? "page" : void 0,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Palette, { className: "h-3 w-3", "aria-hidden": true }),
                    " Branding"
                  ]
                }
              )
            ]
          }
        ),
        section === "offers" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: accountingPath(`offers/${NEW_OFFER_ROUTE}`),
            title: "New offer",
            "aria-label": "New offer",
            className: "inline-flex h-8 items-center gap-1.5 rounded-lg bg-accent px-2.5 text-xs font-semibold text-accent-foreground transition-all duration-150 hover:bg-accent/90 active:scale-95",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-3.5 w-3.5 shrink-0", "aria-hidden": true }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "New offer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5 shrink-0 sm:hidden", "aria-hidden": true })
            ]
          }
        ) : section === "brands" ? null : /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: accountingPath("create"),
            title: "New invoice",
            "aria-label": "New invoice",
            className: "inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-all duration-150 hover:bg-accent/90 active:scale-95",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4 shrink-0", strokeWidth: 2, "aria-hidden": true })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-h-0 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) })
  ] }) });
}

const {lazy,Suspense} = await importShared('react');

const {Routes,Route} = await importShared('react-router-dom');
const {ModuleErrorBoundary,Toaster} = await importShared('@citron-systems/citron-ui');
const InvoicesHome = lazy(() => __vitePreload(() => import('./InvoicesHome-DTvCcgpP.js'),true              ?[]:void 0));
const SmartInvoiceBuilder = lazy(() => __vitePreload(() => import('./SmartInvoiceBuilder-BCTeV0l5.js'),true              ?[]:void 0));
const InvoiceReviewPage = lazy(() => __vitePreload(() => import('./InvoiceReviewPage-BtWi2-8t.js'),true              ?[]:void 0));
const OffersHome = lazy(() => __vitePreload(() => import('./OffersHome-qxSx_IaK.js'),true              ?[]:void 0));
const OfferBuilder = lazy(() => __vitePreload(() => import('./OfferBuilder-DDd4ENSA.js'),true              ?[]:void 0));
const BrandingProfilesHome = lazy(() => __vitePreload(() => import('./BrandingProfilesHome-CCyu2wML.js'),true              ?[]:void 0));
const BrandingProfileEditor = lazy(() => __vitePreload(() => import('./BrandingProfileEditor-CoOLf3iM.js'),true              ?[]:void 0));
function AccountingWithToaster() {
  const { toasts, dismissToast } = useToast();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Routes, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Route,
      {
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(ModuleErrorBoundary, { className: "h-full min-h-[200px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AccountingLayout, {}) }),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Route,
            {
              index: true,
              element: /* @__PURE__ */ jsxRuntimeExports.jsx(Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(InvoicesHomeSkeleton, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(InvoicesHome, {}) })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Route,
            {
              path: "create",
              element: /* @__PURE__ */ jsxRuntimeExports.jsx(Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(InvoiceFormPageSkeleton, { variant: "create" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(SmartInvoiceBuilder, {}) })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Route,
            {
              path: "editor/:recordId",
              element: /* @__PURE__ */ jsxRuntimeExports.jsx(Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(InvoiceFormPageSkeleton, { variant: "edit" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(InvoiceReviewPage, {}) })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Route,
            {
              path: "offers",
              element: /* @__PURE__ */ jsxRuntimeExports.jsx(Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(InvoicesHomeSkeleton, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(OffersHome, {}) })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Route,
            {
              path: "offers/:recordId",
              element: /* @__PURE__ */ jsxRuntimeExports.jsx(Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(InvoiceFormPageSkeleton, { variant: "edit" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(OfferBuilder, {}) })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Route,
            {
              path: "brands",
              element: /* @__PURE__ */ jsxRuntimeExports.jsx(Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(InvoicesHomeSkeleton, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrandingProfilesHome, {}) })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Route,
            {
              path: "brands/:id",
              element: /* @__PURE__ */ jsxRuntimeExports.jsx(Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(InvoiceFormPageSkeleton, { variant: "edit" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrandingProfileEditor, {}) })
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Toaster,
      {
        toasts,
        position: "bottom-right",
        onDismiss: dismissToast,
        className: "fixed z-[100] max-w-[calc(100vw-1.5rem)] sm:max-w-none bottom-[max(1rem,env(safe-area-inset-bottom,0px))] right-[max(0.75rem,env(safe-area-inset-right,0px))] sm:bottom-4 sm:right-4 left-auto"
      }
    )
  ] });
}
function AccountingWithProvider() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ToastProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrandingStoreProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(InvoiceStoreProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(OfferStoreProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AccountingWithToaster, {}) }) }) }) });
}

export { AccountingWithProvider as default };
