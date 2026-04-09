import { importShared } from './__federation_fn_import-C5s8tYjS.js';
import { j as jsxRuntimeExports } from './jsx-runtime-XI9uIe3W.js';
import { u as useToast, T as ToastProvider } from './ToastContext-CLdPWBem.js';

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


const __iconNode$c = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$c);

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$b = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
];
const CircleAlert = createLucideIcon("circle-alert", __iconNode$b);

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$a = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode$a);

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$9 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }]
];
const Clock = createLucideIcon("clock", __iconNode$9);

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$8 = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
];
const Download = createLucideIcon("download", __iconNode$8);

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$7 = [
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
const FileText = createLucideIcon("file-text", __iconNode$7);

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$6 = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
const LoaderCircle = createLucideIcon("loader-circle", __iconNode$6);

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$5 = [["path", { d: "M5 12h14", key: "1ays0h" }]];
const Minus = createLucideIcon("minus", __iconNode$5);

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$4 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
const Plus = createLucideIcon("plus", __iconNode$4);

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
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode$3);

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$2 = [
  [
    "path",
    {
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
      key: "1s2grr"
    }
  ],
  ["path", { d: "M20 2v4", key: "1rf3ol" }],
  ["path", { d: "M22 4h-4", key: "gwowj6" }],
  ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
];
const Sparkles = createLucideIcon("sparkles", __iconNode$2);

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$1 = [
  ["path", { d: "M16 17h6v-6", key: "t6n2it" }],
  ["path", { d: "m22 17-8.5-8.5-5 5L2 7", key: "x473p" }]
];
const TrendingDown = createLucideIcon("trending-down", __iconNode$1);

/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode = [
  ["path", { d: "M16 7h6v6", key: "box55l" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
];
const TrendingUp = createLucideIcon("trending-up", __iconNode);

const {CircularScore} = await importShared('@citron-systems/citron-ui');
const {useState} = await importShared('react');
const wizardSteps = [
  { id: "client", question: "Who is this invoice for?", placeholder: "e.g. Acme Corporation", field: "clientName" },
  { id: "client_email", question: "Client's email address?", placeholder: "e.g. billing@acme.com", field: "clientEmail" },
  { id: "items", question: "Describe the services or products to invoice", placeholder: "e.g. Web development — 40 hours at $150/hr", field: "itemsDescription", multiline: true },
  { id: "due", question: "When is payment due?", placeholder: "e.g. Net 30, March 15 2026", field: "dueDate" },
  { id: "notes", question: "Any additional notes or terms?", placeholder: "e.g. Late payment fee 1.5%/month", field: "notes", multiline: true }
];
const existingInvoices = [
  { id: "INV-2026-001", client: "Acme Corp", amount: "$12,400", status: "paid", date: "Feb 10, 2026" },
  { id: "INV-2026-002", client: "TechVentures", amount: "$4,500", status: "pending", date: "Feb 18, 2026" },
  { id: "INV-2026-003", client: "DataFlow Labs", amount: "$7,800", status: "overdue", date: "Jan 28, 2026" },
  { id: "INV-2026-004", client: "GlobalTech", amount: "$22,000", status: "draft", date: "Feb 25, 2026" }
];
const deals = [
  { name: "Acme Corp - Enterprise", value: "$120,000", stage: "Closing", confidence: 82, trend: "up" },
  { name: "TechVentures - Pro", value: "$45,000", stage: "Negotiation", confidence: 65, trend: "up" },
  { name: "DataFlow Labs", value: "$78,000", stage: "Discovery", confidence: 45, trend: "flat" },
  { name: "GlobalTech Inc", value: "$200,000", stage: "Proposal", confidence: 38, trend: "down" },
  { name: "StartupXYZ", value: "$15,000", stage: "Closing", confidence: 91, trend: "up" }
];
const statusConfig = {
  paid: { label: "Paid", icon: CircleCheck, color: "text-citrus-lime" },
  pending: { label: "Pending", icon: Clock, color: "text-citrus-lemon" },
  overdue: { label: "Overdue", icon: CircleAlert, color: "text-destructive" },
  draft: { label: "Draft", icon: FileText, color: "text-muted-foreground" }
};
function TrendIcon({ trend }) {
  if (trend === "up") return /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-3 h-3 text-citrus-lime" });
  if (trend === "down") return /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "w-3 h-3 text-destructive" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "w-3 h-3 text-muted-foreground" });
}
function AccountingPage() {
  const [activeTab, setActiveTab] = useState("invoices");
  const [wizardStep, setWizardStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [generating, setGenerating] = useState(false);
  const [generatedInvoice, setGeneratedInvoice] = useState(null);
  const { addToast } = useToast();
  const currentStep = wizardSteps[wizardStep];
  const handleExportPDF = () => addToast({ title: "PDF exported", description: "Your invoice has been downloaded.", variant: "success" });
  const handleSendToClient = () => addToast({ title: "Invoice sent", description: "The invoice has been sent to the client.", variant: "success" });
  const currentValue = formData[currentStep?.field ?? ""] ?? "";
  const handleNext = () => {
    if (wizardStep < wizardSteps.length - 1) {
      setWizardStep((s) => s + 1);
    } else {
      setGenerating(true);
      setTimeout(() => {
        const invoice = {
          clientName: formData.clientName || "Client",
          clientEmail: formData.clientEmail || "",
          dueDate: formData.dueDate || "Net 30",
          notes: formData.notes || "",
          invoiceNumber: `INV-2026-${String(Math.floor(Math.random() * 900) + 100)}`,
          items: [
            { description: "Web Development Services", qty: 40, rate: 150, amount: 6e3 },
            { description: "Hosting & Infrastructure Setup", qty: 1, rate: 500, amount: 500 },
            { description: "UI/UX Design Consultation", qty: 8, rate: 175, amount: 1400 }
          ],
          subtotal: 7900,
          tax: 790,
          total: 8690
        };
        setGeneratedInvoice(invoice);
        setGenerating(false);
      }, 2e3);
    }
  };
  const resetWizard = () => {
    setWizardStep(0);
    setFormData({});
    setGeneratedInvoice(null);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "px-8 py-5 border-b border-border flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-citrus-lemon/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4 text-citrus-lemon" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-lg font-semibold tracking-tight text-foreground", children: "Accounting" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Invoices & deals · AI invoicing" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => {
            setActiveTab("create");
            resetWizard();
          },
          className: "flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-colors",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3 h-3" }),
            "New Invoice"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-8 py-3 border-b border-border flex gap-1", children: ["invoices", "deals", "create"].map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => {
          setActiveTab(tab);
          if (tab === "create") resetWizard();
        },
        className: `px-3 py-1.5 rounded-md text-xs font-medium transition-colors capitalize ${activeTab === tab ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"}`,
        children: tab === "create" ? "AI Create" : tab === "deals" ? "Deals Pipeline" : "Invoices"
      },
      tab
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto hide-scrollbar px-8 py-6", children: [
      activeTab === "invoices" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-8", children: [
          { label: "Total Revenue", value: "$46.7K", sub: "This month" },
          { label: "Outstanding", value: "$12.3K", sub: "3 invoices" },
          { label: "Overdue", value: "$7.8K", sub: "1 invoice" },
          { label: "Avg. Payment", value: "12d", sub: "-2d vs prior" }
        ].map((kpi) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-xl p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground uppercase tracking-wider", children: kpi.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-semibold text-foreground mt-1", children: kpi.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-citrus-lime", children: kpi.sub })
        ] }, kpi.label)) }),
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
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[80px_1fr_100px_80px_100px] gap-4 px-5 py-3.5 border-b border-border/50 hover:bg-secondary/30 transition-colors items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono text-citrus-lemon", children: inv.id }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground", children: inv.client }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-mono text-foreground", children: inv.amount }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-xs flex items-center gap-1.5 ${st.color}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(st.icon, { className: "w-3 h-3" }),
                st.label
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: inv.date })
            ] }, inv.id);
          })
        ] })
      ] }),
      activeTab === "deals" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-8", children: [
          { label: "Pipeline Value", value: "$458K", sub: "+12% MoM" },
          { label: "Avg. Deal Size", value: "$91.6K", sub: "5 active" },
          { label: "Win Rate", value: "68%", sub: "Last 90 days" },
          { label: "Avg. Cycle", value: "34d", sub: "-3d vs prior" }
        ].map((kpi) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-xl p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground uppercase tracking-wider", children: kpi.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-semibold text-foreground mt-1", children: kpi.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-citrus-lime", children: kpi.sub })
        ] }, kpi.label)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[1fr_100px_120px_80px_40px] gap-4 px-5 py-3 border-b border-border text-[10px] text-muted-foreground uppercase tracking-wider", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Deal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Value" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Stage" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Score" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", {})
          ] }),
          deals.map((deal) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[1fr_100px_120px_80px_40px] gap-4 px-5 py-3.5 border-b border-border/50 hover:bg-secondary/30 transition-colors items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground", children: deal.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-mono text-foreground", children: deal.value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: deal.stage }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CircularScore,
              {
                label: "",
                value: deal.confidence,
                color: deal.confidence >= 70 ? "var(--inkblot-dark-color-status-success)" : deal.confidence >= 50 ? "var(--inkblot-dark-color-status-warning)" : "var(--inkblot-color-accent-citron-600)",
                size: 32
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendIcon, { trend: deal.trend })
          ] }, deal.name))
        ] })
      ] }),
      activeTab === "create" && !generatedInvoice && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-lg mx-auto py-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5 text-citrus-lemon" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-foreground", children: "AI Invoice Wizard" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-auto text-[10px] text-muted-foreground", children: [
            "Step ",
            wizardStep + 1,
            " of ",
            wizardSteps.length
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 mb-8", children: wizardSteps.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `h-1 flex-1 rounded-full transition-colors ${i <= wizardStep ? "bg-citrus-lemon" : "bg-surface-3"}`
          },
          i
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium text-foreground", children: currentStep?.question }),
          currentStep?.multiline ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              value: currentValue,
              onChange: (e) => setFormData((d) => ({ ...d, [currentStep.field]: e.target.value })),
              placeholder: currentStep.placeholder,
              rows: 4,
              className: "w-full bg-surface-1 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: currentValue,
              onChange: (e) => setFormData((d) => ({ ...d, [currentStep.field]: e.target.value })),
              placeholder: currentStep?.placeholder,
              className: "w-full bg-surface-1 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
              onKeyDown: (e) => e.key === "Enter" && currentValue.trim() && handleNext()
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-2", children: [
            wizardStep > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setWizardStep((s) => s - 1),
                className: "px-4 py-2 rounded-lg border border-border text-xs text-muted-foreground hover:bg-secondary/30 transition-colors",
                children: "Back"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: handleNext,
                disabled: !currentValue.trim() && wizardStep < wizardSteps.length - 1,
                className: "flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-colors disabled:opacity-40",
                children: wizardStep === wizardSteps.length - 1 ? generating ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-3 h-3 animate-spin" }),
                  "Generating…"
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3" }),
                  "Generate Invoice"
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  "Next",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3" })
                ] })
              }
            )
          ] })
        ] })
      ] }),
      activeTab === "create" && generatedInvoice && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto py-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-citrus-lime" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground", children: "Invoice Generated" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleExportPDF, className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary text-xs text-foreground hover:bg-secondary/80 transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3 h-3" }),
              "Export PDF"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleSendToClient, className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-3 h-3" }),
              "Send to Client"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-xl p-8 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-foreground", children: "INVOICE" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-mono text-citrus-lemon mt-1", children: generatedInvoice.invoiceNumber })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "Your Company" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "hello@company.com" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-4 grid grid-cols-2 gap-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground uppercase tracking-wider", children: "Bill To" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground mt-1", children: generatedInvoice.clientName }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: generatedInvoice.clientEmail })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground uppercase tracking-wider", children: "Due Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground mt-1", children: generatedInvoice.dueDate })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[1fr_60px_80px_80px] gap-4 pb-2 text-[10px] text-muted-foreground uppercase tracking-wider", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Description" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Qty" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Rate" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-right", children: "Amount" })
            ] }),
            generatedInvoice.items.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[1fr_60px_80px_80px] gap-4 py-2.5 border-t border-border/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground", children: item.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-mono text-foreground", children: item.qty }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-mono text-foreground", children: [
                "$",
                item.rate
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-mono text-foreground text-right", children: [
                "$",
                item.amount.toLocaleString()
              ] })
            ] }, i))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border pt-4 flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-48 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Subtotal" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-foreground", children: [
                "$",
                generatedInvoice.subtotal.toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Tax (10%)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-foreground", children: [
                "$",
                generatedInvoice.tax.toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm font-bold border-t border-border pt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Total" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-citrus-lime", children: [
                "$",
                generatedInvoice.total.toLocaleString()
              ] })
            ] })
          ] }) }),
          generatedInvoice.notes && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground uppercase tracking-wider", children: "Notes" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: generatedInvoice.notes })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: resetWizard, className: "mt-4 text-xs text-muted-foreground hover:text-foreground transition-colors", children: "← Create another invoice" })
      ] })
    ] })
  ] });
}

const {Toaster} = await importShared('@citron-systems/citron-ui');
function AccountingWithToaster() {
  const { toasts, dismissToast } = useToast();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AccountingPage, {}),
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
