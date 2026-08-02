var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-rXFHrudv.mjs";
import { u as useApp } from "./router-Cbs6ivkN.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { K as MapPin, bg as CircleAlert, v as TrendingDown, T as TrendingUp } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
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
import "tslib";
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
import "util";
import "crypto";
import "async_hooks";
import "stream";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
function HeatmapPage() {
  const {
    leads,
    tours,
    properties,
    bookings
  } = useApp();
  const rows = reactExports.useMemo(() => {
    const areas = /* @__PURE__ */ new Set();
    properties.forEach((p) => areas.add(p.area));
    leads.forEach((l) => areas.add(l.preferredArea));
    return Array.from(areas).map((area) => {
      const areaLeads = leads.filter((l) => l.preferredArea.toLowerCase() === area.toLowerCase());
      const areaProps = properties.filter((p) => p.area.toLowerCase() === area.toLowerCase());
      const areaTours = tours.filter((t) => {
        const prop = properties.find((p) => p.id === t.propertyId);
        return prop?.area.toLowerCase() === area.toLowerCase();
      });
      const areaBookings = bookings.filter((b) => {
        const prop = properties.find((p) => p.id === b.propertyId);
        return prop?.area.toLowerCase() === area.toLowerCase();
      }).length;
      const completedTours = areaTours.filter((t) => t.status === "completed").length;
      const conversion = completedTours > 0 ? Math.round(areaBookings / completedTours * 100) : 0;
      const totalBeds = areaProps.reduce((s, p) => s + p.totalBeds, 0);
      const vacantBeds = areaProps.reduce((s, p) => s + p.vacantBeds, 0);
      const occupancy = totalBeds > 0 ? Math.round((totalBeds - vacantBeds) / totalBeds * 100) : 0;
      const hotLeads = areaLeads.filter((l) => l.intent === "hot").length;
      const avgBudget = areaLeads.length > 0 ? Math.round(areaLeads.reduce((s, l) => s + l.budget, 0) / areaLeads.length) : 0;
      const demand = areaLeads.length;
      const supply = vacantBeds;
      let insight;
      if (demand >= supply * 2 && supply > 0) {
        insight = {
          label: "Expand supply",
          tone: "hot",
          detail: `${demand} leads vs ${supply} beds — high demand, undersupplied.`
        };
      } else if (supply >= demand * 2 && totalBeds > 0) {
        insight = {
          label: "Push marketing",
          tone: "cold",
          detail: `${supply} vacant vs ${demand} leads — oversupply, weak demand.`
        };
      } else if (conversion >= 40) {
        insight = {
          label: "High-converting",
          tone: "warm",
          detail: `${conversion}% close rate — replicate playbook elsewhere.`
        };
      } else if (demand > 0 && conversion < 15) {
        insight = {
          label: "Pricing issue?",
          tone: "hot",
          detail: `${demand} leads but only ${conversion}% convert — investigate.`
        };
      } else {
        insight = {
          label: "Balanced",
          tone: "balanced",
          detail: "Healthy demand-supply ratio."
        };
      }
      const pressure = Math.min(100, Math.round(demand / Math.max(1, supply) * 50));
      return {
        area,
        leads: demand,
        hotLeads,
        tours: completedTours,
        bookings: areaBookings,
        conversion,
        avgBudget,
        totalBeds,
        vacantBeds,
        occupancyPct: occupancy,
        insight,
        pressure
      };
    }).sort((a, b) => b.pressure - a.pressure);
  }, [leads, tours, properties, bookings]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/heatmap.tsx:83:5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", "data-tsd-source": "/src/routes/heatmap.tsx:84:7", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { "data-tsd-source": "/src/routes/heatmap.tsx:85:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-2xl font-semibold tracking-tight inline-flex items-center gap-2", "data-tsd-source": "/src/routes/heatmap.tsx:86:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-6 w-6 text-accent", "data-tsd-source": "/src/routes/heatmap.tsx:87:13" }),
        " Demand heatmap"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", "data-tsd-source": "/src/routes/heatmap.tsx:89:11", children: "Where the market is hot and where you're leaking. Strategic, not operational." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3", "data-tsd-source": "/src/routes/heatmap.tsx:94:9", children: [
      rows.map((r) => {
        const cfg = {
          hot: {
            border: "border-destructive/40",
            bg: "bg-destructive/5",
            text: "text-destructive",
            icon: TrendingUp
          },
          warm: {
            border: "border-success/40",
            bg: "bg-success/5",
            text: "text-success",
            icon: TrendingUp
          },
          cold: {
            border: "border-warning/40",
            bg: "bg-warning/10",
            text: "text-warning-foreground",
            icon: TrendingDown
          },
          balanced: {
            border: "border-border",
            bg: "bg-card",
            text: "text-muted-foreground",
            icon: CircleAlert
          }
        }[r.insight.tone];
        const Icon = cfg.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-xl border ${cfg.border} ${cfg.bg} p-4 space-y-3`, "data-tsd-source": "/src/routes/heatmap.tsx:104:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", "data-tsd-source": "/src/routes/heatmap.tsx:105:17", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/routes/heatmap.tsx:106:19", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-semibold", "data-tsd-source": "/src/routes/heatmap.tsx:107:21", children: r.area }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `inline-flex items-center gap-1 text-[11px] font-medium mt-0.5 ${cfg.text}`, "data-tsd-source": "/src/routes/heatmap.tsx:108:21", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3 w-3", "data-tsd-source": "/src/routes/heatmap.tsx:109:23" }),
                " ",
                r.insight.label
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", "data-tsd-source": "/src/routes/heatmap.tsx:112:19", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", "data-tsd-source": "/src/routes/heatmap.tsx:113:21", children: "Pressure" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-sm font-semibold", "data-tsd-source": "/src/routes/heatmap.tsx:114:21", children: r.pressure })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 text-[11px]", "data-tsd-source": "/src/routes/heatmap.tsx:118:17", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Leads", value: r.leads, hot: r.hotLeads, "data-tsd-source": "/src/routes/heatmap.tsx:119:19" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Tours", value: r.tours, "data-tsd-source": "/src/routes/heatmap.tsx:120:19" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Booked", value: r.bookings, mono: true, "data-tsd-source": "/src/routes/heatmap.tsx:121:19" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Conv %", value: `${r.conversion}%`, mono: true, "data-tsd-source": "/src/routes/heatmap.tsx:122:19" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Vacant", value: `${r.vacantBeds}/${r.totalBeds}`, mono: true, "data-tsd-source": "/src/routes/heatmap.tsx:123:19" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Avg ₹", value: r.avgBudget ? `${(r.avgBudget / 1e3).toFixed(0)}k` : "—", mono: true, "data-tsd-source": "/src/routes/heatmap.tsx:124:19" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 rounded-full bg-muted overflow-hidden", "data-tsd-source": "/src/routes/heatmap.tsx:127:17", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-full ${r.insight.tone === "hot" ? "bg-destructive" : r.insight.tone === "warm" ? "bg-success" : r.insight.tone === "cold" ? "bg-warning" : "bg-muted-foreground"}`, style: {
            width: `${r.pressure}%`
          }, "data-tsd-source": "/src/routes/heatmap.tsx:128:19" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground leading-snug", "data-tsd-source": "/src/routes/heatmap.tsx:131:17", children: r.insight.detail })
        ] }, r.area);
      }),
      rows.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-full rounded-xl border border-border bg-card p-12 text-center text-sm text-muted-foreground", "data-tsd-source": "/src/routes/heatmap.tsx:136:13", children: "No area data yet." })
    ] })
  ] }) });
}
__name(HeatmapPage, "HeatmapPage");
__name2(HeatmapPage, "HeatmapPage");
function Stat({
  label,
  value,
  mono,
  hot
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md bg-background/60 px-2 py-1.5", "data-tsd-source": "/src/routes/heatmap.tsx:148:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase tracking-wider text-muted-foreground", "data-tsd-source": "/src/routes/heatmap.tsx:149:7", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-xs font-medium ${mono ? "font-mono" : ""}`, "data-tsd-source": "/src/routes/heatmap.tsx:150:7", children: [
      value,
      hot !== void 0 && hot > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-1 text-destructive font-mono text-[10px]", "data-tsd-source": "/src/routes/heatmap.tsx:152:42", children: [
        "·",
        hot,
        "🔥"
      ] })
    ] })
  ] });
}
__name(Stat, "Stat");
__name2(Stat, "Stat");
export {
  HeatmapPage as component
};
