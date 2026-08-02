var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-BN067m2r.mjs";
import { aB as useAppState } from "./router-xBhBcQRf.mjs";
import { S as StatusBadge, O as OutcomeBadge } from "./StatusBadge-ByCMrWCS.mjs";
import { L as Link } from "./react-router-dom-DTg4HJ59.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { H as MessageSquare } from "../_libs/lucide-react.mjs";

import "../_libs/unenv.mjs";




import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";

import "../_libs/isbot.mjs";
import "../_libs/zustand.mjs";
import "../_libs/radix-ui__react-dropdown-menu.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-menu.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-roving-focus.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/react-remove-scroll.mjs";
import "../_libs/tslib.mjs";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "./store-CzExz6PU.mjs";
import "./analytics-DmYAqfQ6.mjs";
import "../_libs/radix-ui__react-collapsible.mjs";
import "../_libs/cmdk.mjs";
import "./personas-yLdDZDbn.mjs";
import "../_libs/radix-ui__react-scroll-area.mjs";
import "../_libs/radix-ui__number.mjs";
import "../_libs/date-fns.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-tabs.mjs";
import "../_libs/radix-ui__react-select.mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "../_libs/radix-ui__react-label.mjs";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
function AllTours() {
  const { tours } = useAppState();
  const [statusFilter, setStatusFilter] = reactExports.useState("all");
  const [outcomeFilter, setOutcomeFilter] = reactExports.useState("all");
  const filtered = tours.filter((t) => {
    if (statusFilter !== "all" && t.status !== statusFilter) return false;
    if (outcomeFilter !== "all" && t.outcome !== outcomeFilter) return false;
    return true;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 md:space-y-6 animate-slide-up", "data-tsd-source": "/src/myt/pages/AllTours.tsx:20:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl md:text-2xl font-heading font-bold text-foreground", "data-tsd-source": "/src/myt/pages/AllTours.tsx:21:7", children: "All Tours" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 flex-wrap", "data-tsd-source": "/src/myt/pages/AllTours.tsx:23:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: statusFilter, onChange: /* @__PURE__ */ __name2((e) => setStatusFilter(e.target.value), "onChange"), className: "bg-surface-2 border border-border rounded-lg px-2 py-1.5 text-xs text-foreground", "data-tsd-source": "/src/myt/pages/AllTours.tsx:24:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", "data-tsd-source": "/src/myt/pages/AllTours.tsx:25:11", children: "All Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "scheduled", "data-tsd-source": "/src/myt/pages/AllTours.tsx:26:11", children: "Scheduled" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "confirmed", "data-tsd-source": "/src/myt/pages/AllTours.tsx:27:11", children: "Confirmed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "completed", "data-tsd-source": "/src/myt/pages/AllTours.tsx:28:11", children: "Completed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "no-show", "data-tsd-source": "/src/myt/pages/AllTours.tsx:29:11", children: "No Show" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "cancelled", "data-tsd-source": "/src/myt/pages/AllTours.tsx:30:11", children: "Cancelled" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: outcomeFilter ?? "all", onChange: /* @__PURE__ */ __name2((e) => setOutcomeFilter(e.target.value === "all" ? "all" : e.target.value), "onChange"), className: "bg-surface-2 border border-border rounded-lg px-2 py-1.5 text-xs text-foreground", "data-tsd-source": "/src/myt/pages/AllTours.tsx:32:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", "data-tsd-source": "/src/myt/pages/AllTours.tsx:33:11", children: "All Outcomes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "draft", "data-tsd-source": "/src/myt/pages/AllTours.tsx:34:11", children: "Draft" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "follow-up", "data-tsd-source": "/src/myt/pages/AllTours.tsx:35:11", children: "Follow-up" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "rejected", "data-tsd-source": "/src/myt/pages/AllTours.tsx:36:11", children: "Rejected" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden space-y-2", "data-tsd-source": "/src/myt/pages/AllTours.tsx:41:7", children: filtered.slice(0, 30).map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: `/myt/tour/${t.id}`, className: "block glass-card p-3 space-y-1.5 hover:border-primary/50 transition-colors", "data-tsd-source": "/src/myt/pages/AllTours.tsx:43:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", "data-tsd-source": "/src/myt/pages/AllTours.tsx:44:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground text-sm", "data-tsd-source": "/src/myt/pages/AllTours.tsx:45:15", children: t.leadName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/myt/pages/AllTours.tsx:46:15", children: t.tourTime })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/myt/pages/AllTours.tsx:48:13", children: [
        t.propertyName,
        " · ",
        t.area
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground", "data-tsd-source": "/src/myt/pages/AllTours.tsx:49:13", children: [
        "TCM: ",
        t.assignedToName,
        " · By: ",
        t.scheduledByName
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", "data-tsd-source": "/src/myt/pages/AllTours.tsx:50:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: t.status, "data-tsd-source": "/src/myt/pages/AllTours.tsx:51:15" }),
        t.showUp !== null && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", "data-tsd-source": "/src/myt/pages/AllTours.tsx:52:37", children: t.showUp ? "✅" : "❌" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(OutcomeBadge, { outcome: t.outcome, "data-tsd-source": "/src/myt/pages/AllTours.tsx:53:15" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground capitalize", "data-tsd-source": "/src/myt/pages/AllTours.tsx:54:15", children: t.bookingSource }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-auto text-[10px] text-primary inline-flex items-center gap-1", "data-tsd-source": "/src/myt/pages/AllTours.tsx:55:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-3 w-3", "data-tsd-source": "/src/myt/pages/AllTours.tsx:55:97" }),
          " Open"
        ] })
      ] }),
      t.remarks && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground italic", "data-tsd-source": "/src/myt/pages/AllTours.tsx:57:27", children: [
        '"',
        t.remarks,
        '"'
      ] })
    ] }, t.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block glass-card overflow-hidden", "data-tsd-source": "/src/myt/pages/AllTours.tsx:63:7", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", "data-tsd-source": "/src/myt/pages/AllTours.tsx:64:9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", "data-tsd-source": "/src/myt/pages/AllTours.tsx:65:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { "data-tsd-source": "/src/myt/pages/AllTours.tsx:66:13", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border text-muted-foreground bg-surface-2/50", "data-tsd-source": "/src/myt/pages/AllTours.tsx:67:15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-3 px-4 font-medium", "data-tsd-source": "/src/myt/pages/AllTours.tsx:68:17", children: "Time" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-3 px-2 font-medium", "data-tsd-source": "/src/myt/pages/AllTours.tsx:69:17", children: "Lead" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-3 px-2 font-medium", "data-tsd-source": "/src/myt/pages/AllTours.tsx:70:17", children: "Property" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-3 px-2 font-medium", "data-tsd-source": "/src/myt/pages/AllTours.tsx:71:17", children: "Area" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-3 px-2 font-medium", "data-tsd-source": "/src/myt/pages/AllTours.tsx:72:17", children: "TCM" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-3 px-2 font-medium", "data-tsd-source": "/src/myt/pages/AllTours.tsx:73:17", children: "Source" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-3 px-2 font-medium", "data-tsd-source": "/src/myt/pages/AllTours.tsx:74:17", children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-3 px-2 font-medium", "data-tsd-source": "/src/myt/pages/AllTours.tsx:75:17", children: "Show" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-3 px-2 font-medium", "data-tsd-source": "/src/myt/pages/AllTours.tsx:76:17", children: "Outcome" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-3 px-2 font-medium", "data-tsd-source": "/src/myt/pages/AllTours.tsx:77:17", children: "Remarks" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { "data-tsd-source": "/src/myt/pages/AllTours.tsx:80:13", children: filtered.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/50 hover:bg-accent/30", "data-tsd-source": "/src/myt/pages/AllTours.tsx:82:17", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-4 text-muted-foreground", "data-tsd-source": "/src/myt/pages/AllTours.tsx:83:19", children: t.tourTime }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-2 font-medium text-foreground", "data-tsd-source": "/src/myt/pages/AllTours.tsx:84:19", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: `/myt/tour/${t.id}`, className: "hover:text-primary inline-flex items-center gap-1", "data-tsd-source": "/src/myt/pages/AllTours.tsx:85:21", children: [
          t.leadName,
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-3 w-3 opacity-60", "data-tsd-source": "/src/myt/pages/AllTours.tsx:86:36" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-2 text-muted-foreground", "data-tsd-source": "/src/myt/pages/AllTours.tsx:89:19", children: t.propertyName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-2 text-muted-foreground", "data-tsd-source": "/src/myt/pages/AllTours.tsx:90:19", children: t.area }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-2 text-muted-foreground", "data-tsd-source": "/src/myt/pages/AllTours.tsx:91:19", children: t.assignedToName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-2 text-muted-foreground capitalize", "data-tsd-source": "/src/myt/pages/AllTours.tsx:92:19", children: t.bookingSource }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-2", "data-tsd-source": "/src/myt/pages/AllTours.tsx:93:19", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: t.status, "data-tsd-source": "/src/myt/pages/AllTours.tsx:93:45" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-2", "data-tsd-source": "/src/myt/pages/AllTours.tsx:94:19", children: t.showUp === true ? "✅" : t.showUp === false ? "❌" : "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-2", "data-tsd-source": "/src/myt/pages/AllTours.tsx:95:19", children: /* @__PURE__ */ jsxRuntimeExports.jsx(OutcomeBadge, { outcome: t.outcome, "data-tsd-source": "/src/myt/pages/AllTours.tsx:95:45" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-2 text-muted-foreground text-xs max-w-[120px] truncate", "data-tsd-source": "/src/myt/pages/AllTours.tsx:96:19", children: t.remarks || "—" })
      ] }, t.id)) })
    ] }) }) })
  ] });
}
__name(AllTours, "AllTours");
__name2(AllTours, "AllTours");
const SplitComponent = /* @__PURE__ */ __name2(() => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/myt/tours.tsx:7:20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AllTours, { "data-tsd-source": "/src/routes/myt/tours.tsx:7:30" }) }), "SplitComponent");
export {
  SplitComponent as component
};
