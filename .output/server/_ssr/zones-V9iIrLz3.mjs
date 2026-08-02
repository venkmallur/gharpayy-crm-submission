var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-BN067m2r.mjs";
import { aB as useAppState, aD as getZonePerformance, aH as teamMembers, q as cn } from "./router-xBhBcQRf.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { R as ResponsiveContainer, B as BarChart, X as XAxis, Y as YAxis, T as Tooltip, a as Bar } from "../_libs/recharts.mjs";

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
import "../_libs/lucide-react.mjs";
import "../_libs/date-fns.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-tabs.mjs";
import "../_libs/radix-ui__react-select.mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/lodash.mjs";
import "../_libs/react-smooth.mjs";
import "../_libs/prop-types.mjs";
import "../_libs/fast-equals.mjs";
import "../_libs/tiny-invariant.mjs";
import "../_libs/react-is.mjs";
import "../_libs/d3-shape.mjs";
import "../_libs/d3-path.mjs";
import "../_libs/victory-vendor.mjs";
import "../_libs/d3-scale.mjs";
import "../_libs/internmap.mjs";
import "../_libs/d3-array.mjs";
import "../_libs/d3-time-format.mjs";
import "../_libs/d3-time.mjs";
import "../_libs/d3-interpolate.mjs";
import "../_libs/d3-color.mjs";
import "../_libs/d3-format.mjs";
import "../_libs/recharts-scale.mjs";
import "../_libs/decimal.js-light.mjs";
import "../_libs/eventemitter3.mjs";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
function ZonePerformance() {
  const { tours } = useAppState();
  const zonePerf = getZonePerformance(tours);
  const chartData = zonePerf.map((z) => ({
    name: z.zoneName.split(" — ")[1],
    tours: z.toursScheduled,
    completed: z.toursCompleted,
    drafts: z.drafts
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 md:space-y-6 animate-slide-up", "data-tsd-source": "/src/myt/pages/ZonePerformance.tsx:18:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl md:text-2xl font-heading font-bold text-foreground", "data-tsd-source": "/src/myt/pages/ZonePerformance.tsx:19:7", children: "Zone Performance" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-3 md:p-5", "data-tsd-source": "/src/myt/pages/ZonePerformance.tsx:21:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading font-semibold text-xs md:text-sm mb-3 text-foreground", "data-tsd-source": "/src/myt/pages/ZonePerformance.tsx:22:9", children: "Tours by Zone" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-48 md:h-72", "data-tsd-source": "/src/myt/pages/ZonePerformance.tsx:23:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", "data-tsd-source": "/src/myt/pages/ZonePerformance.tsx:24:11", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: chartData, "data-tsd-source": "/src/myt/pages/ZonePerformance.tsx:25:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "name", tick: { fill: "hsl(215 12% 50%)", fontSize: 10 }, axisLine: false, tickLine: false, "data-tsd-source": "/src/myt/pages/ZonePerformance.tsx:26:15" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { tick: { fill: "hsl(215 12% 50%)", fontSize: 10 }, axisLine: false, tickLine: false, width: 25, "data-tsd-source": "/src/myt/pages/ZonePerformance.tsx:27:15" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: { background: "hsl(220 18% 12%)", border: "1px solid hsl(220 14% 16%)", borderRadius: "8px", fontSize: "11px", color: "hsl(210 20% 92%)" }, "data-tsd-source": "/src/myt/pages/ZonePerformance.tsx:28:15" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "tours", fill: "hsl(217 91% 60%)", radius: [3, 3, 0, 0], opacity: 0.8, name: "Scheduled", "data-tsd-source": "/src/myt/pages/ZonePerformance.tsx:29:15" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "completed", fill: "hsl(152 69% 45%)", radius: [3, 3, 0, 0], opacity: 0.8, name: "Completed", "data-tsd-source": "/src/myt/pages/ZonePerformance.tsx:30:15" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "drafts", fill: "hsl(38 92% 50%)", radius: [3, 3, 0, 0], opacity: 0.8, name: "Drafts", "data-tsd-source": "/src/myt/pages/ZonePerformance.tsx:31:15" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3", "data-tsd-source": "/src/myt/pages/ZonePerformance.tsx:37:7", children: zonePerf.map((z) => {
      const zoneMembers = teamMembers.filter((m) => m.zoneId === z.zoneId);
      const flowCount = zoneMembers.filter((m) => m.role === "flow-ops").length;
      const tcmCount = zoneMembers.filter((m) => m.role === "tcm").length;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-4", "data-tsd-source": "/src/myt/pages/ZonePerformance.tsx:44:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading font-semibold text-foreground text-sm mb-0.5", "data-tsd-source": "/src/myt/pages/ZonePerformance.tsx:45:15", children: z.zoneName.split(" — ")[1] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground mb-3", "data-tsd-source": "/src/myt/pages/ZonePerformance.tsx:46:15", children: [
          flowCount,
          " Flow Ops · ",
          tcmCount,
          " TCM"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 text-xs", "data-tsd-source": "/src/myt/pages/ZonePerformance.tsx:47:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", "data-tsd-source": "/src/myt/pages/ZonePerformance.tsx:48:17", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", "data-tsd-source": "/src/myt/pages/ZonePerformance.tsx:48:55", children: "Tours" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", "data-tsd-source": "/src/myt/pages/ZonePerformance.tsx:48:107", children: z.toursScheduled })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", "data-tsd-source": "/src/myt/pages/ZonePerformance.tsx:49:17", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", "data-tsd-source": "/src/myt/pages/ZonePerformance.tsx:49:55", children: "Completed" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", "data-tsd-source": "/src/myt/pages/ZonePerformance.tsx:49:111", children: z.toursCompleted })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", "data-tsd-source": "/src/myt/pages/ZonePerformance.tsx:50:17", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", "data-tsd-source": "/src/myt/pages/ZonePerformance.tsx:51:19", children: "Show-Up" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: cn("font-medium", z.showUpRate >= 70 ? "text-role-tcm" : z.showUpRate >= 50 ? "text-role-hr" : "text-danger"), "data-tsd-source": "/src/myt/pages/ZonePerformance.tsx:52:19", children: [
              z.showUpRate,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", "data-tsd-source": "/src/myt/pages/ZonePerformance.tsx:54:17", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", "data-tsd-source": "/src/myt/pages/ZonePerformance.tsx:54:55", children: "Drafts" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-role-hr font-medium", "data-tsd-source": "/src/myt/pages/ZonePerformance.tsx:54:108", children: z.drafts })
          ] })
        ] })
      ] }, z.zoneId);
    }) })
  ] });
}
__name(ZonePerformance, "ZonePerformance");
__name2(ZonePerformance, "ZonePerformance");
const SplitComponent = /* @__PURE__ */ __name2(() => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/myt/zones.tsx:7:20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ZonePerformance, { "data-tsd-source": "/src/routes/myt/zones.tsx:7:30" }) }), "SplitComponent");
export {
  SplitComponent as component
};
