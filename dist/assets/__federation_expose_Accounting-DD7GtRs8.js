import { importShared } from './__federation_fn_import-9X7JX3Kk.js';
import { j as jsxRuntimeExports } from './jsx-runtime-XI9uIe3W.js';
import { u as useToast, T as ToastProvider } from './ToastContext-DU0nmke5.js';

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

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$7 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$7);

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$6 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
];
const CircleAlert = createLucideIcon("circle-alert", __iconNode$6);

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$5 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode$5);

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$4 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }]
];
const Clock = createLucideIcon("clock", __iconNode$4);

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$3 = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
];
const FileText = createLucideIcon("file-text", __iconNode$3);

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$2 = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
const LoaderCircle = createLucideIcon("loader-circle", __iconNode$2);

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$1 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
const Plus = createLucideIcon("plus", __iconNode$1);

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

const {useState: useState$3,useCallback} = await importShared('react');

const {Outlet,NavLink} = await importShared('react-router-dom');

const {AssistantPanel} = await importShared('@citron-systems/citron-ui');
const CANNED_REPLIES = [
  "For this invoice, Net 30 is a solid default payment term.",
  "Double-check the tax rate matches your client jurisdiction.",
  "You can attach a PO reference in the notes before sending.",
  "Bank transfer details will appear on the PDF from your selected account."
];
function AccountingLayout() {
  const [messages, setMessages] = useState$3([]);
  const [isProcessing, setIsProcessing] = useState$3(false);
  const handleSend = useCallback((payload) => {
    const content = payload.text.trim();
    if (!content) return;
    const userMsg = { id: crypto.randomUUID(), role: "user", content };
    setMessages((prev) => [...prev, userMsg]);
    setIsProcessing(true);
    setTimeout(() => {
      const reply = CANNED_REPLIES[Math.floor(Math.random() * CANNED_REPLIES.length)];
      const assistantMsg = { id: crypto.randomUUID(), role: "assistant", content: reply };
      setMessages((prev) => [...prev, assistantMsg]);
      setIsProcessing(false);
    }, 700);
  }, []);
  const navClass = ({ isActive }) => `px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${isActive ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex min-h-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "px-8 py-4 border-b border-border flex items-center justify-between shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-citrus-lemon/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4 text-citrus-lemon" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-lg font-semibold tracking-tight text-foreground", children: "Accounting" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Invoices" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-8 py-2 border-b border-border flex gap-1 shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { to: "/", end: true, className: navClass, children: "Invoices" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(NavLink, { to: "/create", className: navClass, children: "Create" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-h-0 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AssistantPanel,
      {
        open: true,
        title: "Accounting",
        subtitle: "Assistant",
        messages,
        onSend: handleSend,
        isProcessing,
        placeholder: "Ask about invoicing...",
        emptyStateMessage: "Ask anything about invoices, taxes, or payment terms.",
        className: "h-full w-80 shrink-0 border-l border-[var(--inkblot-semantic-color-border-default)]"
      }
    )
  ] });
}

const {Link: Link$1} = await importShared('react-router-dom');
const existingInvoices = [
  { id: "INV-2026-001", client: "Acme Corp", amount: "$12,400", status: "paid", date: "Feb 10, 2026" },
  { id: "INV-2026-002", client: "TechVentures", amount: "$4,500", status: "pending", date: "Feb 18, 2026" },
  { id: "INV-2026-003", client: "DataFlow Labs", amount: "$7,800", status: "overdue", date: "Jan 28, 2026" },
  { id: "INV-2026-004", client: "GlobalTech", amount: "$22,000", status: "draft", date: "Feb 25, 2026" }
];
const statusConfig = {
  paid: { label: "Paid", icon: CircleCheck, color: "text-citrus-lime" },
  pending: { label: "Pending", icon: Clock, color: "text-citrus-lemon" },
  overdue: { label: "Overdue", icon: CircleAlert, color: "text-destructive" },
  draft: { label: "Draft", icon: FileText, color: "text-muted-foreground" }
};
function InvoicesHome() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-8 py-6 overflow-y-auto hide-scrollbar h-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Recent invoices" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link$1,
        {
          to: "/create",
          className: "flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-colors",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3 h-3" }),
            "New invoice"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-xl overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[80px_1fr_100px_80px_100px] gap-4 px-5 py-3 border-b border-border text-[10px] text-muted-foreground uppercase tracking-wider", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Invoice" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Client" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Amount" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Date" })
      ] }),
      existingInvoices.map((inv) => {
        const st = statusConfig[inv.status];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "grid grid-cols-[80px_1fr_100px_80px_100px] gap-4 px-5 py-3.5 border-b border-border/50 hover:bg-secondary/30 transition-colors items-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono text-citrus-lemon", children: inv.id }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground", children: inv.client }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-mono text-foreground", children: inv.amount }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-xs flex items-center gap-1.5 ${st.color}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(st.icon, { className: "w-3 h-3" }),
                st.label
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: inv.date })
            ]
          },
          inv.id
        );
      })
    ] })
  ] });
}

const {useState: useState$2} = await importShared('react');

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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: (next) => {
    onOpenChange(next);
    if (!next) reset();
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "New client" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "Add a client to use in invoices." })
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
            className: `${inputClass} ${attempted && !name.trim() ? errorBorder : ""}`
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
            className: `${inputClass} ${attempted && !email.trim() ? errorBorder : ""}`
          }
        ),
        attempted && !email.trim() && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-[var(--inkblot-semantic-color-status-error)]", children: "Required" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        DialogClose,
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

const {useNavigate: useNavigate$1} = await importShared('react-router-dom');

const {AdvancedDropdown} = await importShared('@citron-systems/citron-ui');
const INITIAL_CLIENTS = [
  { id: "cl-1", name: "Acme Corp", email: "billing@acme.com" },
  { id: "cl-2", name: "TechVentures", email: "ap@techventures.io" },
  { id: "cl-3", name: "DataFlow Labs", email: "finance@dataflow.dev" },
  { id: "cl-4", name: "GlobalTech", email: "invoices@globaltech.com" }
];
const PRODUCTS = [
  { value: "web-dev", label: "Web Development", description: "$150 / hr" },
  { value: "design", label: "UI/UX Design", description: "$175 / hr" },
  { value: "hosting", label: "Hosting & Infrastructure", description: "$500 flat" },
  { value: "consulting", label: "Strategy Consulting", description: "$200 / hr" },
  { value: "support", label: "Support Package", description: "$1,200 / mo" }
];
const INVOICE_TYPES = [
  { value: "standard", label: "Standard" },
  { value: "proforma", label: "Proforma" },
  { value: "credit-note", label: "Credit Note" },
  { value: "debit-note", label: "Debit Note" }
];
const PAYMENT_METHODS = [
  { value: "bank-transfer", label: "Bank Transfer" },
  { value: "credit-card", label: "Credit Card" },
  { value: "cash", label: "Cash" },
  { value: "check", label: "Check" }
];
const TAX_CONFIGS = [
  { value: "vat-21", label: "VAT 21%" },
  { value: "vat-10", label: "VAT 10%" },
  { value: "vat-0", label: "VAT 0%" },
  { value: "exempt", label: "Tax Exempt" }
];
const BANK_ACCOUNTS = [
  { value: "main", label: "Main Account", description: "****4821" },
  { value: "secondary", label: "Secondary Account", description: "****7390" }
];
const PRODUCT_RATES = {
  "web-dev": 150,
  design: 175,
  hosting: 500,
  consulting: 200,
  support: 1200
};
function findLabel(options, value) {
  if (!value) return "";
  return options.find((o) => o.value === value)?.label ?? "";
}
function taxRateFromId(id) {
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
const labelClass = "[font:var(--inkblot-semantic-typography-body-small)] font-medium text-[var(--inkblot-semantic-color-text-secondary)]";
const errorText = "text-xs text-[var(--inkblot-semantic-color-status-error)] mt-[var(--inkblot-spacing-1)]";
const quantityInputClass = [
  "min-h-[var(--inkblot-size-touch-target-min)] w-full rounded-[var(--inkblot-radius-md)]",
  "border border-[var(--inkblot-semantic-color-border-default)]",
  "bg-[var(--inkblot-semantic-color-background-primary)]",
  "px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-2)]",
  "[font:var(--inkblot-semantic-typography-body-small)]",
  "text-[var(--inkblot-semantic-color-text-primary)] placeholder:text-[var(--inkblot-semantic-color-text-tertiary)]",
  "transition-colors duration-[var(--inkblot-duration-fast)]",
  "focus:outline-none focus:ring-2 focus:ring-[var(--inkblot-semantic-color-border-focus)]"
].join(" ");
const notesClass = quantityInputClass + " resize-y";
function SmartInvoiceBuilder() {
  const { addToast } = useToast();
  const navigate = useNavigate$1();
  const [clients, setClients] = useState$1(INITIAL_CLIENTS);
  const [dialogOpen, setDialogOpen] = useState$1(false);
  const [clientId, setClientId] = useState$1(null);
  const [productId, setProductId] = useState$1(null);
  const [invoiceType, setInvoiceType] = useState$1("standard");
  const [paymentMethod, setPaymentMethod] = useState$1("bank-transfer");
  const [taxConfig, setTaxConfig] = useState$1("vat-21");
  const [bankAccount, setBankAccount] = useState$1("main");
  const [quantity, setQuantity] = useState$1(1);
  const [notes, setNotes] = useState$1("");
  const [attempted, setAttempted] = useState$1(false);
  const [submitting, setSubmitting] = useState$1(false);
  const clientOptions = clients.map((c) => ({
    value: c.id,
    label: c.name,
    description: c.email
  }));
  const handleClientCreated = (newClient) => {
    setClients((prev) => [...prev, { id: newClient.id, name: newClient.name, email: newClient.email }]);
    setClientId(newClient.id);
    setDialogOpen(false);
    addToast({ title: "Client created", description: `${newClient.name} added.`, variant: "success" });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setAttempted(true);
    if (!clientId || !productId || !quantity) return;
    const client = clients.find((c) => c.id === clientId);
    if (!client) return;
    setSubmitting(true);
    const draft = {
      invoiceNumber: `INV-${Date.now().toString(36).toUpperCase()}`,
      clientName: client.name,
      clientEmail: client.email,
      productLabel: findLabel(PRODUCTS, productId),
      quantity: Number(quantity),
      unitPrice: PRODUCT_RATES[productId] ?? 0,
      invoiceTypeLabel: findLabel(INVOICE_TYPES, invoiceType),
      paymentMethodLabel: findLabel(PAYMENT_METHODS, paymentMethod),
      taxTypeLabel: findLabel(TAX_CONFIGS, taxConfig),
      taxRatePct: taxRateFromId(taxConfig),
      bankAccountLabel: findLabel(BANK_ACCOUNTS, bankAccount),
      notes,
      dueTerms: "Net 30"
    };
    setTimeout(() => {
      setSubmitting(false);
      navigate("/editor", { state: { draft } });
    }, 300);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full overflow-y-auto hide-scrollbar px-8 py-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "form",
      {
        onSubmit: handleSubmit,
        className: "rounded-[var(--inkblot-radius-xl)] bg-[var(--inkblot-semantic-color-background-secondary)] p-[var(--inkblot-spacing-6)] max-w-4xl",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "[font:var(--inkblot-semantic-typography-heading-4)] text-[var(--inkblot-semantic-color-text-primary)] mb-[var(--inkblot-spacing-6)]", children: "New Invoice" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-[var(--inkblot-spacing-5)] md:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-[var(--inkblot-spacing-2)]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: labelClass, children: "Client" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => setDialogOpen(true),
                    className: "inline-flex items-center gap-1 text-xs text-[var(--inkblot-semantic-color-interactive-primary)] hover:underline",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3 w-3" }),
                      " Add client"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                AdvancedDropdown,
                {
                  options: clientOptions,
                  value: clientId ?? void 0,
                  onChange: (v) => setClientId(v),
                  placeholder: "Search client...",
                  clearable: true
                }
              ),
              attempted && !clientId && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: errorText, children: "Client is required" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-[var(--inkblot-spacing-2)]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: labelClass, children: "Product / Service" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                AdvancedDropdown,
                {
                  options: PRODUCTS,
                  value: productId ?? void 0,
                  onChange: (v) => setProductId(v),
                  placeholder: "Search product...",
                  clearable: true
                }
              ),
              attempted && !productId && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: errorText, children: "Product is required" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-[var(--inkblot-spacing-2)]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: labelClass, children: "Quantity" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "number",
                  min: 1,
                  value: quantity,
                  onChange: (e) => setQuantity(e.target.value === "" ? "" : Number(e.target.value)),
                  placeholder: "1",
                  className: `${quantityInputClass} ${attempted && !quantity ? "border-[var(--inkblot-semantic-color-status-error)]" : ""}`
                }
              ),
              attempted && !quantity && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: errorText, children: "Quantity is required" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-[var(--inkblot-spacing-2)]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: labelClass, children: "Invoice type" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                AdvancedDropdown,
                {
                  options: INVOICE_TYPES,
                  value: invoiceType ?? void 0,
                  onChange: (v) => setInvoiceType(v),
                  placeholder: "Select type..."
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-[var(--inkblot-spacing-2)]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: labelClass, children: "Payment method" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                AdvancedDropdown,
                {
                  options: PAYMENT_METHODS,
                  value: paymentMethod ?? void 0,
                  onChange: (v) => setPaymentMethod(v),
                  placeholder: "Select method..."
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-[var(--inkblot-spacing-2)]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: labelClass, children: "Tax configuration" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                AdvancedDropdown,
                {
                  options: TAX_CONFIGS,
                  value: taxConfig ?? void 0,
                  onChange: (v) => setTaxConfig(v),
                  placeholder: "Select tax..."
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-[var(--inkblot-spacing-2)]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: labelClass, children: "Bank account" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                AdvancedDropdown,
                {
                  options: BANK_ACCOUNTS,
                  value: bankAccount ?? void 0,
                  onChange: (v) => setBankAccount(v),
                  placeholder: "Select account..."
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-[var(--inkblot-spacing-2)] md:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: labelClass, children: "Notes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  value: notes,
                  onChange: (e) => setNotes(e.target.value),
                  rows: 3,
                  placeholder: "Additional notes or terms...",
                  className: notesClass
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-[var(--inkblot-spacing-6)] flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "submit",
              disabled: submitting,
              className: "inline-flex min-h-[var(--inkblot-size-touch-target-min)] items-center justify-center gap-[var(--inkblot-spacing-2)] rounded-[var(--inkblot-radius-lg)] bg-[var(--inkblot-semantic-color-interactive-primary)] px-[var(--inkblot-spacing-6)] py-[var(--inkblot-spacing-2)] [font:var(--inkblot-semantic-typography-body-small)] font-medium text-[var(--inkblot-semantic-color-text-inverse)] transition-colors duration-[var(--inkblot-duration-fast)] hover:bg-[var(--inkblot-semantic-color-interactive-primary-hover)] active:bg-[var(--inkblot-semantic-color-interactive-primary-active)] disabled:opacity-[var(--inkblot-opacity-disabled)] disabled:cursor-not-allowed",
              children: [
                submitting && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
                "Continue to editor"
              ]
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ClientCreateDialog, { open: dialogOpen, onOpenChange: setDialogOpen, onCreated: handleClientCreated })
  ] });
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

const {useEffect,useMemo,useState} = await importShared('react');

const {useLocation,useNavigate,Link} = await importShared('react-router-dom');

const {Button,Input,Label,Textarea} = await importShared('@citron-systems/citron-ui');
function InvoiceEditorPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToast } = useToast();
  const initial = location.state?.draft;
  const [form, setForm] = useState(initial ?? null);
  useEffect(() => {
    if (!initial) {
      navigate("/create", { replace: true });
    }
  }, [initial, navigate]);
  const update = (key, value) => {
    setForm((prev) => prev ? { ...prev, [key]: value } : prev);
  };
  const subtotal = useMemo(() => {
    if (!form) return 0;
    return computeLineTotal(form.quantity, form.unitPrice);
  }, [form]);
  const tax = useMemo(() => {
    if (!form) return 0;
    return computeTax(subtotal, form.taxRatePct);
  }, [form, subtotal]);
  const total = useMemo(() => computeTotal(subtotal, tax), [subtotal, tax]);
  const handleSend = () => {
    if (!form) return;
    addToast({
      title: "Invoice sent",
      description: `${form.invoiceNumber} sent to ${form.clientEmail}.`,
      variant: "success"
    });
    navigate("/", { replace: true });
  };
  if (!form) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full flex items-center justify-center text-sm text-muted-foreground px-8", children: "Redirecting…" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col min-h-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-8 py-3 border-b border-border flex items-center gap-4 shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/create",
          className: "inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-3 h-3" }),
            "Back"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono text-citrus-lemon", children: form.invoiceNumber })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-2 gap-6 p-8 overflow-y-auto hide-scrollbar", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-[var(--inkblot-spacing-4)] min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: "Edit details" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-[var(--inkblot-spacing-2)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "clientName", children: "Bill to" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "clientName", value: form.clientName, onChange: (e) => update("clientName", e.target.value) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-[var(--inkblot-spacing-2)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "clientEmail", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "clientEmail",
              type: "email",
              value: form.clientEmail,
              onChange: (e) => update("clientEmail", e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-[var(--inkblot-spacing-2)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "productLabel", children: "Line item" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "productLabel", value: form.productLabel, onChange: (e) => update("productLabel", e.target.value) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-[var(--inkblot-spacing-3)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-[var(--inkblot-spacing-2)]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "qty", children: "Quantity" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "qty",
                type: "number",
                min: 1,
                value: form.quantity,
                onChange: (e) => update("quantity", Number(e.target.value) || 1)
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-[var(--inkblot-spacing-2)]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "unit", children: "Unit price" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "unit",
                type: "number",
                min: 0,
                step: "0.01",
                value: form.unitPrice,
                onChange: (e) => update("unitPrice", Number(e.target.value) || 0)
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-[var(--inkblot-spacing-2)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "due", children: "Due" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "due", value: form.dueTerms, onChange: (e) => update("dueTerms", e.target.value) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-[var(--inkblot-spacing-2)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "notes", children: "Notes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              id: "notes",
              rows: 4,
              value: form.notes,
              onChange: (e) => update("notes", e.target.value),
              resize: "vertical"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", variant: "primary", className: "w-full sm:w-auto", onClick: handleSend, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4 mr-2" }),
          "Send invoice"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground mb-[var(--inkblot-spacing-3)]", children: "Preview" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-[var(--inkblot-radius-xl)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-primary)] p-[var(--inkblot-spacing-6)] shadow-[var(--inkblot-shadow-sm)]",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between gap-4 border-b border-[var(--inkblot-semantic-color-border-default)] pb-[var(--inkblot-spacing-4)]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-[var(--inkblot-semantic-color-text-tertiary)]", children: "Invoice" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-sm text-[var(--inkblot-semantic-color-status-warning)]", children: form.invoiceNumber })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right text-xs text-[var(--inkblot-semantic-color-text-tertiary)]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: form.invoiceTypeLabel }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: form.paymentMethodLabel })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-[var(--inkblot-spacing-4)] space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-[var(--inkblot-semantic-color-text-primary)]", children: form.clientName }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[var(--inkblot-semantic-color-text-tertiary)]", children: form.clientEmail })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-[var(--inkblot-semantic-color-border-default)] pt-[var(--inkblot-spacing-3)] space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--inkblot-semantic-color-text-secondary)]", children: form.productLabel }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[var(--inkblot-semantic-color-text-primary)]", children: [
                    "×",
                    form.quantity,
                    " @ $",
                    form.unitPrice
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-[var(--inkblot-semantic-color-text-tertiary)]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "Tax (",
                    form.taxTypeLabel,
                    ")"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono", children: [
                    "$",
                    tax.toLocaleString()
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-[var(--inkblot-semantic-color-text-tertiary)]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Due" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: form.dueTerms })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-[var(--inkblot-semantic-color-text-tertiary)]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Bank" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: form.bankAccountLabel })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-[var(--inkblot-semantic-color-border-default)] mt-[var(--inkblot-spacing-4)] pt-[var(--inkblot-spacing-4)] flex justify-between items-baseline", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-[var(--inkblot-semantic-color-text-primary)]", children: "Total" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lg font-mono text-[var(--inkblot-semantic-color-status-success)]", children: [
                  "$",
                  total.toLocaleString()
                ] })
              ] }),
              form.notes.trim() && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-[var(--inkblot-spacing-4)] text-xs text-[var(--inkblot-semantic-color-text-tertiary)] border-t border-[var(--inkblot-semantic-color-border-default)] pt-[var(--inkblot-spacing-3)]", children: form.notes })
            ]
          }
        )
      ] })
    ] })
  ] });
}

const {Routes,Route} = await importShared('react-router-dom');
const {Toaster} = await importShared('@citron-systems/citron-ui');
function AccountingWithToaster() {
  const { toasts, dismissToast } = useToast();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Routes, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Route, { element: /* @__PURE__ */ jsxRuntimeExports.jsx(AccountingLayout, {}), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { index: true, element: /* @__PURE__ */ jsxRuntimeExports.jsx(InvoicesHome, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "create", element: /* @__PURE__ */ jsxRuntimeExports.jsx(SmartInvoiceBuilder, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "editor", element: /* @__PURE__ */ jsxRuntimeExports.jsx(InvoiceEditorPage, {}) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Toaster,
      {
        toasts,
        position: "bottom-right",
        onDismiss: dismissToast,
        className: "fixed bottom-4 right-4 z-[100]"
      }
    )
  ] });
}
function AccountingWithProvider() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ToastProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AccountingWithToaster, {}) });
}

export { AccountingWithProvider as default };
