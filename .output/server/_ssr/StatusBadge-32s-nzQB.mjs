var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { q as cn } from "./router-Cbs6ivkN.mjs";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
const statusStyles = {
  scheduled: "bg-primary/15 text-primary",
  confirmed: "bg-tcm/15 text-role-tcm",
  completed: "bg-success/15 text-success",
  "no-show": "bg-danger/15 text-danger",
  cancelled: "bg-muted text-muted-foreground"
};
const outcomeStyles = {
  draft: "bg-hr/15 text-role-hr",
  "follow-up": "bg-primary/15 text-primary",
  rejected: "bg-danger/15 text-danger"
};
function StatusBadge({ status }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("px-2 py-0.5 rounded-full text-xs font-medium capitalize", statusStyles[status]), "data-tsd-source": "/src/myt/components/StatusBadge.tsx:20:5", children: status.replace("-", " ") });
}
__name(StatusBadge, "StatusBadge");
__name2(StatusBadge, "StatusBadge");
function OutcomeBadge({ outcome }) {
  if (!outcome) return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/myt/components/StatusBadge.tsx:27:24", children: "—" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("px-2 py-0.5 rounded-full text-xs font-medium capitalize", outcomeStyles[outcome]), "data-tsd-source": "/src/myt/components/StatusBadge.tsx:29:5", children: outcome.replace("-", " ") });
}
__name(OutcomeBadge, "OutcomeBadge");
__name2(OutcomeBadge, "OutcomeBadge");
export {
  OutcomeBadge as O,
  StatusBadge as S
};
