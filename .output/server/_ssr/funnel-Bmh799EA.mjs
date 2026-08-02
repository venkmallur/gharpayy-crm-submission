var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell, u as useQuotations } from "./AppShell-BN067m2r.mjs";
import { u as useApp, B as Badge } from "./router-xBhBcQRf.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { o as ChartColumn, K as MapPin, v as TrendingDown } from "../_libs/lucide-react.mjs";

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
const STAGES = [{
  key: "inbox",
  label: "Inbox"
}, {
  key: "tour",
  label: "Tour"
}, {
  key: "quote",
  label: "Quote"
}, {
  key: "booked",
  label: "Booked"
}];
function FunnelPage() {
  const {
    leads,
    tours,
    tcms,
    properties
  } = useApp();
  const quotes = useQuotations((s) => s.quotations);
  const perTcm = reactExports.useMemo(() => {
    return tcms.map((t) => {
      const myLeads = leads.filter((l) => l.assignedTcmId === t.id);
      const myTours = tours.filter((tr) => tr.tcmId === t.id);
      const myQuotes = quotes.filter((q) => q.tcmId === t.id);
      const myBooked = myLeads.filter((l) => l.stage === "booked").length;
      const totals = {
        inbox: myLeads.length,
        tour: myTours.length,
        quote: myQuotes.length,
        booked: myBooked
      };
      const reasons = /* @__PURE__ */ new Map();
      myTours.forEach((tr) => {
        const r = tr.postTour?.objection;
        if (r) reasons.set(r, (reasons.get(r) ?? 0) + 1);
      });
      const topReasons = Array.from(reasons.entries()).sort((a, b) => b[1] - a[1]).slice(0, 3);
      return {
        tcm: t,
        totals,
        topReasons
      };
    });
  }, [tcms, leads, tours, quotes]);
  const perZone = reactExports.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    leads.forEach((l) => {
      const z = l.preferredArea || "—";
      const e = map.get(z) ?? {
        inbox: 0,
        tour: 0,
        quote: 0,
        booked: 0
      };
      e.inbox++;
      if (l.stage === "booked") e.booked++;
      map.set(z, e);
    });
    tours.forEach((tr) => {
      const p = properties.find((x) => x.id === tr.propertyId);
      const z = p?.area ?? "—";
      const e = map.get(z) ?? {
        inbox: 0,
        tour: 0,
        quote: 0,
        booked: 0
      };
      e.tour++;
      map.set(z, e);
    });
    quotes.forEach((q) => {
      const p = properties.find((x) => x.id === q.propertyId);
      const z = p?.area ?? "—";
      const e = map.get(z) ?? {
        inbox: 0,
        tour: 0,
        quote: 0,
        booked: 0
      };
      e.quote++;
      map.set(z, e);
    });
    return Array.from(map.entries()).map(([zone, totals]) => ({
      zone,
      totals
    })).sort((a, b) => b.totals.inbox - a.totals.inbox);
  }, [leads, tours, quotes, properties]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-tsd-source": "/src/routes/funnel.tsx:84:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border pb-3", "data-tsd-source": "/src/routes/funnel.tsx:85:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] uppercase tracking-[0.2em] text-primary font-semibold flex items-center gap-1.5", "data-tsd-source": "/src/routes/funnel.tsx:86:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "h-3 w-3", "data-tsd-source": "/src/routes/funnel.tsx:87:11" }),
        " Analytics"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-display font-semibold", "data-tsd-source": "/src/routes/funnel.tsx:89:9", children: "Conversion Funnel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/routes/funnel.tsx:90:9", children: "Inbox → Tour → Quote → Booked · with drop-off reasons by TCM and zone." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-2", "data-tsd-source": "/src/routes/funnel.tsx:94:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider font-semibold", "data-tsd-source": "/src/routes/funnel.tsx:95:9", children: "Per TCM" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", "data-tsd-source": "/src/routes/funnel.tsx:96:9", children: perTcm.map(({
        tcm,
        totals,
        topReasons
      }) => /* @__PURE__ */ jsxRuntimeExports.jsx(FunnelCard, { title: tcm.name, subtitle: `${tcm.zone} · ${Math.round((tcm.conversionRate ?? 0) * 100)}% conv`, totals, reasons: topReasons, "data-tsd-source": "/src/routes/funnel.tsx:98:13" }, tcm.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-2", "data-tsd-source": "/src/routes/funnel.tsx:104:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] uppercase tracking-wider font-semibold flex items-center gap-1.5", "data-tsd-source": "/src/routes/funnel.tsx:105:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3", "data-tsd-source": "/src/routes/funnel.tsx:106:11" }),
        " Per Zone"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", "data-tsd-source": "/src/routes/funnel.tsx:108:9", children: perZone.map(({
        zone,
        totals
      }) => /* @__PURE__ */ jsxRuntimeExports.jsx(FunnelCard, { title: zone, subtitle: "zone", totals, reasons: [], "data-tsd-source": "/src/routes/funnel.tsx:110:13" }, zone)) })
    ] })
  ] });
}
__name(FunnelPage, "FunnelPage");
__name2(FunnelPage, "FunnelPage");
function FunnelCard({
  title,
  subtitle,
  totals,
  reasons
}) {
  const max = Math.max(1, totals.inbox);
  const conv = totals.inbox ? Math.round(totals.booked / totals.inbox * 100) : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-card p-3 space-y-2", "data-tsd-source": "/src/routes/funnel.tsx:124:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", "data-tsd-source": "/src/routes/funnel.tsx:125:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/routes/funnel.tsx:126:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", "data-tsd-source": "/src/routes/funnel.tsx:127:11", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", "data-tsd-source": "/src/routes/funnel.tsx:128:11", children: subtitle })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: `text-[10px] ${conv >= 20 ? "bg-success/10 text-success border-success/40" : conv >= 10 ? "bg-warning/10 text-warning border-warning/40" : "bg-danger/10 text-danger border-danger/40"}`, "data-tsd-source": "/src/routes/funnel.tsx:130:9", children: [
        conv,
        "% end-to-end"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", "data-tsd-source": "/src/routes/funnel.tsx:134:7", children: STAGES.map((s, i) => {
      const v = totals[s.key];
      const pct = Math.round(v / max * 100);
      const prev = i > 0 ? totals[STAGES[i - 1].key] : null;
      const drop = prev && prev > 0 ? Math.round((prev - v) / prev * 100) : 0;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5", "data-tsd-source": "/src/routes/funnel.tsx:141:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[11px]", "data-tsd-source": "/src/routes/funnel.tsx:142:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", "data-tsd-source": "/src/routes/funnel.tsx:143:17", children: s.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-muted-foreground", "data-tsd-source": "/src/routes/funnel.tsx:144:17", children: [
            v,
            prev !== null && v < prev && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-1.5 text-danger inline-flex items-center gap-0.5", "data-tsd-source": "/src/routes/funnel.tsx:147:21", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "h-2.5 w-2.5", "data-tsd-source": "/src/routes/funnel.tsx:148:23" }),
              "−",
              drop,
              "%"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 rounded-full bg-muted overflow-hidden", "data-tsd-source": "/src/routes/funnel.tsx:153:15", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-gradient-to-r from-primary to-accent transition-all", style: {
          width: `${pct}%`
        }, "data-tsd-source": "/src/routes/funnel.tsx:154:17" }) })
      ] }, s.key);
    }) }),
    reasons.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-1.5 border-t border-border", "data-tsd-source": "/src/routes/funnel.tsx:161:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase tracking-wider text-muted-foreground mb-1", "data-tsd-source": "/src/routes/funnel.tsx:162:11", children: "Top drop-off reasons" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", "data-tsd-source": "/src/routes/funnel.tsx:163:11", children: reasons.map(([reason, count]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-[10px]", "data-tsd-source": "/src/routes/funnel.tsx:165:15", children: [
        reason,
        " · ",
        count
      ] }, reason)) })
    ] })
  ] });
}
__name(FunnelCard, "FunnelCard");
__name2(FunnelCard, "FunnelCard");
const SplitComponent = /* @__PURE__ */ __name2(() => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/funnel.tsx:16:20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FunnelPage, { "data-tsd-source": "/src/routes/funnel.tsx:16:30" }) }), "SplitComponent");
export {
  SplitComponent as component
};
