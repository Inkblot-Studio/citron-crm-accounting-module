import { importShared } from './__federation_fn_import-BF-AfqT6.js';
import { j as jsxRuntimeExports } from './jsx-runtime-XI9uIe3W.js';
import { c as createLucideIcon, b as useToast, u as useInvoiceStore, a as accountingPath, l as normalizeInvoiceDraft, A as ACCOUNTING_BASE_PATH, m as newEmptyLineItem, F as FORM_BANK_ACCOUNTS, g as FORM_PAYMENT_METHODS, h as FORM_TAX_TYPES, k as bankLabelFromFormLabel, j as FORM_INVOICE_TYPES, o as draftSubtotal, p as computeTax, q as computeTotal, f as formatUsd, s as computeLineTotal, r as resolveTaxRate, D as DUE_TERMS, N as NEW_RECORD_ROUTE } from './invoiceStore-CtTjEtf0.js';
import { e as exportInvoiceDraftToPdf, A as ArrowLeft, T as Trash2, a as AutoGrowTextarea, L as LoaderCircle, F as FileDown, I as InvoiceDocumentCard } from './exportInvoicePdf-B1sek7u4.js';
import { a as InvoiceFormPageSkeleton } from './AccountingSkeletons-BBpJ38wk.js';
import { P as Plus } from './plus-_C8-xjua.js';

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$2 = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
];
const Copy = createLucideIcon("copy", __iconNode$2);

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$1 = [
  [
    "path",
    {
      d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
      key: "143wyd"
    }
  ],
  ["path", { d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6", key: "1itne7" }],
  ["rect", { x: "6", y: "14", width: "12", height: "8", rx: "1", key: "1ue0tg" }]
];
const Printer = createLucideIcon("printer", __iconNode$1);

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
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode);

const {useCallback,useEffect,useMemo,useState} = await importShared('react');

const {Link,useLocation,useNavigate,useParams} = await importShared('react-router-dom');

const {AdvancedDropdown,Button,Input,Label} = await importShared('@citron-systems/citron-ui');
const dateInputClass = [
  "min-h-[var(--inkblot-size-touch-target-min)] w-full rounded-[var(--inkblot-radius-md)]",
  "border border-[var(--inkblot-semantic-color-border-default)]",
  "bg-[var(--inkblot-semantic-color-background-primary)]",
  "px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-2)]",
  "[font:var(--inkblot-semantic-typography-body-small)]",
  "text-[var(--inkblot-semantic-color-text-primary)]",
  "transition-colors duration-[var(--inkblot-duration-fast)]",
  "focus:outline-none focus:ring-2 focus:ring-[var(--inkblot-semantic-color-border-focus)]"
].join(" ");
const labelClass = "[font:var(--inkblot-semantic-typography-body-small)] font-medium text-[var(--inkblot-semantic-color-text-secondary)]";
function InvoiceReviewPage() {
  const { recordId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { addToast } = useToast();
  const {
    getInvoice,
    createFromDraft,
    updateDraft,
    markSent,
    markPaid,
    extraBankLabels,
    extraPaymentMethods,
    extraTaxPresets
  } = useInvoiceStore();
  const isNew = recordId === NEW_RECORD_ROUTE;
  const [form, setForm] = useState(null);
  const [hydrated, setHydrated] = useState(false);
  const [pdfBusy, setPdfBusy] = useState(false);
  useEffect(() => {
    if (!recordId) {
      navigate(accountingPath("create"), { replace: true });
      return;
    }
    if (isNew) {
      const stateDraft = location.state?.draft;
      if (!stateDraft) {
        navigate(accountingPath("create"), { replace: true });
        return;
      }
      setForm(normalizeInvoiceDraft(stateDraft));
      setHydrated(true);
      return;
    }
    const inv = getInvoice(recordId);
    if (!inv) {
      addToast({
        title: "Invoice not found",
        description: "This invoice no longer exists or the link is invalid.",
        variant: "error"
      });
      navigate(ACCOUNTING_BASE_PATH, { replace: true });
      return;
    }
    setForm(normalizeInvoiceDraft(inv.draft));
    setHydrated(true);
  }, [recordId, isNew, navigate, addToast, getInvoice, location.state]);
  const update = useCallback((key, value) => {
    setForm((prev) => prev ? { ...prev, [key]: value } : prev);
  }, []);
  const updateLine = useCallback((lineId, patch) => {
    setForm((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        lineItems: prev.lineItems.map((li) => li.id === lineId ? { ...li, ...patch } : li)
      };
    });
  }, []);
  const addLine = useCallback(() => {
    setForm((prev) => prev ? { ...prev, lineItems: [...prev.lineItems, newEmptyLineItem()] } : prev);
  }, []);
  const removeLine = useCallback((lineId) => {
    setForm((prev) => {
      if (!prev) return prev;
      return { ...prev, lineItems: prev.lineItems.filter((li) => li.id !== lineId) };
    });
  }, []);
  const mergedBankLabels = useMemo(() => {
    const seen = /* @__PURE__ */ new Set();
    const out = [];
    for (const b of [...FORM_BANK_ACCOUNTS, ...extraBankLabels]) {
      if (!seen.has(b)) {
        seen.add(b);
        out.push(b);
      }
    }
    return out;
  }, [extraBankLabels]);
  const mergedPayments = useMemo(() => {
    const seen = /* @__PURE__ */ new Set();
    const out = [];
    for (const p of [...FORM_PAYMENT_METHODS, ...extraPaymentMethods]) {
      if (!seen.has(p)) {
        seen.add(p);
        out.push(p);
      }
    }
    return out;
  }, [extraPaymentMethods]);
  const mergedTaxLabels = useMemo(() => {
    const seen = /* @__PURE__ */ new Set();
    const out = [];
    for (const t of [...FORM_TAX_TYPES, ...extraTaxPresets.map((x) => x.label)]) {
      if (!seen.has(t)) {
        seen.add(t);
        out.push(t);
      }
    }
    return out;
  }, [extraTaxPresets]);
  const bankOptions = useMemo(() => {
    const base = mergedBankLabels.map((b) => ({ value: b, label: b }));
    if (form?.bankAccountLabel) {
      const matches = mergedBankLabels.some((b) => bankLabelFromFormLabel(b) === form.bankAccountLabel);
      if (!matches && !base.some((o) => o.value === form.bankAccountLabel)) {
        return [{ value: form.bankAccountLabel, label: form.bankAccountLabel }, ...base];
      }
    }
    return base;
  }, [form, mergedBankLabels]);
  const bankDropdownValue = useMemo(() => {
    if (!form) return void 0;
    const hit = mergedBankLabels.find((b) => bankLabelFromFormLabel(b) === form.bankAccountLabel);
    return hit ?? form.bankAccountLabel;
  }, [form, mergedBankLabels]);
  const paymentOptions = useMemo(
    () => mergedPayments.map((p) => ({ value: p, label: p })),
    [mergedPayments]
  );
  const taxOptions = useMemo(
    () => mergedTaxLabels.map((t) => ({ value: t, label: t })),
    [mergedTaxLabels]
  );
  const invoiceTypeOptions = useMemo(
    () => FORM_INVOICE_TYPES.map((t) => ({ value: t, label: t })),
    []
  );
  const subtotal = useMemo(() => form ? draftSubtotal(form) : 0, [form]);
  const tax = useMemo(() => {
    if (!form) return 0;
    return computeTax(subtotal, form.taxRatePct);
  }, [form, subtotal]);
  const total = useMemo(() => computeTotal(subtotal, tax), [subtotal, tax]);
  const handleSave = useCallback(() => {
    if (!form || !recordId) return;
    if (isNew) {
      const id = createFromDraft(form, "draft");
      addToast({ title: "Draft saved", description: `${form.invoiceNumber} saved.`, variant: "success" });
      navigate(accountingPath(`editor/${id}`), { replace: true, state: {} });
      return;
    }
    updateDraft(recordId, form);
    addToast({ title: "Saved", description: "Invoice updated.", variant: "success" });
  }, [form, recordId, isNew, createFromDraft, updateDraft, navigate, addToast]);
  const handleSend = useCallback(() => {
    if (!form || !recordId) return;
    const hasBillableLines = form.lineItems.some(
      (li) => li.productLabel.trim().length > 0 && li.quantity > 0
    );
    if (!hasBillableLines) {
      addToast({
        title: "Line items required",
        description: "Add at least one line item with quantity before sending to the client.",
        variant: "error"
      });
      return;
    }
    if (isNew) {
      createFromDraft(form, "pending");
    } else {
      markSent(recordId, form);
    }
    addToast({
      title: "Invoice sent",
      description: `${form.invoiceNumber} sent to ${form.clientEmail}.`,
      variant: "success"
    });
    navigate(ACCOUNTING_BASE_PATH, { replace: true });
  }, [form, recordId, isNew, createFromDraft, markSent, navigate, addToast]);
  const handleMarkPaid = useCallback(() => {
    if (!form || !recordId || isNew) return;
    markPaid(recordId);
    addToast({ title: "Marked paid", description: `${form.invoiceNumber} is now paid.`, variant: "success" });
  }, [form, recordId, isNew, markPaid, addToast]);
  const handlePrint = useCallback(() => {
    window.print();
  }, []);
  const handleCopyTotals = useCallback(async () => {
    if (!form) return;
    const lines = form.lineItems.map(
      (li) => `  ${li.productLabel}: ${li.quantity} × ${formatUsd(li.unitPrice)} = ${formatUsd(computeLineTotal(li.quantity, li.unitPrice))}`
    );
    const text = [
      `Invoice ${form.invoiceNumber}`,
      `Bill to: ${form.clientName}`,
      ...lines,
      `Subtotal: ${formatUsd(subtotal)}`,
      `Tax (${form.taxTypeLabel}): ${formatUsd(tax)}`,
      `Total: ${formatUsd(total)}`
    ].join("\n");
    try {
      await navigator.clipboard.writeText(text);
      addToast({ title: "Copied", description: "Totals copied to clipboard.", variant: "success" });
    } catch {
      addToast({ title: "Copy failed", description: "Clipboard is not available.", variant: "error" });
    }
  }, [form, subtotal, tax, total, addToast]);
  const downloadPdf = useCallback(() => {
    if (!form) return;
    setPdfBusy(true);
    try {
      exportInvoiceDraftToPdf(form, form.invoiceNumber);
      addToast({ title: "PDF downloaded", description: "Invoice exported.", variant: "success" });
    } catch {
      addToast({ title: "Export failed", description: "Could not create PDF.", variant: "error" });
    } finally {
      setPdfBusy(false);
    }
  }, [form, addToast]);
  const setTaxType = useCallback(
    (label) => {
      setForm((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          taxTypeLabel: label,
          taxRatePct: resolveTaxRate(label, extraTaxPresets)
        };
      });
    },
    [extraTaxPresets]
  );
  if (!hydrated || !form) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(InvoiceFormPageSkeleton, { variant: "edit" });
  }
  const existingRecord = recordId && !isNew ? getInvoice(recordId) : void 0;
  const showMarkPaid = Boolean(existingRecord && existingRecord.status !== "paid");
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full min-w-0 max-w-full overflow-y-auto hide-scrollbar print:h-auto pb-[max(2.5rem,env(safe-area-inset-bottom,0px))] print:pb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1280px] mx-auto w-full min-w-0 px-3 min-[400px]:px-4 sm:px-6 lg:px-8 py-5 sm:py-8 pb-8 sm:pb-12 box-border print:px-0 print:py-0 print:max-w-none", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mb-5 sm:mb-6 flex flex-wrap items-start sm:items-center gap-2 sm:gap-3 min-w-0 print:hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: ACCOUNTING_BASE_PATH,
          "aria-label": "Back to invoices",
          className: "inline-flex items-center justify-center min-h-[var(--inkblot-size-touch-target-min,2.5rem)] min-w-[var(--inkblot-size-touch-target-min,2.5rem)] rounded-lg border border-border bg-background text-foreground hover:bg-secondary transition-colors shrink-0",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-5 h-5", strokeWidth: 2.25 })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-lg min-[400px]:text-xl font-semibold tracking-tight text-foreground min-w-0 flex-1 basis-[12rem]", children: "Edit invoice" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_min(100%,380px)] gap-6 sm:gap-8 lg:gap-8 items-start print:block", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 sm:space-y-6 min-w-0 print:hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-[var(--inkblot-radius-xl)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-primary)] p-4 sm:p-5 md:p-[var(--inkblot-spacing-6)] shadow-[var(--inkblot-shadow-sm)] space-y-[var(--inkblot-spacing-5)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-[var(--inkblot-spacing-4)]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-[var(--inkblot-spacing-2)] sm:max-w-md", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "edit-client-name", children: "Client" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "edit-client-name",
                  value: form.clientName,
                  onChange: (e) => update("clientName", e.target.value)
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-[var(--inkblot-spacing-2)] sm:max-w-md", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "edit-client-email", children: "Email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "edit-client-email",
                  type: "email",
                  value: form.clientEmail,
                  onChange: (e) => update("clientEmail", e.target.value)
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Line items" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "secondary", className: "h-8 w-8 p-0 shrink-0", onClick: addLine, "aria-label": "Add line item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4", "aria-hidden": true }) })
            ] }),
            form.lineItems.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[var(--inkblot-semantic-color-text-tertiary)]", children: "No line items yet. Use + to add one." }) : null,
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: form.lineItems.map((li) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded-[var(--inkblot-radius-lg)] border border-[var(--inkblot-semantic-color-border-default)] p-[var(--inkblot-spacing-4)] space-y-3",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      className: "text-[var(--inkblot-semantic-color-text-tertiary)] hover:text-[var(--inkblot-semantic-color-status-error)] p-1",
                      "aria-label": "Remove line",
                      onClick: () => removeLine(li.id),
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" })
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-[var(--inkblot-spacing-3)]", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-[var(--inkblot-spacing-2)] md:col-span-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: `desc-${li.id}`, children: "Description" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          id: `desc-${li.id}`,
                          value: li.productLabel,
                          onChange: (e) => updateLine(li.id, { productLabel: e.target.value })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-[var(--inkblot-spacing-2)]", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: `qty-${li.id}`, children: "Quantity" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          id: `qty-${li.id}`,
                          type: "number",
                          min: 0,
                          value: li.quantity,
                          onChange: (e) => updateLine(li.id, { quantity: Math.max(0, Number(e.target.value) || 0) })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-[var(--inkblot-spacing-2)]", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: `unit-${li.id}`, children: "Unit price (USD)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          id: `unit-${li.id}`,
                          type: "number",
                          min: 0,
                          step: "0.01",
                          value: li.unitPrice,
                          onChange: (e) => updateLine(li.id, { unitPrice: Math.max(0, Number(e.target.value) || 0) })
                        }
                      )
                    ] })
                  ] })
                ]
              },
              li.id
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-[var(--inkblot-spacing-4)]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-[var(--inkblot-spacing-2)]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Invoice type" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                AdvancedDropdown,
                {
                  options: invoiceTypeOptions,
                  value: form.invoiceTypeLabel,
                  onChange: (v) => update("invoiceTypeLabel", v ?? "Standard"),
                  placeholder: "Type…"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-[var(--inkblot-spacing-2)]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Payment method" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                AdvancedDropdown,
                {
                  options: paymentOptions,
                  value: form.paymentMethodLabel,
                  onChange: (v) => update("paymentMethodLabel", v ?? ""),
                  placeholder: "Select…"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-[var(--inkblot-spacing-2)]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Tax" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                AdvancedDropdown,
                {
                  options: taxOptions,
                  value: form.taxTypeLabel,
                  onChange: (v) => setTaxType(v ?? ""),
                  placeholder: "Select…"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-[var(--inkblot-spacing-2)]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Bank account" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                AdvancedDropdown,
                {
                  options: bankOptions,
                  value: bankDropdownValue,
                  onChange: (v) => {
                    const next = v ?? "";
                    if (mergedBankLabels.includes(next)) {
                      update("bankAccountLabel", bankLabelFromFormLabel(next));
                    } else {
                      update("bankAccountLabel", next);
                    }
                  },
                  placeholder: "Select…"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-[var(--inkblot-spacing-2)]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "edit-notes", children: "Notes (optional)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              AutoGrowTextarea,
              {
                id: "edit-notes",
                value: form.notes,
                onChange: (e) => update("notes", e.target.value),
                placeholder: "Internal note or message to the client…"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-[var(--inkblot-radius-xl)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-primary)] p-4 sm:p-5 md:p-[var(--inkblot-spacing-6)] shadow-[var(--inkblot-shadow-sm)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-foreground mb-3", children: "Dates & terms" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-[var(--inkblot-spacing-4)] mb-[var(--inkblot-spacing-4)]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-[var(--inkblot-spacing-2)]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: labelClass, htmlFor: "edit-issue-date", children: "Issue date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "edit-issue-date",
                  type: "date",
                  value: form.issueDate ?? "",
                  onChange: (e) => update("issueDate", e.target.value),
                  className: dateInputClass
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-[var(--inkblot-spacing-2)]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: labelClass, htmlFor: "edit-due-date", children: "Due date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "edit-due-date",
                  type: "date",
                  value: form.dueDate ?? "",
                  onChange: (e) => update("dueDate", e.target.value),
                  className: dateInputClass
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-[var(--inkblot-spacing-2)] max-w-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: labelClass, children: "Payment terms" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              AdvancedDropdown,
              {
                options: DUE_TERMS,
                value: form.dueTerms,
                onChange: (v) => update("dueTerms", v ?? "Net 30"),
                placeholder: "Select terms…"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col-reverse sm:flex-row sm:flex-wrap sm:items-center sm:justify-end gap-2 sm:gap-3 pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              type: "button",
              variant: "secondary",
              disabled: pdfBusy,
              onClick: downloadPdf,
              className: "w-full sm:w-auto",
              children: [
                pdfBusy ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin mr-2" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(FileDown, { className: "h-4 w-4 mr-2" }),
                "Download PDF"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", variant: "secondary", onClick: handlePrint, className: "w-full sm:w-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "h-4 w-4 mr-2" }),
            "Print"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", variant: "secondary", onClick: () => void handleCopyTotals(), className: "w-full sm:w-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-4 w-4 mr-2" }),
            "Copy totals"
          ] }),
          showMarkPaid ? /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "secondary", onClick: handleMarkPaid, className: "w-full sm:w-auto", children: "Mark paid" }) : null,
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "secondary", onClick: handleSave, className: "w-full sm:w-auto", children: "Save changes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: handleSend,
              className: "inline-flex w-full sm:w-auto min-h-[var(--inkblot-size-touch-target-min)] items-center justify-center gap-[var(--inkblot-spacing-2)] rounded-[var(--inkblot-radius-lg)] bg-[var(--inkblot-semantic-color-interactive-primary)] px-[var(--inkblot-spacing-6)] py-[var(--inkblot-spacing-2)] [font:var(--inkblot-semantic-typography-body-small)] font-medium text-[var(--inkblot-semantic-color-text-inverse)] transition-colors duration-[var(--inkblot-duration-fast)] hover:bg-[var(--inkblot-semantic-color-interactive-primary-hover)]",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }),
                "Send invoice"
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "lg:sticky lg:top-4 w-full min-w-0 max-w-xl lg:max-w-none mx-auto lg:mx-0 space-y-3 print:max-w-none print:mx-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 rounded-[var(--inkblot-radius-lg)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)] px-3 py-2.5 print:hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs text-citrus-lemon truncate min-w-0", children: form.invoiceNumber }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "secondary", className: "shrink-0 h-8 px-3", disabled: pdfBusy, onClick: downloadPdf, children: pdfBusy ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(FileDown, { className: "h-4 w-4" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(InvoiceDocumentCard, { draft: form, documentId: "invoice-print-root" })
      ] })
    ] })
  ] }) });
}

export { InvoiceReviewPage as default };
