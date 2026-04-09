import { importShared } from '../__federation_fn_import-9X7JX3Kk.js';
import { j as jsxRuntimeExports } from '../jsx-runtime-XI9uIe3W.js';
import { r as requireReact } from '../index-DhJIKhB5.js';

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();

/**
 * @license lucide-react v0.460.0 - ISC
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
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const {forwardRef: forwardRef$2,createElement: createElement$2} = await importShared('react');

const Icon = forwardRef$2(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => {
    return createElement$2(
      "svg",
      {
        ref,
        ...defaultAttributes,
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: mergeClasses("lucide", className),
        ...rest
      },
      [
        ...iconNode.map(([tag, attrs]) => createElement$2(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    );
  }
);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const {forwardRef: forwardRef$1,createElement: createElement$1} = await importShared('react');

const createLucideIcon = (iconName, iconNode) => {
  const Component = forwardRef$1(
    ({ className, ...props }, ref) => createElement$1(Icon, {
      ref,
      iconNode,
      className: mergeClasses(`lucide-${toKebabCase(iconName)}`, className),
      ...props
    })
  );
  Component.displayName = `${iconName}`;
  return Component;
};

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Activity = createLucideIcon("Activity", [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse"
    }
  ]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const ArrowDown = createLucideIcon("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const ArrowLeft = createLucideIcon("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const ArrowRight = createLucideIcon("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const ArrowUpDown = createLucideIcon("ArrowUpDown", [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const ArrowUpRight = createLucideIcon("ArrowUpRight", [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const ArrowUp = createLucideIcon("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const BadgeCheck = createLucideIcon("BadgeCheck", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Brain = createLucideIcon("Brain", [
  [
    "path",
    {
      d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
      key: "l5xja"
    }
  ],
  [
    "path",
    {
      d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
      key: "ep3f8r"
    }
  ],
  ["path", { d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4", key: "1p4c4q" }],
  ["path", { d: "M17.599 6.5a3 3 0 0 0 .399-1.375", key: "tmeiqw" }],
  ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5", key: "105sqy" }],
  ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396", key: "ql3yin" }],
  ["path", { d: "M19.938 10.5a4 4 0 0 1 .585.396", key: "1qfode" }],
  ["path", { d: "M6 18a4 4 0 0 1-1.967-.516", key: "2e4loj" }],
  ["path", { d: "M19.967 17.484A4 4 0 0 1 18 18", key: "159ez6" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Briefcase = createLucideIcon("Briefcase", [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Building2 = createLucideIcon("Building2", [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Calendar = createLucideIcon("Calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const ChartColumn = createLucideIcon("ChartColumn", [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Check = createLucideIcon("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const ChevronDown = createLucideIcon("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const ChevronLeft = createLucideIcon("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const ChevronRight = createLucideIcon("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const ChevronUp = createLucideIcon("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const CircleAlert = createLucideIcon("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const CircleCheckBig = createLucideIcon("CircleCheckBig", [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const CircleCheck = createLucideIcon("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const CircleDot = createLucideIcon("CircleDot", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const CircleX = createLucideIcon("CircleX", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const ClipboardList = createLucideIcon("ClipboardList", [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ],
  ["path", { d: "M12 11h4", key: "1jrz19" }],
  ["path", { d: "M12 16h4", key: "n85exb" }],
  ["path", { d: "M8 11h.01", key: "1dfujw" }],
  ["path", { d: "M8 16h.01", key: "18s6g9" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Clock3 = createLucideIcon("Clock3", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16.5 12", key: "1aq6pp" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Clock = createLucideIcon("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Columns2 = createLucideIcon("Columns2", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M12 3v18", key: "108xh3" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Command = createLucideIcon("Command", [
  [
    "path",
    { d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3", key: "11bfej" }
  ]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const CreditCard = createLucideIcon("CreditCard", [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const FileText = createLucideIcon("FileText", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const File = createLucideIcon("File", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const GitBranch = createLucideIcon("GitBranch", [
  ["line", { x1: "6", x2: "6", y1: "3", y2: "15", key: "17qcm7" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["path", { d: "M18 9a9 9 0 0 1-9 9", key: "n2h4wq" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Globe = createLucideIcon("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const GripHorizontal = createLucideIcon("GripHorizontal", [
  ["circle", { cx: "12", cy: "9", r: "1", key: "124mty" }],
  ["circle", { cx: "19", cy: "9", r: "1", key: "1ruzo2" }],
  ["circle", { cx: "5", cy: "9", r: "1", key: "1a8b28" }],
  ["circle", { cx: "12", cy: "15", r: "1", key: "1e56xg" }],
  ["circle", { cx: "19", cy: "15", r: "1", key: "1a92ep" }],
  ["circle", { cx: "5", cy: "15", r: "1", key: "5r1jwy" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const GripVertical = createLucideIcon("GripVertical", [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Image = createLucideIcon("Image", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Info = createLucideIcon("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const LayoutGrid = createLucideIcon("LayoutGrid", [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Link2 = createLucideIcon("Link2", [
  ["path", { d: "M9 17H7A5 5 0 0 1 7 7h2", key: "8i5ue5" }],
  ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2", key: "1b9ql8" }],
  ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const List = createLucideIcon("List", [
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 18h.01", key: "1tta3j" }],
  ["path", { d: "M3 6h.01", key: "1rqtza" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 18h13", key: "1lx6n3" }],
  ["path", { d: "M8 6h13", key: "ik3vkj" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const LoaderCircle = createLucideIcon("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Mail = createLucideIcon("Mail", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Megaphone = createLucideIcon("Megaphone", [
  ["path", { d: "m3 11 18-5v12L3 14v-3z", key: "n962bs" }],
  ["path", { d: "M11.6 16.8a3 3 0 1 1-5.8-1.6", key: "1yl0tm" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const MessageSquare = createLucideIcon("MessageSquare", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Minus = createLucideIcon("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Moon = createLucideIcon("Moon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const MousePointerClick = createLucideIcon("MousePointerClick", [
  ["path", { d: "M14 4.1 12 6", key: "ita8i4" }],
  ["path", { d: "m5.1 8-2.9-.8", key: "1go3kf" }],
  ["path", { d: "m6 12-1.9 2", key: "mnht97" }],
  ["path", { d: "M7.2 2.2 8 5.1", key: "1cfko1" }],
  [
    "path",
    {
      d: "M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z",
      key: "s0h3yz"
    }
  ]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Network = createLucideIcon("Network", [
  ["rect", { x: "16", y: "16", width: "6", height: "6", rx: "1", key: "4q2zg0" }],
  ["rect", { x: "2", y: "16", width: "6", height: "6", rx: "1", key: "8cvhb9" }],
  ["rect", { x: "9", y: "2", width: "6", height: "6", rx: "1", key: "1egb70" }],
  ["path", { d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3", key: "1jsf9p" }],
  ["path", { d: "M12 12V8", key: "2874zd" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const PanelLeftClose = createLucideIcon("PanelLeftClose", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "m16 15-3-3 3-3", key: "14y99z" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const PanelLeftOpen = createLucideIcon("PanelLeftOpen", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "m14 9 3 3-3 3", key: "8010ee" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Paperclip = createLucideIcon("Paperclip", [
  [
    "path",
    {
      d: "m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",
      key: "1u3ebp"
    }
  ]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Phone = createLucideIcon("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Plus = createLucideIcon("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Search = createLucideIcon("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Send = createLucideIcon("Send", [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Settings = createLucideIcon("Settings", [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Sparkles = createLucideIcon("Sparkles", [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const SquareCheckBig = createLucideIcon("SquareCheckBig", [
  ["path", { d: "M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5", key: "1uzm8b" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Square = createLucideIcon("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Sun = createLucideIcon("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Target = createLucideIcon("Target", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Trash2 = createLucideIcon("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const TrendingDown = createLucideIcon("TrendingDown", [
  ["polyline", { points: "22 17 13.5 8.5 8.5 13.5 2 7", key: "1r2t7k" }],
  ["polyline", { points: "16 17 22 17 22 11", key: "11uiuu" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const TrendingUp = createLucideIcon("TrendingUp", [
  ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
  ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const TriangleAlert = createLucideIcon("TriangleAlert", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Type = createLucideIcon("Type", [
  ["polyline", { points: "4 7 4 4 20 4 20 7", key: "1nosan" }],
  ["line", { x1: "9", x2: "15", y1: "20", y2: "20", key: "swin9y" }],
  ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const UserRound = createLucideIcon("UserRound", [
  ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
  ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const User = createLucideIcon("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Users = createLucideIcon("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const X = createLucideIcon("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Zap = createLucideIcon("Zap", [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
]);

function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

/**
 * Concatenates two arrays faster than the array spread operator.
 */
const concatArrays = (array1, array2) => {
  // Pre-allocate for better V8 optimization
  const combinedArray = new Array(array1.length + array2.length);
  for (let i = 0; i < array1.length; i++) {
    combinedArray[i] = array1[i];
  }
  for (let i = 0; i < array2.length; i++) {
    combinedArray[array1.length + i] = array2[i];
  }
  return combinedArray;
};

// Factory function ensures consistent object shapes
const createClassValidatorObject = (classGroupId, validator) => ({
  classGroupId,
  validator
});
// Factory ensures consistent ClassPartObject shape
const createClassPartObject = (nextPart = new Map(), validators = null, classGroupId) => ({
  nextPart,
  validators,
  classGroupId
});
const CLASS_PART_SEPARATOR = '-';
const EMPTY_CONFLICTS = [];
// I use two dots here because one dot is used as prefix for class groups in plugins
const ARBITRARY_PROPERTY_PREFIX = 'arbitrary..';
const createClassGroupUtils = config => {
  const classMap = createClassMap(config);
  const {
    conflictingClassGroups,
    conflictingClassGroupModifiers
  } = config;
  const getClassGroupId = className => {
    if (className.startsWith('[') && className.endsWith(']')) {
      return getGroupIdForArbitraryProperty(className);
    }
    const classParts = className.split(CLASS_PART_SEPARATOR);
    // Classes like `-inset-1` produce an empty string as first classPart. We assume that classes for negative values are used correctly and skip it.
    const startIndex = classParts[0] === '' && classParts.length > 1 ? 1 : 0;
    return getGroupRecursive(classParts, startIndex, classMap);
  };
  const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier) => {
    if (hasPostfixModifier) {
      const modifierConflicts = conflictingClassGroupModifiers[classGroupId];
      const baseConflicts = conflictingClassGroups[classGroupId];
      if (modifierConflicts) {
        if (baseConflicts) {
          // Merge base conflicts with modifier conflicts
          return concatArrays(baseConflicts, modifierConflicts);
        }
        // Only modifier conflicts
        return modifierConflicts;
      }
      // Fall back to without postfix if no modifier conflicts
      return baseConflicts || EMPTY_CONFLICTS;
    }
    return conflictingClassGroups[classGroupId] || EMPTY_CONFLICTS;
  };
  return {
    getClassGroupId,
    getConflictingClassGroupIds
  };
};
const getGroupRecursive = (classParts, startIndex, classPartObject) => {
  const classPathsLength = classParts.length - startIndex;
  if (classPathsLength === 0) {
    return classPartObject.classGroupId;
  }
  const currentClassPart = classParts[startIndex];
  const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
  if (nextClassPartObject) {
    const result = getGroupRecursive(classParts, startIndex + 1, nextClassPartObject);
    if (result) return result;
  }
  const validators = classPartObject.validators;
  if (validators === null) {
    return undefined;
  }
  // Build classRest string efficiently by joining from startIndex onwards
  const classRest = startIndex === 0 ? classParts.join(CLASS_PART_SEPARATOR) : classParts.slice(startIndex).join(CLASS_PART_SEPARATOR);
  const validatorsLength = validators.length;
  for (let i = 0; i < validatorsLength; i++) {
    const validatorObj = validators[i];
    if (validatorObj.validator(classRest)) {
      return validatorObj.classGroupId;
    }
  }
  return undefined;
};
/**
 * Get the class group ID for an arbitrary property.
 *
 * @param className - The class name to get the group ID for. Is expected to be string starting with `[` and ending with `]`.
 */
const getGroupIdForArbitraryProperty = className => className.slice(1, -1).indexOf(':') === -1 ? undefined : (() => {
  const content = className.slice(1, -1);
  const colonIndex = content.indexOf(':');
  const property = content.slice(0, colonIndex);
  return property ? ARBITRARY_PROPERTY_PREFIX + property : undefined;
})();
/**
 * Exported for testing only
 */
const createClassMap = config => {
  const {
    theme,
    classGroups
  } = config;
  return processClassGroups(classGroups, theme);
};
// Split into separate functions to maintain monomorphic call sites
const processClassGroups = (classGroups, theme) => {
  const classMap = createClassPartObject();
  for (const classGroupId in classGroups) {
    const group = classGroups[classGroupId];
    processClassesRecursively(group, classMap, classGroupId, theme);
  }
  return classMap;
};
const processClassesRecursively = (classGroup, classPartObject, classGroupId, theme) => {
  const len = classGroup.length;
  for (let i = 0; i < len; i++) {
    const classDefinition = classGroup[i];
    processClassDefinition(classDefinition, classPartObject, classGroupId, theme);
  }
};
// Split into separate functions for each type to maintain monomorphic call sites
const processClassDefinition = (classDefinition, classPartObject, classGroupId, theme) => {
  if (typeof classDefinition === 'string') {
    processStringDefinition(classDefinition, classPartObject, classGroupId);
    return;
  }
  if (typeof classDefinition === 'function') {
    processFunctionDefinition(classDefinition, classPartObject, classGroupId, theme);
    return;
  }
  processObjectDefinition(classDefinition, classPartObject, classGroupId, theme);
};
const processStringDefinition = (classDefinition, classPartObject, classGroupId) => {
  const classPartObjectToEdit = classDefinition === '' ? classPartObject : getPart(classPartObject, classDefinition);
  classPartObjectToEdit.classGroupId = classGroupId;
};
const processFunctionDefinition = (classDefinition, classPartObject, classGroupId, theme) => {
  if (isThemeGetter(classDefinition)) {
    processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
    return;
  }
  if (classPartObject.validators === null) {
    classPartObject.validators = [];
  }
  classPartObject.validators.push(createClassValidatorObject(classGroupId, classDefinition));
};
const processObjectDefinition = (classDefinition, classPartObject, classGroupId, theme) => {
  const entries = Object.entries(classDefinition);
  const len = entries.length;
  for (let i = 0; i < len; i++) {
    const [key, value] = entries[i];
    processClassesRecursively(value, getPart(classPartObject, key), classGroupId, theme);
  }
};
const getPart = (classPartObject, path) => {
  let current = classPartObject;
  const parts = path.split(CLASS_PART_SEPARATOR);
  const len = parts.length;
  for (let i = 0; i < len; i++) {
    const part = parts[i];
    let next = current.nextPart.get(part);
    if (!next) {
      next = createClassPartObject();
      current.nextPart.set(part, next);
    }
    current = next;
  }
  return current;
};
// Type guard maintains monomorphic check
const isThemeGetter = func => 'isThemeGetter' in func && func.isThemeGetter === true;

// LRU cache implementation using plain objects for simplicity
const createLruCache = maxCacheSize => {
  if (maxCacheSize < 1) {
    return {
      get: () => undefined,
      set: () => {}
    };
  }
  let cacheSize = 0;
  let cache = Object.create(null);
  let previousCache = Object.create(null);
  const update = (key, value) => {
    cache[key] = value;
    cacheSize++;
    if (cacheSize > maxCacheSize) {
      cacheSize = 0;
      previousCache = cache;
      cache = Object.create(null);
    }
  };
  return {
    get(key) {
      let value = cache[key];
      if (value !== undefined) {
        return value;
      }
      if ((value = previousCache[key]) !== undefined) {
        update(key, value);
        return value;
      }
    },
    set(key, value) {
      if (key in cache) {
        cache[key] = value;
      } else {
        update(key, value);
      }
    }
  };
};
const IMPORTANT_MODIFIER = '!';
const MODIFIER_SEPARATOR = ':';
const EMPTY_MODIFIERS = [];
// Pre-allocated result object shape for consistency
const createResultObject = (modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition, isExternal) => ({
  modifiers,
  hasImportantModifier,
  baseClassName,
  maybePostfixModifierPosition,
  isExternal
});
const createParseClassName = config => {
  const {
    prefix,
    experimentalParseClassName
  } = config;
  /**
   * Parse class name into parts.
   *
   * Inspired by `splitAtTopLevelOnly` used in Tailwind CSS
   * @see https://github.com/tailwindlabs/tailwindcss/blob/v3.2.2/src/util/splitAtTopLevelOnly.js
   */
  let parseClassName = className => {
    // Use simple array with push for better performance
    const modifiers = [];
    let bracketDepth = 0;
    let parenDepth = 0;
    let modifierStart = 0;
    let postfixModifierPosition;
    const len = className.length;
    for (let index = 0; index < len; index++) {
      const currentCharacter = className[index];
      if (bracketDepth === 0 && parenDepth === 0) {
        if (currentCharacter === MODIFIER_SEPARATOR) {
          modifiers.push(className.slice(modifierStart, index));
          modifierStart = index + 1;
          continue;
        }
        if (currentCharacter === '/') {
          postfixModifierPosition = index;
          continue;
        }
      }
      if (currentCharacter === '[') bracketDepth++;else if (currentCharacter === ']') bracketDepth--;else if (currentCharacter === '(') parenDepth++;else if (currentCharacter === ')') parenDepth--;
    }
    const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.slice(modifierStart);
    // Inline important modifier check
    let baseClassName = baseClassNameWithImportantModifier;
    let hasImportantModifier = false;
    if (baseClassNameWithImportantModifier.endsWith(IMPORTANT_MODIFIER)) {
      baseClassName = baseClassNameWithImportantModifier.slice(0, -1);
      hasImportantModifier = true;
    } else if (
    /**
     * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
     * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
     */
    baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER)) {
      baseClassName = baseClassNameWithImportantModifier.slice(1);
      hasImportantModifier = true;
    }
    const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : undefined;
    return createResultObject(modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition);
  };
  if (prefix) {
    const fullPrefix = prefix + MODIFIER_SEPARATOR;
    const parseClassNameOriginal = parseClassName;
    parseClassName = className => className.startsWith(fullPrefix) ? parseClassNameOriginal(className.slice(fullPrefix.length)) : createResultObject(EMPTY_MODIFIERS, false, className, undefined, true);
  }
  if (experimentalParseClassName) {
    const parseClassNameOriginal = parseClassName;
    parseClassName = className => experimentalParseClassName({
      className,
      parseClassName: parseClassNameOriginal
    });
  }
  return parseClassName;
};

/**
 * Sorts modifiers according to following schema:
 * - Predefined modifiers are sorted alphabetically
 * - When an arbitrary variant appears, it must be preserved which modifiers are before and after it
 */
const createSortModifiers = config => {
  // Pre-compute weights for all known modifiers for O(1) comparison
  const modifierWeights = new Map();
  // Assign weights to sensitive modifiers (highest priority, but preserve order)
  config.orderSensitiveModifiers.forEach((mod, index) => {
    modifierWeights.set(mod, 1000000 + index); // High weights for sensitive mods
  });
  return modifiers => {
    const result = [];
    let currentSegment = [];
    // Process modifiers in one pass
    for (let i = 0; i < modifiers.length; i++) {
      const modifier = modifiers[i];
      // Check if modifier is sensitive (starts with '[' or in orderSensitiveModifiers)
      const isArbitrary = modifier[0] === '[';
      const isOrderSensitive = modifierWeights.has(modifier);
      if (isArbitrary || isOrderSensitive) {
        // Sort and flush current segment alphabetically
        if (currentSegment.length > 0) {
          currentSegment.sort();
          result.push(...currentSegment);
          currentSegment = [];
        }
        result.push(modifier);
      } else {
        // Regular modifier - add to current segment for batch sorting
        currentSegment.push(modifier);
      }
    }
    // Sort and add any remaining segment items
    if (currentSegment.length > 0) {
      currentSegment.sort();
      result.push(...currentSegment);
    }
    return result;
  };
};
const createConfigUtils = config => ({
  cache: createLruCache(config.cacheSize),
  parseClassName: createParseClassName(config),
  sortModifiers: createSortModifiers(config),
  ...createClassGroupUtils(config)
});
const SPLIT_CLASSES_REGEX = /\s+/;
const mergeClassList = (classList, configUtils) => {
  const {
    parseClassName,
    getClassGroupId,
    getConflictingClassGroupIds,
    sortModifiers
  } = configUtils;
  /**
   * Set of classGroupIds in following format:
   * `{importantModifier}{variantModifiers}{classGroupId}`
   * @example 'float'
   * @example 'hover:focus:bg-color'
   * @example 'md:!pr'
   */
  const classGroupsInConflict = [];
  const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
  let result = '';
  for (let index = classNames.length - 1; index >= 0; index -= 1) {
    const originalClassName = classNames[index];
    const {
      isExternal,
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    } = parseClassName(originalClassName);
    if (isExternal) {
      result = originalClassName + (result.length > 0 ? ' ' + result : result);
      continue;
    }
    let hasPostfixModifier = !!maybePostfixModifierPosition;
    let classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
    if (!classGroupId) {
      if (!hasPostfixModifier) {
        // Not a Tailwind class
        result = originalClassName + (result.length > 0 ? ' ' + result : result);
        continue;
      }
      classGroupId = getClassGroupId(baseClassName);
      if (!classGroupId) {
        // Not a Tailwind class
        result = originalClassName + (result.length > 0 ? ' ' + result : result);
        continue;
      }
      hasPostfixModifier = false;
    }
    // Fast path: skip sorting for empty or single modifier
    const variantModifier = modifiers.length === 0 ? '' : modifiers.length === 1 ? modifiers[0] : sortModifiers(modifiers).join(':');
    const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
    const classId = modifierId + classGroupId;
    if (classGroupsInConflict.indexOf(classId) > -1) {
      // Tailwind class omitted due to conflict
      continue;
    }
    classGroupsInConflict.push(classId);
    const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
    for (let i = 0; i < conflictGroups.length; ++i) {
      const group = conflictGroups[i];
      classGroupsInConflict.push(modifierId + group);
    }
    // Tailwind class not in conflict
    result = originalClassName + (result.length > 0 ? ' ' + result : result);
  }
  return result;
};

/**
 * The code in this file is copied from https://github.com/lukeed/clsx and modified to suit the needs of tailwind-merge better.
 *
 * Specifically:
 * - Runtime code from https://github.com/lukeed/clsx/blob/v1.2.1/src/index.js
 * - TypeScript types from https://github.com/lukeed/clsx/blob/v1.2.1/clsx.d.ts
 *
 * Original code has MIT license: Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
 */
const twJoin = (...classLists) => {
  let index = 0;
  let argument;
  let resolvedValue;
  let string = '';
  while (index < classLists.length) {
    if (argument = classLists[index++]) {
      if (resolvedValue = toValue(argument)) {
        string && (string += ' ');
        string += resolvedValue;
      }
    }
  }
  return string;
};
const toValue = mix => {
  // Fast path for strings
  if (typeof mix === 'string') {
    return mix;
  }
  let resolvedValue;
  let string = '';
  for (let k = 0; k < mix.length; k++) {
    if (mix[k]) {
      if (resolvedValue = toValue(mix[k])) {
        string && (string += ' ');
        string += resolvedValue;
      }
    }
  }
  return string;
};
const createTailwindMerge = (createConfigFirst, ...createConfigRest) => {
  let configUtils;
  let cacheGet;
  let cacheSet;
  let functionToCall;
  const initTailwindMerge = classList => {
    const config = createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst());
    configUtils = createConfigUtils(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList);
  };
  const tailwindMerge = classList => {
    const cachedResult = cacheGet(classList);
    if (cachedResult) {
      return cachedResult;
    }
    const result = mergeClassList(classList, configUtils);
    cacheSet(classList, result);
    return result;
  };
  functionToCall = initTailwindMerge;
  return (...args) => functionToCall(twJoin(...args));
};
const fallbackThemeArr = [];
const fromTheme = key => {
  const themeGetter = theme => theme[key] || fallbackThemeArr;
  themeGetter.isThemeGetter = true;
  return themeGetter;
};
const arbitraryValueRegex = /^\[(?:(\w[\w-]*):)?(.+)\]$/i;
const arbitraryVariableRegex = /^\((?:(\w[\w-]*):)?(.+)\)$/i;
const fractionRegex = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/;
const tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
const lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
const colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/;
// Shadow always begins with x and y offset separated by underscore optionally prepended by inset
const shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
const imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
const isFraction = value => fractionRegex.test(value);
const isNumber = value => !!value && !Number.isNaN(Number(value));
const isInteger = value => !!value && Number.isInteger(Number(value));
const isPercent = value => value.endsWith('%') && isNumber(value.slice(0, -1));
const isTshirtSize = value => tshirtUnitRegex.test(value);
const isAny = () => true;
const isLengthOnly = value =>
// `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
// For example, `hsl(0 0% 0%)` would be classified as a length without this check.
// I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
lengthUnitRegex.test(value) && !colorFunctionRegex.test(value);
const isNever = () => false;
const isShadow = value => shadowRegex.test(value);
const isImage = value => imageRegex.test(value);
const isAnyNonArbitrary = value => !isArbitraryValue(value) && !isArbitraryVariable(value);
const isArbitrarySize = value => getIsArbitraryValue(value, isLabelSize, isNever);
const isArbitraryValue = value => arbitraryValueRegex.test(value);
const isArbitraryLength = value => getIsArbitraryValue(value, isLabelLength, isLengthOnly);
const isArbitraryNumber = value => getIsArbitraryValue(value, isLabelNumber, isNumber);
const isArbitraryWeight = value => getIsArbitraryValue(value, isLabelWeight, isAny);
const isArbitraryFamilyName = value => getIsArbitraryValue(value, isLabelFamilyName, isNever);
const isArbitraryPosition = value => getIsArbitraryValue(value, isLabelPosition, isNever);
const isArbitraryImage = value => getIsArbitraryValue(value, isLabelImage, isImage);
const isArbitraryShadow = value => getIsArbitraryValue(value, isLabelShadow, isShadow);
const isArbitraryVariable = value => arbitraryVariableRegex.test(value);
const isArbitraryVariableLength = value => getIsArbitraryVariable(value, isLabelLength);
const isArbitraryVariableFamilyName = value => getIsArbitraryVariable(value, isLabelFamilyName);
const isArbitraryVariablePosition = value => getIsArbitraryVariable(value, isLabelPosition);
const isArbitraryVariableSize = value => getIsArbitraryVariable(value, isLabelSize);
const isArbitraryVariableImage = value => getIsArbitraryVariable(value, isLabelImage);
const isArbitraryVariableShadow = value => getIsArbitraryVariable(value, isLabelShadow, true);
const isArbitraryVariableWeight = value => getIsArbitraryVariable(value, isLabelWeight, true);
// Helpers
const getIsArbitraryValue = (value, testLabel, testValue) => {
  const result = arbitraryValueRegex.exec(value);
  if (result) {
    if (result[1]) {
      return testLabel(result[1]);
    }
    return testValue(result[2]);
  }
  return false;
};
const getIsArbitraryVariable = (value, testLabel, shouldMatchNoLabel = false) => {
  const result = arbitraryVariableRegex.exec(value);
  if (result) {
    if (result[1]) {
      return testLabel(result[1]);
    }
    return shouldMatchNoLabel;
  }
  return false;
};
// Labels
const isLabelPosition = label => label === 'position' || label === 'percentage';
const isLabelImage = label => label === 'image' || label === 'url';
const isLabelSize = label => label === 'length' || label === 'size' || label === 'bg-size';
const isLabelLength = label => label === 'length';
const isLabelNumber = label => label === 'number';
const isLabelFamilyName = label => label === 'family-name';
const isLabelWeight = label => label === 'number' || label === 'weight';
const isLabelShadow = label => label === 'shadow';
const getDefaultConfig = () => {
  /**
   * Theme getters for theme variable namespaces
   * @see https://tailwindcss.com/docs/theme#theme-variable-namespaces
   */
  /***/
  const themeColor = fromTheme('color');
  const themeFont = fromTheme('font');
  const themeText = fromTheme('text');
  const themeFontWeight = fromTheme('font-weight');
  const themeTracking = fromTheme('tracking');
  const themeLeading = fromTheme('leading');
  const themeBreakpoint = fromTheme('breakpoint');
  const themeContainer = fromTheme('container');
  const themeSpacing = fromTheme('spacing');
  const themeRadius = fromTheme('radius');
  const themeShadow = fromTheme('shadow');
  const themeInsetShadow = fromTheme('inset-shadow');
  const themeTextShadow = fromTheme('text-shadow');
  const themeDropShadow = fromTheme('drop-shadow');
  const themeBlur = fromTheme('blur');
  const themePerspective = fromTheme('perspective');
  const themeAspect = fromTheme('aspect');
  const themeEase = fromTheme('ease');
  const themeAnimate = fromTheme('animate');
  /**
   * Helpers to avoid repeating the same scales
   *
   * We use functions that create a new array every time they're called instead of static arrays.
   * This ensures that users who modify any scale by mutating the array (e.g. with `array.push(element)`) don't accidentally mutate arrays in other parts of the config.
   */
  /***/
  const scaleBreak = () => ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'];
  const scalePosition = () => ['center', 'top', 'bottom', 'left', 'right', 'top-left',
  // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
  'left-top', 'top-right',
  // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
  'right-top', 'bottom-right',
  // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
  'right-bottom', 'bottom-left',
  // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
  'left-bottom'];
  const scalePositionWithArbitrary = () => [...scalePosition(), isArbitraryVariable, isArbitraryValue];
  const scaleOverflow = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'];
  const scaleOverscroll = () => ['auto', 'contain', 'none'];
  const scaleUnambiguousSpacing = () => [isArbitraryVariable, isArbitraryValue, themeSpacing];
  const scaleInset = () => [isFraction, 'full', 'auto', ...scaleUnambiguousSpacing()];
  const scaleGridTemplateColsRows = () => [isInteger, 'none', 'subgrid', isArbitraryVariable, isArbitraryValue];
  const scaleGridColRowStartAndEnd = () => ['auto', {
    span: ['full', isInteger, isArbitraryVariable, isArbitraryValue]
  }, isInteger, isArbitraryVariable, isArbitraryValue];
  const scaleGridColRowStartOrEnd = () => [isInteger, 'auto', isArbitraryVariable, isArbitraryValue];
  const scaleGridAutoColsRows = () => ['auto', 'min', 'max', 'fr', isArbitraryVariable, isArbitraryValue];
  const scaleAlignPrimaryAxis = () => ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch', 'baseline', 'center-safe', 'end-safe'];
  const scaleAlignSecondaryAxis = () => ['start', 'end', 'center', 'stretch', 'center-safe', 'end-safe'];
  const scaleMargin = () => ['auto', ...scaleUnambiguousSpacing()];
  const scaleSizing = () => [isFraction, 'auto', 'full', 'dvw', 'dvh', 'lvw', 'lvh', 'svw', 'svh', 'min', 'max', 'fit', ...scaleUnambiguousSpacing()];
  const scaleSizingInline = () => [isFraction, 'screen', 'full', 'dvw', 'lvw', 'svw', 'min', 'max', 'fit', ...scaleUnambiguousSpacing()];
  const scaleSizingBlock = () => [isFraction, 'screen', 'full', 'lh', 'dvh', 'lvh', 'svh', 'min', 'max', 'fit', ...scaleUnambiguousSpacing()];
  const scaleColor = () => [themeColor, isArbitraryVariable, isArbitraryValue];
  const scaleBgPosition = () => [...scalePosition(), isArbitraryVariablePosition, isArbitraryPosition, {
    position: [isArbitraryVariable, isArbitraryValue]
  }];
  const scaleBgRepeat = () => ['no-repeat', {
    repeat: ['', 'x', 'y', 'space', 'round']
  }];
  const scaleBgSize = () => ['auto', 'cover', 'contain', isArbitraryVariableSize, isArbitrarySize, {
    size: [isArbitraryVariable, isArbitraryValue]
  }];
  const scaleGradientStopPosition = () => [isPercent, isArbitraryVariableLength, isArbitraryLength];
  const scaleRadius = () => [
  // Deprecated since Tailwind CSS v4.0.0
  '', 'none', 'full', themeRadius, isArbitraryVariable, isArbitraryValue];
  const scaleBorderWidth = () => ['', isNumber, isArbitraryVariableLength, isArbitraryLength];
  const scaleLineStyle = () => ['solid', 'dashed', 'dotted', 'double'];
  const scaleBlendMode = () => ['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity'];
  const scaleMaskImagePosition = () => [isNumber, isPercent, isArbitraryVariablePosition, isArbitraryPosition];
  const scaleBlur = () => [
  // Deprecated since Tailwind CSS v4.0.0
  '', 'none', themeBlur, isArbitraryVariable, isArbitraryValue];
  const scaleRotate = () => ['none', isNumber, isArbitraryVariable, isArbitraryValue];
  const scaleScale = () => ['none', isNumber, isArbitraryVariable, isArbitraryValue];
  const scaleSkew = () => [isNumber, isArbitraryVariable, isArbitraryValue];
  const scaleTranslate = () => [isFraction, 'full', ...scaleUnambiguousSpacing()];
  return {
    cacheSize: 500,
    theme: {
      animate: ['spin', 'ping', 'pulse', 'bounce'],
      aspect: ['video'],
      blur: [isTshirtSize],
      breakpoint: [isTshirtSize],
      color: [isAny],
      container: [isTshirtSize],
      'drop-shadow': [isTshirtSize],
      ease: ['in', 'out', 'in-out'],
      font: [isAnyNonArbitrary],
      'font-weight': ['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black'],
      'inset-shadow': [isTshirtSize],
      leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose'],
      perspective: ['dramatic', 'near', 'normal', 'midrange', 'distant', 'none'],
      radius: [isTshirtSize],
      shadow: [isTshirtSize],
      spacing: ['px', isNumber],
      text: [isTshirtSize],
      'text-shadow': [isTshirtSize],
      tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest']
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ['auto', 'square', isFraction, isArbitraryValue, isArbitraryVariable, themeAspect]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ['container'],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [isNumber, isArbitraryValue, isArbitraryVariable, themeContainer]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      'break-after': [{
        'break-after': scaleBreak()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      'break-before': [{
        'break-before': scaleBreak()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      'break-inside': [{
        'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column']
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      'box-decoration': [{
        'box-decoration': ['slice', 'clone']
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ['border', 'content']
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ['sr-only', 'not-sr-only'],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ['right', 'left', 'none', 'start', 'end']
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ['left', 'right', 'both', 'none', 'start', 'end']
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ['isolate', 'isolation-auto'],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      'object-fit': [{
        object: ['contain', 'cover', 'fill', 'none', 'scale-down']
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      'object-position': [{
        object: scalePositionWithArbitrary()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: scaleOverflow()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      'overflow-x': [{
        'overflow-x': scaleOverflow()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      'overflow-y': [{
        'overflow-y': scaleOverflow()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: scaleOverscroll()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      'overscroll-x': [{
        'overscroll-x': scaleOverscroll()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      'overscroll-y': [{
        'overscroll-y': scaleOverscroll()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
      /**
       * Inset
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: scaleInset()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      'inset-x': [{
        'inset-x': scaleInset()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      'inset-y': [{
        'inset-y': scaleInset()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        'inset-s': scaleInset(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: scaleInset()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        'inset-e': scaleInset(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: scaleInset()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      'inset-bs': [{
        'inset-bs': scaleInset()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      'inset-be': [{
        'inset-be': scaleInset()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: scaleInset()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: scaleInset()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: scaleInset()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: scaleInset()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ['visible', 'invisible', 'collapse'],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [isInteger, 'auto', isArbitraryVariable, isArbitraryValue]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [isFraction, 'full', 'auto', themeContainer, ...scaleUnambiguousSpacing()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      'flex-direction': [{
        flex: ['row', 'row-reverse', 'col', 'col-reverse']
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      'flex-wrap': [{
        flex: ['nowrap', 'wrap', 'wrap-reverse']
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [isNumber, isFraction, 'auto', 'initial', 'none', isArbitraryValue]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ['', isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ['', isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [isInteger, 'first', 'last', 'none', isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      'grid-cols': [{
        'grid-cols': scaleGridTemplateColsRows()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-start-end': [{
        col: scaleGridColRowStartAndEnd()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-start': [{
        'col-start': scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-end': [{
        'col-end': scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      'grid-rows': [{
        'grid-rows': scaleGridTemplateColsRows()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-start-end': [{
        row: scaleGridColRowStartAndEnd()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-start': [{
        'row-start': scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-end': [{
        'row-end': scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      'grid-flow': [{
        'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense']
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      'auto-cols': [{
        'auto-cols': scaleGridAutoColsRows()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      'auto-rows': [{
        'auto-rows': scaleGridAutoColsRows()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: scaleUnambiguousSpacing()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      'gap-x': [{
        'gap-x': scaleUnambiguousSpacing()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      'gap-y': [{
        'gap-y': scaleUnambiguousSpacing()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      'justify-content': [{
        justify: [...scaleAlignPrimaryAxis(), 'normal']
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      'justify-items': [{
        'justify-items': [...scaleAlignSecondaryAxis(), 'normal']
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      'justify-self': [{
        'justify-self': ['auto', ...scaleAlignSecondaryAxis()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      'align-content': [{
        content: ['normal', ...scaleAlignPrimaryAxis()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      'align-items': [{
        items: [...scaleAlignSecondaryAxis(), {
          baseline: ['', 'last']
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      'align-self': [{
        self: ['auto', ...scaleAlignSecondaryAxis(), {
          baseline: ['', 'last']
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      'place-content': [{
        'place-content': scaleAlignPrimaryAxis()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      'place-items': [{
        'place-items': [...scaleAlignSecondaryAxis(), 'baseline']
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      'place-self': [{
        'place-self': ['auto', ...scaleAlignSecondaryAxis()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: scaleUnambiguousSpacing()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: scaleMargin()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: scaleMargin()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: scaleMargin()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: scaleMargin()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: scaleMargin()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: scaleMargin()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: scaleMargin()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: scaleMargin()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: scaleMargin()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: scaleMargin()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: scaleMargin()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      'space-x': [{
        'space-x': scaleUnambiguousSpacing()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      'space-x-reverse': ['space-x-reverse'],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      'space-y': [{
        'space-y': scaleUnambiguousSpacing()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      'space-y-reverse': ['space-y-reverse'],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: scaleSizing()
      }],
      /**
       * Inline Size
       * @see https://tailwindcss.com/docs/width
       */
      'inline-size': [{
        inline: ['auto', ...scaleSizingInline()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-width
       */
      'min-inline-size': [{
        'min-inline': ['auto', ...scaleSizingInline()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-width
       */
      'max-inline-size': [{
        'max-inline': ['none', ...scaleSizingInline()]
      }],
      /**
       * Block Size
       * @see https://tailwindcss.com/docs/height
       */
      'block-size': [{
        block: ['auto', ...scaleSizingBlock()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-height
       */
      'min-block-size': [{
        'min-block': ['auto', ...scaleSizingBlock()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-height
       */
      'max-block-size': [{
        'max-block': ['none', ...scaleSizingBlock()]
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [themeContainer, 'screen', ...scaleSizing()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      'min-w': [{
        'min-w': [themeContainer, 'screen', /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
        'none', ...scaleSizing()]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      'max-w': [{
        'max-w': [themeContainer, 'screen', 'none', /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
        'prose', /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
        {
          screen: [themeBreakpoint]
        }, ...scaleSizing()]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ['screen', 'lh', ...scaleSizing()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      'min-h': [{
        'min-h': ['screen', 'lh', 'none', ...scaleSizing()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      'max-h': [{
        'max-h': ['screen', 'lh', ...scaleSizing()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      'font-size': [{
        text: ['base', themeText, isArbitraryVariableLength, isArbitraryLength]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      'font-smoothing': ['antialiased', 'subpixel-antialiased'],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      'font-style': ['italic', 'not-italic'],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      'font-weight': [{
        font: [themeFontWeight, isArbitraryVariableWeight, isArbitraryWeight]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      'font-stretch': [{
        'font-stretch': ['ultra-condensed', 'extra-condensed', 'condensed', 'semi-condensed', 'normal', 'semi-expanded', 'expanded', 'extra-expanded', 'ultra-expanded', isPercent, isArbitraryValue]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      'font-family': [{
        font: [isArbitraryVariableFamilyName, isArbitraryFamilyName, themeFont]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      'font-features': [{
        'font-features': [isArbitraryValue]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-normal': ['normal-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-ordinal': ['ordinal'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-slashed-zero': ['slashed-zero'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-figure': ['lining-nums', 'oldstyle-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-spacing': ['proportional-nums', 'tabular-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-fraction': ['diagonal-fractions', 'stacked-fractions'],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [themeTracking, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      'line-clamp': [{
        'line-clamp': [isNumber, 'none', isArbitraryVariable, isArbitraryNumber]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [/** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
        themeLeading, ...scaleUnambiguousSpacing()]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      'list-image': [{
        'list-image': ['none', isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      'list-style-position': [{
        list: ['inside', 'outside']
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      'list-style-type': [{
        list: ['disc', 'decimal', 'none', isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      'text-alignment': [{
        text: ['left', 'center', 'right', 'justify', 'start', 'end']
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      'placeholder-color': [{
        placeholder: scaleColor()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      'text-color': [{
        text: scaleColor()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      'text-decoration-style': [{
        decoration: [...scaleLineStyle(), 'wavy']
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      'text-decoration-thickness': [{
        decoration: [isNumber, 'from-font', 'auto', isArbitraryVariable, isArbitraryLength]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      'text-decoration-color': [{
        decoration: scaleColor()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      'underline-offset': [{
        'underline-offset': [isNumber, 'auto', isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      'text-wrap': [{
        text: ['wrap', 'nowrap', 'balance', 'pretty']
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: scaleUnambiguousSpacing()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      'vertical-align': [{
        align: ['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom', 'sub', 'super', isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces']
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ['normal', 'words', 'all', 'keep']
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ['break-word', 'anywhere', 'normal']
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ['none', 'manual', 'auto']
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ['none', isArbitraryVariable, isArbitraryValue]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      'bg-attachment': [{
        bg: ['fixed', 'local', 'scroll']
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      'bg-clip': [{
        'bg-clip': ['border', 'padding', 'content', 'text']
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      'bg-origin': [{
        'bg-origin': ['border', 'padding', 'content']
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      'bg-position': [{
        bg: scaleBgPosition()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      'bg-repeat': [{
        bg: scaleBgRepeat()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      'bg-size': [{
        bg: scaleBgSize()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      'bg-image': [{
        bg: ['none', {
          linear: [{
            to: ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl']
          }, isInteger, isArbitraryVariable, isArbitraryValue],
          radial: ['', isArbitraryVariable, isArbitraryValue],
          conic: [isInteger, isArbitraryVariable, isArbitraryValue]
        }, isArbitraryVariableImage, isArbitraryImage]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      'bg-color': [{
        bg: scaleColor()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-from-pos': [{
        from: scaleGradientStopPosition()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-via-pos': [{
        via: scaleGradientStopPosition()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-to-pos': [{
        to: scaleGradientStopPosition()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-from': [{
        from: scaleColor()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-via': [{
        via: scaleColor()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-to': [{
        to: scaleColor()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: scaleRadius()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-s': [{
        'rounded-s': scaleRadius()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-e': [{
        'rounded-e': scaleRadius()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-t': [{
        'rounded-t': scaleRadius()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-r': [{
        'rounded-r': scaleRadius()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-b': [{
        'rounded-b': scaleRadius()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-l': [{
        'rounded-l': scaleRadius()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-ss': [{
        'rounded-ss': scaleRadius()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-se': [{
        'rounded-se': scaleRadius()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-ee': [{
        'rounded-ee': scaleRadius()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-es': [{
        'rounded-es': scaleRadius()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-tl': [{
        'rounded-tl': scaleRadius()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-tr': [{
        'rounded-tr': scaleRadius()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-br': [{
        'rounded-br': scaleRadius()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-bl': [{
        'rounded-bl': scaleRadius()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w': [{
        border: scaleBorderWidth()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-x': [{
        'border-x': scaleBorderWidth()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-y': [{
        'border-y': scaleBorderWidth()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-s': [{
        'border-s': scaleBorderWidth()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-e': [{
        'border-e': scaleBorderWidth()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-bs': [{
        'border-bs': scaleBorderWidth()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-be': [{
        'border-be': scaleBorderWidth()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-t': [{
        'border-t': scaleBorderWidth()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-r': [{
        'border-r': scaleBorderWidth()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-b': [{
        'border-b': scaleBorderWidth()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-l': [{
        'border-l': scaleBorderWidth()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      'divide-x': [{
        'divide-x': scaleBorderWidth()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      'divide-x-reverse': ['divide-x-reverse'],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      'divide-y': [{
        'divide-y': scaleBorderWidth()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      'divide-y-reverse': ['divide-y-reverse'],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      'border-style': [{
        border: [...scaleLineStyle(), 'hidden', 'none']
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      'divide-style': [{
        divide: [...scaleLineStyle(), 'hidden', 'none']
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color': [{
        border: scaleColor()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-x': [{
        'border-x': scaleColor()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-y': [{
        'border-y': scaleColor()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-s': [{
        'border-s': scaleColor()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-e': [{
        'border-e': scaleColor()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-bs': [{
        'border-bs': scaleColor()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-be': [{
        'border-be': scaleColor()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-t': [{
        'border-t': scaleColor()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-r': [{
        'border-r': scaleColor()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-b': [{
        'border-b': scaleColor()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-l': [{
        'border-l': scaleColor()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      'divide-color': [{
        divide: scaleColor()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      'outline-style': [{
        outline: [...scaleLineStyle(), 'none', 'hidden']
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      'outline-offset': [{
        'outline-offset': [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      'outline-w': [{
        outline: ['', isNumber, isArbitraryVariableLength, isArbitraryLength]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      'outline-color': [{
        outline: scaleColor()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
        // Deprecated since Tailwind CSS v4.0.0
        '', 'none', themeShadow, isArbitraryVariableShadow, isArbitraryShadow]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      'shadow-color': [{
        shadow: scaleColor()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      'inset-shadow': [{
        'inset-shadow': ['none', themeInsetShadow, isArbitraryVariableShadow, isArbitraryShadow]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      'inset-shadow-color': [{
        'inset-shadow': scaleColor()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      'ring-w': [{
        ring: scaleBorderWidth()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      'ring-w-inset': ['ring-inset'],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      'ring-color': [{
        ring: scaleColor()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      'ring-offset-w': [{
        'ring-offset': [isNumber, isArbitraryLength]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      'ring-offset-color': [{
        'ring-offset': scaleColor()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      'inset-ring-w': [{
        'inset-ring': scaleBorderWidth()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      'inset-ring-color': [{
        'inset-ring': scaleColor()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      'text-shadow': [{
        'text-shadow': ['none', themeTextShadow, isArbitraryVariableShadow, isArbitraryShadow]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      'text-shadow-color': [{
        'text-shadow': scaleColor()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      'mix-blend': [{
        'mix-blend': [...scaleBlendMode(), 'plus-darker', 'plus-lighter']
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      'bg-blend': [{
        'bg-blend': scaleBlendMode()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      'mask-clip': [{
        'mask-clip': ['border', 'padding', 'content', 'fill', 'stroke', 'view']
      }, 'mask-no-clip'],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      'mask-composite': [{
        mask: ['add', 'subtract', 'intersect', 'exclude']
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      'mask-image-linear-pos': [{
        'mask-linear': [isNumber]
      }],
      'mask-image-linear-from-pos': [{
        'mask-linear-from': scaleMaskImagePosition()
      }],
      'mask-image-linear-to-pos': [{
        'mask-linear-to': scaleMaskImagePosition()
      }],
      'mask-image-linear-from-color': [{
        'mask-linear-from': scaleColor()
      }],
      'mask-image-linear-to-color': [{
        'mask-linear-to': scaleColor()
      }],
      'mask-image-t-from-pos': [{
        'mask-t-from': scaleMaskImagePosition()
      }],
      'mask-image-t-to-pos': [{
        'mask-t-to': scaleMaskImagePosition()
      }],
      'mask-image-t-from-color': [{
        'mask-t-from': scaleColor()
      }],
      'mask-image-t-to-color': [{
        'mask-t-to': scaleColor()
      }],
      'mask-image-r-from-pos': [{
        'mask-r-from': scaleMaskImagePosition()
      }],
      'mask-image-r-to-pos': [{
        'mask-r-to': scaleMaskImagePosition()
      }],
      'mask-image-r-from-color': [{
        'mask-r-from': scaleColor()
      }],
      'mask-image-r-to-color': [{
        'mask-r-to': scaleColor()
      }],
      'mask-image-b-from-pos': [{
        'mask-b-from': scaleMaskImagePosition()
      }],
      'mask-image-b-to-pos': [{
        'mask-b-to': scaleMaskImagePosition()
      }],
      'mask-image-b-from-color': [{
        'mask-b-from': scaleColor()
      }],
      'mask-image-b-to-color': [{
        'mask-b-to': scaleColor()
      }],
      'mask-image-l-from-pos': [{
        'mask-l-from': scaleMaskImagePosition()
      }],
      'mask-image-l-to-pos': [{
        'mask-l-to': scaleMaskImagePosition()
      }],
      'mask-image-l-from-color': [{
        'mask-l-from': scaleColor()
      }],
      'mask-image-l-to-color': [{
        'mask-l-to': scaleColor()
      }],
      'mask-image-x-from-pos': [{
        'mask-x-from': scaleMaskImagePosition()
      }],
      'mask-image-x-to-pos': [{
        'mask-x-to': scaleMaskImagePosition()
      }],
      'mask-image-x-from-color': [{
        'mask-x-from': scaleColor()
      }],
      'mask-image-x-to-color': [{
        'mask-x-to': scaleColor()
      }],
      'mask-image-y-from-pos': [{
        'mask-y-from': scaleMaskImagePosition()
      }],
      'mask-image-y-to-pos': [{
        'mask-y-to': scaleMaskImagePosition()
      }],
      'mask-image-y-from-color': [{
        'mask-y-from': scaleColor()
      }],
      'mask-image-y-to-color': [{
        'mask-y-to': scaleColor()
      }],
      'mask-image-radial': [{
        'mask-radial': [isArbitraryVariable, isArbitraryValue]
      }],
      'mask-image-radial-from-pos': [{
        'mask-radial-from': scaleMaskImagePosition()
      }],
      'mask-image-radial-to-pos': [{
        'mask-radial-to': scaleMaskImagePosition()
      }],
      'mask-image-radial-from-color': [{
        'mask-radial-from': scaleColor()
      }],
      'mask-image-radial-to-color': [{
        'mask-radial-to': scaleColor()
      }],
      'mask-image-radial-shape': [{
        'mask-radial': ['circle', 'ellipse']
      }],
      'mask-image-radial-size': [{
        'mask-radial': [{
          closest: ['side', 'corner'],
          farthest: ['side', 'corner']
        }]
      }],
      'mask-image-radial-pos': [{
        'mask-radial-at': scalePosition()
      }],
      'mask-image-conic-pos': [{
        'mask-conic': [isNumber]
      }],
      'mask-image-conic-from-pos': [{
        'mask-conic-from': scaleMaskImagePosition()
      }],
      'mask-image-conic-to-pos': [{
        'mask-conic-to': scaleMaskImagePosition()
      }],
      'mask-image-conic-from-color': [{
        'mask-conic-from': scaleColor()
      }],
      'mask-image-conic-to-color': [{
        'mask-conic-to': scaleColor()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      'mask-mode': [{
        mask: ['alpha', 'luminance', 'match']
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      'mask-origin': [{
        'mask-origin': ['border', 'padding', 'content', 'fill', 'stroke', 'view']
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      'mask-position': [{
        mask: scaleBgPosition()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      'mask-repeat': [{
        mask: scaleBgRepeat()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      'mask-size': [{
        mask: scaleBgSize()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      'mask-type': [{
        'mask-type': ['alpha', 'luminance']
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      'mask-image': [{
        mask: ['none', isArbitraryVariable, isArbitraryValue]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
        // Deprecated since Tailwind CSS v3.0.0
        '', 'none', isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: scaleBlur()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      'drop-shadow': [{
        'drop-shadow': [
        // Deprecated since Tailwind CSS v4.0.0
        '', 'none', themeDropShadow, isArbitraryVariableShadow, isArbitraryShadow]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      'drop-shadow-color': [{
        'drop-shadow': scaleColor()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ['', isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      'hue-rotate': [{
        'hue-rotate': [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ['', isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ['', isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      'backdrop-filter': [{
        'backdrop-filter': [
        // Deprecated since Tailwind CSS v3.0.0
        '', 'none', isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      'backdrop-blur': [{
        'backdrop-blur': scaleBlur()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      'backdrop-brightness': [{
        'backdrop-brightness': [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      'backdrop-contrast': [{
        'backdrop-contrast': [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      'backdrop-grayscale': [{
        'backdrop-grayscale': ['', isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      'backdrop-hue-rotate': [{
        'backdrop-hue-rotate': [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      'backdrop-invert': [{
        'backdrop-invert': ['', isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      'backdrop-opacity': [{
        'backdrop-opacity': [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      'backdrop-saturate': [{
        'backdrop-saturate': [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      'backdrop-sepia': [{
        'backdrop-sepia': ['', isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      'border-collapse': [{
        border: ['collapse', 'separate']
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing': [{
        'border-spacing': scaleUnambiguousSpacing()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing-x': [{
        'border-spacing-x': scaleUnambiguousSpacing()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing-y': [{
        'border-spacing-y': scaleUnambiguousSpacing()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      'table-layout': [{
        table: ['auto', 'fixed']
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ['top', 'bottom']
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ['', 'all', 'colors', 'opacity', 'shadow', 'transform', 'none', isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      'transition-behavior': [{
        transition: ['normal', 'discrete']
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [isNumber, 'initial', isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ['linear', 'initial', themeEase, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ['none', themeAnimate, isArbitraryVariable, isArbitraryValue]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ['hidden', 'visible']
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [themePerspective, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      'perspective-origin': [{
        'perspective-origin': scalePositionWithArbitrary()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: scaleRotate()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      'rotate-x': [{
        'rotate-x': scaleRotate()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      'rotate-y': [{
        'rotate-y': scaleRotate()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      'rotate-z': [{
        'rotate-z': scaleRotate()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: scaleScale()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      'scale-x': [{
        'scale-x': scaleScale()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      'scale-y': [{
        'scale-y': scaleScale()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      'scale-z': [{
        'scale-z': scaleScale()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      'scale-3d': ['scale-3d'],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: scaleSkew()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      'skew-x': [{
        'skew-x': scaleSkew()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      'skew-y': [{
        'skew-y': scaleSkew()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [isArbitraryVariable, isArbitraryValue, '', 'none', 'gpu', 'cpu']
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      'transform-origin': [{
        origin: scalePositionWithArbitrary()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      'transform-style': [{
        transform: ['3d', 'flat']
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: scaleTranslate()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      'translate-x': [{
        'translate-x': scaleTranslate()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      'translate-y': [{
        'translate-y': scaleTranslate()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      'translate-z': [{
        'translate-z': scaleTranslate()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      'translate-none': ['translate-none'],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: scaleColor()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ['none', 'auto']
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      'caret-color': [{
        caret: scaleColor()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      'color-scheme': [{
        scheme: ['normal', 'dark', 'light', 'light-dark', 'only-dark', 'only-light']
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ['auto', 'default', 'pointer', 'wait', 'text', 'move', 'help', 'not-allowed', 'none', 'context-menu', 'progress', 'cell', 'crosshair', 'vertical-text', 'alias', 'copy', 'no-drop', 'grab', 'grabbing', 'all-scroll', 'col-resize', 'row-resize', 'n-resize', 'e-resize', 's-resize', 'w-resize', 'ne-resize', 'nw-resize', 'se-resize', 'sw-resize', 'ew-resize', 'ns-resize', 'nesw-resize', 'nwse-resize', 'zoom-in', 'zoom-out', isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      'field-sizing': [{
        'field-sizing': ['fixed', 'content']
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      'pointer-events': [{
        'pointer-events': ['auto', 'none']
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ['none', '', 'y', 'x']
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      'scroll-behavior': [{
        scroll: ['auto', 'smooth']
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-m': [{
        'scroll-m': scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mx': [{
        'scroll-mx': scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-my': [{
        'scroll-my': scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-ms': [{
        'scroll-ms': scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-me': [{
        'scroll-me': scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mbs': [{
        'scroll-mbs': scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mbe': [{
        'scroll-mbe': scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mt': [{
        'scroll-mt': scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mr': [{
        'scroll-mr': scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mb': [{
        'scroll-mb': scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-ml': [{
        'scroll-ml': scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-p': [{
        'scroll-p': scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-px': [{
        'scroll-px': scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-py': [{
        'scroll-py': scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-ps': [{
        'scroll-ps': scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pe': [{
        'scroll-pe': scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pbs': [{
        'scroll-pbs': scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pbe': [{
        'scroll-pbe': scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pt': [{
        'scroll-pt': scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pr': [{
        'scroll-pr': scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pb': [{
        'scroll-pb': scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pl': [{
        'scroll-pl': scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      'snap-align': [{
        snap: ['start', 'end', 'center', 'align-none']
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      'snap-stop': [{
        snap: ['normal', 'always']
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      'snap-type': [{
        snap: ['none', 'x', 'y', 'both']
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      'snap-strictness': [{
        snap: ['mandatory', 'proximity']
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ['auto', 'none', 'manipulation']
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      'touch-x': [{
        'touch-pan': ['x', 'left', 'right']
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      'touch-y': [{
        'touch-pan': ['y', 'up', 'down']
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      'touch-pz': ['touch-pinch-zoom'],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ['none', 'text', 'all', 'auto']
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      'will-change': [{
        'will-change': ['auto', 'scroll', 'contents', 'transform', isArbitraryVariable, isArbitraryValue]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ['none', ...scaleColor()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      'stroke-w': [{
        stroke: [isNumber, isArbitraryVariableLength, isArbitraryLength, isArbitraryNumber]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ['none', ...scaleColor()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      'forced-color-adjust': [{
        'forced-color-adjust': ['auto', 'none']
      }]
    },
    conflictingClassGroups: {
      overflow: ['overflow-x', 'overflow-y'],
      overscroll: ['overscroll-x', 'overscroll-y'],
      inset: ['inset-x', 'inset-y', 'inset-bs', 'inset-be', 'start', 'end', 'top', 'right', 'bottom', 'left'],
      'inset-x': ['right', 'left'],
      'inset-y': ['top', 'bottom'],
      flex: ['basis', 'grow', 'shrink'],
      gap: ['gap-x', 'gap-y'],
      p: ['px', 'py', 'ps', 'pe', 'pbs', 'pbe', 'pt', 'pr', 'pb', 'pl'],
      px: ['pr', 'pl'],
      py: ['pt', 'pb'],
      m: ['mx', 'my', 'ms', 'me', 'mbs', 'mbe', 'mt', 'mr', 'mb', 'ml'],
      mx: ['mr', 'ml'],
      my: ['mt', 'mb'],
      size: ['w', 'h'],
      'font-size': ['leading'],
      'fvn-normal': ['fvn-ordinal', 'fvn-slashed-zero', 'fvn-figure', 'fvn-spacing', 'fvn-fraction'],
      'fvn-ordinal': ['fvn-normal'],
      'fvn-slashed-zero': ['fvn-normal'],
      'fvn-figure': ['fvn-normal'],
      'fvn-spacing': ['fvn-normal'],
      'fvn-fraction': ['fvn-normal'],
      'line-clamp': ['display', 'overflow'],
      rounded: ['rounded-s', 'rounded-e', 'rounded-t', 'rounded-r', 'rounded-b', 'rounded-l', 'rounded-ss', 'rounded-se', 'rounded-ee', 'rounded-es', 'rounded-tl', 'rounded-tr', 'rounded-br', 'rounded-bl'],
      'rounded-s': ['rounded-ss', 'rounded-es'],
      'rounded-e': ['rounded-se', 'rounded-ee'],
      'rounded-t': ['rounded-tl', 'rounded-tr'],
      'rounded-r': ['rounded-tr', 'rounded-br'],
      'rounded-b': ['rounded-br', 'rounded-bl'],
      'rounded-l': ['rounded-tl', 'rounded-bl'],
      'border-spacing': ['border-spacing-x', 'border-spacing-y'],
      'border-w': ['border-w-x', 'border-w-y', 'border-w-s', 'border-w-e', 'border-w-bs', 'border-w-be', 'border-w-t', 'border-w-r', 'border-w-b', 'border-w-l'],
      'border-w-x': ['border-w-r', 'border-w-l'],
      'border-w-y': ['border-w-t', 'border-w-b'],
      'border-color': ['border-color-x', 'border-color-y', 'border-color-s', 'border-color-e', 'border-color-bs', 'border-color-be', 'border-color-t', 'border-color-r', 'border-color-b', 'border-color-l'],
      'border-color-x': ['border-color-r', 'border-color-l'],
      'border-color-y': ['border-color-t', 'border-color-b'],
      translate: ['translate-x', 'translate-y', 'translate-none'],
      'translate-none': ['translate', 'translate-x', 'translate-y', 'translate-z'],
      'scroll-m': ['scroll-mx', 'scroll-my', 'scroll-ms', 'scroll-me', 'scroll-mbs', 'scroll-mbe', 'scroll-mt', 'scroll-mr', 'scroll-mb', 'scroll-ml'],
      'scroll-mx': ['scroll-mr', 'scroll-ml'],
      'scroll-my': ['scroll-mt', 'scroll-mb'],
      'scroll-p': ['scroll-px', 'scroll-py', 'scroll-ps', 'scroll-pe', 'scroll-pbs', 'scroll-pbe', 'scroll-pt', 'scroll-pr', 'scroll-pb', 'scroll-pl'],
      'scroll-px': ['scroll-pr', 'scroll-pl'],
      'scroll-py': ['scroll-pt', 'scroll-pb'],
      touch: ['touch-x', 'touch-y', 'touch-pz'],
      'touch-x': ['touch'],
      'touch-y': ['touch'],
      'touch-pz': ['touch']
    },
    conflictingClassGroupModifiers: {
      'font-size': ['leading']
    },
    orderSensitiveModifiers: ['*', '**', 'after', 'backdrop', 'before', 'details-content', 'file', 'first-letter', 'first-line', 'marker', 'placeholder', 'selection']
  };
};
const twMerge = /*#__PURE__*/createTailwindMerge(getDefaultConfig);

const {createContext,Component,createElement,useContext: useContext$1,useState: useState$1,useMemo: useMemo$1,forwardRef} = await importShared('react');


const ErrorBoundaryContext = createContext(null);

const initialState = {
  didCatch: false,
  error: null
};
let ErrorBoundary$1 = class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.resetErrorBoundary = this.resetErrorBoundary.bind(this);
    this.state = initialState;
  }
  static getDerivedStateFromError(error) {
    return {
      didCatch: true,
      error
    };
  }
  resetErrorBoundary() {
    const {
      error
    } = this.state;
    if (error !== null) {
      var _this$props$onReset, _this$props;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      (_this$props$onReset = (_this$props = this.props).onReset) === null || _this$props$onReset === void 0 ? void 0 : _this$props$onReset.call(_this$props, {
        args,
        reason: "imperative-api"
      });
      this.setState(initialState);
    }
  }
  componentDidCatch(error, info) {
    var _this$props$onError, _this$props2;
    (_this$props$onError = (_this$props2 = this.props).onError) === null || _this$props$onError === void 0 ? void 0 : _this$props$onError.call(_this$props2, error, info);
  }
  componentDidUpdate(prevProps, prevState) {
    const {
      didCatch
    } = this.state;
    const {
      resetKeys
    } = this.props;

    // There's an edge case where if the thing that triggered the error happens to *also* be in the resetKeys array,
    // we'd end up resetting the error boundary immediately.
    // This would likely trigger a second error to be thrown.
    // So we make sure that we don't check the resetKeys on the first call of cDU after the error is set.

    if (didCatch && prevState.error !== null && hasArrayChanged(prevProps.resetKeys, resetKeys)) {
      var _this$props$onReset2, _this$props3;
      (_this$props$onReset2 = (_this$props3 = this.props).onReset) === null || _this$props$onReset2 === void 0 ? void 0 : _this$props$onReset2.call(_this$props3, {
        next: resetKeys,
        prev: prevProps.resetKeys,
        reason: "keys"
      });
      this.setState(initialState);
    }
  }
  render() {
    const {
      children,
      fallbackRender,
      FallbackComponent,
      fallback
    } = this.props;
    const {
      didCatch,
      error
    } = this.state;
    let childToRender = children;
    if (didCatch) {
      const props = {
        error,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if (typeof fallbackRender === "function") {
        childToRender = fallbackRender(props);
      } else if (FallbackComponent) {
        childToRender = createElement(FallbackComponent, props);
      } else if (fallback !== undefined) {
        childToRender = fallback;
      } else {
        throw error;
      }
    }
    return createElement(ErrorBoundaryContext.Provider, {
      value: {
        didCatch,
        error,
        resetErrorBoundary: this.resetErrorBoundary
      }
    }, childToRender);
  }
};
function hasArrayChanged() {
  let a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return a.length !== b.length || a.some((item, index) => !Object.is(item, b[index]));
}

function formatProdErrorMessage(code) {
  return `Minified Redux error #${code}; visit https://redux.js.org/Errors?code=${code} for the full message or use the non-minified dev environment for full errors. `;
}
var $$observable = /* @__PURE__ */ (() => typeof Symbol === "function" && Symbol.observable || "@@observable")();
var symbol_observable_default = $$observable;
var randomString = () => Math.random().toString(36).substring(7).split("").join(".");
var ActionTypes = {
  INIT: `@@redux/INIT${/* @__PURE__ */ randomString()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ randomString()}`};
var actionTypes_default = ActionTypes;
function isPlainObject(obj) {
  if (typeof obj !== "object" || obj === null)
    return false;
  let proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(obj) === proto || Object.getPrototypeOf(obj) === null;
}
function createStore$1(reducer, preloadedState, enhancer) {
  if (typeof reducer !== "function") {
    throw new Error(formatProdErrorMessage(2) );
  }
  if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
    throw new Error(formatProdErrorMessage(0) );
  }
  if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
    enhancer = preloadedState;
    preloadedState = void 0;
  }
  if (typeof enhancer !== "undefined") {
    if (typeof enhancer !== "function") {
      throw new Error(formatProdErrorMessage(1) );
    }
    return enhancer(createStore$1)(reducer, preloadedState);
  }
  let currentReducer = reducer;
  let currentState = preloadedState;
  let currentListeners = /* @__PURE__ */ new Map();
  let nextListeners = currentListeners;
  let listenerIdCounter = 0;
  let isDispatching = false;
  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = /* @__PURE__ */ new Map();
      currentListeners.forEach((listener, key) => {
        nextListeners.set(key, listener);
      });
    }
  }
  function getState() {
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(3) );
    }
    return currentState;
  }
  function subscribe(listener) {
    if (typeof listener !== "function") {
      throw new Error(formatProdErrorMessage(4) );
    }
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(5) );
    }
    let isSubscribed = true;
    ensureCanMutateNextListeners();
    const listenerId = listenerIdCounter++;
    nextListeners.set(listenerId, listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }
      if (isDispatching) {
        throw new Error(formatProdErrorMessage(6) );
      }
      isSubscribed = false;
      ensureCanMutateNextListeners();
      nextListeners.delete(listenerId);
      currentListeners = null;
    };
  }
  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error(formatProdErrorMessage(7) );
    }
    if (typeof action.type === "undefined") {
      throw new Error(formatProdErrorMessage(8) );
    }
    if (typeof action.type !== "string") {
      throw new Error(formatProdErrorMessage(17) );
    }
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(9) );
    }
    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }
    const listeners = currentListeners = nextListeners;
    listeners.forEach((listener) => {
      listener();
    });
    return action;
  }
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== "function") {
      throw new Error(formatProdErrorMessage(10) );
    }
    currentReducer = nextReducer;
    dispatch({
      type: actionTypes_default.REPLACE
    });
  }
  function observable() {
    const outerSubscribe = subscribe;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(observer) {
        if (typeof observer !== "object" || observer === null) {
          throw new Error(formatProdErrorMessage(11) );
        }
        function observeState() {
          const observerAsObserver = observer;
          if (observerAsObserver.next) {
            observerAsObserver.next(getState());
          }
        }
        observeState();
        const unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe
        };
      },
      [symbol_observable_default]() {
        return this;
      }
    };
  }
  dispatch({
    type: actionTypes_default.INIT
  });
  const store = {
    dispatch,
    subscribe,
    getState,
    replaceReducer,
    [symbol_observable_default]: observable
  };
  return store;
}
function bindActionCreator(actionCreator, dispatch) {
  return function(...args) {
    return dispatch(actionCreator.apply(this, args));
  };
}
function bindActionCreators$1(actionCreators, dispatch) {
  if (typeof actionCreators === "function") {
    return bindActionCreator(actionCreators, dispatch);
  }
  if (typeof actionCreators !== "object" || actionCreators === null) {
    throw new Error(formatProdErrorMessage(16) );
  }
  const boundActionCreators = {};
  for (const key in actionCreators) {
    const actionCreator = actionCreators[key];
    if (typeof actionCreator === "function") {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}
function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}
function applyMiddleware(...middlewares) {
  return (createStore2) => (reducer, preloadedState) => {
    const store = createStore2(reducer, preloadedState);
    let dispatch = () => {
      throw new Error(formatProdErrorMessage(15) );
    };
    const middlewareAPI = {
      getState: store.getState,
      dispatch: (action, ...args) => dispatch(action, ...args)
    };
    const chain = middlewares.map((middleware) => middleware(middlewareAPI));
    dispatch = compose(...chain)(store.dispatch);
    return {
      ...store,
      dispatch
    };
  };
}

var withSelector = {exports: {}};

var useSyncExternalStoreWithSelector_production = {};

/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredUseSyncExternalStoreWithSelector_production;

function requireUseSyncExternalStoreWithSelector_production () {
	if (hasRequiredUseSyncExternalStoreWithSelector_production) return useSyncExternalStoreWithSelector_production;
	hasRequiredUseSyncExternalStoreWithSelector_production = 1;
	var React = requireReact();
	function is(x, y) {
	  return (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y);
	}
	var objectIs = "function" === typeof Object.is ? Object.is : is,
	  useSyncExternalStore = React.useSyncExternalStore,
	  useRef = React.useRef,
	  useEffect = React.useEffect,
	  useMemo = React.useMemo,
	  useDebugValue = React.useDebugValue;
	useSyncExternalStoreWithSelector_production.useSyncExternalStoreWithSelector = function (
	  subscribe,
	  getSnapshot,
	  getServerSnapshot,
	  selector,
	  isEqual
	) {
	  var instRef = useRef(null);
	  if (null === instRef.current) {
	    var inst = { hasValue: false, value: null };
	    instRef.current = inst;
	  } else inst = instRef.current;
	  instRef = useMemo(
	    function () {
	      function memoizedSelector(nextSnapshot) {
	        if (!hasMemo) {
	          hasMemo = true;
	          memoizedSnapshot = nextSnapshot;
	          nextSnapshot = selector(nextSnapshot);
	          if (void 0 !== isEqual && inst.hasValue) {
	            var currentSelection = inst.value;
	            if (isEqual(currentSelection, nextSnapshot))
	              return (memoizedSelection = currentSelection);
	          }
	          return (memoizedSelection = nextSnapshot);
	        }
	        currentSelection = memoizedSelection;
	        if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
	        var nextSelection = selector(nextSnapshot);
	        if (void 0 !== isEqual && isEqual(currentSelection, nextSelection))
	          return (memoizedSnapshot = nextSnapshot), currentSelection;
	        memoizedSnapshot = nextSnapshot;
	        return (memoizedSelection = nextSelection);
	      }
	      var hasMemo = false,
	        memoizedSnapshot,
	        memoizedSelection,
	        maybeGetServerSnapshot =
	          void 0 === getServerSnapshot ? null : getServerSnapshot;
	      return [
	        function () {
	          return memoizedSelector(getSnapshot());
	        },
	        null === maybeGetServerSnapshot
	          ? void 0
	          : function () {
	              return memoizedSelector(maybeGetServerSnapshot());
	            }
	      ];
	    },
	    [getSnapshot, getServerSnapshot, selector, isEqual]
	  );
	  var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
	  useEffect(
	    function () {
	      inst.hasValue = true;
	      inst.value = value;
	    },
	    [value]
	  );
	  useDebugValue(value);
	  return value;
	};
	return useSyncExternalStoreWithSelector_production;
}

var hasRequiredWithSelector;

function requireWithSelector () {
	if (hasRequiredWithSelector) return withSelector.exports;
	hasRequiredWithSelector = 1;
	{
	  withSelector.exports = requireUseSyncExternalStoreWithSelector_production();
	}
	return withSelector.exports;
}

requireWithSelector();

const React$1 = await importShared('react');

var IS_REACT_19 = /* @__PURE__ */ React$1.version.startsWith("19");
var REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for(
  IS_REACT_19 ? "react.transitional.element" : "react.element"
);
var REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal");
var REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment");
var REACT_STRICT_MODE_TYPE = /* @__PURE__ */ Symbol.for("react.strict_mode");
var REACT_PROFILER_TYPE = /* @__PURE__ */ Symbol.for("react.profiler");
var REACT_CONSUMER_TYPE = /* @__PURE__ */ Symbol.for("react.consumer");
var REACT_CONTEXT_TYPE = /* @__PURE__ */ Symbol.for("react.context");
var REACT_FORWARD_REF_TYPE = /* @__PURE__ */ Symbol.for("react.forward_ref");
var REACT_SUSPENSE_TYPE = /* @__PURE__ */ Symbol.for("react.suspense");
var REACT_SUSPENSE_LIST_TYPE = /* @__PURE__ */ Symbol.for(
  "react.suspense_list"
);
var REACT_MEMO_TYPE = /* @__PURE__ */ Symbol.for("react.memo");
var REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy");
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Memo = REACT_MEMO_TYPE;
function typeOf(object) {
  if (typeof object === "object" && object !== null) {
    const { $$typeof } = object;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        switch (object = object.type, object) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return object;
          default:
            switch (object = object && object.$$typeof, object) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
                return object;
              case REACT_CONSUMER_TYPE:
                return object;
              default:
                return $$typeof;
            }
        }
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, {
  areStatesEqual,
  areOwnPropsEqual,
  areStatePropsEqual
}) {
  let hasRunAtLeastOnce = false;
  let state;
  let ownProps;
  let stateProps;
  let dispatchProps;
  let mergedProps;
  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }
  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps)
      dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }
  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps)
      stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps)
      dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }
  function handleNewState() {
    const nextStateProps = mapStateToProps(state, ownProps);
    const statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged)
      mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }
  function handleSubsequentCalls(nextState, nextOwnProps) {
    const propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    const stateChanged = !areStatesEqual(
      nextState,
      state,
      nextOwnProps,
      ownProps
    );
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }
  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}
function finalPropsSelectorFactory(dispatch, {
  initMapStateToProps,
  initMapDispatchToProps,
  initMergeProps,
  ...options
}) {
  const mapStateToProps = initMapStateToProps(dispatch, options);
  const mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  const mergeProps = initMergeProps(dispatch, options);
  return pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}
function bindActionCreators(actionCreators, dispatch) {
  const boundActionCreators = {};
  for (const key in actionCreators) {
    const actionCreator = actionCreators[key];
    if (typeof actionCreator === "function") {
      boundActionCreators[key] = (...args) => dispatch(actionCreator(...args));
    }
  }
  return boundActionCreators;
}
function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch) {
    const constant = getConstant(dispatch);
    function constantSelector() {
      return constant;
    }
    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
}
function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}
function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, { displayName }) {
    const proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch, void 0);
    };
    proxy.dependsOnOwnProps = true;
    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      let props = proxy(stateOrDispatch, ownProps);
      if (typeof props === "function") {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }
      return props;
    };
    return proxy;
  };
}
function createInvalidArgFactory(arg, name) {
  return (dispatch, options) => {
    throw new Error(
      `Invalid value of type ${typeof arg} for ${name} argument when connecting component ${options.wrappedComponentName}.`
    );
  };
}
function mapDispatchToPropsFactory(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === "object" ? wrapMapToPropsConstant(
    (dispatch) => (
      // @ts-ignore
      bindActionCreators(mapDispatchToProps, dispatch)
    )
  ) : !mapDispatchToProps ? wrapMapToPropsConstant((dispatch) => ({
    dispatch
  })) : typeof mapDispatchToProps === "function" ? (
    // @ts-ignore
    wrapMapToPropsFunc(mapDispatchToProps)
  ) : createInvalidArgFactory(mapDispatchToProps, "mapDispatchToProps");
}
function mapStateToPropsFactory(mapStateToProps) {
  return !mapStateToProps ? wrapMapToPropsConstant(() => ({})) : typeof mapStateToProps === "function" ? (
    // @ts-ignore
    wrapMapToPropsFunc(mapStateToProps)
  ) : createInvalidArgFactory(mapStateToProps, "mapStateToProps");
}
function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return { ...ownProps, ...stateProps, ...dispatchProps };
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, { displayName, areMergedPropsEqual }) {
    let hasRunOnce = false;
    let mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      const nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);
      if (hasRunOnce) {
        if (!areMergedPropsEqual(nextMergedProps, mergedProps))
          mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
      }
      return mergedProps;
    };
  };
}
function mergePropsFactory(mergeProps) {
  return !mergeProps ? () => defaultMergeProps : typeof mergeProps === "function" ? wrapMergePropsFunc(mergeProps) : createInvalidArgFactory(mergeProps, "mergeProps");
}
function defaultNoopBatch(callback) {
  callback();
}
function createListenerCollection() {
  let first = null;
  let last = null;
  return {
    clear() {
      first = null;
      last = null;
    },
    notify() {
      defaultNoopBatch(() => {
        let listener = first;
        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    get() {
      const listeners = [];
      let listener = first;
      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }
      return listeners;
    },
    subscribe(callback) {
      let isSubscribed = true;
      const listener = last = {
        callback,
        next: null,
        prev: last
      };
      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }
      return function unsubscribe() {
        if (!isSubscribed || first === null) return;
        isSubscribed = false;
        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }
        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }
  };
}
var nullListeners = {
  notify() {
  },
  get: () => []
};
function createSubscription(store, parentSub) {
  let unsubscribe;
  let listeners = nullListeners;
  let subscriptionsAmount = 0;
  let selfSubscribed = false;
  function addNestedSub(listener) {
    trySubscribe();
    const cleanupListener = listeners.subscribe(listener);
    let removed = false;
    return () => {
      if (!removed) {
        removed = true;
        cleanupListener();
        tryUnsubscribe();
      }
    };
  }
  function notifyNestedSubs() {
    listeners.notify();
  }
  function handleChangeWrapper() {
    if (subscription.onStateChange) {
      subscription.onStateChange();
    }
  }
  function isSubscribed() {
    return selfSubscribed;
  }
  function trySubscribe() {
    subscriptionsAmount++;
    if (!unsubscribe) {
      unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
      listeners = createListenerCollection();
    }
  }
  function tryUnsubscribe() {
    subscriptionsAmount--;
    if (unsubscribe && subscriptionsAmount === 0) {
      unsubscribe();
      unsubscribe = void 0;
      listeners.clear();
      listeners = nullListeners;
    }
  }
  function trySubscribeSelf() {
    if (!selfSubscribed) {
      selfSubscribed = true;
      trySubscribe();
    }
  }
  function tryUnsubscribeSelf() {
    if (selfSubscribed) {
      selfSubscribed = false;
      tryUnsubscribe();
    }
  }
  const subscription = {
    addNestedSub,
    notifyNestedSubs,
    handleChangeWrapper,
    isSubscribed,
    trySubscribe: trySubscribeSelf,
    tryUnsubscribe: tryUnsubscribeSelf,
    getListeners: () => listeners
  };
  return subscription;
}
var canUseDOM = () => !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
var isDOM = /* @__PURE__ */ canUseDOM();
var isRunningInReactNative = () => typeof navigator !== "undefined" && navigator.product === "ReactNative";
var isReactNative = /* @__PURE__ */ isRunningInReactNative();
var getUseIsomorphicLayoutEffect = () => isDOM || isReactNative ? React$1.useLayoutEffect : React$1.useEffect;
var useIsomorphicLayoutEffect$1 = /* @__PURE__ */ getUseIsomorphicLayoutEffect();
function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}
function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;
  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;
  for (let i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }
  return true;
}
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  $$typeof: true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  $$typeof: true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {
  [ForwardRef]: FORWARD_REF_STATICS,
  [Memo]: MEMO_STATICS
};
function getStatics(component) {
  if (isMemo(component)) {
    return MEMO_STATICS;
  }
  return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
}
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent) {
  if (typeof sourceComponent !== "string") {
    if (objectPrototype) {
      const inheritedComponent = getPrototypeOf(sourceComponent);
      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent);
      }
    }
    let keys = getOwnPropertyNames(sourceComponent);
    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }
    const targetStatics = getStatics(targetComponent);
    const sourceStatics = getStatics(sourceComponent);
    for (let i = 0; i < keys.length; ++i) {
      const key = keys[i];
      if (!KNOWN_STATICS[key] && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        const descriptor = getOwnPropertyDescriptor(sourceComponent, key);
        try {
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {
        }
      }
    }
  }
  return targetComponent;
}
var ContextKey = /* @__PURE__ */ Symbol.for(`react-redux-context`);
var gT = typeof globalThis !== "undefined" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function getContext() {
  if (!React$1.createContext) return {};
  const contextMap = gT[ContextKey] ??= /* @__PURE__ */ new Map();
  let realContext = contextMap.get(React$1.createContext);
  if (!realContext) {
    realContext = React$1.createContext(
      null
    );
    contextMap.set(React$1.createContext, realContext);
  }
  return realContext;
}
var ReactReduxContext = /* @__PURE__ */ getContext();
var NO_SUBSCRIPTION_ARRAY = [null, null];
function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
  useIsomorphicLayoutEffect$1(() => effectFunc(...effectArgs), dependencies);
}
function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, childPropsFromStoreUpdate, notifyNestedSubs) {
  lastWrapperProps.current = wrapperProps;
  renderIsScheduled.current = false;
  if (childPropsFromStoreUpdate.current) {
    childPropsFromStoreUpdate.current = null;
    notifyNestedSubs();
  }
}
function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, isMounted, childPropsFromStoreUpdate, notifyNestedSubs, additionalSubscribeListener) {
  if (!shouldHandleStateChanges) return () => {
  };
  let didUnsubscribe = false;
  let lastThrownError = null;
  const checkForUpdates = () => {
    if (didUnsubscribe || !isMounted.current) {
      return;
    }
    const latestStoreState = store.getState();
    let newChildProps, error;
    try {
      newChildProps = childPropsSelector(
        latestStoreState,
        lastWrapperProps.current
      );
    } catch (e) {
      error = e;
      lastThrownError = e;
    }
    if (!error) {
      lastThrownError = null;
    }
    if (newChildProps === lastChildProps.current) {
      if (!renderIsScheduled.current) {
        notifyNestedSubs();
      }
    } else {
      lastChildProps.current = newChildProps;
      childPropsFromStoreUpdate.current = newChildProps;
      renderIsScheduled.current = true;
      additionalSubscribeListener();
    }
  };
  subscription.onStateChange = checkForUpdates;
  subscription.trySubscribe();
  checkForUpdates();
  const unsubscribeWrapper = () => {
    didUnsubscribe = true;
    subscription.tryUnsubscribe();
    subscription.onStateChange = null;
    if (lastThrownError) {
      throw lastThrownError;
    }
  };
  return unsubscribeWrapper;
}
function strictEqual(a, b) {
  return a === b;
}
function connect(mapStateToProps, mapDispatchToProps, mergeProps, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure,
  areStatesEqual = strictEqual,
  areOwnPropsEqual = shallowEqual,
  areStatePropsEqual = shallowEqual,
  areMergedPropsEqual = shallowEqual,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef = false,
  // the context consumer to use
  context = ReactReduxContext
} = {}) {
  const Context = context;
  const initMapStateToProps = mapStateToPropsFactory(mapStateToProps);
  const initMapDispatchToProps = mapDispatchToPropsFactory(mapDispatchToProps);
  const initMergeProps = mergePropsFactory(mergeProps);
  const shouldHandleStateChanges = Boolean(mapStateToProps);
  const wrapWithConnect = (WrappedComponent) => {
    const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || "Component";
    const displayName = `Connect(${wrappedComponentName})`;
    const selectorFactoryOptions = {
      shouldHandleStateChanges,
      displayName,
      wrappedComponentName,
      WrappedComponent,
      // @ts-ignore
      initMapStateToProps,
      initMapDispatchToProps,
      initMergeProps,
      areStatesEqual,
      areStatePropsEqual,
      areOwnPropsEqual,
      areMergedPropsEqual
    };
    function ConnectFunction(props) {
      const [propsContext, reactReduxForwardedRef, wrapperProps] = React$1.useMemo(() => {
        const { reactReduxForwardedRef: reactReduxForwardedRef2, ...wrapperProps2 } = props;
        return [props.context, reactReduxForwardedRef2, wrapperProps2];
      }, [props]);
      const ContextToUse = React$1.useMemo(() => {
        let ResultContext = Context;
        if (propsContext?.Consumer) ;
        return ResultContext;
      }, [propsContext, Context]);
      const contextValue = React$1.useContext(ContextToUse);
      const didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
      const didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);
      const store = didStoreComeFromProps ? props.store : contextValue.store;
      const getServerState = didStoreComeFromContext ? contextValue.getServerState : store.getState;
      const childPropsSelector = React$1.useMemo(() => {
        return finalPropsSelectorFactory(store.dispatch, selectorFactoryOptions);
      }, [store]);
      const [subscription, notifyNestedSubs] = React$1.useMemo(() => {
        if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY;
        const subscription2 = createSubscription(
          store,
          didStoreComeFromProps ? void 0 : contextValue.subscription
        );
        const notifyNestedSubs2 = subscription2.notifyNestedSubs.bind(subscription2);
        return [subscription2, notifyNestedSubs2];
      }, [store, didStoreComeFromProps, contextValue]);
      const overriddenContextValue = React$1.useMemo(() => {
        if (didStoreComeFromProps) {
          return contextValue;
        }
        return {
          ...contextValue,
          subscription
        };
      }, [didStoreComeFromProps, contextValue, subscription]);
      const lastChildProps = React$1.useRef(void 0);
      const lastWrapperProps = React$1.useRef(wrapperProps);
      const childPropsFromStoreUpdate = React$1.useRef(void 0);
      const renderIsScheduled = React$1.useRef(false);
      const isMounted = React$1.useRef(false);
      const latestSubscriptionCallbackError = React$1.useRef(
        void 0
      );
      useIsomorphicLayoutEffect$1(() => {
        isMounted.current = true;
        return () => {
          isMounted.current = false;
        };
      }, []);
      const actualChildPropsSelector = React$1.useMemo(() => {
        const selector = () => {
          if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
            return childPropsFromStoreUpdate.current;
          }
          return childPropsSelector(store.getState(), wrapperProps);
        };
        return selector;
      }, [store, wrapperProps]);
      const subscribeForReact = React$1.useMemo(() => {
        const subscribe = (reactListener) => {
          if (!subscription) {
            return () => {
            };
          }
          return subscribeUpdates(
            shouldHandleStateChanges,
            store,
            subscription,
            // @ts-ignore
            childPropsSelector,
            lastWrapperProps,
            lastChildProps,
            renderIsScheduled,
            isMounted,
            childPropsFromStoreUpdate,
            notifyNestedSubs,
            reactListener
          );
        };
        return subscribe;
      }, [subscription]);
      useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [
        lastWrapperProps,
        lastChildProps,
        renderIsScheduled,
        wrapperProps,
        childPropsFromStoreUpdate,
        notifyNestedSubs
      ]);
      let actualChildProps;
      try {
        actualChildProps = React$1.useSyncExternalStore(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          subscribeForReact,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          actualChildPropsSelector,
          getServerState ? () => childPropsSelector(getServerState(), wrapperProps) : actualChildPropsSelector
        );
      } catch (err) {
        if (latestSubscriptionCallbackError.current) {
          err.message += `
The error may be correlated with this previous error:
${latestSubscriptionCallbackError.current.stack}

`;
        }
        throw err;
      }
      useIsomorphicLayoutEffect$1(() => {
        latestSubscriptionCallbackError.current = void 0;
        childPropsFromStoreUpdate.current = void 0;
        lastChildProps.current = actualChildProps;
      });
      const renderedWrappedComponent = React$1.useMemo(() => {
        return (
          // @ts-ignore
          /* @__PURE__ */ React$1.createElement(
            WrappedComponent,
            {
              ...actualChildProps,
              ref: reactReduxForwardedRef
            }
          )
        );
      }, [reactReduxForwardedRef, WrappedComponent, actualChildProps]);
      const renderedChild = React$1.useMemo(() => {
        if (shouldHandleStateChanges) {
          return /* @__PURE__ */ React$1.createElement(ContextToUse.Provider, { value: overriddenContextValue }, renderedWrappedComponent);
        }
        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    }
    const _Connect = React$1.memo(ConnectFunction);
    const Connect = _Connect;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = ConnectFunction.displayName = displayName;
    if (forwardRef) {
      const _forwarded = React$1.forwardRef(
        function forwardConnectRef(props, ref) {
          return /* @__PURE__ */ React$1.createElement(Connect, { ...props, reactReduxForwardedRef: ref });
        }
      );
      const forwarded = _forwarded;
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return /* @__PURE__ */ hoistNonReactStatics(forwarded, WrappedComponent);
    }
    return /* @__PURE__ */ hoistNonReactStatics(Connect, WrappedComponent);
  };
  return wrapWithConnect;
}
var connect_default = connect;
function Provider(providerProps) {
  const { children, context, serverState, store } = providerProps;
  const contextValue = React$1.useMemo(() => {
    const subscription = createSubscription(store);
    const baseContextValue = {
      store,
      subscription,
      getServerState: serverState ? () => serverState : void 0
    };
    {
      return baseContextValue;
    }
  }, [store, serverState]);
  const previousState = React$1.useMemo(() => store.getState(), [store]);
  useIsomorphicLayoutEffect$1(() => {
    const { subscription } = contextValue;
    subscription.onStateChange = subscription.notifyNestedSubs;
    subscription.trySubscribe();
    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }
    return () => {
      subscription.tryUnsubscribe();
      subscription.onStateChange = void 0;
    };
  }, [contextValue, previousState]);
  const Context = context || ReactReduxContext;
  return /* @__PURE__ */ React$1.createElement(Context.Provider, { value: contextValue }, children);
}
var Provider_default = Provider;

var prefix$2 = "Invariant failed";
function invariant$1(condition, message) {
  {
    throw new Error(prefix$2);
  }
}

var getRect = function getRect2(_ref) {
  var top = _ref.top, right = _ref.right, bottom = _ref.bottom, left = _ref.left;
  var width = right - left;
  var height = bottom - top;
  var rect = {
    top,
    right,
    bottom,
    left,
    width,
    height,
    x: left,
    y: top,
    center: {
      x: (right + left) / 2,
      y: (bottom + top) / 2
    }
  };
  return rect;
};
var expand = function expand2(target, expandBy) {
  return {
    top: target.top - expandBy.top,
    left: target.left - expandBy.left,
    bottom: target.bottom + expandBy.bottom,
    right: target.right + expandBy.right
  };
};
var shrink = function shrink2(target, shrinkBy) {
  return {
    top: target.top + shrinkBy.top,
    left: target.left + shrinkBy.left,
    bottom: target.bottom - shrinkBy.bottom,
    right: target.right - shrinkBy.right
  };
};
var shift = function shift2(target, shiftBy) {
  return {
    top: target.top + shiftBy.y,
    left: target.left + shiftBy.x,
    bottom: target.bottom + shiftBy.y,
    right: target.right + shiftBy.x
  };
};
var noSpacing$1 = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};
var createBox = function createBox2(_ref2) {
  var borderBox = _ref2.borderBox, _ref2$margin = _ref2.margin, margin = _ref2$margin === void 0 ? noSpacing$1 : _ref2$margin, _ref2$border = _ref2.border, border = _ref2$border === void 0 ? noSpacing$1 : _ref2$border, _ref2$padding = _ref2.padding, padding = _ref2$padding === void 0 ? noSpacing$1 : _ref2$padding;
  var marginBox = getRect(expand(borderBox, margin));
  var paddingBox = getRect(shrink(borderBox, border));
  var contentBox = getRect(shrink(paddingBox, padding));
  return {
    marginBox,
    borderBox: getRect(borderBox),
    paddingBox,
    contentBox,
    margin,
    border,
    padding
  };
};
var parse = function parse2(raw) {
  var value = raw.slice(0, -2);
  var suffix = raw.slice(-2);
  if (suffix !== "px") {
    return 0;
  }
  var result = Number(value);
  !!isNaN(result) ? invariant$1() : void 0;
  return result;
};
var getWindowScroll$1 = function getWindowScroll2() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
};
var offset = function offset2(original, change) {
  var borderBox = original.borderBox, border = original.border, margin = original.margin, padding = original.padding;
  var shifted = shift(borderBox, change);
  return createBox({
    borderBox: shifted,
    border,
    margin,
    padding
  });
};
var withScroll = function withScroll2(original, scroll) {
  if (scroll === void 0) {
    scroll = getWindowScroll$1();
  }
  return offset(original, scroll);
};
var calculateBox = function calculateBox2(borderBox, styles) {
  var margin = {
    top: parse(styles.marginTop),
    right: parse(styles.marginRight),
    bottom: parse(styles.marginBottom),
    left: parse(styles.marginLeft)
  };
  var padding = {
    top: parse(styles.paddingTop),
    right: parse(styles.paddingRight),
    bottom: parse(styles.paddingBottom),
    left: parse(styles.paddingLeft)
  };
  var border = {
    top: parse(styles.borderTopWidth),
    right: parse(styles.borderRightWidth),
    bottom: parse(styles.borderBottomWidth),
    left: parse(styles.borderLeftWidth)
  };
  return createBox({
    borderBox,
    margin,
    padding,
    border
  });
};
var getBox = function getBox2(el) {
  var borderBox = el.getBoundingClientRect();
  var styles = window.getComputedStyle(el);
  return calculateBox(borderBox, styles);
};

var rafSchd = function rafSchd(fn) {
  var lastArgs = [];
  var frameId = null;

  var wrapperFn = function wrapperFn() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    lastArgs = args;

    if (frameId) {
      return;
    }

    frameId = requestAnimationFrame(function () {
      frameId = null;
      fn.apply(void 0, lastArgs);
    });
  };

  wrapperFn.cancel = function () {
    if (!frameId) {
      return;
    }

    cancelAnimationFrame(frameId);
    frameId = null;
  };

  return wrapperFn;
};

function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

const React = await importShared('react');
const {useState,useRef,useEffect,useLayoutEffect,useContext} = React;

const ReactDOM = await importShared('react-dom');
const {flushSync} = ReactDOM;
function log(type, message) {
  {
    return;
  }
}
log.bind(null, "warn");
log.bind(null, "error");
function noop$2() {
}
function getOptions(shared2, fromBinding) {
  return {
    ...shared2,
    ...fromBinding
  };
}
function bindEvents(el, bindings, sharedOptions) {
  const unbindings = bindings.map((binding) => {
    const options = getOptions(sharedOptions, binding.options);
    el.addEventListener(binding.eventName, binding.fn, options);
    return function unbind() {
      el.removeEventListener(binding.eventName, binding.fn, options);
    };
  });
  return function unbindAll() {
    unbindings.forEach((unbind) => {
      unbind();
    });
  };
}
const prefix$1 = "Invariant failed";
class RbdInvariant extends Error {
}
RbdInvariant.prototype.toString = function toString() {
  return this.message;
};
function invariant(condition, message) {
  {
    throw new RbdInvariant(prefix$1);
  }
}
class ErrorBoundary extends React.Component {
  constructor(...args) {
    super(...args);
    this.callbacks = null;
    this.unbind = noop$2;
    this.onWindowError = (event) => {
      const callbacks = this.getCallbacks();
      if (callbacks.isDragging()) {
        callbacks.tryAbort();
      }
      const err = event.error;
      if (err instanceof RbdInvariant) {
        event.preventDefault();
      }
    };
    this.getCallbacks = () => {
      if (!this.callbacks) {
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      }
      return this.callbacks;
    };
    this.setCallbacks = (callbacks) => {
      this.callbacks = callbacks;
    };
  }
  componentDidMount() {
    this.unbind = bindEvents(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(err) {
    if (err instanceof RbdInvariant) {
      this.setState({});
      return;
    }
    throw err;
  }
  componentWillUnmount() {
    this.unbind();
  }
  render() {
    return this.props.children(this.setCallbacks);
  }
}
const dragHandleUsageInstructions = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`;
const position = (index) => index + 1;
const onDragStart = (start2) => `
  You have lifted an item in position ${position(start2.source.index)}
`;
const withLocation = (source, destination) => {
  const isInHomeList = source.droppableId === destination.droppableId;
  const startPosition = position(source.index);
  const endPosition = position(destination.index);
  if (isInHomeList) {
    return `
      You have moved the item from position ${startPosition}
      to position ${endPosition}
    `;
  }
  return `
    You have moved the item from position ${startPosition}
    in list ${source.droppableId}
    to list ${destination.droppableId}
    in position ${endPosition}
  `;
};
const withCombine = (id, source, combine2) => {
  const inHomeList = source.droppableId === combine2.droppableId;
  if (inHomeList) {
    return `
      The item ${id}
      has been combined with ${combine2.draggableId}`;
  }
  return `
      The item ${id}
      in list ${source.droppableId}
      has been combined with ${combine2.draggableId}
      in list ${combine2.droppableId}
    `;
};
const onDragUpdate = (update2) => {
  const location = update2.destination;
  if (location) {
    return withLocation(update2.source, location);
  }
  const combine2 = update2.combine;
  if (combine2) {
    return withCombine(update2.draggableId, update2.source, combine2);
  }
  return "You are over an area that cannot be dropped on";
};
const returnedToStart = (source) => `
  The item has returned to its starting position
  of ${position(source.index)}
`;
const onDragEnd = (result) => {
  if (result.reason === "CANCEL") {
    return `
      Movement cancelled.
      ${returnedToStart(result.source)}
    `;
  }
  const location = result.destination;
  const combine2 = result.combine;
  if (location) {
    return `
      You have dropped the item.
      ${withLocation(result.source, location)}
    `;
  }
  if (combine2) {
    return `
      You have dropped the item.
      ${withCombine(result.draggableId, result.source, combine2)}
    `;
  }
  return `
    The item has been dropped while not over a drop area.
    ${returnedToStart(result.source)}
  `;
};
const preset = {
  dragHandleUsageInstructions,
  onDragStart,
  onDragUpdate,
  onDragEnd
};
function isEqual$2(first, second) {
  if (first === second) {
    return true;
  }
  if (Number.isNaN(first) && Number.isNaN(second)) {
    return true;
  }
  return false;
}
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (let i = 0; i < newInputs.length; i++) {
    if (!isEqual$2(newInputs[i], lastInputs[i])) {
      return false;
    }
  }
  return true;
}
function useMemo(getResult, inputs) {
  const initial = useState(() => ({
    inputs,
    result: getResult()
  }))[0];
  const isFirstRun = useRef(true);
  const committed = useRef(initial);
  const useCache = isFirstRun.current || Boolean(inputs && committed.current.inputs && areInputsEqual(inputs, committed.current.inputs));
  const cache = useCache ? committed.current : {
    inputs,
    result: getResult()
  };
  useEffect(() => {
    isFirstRun.current = false;
    committed.current = cache;
  }, [cache]);
  return cache.result;
}
function useCallback(callback, inputs) {
  return useMemo(() => callback, inputs);
}
const origin = {
  x: 0,
  y: 0
};
const add = (point1, point2) => ({
  x: point1.x + point2.x,
  y: point1.y + point2.y
});
const subtract = (point1, point2) => ({
  x: point1.x - point2.x,
  y: point1.y - point2.y
});
const isEqual$1 = (point1, point2) => point1.x === point2.x && point1.y === point2.y;
const negate = (point) => ({
  x: point.x !== 0 ? -point.x : 0,
  y: point.y !== 0 ? -point.y : 0
});
const patch = (line, value, otherValue = 0) => {
  if (line === "x") {
    return {
      x: value,
      y: otherValue
    };
  }
  return {
    x: otherValue,
    y: value
  };
};
const distance = (point1, point2) => Math.sqrt((point2.x - point1.x) ** 2 + (point2.y - point1.y) ** 2);
const closest$1 = (target, points) => Math.min(...points.map((point) => distance(target, point)));
const apply = (fn) => (point) => ({
  x: fn(point.x),
  y: fn(point.y)
});
var executeClip = (frame, subject) => {
  const result = getRect({
    top: Math.max(subject.top, frame.top),
    right: Math.min(subject.right, frame.right),
    bottom: Math.min(subject.bottom, frame.bottom),
    left: Math.max(subject.left, frame.left)
  });
  if (result.width <= 0 || result.height <= 0) {
    return null;
  }
  return result;
};
const offsetByPosition = (spacing, point) => ({
  top: spacing.top + point.y,
  left: spacing.left + point.x,
  bottom: spacing.bottom + point.y,
  right: spacing.right + point.x
});
const getCorners = (spacing) => [{
  x: spacing.left,
  y: spacing.top
}, {
  x: spacing.right,
  y: spacing.top
}, {
  x: spacing.left,
  y: spacing.bottom
}, {
  x: spacing.right,
  y: spacing.bottom
}];
const noSpacing = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};
const scroll$1 = (target, frame) => {
  if (!frame) {
    return target;
  }
  return offsetByPosition(target, frame.scroll.diff.displacement);
};
const increase = (target, axis, withPlaceholder) => {
  if (withPlaceholder && withPlaceholder.increasedBy) {
    return {
      ...target,
      [axis.end]: target[axis.end] + withPlaceholder.increasedBy[axis.line]
    };
  }
  return target;
};
const clip = (target, frame) => {
  if (frame && frame.shouldClipSubject) {
    return executeClip(frame.pageMarginBox, target);
  }
  return getRect(target);
};
var getSubject = ({
  page,
  withPlaceholder,
  axis,
  frame
}) => {
  const scrolled = scroll$1(page.marginBox, frame);
  const increased = increase(scrolled, axis, withPlaceholder);
  const clipped = clip(increased, frame);
  return {
    page,
    withPlaceholder,
    active: clipped
  };
};
var scrollDroppable = (droppable2, newScroll) => {
  !droppable2.frame ? invariant() : void 0;
  const scrollable = droppable2.frame;
  const scrollDiff = subtract(newScroll, scrollable.scroll.initial);
  const scrollDisplacement = negate(scrollDiff);
  const frame = {
    ...scrollable,
    scroll: {
      initial: scrollable.scroll.initial,
      current: newScroll,
      diff: {
        value: scrollDiff,
        displacement: scrollDisplacement
      },
      max: scrollable.scroll.max
    }
  };
  const subject = getSubject({
    page: droppable2.subject.page,
    withPlaceholder: droppable2.subject.withPlaceholder,
    axis: droppable2.axis,
    frame
  });
  const result = {
    ...droppable2,
    frame,
    subject
  };
  return result;
};
function memoizeOne(resultFn, isEqual2 = areInputsEqual) {
  let cache = null;
  function memoized(...newArgs) {
    if (cache && cache.lastThis === this && isEqual2(newArgs, cache.lastArgs)) {
      return cache.lastResult;
    }
    const lastResult = resultFn.apply(this, newArgs);
    cache = {
      lastResult,
      lastArgs: newArgs,
      lastThis: this
    };
    return lastResult;
  }
  memoized.clear = function clear() {
    cache = null;
  };
  return memoized;
}
const toDroppableMap = memoizeOne((droppables) => droppables.reduce((previous, current) => {
  previous[current.descriptor.id] = current;
  return previous;
}, {}));
const toDraggableMap = memoizeOne((draggables) => draggables.reduce((previous, current) => {
  previous[current.descriptor.id] = current;
  return previous;
}, {}));
const toDroppableList = memoizeOne((droppables) => Object.values(droppables));
const toDraggableList = memoizeOne((draggables) => Object.values(draggables));
var getDraggablesInsideDroppable = memoizeOne((droppableId, draggables) => {
  const result = toDraggableList(draggables).filter((draggable2) => droppableId === draggable2.descriptor.droppableId).sort((a, b) => a.descriptor.index - b.descriptor.index);
  return result;
});
function tryGetDestination(impact) {
  if (impact.at && impact.at.type === "REORDER") {
    return impact.at.destination;
  }
  return null;
}
function tryGetCombine(impact) {
  if (impact.at && impact.at.type === "COMBINE") {
    return impact.at.combine;
  }
  return null;
}
var removeDraggableFromList = memoizeOne((remove, list) => list.filter((item) => item.descriptor.id !== remove.descriptor.id));
var moveToNextCombine = ({
  isMovingForward,
  draggable: draggable2,
  destination,
  insideDestination,
  previousImpact
}) => {
  if (!destination.isCombineEnabled) {
    return null;
  }
  const location = tryGetDestination(previousImpact);
  if (!location) {
    return null;
  }
  function getImpact(target) {
    const at = {
      type: "COMBINE",
      combine: {
        draggableId: target,
        droppableId: destination.descriptor.id
      }
    };
    return {
      ...previousImpact,
      at
    };
  }
  const all = previousImpact.displaced.all;
  const closestId = all.length ? all[0] : null;
  if (isMovingForward) {
    return closestId ? getImpact(closestId) : null;
  }
  const withoutDraggable = removeDraggableFromList(draggable2, insideDestination);
  if (!closestId) {
    if (!withoutDraggable.length) {
      return null;
    }
    const last = withoutDraggable[withoutDraggable.length - 1];
    return getImpact(last.descriptor.id);
  }
  const indexOfClosest = withoutDraggable.findIndex((d) => d.descriptor.id === closestId);
  !(indexOfClosest !== -1) ? invariant() : void 0;
  const proposedIndex = indexOfClosest - 1;
  if (proposedIndex < 0) {
    return null;
  }
  const before = withoutDraggable[proposedIndex];
  return getImpact(before.descriptor.id);
};
var isHomeOf = (draggable2, destination) => draggable2.descriptor.droppableId === destination.descriptor.id;
const noDisplacedBy = {
  point: origin,
  value: 0
};
const emptyGroups = {
  invisible: {},
  visible: {},
  all: []
};
const noImpact = {
  displaced: emptyGroups,
  displacedBy: noDisplacedBy,
  at: null
};
var isWithin = (lowerBound, upperBound) => (value) => lowerBound <= value && value <= upperBound;
var isPartiallyVisibleThroughFrame = (frame) => {
  const isWithinVertical = isWithin(frame.top, frame.bottom);
  const isWithinHorizontal = isWithin(frame.left, frame.right);
  return (subject) => {
    const isContained = isWithinVertical(subject.top) && isWithinVertical(subject.bottom) && isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
    if (isContained) {
      return true;
    }
    const isPartiallyVisibleVertically = isWithinVertical(subject.top) || isWithinVertical(subject.bottom);
    const isPartiallyVisibleHorizontally = isWithinHorizontal(subject.left) || isWithinHorizontal(subject.right);
    const isPartiallyContained = isPartiallyVisibleVertically && isPartiallyVisibleHorizontally;
    if (isPartiallyContained) {
      return true;
    }
    const isBiggerVertically = subject.top < frame.top && subject.bottom > frame.bottom;
    const isBiggerHorizontally = subject.left < frame.left && subject.right > frame.right;
    const isTargetBiggerThanFrame = isBiggerVertically && isBiggerHorizontally;
    if (isTargetBiggerThanFrame) {
      return true;
    }
    const isTargetBiggerOnOneAxis = isBiggerVertically && isPartiallyVisibleHorizontally || isBiggerHorizontally && isPartiallyVisibleVertically;
    return isTargetBiggerOnOneAxis;
  };
};
var isTotallyVisibleThroughFrame = (frame) => {
  const isWithinVertical = isWithin(frame.top, frame.bottom);
  const isWithinHorizontal = isWithin(frame.left, frame.right);
  return (subject) => {
    const isContained = isWithinVertical(subject.top) && isWithinVertical(subject.bottom) && isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
    return isContained;
  };
};
const vertical = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
};
const horizontal = {
  direction: "horizontal",
  line: "x",
  crossAxisLine: "y",
  start: "left",
  end: "right",
  size: "width",
  crossAxisStart: "top",
  crossAxisEnd: "bottom",
  crossAxisSize: "height"
};
var isTotallyVisibleThroughFrameOnAxis = (axis) => (frame) => {
  const isWithinVertical = isWithin(frame.top, frame.bottom);
  const isWithinHorizontal = isWithin(frame.left, frame.right);
  return (subject) => {
    if (axis === vertical) {
      return isWithinVertical(subject.top) && isWithinVertical(subject.bottom);
    }
    return isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
  };
};
const getDroppableDisplaced = (target, destination) => {
  const displacement = destination.frame ? destination.frame.scroll.diff.displacement : origin;
  return offsetByPosition(target, displacement);
};
const isVisibleInDroppable = (target, destination, isVisibleThroughFrameFn) => {
  if (!destination.subject.active) {
    return false;
  }
  return isVisibleThroughFrameFn(destination.subject.active)(target);
};
const isVisibleInViewport = (target, viewport, isVisibleThroughFrameFn) => isVisibleThroughFrameFn(viewport)(target);
const isVisible$1 = ({
  target: toBeDisplaced,
  destination,
  viewport,
  withDroppableDisplacement: withDroppableDisplacement2,
  isVisibleThroughFrameFn
}) => {
  const displacedTarget = withDroppableDisplacement2 ? getDroppableDisplaced(toBeDisplaced, destination) : toBeDisplaced;
  return isVisibleInDroppable(displacedTarget, destination, isVisibleThroughFrameFn) && isVisibleInViewport(displacedTarget, viewport, isVisibleThroughFrameFn);
};
const isPartiallyVisible = (args) => isVisible$1({
  ...args,
  isVisibleThroughFrameFn: isPartiallyVisibleThroughFrame
});
const isTotallyVisible = (args) => isVisible$1({
  ...args,
  isVisibleThroughFrameFn: isTotallyVisibleThroughFrame
});
const isTotallyVisibleOnAxis = (args) => isVisible$1({
  ...args,
  isVisibleThroughFrameFn: isTotallyVisibleThroughFrameOnAxis(args.destination.axis)
});
const getShouldAnimate = (id, last, forceShouldAnimate) => {
  if (typeof forceShouldAnimate === "boolean") {
    return forceShouldAnimate;
  }
  if (!last) {
    return true;
  }
  const {
    invisible,
    visible
  } = last;
  if (invisible[id]) {
    return false;
  }
  const previous = visible[id];
  return previous ? previous.shouldAnimate : true;
};
function getTarget(draggable2, displacedBy) {
  const marginBox = draggable2.page.marginBox;
  const expandBy = {
    top: displacedBy.point.y,
    right: 0,
    bottom: 0,
    left: displacedBy.point.x
  };
  return getRect(expand(marginBox, expandBy));
}
function getDisplacementGroups({
  afterDragging,
  destination,
  displacedBy,
  viewport,
  forceShouldAnimate,
  last
}) {
  return afterDragging.reduce(function process2(groups, draggable2) {
    const target = getTarget(draggable2, displacedBy);
    const id = draggable2.descriptor.id;
    groups.all.push(id);
    const isVisible2 = isPartiallyVisible({
      target,
      destination,
      viewport,
      withDroppableDisplacement: true
    });
    if (!isVisible2) {
      groups.invisible[draggable2.descriptor.id] = true;
      return groups;
    }
    const shouldAnimate = getShouldAnimate(id, last, forceShouldAnimate);
    const displacement = {
      draggableId: id,
      shouldAnimate
    };
    groups.visible[id] = displacement;
    return groups;
  }, {
    all: [],
    visible: {},
    invisible: {}
  });
}
function getIndexOfLastItem(draggables, options) {
  if (!draggables.length) {
    return 0;
  }
  const indexOfLastItem = draggables[draggables.length - 1].descriptor.index;
  return options.inHomeList ? indexOfLastItem : indexOfLastItem + 1;
}
function goAtEnd({
  insideDestination,
  inHomeList,
  displacedBy,
  destination
}) {
  const newIndex = getIndexOfLastItem(insideDestination, {
    inHomeList
  });
  return {
    displaced: emptyGroups,
    displacedBy,
    at: {
      type: "REORDER",
      destination: {
        droppableId: destination.descriptor.id,
        index: newIndex
      }
    }
  };
}
function calculateReorderImpact({
  draggable: draggable2,
  insideDestination,
  destination,
  viewport,
  displacedBy,
  last,
  index,
  forceShouldAnimate
}) {
  const inHomeList = isHomeOf(draggable2, destination);
  if (index == null) {
    return goAtEnd({
      insideDestination,
      inHomeList,
      displacedBy,
      destination
    });
  }
  const match = insideDestination.find((item) => item.descriptor.index === index);
  if (!match) {
    return goAtEnd({
      insideDestination,
      inHomeList,
      displacedBy,
      destination
    });
  }
  const withoutDragging = removeDraggableFromList(draggable2, insideDestination);
  const sliceFrom = insideDestination.indexOf(match);
  const impacted = withoutDragging.slice(sliceFrom);
  const displaced = getDisplacementGroups({
    afterDragging: impacted,
    destination,
    displacedBy,
    last,
    viewport: viewport.frame,
    forceShouldAnimate
  });
  return {
    displaced,
    displacedBy,
    at: {
      type: "REORDER",
      destination: {
        droppableId: destination.descriptor.id,
        index
      }
    }
  };
}
function didStartAfterCritical(draggableId, afterCritical) {
  return Boolean(afterCritical.effected[draggableId]);
}
var fromCombine = ({
  isMovingForward,
  destination,
  draggables,
  combine: combine2,
  afterCritical
}) => {
  if (!destination.isCombineEnabled) {
    return null;
  }
  const combineId = combine2.draggableId;
  const combineWith = draggables[combineId];
  const combineWithIndex = combineWith.descriptor.index;
  const didCombineWithStartAfterCritical = didStartAfterCritical(combineId, afterCritical);
  if (didCombineWithStartAfterCritical) {
    if (isMovingForward) {
      return combineWithIndex;
    }
    return combineWithIndex - 1;
  }
  if (isMovingForward) {
    return combineWithIndex + 1;
  }
  return combineWithIndex;
};
var fromReorder = ({
  isMovingForward,
  isInHomeList,
  insideDestination,
  location
}) => {
  if (!insideDestination.length) {
    return null;
  }
  const currentIndex = location.index;
  const proposedIndex = isMovingForward ? currentIndex + 1 : currentIndex - 1;
  const firstIndex = insideDestination[0].descriptor.index;
  const lastIndex = insideDestination[insideDestination.length - 1].descriptor.index;
  const upperBound = isInHomeList ? lastIndex : lastIndex + 1;
  if (proposedIndex < firstIndex) {
    return null;
  }
  if (proposedIndex > upperBound) {
    return null;
  }
  return proposedIndex;
};
var moveToNextIndex = ({
  isMovingForward,
  isInHomeList,
  draggable: draggable2,
  draggables,
  destination,
  insideDestination,
  previousImpact,
  viewport,
  afterCritical
}) => {
  const wasAt = previousImpact.at;
  !wasAt ? invariant() : void 0;
  if (wasAt.type === "REORDER") {
    const newIndex2 = fromReorder({
      isMovingForward,
      isInHomeList,
      location: wasAt.destination,
      insideDestination
    });
    if (newIndex2 == null) {
      return null;
    }
    return calculateReorderImpact({
      draggable: draggable2,
      insideDestination,
      destination,
      viewport,
      last: previousImpact.displaced,
      displacedBy: previousImpact.displacedBy,
      index: newIndex2
    });
  }
  const newIndex = fromCombine({
    isMovingForward,
    destination,
    displaced: previousImpact.displaced,
    draggables,
    combine: wasAt.combine,
    afterCritical
  });
  if (newIndex == null) {
    return null;
  }
  return calculateReorderImpact({
    draggable: draggable2,
    insideDestination,
    destination,
    viewport,
    last: previousImpact.displaced,
    displacedBy: previousImpact.displacedBy,
    index: newIndex
  });
};
var getCombinedItemDisplacement = ({
  displaced,
  afterCritical,
  combineWith,
  displacedBy
}) => {
  const isDisplaced = Boolean(displaced.visible[combineWith] || displaced.invisible[combineWith]);
  if (didStartAfterCritical(combineWith, afterCritical)) {
    return isDisplaced ? origin : negate(displacedBy.point);
  }
  return isDisplaced ? displacedBy.point : origin;
};
var whenCombining = ({
  afterCritical,
  impact,
  draggables
}) => {
  const combine2 = tryGetCombine(impact);
  !combine2 ? invariant() : void 0;
  const combineWith = combine2.draggableId;
  const center = draggables[combineWith].page.borderBox.center;
  const displaceBy = getCombinedItemDisplacement({
    displaced: impact.displaced,
    afterCritical,
    combineWith,
    displacedBy: impact.displacedBy
  });
  return add(center, displaceBy);
};
const distanceFromStartToBorderBoxCenter = (axis, box) => box.margin[axis.start] + box.borderBox[axis.size] / 2;
const distanceFromEndToBorderBoxCenter = (axis, box) => box.margin[axis.end] + box.borderBox[axis.size] / 2;
const getCrossAxisBorderBoxCenter = (axis, target, isMoving) => target[axis.crossAxisStart] + isMoving.margin[axis.crossAxisStart] + isMoving.borderBox[axis.crossAxisSize] / 2;
const goAfter = ({
  axis,
  moveRelativeTo,
  isMoving
}) => patch(axis.line, moveRelativeTo.marginBox[axis.end] + distanceFromStartToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveRelativeTo.marginBox, isMoving));
const goBefore = ({
  axis,
  moveRelativeTo,
  isMoving
}) => patch(axis.line, moveRelativeTo.marginBox[axis.start] - distanceFromEndToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveRelativeTo.marginBox, isMoving));
const goIntoStart = ({
  axis,
  moveInto,
  isMoving
}) => patch(axis.line, moveInto.contentBox[axis.start] + distanceFromStartToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveInto.contentBox, isMoving));
var whenReordering = ({
  impact,
  draggable: draggable2,
  draggables,
  droppable: droppable2,
  afterCritical
}) => {
  const insideDestination = getDraggablesInsideDroppable(droppable2.descriptor.id, draggables);
  const draggablePage = draggable2.page;
  const axis = droppable2.axis;
  if (!insideDestination.length) {
    return goIntoStart({
      axis,
      moveInto: droppable2.page,
      isMoving: draggablePage
    });
  }
  const {
    displaced,
    displacedBy
  } = impact;
  const closestAfter = displaced.all[0];
  if (closestAfter) {
    const closest2 = draggables[closestAfter];
    if (didStartAfterCritical(closestAfter, afterCritical)) {
      return goBefore({
        axis,
        moveRelativeTo: closest2.page,
        isMoving: draggablePage
      });
    }
    const withDisplacement = offset(closest2.page, displacedBy.point);
    return goBefore({
      axis,
      moveRelativeTo: withDisplacement,
      isMoving: draggablePage
    });
  }
  const last = insideDestination[insideDestination.length - 1];
  if (last.descriptor.id === draggable2.descriptor.id) {
    return draggablePage.borderBox.center;
  }
  if (didStartAfterCritical(last.descriptor.id, afterCritical)) {
    const page = offset(last.page, negate(afterCritical.displacedBy.point));
    return goAfter({
      axis,
      moveRelativeTo: page,
      isMoving: draggablePage
    });
  }
  return goAfter({
    axis,
    moveRelativeTo: last.page,
    isMoving: draggablePage
  });
};
var withDroppableDisplacement = (droppable2, point) => {
  const frame = droppable2.frame;
  if (!frame) {
    return point;
  }
  return add(point, frame.scroll.diff.displacement);
};
const getResultWithoutDroppableDisplacement = ({
  impact,
  draggable: draggable2,
  droppable: droppable2,
  draggables,
  afterCritical
}) => {
  const original = draggable2.page.borderBox.center;
  const at = impact.at;
  if (!droppable2) {
    return original;
  }
  if (!at) {
    return original;
  }
  if (at.type === "REORDER") {
    return whenReordering({
      impact,
      draggable: draggable2,
      draggables,
      droppable: droppable2,
      afterCritical
    });
  }
  return whenCombining({
    impact,
    draggables,
    afterCritical
  });
};
var getPageBorderBoxCenterFromImpact = (args) => {
  const withoutDisplacement = getResultWithoutDroppableDisplacement(args);
  const droppable2 = args.droppable;
  const withDisplacement = droppable2 ? withDroppableDisplacement(droppable2, withoutDisplacement) : withoutDisplacement;
  return withDisplacement;
};
var scrollViewport = (viewport, newScroll) => {
  const diff = subtract(newScroll, viewport.scroll.initial);
  const displacement = negate(diff);
  const frame = getRect({
    top: newScroll.y,
    bottom: newScroll.y + viewport.frame.height,
    left: newScroll.x,
    right: newScroll.x + viewport.frame.width
  });
  const updated = {
    frame,
    scroll: {
      initial: viewport.scroll.initial,
      max: viewport.scroll.max,
      current: newScroll,
      diff: {
        value: diff,
        displacement
      }
    }
  };
  return updated;
};
function getDraggables$1(ids, draggables) {
  return ids.map((id) => draggables[id]);
}
function tryGetVisible(id, groups) {
  for (let i = 0; i < groups.length; i++) {
    const displacement = groups[i].visible[id];
    if (displacement) {
      return displacement;
    }
  }
  return null;
}
var speculativelyIncrease = ({
  impact,
  viewport,
  destination,
  draggables,
  maxScrollChange
}) => {
  const scrolledViewport = scrollViewport(viewport, add(viewport.scroll.current, maxScrollChange));
  const scrolledDroppable = destination.frame ? scrollDroppable(destination, add(destination.frame.scroll.current, maxScrollChange)) : destination;
  const last = impact.displaced;
  const withViewportScroll = getDisplacementGroups({
    afterDragging: getDraggables$1(last.all, draggables),
    destination,
    displacedBy: impact.displacedBy,
    viewport: scrolledViewport.frame,
    last,
    forceShouldAnimate: false
  });
  const withDroppableScroll2 = getDisplacementGroups({
    afterDragging: getDraggables$1(last.all, draggables),
    destination: scrolledDroppable,
    displacedBy: impact.displacedBy,
    viewport: viewport.frame,
    last,
    forceShouldAnimate: false
  });
  const invisible = {};
  const visible = {};
  const groups = [last, withViewportScroll, withDroppableScroll2];
  last.all.forEach((id) => {
    const displacement = tryGetVisible(id, groups);
    if (displacement) {
      visible[id] = displacement;
      return;
    }
    invisible[id] = true;
  });
  const newImpact = {
    ...impact,
    displaced: {
      all: last.all,
      invisible,
      visible
    }
  };
  return newImpact;
};
var withViewportDisplacement = (viewport, point) => add(viewport.scroll.diff.displacement, point);
var getClientFromPageBorderBoxCenter = ({
  pageBorderBoxCenter,
  draggable: draggable2,
  viewport
}) => {
  const withoutPageScrollChange = withViewportDisplacement(viewport, pageBorderBoxCenter);
  const offset2 = subtract(withoutPageScrollChange, draggable2.page.borderBox.center);
  return add(draggable2.client.borderBox.center, offset2);
};
var isTotallyVisibleInNewLocation = ({
  draggable: draggable2,
  destination,
  newPageBorderBoxCenter,
  viewport,
  withDroppableDisplacement: withDroppableDisplacement2,
  onlyOnMainAxis = false
}) => {
  const changeNeeded = subtract(newPageBorderBoxCenter, draggable2.page.borderBox.center);
  const shifted = offsetByPosition(draggable2.page.borderBox, changeNeeded);
  const args = {
    target: shifted,
    destination,
    withDroppableDisplacement: withDroppableDisplacement2,
    viewport
  };
  return onlyOnMainAxis ? isTotallyVisibleOnAxis(args) : isTotallyVisible(args);
};
var moveToNextPlace = ({
  isMovingForward,
  draggable: draggable2,
  destination,
  draggables,
  previousImpact,
  viewport,
  previousPageBorderBoxCenter,
  previousClientSelection,
  afterCritical
}) => {
  if (!destination.isEnabled) {
    return null;
  }
  const insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
  const isInHomeList = isHomeOf(draggable2, destination);
  const impact = moveToNextCombine({
    isMovingForward,
    draggable: draggable2,
    destination,
    insideDestination,
    previousImpact
  }) || moveToNextIndex({
    isMovingForward,
    isInHomeList,
    draggable: draggable2,
    draggables,
    destination,
    insideDestination,
    previousImpact,
    viewport,
    afterCritical
  });
  if (!impact) {
    return null;
  }
  const pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
    impact,
    draggable: draggable2,
    droppable: destination,
    draggables,
    afterCritical
  });
  const isVisibleInNewLocation = isTotallyVisibleInNewLocation({
    draggable: draggable2,
    destination,
    newPageBorderBoxCenter: pageBorderBoxCenter,
    viewport: viewport.frame,
    withDroppableDisplacement: false,
    onlyOnMainAxis: true
  });
  if (isVisibleInNewLocation) {
    const clientSelection = getClientFromPageBorderBoxCenter({
      pageBorderBoxCenter,
      draggable: draggable2,
      viewport
    });
    return {
      clientSelection,
      impact,
      scrollJumpRequest: null
    };
  }
  const distance2 = subtract(pageBorderBoxCenter, previousPageBorderBoxCenter);
  const cautious = speculativelyIncrease({
    impact,
    viewport,
    destination,
    draggables,
    maxScrollChange: distance2
  });
  return {
    clientSelection: previousClientSelection,
    impact: cautious,
    scrollJumpRequest: distance2
  };
};
const getKnownActive = (droppable2) => {
  const rect = droppable2.subject.active;
  !rect ? invariant() : void 0;
  return rect;
};
var getBestCrossAxisDroppable = ({
  isMovingForward,
  pageBorderBoxCenter,
  source,
  droppables,
  viewport
}) => {
  const active = source.subject.active;
  if (!active) {
    return null;
  }
  const axis = source.axis;
  const isBetweenSourceClipped = isWithin(active[axis.start], active[axis.end]);
  const candidates = toDroppableList(droppables).filter((droppable2) => droppable2 !== source).filter((droppable2) => droppable2.isEnabled).filter((droppable2) => Boolean(droppable2.subject.active)).filter((droppable2) => isPartiallyVisibleThroughFrame(viewport.frame)(getKnownActive(droppable2))).filter((droppable2) => {
    const activeOfTarget = getKnownActive(droppable2);
    if (isMovingForward) {
      return active[axis.crossAxisEnd] < activeOfTarget[axis.crossAxisEnd];
    }
    return activeOfTarget[axis.crossAxisStart] < active[axis.crossAxisStart];
  }).filter((droppable2) => {
    const activeOfTarget = getKnownActive(droppable2);
    const isBetweenDestinationClipped = isWithin(activeOfTarget[axis.start], activeOfTarget[axis.end]);
    return isBetweenSourceClipped(activeOfTarget[axis.start]) || isBetweenSourceClipped(activeOfTarget[axis.end]) || isBetweenDestinationClipped(active[axis.start]) || isBetweenDestinationClipped(active[axis.end]);
  }).sort((a, b) => {
    const first = getKnownActive(a)[axis.crossAxisStart];
    const second = getKnownActive(b)[axis.crossAxisStart];
    if (isMovingForward) {
      return first - second;
    }
    return second - first;
  }).filter((droppable2, index, array) => getKnownActive(droppable2)[axis.crossAxisStart] === getKnownActive(array[0])[axis.crossAxisStart]);
  if (!candidates.length) {
    return null;
  }
  if (candidates.length === 1) {
    return candidates[0];
  }
  const contains = candidates.filter((droppable2) => {
    const isWithinDroppable = isWithin(getKnownActive(droppable2)[axis.start], getKnownActive(droppable2)[axis.end]);
    return isWithinDroppable(pageBorderBoxCenter[axis.line]);
  });
  if (contains.length === 1) {
    return contains[0];
  }
  if (contains.length > 1) {
    return contains.sort((a, b) => getKnownActive(a)[axis.start] - getKnownActive(b)[axis.start])[0];
  }
  return candidates.sort((a, b) => {
    const first = closest$1(pageBorderBoxCenter, getCorners(getKnownActive(a)));
    const second = closest$1(pageBorderBoxCenter, getCorners(getKnownActive(b)));
    if (first !== second) {
      return first - second;
    }
    return getKnownActive(a)[axis.start] - getKnownActive(b)[axis.start];
  })[0];
};
const getCurrentPageBorderBoxCenter = (draggable2, afterCritical) => {
  const original = draggable2.page.borderBox.center;
  return didStartAfterCritical(draggable2.descriptor.id, afterCritical) ? subtract(original, afterCritical.displacedBy.point) : original;
};
const getCurrentPageBorderBox = (draggable2, afterCritical) => {
  const original = draggable2.page.borderBox;
  return didStartAfterCritical(draggable2.descriptor.id, afterCritical) ? offsetByPosition(original, negate(afterCritical.displacedBy.point)) : original;
};
var getClosestDraggable = ({
  pageBorderBoxCenter,
  viewport,
  destination,
  insideDestination,
  afterCritical
}) => {
  const sorted = insideDestination.filter((draggable2) => isTotallyVisible({
    target: getCurrentPageBorderBox(draggable2, afterCritical),
    destination,
    viewport: viewport.frame,
    withDroppableDisplacement: true
  })).sort((a, b) => {
    const distanceToA = distance(pageBorderBoxCenter, withDroppableDisplacement(destination, getCurrentPageBorderBoxCenter(a, afterCritical)));
    const distanceToB = distance(pageBorderBoxCenter, withDroppableDisplacement(destination, getCurrentPageBorderBoxCenter(b, afterCritical)));
    if (distanceToA < distanceToB) {
      return -1;
    }
    if (distanceToB < distanceToA) {
      return 1;
    }
    return a.descriptor.index - b.descriptor.index;
  });
  return sorted[0] || null;
};
var getDisplacedBy = memoizeOne(function getDisplacedBy2(axis, displaceBy) {
  const displacement = displaceBy[axis.line];
  return {
    value: displacement,
    point: patch(axis.line, displacement)
  };
});
const getRequiredGrowthForPlaceholder = (droppable2, placeholderSize, draggables) => {
  const axis = droppable2.axis;
  if (droppable2.descriptor.mode === "virtual") {
    return patch(axis.line, placeholderSize[axis.line]);
  }
  const availableSpace = droppable2.subject.page.contentBox[axis.size];
  const insideDroppable = getDraggablesInsideDroppable(droppable2.descriptor.id, draggables);
  const spaceUsed = insideDroppable.reduce((sum, dimension) => sum + dimension.client.marginBox[axis.size], 0);
  const requiredSpace = spaceUsed + placeholderSize[axis.line];
  const needsToGrowBy = requiredSpace - availableSpace;
  if (needsToGrowBy <= 0) {
    return null;
  }
  return patch(axis.line, needsToGrowBy);
};
const withMaxScroll = (frame, max) => ({
  ...frame,
  scroll: {
    ...frame.scroll,
    max
  }
});
const addPlaceholder = (droppable2, draggable2, draggables) => {
  const frame = droppable2.frame;
  !!isHomeOf(draggable2, droppable2) ? invariant() : void 0;
  !!droppable2.subject.withPlaceholder ? invariant() : void 0;
  const placeholderSize = getDisplacedBy(droppable2.axis, draggable2.displaceBy).point;
  const requiredGrowth = getRequiredGrowthForPlaceholder(droppable2, placeholderSize, draggables);
  const added = {
    placeholderSize,
    increasedBy: requiredGrowth,
    oldFrameMaxScroll: droppable2.frame ? droppable2.frame.scroll.max : null
  };
  if (!frame) {
    const subject2 = getSubject({
      page: droppable2.subject.page,
      withPlaceholder: added,
      axis: droppable2.axis,
      frame: droppable2.frame
    });
    return {
      ...droppable2,
      subject: subject2
    };
  }
  const maxScroll = requiredGrowth ? add(frame.scroll.max, requiredGrowth) : frame.scroll.max;
  const newFrame = withMaxScroll(frame, maxScroll);
  const subject = getSubject({
    page: droppable2.subject.page,
    withPlaceholder: added,
    axis: droppable2.axis,
    frame: newFrame
  });
  return {
    ...droppable2,
    subject,
    frame: newFrame
  };
};
const removePlaceholder = (droppable2) => {
  const added = droppable2.subject.withPlaceholder;
  !added ? invariant() : void 0;
  const frame = droppable2.frame;
  if (!frame) {
    const subject2 = getSubject({
      page: droppable2.subject.page,
      axis: droppable2.axis,
      frame: null,
      withPlaceholder: null
    });
    return {
      ...droppable2,
      subject: subject2
    };
  }
  const oldMaxScroll = added.oldFrameMaxScroll;
  !oldMaxScroll ? invariant() : void 0;
  const newFrame = withMaxScroll(frame, oldMaxScroll);
  const subject = getSubject({
    page: droppable2.subject.page,
    axis: droppable2.axis,
    frame: newFrame,
    withPlaceholder: null
  });
  return {
    ...droppable2,
    subject,
    frame: newFrame
  };
};
var moveToNewDroppable = ({
  previousPageBorderBoxCenter,
  moveRelativeTo,
  insideDestination,
  draggable: draggable2,
  draggables,
  destination,
  viewport,
  afterCritical
}) => {
  if (!moveRelativeTo) {
    if (insideDestination.length) {
      return null;
    }
    const proposed = {
      displaced: emptyGroups,
      displacedBy: noDisplacedBy,
      at: {
        type: "REORDER",
        destination: {
          droppableId: destination.descriptor.id,
          index: 0
        }
      }
    };
    const proposedPageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
      impact: proposed,
      draggable: draggable2,
      droppable: destination,
      draggables,
      afterCritical
    });
    const withPlaceholder = isHomeOf(draggable2, destination) ? destination : addPlaceholder(destination, draggable2, draggables);
    const isVisibleInNewLocation = isTotallyVisibleInNewLocation({
      draggable: draggable2,
      destination: withPlaceholder,
      newPageBorderBoxCenter: proposedPageBorderBoxCenter,
      viewport: viewport.frame,
      withDroppableDisplacement: false,
      onlyOnMainAxis: true
    });
    return isVisibleInNewLocation ? proposed : null;
  }
  const isGoingBeforeTarget = Boolean(previousPageBorderBoxCenter[destination.axis.line] <= moveRelativeTo.page.borderBox.center[destination.axis.line]);
  const proposedIndex = (() => {
    const relativeTo = moveRelativeTo.descriptor.index;
    if (moveRelativeTo.descriptor.id === draggable2.descriptor.id) {
      return relativeTo;
    }
    if (isGoingBeforeTarget) {
      return relativeTo;
    }
    return relativeTo + 1;
  })();
  const displacedBy = getDisplacedBy(destination.axis, draggable2.displaceBy);
  return calculateReorderImpact({
    draggable: draggable2,
    insideDestination,
    destination,
    viewport,
    displacedBy,
    last: emptyGroups,
    index: proposedIndex
  });
};
var moveCrossAxis = ({
  isMovingForward,
  previousPageBorderBoxCenter,
  draggable: draggable2,
  isOver,
  draggables,
  droppables,
  viewport,
  afterCritical
}) => {
  const destination = getBestCrossAxisDroppable({
    isMovingForward,
    pageBorderBoxCenter: previousPageBorderBoxCenter,
    source: isOver,
    droppables,
    viewport
  });
  if (!destination) {
    return null;
  }
  const insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
  const moveRelativeTo = getClosestDraggable({
    pageBorderBoxCenter: previousPageBorderBoxCenter,
    viewport,
    destination,
    insideDestination,
    afterCritical
  });
  const impact = moveToNewDroppable({
    previousPageBorderBoxCenter,
    destination,
    draggable: draggable2,
    draggables,
    moveRelativeTo,
    insideDestination,
    viewport,
    afterCritical
  });
  if (!impact) {
    return null;
  }
  const pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
    impact,
    draggable: draggable2,
    droppable: destination,
    draggables,
    afterCritical
  });
  const clientSelection = getClientFromPageBorderBoxCenter({
    pageBorderBoxCenter,
    draggable: draggable2,
    viewport
  });
  return {
    clientSelection,
    impact,
    scrollJumpRequest: null
  };
};
var whatIsDraggedOver = (impact) => {
  const at = impact.at;
  if (!at) {
    return null;
  }
  if (at.type === "REORDER") {
    return at.destination.droppableId;
  }
  return at.combine.droppableId;
};
const getDroppableOver$1 = (impact, droppables) => {
  const id = whatIsDraggedOver(impact);
  return id ? droppables[id] : null;
};
var moveInDirection = ({
  state,
  type
}) => {
  const isActuallyOver = getDroppableOver$1(state.impact, state.dimensions.droppables);
  const isMainAxisMovementAllowed = Boolean(isActuallyOver);
  const home2 = state.dimensions.droppables[state.critical.droppable.id];
  const isOver = isActuallyOver || home2;
  const direction = isOver.axis.direction;
  const isMovingOnMainAxis = direction === "vertical" && (type === "MOVE_UP" || type === "MOVE_DOWN") || direction === "horizontal" && (type === "MOVE_LEFT" || type === "MOVE_RIGHT");
  if (isMovingOnMainAxis && !isMainAxisMovementAllowed) {
    return null;
  }
  const isMovingForward = type === "MOVE_DOWN" || type === "MOVE_RIGHT";
  const draggable2 = state.dimensions.draggables[state.critical.draggable.id];
  const previousPageBorderBoxCenter = state.current.page.borderBoxCenter;
  const {
    draggables,
    droppables
  } = state.dimensions;
  return isMovingOnMainAxis ? moveToNextPlace({
    isMovingForward,
    previousPageBorderBoxCenter,
    draggable: draggable2,
    destination: isOver,
    draggables,
    viewport: state.viewport,
    previousClientSelection: state.current.client.selection,
    previousImpact: state.impact,
    afterCritical: state.afterCritical
  }) : moveCrossAxis({
    isMovingForward,
    previousPageBorderBoxCenter,
    draggable: draggable2,
    isOver,
    draggables,
    droppables,
    viewport: state.viewport,
    afterCritical: state.afterCritical
  });
};
function isMovementAllowed(state) {
  return state.phase === "DRAGGING" || state.phase === "COLLECTING";
}
function isPositionInFrame(frame) {
  const isWithinVertical = isWithin(frame.top, frame.bottom);
  const isWithinHorizontal = isWithin(frame.left, frame.right);
  return function run(point) {
    return isWithinVertical(point.y) && isWithinHorizontal(point.x);
  };
}
function getHasOverlap(first, second) {
  return first.left < second.right && first.right > second.left && first.top < second.bottom && first.bottom > second.top;
}
function getFurthestAway({
  pageBorderBox,
  draggable: draggable2,
  candidates
}) {
  const startCenter = draggable2.page.borderBox.center;
  const sorted = candidates.map((candidate) => {
    const axis = candidate.axis;
    const target = patch(candidate.axis.line, pageBorderBox.center[axis.line], candidate.page.borderBox.center[axis.crossAxisLine]);
    return {
      id: candidate.descriptor.id,
      distance: distance(startCenter, target)
    };
  }).sort((a, b) => b.distance - a.distance);
  return sorted[0] ? sorted[0].id : null;
}
function getDroppableOver({
  pageBorderBox,
  draggable: draggable2,
  droppables
}) {
  const candidates = toDroppableList(droppables).filter((item) => {
    if (!item.isEnabled) {
      return false;
    }
    const active = item.subject.active;
    if (!active) {
      return false;
    }
    if (!getHasOverlap(pageBorderBox, active)) {
      return false;
    }
    if (isPositionInFrame(active)(pageBorderBox.center)) {
      return true;
    }
    const axis = item.axis;
    const childCenter = active.center[axis.crossAxisLine];
    const crossAxisStart = pageBorderBox[axis.crossAxisStart];
    const crossAxisEnd = pageBorderBox[axis.crossAxisEnd];
    const isContained = isWithin(active[axis.crossAxisStart], active[axis.crossAxisEnd]);
    const isStartContained = isContained(crossAxisStart);
    const isEndContained = isContained(crossAxisEnd);
    if (!isStartContained && !isEndContained) {
      return true;
    }
    if (isStartContained) {
      return crossAxisStart < childCenter;
    }
    return crossAxisEnd > childCenter;
  });
  if (!candidates.length) {
    return null;
  }
  if (candidates.length === 1) {
    return candidates[0].descriptor.id;
  }
  return getFurthestAway({
    pageBorderBox,
    draggable: draggable2,
    candidates
  });
}
const offsetRectByPosition = (rect, point) => getRect(offsetByPosition(rect, point));
var withDroppableScroll = (droppable2, area) => {
  const frame = droppable2.frame;
  if (!frame) {
    return area;
  }
  return offsetRectByPosition(area, frame.scroll.diff.value);
};
function getIsDisplaced({
  displaced,
  id
}) {
  return Boolean(displaced.visible[id] || displaced.invisible[id]);
}
function atIndex({
  draggable: draggable2,
  closest: closest2,
  inHomeList
}) {
  if (!closest2) {
    return null;
  }
  if (!inHomeList) {
    return closest2.descriptor.index;
  }
  if (closest2.descriptor.index > draggable2.descriptor.index) {
    return closest2.descriptor.index - 1;
  }
  return closest2.descriptor.index;
}
var getReorderImpact = ({
  pageBorderBoxWithDroppableScroll: targetRect,
  draggable: draggable2,
  destination,
  insideDestination,
  last,
  viewport,
  afterCritical
}) => {
  const axis = destination.axis;
  const displacedBy = getDisplacedBy(destination.axis, draggable2.displaceBy);
  const displacement = displacedBy.value;
  const targetStart = targetRect[axis.start];
  const targetEnd = targetRect[axis.end];
  const withoutDragging = removeDraggableFromList(draggable2, insideDestination);
  const closest2 = withoutDragging.find((child) => {
    const id = child.descriptor.id;
    const childCenter = child.page.borderBox.center[axis.line];
    const didStartAfterCritical$1 = didStartAfterCritical(id, afterCritical);
    const isDisplaced = getIsDisplaced({
      displaced: last,
      id
    });
    if (didStartAfterCritical$1) {
      if (isDisplaced) {
        return targetEnd <= childCenter;
      }
      return targetStart < childCenter - displacement;
    }
    if (isDisplaced) {
      return targetEnd <= childCenter + displacement;
    }
    return targetStart < childCenter;
  }) || null;
  const newIndex = atIndex({
    draggable: draggable2,
    closest: closest2,
    inHomeList: isHomeOf(draggable2, destination)
  });
  return calculateReorderImpact({
    draggable: draggable2,
    insideDestination,
    destination,
    viewport,
    last,
    displacedBy,
    index: newIndex
  });
};
const combineThresholdDivisor = 4;
var getCombineImpact = ({
  draggable: draggable2,
  pageBorderBoxWithDroppableScroll: targetRect,
  previousImpact,
  destination,
  insideDestination,
  afterCritical
}) => {
  if (!destination.isCombineEnabled) {
    return null;
  }
  const axis = destination.axis;
  const displacedBy = getDisplacedBy(destination.axis, draggable2.displaceBy);
  const displacement = displacedBy.value;
  const targetStart = targetRect[axis.start];
  const targetEnd = targetRect[axis.end];
  const withoutDragging = removeDraggableFromList(draggable2, insideDestination);
  const combineWith = withoutDragging.find((child) => {
    const id = child.descriptor.id;
    const childRect = child.page.borderBox;
    const childSize = childRect[axis.size];
    const threshold = childSize / combineThresholdDivisor;
    const didStartAfterCritical$1 = didStartAfterCritical(id, afterCritical);
    const isDisplaced = getIsDisplaced({
      displaced: previousImpact.displaced,
      id
    });
    if (didStartAfterCritical$1) {
      if (isDisplaced) {
        return targetEnd > childRect[axis.start] + threshold && targetEnd < childRect[axis.end] - threshold;
      }
      return targetStart > childRect[axis.start] - displacement + threshold && targetStart < childRect[axis.end] - displacement - threshold;
    }
    if (isDisplaced) {
      return targetEnd > childRect[axis.start] + displacement + threshold && targetEnd < childRect[axis.end] + displacement - threshold;
    }
    return targetStart > childRect[axis.start] + threshold && targetStart < childRect[axis.end] - threshold;
  });
  if (!combineWith) {
    return null;
  }
  const impact = {
    displacedBy,
    displaced: previousImpact.displaced,
    at: {
      type: "COMBINE",
      combine: {
        draggableId: combineWith.descriptor.id,
        droppableId: destination.descriptor.id
      }
    }
  };
  return impact;
};
var getDragImpact = ({
  pageOffset,
  draggable: draggable2,
  draggables,
  droppables,
  previousImpact,
  viewport,
  afterCritical
}) => {
  const pageBorderBox = offsetRectByPosition(draggable2.page.borderBox, pageOffset);
  const destinationId = getDroppableOver({
    pageBorderBox,
    draggable: draggable2,
    droppables
  });
  if (!destinationId) {
    return noImpact;
  }
  const destination = droppables[destinationId];
  const insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
  const pageBorderBoxWithDroppableScroll = withDroppableScroll(destination, pageBorderBox);
  return getCombineImpact({
    pageBorderBoxWithDroppableScroll,
    draggable: draggable2,
    previousImpact,
    destination,
    insideDestination,
    afterCritical
  }) || getReorderImpact({
    pageBorderBoxWithDroppableScroll,
    draggable: draggable2,
    destination,
    insideDestination,
    last: previousImpact.displaced,
    viewport,
    afterCritical
  });
};
var patchDroppableMap = (droppables, updated) => ({
  ...droppables,
  [updated.descriptor.id]: updated
});
const clearUnusedPlaceholder = ({
  previousImpact,
  impact,
  droppables
}) => {
  const last = whatIsDraggedOver(previousImpact);
  const now = whatIsDraggedOver(impact);
  if (!last) {
    return droppables;
  }
  if (last === now) {
    return droppables;
  }
  const lastDroppable = droppables[last];
  if (!lastDroppable.subject.withPlaceholder) {
    return droppables;
  }
  const updated = removePlaceholder(lastDroppable);
  return patchDroppableMap(droppables, updated);
};
var recomputePlaceholders = ({
  draggable: draggable2,
  draggables,
  droppables,
  previousImpact,
  impact
}) => {
  const cleaned = clearUnusedPlaceholder({
    previousImpact,
    impact,
    droppables
  });
  const isOver = whatIsDraggedOver(impact);
  if (!isOver) {
    return cleaned;
  }
  const droppable2 = droppables[isOver];
  if (isHomeOf(draggable2, droppable2)) {
    return cleaned;
  }
  if (droppable2.subject.withPlaceholder) {
    return cleaned;
  }
  const patched = addPlaceholder(droppable2, draggable2, draggables);
  return patchDroppableMap(cleaned, patched);
};
var update = ({
  state,
  clientSelection: forcedClientSelection,
  dimensions: forcedDimensions,
  viewport: forcedViewport,
  impact: forcedImpact,
  scrollJumpRequest
}) => {
  const viewport = forcedViewport || state.viewport;
  const dimensions = forcedDimensions || state.dimensions;
  const clientSelection = forcedClientSelection || state.current.client.selection;
  const offset2 = subtract(clientSelection, state.initial.client.selection);
  const client = {
    offset: offset2,
    selection: clientSelection,
    borderBoxCenter: add(state.initial.client.borderBoxCenter, offset2)
  };
  const page = {
    selection: add(client.selection, viewport.scroll.current),
    borderBoxCenter: add(client.borderBoxCenter, viewport.scroll.current),
    offset: add(client.offset, viewport.scroll.diff.value)
  };
  const current = {
    client,
    page
  };
  if (state.phase === "COLLECTING") {
    return {
      ...state,
      dimensions,
      viewport,
      current
    };
  }
  const draggable2 = dimensions.draggables[state.critical.draggable.id];
  const newImpact = forcedImpact || getDragImpact({
    pageOffset: page.offset,
    draggable: draggable2,
    draggables: dimensions.draggables,
    droppables: dimensions.droppables,
    previousImpact: state.impact,
    viewport,
    afterCritical: state.afterCritical
  });
  const withUpdatedPlaceholders = recomputePlaceholders({
    draggable: draggable2,
    impact: newImpact,
    previousImpact: state.impact,
    draggables: dimensions.draggables,
    droppables: dimensions.droppables
  });
  const result = {
    ...state,
    current,
    dimensions: {
      draggables: dimensions.draggables,
      droppables: withUpdatedPlaceholders
    },
    impact: newImpact,
    viewport,
    scrollJumpRequest: scrollJumpRequest || null,
    forceShouldAnimate: scrollJumpRequest ? false : null
  };
  return result;
};
function getDraggables(ids, draggables) {
  return ids.map((id) => draggables[id]);
}
var recompute = ({
  impact,
  viewport,
  draggables,
  destination,
  forceShouldAnimate
}) => {
  const last = impact.displaced;
  const afterDragging = getDraggables(last.all, draggables);
  const displaced = getDisplacementGroups({
    afterDragging,
    destination,
    displacedBy: impact.displacedBy,
    viewport: viewport.frame,
    forceShouldAnimate,
    last
  });
  return {
    ...impact,
    displaced
  };
};
var getClientBorderBoxCenter = ({
  impact,
  draggable: draggable2,
  droppable: droppable2,
  draggables,
  viewport,
  afterCritical
}) => {
  const pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
    impact,
    draggable: draggable2,
    draggables,
    droppable: droppable2,
    afterCritical
  });
  return getClientFromPageBorderBoxCenter({
    pageBorderBoxCenter,
    draggable: draggable2,
    viewport
  });
};
var refreshSnap = ({
  state,
  dimensions: forcedDimensions,
  viewport: forcedViewport
}) => {
  !(state.movementMode === "SNAP") ? invariant() : void 0;
  const needsVisibilityCheck = state.impact;
  const viewport = forcedViewport || state.viewport;
  const dimensions = forcedDimensions || state.dimensions;
  const {
    draggables,
    droppables
  } = dimensions;
  const draggable2 = draggables[state.critical.draggable.id];
  const isOver = whatIsDraggedOver(needsVisibilityCheck);
  !isOver ? invariant() : void 0;
  const destination = droppables[isOver];
  const impact = recompute({
    impact: needsVisibilityCheck,
    viewport,
    destination,
    draggables
  });
  const clientSelection = getClientBorderBoxCenter({
    impact,
    draggable: draggable2,
    droppable: destination,
    draggables,
    viewport,
    afterCritical: state.afterCritical
  });
  return update({
    impact,
    clientSelection,
    state,
    dimensions,
    viewport
  });
};
var getHomeLocation = (descriptor) => ({
  index: descriptor.index,
  droppableId: descriptor.droppableId
});
var getLiftEffect = ({
  draggable: draggable2,
  home: home2,
  draggables,
  viewport
}) => {
  const displacedBy = getDisplacedBy(home2.axis, draggable2.displaceBy);
  const insideHome = getDraggablesInsideDroppable(home2.descriptor.id, draggables);
  const rawIndex = insideHome.indexOf(draggable2);
  !(rawIndex !== -1) ? invariant() : void 0;
  const afterDragging = insideHome.slice(rawIndex + 1);
  const effected = afterDragging.reduce((previous, item) => {
    previous[item.descriptor.id] = true;
    return previous;
  }, {});
  const afterCritical = {
    inVirtualList: home2.descriptor.mode === "virtual",
    displacedBy,
    effected
  };
  const displaced = getDisplacementGroups({
    afterDragging,
    destination: home2,
    displacedBy,
    last: null,
    viewport: viewport.frame,
    forceShouldAnimate: false
  });
  const impact = {
    displaced,
    displacedBy,
    at: {
      type: "REORDER",
      destination: getHomeLocation(draggable2.descriptor)
    }
  };
  return {
    impact,
    afterCritical
  };
};
var patchDimensionMap = (dimensions, updated) => ({
  draggables: dimensions.draggables,
  droppables: patchDroppableMap(dimensions.droppables, updated)
});
var offsetDraggable = ({
  draggable: draggable2,
  offset: offset$1,
  initialWindowScroll
}) => {
  const client = offset(draggable2.client, offset$1);
  const page = withScroll(client, initialWindowScroll);
  const moved = {
    ...draggable2,
    placeholder: {
      ...draggable2.placeholder,
      client
    },
    client,
    page
  };
  return moved;
};
var getFrame = (droppable2) => {
  const frame = droppable2.frame;
  !frame ? invariant() : void 0;
  return frame;
};
var adjustAdditionsForScrollChanges = ({
  additions,
  updatedDroppables,
  viewport
}) => {
  const windowScrollChange = viewport.scroll.diff.value;
  return additions.map((draggable2) => {
    const droppableId = draggable2.descriptor.droppableId;
    const modified = updatedDroppables[droppableId];
    const frame = getFrame(modified);
    const droppableScrollChange = frame.scroll.diff.value;
    const totalChange = add(windowScrollChange, droppableScrollChange);
    const moved = offsetDraggable({
      draggable: draggable2,
      offset: totalChange,
      initialWindowScroll: viewport.scroll.initial
    });
    return moved;
  });
};
var publishWhileDraggingInVirtual = ({
  state,
  published
}) => {
  const withScrollChange = published.modified.map((update2) => {
    const existing = state.dimensions.droppables[update2.droppableId];
    const scrolled = scrollDroppable(existing, update2.scroll);
    return scrolled;
  });
  const droppables = {
    ...state.dimensions.droppables,
    ...toDroppableMap(withScrollChange)
  };
  const updatedAdditions = toDraggableMap(adjustAdditionsForScrollChanges({
    additions: published.additions,
    updatedDroppables: droppables,
    viewport: state.viewport
  }));
  const draggables = {
    ...state.dimensions.draggables,
    ...updatedAdditions
  };
  published.removals.forEach((id) => {
    delete draggables[id];
  });
  const dimensions = {
    droppables,
    draggables
  };
  const wasOverId = whatIsDraggedOver(state.impact);
  const wasOver = wasOverId ? dimensions.droppables[wasOverId] : null;
  const draggable2 = dimensions.draggables[state.critical.draggable.id];
  const home2 = dimensions.droppables[state.critical.droppable.id];
  const {
    impact: onLiftImpact,
    afterCritical
  } = getLiftEffect({
    draggable: draggable2,
    home: home2,
    draggables,
    viewport: state.viewport
  });
  const previousImpact = wasOver && wasOver.isCombineEnabled ? state.impact : onLiftImpact;
  const impact = getDragImpact({
    pageOffset: state.current.page.offset,
    draggable: dimensions.draggables[state.critical.draggable.id],
    draggables: dimensions.draggables,
    droppables: dimensions.droppables,
    previousImpact,
    viewport: state.viewport,
    afterCritical
  });
  const draggingState = {
    ...state,
    phase: "DRAGGING",
    impact,
    onLiftImpact,
    dimensions,
    afterCritical,
    forceShouldAnimate: false
  };
  if (state.phase === "COLLECTING") {
    return draggingState;
  }
  const dropPending2 = {
    ...draggingState,
    phase: "DROP_PENDING",
    reason: state.reason,
    isWaiting: false
  };
  return dropPending2;
};
const isSnapping = (state) => state.movementMode === "SNAP";
const postDroppableChange = (state, updated, isEnabledChanging) => {
  const dimensions = patchDimensionMap(state.dimensions, updated);
  if (!isSnapping(state) || isEnabledChanging) {
    return update({
      state,
      dimensions
    });
  }
  return refreshSnap({
    state,
    dimensions
  });
};
function removeScrollJumpRequest(state) {
  if (state.isDragging && state.movementMode === "SNAP") {
    return {
      ...state,
      scrollJumpRequest: null
    };
  }
  return state;
}
const idle$2 = {
  phase: "IDLE",
  completed: null,
  shouldFlush: false
};
var reducer = (state = idle$2, action) => {
  if (action.type === "FLUSH") {
    return {
      ...idle$2,
      shouldFlush: true
    };
  }
  if (action.type === "INITIAL_PUBLISH") {
    !(state.phase === "IDLE") ? invariant() : void 0;
    const {
      critical,
      clientSelection,
      viewport,
      dimensions,
      movementMode
    } = action.payload;
    const draggable2 = dimensions.draggables[critical.draggable.id];
    const home2 = dimensions.droppables[critical.droppable.id];
    const client = {
      selection: clientSelection,
      borderBoxCenter: draggable2.client.borderBox.center,
      offset: origin
    };
    const initial = {
      client,
      page: {
        selection: add(client.selection, viewport.scroll.initial),
        borderBoxCenter: add(client.selection, viewport.scroll.initial),
        offset: add(client.selection, viewport.scroll.diff.value)
      }
    };
    const isWindowScrollAllowed = toDroppableList(dimensions.droppables).every((item) => !item.isFixedOnPage);
    const {
      impact,
      afterCritical
    } = getLiftEffect({
      draggable: draggable2,
      home: home2,
      draggables: dimensions.draggables,
      viewport
    });
    const result = {
      phase: "DRAGGING",
      isDragging: true,
      critical,
      movementMode,
      dimensions,
      initial,
      current: initial,
      isWindowScrollAllowed,
      impact,
      afterCritical,
      onLiftImpact: impact,
      viewport,
      scrollJumpRequest: null,
      forceShouldAnimate: null
    };
    return result;
  }
  if (action.type === "COLLECTION_STARTING") {
    if (state.phase === "COLLECTING" || state.phase === "DROP_PENDING") {
      return state;
    }
    !(state.phase === "DRAGGING") ? invariant() : void 0;
    const result = {
      ...state,
      phase: "COLLECTING"
    };
    return result;
  }
  if (action.type === "PUBLISH_WHILE_DRAGGING") {
    !(state.phase === "COLLECTING" || state.phase === "DROP_PENDING") ? invariant() : void 0;
    return publishWhileDraggingInVirtual({
      state,
      published: action.payload
    });
  }
  if (action.type === "MOVE") {
    if (state.phase === "DROP_PENDING") {
      return state;
    }
    !isMovementAllowed(state) ? invariant() : void 0;
    const {
      client: clientSelection
    } = action.payload;
    if (isEqual$1(clientSelection, state.current.client.selection)) {
      return state;
    }
    return update({
      state,
      clientSelection,
      impact: isSnapping(state) ? state.impact : null
    });
  }
  if (action.type === "UPDATE_DROPPABLE_SCROLL") {
    if (state.phase === "DROP_PENDING") {
      return removeScrollJumpRequest(state);
    }
    if (state.phase === "COLLECTING") {
      return removeScrollJumpRequest(state);
    }
    !isMovementAllowed(state) ? invariant() : void 0;
    const {
      id,
      newScroll
    } = action.payload;
    const target = state.dimensions.droppables[id];
    if (!target) {
      return state;
    }
    const scrolled = scrollDroppable(target, newScroll);
    return postDroppableChange(state, scrolled, false);
  }
  if (action.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (state.phase === "DROP_PENDING") {
      return state;
    }
    !isMovementAllowed(state) ? invariant() : void 0;
    const {
      id,
      isEnabled
    } = action.payload;
    const target = state.dimensions.droppables[id];
    !target ? invariant() : void 0;
    !(target.isEnabled !== isEnabled) ? invariant() : void 0;
    const updated = {
      ...target,
      isEnabled
    };
    return postDroppableChange(state, updated, true);
  }
  if (action.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (state.phase === "DROP_PENDING") {
      return state;
    }
    !isMovementAllowed(state) ? invariant() : void 0;
    const {
      id,
      isCombineEnabled
    } = action.payload;
    const target = state.dimensions.droppables[id];
    !target ? invariant() : void 0;
    !(target.isCombineEnabled !== isCombineEnabled) ? invariant() : void 0;
    const updated = {
      ...target,
      isCombineEnabled
    };
    return postDroppableChange(state, updated, true);
  }
  if (action.type === "MOVE_BY_WINDOW_SCROLL") {
    if (state.phase === "DROP_PENDING" || state.phase === "DROP_ANIMATING") {
      return state;
    }
    !isMovementAllowed(state) ? invariant() : void 0;
    !state.isWindowScrollAllowed ? invariant() : void 0;
    const newScroll = action.payload.newScroll;
    if (isEqual$1(state.viewport.scroll.current, newScroll)) {
      return removeScrollJumpRequest(state);
    }
    const viewport = scrollViewport(state.viewport, newScroll);
    if (isSnapping(state)) {
      return refreshSnap({
        state,
        viewport
      });
    }
    return update({
      state,
      viewport
    });
  }
  if (action.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
    if (!isMovementAllowed(state)) {
      return state;
    }
    const maxScroll = action.payload.maxScroll;
    if (isEqual$1(maxScroll, state.viewport.scroll.max)) {
      return state;
    }
    const withMaxScroll2 = {
      ...state.viewport,
      scroll: {
        ...state.viewport.scroll,
        max: maxScroll
      }
    };
    return {
      ...state,
      viewport: withMaxScroll2
    };
  }
  if (action.type === "MOVE_UP" || action.type === "MOVE_DOWN" || action.type === "MOVE_LEFT" || action.type === "MOVE_RIGHT") {
    if (state.phase === "COLLECTING" || state.phase === "DROP_PENDING") {
      return state;
    }
    !(state.phase === "DRAGGING") ? invariant() : void 0;
    const result = moveInDirection({
      state,
      type: action.type
    });
    if (!result) {
      return state;
    }
    return update({
      state,
      impact: result.impact,
      clientSelection: result.clientSelection,
      scrollJumpRequest: result.scrollJumpRequest
    });
  }
  if (action.type === "DROP_PENDING") {
    const reason = action.payload.reason;
    !(state.phase === "COLLECTING") ? invariant() : void 0;
    const newState = {
      ...state,
      phase: "DROP_PENDING",
      isWaiting: true,
      reason
    };
    return newState;
  }
  if (action.type === "DROP_ANIMATE") {
    const {
      completed,
      dropDuration,
      newHomeClientOffset
    } = action.payload;
    !(state.phase === "DRAGGING" || state.phase === "DROP_PENDING") ? invariant() : void 0;
    const result = {
      phase: "DROP_ANIMATING",
      completed,
      dropDuration,
      newHomeClientOffset,
      dimensions: state.dimensions
    };
    return result;
  }
  if (action.type === "DROP_COMPLETE") {
    const {
      completed
    } = action.payload;
    return {
      phase: "IDLE",
      completed,
      shouldFlush: false
    };
  }
  return state;
};
function guard(action, predicate) {
  return action instanceof Object && "type" in action && action.type === predicate;
}
const beforeInitialCapture = (args) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: args
});
const lift$1 = (args) => ({
  type: "LIFT",
  payload: args
});
const initialPublish = (args) => ({
  type: "INITIAL_PUBLISH",
  payload: args
});
const publishWhileDragging = (args) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: args
});
const collectionStarting = () => ({
  type: "COLLECTION_STARTING",
  payload: null
});
const updateDroppableScroll = (args) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: args
});
const updateDroppableIsEnabled = (args) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: args
});
const updateDroppableIsCombineEnabled = (args) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: args
});
const move = (args) => ({
  type: "MOVE",
  payload: args
});
const moveByWindowScroll = (args) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: args
});
const updateViewportMaxScroll = (args) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: args
});
const moveUp = () => ({
  type: "MOVE_UP",
  payload: null
});
const moveDown = () => ({
  type: "MOVE_DOWN",
  payload: null
});
const moveRight = () => ({
  type: "MOVE_RIGHT",
  payload: null
});
const moveLeft = () => ({
  type: "MOVE_LEFT",
  payload: null
});
const flush = () => ({
  type: "FLUSH",
  payload: null
});
const animateDrop = (args) => ({
  type: "DROP_ANIMATE",
  payload: args
});
const completeDrop = (args) => ({
  type: "DROP_COMPLETE",
  payload: args
});
const drop = (args) => ({
  type: "DROP",
  payload: args
});
const dropPending = (args) => ({
  type: "DROP_PENDING",
  payload: args
});
const dropAnimationFinished = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
var lift = (marshal) => ({
  getState,
  dispatch
}) => (next) => (action) => {
  if (!guard(action, "LIFT")) {
    next(action);
    return;
  }
  const {
    id,
    clientSelection,
    movementMode
  } = action.payload;
  const initial = getState();
  if (initial.phase === "DROP_ANIMATING") {
    dispatch(completeDrop({
      completed: initial.completed
    }));
  }
  !(getState().phase === "IDLE") ? invariant() : void 0;
  dispatch(flush());
  dispatch(beforeInitialCapture({
    draggableId: id,
    movementMode
  }));
  const scrollOptions = {
    shouldPublishImmediately: movementMode === "SNAP"
  };
  const request = {
    draggableId: id,
    scrollOptions
  };
  const {
    critical,
    dimensions,
    viewport
  } = marshal.startPublishing(request);
  dispatch(initialPublish({
    critical,
    dimensions,
    clientSelection,
    movementMode,
    viewport
  }));
};
var style = (marshal) => () => (next) => (action) => {
  if (guard(action, "INITIAL_PUBLISH")) {
    marshal.dragging();
  }
  if (guard(action, "DROP_ANIMATE")) {
    marshal.dropping(action.payload.completed.result.reason);
  }
  if (guard(action, "FLUSH") || guard(action, "DROP_COMPLETE")) {
    marshal.resting();
  }
  next(action);
};
const curves = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
};
const combine = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
};
const timings = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
};
const outOfTheWayTiming = `${timings.outOfTheWay}s ${curves.outOfTheWay}`;
const transitions = {
  fluid: `opacity ${outOfTheWayTiming}`,
  snap: `transform ${outOfTheWayTiming}, opacity ${outOfTheWayTiming}`,
  drop: (duration) => {
    const timing = `${duration}s ${curves.drop}`;
    return `transform ${timing}, opacity ${timing}`;
  },
  outOfTheWay: `transform ${outOfTheWayTiming}`,
  placeholder: `height ${outOfTheWayTiming}, width ${outOfTheWayTiming}, margin ${outOfTheWayTiming}`
};
const moveTo = (offset2) => isEqual$1(offset2, origin) ? void 0 : `translate(${offset2.x}px, ${offset2.y}px)`;
const transforms = {
  moveTo,
  drop: (offset2, isCombining) => {
    const translate = moveTo(offset2);
    if (!translate) {
      return void 0;
    }
    if (!isCombining) {
      return translate;
    }
    return `${translate} scale(${combine.scale.drop})`;
  }
};
const {
  minDropTime,
  maxDropTime
} = timings;
const dropTimeRange = maxDropTime - minDropTime;
const maxDropTimeAtDistance = 1500;
const cancelDropModifier = 0.6;
var getDropDuration = ({
  current,
  destination,
  reason
}) => {
  const distance$1 = distance(current, destination);
  if (distance$1 <= 0) {
    return minDropTime;
  }
  if (distance$1 >= maxDropTimeAtDistance) {
    return maxDropTime;
  }
  const percentage = distance$1 / maxDropTimeAtDistance;
  const duration = minDropTime + dropTimeRange * percentage;
  const withDuration = reason === "CANCEL" ? duration * cancelDropModifier : duration;
  return Number(withDuration.toFixed(2));
};
var getNewHomeClientOffset = ({
  impact,
  draggable: draggable2,
  dimensions,
  viewport,
  afterCritical
}) => {
  const {
    draggables,
    droppables
  } = dimensions;
  const droppableId = whatIsDraggedOver(impact);
  const destination = droppableId ? droppables[droppableId] : null;
  const home2 = droppables[draggable2.descriptor.droppableId];
  const newClientCenter = getClientBorderBoxCenter({
    impact,
    draggable: draggable2,
    draggables,
    afterCritical,
    droppable: destination || home2,
    viewport
  });
  const offset2 = subtract(newClientCenter, draggable2.client.borderBox.center);
  return offset2;
};
var getDropImpact = ({
  draggables,
  reason,
  lastImpact,
  home: home2,
  viewport,
  onLiftImpact
}) => {
  if (!lastImpact.at || reason !== "DROP") {
    const recomputedHomeImpact = recompute({
      draggables,
      impact: onLiftImpact,
      destination: home2,
      viewport,
      forceShouldAnimate: true
    });
    return {
      impact: recomputedHomeImpact,
      didDropInsideDroppable: false
    };
  }
  if (lastImpact.at.type === "REORDER") {
    return {
      impact: lastImpact,
      didDropInsideDroppable: true
    };
  }
  const withoutMovement = {
    ...lastImpact,
    displaced: emptyGroups
  };
  return {
    impact: withoutMovement,
    didDropInsideDroppable: true
  };
};
const dropMiddleware = ({
  getState,
  dispatch
}) => (next) => (action) => {
  if (!guard(action, "DROP")) {
    next(action);
    return;
  }
  const state = getState();
  const reason = action.payload.reason;
  if (state.phase === "COLLECTING") {
    dispatch(dropPending({
      reason
    }));
    return;
  }
  if (state.phase === "IDLE") {
    return;
  }
  const isWaitingForDrop = state.phase === "DROP_PENDING" && state.isWaiting;
  !!isWaitingForDrop ? invariant() : void 0;
  !(state.phase === "DRAGGING" || state.phase === "DROP_PENDING") ? invariant() : void 0;
  const critical = state.critical;
  const dimensions = state.dimensions;
  const draggable2 = dimensions.draggables[state.critical.draggable.id];
  const {
    impact,
    didDropInsideDroppable
  } = getDropImpact({
    reason,
    lastImpact: state.impact,
    afterCritical: state.afterCritical,
    onLiftImpact: state.onLiftImpact,
    home: state.dimensions.droppables[state.critical.droppable.id],
    viewport: state.viewport,
    draggables: state.dimensions.draggables
  });
  const destination = didDropInsideDroppable ? tryGetDestination(impact) : null;
  const combine2 = didDropInsideDroppable ? tryGetCombine(impact) : null;
  const source = {
    index: critical.draggable.index,
    droppableId: critical.droppable.id
  };
  const result = {
    draggableId: draggable2.descriptor.id,
    type: draggable2.descriptor.type,
    source,
    reason,
    mode: state.movementMode,
    destination,
    combine: combine2
  };
  const newHomeClientOffset = getNewHomeClientOffset({
    impact,
    draggable: draggable2,
    dimensions,
    viewport: state.viewport,
    afterCritical: state.afterCritical
  });
  const completed = {
    critical: state.critical,
    afterCritical: state.afterCritical,
    result,
    impact
  };
  const isAnimationRequired = !isEqual$1(state.current.client.offset, newHomeClientOffset) || Boolean(result.combine);
  if (!isAnimationRequired) {
    dispatch(completeDrop({
      completed
    }));
    return;
  }
  const dropDuration = getDropDuration({
    current: state.current.client.offset,
    destination: newHomeClientOffset,
    reason
  });
  const args = {
    newHomeClientOffset,
    dropDuration,
    completed
  };
  dispatch(animateDrop(args));
};
var getWindowScroll = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function getWindowScrollBinding(update2) {
  return {
    eventName: "scroll",
    options: {
      passive: true,
      capture: false
    },
    fn: (event) => {
      if (event.target !== window && event.target !== window.document) {
        return;
      }
      update2();
    }
  };
}
function getScrollListener({
  onWindowScroll
}) {
  function updateScroll() {
    onWindowScroll(getWindowScroll());
  }
  const scheduled = rafSchd(updateScroll);
  const binding = getWindowScrollBinding(scheduled);
  let unbind = noop$2;
  function isActive2() {
    return unbind !== noop$2;
  }
  function start2() {
    !!isActive2() ? invariant() : void 0;
    unbind = bindEvents(window, [binding]);
  }
  function stop() {
    !isActive2() ? invariant() : void 0;
    scheduled.cancel();
    unbind();
    unbind = noop$2;
  }
  return {
    start: start2,
    stop,
    isActive: isActive2
  };
}
const shouldStop$1 = (action) => guard(action, "DROP_COMPLETE") || guard(action, "DROP_ANIMATE") || guard(action, "FLUSH");
const scrollListener = (store) => {
  const listener = getScrollListener({
    onWindowScroll: (newScroll) => {
      store.dispatch(moveByWindowScroll({
        newScroll
      }));
    }
  });
  return (next) => (action) => {
    if (!listener.isActive() && guard(action, "INITIAL_PUBLISH")) {
      listener.start();
    }
    if (listener.isActive() && shouldStop$1(action)) {
      listener.stop();
    }
    next(action);
  };
};
var getExpiringAnnounce = (announce) => {
  let wasCalled = false;
  let isExpired = false;
  const timeoutId = setTimeout(() => {
    isExpired = true;
  });
  const result = (message) => {
    if (wasCalled) {
      return;
    }
    if (isExpired) {
      return;
    }
    wasCalled = true;
    announce(message);
    clearTimeout(timeoutId);
  };
  result.wasCalled = () => wasCalled;
  return result;
};
var getAsyncMarshal = () => {
  const entries = [];
  const execute2 = (timerId) => {
    const index = entries.findIndex((item) => item.timerId === timerId);
    !(index !== -1) ? invariant() : void 0;
    const [entry] = entries.splice(index, 1);
    entry.callback();
  };
  const add2 = (fn) => {
    const timerId = setTimeout(() => execute2(timerId));
    const entry = {
      timerId,
      callback: fn
    };
    entries.push(entry);
  };
  const flush2 = () => {
    if (!entries.length) {
      return;
    }
    const shallow = [...entries];
    entries.length = 0;
    shallow.forEach((entry) => {
      clearTimeout(entry.timerId);
      entry.callback();
    });
  };
  return {
    add: add2,
    flush: flush2
  };
};
const areLocationsEqual = (first, second) => {
  if (first == null && second == null) {
    return true;
  }
  if (first == null || second == null) {
    return false;
  }
  return first.droppableId === second.droppableId && first.index === second.index;
};
const isCombineEqual = (first, second) => {
  if (first == null && second == null) {
    return true;
  }
  if (first == null || second == null) {
    return false;
  }
  return first.draggableId === second.draggableId && first.droppableId === second.droppableId;
};
const isCriticalEqual = (first, second) => {
  if (first === second) {
    return true;
  }
  const isDraggableEqual = first.draggable.id === second.draggable.id && first.draggable.droppableId === second.draggable.droppableId && first.draggable.type === second.draggable.type && first.draggable.index === second.draggable.index;
  const isDroppableEqual = first.droppable.id === second.droppable.id && first.droppable.type === second.droppable.type;
  return isDraggableEqual && isDroppableEqual;
};
const withTimings = (key, fn) => {
  fn();
};
const getDragStart = (critical, mode) => ({
  draggableId: critical.draggable.id,
  type: critical.droppable.type,
  source: {
    droppableId: critical.droppable.id,
    index: critical.draggable.index
  },
  mode
});
function execute(responder, data, announce, getDefaultMessage) {
  if (!responder) {
    announce(getDefaultMessage(data));
    return;
  }
  const willExpire = getExpiringAnnounce(announce);
  const provided = {
    announce: willExpire
  };
  responder(data, provided);
  if (!willExpire.wasCalled()) {
    announce(getDefaultMessage(data));
  }
}
var getPublisher = (getResponders, announce) => {
  const asyncMarshal = getAsyncMarshal();
  let dragging = null;
  const beforeCapture = (draggableId, mode) => {
    !!dragging ? invariant() : void 0;
    withTimings("onBeforeCapture", () => {
      const fn = getResponders().onBeforeCapture;
      if (fn) {
        const before = {
          draggableId,
          mode
        };
        fn(before);
      }
    });
  };
  const beforeStart = (critical, mode) => {
    !!dragging ? invariant() : void 0;
    withTimings("onBeforeDragStart", () => {
      const fn = getResponders().onBeforeDragStart;
      if (fn) {
        fn(getDragStart(critical, mode));
      }
    });
  };
  const start2 = (critical, mode) => {
    !!dragging ? invariant() : void 0;
    const data = getDragStart(critical, mode);
    dragging = {
      mode,
      lastCritical: critical,
      lastLocation: data.source,
      lastCombine: null
    };
    asyncMarshal.add(() => {
      withTimings("onDragStart", () => execute(getResponders().onDragStart, data, announce, preset.onDragStart));
    });
  };
  const update2 = (critical, impact) => {
    const location = tryGetDestination(impact);
    const combine2 = tryGetCombine(impact);
    !dragging ? invariant() : void 0;
    const hasCriticalChanged = !isCriticalEqual(critical, dragging.lastCritical);
    if (hasCriticalChanged) {
      dragging.lastCritical = critical;
    }
    const hasLocationChanged = !areLocationsEqual(dragging.lastLocation, location);
    if (hasLocationChanged) {
      dragging.lastLocation = location;
    }
    const hasGroupingChanged = !isCombineEqual(dragging.lastCombine, combine2);
    if (hasGroupingChanged) {
      dragging.lastCombine = combine2;
    }
    if (!hasCriticalChanged && !hasLocationChanged && !hasGroupingChanged) {
      return;
    }
    const data = {
      ...getDragStart(critical, dragging.mode),
      combine: combine2,
      destination: location
    };
    asyncMarshal.add(() => {
      withTimings("onDragUpdate", () => execute(getResponders().onDragUpdate, data, announce, preset.onDragUpdate));
    });
  };
  const flush2 = () => {
    !dragging ? invariant() : void 0;
    asyncMarshal.flush();
  };
  const drop2 = (result) => {
    !dragging ? invariant() : void 0;
    dragging = null;
    withTimings("onDragEnd", () => execute(getResponders().onDragEnd, result, announce, preset.onDragEnd));
  };
  const abort = () => {
    if (!dragging) {
      return;
    }
    const result = {
      ...getDragStart(dragging.lastCritical, dragging.mode),
      combine: null,
      destination: null,
      reason: "CANCEL"
    };
    drop2(result);
  };
  return {
    beforeCapture,
    beforeStart,
    start: start2,
    update: update2,
    flush: flush2,
    drop: drop2,
    abort
  };
};
var responders = (getResponders, announce) => {
  const publisher = getPublisher(getResponders, announce);
  return (store) => (next) => (action) => {
    if (guard(action, "BEFORE_INITIAL_CAPTURE")) {
      publisher.beforeCapture(action.payload.draggableId, action.payload.movementMode);
      return;
    }
    if (guard(action, "INITIAL_PUBLISH")) {
      const critical = action.payload.critical;
      publisher.beforeStart(critical, action.payload.movementMode);
      next(action);
      publisher.start(critical, action.payload.movementMode);
      return;
    }
    if (guard(action, "DROP_COMPLETE")) {
      const result = action.payload.completed.result;
      publisher.flush();
      next(action);
      publisher.drop(result);
      return;
    }
    next(action);
    if (guard(action, "FLUSH")) {
      publisher.abort();
      return;
    }
    const state = store.getState();
    if (state.phase === "DRAGGING") {
      publisher.update(state.critical, state.impact);
    }
  };
};
const dropAnimationFinishMiddleware = (store) => (next) => (action) => {
  if (!guard(action, "DROP_ANIMATION_FINISHED")) {
    next(action);
    return;
  }
  const state = store.getState();
  !(state.phase === "DROP_ANIMATING") ? invariant() : void 0;
  store.dispatch(completeDrop({
    completed: state.completed
  }));
};
const dropAnimationFlushOnScrollMiddleware = (store) => {
  let unbind = null;
  let frameId = null;
  function clear() {
    if (frameId) {
      cancelAnimationFrame(frameId);
      frameId = null;
    }
    if (unbind) {
      unbind();
      unbind = null;
    }
  }
  return (next) => (action) => {
    if (guard(action, "FLUSH") || guard(action, "DROP_COMPLETE") || guard(action, "DROP_ANIMATION_FINISHED")) {
      clear();
    }
    next(action);
    if (!guard(action, "DROP_ANIMATE")) {
      return;
    }
    const binding = {
      eventName: "scroll",
      options: {
        capture: true,
        passive: false,
        once: true
      },
      fn: function flushDropAnimation() {
        const state = store.getState();
        if (state.phase === "DROP_ANIMATING") {
          store.dispatch(dropAnimationFinished());
        }
      }
    };
    frameId = requestAnimationFrame(() => {
      frameId = null;
      unbind = bindEvents(window, [binding]);
    });
  };
};
var dimensionMarshalStopper = (marshal) => () => (next) => (action) => {
  if (guard(action, "DROP_COMPLETE") || guard(action, "FLUSH") || guard(action, "DROP_ANIMATE")) {
    marshal.stopPublishing();
  }
  next(action);
};
var focus = (marshal) => {
  let isWatching = false;
  return () => (next) => (action) => {
    if (guard(action, "INITIAL_PUBLISH")) {
      isWatching = true;
      marshal.tryRecordFocus(action.payload.critical.draggable.id);
      next(action);
      marshal.tryRestoreFocusRecorded();
      return;
    }
    next(action);
    if (!isWatching) {
      return;
    }
    if (guard(action, "FLUSH")) {
      isWatching = false;
      marshal.tryRestoreFocusRecorded();
      return;
    }
    if (guard(action, "DROP_COMPLETE")) {
      isWatching = false;
      const result = action.payload.completed.result;
      if (result.combine) {
        marshal.tryShiftRecord(result.draggableId, result.combine.draggableId);
      }
      marshal.tryRestoreFocusRecorded();
    }
  };
};
const shouldStop = (action) => guard(action, "DROP_COMPLETE") || guard(action, "DROP_ANIMATE") || guard(action, "FLUSH");
var autoScroll = (autoScroller) => (store) => (next) => (action) => {
  if (shouldStop(action)) {
    autoScroller.stop();
    next(action);
    return;
  }
  if (guard(action, "INITIAL_PUBLISH")) {
    next(action);
    const state = store.getState();
    !(state.phase === "DRAGGING") ? invariant() : void 0;
    autoScroller.start(state);
    return;
  }
  next(action);
  autoScroller.scroll(store.getState());
};
const pendingDrop = (store) => (next) => (action) => {
  next(action);
  if (!guard(action, "PUBLISH_WHILE_DRAGGING")) {
    return;
  }
  const postActionState = store.getState();
  if (postActionState.phase !== "DROP_PENDING") {
    return;
  }
  if (postActionState.isWaiting) {
    return;
  }
  store.dispatch(drop({
    reason: postActionState.reason
  }));
};
const composeEnhancers = compose;
var createStore = ({
  dimensionMarshal,
  focusMarshal,
  styleMarshal,
  getResponders,
  announce,
  autoScroller
}) => createStore$1(reducer, composeEnhancers(applyMiddleware(style(styleMarshal), dimensionMarshalStopper(dimensionMarshal), lift(dimensionMarshal), dropMiddleware, dropAnimationFinishMiddleware, dropAnimationFlushOnScrollMiddleware, pendingDrop, autoScroll(autoScroller), scrollListener, focus(focusMarshal), responders(getResponders, announce))));
const clean$1 = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function createPublisher({
  registry,
  callbacks
}) {
  let staging = clean$1();
  let frameId = null;
  const collect = () => {
    if (frameId) {
      return;
    }
    callbacks.collectionStarting();
    frameId = requestAnimationFrame(() => {
      frameId = null;
      const {
        additions,
        removals,
        modified
      } = staging;
      const added = Object.keys(additions).map((id) => registry.draggable.getById(id).getDimension(origin)).sort((a, b) => a.descriptor.index - b.descriptor.index);
      const updated = Object.keys(modified).map((id) => {
        const entry = registry.droppable.getById(id);
        const scroll2 = entry.callbacks.getScrollWhileDragging();
        return {
          droppableId: id,
          scroll: scroll2
        };
      });
      const result = {
        additions: added,
        removals: Object.keys(removals),
        modified: updated
      };
      staging = clean$1();
      callbacks.publish(result);
    });
  };
  const add2 = (entry) => {
    const id = entry.descriptor.id;
    staging.additions[id] = entry;
    staging.modified[entry.descriptor.droppableId] = true;
    if (staging.removals[id]) {
      delete staging.removals[id];
    }
    collect();
  };
  const remove = (entry) => {
    const descriptor = entry.descriptor;
    staging.removals[descriptor.id] = true;
    staging.modified[descriptor.droppableId] = true;
    if (staging.additions[descriptor.id]) {
      delete staging.additions[descriptor.id];
    }
    collect();
  };
  const stop = () => {
    if (!frameId) {
      return;
    }
    cancelAnimationFrame(frameId);
    frameId = null;
    staging = clean$1();
  };
  return {
    add: add2,
    remove,
    stop
  };
}
var getMaxScroll = ({
  scrollHeight,
  scrollWidth,
  height,
  width
}) => {
  const maxScroll = subtract({
    x: scrollWidth,
    y: scrollHeight
  }, {
    x: width,
    y: height
  });
  const adjustedMaxScroll = {
    x: Math.max(0, maxScroll.x),
    y: Math.max(0, maxScroll.y)
  };
  return adjustedMaxScroll;
};
var getDocumentElement = () => {
  const doc = document.documentElement;
  !doc ? invariant() : void 0;
  return doc;
};
var getMaxWindowScroll = () => {
  const doc = getDocumentElement();
  const maxScroll = getMaxScroll({
    scrollHeight: doc.scrollHeight,
    scrollWidth: doc.scrollWidth,
    width: doc.clientWidth,
    height: doc.clientHeight
  });
  return maxScroll;
};
var getViewport = () => {
  const scroll2 = getWindowScroll();
  const maxScroll = getMaxWindowScroll();
  const top = scroll2.y;
  const left = scroll2.x;
  const doc = getDocumentElement();
  const width = doc.clientWidth;
  const height = doc.clientHeight;
  const right = left + width;
  const bottom = top + height;
  const frame = getRect({
    top,
    left,
    right,
    bottom
  });
  const viewport = {
    frame,
    scroll: {
      initial: scroll2,
      current: scroll2,
      max: maxScroll,
      diff: {
        value: origin,
        displacement: origin
      }
    }
  };
  return viewport;
};
var getInitialPublish = ({
  critical,
  scrollOptions,
  registry
}) => {
  const viewport = getViewport();
  const windowScroll = viewport.scroll.current;
  const home2 = critical.droppable;
  const droppables = registry.droppable.getAllByType(home2.type).map((entry) => entry.callbacks.getDimensionAndWatchScroll(windowScroll, scrollOptions));
  const draggables = registry.draggable.getAllByType(critical.draggable.type).map((entry) => entry.getDimension(windowScroll));
  const dimensions = {
    draggables: toDraggableMap(draggables),
    droppables: toDroppableMap(droppables)
  };
  const result = {
    dimensions,
    critical,
    viewport
  };
  return result;
};
function shouldPublishUpdate(registry, dragging, entry) {
  if (entry.descriptor.id === dragging.id) {
    return false;
  }
  if (entry.descriptor.type !== dragging.type) {
    return false;
  }
  const home2 = registry.droppable.getById(entry.descriptor.droppableId);
  if (home2.descriptor.mode !== "virtual") {
    return false;
  }
  return true;
}
var createDimensionMarshal = (registry, callbacks) => {
  let collection = null;
  const publisher = createPublisher({
    callbacks: {
      publish: callbacks.publishWhileDragging,
      collectionStarting: callbacks.collectionStarting
    },
    registry
  });
  const updateDroppableIsEnabled2 = (id, isEnabled) => {
    !registry.droppable.exists(id) ? invariant() : void 0;
    if (!collection) {
      return;
    }
    callbacks.updateDroppableIsEnabled({
      id,
      isEnabled
    });
  };
  const updateDroppableIsCombineEnabled2 = (id, isCombineEnabled) => {
    if (!collection) {
      return;
    }
    !registry.droppable.exists(id) ? invariant() : void 0;
    callbacks.updateDroppableIsCombineEnabled({
      id,
      isCombineEnabled
    });
  };
  const updateDroppableScroll2 = (id, newScroll) => {
    if (!collection) {
      return;
    }
    !registry.droppable.exists(id) ? invariant() : void 0;
    callbacks.updateDroppableScroll({
      id,
      newScroll
    });
  };
  const scrollDroppable2 = (id, change) => {
    if (!collection) {
      return;
    }
    registry.droppable.getById(id).callbacks.scroll(change);
  };
  const stopPublishing = () => {
    if (!collection) {
      return;
    }
    publisher.stop();
    const home2 = collection.critical.droppable;
    registry.droppable.getAllByType(home2.type).forEach((entry) => entry.callbacks.dragStopped());
    collection.unsubscribe();
    collection = null;
  };
  const subscriber = (event) => {
    !collection ? invariant() : void 0;
    const dragging = collection.critical.draggable;
    if (event.type === "ADDITION") {
      if (shouldPublishUpdate(registry, dragging, event.value)) {
        publisher.add(event.value);
      }
    }
    if (event.type === "REMOVAL") {
      if (shouldPublishUpdate(registry, dragging, event.value)) {
        publisher.remove(event.value);
      }
    }
  };
  const startPublishing = (request) => {
    !!collection ? invariant() : void 0;
    const entry = registry.draggable.getById(request.draggableId);
    const home2 = registry.droppable.getById(entry.descriptor.droppableId);
    const critical = {
      draggable: entry.descriptor,
      droppable: home2.descriptor
    };
    const unsubscribe = registry.subscribe(subscriber);
    collection = {
      critical,
      unsubscribe
    };
    return getInitialPublish({
      critical,
      registry,
      scrollOptions: request.scrollOptions
    });
  };
  const marshal = {
    updateDroppableIsEnabled: updateDroppableIsEnabled2,
    updateDroppableIsCombineEnabled: updateDroppableIsCombineEnabled2,
    scrollDroppable: scrollDroppable2,
    updateDroppableScroll: updateDroppableScroll2,
    startPublishing,
    stopPublishing
  };
  return marshal;
};
var canStartDrag = (state, id) => {
  if (state.phase === "IDLE") {
    return true;
  }
  if (state.phase !== "DROP_ANIMATING") {
    return false;
  }
  if (state.completed.result.draggableId === id) {
    return false;
  }
  return state.completed.result.reason === "DROP";
};
var scrollWindow = (change) => {
  window.scrollBy(change.x, change.y);
};
const getScrollableDroppables = memoizeOne((droppables) => toDroppableList(droppables).filter((droppable2) => {
  if (!droppable2.isEnabled) {
    return false;
  }
  if (!droppable2.frame) {
    return false;
  }
  return true;
}));
const getScrollableDroppableOver = (target, droppables) => {
  const maybe = getScrollableDroppables(droppables).find((droppable2) => {
    !droppable2.frame ? invariant() : void 0;
    return isPositionInFrame(droppable2.frame.pageMarginBox)(target);
  }) || null;
  return maybe;
};
var getBestScrollableDroppable = ({
  center,
  destination,
  droppables
}) => {
  if (destination) {
    const dimension2 = droppables[destination];
    if (!dimension2.frame) {
      return null;
    }
    return dimension2;
  }
  const dimension = getScrollableDroppableOver(center, droppables);
  return dimension;
};
const defaultAutoScrollerOptions = {
  startFromPercentage: 0.25,
  maxScrollAtPercentage: 0.05,
  maxPixelScroll: 28,
  ease: (percentage) => percentage ** 2,
  durationDampening: {
    stopDampeningAt: 1200,
    accelerateAt: 360
  },
  disabled: false
};
var getDistanceThresholds = (container, axis, getAutoScrollerOptions = () => defaultAutoScrollerOptions) => {
  const autoScrollerOptions = getAutoScrollerOptions();
  const startScrollingFrom = container[axis.size] * autoScrollerOptions.startFromPercentage;
  const maxScrollValueAt = container[axis.size] * autoScrollerOptions.maxScrollAtPercentage;
  const thresholds = {
    startScrollingFrom,
    maxScrollValueAt
  };
  return thresholds;
};
var getPercentage = ({
  startOfRange,
  endOfRange,
  current
}) => {
  const range = endOfRange - startOfRange;
  if (range === 0) {
    return 0;
  }
  const currentInRange = current - startOfRange;
  const percentage = currentInRange / range;
  return percentage;
};
var minScroll = 1;
var getValueFromDistance = (distanceToEdge, thresholds, getAutoScrollerOptions = () => defaultAutoScrollerOptions) => {
  const autoScrollerOptions = getAutoScrollerOptions();
  if (distanceToEdge > thresholds.startScrollingFrom) {
    return 0;
  }
  if (distanceToEdge <= thresholds.maxScrollValueAt) {
    return autoScrollerOptions.maxPixelScroll;
  }
  if (distanceToEdge === thresholds.startScrollingFrom) {
    return minScroll;
  }
  const percentageFromMaxScrollValueAt = getPercentage({
    startOfRange: thresholds.maxScrollValueAt,
    endOfRange: thresholds.startScrollingFrom,
    current: distanceToEdge
  });
  const percentageFromStartScrollingFrom = 1 - percentageFromMaxScrollValueAt;
  const scroll2 = autoScrollerOptions.maxPixelScroll * autoScrollerOptions.ease(percentageFromStartScrollingFrom);
  return Math.ceil(scroll2);
};
var dampenValueByTime = (proposedScroll, dragStartTime, getAutoScrollerOptions) => {
  const autoScrollerOptions = getAutoScrollerOptions();
  const accelerateAt = autoScrollerOptions.durationDampening.accelerateAt;
  const stopAt = autoScrollerOptions.durationDampening.stopDampeningAt;
  const startOfRange = dragStartTime;
  const endOfRange = stopAt;
  const now = Date.now();
  const runTime = now - startOfRange;
  if (runTime >= stopAt) {
    return proposedScroll;
  }
  if (runTime < accelerateAt) {
    return minScroll;
  }
  const betweenAccelerateAtAndStopAtPercentage = getPercentage({
    startOfRange: accelerateAt,
    endOfRange,
    current: runTime
  });
  const scroll2 = proposedScroll * autoScrollerOptions.ease(betweenAccelerateAtAndStopAtPercentage);
  return Math.ceil(scroll2);
};
var getValue = ({
  distanceToEdge,
  thresholds,
  dragStartTime,
  shouldUseTimeDampening,
  getAutoScrollerOptions
}) => {
  const scroll2 = getValueFromDistance(distanceToEdge, thresholds, getAutoScrollerOptions);
  if (scroll2 === 0) {
    return 0;
  }
  if (!shouldUseTimeDampening) {
    return scroll2;
  }
  return Math.max(dampenValueByTime(scroll2, dragStartTime, getAutoScrollerOptions), minScroll);
};
var getScrollOnAxis = ({
  container,
  distanceToEdges,
  dragStartTime,
  axis,
  shouldUseTimeDampening,
  getAutoScrollerOptions
}) => {
  const thresholds = getDistanceThresholds(container, axis, getAutoScrollerOptions);
  const isCloserToEnd = distanceToEdges[axis.end] < distanceToEdges[axis.start];
  if (isCloserToEnd) {
    return getValue({
      distanceToEdge: distanceToEdges[axis.end],
      thresholds,
      dragStartTime,
      shouldUseTimeDampening,
      getAutoScrollerOptions
    });
  }
  return -1 * getValue({
    distanceToEdge: distanceToEdges[axis.start],
    thresholds,
    dragStartTime,
    shouldUseTimeDampening,
    getAutoScrollerOptions
  });
};
var adjustForSizeLimits = ({
  container,
  subject,
  proposedScroll
}) => {
  const isTooBigVertically = subject.height > container.height;
  const isTooBigHorizontally = subject.width > container.width;
  if (!isTooBigHorizontally && !isTooBigVertically) {
    return proposedScroll;
  }
  if (isTooBigHorizontally && isTooBigVertically) {
    return null;
  }
  return {
    x: isTooBigHorizontally ? 0 : proposedScroll.x,
    y: isTooBigVertically ? 0 : proposedScroll.y
  };
};
const clean = apply((value) => value === 0 ? 0 : value);
var getScroll$1 = ({
  dragStartTime,
  container,
  subject,
  center,
  shouldUseTimeDampening,
  getAutoScrollerOptions
}) => {
  const distanceToEdges = {
    top: center.y - container.top,
    right: container.right - center.x,
    bottom: container.bottom - center.y,
    left: center.x - container.left
  };
  const y = getScrollOnAxis({
    container,
    distanceToEdges,
    dragStartTime,
    axis: vertical,
    shouldUseTimeDampening,
    getAutoScrollerOptions
  });
  const x = getScrollOnAxis({
    container,
    distanceToEdges,
    dragStartTime,
    axis: horizontal,
    shouldUseTimeDampening,
    getAutoScrollerOptions
  });
  const required2 = clean({
    x,
    y
  });
  if (isEqual$1(required2, origin)) {
    return null;
  }
  const limited = adjustForSizeLimits({
    container,
    subject,
    proposedScroll: required2
  });
  if (!limited) {
    return null;
  }
  return isEqual$1(limited, origin) ? null : limited;
};
const smallestSigned = apply((value) => {
  if (value === 0) {
    return 0;
  }
  return value > 0 ? 1 : -1;
});
const getOverlap = /* @__PURE__ */ (() => {
  const getRemainder = (target, max) => {
    if (target < 0) {
      return target;
    }
    if (target > max) {
      return target - max;
    }
    return 0;
  };
  return ({
    current,
    max,
    change
  }) => {
    const targetScroll = add(current, change);
    const overlap = {
      x: getRemainder(targetScroll.x, max.x),
      y: getRemainder(targetScroll.y, max.y)
    };
    if (isEqual$1(overlap, origin)) {
      return null;
    }
    return overlap;
  };
})();
const canPartiallyScroll = ({
  max: rawMax,
  current,
  change
}) => {
  const max = {
    x: Math.max(current.x, rawMax.x),
    y: Math.max(current.y, rawMax.y)
  };
  const smallestChange = smallestSigned(change);
  const overlap = getOverlap({
    max,
    current,
    change: smallestChange
  });
  if (!overlap) {
    return true;
  }
  if (smallestChange.x !== 0 && overlap.x === 0) {
    return true;
  }
  if (smallestChange.y !== 0 && overlap.y === 0) {
    return true;
  }
  return false;
};
const canScrollWindow = (viewport, change) => canPartiallyScroll({
  current: viewport.scroll.current,
  max: viewport.scroll.max,
  change
});
const getWindowOverlap = (viewport, change) => {
  if (!canScrollWindow(viewport, change)) {
    return null;
  }
  const max = viewport.scroll.max;
  const current = viewport.scroll.current;
  return getOverlap({
    current,
    max,
    change
  });
};
const canScrollDroppable = (droppable2, change) => {
  const frame = droppable2.frame;
  if (!frame) {
    return false;
  }
  return canPartiallyScroll({
    current: frame.scroll.current,
    max: frame.scroll.max,
    change
  });
};
const getDroppableOverlap = (droppable2, change) => {
  const frame = droppable2.frame;
  if (!frame) {
    return null;
  }
  if (!canScrollDroppable(droppable2, change)) {
    return null;
  }
  return getOverlap({
    current: frame.scroll.current,
    max: frame.scroll.max,
    change
  });
};
var getWindowScrollChange = ({
  viewport,
  subject,
  center,
  dragStartTime,
  shouldUseTimeDampening,
  getAutoScrollerOptions
}) => {
  const scroll2 = getScroll$1({
    dragStartTime,
    container: viewport.frame,
    subject,
    center,
    shouldUseTimeDampening,
    getAutoScrollerOptions
  });
  return scroll2 && canScrollWindow(viewport, scroll2) ? scroll2 : null;
};
var getDroppableScrollChange = ({
  droppable: droppable2,
  subject,
  center,
  dragStartTime,
  shouldUseTimeDampening,
  getAutoScrollerOptions
}) => {
  const frame = droppable2.frame;
  if (!frame) {
    return null;
  }
  const scroll2 = getScroll$1({
    dragStartTime,
    container: frame.pageMarginBox,
    subject,
    center,
    shouldUseTimeDampening,
    getAutoScrollerOptions
  });
  return scroll2 && canScrollDroppable(droppable2, scroll2) ? scroll2 : null;
};
var scroll = ({
  state,
  dragStartTime,
  shouldUseTimeDampening,
  scrollWindow: scrollWindow2,
  scrollDroppable: scrollDroppable2,
  getAutoScrollerOptions
}) => {
  const center = state.current.page.borderBoxCenter;
  const draggable2 = state.dimensions.draggables[state.critical.draggable.id];
  const subject = draggable2.page.marginBox;
  if (state.isWindowScrollAllowed) {
    const viewport = state.viewport;
    const change2 = getWindowScrollChange({
      dragStartTime,
      viewport,
      subject,
      center,
      shouldUseTimeDampening,
      getAutoScrollerOptions
    });
    if (change2) {
      scrollWindow2(change2);
      return;
    }
  }
  const droppable2 = getBestScrollableDroppable({
    center,
    destination: whatIsDraggedOver(state.impact),
    droppables: state.dimensions.droppables
  });
  if (!droppable2) {
    return;
  }
  const change = getDroppableScrollChange({
    dragStartTime,
    droppable: droppable2,
    subject,
    center,
    shouldUseTimeDampening,
    getAutoScrollerOptions
  });
  if (change) {
    scrollDroppable2(droppable2.descriptor.id, change);
  }
};
var createFluidScroller = ({
  scrollWindow: scrollWindow2,
  scrollDroppable: scrollDroppable2,
  getAutoScrollerOptions = () => defaultAutoScrollerOptions
}) => {
  const scheduleWindowScroll = rafSchd(scrollWindow2);
  const scheduleDroppableScroll = rafSchd(scrollDroppable2);
  let dragging = null;
  const tryScroll = (state) => {
    !dragging ? invariant() : void 0;
    const {
      shouldUseTimeDampening,
      dragStartTime
    } = dragging;
    scroll({
      state,
      scrollWindow: scheduleWindowScroll,
      scrollDroppable: scheduleDroppableScroll,
      dragStartTime,
      shouldUseTimeDampening,
      getAutoScrollerOptions
    });
  };
  const start$1 = (state) => {
    !!dragging ? invariant() : void 0;
    const dragStartTime = Date.now();
    let wasScrollNeeded = false;
    const fakeScrollCallback = () => {
      wasScrollNeeded = true;
    };
    scroll({
      state,
      dragStartTime: 0,
      shouldUseTimeDampening: false,
      scrollWindow: fakeScrollCallback,
      scrollDroppable: fakeScrollCallback,
      getAutoScrollerOptions
    });
    dragging = {
      dragStartTime,
      shouldUseTimeDampening: wasScrollNeeded
    };
    if (wasScrollNeeded) {
      tryScroll(state);
    }
  };
  const stop = () => {
    if (!dragging) {
      return;
    }
    scheduleWindowScroll.cancel();
    scheduleDroppableScroll.cancel();
    dragging = null;
  };
  return {
    start: start$1,
    stop,
    scroll: tryScroll
  };
};
var createJumpScroller = ({
  move: move2,
  scrollDroppable: scrollDroppable2,
  scrollWindow: scrollWindow2
}) => {
  const moveByOffset = (state, offset2) => {
    const client = add(state.current.client.selection, offset2);
    move2({
      client
    });
  };
  const scrollDroppableAsMuchAsItCan = (droppable2, change) => {
    if (!canScrollDroppable(droppable2, change)) {
      return change;
    }
    const overlap = getDroppableOverlap(droppable2, change);
    if (!overlap) {
      scrollDroppable2(droppable2.descriptor.id, change);
      return null;
    }
    const whatTheDroppableCanScroll = subtract(change, overlap);
    scrollDroppable2(droppable2.descriptor.id, whatTheDroppableCanScroll);
    const remainder = subtract(change, whatTheDroppableCanScroll);
    return remainder;
  };
  const scrollWindowAsMuchAsItCan = (isWindowScrollAllowed, viewport, change) => {
    if (!isWindowScrollAllowed) {
      return change;
    }
    if (!canScrollWindow(viewport, change)) {
      return change;
    }
    const overlap = getWindowOverlap(viewport, change);
    if (!overlap) {
      scrollWindow2(change);
      return null;
    }
    const whatTheWindowCanScroll = subtract(change, overlap);
    scrollWindow2(whatTheWindowCanScroll);
    const remainder = subtract(change, whatTheWindowCanScroll);
    return remainder;
  };
  const jumpScroller = (state) => {
    const request = state.scrollJumpRequest;
    if (!request) {
      return;
    }
    const destination = whatIsDraggedOver(state.impact);
    !destination ? invariant() : void 0;
    const droppableRemainder = scrollDroppableAsMuchAsItCan(state.dimensions.droppables[destination], request);
    if (!droppableRemainder) {
      return;
    }
    const viewport = state.viewport;
    const windowRemainder = scrollWindowAsMuchAsItCan(state.isWindowScrollAllowed, viewport, droppableRemainder);
    if (!windowRemainder) {
      return;
    }
    moveByOffset(state, windowRemainder);
  };
  return jumpScroller;
};
var createAutoScroller = ({
  scrollDroppable: scrollDroppable2,
  scrollWindow: scrollWindow2,
  move: move2,
  getAutoScrollerOptions
}) => {
  const fluidScroller = createFluidScroller({
    scrollWindow: scrollWindow2,
    scrollDroppable: scrollDroppable2,
    getAutoScrollerOptions
  });
  const jumpScroll = createJumpScroller({
    move: move2,
    scrollWindow: scrollWindow2,
    scrollDroppable: scrollDroppable2
  });
  const scroll2 = (state) => {
    const autoScrollerOptions = getAutoScrollerOptions();
    if (autoScrollerOptions.disabled || state.phase !== "DRAGGING") {
      return;
    }
    if (state.movementMode === "FLUID") {
      fluidScroller.scroll(state);
      return;
    }
    if (!state.scrollJumpRequest) {
      return;
    }
    jumpScroll(state);
  };
  const scroller = {
    scroll: scroll2,
    start: fluidScroller.start,
    stop: fluidScroller.stop
  };
  return scroller;
};
const prefix = "data-rfd";
const dragHandle = (() => {
  const base = `${prefix}-drag-handle`;
  return {
    base,
    draggableId: `${base}-draggable-id`,
    contextId: `${base}-context-id`
  };
})();
const draggable = (() => {
  const base = `${prefix}-draggable`;
  return {
    base,
    contextId: `${base}-context-id`,
    id: `${base}-id`
  };
})();
const droppable = (() => {
  const base = `${prefix}-droppable`;
  return {
    base,
    contextId: `${base}-context-id`,
    id: `${base}-id`
  };
})();
const scrollContainer = {
  contextId: `${prefix}-scroll-container-context-id`
};
const makeGetSelector = (context) => (attribute) => `[${attribute}="${context}"]`;
const getStyles = (rules, property) => rules.map((rule) => {
  const value = rule.styles[property];
  if (!value) {
    return "";
  }
  return `${rule.selector} { ${value} }`;
}).join(" ");
const noPointerEvents = "pointer-events: none;";
var getStyles$1 = (contextId) => {
  const getSelector2 = makeGetSelector(contextId);
  const dragHandle$1 = (() => {
    const grabCursor = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
    return {
      selector: getSelector2(dragHandle.contextId),
      styles: {
        always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
        resting: grabCursor,
        dragging: noPointerEvents,
        dropAnimating: grabCursor
      }
    };
  })();
  const draggable$1 = (() => {
    const transition = `
      transition: ${transitions.outOfTheWay};
    `;
    return {
      selector: getSelector2(draggable.contextId),
      styles: {
        dragging: transition,
        dropAnimating: transition,
        userCancel: transition
      }
    };
  })();
  const droppable$1 = {
    selector: getSelector2(droppable.contextId),
    styles: {
      always: `overflow-anchor: none;`
    }
  };
  const body = {
    selector: "body",
    styles: {
      dragging: `
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `
    }
  };
  const rules = [draggable$1, dragHandle$1, droppable$1, body];
  return {
    always: getStyles(rules, "always"),
    resting: getStyles(rules, "resting"),
    dragging: getStyles(rules, "dragging"),
    dropAnimating: getStyles(rules, "dropAnimating"),
    userCancel: getStyles(rules, "userCancel")
  };
};
const useIsomorphicLayoutEffect = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined" ? useLayoutEffect : useEffect;
const getHead = () => {
  const head = document.querySelector("head");
  !head ? invariant() : void 0;
  return head;
};
const createStyleEl = (nonce) => {
  const el = document.createElement("style");
  if (nonce) {
    el.setAttribute("nonce", nonce);
  }
  el.type = "text/css";
  return el;
};
function useStyleMarshal(contextId, nonce) {
  const styles = useMemo(() => getStyles$1(contextId), [contextId]);
  const alwaysRef = useRef(null);
  const dynamicRef = useRef(null);
  const setDynamicStyle = useCallback(memoizeOne((proposed) => {
    const el = dynamicRef.current;
    !el ? invariant() : void 0;
    el.textContent = proposed;
  }), []);
  const setAlwaysStyle = useCallback((proposed) => {
    const el = alwaysRef.current;
    !el ? invariant() : void 0;
    el.textContent = proposed;
  }, []);
  useIsomorphicLayoutEffect(() => {
    !(!alwaysRef.current && !dynamicRef.current) ? invariant() : void 0;
    const always = createStyleEl(nonce);
    const dynamic = createStyleEl(nonce);
    alwaysRef.current = always;
    dynamicRef.current = dynamic;
    always.setAttribute(`${prefix}-always`, contextId);
    dynamic.setAttribute(`${prefix}-dynamic`, contextId);
    getHead().appendChild(always);
    getHead().appendChild(dynamic);
    setAlwaysStyle(styles.always);
    setDynamicStyle(styles.resting);
    return () => {
      const remove = (ref2) => {
        const current = ref2.current;
        !current ? invariant() : void 0;
        getHead().removeChild(current);
        ref2.current = null;
      };
      remove(alwaysRef);
      remove(dynamicRef);
    };
  }, [nonce, setAlwaysStyle, setDynamicStyle, styles.always, styles.resting, contextId]);
  const dragging = useCallback(() => setDynamicStyle(styles.dragging), [setDynamicStyle, styles.dragging]);
  const dropping = useCallback((reason) => {
    if (reason === "DROP") {
      setDynamicStyle(styles.dropAnimating);
      return;
    }
    setDynamicStyle(styles.userCancel);
  }, [setDynamicStyle, styles.dropAnimating, styles.userCancel]);
  const resting = useCallback(() => {
    if (!dynamicRef.current) {
      return;
    }
    setDynamicStyle(styles.resting);
  }, [setDynamicStyle, styles.resting]);
  const marshal = useMemo(() => ({
    dragging,
    dropping,
    resting
  }), [dragging, dropping, resting]);
  return marshal;
}
function querySelectorAll(parentNode, selector) {
  return Array.from(parentNode.querySelectorAll(selector));
}
var getWindowFromEl = (el) => {
  if (el && el.ownerDocument && el.ownerDocument.defaultView) {
    return el.ownerDocument.defaultView;
  }
  return window;
};
function isHtmlElement(el) {
  return el instanceof getWindowFromEl(el).HTMLElement;
}
function findDragHandle(contextId, draggableId) {
  const selector = `[${dragHandle.contextId}="${contextId}"]`;
  const possible = querySelectorAll(document, selector);
  if (!possible.length) {
    return null;
  }
  const handle = possible.find((el) => {
    return el.getAttribute(dragHandle.draggableId) === draggableId;
  });
  if (!handle) {
    return null;
  }
  if (!isHtmlElement(handle)) {
    return null;
  }
  return handle;
}
function useFocusMarshal(contextId) {
  const entriesRef = useRef({});
  const recordRef = useRef(null);
  const restoreFocusFrameRef = useRef(null);
  const isMountedRef = useRef(false);
  const register = useCallback(function register2(id, focus2) {
    const entry = {
      id,
      focus: focus2
    };
    entriesRef.current[id] = entry;
    return function unregister() {
      const entries = entriesRef.current;
      const current = entries[id];
      if (current !== entry) {
        delete entries[id];
      }
    };
  }, []);
  const tryGiveFocus = useCallback(function tryGiveFocus2(tryGiveFocusTo) {
    const handle = findDragHandle(contextId, tryGiveFocusTo);
    if (handle && handle !== document.activeElement) {
      handle.focus();
    }
  }, [contextId]);
  const tryShiftRecord = useCallback(function tryShiftRecord2(previous, redirectTo) {
    if (recordRef.current === previous) {
      recordRef.current = redirectTo;
    }
  }, []);
  const tryRestoreFocusRecorded = useCallback(function tryRestoreFocusRecorded2() {
    if (restoreFocusFrameRef.current) {
      return;
    }
    if (!isMountedRef.current) {
      return;
    }
    restoreFocusFrameRef.current = requestAnimationFrame(() => {
      restoreFocusFrameRef.current = null;
      const record = recordRef.current;
      if (record) {
        tryGiveFocus(record);
      }
    });
  }, [tryGiveFocus]);
  const tryRecordFocus = useCallback(function tryRecordFocus2(id) {
    recordRef.current = null;
    const focused = document.activeElement;
    if (!focused) {
      return;
    }
    if (focused.getAttribute(dragHandle.draggableId) !== id) {
      return;
    }
    recordRef.current = id;
  }, []);
  useIsomorphicLayoutEffect(() => {
    isMountedRef.current = true;
    return function clearFrameOnUnmount() {
      isMountedRef.current = false;
      const frameId = restoreFocusFrameRef.current;
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);
  const marshal = useMemo(() => ({
    register,
    tryRecordFocus,
    tryRestoreFocusRecorded,
    tryShiftRecord
  }), [register, tryRecordFocus, tryRestoreFocusRecorded, tryShiftRecord]);
  return marshal;
}
function createRegistry() {
  const entries = {
    draggables: {},
    droppables: {}
  };
  const subscribers = [];
  function subscribe(cb) {
    subscribers.push(cb);
    return function unsubscribe() {
      const index = subscribers.indexOf(cb);
      if (index === -1) {
        return;
      }
      subscribers.splice(index, 1);
    };
  }
  function notify(event) {
    if (subscribers.length) {
      subscribers.forEach((cb) => cb(event));
    }
  }
  function findDraggableById(id) {
    return entries.draggables[id] || null;
  }
  function getDraggableById(id) {
    const entry = findDraggableById(id);
    !entry ? invariant() : void 0;
    return entry;
  }
  const draggableAPI = {
    register: (entry) => {
      entries.draggables[entry.descriptor.id] = entry;
      notify({
        type: "ADDITION",
        value: entry
      });
    },
    update: (entry, last) => {
      const current = entries.draggables[last.descriptor.id];
      if (!current) {
        return;
      }
      if (current.uniqueId !== entry.uniqueId) {
        return;
      }
      delete entries.draggables[last.descriptor.id];
      entries.draggables[entry.descriptor.id] = entry;
    },
    unregister: (entry) => {
      const draggableId = entry.descriptor.id;
      const current = findDraggableById(draggableId);
      if (!current) {
        return;
      }
      if (entry.uniqueId !== current.uniqueId) {
        return;
      }
      delete entries.draggables[draggableId];
      if (entries.droppables[entry.descriptor.droppableId]) {
        notify({
          type: "REMOVAL",
          value: entry
        });
      }
    },
    getById: getDraggableById,
    findById: findDraggableById,
    exists: (id) => Boolean(findDraggableById(id)),
    getAllByType: (type) => Object.values(entries.draggables).filter((entry) => entry.descriptor.type === type)
  };
  function findDroppableById(id) {
    return entries.droppables[id] || null;
  }
  function getDroppableById(id) {
    const entry = findDroppableById(id);
    !entry ? invariant() : void 0;
    return entry;
  }
  const droppableAPI = {
    register: (entry) => {
      entries.droppables[entry.descriptor.id] = entry;
    },
    unregister: (entry) => {
      const current = findDroppableById(entry.descriptor.id);
      if (!current) {
        return;
      }
      if (entry.uniqueId !== current.uniqueId) {
        return;
      }
      delete entries.droppables[entry.descriptor.id];
    },
    getById: getDroppableById,
    findById: findDroppableById,
    exists: (id) => Boolean(findDroppableById(id)),
    getAllByType: (type) => Object.values(entries.droppables).filter((entry) => entry.descriptor.type === type)
  };
  function clean2() {
    entries.draggables = {};
    entries.droppables = {};
    subscribers.length = 0;
  }
  return {
    draggable: draggableAPI,
    droppable: droppableAPI,
    subscribe,
    clean: clean2
  };
}
function useRegistry() {
  const registry = useMemo(createRegistry, []);
  useEffect(() => {
    return function unmount() {
      registry.clean();
    };
  }, [registry]);
  return registry;
}
var StoreContext = React.createContext(null);
var getBodyElement = () => {
  const body = document.body;
  !body ? invariant() : void 0;
  return body;
};
const visuallyHidden = {
  position: "absolute",
  width: "1px",
  height: "1px",
  margin: "-1px",
  border: "0",
  padding: "0",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  "clip-path": "inset(100%)"
};
const getId = (contextId) => `rfd-announcement-${contextId}`;
function useAnnouncer(contextId) {
  const id = useMemo(() => getId(contextId), [contextId]);
  const ref2 = useRef(null);
  useEffect(function setup() {
    const el = document.createElement("div");
    ref2.current = el;
    el.id = id;
    el.setAttribute("aria-live", "assertive");
    el.setAttribute("aria-atomic", "true");
    _extends(el.style, visuallyHidden);
    getBodyElement().appendChild(el);
    return function cleanup() {
      setTimeout(function remove() {
        const body = getBodyElement();
        if (body.contains(el)) {
          body.removeChild(el);
        }
        if (el === ref2.current) {
          ref2.current = null;
        }
      });
    };
  }, [id]);
  const announce = useCallback((message) => {
    const el = ref2.current;
    if (el) {
      el.textContent = message;
      return;
    }
  }, []);
  return announce;
}
const defaults = {
  separator: "::"
};
function useUniqueId(prefix2, options = defaults) {
  const id = React.useId();
  return useMemo(() => `${prefix2}${options.separator}${id}`, [options.separator, prefix2, id]);
}
function getElementId({
  contextId,
  uniqueId
}) {
  return `rfd-hidden-text-${contextId}-${uniqueId}`;
}
function useHiddenTextElement({
  contextId,
  text
}) {
  const uniqueId = useUniqueId("hidden-text", {
    separator: "-"
  });
  const id = useMemo(() => getElementId({
    contextId,
    uniqueId
  }), [uniqueId, contextId]);
  useEffect(function mount() {
    const el = document.createElement("div");
    el.id = id;
    el.textContent = text;
    el.style.display = "none";
    getBodyElement().appendChild(el);
    return function unmount() {
      const body = getBodyElement();
      if (body.contains(el)) {
        body.removeChild(el);
      }
    };
  }, [id, text]);
  return id;
}
var AppContext = React.createContext(null);
function usePrevious(current) {
  const ref2 = useRef(current);
  useEffect(() => {
    ref2.current = current;
  });
  return ref2;
}
function create() {
  let lock = null;
  function isClaimed() {
    return Boolean(lock);
  }
  function isActive2(value) {
    return value === lock;
  }
  function claim(abandon) {
    !!lock ? invariant() : void 0;
    const newLock = {
      abandon
    };
    lock = newLock;
    return newLock;
  }
  function release() {
    !lock ? invariant() : void 0;
    lock = null;
  }
  function tryAbandon() {
    if (lock) {
      lock.abandon();
      release();
    }
  }
  return {
    isClaimed,
    isActive: isActive2,
    claim,
    release,
    tryAbandon
  };
}
function isDragging(state) {
  if (state.phase === "IDLE" || state.phase === "DROP_ANIMATING") {
    return false;
  }
  return state.isDragging;
}
const tab = 9;
const enter = 13;
const escape = 27;
const space = 32;
const pageUp = 33;
const pageDown = 34;
const end = 35;
const home = 36;
const arrowLeft = 37;
const arrowUp = 38;
const arrowRight = 39;
const arrowDown = 40;
const preventedKeys = {
  [enter]: true,
  [tab]: true
};
var preventStandardKeyEvents = (event) => {
  if (preventedKeys[event.keyCode]) {
    event.preventDefault();
  }
};
const supportedEventName = (() => {
  const base = "visibilitychange";
  if (typeof document === "undefined") {
    return base;
  }
  const candidates = [base, `ms${base}`, `webkit${base}`, `moz${base}`, `o${base}`];
  const supported = candidates.find((eventName) => `on${eventName}` in document);
  return supported || base;
})();
const primaryButton = 0;
const sloppyClickThreshold = 5;
function isSloppyClickThresholdExceeded(original, current) {
  return Math.abs(current.x - original.x) >= sloppyClickThreshold || Math.abs(current.y - original.y) >= sloppyClickThreshold;
}
const idle$1 = {
  type: "IDLE"
};
function getCaptureBindings({
  cancel,
  completed,
  getPhase,
  setPhase
}) {
  return [{
    eventName: "mousemove",
    fn: (event) => {
      const {
        button,
        clientX,
        clientY
      } = event;
      if (button !== primaryButton) {
        return;
      }
      const point = {
        x: clientX,
        y: clientY
      };
      const phase = getPhase();
      if (phase.type === "DRAGGING") {
        event.preventDefault();
        phase.actions.move(point);
        return;
      }
      !(phase.type === "PENDING") ? invariant() : void 0;
      const pending = phase.point;
      if (!isSloppyClickThresholdExceeded(pending, point)) {
        return;
      }
      event.preventDefault();
      const actions = phase.actions.fluidLift(point);
      setPhase({
        type: "DRAGGING",
        actions
      });
    }
  }, {
    eventName: "mouseup",
    fn: (event) => {
      const phase = getPhase();
      if (phase.type !== "DRAGGING") {
        cancel();
        return;
      }
      event.preventDefault();
      phase.actions.drop({
        shouldBlockNextClick: true
      });
      completed();
    }
  }, {
    eventName: "mousedown",
    fn: (event) => {
      if (getPhase().type === "DRAGGING") {
        event.preventDefault();
      }
      cancel();
    }
  }, {
    eventName: "keydown",
    fn: (event) => {
      const phase = getPhase();
      if (phase.type === "PENDING") {
        cancel();
        return;
      }
      if (event.keyCode === escape) {
        event.preventDefault();
        cancel();
        return;
      }
      preventStandardKeyEvents(event);
    }
  }, {
    eventName: "resize",
    fn: cancel
  }, {
    eventName: "scroll",
    options: {
      passive: true,
      capture: false
    },
    fn: () => {
      if (getPhase().type === "PENDING") {
        cancel();
      }
    }
  }, {
    eventName: "webkitmouseforcedown",
    fn: (event) => {
      const phase = getPhase();
      !(phase.type !== "IDLE") ? invariant() : void 0;
      if (phase.actions.shouldRespectForcePress()) {
        cancel();
        return;
      }
      event.preventDefault();
    }
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];
}
function useMouseSensor(api) {
  const phaseRef = useRef(idle$1);
  const unbindEventsRef = useRef(noop$2);
  const startCaptureBinding = useMemo(() => ({
    eventName: "mousedown",
    fn: function onMouseDown(event) {
      if (event.defaultPrevented) {
        return;
      }
      if (event.button !== primaryButton) {
        return;
      }
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
        return;
      }
      const draggableId = api.findClosestDraggableId(event);
      if (!draggableId) {
        return;
      }
      const actions = api.tryGetLock(draggableId, stop, {
        sourceEvent: event
      });
      if (!actions) {
        return;
      }
      event.preventDefault();
      const point = {
        x: event.clientX,
        y: event.clientY
      };
      unbindEventsRef.current();
      startPendingDrag(actions, point);
    }
  }), [api]);
  const preventForcePressBinding = useMemo(() => ({
    eventName: "webkitmouseforcewillbegin",
    fn: (event) => {
      if (event.defaultPrevented) {
        return;
      }
      const id = api.findClosestDraggableId(event);
      if (!id) {
        return;
      }
      const options = api.findOptionsForDraggable(id);
      if (!options) {
        return;
      }
      if (options.shouldRespectForcePress) {
        return;
      }
      if (!api.canGetLock(id)) {
        return;
      }
      event.preventDefault();
    }
  }), [api]);
  const listenForCapture = useCallback(function listenForCapture2() {
    const options = {
      passive: false,
      capture: true
    };
    unbindEventsRef.current = bindEvents(window, [preventForcePressBinding, startCaptureBinding], options);
  }, [preventForcePressBinding, startCaptureBinding]);
  const stop = useCallback(() => {
    const current = phaseRef.current;
    if (current.type === "IDLE") {
      return;
    }
    phaseRef.current = idle$1;
    unbindEventsRef.current();
    listenForCapture();
  }, [listenForCapture]);
  const cancel = useCallback(() => {
    const phase = phaseRef.current;
    stop();
    if (phase.type === "DRAGGING") {
      phase.actions.cancel({
        shouldBlockNextClick: true
      });
    }
    if (phase.type === "PENDING") {
      phase.actions.abort();
    }
  }, [stop]);
  const bindCapturingEvents = useCallback(function bindCapturingEvents2() {
    const options = {
      capture: true,
      passive: false
    };
    const bindings = getCaptureBindings({
      cancel,
      completed: stop,
      getPhase: () => phaseRef.current,
      setPhase: (phase) => {
        phaseRef.current = phase;
      }
    });
    unbindEventsRef.current = bindEvents(window, bindings, options);
  }, [cancel, stop]);
  const startPendingDrag = useCallback(function startPendingDrag2(actions, point) {
    !(phaseRef.current.type === "IDLE") ? invariant() : void 0;
    phaseRef.current = {
      type: "PENDING",
      point,
      actions
    };
    bindCapturingEvents();
  }, [bindCapturingEvents]);
  useIsomorphicLayoutEffect(function mount() {
    listenForCapture();
    return function unmount() {
      unbindEventsRef.current();
    };
  }, [listenForCapture]);
}
function noop$1() {
}
const scrollJumpKeys = {
  [pageDown]: true,
  [pageUp]: true,
  [home]: true,
  [end]: true
};
function getDraggingBindings(actions, stop) {
  function cancel() {
    stop();
    actions.cancel();
  }
  function drop2() {
    stop();
    actions.drop();
  }
  return [{
    eventName: "keydown",
    fn: (event) => {
      if (event.keyCode === escape) {
        event.preventDefault();
        cancel();
        return;
      }
      if (event.keyCode === space) {
        event.preventDefault();
        drop2();
        return;
      }
      if (event.keyCode === arrowDown) {
        event.preventDefault();
        actions.moveDown();
        return;
      }
      if (event.keyCode === arrowUp) {
        event.preventDefault();
        actions.moveUp();
        return;
      }
      if (event.keyCode === arrowRight) {
        event.preventDefault();
        actions.moveRight();
        return;
      }
      if (event.keyCode === arrowLeft) {
        event.preventDefault();
        actions.moveLeft();
        return;
      }
      if (scrollJumpKeys[event.keyCode]) {
        event.preventDefault();
        return;
      }
      preventStandardKeyEvents(event);
    }
  }, {
    eventName: "mousedown",
    fn: cancel
  }, {
    eventName: "mouseup",
    fn: cancel
  }, {
    eventName: "click",
    fn: cancel
  }, {
    eventName: "touchstart",
    fn: cancel
  }, {
    eventName: "resize",
    fn: cancel
  }, {
    eventName: "wheel",
    fn: cancel,
    options: {
      passive: true
    }
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];
}
function useKeyboardSensor(api) {
  const unbindEventsRef = useRef(noop$1);
  const startCaptureBinding = useMemo(() => ({
    eventName: "keydown",
    fn: function onKeyDown(event) {
      if (event.defaultPrevented) {
        return;
      }
      if (event.keyCode !== space) {
        return;
      }
      const draggableId = api.findClosestDraggableId(event);
      if (!draggableId) {
        return;
      }
      const preDrag = api.tryGetLock(draggableId, stop, {
        sourceEvent: event
      });
      if (!preDrag) {
        return;
      }
      event.preventDefault();
      let isCapturing = true;
      const actions = preDrag.snapLift();
      unbindEventsRef.current();
      function stop() {
        !isCapturing ? invariant() : void 0;
        isCapturing = false;
        unbindEventsRef.current();
        listenForCapture();
      }
      unbindEventsRef.current = bindEvents(window, getDraggingBindings(actions, stop), {
        capture: true,
        passive: false
      });
    }
  }), [api]);
  const listenForCapture = useCallback(function tryStartCapture() {
    const options = {
      passive: false,
      capture: true
    };
    unbindEventsRef.current = bindEvents(window, [startCaptureBinding], options);
  }, [startCaptureBinding]);
  useIsomorphicLayoutEffect(function mount() {
    listenForCapture();
    return function unmount() {
      unbindEventsRef.current();
    };
  }, [listenForCapture]);
}
const idle = {
  type: "IDLE"
};
const timeForLongPress = 120;
const forcePressThreshold = 0.15;
function getWindowBindings({
  cancel,
  getPhase
}) {
  return [{
    eventName: "orientationchange",
    fn: cancel
  }, {
    eventName: "resize",
    fn: cancel
  }, {
    eventName: "contextmenu",
    fn: (event) => {
      event.preventDefault();
    }
  }, {
    eventName: "keydown",
    fn: (event) => {
      if (getPhase().type !== "DRAGGING") {
        cancel();
        return;
      }
      if (event.keyCode === escape) {
        event.preventDefault();
      }
      cancel();
    }
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];
}
function getHandleBindings({
  cancel,
  completed,
  getPhase
}) {
  return [{
    eventName: "touchmove",
    options: {
      capture: false
    },
    fn: (event) => {
      const phase = getPhase();
      if (phase.type !== "DRAGGING") {
        cancel();
        return;
      }
      phase.hasMoved = true;
      const {
        clientX,
        clientY
      } = event.touches[0];
      const point = {
        x: clientX,
        y: clientY
      };
      event.preventDefault();
      phase.actions.move(point);
    }
  }, {
    eventName: "touchend",
    fn: (event) => {
      const phase = getPhase();
      if (phase.type !== "DRAGGING") {
        cancel();
        return;
      }
      event.preventDefault();
      phase.actions.drop({
        shouldBlockNextClick: true
      });
      completed();
    }
  }, {
    eventName: "touchcancel",
    fn: (event) => {
      if (getPhase().type !== "DRAGGING") {
        cancel();
        return;
      }
      event.preventDefault();
      cancel();
    }
  }, {
    eventName: "touchforcechange",
    fn: (event) => {
      const phase = getPhase();
      !(phase.type !== "IDLE") ? invariant() : void 0;
      const touch = event.touches[0];
      if (!touch) {
        return;
      }
      const isForcePress = touch.force >= forcePressThreshold;
      if (!isForcePress) {
        return;
      }
      const shouldRespect = phase.actions.shouldRespectForcePress();
      if (phase.type === "PENDING") {
        if (shouldRespect) {
          cancel();
        }
        return;
      }
      if (shouldRespect) {
        if (phase.hasMoved) {
          event.preventDefault();
          return;
        }
        cancel();
        return;
      }
      event.preventDefault();
    }
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];
}
function useTouchSensor(api) {
  const phaseRef = useRef(idle);
  const unbindEventsRef = useRef(noop$2);
  const getPhase = useCallback(function getPhase2() {
    return phaseRef.current;
  }, []);
  const setPhase = useCallback(function setPhase2(phase) {
    phaseRef.current = phase;
  }, []);
  const startCaptureBinding = useMemo(() => ({
    eventName: "touchstart",
    fn: function onTouchStart(event) {
      if (event.defaultPrevented) {
        return;
      }
      const draggableId = api.findClosestDraggableId(event);
      if (!draggableId) {
        return;
      }
      const actions = api.tryGetLock(draggableId, stop, {
        sourceEvent: event
      });
      if (!actions) {
        return;
      }
      const touch = event.touches[0];
      const {
        clientX,
        clientY
      } = touch;
      const point = {
        x: clientX,
        y: clientY
      };
      unbindEventsRef.current();
      startPendingDrag(actions, point);
    }
  }), [api]);
  const listenForCapture = useCallback(function listenForCapture2() {
    const options = {
      capture: true,
      passive: false
    };
    unbindEventsRef.current = bindEvents(window, [startCaptureBinding], options);
  }, [startCaptureBinding]);
  const stop = useCallback(() => {
    const current = phaseRef.current;
    if (current.type === "IDLE") {
      return;
    }
    if (current.type === "PENDING") {
      clearTimeout(current.longPressTimerId);
    }
    setPhase(idle);
    unbindEventsRef.current();
    listenForCapture();
  }, [listenForCapture, setPhase]);
  const cancel = useCallback(() => {
    const phase = phaseRef.current;
    stop();
    if (phase.type === "DRAGGING") {
      phase.actions.cancel({
        shouldBlockNextClick: true
      });
    }
    if (phase.type === "PENDING") {
      phase.actions.abort();
    }
  }, [stop]);
  const bindCapturingEvents = useCallback(function bindCapturingEvents2() {
    const options = {
      capture: true,
      passive: false
    };
    const args = {
      cancel,
      completed: stop,
      getPhase
    };
    const unbindTarget = bindEvents(window, getHandleBindings(args), options);
    const unbindWindow = bindEvents(window, getWindowBindings(args), options);
    unbindEventsRef.current = function unbindAll() {
      unbindTarget();
      unbindWindow();
    };
  }, [cancel, getPhase, stop]);
  const startDragging = useCallback(function startDragging2() {
    const phase = getPhase();
    !(phase.type === "PENDING") ? invariant() : void 0;
    const actions = phase.actions.fluidLift(phase.point);
    setPhase({
      type: "DRAGGING",
      actions,
      hasMoved: false
    });
  }, [getPhase, setPhase]);
  const startPendingDrag = useCallback(function startPendingDrag2(actions, point) {
    !(getPhase().type === "IDLE") ? invariant() : void 0;
    const longPressTimerId = setTimeout(startDragging, timeForLongPress);
    setPhase({
      type: "PENDING",
      point,
      actions,
      longPressTimerId
    });
    bindCapturingEvents();
  }, [bindCapturingEvents, getPhase, setPhase, startDragging]);
  useIsomorphicLayoutEffect(function mount() {
    listenForCapture();
    return function unmount() {
      unbindEventsRef.current();
      const phase = getPhase();
      if (phase.type === "PENDING") {
        clearTimeout(phase.longPressTimerId);
        setPhase(idle);
      }
    };
  }, [getPhase, listenForCapture, setPhase]);
  useIsomorphicLayoutEffect(function webkitHack() {
    const unbind = bindEvents(window, [{
      eventName: "touchmove",
      fn: () => {
      },
      options: {
        capture: false,
        passive: false
      }
    }]);
    return unbind;
  }, []);
}
const interactiveTagNames = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function isAnInteractiveElement(parent, current) {
  if (current == null) {
    return false;
  }
  const hasAnInteractiveTag = interactiveTagNames.includes(current.tagName.toLowerCase());
  if (hasAnInteractiveTag) {
    return true;
  }
  const attribute = current.getAttribute("contenteditable");
  if (attribute === "true" || attribute === "") {
    return true;
  }
  if (current === parent) {
    return false;
  }
  return isAnInteractiveElement(parent, current.parentElement);
}
function isEventInInteractiveElement(draggable2, event) {
  const target = event.target;
  if (!isHtmlElement(target)) {
    return false;
  }
  return isAnInteractiveElement(draggable2, target);
}
var getBorderBoxCenterPosition = (el) => getRect(el.getBoundingClientRect()).center;
function isElement(el) {
  return el instanceof getWindowFromEl(el).Element;
}
const supportedMatchesName = (() => {
  const base = "matches";
  if (typeof document === "undefined") {
    return base;
  }
  const candidates = [base, "msMatchesSelector", "webkitMatchesSelector"];
  const value = candidates.find((name) => name in Element.prototype);
  return value || base;
})();
function closestPonyfill(el, selector) {
  if (el == null) {
    return null;
  }
  if (el[supportedMatchesName](selector)) {
    return el;
  }
  return closestPonyfill(el.parentElement, selector);
}
function closest(el, selector) {
  if (el.closest) {
    return el.closest(selector);
  }
  return closestPonyfill(el, selector);
}
function getSelector(contextId) {
  return `[${dragHandle.contextId}="${contextId}"]`;
}
function findClosestDragHandleFromEvent(contextId, event) {
  const target = event.target;
  if (!isElement(target)) {
    return null;
  }
  const selector = getSelector(contextId);
  const handle = closest(target, selector);
  if (!handle) {
    return null;
  }
  if (!isHtmlElement(handle)) {
    return null;
  }
  return handle;
}
function tryGetClosestDraggableIdFromEvent(contextId, event) {
  const handle = findClosestDragHandleFromEvent(contextId, event);
  if (!handle) {
    return null;
  }
  return handle.getAttribute(dragHandle.draggableId);
}
function findDraggable(contextId, draggableId) {
  const selector = `[${draggable.contextId}="${contextId}"]`;
  const possible = querySelectorAll(document, selector);
  const draggable$1 = possible.find((el) => {
    return el.getAttribute(draggable.id) === draggableId;
  });
  if (!draggable$1) {
    return null;
  }
  if (!isHtmlElement(draggable$1)) {
    return null;
  }
  return draggable$1;
}
function preventDefault(event) {
  event.preventDefault();
}
function isActive({
  expected,
  phase,
  isLockActive,
  shouldWarn
}) {
  if (!isLockActive()) {
    return false;
  }
  if (expected !== phase) {
    return false;
  }
  return true;
}
function canStart({
  lockAPI,
  store,
  registry,
  draggableId
}) {
  if (lockAPI.isClaimed()) {
    return false;
  }
  const entry = registry.draggable.findById(draggableId);
  if (!entry) {
    return false;
  }
  if (!entry.options.isEnabled) {
    return false;
  }
  if (!canStartDrag(store.getState(), draggableId)) {
    return false;
  }
  return true;
}
function tryStart({
  lockAPI,
  contextId,
  store,
  registry,
  draggableId,
  forceSensorStop,
  sourceEvent
}) {
  const shouldStart = canStart({
    lockAPI,
    store,
    registry,
    draggableId
  });
  if (!shouldStart) {
    return null;
  }
  const entry = registry.draggable.getById(draggableId);
  const el = findDraggable(contextId, entry.descriptor.id);
  if (!el) {
    return null;
  }
  if (sourceEvent && !entry.options.canDragInteractiveElements && isEventInInteractiveElement(el, sourceEvent)) {
    return null;
  }
  const lock = lockAPI.claim(forceSensorStop || noop$2);
  let phase = "PRE_DRAG";
  function getShouldRespectForcePress() {
    return entry.options.shouldRespectForcePress;
  }
  function isLockActive() {
    return lockAPI.isActive(lock);
  }
  function tryDispatch(expected, getAction) {
    if (isActive({
      expected,
      phase,
      isLockActive,
      shouldWarn: true
    })) {
      store.dispatch(getAction());
    }
  }
  const tryDispatchWhenDragging = tryDispatch.bind(null, "DRAGGING");
  function lift2(args) {
    function completed() {
      lockAPI.release();
      phase = "COMPLETED";
    }
    if (phase !== "PRE_DRAG") {
      completed();
      invariant();
    }
    store.dispatch(lift$1(args.liftActionArgs));
    phase = "DRAGGING";
    function finish2(reason, options = {
      shouldBlockNextClick: false
    }) {
      args.cleanup();
      if (options.shouldBlockNextClick) {
        const unbind = bindEvents(window, [{
          eventName: "click",
          fn: preventDefault,
          options: {
            once: true,
            passive: false,
            capture: true
          }
        }]);
        setTimeout(unbind);
      }
      completed();
      store.dispatch(drop({
        reason
      }));
    }
    return {
      isActive: () => isActive({
        expected: "DRAGGING",
        phase,
        isLockActive,
        shouldWarn: false
      }),
      shouldRespectForcePress: getShouldRespectForcePress,
      drop: (options) => finish2("DROP", options),
      cancel: (options) => finish2("CANCEL", options),
      ...args.actions
    };
  }
  function fluidLift(clientSelection) {
    const move$1 = rafSchd((client) => {
      tryDispatchWhenDragging(() => move({
        client
      }));
    });
    const api = lift2({
      liftActionArgs: {
        id: draggableId,
        clientSelection,
        movementMode: "FLUID"
      },
      cleanup: () => move$1.cancel(),
      actions: {
        move: move$1
      }
    });
    return {
      ...api,
      move: move$1
    };
  }
  function snapLift() {
    const actions = {
      moveUp: () => tryDispatchWhenDragging(moveUp),
      moveRight: () => tryDispatchWhenDragging(moveRight),
      moveDown: () => tryDispatchWhenDragging(moveDown),
      moveLeft: () => tryDispatchWhenDragging(moveLeft)
    };
    return lift2({
      liftActionArgs: {
        id: draggableId,
        clientSelection: getBorderBoxCenterPosition(el),
        movementMode: "SNAP"
      },
      cleanup: noop$2,
      actions
    });
  }
  function abortPreDrag() {
    const shouldRelease = isActive({
      expected: "PRE_DRAG",
      phase,
      isLockActive,
      shouldWarn: true
    });
    if (shouldRelease) {
      lockAPI.release();
    }
  }
  const preDrag = {
    isActive: () => isActive({
      expected: "PRE_DRAG",
      phase,
      isLockActive,
      shouldWarn: false
    }),
    shouldRespectForcePress: getShouldRespectForcePress,
    fluidLift,
    snapLift,
    abort: abortPreDrag
  };
  return preDrag;
}
const defaultSensors = [useMouseSensor, useKeyboardSensor, useTouchSensor];
function useSensorMarshal({
  contextId,
  store,
  registry,
  customSensors,
  enableDefaultSensors
}) {
  const useSensors = [...enableDefaultSensors ? defaultSensors : [], ...customSensors || []];
  const lockAPI = useState(() => create())[0];
  const tryAbandonLock = useCallback(function tryAbandonLock2(previous, current) {
    if (isDragging(previous) && !isDragging(current)) {
      lockAPI.tryAbandon();
    }
  }, [lockAPI]);
  useIsomorphicLayoutEffect(function listenToStore() {
    let previous = store.getState();
    const unsubscribe = store.subscribe(() => {
      const current = store.getState();
      tryAbandonLock(previous, current);
      previous = current;
    });
    return unsubscribe;
  }, [lockAPI, store, tryAbandonLock]);
  useIsomorphicLayoutEffect(() => {
    return lockAPI.tryAbandon;
  }, [lockAPI.tryAbandon]);
  const canGetLock = useCallback((draggableId) => {
    return canStart({
      lockAPI,
      registry,
      store,
      draggableId
    });
  }, [lockAPI, registry, store]);
  const tryGetLock = useCallback((draggableId, forceStop, options) => tryStart({
    lockAPI,
    registry,
    contextId,
    store,
    draggableId,
    forceSensorStop: forceStop || null,
    sourceEvent: options && options.sourceEvent ? options.sourceEvent : null
  }), [contextId, lockAPI, registry, store]);
  const findClosestDraggableId = useCallback((event) => tryGetClosestDraggableIdFromEvent(contextId, event), [contextId]);
  const findOptionsForDraggable = useCallback((id) => {
    const entry = registry.draggable.findById(id);
    return entry ? entry.options : null;
  }, [registry.draggable]);
  const tryReleaseLock = useCallback(function tryReleaseLock2() {
    if (!lockAPI.isClaimed()) {
      return;
    }
    lockAPI.tryAbandon();
    if (store.getState().phase !== "IDLE") {
      store.dispatch(flush());
    }
  }, [lockAPI, store]);
  const isLockClaimed = useCallback(() => lockAPI.isClaimed(), [lockAPI]);
  const api = useMemo(() => ({
    canGetLock,
    tryGetLock,
    findClosestDraggableId,
    findOptionsForDraggable,
    tryReleaseLock,
    isLockClaimed
  }), [canGetLock, tryGetLock, findClosestDraggableId, findOptionsForDraggable, tryReleaseLock, isLockClaimed]);
  for (let i = 0; i < useSensors.length; i++) {
    useSensors[i](api);
  }
}
const createResponders = (props) => ({
  onBeforeCapture: (t) => {
    const onBeforeCapureCallback = () => {
      if (props.onBeforeCapture) {
        props.onBeforeCapture(t);
      }
    };
    flushSync(onBeforeCapureCallback);
  },
  onBeforeDragStart: props.onBeforeDragStart,
  onDragStart: props.onDragStart,
  onDragEnd: props.onDragEnd,
  onDragUpdate: props.onDragUpdate
});
const createAutoScrollerOptions = (props) => ({
  ...defaultAutoScrollerOptions,
  ...props.autoScrollerOptions,
  durationDampening: {
    ...defaultAutoScrollerOptions.durationDampening,
    ...props.autoScrollerOptions
  }
});
function getStore(lazyRef) {
  !lazyRef.current ? invariant() : void 0;
  return lazyRef.current;
}
function App(props) {
  const {
    contextId,
    setCallbacks,
    sensors,
    nonce,
    dragHandleUsageInstructions: dragHandleUsageInstructions2
  } = props;
  const lazyStoreRef = useRef(null);
  const lastPropsRef = usePrevious(props);
  const getResponders = useCallback(() => {
    return createResponders(lastPropsRef.current);
  }, [lastPropsRef]);
  const getAutoScrollerOptions = useCallback(() => {
    return createAutoScrollerOptions(lastPropsRef.current);
  }, [lastPropsRef]);
  const announce = useAnnouncer(contextId);
  const dragHandleUsageInstructionsId = useHiddenTextElement({
    contextId,
    text: dragHandleUsageInstructions2
  });
  const styleMarshal = useStyleMarshal(contextId, nonce);
  const lazyDispatch = useCallback((action) => {
    getStore(lazyStoreRef).dispatch(action);
  }, []);
  const marshalCallbacks = useMemo(() => bindActionCreators$1({
    publishWhileDragging,
    updateDroppableScroll,
    updateDroppableIsEnabled,
    updateDroppableIsCombineEnabled,
    collectionStarting
  }, lazyDispatch), [lazyDispatch]);
  const registry = useRegistry();
  const dimensionMarshal = useMemo(() => {
    return createDimensionMarshal(registry, marshalCallbacks);
  }, [registry, marshalCallbacks]);
  const autoScroller = useMemo(() => createAutoScroller({
    scrollWindow,
    scrollDroppable: dimensionMarshal.scrollDroppable,
    getAutoScrollerOptions,
    ...bindActionCreators$1({
      move
    }, lazyDispatch)
  }), [dimensionMarshal.scrollDroppable, lazyDispatch, getAutoScrollerOptions]);
  const focusMarshal = useFocusMarshal(contextId);
  const store = useMemo(() => createStore({
    announce,
    autoScroller,
    dimensionMarshal,
    focusMarshal,
    getResponders,
    styleMarshal
  }), [announce, autoScroller, dimensionMarshal, focusMarshal, getResponders, styleMarshal]);
  lazyStoreRef.current = store;
  const tryResetStore = useCallback(() => {
    const current = getStore(lazyStoreRef);
    const state = current.getState();
    if (state.phase !== "IDLE") {
      current.dispatch(flush());
    }
  }, []);
  const isDragging2 = useCallback(() => {
    const state = getStore(lazyStoreRef).getState();
    if (state.phase === "DROP_ANIMATING") {
      return true;
    }
    if (state.phase === "IDLE") {
      return false;
    }
    return state.isDragging;
  }, []);
  const appCallbacks = useMemo(() => ({
    isDragging: isDragging2,
    tryAbort: tryResetStore
  }), [isDragging2, tryResetStore]);
  setCallbacks(appCallbacks);
  const getCanLift = useCallback((id) => canStartDrag(getStore(lazyStoreRef).getState(), id), []);
  const getIsMovementAllowed = useCallback(() => isMovementAllowed(getStore(lazyStoreRef).getState()), []);
  const appContext = useMemo(() => ({
    marshal: dimensionMarshal,
    focus: focusMarshal,
    contextId,
    canLift: getCanLift,
    isMovementAllowed: getIsMovementAllowed,
    dragHandleUsageInstructionsId,
    registry
  }), [contextId, dimensionMarshal, dragHandleUsageInstructionsId, focusMarshal, getCanLift, getIsMovementAllowed, registry]);
  useSensorMarshal({
    contextId,
    store,
    registry,
    customSensors: sensors || null,
    enableDefaultSensors: props.enableDefaultSensors !== false
  });
  useEffect(() => {
    return tryResetStore;
  }, [tryResetStore]);
  return React.createElement(AppContext.Provider, {
    value: appContext
  }, React.createElement(Provider_default, {
    context: StoreContext,
    store
  }, props.children));
}
function useUniqueContextId() {
  return React.useId();
}
function DragDropContext(props) {
  const contextId = useUniqueContextId();
  const dragHandleUsageInstructions2 = props.dragHandleUsageInstructions || preset.dragHandleUsageInstructions;
  return React.createElement(ErrorBoundary, null, (setCallbacks) => React.createElement(App, {
    nonce: props.nonce,
    contextId,
    setCallbacks,
    dragHandleUsageInstructions: dragHandleUsageInstructions2,
    enableDefaultSensors: props.enableDefaultSensors,
    sensors: props.sensors,
    onBeforeCapture: props.onBeforeCapture,
    onBeforeDragStart: props.onBeforeDragStart,
    onDragStart: props.onDragStart,
    onDragUpdate: props.onDragUpdate,
    onDragEnd: props.onDragEnd,
    autoScrollerOptions: props.autoScrollerOptions
  }, props.children));
}
const zIndexOptions = {
  dragging: 5e3,
  dropAnimating: 4500
};
const getDraggingTransition = (shouldAnimateDragMovement, dropping) => {
  if (dropping) {
    return transitions.drop(dropping.duration);
  }
  if (shouldAnimateDragMovement) {
    return transitions.snap;
  }
  return transitions.fluid;
};
const getDraggingOpacity = (isCombining, isDropAnimating) => {
  if (!isCombining) {
    return void 0;
  }
  return isDropAnimating ? combine.opacity.drop : combine.opacity.combining;
};
const getShouldDraggingAnimate = (dragging) => {
  if (dragging.forceShouldAnimate != null) {
    return dragging.forceShouldAnimate;
  }
  return dragging.mode === "SNAP";
};
function getDraggingStyle(dragging) {
  const dimension = dragging.dimension;
  const box = dimension.client;
  const {
    offset: offset2,
    combineWith,
    dropping
  } = dragging;
  const isCombining = Boolean(combineWith);
  const shouldAnimate = getShouldDraggingAnimate(dragging);
  const isDropAnimating = Boolean(dropping);
  const transform = isDropAnimating ? transforms.drop(offset2, isCombining) : transforms.moveTo(offset2);
  const style2 = {
    position: "fixed",
    top: box.marginBox.top,
    left: box.marginBox.left,
    boxSizing: "border-box",
    width: box.borderBox.width,
    height: box.borderBox.height,
    transition: getDraggingTransition(shouldAnimate, dropping),
    transform,
    opacity: getDraggingOpacity(isCombining, isDropAnimating),
    zIndex: isDropAnimating ? zIndexOptions.dropAnimating : zIndexOptions.dragging,
    pointerEvents: "none"
  };
  return style2;
}
function getSecondaryStyle(secondary) {
  return {
    transform: transforms.moveTo(secondary.offset),
    transition: secondary.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function getStyle$1(mapped) {
  return mapped.type === "DRAGGING" ? getDraggingStyle(mapped) : getSecondaryStyle(mapped);
}
function getDimension$1(descriptor, el, windowScroll = origin) {
  const computedStyles = window.getComputedStyle(el);
  const borderBox = el.getBoundingClientRect();
  const client = calculateBox(borderBox, computedStyles);
  const page = withScroll(client, windowScroll);
  const placeholder2 = {
    client,
    tagName: el.tagName.toLowerCase(),
    display: computedStyles.display
  };
  const displaceBy = {
    x: client.marginBox.width,
    y: client.marginBox.height
  };
  const dimension = {
    descriptor,
    placeholder: placeholder2,
    displaceBy,
    client,
    page
  };
  return dimension;
}
function useDraggablePublisher(args) {
  const uniqueId = useUniqueId("draggable");
  const {
    descriptor,
    registry,
    getDraggableRef,
    canDragInteractiveElements,
    shouldRespectForcePress,
    isEnabled
  } = args;
  const options = useMemo(() => ({
    canDragInteractiveElements,
    shouldRespectForcePress,
    isEnabled
  }), [canDragInteractiveElements, isEnabled, shouldRespectForcePress]);
  const getDimension2 = useCallback((windowScroll) => {
    const el = getDraggableRef();
    !el ? invariant() : void 0;
    return getDimension$1(descriptor, el, windowScroll);
  }, [descriptor, getDraggableRef]);
  const entry = useMemo(() => ({
    uniqueId,
    descriptor,
    options,
    getDimension: getDimension2
  }), [descriptor, getDimension2, options, uniqueId]);
  const publishedRef = useRef(entry);
  const isFirstPublishRef = useRef(true);
  useIsomorphicLayoutEffect(() => {
    registry.draggable.register(publishedRef.current);
    return () => registry.draggable.unregister(publishedRef.current);
  }, [registry.draggable]);
  useIsomorphicLayoutEffect(() => {
    if (isFirstPublishRef.current) {
      isFirstPublishRef.current = false;
      return;
    }
    const last = publishedRef.current;
    publishedRef.current = entry;
    registry.draggable.update(entry, last);
  }, [entry, registry.draggable]);
}
var DroppableContext = React.createContext(null);
function useRequiredContext(Context) {
  const result = useContext(Context);
  !result ? invariant() : void 0;
  return result;
}
function preventHtml5Dnd(event) {
  event.preventDefault();
}
const Draggable = (props) => {
  const ref2 = useRef(null);
  const setRef = useCallback((el = null) => {
    ref2.current = el;
  }, []);
  const getRef = useCallback(() => ref2.current, []);
  const {
    contextId,
    dragHandleUsageInstructionsId,
    registry
  } = useRequiredContext(AppContext);
  const {
    type,
    droppableId
  } = useRequiredContext(DroppableContext);
  const descriptor = useMemo(() => ({
    id: props.draggableId,
    index: props.index,
    type,
    droppableId
  }), [props.draggableId, props.index, type, droppableId]);
  const {
    children,
    draggableId,
    isEnabled,
    shouldRespectForcePress,
    canDragInteractiveElements,
    isClone,
    mapped,
    dropAnimationFinished: dropAnimationFinishedAction
  } = props;
  if (!isClone) {
    const forPublisher = useMemo(() => ({
      descriptor,
      registry,
      getDraggableRef: getRef,
      canDragInteractiveElements,
      shouldRespectForcePress,
      isEnabled
    }), [descriptor, registry, getRef, canDragInteractiveElements, shouldRespectForcePress, isEnabled]);
    useDraggablePublisher(forPublisher);
  }
  const dragHandleProps = useMemo(() => isEnabled ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": dragHandleUsageInstructionsId,
    "data-rfd-drag-handle-draggable-id": draggableId,
    "data-rfd-drag-handle-context-id": contextId,
    draggable: false,
    onDragStart: preventHtml5Dnd
  } : null, [contextId, dragHandleUsageInstructionsId, draggableId, isEnabled]);
  const onMoveEnd = useCallback((event) => {
    if (mapped.type !== "DRAGGING") {
      return;
    }
    if (!mapped.dropping) {
      return;
    }
    if (event.propertyName !== "transform") {
      return;
    }
    flushSync(dropAnimationFinishedAction);
  }, [dropAnimationFinishedAction, mapped]);
  const provided = useMemo(() => {
    const style2 = getStyle$1(mapped);
    const onTransitionEnd = mapped.type === "DRAGGING" && mapped.dropping ? onMoveEnd : void 0;
    const result = {
      innerRef: setRef,
      draggableProps: {
        "data-rfd-draggable-context-id": contextId,
        "data-rfd-draggable-id": draggableId,
        style: style2,
        onTransitionEnd
      },
      dragHandleProps
    };
    return result;
  }, [contextId, dragHandleProps, draggableId, mapped, onMoveEnd, setRef]);
  const rubric = useMemo(() => ({
    draggableId: descriptor.id,
    type: descriptor.type,
    source: {
      index: descriptor.index,
      droppableId: descriptor.droppableId
    }
  }), [descriptor.droppableId, descriptor.id, descriptor.index, descriptor.type]);
  return React.createElement(React.Fragment, null, children(provided, mapped.snapshot, rubric));
};
var isStrictEqual = (a, b) => a === b;
var whatIsDraggedOverFromResult = (result) => {
  const {
    combine: combine2,
    destination
  } = result;
  if (destination) {
    return destination.droppableId;
  }
  if (combine2) {
    return combine2.droppableId;
  }
  return null;
};
const getCombineWithFromResult = (result) => {
  return result.combine ? result.combine.draggableId : null;
};
const getCombineWithFromImpact = (impact) => {
  return impact.at && impact.at.type === "COMBINE" ? impact.at.combine.draggableId : null;
};
function getDraggableSelector() {
  const memoizedOffset = memoizeOne((x, y) => ({
    x,
    y
  }));
  const getMemoizedSnapshot = memoizeOne((mode, isClone, draggingOver = null, combineWith = null, dropping = null) => ({
    isDragging: true,
    isClone,
    isDropAnimating: Boolean(dropping),
    dropAnimation: dropping,
    mode,
    draggingOver,
    combineWith,
    combineTargetFor: null
  }));
  const getMemoizedProps = memoizeOne((offset2, mode, dimension, isClone, draggingOver = null, combineWith = null, forceShouldAnimate = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver,
      combineWith,
      mode,
      offset: offset2,
      dimension,
      forceShouldAnimate,
      snapshot: getMemoizedSnapshot(mode, isClone, draggingOver, combineWith, null)
    }
  }));
  const selector = (state, ownProps) => {
    if (isDragging(state)) {
      if (state.critical.draggable.id !== ownProps.draggableId) {
        return null;
      }
      const offset2 = state.current.client.offset;
      const dimension = state.dimensions.draggables[ownProps.draggableId];
      const draggingOver = whatIsDraggedOver(state.impact);
      const combineWith = getCombineWithFromImpact(state.impact);
      const forceShouldAnimate = state.forceShouldAnimate;
      return getMemoizedProps(memoizedOffset(offset2.x, offset2.y), state.movementMode, dimension, ownProps.isClone, draggingOver, combineWith, forceShouldAnimate);
    }
    if (state.phase === "DROP_ANIMATING") {
      const completed = state.completed;
      if (completed.result.draggableId !== ownProps.draggableId) {
        return null;
      }
      const isClone = ownProps.isClone;
      const dimension = state.dimensions.draggables[ownProps.draggableId];
      const result = completed.result;
      const mode = result.mode;
      const draggingOver = whatIsDraggedOverFromResult(result);
      const combineWith = getCombineWithFromResult(result);
      const duration = state.dropDuration;
      const dropping = {
        duration,
        curve: curves.drop,
        moveTo: state.newHomeClientOffset,
        opacity: combineWith ? combine.opacity.drop : null,
        scale: combineWith ? combine.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: state.newHomeClientOffset,
          dimension,
          dropping,
          draggingOver,
          combineWith,
          mode,
          forceShouldAnimate: null,
          snapshot: getMemoizedSnapshot(mode, isClone, draggingOver, combineWith, dropping)
        }
      };
    }
    return null;
  };
  return selector;
}
function getSecondarySnapshot(combineTargetFor = null) {
  return {
    isDragging: false,
    isDropAnimating: false,
    isClone: false,
    dropAnimation: null,
    mode: null,
    draggingOver: null,
    combineTargetFor,
    combineWith: null
  };
}
const atRest = {
  mapped: {
    type: "SECONDARY",
    offset: origin,
    combineTargetFor: null,
    shouldAnimateDisplacement: true,
    snapshot: getSecondarySnapshot(null)
  }
};
function getSecondarySelector() {
  const memoizedOffset = memoizeOne((x, y) => ({
    x,
    y
  }));
  const getMemoizedSnapshot = memoizeOne(getSecondarySnapshot);
  const getMemoizedProps = memoizeOne((offset2, combineTargetFor = null, shouldAnimateDisplacement) => ({
    mapped: {
      type: "SECONDARY",
      offset: offset2,
      combineTargetFor,
      shouldAnimateDisplacement,
      snapshot: getMemoizedSnapshot(combineTargetFor)
    }
  }));
  const getFallback = (combineTargetFor) => {
    return combineTargetFor ? getMemoizedProps(origin, combineTargetFor, true) : null;
  };
  const getProps = (ownId, draggingId, impact, afterCritical) => {
    const visualDisplacement = impact.displaced.visible[ownId];
    const isAfterCriticalInVirtualList = Boolean(afterCritical.inVirtualList && afterCritical.effected[ownId]);
    const combine2 = tryGetCombine(impact);
    const combineTargetFor = combine2 && combine2.draggableId === ownId ? draggingId : null;
    if (!visualDisplacement) {
      if (!isAfterCriticalInVirtualList) {
        return getFallback(combineTargetFor);
      }
      if (impact.displaced.invisible[ownId]) {
        return null;
      }
      const change = negate(afterCritical.displacedBy.point);
      const offset3 = memoizedOffset(change.x, change.y);
      return getMemoizedProps(offset3, combineTargetFor, true);
    }
    if (isAfterCriticalInVirtualList) {
      return getFallback(combineTargetFor);
    }
    const displaceBy = impact.displacedBy.point;
    const offset2 = memoizedOffset(displaceBy.x, displaceBy.y);
    return getMemoizedProps(offset2, combineTargetFor, visualDisplacement.shouldAnimate);
  };
  const selector = (state, ownProps) => {
    if (isDragging(state)) {
      if (state.critical.draggable.id === ownProps.draggableId) {
        return null;
      }
      return getProps(ownProps.draggableId, state.critical.draggable.id, state.impact, state.afterCritical);
    }
    if (state.phase === "DROP_ANIMATING") {
      const completed = state.completed;
      if (completed.result.draggableId === ownProps.draggableId) {
        return null;
      }
      return getProps(ownProps.draggableId, completed.result.draggableId, completed.impact, completed.afterCritical);
    }
    return null;
  };
  return selector;
}
const makeMapStateToProps$1 = () => {
  const draggingSelector = getDraggableSelector();
  const secondarySelector = getSecondarySelector();
  const selector = (state, ownProps) => draggingSelector(state, ownProps) || secondarySelector(state, ownProps) || atRest;
  return selector;
};
const mapDispatchToProps$1 = {
  dropAnimationFinished
};
const ConnectedDraggable = connect_default(makeMapStateToProps$1, mapDispatchToProps$1, null, {
  context: StoreContext,
  areStatePropsEqual: isStrictEqual
})(Draggable);
function PrivateDraggable(props) {
  const droppableContext = useRequiredContext(DroppableContext);
  const isUsingCloneFor = droppableContext.isUsingCloneFor;
  if (isUsingCloneFor === props.draggableId && !props.isClone) {
    return null;
  }
  return React.createElement(ConnectedDraggable, props);
}
function PublicDraggable(props) {
  const isEnabled = typeof props.isDragDisabled === "boolean" ? !props.isDragDisabled : true;
  const canDragInteractiveElements = Boolean(props.disableInteractiveElementBlocking);
  const shouldRespectForcePress = Boolean(props.shouldRespectForcePress);
  return React.createElement(PrivateDraggable, _extends({}, props, {
    isClone: false,
    isEnabled,
    canDragInteractiveElements,
    shouldRespectForcePress
  }));
}
const isEqual = (base) => (value) => base === value;
const isScroll = isEqual("scroll");
const isAuto = isEqual("auto");
const isEither = (overflow, fn) => fn(overflow.overflowX) || fn(overflow.overflowY);
const isElementScrollable = (el) => {
  const style2 = window.getComputedStyle(el);
  const overflow = {
    overflowX: style2.overflowX,
    overflowY: style2.overflowY
  };
  return isEither(overflow, isScroll) || isEither(overflow, isAuto);
};
const isBodyScrollable = () => {
  {
    return false;
  }
};
const getClosestScrollable = (el) => {
  if (el == null) {
    return null;
  }
  if (el === document.body) {
    return isBodyScrollable() ? el : null;
  }
  if (el === document.documentElement) {
    return null;
  }
  if (!isElementScrollable(el)) {
    return getClosestScrollable(el.parentElement);
  }
  return el;
};
var getScroll = (el) => ({
  x: el.scrollLeft,
  y: el.scrollTop
});
const getIsFixed = (el) => {
  if (!el) {
    return false;
  }
  const style2 = window.getComputedStyle(el);
  if (style2.position === "fixed") {
    return true;
  }
  return getIsFixed(el.parentElement);
};
var getEnv = (start2) => {
  const closestScrollable = getClosestScrollable(start2);
  const isFixedOnPage = getIsFixed(start2);
  return {
    closestScrollable,
    isFixedOnPage
  };
};
var getDroppableDimension = ({
  descriptor,
  isEnabled,
  isCombineEnabled,
  isFixedOnPage,
  direction,
  client,
  page,
  closest: closest2
}) => {
  const frame = (() => {
    if (!closest2) {
      return null;
    }
    const {
      scrollSize,
      client: frameClient
    } = closest2;
    const maxScroll = getMaxScroll({
      scrollHeight: scrollSize.scrollHeight,
      scrollWidth: scrollSize.scrollWidth,
      height: frameClient.paddingBox.height,
      width: frameClient.paddingBox.width
    });
    return {
      pageMarginBox: closest2.page.marginBox,
      frameClient,
      scrollSize,
      shouldClipSubject: closest2.shouldClipSubject,
      scroll: {
        initial: closest2.scroll,
        current: closest2.scroll,
        max: maxScroll,
        diff: {
          value: origin,
          displacement: origin
        }
      }
    };
  })();
  const axis = direction === "vertical" ? vertical : horizontal;
  const subject = getSubject({
    page,
    withPlaceholder: null,
    axis,
    frame
  });
  const dimension = {
    descriptor,
    isCombineEnabled,
    isFixedOnPage,
    axis,
    isEnabled,
    client,
    page,
    frame,
    subject
  };
  return dimension;
};
const getClient = (targetRef, closestScrollable) => {
  const base = getBox(targetRef);
  if (!closestScrollable) {
    return base;
  }
  if (targetRef !== closestScrollable) {
    return base;
  }
  const top = base.paddingBox.top - closestScrollable.scrollTop;
  const left = base.paddingBox.left - closestScrollable.scrollLeft;
  const bottom = top + closestScrollable.scrollHeight;
  const right = left + closestScrollable.scrollWidth;
  const paddingBox = {
    top,
    right,
    bottom,
    left
  };
  const borderBox = expand(paddingBox, base.border);
  const client = createBox({
    borderBox,
    margin: base.margin,
    border: base.border,
    padding: base.padding
  });
  return client;
};
var getDimension = ({
  ref: ref2,
  descriptor,
  env,
  windowScroll,
  direction,
  isDropDisabled,
  isCombineEnabled,
  shouldClipSubject
}) => {
  const closestScrollable = env.closestScrollable;
  const client = getClient(ref2, closestScrollable);
  const page = withScroll(client, windowScroll);
  const closest2 = (() => {
    if (!closestScrollable) {
      return null;
    }
    const frameClient = getBox(closestScrollable);
    const scrollSize = {
      scrollHeight: closestScrollable.scrollHeight,
      scrollWidth: closestScrollable.scrollWidth
    };
    return {
      client: frameClient,
      page: withScroll(frameClient, windowScroll),
      scroll: getScroll(closestScrollable),
      scrollSize,
      shouldClipSubject
    };
  })();
  const dimension = getDroppableDimension({
    descriptor,
    isEnabled: !isDropDisabled,
    isCombineEnabled,
    isFixedOnPage: env.isFixedOnPage,
    direction,
    client,
    page,
    closest: closest2
  });
  return dimension;
};
const immediate = {
  passive: false
};
const delayed = {
  passive: true
};
var getListenerOptions = (options) => options.shouldPublishImmediately ? immediate : delayed;
const getClosestScrollableFromDrag = (dragging) => dragging && dragging.env.closestScrollable || null;
function useDroppablePublisher(args) {
  const whileDraggingRef = useRef(null);
  const appContext = useRequiredContext(AppContext);
  const uniqueId = useUniqueId("droppable");
  const {
    registry,
    marshal
  } = appContext;
  const previousRef = usePrevious(args);
  const descriptor = useMemo(() => ({
    id: args.droppableId,
    type: args.type,
    mode: args.mode
  }), [args.droppableId, args.mode, args.type]);
  const publishedDescriptorRef = useRef(descriptor);
  const memoizedUpdateScroll = useMemo(() => memoizeOne((x, y) => {
    !whileDraggingRef.current ? invariant() : void 0;
    const scroll3 = {
      x,
      y
    };
    marshal.updateDroppableScroll(descriptor.id, scroll3);
  }), [descriptor.id, marshal]);
  const getClosestScroll = useCallback(() => {
    const dragging = whileDraggingRef.current;
    if (!dragging || !dragging.env.closestScrollable) {
      return origin;
    }
    return getScroll(dragging.env.closestScrollable);
  }, []);
  const updateScroll = useCallback(() => {
    const scroll3 = getClosestScroll();
    memoizedUpdateScroll(scroll3.x, scroll3.y);
  }, [getClosestScroll, memoizedUpdateScroll]);
  const scheduleScrollUpdate = useMemo(() => rafSchd(updateScroll), [updateScroll]);
  const onClosestScroll = useCallback(() => {
    const dragging = whileDraggingRef.current;
    const closest2 = getClosestScrollableFromDrag(dragging);
    !(dragging && closest2) ? invariant() : void 0;
    const options = dragging.scrollOptions;
    if (options.shouldPublishImmediately) {
      updateScroll();
      return;
    }
    scheduleScrollUpdate();
  }, [scheduleScrollUpdate, updateScroll]);
  const getDimensionAndWatchScroll = useCallback((windowScroll, options) => {
    !!whileDraggingRef.current ? invariant() : void 0;
    const previous = previousRef.current;
    const ref2 = previous.getDroppableRef();
    !ref2 ? invariant() : void 0;
    const env = getEnv(ref2);
    const dragging = {
      ref: ref2,
      descriptor,
      env,
      scrollOptions: options
    };
    whileDraggingRef.current = dragging;
    const dimension = getDimension({
      ref: ref2,
      descriptor,
      env,
      windowScroll,
      direction: previous.direction,
      isDropDisabled: previous.isDropDisabled,
      isCombineEnabled: previous.isCombineEnabled,
      shouldClipSubject: !previous.ignoreContainerClipping
    });
    const scrollable = env.closestScrollable;
    if (scrollable) {
      scrollable.setAttribute(scrollContainer.contextId, appContext.contextId);
      scrollable.addEventListener("scroll", onClosestScroll, getListenerOptions(dragging.scrollOptions));
    }
    return dimension;
  }, [appContext.contextId, descriptor, onClosestScroll, previousRef]);
  const getScrollWhileDragging = useCallback(() => {
    const dragging = whileDraggingRef.current;
    const closest2 = getClosestScrollableFromDrag(dragging);
    !(dragging && closest2) ? invariant() : void 0;
    return getScroll(closest2);
  }, []);
  const dragStopped = useCallback(() => {
    const dragging = whileDraggingRef.current;
    !dragging ? invariant() : void 0;
    const closest2 = getClosestScrollableFromDrag(dragging);
    whileDraggingRef.current = null;
    if (!closest2) {
      return;
    }
    scheduleScrollUpdate.cancel();
    closest2.removeAttribute(scrollContainer.contextId);
    closest2.removeEventListener("scroll", onClosestScroll, getListenerOptions(dragging.scrollOptions));
  }, [onClosestScroll, scheduleScrollUpdate]);
  const scroll2 = useCallback((change) => {
    const dragging = whileDraggingRef.current;
    !dragging ? invariant() : void 0;
    const closest2 = getClosestScrollableFromDrag(dragging);
    !closest2 ? invariant() : void 0;
    closest2.scrollTop += change.y;
    closest2.scrollLeft += change.x;
  }, []);
  const callbacks = useMemo(() => {
    return {
      getDimensionAndWatchScroll,
      getScrollWhileDragging,
      dragStopped,
      scroll: scroll2
    };
  }, [dragStopped, getDimensionAndWatchScroll, getScrollWhileDragging, scroll2]);
  const entry = useMemo(() => ({
    uniqueId,
    descriptor,
    callbacks
  }), [callbacks, descriptor, uniqueId]);
  useIsomorphicLayoutEffect(() => {
    publishedDescriptorRef.current = entry.descriptor;
    registry.droppable.register(entry);
    return () => {
      if (whileDraggingRef.current) {
        dragStopped();
      }
      registry.droppable.unregister(entry);
    };
  }, [callbacks, descriptor, dragStopped, entry, marshal, registry.droppable]);
  useIsomorphicLayoutEffect(() => {
    if (!whileDraggingRef.current) {
      return;
    }
    marshal.updateDroppableIsEnabled(publishedDescriptorRef.current.id, !args.isDropDisabled);
  }, [args.isDropDisabled, marshal]);
  useIsomorphicLayoutEffect(() => {
    if (!whileDraggingRef.current) {
      return;
    }
    marshal.updateDroppableIsCombineEnabled(publishedDescriptorRef.current.id, args.isCombineEnabled);
  }, [args.isCombineEnabled, marshal]);
}
function noop() {
}
const empty = {
  width: 0,
  height: 0,
  margin: noSpacing
};
const getSize = ({
  isAnimatingOpenOnMount,
  placeholder: placeholder2,
  animate
}) => {
  if (isAnimatingOpenOnMount) {
    return empty;
  }
  if (animate === "close") {
    return empty;
  }
  return {
    height: placeholder2.client.borderBox.height,
    width: placeholder2.client.borderBox.width,
    margin: placeholder2.client.margin
  };
};
const getStyle = ({
  isAnimatingOpenOnMount,
  placeholder: placeholder2,
  animate
}) => {
  const size = getSize({
    isAnimatingOpenOnMount,
    placeholder: placeholder2,
    animate
  });
  return {
    display: placeholder2.display,
    boxSizing: "border-box",
    width: size.width,
    height: size.height,
    marginTop: size.margin.top,
    marginRight: size.margin.right,
    marginBottom: size.margin.bottom,
    marginLeft: size.margin.left,
    flexShrink: "0",
    flexGrow: "0",
    pointerEvents: "none",
    transition: animate !== "none" ? transitions.placeholder : null
  };
};
const Placeholder = (props) => {
  const animateOpenTimerRef = useRef(null);
  const tryClearAnimateOpenTimer = useCallback(() => {
    if (!animateOpenTimerRef.current) {
      return;
    }
    clearTimeout(animateOpenTimerRef.current);
    animateOpenTimerRef.current = null;
  }, []);
  const {
    animate,
    onTransitionEnd,
    onClose,
    contextId
  } = props;
  const [isAnimatingOpenOnMount, setIsAnimatingOpenOnMount] = useState(props.animate === "open");
  useEffect(() => {
    if (!isAnimatingOpenOnMount) {
      return noop;
    }
    if (animate !== "open") {
      tryClearAnimateOpenTimer();
      setIsAnimatingOpenOnMount(false);
      return noop;
    }
    if (animateOpenTimerRef.current) {
      return noop;
    }
    animateOpenTimerRef.current = setTimeout(() => {
      animateOpenTimerRef.current = null;
      setIsAnimatingOpenOnMount(false);
    });
    return tryClearAnimateOpenTimer;
  }, [animate, isAnimatingOpenOnMount, tryClearAnimateOpenTimer]);
  const onSizeChangeEnd = useCallback((event) => {
    if (event.propertyName !== "height") {
      return;
    }
    onTransitionEnd();
    if (animate === "close") {
      onClose();
    }
  }, [animate, onClose, onTransitionEnd]);
  const style2 = getStyle({
    isAnimatingOpenOnMount,
    animate: props.animate,
    placeholder: props.placeholder
  });
  return React.createElement(props.placeholder.tagName, {
    style: style2,
    "data-rfd-placeholder-context-id": contextId,
    onTransitionEnd: onSizeChangeEnd,
    ref: props.innerRef
  });
};
var Placeholder$1 = React.memo(Placeholder);
class AnimateInOut extends React.PureComponent {
  constructor(...args) {
    super(...args);
    this.state = {
      isVisible: Boolean(this.props.on),
      data: this.props.on,
      animate: this.props.shouldAnimate && this.props.on ? "open" : "none"
    };
    this.onClose = () => {
      if (this.state.animate !== "close") {
        return;
      }
      this.setState({
        isVisible: false
      });
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (!props.shouldAnimate) {
      return {
        isVisible: Boolean(props.on),
        data: props.on,
        animate: "none"
      };
    }
    if (props.on) {
      return {
        isVisible: true,
        data: props.on,
        animate: "open"
      };
    }
    if (state.isVisible) {
      return {
        isVisible: true,
        data: state.data,
        animate: "close"
      };
    }
    return {
      isVisible: false,
      animate: "close",
      data: null
    };
  }
  render() {
    if (!this.state.isVisible) {
      return null;
    }
    const provided = {
      onClose: this.onClose,
      data: this.state.data,
      animate: this.state.animate
    };
    return this.props.children(provided);
  }
}
const Droppable = (props) => {
  const appContext = useContext(AppContext);
  !appContext ? invariant() : void 0;
  const {
    contextId,
    isMovementAllowed: isMovementAllowed2
  } = appContext;
  const droppableRef = useRef(null);
  const placeholderRef = useRef(null);
  const {
    children,
    droppableId,
    type,
    mode,
    direction,
    ignoreContainerClipping,
    isDropDisabled,
    isCombineEnabled,
    snapshot,
    useClone,
    updateViewportMaxScroll: updateViewportMaxScroll2,
    getContainerForClone
  } = props;
  const getDroppableRef = useCallback(() => droppableRef.current, []);
  const setDroppableRef = useCallback((value = null) => {
    droppableRef.current = value;
  }, []);
  useCallback(() => placeholderRef.current, []);
  const setPlaceholderRef = useCallback((value = null) => {
    placeholderRef.current = value;
  }, []);
  const onPlaceholderTransitionEnd = useCallback(() => {
    if (isMovementAllowed2()) {
      updateViewportMaxScroll2({
        maxScroll: getMaxWindowScroll()
      });
    }
  }, [isMovementAllowed2, updateViewportMaxScroll2]);
  useDroppablePublisher({
    droppableId,
    type,
    mode,
    direction,
    isDropDisabled,
    isCombineEnabled,
    ignoreContainerClipping,
    getDroppableRef
  });
  const placeholder2 = useMemo(() => React.createElement(AnimateInOut, {
    on: props.placeholder,
    shouldAnimate: props.shouldAnimatePlaceholder
  }, ({
    onClose,
    data,
    animate
  }) => React.createElement(Placeholder$1, {
    placeholder: data,
    onClose,
    innerRef: setPlaceholderRef,
    animate,
    contextId,
    onTransitionEnd: onPlaceholderTransitionEnd
  })), [contextId, onPlaceholderTransitionEnd, props.placeholder, props.shouldAnimatePlaceholder, setPlaceholderRef]);
  const provided = useMemo(() => ({
    innerRef: setDroppableRef,
    placeholder: placeholder2,
    droppableProps: {
      "data-rfd-droppable-id": droppableId,
      "data-rfd-droppable-context-id": contextId
    }
  }), [contextId, droppableId, placeholder2, setDroppableRef]);
  const isUsingCloneFor = useClone ? useClone.dragging.draggableId : null;
  const droppableContext = useMemo(() => ({
    droppableId,
    type,
    isUsingCloneFor
  }), [droppableId, isUsingCloneFor, type]);
  function getClone() {
    if (!useClone) {
      return null;
    }
    const {
      dragging,
      render
    } = useClone;
    const node = React.createElement(PrivateDraggable, {
      draggableId: dragging.draggableId,
      index: dragging.source.index,
      isClone: true,
      isEnabled: true,
      shouldRespectForcePress: false,
      canDragInteractiveElements: true
    }, (draggableProvided, draggableSnapshot) => render(draggableProvided, draggableSnapshot, dragging));
    return ReactDOM.createPortal(node, getContainerForClone());
  }
  return React.createElement(DroppableContext.Provider, {
    value: droppableContext
  }, children(provided, snapshot), getClone());
};
function getBody() {
  !document.body ? invariant() : void 0;
  return document.body;
}
const defaultProps = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: false,
  isCombineEnabled: false,
  ignoreContainerClipping: false,
  renderClone: null,
  getContainerForClone: getBody
};
const attachDefaultPropsToOwnProps = (ownProps) => {
  let mergedProps = {
    ...ownProps
  };
  let defaultPropKey;
  for (defaultPropKey in defaultProps) {
    if (ownProps[defaultPropKey] === void 0) {
      mergedProps = {
        ...mergedProps,
        [defaultPropKey]: defaultProps[defaultPropKey]
      };
    }
  }
  return mergedProps;
};
const isMatchingType = (type, critical) => type === critical.droppable.type;
const getDraggable = (critical, dimensions) => dimensions.draggables[critical.draggable.id];
const makeMapStateToProps = () => {
  const idleWithAnimation = {
    placeholder: null,
    shouldAnimatePlaceholder: true,
    snapshot: {
      isDraggingOver: false,
      draggingOverWith: null,
      draggingFromThisWith: null,
      isUsingPlaceholder: false
    },
    useClone: null
  };
  const idleWithoutAnimation = {
    ...idleWithAnimation,
    shouldAnimatePlaceholder: false
  };
  const getDraggableRubric = memoizeOne((descriptor) => ({
    draggableId: descriptor.id,
    type: descriptor.type,
    source: {
      index: descriptor.index,
      droppableId: descriptor.droppableId
    }
  }));
  const getMapProps = memoizeOne((id, isEnabled, isDraggingOverForConsumer, isDraggingOverForImpact, dragging, renderClone) => {
    const draggableId = dragging.descriptor.id;
    const isHome = dragging.descriptor.droppableId === id;
    if (isHome) {
      const useClone = renderClone ? {
        render: renderClone,
        dragging: getDraggableRubric(dragging.descriptor)
      } : null;
      const snapshot2 = {
        isDraggingOver: isDraggingOverForConsumer,
        draggingOverWith: isDraggingOverForConsumer ? draggableId : null,
        draggingFromThisWith: draggableId,
        isUsingPlaceholder: true
      };
      return {
        placeholder: dragging.placeholder,
        shouldAnimatePlaceholder: false,
        snapshot: snapshot2,
        useClone
      };
    }
    if (!isEnabled) {
      return idleWithoutAnimation;
    }
    if (!isDraggingOverForImpact) {
      return idleWithAnimation;
    }
    const snapshot = {
      isDraggingOver: isDraggingOverForConsumer,
      draggingOverWith: draggableId,
      draggingFromThisWith: null,
      isUsingPlaceholder: true
    };
    return {
      placeholder: dragging.placeholder,
      shouldAnimatePlaceholder: true,
      snapshot,
      useClone: null
    };
  });
  const selector = (state, ownProps) => {
    const ownPropsWithDefaultProps = attachDefaultPropsToOwnProps(ownProps);
    const id = ownPropsWithDefaultProps.droppableId;
    const type = ownPropsWithDefaultProps.type;
    const isEnabled = !ownPropsWithDefaultProps.isDropDisabled;
    const renderClone = ownPropsWithDefaultProps.renderClone;
    if (isDragging(state)) {
      const critical = state.critical;
      if (!isMatchingType(type, critical)) {
        return idleWithoutAnimation;
      }
      const dragging = getDraggable(critical, state.dimensions);
      const isDraggingOver = whatIsDraggedOver(state.impact) === id;
      return getMapProps(id, isEnabled, isDraggingOver, isDraggingOver, dragging, renderClone);
    }
    if (state.phase === "DROP_ANIMATING") {
      const completed = state.completed;
      if (!isMatchingType(type, completed.critical)) {
        return idleWithoutAnimation;
      }
      const dragging = getDraggable(completed.critical, state.dimensions);
      return getMapProps(id, isEnabled, whatIsDraggedOverFromResult(completed.result) === id, whatIsDraggedOver(completed.impact) === id, dragging, renderClone);
    }
    if (state.phase === "IDLE" && state.completed && !state.shouldFlush) {
      const completed = state.completed;
      if (!isMatchingType(type, completed.critical)) {
        return idleWithoutAnimation;
      }
      const wasOver = whatIsDraggedOver(completed.impact) === id;
      const wasCombining = Boolean(completed.impact.at && completed.impact.at.type === "COMBINE");
      const isHome = completed.critical.droppable.id === id;
      if (wasOver) {
        return wasCombining ? idleWithAnimation : idleWithoutAnimation;
      }
      if (isHome) {
        return idleWithAnimation;
      }
      return idleWithoutAnimation;
    }
    return idleWithoutAnimation;
  };
  return selector;
};
const mapDispatchToProps = {
  updateViewportMaxScroll
};
const ConnectedDroppable = connect_default(makeMapStateToProps, mapDispatchToProps, (stateProps, dispatchProps, ownProps) => {
  return {
    ...attachDefaultPropsToOwnProps(ownProps),
    ...stateProps,
    ...dispatchProps
  };
}, {
  context: StoreContext,
  areStatePropsEqual: isStrictEqual
})(Droppable);

const {useState:_o,useRef:$o,useEffect:Hi} = await importShared('react');
function o(...t){return twMerge(clsx(t))}function Fi({attachments:t,onRemove:e}){return t.length===0?null:jsxRuntimeExports.jsx("div",{className:"flex flex-wrap gap-[var(--inkblot-spacing-2)] px-[var(--inkblot-spacing-2)] pb-[var(--inkblot-spacing-2)]",children:t.map((r,a)=>jsxRuntimeExports.jsxs("div",{className:"group relative flex items-center gap-[var(--inkblot-spacing-2)] rounded-[var(--inkblot-radius-md)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-tertiary)] px-[var(--inkblot-spacing-2)] py-[var(--inkblot-spacing-1)]",children:[r.kind==="image"&&r.previewUrl?jsxRuntimeExports.jsx("img",{src:r.previewUrl,alt:r.file.name,className:"h-8 w-8 rounded-[var(--inkblot-radius-sm)] object-cover"}):jsxRuntimeExports.jsx(FileText,{size:16,className:"shrink-0 text-[var(--inkblot-semantic-color-text-tertiary)]","aria-hidden":true}),jsxRuntimeExports.jsx("span",{className:"max-w-[8rem] truncate text-xs text-[var(--inkblot-semantic-color-text-secondary)]",children:r.file.name}),jsxRuntimeExports.jsx("button",{type:"button",onClick:()=>e(a),className:"flex h-4 w-4 items-center justify-center rounded-[var(--inkblot-radius-full)] text-[var(--inkblot-semantic-color-text-tertiary)] transition-colors duration-[var(--inkblot-duration-fast)] hover:bg-[var(--inkblot-semantic-color-background-secondary)] hover:text-[var(--inkblot-semantic-color-text-primary)]","aria-label":`Remove ${r.file.name}`,children:jsxRuntimeExports.jsx(X,{size:10})})]},`${r.file.name}-${a}`))})}function ve({messages:t=[],onSend:e,isProcessing:r=false,placeholder:a="Ask Citron Intelligence...",emptyStateMessage:i="Ask anything \u2014 deals, contacts, forecasts...",className:n}){let[s,l]=_o(""),[c,d]=_o([]),m=$o(null),p=$o(null);Hi(()=>{m.current&&(m.current.scrollTop=m.current.scrollHeight);},[t]);let b=()=>{let g=s.trim();!g&&c.length===0||r||(e?.({text:g,files:c.map(h=>h.file)}),l(""),d(h=>(h.forEach(S=>{S.previewUrl&&URL.revokeObjectURL(S.previewUrl);}),[])));},v=g=>{g.key==="Enter"&&!g.shiftKey&&(g.preventDefault(),b());},f=g=>{let h=g.target.files;if(!h||h.length===0)return;let S=Array.from(h).map(N=>{let y=N.type.startsWith("image/");return {file:N,kind:y?"image":"file",previewUrl:y?URL.createObjectURL(N):void 0}});d(N=>[...N,...S]),g.target.value="";},w=g=>{d(h=>{let S=h[g];return S?.previewUrl&&URL.revokeObjectURL(S.previewUrl),h.filter((N,y)=>y!==g)});};return jsxRuntimeExports.jsxs("div",{className:o("flex h-full flex-col bg-[var(--inkblot-semantic-color-background-primary)]",n),children:[t.length===0?jsxRuntimeExports.jsx("div",{className:"flex flex-1 items-center justify-center",children:jsxRuntimeExports.jsxs("div",{className:"text-center",children:[jsxRuntimeExports.jsx(Sparkles,{className:"mx-auto mb-[var(--inkblot-spacing-2)] h-5 w-5 text-[var(--inkblot-semantic-color-text-tertiary)]","aria-hidden":true}),jsxRuntimeExports.jsx("p",{className:"[font:var(--inkblot-semantic-typography-body-default)] text-[var(--inkblot-semantic-color-text-tertiary)]",children:i})]})}):jsxRuntimeExports.jsx("div",{ref:m,className:"flex-1 overflow-y-auto",children:jsxRuntimeExports.jsxs("div",{className:"mx-auto flex max-w-4xl flex-col gap-[var(--inkblot-spacing-4)] px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-6)]",children:[t.map(g=>g.role==="user"?jsxRuntimeExports.jsx("div",{className:"flex justify-end",children:jsxRuntimeExports.jsx("div",{className:"max-w-[80%] rounded-[var(--inkblot-radius-xl)] bg-[var(--inkblot-semantic-color-interactive-primary)] px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-3)] [font:var(--inkblot-semantic-typography-body-default)] text-[var(--inkblot-semantic-color-text-inverse)]",children:g.renderedContent??g.content})},g.id):jsxRuntimeExports.jsxs("div",{className:"flex items-start gap-[var(--inkblot-spacing-2)]",children:[jsxRuntimeExports.jsx(Sparkles,{size:16,strokeWidth:1.7,className:"mt-[var(--inkblot-spacing-1)] shrink-0 text-[var(--inkblot-semantic-color-text-tertiary)]","aria-hidden":true}),jsxRuntimeExports.jsx("div",{className:"max-w-[90%] [font:var(--inkblot-semantic-typography-body-default)] text-[var(--inkblot-semantic-color-text-primary)]",children:g.renderedContent??g.content})]},g.id)),r&&jsxRuntimeExports.jsxs("div",{className:"flex items-start gap-[var(--inkblot-spacing-2)]",children:[jsxRuntimeExports.jsx(LoaderCircle,{size:16,strokeWidth:1.7,className:"mt-[var(--inkblot-spacing-1)] shrink-0 animate-spin text-[var(--inkblot-semantic-color-text-tertiary)]","aria-hidden":true}),jsxRuntimeExports.jsx("p",{className:"[font:var(--inkblot-semantic-typography-body-default)] text-[var(--inkblot-semantic-color-text-tertiary)]",children:"Thinking..."})]})]})}),jsxRuntimeExports.jsx("div",{className:"shrink-0 border-t border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)] px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-3)]",children:jsxRuntimeExports.jsx("div",{className:"mx-auto max-w-4xl",children:jsxRuntimeExports.jsxs("div",{className:o("overflow-hidden rounded-[var(--inkblot-radius-xl)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-primary)] shadow-[var(--inkblot-shadow-sm)]",r&&"pointer-events-none"),"aria-busy":r,children:[jsxRuntimeExports.jsxs("div",{className:"flex items-end gap-[var(--inkblot-spacing-2)] p-[var(--inkblot-spacing-2)]",children:[jsxRuntimeExports.jsx("input",{ref:p,type:"file",multiple:true,onChange:f,className:"sr-only","aria-hidden":true}),jsxRuntimeExports.jsx("button",{type:"button",onClick:()=>p.current?.click(),disabled:r,className:o("flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--inkblot-radius-full)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-primary)] text-[var(--inkblot-semantic-color-text-tertiary)] transition-[background,border-color,color] duration-[var(--inkblot-duration-fast)]","hover:bg-[var(--inkblot-semantic-color-background-tertiary)] hover:text-[var(--inkblot-semantic-color-text-secondary)]","focus:outline-none focus:ring-2 focus:ring-[var(--inkblot-semantic-color-border-focus)] focus:ring-offset-2 focus:ring-offset-[var(--inkblot-semantic-color-background-primary)]","disabled:pointer-events-none disabled:opacity-[var(--inkblot-opacity-disabled)]"),"aria-label":"Attach files",children:jsxRuntimeExports.jsx(Paperclip,{size:18,strokeWidth:1.7,"aria-hidden":true})}),jsxRuntimeExports.jsx("textarea",{value:s,onChange:g=>l(g.target.value),onKeyDown:v,placeholder:a,rows:1,disabled:r,className:o("min-h-[2.25rem] min-w-0 flex-1 resize-none border-0 bg-transparent py-[var(--inkblot-spacing-1)] [font:var(--inkblot-semantic-typography-body-default)] text-[var(--inkblot-semantic-color-text-primary)] placeholder:text-[var(--inkblot-semantic-color-text-tertiary)]","focus:outline-none focus:ring-0","disabled:cursor-not-allowed disabled:opacity-[var(--inkblot-opacity-disabled)]")}),jsxRuntimeExports.jsx("div",{className:"flex h-8 w-8 shrink-0 items-center justify-center",children:r?jsxRuntimeExports.jsx("div",{className:"flex h-full w-full items-center justify-center rounded-[var(--inkblot-radius-full)] bg-[var(--inkblot-semantic-color-interactive-primary)]",children:jsxRuntimeExports.jsx(LoaderCircle,{size:16,strokeWidth:2,className:"animate-spin text-[var(--inkblot-semantic-color-text-inverse)]","aria-hidden":true})}):jsxRuntimeExports.jsx("button",{type:"button",onClick:b,className:o("flex h-full w-full items-center justify-center rounded-[var(--inkblot-radius-full)] bg-[var(--inkblot-semantic-color-interactive-primary)] text-[var(--inkblot-semantic-color-text-inverse)] transition-[background,box-shadow] duration-[var(--inkblot-duration-fast)]","hover:bg-[var(--inkblot-semantic-color-interactive-primary-hover)]","focus:outline-none focus:ring-2 focus:ring-[var(--inkblot-semantic-color-border-focus)] focus:ring-offset-2 focus:ring-offset-[var(--inkblot-semantic-color-background-primary)]"),"aria-label":"Send",children:jsxRuntimeExports.jsx(Send,{size:16,strokeWidth:2,"aria-hidden":true})})})]}),jsxRuntimeExports.jsx(Fi,{attachments:c,onRemove:w})]})})})]})}const {useEffect:Gi,useRef:Ki} = await importShared('react');
function _i({open:t,onOpenChange:e,title:r="Assistant",subtitle:a,className:i,...n}){let s=Ki(null);return Gi(()=>{if(!t)return;let l=c=>{c.key==="Escape"&&e?.(false);};return document.addEventListener("keydown",l),()=>document.removeEventListener("keydown",l)},[t,e]),jsxRuntimeExports.jsxs("div",{className:"fixed inset-0 z-50",style:{pointerEvents:t?"auto":"none"},children:[jsxRuntimeExports.jsx("button",{type:"button","aria-label":"Close panel",onClick:()=>e?.(false),className:o("absolute inset-0 bg-[var(--inkblot-semantic-color-background-primary)]/70 transition-opacity duration-[var(--inkblot-duration-normal)]",t?"opacity-100":"pointer-events-none opacity-0")}),jsxRuntimeExports.jsxs("div",{ref:s,role:"dialog","aria-modal":"true","aria-label":r,className:o("absolute inset-y-0 right-0 flex w-full max-w-sm flex-col border-l border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-primary)] shadow-[var(--inkblot-shadow-lg)] transition-transform duration-[var(--inkblot-duration-normal)] ease-[var(--inkblot-easing-default)]",t?"translate-x-0":"translate-x-full",i),children:[jsxRuntimeExports.jsxs("div",{className:"flex items-center justify-between border-b border-[var(--inkblot-semantic-color-border-default)] px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-3)]",children:[jsxRuntimeExports.jsxs("div",{className:"min-w-0",children:[jsxRuntimeExports.jsx("p",{className:"truncate text-sm font-medium text-[var(--inkblot-semantic-color-text-primary)]",children:r}),a&&jsxRuntimeExports.jsx("p",{className:"truncate text-xs text-[var(--inkblot-semantic-color-text-tertiary)]",children:a})]}),jsxRuntimeExports.jsx("button",{type:"button",onClick:()=>e?.(false),className:"ml-[var(--inkblot-spacing-2)] flex h-7 w-7 shrink-0 items-center justify-center rounded-[var(--inkblot-radius-md)] border border-[var(--inkblot-semantic-color-border-default)] text-[var(--inkblot-semantic-color-text-secondary)] transition-colors duration-[var(--inkblot-duration-fast)] hover:bg-[var(--inkblot-semantic-color-background-secondary)] hover:text-[var(--inkblot-semantic-color-text-primary)]","aria-label":"Close",children:jsxRuntimeExports.jsx(X,{className:"h-4 w-4"})})]}),jsxRuntimeExports.jsx(ve,{...n,className:"min-h-0 flex-1"})]})]})}function $i({className:t,...e}){return jsxRuntimeExports.jsx(ve,{...e,className:o("mx-auto w-full max-w-5xl",t)})}var Yi={primary:["bg-[var(--inkblot-semantic-color-interactive-primary)] text-[var(--inkblot-semantic-color-text-inverse)]","hover:bg-[var(--inkblot-semantic-color-interactive-primary-hover)] active:bg-[var(--inkblot-semantic-color-interactive-primary-active)]"],secondary:["bg-[var(--inkblot-semantic-color-interactive-secondary)] text-[var(--inkblot-semantic-color-text-primary)]","border border-[var(--inkblot-semantic-color-border-default)]","hover:bg-[var(--inkblot-semantic-color-interactive-secondary-hover)] hover:border-[var(--inkblot-semantic-color-border-strong)]","active:bg-[var(--inkblot-semantic-color-background-tertiary)]"]};function Er({buttons:t,className:e}){return jsxRuntimeExports.jsx("div",{className:o("flex flex-wrap items-center gap-[var(--inkblot-spacing-3)]",e),children:t.map(r=>jsxRuntimeExports.jsxs("button",{type:"button",onClick:()=>{r.onClick?.();},disabled:r.disabled,className:o("inline-flex min-h-[var(--inkblot-size-touch-target-min)] items-center justify-center gap-2 rounded-[var(--inkblot-radius-lg)] px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-2)]","[font:var(--inkblot-semantic-typography-body-medium)] font-medium","focus:outline-none focus:ring-2 focus:ring-[var(--inkblot-semantic-color-border-focus)] focus:ring-offset-2 focus:ring-offset-[var(--inkblot-semantic-color-background-primary)]","transition-colors duration-[var(--inkblot-duration-fast)]","disabled:opacity-[var(--inkblot-opacity-disabled)] disabled:pointer-events-none disabled:cursor-not-allowed",Yi[r.variant]),children:[r.icon??null,r.label]},r.id))})}function Fe({onSendNow:t,onSchedule:e,onSaveDraft:r,className:a}){return jsxRuntimeExports.jsx(Er,{buttons:[{id:"send",label:"Send Now",variant:"primary",icon:jsxRuntimeExports.jsx(Send,{className:"h-4 w-4"}),onClick:t},{id:"schedule",label:"Schedule",variant:"secondary",icon:jsxRuntimeExports.jsx(Calendar,{className:"h-4 w-4"}),onClick:e},{id:"draft",label:"Save Draft",variant:"secondary",onClick:r}],className:a})}const {forwardRef:Zi} = await importShared('react');
var fe=Zi(({label:t,loading:e=false,onWriteWithAI:r,disabled:a,className:i,...n},s)=>{let l=a||e;return jsxRuntimeExports.jsxs("div",{className:o("flex flex-col gap-[var(--inkblot-spacing-2)]",i),children:[jsxRuntimeExports.jsxs("div",{className:"flex items-center justify-between",children:[t?jsxRuntimeExports.jsx("label",{htmlFor:n.id,className:o("uppercase tracking-wider","[font:var(--inkblot-semantic-typography-body-small)]","text-[var(--inkblot-semantic-color-text-primary)]"),children:t}):jsxRuntimeExports.jsx("span",{}),r?jsxRuntimeExports.jsxs("button",{type:"button",onClick:r,disabled:e,className:o("inline-flex min-h-[var(--inkblot-size-touch-target-min)] items-center justify-center gap-2 rounded-[var(--inkblot-radius-lg)]","border border-[var(--inkblot-semantic-color-border-default)]","bg-[var(--inkblot-semantic-color-interactive-secondary)]","px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-2)]","[font:var(--inkblot-semantic-typography-body-medium)] font-medium","text-[var(--inkblot-semantic-color-text-primary)]","hover:bg-[var(--inkblot-semantic-color-interactive-secondary-hover)] hover:border-[var(--inkblot-semantic-color-border-strong)]","focus:outline-none focus:ring-2 focus:ring-[var(--inkblot-semantic-color-border-focus)] focus:ring-offset-2 focus:ring-offset-[var(--inkblot-semantic-color-background-primary)]","transition-colors duration-[var(--inkblot-duration-fast)]","disabled:opacity-[var(--inkblot-opacity-disabled)] disabled:cursor-not-allowed disabled:pointer-events-none"),children:[e?jsxRuntimeExports.jsx(LoaderCircle,{className:"h-4 w-4 shrink-0 animate-spin"}):jsxRuntimeExports.jsx(Sparkles,{className:"h-4 w-4 shrink-0",style:{color:"var(--inkblot-semantic-color-status-warning)"}}),e?"Generating...":"Write with AI"]}):null]}),jsxRuntimeExports.jsx("div",{className:"relative",children:jsxRuntimeExports.jsx("textarea",{ref:s,disabled:l,className:o("min-h-[12rem] w-full rounded-[var(--inkblot-radius-lg)]","border border-[var(--inkblot-semantic-color-border-default)]","bg-[var(--inkblot-semantic-color-background-secondary)]","px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-3)]","[font:var(--inkblot-semantic-typography-body-medium)]","text-[var(--inkblot-semantic-color-text-primary)] placeholder:text-[var(--inkblot-semantic-color-text-tertiary)]","transition-colors duration-[var(--inkblot-duration-fast)]","hover:border-[var(--inkblot-semantic-color-border-strong)]","focus:outline-none focus:ring-2 focus:ring-[var(--inkblot-semantic-color-border-focus)] focus:ring-offset-2 focus:ring-offset-[var(--inkblot-semantic-color-background-primary)]","disabled:opacity-[var(--inkblot-opacity-disabled)] disabled:cursor-not-allowed disabled:pointer-events-none"),...n})})]})});fe.displayName="AIComposeInput";const {forwardRef:ts} = await importShared('react');
var es={primary:"border border-transparent bg-[var(--inkblot-semantic-color-interactive-primary)] text-[var(--inkblot-semantic-color-text-inverse)] shadow-[var(--inkblot-shadow-sm)] hover:bg-[var(--inkblot-semantic-color-interactive-primary-hover)] active:bg-[var(--inkblot-semantic-color-interactive-primary-active)]",secondary:"border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)] text-[var(--inkblot-semantic-color-text-primary)] hover:bg-[var(--inkblot-semantic-color-interactive-secondary-hover)] hover:border-[var(--inkblot-semantic-color-border-strong)] active:bg-[var(--inkblot-semantic-color-background-tertiary)]"},ge=ts(({className:t,variant:e="primary",disabled:r,...a},i)=>jsxRuntimeExports.jsx("button",{ref:i,disabled:r,className:o("inline-flex min-h-[var(--inkblot-size-touch-target-min)] items-center justify-center rounded-[var(--inkblot-radius-lg)] px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-2)] [font:var(--inkblot-semantic-typography-body-medium)] font-semibold transition-[background,border-color,box-shadow,color] duration-[var(--inkblot-duration-fast)] ease-[var(--inkblot-easing-default)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--inkblot-semantic-color-border-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--inkblot-semantic-color-background-primary)] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-[var(--inkblot-opacity-disabled)]",es[e],t),...a}));ge.displayName="Button";const {useMemo:os,useState:qo} = await importShared('react');
var ms={sent:{icon:CircleCheckBig,label:"Sent",colorClass:"text-[var(--inkblot-semantic-color-status-success)]"},active:{icon:Zap,label:"Active",colorClass:"text-[var(--inkblot-semantic-color-status-warning)]"},draft:{icon:FileText,label:"Draft",colorClass:"text-[var(--inkblot-semantic-color-text-secondary)]"},scheduled:{icon:Clock,label:"Scheduled",colorClass:"text-[var(--inkblot-semantic-color-status-info)]"}};function Ge({columns:t,rows:e,sortKey:r,sortDirection:a,defaultSortKey:i,defaultSortDirection:n="asc",onSortChange:s,sortableColumns:l,emptyTitle:c="No campaigns found",emptyDescription:d="Create a campaign or adjust filters to see results.",className:m}){let[p,b]=qo(i),[v,f]=qo(n),w=r!==void 0&&a!==void 0,g=w?r:p,h=w?a:v,S=u=>!l||l.length===0?true:l.includes(u),N=(u,x)=>{if(x==="campaign")return u.campaignName.toLowerCase();if(x==="status")return u.status;if(x==="opens")return Number.parseFloat(u.opens.replace("%","").trim())||0;if(x==="clicks")return Number.parseFloat(u.clicks.replace("%","").trim())||0;if(x==="date")return new Date(u.date).getTime()||0;let C=u[x];return typeof C=="number"?C:String(C??"").toLowerCase()},y=os(()=>g?[...e].sort((x,C)=>{let P=N(x,g),D=N(C,g);return P<D?h==="asc"?-1:1:P>D?h==="asc"?1:-1:0}):e,[h,g,e]),k=u=>{let x=g===u&&h==="asc"?"desc":"asc";w||(b(u),f(x)),s?.(u,x);};return jsxRuntimeExports.jsx("div",{className:o("overflow-x-auto rounded-[var(--inkblot-radius-lg)]","border border-[var(--inkblot-semantic-color-border-subtle)]","bg-[var(--inkblot-semantic-color-background-primary)]",m),children:jsxRuntimeExports.jsxs("table",{className:"w-full min-w-[600px] border-collapse",children:[jsxRuntimeExports.jsx("thead",{children:jsxRuntimeExports.jsx("tr",{className:"bg-[var(--inkblot-semantic-color-background-secondary)]",children:t.map(u=>jsxRuntimeExports.jsx("th",{className:o("px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-3)] text-left","uppercase tracking-wider","[font:var(--inkblot-semantic-typography-body-small)]","text-[var(--inkblot-semantic-color-text-secondary)]","border-b border-[var(--inkblot-semantic-color-border-subtle)]"),children:S(u.key)?jsxRuntimeExports.jsxs("button",{type:"button",onClick:()=>k(u.key),className:"inline-flex items-center gap-[var(--inkblot-spacing-1)] rounded-[var(--inkblot-radius-sm)] transition-colors duration-[var(--inkblot-duration-fast)] hover:text-[var(--inkblot-semantic-color-text-primary)]",children:[u.label,g!==u.key?jsxRuntimeExports.jsx(ArrowUpDown,{className:"h-3.5 w-3.5","aria-hidden":true}):h==="asc"?jsxRuntimeExports.jsx(ArrowUp,{className:"h-3.5 w-3.5","aria-hidden":true}):jsxRuntimeExports.jsx(ArrowDown,{className:"h-3.5 w-3.5","aria-hidden":true})]}):u.label},u.key))})}),jsxRuntimeExports.jsx("tbody",{children:y.length===0?jsxRuntimeExports.jsx("tr",{children:jsxRuntimeExports.jsx("td",{colSpan:t.length,className:"px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-10)] text-center",children:jsxRuntimeExports.jsxs("div",{className:"mx-auto flex max-w-[420px] flex-col gap-[var(--inkblot-spacing-1)]",children:[jsxRuntimeExports.jsx("span",{className:"[font:var(--inkblot-semantic-typography-body-large-bold)] text-[var(--inkblot-semantic-color-text-primary)]",children:c}),jsxRuntimeExports.jsx("span",{className:"[font:var(--inkblot-semantic-typography-body-small)] text-[var(--inkblot-semantic-color-text-secondary)]",children:d})]})})}):y.map(u=>jsxRuntimeExports.jsxs("tr",{className:o("border-b border-[var(--inkblot-semantic-color-border-subtle)] last:border-b-0","transition-colors duration-[var(--inkblot-duration-fast)]","hover:bg-[var(--inkblot-semantic-color-background-secondary)]/50"),children:[jsxRuntimeExports.jsx("td",{className:o("px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-3)]","border-b border-[var(--inkblot-semantic-color-border-subtle)]"),children:jsxRuntimeExports.jsxs("div",{className:"flex flex-col gap-0.5",children:[jsxRuntimeExports.jsx("span",{className:o("[font:var(--inkblot-semantic-typography-body-large-bold)]","text-[var(--inkblot-semantic-color-text-primary)]"),children:u.campaignName}),jsxRuntimeExports.jsx("span",{className:o("[font:var(--inkblot-semantic-typography-body-small)]","text-[var(--inkblot-semantic-color-text-secondary)]"),children:u.recipients})]})}),jsxRuntimeExports.jsx("td",{className:o("px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-3)]","border-b border-[var(--inkblot-semantic-color-border-subtle)]"),children:jsxRuntimeExports.jsx(ps,{status:u.status,subtext:u.statusSubtext})}),jsxRuntimeExports.jsx("td",{className:o("px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-3)]","[font:var(--inkblot-semantic-typography-body-medium)]","text-[var(--inkblot-semantic-color-text-primary)]","border-b border-[var(--inkblot-semantic-color-border-subtle)]"),children:u.opens}),jsxRuntimeExports.jsx("td",{className:o("px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-3)]","[font:var(--inkblot-semantic-typography-body-medium)]","text-[var(--inkblot-semantic-color-text-primary)]","border-b border-[var(--inkblot-semantic-color-border-subtle)]"),children:u.clicks}),jsxRuntimeExports.jsx("td",{className:o("px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-3)]","[font:var(--inkblot-semantic-typography-body-medium)]","text-[var(--inkblot-semantic-color-text-primary)]","border-b border-[var(--inkblot-semantic-color-border-subtle)]"),children:u.date})]},u.id))})]})})}function ps({status:t,subtext:e}){let r=ms[t],a=r.icon;return jsxRuntimeExports.jsxs("div",{className:"flex flex-col gap-0.5",children:[jsxRuntimeExports.jsxs("div",{className:o("inline-flex items-center gap-1.5","[font:var(--inkblot-semantic-typography-body-small)] font-medium",r.colorClass),children:[jsxRuntimeExports.jsx(a,{className:"h-4 w-4 shrink-0"}),r.label]}),e?jsxRuntimeExports.jsx("span",{className:o("[font:var(--inkblot-semantic-typography-body-small)]","text-[var(--inkblot-semantic-color-text-secondary)]"),children:e}):null]})}function Ke({category:t,title:e,uses:r,onClick:a,className:i}){return jsxRuntimeExports.jsxs("button",{type:"button",onClick:a,className:o("flex flex-col gap-[var(--inkblot-spacing-4)] rounded-[var(--inkblot-radius-lg)]","bg-[var(--inkblot-semantic-color-background-secondary)]","border border-[var(--inkblot-semantic-color-border-subtle)]","px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-5)]","text-left transition-colors duration-[var(--inkblot-duration-fast)]","hover:border-[var(--inkblot-semantic-color-border-default)] hover:bg-[var(--inkblot-semantic-color-background-tertiary)]","focus:outline-none focus:ring-2 focus:ring-[var(--inkblot-semantic-color-border-focus)] focus:ring-offset-2 focus:ring-offset-[var(--inkblot-semantic-color-background-primary)]",i),children:[jsxRuntimeExports.jsxs("div",{className:"flex items-start justify-between gap-2",children:[jsxRuntimeExports.jsx("span",{className:o("rounded-[var(--inkblot-radius-md)] px-[var(--inkblot-spacing-2)] py-[var(--inkblot-spacing-1)]","bg-[var(--inkblot-semantic-color-background-tertiary)]","[font:var(--inkblot-semantic-typography-body-small)] font-medium","text-[var(--inkblot-semantic-color-text-primary)]"),children:t}),jsxRuntimeExports.jsx("span",{className:o("[font:var(--inkblot-semantic-typography-body-small)]","text-[var(--inkblot-semantic-color-text-secondary)]"),children:r})]}),jsxRuntimeExports.jsx("h3",{className:o("[font:var(--inkblot-semantic-typography-body-large-bold)]","text-[var(--inkblot-semantic-color-text-primary)]"),children:e}),jsxRuntimeExports.jsx("div",{className:"flex flex-1 items-end justify-center pt-[var(--inkblot-spacing-4)]",children:jsxRuntimeExports.jsx(File,{className:o("h-10 w-10","text-[var(--inkblot-semantic-color-text-tertiary)]")})})]})}function _e({title:t="EMAIL TEMPLATES",onGenerateWithAI:e,templates:r,onTemplateClick:a,className:i}){return jsxRuntimeExports.jsxs("section",{className:o("flex flex-col gap-[var(--inkblot-spacing-6)] rounded-[var(--inkblot-radius-xl)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)] p-[var(--inkblot-spacing-5)] shadow-[var(--inkblot-shadow-sm)]",i),children:[jsxRuntimeExports.jsxs("div",{className:"flex flex-col gap-[var(--inkblot-spacing-4)] sm:flex-row sm:items-center sm:justify-between",children:[jsxRuntimeExports.jsx("h2",{className:o("uppercase tracking-wider","[font:var(--inkblot-semantic-typography-body-medium)]","text-[var(--inkblot-semantic-color-text-secondary)]"),children:t}),e?jsxRuntimeExports.jsxs("button",{type:"button",onClick:e,className:o("inline-flex min-h-[var(--inkblot-size-touch-target-min)] w-fit items-center justify-center gap-2 rounded-[var(--inkblot-radius-lg)]","border border-[var(--inkblot-semantic-color-border-default)]","bg-[var(--inkblot-semantic-color-background-primary)]","px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-2)]","[font:var(--inkblot-semantic-typography-body-medium)] font-medium","text-[var(--inkblot-semantic-color-text-primary)]","hover:bg-[var(--inkblot-semantic-color-interactive-secondary-hover)] hover:border-[var(--inkblot-semantic-color-border-strong)]","focus:outline-none focus:ring-2 focus:ring-[var(--inkblot-semantic-color-border-focus)] focus:ring-offset-2 focus:ring-offset-[var(--inkblot-semantic-color-background-primary)]","transition-colors duration-[var(--inkblot-duration-fast)]"),children:[jsxRuntimeExports.jsx(Sparkles,{className:"h-4 w-4 shrink-0",style:{color:"var(--inkblot-semantic-color-status-warning)"}}),"Generate with AI"]}):null]}),jsxRuntimeExports.jsx("div",{className:"grid grid-cols-1 gap-[var(--inkblot-spacing-6)] sm:grid-cols-2",children:r.map(n=>jsxRuntimeExports.jsx(Ke,{category:n.category,title:n.title,uses:n.uses,onClick:()=>a?.(n)},n.id))})]})}var hs={Person:"border-l-[var(--inkblot-semantic-color-status-info)]",Organization:"border-l-[var(--inkblot-semantic-color-status-warning)]",Deal:"border-l-[var(--inkblot-semantic-color-status-success)]"},Ns={Person:UserRound,Organization:Building2,Deal:BadgeCheck},ws={Person:"bg-[var(--inkblot-semantic-color-status-info)]/15 text-[var(--inkblot-semantic-color-status-info)]",Organization:"bg-[var(--inkblot-semantic-color-status-warning)]/15 text-[var(--inkblot-semantic-color-status-warning)]",Deal:"bg-[var(--inkblot-semantic-color-status-success)]/15 text-[var(--inkblot-semantic-color-status-success)]"},Cs=[{label:"Contacts",value:"12",icon:Users},{label:"Open Deals",value:"3",icon:TrendingUp},{label:"Touchpoints",value:"47",icon:ArrowUpRight}];function Xo({name:t,entityType:e,subtitle:r,statusLabel:a,metadata:i,edges:n=[],stats:s,connections:l,className:c}){let d=Ns[e];if(s!==void 0||l!==void 0){let p=s??Cs;return jsxRuntimeExports.jsxs("article",{className:o("glass flex flex-col gap-[var(--inkblot-spacing-4)] rounded-[var(--inkblot-radius-xl)] p-[var(--inkblot-spacing-5)]",c),children:[jsxRuntimeExports.jsxs("div",{className:"flex items-start justify-between",children:[jsxRuntimeExports.jsxs("div",{className:"flex items-center gap-[var(--inkblot-spacing-3)]",children:[jsxRuntimeExports.jsx("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--inkblot-radius-lg)] bg-[var(--inkblot-semantic-color-interactive-primary)]/10",children:jsxRuntimeExports.jsx(d,{className:"h-5 w-5 text-[var(--inkblot-semantic-color-interactive-primary)]","aria-hidden":true})}),jsxRuntimeExports.jsxs("div",{children:[jsxRuntimeExports.jsx("h3",{className:"text-sm font-semibold text-[var(--inkblot-semantic-color-text-primary)]",children:t}),r?jsxRuntimeExports.jsx("p",{className:"text-xs text-[var(--inkblot-semantic-color-text-tertiary)]",children:r}):null]})]}),a?jsxRuntimeExports.jsx("span",{className:"rounded-[var(--inkblot-radius-sm)] bg-[var(--inkblot-semantic-color-interactive-primary)]/10 px-2 py-0.5 font-mono text-xs text-[var(--inkblot-semantic-color-interactive-primary)]",children:a}):null]}),jsxRuntimeExports.jsx("div",{className:"grid grid-cols-3 gap-[var(--inkblot-spacing-3)]",children:p.map(b=>{let v=b.icon;return jsxRuntimeExports.jsxs("div",{className:"rounded-[var(--inkblot-radius-md)] bg-[var(--inkblot-semantic-color-background-tertiary)] p-[var(--inkblot-spacing-3)]",children:[jsxRuntimeExports.jsxs("div",{className:"mb-1 flex items-center gap-1.5",children:[v?jsxRuntimeExports.jsx(v,{className:"h-3 w-3 text-[var(--inkblot-semantic-color-text-tertiary)]","aria-hidden":true}):null,jsxRuntimeExports.jsx("span",{className:"text-[10px] uppercase tracking-wider text-[var(--inkblot-semantic-color-text-tertiary)]",children:b.label})]}),jsxRuntimeExports.jsx("span",{className:"text-lg font-semibold text-[var(--inkblot-semantic-color-text-primary)]",children:b.value})]},b.label)})}),l?jsxRuntimeExports.jsxs("div",{className:"flex items-center gap-2 text-xs text-[var(--inkblot-semantic-color-text-tertiary)]",children:[jsxRuntimeExports.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-[var(--inkblot-semantic-color-interactive-primary)]"}),l]}):null]})}return jsxRuntimeExports.jsxs("article",{className:o("flex flex-col gap-[var(--inkblot-spacing-4)] rounded-[var(--inkblot-radius-xl)] border border-[var(--inkblot-semantic-color-border-default)] border-l-4 bg-[var(--inkblot-semantic-color-background-secondary)] p-[var(--inkblot-spacing-4)] shadow-[var(--inkblot-shadow-sm)]",hs[e],c),children:[jsxRuntimeExports.jsxs("div",{className:"flex items-start justify-between gap-[var(--inkblot-spacing-3)]",children:[jsxRuntimeExports.jsxs("div",{className:"flex items-center gap-[var(--inkblot-spacing-3)]",children:[jsxRuntimeExports.jsx("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--inkblot-radius-lg)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-primary)] text-[var(--inkblot-semantic-color-text-secondary)]",children:jsxRuntimeExports.jsx(d,{className:"h-5 w-5","aria-hidden":true})}),jsxRuntimeExports.jsxs("div",{className:"flex flex-col gap-[var(--inkblot-spacing-1)]",children:[jsxRuntimeExports.jsx("h3",{className:"[font:var(--inkblot-semantic-typography-body-medium)] font-semibold text-[var(--inkblot-semantic-color-text-primary)]",children:t}),r?jsxRuntimeExports.jsx("p",{className:"text-xs text-[var(--inkblot-semantic-color-text-tertiary)]",children:r}):jsxRuntimeExports.jsx("span",{className:o("inline-flex w-fit items-center rounded-[var(--inkblot-radius-full)] px-[var(--inkblot-spacing-2)] py-[var(--inkblot-spacing-1)] [font:var(--inkblot-semantic-typography-body-small)] font-medium uppercase tracking-wide",ws[e]),children:e})]})]}),a?jsxRuntimeExports.jsx("span",{className:"rounded-[var(--inkblot-radius-sm)] bg-[var(--inkblot-semantic-color-interactive-primary)]/10 px-2 py-0.5 font-mono text-xs text-[var(--inkblot-semantic-color-interactive-primary)]",children:a}):null]}),i&&Object.keys(i).length>0?jsxRuntimeExports.jsx("dl",{className:"grid grid-cols-1 gap-[var(--inkblot-spacing-2)] sm:grid-cols-2",children:Object.entries(i).map(([p,b])=>jsxRuntimeExports.jsxs("div",{className:"rounded-[var(--inkblot-radius-md)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-primary)] px-[var(--inkblot-spacing-3)] py-[var(--inkblot-spacing-2)]",children:[jsxRuntimeExports.jsx("dt",{className:"[font:var(--inkblot-semantic-typography-body-small)] uppercase tracking-wide text-[var(--inkblot-semantic-color-text-tertiary)]",children:p}),jsxRuntimeExports.jsx("dd",{className:"[font:var(--inkblot-semantic-typography-body-medium)] text-[var(--inkblot-semantic-color-text-secondary)]",children:b})]},p))}):null,n.length>0?jsxRuntimeExports.jsxs("div",{className:"flex flex-col gap-[var(--inkblot-spacing-2)]",children:[jsxRuntimeExports.jsx("h4",{className:"[font:var(--inkblot-semantic-typography-body-small)] font-medium uppercase tracking-wide text-[var(--inkblot-semantic-color-text-secondary)]",children:"Edges"}),jsxRuntimeExports.jsx("ul",{className:"flex flex-wrap gap-[var(--inkblot-spacing-2)]",children:n.map((p,b)=>jsxRuntimeExports.jsxs("li",{className:"rounded-[var(--inkblot-radius-full)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-primary)] px-[var(--inkblot-spacing-3)] py-[var(--inkblot-spacing-1)] [font:var(--inkblot-semantic-typography-body-small)] text-[var(--inkblot-semantic-color-text-secondary)]",children:[p.type,p.target?` \u2192 ${p.target}`:""]},b))})]}):null,l?jsxRuntimeExports.jsxs("div",{className:"flex items-center gap-2 text-xs text-[var(--inkblot-semantic-color-text-tertiary)]",children:[jsxRuntimeExports.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-[var(--inkblot-semantic-color-interactive-primary)]"}),l]}):null]})}const {forwardRef:Ts} = await importShared('react');
var Vt=Ts(({className:t,error:e,disabled:r,...a},i)=>jsxRuntimeExports.jsx("input",{ref:i,disabled:r,"aria-invalid":e,"aria-disabled":r,className:o("min-h-[var(--inkblot-size-touch-target-min)] w-full rounded-[var(--inkblot-radius-lg)] border bg-[var(--inkblot-semantic-color-background-secondary)] px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-2)] [font:var(--inkblot-semantic-typography-body-medium)] text-[var(--inkblot-semantic-color-text-primary)] shadow-[var(--inkblot-shadow-xs)] placeholder:text-[var(--inkblot-semantic-color-text-tertiary)] transition-[background,border-color,box-shadow] duration-[var(--inkblot-duration-fast)] ease-[var(--inkblot-easing-default)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--inkblot-semantic-color-border-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--inkblot-semantic-color-background-primary)] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-[var(--inkblot-opacity-disabled)]",e?"border-[var(--inkblot-semantic-color-status-error)] focus-visible:ring-[var(--inkblot-semantic-color-status-error)]":"border-[var(--inkblot-semantic-color-border-default)] hover:border-[var(--inkblot-semantic-color-border-strong)] hover:bg-[var(--inkblot-semantic-color-background-primary)]",t),...a}));Vt.displayName="Input";const {Component:Ss} = await importShared('react');
var H=class extends Ss{constructor(e){super(e),this.state={hasError:false,error:null};}static getDerivedStateFromError(e){return {hasError:true,error:e}}render(){return this.state.hasError&&this.state.error?jsxRuntimeExports.jsxs("div",{role:"alert",className:o("flex flex-col gap-4 rounded-[var(--inkblot-radius-lg)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)] p-4",this.props.className),children:[jsxRuntimeExports.jsx("p",{className:"text-base font-semibold text-[var(--inkblot-semantic-color-text-primary)]",children:"This module failed to load"}),jsxRuntimeExports.jsx("p",{className:"text-sm text-[var(--inkblot-semantic-color-text-tertiary)]",children:this.state.error.message}),jsxRuntimeExports.jsx(ge,{variant:"secondary",onClick:this.props.onRetry,className:"w-fit border-[var(--inkblot-semantic-color-status-error)]",children:"Retry"})]}):this.props.children}};function Zo({title:t,insights:e,stats:r=[],commandValue:a="",onCommandChange:i,onCommandSubmit:n,className:s}){let l=c=>{c.key==="Enter"&&(c.preventDefault(),n?.());};return jsxRuntimeExports.jsx(H,{className:s,children:jsxRuntimeExports.jsxs("div",{className:"flex flex-col gap-4 rounded-[var(--inkblot-radius-xl)] bg-[var(--inkblot-semantic-color-background-secondary)] p-4",children:[jsxRuntimeExports.jsx("h2",{className:"text-xl font-semibold text-[var(--inkblot-semantic-color-text-primary)]",children:t}),e?jsxRuntimeExports.jsx("div",{className:"rounded-[var(--inkblot-radius-md)] border border-[var(--inkblot-semantic-color-interactive-primary)] p-4",style:{boxShadow:"0 0 12px var(--inkblot-semantic-color-interactive-primary)"},children:e}):null,r.length>0?jsxRuntimeExports.jsxs("div",{children:[jsxRuntimeExports.jsx("h3",{className:"mb-2 text-sm font-medium text-[var(--inkblot-semantic-color-text-secondary)]",children:"Connected To"}),jsxRuntimeExports.jsx("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-3",children:r.map((c,d)=>jsxRuntimeExports.jsxs("div",{className:"rounded-[var(--inkblot-radius-md)] bg-[var(--inkblot-semantic-color-background-tertiary)] px-3 py-2",children:[jsxRuntimeExports.jsx("span",{className:"text-xs text-[var(--inkblot-semantic-color-text-tertiary)]",children:c.label}),jsxRuntimeExports.jsx("p",{className:"text-sm font-medium text-[var(--inkblot-semantic-color-text-primary)]",children:c.value})]},d))})]}):null,jsxRuntimeExports.jsx("div",{className:"mt-2",children:jsxRuntimeExports.jsx(Vt,{type:"text",value:a,onChange:c=>i?.(c.target.value),onKeyDown:l,placeholder:"Ask about this entity...",className:"rounded-[var(--inkblot-radius-md)]"})})]})})}const {Component:Es} = await importShared('react');
var $e=class extends Es{constructor(e){super(e),this.state={hasError:false,error:null};}static getDerivedStateFromError(e){return {hasError:true,error:e}}render(){return this.state.hasError&&this.state.error?this.props.fallback?this.props.fallback:jsxRuntimeExports.jsx("div",{className:o("inline-flex items-center gap-3 rounded-[var(--inkblot-radius-md)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-tertiary)] px-4 py-3 text-[var(--inkblot-semantic-color-text-secondary)]",this.props.className),role:"alert",children:jsxRuntimeExports.jsx("span",{className:"text-sm font-medium",children:"Something went wrong"})}):this.props.children}};var Is={success:"border-[var(--inkblot-semantic-color-status-success)] bg-[var(--inkblot-semantic-color-status-success)]/10 text-[var(--inkblot-semantic-color-status-success)]",warning:"border-[var(--inkblot-semantic-color-status-warning)] bg-[var(--inkblot-semantic-color-status-warning)]/10 text-[var(--inkblot-semantic-color-status-warning)]",error:"border-[var(--inkblot-semantic-color-status-error)] bg-[var(--inkblot-semantic-color-status-error)]/10 text-[var(--inkblot-semantic-color-status-error)]",info:"border-[var(--inkblot-semantic-color-status-info)] bg-[var(--inkblot-semantic-color-status-info)]/10 text-[var(--inkblot-semantic-color-status-info)]"};function Ue({label:t,variant:e="info",className:r}){return jsxRuntimeExports.jsx("span",{className:o("inline-flex items-center rounded-[var(--inkblot-radius-md)] border px-2 py-0.5 text-xs font-medium",Is[e],r),children:t})}function As(t){return t>=.8?"success":t>=.5?"info":t>=.2?"warning":"error"}function Jo({event:t,className:e}){let r=As(t.confidence_score),a=`${Math.round(t.confidence_score*100)}%`;return jsxRuntimeExports.jsxs("div",{className:o("flex flex-wrap items-center gap-2 rounded-[var(--inkblot-radius-lg)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)] p-4",e),children:[jsxRuntimeExports.jsx("span",{className:"text-sm font-medium text-[var(--inkblot-semantic-color-text-primary)]",children:t.actor}),jsxRuntimeExports.jsx("span",{className:"text-sm text-[var(--inkblot-semantic-color-text-tertiary)]",children:"\u2192"}),jsxRuntimeExports.jsx("span",{className:"text-sm text-[var(--inkblot-semantic-color-text-secondary)]",children:t.subject}),jsxRuntimeExports.jsx("span",{className:"rounded-[var(--inkblot-radius-md)] bg-[var(--inkblot-semantic-color-background-tertiary)] px-2 py-0.5 text-xs text-[var(--inkblot-semantic-color-text-secondary)]",children:t.event_type}),jsxRuntimeExports.jsx("span",{className:"text-xs text-[var(--inkblot-semantic-color-text-tertiary)]",children:t.timestamp}),jsxRuntimeExports.jsx(Ue,{label:a,variant:r})]})}var Hs={success:"bg-[var(--inkblot-semantic-color-status-success)]",warning:"bg-[var(--inkblot-semantic-color-status-warning)]",error:"bg-[var(--inkblot-semantic-color-status-error)]",info:"bg-[var(--inkblot-semantic-color-status-info)]"};function Bs(){return jsxRuntimeExports.jsx(Clock3,{className:"h-4 w-4 text-[var(--inkblot-semantic-color-text-tertiary)]","aria-hidden":true})}function ea({events:t,className:e}){return jsxRuntimeExports.jsx(H,{className:e,children:jsxRuntimeExports.jsx("div",{className:o("flex flex-col gap-[var(--inkblot-spacing-3)] rounded-[var(--inkblot-radius-xl)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)] p-[var(--inkblot-spacing-4)] shadow-[var(--inkblot-shadow-sm)]"),children:t.map(r=>jsxRuntimeExports.jsxs("div",{className:"flex items-start gap-[var(--inkblot-spacing-3)] rounded-[var(--inkblot-radius-lg)] border border-[var(--inkblot-semantic-color-border-default)]/60 bg-[var(--inkblot-semantic-color-background-primary)] px-[var(--inkblot-spacing-3)] py-[var(--inkblot-spacing-2)]",children:[jsxRuntimeExports.jsx("div",{className:"mt-[var(--inkblot-spacing-1)] flex h-7 w-7 shrink-0 items-center justify-center rounded-[var(--inkblot-radius-md)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)]",children:r.icon??jsxRuntimeExports.jsx(Bs,{})}),jsxRuntimeExports.jsxs("div",{className:"min-w-0 flex-1",children:[jsxRuntimeExports.jsx("p",{className:"[font:var(--inkblot-semantic-typography-body-medium)] font-medium text-[var(--inkblot-semantic-color-text-primary)]",children:r.title}),jsxRuntimeExports.jsx("p",{className:"[font:var(--inkblot-semantic-typography-body-small)] text-[var(--inkblot-semantic-color-text-tertiary)]",children:r.timestamp})]}),r.status?jsxRuntimeExports.jsx("div",{className:o("mt-[var(--inkblot-spacing-2)] h-2 w-2 shrink-0 rounded-[var(--inkblot-radius-full)]",Hs[r.status]),"aria-hidden":true}):null]},r.id))})})}var Hr=36,Rr=2*Math.PI*Hr;function je({label:t,value:e,subtext:r,trend:a,className:i}){let n=Math.min(100,Math.max(0,e)),s=Rr-n/100*Rr;return jsxRuntimeExports.jsx(H,{className:i,children:jsxRuntimeExports.jsxs("div",{className:"flex flex-col items-center gap-[var(--inkblot-spacing-4)] rounded-[var(--inkblot-radius-xl)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)] p-[var(--inkblot-spacing-4)] shadow-[var(--inkblot-shadow-sm)]",children:[jsxRuntimeExports.jsxs("div",{className:"relative",children:[jsxRuntimeExports.jsxs("svg",{width:"96",height:"96",viewBox:"0 0 96 96",className:"-rotate-90",children:[jsxRuntimeExports.jsx("circle",{cx:"48",cy:"48",r:Hr,fill:"none",stroke:"var(--inkblot-semantic-color-background-tertiary)",strokeWidth:"4"}),jsxRuntimeExports.jsx("circle",{cx:"48",cy:"48",r:Hr,fill:"none",stroke:"var(--inkblot-semantic-color-interactive-primary)",strokeWidth:"4",strokeDasharray:Rr,strokeDashoffset:s,strokeLinecap:"round",className:"transition-[stroke-dashoffset] duration-[var(--inkblot-duration-fast)] ease-[var(--inkblot-easing-default)]"})]}),jsxRuntimeExports.jsx("div",{className:"absolute inset-0 flex flex-col items-center justify-center",children:jsxRuntimeExports.jsxs("span",{className:"flex items-center gap-[var(--inkblot-spacing-1)] [font:var(--inkblot-semantic-typography-heading-small)] font-semibold text-[var(--inkblot-semantic-color-text-primary)]",children:[n,"%",a==="up"?jsxRuntimeExports.jsx(TrendingUp,{className:"h-4 w-4 text-[var(--inkblot-semantic-color-status-success)]","aria-hidden":true}):a==="down"?jsxRuntimeExports.jsx(TrendingDown,{className:"h-4 w-4 text-[var(--inkblot-semantic-color-status-error)]","aria-hidden":true}):null]})})]}),jsxRuntimeExports.jsxs("div",{className:"text-center",children:[jsxRuntimeExports.jsx("p",{className:"[font:var(--inkblot-semantic-typography-body-medium)] font-semibold text-[var(--inkblot-semantic-color-text-primary)]",children:t}),r?jsxRuntimeExports.jsx("p",{className:"[font:var(--inkblot-semantic-typography-body-small)] text-[var(--inkblot-semantic-color-text-tertiary)]",children:r}):null]})]})})}var Vs={default:"text-[var(--inkblot-semantic-color-text-primary)]",success:"text-[var(--inkblot-semantic-color-status-success)]",warning:"text-[var(--inkblot-semantic-color-status-warning)]",error:"text-[var(--inkblot-semantic-color-status-error)]"};function Fs({className:t}){return jsxRuntimeExports.jsx("svg",{viewBox:"0 0 16 16",className:o("h-4 w-4",t),"aria-hidden":true,children:jsxRuntimeExports.jsx("path",{fill:"currentColor",d:"M6 4l4 4-4 4V4z"})})}function ra({items:t,className:e}){return jsxRuntimeExports.jsx(H,{className:e,children:jsxRuntimeExports.jsx("ul",{className:o("flex flex-col gap-4 py-2"),children:t.map((r,a)=>jsxRuntimeExports.jsxs("li",{className:"flex items-center justify-between gap-4",children:[jsxRuntimeExports.jsx("span",{className:"text-sm text-[var(--inkblot-semantic-color-text-secondary)]",children:r.label}),jsxRuntimeExports.jsx("span",{className:o("flex items-center gap-1 text-sm font-medium",Vs[r.variant??"default"]),children:r.value!=null?r.value:jsxRuntimeExports.jsx(Fs,{})})]},a))})})}function wt({className:t,...e}){return jsxRuntimeExports.jsx("div",{className:o("animate-shimmer rounded-[var(--inkblot-radius-lg)] border border-[var(--inkblot-semantic-color-border-default)]/40 bg-[length:200%_100%] bg-[linear-gradient(90deg,var(--inkblot-semantic-color-background-secondary)_0%,var(--inkblot-semantic-color-background-tertiary)_50%,var(--inkblot-semantic-color-background-secondary)_100%)]",t),...e})}function qe({className:t,...e}){return jsxRuntimeExports.jsxs("div",{className:o("flex flex-col gap-[var(--inkblot-spacing-3)] rounded-[var(--inkblot-radius-xl)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)] p-[var(--inkblot-spacing-4)] shadow-[var(--inkblot-shadow-sm)]",t),...e,children:[jsxRuntimeExports.jsx(wt,{className:"h-8 w-3/5"}),jsxRuntimeExports.jsx(wt,{className:"h-4 w-full"}),jsxRuntimeExports.jsx(wt,{className:"h-4 w-11/12"}),jsxRuntimeExports.jsx(wt,{className:"h-4 w-4/5"}),jsxRuntimeExports.jsx(wt,{className:"h-4 w-2/3"})]})}function Xe({children:t,loading:e=false,title:r,className:a,onRetry:i}){return jsxRuntimeExports.jsx(H,{className:a,onRetry:i,children:e?jsxRuntimeExports.jsxs("div",{className:o("flex flex-col gap-4",a),children:[r?jsxRuntimeExports.jsx("h2",{className:"text-lg font-semibold text-[var(--inkblot-semantic-color-text-primary)]",children:r}):null,jsxRuntimeExports.jsx(qe,{})]}):jsxRuntimeExports.jsxs("div",{className:o("flex flex-col gap-4",a),children:[r?jsxRuntimeExports.jsx("h2",{className:"text-lg font-semibold text-[var(--inkblot-semantic-color-text-primary)]",children:r}):null,t]})})}function Jt({title:t,subtitle:e,icon:r,action:a,className:i}){return jsxRuntimeExports.jsxs("header",{className:o("flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between","pb-[var(--inkblot-spacing-2)]",i),children:[jsxRuntimeExports.jsxs("div",{className:"flex items-start gap-[var(--inkblot-spacing-3)]",children:[r?jsxRuntimeExports.jsx("div",{className:o("flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--inkblot-radius-lg)]","bg-[var(--inkblot-semantic-color-background-secondary)]","[color:var(--inkblot-semantic-color-status-warning)]"),children:r}):null,jsxRuntimeExports.jsxs("div",{className:"min-w-0",children:[jsxRuntimeExports.jsx("h1",{className:o("text-[var(--inkblot-semantic-color-text-primary)]","[font:var(--inkblot-semantic-typography-heading-medium)]"),children:t}),e?jsxRuntimeExports.jsx("p",{className:o("mt-0.5 text-[var(--inkblot-semantic-color-text-secondary)]","[font:var(--inkblot-semantic-typography-body-small)]"),children:e}):null]})]}),a?jsxRuntimeExports.jsx("div",{className:"mt-[var(--inkblot-spacing-4)] shrink-0 sm:mt-0",children:a}):null]})}function te({label:t,onClick:e,icon:r,className:a}){return jsxRuntimeExports.jsxs("button",{type:"button",onClick:e,className:o("inline-flex min-h-[var(--inkblot-size-touch-target-min)] items-center justify-center gap-2 rounded-[var(--inkblot-radius-lg)] px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-2)]","bg-[var(--inkblot-semantic-color-interactive-primary)] text-[var(--inkblot-semantic-color-text-inverse)]","[font:var(--inkblot-semantic-typography-body-medium)] font-semibold","hover:bg-[var(--inkblot-semantic-color-interactive-primary-hover)] active:bg-[var(--inkblot-semantic-color-interactive-primary-active)]","focus:outline-none focus:ring-2 focus:ring-[var(--inkblot-semantic-color-border-focus)] focus:ring-offset-2 focus:ring-offset-[var(--inkblot-semantic-color-background-primary)]","transition-colors duration-[var(--inkblot-duration-fast)]",a),children:[r??jsxRuntimeExports.jsx(Plus,{className:"h-4 w-4"}),t]})}const {Link:$s} = await importShared('react-router-dom');
function Qe({resetErrorBoundary:t}){return jsxRuntimeExports.jsxs("div",{role:"alert",className:o("flex min-h-[50vh] flex-col items-center justify-center gap-[var(--inkblot-spacing-6)] px-[var(--inkblot-spacing-6)] py-[var(--inkblot-spacing-8)]","bg-[var(--inkblot-semantic-color-background-primary)]","[font:var(--inkblot-semantic-typography-body-small)]"),children:[jsxRuntimeExports.jsx("p",{className:"text-center text-[var(--inkblot-semantic-color-text-primary)] [font:var(--inkblot-semantic-typography-heading-medium)]",children:"This page is unavailable"}),jsxRuntimeExports.jsxs("div",{className:"flex flex-col items-center gap-[var(--inkblot-spacing-4)] sm:flex-row",children:[jsxRuntimeExports.jsx("button",{type:"button",onClick:t,className:o("inline-flex min-h-[var(--inkblot-size-touch-target-min)] items-center justify-center rounded-[var(--inkblot-radius-lg)] px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-2)]","bg-[var(--inkblot-semantic-color-interactive-primary)] text-[var(--inkblot-semantic-color-text-inverse)]","hover:bg-[var(--inkblot-semantic-color-interactive-primary-hover)] active:bg-[var(--inkblot-semantic-color-interactive-primary-active)]","focus:outline-none focus:ring-2 focus:ring-[var(--inkblot-semantic-color-border-focus)] focus:ring-offset-2 focus:ring-offset-[var(--inkblot-semantic-color-background-primary)]","transition-colors duration-[var(--inkblot-duration-fast)]"),children:"Retry"}),jsxRuntimeExports.jsx($s,{to:"/",className:o("inline-flex min-h-[var(--inkblot-size-touch-target-min)] items-center justify-center rounded-[var(--inkblot-radius-lg)] px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-2)]","text-[var(--inkblot-semantic-color-interactive-primary)] underline-offset-4 hover:underline","focus:outline-none focus:ring-2 focus:ring-[var(--inkblot-semantic-color-border-focus)] focus:ring-offset-2 focus:ring-offset-[var(--inkblot-semantic-color-background-primary)]","transition-colors duration-[var(--inkblot-duration-fast)]"),children:"Go to home"})]})]})}const {useNavigate:js} = await importShared('react-router-dom');
function na({children:t,fallback:e}){let r=js();return jsxRuntimeExports.jsx(ErrorBoundary$1,{FallbackComponent:e??Qe,onReset:()=>{r("/");},children:t})}const {forwardRef:Ys} = await importShared('react');
var Ct=Ys(({className:t,label:e,error:r,disabled:a,...i},n)=>jsxRuntimeExports.jsxs("div",{className:"flex flex-col gap-1",children:[e?jsxRuntimeExports.jsx("label",{htmlFor:i.id,className:o("uppercase tracking-wider","[font:var(--inkblot-semantic-typography-body-small)]","text-[var(--inkblot-semantic-color-text-primary)]"),children:e}):null,jsxRuntimeExports.jsxs("div",{className:o("flex items-center gap-2 rounded-[var(--inkblot-radius-full)]","bg-[var(--inkblot-semantic-color-background-secondary)]","border transition-colors duration-[var(--inkblot-duration-fast)]","focus-within:ring-2 focus-within:ring-[var(--inkblot-semantic-color-border-focus)] focus-within:ring-offset-2 focus-within:ring-offset-[var(--inkblot-semantic-color-background-primary)]",r?"border-[var(--inkblot-semantic-color-status-error)]":"border-[var(--inkblot-semantic-color-border-default)] hover:border-[var(--inkblot-semantic-color-border-strong)]",a&&"opacity-[var(--inkblot-opacity-disabled)] pointer-events-none cursor-not-allowed"),children:[jsxRuntimeExports.jsx(Search,{className:o("ml-[var(--inkblot-spacing-4)] h-4 w-4 shrink-0","text-[var(--inkblot-semantic-color-text-tertiary)]")}),jsxRuntimeExports.jsx("input",{ref:n,type:"search",disabled:a,"aria-invalid":r,"aria-label":e??"Search",className:o("min-h-[var(--inkblot-size-touch-target-min)] w-full flex-1 bg-transparent px-2 py-[var(--inkblot-spacing-2)] pr-[var(--inkblot-spacing-4)]","[font:var(--inkblot-semantic-typography-body-medium)]","text-[var(--inkblot-semantic-color-text-primary)] placeholder:text-[var(--inkblot-semantic-color-text-tertiary)]","focus:outline-none","disabled:cursor-not-allowed",t),...i})]})]}));Ct.displayName="SearchBar";function sa({children:t,columns:e=4,className:r}){return jsxRuntimeExports.jsx("div",{className:o("grid gap-[var(--inkblot-spacing-4)]",{1:"grid-cols-1",2:"grid-cols-1 sm:grid-cols-2",3:"grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",4:"grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"}[e],r),children:t})}const {useCallback:Qs,useMemo:Js,useState:tl} = await importShared('react');
function la({items:t,activeItemId:e,defaultActiveItemId:r,onActiveItemChange:a,onItemClick:i,className:n}){let s=Js(()=>r!==void 0?r:t.find(b=>b.active)?.id,[r,t]),[l,c]=tl(s),d=e!==void 0,m=d?e:l,p=Qs((b,v)=>{if(v.disabled){b.preventDefault();return}d||c(v.id),i?.(v.id,v),v.onClick?.(v.id),a?.(v.id,v);},[d,a,i]);return jsxRuntimeExports.jsx(H,{className:n,children:jsxRuntimeExports.jsx("nav",{className:o("flex w-16 flex-col items-center gap-[var(--inkblot-spacing-2)] border-r border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)] px-[var(--inkblot-spacing-2)] py-[var(--inkblot-spacing-4)]"),"aria-label":"Navigation",children:t.map(b=>{let v=m?b.id===m:!!b.active;return jsxRuntimeExports.jsxs("button",{type:"button",disabled:b.disabled,onClick:f=>p(f,b),"aria-current":v?"page":void 0,className:o("relative flex w-full flex-col items-center gap-[var(--inkblot-spacing-1)] rounded-[var(--inkblot-radius-lg)] border border-transparent px-[var(--inkblot-spacing-2)] py-[var(--inkblot-spacing-2)] transition-[background,border-color,color] duration-[var(--inkblot-duration-fast)] ease-[var(--inkblot-easing-default)]",v?"border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-primary)] text-[var(--inkblot-semantic-color-interactive-primary)]":"text-[var(--inkblot-semantic-color-text-tertiary)] hover:bg-[var(--inkblot-semantic-color-background-primary)] hover:text-[var(--inkblot-semantic-color-text-secondary)]","disabled:pointer-events-none disabled:opacity-[var(--inkblot-opacity-disabled)]"),children:[v?jsxRuntimeExports.jsx("span",{className:"absolute left-[-0.5rem] top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-[var(--inkblot-radius-full)] bg-[var(--inkblot-semantic-color-interactive-primary)]","aria-hidden":true}):null,jsxRuntimeExports.jsx("div",{className:"flex h-8 w-8 items-center justify-center [&>svg]:h-5 [&>svg]:w-5",children:b.icon}),b.label?jsxRuntimeExports.jsx("span",{className:"[font:var(--inkblot-semantic-typography-body-small)] font-medium",children:b.label}):null]},b.id)})})})}var ca={success:"text-[var(--inkblot-semantic-color-status-success)]",error:"text-[var(--inkblot-semantic-color-status-error)]",neutral:"text-[var(--inkblot-semantic-color-text-secondary)]"};function Je({items:t,className:e}){return jsxRuntimeExports.jsx("div",{className:o("grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",e),children:t.map(r=>jsxRuntimeExports.jsx(rl,{item:r},r.label))})}function rl({item:t}){let e=t.changeVariant??"neutral",r=ca[e];return jsxRuntimeExports.jsxs("div",{className:o("flex flex-col gap-1 rounded-[var(--inkblot-radius-lg)]","bg-[var(--inkblot-semantic-color-background-secondary)]","px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-4)]","border border-[var(--inkblot-semantic-color-border-subtle)]"),children:[jsxRuntimeExports.jsx("span",{className:o("uppercase tracking-wider","[font:var(--inkblot-semantic-typography-body-small)]","text-[var(--inkblot-semantic-color-text-secondary)]"),children:t.label}),jsxRuntimeExports.jsx("span",{className:o("[font:var(--inkblot-semantic-typography-heading-medium)]","text-[var(--inkblot-semantic-color-text-primary)]"),children:t.value}),t.change?jsxRuntimeExports.jsx("span",{className:o("[font:var(--inkblot-semantic-typography-body-small)]",r),children:t.change}):null]})}function da({items:t,className:e}){return jsxRuntimeExports.jsx("div",{className:o("grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",e),children:t.map(r=>jsxRuntimeExports.jsx(ol,{item:r},r.label))})}function ol({item:t}){let e=t.changeVariant??"neutral",r=ca[e],a=t.chartData??[],i=Math.max(...a,1);return jsxRuntimeExports.jsxs("div",{className:o("flex flex-col gap-2 rounded-[var(--inkblot-radius-lg)]","bg-[var(--inkblot-semantic-color-background-secondary)]","px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-4)]","border border-[var(--inkblot-semantic-color-border-subtle)]"),children:[jsxRuntimeExports.jsx("span",{className:o("uppercase tracking-wider","[font:var(--inkblot-semantic-typography-body-small)]","text-[var(--inkblot-semantic-color-text-secondary)]"),children:t.label}),jsxRuntimeExports.jsxs("div",{className:"flex items-end justify-between gap-2",children:[jsxRuntimeExports.jsx("span",{className:o("[font:var(--inkblot-semantic-typography-heading-medium)]","text-[var(--inkblot-semantic-color-text-primary)]"),children:t.value}),a.length>0?jsxRuntimeExports.jsx("div",{className:"flex h-8 items-end gap-0.5",children:a.map((n,s)=>jsxRuntimeExports.jsx("div",{className:"w-1 min-w-[2px] rounded-sm bg-[var(--inkblot-semantic-color-interactive-primary)] opacity-80",style:{height:`${n/i*100}%`,minHeight:4}},s))}):null]}),t.change?jsxRuntimeExports.jsx("span",{className:o("[font:var(--inkblot-semantic-typography-body-small)]",r),children:t.change}):null]})}function tr({tabs:t,activeTabId:e,onTabChange:r,className:a}){return jsxRuntimeExports.jsx("nav",{role:"tablist","aria-label":"Tabs",className:o("flex gap-0 pt-[var(--inkblot-spacing-2)]",a),children:t.map(i=>{let n=i.id===e;return jsxRuntimeExports.jsxs("button",{role:"tab","aria-selected":n,"aria-controls":`panel-${i.id}`,id:`tab-${i.id}`,type:"button",onClick:()=>r(i.id),className:o("relative px-[var(--inkblot-spacing-5)] py-[var(--inkblot-spacing-4)]","[font:var(--inkblot-semantic-typography-body-medium)]","transition-colors duration-[var(--inkblot-duration-fast)]","focus:outline-none focus:ring-2 focus:ring-[var(--inkblot-semantic-color-border-focus)] focus:ring-offset-2 focus:ring-offset-[var(--inkblot-semantic-color-background-primary)]",n?["font-semibold text-[var(--inkblot-semantic-color-text-primary)]","bg-[var(--inkblot-semantic-color-background-secondary)]","rounded-t-[var(--inkblot-radius-lg)]"]:["text-[var(--inkblot-semantic-color-text-secondary)]","hover:text-[var(--inkblot-semantic-color-text-primary)]","hover:bg-[var(--inkblot-semantic-color-background-secondary)]/50"]),children:[i.label,n?jsxRuntimeExports.jsx("span",{className:"absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-[var(--inkblot-semantic-color-interactive-primary)]","aria-hidden":true}):null]},i.id)})})}var ll={urgent:"bg-[var(--inkblot-semantic-color-status-error)]/20 text-[var(--inkblot-semantic-color-status-error)] border-[var(--inkblot-semantic-color-status-error)]/30",high:"bg-[var(--inkblot-semantic-color-status-warning)]/20 text-[var(--inkblot-semantic-color-status-warning)] border-[var(--inkblot-semantic-color-status-warning)]/30",medium:"bg-[var(--inkblot-semantic-color-status-success)]/10 text-[var(--inkblot-semantic-color-status-success)] border-[var(--inkblot-semantic-color-status-success)]/30",low:"bg-[var(--inkblot-semantic-color-background-tertiary)] text-[var(--inkblot-semantic-color-text-secondary)] border-[var(--inkblot-semantic-color-border-subtle)]"};function er({id:t,title:e,company:r,priority:a,date:i,assignee:n,completed:s=false,onToggle:l,onClick:c,className:d}){let m=ll[a];return jsxRuntimeExports.jsxs("div",{role:"button",tabIndex:0,onClick:()=>c?.(t),onKeyDown:p=>{(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),c?.(t));},className:o("flex items-center gap-[var(--inkblot-spacing-4)] rounded-[var(--inkblot-radius-lg)]","border border-[var(--inkblot-semantic-color-border-subtle)]","bg-[var(--inkblot-semantic-color-background-secondary)]","px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-3)]","transition-colors duration-[var(--inkblot-duration-fast)]","hover:border-[var(--inkblot-semantic-color-border-default)] hover:bg-[var(--inkblot-semantic-color-background-tertiary)]","focus:outline-none focus:ring-2 focus:ring-[var(--inkblot-semantic-color-border-focus)] focus:ring-offset-2 focus:ring-offset-[var(--inkblot-semantic-color-background-primary)]","cursor-pointer",d),children:[jsxRuntimeExports.jsx("button",{type:"button",onClick:p=>{p.stopPropagation(),l?.(t);},"aria-label":s?"Mark as incomplete":"Mark as complete","aria-pressed":s,className:o("flex h-5 w-5 shrink-0 items-center justify-center rounded-full","transition-colors duration-[var(--inkblot-duration-fast)]","focus:outline-none focus:ring-2 focus:ring-[var(--inkblot-semantic-color-border-focus)] focus:ring-offset-2 focus:ring-offset-[var(--inkblot-semantic-color-background-primary)]",s?"bg-[var(--inkblot-semantic-color-interactive-primary)] text-[var(--inkblot-semantic-color-text-inverse)]":"border-2 border-[var(--inkblot-semantic-color-border-default)] bg-transparent"),children:s?jsxRuntimeExports.jsx(Check,{className:"h-3 w-3",strokeWidth:3}):null}),jsxRuntimeExports.jsxs("div",{className:"min-w-0 flex-1",children:[jsxRuntimeExports.jsx("p",{className:o("[font:var(--inkblot-semantic-typography-body-large-bold)]","text-[var(--inkblot-semantic-color-text-primary)]",s&&"line-through text-[var(--inkblot-semantic-color-text-secondary)]"),children:e}),jsxRuntimeExports.jsx("p",{className:o("mt-0.5 [font:var(--inkblot-semantic-typography-body-small)]","text-[var(--inkblot-semantic-color-text-secondary)]",s&&"line-through"),children:r})]}),jsxRuntimeExports.jsxs("div",{className:"flex shrink-0 flex-wrap items-center justify-end gap-[var(--inkblot-spacing-3)]",children:[jsxRuntimeExports.jsx("span",{className:o("rounded-[var(--inkblot-radius-md)] border px-[var(--inkblot-spacing-2)] py-[var(--inkblot-spacing-1)]","[font:var(--inkblot-semantic-typography-body-small)] font-medium",m),children:a.charAt(0).toUpperCase()+a.slice(1)}),jsxRuntimeExports.jsxs("span",{className:o("flex items-center gap-1","[font:var(--inkblot-semantic-typography-body-small)]","text-[var(--inkblot-semantic-color-text-primary)]"),children:[jsxRuntimeExports.jsx(Calendar,{className:"h-4 w-4 shrink-0 text-[var(--inkblot-semantic-color-text-tertiary)]"}),i]}),jsxRuntimeExports.jsxs("span",{className:o("flex items-center gap-1","[font:var(--inkblot-semantic-typography-body-small)]","text-[var(--inkblot-semantic-color-text-primary)]"),children:[jsxRuntimeExports.jsx(User,{className:"h-4 w-4 shrink-0 text-[var(--inkblot-semantic-color-text-tertiary)]"}),n]})]})]})}var pl={todo:CircleDot,in_progress:Clock,done:CircleCheckBig};function rr({sections:t,onTaskToggle:e,onTaskClick:r,className:a}){return jsxRuntimeExports.jsx("div",{className:o("flex flex-col gap-[var(--inkblot-spacing-8)]",a),children:t.map(i=>{let n=pl[i.id],s=i.id==="done";return jsxRuntimeExports.jsxs("section",{className:"flex flex-col gap-[var(--inkblot-spacing-4)]",children:[jsxRuntimeExports.jsxs("div",{className:"flex items-center gap-[var(--inkblot-spacing-3)]",children:[jsxRuntimeExports.jsx(n,{className:o("h-5 w-5 shrink-0",s?"text-[var(--inkblot-semantic-color-interactive-primary)]":"text-[var(--inkblot-semantic-color-text-secondary)]")}),jsxRuntimeExports.jsx("h2",{className:o("[font:var(--inkblot-semantic-typography-body-large-bold)]","text-[var(--inkblot-semantic-color-text-primary)]"),children:i.label}),jsxRuntimeExports.jsx("span",{className:o("rounded-[var(--inkblot-radius-full)] px-[var(--inkblot-spacing-2)] py-[var(--inkblot-spacing-1)]","bg-[var(--inkblot-semantic-color-background-secondary)]","[font:var(--inkblot-semantic-typography-body-small)] font-medium","text-[var(--inkblot-semantic-color-text-primary)]"),children:i.count})]}),jsxRuntimeExports.jsx("div",{className:"flex flex-col gap-[var(--inkblot-spacing-3)]",children:i.tasks.map(l=>jsxRuntimeExports.jsx(er,{...l,completed:s,onToggle:e,onClick:r},l.id))})]},i.id)})})}function vl(t){return t>=.8?"bg-[var(--inkblot-semantic-color-status-success)]":t>=.5?"bg-[var(--inkblot-semantic-color-status-info)]":t>=.2?"bg-[var(--inkblot-semantic-color-status-warning)]":"bg-[var(--inkblot-semantic-color-status-error)]"}var fl={EMAIL_OPENED:Mail,EMAIL_SENT:Mail,INVOICE_PAID:FileText,INVOICE_OVERDUE:FileText,CONTRACT_SIGNED:FileText,STAGE_CHANGED:Zap,CALL_COMPLETED:Phone,PHONE_CALL:Phone,RELATIONSHIP_DETECTED:Link2};function gl(t){return fl[t]??FileText}function kl(t){return t.metadata?.description??t.event_type.replace(/_/g," ").toLowerCase()}function yl(t){return t.metadata?.details??`${t.actor} - ${t.subject}`}function ar({events:t,onEntitySelect:e,findEntity:r,emptyMessage:a="No recent activity",className:i}){let n=e?s=>{let l=r?.(s.subject)??r?.(s.actor);l&&e(l);}:void 0;return jsxRuntimeExports.jsx(H,{children:jsxRuntimeExports.jsx("div",{className:o("space-y-2",i),children:t.length===0?jsxRuntimeExports.jsx("p",{className:"py-6 text-center text-sm text-[var(--inkblot-semantic-color-text-tertiary)]",children:a}):t.map(s=>{let c=!!(r?.(s.subject)??r?.(s.actor))&&!!n,d=gl(s.event_type),m=jsxRuntimeExports.jsxs("div",{className:"flex flex-1 items-center gap-3",children:[jsxRuntimeExports.jsx(d,{className:"h-4 w-4 shrink-0 text-[var(--inkblot-semantic-color-text-secondary)]","aria-hidden":true}),jsxRuntimeExports.jsx("div",{className:`h-2 w-2 shrink-0 rounded-full ${vl(s.confidence_score)}`,"aria-hidden":true}),jsxRuntimeExports.jsxs("div",{className:"min-w-0 flex-1",children:[jsxRuntimeExports.jsx("p",{className:"text-sm font-medium text-[var(--inkblot-semantic-color-text-primary)]",children:kl(s)}),jsxRuntimeExports.jsx("p",{className:"text-xs text-[var(--inkblot-semantic-color-text-secondary)]",children:yl(s)})]}),jsxRuntimeExports.jsx("span",{className:"shrink-0 text-xs text-[var(--inkblot-semantic-color-text-tertiary)]",children:s.timestamp})]}),p=s.id??`${s.actor}-${s.subject}-${s.timestamp}`;return jsxRuntimeExports.jsx("div",{children:c?jsxRuntimeExports.jsx("button",{type:"button",onClick:()=>n(s),className:"flex w-full items-center gap-3 rounded-[var(--inkblot-radius-md)] bg-[var(--inkblot-semantic-color-background-secondary)] p-3 text-left transition-colors duration-[var(--inkblot-duration-fast)] hover:bg-[var(--inkblot-semantic-color-background-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--inkblot-semantic-color-border-focus)] focus:ring-offset-2 focus:ring-offset-[var(--inkblot-semantic-color-background-primary)]",children:m}):jsxRuntimeExports.jsx("div",{className:"flex w-full items-center gap-3 rounded-[var(--inkblot-radius-md)] bg-[var(--inkblot-semantic-color-background-secondary)] p-3",children:m})},p)})})})}const {NavLink:xl} = await importShared('react-router-dom');
var Ml=[{id:"home",path:"/",icon:ClipboardList,label:"Home"},{id:"intelligence",path:"/intelligence",icon:Brain,label:"Intelligence"},{id:"pipeline",path:"/pipeline",icon:ChartColumn,label:"Pipeline"},{id:"graph",path:"/graph",icon:Network,label:"Graph"},{id:"events",path:"/events",icon:Activity,label:"Events"},{id:"settings",path:"/settings",icon:Settings,label:"Settings"}];function fa({items:t=Ml,brandLogo:e,brandTitle:r="Command Canvas \u2014 AI-native Interface",className:a}){return jsxRuntimeExports.jsx(H,{children:jsxRuntimeExports.jsxs("nav",{className:o("flex h-full flex-col gap-[var(--inkblot-spacing-4)] border-r border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)] p-[var(--inkblot-spacing-3)]",a),children:[jsxRuntimeExports.jsx("div",{className:"flex flex-col items-center gap-2",children:jsxRuntimeExports.jsx("div",{className:"flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--inkblot-radius-lg)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-primary)] shadow-[var(--inkblot-shadow-sm)]",title:r,children:e??jsxRuntimeExports.jsx(Sparkles,{className:"h-5 w-5 text-[var(--inkblot-semantic-color-interactive-primary)]","aria-hidden":true})})}),jsxRuntimeExports.jsx("div",{className:"flex flex-1 flex-col gap-[var(--inkblot-spacing-2)]",children:t.map(i=>{let n=i.icon;return jsxRuntimeExports.jsx(xl,{to:i.path,end:i.path==="/","aria-label":i.label,className:({isActive:s})=>`flex items-center justify-center gap-[var(--inkblot-spacing-2)] rounded-[var(--inkblot-radius-lg)] border border-transparent px-[var(--inkblot-spacing-2)] py-[var(--inkblot-spacing-2)] transition-[background,border-color,color] duration-[var(--inkblot-duration-fast)] ease-[var(--inkblot-easing-default)] ${s?"border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-primary)] text-[var(--inkblot-semantic-color-interactive-primary)]":"text-[var(--inkblot-semantic-color-text-secondary)] hover:border-[var(--inkblot-semantic-color-border-default)]/60 hover:bg-[var(--inkblot-semantic-color-background-primary)]"}`,children:jsxRuntimeExports.jsx(n,{size:20,"aria-hidden":true})},i.id)})})]})})}const {useRef:Il} = await importShared('react');
function ga({prompt:t,onPromptChange:e,onSubmit:r,onFilesAttach:a,isProcessing:i,placeholder:n="Ask anything \u2014 deals, contacts, forecasts...",subtitle:s="Citron OS v1.0 \u2014 AI-native Revenue & Operations Platform",className:l}){let c=Il(null),d=p=>{p.key==="Enter"&&!p.shiftKey&&(p.preventDefault(),r());},m=p=>{let b=p.target.files;b&&b.length>0&&a&&a(Array.from(b)),p.target.value="";};return jsxRuntimeExports.jsxs("div",{className:o("border-t border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)] px-[var(--inkblot-spacing-6)] py-[var(--inkblot-spacing-4)]",l),children:[jsxRuntimeExports.jsxs("div",{className:"flex items-start gap-[var(--inkblot-spacing-3)]",children:[jsxRuntimeExports.jsx("div",{className:"mt-[var(--inkblot-spacing-1)] flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--inkblot-radius-lg)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-primary)]",children:jsxRuntimeExports.jsx(Sparkles,{className:"h-5 w-5 text-[var(--inkblot-semantic-color-interactive-primary)]","aria-hidden":true})}),jsxRuntimeExports.jsx("div",{className:"flex-1",children:jsxRuntimeExports.jsxs("div",{className:o("flex items-end gap-[var(--inkblot-spacing-2)] rounded-[var(--inkblot-radius-xl)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)] p-[var(--inkblot-spacing-2)] shadow-[var(--inkblot-shadow-sm)]",i&&"pointer-events-none"),"aria-busy":i,children:[jsxRuntimeExports.jsx("input",{ref:c,type:"file",multiple:true,onChange:m,className:"sr-only","aria-hidden":true}),jsxRuntimeExports.jsx("button",{type:"button",onClick:()=>c.current?.click(),disabled:i,className:o("flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--inkblot-radius-full)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-primary)] text-[var(--inkblot-semantic-color-text-tertiary)] transition-[background,border-color,color] duration-[var(--inkblot-duration-fast)]","hover:border-[var(--inkblot-semantic-color-border-strong)] hover:bg-[var(--inkblot-semantic-color-background-tertiary)] hover:text-[var(--inkblot-semantic-color-text-secondary)]","focus:outline-none focus:ring-2 focus:ring-[var(--inkblot-semantic-color-border-focus)] focus:ring-offset-2 focus:ring-offset-[var(--inkblot-semantic-color-background-secondary)]","disabled:pointer-events-none disabled:opacity-[var(--inkblot-opacity-disabled)]"),"aria-label":"Attach files",children:jsxRuntimeExports.jsx(Paperclip,{size:18,strokeWidth:1.7,"aria-hidden":true})}),jsxRuntimeExports.jsx("textarea",{value:t,onChange:p=>e(p.target.value),onKeyDown:d,placeholder:n,rows:1,disabled:i,className:o("min-h-[2.25rem] min-w-0 flex-1 resize-none bg-transparent py-[var(--inkblot-spacing-2)] [font:var(--inkblot-semantic-typography-body-default)] text-[var(--inkblot-semantic-color-text-primary)] placeholder:text-[var(--inkblot-semantic-color-text-tertiary)]","focus:outline-none","disabled:cursor-not-allowed disabled:opacity-[var(--inkblot-opacity-disabled)]")}),jsxRuntimeExports.jsx("div",{className:"flex h-9 w-9 shrink-0 items-center justify-center",children:i?jsxRuntimeExports.jsx("div",{className:"flex h-8 w-8 items-center justify-center rounded-[var(--inkblot-radius-full)] bg-[var(--inkblot-semantic-color-interactive-primary)]",children:jsxRuntimeExports.jsx(LoaderCircle,{size:16,strokeWidth:2,className:"animate-spin text-[var(--inkblot-semantic-color-text-inverse)]","aria-hidden":true})}):jsxRuntimeExports.jsx("button",{type:"button",onClick:r,className:o("flex h-8 w-8 items-center justify-center rounded-[var(--inkblot-radius-full)] bg-[var(--inkblot-semantic-color-interactive-primary)] text-[var(--inkblot-semantic-color-text-inverse)] transition-[background,box-shadow] duration-[var(--inkblot-duration-fast)]","hover:bg-[var(--inkblot-semantic-color-interactive-primary-hover)]","focus:outline-none focus:ring-2 focus:ring-[var(--inkblot-semantic-color-border-focus)] focus:ring-offset-2 focus:ring-offset-[var(--inkblot-semantic-color-background-secondary)]"),"aria-label":"Send",children:jsxRuntimeExports.jsx(Send,{size:16,strokeWidth:2,"aria-hidden":true})})})]})})]}),s&&jsxRuntimeExports.jsx("p",{className:"mt-[var(--inkblot-spacing-2)] [font:var(--inkblot-semantic-typography-body-small)] text-[var(--inkblot-semantic-color-text-tertiary)]",children:s})]})}function ka({events:t,title:e="Event Stream",showLive:r=true,className:a}){return jsxRuntimeExports.jsx(H,{children:jsxRuntimeExports.jsxs("div",{className:o("flex h-full flex-col bg-[var(--inkblot-semantic-color-background-secondary)]",a),children:[jsxRuntimeExports.jsxs("div",{className:"flex shrink-0 items-center justify-between border-b border-[var(--inkblot-semantic-color-border-default)] px-4 py-3",children:[jsxRuntimeExports.jsx("span",{className:"text-xs font-medium uppercase tracking-wider text-[var(--inkblot-semantic-color-text-secondary)]",children:e}),r&&jsxRuntimeExports.jsxs("div",{className:"flex items-center gap-2",children:[jsxRuntimeExports.jsx("div",{className:"h-2 w-2 rounded-full bg-[var(--inkblot-semantic-color-status-success)]"}),jsxRuntimeExports.jsx("span",{className:"text-xs text-[var(--inkblot-semantic-color-status-success)]",children:"Live"})]})]}),jsxRuntimeExports.jsx("div",{className:"flex-1 overflow-auto p-4",children:jsxRuntimeExports.jsx(ar,{events:t})})]})})}var Hl=[{label:"Pipeline Health",value:76},{label:"Churn Risk",value:28},{label:"Expansion Signal",value:64},{label:"Team Velocity",value:83}],Bl=[{title:"Acme Corp likely to close within 14 days",description:"Based on email sentiment, meeting cadence, and champion engagement patterns.",confidence:89},{title:"Churn risk detected: GlobalTech Inc",description:"Declining touchpoints and support ticket volume suggest potential churn.",confidence:74},{title:"Expansion opportunity: TechVentures",description:"Usage patterns and NPS scores indicate readiness for upsell conversation.",confidence:81}];function ya({loading:t,kpiCards:e=Hl,aiInsights:r=Bl,title:a="Intelligence Lab",subtitle:i="AI-generated insights - Updated 3 min ago",className:n}){return jsxRuntimeExports.jsxs("div",{className:o("flex h-full flex-col gap-4 overflow-y-auto p-4",n),children:[jsxRuntimeExports.jsxs("div",{children:[jsxRuntimeExports.jsx("h1",{className:"text-2xl font-semibold text-[var(--inkblot-semantic-color-text-primary)]",children:a}),jsxRuntimeExports.jsx("p",{className:"text-sm text-[var(--inkblot-semantic-color-text-tertiary)]",children:i})]}),jsxRuntimeExports.jsx(Xe,{loading:t,title:"",children:jsxRuntimeExports.jsx(H,{children:jsxRuntimeExports.jsxs("div",{className:"flex flex-col gap-4",children:[jsxRuntimeExports.jsx("div",{className:"grid grid-cols-2 gap-4 lg:grid-cols-4",children:e.map(s=>jsxRuntimeExports.jsx(je,{label:s.label,value:s.value,subtext:s.subtext,trend:s.trend},s.label))}),jsxRuntimeExports.jsxs("div",{children:[jsxRuntimeExports.jsx("h2",{className:"mb-4 border-b border-[var(--inkblot-semantic-color-border-default)] pb-2 text-sm font-bold uppercase tracking-wider text-[var(--inkblot-semantic-color-text-primary)]",children:"AI Insights"}),jsxRuntimeExports.jsx("div",{className:"flex flex-col gap-4",children:r.map(s=>jsxRuntimeExports.jsx(H,{children:jsxRuntimeExports.jsxs("div",{className:"flex items-start justify-between gap-4 rounded-[var(--inkblot-radius-lg)] bg-[var(--inkblot-semantic-color-background-secondary)] p-4",children:[jsxRuntimeExports.jsxs("div",{className:"min-w-0 flex-1",children:[jsxRuntimeExports.jsx("h3",{className:"font-semibold text-[var(--inkblot-semantic-color-text-primary)]",children:s.title}),jsxRuntimeExports.jsx("p",{className:"mt-1 text-sm text-[var(--inkblot-semantic-color-text-tertiary)]",children:s.description})]}),jsxRuntimeExports.jsxs("div",{className:"flex shrink-0 flex-col items-center",children:[jsxRuntimeExports.jsx("span",{className:"text-lg font-bold text-[var(--inkblot-semantic-color-text-primary)]",children:s.confidence}),jsxRuntimeExports.jsx("span",{className:"text-xs text-[var(--inkblot-semantic-color-text-tertiary)]",children:"Conf."})]})]})},s.title))})]})]})})})]})}function xa({navigation:t,eventStream:e,commandBar:r,children:a,className:i,eventStreamWidth:n="w-80"}){return jsxRuntimeExports.jsxs("div",{className:o("flex h-screen w-screen overflow-hidden bg-[var(--inkblot-semantic-color-background-primary)]",i),children:[jsxRuntimeExports.jsx("aside",{className:"flex h-full w-16 shrink-0 flex-col border-r border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)]",children:t}),jsxRuntimeExports.jsx("main",{className:"flex flex-1 flex-col overflow-hidden",children:jsxRuntimeExports.jsxs("div",{className:"flex min-h-0 flex-1",children:[jsxRuntimeExports.jsxs("div",{className:"flex min-h-0 flex-1 flex-col overflow-hidden bg-[var(--inkblot-semantic-color-background-primary)]",children:[jsxRuntimeExports.jsx("div",{className:"flex-1 overflow-auto px-[var(--inkblot-spacing-6)] py-[var(--inkblot-spacing-6)]",children:a}),jsxRuntimeExports.jsx("div",{className:"shrink-0 border-t border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)]",children:r})]}),e&&jsxRuntimeExports.jsx("aside",{className:o("flex h-full shrink-0 flex-col border-l border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)] p-[var(--inkblot-spacing-4)]",n),children:e})]})})]})}const {useState:Kr} = await importShared('react');
var Vl=["urgent","high","medium","low"];function ir({onConfirm:t,onCancel:e,className:r}){let[a,i]=Kr(""),[n,s]=Kr(""),[l,c]=Kr("medium");return jsxRuntimeExports.jsxs("form",{onSubmit:m=>{m.preventDefault();let p=a.trim();p&&(t({title:p,company:n.trim()||void 0,priority:l}),i(""),s(""),c("medium"));},className:o("flex flex-col gap-[var(--inkblot-spacing-4)] rounded-[var(--inkblot-radius-lg)]","border border-[var(--inkblot-semantic-color-border-default)]","bg-[var(--inkblot-semantic-color-background-secondary)]","p-[var(--inkblot-spacing-4)]",r),children:[jsxRuntimeExports.jsx("input",{type:"text",value:a,onChange:m=>i(m.target.value),placeholder:"Task title...",autoFocus:true,required:true,className:o("min-h-[var(--inkblot-size-touch-target-min)] w-full rounded-[var(--inkblot-radius-md)]","border border-[var(--inkblot-semantic-color-border-default)]","bg-[var(--inkblot-semantic-color-background-primary)]","px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-2)]","[font:var(--inkblot-semantic-typography-body-medium)]","text-[var(--inkblot-semantic-color-text-primary)] placeholder:text-[var(--inkblot-semantic-color-text-tertiary)]","focus:outline-none focus:ring-2 focus:ring-[var(--inkblot-semantic-color-border-focus)]")}),jsxRuntimeExports.jsx("input",{type:"text",value:n,onChange:m=>s(m.target.value),placeholder:"Company (optional)",className:o("min-h-[var(--inkblot-size-touch-target-min)] w-full rounded-[var(--inkblot-radius-md)]","border border-[var(--inkblot-semantic-color-border-default)]","bg-[var(--inkblot-semantic-color-background-primary)]","px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-2)]","[font:var(--inkblot-semantic-typography-body-medium)]","text-[var(--inkblot-semantic-color-text-primary)] placeholder:text-[var(--inkblot-semantic-color-text-tertiary)]","focus:outline-none focus:ring-2 focus:ring-[var(--inkblot-semantic-color-border-focus)]")}),jsxRuntimeExports.jsx("div",{className:"flex flex-wrap gap-[var(--inkblot-spacing-2)]",children:Vl.map(m=>jsxRuntimeExports.jsx("button",{type:"button",onClick:()=>c(m),className:o("rounded-[var(--inkblot-radius-md)] px-[var(--inkblot-spacing-2)] py-[var(--inkblot-spacing-1)]","[font:var(--inkblot-semantic-typography-body-small)] font-medium","transition-colors duration-[var(--inkblot-duration-fast)]",l===m?"bg-[var(--inkblot-semantic-color-interactive-primary)] text-[var(--inkblot-semantic-color-text-inverse)]":"bg-[var(--inkblot-semantic-color-background-tertiary)] text-[var(--inkblot-semantic-color-text-secondary)] hover:bg-[var(--inkblot-semantic-color-background-tertiary)]/80"),children:m.charAt(0).toUpperCase()+m.slice(1)},m))}),jsxRuntimeExports.jsxs("div",{className:"flex justify-end gap-[var(--inkblot-spacing-2)]",children:[jsxRuntimeExports.jsxs("button",{type:"button",onClick:e,className:o("inline-flex min-h-[var(--inkblot-size-touch-target-min)] items-center justify-center gap-2 rounded-[var(--inkblot-radius-lg)]","border border-[var(--inkblot-semantic-color-border-default)]","bg-[var(--inkblot-semantic-color-interactive-secondary)]","px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-2)]","[font:var(--inkblot-semantic-typography-body-medium)] font-medium","text-[var(--inkblot-semantic-color-text-primary)]","hover:bg-[var(--inkblot-semantic-color-interactive-secondary-hover)]","focus:outline-none focus:ring-2 focus:ring-[var(--inkblot-semantic-color-border-focus)]"),children:[jsxRuntimeExports.jsx(X,{className:"h-4 w-4"}),"Cancel"]}),jsxRuntimeExports.jsxs("button",{type:"submit",disabled:!a.trim(),className:o("inline-flex min-h-[var(--inkblot-size-touch-target-min)] items-center justify-center gap-2 rounded-[var(--inkblot-radius-lg)]","bg-[var(--inkblot-semantic-color-interactive-primary)]","px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-2)]","[font:var(--inkblot-semantic-typography-body-medium)] font-medium","text-[var(--inkblot-semantic-color-text-inverse)]","hover:bg-[var(--inkblot-semantic-color-interactive-primary-hover)] active:bg-[var(--inkblot-semantic-color-interactive-primary-active)]","focus:outline-none focus:ring-2 focus:ring-[var(--inkblot-semantic-color-border-focus)]","disabled:opacity-[var(--inkblot-opacity-disabled)] disabled:cursor-not-allowed"),children:[jsxRuntimeExports.jsx(Check,{className:"h-4 w-4"}),"Add Task"]})]})]})}const {useState:mr,useMemo:Na} = await importShared('react');
const {useMemo:Wl,useState:_l} = await importShared('react');
const {useState:Fl} = await importShared('react');
var Gl={sm:"h-8 px-3 text-xs",md:"h-10 px-4 text-sm",lg:"h-11 px-5 text-sm"};function Wr({pressed:t,defaultPressed:e=false,onPressedChange:r,size:a="md",variant:i="default",disabled:n,className:s,children:l,...c}){let[d,m]=Fl(e),p=t??d;return jsxRuntimeExports.jsx("button",{type:"button","aria-pressed":p,disabled:n,onClick:()=>{if(n)return;let v=!p;t===void 0&&m(v),r?.(v);},className:o("inline-flex min-h-[var(--inkblot-size-touch-target-min)] items-center justify-center rounded-[var(--inkblot-radius-md)] border font-medium transition-colors duration-[var(--inkblot-duration-fast)] ease-[var(--inkblot-easing-default)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--inkblot-semantic-color-border-focus)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-[var(--inkblot-opacity-disabled)]",Gl[a],i==="default"?p?"border-[var(--inkblot-semantic-color-interactive-primary)] bg-[var(--inkblot-semantic-color-interactive-primary)] text-[var(--inkblot-semantic-color-text-inverse)]":"border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)] text-[var(--inkblot-semantic-color-text-primary)] hover:bg-[var(--inkblot-semantic-color-background-tertiary)]":p?"border-[var(--inkblot-semantic-color-text-primary)] bg-[var(--inkblot-semantic-color-background-tertiary)] text-[var(--inkblot-semantic-color-text-primary)]":"border-[var(--inkblot-semantic-color-border-default)] bg-transparent text-[var(--inkblot-semantic-color-text-secondary)] hover:text-[var(--inkblot-semantic-color-text-primary)]",s),...c,children:l})}function _r({type:t="single",items:e,value:r,defaultValue:a,onValueChange:i,className:n,...s}){let l=a??(t==="single"?"":[]),[c,d]=_l(l),m=r??c,p=Wl(()=>{if(t==="single"){let f=typeof m=="string"?m:"";return new Set(f?[f]:[])}let v=Array.isArray(m)?m:[];return new Set(v)},[m,t]),b=v=>{if(t==="single"){let g=p.has(v)?"":v;r===void 0&&d(g),i?.(g);return}let f=Array.isArray(m)?m:[],w=f.includes(v)?f.filter(g=>g!==v):[...f,v];r===void 0&&d(w),i?.(w);};return jsxRuntimeExports.jsx("div",{className:o("inline-flex items-center gap-2 rounded-[var(--inkblot-radius-lg)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-tertiary)] p-1",n),...s,children:e.map(v=>{let f=v.icon;return jsxRuntimeExports.jsxs(Wr,{pressed:p.has(v.id),onPressedChange:()=>b(v.id),disabled:v.disabled,size:"sm",children:[f?jsxRuntimeExports.jsx(f,{className:"mr-2 size-4"}):null,v.label]},v.id)})})}const {useCallback:Jl,useMemo:tc} = await importShared('react');
const {useState:Ul} = await importShared('react');
var ql={sm:"h-8 w-8 text-xs",md:"h-10 w-10 text-sm",lg:"h-14 w-14 text-base"};function $r({src:t,alt:e="Avatar",fallback:r,size:a="md",disabled:i=false,className:n}){let[s,l]=Ul(false),c=!!(t&&!s);return jsxRuntimeExports.jsx("span",{"aria-disabled":i,className:o("inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[var(--inkblot-radius-full)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-tertiary)] text-[var(--inkblot-semantic-color-text-secondary)]",i&&"opacity-[var(--inkblot-opacity-disabled)]",ql[a],n),children:c?jsxRuntimeExports.jsx("img",{src:t,alt:e,onError:()=>l(true),className:"h-full w-full object-cover"}):r?jsxRuntimeExports.jsx("span",{className:"font-medium uppercase",children:r.slice(0,2)}):jsxRuntimeExports.jsx(User,{className:"h-4 w-4"})})}var Xl={low:"bg-[var(--inkblot-semantic-color-status-info)]",medium:"bg-[var(--inkblot-semantic-color-status-success)]",high:"bg-[var(--inkblot-semantic-color-status-warning)]",urgent:"bg-[var(--inkblot-semantic-color-status-error)]"};function lr({task:t,index:e,className:r}){let a=t.jiraKey??`TASK-${t.id}`;return jsxRuntimeExports.jsx(PublicDraggable,{draggableId:t.id,index:e,children:(i,n)=>jsxRuntimeExports.jsxs("div",{ref:i.innerRef,...i.draggableProps,...i.dragHandleProps,className:o("relative flex cursor-grab flex-col gap-[var(--inkblot-spacing-3)] rounded-[var(--inkblot-radius-lg)] border border-[var(--inkblot-semantic-color-border-default)]","bg-[var(--inkblot-semantic-color-background-secondary)] p-[var(--inkblot-spacing-4)] shadow-[var(--inkblot-shadow-sm)]","active:cursor-grabbing",n.isDragging&&"shadow-[var(--inkblot-shadow-lg)] ring-2 ring-[var(--inkblot-semantic-color-border-focus)]",r),children:[jsxRuntimeExports.jsx("div",{className:"absolute right-[var(--inkblot-spacing-3)] top-[var(--inkblot-spacing-3)] h-8 w-1 rounded-[var(--inkblot-radius-sm)]",children:jsxRuntimeExports.jsx("span",{className:o("block h-full w-full rounded-[var(--inkblot-radius-sm)]",Xl[t.priority])})}),jsxRuntimeExports.jsx("p",{className:o("pr-[var(--inkblot-spacing-4)] text-[var(--inkblot-semantic-color-text-primary)]","[font:var(--inkblot-semantic-typography-body-medium)] font-semibold"),children:t.title}),jsxRuntimeExports.jsx("p",{className:"text-[var(--inkblot-semantic-color-text-tertiary)] [font:var(--inkblot-semantic-typography-body-small)]",children:t.company}),jsxRuntimeExports.jsxs("div",{className:"flex items-end justify-between gap-[var(--inkblot-spacing-2)]",children:[jsxRuntimeExports.jsxs("div",{className:"flex flex-col gap-0.5",children:[jsxRuntimeExports.jsx("span",{className:"text-[var(--inkblot-semantic-color-text-tertiary)] [font:var(--inkblot-semantic-typography-body-small)]",children:a}),t.date?jsxRuntimeExports.jsx("span",{className:"text-[var(--inkblot-semantic-color-text-secondary)] [font:var(--inkblot-semantic-typography-body-small)]",children:t.date}):null]}),jsxRuntimeExports.jsx($r,{size:"sm",fallback:t.assignee.replace(/\s/g,"").slice(0,2).toUpperCase(),alt:t.assignee})]})]})})}function cr({columnId:t,title:e,count:r,children:a,className:i}){return jsxRuntimeExports.jsxs("div",{className:o("flex min-w-[min(100%,280px)] flex-1 flex-col rounded-[var(--inkblot-radius-lg)] border border-[var(--inkblot-semantic-color-border-default)]","bg-[var(--inkblot-semantic-color-background-tertiary)]",i),children:[jsxRuntimeExports.jsxs("header",{className:o("flex items-center justify-between gap-[var(--inkblot-spacing-3)] border-b border-[var(--inkblot-semantic-color-border-default)]","bg-[var(--inkblot-semantic-color-background-secondary)] px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-3)]"),children:[jsxRuntimeExports.jsx("h2",{className:o("text-[var(--inkblot-semantic-color-text-secondary)] [font:var(--inkblot-semantic-typography-body-small)]","font-semibold uppercase tracking-wide"),children:e}),jsxRuntimeExports.jsx("span",{className:o("min-w-[var(--inkblot-size-touch-target-min)] rounded-[var(--inkblot-radius-md)] px-[var(--inkblot-spacing-2)] py-0.5 text-center","bg-[var(--inkblot-semantic-color-background-tertiary)] text-[var(--inkblot-semantic-color-text-primary)]","[font:var(--inkblot-semantic-typography-body-small)] font-medium"),children:r})]}),jsxRuntimeExports.jsx(ConnectedDroppable,{droppableId:t,children:(n,s)=>jsxRuntimeExports.jsxs("div",{ref:n.innerRef,...n.droppableProps,className:o("flex min-h-[200px] flex-1 flex-col gap-[var(--inkblot-spacing-3)] p-[var(--inkblot-spacing-3)]",s.isDraggingOver&&"bg-[var(--inkblot-semantic-color-interactive-secondary)]/30"),children:[a,n.placeholder]})})]})}var ec=[{id:"todo",title:"TO DO"},{id:"in_progress",title:"IN PROGRESS"},{id:"done",title:"DONE"}];function rc(t,e){let{destination:r,source:a,draggableId:i}=e;if(!r||a.droppableId===r.droppableId&&a.index===r.index)return t;let n=r.droppableId,s=t.find(b=>b.id===i);if(!s)return t;let l=t.filter(b=>b.id!==i),c={...s,status:n},m=[...l.filter(b=>b.status===n)];return m.splice(r.index,0,c),["todo","in_progress","done"].flatMap(b=>b===n?m:l.filter(v=>v.status===b))}function ae({tasks:t,onTasksChange:e,className:r}){let a=Jl(n=>{e(rc(t,n));},[t,e]),i=tc(()=>{let n={todo:[],in_progress:[],done:[]};for(let s of t)n[s.status].push(s);return n},[t]);return jsxRuntimeExports.jsx(DragDropContext,{onDragEnd:a,children:jsxRuntimeExports.jsx("div",{className:o("flex w-full flex-col gap-[var(--inkblot-spacing-4)] lg:flex-row lg:items-start lg:overflow-x-auto",r),children:ec.map(n=>{let s=i[n.id];return jsxRuntimeExports.jsx(cr,{columnId:n.id,title:n.title,count:s.length,children:s.map((l,c)=>jsxRuntimeExports.jsx(lr,{task:l,index:c},l.id))},n.id)})})})}function Pt(t,e,r="You",a){let n=new Date().toLocaleDateString("en-US",{month:"short",day:"numeric"})||"Today";return {id:e,title:t.title,company:t.company??"Unassigned",priority:t.priority??"medium",date:n,assignee:r,status:"todo",jiraKey:a}}function ic(t){let e={todo:t.filter(r=>r.status==="todo"),in_progress:t.filter(r=>r.status==="in_progress"),done:t.filter(r=>r.status==="done")};return [{id:"todo",label:"TO DO",count:e.todo.length,tasks:e.todo},{id:"in_progress",label:"IN PROGRESS",count:e.in_progress.length,tasks:e.in_progress},{id:"done",label:"DONE",count:e.done.length,tasks:e.done}]}var St=[Pt({title:"Follow up with Sarah Chen on proposal",company:"Acme Corp",priority:"high"},"1","You","CRM-104"),Pt({title:"Schedule demo with engineering team",company:"TechStart Inc",priority:"medium"},"2","Alex M.","CRM-112"),Pt({title:"Prepare quarterly report slides",company:"GlobalTech",priority:"low"},"3","Sam R.","CRM-98"),Pt({title:"Review Q1 marketing budget",company:"TechStart Inc",priority:"medium"},"4","Jamie L.","CRM-120"),Pt({title:"Draft partnership agreement",company:"Enterprise Co",priority:"urgent"},"5","You","CRM-88"),Pt({title:"Send contract to legal team",company:"GlobalTech",priority:"low"},"6","Lisa K."),Pt({title:"Update CRM with new contacts",company:"Acme Corp",priority:"low"},"7","Morgan P.","CRM-130")];St[0].status="todo";St[1].status="todo";St[2].status="todo";St[3].status="in_progress";St[4].status="in_progress";St[5].status="done";St[6].status="done";function Ca({initialTasks:t=St,onTaskCreate:e,onTaskToggle:r,onTaskClick:a,onTasksReorder:i,className:n}){let[s,l]=mr(t),[c,d]=mr(false),[m,p]=mr(""),[b,v]=mr("list"),f=Na(()=>{if(!m.trim())return s;let u=m.toLowerCase();return s.filter(x=>x.title.toLowerCase().includes(u)||x.company.toLowerCase().includes(u)||(x.jiraKey?.toLowerCase().includes(u)??false))},[s,m]),w=Na(()=>ic(f),[f]),g=s.filter(u=>u.status!=="done").length,h=s.filter(u=>u.priority==="urgent"&&u.status!=="done").length,S=`${g} pending${h>0?` \xB7 ${h} urgent`:""}`,N=u=>{let x=`task-${Date.now()}`,C=Pt(u,x);l(P=>[C,...P]),d(false),e?.(u);},y=u=>{l(x=>x.map(C=>{if(C.id!==u)return C;let P=C.status==="done"?"todo":"done";return {...C,status:P}})),r?.(u);},k=u=>{l(u),i?.(u);};return jsxRuntimeExports.jsx("div",{className:o("flex min-h-screen flex-col bg-[var(--inkblot-semantic-color-background-primary)]",n),children:jsxRuntimeExports.jsxs("div",{className:"flex flex-1 flex-col gap-8 px-8 py-8",children:[jsxRuntimeExports.jsx(Jt,{title:"Tasks",subtitle:S,icon:jsxRuntimeExports.jsx(ClipboardList,{className:"h-5 w-5"}),action:jsxRuntimeExports.jsx(te,{label:"New Task",onClick:()=>d(u=>!u)})}),jsxRuntimeExports.jsxs("div",{className:"flex flex-col gap-[var(--inkblot-spacing-4)] xl:flex-row xl:items-center xl:gap-[var(--inkblot-spacing-4)]",children:[jsxRuntimeExports.jsx(_r,{type:"single",value:b,onValueChange:u=>{(u==="list"||u==="kanban")&&v(u);},items:[{id:"list",label:"List View",icon:List},{id:"kanban",label:"Kanban Board View",icon:LayoutGrid}]}),jsxRuntimeExports.jsx("div",{className:"min-w-0 flex-1",children:jsxRuntimeExports.jsx(Ct,{placeholder:b==="list"?"Search tasks (title, company, Jira key)...":"Switch to list view to search and filter tasks",value:m,onChange:u=>p(u.target.value),disabled:b==="kanban"})})]}),c?jsxRuntimeExports.jsx(ir,{onConfirm:N,onCancel:()=>d(false)}):null,b==="list"?jsxRuntimeExports.jsx(rr,{sections:w,onTaskToggle:y,onTaskClick:a}):jsxRuntimeExports.jsx(ae,{tasks:s,onTasksChange:k})]})})}const {useState:ne,useMemo:Yr} = await importShared('react');
var lc=`Hi [Name],

I hope this email finds you well. I wanted to reach out regarding our recent conversation about [Topic].

Based on our discussion, I've prepared a few options that I believe could add significant value to your organization:

1. **Option A**: [Brief description]
2. **Option B**: [Brief description]
3. **Option C**: [Brief description]

I'd love to schedule a quick call this week to walk you through these in more detail. Would any of the following times work for you?

- Tuesday 2pm
- Wednesday 10am
- Thursday 4pm

Looking forward to hearing from you.

Best regards,
[Your name]`,Ta=[{id:"1",campaignName:"Q1 Product Launch",recipients:"2840 recipients",status:"sent",opens:"68%",clicks:"24%",date:"Feb 12, 2026"},{id:"2",campaignName:"Welcome Series",recipients:"1200 recipients",status:"active",statusSubtext:"Running",opens:"-",clicks:"-",date:"Feb 28, 2026"},{id:"3",campaignName:"Re-engagement Campaign",recipients:"890 recipients",status:"draft",opens:"-",clicks:"-",date:"Feb 5, 2026"},{id:"4",campaignName:"Holiday Promo",recipients:"4500 recipients",status:"scheduled",opens:"-",clicks:"-",date:"Mar 1, 2026"}],Pa=[{id:"1",category:"Onboarding",title:"Welcome Series",uses:"34 uses"},{id:"2",category:"Marketing",title:"Product Announcement",uses:"12 uses"},{id:"3",category:"Retention",title:"Renewal Reminder",uses:"28 uses"},{id:"4",category:"Sales",title:"Meeting Follow-up",uses:"56 uses"}],Sa=["Acme Corp - Sarah Chen","TechStart Inc - Mike Rodriguez","GlobalTech - Lisa Kim","Enterprise Co - John Smith","StartupXYZ - Emma Wilson"],cc=[{key:"campaign",label:"Campaign"},{key:"status",label:"Status"},{key:"opens",label:"Opens"},{key:"clicks",label:"Clicks"},{key:"date",label:"Date"}],dc=[{label:"Total Sent",value:"12.4K",change:"This month",changeVariant:"success"},{label:"Avg. Open Rate",value:"64%",change:"+8% vs prior",changeVariant:"success"},{label:"Avg. Click Rate",value:"22%",change:"+3% vs prior",changeVariant:"success"},{label:"Active Automations",value:"7",change:"3 paused",changeVariant:"error"}];function Ma({onSendNow:t,onSchedule:e,onSaveDraft:r,onNewCampaign:a,onGenerateWithAI:i,onTemplateClick:n,className:s}){let[l,c]=ne("campaigns"),[d,m]=ne(""),[p,b]=ne(""),[v,f]=ne(""),[w,g]=ne(false),[h,S]=ne(""),N=Yr(()=>{if(!d.trim())return Ta;let E=d.toLowerCase();return Ta.filter(V=>V.campaignName.toLowerCase().includes(E)||V.recipients.toLowerCase().includes(E))},[d]),y=Yr(()=>{if(!d.trim())return Pa;let E=d.toLowerCase();return Pa.filter(V=>V.title.toLowerCase().includes(E)||V.category.toLowerCase().includes(E))},[d]),k=Yr(()=>{if(!h.trim())return Sa;let E=h.toLowerCase();return Sa.filter(V=>V.toLowerCase().includes(E))},[h]),u=async()=>{g(true),await new Promise(E=>setTimeout(E,1500)),f(lc),g(false);},x=()=>{t?.();},C=()=>{e?.();},P=()=>{r?.();},D=l==="campaigns"||l==="templates";return jsxRuntimeExports.jsx("div",{className:o("flex min-h-screen flex-col bg-[var(--inkblot-semantic-color-background-primary)]",s),children:jsxRuntimeExports.jsxs("div",{className:"flex flex-1 flex-col gap-[var(--inkblot-spacing-8)] px-[var(--inkblot-spacing-8)] py-[var(--inkblot-spacing-8)]",children:[jsxRuntimeExports.jsx(Jt,{title:"Email Campaigns",subtitle:"Automate outreach \xB7 AI-powered templates",icon:jsxRuntimeExports.jsx(Mail,{className:"h-5 w-5"}),action:jsxRuntimeExports.jsx(te,{label:"New Campaign",onClick:()=>a?.()})}),jsxRuntimeExports.jsx(tr,{tabs:[{id:"campaigns",label:"Campaigns"},{id:"templates",label:"Templates"},{id:"compose",label:"Compose"}],activeTabId:l,onTabChange:c}),D?jsxRuntimeExports.jsx(Ct,{placeholder:l==="campaigns"?"Search campaigns...":"Search templates...",value:d,onChange:E=>m(E.target.value)}):null,l==="campaigns"?jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsx(Je,{items:dc}),jsxRuntimeExports.jsx(Ge,{columns:cc,rows:N})]}):l==="templates"?jsxRuntimeExports.jsx(_e,{templates:y,onGenerateWithAI:i,onTemplateClick:n}):jsxRuntimeExports.jsxs("div",{className:"flex max-w-2xl flex-col gap-[var(--inkblot-spacing-6)] rounded-[var(--inkblot-radius-xl)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)] p-[var(--inkblot-spacing-6)] shadow-[var(--inkblot-shadow-sm)]",children:[jsxRuntimeExports.jsxs("div",{className:"flex flex-col gap-[var(--inkblot-spacing-6)]",children:[jsxRuntimeExports.jsxs("div",{className:"flex flex-col gap-[var(--inkblot-spacing-2)]",children:[jsxRuntimeExports.jsx("label",{className:"uppercase tracking-wider text-[var(--inkblot-semantic-color-text-primary)] [font:var(--inkblot-semantic-typography-body-small)]",children:"Subject"}),jsxRuntimeExports.jsx(Vt,{type:"text",value:p,onChange:E=>b(E.target.value),placeholder:"Enter subject line..."})]}),jsxRuntimeExports.jsx(fe,{label:"Body",value:v,onChange:E=>f(E.target.value),placeholder:"Compose your email or let AI generate content...",loading:w,onWriteWithAI:u}),jsxRuntimeExports.jsxs("div",{className:"flex flex-col gap-[var(--inkblot-spacing-2)]",children:[jsxRuntimeExports.jsx(Ct,{label:"Recipients",placeholder:"Search contacts, segments, or tags...",value:h,onChange:E=>S(E.target.value)}),k.length>0?jsxRuntimeExports.jsx("ul",{className:"flex flex-wrap gap-[var(--inkblot-spacing-2)]",children:k.slice(0,5).map(E=>jsxRuntimeExports.jsx("li",{className:o("rounded-[var(--inkblot-radius-md)]","bg-[var(--inkblot-semantic-color-background-secondary)]","px-[var(--inkblot-spacing-2)] py-[var(--inkblot-spacing-1)]","[font:var(--inkblot-semantic-typography-body-small)]","text-[var(--inkblot-semantic-color-text-secondary)]"),children:E},E))}):null]})]}),jsxRuntimeExports.jsx(Fe,{onSendNow:x,onSchedule:C,onSaveDraft:P})]})]})})}const {createContext:pc,useCallback:Ea,useContext:bc,useEffect:uc,useLayoutEffect:vc,useMemo:fc,useState:Ia} = await importShared('react');
var pr="citron-ui-theme",Aa=pc(null);function gc(){if(typeof window>"u")return null;try{let t=window.localStorage.getItem(pr);if(t==="light"||t==="dark")return t}catch{}return null}function kc(){return typeof window>"u"?"light":window.matchMedia?.("(prefers-color-scheme: dark)").matches?"dark":"light"}function La(t){typeof document>"u"||document.documentElement.setAttribute("data-theme",t);}function Da({children:t}){let[e,r]=Ia("light"),[a,i]=Ia(false);vc(()=>{if(typeof window>"u")return;let d=gc()??kc();r(d),La(d),i(true);},[]),uc(()=>{if(a&&(La(e),!(typeof window>"u")))try{window.localStorage.setItem(pr,e);}catch{}},[e,a]);let n=Ea(c=>{r(c);},[]),s=Ea(()=>{r(c=>c==="light"?"dark":"light");},[]),l=fc(()=>({theme:e,setTheme:n,toggleTheme:s}),[e,n,s]);return jsxRuntimeExports.jsx(Aa.Provider,{value:l,children:t})}function br(){let t=bc(Aa);if(!t)throw new Error("useTheme must be used within a ThemeProvider");return t}function ur({className:t,type:e="button",...r}){let{theme:a,toggleTheme:i}=br(),n=a==="dark",s=n?Sun:Moon;return jsxRuntimeExports.jsx("button",{type:e,onClick:i,"aria-label":n?"Switch to light mode":"Switch to dark mode","aria-pressed":n,className:o("group relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--inkblot-radius-md)] border border-transparent","text-[var(--inkblot-semantic-color-text-tertiary)] transition-colors duration-[var(--inkblot-duration-fast)]","hover:bg-[var(--inkblot-semantic-color-interactive-secondary-hover)] hover:text-[var(--inkblot-semantic-color-text-primary)]","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--inkblot-semantic-color-border-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--inkblot-semantic-color-background-primary)]",t),...r,children:jsxRuntimeExports.jsx(s,{className:"h-[18px] w-[18px] shrink-0",strokeWidth:2,"aria-hidden":true})})}const {forwardRef:Nc} = await importShared('react');
const {NavLink:wc} = await importShared('react-router-dom');
var Xr=Nc(({className:t,activeClassName:e,pendingClassName:r,...a},i)=>jsxRuntimeExports.jsx(wc,{ref:i,className:({isActive:n,isPending:s})=>o(t,n&&e,s&&r),...a}));Xr.displayName="NavLinkRouter";const {useState:Ha,useRef:Tc,useEffect:Pc} = await importShared('react');
var fr=o("min-h-[var(--inkblot-size-touch-target-min)] w-full rounded-[var(--inkblot-radius-md)]","border border-[var(--inkblot-semantic-color-border-default)]","bg-[var(--inkblot-semantic-color-background-primary)]","px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-2)]","[font:var(--inkblot-semantic-typography-body-small)]","text-[var(--inkblot-semantic-color-text-primary)] placeholder:text-[var(--inkblot-semantic-color-text-tertiary)]","transition-colors duration-[var(--inkblot-duration-fast)]","focus:outline-none focus:ring-2 focus:ring-[var(--inkblot-semantic-color-border-focus)]"),Mt=o("[font:var(--inkblot-semantic-typography-body-small)] font-medium","text-[var(--inkblot-semantic-color-text-secondary)]"),za="border-[var(--inkblot-semantic-color-status-error)]";function Ba({items:t,value:e,onChange:r,placeholder:a,hasError:i,onCreateNew:n,createNewLabel:s}){let[l,c]=Ha(""),[d,m]=Ha(false),p=Tc(null);Pc(()=>{let f=w=>{p.current&&!p.current.contains(w.target)&&m(false);};return document.addEventListener("mousedown",f),()=>document.removeEventListener("mousedown",f)},[]);let b=t.find(f=>f.id===e),v=t.filter(f=>f.name.toLowerCase().includes(l.toLowerCase()));return jsxRuntimeExports.jsxs("div",{ref:p,className:"relative",children:[jsxRuntimeExports.jsx("input",{type:"text",value:d?l:b?.name??"",onChange:f=>{c(f.target.value),d||m(true);},onFocus:()=>{m(true),c("");},placeholder:a,className:o(fr,i&&!e&&za)}),d&&jsxRuntimeExports.jsxs("div",{className:o("absolute z-50 mt-[var(--inkblot-spacing-1)] max-h-48 w-full overflow-auto","rounded-[var(--inkblot-radius-md)] border border-[var(--inkblot-semantic-color-border-default)]","bg-[var(--inkblot-semantic-color-background-primary)] shadow-[var(--inkblot-shadow-sm)]"),children:[v.map(f=>jsxRuntimeExports.jsx("button",{type:"button",onClick:()=>{r(f.id),m(false),c("");},className:o("w-full px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-2)] text-left","[font:var(--inkblot-semantic-typography-body-small)]","text-[var(--inkblot-semantic-color-text-primary)]","transition-colors duration-[var(--inkblot-duration-fast)]","hover:bg-[var(--inkblot-semantic-color-background-tertiary)]",f.id===e&&"bg-[var(--inkblot-semantic-color-background-tertiary)]"),children:f.name},f.id)),v.length===0&&!n&&jsxRuntimeExports.jsx("div",{className:o("px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-3)]","[font:var(--inkblot-semantic-typography-body-small)]","text-[var(--inkblot-semantic-color-text-tertiary)]"),children:"No results"}),n&&v.length===0&&jsxRuntimeExports.jsxs("button",{type:"button",onClick:()=>{n(),m(false);},className:o("flex w-full items-center gap-[var(--inkblot-spacing-2)]","px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-2)]","[font:var(--inkblot-semantic-typography-body-small)] font-medium","text-[var(--inkblot-semantic-color-interactive-primary)]","transition-colors duration-[var(--inkblot-duration-fast)]","hover:bg-[var(--inkblot-semantic-color-background-tertiary)]"),children:[jsxRuntimeExports.jsx(Plus,{className:"h-4 w-4"}),s??"Create new"]})]})]})}function vr({options:t,value:e,onChange:r,placeholder:a}){return jsxRuntimeExports.jsxs("div",{className:"relative",children:[jsxRuntimeExports.jsxs("select",{value:e,onChange:i=>r(i.target.value),className:o(fr,"appearance-none pr-[var(--inkblot-spacing-8)]"),children:[jsxRuntimeExports.jsx("option",{value:"",children:a}),t.map(i=>jsxRuntimeExports.jsx("option",{value:i,children:i},i))]}),jsxRuntimeExports.jsx(ChevronDown,{className:o("pointer-events-none absolute right-[var(--inkblot-spacing-3)] top-1/2 h-4 w-4 -translate-y-1/2","text-[var(--inkblot-semantic-color-text-tertiary)]")})]})}var Ec=["Bank Transfer","Credit Card","Cash","Check"],Ic=["VAT 21%","VAT 10%","VAT 0%","Exempt"],Lc=["Standard","Proforma","Credit Note","Debit Note"],Ac=["Main Account","Secondary Account"];function Zr({clients:t,products:e,paymentMethods:r=Ec,taxTypes:a=Ic,invoiceTypes:i=Lc,bankAccounts:n=Ac,value:s={},onChange:l,onCreateClient:c,attempted:d=false,className:m}){let p=b=>l?.({...s,...b});return jsxRuntimeExports.jsxs("div",{className:o("grid grid-cols-1 gap-[var(--inkblot-spacing-4)] md:grid-cols-2",m),children:[jsxRuntimeExports.jsxs("div",{className:"flex flex-col gap-[var(--inkblot-spacing-2)]",children:[jsxRuntimeExports.jsx("label",{className:Mt,children:"Client"}),jsxRuntimeExports.jsx(Ba,{items:t,value:s.clientId??"",onChange:b=>p({clientId:b}),placeholder:"Search client...",hasError:d,onCreateNew:c,createNewLabel:"+ Create new client"})]}),jsxRuntimeExports.jsxs("div",{className:"flex flex-col gap-[var(--inkblot-spacing-2)]",children:[jsxRuntimeExports.jsx("label",{className:Mt,children:"Product / Service"}),jsxRuntimeExports.jsx(Ba,{items:e,value:s.productId??"",onChange:b=>p({productId:b}),placeholder:"Search product...",hasError:d})]}),jsxRuntimeExports.jsxs("div",{className:"flex flex-col gap-[var(--inkblot-spacing-2)]",children:[jsxRuntimeExports.jsx("label",{className:Mt,children:"Quantity"}),jsxRuntimeExports.jsx("input",{type:"number",min:1,value:s.quantity??"",onChange:b=>p({quantity:b.target.value===""?0:Number(b.target.value)}),placeholder:"1",className:o(fr,d&&!s.quantity&&za)})]}),jsxRuntimeExports.jsxs("div",{className:"flex flex-col gap-[var(--inkblot-spacing-2)]",children:[jsxRuntimeExports.jsx("label",{className:Mt,children:"Payment Method"}),jsxRuntimeExports.jsx(vr,{options:r,value:s.paymentMethod??"",onChange:b=>p({paymentMethod:b}),placeholder:"Select..."})]}),jsxRuntimeExports.jsxs("div",{className:"flex flex-col gap-[var(--inkblot-spacing-2)]",children:[jsxRuntimeExports.jsx("label",{className:Mt,children:"Tax Type"}),jsxRuntimeExports.jsx(vr,{options:a,value:s.taxType??"",onChange:b=>p({taxType:b}),placeholder:"Select..."})]}),jsxRuntimeExports.jsxs("div",{className:"flex flex-col gap-[var(--inkblot-spacing-2)]",children:[jsxRuntimeExports.jsx("label",{className:Mt,children:"Invoice Type"}),jsxRuntimeExports.jsx(vr,{options:i,value:s.invoiceType??"",onChange:b=>p({invoiceType:b}),placeholder:"Select..."})]}),jsxRuntimeExports.jsxs("div",{className:"flex flex-col gap-[var(--inkblot-spacing-2)]",children:[jsxRuntimeExports.jsx("label",{className:Mt,children:"Bank Account"}),jsxRuntimeExports.jsx(vr,{options:n,value:s.bankAccount??"",onChange:b=>p({bankAccount:b}),placeholder:"Select..."})]}),jsxRuntimeExports.jsxs("div",{className:"flex flex-col gap-[var(--inkblot-spacing-2)] md:col-span-2",children:[jsxRuntimeExports.jsx("label",{className:Mt,children:"Notes"}),jsxRuntimeExports.jsx("textarea",{value:s.notes??"",onChange:b=>p({notes:b.target.value}),rows:3,placeholder:"Additional notes...",className:o(fr,"resize-y")})]})]})}function vt({label:t,value:e}){return jsxRuntimeExports.jsxs("div",{className:"flex items-baseline justify-between border-b border-[var(--inkblot-semantic-color-border-default)] py-[var(--inkblot-spacing-2)]",children:[jsxRuntimeExports.jsx("span",{className:"[font:var(--inkblot-semantic-typography-body-small)] text-[var(--inkblot-semantic-color-text-tertiary)]",children:t}),jsxRuntimeExports.jsx("span",{className:"[font:var(--inkblot-semantic-typography-body-small)] text-[var(--inkblot-semantic-color-text-primary)]",children:e||"\u2014"})]})}function Jr({data:t,clients:e,products:r,className:a}){let i=e.find(d=>d.id===t.clientId),n=r.find(d=>d.id===t.productId),s=t.quantity??0,l=n?.unitPrice??0,c=s*l;return jsxRuntimeExports.jsxs("div",{className:o("rounded-[var(--inkblot-radius-xl)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-primary)] p-[var(--inkblot-spacing-6)]",a),children:[jsxRuntimeExports.jsx("h3",{className:"mb-[var(--inkblot-spacing-4)] [font:var(--inkblot-semantic-typography-heading-4)] text-[var(--inkblot-semantic-color-text-primary)]",children:"Preview"}),jsxRuntimeExports.jsxs("div",{className:"space-y-0",children:[jsxRuntimeExports.jsx(vt,{label:"Client",value:i?.name??""}),jsxRuntimeExports.jsx(vt,{label:"Product",value:n?.name??""}),jsxRuntimeExports.jsx(vt,{label:"Quantity",value:s?String(s):""}),l>0&&jsxRuntimeExports.jsx(vt,{label:"Unit price",value:`$${l.toFixed(2)}`}),c>0&&jsxRuntimeExports.jsx(vt,{label:"Subtotal",value:`$${c.toFixed(2)}`}),jsxRuntimeExports.jsx(vt,{label:"Payment",value:t.paymentMethod??""}),jsxRuntimeExports.jsx(vt,{label:"Tax",value:t.taxType??""}),jsxRuntimeExports.jsx(vt,{label:"Type",value:t.invoiceType??""}),jsxRuntimeExports.jsx(vt,{label:"Bank",value:t.bankAccount??""})]}),t.notes&&jsxRuntimeExports.jsx("p",{className:"mt-[var(--inkblot-spacing-4)] [font:var(--inkblot-semantic-typography-body-small)] text-[var(--inkblot-semantic-color-text-secondary)]",children:t.notes})]})}const {useState:Oa} = await importShared('react');
function Rc({clients:t,products:e,onSubmit:r,onCreateClient:a,isSubmitting:i=false,className:n,...s}){let[l,c]=Oa({}),[d,m]=Oa(false);return jsxRuntimeExports.jsxs("form",{onSubmit:b=>{b.preventDefault(),m(true),!(!l.clientId||!l.productId||!l.quantity)&&r?.({clientId:l.clientId,productId:l.productId,quantity:l.quantity,paymentMethod:l.paymentMethod??"",taxType:l.taxType??"",invoiceType:l.invoiceType??"",bankAccount:l.bankAccount??"",notes:l.notes??""});},className:o("rounded-[var(--inkblot-radius-xl)] bg-[var(--inkblot-semantic-color-background-secondary)] p-[var(--inkblot-spacing-6)]",n),children:[jsxRuntimeExports.jsx("h2",{className:"mb-[var(--inkblot-spacing-6)] [font:var(--inkblot-semantic-typography-heading-4)] text-[var(--inkblot-semantic-color-text-primary)]",children:"New Invoice"}),jsxRuntimeExports.jsxs("div",{className:"grid grid-cols-1 gap-[var(--inkblot-spacing-6)] lg:grid-cols-[1fr_20rem]",children:[jsxRuntimeExports.jsx(Zr,{clients:t,products:e,value:l,onChange:c,onCreateClient:a,attempted:d,...s}),jsxRuntimeExports.jsx(Jr,{data:l,clients:t,products:e})]}),jsxRuntimeExports.jsx("div",{className:"mt-[var(--inkblot-spacing-6)] flex justify-end",children:jsxRuntimeExports.jsxs("button",{type:"submit",disabled:i,className:o("inline-flex min-h-[var(--inkblot-size-touch-target-min)] items-center justify-center gap-[var(--inkblot-spacing-2)]","rounded-[var(--inkblot-radius-lg)]","bg-[var(--inkblot-semantic-color-interactive-primary)]","px-[var(--inkblot-spacing-6)] py-[var(--inkblot-spacing-2)]","[font:var(--inkblot-semantic-typography-body-small)] font-medium","text-[var(--inkblot-semantic-color-text-inverse)]","transition-colors duration-[var(--inkblot-duration-fast)]","hover:bg-[var(--inkblot-semantic-color-interactive-primary-hover)]","active:bg-[var(--inkblot-semantic-color-interactive-primary-active)]","focus:outline-none focus:ring-2 focus:ring-[var(--inkblot-semantic-color-border-focus)]","disabled:opacity-[var(--inkblot-opacity-disabled)] disabled:cursor-not-allowed"),children:[i&&jsxRuntimeExports.jsx(LoaderCircle,{className:"h-4 w-4 animate-spin"}),"Create Invoice"]})})]})}const {useMemo:Hc,useState:Bc} = await importShared('react');
function Oc({items:t,defaultValue:e,allowMultiple:r=false,className:a}){let i=Hc(()=>new Set(e??[]),[e]),[n,s]=Bc(i),l=c=>{s(d=>{let m=new Set(d);return m.has(c)?(m.delete(c),m):r?(m.add(c),m):new Set([c])});};return jsxRuntimeExports.jsx("div",{className:o("w-full overflow-hidden rounded-[var(--inkblot-radius-lg)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)]",a),children:t.map((c,d)=>{let m=n.has(c.id);return jsxRuntimeExports.jsxs("div",{className:o(d!==0&&"border-t border-[var(--inkblot-semantic-color-border-default)]"),children:[jsxRuntimeExports.jsxs("button",{type:"button",disabled:c.disabled,"aria-expanded":m,onClick:()=>l(c.id),className:o("flex min-h-[var(--inkblot-size-touch-target-min)] w-full items-center justify-between gap-[var(--inkblot-spacing-3)] px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-3)] text-left text-[var(--inkblot-semantic-color-text-primary)] transition-colors duration-[var(--inkblot-duration-fast)] ease-[var(--inkblot-easing-default)]",c.disabled?"cursor-not-allowed opacity-[var(--inkblot-opacity-disabled)]":"hover:bg-[var(--inkblot-semantic-color-background-tertiary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--inkblot-semantic-color-border-focus)] focus-visible:outline-offset-[-2px]"),children:[jsxRuntimeExports.jsx("span",{className:"font-medium",children:c.title}),jsxRuntimeExports.jsx(ChevronDown,{className:o("h-4 w-4 shrink-0 text-[var(--inkblot-semantic-color-text-tertiary)] transition-transform duration-[var(--inkblot-duration-fast)] ease-[var(--inkblot-easing-default)]",m&&"rotate-180")})]}),m&&jsxRuntimeExports.jsx("div",{className:"px-[var(--inkblot-spacing-4)] pb-[var(--inkblot-spacing-4)] text-sm text-[var(--inkblot-semantic-color-text-secondary)]",children:c.content})]},c.id)})})}const {useCallback:Vc,useEffect:kr,useRef:Pe,useState:se} = await importShared('react');
function _c({options:t=[],loadOptions:e,value:r,defaultValue:a,onChange:i,placeholder:n="Select an option",searchPlaceholder:s="Search...",emptyMessage:l="No results found",loadingMessage:c="Loading...",clearable:d=false,disabled:m=false,className:p}){let b=r!==void 0,[v,f]=se(a??null),w=b?r:v,[g,h]=se(false),[S,N]=se(""),[y,k]=se(-1),[u,x]=se([]),[C,P]=se(false),D=Pe(null),E=Pe(0),V=e!==void 0,I=V?u:t,z=Pe(null),L=Pe(null),W=Pe(null);kr(()=>{if(!(!V||!g))return D.current&&clearTimeout(D.current),D.current=setTimeout(()=>{let T=++E.current;P(true),e(S).then(q=>{T===E.current&&(x(q),P(false),k(-1));}).catch(()=>{T===E.current&&(x([]),P(false));});},250),()=>{D.current&&clearTimeout(D.current);}},[S,g,V,e]);let U=V?I:I.filter(T=>T.label.toLowerCase().includes(S.toLowerCase())),jt=I.find(T=>T.value===w)??(V?t.find(T=>T.value===w):void 0),qt=Vc(T=>{b||f(T),i?.(T),h(false),N(""),k(-1);},[b,i]);kr(()=>{if(!g)return;let T=q=>{z.current&&!z.current.contains(q.target)&&(h(false),N(""),k(-1));};return document.addEventListener("mousedown",T),()=>document.removeEventListener("mousedown",T)},[g]),kr(()=>{g&&W.current?.focus();},[g]),kr(()=>{if(y<0||!L.current)return;L.current.querySelectorAll("[data-option]")[y]?.scrollIntoView({block:"nearest"});},[y]);let Mr=T=>{if(!g){(T.key==="Enter"||T.key===" "||T.key==="ArrowDown")&&(T.preventDefault(),h(true));return}switch(T.key){case "ArrowDown":{T.preventDefault(),k(q=>{let $=q+1;for(;$<U.length&&U[$].disabled;)$++;return $<U.length?$:q});break}case "ArrowUp":{T.preventDefault(),k(q=>{let $=q-1;for(;$>=0&&U[$].disabled;)$--;return $>=0?$:q});break}case "Enter":{T.preventDefault(),y>=0&&y<U.length&&!U[y].disabled&&qt(U[y].value);break}case "Escape":{T.preventDefault(),h(false),N(""),k(-1);break}}};return jsxRuntimeExports.jsxs("div",{ref:z,className:o("relative w-full",p),onKeyDown:Mr,children:[jsxRuntimeExports.jsxs("button",{type:"button",disabled:m,"aria-expanded":g,"aria-haspopup":"listbox",onClick:()=>{m||h(T=>!T);},className:o("flex min-h-[var(--inkblot-size-touch-target-min)] w-full items-center justify-between gap-[var(--inkblot-spacing-2)] rounded-[var(--inkblot-radius-md)] border px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-2)]","bg-[var(--inkblot-semantic-color-background-secondary)] text-[var(--inkblot-semantic-color-text-primary)]","transition-[border-color,box-shadow] duration-[var(--inkblot-duration-fast)] ease-[var(--inkblot-easing-default)]","border-[var(--inkblot-semantic-color-border-default)] hover:border-[var(--inkblot-semantic-color-border-strong)]","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--inkblot-semantic-color-border-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--inkblot-semantic-color-background-primary)]",m&&"pointer-events-none cursor-not-allowed opacity-[var(--inkblot-opacity-disabled)]"),children:[jsxRuntimeExports.jsx("span",{className:o("truncate text-left",!jt&&"text-[var(--inkblot-semantic-color-text-tertiary)]"),children:jt?jt.label:n}),jsxRuntimeExports.jsxs("span",{className:"flex shrink-0 items-center gap-[var(--inkblot-spacing-1)]",children:[d&&jt&&jsxRuntimeExports.jsx("span",{role:"button",tabIndex:0,"aria-label":"Clear selection",onClick:T=>{T.stopPropagation(),qt(null);},onKeyDown:T=>{T.key==="Enter"&&(T.stopPropagation(),qt(null));},className:o("flex items-center justify-center rounded-[var(--inkblot-radius-sm)] p-[var(--inkblot-spacing-1)]","text-[var(--inkblot-semantic-color-text-tertiary)] hover:bg-[var(--inkblot-semantic-color-interactive-secondary-hover)] hover:text-[var(--inkblot-semantic-color-text-primary)]","transition-colors duration-[var(--inkblot-duration-fast)]"),children:jsxRuntimeExports.jsx(X,{className:"size-3.5"})}),jsxRuntimeExports.jsx(ChevronDown,{"aria-hidden":true,className:o("size-4 text-[var(--inkblot-semantic-color-text-tertiary)] transition-transform duration-[var(--inkblot-duration-fast)]",g&&"rotate-180")})]})]}),jsxRuntimeExports.jsxs("div",{className:o("absolute left-0 top-full z-50 mt-[var(--inkblot-spacing-1)] w-full overflow-hidden rounded-[var(--inkblot-radius-md)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-primary)] shadow-[var(--inkblot-shadow-md)]","transition-[opacity,transform] duration-[var(--inkblot-duration-normal)] ease-[var(--inkblot-easing-default)]","origin-top",g?"pointer-events-auto scale-y-100 opacity-100":"pointer-events-none scale-y-95 opacity-0"),children:[jsxRuntimeExports.jsx("div",{className:"border-b border-[var(--inkblot-semantic-color-border-default)] p-[var(--inkblot-spacing-2)]",children:jsxRuntimeExports.jsxs("div",{className:"flex items-center gap-[var(--inkblot-spacing-2)] rounded-[var(--inkblot-radius-sm)] bg-[var(--inkblot-semantic-color-background-tertiary)] px-[var(--inkblot-spacing-3)] py-[var(--inkblot-spacing-1)]",children:[jsxRuntimeExports.jsx(Search,{className:"size-3.5 shrink-0 text-[var(--inkblot-semantic-color-text-tertiary)]"}),jsxRuntimeExports.jsx("input",{ref:W,type:"text",value:S,onChange:T=>{N(T.target.value),k(-1);},placeholder:s,className:"w-full bg-transparent py-[var(--inkblot-spacing-1)] text-sm text-[var(--inkblot-semantic-color-text-primary)] placeholder:text-[var(--inkblot-semantic-color-text-tertiary)] focus:outline-none"})]})}),jsxRuntimeExports.jsx("ul",{ref:L,role:"listbox",className:"max-h-60 overflow-y-auto p-[var(--inkblot-spacing-1)]",children:C?jsxRuntimeExports.jsxs("li",{className:"flex items-center justify-center gap-[var(--inkblot-spacing-2)] px-[var(--inkblot-spacing-3)] py-[var(--inkblot-spacing-4)] text-sm text-[var(--inkblot-semantic-color-text-tertiary)]",children:[jsxRuntimeExports.jsx(LoaderCircle,{className:"size-4 animate-spin","aria-hidden":true}),c]}):U.length===0?jsxRuntimeExports.jsx("li",{className:"px-[var(--inkblot-spacing-3)] py-[var(--inkblot-spacing-4)] text-center text-sm text-[var(--inkblot-semantic-color-text-tertiary)]",children:l}):U.map((T,q)=>{let $=T.value===w,ze=q===y;return jsxRuntimeExports.jsxs("li",{role:"option","data-option":true,"aria-selected":$,"aria-disabled":T.disabled,onClick:()=>{T.disabled||qt(T.value);},onMouseEnter:()=>{T.disabled||k(q);},className:o("flex cursor-pointer items-center gap-[var(--inkblot-spacing-3)] rounded-[var(--inkblot-radius-sm)] px-[var(--inkblot-spacing-3)] py-[var(--inkblot-spacing-2)]","transition-colors duration-[var(--inkblot-duration-fast)]",ze&&!T.disabled&&"bg-[var(--inkblot-semantic-color-interactive-secondary-hover)]",$&&"bg-[var(--inkblot-semantic-color-interactive-secondary)]",T.disabled&&"pointer-events-none cursor-not-allowed opacity-[var(--inkblot-opacity-disabled)]"),children:[T.icon&&jsxRuntimeExports.jsx("span",{className:"flex size-5 shrink-0 items-center justify-center text-[var(--inkblot-semantic-color-text-secondary)]",children:T.icon}),jsxRuntimeExports.jsxs("span",{className:"flex min-w-0 flex-1 flex-col",children:[jsxRuntimeExports.jsx("span",{className:"truncate text-sm text-[var(--inkblot-semantic-color-text-primary)]",children:T.label}),T.description&&jsxRuntimeExports.jsx("span",{className:"truncate text-xs text-[var(--inkblot-semantic-color-text-tertiary)]",children:T.description})]})]},T.value)})})]})]})}var Yc={info:"border-[var(--inkblot-semantic-color-status-info)] bg-[var(--inkblot-semantic-color-status-info)]/10 text-[var(--inkblot-semantic-color-text-primary)]",success:"border-[var(--inkblot-semantic-color-status-success)] bg-[var(--inkblot-semantic-color-status-success)]/10 text-[var(--inkblot-semantic-color-text-primary)]",warning:"border-[var(--inkblot-semantic-color-status-warning)] bg-[var(--inkblot-semantic-color-status-warning)]/10 text-[var(--inkblot-semantic-color-text-primary)]",error:"border-[var(--inkblot-semantic-color-status-error)] bg-[var(--inkblot-semantic-color-status-error)]/10 text-[var(--inkblot-semantic-color-text-primary)]"},Xc={info:Info,success:CircleCheck,warning:TriangleAlert,error:CircleAlert};function Zc({title:t,description:e,variant:r="info",className:a}){let i=Xc[r];return jsxRuntimeExports.jsxs("div",{role:"alert",className:o("flex w-full items-start gap-[var(--inkblot-spacing-3)] rounded-[var(--inkblot-radius-lg)] border px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-3)]",Yc[r],a),children:[jsxRuntimeExports.jsx(i,{className:"mt-0.5 h-4 w-4 shrink-0"}),jsxRuntimeExports.jsxs("div",{className:"flex min-w-0 flex-col gap-[var(--inkblot-spacing-1)]",children:[jsxRuntimeExports.jsx("div",{className:"font-semibold",children:t}),e&&jsxRuntimeExports.jsx("div",{className:"text-sm text-[var(--inkblot-semantic-color-text-secondary)]",children:e})]})]})}const {useCallback:Ga,useEffect:Qc,useId:Ka,useRef:ro} = await importShared('react');
function td({open:t,title:e,description:r,confirmLabel:a="Confirm",cancelLabel:i="Cancel",destructive:n=false,confirmDisabled:s=false,closeOnConfirm:l=true,initialFocusRef:c,onOpenChange:d,onConfirm:m,onCancel:p,className:b}){let v=ro(null),f=ro(null),w=ro(null),g=Ka(),h=Ka(),S=Ga(()=>{p?.(),d?.(false);},[p,d]),N=Ga(()=>{m?.(),l&&d?.(false);},[l,m,d]);return Qc(()=>{if(!t)return;w.current=document.activeElement instanceof HTMLElement?document.activeElement:null,(c?.current??f.current??v.current)?.focus();let k=u=>{u.key==="Escape"&&S();};return window.addEventListener("keydown",k),()=>{window.removeEventListener("keydown",k),w.current?.focus();}},[S,c,t]),t?jsxRuntimeExports.jsx("div",{className:"fixed inset-0 z-50 grid place-items-center bg-[var(--inkblot-semantic-color-background-primary)]/70 px-[var(--inkblot-spacing-4)]",onClick:S,children:jsxRuntimeExports.jsxs("div",{role:"alertdialog","aria-modal":"true","aria-labelledby":g,"aria-describedby":r?h:void 0,tabIndex:-1,ref:v,onClick:y=>y.stopPropagation(),className:o("w-full max-w-[520px] rounded-[var(--inkblot-radius-xl)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)] p-[var(--inkblot-spacing-6)] text-[var(--inkblot-semantic-color-text-primary)] shadow-lg",b),children:[jsxRuntimeExports.jsxs("div",{className:"mb-[var(--inkblot-spacing-4)] flex items-start gap-[var(--inkblot-spacing-3)]",children:[jsxRuntimeExports.jsx("div",{className:o("mt-0.5 rounded-[var(--inkblot-radius-full)] p-[var(--inkblot-spacing-2)]",n?"bg-[var(--inkblot-semantic-color-status-error)]/15 text-[var(--inkblot-semantic-color-status-error)]":"bg-[var(--inkblot-semantic-color-status-warning)]/15 text-[var(--inkblot-semantic-color-status-warning)]"),children:jsxRuntimeExports.jsx(TriangleAlert,{className:"h-5 w-5"})}),jsxRuntimeExports.jsxs("div",{className:"flex-1",children:[jsxRuntimeExports.jsx("h2",{id:g,className:"text-lg font-semibold",children:e}),r&&jsxRuntimeExports.jsx("p",{id:h,className:"mt-[var(--inkblot-spacing-2)] text-sm text-[var(--inkblot-semantic-color-text-secondary)]",children:r})]})]}),jsxRuntimeExports.jsxs("div",{className:"flex flex-wrap justify-end gap-[var(--inkblot-spacing-2)]",children:[jsxRuntimeExports.jsx("button",{type:"button",ref:f,onClick:S,className:"inline-flex min-h-[var(--inkblot-size-touch-target-min)] items-center justify-center rounded-[var(--inkblot-radius-md)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-interactive-secondary)] px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-2)] font-medium text-[var(--inkblot-semantic-color-text-primary)] transition-colors duration-[var(--inkblot-duration-fast)] ease-[var(--inkblot-easing-default)] hover:bg-[var(--inkblot-semantic-color-interactive-secondary-hover)] active:bg-[var(--inkblot-semantic-color-interactive-secondary-hover)]",children:i}),jsxRuntimeExports.jsx("button",{type:"button",disabled:s,onClick:N,className:o("inline-flex min-h-[var(--inkblot-size-touch-target-min)] items-center justify-center rounded-[var(--inkblot-radius-md)] px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-2)] font-medium text-[var(--inkblot-semantic-color-text-inverse)] transition-colors duration-[var(--inkblot-duration-fast)] ease-[var(--inkblot-easing-default)] disabled:cursor-not-allowed disabled:opacity-[var(--inkblot-opacity-disabled)]",n?"bg-[var(--inkblot-semantic-color-status-error)] hover:bg-[var(--inkblot-semantic-color-status-error)]/85 active:bg-[var(--inkblot-semantic-color-status-error)]/80":"bg-[var(--inkblot-semantic-color-interactive-primary)] hover:bg-[var(--inkblot-semantic-color-interactive-primary-hover)] active:bg-[var(--inkblot-semantic-color-interactive-primary-active)]"),children:a})]})]})}):null}const {useEffect:ed,useRef:rd,useState:oo} = await importShared('react');
var nd=["Write a product launch announcement for a SaaS tool","Create a re-engagement email for churned users","Draft a welcome email for new customers","Write a quarterly business review summary","Create a seasonal promotion email with urgency"];function Uh({value:t,defaultValue:e="",onValueChange:r,isGenerating:a,onGeneratingChange:i,generated:n,onGeneratedChange:s,generationDelayMs:l=1500,onSubmitPrompt:c,generateBlocks:d,onGenerate:m,suggestions:p=nd,className:b}){let[v,f]=oo(e),[w,g]=oo(false),[h,S]=oo(false),N=rd(null),y=t!==void 0,k=y?t:v,u=a!==void 0,x=u?a:w,C=n!==void 0,P=C?n:h,D=L=>{y||f(L),r?.(L);},E=L=>{u||g(L),i?.(L);},V=L=>{C||S(L),s?.(L);};ed(()=>()=>{N.current!==null&&window.clearTimeout(N.current);},[]);let I=L=>{let W=Date.now();return [{id:`ai-${W}-1`,type:"heading",content:"Exciting News from Our Team"},{id:`ai-${W}-2`,type:"text",content:`Generated from prompt: ${L}`},{id:`ai-${W}-3`,type:"image",content:""},{id:`ai-${W}-4`,type:"text",content:"Our latest updates are designed to help you achieve more with less effort. We've built these improvements with your feedback in mind."},{id:`ai-${W}-5`,type:"button",content:"Learn More"},{id:`ai-${W}-6`,type:"divider",content:""},{id:`ai-${W}-7`,type:"text",content:`Best regards,
The Team`}]},z=async()=>{let L=k.trim();if(!L||x)return;c?.(L),E(true);let W;d?W=await Promise.resolve(d(L)):(await new Promise(U=>{window.setTimeout(()=>U(),l);}),W=I(L)),m?.(W),E(false),V(true),N.current=window.setTimeout(()=>V(false),1800);};return jsxRuntimeExports.jsxs("section",{className:o(b),children:[jsxRuntimeExports.jsxs("div",{className:"mb-2 flex items-center gap-2",children:[jsxRuntimeExports.jsx(Sparkles,{className:"h-4 w-4 text-[var(--inkblot-semantic-color-status-warning)]"}),jsxRuntimeExports.jsx("span",{className:"text-xs font-medium text-[var(--inkblot-semantic-color-text-primary)]",children:"AI Email Generator"})]}),jsxRuntimeExports.jsxs("div",{className:"space-y-3",children:[jsxRuntimeExports.jsx("textarea",{value:k,onChange:L=>D(L.target.value),rows:3,placeholder:"Describe the email you want to create...",className:"w-full resize-none rounded-[var(--inkblot-radius-md)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)] px-4 py-3 text-sm text-[var(--inkblot-semantic-color-text-primary)] placeholder:text-[var(--inkblot-semantic-color-text-tertiary)] outline-none"}),jsxRuntimeExports.jsx("div",{className:"flex flex-wrap gap-1.5",children:p.map(L=>jsxRuntimeExports.jsx("button",{type:"button",onClick:()=>D(L),className:"rounded-[var(--inkblot-radius-sm)] bg-[var(--inkblot-semantic-color-interactive-secondary)] px-2.5 py-1 text-[10px] text-[var(--inkblot-semantic-color-text-primary)] transition-opacity duration-[var(--inkblot-duration-fast)] hover:opacity-85",children:L},L))}),jsxRuntimeExports.jsx("button",{type:"button",onClick:z,disabled:!k.trim()||x,className:"flex items-center gap-2 rounded-[var(--inkblot-radius-md)] bg-[var(--inkblot-semantic-color-status-warning)]/10 px-4 py-2 text-xs font-medium text-[var(--inkblot-semantic-color-status-warning)] transition-opacity duration-[var(--inkblot-duration-fast)] disabled:opacity-40",children:x?jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsx(LoaderCircle,{className:"h-3 w-3 animate-spin"}),"Generating..."]}):P?jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsx(Check,{className:"h-3 w-3"}),"Applied to editor"]}):jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsx(Sparkles,{className:"h-3 w-3"}),"Generate Email"]})})]})]})}function io({label:t,icon:e,active:r=false,onClick:a,title:i,dataTour:n,className:s}){return jsxRuntimeExports.jsxs("button",{type:"button",onClick:a,"data-tour":n,className:o("group relative flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--inkblot-radius-md)] border border-transparent transition-colors duration-[var(--inkblot-duration-fast)]",r?"bg-[var(--inkblot-semantic-color-interactive-secondary)] text-[var(--inkblot-semantic-color-text-primary)]":"text-[var(--inkblot-semantic-color-text-tertiary)] hover:bg-[var(--inkblot-semantic-color-interactive-secondary-hover)] hover:text-[var(--inkblot-semantic-color-text-primary)]",s),title:i??t,"aria-current":r?"page":void 0,"aria-label":t,children:[jsxRuntimeExports.jsx(e,{className:"h-[18px] w-[18px]","aria-hidden":true}),r?jsxRuntimeExports.jsx("span",{className:"absolute left-0 top-1/2 h-4 w-[2px] -translate-y-1/2 rounded-r bg-[var(--inkblot-semantic-color-interactive-primary)]"}):null,jsxRuntimeExports.jsx("span",{className:"pointer-events-none absolute left-full z-50 ml-3 whitespace-nowrap rounded-[var(--inkblot-radius-sm)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)] px-2 py-1 text-xs font-medium text-[var(--inkblot-semantic-color-text-primary)] opacity-0 transition-opacity duration-[var(--inkblot-duration-fast)] group-hover:opacity-100",children:t})]})}var ud=[{id:"canvas",icon:MessageSquare,label:"Canvas",path:"/",dataTour:"nav-canvas"},{id:"invoices",icon:FileText,label:"Invoices & Deals",path:"/invoices",dataTour:"nav-invoices"},{id:"contacts",icon:Users,label:"Contacts",path:"/contacts",dataTour:"nav-contacts"},{id:"campaigns",icon:Mail,label:"Campaigns",path:"/campaigns",dataTour:"nav-campaigns"},{id:"tasks",icon:SquareCheckBig,label:"Tasks",path:"/tasks",dataTour:"nav-tasks"}],vd=[{id:"settings",icon:Settings,label:"Settings",path:"/settings",dataTour:"nav-settings"}];function _a({items:t=ud,bottomItems:e=vd,activePath:r="/",onNavigate:a,logo:i,showStatusDot:n=true,showThemeToggle:s=true,className:l}){return jsxRuntimeExports.jsxs("aside",{"data-tour":"sidebar",className:o("flex h-full w-16 flex-col items-center gap-1 border-r border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)] py-4",l),children:[jsxRuntimeExports.jsx("div",{className:"mb-6 flex h-9 w-9 items-center justify-center rounded-[var(--inkblot-radius-md)] bg-[var(--inkblot-semantic-color-interactive-primary)]",children:i??jsxRuntimeExports.jsx(Command,{className:"h-4 w-4 text-[var(--inkblot-semantic-color-text-inverse)]","aria-hidden":true})}),jsxRuntimeExports.jsx("nav",{className:"hide-scrollbar flex flex-1 flex-col gap-1 overflow-y-auto",children:t.map(c=>jsxRuntimeExports.jsx(io,{label:c.label,icon:c.icon,active:c.path===r,onClick:()=>a?.(c.path),dataTour:c.dataTour},c.id))}),jsxRuntimeExports.jsxs("div",{className:"flex flex-col gap-1",children:[e.map(c=>jsxRuntimeExports.jsx(io,{label:c.label,icon:c.icon,active:c.path===r,onClick:()=>a?.(c.path),dataTour:c.dataTour},c.id)),s?jsxRuntimeExports.jsxs("div",{className:"group relative flex justify-center",children:[jsxRuntimeExports.jsx(ur,{}),jsxRuntimeExports.jsx("span",{className:"pointer-events-none absolute left-full z-50 ml-3 whitespace-nowrap rounded-[var(--inkblot-radius-sm)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)] px-2 py-1 text-xs font-medium text-[var(--inkblot-semantic-color-text-primary)] opacity-0 transition-opacity duration-[var(--inkblot-duration-fast)] group-hover:opacity-100",children:"Theme"})]}):null,n?jsxRuntimeExports.jsx("span",{"data-tour":"system-status",className:"mx-auto mt-2 h-2 w-2 animate-pulse rounded-full bg-[var(--inkblot-semantic-color-status-success)]",title:"System Online"}):null]})]})}var hd=[{id:1,icon:Mail,title:"Email opened",meta:"Jane Smith \xB7 Acme Corp",time:"2m ago",status:"info"},{id:2,icon:CreditCard,title:"Invoice #1042 paid",meta:"$24,500 \xB7 TechVentures",time:"8m ago",status:"success"},{id:3,icon:Zap,title:"Pipeline stage changed",meta:"Negotiation \u2192 Closing",time:"14m ago",status:"warning"},{id:4,icon:Phone,title:"Call completed",meta:"12 min \xB7 Mark Johnson",time:"23m ago",status:"info"},{id:5,icon:FileText,title:"Contract signed",meta:"NDA \xB7 GlobalTech Inc",time:"1h ago",status:"success"},{id:6,icon:GitBranch,title:"New relationship detected",meta:"Acme \u2194 DataFlow Labs",time:"2h ago",status:"info"},{id:7,icon:CreditCard,title:"Invoice overdue",meta:"$8,200 \xB7 StartupXYZ",time:"3h ago",status:"danger"}],Nd={success:"bg-[var(--inkblot-semantic-color-status-success)]",warning:"bg-[var(--inkblot-semantic-color-status-warning)]",error:"bg-[var(--inkblot-semantic-color-status-error)]",danger:"bg-[var(--inkblot-semantic-color-status-error)]",info:"bg-[var(--inkblot-semantic-color-status-info)]"};function Ua({title:t="Event Stream",liveLabel:e="Live",events:r=hd,onItemClick:a,className:i}){return jsxRuntimeExports.jsxs("section",{className:o("p-4",i),children:[jsxRuntimeExports.jsxs("header",{className:"mb-4 flex items-center justify-between",children:[jsxRuntimeExports.jsx("h3",{className:"text-xs font-medium uppercase tracking-wide text-[var(--inkblot-semantic-color-text-tertiary)]",children:t}),jsxRuntimeExports.jsx("span",{className:"text-[10px] font-medium text-[var(--inkblot-semantic-color-text-tertiary)]",children:e})]}),jsxRuntimeExports.jsx("ul",{className:"space-y-1",children:r.map(n=>{let s=n.icon;return jsxRuntimeExports.jsx("li",{children:jsxRuntimeExports.jsxs("button",{type:"button",onClick:()=>a?.(n),className:"group flex w-full items-start gap-3 rounded-[var(--inkblot-radius-md)] px-2.5 py-2.5 text-left transition-colors duration-[var(--inkblot-duration-fast)] hover:bg-[var(--inkblot-semantic-color-interactive-secondary-hover)]",children:[jsxRuntimeExports.jsx("span",{className:"mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-[var(--inkblot-radius-sm)] bg-[var(--inkblot-semantic-color-background-tertiary)]",children:jsxRuntimeExports.jsx(s,{className:"h-3.5 w-3.5 text-[var(--inkblot-semantic-color-text-tertiary)] group-hover:text-[var(--inkblot-semantic-color-text-secondary)]","aria-hidden":true})}),jsxRuntimeExports.jsxs("span",{className:"min-w-0 flex-1",children:[jsxRuntimeExports.jsxs("span",{className:"flex items-center gap-2",children:[jsxRuntimeExports.jsx("span",{className:o("h-1.5 w-1.5 shrink-0 rounded-full",Nd[n.status])}),jsxRuntimeExports.jsx("span",{className:"truncate text-xs font-medium text-[var(--inkblot-semantic-color-text-primary)]",children:n.title})]}),jsxRuntimeExports.jsx("span",{className:"mt-0.5 block truncate text-[10px] text-[var(--inkblot-semantic-color-text-tertiary)]",children:n.meta})]}),jsxRuntimeExports.jsx("span",{className:"mt-0.5 shrink-0 text-[10px] text-[var(--inkblot-semantic-color-text-tertiary)]",children:n.time})]})},n.id)})})]})}const {createContext:wd,useContext:Cd,useState:Td,useCallback:ja} = await importShared('react');
var qa=wd(null);function Pd(){let t=Cd(qa);if(!t)throw new Error("useCanvas must be used within a CanvasProvider");return t}var Sd=[{id:"welcome-1",type:"text",content:"Welcome to Citron OS. Use the AI chat on the right to interact with your revenue engine."},{id:"welcome-2",type:"entity"},{id:"welcome-3",type:"intelligence"}];function lo({children:t,initialBlocks:e=Sd}){let[r,a]=Td(e),i=ja(s=>{a(l=>[...l,...s]);},[]),n=ja(()=>{a([]);},[]);return jsxRuntimeExports.jsx(qa.Provider,{value:{blocks:r,addBlocks:i,clearBlocks:n},children:t})}function TN({children:t,showEventFeed:e=false,sidebarProps:r,eventFeedProps:a,canvasProviderProps:i,className:n}){let s=jsxRuntimeExports.jsxs("div",{className:o("flex h-screen w-full overflow-hidden bg-[var(--inkblot-semantic-color-background-primary)]",n),children:[jsxRuntimeExports.jsx(_a,{...r}),jsxRuntimeExports.jsxs("main",{className:"flex flex-1 overflow-hidden",children:[jsxRuntimeExports.jsx("section",{"data-tour":"canvas",className:"hide-scrollbar flex-1 overflow-y-auto",children:t}),e&&jsxRuntimeExports.jsx("aside",{"data-tour":"event-feed",className:"flex w-80 flex-col overflow-hidden border-l border-[var(--inkblot-semantic-color-border-default)]",children:jsxRuntimeExports.jsx(Ua,{...a})})]})]});return i?jsxRuntimeExports.jsx(lo,{...i,children:s}):s}function Ed({ratio:t=16/9,children:e,className:r}){let a=Number.isFinite(t)&&t>0?t:1.7777777777777777;return jsxRuntimeExports.jsxs("div",{className:o("relative w-full overflow-hidden",r),children:[jsxRuntimeExports.jsx("div",{style:{paddingTop:`${1/a*100}%`}}),jsxRuntimeExports.jsx("div",{className:"absolute inset-0",children:e})]})}var Ld={default:"bg-[var(--inkblot-semantic-color-interactive-primary)] text-[var(--inkblot-semantic-color-text-inverse)]",secondary:"bg-[var(--inkblot-semantic-color-background-tertiary)] text-[var(--inkblot-semantic-color-text-primary)]",success:"bg-[var(--inkblot-semantic-color-status-success)]/15 text-[var(--inkblot-semantic-color-status-success)]",warning:"bg-[var(--inkblot-semantic-color-status-warning)]/15 text-[var(--inkblot-semantic-color-status-warning)]",error:"bg-[var(--inkblot-semantic-color-status-error)]/15 text-[var(--inkblot-semantic-color-status-error)]",outline:"border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)] text-[var(--inkblot-semantic-color-text-primary)]"};function Ad({children:t,variant:e="default",disabled:r=false,className:a}){return jsxRuntimeExports.jsx("span",{"aria-disabled":r,className:o("inline-flex min-h-[calc(var(--inkblot-size-touch-target-min)-1rem)] items-center justify-center rounded-[var(--inkblot-radius-full)] px-[var(--inkblot-spacing-2)] py-[var(--inkblot-spacing-1)] text-xs font-semibold transition-colors duration-[var(--inkblot-duration-fast)] ease-[var(--inkblot-easing-default)]",Ld[e],r&&"opacity-[var(--inkblot-opacity-disabled)]",a),children:t})}function Hd({items:t,className:e}){return jsxRuntimeExports.jsx("nav",{"aria-label":"Breadcrumb",className:o("w-full",e),children:jsxRuntimeExports.jsx("ol",{className:"flex flex-wrap items-center gap-[var(--inkblot-spacing-2)]",children:t.map((r,a)=>{let i=r.href&&!r.disabled&&!r.current?jsxRuntimeExports.jsx("a",{href:r.href,onClick:r.onClick,className:"rounded-[var(--inkblot-radius-sm)] text-sm text-[var(--inkblot-semantic-color-text-secondary)] transition-colors duration-[var(--inkblot-duration-fast)] ease-[var(--inkblot-easing-default)] hover:text-[var(--inkblot-semantic-color-text-primary)]",children:r.label}):jsxRuntimeExports.jsx("span",{"aria-current":r.current?"page":void 0,className:o("text-sm",r.current?"font-semibold text-[var(--inkblot-semantic-color-text-primary)]":"text-[var(--inkblot-semantic-color-text-tertiary)]",r.disabled&&"opacity-[var(--inkblot-opacity-disabled)]"),children:r.label});return jsxRuntimeExports.jsxs("li",{className:"flex items-center gap-[var(--inkblot-spacing-2)]",children:[i,a<t.length-1&&jsxRuntimeExports.jsx(ChevronRight,{className:"h-4 w-4 text-[var(--inkblot-semantic-color-text-tertiary)]"})]},r.id)})})})}const {useMemo:Za,useState:zd} = await importShared('react');
var Fd=["L","M","X","J","V","S","D"];function Qa(t){return new Date(t.getFullYear(),t.getMonth(),1)}function Gd(t){return new Date(t.getFullYear(),t.getMonth()+1,0)}function Kd(t,e){return t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth()&&t.getDate()===e.getDate()}function co(t){return `${t.getFullYear()}-${t.getMonth()}-${t.getDate()}`}function Wd(t){let e=Qa(t),r=Gd(t),a=(e.getDay()+6)%7,i=r.getDate(),n=[];for(let s=0;s<a;s+=1)n.push(null);for(let s=1;s<=i;s+=1)n.push(new Date(t.getFullYear(),t.getMonth(),s));for(;n.length%7!==0;)n.push(null);return n}function _d({value:t,onChange:e,disabledDates:r,className:a}){let i=t??new Date,[n,s]=zd(Qa(i)),l=Za(()=>Wd(n),[n]),c=Za(()=>new Set((r??[]).map(co)),[r]);return jsxRuntimeExports.jsxs("div",{className:o("w-[320px] rounded-[var(--inkblot-radius-lg)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)] p-[var(--inkblot-spacing-4)] text-[var(--inkblot-semantic-color-text-primary)]",a),children:[jsxRuntimeExports.jsxs("div",{className:"mb-[var(--inkblot-spacing-3)] flex items-center justify-between",children:[jsxRuntimeExports.jsx("button",{type:"button",onClick:()=>s(new Date(n.getFullYear(),n.getMonth()-1,1)),className:"inline-flex h-8 w-8 items-center justify-center rounded-[var(--inkblot-radius-md)] text-[var(--inkblot-semantic-color-text-secondary)] hover:bg-[var(--inkblot-semantic-color-background-tertiary)]",children:jsxRuntimeExports.jsx(ChevronLeft,{className:"h-4 w-4"})}),jsxRuntimeExports.jsx("div",{className:"font-semibold",children:n.toLocaleDateString("es-ES",{month:"long",year:"numeric"})}),jsxRuntimeExports.jsx("button",{type:"button",onClick:()=>s(new Date(n.getFullYear(),n.getMonth()+1,1)),className:"inline-flex h-8 w-8 items-center justify-center rounded-[var(--inkblot-radius-md)] text-[var(--inkblot-semantic-color-text-secondary)] hover:bg-[var(--inkblot-semantic-color-background-tertiary)]",children:jsxRuntimeExports.jsx(ChevronRight,{className:"h-4 w-4"})})]}),jsxRuntimeExports.jsxs("div",{className:"grid grid-cols-7 gap-[var(--inkblot-spacing-1)]",children:[Fd.map(d=>jsxRuntimeExports.jsx("div",{className:"pb-[var(--inkblot-spacing-1)] text-center text-xs font-medium text-[var(--inkblot-semantic-color-text-tertiary)]",children:d},d)),l.map((d,m)=>{if(!d)return jsxRuntimeExports.jsx("div",{className:"h-9"},`empty-${m}`);let p=c.has(co(d)),b=t?Kd(d,t):false;return jsxRuntimeExports.jsx("button",{type:"button",disabled:p,onClick:()=>e?.(d),className:o("h-9 rounded-[var(--inkblot-radius-md)] text-sm transition-colors duration-[var(--inkblot-duration-fast)] ease-[var(--inkblot-easing-default)]",b?"bg-[var(--inkblot-semantic-color-interactive-primary)] text-[var(--inkblot-semantic-color-text-inverse)]":"text-[var(--inkblot-semantic-color-text-primary)] hover:bg-[var(--inkblot-semantic-color-background-tertiary)]",p&&"cursor-not-allowed opacity-[var(--inkblot-opacity-disabled)]"),children:d.getDate()},co(d))})]})]})}function $d({className:t,interactive:e=false,disabled:r=false,...a}){return jsxRuntimeExports.jsx("div",{"aria-disabled":r,className:o("w-full rounded-[var(--inkblot-radius-xl)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)] text-[var(--inkblot-semantic-color-text-primary)]",e&&"transition-[border-color,transform,background] duration-[var(--inkblot-duration-fast)] ease-[var(--inkblot-easing-default)] hover:border-[var(--inkblot-semantic-color-border-strong)] hover:bg-[var(--inkblot-semantic-color-background-tertiary)] active:translate-y-px",r&&"pointer-events-none opacity-[var(--inkblot-opacity-disabled)]",t),...a})}function Ud({className:t,...e}){return jsxRuntimeExports.jsx("div",{className:o("flex flex-col gap-[var(--inkblot-spacing-1)] p-[var(--inkblot-spacing-5)]",t),...e})}function jd({className:t,...e}){return jsxRuntimeExports.jsx("h3",{className:o("text-base font-semibold text-[var(--inkblot-semantic-color-text-primary)]",t),...e})}function qd({className:t,...e}){return jsxRuntimeExports.jsx("p",{className:o("text-sm text-[var(--inkblot-semantic-color-text-secondary)]",t),...e})}function Yd({className:t,...e}){return jsxRuntimeExports.jsx("div",{className:o("px-[var(--inkblot-spacing-5)] pb-[var(--inkblot-spacing-5)]",t),...e})}function Xd({className:t,...e}){return jsxRuntimeExports.jsx("div",{className:o("flex items-center justify-end gap-[var(--inkblot-spacing-2)] border-t border-[var(--inkblot-semantic-color-border-default)] px-[var(--inkblot-spacing-5)] py-[var(--inkblot-spacing-4)]",t),...e})}const {useState:Zd} = await importShared('react');
function tm({items:t,initialIndex:e=0,loop:r=false,className:a}){let[i,n]=Zd(Math.min(Math.max(e,0),Math.max(t.length-1,0))),s=r||i>0,l=r||i<t.length-1,c=()=>{if(t.length!==0){if(r){n(m=>(m-1+t.length)%t.length);return}n(m=>Math.max(m-1,0));}},d=()=>{if(t.length!==0){if(r){n(m=>(m+1)%t.length);return}n(m=>Math.min(m+1,t.length-1));}};return jsxRuntimeExports.jsxs("div",{className:o("w-full rounded-[var(--inkblot-radius-xl)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)] p-[var(--inkblot-spacing-4)]",a),children:[jsxRuntimeExports.jsx("div",{className:"relative overflow-hidden rounded-[var(--inkblot-radius-lg)]",children:jsxRuntimeExports.jsx("div",{className:"flex transition-transform duration-[var(--inkblot-duration-normal)] ease-[var(--inkblot-easing-default)]",style:{transform:`translateX(-${i*100}%)`},children:t.map((m,p)=>jsxRuntimeExports.jsx("div",{className:"w-full shrink-0",children:m},p))})}),jsxRuntimeExports.jsxs("div",{className:"mt-[var(--inkblot-spacing-3)] flex items-center justify-between",children:[jsxRuntimeExports.jsx("div",{className:"text-sm text-[var(--inkblot-semantic-color-text-secondary)]",children:t.length>0?`${i+1} de ${t.length}`:"Sin elementos"}),jsxRuntimeExports.jsxs("div",{className:"flex gap-[var(--inkblot-spacing-2)]",children:[jsxRuntimeExports.jsx("button",{type:"button",onClick:c,disabled:!s||t.length===0,className:"inline-flex h-9 w-9 items-center justify-center rounded-[var(--inkblot-radius-md)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-interactive-secondary)] text-[var(--inkblot-semantic-color-text-primary)] hover:bg-[var(--inkblot-semantic-color-interactive-secondary-hover)] disabled:cursor-not-allowed disabled:opacity-[var(--inkblot-opacity-disabled)]",children:jsxRuntimeExports.jsx(ChevronLeft,{className:"h-4 w-4"})}),jsxRuntimeExports.jsx("button",{type:"button",onClick:d,disabled:!l||t.length===0,className:"inline-flex h-9 w-9 items-center justify-center rounded-[var(--inkblot-radius-md)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-interactive-secondary)] text-[var(--inkblot-semantic-color-text-primary)] hover:bg-[var(--inkblot-semantic-color-interactive-secondary-hover)] disabled:cursor-not-allowed disabled:opacity-[var(--inkblot-opacity-disabled)]",children:jsxRuntimeExports.jsx(ChevronRight,{className:"h-4 w-4"})})]})]})]})}function em({data:t,title:e="Rendimiento",emptyMessage:r="No data to display.",className:a}){let i=Math.max(...t.map(n=>n.value),0);return jsxRuntimeExports.jsxs("div",{className:o("w-full rounded-[var(--inkblot-radius-xl)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)] p-[var(--inkblot-spacing-5)]",a),children:[jsxRuntimeExports.jsx("h3",{className:"mb-[var(--inkblot-spacing-4)] text-sm font-semibold text-[var(--inkblot-semantic-color-text-primary)]",children:e}),t.length===0?jsxRuntimeExports.jsx("div",{className:"rounded-[var(--inkblot-radius-md)] bg-[var(--inkblot-semantic-color-background-tertiary)] px-[var(--inkblot-spacing-3)] py-[var(--inkblot-spacing-4)] text-sm text-[var(--inkblot-semantic-color-text-secondary)]",children:r}):jsxRuntimeExports.jsx("div",{className:"flex flex-col gap-[var(--inkblot-spacing-3)]",children:t.map(n=>{let s=i>0?n.value/i*100:0;return jsxRuntimeExports.jsxs("div",{className:"grid grid-cols-[120px_1fr_48px] items-center gap-[var(--inkblot-spacing-3)]",children:[jsxRuntimeExports.jsx("span",{className:"truncate text-sm text-[var(--inkblot-semantic-color-text-secondary)]",children:n.label}),jsxRuntimeExports.jsx("div",{className:"h-3 overflow-hidden rounded-[var(--inkblot-radius-full)] bg-[var(--inkblot-semantic-color-background-tertiary)]",children:jsxRuntimeExports.jsx("div",{className:"h-full rounded-[var(--inkblot-radius-full)] bg-[var(--inkblot-semantic-color-interactive-primary)]",style:{width:`${s}%`,backgroundColor:n.color??"var(--inkblot-semantic-color-interactive-primary)"}})}),jsxRuntimeExports.jsx("span",{className:"text-right text-sm font-medium text-[var(--inkblot-semantic-color-text-primary)]",children:n.value})]},n.id)})})]})}const {useState:rm} = await importShared('react');
function am({checked:t,defaultChecked:e=false,onCheckedChange:r,label:a,description:i,disabled:n=false,error:s=false,className:l}){let[c,d]=rm(e),m=t!==void 0,p=m?t:c,b=v=>{m||d(v),r?.(v);};return jsxRuntimeExports.jsxs("label",{className:o("inline-flex items-start gap-[var(--inkblot-spacing-3)] text-[var(--inkblot-semantic-color-text-primary)]",n&&"cursor-not-allowed opacity-[var(--inkblot-opacity-disabled)]",l),children:[jsxRuntimeExports.jsx("button",{type:"button",role:"checkbox","aria-checked":p,disabled:n,onClick:()=>b(!p),className:o("mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-[var(--inkblot-radius-sm)] border transition-colors duration-[var(--inkblot-duration-fast)] ease-[var(--inkblot-easing-default)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--inkblot-semantic-color-border-focus)] focus-visible:outline-offset-2",p?"border-[var(--inkblot-semantic-color-interactive-primary)] bg-[var(--inkblot-semantic-color-interactive-primary)] text-[var(--inkblot-semantic-color-text-inverse)]":"border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)] hover:border-[var(--inkblot-semantic-color-border-strong)]",s&&!p&&"border-[var(--inkblot-semantic-color-status-error)]"),children:p&&jsxRuntimeExports.jsx(Check,{className:"h-4 w-4"})}),(a||i)&&jsxRuntimeExports.jsxs("span",{className:"flex flex-col gap-[var(--inkblot-spacing-1)]",children:[a&&jsxRuntimeExports.jsx("span",{className:"text-sm font-medium",children:a}),i&&jsxRuntimeExports.jsx("span",{className:o("text-xs text-[var(--inkblot-semantic-color-text-secondary)]",s&&!p&&"text-[var(--inkblot-semantic-color-status-error)]"),children:i})]})]})}var nm={success:"var(--inkblot-semantic-color-status-success)",warning:"var(--inkblot-semantic-color-status-warning)",error:"var(--inkblot-semantic-color-status-error)",info:"var(--inkblot-semantic-color-status-info)",primary:"var(--inkblot-semantic-color-interactive-primary)"};function en({label:t,value:e,tone:r="primary",color:a,inverted:i=false,size:n=72,className:s}){let l=Math.max(0,Math.min(100,e)),c=i?100-l:l,d=5,m=(n-d)/2,p=2*Math.PI*m,b=p-c/100*p,v=a??nm[r];return jsxRuntimeExports.jsx("div",{className:s,children:jsxRuntimeExports.jsxs("div",{className:"flex flex-col items-center gap-2",children:[jsxRuntimeExports.jsxs("div",{className:"relative",style:{width:n,height:n},children:[jsxRuntimeExports.jsxs("svg",{width:n,height:n,className:"-rotate-90",children:[jsxRuntimeExports.jsx("circle",{cx:n/2,cy:n/2,r:m,fill:"none",stroke:"var(--inkblot-semantic-color-background-tertiary)",strokeWidth:d}),jsxRuntimeExports.jsx("circle",{cx:n/2,cy:n/2,r:m,fill:"none",stroke:v,strokeWidth:d,strokeDasharray:p,strokeDashoffset:b,strokeLinecap:"round",className:"transition-[stroke-dashoffset] duration-[var(--inkblot-duration-fast)]"})]}),jsxRuntimeExports.jsx("span",{className:"absolute inset-0 flex items-center justify-center text-sm font-semibold text-[var(--inkblot-semantic-color-text-primary)]",children:l})]}),jsxRuntimeExports.jsx("span",{className:"text-center text-[10px] leading-tight text-[var(--inkblot-semantic-color-text-tertiary)]",children:t})]})})}const {useState:im} = await importShared('react');
function lm({title:t,children:e,defaultOpen:r=false,disabled:a=false,className:i}){let[n,s]=im(r);return jsxRuntimeExports.jsxs("div",{className:o("w-full rounded-[var(--inkblot-radius-lg)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)]",a&&"opacity-[var(--inkblot-opacity-disabled)]",i),children:[jsxRuntimeExports.jsxs("button",{type:"button",disabled:a,"aria-expanded":n,onClick:()=>s(l=>!l),className:o("flex min-h-[var(--inkblot-size-touch-target-min)] w-full items-center justify-between gap-[var(--inkblot-spacing-3)] px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-3)] text-left text-[var(--inkblot-semantic-color-text-primary)]",!a&&"hover:bg-[var(--inkblot-semantic-color-background-tertiary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--inkblot-semantic-color-border-focus)] focus-visible:outline-offset-[-2px]"),children:[jsxRuntimeExports.jsx("span",{className:"font-medium",children:t}),jsxRuntimeExports.jsx(ChevronDown,{className:o("h-4 w-4 text-[var(--inkblot-semantic-color-text-tertiary)] transition-transform duration-[var(--inkblot-duration-fast)] ease-[var(--inkblot-easing-default)]",n&&"rotate-180")})]}),n&&jsxRuntimeExports.jsx("div",{className:"border-t border-[var(--inkblot-semantic-color-border-default)] px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-4)] text-sm text-[var(--inkblot-semantic-color-text-secondary)]",children:e})]})}const {useMemo:cm,useState:dm} = await importShared('react');
function pm({items:t,placeholder:e="Search commands...",onSelect:r,className:a}){let[i,n]=dm(""),s=cm(()=>{let l=i.trim().toLowerCase();return l?t.filter(c=>{let d=c.label.toLowerCase().includes(l),m=(c.keywords??[]).some(p=>p.toLowerCase().includes(l));return d||m}):t},[t,i]);return jsxRuntimeExports.jsxs("div",{className:o("w-full rounded-[var(--inkblot-radius-xl)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)]",a),children:[jsxRuntimeExports.jsxs("div",{className:"flex items-center gap-[var(--inkblot-spacing-2)] border-b border-[var(--inkblot-semantic-color-border-default)] px-[var(--inkblot-spacing-3)]",children:[jsxRuntimeExports.jsx(Search,{className:"h-4 w-4 text-[var(--inkblot-semantic-color-text-tertiary)]"}),jsxRuntimeExports.jsx("input",{value:i,onChange:l=>n(l.target.value),placeholder:e,className:"h-11 w-full bg-transparent text-sm text-[var(--inkblot-semantic-color-text-primary)] outline-none placeholder:text-[var(--inkblot-semantic-color-text-tertiary)]"})]}),jsxRuntimeExports.jsx("div",{className:"max-h-[280px] overflow-y-auto p-[var(--inkblot-spacing-2)]",children:s.length>0?jsxRuntimeExports.jsx("ul",{className:"flex flex-col gap-[var(--inkblot-spacing-1)]",children:s.map(l=>jsxRuntimeExports.jsx("li",{children:jsxRuntimeExports.jsxs("button",{type:"button",disabled:l.disabled,onClick:()=>r?.(l),className:o("flex min-h-[var(--inkblot-size-touch-target-min)] w-full items-center gap-[var(--inkblot-spacing-2)] rounded-[var(--inkblot-radius-md)] px-[var(--inkblot-spacing-3)] text-left text-sm text-[var(--inkblot-semantic-color-text-primary)] transition-colors duration-[var(--inkblot-duration-fast)] ease-[var(--inkblot-easing-default)]",l.disabled?"cursor-not-allowed opacity-[var(--inkblot-opacity-disabled)]":"hover:bg-[var(--inkblot-semantic-color-background-tertiary)] active:bg-[var(--inkblot-semantic-color-background-tertiary)]"),children:[l.icon&&jsxRuntimeExports.jsx("span",{className:"text-[var(--inkblot-semantic-color-text-tertiary)]",children:l.icon}),jsxRuntimeExports.jsx("span",{children:l.label})]})},l.id))}):jsxRuntimeExports.jsx("div",{className:"px-[var(--inkblot-spacing-2)] py-[var(--inkblot-spacing-3)] text-sm text-[var(--inkblot-semantic-color-text-secondary)]",children:"No results found."})})]})}const {useEffect:bm,useMemo:um,useRef:vm,useState:fo} = await importShared('react');
var gm=[{id:"1",role:"user",content:"Show me Acme Corp's profile and deal health."},{id:"2",role:"assistant",content:"Here's the entity profile and current intelligence insights for Acme Corp.",cards:["entity","intelligence"]}],go="rounded-[var(--inkblot-radius-md)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)] p-3 text-xs text-[var(--inkblot-semantic-color-text-tertiary)]";function _w({title:t="Command Canvas",subtitle:e="AI-native interface \u2014 results appear here",readyLabel:r="System ready",placeholder:a="Ask anything \u2014 deals, contacts, forecasts...",footerText:i="Citron OS v1.0 \xB7 AI-native Revenue & Operations Platform",blocks:n,renderBlock:s,messages:l,initialMessages:c=gm,onMessagesChange:d,inputValue:m,defaultInputValue:p="",onInputValueChange:b,autoAssistantResponse:v=true,assistantResponseDelayMs:f=700,isResponding:w,onRespondingChange:g,onSend:h,generateAssistantMessage:S,renderCard:N,hideInput:y=false,className:k}){let[u,x]=fo(c),[C,P]=fo(p),[D,E]=fo(false),V=vm(null),I=l!==void 0,z=I?l:u,L=m!==void 0,W=L?m:C,U=w!==void 0,jt=U?w:D,qt=W.trim().length>0&&!jt,Mr=um(()=>M=>({content:`Analyzing "${M}". Here are the latest insights.`,cards:["entity","intelligence"]}),[]),T=M=>{I||x(M),d?.(M);},q=M=>{L||P(M),b?.(M);},$=M=>{U||E(M),g?.(M);};bm(()=>()=>{V.current!==null&&window.clearTimeout(V.current);},[]);let ze=()=>{let M=W.trim();if(!M)return;let Yt={id:`${Date.now()}-user`,role:"user",content:M},Ko=[...z,Yt];T(Ko),q(""),h?.(M),v&&($(true),V.current=window.setTimeout(()=>{let Wo=(S??Mr)(M),Ai=[...Ko,{id:`${Date.now()}-assistant`,role:"assistant",content:Wo.content,cards:Wo.cards}];T(Ai),$(false);},f));},Go=n!==void 0,Li=M=>M.type==="text"?jsxRuntimeExports.jsxs("div",{className:"flex items-start gap-3",children:[jsxRuntimeExports.jsx("div",{className:"mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-[var(--inkblot-radius-sm)] bg-[var(--inkblot-semantic-color-interactive-primary)]/15",children:jsxRuntimeExports.jsx(Sparkles,{className:"h-3.5 w-3.5 text-[var(--inkblot-semantic-color-interactive-primary)]","aria-hidden":true})}),jsxRuntimeExports.jsx("p",{className:"pt-0.5 text-sm leading-relaxed text-[var(--inkblot-semantic-color-text-secondary)]",children:M.content})]}):M.type==="entity"?N?N("entity"):jsxRuntimeExports.jsx("div",{className:go,children:"Entity card preview"}):M.type==="intelligence"?N?N("intelligence"):jsxRuntimeExports.jsx("div",{className:go,children:"Intelligence card preview"}):M.type==="loading"?jsxRuntimeExports.jsxs("div",{className:"flex items-center gap-3",children:[jsxRuntimeExports.jsx("div",{className:"flex h-6 w-6 shrink-0 items-center justify-center rounded-[var(--inkblot-radius-sm)] bg-[var(--inkblot-semantic-color-interactive-primary)]/15",children:jsxRuntimeExports.jsx(Sparkles,{className:"h-3.5 w-3.5 animate-pulse text-[var(--inkblot-semantic-color-interactive-primary)]","aria-hidden":true})}),jsxRuntimeExports.jsxs("div",{className:"flex gap-1",children:[jsxRuntimeExports.jsx("span",{className:"h-1.5 w-1.5 animate-bounce rounded-full bg-[var(--inkblot-semantic-color-text-tertiary)]",style:{animationDelay:"0ms"}}),jsxRuntimeExports.jsx("span",{className:"h-1.5 w-1.5 animate-bounce rounded-full bg-[var(--inkblot-semantic-color-text-tertiary)]",style:{animationDelay:"150ms"}}),jsxRuntimeExports.jsx("span",{className:"h-1.5 w-1.5 animate-bounce rounded-full bg-[var(--inkblot-semantic-color-text-tertiary)]",style:{animationDelay:"300ms"}})]})]}):null;return jsxRuntimeExports.jsxs("section",{className:o("flex h-full flex-col",k),children:[jsxRuntimeExports.jsxs("header",{className:"flex items-center justify-between border-b border-[var(--inkblot-semantic-color-border-default)] px-8 py-5",children:[jsxRuntimeExports.jsxs("div",{children:[jsxRuntimeExports.jsx("h2",{className:"text-lg font-semibold tracking-tight text-[var(--inkblot-semantic-color-text-primary)]",children:t}),jsxRuntimeExports.jsx("p",{className:"mt-0.5 text-xs text-[var(--inkblot-semantic-color-text-tertiary)]",children:e})]}),jsxRuntimeExports.jsxs("div",{className:"flex items-center gap-2 text-xs text-[var(--inkblot-semantic-color-text-tertiary)]",children:[jsxRuntimeExports.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-[var(--inkblot-semantic-color-status-success)]"}),r]})]}),jsxRuntimeExports.jsx("div",{className:"hide-scrollbar flex-1 overflow-y-auto px-8 py-6",children:jsxRuntimeExports.jsx("div",{className:"mx-auto max-w-3xl space-y-6",children:Go?n.map(M=>jsxRuntimeExports.jsx("div",{children:s?s(M):Li(M)},M.id)):z.map(M=>M.role==="user"?jsxRuntimeExports.jsx("div",{className:"flex justify-end",children:jsxRuntimeExports.jsx("div",{className:"max-w-md rounded-2xl rounded-br-sm bg-[var(--inkblot-semantic-color-interactive-secondary)] px-4 py-2.5 text-sm leading-relaxed text-[var(--inkblot-semantic-color-text-primary)]",children:M.content})},M.id):jsxRuntimeExports.jsxs("div",{className:"space-y-4",children:[jsxRuntimeExports.jsxs("div",{className:"flex items-start gap-3",children:[jsxRuntimeExports.jsx("div",{className:"mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-[var(--inkblot-radius-sm)] bg-[var(--inkblot-semantic-color-interactive-primary)]/15",children:jsxRuntimeExports.jsx(Sparkles,{className:"h-3.5 w-3.5 text-[var(--inkblot-semantic-color-interactive-primary)]","aria-hidden":true})}),jsxRuntimeExports.jsx("p",{className:"pt-0.5 text-sm leading-relaxed text-[var(--inkblot-semantic-color-text-secondary)]",children:M.content})]}),M.cards?.length?jsxRuntimeExports.jsx("div",{className:"ml-9 grid gap-4",children:M.cards.map(Yt=>N?jsxRuntimeExports.jsx("div",{children:N(Yt)},Yt):jsxRuntimeExports.jsx("div",{className:go,children:Yt==="entity"?"Entity card preview":"Intelligence card preview"},Yt))}):null]},M.id))})}),!y&&!Go?jsxRuntimeExports.jsx("footer",{className:"border-t border-[var(--inkblot-semantic-color-border-default)] px-8 py-4",children:jsxRuntimeExports.jsxs("div",{className:"mx-auto max-w-3xl",children:[jsxRuntimeExports.jsxs("div",{className:"flex items-center gap-3 rounded-[var(--inkblot-radius-lg)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)] px-4 py-3",children:[jsxRuntimeExports.jsx(Sparkles,{className:"h-4 w-4 shrink-0 text-[var(--inkblot-semantic-color-text-tertiary)]"}),jsxRuntimeExports.jsx("input",{type:"text",value:W,onChange:M=>q(M.target.value),onKeyDown:M=>{M.key==="Enter"&&ze();},placeholder:a,className:"flex-1 bg-transparent text-sm text-[var(--inkblot-semantic-color-text-primary)] placeholder:text-[var(--inkblot-semantic-color-text-tertiary)] outline-none"}),jsxRuntimeExports.jsx("button",{type:"button",onClick:ze,disabled:!qt,className:"flex h-8 w-8 items-center justify-center rounded-[var(--inkblot-radius-sm)] bg-[var(--inkblot-semantic-color-interactive-primary)] text-[var(--inkblot-semantic-color-text-inverse)] transition-opacity duration-[var(--inkblot-duration-fast)] disabled:opacity-35","aria-label":"Send",children:jsxRuntimeExports.jsx(Send,{className:"h-3.5 w-3.5"})})]}),jsxRuntimeExports.jsx("p",{className:"mt-2 text-center text-[10px] text-[var(--inkblot-semantic-color-text-tertiary)]",children:i})]})}):jsxRuntimeExports.jsx("footer",{className:"border-t border-[var(--inkblot-semantic-color-border-default)] px-8 py-3",children:jsxRuntimeExports.jsx("p",{className:"text-center text-[10px] text-[var(--inkblot-semantic-color-text-tertiary)]",children:i})})]})}const {useEffect:km,useRef:ym,useState:on} = await importShared('react');
function xm({trigger:t,items:e,className:r}){let[a,i]=on(false),[n,s]=on({x:0,y:0}),l=ym(null);km(()=>{if(!a)return;let d=()=>i(false);return document.addEventListener("click",d),document.addEventListener("contextmenu",d),()=>{document.removeEventListener("click",d),document.removeEventListener("contextmenu",d);}},[a]);let c=d=>{d.preventDefault();let m=l.current?.getBoundingClientRect(),p=m?.left??0,b=m?.top??0;s({x:d.clientX-p,y:d.clientY-b}),i(true);};return jsxRuntimeExports.jsxs("div",{ref:l,className:o("relative w-full",r),onContextMenu:c,children:[t,a&&jsxRuntimeExports.jsx("div",{role:"menu",className:"absolute z-40 min-w-[220px] rounded-[var(--inkblot-radius-lg)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)] p-[var(--inkblot-spacing-1)] shadow-lg",style:{left:n.x,top:n.y},children:e.map(d=>jsxRuntimeExports.jsxs("button",{type:"button",role:"menuitem",disabled:d.disabled,onClick:()=>{d.onSelect?.(),i(false);},className:o("flex min-h-[var(--inkblot-size-touch-target-min)] w-full items-center justify-between gap-[var(--inkblot-spacing-2)] rounded-[var(--inkblot-radius-md)] px-[var(--inkblot-spacing-3)] text-sm transition-colors duration-[var(--inkblot-duration-fast)] ease-[var(--inkblot-easing-default)]",d.disabled?"cursor-not-allowed opacity-[var(--inkblot-opacity-disabled)]":"hover:bg-[var(--inkblot-semantic-color-background-tertiary)]",d.danger?"text-[var(--inkblot-semantic-color-status-error)]":"text-[var(--inkblot-semantic-color-text-primary)]"),children:[jsxRuntimeExports.jsxs("span",{className:"flex items-center gap-[var(--inkblot-spacing-2)]",children:[d.icon&&jsxRuntimeExports.jsx("span",{className:"text-[var(--inkblot-semantic-color-text-tertiary)]",children:d.icon}),jsxRuntimeExports.jsx("span",{children:d.label})]}),d.shortcut&&jsxRuntimeExports.jsx("span",{className:"text-xs text-[var(--inkblot-semantic-color-text-tertiary)]",children:d.shortcut})]},d.id))})]})}const {createContext:hm,forwardRef:xo,useCallback:yo,useContext:Nm,useEffect:an,useId:nn,useMemo:wm,useRef:sn,useState:Cm} = await importShared('react');
const {createPortal:Tm} = await importShared('react-dom');
var cn=hm(null);function ho(){let t=Nm(cn);if(!t)throw new Error("Dialog components must be used within Dialog");return t}function Sm({open:t,defaultOpen:e=false,onOpenChange:r,children:a}){let[i,n]=Cm(e),s=t!==void 0,l=s?t:i,c=yo(m=>{s||n(m),r?.(m);},[s,r]),d=wm(()=>({open:l,setOpen:c}),[l,c]);return jsxRuntimeExports.jsx(cn.Provider,{value:d,children:a})}var dn=xo(({className:t,type:e="button",onClick:r,...a},i)=>{let{setOpen:n}=ho();return jsxRuntimeExports.jsx("button",{ref:i,type:e,onClick:s=>{r?.(s),s.defaultPrevented||n(true);},className:o("inline-flex min-h-[var(--inkblot-size-touch-target-min)] items-center justify-center rounded-[var(--inkblot-radius-lg)] px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-2)]","bg-[var(--inkblot-semantic-color-interactive-primary)] text-[var(--inkblot-semantic-color-text-inverse)]","hover:bg-[var(--inkblot-semantic-color-interactive-primary-hover)] active:bg-[var(--inkblot-semantic-color-interactive-primary-active)]","focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--inkblot-semantic-color-border-focus)] focus-visible:outline-offset-2","disabled:opacity-[var(--inkblot-opacity-disabled)] disabled:pointer-events-none disabled:cursor-not-allowed","[font:var(--inkblot-semantic-typography-body-medium)]",t),...a})});dn.displayName="DialogTrigger";var mn=xo(({className:t,children:e,showCloseButton:r=true,initialFocusRef:a,...i},n)=>{let{open:s,setOpen:l}=ho(),c=nn(),d=nn(),m=sn(null),p=sn(null),b=yo(f=>{if(m.current=f,typeof n=="function"){n(f);return}n&&(n.current=f);},[n]),v=yo(()=>{l(false);},[l]);return an(()=>{if(!s)return;let f=w=>{w.key==="Escape"&&v();};return window.addEventListener("keydown",f),()=>{window.removeEventListener("keydown",f);}},[v,s]),an(()=>{if(!s)return;p.current=document.activeElement instanceof HTMLElement?document.activeElement:null;let f=a?.current,w=m.current?.querySelector('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])');return (f??w??m.current)?.focus(),()=>{p.current?.focus();}},[a,s]),!s||typeof document>"u"?null:Tm(jsxRuntimeExports.jsxs("div",{className:o("fixed inset-0 z-50 flex items-center justify-center p-[var(--inkblot-spacing-6)]"),children:[jsxRuntimeExports.jsx("button",{type:"button","aria-label":"Close dialog",className:o("absolute inset-0 bg-[var(--inkblot-semantic-color-background-primary)]/70"),onClick:v}),jsxRuntimeExports.jsxs("div",{ref:b,role:"dialog","aria-modal":"true","aria-labelledby":c,"aria-describedby":d,tabIndex:-1,className:o("relative z-10 w-full max-w-[calc(var(--inkblot-size-touch-target-min)*10)] rounded-[var(--inkblot-radius-xl)] border border-[var(--inkblot-semantic-color-border-default)]","bg-[var(--inkblot-semantic-color-background-primary)] p-[var(--inkblot-spacing-6)]","shadow-[var(--inkblot-shadow-lg)]",t),...i,children:[r?jsxRuntimeExports.jsx(No,{"aria-label":"Close dialog",className:o("absolute right-[var(--inkblot-spacing-4)] top-[var(--inkblot-spacing-4)] rounded-[var(--inkblot-radius-md)] p-[var(--inkblot-spacing-2)]"),children:jsxRuntimeExports.jsx(X,{style:{width:"var(--inkblot-spacing-4)",height:"var(--inkblot-spacing-4)"}})}):null,jsxRuntimeExports.jsx("div",{id:c,className:"sr-only"}),jsxRuntimeExports.jsx("div",{id:d,className:"sr-only"}),e]})]}),document.body)});mn.displayName="DialogContent";function Mm({className:t,...e}){return jsxRuntimeExports.jsx("div",{className:o("mb-[var(--inkblot-spacing-4)] grid gap-[var(--inkblot-spacing-2)]",t),...e})}function Em({className:t,...e}){return jsxRuntimeExports.jsx("h2",{className:o("text-[var(--inkblot-semantic-color-text-primary)] [font:var(--inkblot-semantic-typography-heading-small)]",t),...e})}function Im({className:t,...e}){return jsxRuntimeExports.jsx("p",{className:o("text-[var(--inkblot-semantic-color-text-secondary)] [font:var(--inkblot-semantic-typography-body-medium)]",t),...e})}function Lm({className:t,...e}){return jsxRuntimeExports.jsx("div",{className:o("mt-[var(--inkblot-spacing-6)] flex flex-wrap justify-end gap-[var(--inkblot-spacing-3)]",t),...e})}var No=xo(({className:t,type:e="button",onClick:r,...a},i)=>{let{setOpen:n}=ho();return jsxRuntimeExports.jsx("button",{ref:i,type:e,onClick:s=>{r?.(s),s.defaultPrevented||n(false);},className:o("inline-flex min-h-[var(--inkblot-size-touch-target-min)] items-center justify-center rounded-[var(--inkblot-radius-lg)] px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-2)]","bg-[var(--inkblot-semantic-color-interactive-secondary)] text-[var(--inkblot-semantic-color-text-primary)]","border border-[var(--inkblot-semantic-color-border-default)]","hover:bg-[var(--inkblot-semantic-color-interactive-secondary-hover)] hover:border-[var(--inkblot-semantic-color-border-strong)]","focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--inkblot-semantic-color-border-focus)] focus-visible:outline-offset-2","[font:var(--inkblot-semantic-typography-body-medium)]",t),...a})});No.displayName="DialogClose";const {createContext:Am,forwardRef:Co,useCallback:wo,useContext:Dm,useEffect:pn,useMemo:Rm,useRef:bn,useState:Hm} = await importShared('react');
const {createPortal:Bm} = await importShared('react-dom');
var un=Am(null);function To(){let t=Dm(un);if(!t)throw new Error("Drawer components must be used within Drawer");return t}function Om({children:t,open:e,defaultOpen:r=false,onOpenChange:a,side:i="right"}){let[n,s]=Hm(r),l=e!==void 0,c=l?e:n,d=wo(p=>{l||s(p),a?.(p);},[l,a]),m=Rm(()=>({open:c,setOpen:d,side:i}),[c,d,i]);return jsxRuntimeExports.jsx(un.Provider,{value:m,children:t})}var vn=Co(({className:t,type:e="button",onClick:r,...a},i)=>{let{setOpen:n}=To();return jsxRuntimeExports.jsx("button",{ref:i,type:e,onClick:s=>{r?.(s),s.defaultPrevented||n(true);},className:o("inline-flex min-h-[var(--inkblot-size-touch-target-min)] items-center justify-center rounded-[var(--inkblot-radius-lg)] px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-2)]","bg-[var(--inkblot-semantic-color-interactive-primary)] text-[var(--inkblot-semantic-color-text-inverse)]","hover:bg-[var(--inkblot-semantic-color-interactive-primary-hover)] active:bg-[var(--inkblot-semantic-color-interactive-primary-active)]","focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--inkblot-semantic-color-border-focus)] focus-visible:outline-offset-2",t),...a})});vn.displayName="DrawerTrigger";var fn=Co(({className:t,children:e,initialFocusRef:r,...a},i)=>{let{open:n,setOpen:s,side:l}=To(),c=bn(null),d=bn(null),m=wo(b=>{if(c.current=b,typeof i=="function"){i(b);return}i&&(i.current=b);},[i]),p=wo(()=>{s(false);},[s]);return pn(()=>{if(!n)return;let b=v=>{v.key==="Escape"&&p();};return window.addEventListener("keydown",b),()=>{window.removeEventListener("keydown",b);}},[p,n]),pn(()=>{if(!n)return;d.current=document.activeElement instanceof HTMLElement?document.activeElement:null;let b=r?.current,v=c.current?.querySelector('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])');return (b??v??c.current)?.focus(),()=>{d.current?.focus();}},[r,n]),!n||typeof document>"u"?null:Bm(jsxRuntimeExports.jsxs("div",{className:"fixed inset-0 z-50",children:[jsxRuntimeExports.jsx("button",{type:"button","aria-label":"Close drawer",className:"absolute inset-0 bg-[var(--inkblot-semantic-color-background-primary)]/70",onClick:p}),jsxRuntimeExports.jsx("div",{ref:m,role:"dialog","aria-modal":"true",tabIndex:-1,className:o("absolute top-0 h-full w-full max-w-[calc(var(--inkblot-size-touch-target-min)*7)] border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-primary)] p-[var(--inkblot-spacing-6)] shadow-[var(--inkblot-shadow-lg)]",l==="right"?"right-0 border-l":"left-0 border-r",t),...a,children:e})]}),document.body)});fn.displayName="DrawerContent";function Vm({className:t,...e}){return jsxRuntimeExports.jsx("div",{className:o("mb-[var(--inkblot-spacing-4)] grid gap-[var(--inkblot-spacing-2)]",t),...e})}function Fm({className:t,...e}){return jsxRuntimeExports.jsx("h2",{className:o("text-[var(--inkblot-semantic-color-text-primary)] [font:var(--inkblot-semantic-typography-heading-small)]",t),...e})}function Gm({className:t,...e}){return jsxRuntimeExports.jsx("p",{className:o("text-[var(--inkblot-semantic-color-text-secondary)] [font:var(--inkblot-semantic-typography-body-medium)]",t),...e})}function Km({className:t,...e}){return jsxRuntimeExports.jsx("div",{className:o("mt-[var(--inkblot-spacing-6)] flex flex-wrap justify-end gap-[var(--inkblot-spacing-3)]",t),...e})}var gn=Co(({className:t,type:e="button",onClick:r,children:a,...i},n)=>{let{setOpen:s}=To();return jsxRuntimeExports.jsx("button",{ref:n,type:e,onClick:l=>{r?.(l),l.defaultPrevented||s(false);},className:o("inline-flex min-h-[var(--inkblot-size-touch-target-min)] items-center justify-center gap-[var(--inkblot-spacing-2)] rounded-[var(--inkblot-radius-lg)] px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-2)]","bg-[var(--inkblot-semantic-color-interactive-secondary)] text-[var(--inkblot-semantic-color-text-primary)]","border border-[var(--inkblot-semantic-color-border-default)] hover:bg-[var(--inkblot-semantic-color-interactive-secondary-hover)]",t),...i,children:a??jsxRuntimeExports.jsx(X,{style:{width:"var(--inkblot-spacing-4)",height:"var(--inkblot-spacing-4)"}})})});gn.displayName="DrawerClose";const {createContext:_m,forwardRef:Po,useCallback:$m,useContext:Um,useEffect:jm,useMemo:qm,useRef:Ym,useState:Xm} = await importShared('react');
var kn=_m(null);function So(){let t=Um(kn);if(!t)throw new Error("DropdownMenu components must be used within DropdownMenu");return t}function Qm({children:t,open:e,defaultOpen:r=false,onOpenChange:a}){let[i,n]=Xm(r),s=Ym(null),l=e!==void 0,c=l?e:i,d=$m(p=>{l||n(p),a?.(p);},[l,a]);jm(()=>{if(!c)return;let p=v=>{let f=v.target;f&&s.current&&!s.current.contains(f)&&d(false);},b=v=>{v.key==="Escape"&&d(false);};return window.addEventListener("pointerdown",p),window.addEventListener("keydown",b),()=>{window.removeEventListener("pointerdown",p),window.removeEventListener("keydown",b);}},[c,d]);let m=qm(()=>({open:c,setOpen:d,containerRef:s}),[c,d]);return jsxRuntimeExports.jsx(kn.Provider,{value:m,children:jsxRuntimeExports.jsx("div",{ref:s,className:"relative inline-flex",children:t})})}var yn=Po(({className:t,type:e="button",showChevron:r=true,onClick:a,children:i,...n},s)=>{let{open:l,setOpen:c}=So();return jsxRuntimeExports.jsxs("button",{ref:s,type:e,"aria-haspopup":"menu","aria-expanded":l,onClick:d=>{a?.(d),d.defaultPrevented||c(!l);},className:o("inline-flex min-h-[var(--inkblot-size-touch-target-min)] items-center gap-[var(--inkblot-spacing-2)] rounded-[var(--inkblot-radius-lg)] border border-[var(--inkblot-semantic-color-border-default)]","bg-[var(--inkblot-semantic-color-interactive-secondary)] px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-2)]","text-[var(--inkblot-semantic-color-text-primary)] hover:bg-[var(--inkblot-semantic-color-interactive-secondary-hover)]","focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--inkblot-semantic-color-border-focus)] focus-visible:outline-offset-2","[font:var(--inkblot-semantic-typography-body-medium)]",t),...n,children:[i,r?jsxRuntimeExports.jsx(ChevronDown,{style:{width:"var(--inkblot-spacing-4)",height:"var(--inkblot-spacing-4)"}}):null]})});yn.displayName="DropdownMenuTrigger";var xn=Po(({className:t,...e},r)=>{let{open:a}=So();return a?jsxRuntimeExports.jsx("div",{ref:r,role:"menu",className:o("absolute right-0 top-[calc(100%+var(--inkblot-spacing-2))] z-40 min-w-[calc(var(--inkblot-size-touch-target-min)*4)] rounded-[var(--inkblot-radius-lg)] border border-[var(--inkblot-semantic-color-border-default)]","bg-[var(--inkblot-semantic-color-background-primary)] p-[var(--inkblot-spacing-2)] shadow-[var(--inkblot-shadow-md)]",t),...e}):null});xn.displayName="DropdownMenuContent";var hn=Po(({className:t,type:e="button",icon:r,onClick:a,children:i,...n},s)=>{let{setOpen:l}=So();return jsxRuntimeExports.jsxs("button",{ref:s,type:e,role:"menuitem",onClick:c=>{a?.(c),c.defaultPrevented||l(false);},className:o("flex min-h-[var(--inkblot-size-touch-target-min)] w-full items-center gap-[var(--inkblot-spacing-2)] rounded-[var(--inkblot-radius-md)] px-[var(--inkblot-spacing-3)] py-[var(--inkblot-spacing-2)]","text-left text-[var(--inkblot-semantic-color-text-primary)] hover:bg-[var(--inkblot-semantic-color-background-secondary)]","focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--inkblot-semantic-color-border-focus)] focus-visible:outline-offset-0","[font:var(--inkblot-semantic-typography-body-medium)]",t),...n,children:[r,i]})});hn.displayName="DropdownMenuItem";function Jm({className:t,...e}){return jsxRuntimeExports.jsx("div",{className:o("my-[var(--inkblot-spacing-2)] border-b border-[var(--inkblot-semantic-color-border-default)]",t),...e})}const {useMemo:wn,useState:tp} = await importShared('react');
var Tn=[{type:"heading",label:"Heading",icon:Type},{type:"text",label:"Text",icon:Type},{type:"image",label:"Image",icon:Image},{type:"button",label:"Button",icon:Square},{type:"divider",label:"Divider",icon:Minus},{type:"columns",label:"2 Columns",icon:Columns2}],cp={heading:"Your Heading Here",text:"Write your content here. Click to edit this text block.",image:"https://placehold.co/600x200",button:"Click Me",divider:"",columns:"Column 1 | Column 2"};function SC({blocks:t,onBlocksChange:e,availableBlockTypes:r,editingId:a,onEditingIdChange:i,onAddBlock:n,onDeleteBlock:s,onMoveBlock:l,onBlockContentChange:c,readOnly:d=false,className:m}){let[p,b]=tp(null),v=a!==void 0,f=v?a:p,w=u=>{v||b(u),i?.(u);},g=wn(()=>!r||r.length===0?Tn:Tn.filter(u=>r.includes(u.type)),[r]),h=wn(()=>t.reduce((u,x,C)=>(u[x.id]=C,u),{}),[t]),S=u=>{if(d)return;let x={id:`block-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,type:u,content:cp[u]};e([...t,x]),n?.(u,x);},N=(u,x)=>{d||(e(t.map(C=>C.id===u?{...C,content:x}:C)),c?.(u,x));},y=u=>{d||(e(t.filter(x=>x.id!==u)),s?.(u));},k=(u,x)=>{if(d)return;let C=h[u],P=C+x;if(P<0||P>=t.length)return;let D=[...t],[E]=D.splice(C,1);D.splice(P,0,E),e(D),l?.(u,x);};return jsxRuntimeExports.jsxs("section",{className:o("flex gap-4",m),children:[jsxRuntimeExports.jsxs("aside",{className:"w-44 shrink-0",children:[jsxRuntimeExports.jsx("span",{className:"text-[10px] uppercase tracking-wide text-[var(--inkblot-semantic-color-text-tertiary)]",children:"Blocks"}),jsxRuntimeExports.jsx("div",{className:"mt-2 space-y-1",children:g.map(u=>jsxRuntimeExports.jsxs("button",{type:"button",onClick:()=>S(u.type),disabled:d,className:"flex w-full items-center gap-2 rounded-[var(--inkblot-radius-md)] border border-[var(--inkblot-semantic-color-border-default)] px-3 py-2 text-xs text-[var(--inkblot-semantic-color-text-primary)] transition-colors duration-[var(--inkblot-duration-fast)] hover:bg-[var(--inkblot-semantic-color-interactive-secondary-hover)]",children:[jsxRuntimeExports.jsx(u.icon,{className:"h-3.5 w-3.5 text-[var(--inkblot-semantic-color-text-tertiary)]"}),u.label]},u.type))})]}),jsxRuntimeExports.jsx("div",{className:"glass min-h-[400px] flex-1 rounded-[var(--inkblot-radius-lg)] p-6",children:t.length===0?jsxRuntimeExports.jsxs("div",{className:"flex h-full flex-col items-center justify-center gap-3 text-center",children:[jsxRuntimeExports.jsx(MousePointerClick,{className:"h-8 w-8 text-[var(--inkblot-semantic-color-text-tertiary)]/40"}),jsxRuntimeExports.jsxs("div",{children:[jsxRuntimeExports.jsx("p",{className:"text-sm text-[var(--inkblot-semantic-color-text-tertiary)]",children:"Drop blocks here to build your email"}),jsxRuntimeExports.jsx("p",{className:"mt-1 text-[10px] text-[var(--inkblot-semantic-color-text-tertiary)]/60",children:"or use AI to generate a full layout"})]})]}):jsxRuntimeExports.jsx("div",{className:"space-y-2",children:t.map((u,x)=>jsxRuntimeExports.jsxs("article",{className:"group flex items-start gap-2",children:[jsxRuntimeExports.jsx("div",{className:"pt-1 text-[var(--inkblot-semantic-color-text-tertiary)]",children:jsxRuntimeExports.jsx(GripVertical,{className:"h-3.5 w-3.5"})}),jsxRuntimeExports.jsxs("div",{className:"flex-1 rounded-[var(--inkblot-radius-md)] border border-transparent p-3 transition-colors duration-[var(--inkblot-duration-fast)] group-hover:border-[var(--inkblot-semantic-color-border-default)]",children:[u.type==="heading"?jsxRuntimeExports.jsx("h2",{contentEditable:!d&&f===u.id,suppressContentEditableWarning:true,onClick:()=>{d||w(u.id);},onBlur:C=>{N(u.id,C.currentTarget.textContent??""),w(null);},className:"cursor-text text-xl font-bold text-[var(--inkblot-semantic-color-text-primary)] outline-none",children:u.content}):null,u.type==="text"?jsxRuntimeExports.jsx("p",{contentEditable:!d&&f===u.id,suppressContentEditableWarning:true,onClick:()=>{d||w(u.id);},onBlur:C=>{N(u.id,C.currentTarget.textContent??""),w(null);},className:"cursor-text text-sm leading-relaxed text-[var(--inkblot-semantic-color-text-secondary)] outline-none",children:u.content}):null,u.type==="image"?jsxRuntimeExports.jsx("div",{className:"flex h-32 items-center justify-center overflow-hidden rounded-[var(--inkblot-radius-md)] bg-[var(--inkblot-semantic-color-background-tertiary)]",children:jsxRuntimeExports.jsx(Image,{className:"h-8 w-8 text-[var(--inkblot-semantic-color-text-tertiary)]/50"})}):null,u.type==="button"?jsxRuntimeExports.jsx("div",{className:"flex justify-center",children:jsxRuntimeExports.jsx("span",{contentEditable:!d&&f===u.id,suppressContentEditableWarning:true,onClick:()=>{d||w(u.id);},onBlur:C=>{N(u.id,C.currentTarget.textContent??""),w(null);},className:"cursor-text rounded-[var(--inkblot-radius-md)] bg-[var(--inkblot-semantic-color-interactive-primary)] px-6 py-2.5 text-sm font-medium text-[var(--inkblot-semantic-color-text-inverse)] outline-none",children:u.content})}):null,u.type==="divider"?jsxRuntimeExports.jsx("hr",{className:"my-2 border-[var(--inkblot-semantic-color-border-default)]"}):null,u.type==="columns"?jsxRuntimeExports.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[jsxRuntimeExports.jsx("div",{className:"rounded-[var(--inkblot-radius-md)] bg-[var(--inkblot-semantic-color-background-tertiary)] p-4 text-center text-sm text-[var(--inkblot-semantic-color-text-tertiary)]",children:"Column 1"}),jsxRuntimeExports.jsx("div",{className:"rounded-[var(--inkblot-radius-md)] bg-[var(--inkblot-semantic-color-background-tertiary)] p-4 text-center text-sm text-[var(--inkblot-semantic-color-text-tertiary)]",children:"Column 2"})]}):null]}),jsxRuntimeExports.jsxs("div",{className:"flex flex-col gap-1 opacity-0 transition-opacity duration-[var(--inkblot-duration-fast)] group-hover:opacity-100",children:[jsxRuntimeExports.jsx("button",{type:"button",onClick:()=>k(u.id,-1),disabled:d||x===0,className:"rounded-[var(--inkblot-radius-sm)] p-1 text-[var(--inkblot-semantic-color-text-tertiary)] transition-colors duration-[var(--inkblot-duration-fast)] hover:bg-[var(--inkblot-semantic-color-interactive-secondary-hover)] disabled:opacity-30","aria-label":"Move up",children:jsxRuntimeExports.jsx(ChevronUp,{className:"h-3 w-3"})}),jsxRuntimeExports.jsx("button",{type:"button",onClick:()=>k(u.id,1),disabled:d||x===t.length-1,className:"rounded-[var(--inkblot-radius-sm)] p-1 text-[var(--inkblot-semantic-color-text-tertiary)] transition-colors duration-[var(--inkblot-duration-fast)] hover:bg-[var(--inkblot-semantic-color-interactive-secondary-hover)] disabled:opacity-30","aria-label":"Move down",children:jsxRuntimeExports.jsx(ChevronDown,{className:"h-3 w-3"})}),jsxRuntimeExports.jsx("button",{type:"button",onClick:()=>y(u.id),disabled:d,className:"rounded-[var(--inkblot-radius-sm)] p-1 text-[var(--inkblot-semantic-color-status-error)] transition-colors duration-[var(--inkblot-duration-fast)] hover:bg-[var(--inkblot-semantic-color-status-error)]/10","aria-label":"Delete block",children:jsxRuntimeExports.jsx(Trash2,{className:"h-3 w-3"})})]})]},u.id))})})]})}const {forwardRef:dp} = await importShared('react');
var Mn=dp(({className:t,...e},r)=>jsxRuntimeExports.jsx("form",{ref:r,className:o("grid gap-[var(--inkblot-spacing-4)] rounded-[var(--inkblot-radius-lg)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-primary)] p-[var(--inkblot-spacing-5)]",t),...e}));Mn.displayName="Form";function mp({className:t,label:e,hint:r,error:a,children:i,requiredIndicator:n,...s}){return jsxRuntimeExports.jsxs("div",{className:o("grid gap-[var(--inkblot-spacing-2)]",t),...s,children:[e?jsxRuntimeExports.jsxs("p",{className:"text-[var(--inkblot-semantic-color-text-primary)] [font:var(--inkblot-semantic-typography-body-medium)]",children:[e,n?jsxRuntimeExports.jsx("span",{className:"ml-[var(--inkblot-spacing-1)] text-[var(--inkblot-semantic-color-status-error)]",children:"*"}):null]}):null,i,a?jsxRuntimeExports.jsx("p",{className:"text-[var(--inkblot-semantic-color-status-error)] [font:var(--inkblot-semantic-typography-body-small)]",children:a}):r?jsxRuntimeExports.jsx("p",{className:"text-[var(--inkblot-semantic-color-text-secondary)] [font:var(--inkblot-semantic-typography-body-small)]",children:r}):null]})}function pp({className:t,...e}){return jsxRuntimeExports.jsx("div",{className:o("mt-[var(--inkblot-spacing-2)] flex flex-wrap justify-end gap-[var(--inkblot-spacing-3)]",t),...e})}const {useEffect:bp,useRef:up} = await importShared('react');
var vp=[{id:"1",label:"Acme Corp",kind:"org",x:400,y:250,score:82},{id:"2",label:"TechVentures",kind:"org",x:220,y:140,score:65},{id:"3",label:"DataFlow Labs",kind:"org",x:600,y:160,score:45},{id:"4",label:"Jane Smith",kind:"person",x:300,y:380,score:90},{id:"5",label:"Mark Johnson",kind:"person",x:520,y:370,score:72},{id:"6",label:"GlobalTech",kind:"org",x:160,y:300,score:38},{id:"7",label:"Sarah Lee",kind:"person",x:650,y:310,score:55}],fp=[{from:"1",to:"2",strength:.8},{from:"1",to:"3",strength:.5},{from:"1",to:"4",strength:.9},{from:"1",to:"5",strength:.7},{from:"2",to:"6",strength:.4},{from:"3",to:"7",strength:.6},{from:"4",to:"5",strength:.3},{from:"6",to:"4",strength:.5}];function gp(t,e,r,a){return t>=70?e:t>=50?r:a}function Rt(t,e){for(let r of e){let a=t.getPropertyValue(r).trim();if(a)return a}return ""}function Mo(t,e,r){if(e){t.font=e;return}t.font=r;}function FC({title:t="Entity Graph",subtitle:e,nodes:r=vp,edges:a=fp,className:i}){let n=up(null);bp(()=>{let l=n.current;if(!l)return;let c=l.getContext("2d");if(!c)return;let d=()=>{let m=l.getBoundingClientRect(),p=window.devicePixelRatio||1;l.width=m.width*p,l.height=m.height*p,c.setTransform(p,0,0,p,0,0),c.clearRect(0,0,m.width,m.height);let b=getComputedStyle(document.documentElement),v=Rt(b,["--inkblot-semantic-color-border-default","--inkblot-semantic-color-border-strong"]),f=Rt(b,["--inkblot-semantic-color-text-tertiary","--inkblot-semantic-color-text-secondary"]),w=Rt(b,["--inkblot-semantic-color-background-secondary","--inkblot-semantic-color-background-primary"]),g=Rt(b,["--inkblot-semantic-color-status-success","--inkblot-semantic-color-interactive-primary"]),h=Rt(b,["--inkblot-semantic-color-status-warning","--inkblot-semantic-color-status-info"]),S=Rt(b,["--inkblot-semantic-color-status-error","--inkblot-semantic-color-status-warning"]),N=Rt(b,["--inkblot-semantic-typography-body-small","--inkblot-semantic-typography-body-medium"]),y=Rt(b,["--inkblot-semantic-typography-body-medium","--inkblot-semantic-typography-body-small"]),k=c.font;a.forEach(u=>{let x=r.find(P=>P.id===u.from),C=r.find(P=>P.id===u.to);!x||!C||(c.beginPath(),c.moveTo(x.x,x.y),c.lineTo(C.x,C.y),c.strokeStyle=v,c.globalAlpha=Math.min(1,Math.max(0,u.strength*.45)),c.lineWidth=Math.max(1,u.strength*2),c.stroke(),c.globalAlpha=1);}),r.forEach(u=>{let x=gp(u.score,g,h,S),C=u.kind==="org"?28:22;c.beginPath(),c.arc(u.x,u.y,C+8,0,Math.PI*2),c.fillStyle=x,c.globalAlpha=.08,c.fill(),c.globalAlpha=1,c.beginPath(),c.arc(u.x,u.y,C,0,Math.PI*2),c.fillStyle=w,c.strokeStyle=x,c.globalAlpha=.7,c.lineWidth=1.5,c.fill(),c.stroke(),c.globalAlpha=1,c.fillStyle=x,Mo(c,N,k),c.textAlign="center",c.textBaseline="middle",c.fillText(u.kind==="org"?"\u2B21":"\u25CF",u.x,u.y),c.fillStyle=f,Mo(c,y,k),c.fillText(u.label,u.x,u.y+C+16),c.fillStyle=x,c.globalAlpha=.8,Mo(c,N,k),c.fillText(String(u.score),u.x,u.y+C+28),c.globalAlpha=1;});};return d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[a,r]);let s=e??`Relationship intelligence \xB7 ${r.length} nodes \xB7 ${a.length} edges`;return jsxRuntimeExports.jsxs("section",{className:o("flex h-full flex-col",i),children:[jsxRuntimeExports.jsxs("header",{className:"flex items-center justify-between border-b border-[var(--inkblot-semantic-color-border-default)] px-8 py-5",children:[jsxRuntimeExports.jsxs("div",{children:[jsxRuntimeExports.jsx("h2",{className:"text-lg font-semibold tracking-tight text-[var(--inkblot-semantic-color-text-primary)]",children:t}),jsxRuntimeExports.jsx("p",{className:"mt-0.5 text-xs text-[var(--inkblot-semantic-color-text-tertiary)]",children:s})]}),jsxRuntimeExports.jsxs("div",{className:"flex items-center gap-4 text-xs text-[var(--inkblot-semantic-color-text-tertiary)]",children:[jsxRuntimeExports.jsxs("span",{className:"flex items-center gap-1.5",children:[jsxRuntimeExports.jsx("span",{className:"h-2 w-2 rounded-full bg-[var(--inkblot-semantic-color-status-success)]"}),"Orgs"]}),jsxRuntimeExports.jsxs("span",{className:"flex items-center gap-1.5",children:[jsxRuntimeExports.jsx("span",{className:"h-2 w-2 rounded-full bg-[var(--inkblot-semantic-color-status-warning)]"}),"People"]})]})]}),jsxRuntimeExports.jsx("div",{className:"relative flex-1",children:jsxRuntimeExports.jsx("canvas",{ref:n,className:"h-full w-full"})})]})}const {useCallback:kp,useEffect:yp,useMemo:xp,useState:Eo} = await importShared('react');
var Tp=[{target:"[data-tour='sidebar']",title:"Navigation Sidebar",description:"Access all CRM modules from this sidebar. Each icon represents a different module.",position:"right"},{target:"[data-tour='canvas']",title:"AI Command Canvas",description:"This is your AI-powered command center where you can orchestrate tasks and workflows.",position:"bottom"},{target:"[data-tour='event-feed']",title:"Real-Time Event Feed",description:"Follow live system activity like stage updates, invoices, and communication events.",position:"left"},{target:"[data-tour='system-status']",title:"System Status",description:"This indicator confirms platform health and connectivity.",position:"right"}];function qC({steps:t=Tp,open:e,defaultOpen:r=true,onOpenChange:a,stepIndex:i,defaultStepIndex:n=0,onStepIndexChange:s,onComplete:l,className:c}){let[d,m]=Eo(r),[p,b]=Eo(n),[v,f]=Eo(null),w=e??d,g=i??p,h=t[g],S=g===t.length-1,N=P=>{e===void 0&&m(P),a?.(P);},y=P=>{let D=Math.min(Math.max(P,0),Math.max(t.length-1,0));i===void 0&&b(D),s?.(D);},k=kp(()=>{let P=document.querySelector(h.target);if(!P){f(null);return}f(P.getBoundingClientRect());},[h.target]);yp(()=>(k(),window.addEventListener("resize",k),window.addEventListener("scroll",k,true),()=>{window.removeEventListener("resize",k),window.removeEventListener("scroll",k,true);}),[k]);let u=()=>{if(S){N(false),l();return}y(g+1);},x=()=>{y(g-1);},C=xp(()=>{if(!v)return {top:"50%",left:"50%",transform:"translate(-50%, -50%)"};let P=16,D=320;return h.position==="right"?{top:v.top+v.height/2,left:v.right+P,transform:"translateY(-50%)"}:h.position==="left"?{top:v.top+v.height/2,left:v.left-D-P,transform:"translateY(-50%)"}:h.position==="top"?{top:v.top-P,left:v.left+v.width/2,transform:"translate(-50%, -100%)"}:{top:v.bottom+P,left:v.left+v.width/2,transform:"translateX(-50%)"}},[h.position,v]);return w?jsxRuntimeExports.jsxs("div",{className:o("fixed inset-0 z-[200]",c),children:[v?jsxRuntimeExports.jsx("div",{className:"pointer-events-none absolute rounded-[var(--inkblot-radius-lg)] border-2 border-[var(--inkblot-semantic-color-interactive-primary)]/50",style:{top:v.top-6,left:v.left-6,width:v.width+12,height:v.height+12,boxShadow:"0 0 0 9999px var(--inkblot-semantic-color-background-inverse), var(--inkblot-shadow-lg)"}}):jsxRuntimeExports.jsx("div",{className:"absolute inset-0 bg-[var(--inkblot-semantic-color-background-inverse)]/70"}),jsxRuntimeExports.jsxs("div",{style:{...C,position:"absolute",width:320,zIndex:210},className:"rounded-[var(--inkblot-radius-lg)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)] p-5 shadow-[var(--inkblot-shadow-lg)]",children:[jsxRuntimeExports.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[jsxRuntimeExports.jsxs("span",{className:"text-[10px] uppercase tracking-wide text-[var(--inkblot-semantic-color-text-tertiary)]",children:["Step ",g+1," of ",t.length]}),jsxRuntimeExports.jsx("button",{type:"button",onClick:()=>{N(false),l();},className:"rounded-[var(--inkblot-radius-sm)] p-1 text-[var(--inkblot-semantic-color-text-tertiary)] transition-colors duration-[var(--inkblot-duration-fast)] hover:bg-[var(--inkblot-semantic-color-interactive-secondary-hover)]","aria-label":"Close tour",children:jsxRuntimeExports.jsx(X,{className:"h-3 w-3"})})]}),jsxRuntimeExports.jsx("h3",{className:"mb-1.5 text-sm font-semibold text-[var(--inkblot-semantic-color-text-primary)]",children:h.title}),jsxRuntimeExports.jsx("p",{className:"text-xs leading-relaxed text-[var(--inkblot-semantic-color-text-tertiary)]",children:h.description}),jsxRuntimeExports.jsx("div",{className:"mb-3 mt-4 flex gap-1",children:t.map((P,D)=>jsxRuntimeExports.jsx("span",{className:o("h-1 flex-1 rounded-full",D<=g?"bg-[var(--inkblot-semantic-color-interactive-primary)]":"bg-[var(--inkblot-semantic-color-background-tertiary)]")},`${D}-progress`))}),jsxRuntimeExports.jsxs("div",{className:"flex items-center justify-between",children:[jsxRuntimeExports.jsxs("button",{type:"button",onClick:x,disabled:g===0,className:"flex items-center gap-1 text-xs text-[var(--inkblot-semantic-color-text-tertiary)] transition-opacity duration-[var(--inkblot-duration-fast)] disabled:opacity-0",children:[jsxRuntimeExports.jsx(ArrowLeft,{className:"h-3 w-3"}),"Back"]}),jsxRuntimeExports.jsx("button",{type:"button",onClick:u,className:"flex items-center gap-1.5 rounded-[var(--inkblot-radius-md)] bg-[var(--inkblot-semantic-color-interactive-primary)] px-4 py-2 text-xs font-medium text-[var(--inkblot-semantic-color-text-inverse)]",children:S?jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsx(Check,{className:"h-3 w-3"}),"Get Started"]}):jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:["Next",jsxRuntimeExports.jsx(ArrowRight,{className:"h-3 w-3"})]})})]})]})]}):null}const {createContext:Pp,forwardRef:In,useContext:Sp,useMemo:Mp,useRef:Ep,useState:Ip} = await importShared('react');
var Ln=Pp(null);function An(){let t=Sp(Ln);if(!t)throw new Error("HoverCard components must be used within HoverCard");return t}function Lp({children:t,openDelay:e=120,closeDelay:r=120}){let[a,i]=Ip(false),n=Ep(null),s=Mp(()=>({open:a,setOpen:i,openDelay:e,closeDelay:r,timeoutRef:n}),[a,e,r]);return jsxRuntimeExports.jsx(Ln.Provider,{value:s,children:jsxRuntimeExports.jsx("div",{className:"relative inline-flex",children:t})})}var Dn=In(({className:t,onMouseEnter:e,onMouseLeave:r,onFocus:a,onBlur:i,...n},s)=>{let{setOpen:l,openDelay:c,closeDelay:d,timeoutRef:m}=An();return jsxRuntimeExports.jsx("div",{ref:s,tabIndex:0,onMouseEnter:p=>{e?.(p),m.current&&window.clearTimeout(m.current),m.current=window.setTimeout(()=>l(true),c);},onMouseLeave:p=>{r?.(p),m.current&&window.clearTimeout(m.current),m.current=window.setTimeout(()=>l(false),d);},onFocus:p=>{a?.(p),l(true);},onBlur:p=>{i?.(p),l(false);},className:o(t),...n})});Dn.displayName="HoverCardTrigger";var Rn=In(({className:t,onMouseEnter:e,onMouseLeave:r,...a},i)=>{let{open:n,setOpen:s,closeDelay:l,timeoutRef:c}=An();return n?jsxRuntimeExports.jsx("div",{ref:i,role:"dialog",onMouseEnter:d=>{e?.(d),c.current&&window.clearTimeout(c.current),s(true);},onMouseLeave:d=>{r?.(d),c.current&&window.clearTimeout(c.current),c.current=window.setTimeout(()=>s(false),l);},className:o("absolute left-0 top-[calc(100%+var(--inkblot-spacing-2))] z-40 min-w-[calc(var(--inkblot-size-touch-target-min)*4)] rounded-[var(--inkblot-radius-lg)] border border-[var(--inkblot-semantic-color-border-default)]","bg-[var(--inkblot-semantic-color-background-primary)] p-[var(--inkblot-spacing-4)] shadow-[var(--inkblot-shadow-md)]",t),...a}):null});Rn.displayName="HoverCardContent";const {forwardRef:Ap,useMemo:Dp,useRef:Rp,useState:Hp} = await importShared('react');
var Bn=Ap(({className:t,disabled:e,length:r=6,value:a,defaultValue:i="",onValueChange:n,containerProps:s,...l},c)=>{let[d,m]=Hp(i.slice(0,r)),p=Rp([]),b=a!==void 0,v=b?a.slice(0,r):d,f=Dp(()=>Array.from({length:r},(y,k)=>v[k]??""),[v,r]),w=y=>{let k=y.slice(0,r);b||m(k),n?.(k);},g=y=>{let k=p.current[y];k?.focus(),k?.select();},h=(y,k)=>{let u=k.replace(/[^0-9A-Za-z]/g,"").slice(0,1),x=f.map((C,P)=>P===y?u:C);w(x.join("")),u&&y<r-1&&g(y+1);},S=(y,k)=>{if(k.key==="Backspace"&&!f[y]&&y>0){let u=f.map((x,C)=>C===y-1?"":x);w(u.join("")),g(y-1);}k.key==="ArrowLeft"&&y>0&&(k.preventDefault(),g(y-1)),k.key==="ArrowRight"&&y<r-1&&(k.preventDefault(),g(y+1));};return jsxRuntimeExports.jsx("div",{ref:c,onPaste:y=>{y.preventDefault();let k=y.clipboardData.getData("text").replace(/[^0-9A-Za-z]/g,"").slice(0,r);k&&(w(k),g(Math.min(k.length,r-1)));},className:o("flex items-center gap-[var(--inkblot-spacing-2)]",t,s?.className),...s,children:f.map((y,k)=>jsxRuntimeExports.jsx("input",{ref:u=>{p.current[k]=u;},type:"text",inputMode:"numeric",maxLength:1,value:y,disabled:e,onChange:u=>h(k,u.target.value),onKeyDown:u=>S(k,u),className:o("min-h-[var(--inkblot-size-touch-target-min)] w-full rounded-[var(--inkblot-radius-md)] border border-[var(--inkblot-semantic-color-border-default)]","bg-[var(--inkblot-semantic-color-background-secondary)] px-[var(--inkblot-spacing-3)] py-[var(--inkblot-spacing-2)]","text-center text-[var(--inkblot-semantic-color-text-primary)] [font:var(--inkblot-semantic-typography-heading-small)]","focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--inkblot-semantic-color-border-focus)] focus-visible:outline-offset-2","disabled:opacity-[var(--inkblot-opacity-disabled)] disabled:pointer-events-none"),...l},`otp-slot-${k}`))})});Bn.displayName="InputOtp";var Bp=[{label:"Revenue Confidence",value:82,tone:"success"},{label:"Churn Risk",value:23,tone:"warning",inverted:true},{label:"Momentum",value:67,tone:"primary"}];function bT({title:t="Intelligence Scores",items:e=Bp,className:r}){return jsxRuntimeExports.jsxs("article",{className:o("glass rounded-[var(--inkblot-radius-lg)] p-5",r),children:[jsxRuntimeExports.jsx("h3",{className:"mb-4 text-xs font-medium uppercase tracking-wide text-[var(--inkblot-semantic-color-text-tertiary)]",children:t}),jsxRuntimeExports.jsx("div",{className:"grid grid-cols-3 gap-6",children:e.map(a=>jsxRuntimeExports.jsx(en,{label:a.label,value:a.value,tone:a.tone,color:a.color,inverted:a.inverted},a.label))})]})}const {forwardRef:Op} = await importShared('react');
var zn=Op(({className:t,children:e,requiredIndicator:r,...a},i)=>jsxRuntimeExports.jsxs("label",{ref:i,className:o("inline-flex items-center gap-[var(--inkblot-spacing-1)] text-[var(--inkblot-semantic-color-text-primary)] [font:var(--inkblot-semantic-typography-body-medium)]",t),...a,children:[e,r?jsxRuntimeExports.jsx("span",{className:"text-[var(--inkblot-semantic-color-status-error)]",children:"*"}):null]}));zn.displayName="Label";const {createContext:On,forwardRef:De,useContext:Vn,useMemo:Fn,useRef:Gp,useState:Kp} = await importShared('react');
var Gn=On(null);function Lo(){let t=Vn(Gn);if(!t)throw new Error("Menubar components must be used within Menubar");return t}var Kn=On(null);function Wn(){let t=Vn(Kn);if(!t)throw new Error("Menubar menu components must be used within MenubarMenu");return t}var _n=De(({className:t,...e},r)=>{let[a,i]=Kp(null),n=Fn(()=>({openMenuId:a,setOpenMenuId:i}),[a]);return jsxRuntimeExports.jsx(Gn.Provider,{value:n,children:jsxRuntimeExports.jsx("div",{ref:r,className:o("flex items-center gap-[var(--inkblot-spacing-2)] rounded-[var(--inkblot-radius-lg)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-primary)] p-[var(--inkblot-spacing-2)]",t),...e})})});_n.displayName="Menubar";function _p({id:t,className:e,...r}){let a=Fn(()=>({menuId:t}),[t]);return jsxRuntimeExports.jsx(Kn.Provider,{value:a,children:jsxRuntimeExports.jsx("div",{className:o("relative inline-flex",e),...r})})}var $n=De(({className:t,type:e="button",showChevron:r=true,onClick:a,children:i,...n},s)=>{let{openMenuId:l,setOpenMenuId:c}=Lo(),{menuId:d}=Wn(),m=l===d;return jsxRuntimeExports.jsxs("button",{ref:s,type:e,"aria-haspopup":"menu","aria-expanded":m,onClick:p=>{a?.(p),p.defaultPrevented||c(m?null:d);},className:o("inline-flex min-h-[var(--inkblot-size-touch-target-min)] items-center gap-[var(--inkblot-spacing-2)] rounded-[var(--inkblot-radius-md)] px-[var(--inkblot-spacing-3)] py-[var(--inkblot-spacing-2)]","[font:var(--inkblot-semantic-typography-body-medium)]",m?"bg-[var(--inkblot-semantic-color-interactive-primary)] text-[var(--inkblot-semantic-color-text-inverse)]":"text-[var(--inkblot-semantic-color-text-primary)] hover:bg-[var(--inkblot-semantic-color-background-secondary)]",t),...n,children:[i,r?jsxRuntimeExports.jsx(ChevronDown,{style:{width:"var(--inkblot-spacing-4)",height:"var(--inkblot-spacing-4)"}}):null]})});$n.displayName="MenubarTrigger";var Un=De(({className:t,...e},r)=>{let{openMenuId:a}=Lo(),{menuId:i}=Wn();return a!==i?null:jsxRuntimeExports.jsx("div",{ref:r,role:"menu",className:o("absolute left-0 top-[calc(100%+var(--inkblot-spacing-2))] z-40 min-w-[calc(var(--inkblot-size-touch-target-min)*4)] rounded-[var(--inkblot-radius-lg)] border border-[var(--inkblot-semantic-color-border-default)]","bg-[var(--inkblot-semantic-color-background-primary)] p-[var(--inkblot-spacing-2)] shadow-[var(--inkblot-shadow-md)]",t),...e})});Un.displayName="MenubarContent";var jn=De(({className:t,type:e="button",icon:r,...a},i)=>jsxRuntimeExports.jsxs("button",{ref:i,type:e,role:"menuitem",className:o("flex min-h-[var(--inkblot-size-touch-target-min)] w-full items-center gap-[var(--inkblot-spacing-2)] rounded-[var(--inkblot-radius-md)] px-[var(--inkblot-spacing-3)] py-[var(--inkblot-spacing-2)]","text-left text-[var(--inkblot-semantic-color-text-primary)] hover:bg-[var(--inkblot-semantic-color-background-secondary)]","[font:var(--inkblot-semantic-typography-body-medium)]",t),...a,children:[r,a.children]}));jn.displayName="MenubarItem";function $p({className:t,...e}){return jsxRuntimeExports.jsx("div",{className:o("my-[var(--inkblot-spacing-2)] border-b border-[var(--inkblot-semantic-color-border-default)]",t),...e})}var qn=De(({className:t,...e},r)=>{let{setOpenMenuId:a}=Lo(),i=Gp(null);return jsxRuntimeExports.jsx("div",{ref:n=>{i.current=n,typeof r=="function"?r(n):r&&(r.current=n);},onPointerDown:n=>{i.current?.contains(n.target)&&a(null);},className:o(t),...e})});qn.displayName="MenubarCloseZone";function Up({items:t,className:e,onItemSelect:r}){return jsxRuntimeExports.jsx("nav",{"aria-label":"Navigation menu",className:o("flex flex-wrap items-center gap-[var(--inkblot-spacing-2)] rounded-[var(--inkblot-radius-lg)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-primary)] p-[var(--inkblot-spacing-2)]",e),children:t.map(a=>jsxRuntimeExports.jsx(jp,{item:a,onSelect:()=>r?.(a)},a.id))})}function jp({item:t,onSelect:e,className:r,...a}){let i=o("inline-flex min-h-[var(--inkblot-size-touch-target-min)] items-center gap-[var(--inkblot-spacing-2)] rounded-[var(--inkblot-radius-md)] px-[var(--inkblot-spacing-3)] py-[var(--inkblot-spacing-2)]","[font:var(--inkblot-semantic-typography-body-medium)]",t.active?"bg-[var(--inkblot-semantic-color-interactive-primary)] text-[var(--inkblot-semantic-color-text-inverse)]":"text-[var(--inkblot-semantic-color-text-primary)] hover:bg-[var(--inkblot-semantic-color-background-secondary)]",t.disabled&&"pointer-events-none opacity-[var(--inkblot-opacity-disabled)]",r);return t.href?jsxRuntimeExports.jsxs("a",{href:t.href,"aria-current":t.active?"page":void 0,className:i,onClick:()=>e?.(),...a,children:[t.icon,t.label,t.active?null:jsxRuntimeExports.jsx(ChevronRight,{style:{width:"var(--inkblot-spacing-4)",height:"var(--inkblot-spacing-4)"}})]}):jsxRuntimeExports.jsxs("button",{type:"button","aria-current":t.active?"page":void 0,disabled:t.disabled,className:i,onClick:()=>e?.(),children:[t.icon,t.label,t.active?null:jsxRuntimeExports.jsx(ChevronRight,{style:{width:"var(--inkblot-spacing-4)",height:"var(--inkblot-spacing-4)"}})]})}const {useMemo:qp,useState:Qn} = await importShared('react');
var nb=[{id:"company",question:"What's your company name?",subtitle:"We'll personalize your workspace around your brand.",icon:Building2,type:"input",field:"companyName",placeholder:"e.g. Acme Corporation"},{id:"size",question:"How many employees does your company have?",subtitle:"This helps us tailor the right features for your team size.",icon:Users,type:"select",field:"companySize",options:[{value:"1-10",label:"1-10"},{value:"11-50",label:"11-50"},{value:"51-200",label:"51-200"},{value:"201-1000",label:"201-1,000"},{value:"1000+",label:"1,000+"}]},{id:"industry",question:"What industry are you in?",subtitle:"We'll pre-configure pipelines and templates for your sector.",icon:Briefcase,type:"select",field:"industry",options:[{value:"saas",label:"SaaS / Software"},{value:"agency",label:"Agency / Consulting"},{value:"ecommerce",label:"E-Commerce"},{value:"fintech",label:"Fintech"},{value:"healthcare",label:"Healthcare"},{value:"other",label:"Other"}]},{id:"role",question:"What's your role?",subtitle:"So we can surface the most relevant modules first.",icon:Target,type:"select",field:"role",options:[{value:"founder",label:"Founder / CEO"},{value:"sales",label:"Sales Leader"},{value:"marketing",label:"Marketing"},{value:"ops",label:"Operations"},{value:"other",label:"Other"}]},{id:"goals",question:"What do you want to achieve?",subtitle:"Select all that apply. We'll prioritize these in your dashboard.",icon:Target,type:"multi-select",field:"goals",options:[{value:"pipeline",label:"Manage Sales Pipeline"},{value:"contacts",label:"Organize Contacts"},{value:"email",label:"Email Campaigns"},{value:"invoicing",label:"Invoicing"},{value:"reporting",label:"Analytics & Reporting"},{value:"automation",label:"Workflow Automation"}]},{id:"source",question:"How did you hear about us?",subtitle:"Helps us improve our outreach.",icon:Megaphone,type:"select",field:"source",options:[{value:"google",label:"Google Search"},{value:"social",label:"Social Media"},{value:"referral",label:"Friend / Colleague"},{value:"event",label:"Conference / Event"},{value:"other",label:"Other"}]},{id:"website",question:"What's your company website?",subtitle:"Optional, we'll try to auto-import your branding.",icon:Globe,type:"input",field:"website",placeholder:"e.g. https://acme.com"}];function FT({onComplete:t,steps:e=nb,value:r,defaultValue:a,onValueChange:i,stepIndex:n,defaultStepIndex:s=0,onStepIndexChange:l,onCancel:c,showSkip:d=true,className:m}){let[p,b]=Qn(s),[v,f]=Qn(a??{}),w=n!==void 0,g=r!==void 0,h=w?n:p,S=g?r:v,N=e[h],y=S[N.field]??(N.type==="multi-select"?[]:""),k=h===e.length-1,u=qp(()=>N.type==="multi-select"?y.length>0:N.id==="website"?true:typeof y=="string"&&y.trim().length>0,[y,N.id,N.type]),x=I=>{let z=Math.min(Math.max(I,0),Math.max(e.length-1,0));w||b(z),l?.(z);},C=I=>{g||f(I),i?.(I);},P=()=>x(h-1),D=()=>{if(k){t(S);return}x(h+1);},E=(I,z)=>{C({...S,[I]:z});},V=(I,z)=>{let L=S[I]??[],W=L.includes(z)?L.filter(U=>U!==z):[...L,z];E(I,W);};return jsxRuntimeExports.jsxs("section",{className:o("fixed inset-0 z-[100] flex items-center justify-center bg-[var(--inkblot-semantic-color-background-primary)]",m),children:[jsxRuntimeExports.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[jsxRuntimeExports.jsx("div",{className:"absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[var(--inkblot-semantic-color-interactive-primary)]/5 blur-[120px]"}),jsxRuntimeExports.jsx("div",{className:"absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-[var(--inkblot-semantic-color-status-warning)]/5 blur-[120px]"})]}),jsxRuntimeExports.jsxs("div",{className:"relative w-full max-w-lg px-6",children:[jsxRuntimeExports.jsxs("header",{className:"mb-12 flex items-center justify-center gap-2",children:[jsxRuntimeExports.jsx("span",{className:"flex h-10 w-10 items-center justify-center rounded-[var(--inkblot-radius-lg)] bg-[var(--inkblot-semantic-color-interactive-primary)]",children:jsxRuntimeExports.jsx(Command,{className:"h-5 w-5 text-[var(--inkblot-semantic-color-text-inverse)]"})}),jsxRuntimeExports.jsx("span",{className:"text-lg font-semibold tracking-tight text-[var(--inkblot-semantic-color-text-primary)]",children:"Citron OS"})]}),jsxRuntimeExports.jsx("div",{className:"mb-10 flex gap-1",children:e.map((I,z)=>jsxRuntimeExports.jsx("span",{className:o("h-0.5 flex-1 rounded-full",z<h?"bg-[var(--inkblot-semantic-color-interactive-primary)]":z===h?"bg-[var(--inkblot-semantic-color-interactive-primary)]/60":"bg-[var(--inkblot-semantic-color-background-tertiary)]")},I.id))}),jsxRuntimeExports.jsxs("div",{className:"space-y-6",children:[jsxRuntimeExports.jsxs("div",{children:[jsxRuntimeExports.jsx("div",{className:"mb-4 flex h-10 w-10 items-center justify-center rounded-[var(--inkblot-radius-lg)] bg-[var(--inkblot-semantic-color-interactive-secondary)]",children:jsxRuntimeExports.jsx(N.icon,{className:"h-5 w-5 text-[var(--inkblot-semantic-color-text-primary)]"})}),jsxRuntimeExports.jsx("h2",{className:"text-xl font-semibold tracking-tight text-[var(--inkblot-semantic-color-text-primary)]",children:N.question}),jsxRuntimeExports.jsx("p",{className:"mt-1 text-sm text-[var(--inkblot-semantic-color-text-tertiary)]",children:N.subtitle})]}),N.type==="input"?jsxRuntimeExports.jsx("input",{autoFocus:true,value:y||"",onChange:I=>E(N.field,I.target.value),placeholder:N.placeholder,onKeyDown:I=>{I.key==="Enter"&&u&&D();},className:"w-full rounded-[var(--inkblot-radius-lg)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)] px-5 py-3.5 text-sm text-[var(--inkblot-semantic-color-text-primary)] placeholder:text-[var(--inkblot-semantic-color-text-tertiary)] outline-none"}):null,N.type==="select"?jsxRuntimeExports.jsx("div",{className:"grid grid-cols-2 gap-2",children:N.options?.map(I=>jsxRuntimeExports.jsx("button",{type:"button",onClick:()=>E(N.field,I.value),className:o("rounded-[var(--inkblot-radius-lg)] border px-4 py-3 text-left text-sm transition-colors duration-[var(--inkblot-duration-fast)]",y===I.value?"border-[var(--inkblot-semantic-color-interactive-primary)] bg-[var(--inkblot-semantic-color-interactive-primary)]/10 text-[var(--inkblot-semantic-color-text-primary)]":"border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)] text-[var(--inkblot-semantic-color-text-tertiary)] hover:bg-[var(--inkblot-semantic-color-background-tertiary)]"),children:I.label},I.value))}):null,N.type==="multi-select"?jsxRuntimeExports.jsx("div",{className:"grid grid-cols-2 gap-2",children:N.options?.map(I=>{let z=y.includes(I.value);return jsxRuntimeExports.jsxs("button",{type:"button",onClick:()=>V(N.field,I.value),className:o("flex items-center gap-2 rounded-[var(--inkblot-radius-lg)] border px-4 py-3 text-left text-sm transition-colors duration-[var(--inkblot-duration-fast)]",z?"border-[var(--inkblot-semantic-color-interactive-primary)] bg-[var(--inkblot-semantic-color-interactive-primary)]/10 text-[var(--inkblot-semantic-color-text-primary)]":"border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)] text-[var(--inkblot-semantic-color-text-tertiary)] hover:bg-[var(--inkblot-semantic-color-background-tertiary)]"),children:[jsxRuntimeExports.jsx("span",{className:o("flex h-4 w-4 shrink-0 items-center justify-center rounded-[var(--inkblot-radius-sm)] border",z?"border-[var(--inkblot-semantic-color-interactive-primary)] bg-[var(--inkblot-semantic-color-interactive-primary)]":"border-[var(--inkblot-semantic-color-border-default)]"),children:z?jsxRuntimeExports.jsx(Check,{className:"h-2.5 w-2.5 text-[var(--inkblot-semantic-color-text-inverse)]"}):null}),I.label]},I.value)})}):null]}),jsxRuntimeExports.jsxs("footer",{className:"mt-10 flex items-center justify-between",children:[jsxRuntimeExports.jsxs("button",{type:"button",onClick:P,disabled:h===0,className:"flex items-center gap-1.5 rounded-[var(--inkblot-radius-md)] px-4 py-2 text-xs text-[var(--inkblot-semantic-color-text-tertiary)] transition-opacity duration-[var(--inkblot-duration-fast)] disabled:opacity-0",children:[jsxRuntimeExports.jsx(ArrowLeft,{className:"h-3 w-3"}),"Back"]}),jsxRuntimeExports.jsxs("div",{className:"flex items-center gap-3",children:[!k&&d?jsxRuntimeExports.jsx("button",{type:"button",onClick:c??D,className:"text-xs text-[var(--inkblot-semantic-color-text-tertiary)]",children:"Skip"}):null,jsxRuntimeExports.jsx("button",{type:"button",onClick:D,disabled:!u,className:"flex items-center gap-2 rounded-[var(--inkblot-radius-lg)] bg-[var(--inkblot-semantic-color-interactive-primary)] px-5 py-2.5 text-xs font-medium text-[var(--inkblot-semantic-color-text-inverse)] transition-opacity duration-[var(--inkblot-duration-fast)] disabled:opacity-40",children:k?jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsx(Sparkles,{className:"h-3 w-3"}),"Launch Citron OS"]}):jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:["Continue",jsxRuntimeExports.jsx(ArrowRight,{className:"h-3 w-3"})]})})]})]})]})]})}function lb({page:t,totalPages:e,onPageChange:r,className:a}){let i=Array.from({length:e},(n,s)=>s+1);return jsxRuntimeExports.jsxs("nav",{"aria-label":"Pagination",className:o("flex items-center gap-[var(--inkblot-spacing-2)]",a),children:[jsxRuntimeExports.jsx("button",{type:"button","aria-label":"Previous page",disabled:t<=1,onClick:()=>r(Math.max(t-1,1)),className:o("inline-flex min-h-[var(--inkblot-size-touch-target-min)] items-center justify-center rounded-[var(--inkblot-radius-md)] border border-[var(--inkblot-semantic-color-border-default)] px-[var(--inkblot-spacing-3)]","bg-[var(--inkblot-semantic-color-interactive-secondary)] text-[var(--inkblot-semantic-color-text-primary)]","hover:bg-[var(--inkblot-semantic-color-interactive-secondary-hover)] disabled:opacity-[var(--inkblot-opacity-disabled)] disabled:pointer-events-none"),children:jsxRuntimeExports.jsx(ChevronLeft,{style:{width:"var(--inkblot-spacing-4)",height:"var(--inkblot-spacing-4)"}})}),i.map(n=>{let s=n===t;return jsxRuntimeExports.jsx("button",{type:"button",onClick:()=>r(n),"aria-current":s?"page":void 0,className:o("inline-flex min-h-[var(--inkblot-size-touch-target-min)] min-w-[var(--inkblot-size-touch-target-min)] items-center justify-center rounded-[var(--inkblot-radius-md)] px-[var(--inkblot-spacing-3)]","[font:var(--inkblot-semantic-typography-body-medium)]",s?"bg-[var(--inkblot-semantic-color-interactive-primary)] text-[var(--inkblot-semantic-color-text-inverse)]":"bg-[var(--inkblot-semantic-color-interactive-secondary)] text-[var(--inkblot-semantic-color-text-primary)] hover:bg-[var(--inkblot-semantic-color-interactive-secondary-hover)]"),children:n},`page-${n}`)}),jsxRuntimeExports.jsx("button",{type:"button","aria-label":"Next page",disabled:t>=e,onClick:()=>r(Math.min(t+1,e)),className:o("inline-flex min-h-[var(--inkblot-size-touch-target-min)] items-center justify-center rounded-[var(--inkblot-radius-md)] border border-[var(--inkblot-semantic-color-border-default)] px-[var(--inkblot-spacing-3)]","bg-[var(--inkblot-semantic-color-interactive-secondary)] text-[var(--inkblot-semantic-color-text-primary)]","hover:bg-[var(--inkblot-semantic-color-interactive-secondary-hover)] disabled:opacity-[var(--inkblot-opacity-disabled)] disabled:pointer-events-none"),children:jsxRuntimeExports.jsx(ChevronRight,{style:{width:"var(--inkblot-spacing-4)",height:"var(--inkblot-spacing-4)"}})})]})}const {createContext:db,forwardRef:Ao,useCallback:mb,useContext:pb,useEffect:bb,useMemo:ub,useRef:vb,useState:fb} = await importShared('react');
var ei=db(null);function Do(){let t=pb(ei);if(!t)throw new Error("Popover components must be used within Popover");return t}function gb({children:t,open:e,defaultOpen:r=false,onOpenChange:a}){let[i,n]=fb(r),s=vb(null),l=e!==void 0,c=l?e:i,d=mb(p=>{l||n(p),a?.(p);},[l,a]);bb(()=>{if(!c)return;let p=v=>{let f=v.target;f&&s.current&&!s.current.contains(f)&&d(false);},b=v=>{v.key==="Escape"&&d(false);};return window.addEventListener("pointerdown",p),window.addEventListener("keydown",b),()=>{window.removeEventListener("pointerdown",p),window.removeEventListener("keydown",b);}},[c,d]);let m=ub(()=>({open:c,setOpen:d,containerRef:s}),[c,d]);return jsxRuntimeExports.jsx(ei.Provider,{value:m,children:jsxRuntimeExports.jsx("div",{ref:s,className:"relative inline-flex",children:t})})}var ri=Ao(({className:t,type:e="button",onClick:r,...a},i)=>{let{open:n,setOpen:s}=Do();return jsxRuntimeExports.jsx("button",{ref:i,type:e,"aria-haspopup":"dialog","aria-expanded":n,onClick:l=>{r?.(l),l.defaultPrevented||s(!n);},className:o("inline-flex min-h-[var(--inkblot-size-touch-target-min)] items-center justify-center rounded-[var(--inkblot-radius-lg)] border border-[var(--inkblot-semantic-color-border-default)]","bg-[var(--inkblot-semantic-color-interactive-secondary)] px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-2)] text-[var(--inkblot-semantic-color-text-primary)]","hover:bg-[var(--inkblot-semantic-color-interactive-secondary-hover)]","[font:var(--inkblot-semantic-typography-body-medium)]",t),...a})});ri.displayName="PopoverTrigger";var oi=Ao(({className:t,...e},r)=>{let{open:a}=Do();return a?jsxRuntimeExports.jsx("div",{ref:r,role:"dialog",className:o("absolute left-0 top-[calc(100%+var(--inkblot-spacing-2))] z-40 min-w-[calc(var(--inkblot-size-touch-target-min)*4)] rounded-[var(--inkblot-radius-lg)] border border-[var(--inkblot-semantic-color-border-default)]","bg-[var(--inkblot-semantic-color-background-primary)] p-[var(--inkblot-spacing-4)] shadow-[var(--inkblot-shadow-md)]",t),...e}):null});oi.displayName="PopoverContent";var ai=Ao(({className:t,type:e="button",onClick:r,...a},i)=>{let{setOpen:n}=Do();return jsxRuntimeExports.jsx("button",{ref:i,type:e,onClick:s=>{r?.(s),s.defaultPrevented||n(false);},className:o("inline-flex min-h-[var(--inkblot-size-touch-target-min)] items-center justify-center rounded-[var(--inkblot-radius-md)] px-[var(--inkblot-spacing-3)] py-[var(--inkblot-spacing-2)]","bg-[var(--inkblot-semantic-color-interactive-secondary)] text-[var(--inkblot-semantic-color-text-primary)]",t),...a})});ai.displayName="PopoverClose";const {forwardRef:kb} = await importShared('react');
var ni=kb(({className:t,value:e,max:r=100,showValueLabel:a=false,...i},n)=>{let s=Math.max(0,Math.min(e/r,1)),l=`${Math.round(s*100)}%`;return jsxRuntimeExports.jsxs("div",{ref:n,className:o("grid gap-[var(--inkblot-spacing-2)]",t),...i,children:[jsxRuntimeExports.jsx("div",{className:"h-[var(--inkblot-spacing-2)] overflow-hidden rounded-[var(--inkblot-radius-full)] bg-[var(--inkblot-semantic-color-background-secondary)]",children:jsxRuntimeExports.jsx("div",{className:"h-full rounded-[var(--inkblot-radius-full)] bg-[var(--inkblot-semantic-color-interactive-primary)] transition-[width] duration-[var(--inkblot-duration-fast)] ease-[var(--inkblot-easing-default)]",style:{width:l}})}),a?jsxRuntimeExports.jsx("p",{className:"text-[var(--inkblot-semantic-color-text-secondary)] [font:var(--inkblot-semantic-typography-body-small)]",children:l}):null]})});ni.displayName="Progress";const {forwardRef:si,useState:xb} = await importShared('react');
var li=si(({className:t,options:e,value:r,defaultValue:a,onValueChange:i,name:n="radio-group",...s},l)=>{let[c,d]=xb(a??""),m=r!==void 0,p=m?r:c,b=v=>{m||d(v),i?.(v);};return jsxRuntimeExports.jsx("div",{ref:l,role:"radiogroup",className:o("grid gap-[var(--inkblot-spacing-2)]",t),...s,children:e.map(v=>jsxRuntimeExports.jsxs("label",{className:o("flex cursor-pointer items-start gap-[var(--inkblot-spacing-3)] rounded-[var(--inkblot-radius-lg)] border border-[var(--inkblot-semantic-color-border-default)] p-[var(--inkblot-spacing-3)]","bg-[var(--inkblot-semantic-color-background-primary)] hover:bg-[var(--inkblot-semantic-color-background-secondary)]",v.disabled&&"pointer-events-none opacity-[var(--inkblot-opacity-disabled)]"),children:[jsxRuntimeExports.jsx(Ho,{type:"radio",name:n,value:v.value,checked:p===v.value,disabled:v.disabled,onChange:()=>b(v.value)}),jsxRuntimeExports.jsxs("span",{className:"grid gap-[var(--inkblot-spacing-1)]",children:[jsxRuntimeExports.jsx("span",{className:"text-[var(--inkblot-semantic-color-text-primary)] [font:var(--inkblot-semantic-typography-body-medium)]",children:v.label}),v.description?jsxRuntimeExports.jsx("span",{className:"text-[var(--inkblot-semantic-color-text-secondary)] [font:var(--inkblot-semantic-typography-body-small)]",children:v.description}):null]})]},v.value))})});li.displayName="RadioGroup";var Ho=si(({className:t,...e},r)=>jsxRuntimeExports.jsx("input",{ref:r,className:o("mt-[var(--inkblot-spacing-1)] h-[var(--inkblot-spacing-4)] w-[var(--inkblot-spacing-4)] border-[var(--inkblot-semantic-color-border-default)] text-[var(--inkblot-semantic-color-interactive-primary)]",t),...e}));Ho.displayName="RadioGroupItem";const {useMemo:hb,useState:Nb} = await importShared('react');
function Tb({primary:t,secondary:e,direction:r="horizontal",defaultPrimarySize:a=50,minPrimarySize:i=20,minSecondarySize:n=20,className:s}){let[l,c]=Nb(a),d=r==="horizontal",m=hb(()=>d?{gridTemplateColumns:`${l}fr auto ${100-l}fr`}:{gridTemplateRows:`${l}fr auto ${100-l}fr`},[d,l]),p=(b,v)=>{let f=v.getBoundingClientRect(),w=d?(b.x-f.left)/f.width*100:(b.y-f.top)/f.height*100,g=100-n,h=Math.min(g,Math.max(i,w));c(h);};return jsxRuntimeExports.jsxs("div",{className:o("grid h-full w-full overflow-hidden rounded-[var(--inkblot-radius-lg)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-primary)]",s),style:m,children:[jsxRuntimeExports.jsx("div",{className:"min-h-0 min-w-0 overflow-auto p-[var(--inkblot-spacing-3)]",children:t}),jsxRuntimeExports.jsx("div",{className:o(d?"w-[var(--inkblot-spacing-2)]":"h-[var(--inkblot-spacing-2)]","bg-[var(--inkblot-semantic-color-border-default)]"),children:jsxRuntimeExports.jsx("button",{type:"button","aria-label":"Resize panels",className:o("flex h-full w-full items-center justify-center bg-[var(--inkblot-semantic-color-background-secondary)] text-[var(--inkblot-semantic-color-text-secondary)]","hover:bg-[var(--inkblot-semantic-color-background-tertiary)] active:bg-[var(--inkblot-semantic-color-background-secondary)]"),onPointerDown:b=>{let v=b.currentTarget.closest("div")?.parentElement;if(!v)return;p({x:b.clientX,y:b.clientY},v);let f=g=>{p({x:g.clientX,y:g.clientY},v);},w=()=>{window.removeEventListener("pointermove",f),window.removeEventListener("pointerup",w);};window.addEventListener("pointermove",f),window.addEventListener("pointerup",w);},children:d?jsxRuntimeExports.jsx(GripVertical,{style:{width:"var(--inkblot-spacing-4)",height:"var(--inkblot-spacing-4)"}}):jsxRuntimeExports.jsx(GripHorizontal,{style:{width:"var(--inkblot-spacing-4)",height:"var(--inkblot-spacing-4)"}})})}),jsxRuntimeExports.jsx("div",{className:"min-h-0 min-w-0 overflow-auto p-[var(--inkblot-spacing-3)]",children:e})]})}const {forwardRef:Sb} = await importShared('react');
var ci=Sb(({className:t,maxHeight:e="var(--inkblot-size-touch-target-min)",...r},a)=>jsxRuntimeExports.jsx("div",{ref:a,className:o("overflow-auto rounded-[var(--inkblot-radius-lg)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-primary)] p-[var(--inkblot-spacing-3)]",t),style:{maxHeight:e,...r.style},...r}));ci.displayName="ScrollArea";const {forwardRef:Ib} = await importShared('react');
var mi=Ib(({className:t,options:e,placeholder:r,error:a,disabled:i,...n},s)=>jsxRuntimeExports.jsxs("div",{className:"relative w-full",children:[jsxRuntimeExports.jsxs("select",{ref:s,disabled:i,"aria-invalid":a,className:o("min-h-[var(--inkblot-size-touch-target-min)] w-full appearance-none rounded-[var(--inkblot-radius-md)] border bg-[var(--inkblot-semantic-color-background-secondary)] px-4 py-2 pr-10 text-[var(--inkblot-semantic-color-text-primary)] transition-[border-color,box-shadow] duration-[var(--inkblot-duration-fast)] ease-[var(--inkblot-easing-default)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--inkblot-semantic-color-border-focus)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-[var(--inkblot-opacity-disabled)]",a?"border-[var(--inkblot-semantic-color-status-error)] focus-visible:ring-[var(--inkblot-semantic-color-status-error)]":"border-[var(--inkblot-semantic-color-border-default)] hover:border-[var(--inkblot-semantic-color-border-strong)]",t),...n,children:[r?jsxRuntimeExports.jsx("option",{value:"",disabled:true,children:r}):null,e.map(l=>jsxRuntimeExports.jsx("option",{value:l.value,disabled:l.disabled,children:l.label},l.value))]}),jsxRuntimeExports.jsx(ChevronDown,{"aria-hidden":true,className:"pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-[var(--inkblot-semantic-color-text-tertiary)]"})]}));mi.displayName="Select";const {forwardRef:Lb} = await importShared('react');
var pi=Lb(({className:t,orientation:e="horizontal",decorative:r=true,...a},i)=>jsxRuntimeExports.jsx("div",{ref:i,role:r?"none":"separator","aria-orientation":e,className:o("shrink-0 bg-[var(--inkblot-semantic-color-border-default)]",e==="horizontal"?"h-px w-full":"h-full w-px",t),...a}));pi.displayName="Separator";const {useEffect:Rb} = await importShared('react');
var Hb={top:"inset-x-0 top-0 border-b rounded-b-[var(--inkblot-radius-lg)]",right:"inset-y-0 right-0 h-full w-full max-w-[420px] border-l",bottom:"inset-x-0 bottom-0 border-t rounded-t-[var(--inkblot-radius-lg)]",left:"inset-y-0 left-0 h-full w-full max-w-[420px] border-r"};function Bb({open:t,onOpenChange:e,side:r="right",title:a,description:i,showCloseButton:n=true,className:s,overlayClassName:l,children:c,...d}){return Rb(()=>{if(!t)return;let m=p=>{p.key==="Escape"&&e?.(false);};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[t,e]),t?jsxRuntimeExports.jsxs("div",{className:"fixed inset-0 z-50",children:[jsxRuntimeExports.jsx("button",{type:"button","aria-label":"Close panel",onClick:()=>e?.(false),className:o("absolute inset-0 bg-[var(--inkblot-semantic-color-background-primary)]/70",l)}),jsxRuntimeExports.jsxs("section",{role:"dialog","aria-modal":"true",className:o("absolute bg-[var(--inkblot-semantic-color-background-secondary)] p-5 text-[var(--inkblot-semantic-color-text-primary)] shadow-lg border-[var(--inkblot-semantic-color-border-default)]",Hb[r],s),...d,children:[(a||i||n)&&jsxRuntimeExports.jsxs("header",{className:"mb-4 flex items-start justify-between gap-4",children:[jsxRuntimeExports.jsxs("div",{children:[a?jsxRuntimeExports.jsx("h3",{className:"text-base font-semibold",children:a}):null,i?jsxRuntimeExports.jsx("p",{className:"mt-1 text-sm text-[var(--inkblot-semantic-color-text-secondary)]",children:i}):null]}),n?jsxRuntimeExports.jsx("button",{type:"button","aria-label":"Close",onClick:()=>e?.(false),className:"inline-flex size-9 items-center justify-center rounded-[var(--inkblot-radius-md)] border border-[var(--inkblot-semantic-color-border-default)] text-[var(--inkblot-semantic-color-text-secondary)] transition-colors hover:text-[var(--inkblot-semantic-color-text-primary)]",children:jsxRuntimeExports.jsx(X,{className:"size-4"})}):null]}),jsxRuntimeExports.jsx("div",{children:c})]})]}):null}function Vb({items:t,collapsed:e=false,onCollapsedChange:r,header:a,footer:i,className:n,...s}){return jsxRuntimeExports.jsxs("aside",{className:o("flex h-full flex-col border-r border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)] p-3 transition-[width] duration-[var(--inkblot-duration-fast)]",e?"w-[76px]":"w-[260px]",n),...s,children:[jsxRuntimeExports.jsxs("div",{className:"mb-3 flex items-center justify-between gap-2",children:[jsxRuntimeExports.jsx("div",{className:o("truncate text-sm font-semibold",e&&"sr-only"),children:a}),jsxRuntimeExports.jsx("button",{type:"button","aria-label":e?"Expandir sidebar":"Colapsar sidebar",onClick:()=>r?.(!e),className:"inline-flex size-9 items-center justify-center rounded-[var(--inkblot-radius-md)] border border-[var(--inkblot-semantic-color-border-default)] text-[var(--inkblot-semantic-color-text-secondary)] hover:text-[var(--inkblot-semantic-color-text-primary)]",children:e?jsxRuntimeExports.jsx(PanelLeftOpen,{className:"size-4"}):jsxRuntimeExports.jsx(PanelLeftClose,{className:"size-4"})})]}),jsxRuntimeExports.jsx("nav",{className:"flex flex-1 flex-col gap-1",children:t.map(l=>{let c=l.icon;return jsxRuntimeExports.jsxs("button",{type:"button",disabled:l.disabled,onClick:l.onClick,className:o("flex min-h-[var(--inkblot-size-touch-target-min)] items-center gap-3 rounded-[var(--inkblot-radius-md)] px-3 py-2 text-sm transition-colors",l.active?"bg-[var(--inkblot-semantic-color-interactive-primary)] text-[var(--inkblot-semantic-color-text-inverse)]":"text-[var(--inkblot-semantic-color-text-secondary)] hover:bg-[var(--inkblot-semantic-color-background-tertiary)] hover:text-[var(--inkblot-semantic-color-text-primary)]",l.disabled&&"cursor-not-allowed opacity-[var(--inkblot-opacity-disabled)]"),children:[c?jsxRuntimeExports.jsx(c,{className:"size-4 shrink-0"}):null,e?null:jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsx("span",{className:"truncate",children:l.label}),l.badge?jsxRuntimeExports.jsx("span",{className:"ml-auto",children:l.badge}):null]})]},l.id)})}),i?jsxRuntimeExports.jsx("div",{className:o("mt-3 border-t border-[var(--inkblot-semantic-color-border-default)] pt-3",e&&"sr-only"),children:i}):null]})}const {forwardRef:Gb,useMemo:Kb} = await importShared('react');
var ui=Gb(({className:t,value:e,defaultValue:r,min:a=0,max:i=100,step:n=1,disabled:s,showValue:l=true,onValueChange:c,...d},m)=>{let p=e??r??a,b=Kb(()=>i<=a?0:(p-a)/(i-a)*100,[p,a,i]);return jsxRuntimeExports.jsxs("div",{className:o("w-full",t),children:[jsxRuntimeExports.jsxs("div",{className:"mb-2 flex items-center justify-between text-sm",children:[jsxRuntimeExports.jsx("span",{className:"text-[var(--inkblot-semantic-color-text-secondary)]",children:a}),l?jsxRuntimeExports.jsx("span",{className:"font-medium text-[var(--inkblot-semantic-color-text-primary)]",children:p}):null,jsxRuntimeExports.jsx("span",{className:"text-[var(--inkblot-semantic-color-text-secondary)]",children:i})]}),jsxRuntimeExports.jsx("input",{ref:m,type:"range",value:e,defaultValue:r,min:a,max:i,step:n,disabled:s,onChange:v=>c?.(Number(v.target.value)),className:"h-2 w-full cursor-pointer appearance-none rounded-full bg-[var(--inkblot-semantic-color-background-tertiary)] disabled:cursor-not-allowed disabled:opacity-[var(--inkblot-opacity-disabled)] [&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-transparent [&::-webkit-slider-thumb]:mt-[-4px] [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-[var(--inkblot-semantic-color-border-default)] [&::-webkit-slider-thumb]:bg-[var(--inkblot-semantic-color-background-secondary)] [&::-webkit-slider-thumb]:shadow-sm [&::-moz-range-track]:h-2 [&::-moz-range-track]:rounded-full [&::-moz-range-track]:bg-transparent [&::-moz-range-thumb]:size-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-[var(--inkblot-semantic-color-border-default)] [&::-moz-range-thumb]:bg-[var(--inkblot-semantic-color-background-secondary)]",style:{background:`linear-gradient(to right, var(--inkblot-semantic-color-interactive-primary) 0%, var(--inkblot-semantic-color-interactive-primary) ${b}%, var(--inkblot-semantic-color-background-tertiary) ${b}%, var(--inkblot-semantic-color-background-tertiary) 100%)`},...d})]})});ui.displayName="Slider";const {useMemo:Zb} = await importShared('react');
var qb={info:"border-[var(--inkblot-semantic-color-status-info)]",success:"border-[var(--inkblot-semantic-color-status-success)]",warning:"border-[var(--inkblot-semantic-color-status-warning)]",error:"border-[var(--inkblot-semantic-color-status-error)]"},Yb={info:jsxRuntimeExports.jsx(Info,{className:"size-4"}),success:jsxRuntimeExports.jsx(CircleCheck,{className:"size-4"}),warning:jsxRuntimeExports.jsx(TriangleAlert,{className:"size-4"}),error:jsxRuntimeExports.jsx(CircleX,{className:"size-4"})};function zo({title:t,description:e,variant:r="info",action:a,onClose:i,className:n,...s}){return jsxRuntimeExports.jsx("div",{role:"status",className:o("w-full rounded-[var(--inkblot-radius-lg)] border-l-4 border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)] p-3 text-[var(--inkblot-semantic-color-text-primary)] shadow-sm",qb[r],n),...s,children:jsxRuntimeExports.jsxs("div",{className:"flex items-start gap-3",children:[jsxRuntimeExports.jsx("span",{className:"mt-0.5 text-[var(--inkblot-semantic-color-text-secondary)]",children:Yb[r]}),jsxRuntimeExports.jsxs("div",{className:"min-w-0 flex-1",children:[jsxRuntimeExports.jsx("p",{className:"text-sm font-semibold",children:t}),e?jsxRuntimeExports.jsx("p",{className:"mt-1 text-sm text-[var(--inkblot-semantic-color-text-secondary)]",children:e}):null,a?jsxRuntimeExports.jsx("button",{type:"button",...a,className:o("mt-2 rounded-[var(--inkblot-radius-md)] border border-[var(--inkblot-semantic-color-border-default)] px-2 py-1 text-xs font-medium text-[var(--inkblot-semantic-color-text-primary)] hover:bg-[var(--inkblot-semantic-color-background-tertiary)]",a.className),children:a.label}):null]}),i?jsxRuntimeExports.jsx("button",{type:"button","aria-label":"Close notification",onClick:i,className:"inline-flex size-8 items-center justify-center rounded-[var(--inkblot-radius-md)] text-[var(--inkblot-semantic-color-text-tertiary)] hover:text-[var(--inkblot-semantic-color-text-primary)]",children:jsxRuntimeExports.jsx(X,{className:"size-4"})}):null]})})}var Xb={"top-left":"top-4 left-4","top-right":"top-4 right-4","bottom-left":"bottom-4 left-4","bottom-right":"bottom-4 right-4"};function Oo({toasts:t,position:e="bottom-right",onDismiss:r,className:a,...i}){return jsxRuntimeExports.jsx("div",{className:o("fixed z-50 flex w-full max-w-[360px] flex-col gap-2",Xb[e],a),...i,children:t.map(n=>jsxRuntimeExports.jsx(zo,{...n,onClose:()=>r?.(n.id)},n.id))})}function Qb({toasts:t,maxVisible:e=3,position:r="bottom-right",onDismiss:a,...i}){let n=Zb(()=>t.slice(0,e),[t,e]);return jsxRuntimeExports.jsx(Oo,{toasts:n,position:r,onDismiss:a,...i})}const {forwardRef:tu,useState:eu} = await importShared('react');
var ki=tu(({checked:t,defaultChecked:e=false,onCheckedChange:r,disabled:a,className:i,...n},s)=>{let[l,c]=eu(e),d=t??l;return jsxRuntimeExports.jsx("button",{ref:s,type:"button",role:"switch","aria-checked":d,disabled:a,onClick:()=>{if(a)return;let p=!d;t===void 0&&c(p),r?.(p);},className:o("relative inline-flex h-7 w-12 items-center rounded-full border transition-colors duration-[var(--inkblot-duration-fast)] ease-[var(--inkblot-easing-default)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--inkblot-semantic-color-border-focus)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-[var(--inkblot-opacity-disabled)]",d?"border-[var(--inkblot-semantic-color-interactive-primary)] bg-[var(--inkblot-semantic-color-interactive-primary)]":"border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-tertiary)]",i),...n,children:jsxRuntimeExports.jsx("span",{className:o("inline-block size-5 rounded-full bg-[var(--inkblot-semantic-color-background-secondary)] transition-transform duration-[var(--inkblot-duration-fast)]",d?"translate-x-6":"translate-x-1")})})});ki.displayName="Switch";const {forwardRef:zt} = await importShared('react');
var yi=zt(({className:t,...e},r)=>jsxRuntimeExports.jsx("div",{className:"w-full overflow-x-auto rounded-[var(--inkblot-radius-lg)] border border-[var(--inkblot-semantic-color-border-default)]",children:jsxRuntimeExports.jsx("table",{ref:r,className:o("w-full border-collapse bg-[var(--inkblot-semantic-color-background-secondary)]",t),...e})})),xi=zt(({className:t,...e},r)=>jsxRuntimeExports.jsx("thead",{ref:r,className:o("bg-[var(--inkblot-semantic-color-background-tertiary)]",t),...e})),hi=zt(({className:t,...e},r)=>jsxRuntimeExports.jsx("tbody",{ref:r,className:o(t),...e})),Ni=zt(({className:t,...e},r)=>jsxRuntimeExports.jsx("tr",{ref:r,className:o("border-b border-[var(--inkblot-semantic-color-border-default)] text-[var(--inkblot-semantic-color-text-primary)] transition-colors hover:bg-[var(--inkblot-semantic-color-background-tertiary)]",t),...e})),wi=zt(({className:t,children:e,sortable:r=false,sortDirection:a,onSort:i,sortButtonProps:n,...s},l)=>jsxRuntimeExports.jsx("th",{ref:l,className:o("px-4 py-3 text-left text-sm font-semibold text-[var(--inkblot-semantic-color-text-secondary)]",t),...s,children:r?jsxRuntimeExports.jsxs("button",{type:"button",onClick:i,className:"inline-flex items-center gap-[var(--inkblot-spacing-1)] rounded-[var(--inkblot-radius-sm)] text-inherit transition-colors duration-[var(--inkblot-duration-fast)] hover:text-[var(--inkblot-semantic-color-text-primary)]",...n,children:[e,a==="asc"?jsxRuntimeExports.jsx(ArrowUp,{className:"h-3.5 w-3.5","aria-hidden":true}):a==="desc"?jsxRuntimeExports.jsx(ArrowDown,{className:"h-3.5 w-3.5","aria-hidden":true}):jsxRuntimeExports.jsx(ArrowUpDown,{className:"h-3.5 w-3.5","aria-hidden":true})]}):e})),Ci=zt(({className:t,...e},r)=>jsxRuntimeExports.jsx("td",{ref:r,className:o("px-4 py-3 text-sm",t),...e})),Ti=zt(({className:t,...e},r)=>jsxRuntimeExports.jsx("caption",{ref:r,className:o("p-3 text-left text-sm text-[var(--inkblot-semantic-color-text-tertiary)]",t),...e})),Pi=zt(({className:t,colSpan:e,title:r="No data available",description:a="Adjust filters or add records to populate this table.",...i},n)=>jsxRuntimeExports.jsx("tr",{children:jsxRuntimeExports.jsx("td",{ref:n,colSpan:e,className:o("px-4 py-10 text-center align-middle","text-[var(--inkblot-semantic-color-text-secondary)]",t),...i,children:jsxRuntimeExports.jsxs("div",{className:"mx-auto flex max-w-[420px] flex-col gap-[var(--inkblot-spacing-1)]",children:[jsxRuntimeExports.jsx("span",{className:"[font:var(--inkblot-semantic-typography-body-large-bold)] text-[var(--inkblot-semantic-color-text-primary)]",children:r}),jsxRuntimeExports.jsx("span",{className:"[font:var(--inkblot-semantic-typography-body-small)]",children:a})]})})}));yi.displayName="Table";xi.displayName="TableHeader";hi.displayName="TableBody";Ni.displayName="TableRow";wi.displayName="TableHead";Ci.displayName="TableCell";Ti.displayName="TableCaption";Pi.displayName="TableEmptyState";const {useMemo:nu,useState:iu} = await importShared('react');
function su({items:t,value:e,defaultValue:r,onValueChange:a,fullWidth:i=false,className:n,...s}){let l=r??t.find(v=>!v.disabled)?.id??"",[c,d]=iu(l),m=e??c,p=nu(()=>t.find(v=>v.id===m)??t.find(v=>!v.disabled),[m,t]),b=v=>{e===void 0&&d(v),a?.(v);};return jsxRuntimeExports.jsxs("div",{className:o("w-full",n),...s,children:[jsxRuntimeExports.jsx("div",{role:"tablist",className:"inline-flex rounded-[var(--inkblot-radius-lg)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-tertiary)] p-1",children:t.map(v=>{let f=v.id===p?.id;return jsxRuntimeExports.jsx("button",{type:"button",role:"tab","aria-selected":f,disabled:v.disabled,onClick:()=>b(v.id),className:o("min-h-[var(--inkblot-size-touch-target-min)] rounded-[var(--inkblot-radius-md)] px-4 py-2 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-[var(--inkblot-opacity-disabled)]",i&&"flex-1",f?"bg-[var(--inkblot-semantic-color-background-secondary)] text-[var(--inkblot-semantic-color-text-primary)]":"text-[var(--inkblot-semantic-color-text-secondary)] hover:text-[var(--inkblot-semantic-color-text-primary)]"),children:v.label},v.id)})}),jsxRuntimeExports.jsx("div",{className:"mt-3 rounded-[var(--inkblot-radius-lg)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)] p-4 text-[var(--inkblot-semantic-color-text-primary)]",children:p?.content})]})}const {forwardRef:cu} = await importShared('react');
var du={none:"resize-none",vertical:"resize-y",horizontal:"resize-x",both:"resize"},Mi=cu(({className:t,error:e,disabled:r,resize:a="vertical",...i},n)=>jsxRuntimeExports.jsx("textarea",{ref:n,disabled:r,"aria-invalid":e,className:o("min-h-[120px] w-full rounded-[var(--inkblot-radius-md)] border bg-[var(--inkblot-semantic-color-background-secondary)] px-4 py-3 text-[var(--inkblot-semantic-color-text-primary)] placeholder:text-[var(--inkblot-semantic-color-text-tertiary)] transition-[border-color,box-shadow] duration-[var(--inkblot-duration-fast)] ease-[var(--inkblot-easing-default)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--inkblot-semantic-color-border-focus)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-[var(--inkblot-opacity-disabled)]",du[a],e?"border-[var(--inkblot-semantic-color-status-error)] focus-visible:ring-[var(--inkblot-semantic-color-status-error)]":"border-[var(--inkblot-semantic-color-border-default)] hover:border-[var(--inkblot-semantic-color-border-strong)]",t),...i}));Mi.displayName="Textarea";const {useState:pu} = await importShared('react');
var bu={top:"bottom-full left-1/2 mb-2 -translate-x-1/2",right:"left-full top-1/2 ml-2 -translate-y-1/2",bottom:"left-1/2 top-full mt-2 -translate-x-1/2",left:"right-full top-1/2 mr-2 -translate-y-1/2"};function uu({content:t,side:e="top",open:r,defaultOpen:a=false,onOpenChange:i,disabled:n=false,className:s,children:l,...c}){let[d,m]=pu(a),p=r??d,b=v=>{r===void 0&&m(v),i?.(v);};return jsxRuntimeExports.jsxs("span",{className:o("relative inline-flex",s),onMouseEnter:()=>!n&&b(true),onMouseLeave:()=>b(false),onFocus:()=>!n&&b(true),onBlur:()=>b(false),...c,children:[l,p&&!n?jsxRuntimeExports.jsx("span",{role:"tooltip",className:o("pointer-events-none absolute z-50 rounded-[var(--inkblot-radius-md)] border border-[var(--inkblot-semantic-color-border-default)] bg-[var(--inkblot-semantic-color-background-secondary)] px-3 py-2 text-xs text-[var(--inkblot-semantic-color-text-primary)] shadow-sm",bu[e]),children:t}):null]})}function ku({item:t,onSelect:e,onGenerateWithAI:r}){return jsxRuntimeExports.jsxs("div",{role:"button",tabIndex:0,onClick:()=>e?.(t),onKeyDown:a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),e?.(t));},className:o("group mb-[var(--inkblot-spacing-4)] break-inside-avoid rounded-[var(--inkblot-radius-lg)]","bg-[var(--inkblot-semantic-color-background-secondary)] shadow-[var(--inkblot-shadow-sm)]","cursor-pointer transition-shadow duration-[var(--inkblot-duration-fast)]","hover:shadow-[var(--inkblot-shadow-md)]","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--inkblot-semantic-color-border-focus)]"),children:[t.thumbnail?jsxRuntimeExports.jsx("img",{src:t.thumbnail,alt:t.title,className:"w-full rounded-t-[var(--inkblot-radius-lg)] object-cover"}):jsxRuntimeExports.jsx("div",{className:"flex h-32 items-center justify-center rounded-t-[var(--inkblot-radius-lg)] bg-[var(--inkblot-semantic-color-background-tertiary)]",children:jsxRuntimeExports.jsx("span",{className:"text-[var(--inkblot-semantic-color-text-tertiary)] [font:var(--inkblot-semantic-typography-body-small)]",children:"No preview"})}),jsxRuntimeExports.jsxs("div",{className:"flex flex-col gap-[var(--inkblot-spacing-2)] p-[var(--inkblot-spacing-4)]",children:[t.category&&jsxRuntimeExports.jsx("span",{className:o("inline-flex w-fit items-center rounded-[var(--inkblot-radius-sm)] px-[var(--inkblot-spacing-2)] py-[var(--inkblot-spacing-1)]","bg-[var(--inkblot-semantic-color-interactive-secondary)] text-[var(--inkblot-semantic-color-text-secondary)]","[font:var(--inkblot-semantic-typography-body-small)]"),children:t.category}),jsxRuntimeExports.jsx("h3",{className:"text-[var(--inkblot-semantic-color-text-primary)] [font:var(--inkblot-semantic-typography-heading-4)]",children:t.title}),t.description&&jsxRuntimeExports.jsx("p",{className:"line-clamp-2 text-[var(--inkblot-semantic-color-text-secondary)] [font:var(--inkblot-semantic-typography-body-small)]",children:t.description}),r&&jsxRuntimeExports.jsxs("button",{type:"button",onClick:a=>{a.stopPropagation(),r(t);},className:o("mt-[var(--inkblot-spacing-1)] inline-flex w-full items-center justify-center gap-[var(--inkblot-spacing-2)]","rounded-[var(--inkblot-radius-md)] px-[var(--inkblot-spacing-3)] py-[var(--inkblot-spacing-2)]","bg-[var(--inkblot-semantic-color-interactive-primary)] text-[var(--inkblot-semantic-color-text-inverse)]","[font:var(--inkblot-semantic-typography-body-small)]","opacity-0 transition-opacity duration-[var(--inkblot-duration-fast)] group-hover:opacity-100","hover:bg-[var(--inkblot-semantic-color-interactive-primary-hover)]","active:bg-[var(--inkblot-semantic-color-interactive-primary-active)]","focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--inkblot-semantic-color-border-focus)]"),children:[jsxRuntimeExports.jsx(Sparkles,{className:"h-4 w-4","aria-hidden":true}),"Generate with AI"]})]})]})}function yu({items:t,columns:e=3,onSelect:r,onGenerateWithAI:a,className:i}){return jsxRuntimeExports.jsx("div",{className:o("gap-[var(--inkblot-spacing-4)]",i),style:{columns:e,columnGap:"var(--inkblot-spacing-4)"},children:t.map(n=>jsxRuntimeExports.jsx(ku,{item:n,onSelect:r,onGenerateWithAI:a},n.id))})}const {useEffect:xu,useCallback:hu} = await importShared('react');
var Mu={todo:{label:"To Do",color:"bg-[var(--inkblot-semantic-color-text-tertiary)]"},in_progress:{label:"In Progress",color:"bg-[var(--inkblot-semantic-color-status-info)]"},done:{label:"Done",color:"bg-[var(--inkblot-semantic-color-status-success)]"}},Eu={urgent:{label:"Urgent",icon:TriangleAlert,color:"text-[var(--inkblot-semantic-color-status-warning)]"},high:{label:"High",icon:ArrowUp,color:"text-[var(--inkblot-semantic-color-status-warning)]"},medium:{label:"Medium",icon:Minus,color:"text-[var(--inkblot-semantic-color-status-info)]"},low:{label:"Low",icon:ArrowDown,color:"text-[var(--inkblot-semantic-color-text-tertiary)]"}};function Iu(t){return t.completed?"done":"todo"}function ue({label:t,children:e}){return jsxRuntimeExports.jsxs("div",{className:"flex items-start gap-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-3)] border-b border-[var(--inkblot-semantic-color-border-default)]",children:[jsxRuntimeExports.jsx("span",{className:"w-28 shrink-0 text-[var(--inkblot-semantic-color-text-tertiary)] [font:var(--inkblot-semantic-typography-body-small)]",children:t}),jsxRuntimeExports.jsx("div",{className:"min-w-0 flex-1 text-[var(--inkblot-semantic-color-text-primary)] [font:var(--inkblot-semantic-typography-body-small)]",children:e})]})}function Lu({task:t,open:e,onOpenChange:r,extraFields:a,onStatusChange:i,onAssigneeChange:n,className:s}){let l=hu(()=>r?.(false),[r]);if(xu(()=>{if(!e)return;let b=v=>{v.key==="Escape"&&l();};return document.addEventListener("keydown",b),()=>document.removeEventListener("keydown",b)},[e,l]),!e)return null;let c=t?Iu(t):null,d=c?Mu[c]:null,m=t?Eu[t.priority]:null,p=m?.icon??Minus;return jsxRuntimeExports.jsxs("div",{className:"fixed inset-0 z-50 flex justify-end",children:[jsxRuntimeExports.jsx("div",{className:"absolute inset-0 bg-black/40 transition-opacity duration-[var(--inkblot-duration-fast)]",onClick:l,"aria-hidden":true}),jsxRuntimeExports.jsx("div",{role:"dialog","aria-modal":"true","aria-label":t?.title??"Task details",className:o("relative z-10 flex h-full w-[480px] flex-col","bg-[var(--inkblot-semantic-color-background-primary)] shadow-[var(--inkblot-shadow-md)]",s),children:t?jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsxs("div",{className:"flex items-start gap-[var(--inkblot-spacing-3)] border-b border-[var(--inkblot-semantic-color-border-default)] p-[var(--inkblot-spacing-6)]",children:[jsxRuntimeExports.jsxs("div",{className:"min-w-0 flex-1",children:[jsxRuntimeExports.jsx("h2",{className:"text-[var(--inkblot-semantic-color-text-primary)] [font:var(--inkblot-semantic-typography-heading-4)]",children:t.title}),t.jiraKey&&jsxRuntimeExports.jsx("span",{className:"mt-[var(--inkblot-spacing-1)] inline-block text-[var(--inkblot-semantic-color-text-tertiary)] [font:var(--inkblot-semantic-typography-body-small)]",children:t.jiraKey})]}),jsxRuntimeExports.jsx("button",{type:"button",onClick:l,"aria-label":"Close",className:o("inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--inkblot-radius-md)]","text-[var(--inkblot-semantic-color-text-tertiary)] transition-colors duration-[var(--inkblot-duration-fast)]","hover:bg-[var(--inkblot-semantic-color-interactive-secondary-hover)] hover:text-[var(--inkblot-semantic-color-text-primary)]","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--inkblot-semantic-color-border-focus)]"),children:jsxRuntimeExports.jsx(X,{className:"h-4 w-4","aria-hidden":true})})]}),jsxRuntimeExports.jsxs("div",{className:"flex-1 overflow-y-auto p-[var(--inkblot-spacing-6)]",children:[jsxRuntimeExports.jsx(ue,{label:"Status",children:jsxRuntimeExports.jsxs("button",{type:"button",onClick:()=>{if(!i||!c)return;let b=["todo","in_progress","done"],v=b[(b.indexOf(c)+1)%b.length];i(v);},className:o("inline-flex items-center gap-[var(--inkblot-spacing-2)] rounded-[var(--inkblot-radius-sm)] px-[var(--inkblot-spacing-2)] py-[var(--inkblot-spacing-1)]","transition-colors duration-[var(--inkblot-duration-fast)]",i&&"cursor-pointer hover:bg-[var(--inkblot-semantic-color-interactive-secondary-hover)]"),disabled:!i,children:[jsxRuntimeExports.jsx("span",{className:o("h-2 w-2 shrink-0 rounded-full",d?.color)}),d?.label]})}),jsxRuntimeExports.jsx(ue,{label:"Priority",children:jsxRuntimeExports.jsxs("span",{className:o("inline-flex items-center gap-[var(--inkblot-spacing-2)]",m?.color),children:[jsxRuntimeExports.jsx(p,{className:"h-4 w-4","aria-hidden":true}),m?.label]})}),jsxRuntimeExports.jsx(ue,{label:"Assignee",children:jsxRuntimeExports.jsxs("span",{className:"inline-flex items-center gap-[var(--inkblot-spacing-2)]",children:[jsxRuntimeExports.jsx(User,{className:"h-4 w-4 text-[var(--inkblot-semantic-color-text-tertiary)]","aria-hidden":true}),t.assignee]})}),jsxRuntimeExports.jsx(ue,{label:"Due date",children:jsxRuntimeExports.jsxs("span",{className:"inline-flex items-center gap-[var(--inkblot-spacing-2)]",children:[jsxRuntimeExports.jsx(Calendar,{className:"h-4 w-4 text-[var(--inkblot-semantic-color-text-tertiary)]","aria-hidden":true}),t.date]})}),jsxRuntimeExports.jsx(ue,{label:"Company",children:t.company}),a?.map(b=>jsxRuntimeExports.jsx(ue,{label:b.label,children:b.value},b.label))]})]}):jsxRuntimeExports.jsx("div",{className:"flex flex-1 items-center justify-center p-[var(--inkblot-spacing-6)]",children:jsxRuntimeExports.jsx("p",{className:"text-[var(--inkblot-semantic-color-text-tertiary)] [font:var(--inkblot-semantic-typography-body-small)]",children:"No task selected"})})})]})}function Du({name:t,description:e,icon:r,connected:a=false,onConnect:i,onDisconnect:n,className:s}){return jsxRuntimeExports.jsxs("div",{className:o("flex flex-col gap-[var(--inkblot-spacing-4)] rounded-[var(--inkblot-radius-lg)]","bg-[var(--inkblot-semantic-color-background-secondary)] p-[var(--inkblot-spacing-5)] shadow-[var(--inkblot-shadow-sm)]",s),children:[jsxRuntimeExports.jsxs("div",{className:"flex items-start gap-[var(--inkblot-spacing-4)]",children:[jsxRuntimeExports.jsx("div",{className:o("flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--inkblot-radius-md)]","bg-[var(--inkblot-semantic-color-background-tertiary)] text-[var(--inkblot-semantic-color-text-secondary)]"),children:r??jsxRuntimeExports.jsx("span",{className:"h-5 w-5 rounded-full bg-[var(--inkblot-semantic-color-border-default)]"})}),jsxRuntimeExports.jsxs("div",{className:"min-w-0 flex-1",children:[jsxRuntimeExports.jsx("h3",{className:"text-[var(--inkblot-semantic-color-text-primary)] [font:var(--inkblot-semantic-typography-heading-4)]",children:t}),jsxRuntimeExports.jsx("p",{className:"mt-[var(--inkblot-spacing-1)] text-[var(--inkblot-semantic-color-text-secondary)] [font:var(--inkblot-semantic-typography-body-small)]",children:e})]})]}),jsxRuntimeExports.jsx("div",{className:"flex items-center justify-between",children:a?jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsxs("span",{className:"inline-flex items-center gap-[var(--inkblot-spacing-2)] [font:var(--inkblot-semantic-typography-body-small)]",children:[jsxRuntimeExports.jsx("span",{className:"h-2 w-2 shrink-0 rounded-full bg-[var(--inkblot-semantic-color-status-success)]"}),jsxRuntimeExports.jsx("span",{className:"text-[var(--inkblot-semantic-color-status-success)]",children:"Connected"})]}),n&&jsxRuntimeExports.jsx("button",{type:"button",onClick:n,className:o("rounded-[var(--inkblot-radius-md)] px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-2)]","bg-[var(--inkblot-semantic-color-interactive-secondary)] text-[var(--inkblot-semantic-color-text-primary)]","[font:var(--inkblot-semantic-typography-body-small)]","transition-colors duration-[var(--inkblot-duration-fast)]","hover:bg-[var(--inkblot-semantic-color-interactive-secondary-hover)]","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--inkblot-semantic-color-border-focus)]"),children:"Disconnect"})]}):jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsxs("span",{className:"inline-flex items-center gap-[var(--inkblot-spacing-2)] [font:var(--inkblot-semantic-typography-body-small)]",children:[jsxRuntimeExports.jsx("span",{className:"h-2 w-2 shrink-0 rounded-full bg-[var(--inkblot-semantic-color-text-tertiary)]"}),jsxRuntimeExports.jsx("span",{className:"text-[var(--inkblot-semantic-color-text-tertiary)]",children:"Not connected"})]}),i&&jsxRuntimeExports.jsx("button",{type:"button",onClick:i,className:o("rounded-[var(--inkblot-radius-md)] px-[var(--inkblot-spacing-4)] py-[var(--inkblot-spacing-2)]","bg-[var(--inkblot-semantic-color-interactive-primary)] text-[var(--inkblot-semantic-color-text-inverse)]","[font:var(--inkblot-semantic-typography-body-small)]","transition-colors duration-[var(--inkblot-duration-fast)]","hover:bg-[var(--inkblot-semantic-color-interactive-primary-hover)]","active:bg-[var(--inkblot-semantic-color-interactive-primary-active)]","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--inkblot-semantic-color-border-focus)]"),children:"Connect"})]})})]})}var yM="var(--inkblot-semantic-color-background-primary)",xM="var(--inkblot-semantic-color-background-secondary)",hM="var(--inkblot-semantic-color-border-default)",NM="var(--inkblot-semantic-color-text-primary)",wM="var(--inkblot-semantic-color-text-secondary)",CM="var(--inkblot-semantic-color-interactive-primary)",TM="var(--inkblot-semantic-color-interactive-secondary)",PM="var(--inkblot-semantic-color-interactive-secondary-hover)";

export { fe as AIComposeInput, Uh as AIEmailGenerator, Oc as Accordion, Er as ActionButtons, ar as ActivityStream, _c as AdvancedDropdown, Zc as Alert, td as AlertDialog, TN as AppLayout, fa as AppNavigationRail, _a as AppSidebar, Ed as AspectRatio, _i as AssistantPanel, $r as Avatar, Ad as Badge, Hd as Breadcrumb, ge as Button, pr as CITRON_THEME_STORAGE_KEY, _d as Calendar, Ge as CampaignTable, lo as CanvasProvider, $d as Card, Yd as CardContent, qd as CardDescription, Xd as CardFooter, Ud as CardHeader, jd as CardTitle, tm as Carousel, $i as CenteredAssistantChat, em as Chart, am as Checkbox, en as CircularScore, lm as Collapsible, pm as Command, ga as CommandBar, _w as CommandCanvas, xm as ContextMenu, Sm as Dialog, No as DialogClose, mn as DialogContent, Im as DialogDescription, Lm as DialogFooter, Mm as DialogHeader, Em as DialogTitle, dn as DialogTrigger, Om as Drawer, gn as DrawerClose, fn as DrawerContent, Gm as DrawerDescription, Km as DrawerFooter, Vm as DrawerHeader, Fm as DrawerTitle, vn as DrawerTrigger, Qm as DropdownMenu, xn as DropdownMenuContent, hn as DropdownMenuItem, Jm as DropdownMenuSeparator, yn as DropdownMenuTrigger, SC as EmailBlockEditor, Ma as EmailCampaignsView, Fe as EmailComposeActionButtons, _e as EmailTemplatesSection, Xo as EntityCard, Zo as EntityCommandCard, $e as ErrorBoundary, Ua as EventFeed, Jo as EventRow, ea as EventStreamFeed, ka as EventStreamSidebar, Mn as Form, pp as FormActions, mp as FormField, ve as GlobalAssistantChat, FC as GraphView, qC as GuidedTour, Lp as HoverCard, Rn as HoverCardContent, Dn as HoverCardTrigger, Vt as Input, Bn as InputOtp, Du as IntegrationPlaceholder, bT as IntelligenceCard, ya as IntelligenceLab, je as IntelligenceScoreCard, Rc as InvoiceEditorPage, Zr as InvoiceForm, Jr as InvoicePreview, zn as Label, xa as MainShell, _n as Menubar, qn as MenubarCloseZone, Un as MenubarContent, jn as MenubarItem, _p as MenubarMenu, $p as MenubarSeparator, $n as MenubarTrigger, ra as MetricComparisonList, Xe as ModuleContainer, H as ModuleErrorBoundary, qe as ModuleSkeleton, io as NavLink, Xr as NavLinkRouter, Up as NavigationMenu, la as OSNavigationRail, FT as OnboardingWizard, Qe as PageErrorFallback, Jt as PageHeader, te as PageHeaderActionButton, lb as Pagination, gb as Popover, ai as PopoverClose, oi as PopoverContent, ri as PopoverTrigger, ni as Progress, li as RadioGroup, Ho as RadioGroupItem, Tb as Resizable, na as RouteWithErrorBoundary, ci as ScrollArea, Ct as SearchBar, mi as Select, pi as Separator, Bb as Sheet, Vb as Sidebar, wt as Skeleton, ui as Slider, Qb as Sonner, sa as StatCardGrid, Je as StatCards, da as StatCardsWithChart, Ue as StatusBadge, ki as Switch, tr as TabSystem, yi as Table, hi as TableBody, Ti as TableCaption, Ci as TableCell, Pi as TableEmptyState, wi as TableHead, xi as TableHeader, Ni as TableRow, su as Tabs, ir as TaskCreateForm, Lu as TaskDetailsPanel, er as TaskItem, ae as TaskKanban, ae as TaskKanbanBoard, lr as TaskKanbanCard, cr as TaskKanbanColumn, rr as TaskList, Ca as TasksView, Ke as TemplateCard, yu as TemplateMasonryGrid, Mi as Textarea, Da as ThemeProvider, ur as ThemeSwitcherButton, zo as Toast, Oo as Toaster, Wr as Toggle, _r as ToggleGroup, uu as Tooltip, yM as semanticBackgroundPrimary, xM as semanticBackgroundSecondary, hM as semanticBorderDefault, CM as semanticInteractivePrimary, TM as semanticInteractiveSecondary, PM as semanticInteractiveSecondaryHover, NM as semanticTextPrimary, wM as semanticTextSecondary, Pd as useCanvas, br as useTheme };
