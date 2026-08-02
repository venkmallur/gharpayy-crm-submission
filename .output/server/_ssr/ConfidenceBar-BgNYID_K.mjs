var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { q as cn } from "./router-Cbs6ivkN.mjs";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
function ConfidenceBar({ score, intent, className, showLabel = true }) {
  const fill = intent === "hard" ? "bg-role-tcm" : intent === "medium" ? "bg-role-hr" : "bg-muted-foreground";
  const label = intent === "hard" ? "HARD" : intent === "medium" ? "MEDIUM" : "SOFT";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex items-center gap-2", className), "data-tsd-source": "/src/myt/components/ConfidenceBar.tsx:23:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-1.5 rounded-full bg-surface-2 overflow-hidden", "data-tsd-source": "/src/myt/components/ConfidenceBar.tsx:24:7", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: cn("h-full rounded-full transition-all", fill),
        style: { width: `${Math.max(4, score)}%` },
        "data-tsd-source": "/src/myt/components/ConfidenceBar.tsx:25:9"
      }
    ) }),
    showLabel && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-mono font-semibold tabular-nums text-foreground shrink-0 w-16 text-right", "data-tsd-source": "/src/myt/components/ConfidenceBar.tsx:31:9", children: [
      score,
      "% · ",
      label
    ] })
  ] });
}
__name(ConfidenceBar, "ConfidenceBar");
__name2(ConfidenceBar, "ConfidenceBar");
export {
  ConfidenceBar as C
};
