import { importShared } from './__federation_fn_import-BF-AfqT6.js';
import { j as jsxRuntimeExports } from './jsx-runtime-XI9uIe3W.js';
import { c as createLucideIcon, u as useToast, a as accountingPath } from './accountingConstants-Cfl6rq38.js';
import { u as useBrandingStore } from './brandingStore-BVRnF0-c.js';
import { P as Plus } from './plus-CRsttFmX.js';

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode);

const {useCallback} = await importShared('react');

const {Link,useNavigate} = await importShared('react-router-dom');
function BrandingProfilesHome() {
  const navigate = useNavigate();
  const { addToast } = useToast();
  const { profiles, defaultProfileId, createProfile, deleteProfile, setDefaultProfile } = useBrandingStore();
  const handleNew = useCallback(() => {
    const id = createProfile({ name: "New brand" });
    navigate(accountingPath(`brands/${id}`));
  }, [createProfile, navigate]);
  const handleDelete = useCallback(
    (p) => {
      if (profiles.length <= 1) {
        addToast({ title: "Cannot delete", description: "Keep at least one brand profile.", variant: "error" });
        return;
      }
      const ok = typeof window === "undefined" ? true : window.confirm(`Delete profile "${p.name}"?`);
      if (!ok) return;
      deleteProfile(p.id);
      addToast({ title: "Deleted", description: `"${p.name}" removed.`, variant: "success" });
    },
    [profiles.length, deleteProfile, addToast]
  );
  const handleSetDefault = useCallback(
    (p) => {
      setDefaultProfile(p.id);
      addToast({ title: "Default brand", description: `"${p.name}" is now the default.`, variant: "success" });
    },
    [setDefaultProfile, addToast]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full w-full overflow-y-auto hide-scrollbar px-3 min-[400px]:px-4 sm:px-6 lg:px-8 py-4 sm:py-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex flex-wrap items-center justify-between gap-3 rounded-[var(--inkblot-radius-xl)] border border-border bg-[var(--inkblot-semantic-color-background-secondary)] p-3 sm:p-4 shadow-[var(--inkblot-shadow-sm)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-foreground", children: "Branding profiles" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-[11px] text-muted-foreground", children: "Logo, colors, sender and banking details applied to your offers and invoices." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: handleNew,
          className: "inline-flex h-8 items-center gap-1.5 rounded-md bg-accent px-3 text-xs font-semibold text-accent-foreground transition-colors hover:bg-accent/90",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5", "aria-hidden": true }),
            " New brand"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3", children: profiles.map((p) => {
      const isDefault = defaultProfileId === p.id;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "article",
        {
          className: "group relative flex flex-col gap-3 rounded-[var(--inkblot-radius-xl)] border border-border bg-[var(--inkblot-semantic-color-background-secondary)] p-4 shadow-[var(--inkblot-shadow-sm)]",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-start justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border",
                    style: { backgroundColor: p.accentColor },
                    "aria-hidden": true
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground truncate", children: p.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground truncate", children: p.brandName || "—" })
                ] })
              ] }),
              isDefault ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "inline-flex items-center gap-1 rounded-full border border-border px-2 py-0.5 text-[10px] font-medium text-citrus-lemon",
                  title: "Default brand for new offers",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3 w-3", "aria-hidden": true }),
                    " Default"
                  ]
                }
              ) : null
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "grid grid-cols-[auto_1fr] items-baseline gap-x-3 gap-y-1 text-[11px]", children: [
              p.brandWebsite ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "uppercase tracking-wider text-muted-foreground", children: "Site" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "font-mono text-citrus-lemon truncate", children: p.brandWebsite })
              ] }) : null,
              p.senderLegalName ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "uppercase tracking-wider text-muted-foreground", children: "Legal" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "truncate", children: p.senderLegalName })
              ] }) : null,
              p.senderVatId ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "uppercase tracking-wider text-muted-foreground", children: "VAT" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "font-mono", children: p.senderVatId })
              ] }) : null
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-auto flex flex-wrap items-center gap-1.5 pt-2 border-t border-border/60", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: accountingPath(`brands/${p.id}`),
                  className: "inline-flex h-7 items-center gap-1 rounded-md border border-border px-2.5 text-[11px] font-medium text-muted-foreground hover:text-foreground hover:bg-background/70",
                  children: "Edit"
                }
              ),
              !isDefault ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => handleSetDefault(p),
                  className: "inline-flex h-7 items-center gap-1 rounded-md border border-border px-2.5 text-[11px] font-medium text-muted-foreground hover:text-foreground hover:bg-background/70",
                  children: "Set default"
                }
              ) : null,
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => handleDelete(p),
                  className: "ml-auto inline-flex h-7 items-center gap-1 rounded-md border border-border px-2.5 text-[11px] font-medium text-destructive hover:border-destructive/40",
                  children: "Delete"
                }
              )
            ] })
          ]
        },
        p.id
      );
    }) })
  ] });
}

export { BrandingProfilesHome as default };
