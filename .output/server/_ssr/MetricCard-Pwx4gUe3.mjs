var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { q as cn } from "./router-xBhBcQRf.mjs";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
const glowMap = {
  blue: "metric-glow-blue border-flow-ops/20",
  green: "metric-glow-green border-tcm/20",
  amber: "metric-glow-amber border-hr/20",
  red: "border-danger/20"
};
const textMap = {
  blue: "text-role-flow",
  green: "text-role-tcm",
  amber: "text-role-hr",
  red: "text-danger"
};
function MetricCard({ label, value, subtext, color = "blue", icon }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("glass-card p-3 md:p-4 animate-slide-up", glowMap[color]), "data-tsd-source": "/src/myt/components/MetricCard.tsx:27:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1 md:mb-2", "data-tsd-source": "/src/myt/components/MetricCard.tsx:28:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] md:text-xs font-medium text-muted-foreground uppercase tracking-wider leading-tight", "data-tsd-source": "/src/myt/components/MetricCard.tsx:29:9", children: label }),
      icon && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("opacity-60 hidden sm:block", textMap[color]), "data-tsd-source": "/src/myt/components/MetricCard.tsx:30:18", children: icon })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("text-xl md:text-2xl font-heading font-bold", textMap[color]), "data-tsd-source": "/src/myt/components/MetricCard.tsx:32:7", children: value }),
    subtext && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] md:text-xs text-muted-foreground mt-1", "data-tsd-source": "/src/myt/components/MetricCard.tsx:33:19", children: subtext })
  ] });
}
__name(MetricCard, "MetricCard");
__name2(MetricCard, "MetricCard");
export {
  MetricCard as M
};
