import { importShared } from './__federation_fn_import-BF-AfqT6.js';
import { j as jsxRuntimeExports } from './jsx-runtime-XI9uIe3W.js';
import { u as useToast, b as INVOICE_PRODUCTS, F as FORM_BANK_ACCOUNTS, d as FORM_PAYMENT_METHODS, e as FORM_TAX_TYPES, f as FORM_INVOICE_TYPES, g as bankLabelFromFormLabel, r as resolveTaxRate, A as ACCOUNTING_BASE_PATH, D as DUE_TERMS, a as accountingPath } from './accountingConstants-Cfl6rq38.js';
import { L as LoaderCircle, e as exportInvoiceDraftToPdf, A as AutoGrowTextarea, F as FileDown, I as InvoiceDocumentCard } from './exportInvoicePdf-D9x8QC29.js';
import { u as useInvoiceStore, N as NEW_RECORD_ROUTE } from './invoiceStore-CH64SPmX.js';
import { A as ArrowLeft, T as Trash2 } from './trash-2-BhWtp_Kn.js';
import { P as Plus } from './plus-CRsttFmX.js';

const {useState: useState$2} = await importShared('react');

const {Dialog: Dialog$1,DialogContent: DialogContent$1,DialogHeader: DialogHeader$1,DialogTitle: DialogTitle$1,DialogDescription: DialogDescription$1,DialogFooter: DialogFooter$1,DialogClose: DialogClose$1} = await importShared('@citron-systems/citron-ui');
const inputClass$1 = [
  "min-h-[var(--inkblot-size-touch-target-min)] w-full rounded-[var(--inkblot-radius-md)]",
  "border border-[var(--inkblot-semantic-color-border-default)]",
  "bg-[var(--inkblot-semantic-color-background-primary)]",
  "px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-2)]",
  "[font:var(--inkblot-semantic-typography-body-small)]",
  "text-[var(--inkblot-semantic-color-text-primary)] placeholder:text-[var(--inkblot-semantic-color-text-tertiary)]",
  "transition-colors duration-[var(--inkblot-duration-fast)]",
  "focus:outline-none focus:ring-2 focus:ring-[var(--inkblot-semantic-color-border-focus)]"
].join(" ");
const errorBorder$1 = "border-[var(--inkblot-semantic-color-status-error)]";
function ClientCreateDialog({ open, onOpenChange, onCreated }) {
  const [name, setName] = useState$2("");
  const [email, setEmail] = useState$2("");
  const [saving, setSaving] = useState$2(false);
  const [attempted, setAttempted] = useState$2(false);
  const valid = name.trim().length > 0 && email.trim().length > 0;
  const reset = () => {
    setName("");
    setEmail("");
    setSaving(false);
    setAttempted(false);
  };
  const handleSubmit = () => {
    setAttempted(true);
    if (!valid) return;
    setSaving(true);
    setTimeout(() => {
      onCreated({ id: crypto.randomUUID(), name: name.trim(), email: email.trim() });
      reset();
    }, 400);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog$1, { open, onOpenChange: (next) => {
    onOpenChange(next);
    if (!next) reset();
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent$1, { className: "sm:max-w-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader$1, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle$1, { children: "New client" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription$1, { children: "Add a client to use in invoices." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-2)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-[var(--inkblot-spacing-1)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "[font:var(--inkblot-semantic-typography-body-small)] font-medium text-[var(--inkblot-semantic-color-text-secondary)]", children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            value: name,
            onChange: (e) => setName(e.target.value),
            placeholder: "Acme Corp",
            className: `${inputClass$1} ${attempted && !name.trim() ? errorBorder$1 : ""}`
          }
        ),
        attempted && !name.trim() && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-[var(--inkblot-semantic-color-status-error)]", children: "Required" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-[var(--inkblot-spacing-1)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "[font:var(--inkblot-semantic-typography-body-small)] font-medium text-[var(--inkblot-semantic-color-text-secondary)]", children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            value: email,
            onChange: (e) => setEmail(e.target.value),
            placeholder: "billing@acme.com",
            className: `${inputClass$1} ${attempted && !email.trim() ? errorBorder$1 : ""}`
          }
        ),
        attempted && !email.trim() && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-[var(--inkblot-semantic-color-status-error)]", children: "Required" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter$1, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        DialogClose$1,
        {
          className: "inline-flex min-h-[var(--inkblot-size-touch-target-min)] items-center justify-center rounded-[var(--inkblot-radius-lg)] border border-[var(--inkblot-semantic-color-border-default)] px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-2)] [font:var(--inkblot-semantic-typography-body-small)] text-[var(--inkblot-semantic-color-text-primary)] transition-colors duration-[var(--inkblot-duration-fast)] hover:bg-[var(--inkblot-semantic-color-background-tertiary)]",
          children: "Cancel"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          disabled: saving,
          onClick: handleSubmit,
          className: "inline-flex min-h-[var(--inkblot-size-touch-target-min)] items-center justify-center gap-[var(--inkblot-spacing-2)] rounded-[var(--inkblot-radius-lg)] bg-[var(--inkblot-semantic-color-interactive-primary)] px-[var(--inkblot-spacing-6)] py-[var(--inkblot-spacing-2)] [font:var(--inkblot-semantic-typography-body-small)] font-medium text-[var(--inkblot-semantic-color-text-inverse)] transition-colors duration-[var(--inkblot-duration-fast)] hover:bg-[var(--inkblot-semantic-color-interactive-primary-hover)] disabled:opacity-[var(--inkblot-opacity-disabled)] disabled:cursor-not-allowed",
          children: [
            saving && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
            "Create"
          ]
        }
      )
    ] })
  ] }) });
}

const {useState: useState$1} = await importShared('react');

const {Dialog,DialogContent,DialogHeader,DialogTitle,DialogDescription,DialogFooter,DialogClose} = await importShared('@citron-systems/citron-ui');
const inputClass = [
  "min-h-[var(--inkblot-size-touch-target-min)] w-full rounded-[var(--inkblot-radius-md)]",
  "border border-[var(--inkblot-semantic-color-border-default)]",
  "bg-[var(--inkblot-semantic-color-background-primary)]",
  "px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-2)]",
  "[font:var(--inkblot-semantic-typography-body-small)]",
  "text-[var(--inkblot-semantic-color-text-primary)] placeholder:text-[var(--inkblot-semantic-color-text-tertiary)]",
  "transition-colors duration-[var(--inkblot-duration-fast)]",
  "focus:outline-none focus:ring-2 focus:ring-[var(--inkblot-semantic-color-border-focus)]"
].join(" ");
const errorBorder = "border-[var(--inkblot-semantic-color-status-error)]";
function footerCancelClass() {
  return "inline-flex min-h-[var(--inkblot-size-touch-target-min)] items-center justify-center rounded-[var(--inkblot-radius-lg)] border border-[var(--inkblot-semantic-color-border-default)] px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-2)] [font:var(--inkblot-semantic-typography-body-small)] text-[var(--inkblot-semantic-color-text-primary)] transition-colors duration-[var(--inkblot-duration-fast)] hover:bg-[var(--inkblot-semantic-color-background-tertiary)]";
}
function footerPrimaryClass() {
  return "inline-flex min-h-[var(--inkblot-size-touch-target-min)] items-center justify-center gap-[var(--inkblot-spacing-2)] rounded-[var(--inkblot-radius-lg)] bg-[var(--inkblot-semantic-color-interactive-primary)] px-[var(--inkblot-spacing-6)] py-[var(--inkblot-spacing-2)] [font:var(--inkblot-semantic-typography-body-small)] font-medium text-[var(--inkblot-semantic-color-text-inverse)] transition-colors duration-[var(--inkblot-duration-fast)] hover:bg-[var(--inkblot-semantic-color-interactive-primary-hover)] disabled:opacity-[var(--inkblot-opacity-disabled)] disabled:cursor-not-allowed";
}
const labelClass$1 = "[font:var(--inkblot-semantic-typography-body-small)] font-medium text-[var(--inkblot-semantic-color-text-secondary)]";
function ProductCreateDialog({
  open,
  onOpenChange,
  onCreated
}) {
  const [name, setName] = useState$1("");
  const [unitPrice, setUnitPrice] = useState$1("");
  const [saving, setSaving] = useState$1(false);
  const [attempted, setAttempted] = useState$1(false);
  const priceNum = parseFloat(unitPrice);
  const valid = name.trim().length > 0 && !Number.isNaN(priceNum) && priceNum >= 0;
  const reset = () => {
    setName("");
    setUnitPrice("");
    setSaving(false);
    setAttempted(false);
  };
  const submit = () => {
    setAttempted(true);
    if (!valid) return;
    setSaving(true);
    setTimeout(() => {
      const id = `pr-${crypto.randomUUID().replace(/-/g, "").slice(0, 10)}`;
      onCreated({ id, name: name.trim(), unitPrice: priceNum });
      reset();
    }, 350);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: (n) => {
    onOpenChange(n);
    if (!n) reset();
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "New product or service" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "Add a line item you can reuse on invoices." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-2)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-[var(--inkblot-spacing-1)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: labelClass$1, children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            value: name,
            onChange: (e) => setName(e.target.value),
            placeholder: "e.g. Retainer — Q2",
            className: `${inputClass} ${attempted && !name.trim() ? errorBorder : ""}`
          }
        ),
        attempted && !name.trim() && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-[var(--inkblot-semantic-color-status-error)]", children: "Required" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-[var(--inkblot-spacing-1)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: labelClass$1, children: "Unit price (USD)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "number",
            min: 0,
            step: "0.01",
            value: unitPrice,
            onChange: (e) => setUnitPrice(e.target.value),
            placeholder: "0.00",
            className: `${inputClass} ${attempted && (Number.isNaN(priceNum) || priceNum < 0) ? errorBorder : ""}`
          }
        ),
        attempted && (Number.isNaN(priceNum) || priceNum < 0) && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-[var(--inkblot-semantic-color-status-error)]", children: "Enter a valid amount" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogClose, { className: footerCancelClass(), children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", disabled: saving, onClick: submit, className: footerPrimaryClass(), children: [
        saving && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
        "Add product"
      ] })
    ] })
  ] }) });
}
function BankAccountCreateDialog({
  open,
  onOpenChange,
  onCreated
}) {
  const [bankName, setBankName] = useState$1("");
  const [lastFour, setLastFour] = useState$1("");
  const [saving, setSaving] = useState$1(false);
  const [attempted, setAttempted] = useState$1(false);
  const four = lastFour.replace(/\D/g, "").slice(0, 4);
  const valid = bankName.trim().length > 0;
  const reset = () => {
    setBankName("");
    setLastFour("");
    setSaving(false);
    setAttempted(false);
  };
  const submit = () => {
    setAttempted(true);
    if (!valid) return;
    setSaving(true);
    setTimeout(() => {
      const label = four.length === 4 ? `${bankName.trim()} (****${four})` : bankName.trim();
      onCreated(label);
      reset();
    }, 350);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: (n) => {
    onOpenChange(n);
    if (!n) reset();
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "New bank account" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "Shown on the invoice for payment instructions." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-2)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-[var(--inkblot-spacing-1)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: labelClass$1, children: "Account label" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            value: bankName,
            onChange: (e) => setBankName(e.target.value),
            placeholder: "e.g. Operating — Chase",
            className: `${inputClass} ${attempted && !bankName.trim() ? errorBorder : ""}`
          }
        ),
        attempted && !bankName.trim() && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-[var(--inkblot-semantic-color-status-error)]", children: "Required" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-[var(--inkblot-spacing-1)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: labelClass$1, children: "Last 4 digits (optional)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            value: lastFour,
            onChange: (e) => setLastFour(e.target.value.replace(/\D/g, "").slice(0, 4)),
            placeholder: "4821",
            className: inputClass
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogClose, { className: footerCancelClass(), children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", disabled: saving, onClick: submit, className: footerPrimaryClass(), children: [
        saving && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
        "Add account"
      ] })
    ] })
  ] }) });
}
function PaymentMethodCreateDialog({
  open,
  onOpenChange,
  onCreated
}) {
  const [label, setLabel] = useState$1("");
  const [saving, setSaving] = useState$1(false);
  const [attempted, setAttempted] = useState$1(false);
  const reset = () => {
    setLabel("");
    setSaving(false);
    setAttempted(false);
  };
  const submit = () => {
    setAttempted(true);
    if (!label.trim()) return;
    setSaving(true);
    setTimeout(() => {
      onCreated(label.trim());
      reset();
    }, 350);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: (n) => {
    onOpenChange(n);
    if (!n) reset();
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "New payment method" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "Appears on the invoice (e.g. ACH, Wire, Wise)." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-[var(--inkblot-spacing-2)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: labelClass$1, children: "Method name" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          value: label,
          onChange: (e) => setLabel(e.target.value),
          placeholder: "e.g. ACH transfer",
          className: `${inputClass} mt-[var(--inkblot-spacing-1)] ${attempted && !label.trim() ? errorBorder : ""}`
        }
      ),
      attempted && !label.trim() && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-[var(--inkblot-semantic-color-status-error)] mt-1 block", children: "Required" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogClose, { className: footerCancelClass(), children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", disabled: saving, onClick: submit, className: footerPrimaryClass(), children: [
        saving && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
        "Add method"
      ] })
    ] })
  ] }) });
}
function TaxPresetCreateDialog({
  open,
  onOpenChange,
  onCreated
}) {
  const [taxLabel, setTaxLabel] = useState$1("");
  const [rate, setRate] = useState$1("");
  const [saving, setSaving] = useState$1(false);
  const [attempted, setAttempted] = useState$1(false);
  const rateNum = parseFloat(rate);
  const valid = taxLabel.trim().length > 0 && !Number.isNaN(rateNum) && rateNum >= 0 && rateNum <= 100;
  const reset = () => {
    setTaxLabel("");
    setRate("");
    setSaving(false);
    setAttempted(false);
  };
  const submit = () => {
    setAttempted(true);
    if (!valid) return;
    setSaving(true);
    setTimeout(() => {
      onCreated({ label: taxLabel.trim(), ratePct: rateNum });
      reset();
    }, 350);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: (n) => {
    onOpenChange(n);
    if (!n) reset();
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "New tax rate" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "Add a custom rate (e.g. state sales tax)." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-2)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-[var(--inkblot-spacing-1)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: labelClass$1, children: "Label" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            value: taxLabel,
            onChange: (e) => setTaxLabel(e.target.value),
            placeholder: "e.g. Sales tax 8.25%",
            className: `${inputClass} ${attempted && !taxLabel.trim() ? errorBorder : ""}`
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-[var(--inkblot-spacing-1)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: labelClass$1, children: "Rate (%)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "number",
            min: 0,
            max: 100,
            step: "0.01",
            value: rate,
            onChange: (e) => setRate(e.target.value),
            placeholder: "8.25",
            className: `${inputClass} ${attempted && !valid && taxLabel.trim() ? errorBorder : ""}`
          }
        ),
        attempted && !valid && taxLabel.trim() && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-[var(--inkblot-semantic-color-status-error)]", children: "Enter 0–100" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogClose, { className: footerCancelClass(), children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", disabled: saving, onClick: submit, className: footerPrimaryClass(), children: [
        saving && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
        "Add tax rate"
      ] })
    ] })
  ] }) });
}

const {useCallback,useMemo,useRef,useState} = await importShared('react');

const {Link,useNavigate} = await importShared('react-router-dom');

const {AdvancedDropdown,Button,Input,Label} = await importShared('@citron-systems/citron-ui');
const ADD_CLIENT = "__citron_add_client__";
const ADD_PRODUCT = "__citron_add_product__";
const NEW_LINE_PRODUCT_PICK = "__citron_new_line_pick__";
const ADD_BANK = "__citron_add_bank__";
const ADD_PAYMENT = "__citron_add_payment__";
const ADD_TAX = "__citron_add_tax__";
function isoToday() {
  const d = /* @__PURE__ */ new Date();
  return d.toISOString().slice(0, 10);
}
function isoPlusDays(days) {
  const d = /* @__PURE__ */ new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}
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
function buildDraft(clientId, lines, clients, products, extraTaxPresets, issueDate, dueDate, dueTerms, invoiceNumber, invoiceType, paymentMethod, taxType, bankAccount, notes) {
  if (!clientId) return null;
  const client = clients.find((c) => c.id === clientId);
  if (!client) return null;
  const valid = lines.filter((l) => l.productId && l.quantity >= 1);
  const lineItems = valid.map((l) => {
    const p = products.find((x) => x.id === l.productId);
    return {
      id: l.id,
      productLabel: p?.name ?? "Item",
      quantity: l.quantity,
      unitPrice: Math.max(0, l.unitPrice)
    };
  });
  return {
    invoiceNumber,
    clientName: client.name,
    clientEmail: client.email,
    lineItems,
    invoiceTypeLabel: invoiceType || "Standard",
    paymentMethodLabel: paymentMethod,
    taxTypeLabel: taxType,
    taxRatePct: resolveTaxRate(taxType, extraTaxPresets),
    bankAccountLabel: bankLabelFromFormLabel(bankAccount),
    notes: notes ?? "",
    dueTerms,
    issueDate,
    dueDate
  };
}
function SmartInvoiceBuilder() {
  const { addToast } = useToast();
  const navigate = useNavigate();
  const {
    clients,
    addClient,
    extraProducts,
    extraBankLabels,
    extraPaymentMethods,
    extraTaxPresets,
    addProduct,
    addBankLabel,
    addPaymentMethod,
    addTaxPreset,
    getNextInvoiceNumber
  } = useInvoiceStore();
  const [invoiceNumber] = useState(() => getNextInvoiceNumber());
  const [clientId, setClientId] = useState("");
  const [lines, setLines] = useState([]);
  const [invoiceType, setInvoiceType] = useState("Standard");
  const [paymentMethod, setPaymentMethod] = useState("Bank Transfer");
  const [taxType, setTaxType] = useState("VAT 21%");
  const [bankAccount, setBankAccount] = useState("Main Account");
  const [notes, setNotes] = useState("");
  const [issueDate, setIssueDate] = useState(isoToday);
  const [dueDate, setDueDate] = useState(() => isoPlusDays(30));
  const [dueTerms, setDueTerms] = useState("Net 30");
  const [attempted, setAttempted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [pdfBusy, setPdfBusy] = useState(false);
  const [openClient, setOpenClient] = useState(false);
  const [openProduct, setOpenProduct] = useState(false);
  const [productDialogLineId, setProductDialogLineId] = useState(null);
  const [addLinePickerOpen, setAddLinePickerOpen] = useState(false);
  const productDialogSavedRef = useRef(false);
  const [openBank, setOpenBank] = useState(false);
  const [openPayment, setOpenPayment] = useState(false);
  const [openTax, setOpenTax] = useState(false);
  const mergedProducts = useMemo(() => [...INVOICE_PRODUCTS, ...extraProducts], [extraProducts]);
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
  const clientOptions = useMemo(
    () => [
      ...clients.map((c) => ({ value: c.id, label: c.name })),
      { value: ADD_CLIENT, label: "+ Add new client…" }
    ],
    [clients]
  );
  const productOptions = useMemo(
    () => [
      ...mergedProducts.map((p) => ({ value: p.id, label: p.name })),
      { value: ADD_PRODUCT, label: "+ Add new product…" }
    ],
    [mergedProducts]
  );
  const bankOptions = useMemo(
    () => [
      ...mergedBankLabels.map((b) => ({ value: b, label: b })),
      { value: ADD_BANK, label: "+ Add new bank account…" }
    ],
    [mergedBankLabels]
  );
  const paymentOptions = useMemo(
    () => [
      ...mergedPayments.map((p) => ({ value: p, label: p })),
      { value: ADD_PAYMENT, label: "+ Add new payment method…" }
    ],
    [mergedPayments]
  );
  const taxOptions = useMemo(
    () => [
      ...mergedTaxLabels.map((t) => ({ value: t, label: t })),
      { value: ADD_TAX, label: "+ Add new tax rate…" }
    ],
    [mergedTaxLabels]
  );
  const invoiceTypeOptions = useMemo(
    () => FORM_INVOICE_TYPES.map((t) => ({ value: t, label: t })),
    []
  );
  const previewDraft = useMemo(() => {
    const client = clients.find((c) => c.id === clientId);
    const terms = dueTerms ?? "Net 30";
    const built = lines.filter((l) => l.productId).map((l) => {
      const p = mergedProducts.find((x) => x.id === l.productId);
      return {
        id: l.id,
        productLabel: p?.name ?? "—",
        quantity: Math.max(0, l.quantity),
        unitPrice: Math.max(0, l.unitPrice)
      };
    });
    const lineItems = built;
    return {
      invoiceNumber,
      clientName: client?.name ?? "— Select client —",
      clientEmail: client?.email ?? "—",
      lineItems,
      invoiceTypeLabel: invoiceType || "—",
      paymentMethodLabel: paymentMethod || "—",
      taxTypeLabel: taxType || "—",
      taxRatePct: resolveTaxRate(taxType, extraTaxPresets),
      bankAccountLabel: bankAccount ? bankLabelFromFormLabel(bankAccount) : "—",
      notes,
      dueTerms: terms,
      issueDate,
      dueDate
    };
  }, [
    clients,
    clientId,
    lines,
    mergedProducts,
    extraTaxPresets,
    issueDate,
    dueDate,
    dueTerms,
    invoiceNumber,
    invoiceType,
    paymentMethod,
    taxType,
    bankAccount,
    notes
  ]);
  const setLine = useCallback((id, patch) => {
    setLines((prev) => prev.map((row) => row.id === id ? { ...row, ...patch } : row));
  }, []);
  const onProductSelect = useCallback((lineId, value) => {
    if (value === ADD_PRODUCT) {
      setProductDialogLineId(lineId);
      setOpenProduct(true);
      return;
    }
    if (!value) {
      setLines((prev) => prev.filter((r) => r.id !== lineId));
      return;
    }
    const p = mergedProducts.find((x) => x.id === value);
    setLine(lineId, { productId: value, unitPrice: p?.unitPrice ?? 0 });
  }, [mergedProducts, setLine]);
  const handleClientCreated = (newClient) => {
    addClient({ id: newClient.id, name: newClient.name, email: newClient.email });
    setClientId(newClient.id);
    setOpenClient(false);
    addToast({ title: "Client created", description: `${newClient.name} added.`, variant: "success" });
  };
  const handleProductCreated = (p) => {
    productDialogSavedRef.current = true;
    addProduct(p);
    if (productDialogLineId === NEW_LINE_PRODUCT_PICK) {
      setLines((prev) => [
        ...prev,
        { id: crypto.randomUUID(), productId: p.id, quantity: 1, unitPrice: p.unitPrice ?? 0 }
      ]);
      setAddLinePickerOpen(false);
    } else if (productDialogLineId) {
      setLine(productDialogLineId, { productId: p.id, unitPrice: p.unitPrice ?? 0 });
    }
    setProductDialogLineId(null);
    setOpenProduct(false);
    addToast({ title: "Product added", description: `${p.name} is available in the list.`, variant: "success" });
  };
  const handleBankCreated = (label) => {
    addBankLabel(label);
    setBankAccount(label);
    setOpenBank(false);
    addToast({ title: "Bank account added", description: label, variant: "success" });
  };
  const handlePaymentCreated = (label) => {
    addPaymentMethod(label);
    setPaymentMethod(label);
    setOpenPayment(false);
    addToast({ title: "Payment method added", description: label, variant: "success" });
  };
  const handleTaxCreated = (preset) => {
    addTaxPreset(preset);
    setTaxType(preset.label);
    setOpenTax(false);
    addToast({ title: "Tax rate added", description: preset.label, variant: "success" });
  };
  const downloadPdf = useCallback(() => {
    setPdfBusy(true);
    try {
      exportInvoiceDraftToPdf(previewDraft, invoiceNumber);
      addToast({ title: "PDF downloaded", description: "Invoice exported.", variant: "success" });
    } catch {
      addToast({ title: "Export failed", description: "Could not create PDF.", variant: "error" });
    } finally {
      setPdfBusy(false);
    }
  }, [addToast, invoiceNumber, previewDraft]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setAttempted(true);
    const draft = buildDraft(
      clientId,
      lines,
      clients,
      mergedProducts,
      extraTaxPresets,
      issueDate,
      dueDate,
      dueTerms ?? "Net 30",
      invoiceNumber,
      invoiceType,
      paymentMethod,
      taxType,
      bankAccount,
      notes
    );
    if (!draft) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      navigate(accountingPath(`editor/${NEW_RECORD_ROUTE}`), { state: { draft } });
    }, 280);
  };
  const removeLine = (id) => {
    setLines((prev) => prev.filter((r) => r.id !== id));
  };
  const clientError = attempted && !clientId;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full min-w-0 max-w-full overflow-y-auto hide-scrollbar pb-[max(2.5rem,env(safe-area-inset-bottom,0px))]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1280px] mx-auto w-full min-w-0 px-3 min-[400px]:px-4 sm:px-6 lg:px-8 py-5 sm:py-8 pb-8 sm:pb-12 box-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mb-5 sm:mb-6 flex flex-wrap items-start sm:items-center gap-2 sm:gap-3 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: ACCOUNTING_BASE_PATH,
            "aria-label": "Back to invoices",
            className: "inline-flex items-center justify-center min-h-[var(--inkblot-size-touch-target-min,2.5rem)] min-w-[var(--inkblot-size-touch-target-min,2.5rem)] rounded-lg border border-border bg-background text-foreground hover:bg-secondary transition-colors shrink-0",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-5 h-5", strokeWidth: 2.25 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-lg min-[400px]:text-xl font-semibold tracking-tight text-foreground min-w-0 flex-1 basis-[12rem]", children: "Create invoice" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "form",
        {
          onSubmit: handleSubmit,
          className: "grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_min(100%,380px)] gap-6 sm:gap-8 lg:gap-8 items-start",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 sm:space-y-6 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-[var(--inkblot-radius-xl)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-primary)] p-4 sm:p-5 md:p-[var(--inkblot-spacing-6)] shadow-[var(--inkblot-shadow-sm)] space-y-[var(--inkblot-spacing-5)]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-[var(--inkblot-spacing-2)] max-w-md", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "create-client", children: "Client" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    AdvancedDropdown,
                    {
                      options: clientOptions,
                      value: clientId || void 0,
                      onChange: (v) => {
                        if (v === ADD_CLIENT) {
                          setOpenClient(true);
                          return;
                        }
                        setClientId(v ?? "");
                      },
                      placeholder: "Select client…"
                    }
                  ),
                  clientError && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-[var(--inkblot-semantic-color-status-error)]", children: "Select a client." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Line items" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        type: "button",
                        variant: "secondary",
                        className: "h-8 w-8 p-0 shrink-0",
                        onClick: () => setAddLinePickerOpen(true),
                        "aria-label": "Add line item",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4", "aria-hidden": true })
                      }
                    )
                  ] }),
                  addLinePickerOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[var(--inkblot-radius-lg)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)] p-[var(--inkblot-spacing-4)] space-y-[var(--inkblot-spacing-3)]", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: labelClass, children: "Select a product" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      AdvancedDropdown,
                      {
                        options: productOptions,
                        onChange: (v) => {
                          if (v === ADD_PRODUCT) {
                            setProductDialogLineId(NEW_LINE_PRODUCT_PICK);
                            setAddLinePickerOpen(false);
                            setOpenProduct(true);
                            return;
                          }
                          if (!v) return;
                          const p = mergedProducts.find((x) => x.id === v);
                          setLines((prev) => [
                            ...prev,
                            { id: crypto.randomUUID(), productId: v, quantity: 1, unitPrice: p?.unitPrice ?? 0 }
                          ]);
                          setAddLinePickerOpen(false);
                        },
                        placeholder: "Choose product…"
                      },
                      addLinePickerOpen ? "picker-open" : "picker-closed"
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "secondary", className: "w-full sm:w-auto h-8 text-xs", onClick: () => setAddLinePickerOpen(false), children: "Cancel" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: lines.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "rounded-[var(--inkblot-radius-lg)] border border-[var(--inkblot-semantic-color-border-default)] p-[var(--inkblot-spacing-4)] space-y-3",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-end gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            className: "text-[var(--inkblot-semantic-color-text-tertiary)] hover:text-[var(--inkblot-semantic-color-status-error)] p-1",
                            "aria-label": "Remove line",
                            onClick: () => removeLine(row.id),
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" })
                          }
                        ) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-[var(--inkblot-spacing-3)]", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-[var(--inkblot-spacing-2)] md:col-span-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: labelClass, children: "Product" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              AdvancedDropdown,
                              {
                                options: productOptions,
                                value: row.productId ?? void 0,
                                onChange: (v) => onProductSelect(row.id, v),
                                placeholder: "Select product…"
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-[var(--inkblot-spacing-2)]", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: `qty-${row.id}`, children: "Quantity" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Input,
                              {
                                id: `qty-${row.id}`,
                                type: "number",
                                min: 1,
                                value: row.quantity,
                                onChange: (e) => setLine(row.id, { quantity: Math.max(1, Number(e.target.value) || 1) })
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-[var(--inkblot-spacing-2)]", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: `unit-${row.id}`, children: "Unit price (USD)" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Input,
                              {
                                id: `unit-${row.id}`,
                                type: "number",
                                min: 0,
                                step: "0.01",
                                value: row.unitPrice,
                                onChange: (e) => setLine(row.id, { unitPrice: Math.max(0, Number(e.target.value) || 0) })
                              }
                            )
                          ] })
                        ] })
                      ]
                    },
                    row.id
                  )) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-[var(--inkblot-spacing-4)]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-[var(--inkblot-spacing-2)]", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Invoice type" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      AdvancedDropdown,
                      {
                        options: invoiceTypeOptions,
                        value: invoiceType,
                        onChange: (v) => setInvoiceType(v ?? "Standard"),
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
                        value: paymentMethod,
                        onChange: (v) => {
                          if (v === ADD_PAYMENT) {
                            setOpenPayment(true);
                            return;
                          }
                          setPaymentMethod(v ?? "");
                        },
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
                        value: taxType,
                        onChange: (v) => {
                          if (v === ADD_TAX) {
                            setOpenTax(true);
                            return;
                          }
                          setTaxType(v ?? "");
                        },
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
                        value: bankAccount,
                        onChange: (v) => {
                          if (v === ADD_BANK) {
                            setOpenBank(true);
                            return;
                          }
                          setBankAccount(v ?? "");
                        },
                        placeholder: "Select…"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-[var(--inkblot-spacing-2)]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "create-notes", children: "Notes (optional)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    AutoGrowTextarea,
                    {
                      id: "create-notes",
                      value: notes,
                      onChange: (e) => setNotes(e.target.value),
                      placeholder: "Internal note or message to the client…"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-[var(--inkblot-radius-xl)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-primary)] p-4 sm:p-5 md:p-[var(--inkblot-spacing-6)] shadow-[var(--inkblot-shadow-sm)]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-foreground mb-3", children: "Dates & terms" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-[var(--inkblot-spacing-4)] mb-[var(--inkblot-spacing-4)]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-[var(--inkblot-spacing-2)]", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: labelClass, htmlFor: "issue-date", children: "Issue date" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        id: "issue-date",
                        type: "date",
                        value: issueDate,
                        onChange: (e) => setIssueDate(e.target.value),
                        className: dateInputClass
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-[var(--inkblot-spacing-2)]", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: labelClass, htmlFor: "due-date", children: "Due date" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        id: "due-date",
                        type: "date",
                        value: dueDate,
                        onChange: (e) => setDueDate(e.target.value),
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
                      value: dueTerms ?? void 0,
                      onChange: (v) => setDueTerms(v),
                      placeholder: "Select terms…"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col-reverse sm:flex-row sm:items-center sm:justify-end gap-3 pt-2", children: [
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
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "submit",
                    disabled: submitting,
                    className: "inline-flex w-full sm:w-auto min-h-[var(--inkblot-size-touch-target-min)] items-center justify-center gap-[var(--inkblot-spacing-2)] rounded-[var(--inkblot-radius-lg)] bg-[var(--inkblot-semantic-color-interactive-primary)] px-[var(--inkblot-spacing-6)] py-[var(--inkblot-spacing-2)] [font:var(--inkblot-semantic-typography-body-small)] font-medium text-[var(--inkblot-semantic-color-text-inverse)] transition-colors duration-[var(--inkblot-duration-fast)] hover:bg-[var(--inkblot-semantic-color-interactive-primary-hover)] disabled:opacity-[var(--inkblot-opacity-disabled)] disabled:cursor-not-allowed",
                    children: [
                      submitting && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
                      "Continue to editor"
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "lg:sticky lg:top-4 w-full min-w-0 max-w-xl lg:max-w-none mx-auto lg:mx-0 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 rounded-[var(--inkblot-radius-lg)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)] px-3 py-2.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs text-citrus-lemon truncate min-w-0", children: invoiceNumber }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "button",
                    variant: "secondary",
                    className: "shrink-0 h-8 px-3",
                    disabled: pdfBusy,
                    onClick: downloadPdf,
                    children: pdfBusy ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(FileDown, { className: "h-4 w-4" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(InvoiceDocumentCard, { draft: previewDraft, documentId: "invoice-create-preview" })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ClientCreateDialog, { open: openClient, onOpenChange: setOpenClient, onCreated: handleClientCreated }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProductCreateDialog,
      {
        open: openProduct,
        onOpenChange: (o) => {
          setOpenProduct(o);
          if (!o) {
            const wasNewLinePick = productDialogLineId === NEW_LINE_PRODUCT_PICK;
            const saved = productDialogSavedRef.current;
            productDialogSavedRef.current = false;
            if (wasNewLinePick && !saved) {
              setAddLinePickerOpen(true);
            }
            setProductDialogLineId(null);
          }
        },
        onCreated: handleProductCreated
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BankAccountCreateDialog, { open: openBank, onOpenChange: setOpenBank, onCreated: handleBankCreated }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PaymentMethodCreateDialog, { open: openPayment, onOpenChange: setOpenPayment, onCreated: handlePaymentCreated }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TaxPresetCreateDialog, { open: openTax, onOpenChange: setOpenTax, onCreated: handleTaxCreated })
  ] });
}

export { SmartInvoiceBuilder as default };
