var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { b as buildDoNextQueue, c as computeTcmPerformance, A as AppShell, K as KpiCard } from "./AppShell-BN067m2r.mjs";
import { u as useApp, c as useMountedNow } from "./router-xBhBcQRf.mjs";
import { Q as QuickActionRow } from "./QuickActionRow-BKYp8FOe.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { w as Sun, a_ as ArrowUpRight, Z as Zap, O as Trophy, g as TriangleAlert, F as Flame, P as Phone } from "../_libs/lucide-react.mjs";
import { f as format, a as formatDistanceToNow } from "../_libs/date-fns.mjs";

import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/unenv.mjs";




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
function TodayPage() {
  const {
    role,
    currentTcmId,
    leads,
    tours,
    followUps,
    tcms,
    completeFollowUp
  } = useApp();
  const [now, mounted] = useMountedNow(15e3);
  const filterTcm = role === "tcm" ? currentTcmId : void 0;
  const queue = reactExports.useMemo(() => buildDoNextQueue(leads, tours, followUps, now || Date.now(), filterTcm), [leads, tours, followUps, now, filterTcm]);
  const me = role === "tcm" ? tcms.find((t) => t.id === currentTcmId) : null;
  const perf = me ? computeTcmPerformance(me.id, leads, tours, followUps, now || Date.now()) : null;
  const top = queue.slice(0, 12);
  const grouped = groupByKind(queue);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/today.tsx:40:5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", "data-tsd-source": "/src/routes/today.tsx:41:7", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-end justify-between flex-wrap gap-3", "data-tsd-source": "/src/routes/today.tsx:42:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/routes/today.tsx:43:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground mb-1", "data-tsd-source": "/src/routes/today.tsx:44:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/routes/today.tsx:45:15" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-h-[1em]", "data-tsd-source": "/src/routes/today.tsx:46:15", children: mounted ? format(new Date(now), "EEEE, MMMM d · h:mm a") : " " })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-2xl font-semibold tracking-tight", "data-tsd-source": "/src/routes/today.tsx:48:13", children: [
          mounted ? greeting(now) : "Hello",
          me ? `, ${me.name.split(" ")[0]}` : "",
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", "data-tsd-source": "/src/routes/today.tsx:51:13", children: top.length === 0 ? "Inbox zero. Nothing pending right now." : `${queue.length} action${queue.length > 1 ? "s" : ""} ranked. Start at the top.` })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/leads", className: "text-xs text-accent inline-flex items-center gap-1", "data-tsd-source": "/src/routes/today.tsx:57:11", children: [
        "All leads ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3 w-3", "data-tsd-source": "/src/routes/today.tsx:58:23" })
      ] })
    ] }),
    perf && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-3", "data-tsd-source": "/src/routes/today.tsx:64:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { label: "My leads", value: perf.leadCount, sub: `${perf.toursDone} tours done`, "data-tsd-source": "/src/routes/today.tsx:65:13" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { label: "My conversion", value: `${perf.conversion}%`, sub: `${perf.bookings} booked`, tone: "success", "data-tsd-source": "/src/routes/today.tsx:66:13" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { label: "Pending post-tour", value: perf.pendingPostTour, sub: "Fill now", tone: perf.pendingPostTour ? "destructive" : "default", "data-tsd-source": "/src/routes/today.tsx:67:13" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { label: "Discipline score", value: `${perf.discipline}`, sub: "0–100", tone: perf.discipline >= 75 ? "success" : perf.discipline >= 50 ? "warning" : "destructive", "data-tsd-source": "/src/routes/today.tsx:68:13" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border border-border bg-card overflow-hidden", "data-tsd-source": "/src/routes/today.tsx:73:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-center justify-between px-4 py-3 border-b border-border", "data-tsd-source": "/src/routes/today.tsx:74:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", "data-tsd-source": "/src/routes/today.tsx:75:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-4 w-4 text-accent", "data-tsd-source": "/src/routes/today.tsx:76:15" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-sm font-semibold", "data-tsd-source": "/src/routes/today.tsx:77:15", children: "Do this next" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground font-mono", "data-tsd-source": "/src/routes/today.tsx:78:15", children: "live · refreshes every 15s" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-[11px] text-muted-foreground", "data-tsd-source": "/src/routes/today.tsx:80:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { color: "bg-destructive", label: `${grouped.urgent} urgent`, "data-tsd-source": "/src/routes/today.tsx:81:15" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { color: "bg-warning", label: `${grouped.today} today`, "data-tsd-source": "/src/routes/today.tsx:82:15" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { color: "bg-accent", label: `${grouped.hot} hot`, "data-tsd-source": "/src/routes/today.tsx:83:15" })
        ] })
      ] }),
      top.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-12 text-center", "data-tsd-source": "/src/routes/today.tsx:87:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-8 w-8 text-success mx-auto mb-2", "data-tsd-source": "/src/routes/today.tsx:88:15" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-semibold", "data-tsd-source": "/src/routes/today.tsx:89:15", children: "Inbox zero." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", "data-tsd-source": "/src/routes/today.tsx:90:15", children: "Take a breath. New leads will land here automatically." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", "data-tsd-source": "/src/routes/today.tsx:93:13", children: top.map((a) => {
        const lead = leads.find((l) => l.id === a.leadId);
        if (!lead) return null;
        const tone = toneFor(a);
        const onDone = a.kind === "follow-up-overdue" || a.kind === "follow-up-today" ? () => {
          const f = followUps.find((x) => x.leadId === a.leadId && !x.done);
          if (f) completeFollowUp(f.id);
        } : void 0;
        const dueLabel = mounted && a.dueAt ? formatDistanceToNow(new Date(a.dueAt), {
          addSuffix: true
        }) : void 0;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(QuickActionRow, { lead, reason: a.reason, accent: tone, dueLabel, onDone, "data-tsd-source": "/src/routes/today.tsx:108:19" }, `${a.leadId}-${a.kind}`);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4", "data-tsd-source": "/src/routes/today.tsx:123:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { title: "Critical now", icon: TriangleAlert, accent: "destructive", count: grouped.urgent, items: queue.filter((a) => a.kind === "post-tour-overdue" || a.kind === "first-response").slice(0, 5), leads, "data-tsd-source": "/src/routes/today.tsx:124:11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { title: "Hot pipeline", icon: Flame, accent: "accent", count: grouped.hot, items: queue.filter((a) => leads.find((l) => l.id === a.leadId)?.intent === "hot").slice(0, 5), leads, "data-tsd-source": "/src/routes/today.tsx:129:11" })
    ] })
  ] }) });
}
__name(TodayPage, "TodayPage");
__name2(TodayPage, "TodayPage");
function Mini({
  title,
  icon: Icon,
  accent,
  count,
  items,
  leads
}) {
  const {
    selectLead
  } = useApp();
  const cls = accent === "destructive" ? "text-destructive" : "text-accent";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card overflow-hidden", "data-tsd-source": "/src/routes/today.tsx:153:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-center justify-between px-4 py-3 border-b border-border", "data-tsd-source": "/src/routes/today.tsx:154:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", "data-tsd-source": "/src/routes/today.tsx:155:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `h-4 w-4 ${cls}`, "data-tsd-source": "/src/routes/today.tsx:156:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-sm font-semibold", "data-tsd-source": "/src/routes/today.tsx:157:11", children: title })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-mono text-muted-foreground", "data-tsd-source": "/src/routes/today.tsx:159:9", children: count })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2", "data-tsd-source": "/src/routes/today.tsx:161:7", children: [
      items.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground text-center py-6", "data-tsd-source": "/src/routes/today.tsx:163:11", children: "Nothing here." }),
      items.map((a) => {
        const lead = leads.find((l) => l.id === a.leadId);
        if (!lead) return null;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: /* @__PURE__ */ __name2(() => selectLead(lead.id), "onClick"), className: "w-full text-left rounded-md px-2 py-1.5 hover:bg-accent/5 transition-colors flex items-center justify-between gap-2", "data-tsd-source": "/src/routes/today.tsx:169:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", "data-tsd-source": "/src/routes/today.tsx:174:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium truncate", "data-tsd-source": "/src/routes/today.tsx:175:17", children: lead.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground truncate", "data-tsd-source": "/src/routes/today.tsx:176:17", children: a.reason })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5 text-muted-foreground shrink-0", "data-tsd-source": "/src/routes/today.tsx:178:15" })
        ] }, `${a.leadId}-${a.kind}`);
      })
    ] })
  ] });
}
__name(Mini, "Mini");
__name2(Mini, "Mini");
function Legend({
  color,
  label
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", "data-tsd-source": "/src/routes/today.tsx:189:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-1.5 w-1.5 rounded-full ${color}`, "data-tsd-source": "/src/routes/today.tsx:190:7" }),
    " ",
    label
  ] });
}
__name(Legend, "Legend");
__name2(Legend, "Legend");
function greeting(ts) {
  const h = new Date(ts).getHours();
  if (h < 12) return "Good morning";
  if (h < 17) return "Good afternoon";
  return "Good evening";
}
__name(greeting, "greeting");
__name2(greeting, "greeting");
function toneFor(a) {
  if (a.kind === "post-tour-overdue" || a.kind === "first-response" || a.kind === "follow-up-overdue") return "destructive";
  if (a.kind === "no-follow-up") return "warning";
  if (a.kind === "tour-today" || a.kind === "follow-up-today") return "accent";
  return "default";
}
__name(toneFor, "toneFor");
__name2(toneFor, "toneFor");
function groupByKind(queue) {
  return {
    urgent: queue.filter((a) => a.kind === "post-tour-overdue" || a.kind === "first-response" || a.kind === "follow-up-overdue").length,
    today: queue.filter((a) => a.kind === "follow-up-today" || a.kind === "tour-today").length,
    hot: queue.filter((a) => a.score >= 850).length
  };
}
__name(groupByKind, "groupByKind");
__name2(groupByKind, "groupByKind");
export {
  TodayPage as component
};
