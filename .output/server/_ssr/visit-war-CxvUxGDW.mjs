var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-rXFHrudv.mjs";
import { u as useApp, b as useVisitWar, c as useMountedNow, d as defaultLensFor, i as isClosedOut, r as reportSignature, e as buildVisitReport, f as archiveVisitEvent, g as upsertVisitEvent, v as visitBlock, s as selectByLens, p as probabilityFor, C as Card, B as Badge, W as WalkInDialog, R as RoleLensSwitcher, D as DayPlannerStrip, T as Tabs, h as TabsList, j as TabsTrigger, k as Button, l as TabsContent, m as TeamPulseGrid, n as WarMapPanel, o as DayReportPanel, q as cn, t as fmtElapsed, V as VisitCopyChips, O as OBJECTION_CATALOG, S as Select, w as SelectTrigger, x as SelectValue, y as SelectContent, z as SelectItem, A as Textarea, E as CoachNoteThread, F as STAGE_META } from "./router-Cbs6ivkN.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { R as Radio, h as Siren, f as Activity, m as CalendarClock, F as Flame, W as Wallet, T as TrendingUp, c as Users, n as Map, k as FileText, o as ChartColumn, p as Bell, B as Building2, g as TriangleAlert, q as ChevronRight, P as Phone, r as MessageCircle, X, s as Clock, G as Gauge, t as Plus } from "../_libs/lucide-react.mjs";
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
function stageTone(stage) {
  switch (stage) {
    case "scheduled":
      return {
        className: "bg-muted text-muted-foreground border-border",
        dot: "bg-muted-foreground"
      };
    case "started":
      return {
        className: "bg-info/10 text-info border-info/30",
        dot: "bg-info"
      };
    case "at-property":
      return {
        className: "bg-success/10 text-success border-success/30",
        dot: "bg-success"
      };
    case "tour-ongoing":
      return {
        className: "bg-warning/15 text-warning-foreground border-warning/40",
        dot: "bg-warning"
      };
    case "completed":
      return {
        className: "bg-info/10 text-info border-info/30",
        dot: "bg-info"
      };
    case "objection":
      return {
        className: "bg-warning/15 text-warning-foreground border-warning/40",
        dot: "bg-warning"
      };
    case "follow-up":
      return {
        className: "bg-accent/10 text-accent border-accent/30",
        dot: "bg-accent"
      };
    case "booked":
      return {
        className: "bg-success/15 text-success border-success/40",
        dot: "bg-success"
      };
    case "lost":
      return {
        className: "bg-destructive/10 text-destructive border-destructive/30",
        dot: "bg-destructive"
      };
  }
}
__name(stageTone, "stageTone");
__name2(stageTone, "stageTone");
function probTone(p) {
  if (p >= 75) return "bg-success/15 text-success border-success/30";
  if (p >= 45) return "bg-warning/15 text-warning-foreground border-warning/40";
  return "bg-destructive/10 text-destructive border-destructive/30";
}
__name(probTone, "probTone");
__name2(probTone, "probTone");
function timerTone(elapsedSec) {
  if (elapsedSec >= 75 * 60) return "text-destructive";
  if (elapsedSec >= 45 * 60) return "text-warning-foreground";
  if (elapsedSec >= 30 * 60) return "text-warning";
  return "text-success";
}
__name(timerTone, "timerTone");
__name2(timerTone, "timerTone");
function VisitWarRoom({
  inline = false
} = {}) {
  const {
    leads,
    properties,
    tours,
    tcms,
    role,
    currentTcmId
  } = useApp();
  const {
    records,
    alerts,
    upsert,
    patch,
    pushAlert,
    markAlertsSeen,
    addObjection,
    alertsSeenAt,
    setReport
  } = useVisitWar();
  const [now, mounted] = useMountedNow(1e3);
  const [lens, setLens] = reactExports.useState(() => defaultLensFor(role));
  const [tab, setTab] = reactExports.useState("live");
  const [focusTour, setFocusTour] = reactExports.useState(null);
  const [sortMode, setSortMode] = reactExports.useState("prob");
  reactExports.useEffect(() => {
    setLens(defaultLensFor(role));
  }, [role]);
  reactExports.useEffect(() => {
    if (!mounted) return;
    tours.forEach((t) => {
      if (records[t.id]) return;
      const lead = leads.find((l) => l.id === t.leadId);
      const prop = properties.find((p) => p.id === t.propertyId);
      const tcm = tcms.find((m) => m.id === t.tcmId);
      const sched = +new Date(t.scheduledAt);
      let stage = "scheduled";
      if (t.status === "completed") stage = "completed";
      else if (t.status === "cancelled" || t.status === "no-show") stage = "lost";
      else if (sched < Date.now() - 10 * 6e4) stage = "tour-ongoing";
      upsert({
        tourId: t.id,
        leadId: t.leadId,
        leadName: lead?.name ?? "Lead",
        leadPhone: lead?.phone ?? "—",
        propertyId: t.propertyId,
        propertyName: prop?.name ?? "Property",
        propertyArea: prop?.area ?? "—",
        tcmId: t.tcmId,
        tcmName: tcm?.name ?? "Coordinator",
        scheduledAt: sched,
        stage,
        startedAt: stage !== "scheduled" ? sched : void 0,
        completedAt: stage === "completed" ? sched + 35 * 6e4 : void 0,
        objections: [],
        outcome: stage === "completed" ? "thinking" : null,
        lastUpdateAt: Date.now()
      });
    });
  }, [tours, leads, properties, tcms, records, upsert, mounted]);
  reactExports.useEffect(() => {
    if (!mounted) return;
    Object.values(records).forEach((v) => {
      if (v.stage === "scheduled" && now - v.scheduledAt > 15 * 6e4 && !v.warnedDelay) {
        patch(v.tourId, {
          warnedDelay: true
        });
        pushAlert({
          tourId: v.tourId,
          leadName: v.leadName,
          severity: "warn",
          kind: "delay",
          message: "Delayed · no start 15m past schedule"
        });
      }
      if ((v.stage === "started" || v.stage === "at-property") && v.startedAt && now - v.startedAt > 30 * 6e4 && !v.warnedAtRisk) {
        patch(v.tourId, {
          warnedAtRisk: true
        });
        pushAlert({
          tourId: v.tourId,
          leadName: v.leadName,
          severity: "warn",
          kind: "delay",
          message: "At risk · no update 30m after start"
        });
      }
      if ((v.stage === "started" || v.stage === "at-property" || v.stage === "tour-ongoing") && v.startedAt && now - v.startedAt > 60 * 6e4 && !v.warnedEscalate) {
        patch(v.tourId, {
          warnedEscalate: true,
          escalated: true
        });
        pushAlert({
          tourId: v.tourId,
          leadName: v.leadName,
          severity: "risk",
          kind: "escalate",
          message: "ESCALATE · 60m no update — manager notified"
        });
      }
      if (v.stage === "completed" && v.completedAt && now - v.completedAt > 6 * 36e5 && (!v.outcome || v.outcome === "thinking") && !v.warnedGhost) {
        patch(v.tourId, {
          warnedGhost: true
        });
        pushAlert({
          tourId: v.tourId,
          leadName: v.leadName,
          severity: "risk",
          kind: "ghost",
          message: "Ghost · post-visit silence 6h+"
        });
      }
    });
  }, [now, records, patch, pushAlert, mounted]);
  reactExports.useEffect(() => {
    if (!mounted) return;
    Object.values(records).forEach((v) => {
      if (!isClosedOut(v)) return;
      const sig = reportSignature(v);
      const stale = !v.report || v.report.generatedAt < v.lastUpdateAt;
      if (!stale) return;
      const text = `${buildVisitReport(v)}

[sig:${sig}]`;
      setReport(v.tourId, text);
    });
  }, [records, mounted, setReport]);
  reactExports.useEffect(() => {
    if (!mounted) return;
    Object.values(records).forEach((v) => {
      if (v.stage === "lost") {
        archiveVisitEvent(v.tourId);
        return;
      }
      upsertVisitEvent({
        tourId: v.tourId,
        leadId: v.leadId,
        leadName: v.leadName,
        leadPhone: v.leadPhone,
        propertyName: v.propertyName,
        propertyArea: v.propertyArea,
        scheduledAt: v.scheduledAt,
        description: visitBlock({
          leadName: v.leadName,
          leadPhone: v.leadPhone,
          propertyName: v.propertyName,
          propertyArea: v.propertyArea,
          scheduledAt: v.scheduledAt
        }),
        durationMin: 60
      });
    });
  }, [records, mounted]);
  const lensRecords = reactExports.useMemo(() => {
    const filtered = selectByLens(records, lens, {
      tcmId: currentTcmId ?? void 0,
      ownerCode: void 0
      // TODO: derive from owner-context when in owner shell
    });
    return filtered;
  }, [records, lens, currentTcmId]);
  const list = reactExports.useMemo(() => lensRecords, [lensRecords]);
  const sorted = reactExports.useMemo(() => {
    const arr = [...list];
    arr.sort((a, b) => {
      if (sortMode === "prob") {
        return probabilityFor(b.reaction, b.objections.length, b.stage) - probabilityFor(a.reaction, a.objections.length, a.stage);
      }
      if (sortMode === "dur") {
        const da = a.startedAt ? now - a.startedAt : 0;
        const db = b.startedAt ? now - b.startedAt : 0;
        return db - da;
      }
      if (sortMode === "obj") return b.objections.length - a.objections.length;
      return b.lastUpdateAt - a.lastUpdateAt;
    });
    return arr;
  }, [list, sortMode, now]);
  const liveList = list.filter((v) => ["started", "at-property", "tour-ongoing"].includes(v.stage));
  const upcoming = list.filter((v) => v.stage === "scheduled" && v.scheduledAt > now - 5 * 6e4 && v.scheduledAt < now + 24 * 36e5).sort((a, b) => a.scheduledAt - b.scheduledAt);
  const hot = list.filter((v) => v.stage === "completed" && v.completedAt && now - v.completedAt < 24 * 36e5 && v.outcome !== "booked");
  const unreadAlerts = alerts.filter((a) => a.ts > alertsSeenAt).length;
  const intervention = list.filter((v) => {
    const prob = probabilityFor(v.reaction, v.objections.length, v.stage);
    const sevObj = v.objections.some((o) => o.resolution === "unresolved");
    return v.escalated || prob >= 80 || v.startedAt && now - v.startedAt > 30 * 6e4 && !v.completedAt || sevObj;
  });
  const revenueWalking = reactExports.useMemo(() => {
    const pool = [...liveList, ...hot];
    return pool.reduce((sum, v) => {
      const prop = properties.find((p2) => p2.id === v.propertyId);
      const price = prop?.pricePerBed ?? 12e3;
      const p = probabilityFor(v.reaction, v.objections.length, v.stage) / 100;
      return sum + price * p;
    }, 0);
  }, [liveList, hot, properties]);
  const todayMs = (() => {
    const d = /* @__PURE__ */ new Date();
    d.setHours(0, 0, 0, 0);
    return +d;
  })();
  const todays = list.filter((v) => v.scheduledAt >= todayMs);
  const expectedBookings = Math.round(list.filter((v) => v.completedAt && now - v.completedAt < 24 * 36e5).reduce((s, v) => s + probabilityFor(v.reaction, v.objections.length, v.stage) / 100, 0));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-tsd-source": "/src/routes/visit-war.tsx:261:5", children: [
    !inline && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 md:p-5 border-l-4 border-l-accent bg-gradient-to-br from-card to-card/60", "data-tsd-source": "/src/routes/visit-war.tsx:264:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", "data-tsd-source": "/src/routes/visit-war.tsx:265:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", "data-tsd-source": "/src/routes/visit-war.tsx:266:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl bg-accent/15 text-accent flex items-center justify-center", "data-tsd-source": "/src/routes/visit-war.tsx:267:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Radio, { className: "h-5 w-5", "data-tsd-source": "/src/routes/visit-war.tsx:268:15" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/routes/visit-war.tsx:270:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.18em] text-accent font-semibold", "data-tsd-source": "/src/routes/visit-war.tsx:271:15", children: "Gharpayy · Visit OS" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-lg md:text-xl font-bold leading-tight", "data-tsd-source": "/src/routes/visit-war.tsx:272:15", children: "Visit Command Center" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "ml-1 gap-1.5 border-success/40 bg-success/10 text-success", "data-tsd-source": "/src/routes/visit-war.tsx:275:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-success animate-pulse", "data-tsd-source": "/src/routes/visit-war.tsx:276:13" }),
          liveList.length,
          " LIVE"
        ] }),
        intervention.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "gap-1.5 border-destructive/40 bg-destructive/10 text-destructive", "data-tsd-source": "/src/routes/visit-war.tsx:280:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Siren, { className: "h-3 w-3", "data-tsd-source": "/src/routes/visit-war.tsx:281:15" }),
          " ",
          intervention.length,
          " need intervention"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex items-center gap-3", "data-tsd-source": "/src/routes/visit-war.tsx:284:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(WalkInDialog, { onCreated: /* @__PURE__ */ __name2((id) => {
            setFocusTour(id);
            setTab("live");
          }, "onCreated"), "data-tsd-source": "/src/routes/visit-war.tsx:285:13" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(RoleLensSwitcher, { value: lens, onChange: setLens, "data-tsd-source": "/src/routes/visit-war.tsx:286:13" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm tabular-nums font-mono text-muted-foreground", "data-tsd-source": "/src/routes/visit-war.tsx:287:13", children: mounted ? new Date(now).toLocaleTimeString("en-IN", {
            hour12: false
          }) : "--:--:--" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid grid-cols-2 md:grid-cols-5 gap-3", "data-tsd-source": "/src/routes/visit-war.tsx:293:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { icon: Activity, label: "Visits today", value: todays.length, "data-tsd-source": "/src/routes/visit-war.tsx:294:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { icon: CalendarClock, label: "Next 24h", value: upcoming.length, tone: "info", "data-tsd-source": "/src/routes/visit-war.tsx:295:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { icon: Flame, label: "Hot (<24h)", value: hot.length, tone: "warning", "data-tsd-source": "/src/routes/visit-war.tsx:296:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { icon: Wallet, label: "Revenue walking", value: `₹${(revenueWalking / 1e3).toFixed(0)}k`, tone: "success", "data-tsd-source": "/src/routes/visit-war.tsx:297:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Metric, { icon: TrendingUp, label: "Expected bookings", value: expectedBookings, tone: "accent", "data-tsd-source": "/src/routes/visit-war.tsx:298:11" })
      ] })
    ] }),
    inline && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", "data-tsd-source": "/src/routes/visit-war.tsx:304:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(WalkInDialog, { onCreated: /* @__PURE__ */ __name2((id) => {
      setFocusTour(id);
      setTab("live");
    }, "onCreated"), "data-tsd-source": "/src/routes/visit-war.tsx:305:11" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DayPlannerStrip, { visits: Object.values(records), now, onFocus: setFocusTour, focusTourId: focusTour, "data-tsd-source": "/src/routes/visit-war.tsx:310:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { value: tab, onValueChange: /* @__PURE__ */ __name2((v) => setTab(v), "onValueChange"), "data-tsd-source": "/src/routes/visit-war.tsx:318:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", "data-tsd-source": "/src/routes/visit-war.tsx:319:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { "data-tsd-source": "/src/routes/visit-war.tsx:320:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "live", className: "gap-1.5", "data-tsd-source": "/src/routes/visit-war.tsx:321:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/routes/visit-war.tsx:321:59" }),
            " Live (",
            liveList.length,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "upcoming", className: "gap-1.5", "data-tsd-source": "/src/routes/visit-war.tsx:322:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarClock, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/routes/visit-war.tsx:322:63" }),
            " Upcoming (",
            upcoming.length,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "hot", className: "gap-1.5", "data-tsd-source": "/src/routes/visit-war.tsx:323:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/routes/visit-war.tsx:323:58" }),
            " Hot (",
            hot.length,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "team", className: "gap-1.5", "data-tsd-source": "/src/routes/visit-war.tsx:324:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/routes/visit-war.tsx:324:59" }),
            " Team Pulse"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "map", className: "gap-1.5", "data-tsd-source": "/src/routes/visit-war.tsx:325:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Map, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/routes/visit-war.tsx:325:58" }),
            " War Map"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "reports", className: "gap-1.5", "data-tsd-source": "/src/routes/visit-war.tsx:326:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/routes/visit-war.tsx:326:62" }),
            " Reports"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "stats", className: "gap-1.5", "data-tsd-source": "/src/routes/visit-war.tsx:327:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/routes/visit-war.tsx:327:60" }),
            " Stats"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "alerts", onClick: /* @__PURE__ */ __name2(() => markAlertsSeen(), "onClick"), className: "gap-1.5", "data-tsd-source": "/src/routes/visit-war.tsx:328:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/routes/visit-war.tsx:329:15" }),
            " Alerts",
            unreadAlerts > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "destructive", className: "ml-1 px-1.5 py-0 text-[10px] h-4", "data-tsd-source": "/src/routes/visit-war.tsx:330:36", children: unreadAlerts })
          ] })
        ] }),
        tab === "live" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex items-center gap-1.5", "data-tsd-source": "/src/routes/visit-war.tsx:334:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase text-muted-foreground tracking-wider mr-1", "data-tsd-source": "/src/routes/visit-war.tsx:335:15", children: "Sort" }),
          ["prob", "dur", "obj", "update"].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: sortMode === m ? "default" : "outline", className: "h-7 px-2.5 text-[11px] uppercase font-mono", onClick: /* @__PURE__ */ __name2(() => setSortMode(m), "onClick"), "data-tsd-source": "/src/routes/visit-war.tsx:337:17", children: m === "prob" ? "Probability" : m === "dur" ? "Duration" : m === "obj" ? "Objections" : "Updated" }, m))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_400px] gap-4 mt-3", "data-tsd-source": "/src/routes/visit-war.tsx:347:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", "data-tsd-source": "/src/routes/visit-war.tsx:348:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "live", className: "m-0", "data-tsd-source": "/src/routes/visit-war.tsx:349:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LiveBoard, { list: sorted.filter((v) => !["booked", "lost"].includes(v.stage)), now, mounted, onFocus: setFocusTour, focus: focusTour, "data-tsd-source": "/src/routes/visit-war.tsx:350:15" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "upcoming", className: "m-0", "data-tsd-source": "/src/routes/visit-war.tsx:352:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(UpcomingPanel, { list: upcoming, now, mounted, onFocus: setFocusTour, "data-tsd-source": "/src/routes/visit-war.tsx:353:15" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "hot", className: "m-0", "data-tsd-source": "/src/routes/visit-war.tsx:355:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HotRoom, { list: hot, now, mounted, onFocus: setFocusTour, "data-tsd-source": "/src/routes/visit-war.tsx:356:15" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "team", className: "m-0", "data-tsd-source": "/src/routes/visit-war.tsx:358:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TeamPulseGrid, { now, "data-tsd-source": "/src/routes/visit-war.tsx:359:15" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "map", className: "m-0", "data-tsd-source": "/src/routes/visit-war.tsx:361:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(WarMapPanel, { now, "data-tsd-source": "/src/routes/visit-war.tsx:362:15" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "reports", className: "m-0", "data-tsd-source": "/src/routes/visit-war.tsx:364:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DayReportPanel, { visits: Object.values(records), dayStart: todayMs, "data-tsd-source": "/src/routes/visit-war.tsx:365:15" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "stats", className: "m-0", "data-tsd-source": "/src/routes/visit-war.tsx:367:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(WarRoomStats, { list, "data-tsd-source": "/src/routes/visit-war.tsx:368:15" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "alerts", className: "m-0", "data-tsd-source": "/src/routes/visit-war.tsx:370:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlertFeed, { "data-tsd-source": "/src/routes/visit-war.tsx:371:15" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-0 overflow-hidden min-h-[420px]", "data-tsd-source": "/src/routes/visit-war.tsx:376:11", children: focusTour && records[focusTour] ? /* @__PURE__ */ jsxRuntimeExports.jsx(VisitDetailPanel, { v: records[focusTour], now, onClose: /* @__PURE__ */ __name2(() => setFocusTour(null), "onClose"), onPatch: /* @__PURE__ */ __name2((p) => patch(focusTour, p), "onPatch"), onAddObjection: /* @__PURE__ */ __name2((o) => addObjection(focusTour, o), "onAddObjection"), onAlert: /* @__PURE__ */ __name2((severity, kind, message) => pushAlert({
          tourId: focusTour,
          leadName: records[focusTour].leadName,
          severity,
          kind,
          message
        }), "onAlert"), "data-tsd-source": "/src/routes/visit-war.tsx:378:15" }, focusTour) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-10 text-center text-sm text-muted-foreground", "data-tsd-source": "/src/routes/visit-war.tsx:390:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-10 w-10 mx-auto mb-3 opacity-30", "data-tsd-source": "/src/routes/visit-war.tsx:391:17" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-foreground mb-1", "data-tsd-source": "/src/routes/visit-war.tsx:392:17", children: "Select a visit" }),
          "Open any row on the left to capture reactions, objections, and outcomes in real time."
        ] }) })
      ] })
    ] })
  ] });
}
__name(VisitWarRoom, "VisitWarRoom");
__name2(VisitWarRoom, "VisitWarRoom");
function Metric({
  icon: Icon,
  label,
  value,
  tone
}) {
  const toneCls = tone === "info" ? "text-info bg-info/10" : tone === "warning" ? "text-warning-foreground bg-warning/15" : tone === "success" ? "text-success bg-success/10" : tone === "accent" ? "text-accent bg-accent/10" : "text-foreground bg-muted";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-card/60 p-3", "data-tsd-source": "/src/routes/visit-war.tsx:412:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", "data-tsd-source": "/src/routes/visit-war.tsx:413:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("h-7 w-7 rounded-md flex items-center justify-center", toneCls), "data-tsd-source": "/src/routes/visit-war.tsx:414:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/routes/visit-war.tsx:415:11" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", "data-tsd-source": "/src/routes/visit-war.tsx:417:9", children: label })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1.5 text-2xl font-bold tabular-nums", "data-tsd-source": "/src/routes/visit-war.tsx:419:7", children: value })
  ] });
}
__name(Metric, "Metric");
__name2(Metric, "Metric");
function StagePill({
  stage
}) {
  const m = STAGE_META[stage];
  const tone = stageTone(stage);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: cn("inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border", tone.className), "data-tsd-source": "/src/routes/visit-war.tsx:428:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("h-1.5 w-1.5 rounded-full", tone.dot), "data-tsd-source": "/src/routes/visit-war.tsx:429:7" }),
    m.label
  ] });
}
__name(StagePill, "StagePill");
__name2(StagePill, "StagePill");
function LiveTimer({
  since,
  kind = "visit"
}) {
  const [tick, setTick] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const id = setInterval(() => setTick((n) => n + 1), 1e3);
    return () => clearInterval(id);
  }, []);
  const elapsed = Date.now() - since;
  const sec = Math.floor(elapsed / 1e3);
  const tone = kind === "post" ? elapsed < 4 * 36e5 ? "text-success" : elapsed < 12 * 36e5 ? "text-warning-foreground" : "text-destructive" : timerTone(sec);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("font-mono text-xs tabular-nums font-semibold", tone), "data-tsd-source": "/src/routes/visit-war.tsx:448:5", children: fmtElapsed(elapsed) });
}
__name(LiveTimer, "LiveTimer");
__name2(LiveTimer, "LiveTimer");
function Countdown({
  to
}) {
  const [tick, setTick] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const id = setInterval(() => setTick((n) => n + 1), 1e3);
    return () => clearInterval(id);
  }, []);
  const ms = to - Date.now();
  if (ms <= 0) return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-destructive font-semibold", "data-tsd-source": "/src/routes/visit-war.tsx:459:23", children: "NOW" });
  const tone = ms < 15 * 6e4 ? "text-destructive" : ms < 60 * 6e4 ? "text-warning-foreground" : "text-info";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: cn("font-mono text-xs tabular-nums font-semibold", tone), "data-tsd-source": "/src/routes/visit-war.tsx:461:10", children: [
    "in ",
    fmtElapsed(ms)
  ] });
}
__name(Countdown, "Countdown");
__name2(Countdown, "Countdown");
function UpcomingPanel({
  list,
  mounted,
  onFocus
}) {
  if (list.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm py-16 text-center text-muted-foreground", "data-tsd-source": "/src/routes/visit-war.tsx:470:12", children: "No visits scheduled in the next 24 hours." });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", "data-tsd-source": "/src/routes/visit-war.tsx:473:5", children: list.map((v) => {
    const ms = v.scheduledAt - Date.now();
    const risk = ms < 30 * 6e4 ? "high" : ms < 2 * 36e5 ? "med" : "low";
    const riskCls = risk === "high" ? "border-l-destructive" : risk === "med" ? "border-l-warning" : "border-l-info";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: cn("p-3 border-l-4 hover:bg-muted/40 transition-colors cursor-pointer", riskCls), onClick: /* @__PURE__ */ __name2(() => onFocus(v.tourId), "onClick"), "data-tsd-source": "/src/routes/visit-war.tsx:479:11", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 flex-wrap", "data-tsd-source": "/src/routes/visit-war.tsx:481:13", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", "data-tsd-source": "/src/routes/visit-war.tsx:482:15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold truncate", "data-tsd-source": "/src/routes/visit-war.tsx:483:17", children: v.leadName }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground", "data-tsd-source": "/src/routes/visit-war.tsx:484:17", children: [
          v.propertyName,
          " · ",
          v.propertyArea,
          " · ",
          v.tcmName
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", "data-tsd-source": "/src/routes/visit-war.tsx:488:15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-mono tabular-nums text-muted-foreground", "data-tsd-source": "/src/routes/visit-war.tsx:489:17", children: mounted ? new Date(v.scheduledAt).toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit"
        }) : "--:--" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Countdown, { to: v.scheduledAt, "data-tsd-source": "/src/routes/visit-war.tsx:492:17" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: cn("uppercase", risk === "high" ? "border-destructive/40 bg-destructive/10 text-destructive" : risk === "med" ? "border-warning/40 bg-warning/15 text-warning-foreground" : "border-info/40 bg-info/10 text-info"), "data-tsd-source": "/src/routes/visit-war.tsx:494:15", children: risk === "high" ? "Imminent" : risk === "med" ? "Soon" : "Scheduled" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4 text-muted-foreground", "data-tsd-source": "/src/routes/visit-war.tsx:500:15" })
    ] }) }, v.tourId);
  }) });
}
__name(UpcomingPanel, "UpcomingPanel");
__name2(UpcomingPanel, "UpcomingPanel");
function LiveBoard({
  list,
  now,
  mounted,
  onFocus,
  focus
}) {
  if (list.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm py-16 text-center text-muted-foreground", "data-tsd-source": "/src/routes/visit-war.tsx:517:12", children: "No active visits. Schedule one from the Impact Queue to begin." });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", "data-tsd-source": "/src/routes/visit-war.tsx:520:5", children: list.map((v) => {
    const prob = probabilityFor(v.reaction, v.objections.length, v.stage);
    const latestObj = v.objections[0];
    const isFocus = focus === v.tourId;
    const leftTint = v.escalated ? "border-l-destructive" : v.warnedAtRisk ? "border-l-warning" : v.stage === "tour-ongoing" ? "border-l-warning" : v.stage === "at-property" ? "border-l-success" : v.stage === "started" ? "border-l-info" : "border-l-muted";
    const sec = v.startedAt ? Math.floor((now - v.startedAt) / 1e3) : 0;
    const postSec = v.completedAt ? Math.floor((now - v.completedAt) / 1e3) : 0;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { onClick: /* @__PURE__ */ __name2(() => onFocus(v.tourId), "onClick"), className: cn("p-3 border-l-4 cursor-pointer transition-all hover:bg-muted/40", leftTint, isFocus && "ring-2 ring-accent/40 bg-muted/40"), "data-tsd-source": "/src/routes/visit-war.tsx:534:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-2 items-center", "data-tsd-source": "/src/routes/visit-war.tsx:541:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 md:col-span-3 min-w-0", "data-tsd-source": "/src/routes/visit-war.tsx:542:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold truncate", "data-tsd-source": "/src/routes/visit-war.tsx:543:17", children: v.leadName }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground font-mono", "data-tsd-source": "/src/routes/visit-war.tsx:544:17", children: [
            "••",
            v.leadPhone.slice(-4),
            " · ",
            v.tcmName
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-6 md:col-span-3 min-w-0", "data-tsd-source": "/src/routes/visit-war.tsx:548:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs truncate font-medium", "data-tsd-source": "/src/routes/visit-war.tsx:549:17", children: v.propertyName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", "data-tsd-source": "/src/routes/visit-war.tsx:550:17", children: v.propertyArea })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-3 md:col-span-1 text-[11px] font-mono text-muted-foreground tabular-nums", "data-tsd-source": "/src/routes/visit-war.tsx:552:15", children: mounted ? new Date(v.scheduledAt).toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false
        }) : "--:--" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-3 md:col-span-2 flex flex-col gap-1 items-start", "data-tsd-source": "/src/routes/visit-war.tsx:555:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(StagePill, { stage: v.stage, "data-tsd-source": "/src/routes/visit-war.tsx:556:17" }),
          v.escalated && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "destructive", className: "text-[9px] h-4 px-1 animate-pulse", "data-tsd-source": "/src/routes/visit-war.tsx:557:33", children: "ESCALATE" }),
          !v.escalated && v.warnedAtRisk && v.stage !== "completed" && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[9px] h-4 px-1 border-warning/40 bg-warning/15 text-warning-foreground", "data-tsd-source": "/src/routes/visit-war.tsx:559:19", children: "At Risk" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-6 md:col-span-1", "data-tsd-source": "/src/routes/visit-war.tsx:562:15", children: [
          v.startedAt && !v.completedAt && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/routes/visit-war.tsx:564:19", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase text-muted-foreground tracking-wider", "data-tsd-source": "/src/routes/visit-war.tsx:565:21", children: "Visit" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("font-mono text-xs tabular-nums font-semibold", timerTone(sec)), "data-tsd-source": "/src/routes/visit-war.tsx:566:21", children: fmtElapsed(now - v.startedAt) })
          ] }),
          v.completedAt && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/routes/visit-war.tsx:572:19", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase text-muted-foreground tracking-wider", "data-tsd-source": "/src/routes/visit-war.tsx:573:21", children: "Post" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("font-mono text-xs tabular-nums font-semibold", postSec < 4 * 3600 ? "text-success" : postSec < 12 * 3600 ? "text-warning-foreground" : "text-destructive"), "data-tsd-source": "/src/routes/visit-war.tsx:574:21", children: fmtElapsed(now - v.completedAt) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-6 md:col-span-1 flex justify-end", "data-tsd-source": "/src/routes/visit-war.tsx:581:15", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: cn("font-mono font-bold tabular-nums", probTone(prob)), "data-tsd-source": "/src/routes/visit-war.tsx:582:17", children: [
          prob,
          "%"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-12 md:col-span-1 flex md:justify-end", "data-tsd-source": "/src/routes/visit-war.tsx:584:15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NextActionButton, { v, onClick: /* @__PURE__ */ __name2(() => onFocus(v.tourId), "onClick"), "data-tsd-source": "/src/routes/visit-war.tsx:585:17" }) })
      ] }),
      latestObj && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 pt-2 border-t border-border/60 flex items-center gap-2 text-[11px]", "data-tsd-source": "/src/routes/visit-war.tsx:589:15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-3 w-3 text-warning-foreground", "data-tsd-source": "/src/routes/visit-war.tsx:590:17" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-warning-foreground font-semibold uppercase", "data-tsd-source": "/src/routes/visit-war.tsx:591:17", children: [
          latestObj.category,
          " · ",
          latestObj.subType
        ] }),
        latestObj.customerSaid && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground italic truncate", "data-tsd-source": "/src/routes/visit-war.tsx:592:44", children: [
          '"',
          latestObj.customerSaid,
          '"'
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 pt-2 border-t border-border/60", onClick: /* @__PURE__ */ __name2((e) => e.stopPropagation(), "onClick"), "data-tsd-source": "/src/routes/visit-war.tsx:595:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(VisitCopyChips, { v, layout: "inline", "data-tsd-source": "/src/routes/visit-war.tsx:596:15" }) })
    ] }, v.tourId);
  }) });
}
__name(LiveBoard, "LiveBoard");
__name2(LiveBoard, "LiveBoard");
function NextActionButton({
  v,
  onClick
}) {
  let label = "Open";
  if (v.stage === "scheduled") label = "Mark Started";
  else if (v.stage === "started" || v.stage === "at-property") label = "Capture";
  else if (v.stage === "tour-ongoing") label = "Complete";
  else if (v.stage === "completed") label = !v.outcome || v.outcome === "thinking" ? "Set Outcome" : "Log Objection";
  else if (v.stage === "objection") label = "Log Objection";
  else if (v.stage === "follow-up") label = "Close";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "h-7 text-[11px] gap-1", onClick: /* @__PURE__ */ __name2((e) => {
    e.stopPropagation();
    onClick();
  }, "onClick"), "data-tsd-source": "/src/routes/visit-war.tsx:614:5", children: [
    label,
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3 w-3", "data-tsd-source": "/src/routes/visit-war.tsx:615:15" })
  ] });
}
__name(NextActionButton, "NextActionButton");
__name2(NextActionButton, "NextActionButton");
function HotRoom({
  list,
  now,
  onFocus
}) {
  if (list.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm py-16 text-center text-muted-foreground", "data-tsd-source": "/src/routes/visit-war.tsx:626:12", children: "No hot leads in the 24-hour window." });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", "data-tsd-source": "/src/routes/visit-war.tsx:629:5", children: list.sort((a, b) => (a.completedAt ?? 0) - (b.completedAt ?? 0)).map((v) => {
    const remaining = 24 * 36e5 - (now - (v.completedAt ?? now));
    const hrsLeft = Math.max(0, Math.floor(remaining / 36e5));
    const prob = probabilityFor(v.reaction, v.objections.length, v.stage);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { onClick: /* @__PURE__ */ __name2(() => onFocus(v.tourId), "onClick"), className: "p-3 border-l-4 border-l-accent cursor-pointer hover:bg-muted/40 transition-colors", "data-tsd-source": "/src/routes/visit-war.tsx:635:11", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 flex-wrap", "data-tsd-source": "/src/routes/visit-war.tsx:637:13", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl bg-accent/15 text-accent flex items-center justify-center shrink-0", "data-tsd-source": "/src/routes/visit-war.tsx:638:15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "h-5 w-5", "data-tsd-source": "/src/routes/visit-war.tsx:639:17" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", "data-tsd-source": "/src/routes/visit-war.tsx:641:15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold truncate", "data-tsd-source": "/src/routes/visit-war.tsx:642:17", children: v.leadName }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground", "data-tsd-source": "/src/routes/visit-war.tsx:643:17", children: [
          v.propertyName,
          " · ",
          v.propertyArea
        ] }),
        v.objections[0] && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] mt-0.5 text-warning-foreground", "data-tsd-source": "/src/routes/visit-war.tsx:645:19", children: [
          "Latest: ",
          v.objections[0].subType,
          ' — "',
          v.objections[0].customerSaid.slice(0, 60),
          '"'
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", "data-tsd-source": "/src/routes/visit-war.tsx:650:15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase text-muted-foreground tracking-wider", "data-tsd-source": "/src/routes/visit-war.tsx:651:17", children: "Window" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("font-mono text-sm font-bold", hrsLeft < 6 ? "text-destructive" : "text-warning-foreground"), "data-tsd-source": "/src/routes/visit-war.tsx:652:17", children: [
          hrsLeft,
          "h left"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: cn("font-mono font-bold", probTone(prob)), "data-tsd-source": "/src/routes/visit-war.tsx:656:15", children: [
        prob,
        "%"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", "data-tsd-source": "/src/routes/visit-war.tsx:657:15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "icon", variant: "default", className: "h-8 w-8", onClick: /* @__PURE__ */ __name2((e) => e.stopPropagation(), "onClick"), "data-tsd-source": "/src/routes/visit-war.tsx:658:17", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${v.leadPhone}`, "data-tsd-source": "/src/routes/visit-war.tsx:659:19", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/routes/visit-war.tsx:659:50" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "icon", variant: "outline", className: "h-8 w-8 border-success/40 text-success hover:bg-success/10", onClick: /* @__PURE__ */ __name2((e) => e.stopPropagation(), "onClick"), "data-tsd-source": "/src/routes/visit-war.tsx:661:17", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `https://wa.me/${v.leadPhone.replace(/\D/g, "")}`, target: "_blank", rel: "noreferrer", "data-tsd-source": "/src/routes/visit-war.tsx:662:19", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/routes/visit-war.tsx:663:21" }) }) })
      ] })
    ] }) }, v.tourId);
  }) });
}
__name(HotRoom, "HotRoom");
__name2(HotRoom, "HotRoom");
function WarRoomStats({
  list
}) {
  const today = /* @__PURE__ */ new Date();
  today.setHours(0, 0, 0, 0);
  const todayMs = +today;
  const todays = list.filter((v) => v.scheduledAt >= todayMs);
  const scheduled = todays.length;
  const started = todays.filter((v) => v.startedAt).length;
  const completed = todays.filter((v) => v.completedAt).length;
  const booked = todays.filter((v) => v.outcome === "booked").length;
  const lost = todays.filter((v) => v.outcome === "lost").length;
  const conv = completed > 0 ? Math.round(booked / completed * 100) : 0;
  const durations = todays.filter((v) => v.startedAt && v.completedAt).map((v) => (v.completedAt - v.startedAt) / 6e4);
  const avgDur = durations.length ? Math.round(durations.reduce((a, b) => a + b, 0) / durations.length) : 0;
  const objCount = {};
  list.forEach((v) => v.objections.forEach((o) => {
    objCount[o.subType] = (objCount[o.subType] ?? 0) + 1;
  }));
  const topObj = Object.entries(objCount).sort((a, b) => b[1] - a[1])[0];
  const propCount = {};
  todays.forEach((v) => {
    propCount[v.propertyName] = (propCount[v.propertyName] ?? 0) + 1;
  });
  const topProp = Object.entries(propCount).sort((a, b) => b[1] - a[1])[0];
  const closerCount = {};
  todays.filter((v) => v.outcome === "booked").forEach((v) => {
    closerCount[v.tcmName] = (closerCount[v.tcmName] ?? 0) + 1;
  });
  const topCloser = Object.entries(closerCount).sort((a, b) => b[1] - a[1])[0];
  const zoneCount = {};
  todays.forEach((v) => {
    zoneCount[v.propertyArea] = (zoneCount[v.propertyArea] ?? 0) + 1;
  });
  const maxZone = Math.max(1, ...Object.values(zoneCount));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-tsd-source": "/src/routes/visit-war.tsx:710:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3", "data-tsd-source": "/src/routes/visit-war.tsx:711:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Scheduled", value: scheduled, "data-tsd-source": "/src/routes/visit-war.tsx:712:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Started", value: started, tone: "info", "data-tsd-source": "/src/routes/visit-war.tsx:713:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Completed", value: completed, tone: "info", "data-tsd-source": "/src/routes/visit-war.tsx:714:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Booked", value: booked, tone: "success", "data-tsd-source": "/src/routes/visit-war.tsx:715:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Conversion", value: `${conv}%`, tone: "accent", "data-tsd-source": "/src/routes/visit-war.tsx:716:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Lost", value: lost, tone: "destructive", "data-tsd-source": "/src/routes/visit-war.tsx:717:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Avg duration", value: `${avgDur}m`, tone: "warning", "data-tsd-source": "/src/routes/visit-war.tsx:718:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Top objection", value: topObj ? `${topObj[0]}` : "—", sub: topObj ? `${topObj[1]} times` : "", tone: "warning", "data-tsd-source": "/src/routes/visit-war.tsx:719:9" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", "data-tsd-source": "/src/routes/visit-war.tsx:722:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4", "data-tsd-source": "/src/routes/visit-war.tsx:723:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-wider mb-3 text-muted-foreground font-semibold", "data-tsd-source": "/src/routes/visit-war.tsx:724:11", children: "Visits by zone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", "data-tsd-source": "/src/routes/visit-war.tsx:725:11", children: [
          Object.entries(zoneCount).length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/routes/visit-war.tsx:726:56", children: "No data yet." }),
          Object.entries(zoneCount).map(([z, c]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", "data-tsd-source": "/src/routes/visit-war.tsx:728:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-28 text-xs truncate", "data-tsd-source": "/src/routes/visit-war.tsx:729:17", children: z }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-2 rounded-full bg-muted overflow-hidden", "data-tsd-source": "/src/routes/visit-war.tsx:730:17", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full rounded-full bg-accent", style: {
              width: `${c / maxZone * 100}%`
            }, "data-tsd-source": "/src/routes/visit-war.tsx:731:19" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 text-right font-mono text-xs text-muted-foreground tabular-nums", "data-tsd-source": "/src/routes/visit-war.tsx:733:17", children: c })
          ] }, z))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4", "data-tsd-source": "/src/routes/visit-war.tsx:739:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-wider mb-3 text-muted-foreground font-semibold", "data-tsd-source": "/src/routes/visit-war.tsx:740:11", children: "Spotlight" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", "data-tsd-source": "/src/routes/visit-war.tsx:741:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SpotRow, { icon: Building2, label: "Top property", value: topProp ? `${topProp[0]} (${topProp[1]} visits)` : "—", tone: "info", "data-tsd-source": "/src/routes/visit-war.tsx:742:13" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SpotRow, { icon: TrendingUp, label: "Top closer", value: topCloser ? `${topCloser[0]} (${topCloser[1]} books)` : "—", tone: "success", "data-tsd-source": "/src/routes/visit-war.tsx:743:13" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SpotRow, { icon: TriangleAlert, label: "Top objection", value: topObj ? `${topObj[0]} (${topObj[1]})` : "—", tone: "warning", "data-tsd-source": "/src/routes/visit-war.tsx:744:13" })
        ] })
      ] })
    ] })
  ] });
}
__name(WarRoomStats, "WarRoomStats");
__name2(WarRoomStats, "WarRoomStats");
function StatCard({
  label,
  value,
  sub,
  tone
}) {
  const valCls = tone === "info" ? "text-info" : tone === "warning" ? "text-warning-foreground" : tone === "success" ? "text-success" : tone === "destructive" ? "text-destructive" : tone === "accent" ? "text-accent" : "text-foreground";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-3", "data-tsd-source": "/src/routes/visit-war.tsx:760:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground font-semibold", "data-tsd-source": "/src/routes/visit-war.tsx:761:7", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("text-2xl font-bold tabular-nums mt-1 truncate", valCls), "data-tsd-source": "/src/routes/visit-war.tsx:762:7", children: value }),
    sub && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground mt-0.5", "data-tsd-source": "/src/routes/visit-war.tsx:763:15", children: sub })
  ] });
}
__name(StatCard, "StatCard");
__name2(StatCard, "StatCard");
function SpotRow({
  icon: Icon,
  label,
  value,
  tone
}) {
  const cls = tone === "info" ? "text-info bg-info/10" : tone === "warning" ? "text-warning-foreground bg-warning/15" : "text-success bg-success/10";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", "data-tsd-source": "/src/routes/visit-war.tsx:771:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("h-9 w-9 rounded-lg flex items-center justify-center", cls), "data-tsd-source": "/src/routes/visit-war.tsx:772:7", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4", "data-tsd-source": "/src/routes/visit-war.tsx:773:9" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", "data-tsd-source": "/src/routes/visit-war.tsx:775:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", "data-tsd-source": "/src/routes/visit-war.tsx:776:9", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold truncate", "data-tsd-source": "/src/routes/visit-war.tsx:777:9", children: value })
    ] })
  ] });
}
__name(SpotRow, "SpotRow");
__name2(SpotRow, "SpotRow");
function AlertFeed() {
  const {
    alerts
  } = useVisitWar();
  if (alerts.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm py-16 text-center text-muted-foreground", "data-tsd-source": "/src/routes/visit-war.tsx:790:12", children: "No alerts. The system pings when something needs attention." });
  }
  const tone = /* @__PURE__ */ __name2((s) => s === "risk" ? "border-l-destructive bg-destructive/5" : s === "warn" ? "border-l-warning bg-warning/5" : s === "win" ? "border-l-success bg-success/5" : "border-l-info bg-info/5", "tone");
  const tagTone = /* @__PURE__ */ __name2((s) => s === "risk" ? "text-destructive" : s === "warn" ? "text-warning-foreground" : s === "win" ? "text-success" : "text-info", "tagTone");
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", "data-tsd-source": "/src/routes/visit-war.tsx:802:5", children: alerts.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: cn("p-2.5 border-l-4 flex items-center gap-3", tone(a.severity)), "data-tsd-source": "/src/routes/visit-war.tsx:804:9", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[11px] w-20 text-muted-foreground tabular-nums", "data-tsd-source": "/src/routes/visit-war.tsx:805:11", children: new Date(a.ts).toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("text-[10px] font-bold uppercase tracking-wider", tagTone(a.severity)), "data-tsd-source": "/src/routes/visit-war.tsx:808:11", children: a.kind }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs flex-1", "data-tsd-source": "/src/routes/visit-war.tsx:809:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("b", { className: "text-foreground", "data-tsd-source": "/src/routes/visit-war.tsx:810:13", children: a.leadName }),
      " — ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", "data-tsd-source": "/src/routes/visit-war.tsx:810:63", children: a.message })
    ] })
  ] }, a.id)) });
}
__name(AlertFeed, "AlertFeed");
__name2(AlertFeed, "AlertFeed");
function VisitDetailPanel({
  v,
  onClose,
  onPatch,
  onAddObjection,
  onAlert
}) {
  const prob = probabilityFor(v.reaction, v.objections.length, v.stage);
  const [cat, setCat] = reactExports.useState("budget");
  const [sub, setSub] = reactExports.useState(OBJECTION_CATALOG.budget[0]);
  const [said, setSaid] = reactExports.useState("");
  const [resp, setResp] = reactExports.useState("");
  const [res, setRes] = reactExports.useState("partial");
  const replay = [];
  replay.push({
    ts: v.scheduledAt,
    label: "Visit scheduled",
    tone: "info"
  });
  if (v.startedAt) replay.push({
    ts: v.startedAt,
    label: `Started — ${v.startedMode ?? "on the way"}`,
    tone: "info"
  });
  if (v.reachedAt) replay.push({
    ts: v.reachedAt,
    label: "Reached property",
    tone: "success"
  });
  if (v.ongoingAt) replay.push({
    ts: v.ongoingAt,
    label: "Tour started",
    tone: "info"
  });
  if (v.completedAt) replay.push({
    ts: v.completedAt,
    label: "Tour completed",
    tone: "success"
  });
  v.objections.forEach((o) => replay.push({
    ts: o.ts,
    label: `Objection · ${o.subType}`,
    tone: o.resolution === "resolved" ? "success" : o.resolution === "unresolved" ? "risk" : "warn"
  }));
  if (v.outcome === "booked") replay.push({
    ts: v.lastUpdateAt,
    label: "Booking confirmed 🎉",
    tone: "success"
  });
  if (v.outcome === "lost") replay.push({
    ts: v.lastUpdateAt,
    label: `Lost · ${v.lostReason ?? "—"}`,
    tone: "risk"
  });
  replay.sort((a, b) => a.ts - b.ts);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col max-h-[calc(100vh-200px)]", "data-tsd-source": "/src/routes/visit-war.tsx:851:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-b bg-muted/30 flex items-center gap-2", "data-tsd-source": "/src/routes/visit-war.tsx:853:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", "data-tsd-source": "/src/routes/visit-war.tsx:854:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold truncate", "data-tsd-source": "/src/routes/visit-war.tsx:855:11", children: v.leadName }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground font-mono", "data-tsd-source": "/src/routes/visit-war.tsx:856:11", children: [
          "••",
          v.leadPhone.slice(-4),
          " · ",
          v.propertyName
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", variant: "ghost", className: "h-7 w-7", onClick: onClose, "data-tsd-source": "/src/routes/visit-war.tsx:860:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4", "data-tsd-source": "/src/routes/visit-war.tsx:860:83" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto p-4 space-y-4", "data-tsd-source": "/src/routes/visit-war.tsx:863:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap p-2 rounded-lg bg-muted/40", "data-tsd-source": "/src/routes/visit-war.tsx:865:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StagePill, { stage: v.stage, "data-tsd-source": "/src/routes/visit-war.tsx:866:11" }),
        v.startedAt && !v.completedAt && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-[10px] text-muted-foreground", "data-tsd-source": "/src/routes/visit-war.tsx:868:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3", "data-tsd-source": "/src/routes/visit-war.tsx:869:15" }),
          " Visit ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(LiveTimer, { since: v.startedAt, kind: "visit", "data-tsd-source": "/src/routes/visit-war.tsx:869:51" })
        ] }),
        v.startedAt && v.reachedAt && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground", "data-tsd-source": "/src/routes/visit-war.tsx:873:13", children: [
          "Journey ",
          Math.round((v.reachedAt - v.startedAt) / 6e4),
          "m"
        ] }),
        v.completedAt && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-[10px] text-muted-foreground", "data-tsd-source": "/src/routes/visit-war.tsx:878:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3", "data-tsd-source": "/src/routes/visit-war.tsx:879:15" }),
          " Post ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(LiveTimer, { since: v.completedAt, kind: "post", "data-tsd-source": "/src/routes/visit-war.tsx:879:50" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: cn("ml-auto font-mono font-bold", probTone(prob)), "data-tsd-source": "/src/routes/visit-war.tsx:882:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Gauge, { className: "h-3 w-3 mr-1", "data-tsd-source": "/src/routes/visit-war.tsx:883:13" }),
          " ",
          prob,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "1 · Scheduled", "data-tsd-source": "/src/routes/visit-war.tsx:887:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(KV, { k: "Time", v: new Date(v.scheduledAt).toLocaleString("en-IN", {
          dateStyle: "medium",
          timeStyle: "short"
        }), "data-tsd-source": "/src/routes/visit-war.tsx:888:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(KV, { k: "Property", v: `${v.propertyName} · ${v.propertyArea}`, "data-tsd-source": "/src/routes/visit-war.tsx:889:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(KV, { k: "Coordinator", v: v.tcmName, "data-tsd-source": "/src/routes/visit-war.tsx:890:11" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "2 · Visit Started", "data-tsd-source": "/src/routes/visit-war.tsx:893:9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ButtonRow, { "data-tsd-source": "/src/routes/visit-war.tsx:894:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ActBtn, { label: "On The Way", tone: "info", active: v.startedMode === "on-the-way", onClick: /* @__PURE__ */ __name2(() => {
          onPatch({
            stage: "started",
            startedMode: "on-the-way",
            startedAt: v.startedAt ?? Date.now()
          });
          onAlert("info", "started", "Customer on the way");
        }, "onClick"), "data-tsd-source": "/src/routes/visit-war.tsx:895:13" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ActBtn, { label: "Reached", tone: "success", active: v.startedMode === "reached", onClick: /* @__PURE__ */ __name2(() => {
          onPatch({
            stage: "at-property",
            startedMode: "reached",
            startedAt: v.startedAt ?? Date.now(),
            reachedAt: Date.now()
          });
          onAlert("win", "reached", "Reached property");
        }, "onClick"), "data-tsd-source": "/src/routes/visit-war.tsx:899:13" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ActBtn, { label: "Delayed", tone: "warning", active: v.startedMode === "delayed", onClick: /* @__PURE__ */ __name2(() => {
          onPatch({
            startedMode: "delayed"
          });
          onAlert("warn", "delay", "Customer delayed");
        }, "onClick"), "data-tsd-source": "/src/routes/visit-war.tsx:903:13" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ActBtn, { label: "No Show", tone: "destructive", active: v.startedMode === "no-show", onClick: /* @__PURE__ */ __name2(() => {
          onPatch({
            stage: "lost",
            startedMode: "no-show",
            outcome: "lost"
          });
          onAlert("risk", "lost", "No-show");
        }, "onClick"), "data-tsd-source": "/src/routes/visit-war.tsx:907:13" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "3 · Tour Ongoing · Reaction", "data-tsd-source": "/src/routes/visit-war.tsx:914:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ButtonRow, { "data-tsd-source": "/src/routes/visit-war.tsx:915:11", children: ["loved", "interested", "comparing", "average", "rejected"].map((r) => {
        const emoji = {
          loved: "😍",
          interested: "🙂",
          comparing: "🤔",
          average: "😐",
          rejected: "❌"
        }[r];
        const active = v.reaction === r;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: active ? "default" : "outline", className: "h-8 gap-1 capitalize", onClick: /* @__PURE__ */ __name2(() => onPatch({
          reaction: r,
          stage: v.stage === "completed" ? "completed" : "tour-ongoing",
          ongoingAt: v.ongoingAt ?? Date.now()
        }), "onClick"), "data-tsd-source": "/src/routes/visit-war.tsx:920:17", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-tsd-source": "/src/routes/visit-war.tsx:927:19", children: emoji }),
          r
        ] }, r);
      }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "4 · Visit Done · Decision", "data-tsd-source": "/src/routes/visit-war.tsx:934:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ButtonRow, { "data-tsd-source": "/src/routes/visit-war.tsx:935:11", children: [["ready-to-book", "Ready To Book", "success"], ["needs-discussion", "Needs Discussion", void 0], ["comparing-options", "Comparing", void 0], ["parent-approval", "Parent Approval", void 0], ["budget-pending", "Budget Pending", void 0], ["not-interested", "Not Interested", "destructive"]].map(([d, label, tone]) => /* @__PURE__ */ jsxRuntimeExports.jsx(ActBtn, { label, tone, active: v.decision === d, onClick: /* @__PURE__ */ __name2(() => {
        onPatch({
          decision: d,
          stage: d === "not-interested" ? "lost" : "completed",
          completedAt: v.completedAt ?? Date.now(),
          outcome: d === "ready-to-book" ? "thinking" : d === "not-interested" ? "lost" : "thinking"
        });
        onAlert(d === "not-interested" ? "risk" : "info", "completed", `Visit done · ${label}`);
      }, "onClick"), "data-tsd-source": "/src/routes/visit-war.tsx:944:15" }, d)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "5 · Objection Tracker", "data-tsd-source": "/src/routes/visit-war.tsx:958:9", children: [
        v.objections.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5 mb-3", "data-tsd-source": "/src/routes/visit-war.tsx:960:13", children: v.objections.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 rounded-lg bg-muted/50 text-[11px] border", "data-tsd-source": "/src/routes/visit-war.tsx:962:17", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", "data-tsd-source": "/src/routes/visit-war.tsx:963:19", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[9px] uppercase border-warning/40 bg-warning/15 text-warning-foreground", "data-tsd-source": "/src/routes/visit-war.tsx:964:21", children: o.category }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", "data-tsd-source": "/src/routes/visit-war.tsx:965:21", children: o.subType }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: cn("ml-auto text-[9px] uppercase", o.resolution === "resolved" ? "border-success/40 bg-success/10 text-success" : o.resolution === "partial" ? "border-warning/40 bg-warning/15 text-warning-foreground" : "border-destructive/40 bg-destructive/10 text-destructive"), "data-tsd-source": "/src/routes/visit-war.tsx:966:21", children: o.resolution })
          ] }),
          o.customerSaid && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-foreground", "data-tsd-source": "/src/routes/visit-war.tsx:973:38", children: [
            '"',
            o.customerSaid,
            '"'
          ] }),
          o.salesResponse && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-0.5 italic text-muted-foreground", "data-tsd-source": "/src/routes/visit-war.tsx:974:39", children: [
            "→ ",
            o.salesResponse
          ] })
        ] }, o.id)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 mb-2", "data-tsd-source": "/src/routes/visit-war.tsx:979:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: cat, onValueChange: /* @__PURE__ */ __name2((c) => {
            setCat(c);
            setSub(OBJECTION_CATALOG[c][0]);
          }, "onValueChange"), "data-tsd-source": "/src/routes/visit-war.tsx:980:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 text-xs", "data-tsd-source": "/src/routes/visit-war.tsx:981:15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { "data-tsd-source": "/src/routes/visit-war.tsx:981:54" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { "data-tsd-source": "/src/routes/visit-war.tsx:982:15", children: Object.keys(OBJECTION_CATALOG).map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, className: "capitalize", "data-tsd-source": "/src/routes/visit-war.tsx:983:60", children: c }, c)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: sub, onValueChange: setSub, "data-tsd-source": "/src/routes/visit-war.tsx:986:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 text-xs", "data-tsd-source": "/src/routes/visit-war.tsx:987:15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { "data-tsd-source": "/src/routes/visit-war.tsx:987:54" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { "data-tsd-source": "/src/routes/visit-war.tsx:988:15", children: OBJECTION_CATALOG[cat].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, "data-tsd-source": "/src/routes/visit-war.tsx:989:52", children: s }, s)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { value: said, onChange: /* @__PURE__ */ __name2((e) => setSaid(e.target.value), "onChange"), rows: 2, placeholder: 'Customer exact words — "my office is 8 km away..."', className: "text-xs mb-2", "data-tsd-source": "/src/routes/visit-war.tsx:993:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { value: resp, onChange: /* @__PURE__ */ __name2((e) => setResp(e.target.value), "onChange"), rows: 2, placeholder: "Sales response — what did you say back?", className: "text-xs mb-2", "data-tsd-source": "/src/routes/visit-war.tsx:996:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", "data-tsd-source": "/src/routes/visit-war.tsx:999:11", children: [
          ["resolved", "partial", "unresolved"].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: res === r ? "default" : "outline", className: cn("h-7 text-[11px] capitalize", res === r && r === "resolved" && "bg-success hover:bg-success/90", res === r && r === "unresolved" && "bg-destructive hover:bg-destructive/90"), onClick: /* @__PURE__ */ __name2(() => setRes(r), "onClick"), "data-tsd-source": "/src/routes/visit-war.tsx:1001:15", children: r }, r)),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "ml-auto h-7 text-[11px] gap-1", onClick: /* @__PURE__ */ __name2(() => {
            if (!sub) return;
            onAddObjection({
              category: cat,
              subType: sub,
              customerSaid: said,
              salesResponse: resp,
              resolution: res
            });
            setSaid("");
            setResp("");
            setRes("partial");
          }, "onClick"), "data-tsd-source": "/src/routes/visit-war.tsx:1008:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3 w-3", "data-tsd-source": "/src/routes/visit-war.tsx:1014:15" }),
            " Log"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "6 · Follow-up Stage", "data-tsd-source": "/src/routes/visit-war.tsx:1019:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-1.5", "data-tsd-source": "/src/routes/visit-war.tsx:1020:11", children: [["fu-1", "Follow-up 1"], ["fu-2", "Follow-up 2"], ["fu-3", "Follow-up 3"], ["negotiation", "Negotiation"], ["waiting-salary", "Wait · Salary"], ["waiting-joining", "Wait · Joining"], ["waiting-parents", "Wait · Parents"], ["booking-expected", "Booking Expected"]].map(([k, label]) => /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: v.followUpStage === k ? "default" : "outline", className: "h-7 text-[11px] justify-start", onClick: /* @__PURE__ */ __name2(() => onPatch({
        followUpStage: k,
        stage: "follow-up"
      }), "onClick"), "data-tsd-source": "/src/routes/visit-war.tsx:1027:15", children: label }, k)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "7 · Final Outcome", "data-tsd-source": "/src/routes/visit-war.tsx:1036:9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ButtonRow, { "data-tsd-source": "/src/routes/visit-war.tsx:1037:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ActBtn, { label: "✅ Booked", tone: "success", active: v.outcome === "booked", onClick: /* @__PURE__ */ __name2(() => {
          onPatch({
            stage: "booked",
            outcome: "booked"
          });
          onAlert("win", "booked", "Booking closed");
        }, "onClick"), "data-tsd-source": "/src/routes/visit-war.tsx:1038:13" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ActBtn, { label: "🟡 Thinking", active: v.outcome === "thinking", onClick: /* @__PURE__ */ __name2(() => onPatch({
          outcome: "thinking"
        }), "onClick"), "data-tsd-source": "/src/routes/visit-war.tsx:1040:13" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ActBtn, { label: "🔵 Follow-up", tone: "info", active: v.outcome === "follow-up", onClick: /* @__PURE__ */ __name2(() => onPatch({
          outcome: "follow-up",
          stage: "follow-up"
        }), "onClick"), "data-tsd-source": "/src/routes/visit-war.tsx:1041:13" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ActBtn, { label: "🔴 Lost", tone: "destructive", active: v.outcome === "lost", onClick: /* @__PURE__ */ __name2(() => {
          onPatch({
            stage: "lost",
            outcome: "lost"
          });
          onAlert("risk", "lost", "Visit lost");
        }, "onClick"), "data-tsd-source": "/src/routes/visit-war.tsx:1042:13" })
      ] }) }),
      v.outcome === "lost" && /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Why Lost?", "data-tsd-source": "/src/routes/visit-war.tsx:1048:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-1.5", "data-tsd-source": "/src/routes/visit-war.tsx:1049:13", children: [["chose-another-pg", "Chose Another PG"], ["chose-flat", "Chose Flat"], ["cancelled-relocation", "Cancelled Move"], ["budget", "Budget"], ["location", "Location"], ["amenities", "Amenities"], ["family-rejected", "Family Rejected"], ["no-response", "No Response"], ["joined-different-company", "Different Co."], ["college-plan-changed", "College Changed"]].map(([k, label]) => /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: v.lostReason === k ? "destructive" : "outline", className: "h-7 text-[11px] justify-start", onClick: /* @__PURE__ */ __name2(() => onPatch({
        lostReason: k
      }), "onClick"), "data-tsd-source": "/src/routes/visit-war.tsx:1057:17", children: label }, k)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "📼 Visit Replay", "data-tsd-source": "/src/routes/visit-war.tsx:1066:9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 border-l-2 border-border ml-1 pl-3", "data-tsd-source": "/src/routes/visit-war.tsx:1067:11", children: [
        replay.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/routes/visit-war.tsx:1068:37", children: "No events yet." }),
        replay.map((e, i) => {
          const dot = e.tone === "risk" ? "bg-destructive" : e.tone === "warn" ? "bg-warning" : e.tone === "success" ? "bg-success" : "bg-info";
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", "data-tsd-source": "/src/routes/visit-war.tsx:1072:17", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("absolute -left-[17px] top-1.5 h-2 w-2 rounded-full", dot), "data-tsd-source": "/src/routes/visit-war.tsx:1073:19" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2", "data-tsd-source": "/src/routes/visit-war.tsx:1074:19", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-muted-foreground tabular-nums", "data-tsd-source": "/src/routes/visit-war.tsx:1075:21", children: new Date(e.ts).toLocaleTimeString("en-IN", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false
              }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", "data-tsd-source": "/src/routes/visit-war.tsx:1078:21", children: e.label })
            ] })
          ] }, i);
        })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "📲 WhatsApp Copy Block", "data-tsd-source": "/src/routes/visit-war.tsx:1086:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(VisitCopyChips, { v, "data-tsd-source": "/src/routes/visit-war.tsx:1087:11" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "🎯 Coach & Intervention", "data-tsd-source": "/src/routes/visit-war.tsx:1090:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CoachNoteThread, { v, "data-tsd-source": "/src/routes/visit-war.tsx:1091:11" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t p-3 flex gap-2 bg-muted/30", "data-tsd-source": "/src/routes/visit-war.tsx:1096:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "flex-1 gap-1.5", "data-tsd-source": "/src/routes/visit-war.tsx:1097:9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${v.leadPhone}`, "data-tsd-source": "/src/routes/visit-war.tsx:1097:52", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/routes/visit-war.tsx:1097:83" }),
        " Call"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", className: "flex-1 gap-1.5 border-success/40 text-success hover:bg-success/10", "data-tsd-source": "/src/routes/visit-war.tsx:1098:9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `https://wa.me/${v.leadPhone.replace(/\D/g, "")}`, target: "_blank", rel: "noreferrer", "data-tsd-source": "/src/routes/visit-war.tsx:1099:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/routes/visit-war.tsx:1100:13" }),
        " WhatsApp"
      ] }) })
    ] })
  ] });
}
__name(VisitDetailPanel, "VisitDetailPanel");
__name2(VisitDetailPanel, "VisitDetailPanel");
function Section({
  title,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/routes/visit-war.tsx:1114:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.15em] mb-2 text-accent font-bold", "data-tsd-source": "/src/routes/visit-war.tsx:1115:7", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-tsd-source": "/src/routes/visit-war.tsx:1116:7", children })
  ] });
}
__name(Section, "Section");
__name2(Section, "Section");
function KV({
  k,
  v
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[11px] py-0.5", "data-tsd-source": "/src/routes/visit-war.tsx:1123:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", "data-tsd-source": "/src/routes/visit-war.tsx:1124:7", children: k }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", "data-tsd-source": "/src/routes/visit-war.tsx:1125:7", children: v })
  ] });
}
__name(KV, "KV");
__name2(KV, "KV");
function ButtonRow({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", "data-tsd-source": "/src/routes/visit-war.tsx:1131:10", children });
}
__name(ButtonRow, "ButtonRow");
__name2(ButtonRow, "ButtonRow");
function ActBtn({
  label,
  onClick,
  tone,
  active
}) {
  const activeCls = tone === "success" ? "bg-success text-success-foreground hover:bg-success/90" : tone === "destructive" ? "bg-destructive text-destructive-foreground hover:bg-destructive/90" : tone === "warning" ? "bg-warning text-warning-foreground hover:bg-warning/90" : tone === "info" ? "bg-info text-info-foreground hover:bg-info/90" : "";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: active ? "default" : "outline", className: cn("h-8 text-xs", active && activeCls), onClick, "data-tsd-source": "/src/routes/visit-war.tsx:1142:5", children: label });
}
__name(ActBtn, "ActBtn");
__name2(ActBtn, "ActBtn");
const SplitComponent = /* @__PURE__ */ __name2(() => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/visit-war.tsx:49:5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(VisitWarRoom, { "data-tsd-source": "/src/routes/visit-war.tsx:50:7" }) }), "SplitComponent");
export {
  VisitWarRoom,
  SplitComponent as component
};
