import { importShared } from './__federation_fn_import-BF-AfqT6.js';
import { j as jsxRuntimeExports } from './jsx-runtime-XI9uIe3W.js';

const {createContext: createContext$1,useContext: useContext$1,useState,useCallback: useCallback$1} = await importShared('react');

const ToastContext = createContext$1(null);
function useToast() {
  const ctx = useContext$1(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}
function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const addToast = useCallback$1((toast) => {
    const id = crypto.randomUUID();
    setToasts((prev) => [...prev, { ...toast, id }]);
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 4e3);
  }, []);
  const dismissToast = useCallback$1((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ToastContext.Provider, { value: { toasts, addToast, dismissToast }, children });
}

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const {forwardRef: forwardRef$1,createElement: createElement$1} = await importShared('react');

const Icon = forwardRef$1(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => createElement$1(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => createElement$1(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const {forwardRef,createElement} = await importShared('react');

const createLucideIcon = (iconName, iconNode) => {
  const Component = forwardRef(
    ({ className, ...props }, ref) => createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};

const ACCOUNTING_BASE_PATH = "/invoices";
function accountingPath(suffix = "") {
  if (!suffix) return ACCOUNTING_BASE_PATH;
  const clean = suffix.startsWith("/") ? suffix.slice(1) : suffix;
  return `${ACCOUNTING_BASE_PATH}/${clean}`;
}
const INVOICE_STATUS_TABS = [
  { id: "all", label: "All" },
  { id: "paid", label: "Paid" },
  { id: "pending", label: "Pending" },
  { id: "overdue", label: "Overdue" },
  { id: "draft", label: "Draft" }
];
function normalizeInvoiceListStatusParam(param) {
  if (!param) return "all";
  return INVOICE_STATUS_TABS.some((t) => t.id === param) ? param : "all";
}
const INITIAL_CLIENTS = [
  { id: "cl-1", name: "Acme Corp", email: "billing@acme.com" },
  { id: "cl-2", name: "TechVentures", email: "ap@techventures.io" },
  { id: "cl-3", name: "DataFlow Labs", email: "finance@dataflow.dev" },
  { id: "cl-4", name: "GlobalTech", email: "invoices@globaltech.com" }
];
INITIAL_CLIENTS.map((c) => ({
  id: c.id,
  name: c.name,
  email: c.email
}));
const INVOICE_PRODUCTS = [
  { id: "web-dev", name: "Web Development", unitPrice: 150 },
  { id: "design", name: "UI/UX Design", unitPrice: 175 },
  { id: "hosting", name: "Hosting & Infrastructure", unitPrice: 500 },
  { id: "consulting", name: "Strategy Consulting", unitPrice: 200 },
  { id: "support", name: "Support Package", unitPrice: 1200 }
];
const INVOICE_TYPES = [
  { value: "standard", label: "Standard" },
  { value: "proforma", label: "Proforma" },
  { value: "credit-note", label: "Credit Note" },
  { value: "debit-note", label: "Debit Note" }
];
const PAYMENT_METHOD_OPTIONS = [
  { value: "bank-transfer", label: "Bank Transfer" },
  { value: "credit-card", label: "Credit Card" },
  { value: "cash", label: "Cash" },
  { value: "check", label: "Check" }
];
const TAX_CONFIG_OPTIONS = [
  { value: "vat-21", label: "VAT 21%" },
  { value: "vat-10", label: "VAT 10%" },
  { value: "vat-0", label: "VAT 0%" },
  { value: "exempt", label: "Tax Exempt" }
];
const BANK_ACCOUNT_OPTIONS = [
  { value: "main", label: "Main Account", description: "****4821" },
  { value: "secondary", label: "Secondary Account", description: "****7390" }
];
const DUE_TERMS = [
  { value: "Due on receipt", label: "Due on receipt" },
  { value: "Net 7", label: "Net 7" },
  { value: "Net 15", label: "Net 15" },
  { value: "Net 30", label: "Net 30" },
  { value: "Net 45", label: "Net 45" },
  { value: "Net 60", label: "Net 60" }
];
const FORM_PAYMENT_METHODS = PAYMENT_METHOD_OPTIONS.map((o) => o.label);
const FORM_TAX_TYPES = TAX_CONFIG_OPTIONS.map((o) => o.label);
const FORM_INVOICE_TYPES = INVOICE_TYPES.map((o) => o.label);
const FORM_BANK_ACCOUNTS = BANK_ACCOUNT_OPTIONS.map((o) => o.label);
function taxRateFromTaxLabel(label) {
  const id = TAX_CONFIG_OPTIONS.find((o) => o.label === label)?.value;
  switch (id) {
    case "vat-21":
      return 21;
    case "vat-10":
      return 10;
    case "vat-0":
    case "exempt":
      return 0;
    default:
      return 0;
  }
}
function resolveTaxRate(taxLabel, extraPresets) {
  const hit = extraPresets.find((p) => p.label === taxLabel);
  if (hit) return Math.max(0, Math.min(100, hit.ratePct));
  return taxRateFromTaxLabel(taxLabel);
}
function bankLabelFromFormLabel(label) {
  const opt = BANK_ACCOUNT_OPTIONS.find((o) => o.label === label);
  return opt ? `${opt.label}${opt.description ? ` (${opt.description})` : ""}` : label;
}

function computeLineTotal(qty, unit) {
  return Math.round(qty * unit * 100) / 100;
}
function computeTax(subtotal, ratePct) {
  return Math.round(subtotal * (ratePct / 100) * 100) / 100;
}
function computeTotal(subtotal, tax) {
  return Math.round((subtotal + tax) * 100) / 100;
}
function draftSubtotal(draft) {
  return draft.lineItems.reduce((sum, li) => sum + computeLineTotal(li.quantity, li.unitPrice), 0);
}
function invoiceGrandTotal(draft) {
  const subtotal = draftSubtotal(draft);
  const tax = computeTax(subtotal, draft.taxRatePct);
  return computeTotal(subtotal, tax);
}
function formatUsd(amount) {
  return `$${amount.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`;
}
function normalizeInvoiceDraft(input) {
  const d = input;
  let lineItems = [];
  const hasLineItemsKey = "lineItems" in d && Array.isArray(d.lineItems);
  if (Array.isArray(d.lineItems)) {
    lineItems = d.lineItems.map((row, i) => {
      const r = row;
      return {
        id: String(r.id ?? `line-${i}-${Math.random().toString(36).slice(2)}`),
        productLabel: String(r.productLabel ?? ""),
        quantity: Math.max(0, Number(r.quantity) || 0),
        unitPrice: Math.max(0, Number(r.unitPrice) || 0)
      };
    });
  }
  if (lineItems.length === 0 && (d.productLabel != null || d.quantity != null || d.unitPrice != null)) {
    lineItems = [
      {
        id: crypto.randomUUID(),
        productLabel: String(d.productLabel ?? "Line item"),
        quantity: Math.max(1, Number(d.quantity) || 1),
        unitPrice: Math.max(0, Number(d.unitPrice) || 0)
      }
    ];
  }
  if (lineItems.length === 0) {
    if (hasLineItemsKey) {
      lineItems = [];
    } else {
      lineItems = [{ id: crypto.randomUUID(), productLabel: "", quantity: 1, unitPrice: 0 }];
    }
  }
  return {
    invoiceNumber: String(d.invoiceNumber ?? ""),
    clientName: String(d.clientName ?? ""),
    clientEmail: String(d.clientEmail ?? ""),
    lineItems,
    invoiceTypeLabel: String(d.invoiceTypeLabel ?? "Standard"),
    paymentMethodLabel: String(d.paymentMethodLabel ?? ""),
    taxTypeLabel: String(d.taxTypeLabel ?? ""),
    taxRatePct: Math.max(0, Math.min(100, Number(d.taxRatePct) || 0)),
    bankAccountLabel: String(d.bankAccountLabel ?? ""),
    notes: String(d.notes ?? ""),
    dueTerms: String(d.dueTerms ?? "Net 30"),
    issueDate: d.issueDate != null ? String(d.issueDate) : void 0,
    dueDate: d.dueDate != null ? String(d.dueDate) : void 0
  };
}
function newEmptyLineItem() {
  return { id: crypto.randomUUID(), productLabel: "", quantity: 1, unitPrice: 0 };
}

const {createContext,useCallback,useContext,useMemo,useSyncExternalStore} = await importShared('react');
const STORAGE_KEY = "citron-accounting-store-v1";
const NEW_RECORD_ROUTE = "new";
function nextInvoiceNumber(invoices) {
  let max = -1;
  for (const inv of invoices) {
    const n = Number.parseInt(inv.draft.invoiceNumber, 10);
    if (Number.isFinite(n) && n > max) max = n;
  }
  return String(max + 1);
}
function assignSequentialInvoiceNumbers(invoices) {
  const entries = invoices.map((inv) => ({
    inv,
    sortKey: `${inv.draft.issueDate ?? "9999-99-99"}|${inv.recordId}`
  }));
  entries.sort((a, b) => a.sortKey.localeCompare(b.sortKey));
  const numByRecordId = /* @__PURE__ */ new Map();
  entries.forEach((e, index) => {
    numByRecordId.set(e.inv.recordId, String(index));
  });
  return invoices.map((inv) => ({
    ...inv,
    draft: {
      ...inv.draft,
      invoiceNumber: numByRecordId.get(inv.recordId) ?? "0"
    }
  }));
}
function buildSeedInvoices() {
  return [
    {
      recordId: "seed-001",
      status: "paid",
      draft: {
        invoiceNumber: "0",
        clientName: "Acme Corp",
        clientEmail: "billing@acme.com",
        lineItems: [
          { id: "seed-001-a", productLabel: "Strategy Consulting", quantity: 62, unitPrice: 200 }
        ],
        invoiceTypeLabel: "Standard",
        paymentMethodLabel: "Bank Transfer",
        taxTypeLabel: "VAT 0%",
        taxRatePct: 0,
        bankAccountLabel: "Main Account (****4821)",
        notes: "",
        dueTerms: "Net 30",
        issueDate: "2026-02-10",
        dueDate: "2026-03-12"
      }
    },
    {
      recordId: "seed-002",
      status: "pending",
      draft: {
        invoiceNumber: "1",
        clientName: "TechVentures",
        clientEmail: "ap@techventures.io",
        lineItems: [{ id: "seed-002-a", productLabel: "Web Development", quantity: 30, unitPrice: 150 }],
        invoiceTypeLabel: "Standard",
        paymentMethodLabel: "Credit Card",
        taxTypeLabel: "VAT 0%",
        taxRatePct: 0,
        bankAccountLabel: "Main Account (****4821)",
        notes: "",
        dueTerms: "Net 30",
        issueDate: "2026-02-18",
        dueDate: "2026-03-20"
      }
    },
    {
      recordId: "seed-003",
      status: "overdue",
      draft: {
        invoiceNumber: "2",
        clientName: "DataFlow Labs",
        clientEmail: "finance@dataflow.dev",
        lineItems: [{ id: "seed-003-a", productLabel: "Hosting & Infrastructure", quantity: 12, unitPrice: 650 }],
        invoiceTypeLabel: "Standard",
        paymentMethodLabel: "Bank Transfer",
        taxTypeLabel: "VAT 0%",
        taxRatePct: 0,
        bankAccountLabel: "Secondary Account (****7390)",
        notes: "Reminder sent.",
        dueTerms: "Net 15",
        issueDate: "2026-01-28",
        dueDate: "2026-02-12"
      }
    },
    {
      recordId: "seed-004",
      status: "draft",
      draft: {
        invoiceNumber: "3",
        clientName: "GlobalTech",
        clientEmail: "invoices@globaltech.com",
        lineItems: [{ id: "seed-004-a", productLabel: "Support Package", quantity: 22, unitPrice: 1e3 }],
        invoiceTypeLabel: "Proforma",
        paymentMethodLabel: "Bank Transfer",
        taxTypeLabel: "VAT 0%",
        taxRatePct: 0,
        bankAccountLabel: "Main Account (****4821)",
        notes: "Draft — review before send.",
        dueTerms: "Net 30",
        issueDate: "2026-02-25",
        dueDate: "2026-03-27"
      }
    }
  ];
}
function defaultPersisted() {
  return {
    version: 3,
    invoices: buildSeedInvoices(),
    clients: [...INITIAL_CLIENTS],
    extraProducts: [],
    extraBankLabels: [],
    extraPaymentMethods: [],
    extraTaxPresets: []
  };
}
function extrasFromRaw(raw) {
  return {
    extraProducts: Array.isArray(raw.extraProducts) ? raw.extraProducts : [],
    extraBankLabels: Array.isArray(raw.extraBankLabels) ? raw.extraBankLabels : [],
    extraPaymentMethods: Array.isArray(raw.extraPaymentMethods) ? raw.extraPaymentMethods : [],
    extraTaxPresets: Array.isArray(raw.extraTaxPresets) ? raw.extraTaxPresets : []
  };
}
function migratePersisted(raw) {
  const invoices = raw.invoices;
  const clients = raw.clients;
  if (!Array.isArray(invoices) || !Array.isArray(clients)) return null;
  const extras = extrasFromRaw(raw);
  const clientList = clients;
  let list = invoices;
  if (raw.version !== 3) {
    list = assignSequentialInvoiceNumbers(list);
  }
  return {
    version: 3,
    invoices: list,
    clients: clientList,
    ...extras
  };
}
function loadPersisted() {
  if (typeof window === "undefined") return defaultPersisted();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultPersisted();
    const parsed = JSON.parse(raw);
    const migrated = migratePersisted(parsed);
    if (migrated) {
      const next = {
        ...migrated,
        invoices: migrated.invoices.map((inv) => ({
          ...inv,
          draft: normalizeInvoiceDraft(inv.draft)
        }))
      };
      if (parsed.version !== 3) {
        savePersisted(next);
      }
      return next;
    }
    return defaultPersisted();
  } catch {
    return defaultPersisted();
  }
}
function savePersisted(data) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
  }
}
let memory = defaultPersisted();
const listeners = /* @__PURE__ */ new Set();
function getSnapshot() {
  return memory;
}
function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
function emit() {
  listeners.forEach((l) => l());
}
function setMemory(next) {
  memory = next;
  savePersisted(next);
  emit();
}
function hydrateFromStorage() {
  memory = loadPersisted();
  emit();
}
if (typeof window !== "undefined") {
  hydrateFromStorage();
}
const InvoiceStoreContext = createContext(null);
function InvoiceStoreProvider({ children }) {
  const data = useSyncExternalStore(subscribe, getSnapshot, () => defaultPersisted());
  const getInvoice = useCallback((recordId) => data.invoices.find((i) => i.recordId === recordId), [data.invoices]);
  const getNextInvoiceNumber = useCallback(() => nextInvoiceNumber(data.invoices), [data.invoices]);
  const addClient = useCallback((client) => {
    setMemory({
      ...memory,
      clients: [...memory.clients.filter((c) => c.id !== client.id), client]
    });
  }, []);
  const addProduct = useCallback((product) => {
    const next = memory.extraProducts.filter((p) => p.id !== product.id);
    setMemory({
      ...memory,
      extraProducts: [...next, product]
    });
  }, []);
  const addBankLabel = useCallback((label) => {
    const t = label.trim();
    if (!t) return;
    setMemory({
      ...memory,
      extraBankLabels: [...memory.extraBankLabels.filter((x) => x !== t), t]
    });
  }, []);
  const addPaymentMethod = useCallback((label) => {
    const t = label.trim();
    if (!t) return;
    setMemory({
      ...memory,
      extraPaymentMethods: [...memory.extraPaymentMethods.filter((x) => x !== t), t]
    });
  }, []);
  const addTaxPreset = useCallback((preset) => {
    const label = preset.label.trim();
    if (!label) return;
    const next = memory.extraTaxPresets.filter((p) => p.label !== label);
    setMemory({
      ...memory,
      extraTaxPresets: [...next, { label, ratePct: preset.ratePct }]
    });
  }, []);
  const createFromDraft = useCallback((draft, status = "pending") => {
    const recordId = crypto.randomUUID();
    const next = { recordId, status, draft };
    setMemory({
      ...memory,
      invoices: [next, ...memory.invoices]
    });
    return recordId;
  }, []);
  const updateDraft = useCallback((recordId, draft) => {
    setMemory({
      ...memory,
      invoices: memory.invoices.map((i) => i.recordId === recordId ? { ...i, draft } : i)
    });
  }, []);
  const updateStatus = useCallback((recordId, status) => {
    setMemory({
      ...memory,
      invoices: memory.invoices.map((i) => i.recordId === recordId ? { ...i, status } : i)
    });
  }, []);
  const deleteInvoice = useCallback((recordId) => {
    setMemory({
      ...memory,
      invoices: memory.invoices.filter((i) => i.recordId !== recordId)
    });
  }, []);
  const duplicateInvoice = useCallback((recordId) => {
    const src = memory.invoices.find((i) => i.recordId === recordId);
    if (!src) return null;
    const newId = crypto.randomUUID();
    const norm = normalizeInvoiceDraft(src.draft);
    const copy = {
      recordId: newId,
      status: "draft",
      draft: {
        ...norm,
        invoiceNumber: nextInvoiceNumber(memory.invoices),
        lineItems: norm.lineItems.map((li) => ({ ...li, id: crypto.randomUUID() }))
      }
    };
    setMemory({
      ...memory,
      invoices: [copy, ...memory.invoices]
    });
    return newId;
  }, []);
  const markSent = useCallback((recordId, draft) => {
    setMemory({
      ...memory,
      invoices: memory.invoices.map(
        (i) => i.recordId === recordId ? { ...i, status: "pending", draft } : i
      )
    });
  }, []);
  const markPaid = useCallback((recordId) => {
    updateStatus(recordId, "paid");
  }, [updateStatus]);
  const resetToSeed = useCallback(() => {
    setMemory(defaultPersisted());
  }, []);
  const value = useMemo(
    () => ({
      invoices: data.invoices,
      clients: data.clients,
      extraProducts: data.extraProducts,
      extraBankLabels: data.extraBankLabels,
      extraPaymentMethods: data.extraPaymentMethods,
      extraTaxPresets: data.extraTaxPresets,
      getInvoice,
      getNextInvoiceNumber,
      createFromDraft,
      updateDraft,
      updateStatus,
      deleteInvoice,
      duplicateInvoice,
      addClient,
      addProduct,
      addBankLabel,
      addPaymentMethod,
      addTaxPreset,
      markSent,
      markPaid,
      resetToSeed
    }),
    [
      data.invoices,
      data.clients,
      data.extraProducts,
      data.extraBankLabels,
      data.extraPaymentMethods,
      data.extraTaxPresets,
      getInvoice,
      getNextInvoiceNumber,
      createFromDraft,
      updateDraft,
      updateStatus,
      deleteInvoice,
      duplicateInvoice,
      addClient,
      addProduct,
      addBankLabel,
      addPaymentMethod,
      addTaxPreset,
      markSent,
      markPaid,
      resetToSeed
    ]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(InvoiceStoreContext.Provider, { value, children });
}
function useInvoiceStore() {
  const ctx = useContext(InvoiceStoreContext);
  if (!ctx) throw new Error("useInvoiceStore must be used within InvoiceStoreProvider");
  return ctx;
}

export { ACCOUNTING_BASE_PATH as A, DUE_TERMS as D, FORM_BANK_ACCOUNTS as F, InvoiceStoreProvider as I, NEW_RECORD_ROUTE as N, ToastProvider as T, accountingPath as a, useToast as b, createLucideIcon as c, INVOICE_STATUS_TABS as d, INVOICE_PRODUCTS as e, formatUsd as f, FORM_PAYMENT_METHODS as g, FORM_TAX_TYPES as h, invoiceGrandTotal as i, FORM_INVOICE_TYPES as j, bankLabelFromFormLabel as k, normalizeInvoiceDraft as l, newEmptyLineItem as m, normalizeInvoiceListStatusParam as n, draftSubtotal as o, computeTax as p, computeTotal as q, resolveTaxRate as r, computeLineTotal as s, useInvoiceStore as u };
