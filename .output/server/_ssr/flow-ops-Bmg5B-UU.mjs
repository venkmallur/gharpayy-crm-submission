var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-rXFHrudv.mjs";
import { u as useNavigate } from "./react-router-dom-DTg4HJ59.mjs";
import { aB as useAppState, k as Button, q as cn } from "./router-Cbs6ivkN.mjs";
import { M as MetricCard } from "./MetricCard-DHhA2Beh.mjs";
import { L as LeadControlPanel } from "./LeadControlPanel-CV2ddxDl.mjs";
import { G as GlueFeed } from "./GlueFeed-CWi4SRt5.mjs";
import { C as CoachInline } from "./CoachInline-CH6LETUg.mjs";
import { T as TenXOpsBar } from "./TenXOpsBar-bb65f_sX.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { J as CalendarPlus, bA as CalendarCheck, P as Phone, T as TrendingUp, k as FileText, z as Target, S as Sparkles } from "../_libs/lucide-react.mjs";
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
import "./slider-rDMznnl4.mjs";
import "../_libs/radix-ui__react-slider.mjs";
import "./use-event-bus-Bdnr5LRL.mjs";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
const CYCLE_TARGETS = { chatsClosed: 30, mytLeads: 10, toursScheduled: 4, sameDayConfirmed: 2 };
function FlowOpsDashboard() {
  const { tours, currentMemberId } = useAppState();
  const navigate = useNavigate();
  const myTours = currentMemberId ? tours.filter((t) => t.scheduledBy === currentMemberId) : tours.filter((t) => t.scheduledBy === "m1");
  const completed = myTours.filter((t) => t.status === "completed").length;
  const showUps = myTours.filter((t) => t.showUp === true).length;
  const drafts = myTours.filter((t) => t.outcome === "draft").length;
  const pending = myTours.filter((t) => t.status === "scheduled").length;
  const [cycles, setCycles] = reactExports.useState([
    { cycleNumber: 1, chatsClosed: 0, mytLeads: 0, toursScheduled: 0, sameDayConfirmed: 0 },
    { cycleNumber: 2, chatsClosed: 0, mytLeads: 0, toursScheduled: 0, sameDayConfirmed: 0 },
    { cycleNumber: 3, chatsClosed: 0, mytLeads: 0, toursScheduled: 0, sameDayConfirmed: 0 },
    { cycleNumber: 4, chatsClosed: 0, mytLeads: 0, toursScheduled: 0, sameDayConfirmed: 0 }
  ]);
  const [activeCycle, setActiveCycle] = reactExports.useState(0);
  const updateCycle = /* @__PURE__ */ __name2((field, delta) => {
    setCycles((prev) => prev.map(
      (c, i) => i === activeCycle ? { ...c, [field]: Math.max(0, c[field] + delta) } : c
    ));
  }, "updateCycle");
  const dailyTotals = cycles.reduce((acc, c) => ({
    chatsClosed: acc.chatsClosed + c.chatsClosed,
    mytLeads: acc.mytLeads + c.mytLeads,
    toursScheduled: acc.toursScheduled + c.toursScheduled,
    sameDayConfirmed: acc.sameDayConfirmed + c.sameDayConfirmed
  }), { chatsClosed: 0, mytLeads: 0, toursScheduled: 0, sameDayConfirmed: 0 });
  const todayISO = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const scheduledToday = myTours.filter((t) => t.tourDate === todayISO);
  const top5 = scheduledToday.filter((t) => t.status === "scheduled" || t.status === "confirmed").sort((a, b) => a.tourTime.localeCompare(b.tourTime)).slice(0, 5).map((t) => ({
    id: t.id,
    title: `${t.leadName} → ${t.propertyName}`,
    subtitle: `${t.tourTime} · ${t.area} · TCM ${t.assignedToName}`,
    tag: t.status
  }));
  const stalled = myTours.filter((t) => t.outcome === "draft" || t.status === "scheduled" && t.tourDate < todayISO).slice(0, 5).map((t) => ({
    id: t.id,
    title: `${t.leadName} · ${t.propertyName}`,
    subtitle: `${t.tourDate} ${t.tourTime} · ${t.outcome ?? "no-outcome"}`,
    tag: t.outcome === "draft" ? "draft" : "overdue"
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 md:space-y-6 animate-slide-up", "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:72:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CoachInline, { page: "flow-ops", "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:73:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      TenXOpsBar,
      {
        role: "Flow Ops",
        moved: completed + dailyTotals.toursScheduled,
        breach: stalled.length,
        current: dailyTotals.toursScheduled,
        target: CYCLE_TARGETS.toursScheduled * 4,
        targetLabel: "Tours scheduled today",
        top5,
        stalled,
        "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:74:7"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between flex-wrap gap-2", "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:84:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:85:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl md:text-2xl font-heading font-bold text-foreground", "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:86:11", children: "Flow Ops Dashboard" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:87:11", children: "Your scheduling performance · click any tour to open the command panel" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: /* @__PURE__ */ __name2(() => navigate("/myt/schedule"), "onClick"), className: "gap-1.5", "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:89:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarPlus, { className: "h-4 w-4", "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:90:11" }),
        " Schedule Tour"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3", "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:94:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MetricCard, { label: "My Tours", value: myTours.length, color: "blue", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCheck, { className: "h-4 w-4" }), "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:95:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MetricCard, { label: "Pending", value: pending, color: "amber", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }), "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:96:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MetricCard, { label: "Show-Ups", value: showUps, color: "green", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-4 w-4" }), "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:97:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MetricCard, { label: "Drafts", value: drafts, color: "amber", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-4 w-4" }), "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:98:9" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-3 md:p-5", "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:102:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:103:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-4 w-4 text-primary", "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:104:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading font-semibold text-xs md:text-sm text-foreground", "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:105:11", children: "90-Min Cycle Tracker" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 mb-4", "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:109:9", children: cycles.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: /* @__PURE__ */ __name2(() => setActiveCycle(i), "onClick"),
          className: cn(
            "flex-1 py-1.5 text-xs font-medium rounded-md transition-colors",
            activeCycle === i ? "bg-primary text-primary-foreground" : "bg-surface-2 text-muted-foreground hover:text-foreground"
          ),
          "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:111:13",
          children: [
            "G",
            i + 1
          ]
        },
        i
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:125:9", children: [
        { key: "chatsClosed", label: "Chats Closed", target: CYCLE_TARGETS.chatsClosed },
        { key: "mytLeads", label: "MYT Leads", target: CYCLE_TARGETS.mytLeads },
        { key: "toursScheduled", label: "Tours Scheduled", target: CYCLE_TARGETS.toursScheduled },
        { key: "sameDayConfirmed", label: "Same-Day", target: CYCLE_TARGETS.sameDayConfirmed }
      ].map((item) => {
        const val = cycles[activeCycle][item.key];
        const pct = Math.min(100, Math.round(val / item.target * 100));
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surface-2/50 rounded-lg p-3", "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:135:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1", "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:136:17", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:137:19", children: item.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground", "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:138:19", children: [
              val,
              "/",
              item.target
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 bg-surface-3 rounded-full mb-2", "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:140:17", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: cn("h-full rounded-full transition-all", pct >= 100 ? "bg-success" : pct >= 50 ? "bg-primary" : "bg-warning"),
              style: { width: `${pct}%` },
              "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:141:19"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2", "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:146:17", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: /* @__PURE__ */ __name2(() => updateCycle(item.key, -1), "onClick"), className: "h-7 w-7 p-0 text-xs", "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:147:19", children: "−" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-heading font-bold text-foreground w-8 text-center", "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:148:19", children: val }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: /* @__PURE__ */ __name2(() => updateCycle(item.key, 1), "onClick"), className: "h-7 w-7 p-0 text-xs", "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:149:19", children: "+" })
          ] })
        ] }, item.key);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 pt-3 border-t border-border", "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:157:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mb-1", "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:158:11", children: "Daily Totals (All 4 Cycles)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 text-xs", "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:159:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground", "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:160:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:160:47", children: dailyTotals.chatsClosed }),
            "/120 chats"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground", "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:161:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:161:47", children: dailyTotals.mytLeads }),
            "/40 MYT"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground", "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:162:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:162:47", children: dailyTotals.toursScheduled }),
            "/16 tours"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground", "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:163:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:163:47", children: dailyTotals.sameDayConfirmed }),
            "/8 same-day"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-3 md:p-5", "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:168:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading font-semibold text-xs md:text-sm mb-3 text-foreground", "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:169:9", children: "Tours I Scheduled" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:170:9", children: [
        myTours.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center py-4", "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:172:13", children: 'No tours yet — hit "Schedule Tour" above to add one.' }),
        myTours.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-3 py-2.5 rounded-lg bg-surface-2/50", "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:175:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:176:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:177:17", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground text-sm", "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:178:19", children: t.leadName }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs", "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:179:19", children: t.propertyName })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground mt-0.5", "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:181:17", children: [
              t.area,
              " · ",
              t.tourDate,
              " ",
              t.tourTime,
              " · TCM ",
              t.assignedToName
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:185:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] px-2 py-0.5 rounded-full ${t.status === "completed" ? "bg-success/15 text-success" : t.status === "confirmed" ? "bg-tcm/15 text-role-tcm" : "bg-primary/15 text-primary"}`, "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:186:17", children: t.status }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              LeadControlPanel,
              {
                subject: { kind: "tour", tour: t },
                trigger: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "h-7 text-[11px] gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3" }),
                  " Open"
                ] }),
                "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:189:17"
              }
            )
          ] })
        ] }, t.id))
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GlueFeed, { limit: 20, title: "Closed-loop activity · Flow Ops", "data-tsd-source": "/src/myt/pages/FlowOpsDashboard.tsx:202:7" })
  ] });
}
__name(FlowOpsDashboard, "FlowOpsDashboard");
__name2(FlowOpsDashboard, "FlowOpsDashboard");
const SplitComponent = /* @__PURE__ */ __name2(() => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/myt/flow-ops.tsx:7:20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FlowOpsDashboard, { "data-tsd-source": "/src/routes/myt/flow-ops.tsx:7:30" }) }), "SplitComponent");
export {
  SplitComponent as component
};
