var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-BN067m2r.mjs";
import { aA as heatmapData, aB as useAppState, aC as filterToursByDateRange, aD as getZonePerformance, q as cn } from "./router-xBhBcQRf.mjs";
import { M as MetricCard } from "./MetricCard-Pwx4gUe3.mjs";
import { D as DateRangeToggle } from "./DateRangeToggle-JbwWwCW-.mjs";
import { S as StatusBadge, O as OutcomeBadge } from "./StatusBadge-ByCMrWCS.mjs";
import { G as GlueFeed } from "./GlueFeed-Cs5TrIyd.mjs";
import { C as CoachInline } from "./CoachInline-B8sqnprZ.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { R as ResponsiveContainer, B as BarChart, X as XAxis, Y as YAxis, T as Tooltip, a as Bar, C as Cell } from "../_libs/recharts.mjs";
import { g as TriangleAlert, s as Clock, k as FileText, bA as CalendarCheck, c as Users, T as TrendingUp, aH as Building } from "../_libs/lucide-react.mjs";

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
import "./use-event-bus-DnkJRu6l.mjs";
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
function HourlyHeatmap() {
  const maxTours = Math.max(...heatmapData.map((d) => d.tours));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-3 md:p-5", "data-tsd-source": "/src/myt/components/HourlyHeatmap.tsx:8:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading font-semibold text-xs md:text-sm mb-3 text-foreground", "data-tsd-source": "/src/myt/components/HourlyHeatmap.tsx:9:7", children: "Hourly Heatmap" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-48 md:h-64", "data-tsd-source": "/src/myt/components/HourlyHeatmap.tsx:10:7", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", "data-tsd-source": "/src/myt/components/HourlyHeatmap.tsx:11:9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: heatmapData, barCategoryGap: "15%", "data-tsd-source": "/src/myt/components/HourlyHeatmap.tsx:12:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "hour", tick: { fill: "hsl(215 12% 50%)", fontSize: 9 }, axisLine: false, tickLine: false, interval: 1, "data-tsd-source": "/src/myt/components/HourlyHeatmap.tsx:13:13" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { tick: { fill: "hsl(215 12% 50%)", fontSize: 9 }, axisLine: false, tickLine: false, width: 20, "data-tsd-source": "/src/myt/components/HourlyHeatmap.tsx:14:13" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Tooltip,
        {
          contentStyle: {
            background: "hsl(220 18% 12%)",
            border: "1px solid hsl(220 14% 16%)",
            borderRadius: "8px",
            fontSize: "11px",
            color: "hsl(210 20% 92%)"
          },
          "data-tsd-source": "/src/myt/components/HourlyHeatmap.tsx:15:13"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "tours", radius: [3, 3, 0, 0], name: "Tours", "data-tsd-source": "/src/myt/components/HourlyHeatmap.tsx:24:13", children: heatmapData.map((entry, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: `hsl(217 91% ${40 + entry.tours / maxTours * 30}%)`, opacity: 0.4 + entry.tours / maxTours * 0.6, "data-tsd-source": "/src/myt/components/HourlyHeatmap.tsx:26:17" }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "showUps", radius: [3, 3, 0, 0], fill: "hsl(152 69% 45%)", opacity: 0.7, name: "Show-ups", "data-tsd-source": "/src/myt/components/HourlyHeatmap.tsx:29:13" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "drafts", radius: [3, 3, 0, 0], fill: "hsl(38 92% 50%)", opacity: 0.7, name: "Drafts", "data-tsd-source": "/src/myt/components/HourlyHeatmap.tsx:30:13" })
    ] }) }) })
  ] });
}
__name(HourlyHeatmap, "HourlyHeatmap");
__name2(HourlyHeatmap, "HourlyHeatmap");
function NotificationsPanel() {
  const { tours } = useAppState();
  const now = /* @__PURE__ */ new Date();
  const currentHour = now.getHours();
  const unconfirmed = tours.filter((t) => {
    const h = parseInt(t.tourTime.split(":")[0]);
    return h >= currentHour && h <= currentHour + 2 && t.status === "scheduled";
  });
  const threeDaysAgo = /* @__PURE__ */ new Date();
  threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
  const staleDrafts = tours.filter((t) => t.outcome === "draft" && new Date(t.tourDate) < threeDaysAgo);
  const noOutcome = tours.filter((t) => t.status === "completed" && !t.outcome);
  const totalAlerts = unconfirmed.length + staleDrafts.length + noOutcome.length;
  if (totalAlerts === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-3 md:p-4 border-warning/30 space-y-2", "data-tsd-source": "/src/myt/components/NotificationsPanel.tsx:27:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", "data-tsd-source": "/src/myt/components/NotificationsPanel.tsx:28:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4 text-warning", "data-tsd-source": "/src/myt/components/NotificationsPanel.tsx:29:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-heading font-semibold text-xs text-warning", "data-tsd-source": "/src/myt/components/NotificationsPanel.tsx:30:9", children: [
        totalAlerts,
        " Alerts"
      ] })
    ] }),
    unconfirmed.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 text-xs", "data-tsd-source": "/src/myt/components/NotificationsPanel.tsx:34:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5 text-primary mt-0.5 shrink-0", "data-tsd-source": "/src/myt/components/NotificationsPanel.tsx:35:11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", "data-tsd-source": "/src/myt/components/NotificationsPanel.tsx:36:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-medium", "data-tsd-source": "/src/myt/components/NotificationsPanel.tsx:37:13", children: unconfirmed.length }),
        " tours in next 2hrs not confirmed"
      ] })
    ] }),
    staleDrafts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 text-xs", "data-tsd-source": "/src/myt/components/NotificationsPanel.tsx:43:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-3.5 w-3.5 text-role-hr mt-0.5 shrink-0", "data-tsd-source": "/src/myt/components/NotificationsPanel.tsx:44:11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", "data-tsd-source": "/src/myt/components/NotificationsPanel.tsx:45:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-role-hr font-medium", "data-tsd-source": "/src/myt/components/NotificationsPanel.tsx:46:13", children: staleDrafts.length }),
        " drafts >3 days without agreement"
      ] })
    ] }),
    noOutcome.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 text-xs", "data-tsd-source": "/src/myt/components/NotificationsPanel.tsx:52:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-3.5 w-3.5 text-danger mt-0.5 shrink-0", "data-tsd-source": "/src/myt/components/NotificationsPanel.tsx:53:11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", "data-tsd-source": "/src/myt/components/NotificationsPanel.tsx:54:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-danger font-medium", "data-tsd-source": "/src/myt/components/NotificationsPanel.tsx:55:13", children: noOutcome.length }),
        " completed tours missing outcome"
      ] })
    ] })
  ] });
}
__name(NotificationsPanel, "NotificationsPanel");
__name2(NotificationsPanel, "NotificationsPanel");
function HRTower() {
  const { tours, globalZoneFilter } = useAppState();
  const [dateRange, setDateRange] = reactExports.useState("today");
  const [, setTick] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const interval = setInterval(() => setTick((t) => t + 1), 3e4);
    return () => clearInterval(interval);
  }, []);
  let filtered = filterToursByDateRange(tours, dateRange);
  if (globalZoneFilter) filtered = filtered.filter((t) => t.zoneId === globalZoneFilter);
  const total = filtered.length;
  const completed = filtered.filter((t) => t.status === "completed").length;
  const showUps = filtered.filter((t) => t.showUp === true).length;
  const showUpRate = total > 0 ? Math.round(showUps / total * 100) : 0;
  const noShows = filtered.filter((t) => t.showUp === false).length;
  const drafts = filtered.filter((t) => t.outcome === "draft").length;
  const todayStr = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const sameDayTours = filtered.filter((t) => t.tourDate === todayStr).length;
  const sameDayRate = total > 0 ? Math.round(sameDayTours / total * 100) : 0;
  const draftRate = completed > 0 ? Math.round(drafts / completed * 100) : 0;
  const zonePerf = getZonePerformance(filtered);
  const propertyMap = /* @__PURE__ */ new Map();
  filtered.forEach((t) => {
    const p = propertyMap.get(t.propertyName) || { tours: 0, showUps: 0, drafts: 0 };
    p.tours++;
    if (t.showUp) p.showUps++;
    if (t.outcome === "draft") p.drafts++;
    propertyMap.set(t.propertyName, p);
  });
  const propertyPerf = Array.from(propertyMap.entries()).map(([name, d]) => ({ name, ...d, conversion: d.tours > 0 ? Math.round(d.drafts / d.tours * 100) : 0 })).sort((a, b) => b.drafts - a.drafts);
  const noUpdates = filtered.filter((t) => t.status === "completed" && !t.outcome);
  const highNoShow = noShows > total * 0.3;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 md:space-y-6 animate-slide-up", "data-tsd-source": "/src/myt/pages/HRTower.tsx:58:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CoachInline, { page: "hr", "data-tsd-source": "/src/myt/pages/HRTower.tsx:59:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2", "data-tsd-source": "/src/myt/pages/HRTower.tsx:60:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/HRTower.tsx:61:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl md:text-2xl font-heading font-bold text-foreground", "data-tsd-source": "/src/myt/pages/HRTower.tsx:62:11", children: "HR Control Tower" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs md:text-sm text-muted-foreground", "data-tsd-source": "/src/myt/pages/HRTower.tsx:63:11", children: "Real-time performance tracking" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DateRangeToggle, { value: dateRange, onChange: setDateRange, "data-tsd-source": "/src/myt/pages/HRTower.tsx:65:9" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(NotificationsPanel, { "data-tsd-source": "/src/myt/pages/HRTower.tsx:69:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3", "data-tsd-source": "/src/myt/pages/HRTower.tsx:71:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MetricCard, { label: "Scheduled", value: total, color: "blue", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCheck, { className: "h-4 w-4" }), "data-tsd-source": "/src/myt/pages/HRTower.tsx:72:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MetricCard, { label: "Completed", value: completed, color: "green", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4" }), "data-tsd-source": "/src/myt/pages/HRTower.tsx:73:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MetricCard, { label: "Show-Up %", value: `${showUpRate}%`, color: showUpRate >= 70 ? "green" : "red", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-4 w-4" }), "data-tsd-source": "/src/myt/pages/HRTower.tsx:74:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MetricCard, { label: "Same-Day %", value: `${sameDayRate}%`, color: "amber", "data-tsd-source": "/src/myt/pages/HRTower.tsx:75:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MetricCard, { label: "Draft %", value: `${draftRate}%`, color: "amber", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-4 w-4" }), "data-tsd-source": "/src/myt/pages/HRTower.tsx:76:9" })
    ] }),
    (noUpdates.length > 0 || highNoShow) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-3 md:p-4 border-danger/30", "data-tsd-source": "/src/myt/pages/HRTower.tsx:80:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", "data-tsd-source": "/src/myt/pages/HRTower.tsx:81:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4 text-danger", "data-tsd-source": "/src/myt/pages/HRTower.tsx:82:13" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading font-semibold text-xs md:text-sm text-danger", "data-tsd-source": "/src/myt/pages/HRTower.tsx:83:13", children: "Red Flags" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-xs md:text-sm text-muted-foreground", "data-tsd-source": "/src/myt/pages/HRTower.tsx:85:11", children: [
        noUpdates.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { "data-tsd-source": "/src/myt/pages/HRTower.tsx:86:38", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-danger font-medium", "data-tsd-source": "/src/myt/pages/HRTower.tsx:86:41", children: noUpdates.length }),
          " tours with no outcome update"
        ] }),
        highNoShow && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { "data-tsd-source": "/src/myt/pages/HRTower.tsx:87:28", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-danger font-medium", "data-tsd-source": "/src/myt/pages/HRTower.tsx:87:31", children: noShows }),
          " no-shows (",
          Math.round(noShows / total * 100),
          "%)"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4", "data-tsd-source": "/src/myt/pages/HRTower.tsx:92:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HourlyHeatmap, { "data-tsd-source": "/src/myt/pages/HRTower.tsx:93:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-3 md:p-5", "data-tsd-source": "/src/myt/pages/HRTower.tsx:94:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading font-semibold text-xs md:text-sm mb-3 text-foreground", "data-tsd-source": "/src/myt/pages/HRTower.tsx:95:11", children: "Zone Performance" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto -mx-3 px-3 md:mx-0 md:px-0", "data-tsd-source": "/src/myt/pages/HRTower.tsx:96:11", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs md:text-sm min-w-[340px]", "data-tsd-source": "/src/myt/pages/HRTower.tsx:97:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { "data-tsd-source": "/src/myt/pages/HRTower.tsx:98:15", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border text-muted-foreground", "data-tsd-source": "/src/myt/pages/HRTower.tsx:99:17", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 font-medium", "data-tsd-source": "/src/myt/pages/HRTower.tsx:100:19", children: "Zone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-2 font-medium", "data-tsd-source": "/src/myt/pages/HRTower.tsx:101:19", children: "Tours" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-2 font-medium", "data-tsd-source": "/src/myt/pages/HRTower.tsx:102:19", children: "Done" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-2 font-medium", "data-tsd-source": "/src/myt/pages/HRTower.tsx:103:19", children: "Show%" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-2 font-medium", "data-tsd-source": "/src/myt/pages/HRTower.tsx:104:19", children: "Drafts" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { "data-tsd-source": "/src/myt/pages/HRTower.tsx:107:15", children: zonePerf.map((z) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/50", "data-tsd-source": "/src/myt/pages/HRTower.tsx:109:19", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 font-medium text-foreground", "data-tsd-source": "/src/myt/pages/HRTower.tsx:110:21", children: z.zoneName.split(" — ")[1] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center text-muted-foreground", "data-tsd-source": "/src/myt/pages/HRTower.tsx:111:21", children: z.toursScheduled }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center text-muted-foreground", "data-tsd-source": "/src/myt/pages/HRTower.tsx:112:21", children: z.toursCompleted }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: cn("text-center font-medium", z.showUpRate >= 70 ? "text-role-tcm" : z.showUpRate >= 50 ? "text-role-hr" : "text-danger"), "data-tsd-source": "/src/myt/pages/HRTower.tsx:113:21", children: [
              z.showUpRate,
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center text-role-hr font-medium", "data-tsd-source": "/src/myt/pages/HRTower.tsx:114:21", children: z.drafts })
          ] }, z.zoneId)) })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-3 md:p-5", "data-tsd-source": "/src/myt/pages/HRTower.tsx:123:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", "data-tsd-source": "/src/myt/pages/HRTower.tsx:124:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Building, { className: "h-4 w-4 text-muted-foreground", "data-tsd-source": "/src/myt/pages/HRTower.tsx:125:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading font-semibold text-xs md:text-sm text-foreground", "data-tsd-source": "/src/myt/pages/HRTower.tsx:126:11", children: "Property Performance" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto -mx-3 px-3 md:mx-0 md:px-0", "data-tsd-source": "/src/myt/pages/HRTower.tsx:128:9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs md:text-sm min-w-[400px]", "data-tsd-source": "/src/myt/pages/HRTower.tsx:129:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { "data-tsd-source": "/src/myt/pages/HRTower.tsx:130:13", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border text-muted-foreground", "data-tsd-source": "/src/myt/pages/HRTower.tsx:131:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 font-medium", "data-tsd-source": "/src/myt/pages/HRTower.tsx:132:17", children: "Property" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-2 font-medium", "data-tsd-source": "/src/myt/pages/HRTower.tsx:133:17", children: "Tours" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-2 font-medium", "data-tsd-source": "/src/myt/pages/HRTower.tsx:134:17", children: "Show-Ups" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-2 font-medium", "data-tsd-source": "/src/myt/pages/HRTower.tsx:135:17", children: "Drafts" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-2 font-medium", "data-tsd-source": "/src/myt/pages/HRTower.tsx:136:17", children: "Conv%" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { "data-tsd-source": "/src/myt/pages/HRTower.tsx:139:13", children: propertyPerf.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/50", "data-tsd-source": "/src/myt/pages/HRTower.tsx:141:17", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 font-medium text-foreground", "data-tsd-source": "/src/myt/pages/HRTower.tsx:142:19", children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center text-muted-foreground", "data-tsd-source": "/src/myt/pages/HRTower.tsx:143:19", children: p.tours }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center text-muted-foreground", "data-tsd-source": "/src/myt/pages/HRTower.tsx:144:19", children: p.showUps }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center text-role-hr font-medium", "data-tsd-source": "/src/myt/pages/HRTower.tsx:145:19", children: p.drafts }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: cn("text-center font-medium", p.conversion >= 30 ? "text-role-tcm" : "text-muted-foreground"), "data-tsd-source": "/src/myt/pages/HRTower.tsx:146:19", children: [
            p.conversion,
            "%"
          ] })
        ] }, p.name)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-3 md:p-5", "data-tsd-source": "/src/myt/pages/HRTower.tsx:154:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading font-semibold text-xs md:text-sm mb-3 text-foreground", "data-tsd-source": "/src/myt/pages/HRTower.tsx:155:9", children: "Live Activity" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden space-y-2", "data-tsd-source": "/src/myt/pages/HRTower.tsx:156:9", children: filtered.slice(0, 10).map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surface-2/50 rounded-lg p-3 space-y-1.5", "data-tsd-source": "/src/myt/pages/HRTower.tsx:158:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", "data-tsd-source": "/src/myt/pages/HRTower.tsx:159:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground text-sm", "data-tsd-source": "/src/myt/pages/HRTower.tsx:160:17", children: t.leadName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/myt/pages/HRTower.tsx:161:17", children: t.tourTime })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/myt/pages/HRTower.tsx:163:15", children: [
          t.propertyName,
          " · ",
          t.assignedToName
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", "data-tsd-source": "/src/myt/pages/HRTower.tsx:164:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: t.status, "data-tsd-source": "/src/myt/pages/HRTower.tsx:165:17" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OutcomeBadge, { outcome: t.outcome, "data-tsd-source": "/src/myt/pages/HRTower.tsx:166:17" })
        ] })
      ] }, t.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block overflow-x-auto", "data-tsd-source": "/src/myt/pages/HRTower.tsx:171:9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", "data-tsd-source": "/src/myt/pages/HRTower.tsx:172:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { "data-tsd-source": "/src/myt/pages/HRTower.tsx:173:13", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border text-muted-foreground", "data-tsd-source": "/src/myt/pages/HRTower.tsx:174:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 font-medium", "data-tsd-source": "/src/myt/pages/HRTower.tsx:175:17", children: "Time" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 font-medium", "data-tsd-source": "/src/myt/pages/HRTower.tsx:176:17", children: "Lead" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 font-medium", "data-tsd-source": "/src/myt/pages/HRTower.tsx:177:17", children: "Property" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 font-medium", "data-tsd-source": "/src/myt/pages/HRTower.tsx:178:17", children: "TCM" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 font-medium", "data-tsd-source": "/src/myt/pages/HRTower.tsx:179:17", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 font-medium", "data-tsd-source": "/src/myt/pages/HRTower.tsx:180:17", children: "Outcome" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { "data-tsd-source": "/src/myt/pages/HRTower.tsx:183:13", children: filtered.slice(0, 15).map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/50 hover:bg-accent/30 transition-colors", "data-tsd-source": "/src/myt/pages/HRTower.tsx:185:17", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 text-muted-foreground", "data-tsd-source": "/src/myt/pages/HRTower.tsx:186:19", children: t.tourTime }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 font-medium text-foreground", "data-tsd-source": "/src/myt/pages/HRTower.tsx:187:19", children: t.leadName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 text-muted-foreground", "data-tsd-source": "/src/myt/pages/HRTower.tsx:188:19", children: t.propertyName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 text-muted-foreground", "data-tsd-source": "/src/myt/pages/HRTower.tsx:189:19", children: t.assignedToName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2", "data-tsd-source": "/src/myt/pages/HRTower.tsx:190:19", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: t.status, "data-tsd-source": "/src/myt/pages/HRTower.tsx:190:40" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2", "data-tsd-source": "/src/myt/pages/HRTower.tsx:191:19", children: /* @__PURE__ */ jsxRuntimeExports.jsx(OutcomeBadge, { outcome: t.outcome, "data-tsd-source": "/src/myt/pages/HRTower.tsx:191:40" }) })
        ] }, t.id)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GlueFeed, { limit: 30, title: "Closed-loop activity · HR", "data-tsd-source": "/src/myt/pages/HRTower.tsx:198:7" })
  ] });
}
__name(HRTower, "HRTower");
__name2(HRTower, "HRTower");
const SplitComponent = /* @__PURE__ */ __name2(() => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/myt/index.tsx:7:20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HRTower, { "data-tsd-source": "/src/routes/myt/index.tsx:7:30" }) }), "SplitComponent");
export {
  SplitComponent as component
};
