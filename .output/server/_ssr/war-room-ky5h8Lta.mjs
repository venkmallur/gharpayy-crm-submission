var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell, u as useQuotations } from "./AppShell-BN067m2r.mjs";
import { u as useApp, B as Badge } from "./router-xBhBcQRf.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { aJ as Shield, y as Calendar, k as FileText, g as TriangleAlert, F as Flame, z as Target, c as Users, Z as Zap, f as Activity } from "../_libs/lucide-react.mjs";

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
function isToday(iso) {
  return new Date(iso).toDateString() === (/* @__PURE__ */ new Date()).toDateString();
}
__name(isToday, "isToday");
__name2(isToday, "isToday");
function isThisMonth(iso) {
  const d = new Date(iso);
  const n = /* @__PURE__ */ new Date();
  return d.getFullYear() === n.getFullYear() && d.getMonth() === n.getMonth();
}
__name(isThisMonth, "isThisMonth");
__name2(isThisMonth, "isThisMonth");
function WarRoom() {
  const {
    leads,
    tours,
    tcms,
    bookings,
    properties
  } = useApp();
  const quotes = useQuotations((s) => s.quotations);
  const stats = reactExports.useMemo(() => {
    const toursToday = tours.filter((t) => isToday(t.scheduledAt));
    const overdueTours = tours.filter((t) => t.status === "scheduled" && +new Date(t.scheduledAt) + 30 * 6e4 < Date.now());
    const staleQuotes = quotes.filter((q) => Date.now() - +new Date(q.sentAt) > 24 * 36e5);
    const draftsOpen = tours.filter((t) => t.status === "completed" && !t.postTour?.filledAt);
    const hotLeads = leads.filter((l) => l.intent === "hot" && l.stage !== "booked" && l.stage !== "dropped");
    const bookingsMonth = bookings.filter((b) => isThisMonth(b.ts));
    const forecast = Math.round(hotLeads.length * 0.35 + toursToday.length * 0.18);
    return {
      toursToday,
      overdueTours,
      staleQuotes,
      draftsOpen,
      hotLeads,
      bookingsMonth,
      forecast
    };
  }, [leads, tours, quotes, bookings]);
  const tcmLoad = reactExports.useMemo(() => {
    return tcms.map((t) => {
      const myLeads = leads.filter((l) => l.assignedTcmId === t.id && l.stage !== "booked" && l.stage !== "dropped");
      const myToursToday = stats.toursToday.filter((tr) => tr.tcmId === t.id);
      const myOverdue = stats.overdueTours.filter((tr) => tr.tcmId === t.id).length + stats.staleQuotes.filter((q) => q.tcmId === t.id).length;
      return {
        tcm: t,
        openLeads: myLeads.length,
        toursToday: myToursToday.length,
        overdue: myOverdue
      };
    }).sort((a, b) => b.overdue - a.overdue || b.openLeads - a.openLeads);
  }, [tcms, leads, stats]);
  const escalations = reactExports.useMemo(() => {
    const list = [];
    stats.overdueTours.forEach((t) => {
      const l = leads.find((x) => x.id === t.leadId);
      const tcm = tcms.find((x) => x.id === t.tcmId)?.name;
      if (l) list.push({
        id: `tour-${t.id}`,
        name: l.name,
        reason: "Tour overdue · no outcome",
        tcm,
        severity: "high"
      });
    });
    stats.staleQuotes.forEach((q) => {
      const l = leads.find((x) => x.id === q.leadId);
      const tcm = tcms.find((x) => x.id === q.tcmId)?.name;
      if (l) list.push({
        id: `quote-${q.id}`,
        name: l.name,
        reason: "Quote stale > 24h",
        tcm,
        severity: "med"
      });
    });
    stats.draftsOpen.forEach((t) => {
      const l = leads.find((x) => x.id === t.leadId);
      const tcm = tcms.find((x) => x.id === t.tcmId)?.name;
      if (l) list.push({
        id: `draft-${t.id}`,
        name: l.name,
        reason: "Post-tour draft unfilled",
        tcm,
        severity: "high"
      });
    });
    return list.slice(0, 20);
  }, [stats, leads, tcms]);
  const zoneMap = reactExports.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    leads.forEach((l) => {
      const z = l.preferredArea || "—";
      const e = map.get(z) ?? {
        open: 0,
        tours: 0,
        quotes: 0,
        booked: 0
      };
      if (l.stage !== "booked" && l.stage !== "dropped") e.open++;
      if (l.stage === "booked") e.booked++;
      map.set(z, e);
    });
    tours.forEach((t) => {
      const p = properties.find((x) => x.id === t.propertyId);
      const z = p?.area ?? "—";
      const e = map.get(z) ?? {
        open: 0,
        tours: 0,
        quotes: 0,
        booked: 0
      };
      e.tours++;
      map.set(z, e);
    });
    quotes.forEach((q) => {
      const p = properties.find((x) => x.id === q.propertyId);
      const z = p?.area ?? "—";
      const e = map.get(z) ?? {
        open: 0,
        tours: 0,
        quotes: 0,
        booked: 0
      };
      e.quotes++;
      map.set(z, e);
    });
    return Array.from(map.entries()).map(([zone, v]) => ({
      zone,
      ...v
    })).sort((a, b) => b.open - a.open).slice(0, 10);
  }, [leads, tours, quotes, properties]);
  const maxOpen = Math.max(1, ...zoneMap.map((z) => z.open));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-tsd-source": "/src/routes/war-room.tsx:105:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between border-b border-border pb-3 flex-wrap gap-2", "data-tsd-source": "/src/routes/war-room.tsx:106:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/routes/war-room.tsx:107:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] uppercase tracking-[0.2em] text-danger font-semibold flex items-center gap-1.5", "data-tsd-source": "/src/routes/war-room.tsx:108:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-3 w-3", "data-tsd-source": "/src/routes/war-room.tsx:109:13" }),
          " Manager · war room"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-display font-semibold", "data-tsd-source": "/src/routes/war-room.tsx:111:11", children: "Morning Command" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/routes/war-room.tsx:112:11", children: "Queue health · SLA breaches · TCM load · today's forecast · escalation ladder." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", "data-tsd-source": "/src/routes/war-room.tsx:114:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { icon: Calendar, label: "Tours today", value: stats.toursToday.length, tone: "primary", "data-tsd-source": "/src/routes/war-room.tsx:115:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { icon: FileText, label: "Stale quotes", value: stats.staleQuotes.length, tone: stats.staleQuotes.length ? "danger" : "muted", "data-tsd-source": "/src/routes/war-room.tsx:116:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { icon: TriangleAlert, label: "Overdue", value: stats.overdueTours.length + stats.draftsOpen.length, tone: stats.overdueTours.length + stats.draftsOpen.length ? "danger" : "muted", "data-tsd-source": "/src/routes/war-room.tsx:117:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { icon: Flame, label: "Hot leads", value: stats.hotLeads.length, tone: "warning", "data-tsd-source": "/src/routes/war-room.tsx:118:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { icon: Target, label: "Forecast", value: stats.forecast, tone: "success", "data-tsd-source": "/src/routes/war-room.tsx:119:11" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-3", "data-tsd-source": "/src/routes/war-room.tsx:123:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-card p-3 lg:col-span-1", "data-tsd-source": "/src/routes/war-room.tsx:125:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", "data-tsd-source": "/src/routes/war-room.tsx:126:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-3.5 w-3.5 text-primary", "data-tsd-source": "/src/routes/war-room.tsx:127:13" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider font-semibold", "data-tsd-source": "/src/routes/war-room.tsx:128:13", children: "TCM Load" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", "data-tsd-source": "/src/routes/war-room.tsx:130:11", children: [
          tcmLoad.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground italic", "data-tsd-source": "/src/routes/war-room.tsx:131:38", children: "No TCMs." }),
          tcmLoad.map(({
            tcm,
            openLeads,
            toursToday,
            overdue
          }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border p-2 hover:bg-muted/30 transition-colors", "data-tsd-source": "/src/routes/war-room.tsx:133:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", "data-tsd-source": "/src/routes/war-room.tsx:134:17", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", "data-tsd-source": "/src/routes/war-room.tsx:135:19", children: tcm.name }),
              overdue > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-[9px] bg-danger/10 text-danger border-danger/40", "data-tsd-source": "/src/routes/war-room.tsx:137:21", children: [
                overdue,
                " breach"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-[11px] text-muted-foreground mt-1", "data-tsd-source": "/src/routes/war-room.tsx:142:17", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { "data-tsd-source": "/src/routes/war-room.tsx:143:19", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", "data-tsd-source": "/src/routes/war-room.tsx:143:25", children: openLeads }),
                " open"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { "data-tsd-source": "/src/routes/war-room.tsx:144:19", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", "data-tsd-source": "/src/routes/war-room.tsx:144:25", children: toursToday }),
                " tours"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-auto font-mono", "data-tsd-source": "/src/routes/war-room.tsx:145:19", children: [
                Math.round((tcm.conversionRate ?? 0) * 100),
                "% conv"
              ] })
            ] })
          ] }, tcm.id))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-danger/30 bg-gradient-to-br from-danger/5 to-card p-3 lg:col-span-1", "data-tsd-source": "/src/routes/war-room.tsx:153:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", "data-tsd-source": "/src/routes/war-room.tsx:154:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-3.5 w-3.5 text-danger", "data-tsd-source": "/src/routes/war-room.tsx:155:13" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider font-semibold text-danger", "data-tsd-source": "/src/routes/war-room.tsx:156:13", children: "Escalation Ladder" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "ml-auto text-[9px] bg-danger/10 text-danger border-danger/40", "data-tsd-source": "/src/routes/war-room.tsx:157:13", children: escalations.length })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 max-h-[440px] overflow-y-auto", "data-tsd-source": "/src/routes/war-room.tsx:159:11", children: [
          escalations.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-success italic", "data-tsd-source": "/src/routes/war-room.tsx:160:42", children: "All clear. Nothing escalating." }),
          escalations.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-md border p-2 text-xs ${e.severity === "high" ? "border-danger/40 bg-danger/5" : "border-warning/40 bg-warning/5"}`, "data-tsd-source": "/src/routes/war-room.tsx:162:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", "data-tsd-source": "/src/routes/war-room.tsx:163:17", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: `h-3 w-3 ${e.severity === "high" ? "text-danger" : "text-warning"}`, "data-tsd-source": "/src/routes/war-room.tsx:164:19" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium truncate flex-1", "data-tsd-source": "/src/routes/war-room.tsx:165:19", children: e.name }),
              e.tcm && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[9px]", "data-tsd-source": "/src/routes/war-room.tsx:166:29", children: e.tcm })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground mt-0.5 pl-5", "data-tsd-source": "/src/routes/war-room.tsx:168:17", children: e.reason })
          ] }, e.id))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-card p-3 lg:col-span-1", "data-tsd-source": "/src/routes/war-room.tsx:175:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", "data-tsd-source": "/src/routes/war-room.tsx:176:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-3.5 w-3.5 text-accent", "data-tsd-source": "/src/routes/war-room.tsx:177:13" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider font-semibold", "data-tsd-source": "/src/routes/war-room.tsx:178:13", children: "Zone Heatmap" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", "data-tsd-source": "/src/routes/war-room.tsx:180:11", children: [
          zoneMap.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground italic", "data-tsd-source": "/src/routes/war-room.tsx:181:38", children: "No zone activity." }),
          zoneMap.map((z) => {
            const pct = Math.round(z.open / maxOpen * 100);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5", "data-tsd-source": "/src/routes/war-room.tsx:185:17", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[11px]", "data-tsd-source": "/src/routes/war-room.tsx:186:19", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium truncate", "data-tsd-source": "/src/routes/war-room.tsx:187:21", children: z.zone }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-muted-foreground", "data-tsd-source": "/src/routes/war-room.tsx:188:21", children: [
                  z.open,
                  "o · ",
                  z.tours,
                  "t · ",
                  z.quotes,
                  "q · ",
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-success", "data-tsd-source": "/src/routes/war-room.tsx:189:62", children: [
                    z.booked,
                    "b"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 rounded-full bg-muted overflow-hidden", "data-tsd-source": "/src/routes/war-room.tsx:192:19", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-gradient-to-r from-accent to-primary", style: {
                width: `${pct}%`
              }, "data-tsd-source": "/src/routes/war-room.tsx:193:21" }) })
            ] }, z.zone);
          })
        ] })
      ] })
    ] })
  ] });
}
__name(WarRoom, "WarRoom");
__name2(WarRoom, "WarRoom");
function KPI({
  icon: Icon,
  label,
  value,
  tone
}) {
  const cls = {
    primary: "bg-primary/10 text-primary border-primary/30",
    danger: "bg-danger/10 text-danger border-danger/30",
    warning: "bg-warning/10 text-warning border-warning/30",
    success: "bg-success/10 text-success border-success/30",
    muted: "bg-muted text-muted-foreground border-border"
  }[tone];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-md border px-2.5 py-1.5 flex items-center gap-2 ${cls}`, "data-tsd-source": "/src/routes/war-room.tsx:214:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/routes/war-room.tsx:215:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/routes/war-room.tsx:216:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase tracking-wider font-semibold opacity-80", "data-tsd-source": "/src/routes/war-room.tsx:217:9", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-display font-semibold leading-none", "data-tsd-source": "/src/routes/war-room.tsx:218:9", children: value })
    ] })
  ] });
}
__name(KPI, "KPI");
__name2(KPI, "KPI");
const SplitComponent = /* @__PURE__ */ __name2(() => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/war-room.tsx:16:20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(WarRoom, { "data-tsd-source": "/src/routes/war-room.tsx:16:30" }) }), "SplitComponent");
export {
  SplitComponent as component
};
