var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-BN067m2r.mjs";
import { aB as useAppState } from "./router-xBhBcQRf.mjs";
import { M as MetricCard } from "./MetricCard-Pwx4gUe3.mjs";
import { T as TourCard } from "./TourCard-BP6DGogk.mjs";
import { G as GlueFeed } from "./GlueFeed-Cs5TrIyd.mjs";
import { C as CoachInline } from "./CoachInline-B8sqnprZ.mjs";
import { T as TenXOpsBar } from "./TenXOpsBar-BWF4Oi6m.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { bA as CalendarCheck, T as TrendingUp, k as FileText, z as Target } from "../_libs/lucide-react.mjs";

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
import "./ConfidenceBar-Bw6Q9zSl.mjs";
import "./StatusBadge-ByCMrWCS.mjs";
import "./LeadControlPanel-C0LO6eCh.mjs";
import "./slider-Bs5Yl8ak.mjs";
import "../_libs/radix-ui__react-slider.mjs";
import "./use-event-bus-DnkJRu6l.mjs";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
const intentRank = { hard: 0, medium: 1, soft: 2 };
function TCMDashboard() {
  const { tours, setTours, currentMemberId } = useAppState();
  const [, setTick] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const interval = setInterval(() => setTick((t) => t + 1), 3e4);
    return () => clearInterval(interval);
  }, []);
  const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const myTours = (currentMemberId ? tours.filter((t) => t.assignedTo === currentMemberId) : tours.filter((t) => t.assignedTo === "m5" || t.assignedTo === "m6")).filter((t) => t.tourDate === today);
  const sortedTours = [...myTours].sort((a, b) => {
    const r = intentRank[a.intent] - intentRank[b.intent];
    return r !== 0 ? r : a.tourTime.localeCompare(b.tourTime);
  });
  const completed = myTours.filter((t) => t.status === "completed").length;
  const showUps = myTours.filter((t) => t.showUp === true).length;
  const drafts = myTours.filter((t) => t.outcome === "draft" || t.outcome === "booked").length;
  const dailyTarget = 10;
  const targetPct = Math.min(100, Math.round(myTours.length / dailyTarget * 100));
  const updateTour = /* @__PURE__ */ __name2((tourId, updates) => {
    setTours((prev) => prev.map((t) => t.id === tourId ? { ...t, ...updates } : t));
  }, "updateTour");
  const nowMin = (/* @__PURE__ */ new Date()).getHours() * 60 + (/* @__PURE__ */ new Date()).getMinutes();
  const toMin = /* @__PURE__ */ __name2((hhmm) => {
    const [h, m] = hhmm.split(":").map(Number);
    return (h ?? 0) * 60 + (m ?? 0);
  }, "toMin");
  const top5 = sortedTours.filter((t) => t.status !== "completed").slice(0, 5).map((t) => ({
    id: t.id,
    title: `${t.leadName} → ${t.propertyName}`,
    subtitle: `${t.tourTime} · ${t.area}`,
    tag: t.intent
  }));
  const stalled = myTours.filter((t) => t.status !== "completed" && toMin(t.tourTime) + 30 < nowMin).slice(0, 5).map((t) => ({
    id: t.id,
    title: `${t.leadName} · ${t.propertyName}`,
    subtitle: `${t.tourTime} · no outcome`,
    tag: "overdue"
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 md:space-y-6 animate-slide-up", "data-tsd-source": "/src/myt/pages/TCMDashboard.tsx:70:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CoachInline, { page: "tcm", "data-tsd-source": "/src/myt/pages/TCMDashboard.tsx:71:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      TenXOpsBar,
      {
        role: "TCM",
        moved: completed,
        breach: stalled.length,
        current: myTours.length,
        target: dailyTarget,
        targetLabel: "Tours today",
        top5,
        stalled,
        "data-tsd-source": "/src/myt/pages/TCMDashboard.tsx:72:7"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/TCMDashboard.tsx:82:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl md:text-2xl font-heading font-bold text-foreground", "data-tsd-source": "/src/myt/pages/TCMDashboard.tsx:83:9", children: "Today's Tours" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/myt/pages/TCMDashboard.tsx:84:9", children: currentMemberId ? "Sorted by intent — fight for hard ones first" : "Select yourself in the header ↑" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3", "data-tsd-source": "/src/myt/pages/TCMDashboard.tsx:89:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MetricCard, { label: "My Tours", value: myTours.length, color: "green", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCheck, { className: "h-4 w-4" }), "data-tsd-source": "/src/myt/pages/TCMDashboard.tsx:90:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MetricCard, { label: "Completed", value: completed, color: "green", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-4 w-4" }), "data-tsd-source": "/src/myt/pages/TCMDashboard.tsx:91:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MetricCard, { label: "Show-Up %", value: myTours.length > 0 ? `${Math.round(showUps / myTours.length * 100)}%` : "0%", color: showUps / Math.max(1, myTours.length) >= 0.7 ? "green" : "red", "data-tsd-source": "/src/myt/pages/TCMDashboard.tsx:92:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MetricCard, { label: "Bookings", value: drafts, color: "amber", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-4 w-4" }), "data-tsd-source": "/src/myt/pages/TCMDashboard.tsx:93:9" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-3 md:p-4", "data-tsd-source": "/src/myt/pages/TCMDashboard.tsx:97:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", "data-tsd-source": "/src/myt/pages/TCMDashboard.tsx:98:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", "data-tsd-source": "/src/myt/pages/TCMDashboard.tsx:99:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-4 w-4 text-primary", "data-tsd-source": "/src/myt/pages/TCMDashboard.tsx:100:13" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground", "data-tsd-source": "/src/myt/pages/TCMDashboard.tsx:101:13", children: "Daily Target" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-mono tabular-nums text-foreground", "data-tsd-source": "/src/myt/pages/TCMDashboard.tsx:103:11", children: [
          myTours.length,
          " / ",
          dailyTarget
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 rounded-full bg-surface-2 overflow-hidden", "data-tsd-source": "/src/myt/pages/TCMDashboard.tsx:105:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-primary transition-all", style: { width: `${targetPct}%` }, "data-tsd-source": "/src/myt/pages/TCMDashboard.tsx:106:11" }) })
    ] }),
    sortedTours.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-card p-8 text-center text-muted-foreground text-sm", "data-tsd-source": "/src/myt/pages/TCMDashboard.tsx:111:9", children: "No tours today" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-2 md:grid-cols-2 lg:grid-cols-3", "data-tsd-source": "/src/myt/pages/TCMDashboard.tsx:113:9", children: sortedTours.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(TourCard, { tour: t, onUpdate: updateTour, "data-tsd-source": "/src/myt/pages/TCMDashboard.tsx:115:13" }, t.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GlueFeed, { limit: 20, title: "Closed-loop activity · TCM", "data-tsd-source": "/src/myt/pages/TCMDashboard.tsx:119:7" })
  ] });
}
__name(TCMDashboard, "TCMDashboard");
__name2(TCMDashboard, "TCMDashboard");
const SplitComponent = /* @__PURE__ */ __name2(() => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/myt/tcm.tsx:7:20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TCMDashboard, { "data-tsd-source": "/src/routes/myt/tcm.tsx:7:30" }) }), "SplitComponent");
export {
  SplitComponent as component
};
