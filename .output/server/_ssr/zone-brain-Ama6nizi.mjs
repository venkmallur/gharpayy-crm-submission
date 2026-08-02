var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-rXFHrudv.mjs";
import { u as useApp, a as useSettings, C as Card, B as Badge } from "./router-Cbs6ivkN.mjs";
import { z as zoneSnapshots } from "./analytics-DmYAqfQ6.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { u as Brain, I as IndianRupee, f as Activity, c as Users, g as TriangleAlert, A as ArrowRight, B as Building2, v as TrendingDown, T as TrendingUp } from "../_libs/lucide-react.mjs";
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
function ZoneBrain() {
  const leads = useApp((s) => s.leads);
  const tcms = useApp((s) => s.tcms);
  const bookings = useApp((s) => s.bookings);
  const { settings } = useSettings();
  const zones = reactExports.useMemo(
    () => zoneSnapshots({ zones: settings.zones, tcms, leads, bookings }),
    [settings.zones, tcms, leads, bookings]
  );
  const totalRevenue = zones.reduce((a, z) => a + z.revenueINR, 0);
  const totalActive = zones.reduce((a, z) => a + z.activeLeads, 0);
  const totalSlaFail = zones.reduce((a, z) => a + z.slaBreaches, 0);
  const overloaded = zones.filter((z) => z.pressureLevel === "overloaded");
  const underloaded = zones.filter((z) => z.pressureLevel === "underloaded");
  const leaking = zones.filter((z) => z.pressureLevel === "leaking");
  const rebalances = reactExports.useMemo(() => {
    const moves = [];
    overloaded.forEach((src) => {
      const target = underloaded[0];
      if (target) {
        const excess = Math.max(0, src.activeLeads - 25 * Math.max(1, src.tcmIds.length));
        const transfer = Math.min(excess, Math.max(5, 25 * target.tcmIds.length - target.activeLeads));
        if (transfer > 0) {
          moves.push({
            from: src.zoneName,
            to: target.zoneName,
            suggestedLeads: transfer,
            reason: `${src.zoneName} at ${src.loadPerTcm}/TCM, ${target.zoneName} has spare capacity.`
          });
        }
      }
    });
    return moves;
  }, [overloaded, underloaded]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 max-w-7xl mx-auto", "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:57:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:58:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-2xl font-bold flex items-center gap-2", "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:59:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "h-6 w-6 text-accent", "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:60:11" }),
        " Zone Brain"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:62:9", children: [
        "Per-zone revenue, capacity load, SLA health and auto-rebalancing across ",
        zones.length,
        " Bangalore zones."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3", "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:68:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: IndianRupee, label: "Total MRR", value: `₹${(totalRevenue / 1e3).toFixed(0)}k`, tone: "success", "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:69:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: Activity, label: "Active leads", value: totalActive, "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:70:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: Users, label: "TCMs", value: tcms.length, "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:71:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: TriangleAlert, label: "SLA breaches", value: totalSlaFail, tone: totalSlaFail > 0 ? "danger" : "success", "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:72:9" })
    ] }),
    (rebalances.length > 0 || leaking.length > 0) && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 space-y-2 border-accent/40 bg-accent/5", "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:77:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:78:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 text-accent", "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:79:13" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold", "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:80:13", children: "Rebalance suggestions" })
      ] }),
      rebalances.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-accent/30 bg-card p-2.5 text-sm", "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:83:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-medium", "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:84:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-warning/15 text-warning text-[10px]", "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:85:17", children: r.from }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3 text-muted-foreground", "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:86:17" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-info/15 text-info text-[10px]", "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:87:17", children: r.to }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:88:17", children: [
            "~",
            r.suggestedLeads,
            " leads"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:90:15", children: r.reason })
      ] }, i)),
      leaking.map((z) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-destructive/30 bg-destructive/5 p-2.5 text-sm", "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:94:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-medium text-destructive flex items-center gap-2", "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:95:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:96:17" }),
          " Leaking · ",
          z.zoneName
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground mt-1", "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:98:15", children: [
          "→ ",
          z.recommendation
        ] })
      ] }, z.zoneId))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-3", "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:105:7", children: zones.map((z) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        className: `p-4 space-y-3 ${z.pressureLevel === "leaking" ? "border-destructive/40 bg-destructive/5" : z.pressureLevel === "overloaded" ? "border-warning/40 bg-warning/5" : z.pressureLevel === "underloaded" ? "border-info/40 bg-info/5" : ""}`,
        "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:107:11",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:119:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:120:15", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-base", "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:121:17", children: z.zoneName }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground", "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:122:17", children: [
                z.city,
                " · ",
                z.tcmIds.length,
                " TCM"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(PressurePill, { level: z.pressureLevel, "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:124:15" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-1.5", "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:127:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { label: "Active", value: z.activeLeads, "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:128:15" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { label: "Booked", value: z.bookings, "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:129:15" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { label: "Conv%", value: `${z.conversion}%`, tone: z.conversion >= 20 ? "good" : z.conversion >= 10 ? "neutral" : "bad", "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:130:15" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-1.5", "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:132:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { label: "₹/mo", value: `₹${(z.revenueINR / 1e3).toFixed(0)}k`, tone: z.revenueINR > 0 ? "good" : "neutral", "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:133:15" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { label: "Load/TCM", value: z.loadPerTcm, tone: z.loadPerTcm > 25 ? "bad" : z.loadPerTcm > 15 ? "neutral" : "good", "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:134:15" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { label: "SLA fail", value: z.slaBreaches, tone: z.slaBreaches >= 3 ? "bad" : z.slaBreaches > 0 ? "neutral" : "good", "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:135:15" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground italic border-l-2 border-accent pl-2", "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:138:13", children: z.recommendation }),
          z.tcmIds.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 pt-1 border-t border-border", "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:143:15", children: z.tcmIds.map((id) => {
            const t = tcms.find((x) => x.id === id);
            if (!t) return null;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[9px]", "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:148:21", children: t.initials }, id);
          }) })
        ]
      },
      z.zoneId
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 text-xs text-muted-foreground space-y-1", "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:160:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-foreground font-semibold text-sm", "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:161:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-4 w-4", "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:162:11" }),
        " How load is calculated"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside space-y-0.5", "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:164:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:165:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:165:15", children: "Load/TCM" }),
          " = active leads ÷ TCM count for that zone."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:166:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-warning", "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:166:15", children: "Overloaded" }),
          " ≥ 25 active leads per TCM."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:167:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-info", "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:167:15", children: "Underloaded" }),
          " < 5 active leads per TCM (capacity available)."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:168:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-destructive", "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:168:15", children: "Leaking" }),
          " = no TCMs assigned, or 3+ leads never contacted in 24h+, or conversion below 15%."
        ] })
      ] })
    ] })
  ] });
}
__name(ZoneBrain, "ZoneBrain");
__name2(ZoneBrain, "ZoneBrain");
function PressurePill({ level }) {
  const map = {
    balanced: { label: "Balanced", icon: TrendingUp, cls: "border-success text-success" },
    overloaded: { label: "Overloaded", icon: TrendingUp, cls: "border-warning text-warning" },
    underloaded: { label: "Spare cap.", icon: TrendingDown, cls: "border-info text-info" },
    leaking: { label: "Leaking", icon: TriangleAlert, cls: "border-destructive text-destructive" }
  };
  const m = map[level];
  const Icon = m.icon;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: `text-[10px] gap-1 ${m.cls}`, "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:185:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-2.5 w-2.5", "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:186:7" }),
    " ",
    m.label
  ] });
}
__name(PressurePill, "PressurePill");
__name2(PressurePill, "PressurePill");
function Stat({
  icon: Icon,
  label,
  value,
  tone
}) {
  const cls = tone === "success" ? "text-success border-success/30 bg-success/5" : tone === "danger" ? "text-destructive border-destructive/30 bg-destructive/5" : "border-border bg-card";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-lg border p-3 ${cls}`, "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:199:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-[10px] uppercase tracking-wider opacity-80", "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:200:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3 w-3", "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:201:9" }),
      " ",
      label
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-display font-bold mt-1", "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:203:7", children: value })
  ] });
}
__name(Stat, "Stat");
__name2(Stat, "Stat");
function Mini({ label, value, tone }) {
  const cls = tone === "good" ? "text-success" : tone === "bad" ? "text-destructive" : tone === "neutral" ? "text-warning" : "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded bg-background/60 px-1.5 py-1.5 text-center", "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:211:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[8px] uppercase tracking-wider text-muted-foreground", "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:212:7", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-sm font-bold font-mono ${cls}`, "data-tsd-source": "/src/components/crm10x/ZoneBrain.tsx:213:7", children: value })
  ] });
}
__name(Mini, "Mini");
__name2(Mini, "Mini");
const SplitComponent = /* @__PURE__ */ __name2(() => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/zone-brain.tsx:13:5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ZoneBrain, { "data-tsd-source": "/src/routes/zone-brain.tsx:14:7" }) }), "SplitComponent");
export {
  SplitComponent as component
};
