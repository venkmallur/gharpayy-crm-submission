var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-rXFHrudv.mjs";
import { q as cn, aB as useAppState, Z as Dialog, _ as DialogTrigger, k as Button, X as Input, aI as zones, $ as DialogContent, a0 as DialogHeader, a1 as DialogTitle, S as Select, w as SelectTrigger, x as SelectValue, y as SelectContent, z as SelectItem, A as Textarea, U as Label, a2 as DialogFooter } from "./router-Cbs6ivkN.mjs";
import { s as scoreProperty, U as UrgencyTimer } from "./UrgencyTimer-io5DYcN8.mjs";
import { L } from "../_libs/leaflet.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { B as Building2, K as MapPin, W as Wallet, T as TrendingUp, z as Target, Z as Zap, b8 as Lock, F as Flame, t as Plus, a3 as Search, aV as LayoutGrid, n as Map, S as Sparkles } from "../_libs/lucide-react.mjs";
import { MapContainer, TileLayer, Marker, Popup } from "../_libs/react-leaflet.mjs";
import { R as ResponsiveContainer, B as BarChart, X as XAxis, Y as YAxis, T as Tooltip, a as Bar, C as Cell } from "../_libs/recharts.mjs";
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
import "./blocks-BquurJE3.mjs";
import "../_libs/react-leaflet__core.mjs";
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
const signalConfig = {
  hot: { label: "Hot", emoji: "🔥", cls: "bg-danger/15 text-danger border-danger/30" },
  balanced: { label: "Balanced", emoji: "⚖️", cls: "bg-role-hr/15 text-role-hr border-role-hr/30" },
  cold: { label: "Cold", emoji: "❄️", cls: "bg-primary/10 text-primary border-primary/30" }
};
function SignalChip({ signal, className }) {
  const c = signalConfig[signal];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: cn(
    "inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[10px] font-semibold uppercase tracking-wide",
    c.cls,
    className
  ), "data-tsd-source": "/src/myt/components/SignalChip.tsx:13:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-tsd-source": "/src/myt/components/SignalChip.tsx:17:7", children: c.emoji }),
    c.label
  ] });
}
__name(SignalChip, "SignalChip");
__name2(SignalChip, "SignalChip");
const scoreColor = /* @__PURE__ */ __name2((s) => s >= 70 ? "text-role-tcm" : s >= 45 ? "text-role-hr" : "text-danger", "scoreColor");
const scoreBg = /* @__PURE__ */ __name2((s) => s >= 70 ? "bg-role-tcm" : s >= 45 ? "bg-role-hr" : "bg-danger", "scoreBg");
function PropertyCard({ property: p, scores: s, onClick }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      onClick,
      className: "w-full text-left rounded-xl border border-border bg-card p-3 space-y-2.5 hover:border-accent/50 hover:shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40",
      "data-tsd-source": "/src/myt/components/PropertyCard.tsx:20:5",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start justify-between gap-2", "data-tsd-source": "/src/myt/components/PropertyCard.tsx:24:7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", "data-tsd-source": "/src/myt/components/PropertyCard.tsx:25:9", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", "data-tsd-source": "/src/myt/components/PropertyCard.tsx:26:11", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-3.5 w-3.5 text-muted-foreground shrink-0", "data-tsd-source": "/src/myt/components/PropertyCard.tsx:27:13" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground text-sm truncate", "data-tsd-source": "/src/myt/components/PropertyCard.tsx:28:13", children: p.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SignalChip, { signal: s.signal, "data-tsd-source": "/src/myt/components/PropertyCard.tsx:29:13" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-0.5 text-[11px] text-muted-foreground", "data-tsd-source": "/src/myt/components/PropertyCard.tsx:31:11", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", "data-tsd-source": "/src/myt/components/PropertyCard.tsx:32:13", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3", "data-tsd-source": "/src/myt/components/PropertyCard.tsx:32:55" }),
              p.area
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", "data-tsd-source": "/src/myt/components/PropertyCard.tsx:33:13", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "h-3 w-3", "data-tsd-source": "/src/myt/components/PropertyCard.tsx:33:55" }),
              "₹",
              (p.basePrice / 1e3).toFixed(0),
              "k"
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2", "data-tsd-source": "/src/myt/components/PropertyCard.tsx:39:7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ScoreTile, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-3 w-3" }), label: "Demand", value: s.demandScore, "data-tsd-source": "/src/myt/components/PropertyCard.tsx:40:9" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ScoreTile, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-3 w-3" }), label: "Conv", value: s.conversionScore, "data-tsd-source": "/src/myt/components/PropertyCard.tsx:41:9" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ScoreTile, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-3 w-3" }), label: "Velocity", value: s.velocityScore, "data-tsd-source": "/src/myt/components/PropertyCard.tsx:42:9" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", "data-tsd-source": "/src/myt/components/PropertyCard.tsx:46:7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[10px] text-muted-foreground", "data-tsd-source": "/src/myt/components/PropertyCard.tsx:47:9", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-tsd-source": "/src/myt/components/PropertyCard.tsx:48:11", children: "Beds" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "tabular-nums", "data-tsd-source": "/src/myt/components/PropertyCard.tsx:49:11", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", "data-tsd-source": "/src/myt/components/PropertyCard.tsx:50:13", children: s.bedsAvailable }),
              " open · ",
              s.bedsBlocked,
              " blocked · ",
              s.bedsOccupied,
              "/",
              s.bedsTotal
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-1.5 rounded-full bg-surface-3 overflow-hidden flex", "data-tsd-source": "/src/myt/components/PropertyCard.tsx:53:9", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-role-tcm", style: { width: `${s.bedsOccupied / Math.max(1, s.bedsTotal) * 100}%` }, "data-tsd-source": "/src/myt/components/PropertyCard.tsx:54:11" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-role-hr", style: { width: `${s.bedsBlocked / Math.max(1, s.bedsTotal) * 100}%` }, "data-tsd-source": "/src/myt/components/PropertyCard.tsx:55:11" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[11px] pt-1 border-t border-border", "data-tsd-source": "/src/myt/components/PropertyCard.tsx:60:7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", "data-tsd-source": "/src/myt/components/PropertyCard.tsx:61:9", children: "This week" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 font-mono tabular-nums", "data-tsd-source": "/src/myt/components/PropertyCard.tsx:62:9", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-role-tcm font-semibold", "data-tsd-source": "/src/myt/components/PropertyCard.tsx:63:11", children: [
              "+₹",
              (s.revenueWeek / 1e3).toFixed(0),
              "k"
            ] }),
            s.missedRevenue > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-danger", "data-tsd-source": "/src/myt/components/PropertyCard.tsx:65:13", children: [
              "−₹",
              (s.missedRevenue / 1e3).toFixed(0),
              "k"
            ] })
          ] })
        ] }),
        s.suggestedActions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-primary bg-primary/5 border border-primary/20 rounded px-2 py-1 leading-snug", "data-tsd-source": "/src/myt/components/PropertyCard.tsx:72:9", children: [
          "💡 ",
          s.suggestedActions[0]
        ] }),
        s.bedsBlocked > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-role-hr flex items-center gap-1", "data-tsd-source": "/src/myt/components/PropertyCard.tsx:79:9", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-3 w-3", "data-tsd-source": "/src/myt/components/PropertyCard.tsx:80:11" }),
          s.bedsBlocked,
          " bed",
          s.bedsBlocked > 1 ? "s" : "",
          " held"
        ] })
      ]
    }
  );
}
__name(PropertyCard, "PropertyCard");
__name2(PropertyCard, "PropertyCard");
function ScoreTile({ icon, label, value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md bg-surface-3 px-2 py-1.5", "data-tsd-source": "/src/myt/components/PropertyCard.tsx:89:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-[9px] uppercase tracking-wide text-muted-foreground", "data-tsd-source": "/src/myt/components/PropertyCard.tsx:90:7", children: [
      icon,
      label
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-1 mt-0.5", "data-tsd-source": "/src/myt/components/PropertyCard.tsx:93:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("text-base font-bold tabular-nums", scoreColor(value)), "data-tsd-source": "/src/myt/components/PropertyCard.tsx:94:9", children: value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-muted-foreground", "data-tsd-source": "/src/myt/components/PropertyCard.tsx:95:9", children: "/100" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-0.5 rounded-full bg-surface-2 overflow-hidden mt-0.5", "data-tsd-source": "/src/myt/components/PropertyCard.tsx:97:7", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("h-full", scoreBg(value)), style: { width: `${value}%` }, "data-tsd-source": "/src/myt/components/PropertyCard.tsx:98:9" }) })
  ] });
}
__name(ScoreTile, "ScoreTile");
__name2(ScoreTile, "ScoreTile");
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png"
});
const ZONE_COORDS = {
  "Koramangala": [12.9352, 77.6245],
  "Indiranagar": [12.9784, 77.6408],
  "HSR Layout": [12.9121, 77.6446],
  "Whitefield": [12.9698, 77.7499],
  "Marathahalli": [12.9569, 77.7011],
  "BTM Layout": [12.9166, 77.6101]
};
function PropertyMap({ properties, onSelect }) {
  const center = properties.length > 0 ? ZONE_COORDS[properties[0].area] || [12.9716, 77.5946] : [12.9716, 77.5946];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-[400px] rounded-xl overflow-hidden border border-border", "data-tsd-source": "/src/myt/components/PropertyMap.tsx:30:5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(MapContainer, { center, zoom: 12, scrollWheelZoom: false, style: { height: "100%", width: "100%" }, "data-tsd-source": "/src/myt/components/PropertyMap.tsx:31:7", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      TileLayer,
      {
        url: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/attributions">CARTO</a>',
        "data-tsd-source": "/src/myt/components/PropertyMap.tsx:32:9"
      }
    ),
    properties.map((p) => {
      const baseCoord = ZONE_COORDS[p.area] || [12.9716, 77.5946];
      const jitterLat = baseCoord[0] + (Math.random() - 0.5) * 0.01;
      const jitterLng = baseCoord[1] + (Math.random() - 0.5) * 0.01;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        Marker,
        {
          position: [jitterLat, jitterLng],
          eventHandlers: { click: /* @__PURE__ */ __name2(() => onSelect(p), "click") },
          "data-tsd-source": "/src/myt/components/PropertyMap.tsx:43:13",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Popup, { "data-tsd-source": "/src/myt/components/PropertyMap.tsx:48:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", "data-tsd-source": "/src/myt/components/PropertyMap.tsx:49:17", children: p.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/myt/components/PropertyMap.tsx:50:17", children: p.area }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs mt-1", "data-tsd-source": "/src/myt/components/PropertyMap.tsx:51:17", children: [
              "₹",
              p.basePrice,
              "/mo"
            ] })
          ] })
        },
        p.id
      );
    })
  ] }) });
}
__name(PropertyMap, "PropertyMap");
__name2(PropertyMap, "PropertyMap");
function DemandHeatmap() {
  const { leads } = useAppState();
  const data = reactExports.useMemo(() => {
    if (!leads.length) return [];
    const demandByArea = {};
    leads.forEach((lead) => {
      const area = lead.area || lead.zone || "Unknown";
      demandByArea[area] = (demandByArea[area] || 0) + 1;
    });
    return Object.entries(demandByArea).map(([area, count]) => ({ area, count })).sort((a, b) => b.count - a.count).slice(0, 5);
  }, [leads]);
  if (data.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-4 flex flex-col h-[300px]", "data-tsd-source": "/src/myt/components/DemandHeatmap.tsx:27:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", "data-tsd-source": "/src/myt/components/DemandHeatmap.tsx:28:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "h-4 w-4 text-orange-500", "data-tsd-source": "/src/myt/components/DemandHeatmap.tsx:29:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-foreground", "data-tsd-source": "/src/myt/components/DemandHeatmap.tsx:30:9", children: "Lead Demand Heatmap" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 w-full min-h-0", "data-tsd-source": "/src/myt/components/DemandHeatmap.tsx:32:7", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", "data-tsd-source": "/src/myt/components/DemandHeatmap.tsx:33:9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data, layout: "vertical", margin: { top: 0, right: 0, left: 0, bottom: 0 }, "data-tsd-source": "/src/myt/components/DemandHeatmap.tsx:34:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { type: "number", hide: true, "data-tsd-source": "/src/myt/components/DemandHeatmap.tsx:35:13" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        YAxis,
        {
          dataKey: "area",
          type: "category",
          axisLine: false,
          tickLine: false,
          tick: { fill: "hsl(var(--muted-foreground))", fontSize: 11 },
          width: 100,
          "data-tsd-source": "/src/myt/components/DemandHeatmap.tsx:36:13"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Tooltip,
        {
          cursor: { fill: "hsl(var(--muted)/0.4)" },
          contentStyle: { backgroundColor: "hsl(var(--card))", borderColor: "hsl(var(--border))", borderRadius: "8px", fontSize: "12px" },
          "data-tsd-source": "/src/myt/components/DemandHeatmap.tsx:44:13"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "count", radius: [0, 4, 4, 0], "data-tsd-source": "/src/myt/components/DemandHeatmap.tsx:48:13", children: data.map((entry, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: `hsl(var(--primary) / ${0.5 + 0.5 * (data.length - index) / data.length})`, "data-tsd-source": "/src/myt/components/DemandHeatmap.tsx:50:17" }, `cell-${index}`)) })
    ] }) }) })
  ] });
}
__name(DemandHeatmap, "DemandHeatmap");
__name2(DemandHeatmap, "DemandHeatmap");
const emptyRoomDraft = /* @__PURE__ */ __name2((price = 8e3) => ({
  type: "double",
  bedsTotal: 2,
  bedsOccupied: 0,
  currentPrice: price
}), "emptyRoomDraft");
function PropertyCommandCenter() {
  const {
    tours,
    leads,
    blocks,
    globalZoneFilter,
    managedProperties,
    setManagedProperties,
    managedRooms,
    setManagedRooms
  } = useAppState();
  const [search, setSearch] = reactExports.useState("");
  const [signalFilter, setSignalFilter] = reactExports.useState("all");
  const [viewMode, setViewMode] = reactExports.useState("list");
  const [selected, setSelected] = reactExports.useState(null);
  const [addOpen, setAddOpen] = reactExports.useState(false);
  const scoredProps = reactExports.useMemo(() => {
    return managedProperties.map((p) => ({ p, s: scoreProperty(p, managedRooms, tours, leads, blocks) })).filter(({ p }) => !globalZoneFilter || p.zoneId === globalZoneFilter).filter(({ p }) => !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.area.toLowerCase().includes(search.toLowerCase())).filter(({ s }) => signalFilter === "all" || s.signal === signalFilter).sort((a, b) => b.s.demandScore - a.s.demandScore);
  }, [managedProperties, managedRooms, tours, leads, blocks, globalZoneFilter, search, signalFilter]);
  const totals = reactExports.useMemo(() => {
    const all = managedProperties.map((p) => scoreProperty(p, managedRooms, tours, leads, blocks));
    return {
      hot: all.filter((s) => s.signal === "hot").length,
      cold: all.filter((s) => s.signal === "cold").length,
      revenue: all.reduce((sum, s) => sum + s.revenueWeek, 0),
      missed: all.reduce((sum, s) => sum + s.missedRevenue, 0),
      blockedBeds: all.reduce((sum, s) => sum + s.bedsBlocked, 0)
    };
  }, [managedProperties, managedRooms, tours, leads, blocks]);
  const handleCreate = /* @__PURE__ */ __name2((property, rooms) => {
    setManagedProperties((prev) => [...prev, property]);
    setManagedRooms((prev) => [...prev, ...rooms]);
    setAddOpen(false);
    toast.success(`${property.name} added`);
  }, "handleCreate");
  const isEmpty = managedProperties.length === 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-slide-up", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:78:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 flex-wrap", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:79:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:80:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-xl md:text-2xl font-heading font-bold text-foreground flex items-center gap-2", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:81:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-5 w-5 text-primary", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:82:13" }),
          "Property Command Center"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:85:11", children: "Live demand, conversion & velocity — populated from your real properties." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open: addOpen, onOpenChange: setAddOpen, "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:89:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:90:11", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "gap-1.5 h-9", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:91:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:92:15" }),
          " Add property"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AddPropertyDialog, { onCreate: handleCreate, "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:95:11" })
      ] })
    ] }),
    !isEmpty && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-4", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:100:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 grid grid-cols-2 md:grid-cols-5 gap-2 content-start", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:101:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryTile, { label: "🔥 Hot", value: totals.hot, "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:102:13" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryTile, { label: "❄️ Cold", value: totals.cold, "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:103:13" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryTile, { label: "Beds Held", value: totals.blockedBeds, "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:104:13" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryTile, { label: "Revenue (7d)", value: `₹${(totals.revenue / 1e3).toFixed(0)}k`, "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:105:13" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryTile, { label: "Missed (7d)", value: `₹${(totals.missed / 1e3).toFixed(0)}k`, accent: "danger", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:106:13" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-1", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:108:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DemandHeatmap, { "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:109:13" }) })
    ] }),
    !isEmpty && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 items-center", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:115:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-w-[160px]", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:116:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:117:13" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            value: search,
            onChange: /* @__PURE__ */ __name2((e) => setSearch(e.target.value), "onChange"),
            placeholder: "Search property or area…",
            className: "pl-8 h-9 bg-surface-2 border-border text-xs",
            "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:118:13"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:125:11", children: ["all", "hot", "balanced", "cold"].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: /* @__PURE__ */ __name2(() => setSignalFilter(f), "onClick"),
          className: cn(
            "px-2.5 h-9 rounded-md text-[11px] font-medium uppercase tracking-wide transition-colors",
            signalFilter === f ? "bg-primary text-primary-foreground" : "bg-surface-2 text-muted-foreground hover:bg-surface-3"
          ),
          "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:127:15",
          children: f
        },
        f
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 ml-auto", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:139:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: /* @__PURE__ */ __name2(() => setViewMode("list"), "onClick"),
            className: cn(
              "px-3 h-9 rounded-md text-[11px] font-medium flex items-center gap-1.5 transition-colors",
              viewMode === "list" ? "bg-primary text-primary-foreground" : "bg-surface-2 text-muted-foreground hover:bg-surface-3"
            ),
            "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:140:13",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutGrid, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:147:15" }),
              " List"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: /* @__PURE__ */ __name2(() => setViewMode("map"), "onClick"),
            className: cn(
              "px-3 h-9 rounded-md text-[11px] font-medium flex items-center gap-1.5 transition-colors",
              viewMode === "map" ? "bg-primary text-primary-foreground" : "bg-surface-2 text-muted-foreground hover:bg-surface-3"
            ),
            "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:149:13",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Map, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:156:15" }),
              " Map"
            ]
          }
        )
      ] })
    ] }),
    isEmpty ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { onAdd: /* @__PURE__ */ __name2(() => setAddOpen(true), "onAdd"), "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:163:9" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      viewMode === "list" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-2 md:grid-cols-2 lg:grid-cols-3", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:167:13", children: scoredProps.map(({ p, s }) => /* @__PURE__ */ jsxRuntimeExports.jsx(PropertyCard, { property: p, scores: s, onClick: /* @__PURE__ */ __name2(() => setSelected(p), "onClick"), "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:169:17" }, p.id)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        PropertyMap,
        {
          properties: scoredProps.map((sp) => sp.p),
          onSelect: setSelected,
          "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:173:13"
        }
      ),
      scoredProps.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-card p-8 text-center text-sm text-muted-foreground", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:179:13", children: "No properties match these filters." })
    ] }),
    selected && /* @__PURE__ */ jsxRuntimeExports.jsx(PropertyDrawer, { property: selected, onClose: /* @__PURE__ */ __name2(() => setSelected(null), "onClose"), "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:187:9" })
  ] });
}
__name(PropertyCommandCenter, "PropertyCommandCenter");
__name2(PropertyCommandCenter, "PropertyCommandCenter");
function EmptyState({ onAdd }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-10 md:p-14 text-center space-y-4", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:195:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:196:7", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-7 w-7 text-primary", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:197:9" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:199:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-lg md:text-xl font-bold text-foreground", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:200:9", children: "No properties yet" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground max-w-md mx-auto", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:201:9", children: "Command Center stays clean until you add real properties. Once added, demand, conversion, velocity and revenue signals stream in live from tours, leads, and active holds." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 text-[11px] text-muted-foreground", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:206:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5 text-primary", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:207:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:208:9", children: "Zero seed data · everything you see is yours" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: onAdd, size: "lg", className: "gap-2", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:210:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:211:9" }),
      " Add your first property"
    ] })
  ] });
}
__name(EmptyState, "EmptyState");
__name2(EmptyState, "EmptyState");
function SummaryTile({ label, value, accent }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-2.5", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:219:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wide text-muted-foreground", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:220:7", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(
      "text-lg font-bold tabular-nums mt-0.5",
      accent === "danger" ? "text-danger" : "text-foreground"
    ), "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:221:7", children: value })
  ] });
}
__name(SummaryTile, "SummaryTile");
__name2(SummaryTile, "SummaryTile");
function AddPropertyDialog({ onCreate }) {
  const [name, setName] = reactExports.useState("");
  const [zoneId, setZoneId] = reactExports.useState(zones[0]?.id ?? "");
  const [address, setAddress] = reactExports.useState("");
  const [ownerName, setOwnerName] = reactExports.useState("");
  const [basePrice, setBasePrice] = reactExports.useState(8e3);
  const [foodRating, setFoodRating] = reactExports.useState(4);
  const [hygieneRating, setHygieneRating] = reactExports.useState(4);
  const [amenitiesText, setAmenitiesText] = reactExports.useState("WiFi, AC, Laundry, Power backup");
  const [photoCount, setPhotoCount] = reactExports.useState(0);
  const [rooms, setRooms] = reactExports.useState([emptyRoomDraft()]);
  const zone = zones.find((z) => z.id === zoneId);
  const submit = /* @__PURE__ */ __name2(() => {
    if (!name.trim()) return toast.error("Property name is required");
    if (!zone) return toast.error("Select a zone");
    if (!ownerName.trim()) return toast.error("Owner name is required");
    if (rooms.length === 0) return toast.error("Add at least one room");
    const id = `prop-${Date.now()}`;
    const property = {
      id,
      name: name.trim(),
      zoneId: zone.id,
      area: zone.area,
      address: address.trim() || zone.area,
      basePrice,
      foodRating,
      hygieneRating,
      amenities: amenitiesText.split(",").map((a) => a.trim()).filter(Boolean),
      ownerName: ownerName.trim(),
      photoCount,
      pageViews: 0,
      shares: 0
    };
    const builtRooms = rooms.map((r, i) => ({
      id: `${id}-r${i + 1}`,
      propertyId: id,
      type: r.type,
      bedsTotal: r.bedsTotal,
      bedsOccupied: Math.min(r.bedsOccupied, r.bedsTotal),
      currentPrice: r.currentPrice
    }));
    onCreate(property, builtRooms);
  }, "submit");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-xl max-h-[88vh] overflow-y-auto", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:277:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:278:7", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:279:9", children: "Add property" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:282:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:283:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Property name *", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:284:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: name, onChange: /* @__PURE__ */ __name2((e) => setName(e.target.value), "onChange"), placeholder: "e.g. Lakeview Residency", className: "h-9 text-sm", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:285:13" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Zone *", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:287:11", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: zoneId, onValueChange: setZoneId, "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:288:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9 text-sm", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:289:15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:289:54" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:290:15", children: zones.map((z) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: z.id, "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:291:33", children: z.name }, z.id)) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Address", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:295:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: address, onChange: /* @__PURE__ */ __name2((e) => setAddress(e.target.value), "onChange"), placeholder: "Street, locality", className: "h-9 text-sm", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:296:13" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Owner name *", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:298:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: ownerName, onChange: /* @__PURE__ */ __name2((e) => setOwnerName(e.target.value), "onChange"), placeholder: "Owner / contact", className: "h-9 text-sm", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:299:13" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Base price (₹/bed/mo)", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:301:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: basePrice, onChange: /* @__PURE__ */ __name2((e) => setBasePrice(+e.target.value || 0), "onChange"), className: "h-9 text-sm", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:302:13" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Photos uploaded", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:304:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: photoCount, onChange: /* @__PURE__ */ __name2((e) => setPhotoCount(+e.target.value || 0), "onChange"), className: "h-9 text-sm", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:305:13" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Food rating (0–5)", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:307:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", step: "0.1", min: 0, max: 5, value: foodRating, onChange: /* @__PURE__ */ __name2((e) => setFoodRating(+e.target.value || 0), "onChange"), className: "h-9 text-sm", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:308:13" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Hygiene rating (0–5)", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:310:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", step: "0.1", min: 0, max: 5, value: hygieneRating, onChange: /* @__PURE__ */ __name2((e) => setHygieneRating(+e.target.value || 0), "onChange"), className: "h-9 text-sm", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:311:13" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Amenities (comma separated)", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:315:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { value: amenitiesText, onChange: /* @__PURE__ */ __name2((e) => setAmenitiesText(e.target.value), "onChange"), className: "min-h-16 text-sm", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:316:11" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:319:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:320:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px] uppercase tracking-wide text-muted-foreground", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:321:13", children: "Rooms" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "h-7 gap-1 text-xs", onClick: /* @__PURE__ */ __name2(() => setRooms((r) => [...r, emptyRoomDraft(basePrice)]), "onClick"), "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:322:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3 w-3", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:323:15" }),
            " Add room"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:326:11", children: rooms.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-2 items-end rounded-md border border-border bg-surface-2 p-2", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:328:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-3", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:329:17", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[10px] text-muted-foreground", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:330:19", children: "Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: r.type, onValueChange: /* @__PURE__ */ __name2((v) => setRooms((rs) => rs.map((x, j) => j === i ? { ...x, type: v } : x)), "onValueChange"), "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:331:19", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 text-xs", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:332:21", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:332:60" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:333:21", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "single", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:334:23", children: "Single" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "double", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:335:23", children: "Double" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "triple", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:336:23", children: "Triple" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "studio", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:337:23", children: "Studio" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:341:17", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[10px] text-muted-foreground", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:342:19", children: "Beds" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", min: 1, value: r.bedsTotal, onChange: /* @__PURE__ */ __name2((e) => setRooms((rs) => rs.map((x, j) => j === i ? { ...x, bedsTotal: +e.target.value || 1 } : x)), "onChange"), className: "h-8 text-xs", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:343:19" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:345:17", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[10px] text-muted-foreground", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:346:19", children: "Occ." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", min: 0, value: r.bedsOccupied, onChange: /* @__PURE__ */ __name2((e) => setRooms((rs) => rs.map((x, j) => j === i ? { ...x, bedsOccupied: +e.target.value || 0 } : x)), "onChange"), className: "h-8 text-xs", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:347:19" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-3", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:349:17", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[10px] text-muted-foreground", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:350:19", children: "Price ₹" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: r.currentPrice, onChange: /* @__PURE__ */ __name2((e) => setRooms((rs) => rs.map((x, j) => j === i ? { ...x, currentPrice: +e.target.value || 0 } : x)), "onChange"), className: "h-8 text-xs", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:351:19" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:353:17", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              variant: "ghost",
              className: "h-8 w-full text-xs text-muted-foreground hover:text-destructive",
              onClick: /* @__PURE__ */ __name2(() => setRooms((rs) => rs.filter((_, j) => j !== i)), "onClick"),
              disabled: rooms.length === 1,
              "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:354:19",
              children: "Remove"
            }
          ) })
        ] }, i)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogFooter, { "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:366:7", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: submit, className: "w-full sm:w-auto", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:367:9", children: "Save property" }) })
  ] });
}
__name(AddPropertyDialog, "AddPropertyDialog");
__name2(AddPropertyDialog, "AddPropertyDialog");
function Field({ label, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:375:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px] uppercase tracking-wide text-muted-foreground", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:376:7", children: label }),
    children
  ] });
}
__name(Field, "Field");
__name2(Field, "Field");
function PropertyDrawer({ property, onClose }) {
  const { tours, leads, blocks, managedRooms } = useAppState();
  const scores = scoreProperty(property, managedRooms, tours, leads, blocks);
  const propRooms = managedRooms.filter((r) => r.propertyId === property.id);
  const activeBlocks = blocks.filter((b) => b.propertyId === property.id && b.status === "active" && new Date(b.expiresAt).getTime() > Date.now());
  const recentTours = tours.filter((t) => t.propertyName === property.name).slice(0, 5);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 flex md:items-center md:justify-center", onClick: onClose, "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:390:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-background/80 backdrop-blur-sm", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:391:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        onClick: /* @__PURE__ */ __name2((e) => e.stopPropagation(), "onClick"),
        className: "relative w-full md:max-w-2xl md:max-h-[85vh] max-h-[90vh] bg-card border border-border md:rounded-xl rounded-t-2xl mt-auto md:mt-0 overflow-y-auto",
        "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:392:7",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-0 bg-card border-b border-border p-4 flex items-start justify-between z-10", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:396:9", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:397:11", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:398:13", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading font-bold text-foreground", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:399:15", children: property.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SignalChip, { signal: scores.signal, "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:400:15" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:402:13", children: [
                property.address,
                " · Owner: ",
                property.ownerName
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "text-muted-foreground hover:text-foreground text-xl leading-none", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:404:11", children: "×" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-4", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:407:9", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:408:11", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[10px] uppercase tracking-wide text-muted-foreground font-semibold", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:409:13", children: "Recommended Actions" }),
              scores.suggestedActions.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-foreground bg-primary/5 border border-primary/20 rounded px-3 py-2 flex items-start gap-2", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:411:15", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:412:17", children: "💡" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:412:32", children: a })
              ] }, i))
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:417:11", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-[10px] uppercase tracking-wide text-muted-foreground font-semibold mb-2", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:418:13", children: [
                "Rooms (",
                propRooms.length,
                ")"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-2", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:419:13", children: propRooms.map((r) => {
                const blocksOnRoom = activeBlocks.filter((b) => b.roomId === r.id).length;
                const free = r.bedsTotal - r.bedsOccupied - blocksOnRoom;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-surface-2 p-2.5", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:424:19", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:425:21", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-foreground capitalize", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:426:23", children: r.type }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:427:23", children: [
                      "₹",
                      (r.currentPrice / 1e3).toFixed(1),
                      "k"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground mt-1", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:429:21", children: [
                    free,
                    " free · ",
                    r.bedsOccupied,
                    " taken",
                    blocksOnRoom > 0 && ` · ${blocksOnRoom} held`
                  ] })
                ] }, r.id);
              }) })
            ] }),
            activeBlocks.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:439:13", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-[10px] uppercase tracking-wide text-muted-foreground font-semibold mb-2 flex items-center gap-1", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:440:15", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-3 w-3", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:441:17" }),
                "Active Holds"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:443:15", children: activeBlocks.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs bg-surface-2 rounded px-3 py-2", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:445:19", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:446:21", children: [
                  b.leadName,
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:446:68", children: [
                    "· ",
                    b.intent
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(UrgencyTimer, { expiresAt: b.expiresAt, "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:447:21" })
              ] }, b.id)) })
            ] }),
            recentTours.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:455:13", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[10px] uppercase tracking-wide text-muted-foreground font-semibold mb-2", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:456:15", children: "Recent Tours" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:457:15", children: recentTours.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs bg-surface-2 rounded px-3 py-1.5", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:459:19", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground truncate", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:460:21", children: t.leadName }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground capitalize", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:461:21", children: [
                  t.status,
                  " ",
                  t.outcome ? `· ${t.outcome}` : ""
                ] })
              ] }, t.id)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden", "data-tsd-source": "/src/myt/pages/PropertyCommandCenter.tsx:469:11", children: leads.length })
          ] })
        ]
      }
    )
  ] });
}
__name(PropertyDrawer, "PropertyDrawer");
__name2(PropertyDrawer, "PropertyDrawer");
const SplitComponent = /* @__PURE__ */ __name2(() => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/myt/properties.tsx:7:20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PropertyCommandCenter, { "data-tsd-source": "/src/routes/myt/properties.tsx:7:30" }) }), "SplitComponent");
export {
  SplitComponent as component
};
