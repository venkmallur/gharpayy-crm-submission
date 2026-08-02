var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-BN067m2r.mjs";
import { u as useApp, a4 as computePropertyMetrics } from "./router-xBhBcQRf.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";

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
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
function InventoryPage() {
  const {
    properties,
    leads,
    tours
  } = useApp();
  const metrics = reactExports.useMemo(() => computePropertyMetrics(properties, leads, tours), [properties, leads, tours]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/inventory.tsx:18:5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", "data-tsd-source": "/src/routes/inventory.tsx:19:7", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { "data-tsd-source": "/src/routes/inventory.tsx:20:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-semibold tracking-tight", "data-tsd-source": "/src/routes/inventory.tsx:21:11", children: "Inventory pressure" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", "data-tsd-source": "/src/routes/inventory.tsx:22:11", children: "Demand vs conversion vs vacancy. Each card tells you what to do next." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", "data-tsd-source": "/src/routes/inventory.tsx:25:9", children: metrics.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "rounded-xl border border-border bg-card p-4 space-y-3", "data-tsd-source": "/src/routes/inventory.tsx:27:13", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-start justify-between gap-2", "data-tsd-source": "/src/routes/inventory.tsx:28:15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/routes/inventory.tsx:29:17", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-sm leading-tight", "data-tsd-source": "/src/routes/inventory.tsx:30:19", children: m.property.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/routes/inventory.tsx:31:19", children: m.property.area })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Signal, { signal: m.signal, "data-tsd-source": "/src/routes/inventory.tsx:33:17" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", "data-tsd-source": "/src/routes/inventory.tsx:36:15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tile, { label: "Demand", value: m.demandScore, suffix: "/100", "data-tsd-source": "/src/routes/inventory.tsx:37:17" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tile, { label: "Pressure", value: m.pressureScore, suffix: "/100", accent: true, "data-tsd-source": "/src/routes/inventory.tsx:38:17" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tile, { label: "Conversion", value: m.conversionPct, suffix: "%", "data-tsd-source": "/src/routes/inventory.tsx:39:17" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tile, { label: "Occupancy", value: m.occupancyPct, suffix: "%", "data-tsd-source": "/src/routes/inventory.tsx:40:17" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", "data-tsd-source": "/src/routes/inventory.tsx:43:15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { label: "Pressure", value: m.pressureScore, "data-tsd-source": "/src/routes/inventory.tsx:44:17" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { label: "Conversion", value: m.conversionPct, tone: "success", "data-tsd-source": "/src/routes/inventory.tsx:45:17" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { label: "Occupancy", value: m.occupancyPct, tone: "info", "data-tsd-source": "/src/routes/inventory.tsx:46:17" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 text-[11px] pt-1 border-t border-border", "data-tsd-source": "/src/routes/inventory.tsx:49:15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(KV, { label: "Leads", value: m.leadCount, "data-tsd-source": "/src/routes/inventory.tsx:50:17" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(KV, { label: "Tours", value: m.tourCount, "data-tsd-source": "/src/routes/inventory.tsx:51:17" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(KV, { label: "Vacant", value: `${m.property.vacantBeds}/${m.property.totalBeds}`, "data-tsd-source": "/src/routes/inventory.tsx:52:17" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Recommendation, { signal: m.signal, property: m.property, "data-tsd-source": "/src/routes/inventory.tsx:55:15" })
    ] }, m.property.id)) })
  ] }) });
}
__name(InventoryPage, "InventoryPage");
__name2(InventoryPage, "InventoryPage");
function Tile({
  label,
  value,
  suffix,
  accent
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-muted/60 px-3 py-2", "data-tsd-source": "/src/routes/inventory.tsx:66:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", "data-tsd-source": "/src/routes/inventory.tsx:67:7", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `font-display text-lg font-semibold tabular-nums ${accent ? "text-accent" : ""}`, "data-tsd-source": "/src/routes/inventory.tsx:68:7", children: [
      value,
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs font-normal", "data-tsd-source": "/src/routes/inventory.tsx:69:16", children: suffix })
    ] })
  ] });
}
__name(Tile, "Tile");
__name2(Tile, "Tile");
function Bar({
  label,
  value,
  tone = "accent"
}) {
  const cls = {
    accent: "bg-accent",
    success: "bg-success",
    info: "bg-info"
  }[tone];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/routes/inventory.tsx:78:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[10px] text-muted-foreground", "data-tsd-source": "/src/routes/inventory.tsx:79:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-tsd-source": "/src/routes/inventory.tsx:80:9", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", "data-tsd-source": "/src/routes/inventory.tsx:81:9", children: value })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 rounded-full bg-muted overflow-hidden", "data-tsd-source": "/src/routes/inventory.tsx:83:7", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-full ${cls} transition-all`, style: {
      width: `${Math.min(100, value)}%`
    }, "data-tsd-source": "/src/routes/inventory.tsx:84:9" }) })
  ] });
}
__name(Bar, "Bar");
__name2(Bar, "Bar");
function KV({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/routes/inventory.tsx:92:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase tracking-wider text-muted-foreground", "data-tsd-source": "/src/routes/inventory.tsx:93:7", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium", "data-tsd-source": "/src/routes/inventory.tsx:94:7", children: value })
  ] });
}
__name(KV, "KV");
__name2(KV, "KV");
function Signal({
  signal
}) {
  const map = {
    "high-demand-low-conv": {
      label: "Pricing",
      cls: "bg-destructive/10 text-destructive border-destructive/30"
    },
    "low-demand-high-vacancy": {
      label: "Marketing",
      cls: "bg-warning/15 text-warning-foreground border-warning/30"
    },
    "high-conv-low-supply": {
      label: "Expand",
      cls: "bg-success/10 text-success border-success/30"
    },
    "balanced": {
      label: "Balanced",
      cls: "bg-muted text-muted-foreground border-border"
    }
  };
  const cfg = map[signal];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-semibold ${cfg.cls}`, "data-tsd-source": "/src/routes/inventory.tsx:108:5", children: cfg.label });
}
__name(Signal, "Signal");
__name2(Signal, "Signal");
function Recommendation({
  signal,
  property
}) {
  const text = {
    "high-demand-low-conv": `Strong demand but conversion lags — review pricing at ₹${property.pricePerBed.toLocaleString()}.`,
    "low-demand-high-vacancy": `${property.vacantBeds} beds vacant. Push marketing in ${property.area}.`,
    "high-conv-low-supply": `Hot conversion with only ${property.vacantBeds} bed${property.vacantBeds === 1 ? "" : "s"} left. Plan expansion.`,
    "balanced": `Healthy. Maintain current playbook.`
  }[signal];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground border-t border-border pt-2", "data-tsd-source": "/src/routes/inventory.tsx:122:5", children: text });
}
__name(Recommendation, "Recommendation");
__name2(Recommendation, "Recommendation");
export {
  InventoryPage as component
};
