import { importShared } from './__federation_fn_import-BF-AfqT6.js';
import { j as jsxRuntimeExports } from './jsx-runtime-XI9uIe3W.js';
import { u as useToast, a as accountingPath } from './accountingConstants-Cfl6rq38.js';
import { u as useBrandingStore, e as emptyBrandingProfile, r as resolveBrandingLogoSrc, n as normalizeHex } from './brandingStore-DiVKw_lr.js';
import { A as ArrowLeft, T as Trash2 } from './trash-2-BhWtp_Kn.js';

const {useCallback,useEffect,useMemo,useRef,useState} = await importShared('react');

const {Link,useNavigate,useParams} = await importShared('react-router-dom');
const labelCls = "text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground";
const inputCls = "min-h-[34px] w-full rounded-md border border-border bg-[var(--inkblot-semantic-color-background-primary)] px-3 py-1.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--inkblot-semantic-color-border-focus)]";
const textareaCls = "min-h-[76px] w-full rounded-md border border-border bg-[var(--inkblot-semantic-color-background-primary)] px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--inkblot-semantic-color-border-focus)]";
const sectionCls = "rounded-[var(--inkblot-radius-xl)] border border-border bg-[var(--inkblot-semantic-color-background-secondary)] p-4 sm:p-5 flex flex-col gap-4";
function BrandingProfileEditor() {
  const navigate = useNavigate();
  const { id: routeId } = useParams();
  const { addToast } = useToast();
  const { profiles, getProfile, updateProfile, deleteProfile } = useBrandingStore();
  const profile = useMemo(
    () => routeId ? getProfile(routeId) : void 0,
    [routeId, getProfile]
  );
  const [draft, setDraft] = useState(() => profile ?? emptyBrandingProfile());
  const hydratedForRef = useRef(null);
  useEffect(() => {
    if (!profile) return;
    if (hydratedForRef.current === profile.id) return;
    setDraft(profile);
    hydratedForRef.current = profile.id;
  }, [profile]);
  useEffect(() => {
    if (routeId && !profile) {
      navigate(accountingPath("brands"), { replace: true });
    }
  }, [routeId, profile, navigate]);
  const commitRef = useRef(null);
  useEffect(() => {
    if (!profile) return;
    if (commitRef.current) clearTimeout(commitRef.current);
    commitRef.current = setTimeout(() => updateProfile(profile.id, draft), 200);
    return () => {
      if (commitRef.current) clearTimeout(commitRef.current);
    };
  }, [draft, profile, updateProfile]);
  const patch = useCallback((p) => {
    setDraft((d) => ({ ...d, ...p }));
  }, []);
  const handleDelete = useCallback(() => {
    if (!profile) return;
    if (profiles.length <= 1) {
      addToast({ title: "Cannot delete", description: "Keep at least one brand profile.", variant: "error" });
      return;
    }
    const ok = typeof window === "undefined" ? true : window.confirm(`Delete profile "${profile.name}"?`);
    if (!ok) return;
    deleteProfile(profile.id);
    addToast({ title: "Deleted", description: `"${profile.name}" removed.`, variant: "success" });
    navigate(accountingPath("brands"));
  }, [profile, profiles.length, deleteProfile, navigate, addToast]);
  if (!profile) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full items-center justify-center text-sm text-muted-foreground", children: "Loading…" });
  }
  const logoPreviewSrc = resolveBrandingLogoSrc(draft);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full min-h-0 w-full flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2.5 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: accountingPath("brands"),
            "aria-label": "Back to brands",
            className: "inline-flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-background/70",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4", "aria-hidden": true })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-xs text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-semibold", children: draft.name || "Untitled brand" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: handleDelete,
          className: "inline-flex h-8 items-center gap-1.5 rounded-md border border-border px-3 text-xs font-medium text-destructive transition-colors hover:border-destructive/40",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5", "aria-hidden": true }),
            " Delete"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "form",
      {
        onSubmit: (e) => e.preventDefault(),
        className: "flex-1 min-h-0 overflow-y-auto hide-scrollbar px-4 py-5 sm:px-6 lg:px-8",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-[760px] flex-col gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: sectionCls, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-semibold uppercase tracking-wider text-foreground", children: "Identity" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Profile name", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                className: inputCls,
                value: draft.name,
                onChange: (e) => patch({ name: e.target.value }),
                placeholder: "e.g. Inkblot Studio"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-3 sm:grid-cols-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Brand mark", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  className: inputCls,
                  value: draft.brandName,
                  onChange: (e) => patch({ brandName: e.target.value }),
                  placeholder: "INKBLOT STUDIO"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Tagline", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  className: inputCls,
                  value: draft.brandTagline,
                  onChange: (e) => patch({ brandTagline: e.target.value }),
                  placeholder: "Accelerating Every Industry through AI"
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Field,
              {
                label: "Logo file",
                hint: "Path from the site root to a file in public/, e.g. /svg/inkblotstudio_logo.svg. Preferred over a remote URL.",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    className: `${inputCls} font-mono text-[13px]`,
                    value: draft.logoAssetPath ?? "",
                    onChange: (e) => patch({ logoAssetPath: e.target.value }),
                    placeholder: "/svg/your_logo.svg"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-3 sm:grid-cols-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Website", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  className: inputCls,
                  value: draft.brandWebsite,
                  onChange: (e) => patch({ brandWebsite: e.target.value }),
                  placeholder: "inkblotstudio.eu"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Field,
                {
                  label: "Logo URL (optional)",
                  hint: "https:// or data: URI if you are not using a file under public/.",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      className: inputCls,
                      type: "text",
                      inputMode: "url",
                      autoComplete: "off",
                      value: draft.logoUrl ?? "",
                      onChange: (e) => patch({ logoUrl: e.target.value }),
                      placeholder: "https://…"
                    }
                  )
                }
              )
            ] }),
            logoPreviewSrc ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 rounded-md border border-border bg-[var(--inkblot-semantic-color-background-primary)] p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: logoPreviewSrc,
                  alt: "Logo preview",
                  className: "h-10 w-auto max-w-[120px] object-contain",
                  onError: (e) => {
                    e.currentTarget.style.display = "none";
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground", children: "Logo preview" })
            ] }) : null
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: sectionCls, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-semibold uppercase tracking-wider text-foreground", children: "Accent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Field,
              {
                label: "Color",
                hint: "Applied to document numbers, section markers, and the comparison label.",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "color",
                      value: normalizeHex(draft.accentColor),
                      onChange: (e) => patch({ accentColor: e.target.value }),
                      "aria-label": "Accent color",
                      className: "h-9 w-12 cursor-pointer rounded-md border border-border bg-[var(--inkblot-semantic-color-background-primary)]"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      value: draft.accentColor,
                      onChange: (e) => patch({ accentColor: e.target.value }),
                      className: `${inputCls} !w-[160px] font-mono uppercase`,
                      placeholder: "#C9A227",
                      maxLength: 7
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      "aria-hidden": true,
                      className: "ml-auto h-9 w-28 rounded-md border border-border",
                      style: { backgroundColor: normalizeHex(draft.accentColor) }
                    }
                  )
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: sectionCls, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-semibold uppercase tracking-wider text-foreground", children: "Sender" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Legal name", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                className: inputCls,
                value: draft.senderLegalName,
                onChange: (e) => patch({ senderLegalName: e.target.value }),
                placeholder: "Inkblot Studio Ltd."
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Address", hint: "Multi-line; line breaks are preserved.", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                className: textareaCls,
                value: draft.senderAddress,
                onChange: (e) => patch({ senderAddress: e.target.value }),
                placeholder: "ul. Shipka 12\n1000 Sofia, Bulgaria",
                rows: 3
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-3 sm:grid-cols-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "VAT / Tax ID", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  className: `${inputCls} font-mono`,
                  value: draft.senderVatId,
                  onChange: (e) => patch({ senderVatId: e.target.value }),
                  placeholder: "BG123456789"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  className: inputCls,
                  type: "tel",
                  value: draft.senderPhone,
                  onChange: (e) => patch({ senderPhone: e.target.value }),
                  placeholder: "+359 2 123 4567"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  className: inputCls,
                  type: "email",
                  value: draft.senderEmail,
                  onChange: (e) => patch({ senderEmail: e.target.value }),
                  placeholder: "hello@yourbrand.com"
                }
              ) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: sectionCls, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-semibold uppercase tracking-wider text-foreground", children: "Banking" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: "Used on invoices. Leave blank if not applicable." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-3 sm:grid-cols-[1fr_1fr_auto]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Bank name", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  className: inputCls,
                  value: draft.bankName,
                  onChange: (e) => patch({ bankName: e.target.value }),
                  placeholder: "UniCredit Bulbank"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "IBAN", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  className: `${inputCls} font-mono`,
                  value: draft.bankIban,
                  onChange: (e) => patch({ bankIban: e.target.value }),
                  placeholder: "BG80UNCR70001523456789"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "BIC / SWIFT", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  className: `${inputCls} font-mono sm:!w-[140px]`,
                  value: draft.bankBic,
                  onChange: (e) => patch({ bankBic: e.target.value }),
                  placeholder: "UNCRBGSF"
                }
              ) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4", "aria-hidden": true })
        ] })
      }
    )
  ] });
}
function Field({ label, hint, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex flex-col gap-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: labelCls, children: label }),
    children,
    hint ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: hint }) : null
  ] });
}

export { BrandingProfileEditor as default };
