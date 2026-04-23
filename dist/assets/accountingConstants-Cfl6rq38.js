import { importShared } from './__federation_fn_import-BF-AfqT6.js';
import { j as jsxRuntimeExports } from './jsx-runtime-XI9uIe3W.js';

const {createContext,useContext,useState,useCallback} = await importShared('react');

const ToastContext = createContext(null);
function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}
function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const addToast = useCallback((toast) => {
    const id = crypto.randomUUID();
    setToasts((prev) => [...prev, { ...toast, id }]);
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 4e3);
  }, []);
  const dismissToast = useCallback((id) => {
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
const BG_DOCUMENT_TYPES = [
  { id: "oferta", label: "Оферта", labelEn: "Offer", legal: false, offerCapable: true },
  { id: "proforma", label: "Проформа фактура", labelEn: "Pro-forma invoice", legal: false, offerCapable: true },
  { id: "faktura", label: "Фактура", labelEn: "Invoice", legal: true, offerCapable: false },
  { id: "kreditno-izvestie", label: "Кредитно известие", labelEn: "Credit note", legal: true, offerCapable: false },
  { id: "debitno-izvestie", label: "Дебитно известие", labelEn: "Debit note", legal: true, offerCapable: false },
  { id: "stokova-razpiska", label: "Стокова разписка", labelEn: "Goods receipt", legal: false, offerCapable: false }
];
function bgDocumentTypeById(id) {
  return BG_DOCUMENT_TYPES.find((t) => t.id === id);
}
BG_DOCUMENT_TYPES.map((t) => ({
  value: t.id,
  label: t.label,
  description: t.labelEn + (t.legal ? " · ЗДДС" : "")
}));
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

export { ACCOUNTING_BASE_PATH as A, DUE_TERMS as D, FORM_BANK_ACCOUNTS as F, INVOICE_STATUS_TABS as I, ToastProvider as T, accountingPath as a, INVOICE_PRODUCTS as b, createLucideIcon as c, FORM_PAYMENT_METHODS as d, FORM_TAX_TYPES as e, FORM_INVOICE_TYPES as f, bankLabelFromFormLabel as g, INITIAL_CLIENTS as h, bgDocumentTypeById as i, normalizeInvoiceListStatusParam as n, resolveTaxRate as r, useToast as u };
