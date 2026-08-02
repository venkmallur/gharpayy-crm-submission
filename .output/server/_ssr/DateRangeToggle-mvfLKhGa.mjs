var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { q as cn } from "./router-Cbs6ivkN.mjs";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
const options = [
  { value: "today", label: "Today" },
  { value: "week", label: "This Week" },
  { value: "month", label: "This Month" }
];
function DateRangeToggle({ value, onChange }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1 bg-surface-2 rounded-lg p-1", "data-tsd-source": "/src/myt/components/DateRangeToggle.tsx:12:5", children: options.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      onClick: /* @__PURE__ */ __name2(() => onChange(opt.value), "onClick"),
      className: cn(
        "px-3 py-1.5 text-xs font-medium rounded-md transition-colors",
        value === opt.value ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
      ),
      "data-tsd-source": "/src/myt/components/DateRangeToggle.tsx:14:9",
      children: opt.label
    },
    opt.value
  )) });
}
__name(DateRangeToggle, "DateRangeToggle");
__name2(DateRangeToggle, "DateRangeToggle");
export {
  DateRangeToggle as D
};
