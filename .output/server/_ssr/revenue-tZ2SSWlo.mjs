var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-BN067m2r.mjs";
import { u as useApp, c as useMountedNow } from "./router-xBhBcQRf.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { s as startOfDay, c as subDays, f as format } from "../_libs/date-fns.mjs";
import { I as IndianRupee, T as TrendingUp, c as Users, B as Building2 } from "../_libs/lucide-react.mjs";

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
function RevenuePage() {
  const {
    bookings,
    tcms,
    properties,
    leads
  } = useApp();
  const [now] = useMountedNow();
  const totalMRR = bookings.reduce((s, b) => s + b.amount, 0);
  const byTcm = reactExports.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    for (const b of bookings) {
      const e = map.get(b.tcmId) ?? {
        tcmId: b.tcmId,
        revenue: 0,
        bookings: 0
      };
      e.revenue += b.amount;
      e.bookings += 1;
      map.set(b.tcmId, e);
    }
    return Array.from(map.values()).sort((a, b) => b.revenue - a.revenue);
  }, [bookings]);
  const byProperty = reactExports.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    for (const b of bookings) {
      const e = map.get(b.propertyId) ?? {
        propertyId: b.propertyId,
        revenue: 0,
        bookings: 0
      };
      e.revenue += b.amount;
      e.bookings += 1;
      map.set(b.propertyId, e);
    }
    return Array.from(map.values()).sort((a, b) => b.revenue - a.revenue);
  }, [bookings]);
  const bySource = reactExports.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    for (const b of bookings) {
      const lead = leads.find((l) => l.id === b.leadId);
      const src = lead?.source ?? "Unknown";
      const e = map.get(src) ?? {
        source: src,
        revenue: 0,
        bookings: 0
      };
      e.revenue += b.amount;
      e.bookings += 1;
      map.set(src, e);
    }
    return Array.from(map.values()).sort((a, b) => b.revenue - a.revenue);
  }, [bookings, leads]);
  const trend = reactExports.useMemo(() => {
    if (!now) return [];
    const days = [];
    for (let i = 29; i >= 0; i--) {
      const d = startOfDay(subDays(now, i));
      const next = startOfDay(subDays(now, i - 1));
      const amt = bookings.filter((b) => +new Date(b.ts) >= +d && +new Date(b.ts) < +next).reduce((s, b) => s + b.amount, 0);
      days.push({
        day: format(d, "MMM d"),
        amt
      });
    }
    return days;
  }, [bookings, now]);
  const maxTrend = Math.max(1, ...trend.map((t) => t.amt));
  const last7 = trend.slice(-7).reduce((s, t) => s + t.amt, 0);
  const prev7 = trend.slice(-14, -7).reduce((s, t) => s + t.amt, 0);
  const wow = prev7 > 0 ? Math.round((last7 - prev7) / prev7 * 100) : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/revenue.tsx:81:5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", "data-tsd-source": "/src/routes/revenue.tsx:82:7", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { "data-tsd-source": "/src/routes/revenue.tsx:83:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-2xl font-semibold tracking-tight inline-flex items-center gap-2", "data-tsd-source": "/src/routes/revenue.tsx:84:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(IndianRupee, { className: "h-6 w-6 text-success", "data-tsd-source": "/src/routes/revenue.tsx:85:13" }),
        " Revenue"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", "data-tsd-source": "/src/routes/revenue.tsx:87:11", children: "Live MRR closed, broken down by closer, property, and source." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3", "data-tsd-source": "/src/routes/revenue.tsx:93:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tile, { label: "MRR closed", value: `₹${(totalMRR / 1e3).toFixed(0)}k`, sub: `${bookings.length} booking${bookings.length === 1 ? "" : "s"}`, accent: "success", "data-tsd-source": "/src/routes/revenue.tsx:94:11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tile, { label: "Last 7 days", value: `₹${(last7 / 1e3).toFixed(0)}k`, sub: prev7 > 0 ? `${wow >= 0 ? "+" : ""}${wow}% WoW` : "—", accent: wow >= 0 ? "success" : "destructive", "data-tsd-source": "/src/routes/revenue.tsx:95:11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tile, { label: "Top closer", value: byTcm[0] ? tcms.find((t) => t.id === byTcm[0].tcmId)?.name?.split(" ")[0] ?? "—" : "—", sub: byTcm[0] ? `₹${(byTcm[0].revenue / 1e3).toFixed(0)}k` : "", accent: "accent", "data-tsd-source": "/src/routes/revenue.tsx:96:11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tile, { label: "Top property", value: byProperty[0] ? properties.find((p) => p.id === byProperty[0].propertyId)?.name ?? "—" : "—", sub: byProperty[0] ? `${byProperty[0].bookings} booking${byProperty[0].bookings === 1 ? "" : "s"}` : "", "data-tsd-source": "/src/routes/revenue.tsx:97:11" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border border-border bg-card overflow-hidden", "data-tsd-source": "/src/routes/revenue.tsx:101:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-center justify-between px-4 py-3 border-b border-border", "data-tsd-source": "/src/routes/revenue.tsx:102:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", "data-tsd-source": "/src/routes/revenue.tsx:103:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-4 w-4 text-success", "data-tsd-source": "/src/routes/revenue.tsx:104:15" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-sm font-semibold", "data-tsd-source": "/src/routes/revenue.tsx:105:15", children: "30-day MRR trend" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground font-mono", "data-tsd-source": "/src/routes/revenue.tsx:107:13", children: [
          "peak ₹",
          (maxTrend / 1e3).toFixed(0),
          "k"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4", "data-tsd-source": "/src/routes/revenue.tsx:109:11", children: trend.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground text-center py-8", "data-tsd-source": "/src/routes/revenue.tsx:111:15", children: "Loading…" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end gap-1 h-32", "data-tsd-source": "/src/routes/revenue.tsx:113:15", children: trend.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col items-center gap-1 group", "data-tsd-source": "/src/routes/revenue.tsx:115:19", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full relative", style: {
          height: `${t.amt / maxTrend * 100}%`,
          minHeight: t.amt > 0 ? "4px" : "0"
        }, "data-tsd-source": "/src/routes/revenue.tsx:116:21", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-success/70 group-hover:bg-success rounded-sm transition-colors", "data-tsd-source": "/src/routes/revenue.tsx:117:23" }) }),
        i % 5 === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-mono text-muted-foreground", "data-tsd-source": "/src/routes/revenue.tsx:119:37", children: t.day.split(" ")[1] })
      ] }, i)) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-4", "data-tsd-source": "/src/routes/revenue.tsx:128:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Breakdown, { title: "By TCM", icon: Users, rows: byTcm.map((r) => ({
        label: tcms.find((t) => t.id === r.tcmId)?.name ?? r.tcmId,
        sub: `${r.bookings} booking${r.bookings === 1 ? "" : "s"}`,
        value: r.revenue
      })), total: totalMRR, "data-tsd-source": "/src/routes/revenue.tsx:129:11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Breakdown, { title: "By property", icon: Building2, rows: byProperty.map((r) => ({
        label: properties.find((p) => p.id === r.propertyId)?.name ?? r.propertyId,
        sub: properties.find((p) => p.id === r.propertyId)?.area ?? "",
        value: r.revenue
      })), total: totalMRR, "data-tsd-source": "/src/routes/revenue.tsx:134:11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Breakdown, { title: "By source", icon: TrendingUp, rows: bySource.map((r) => ({
        label: r.source,
        sub: `${r.bookings} booking${r.bookings === 1 ? "" : "s"}`,
        value: r.revenue
      })), total: totalMRR, "data-tsd-source": "/src/routes/revenue.tsx:139:11" })
    ] })
  ] }) });
}
__name(RevenuePage, "RevenuePage");
__name2(RevenuePage, "RevenuePage");
function Tile({
  label,
  value,
  sub,
  accent
}) {
  const cls = accent === "success" ? "text-success" : accent === "destructive" ? "text-destructive" : accent === "accent" ? "text-accent" : "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-4", "data-tsd-source": "/src/routes/revenue.tsx:153:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", "data-tsd-source": "/src/routes/revenue.tsx:154:7", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `font-display text-xl font-semibold mt-1 ${cls}`, "data-tsd-source": "/src/routes/revenue.tsx:155:7", children: value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground mt-0.5", "data-tsd-source": "/src/routes/revenue.tsx:156:7", children: sub || " " })
  ] });
}
__name(Tile, "Tile");
__name2(Tile, "Tile");
function Breakdown({
  title,
  icon: Icon,
  rows,
  total
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border border-border bg-card overflow-hidden", "data-tsd-source": "/src/routes/revenue.tsx:163:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-center gap-2 px-4 py-3 border-b border-border", "data-tsd-source": "/src/routes/revenue.tsx:164:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 text-muted-foreground", "data-tsd-source": "/src/routes/revenue.tsx:165:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-sm font-semibold", "data-tsd-source": "/src/routes/revenue.tsx:166:9", children: title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "divide-y divide-border", "data-tsd-source": "/src/routes/revenue.tsx:168:7", children: [
      rows.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 text-xs text-center text-muted-foreground", "data-tsd-source": "/src/routes/revenue.tsx:169:31", children: "No bookings yet." }),
      rows.map((r) => {
        const pct = total > 0 ? Math.round(r.value / total * 100) : 0;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 space-y-1.5", "data-tsd-source": "/src/routes/revenue.tsx:173:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", "data-tsd-source": "/src/routes/revenue.tsx:174:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", "data-tsd-source": "/src/routes/revenue.tsx:175:17", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium truncate", "data-tsd-source": "/src/routes/revenue.tsx:176:19", children: r.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground truncate", "data-tsd-source": "/src/routes/revenue.tsx:177:19", children: r.sub })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", "data-tsd-source": "/src/routes/revenue.tsx:179:17", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-mono font-semibold", "data-tsd-source": "/src/routes/revenue.tsx:180:19", children: [
                "₹",
                (r.value / 1e3).toFixed(0),
                "k"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-mono text-muted-foreground", "data-tsd-source": "/src/routes/revenue.tsx:181:19", children: [
                pct,
                "%"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 rounded-full bg-muted overflow-hidden", "data-tsd-source": "/src/routes/revenue.tsx:184:15", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-success", style: {
            width: `${pct}%`
          }, "data-tsd-source": "/src/routes/revenue.tsx:185:17" }) })
        ] }, r.label);
      })
    ] })
  ] });
}
__name(Breakdown, "Breakdown");
__name2(Breakdown, "Breakdown");
export {
  RevenuePage as component
};
