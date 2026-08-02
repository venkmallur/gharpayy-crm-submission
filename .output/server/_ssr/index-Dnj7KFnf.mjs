var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { b as buildDoNextQueue, i as intentFor, l as liveConfidence, A as AppShell, K as KpiCard } from "./AppShell-rXFHrudv.mjs";
import { u as useApp, c as useMountedNow, a4 as computePropertyMetrics } from "./router-Cbs6ivkN.mjs";
import { s as scanRevivals } from "./revival-C7pAIsNe.mjs";
import { Q as QuickActionRow } from "./QuickActionRow-BWf6iXRs.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { f as format } from "../_libs/date-fns.mjs";
import { S as Sparkles, a_ as ArrowUpRight, Z as Zap, w as Sun, g as TriangleAlert, F as Flame, J as CalendarPlus, I as IndianRupee, B as Building2, T as TrendingUp } from "../_libs/lucide-react.mjs";
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
function DashboardPage() {
  const {
    leads,
    tours,
    followUps,
    properties,
    role,
    currentTcmId,
    selectLead,
    bookings,
    handoffs
  } = useApp();
  const [now, mounted] = useMountedNow();
  const filterTcm = role === "tcm" ? currentTcmId : void 0;
  const metrics = reactExports.useMemo(() => computePropertyMetrics(properties, leads, tours), [properties, leads, tours]);
  const queue = reactExports.useMemo(() => buildDoNextQueue(leads, tours, followUps, now, filterTcm), [leads, tours, followUps, now, filterTcm]);
  const revivals = reactExports.useMemo(() => scanRevivals(leads, properties, tours, now), [leads, properties, tours, now]);
  const liveLeads = reactExports.useMemo(() => leads.map((l) => ({
    ...l,
    confidence: liveConfidence(l, tours, now),
    intent: intentFor(liveConfidence(l, tours, now))
  })), [leads, tours, now]);
  const hotLeads = liveLeads.filter((l) => l.intent === "hot" && l.stage !== "booked" && l.stage !== "dropped");
  const incompleteTours = tours.filter((t) => t.status === "completed" && !t.postTour.filledAt);
  const todayTours = tours.filter((t) => t.status === "scheduled" && sameDay(+new Date(t.scheduledAt), now));
  const booked = tours.filter((t) => t.decision === "booked").length;
  const conversion = tours.length ? Math.round(booked / tours.length * 100) : 0;
  const overdueFu = followUps.filter((f) => !f.done && +new Date(f.dueAt) < now).length;
  const monthlyRevenue = bookings.reduce((s, b) => s + b.amount, 0);
  const unreadHandoffs = handoffs.filter((h) => !h.read && h.to === role).length;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/index.tsx:53:5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", "data-tsd-source": "/src/routes/index.tsx:54:7", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-end justify-between flex-wrap gap-3", "data-tsd-source": "/src/routes/index.tsx:55:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/routes/index.tsx:56:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-semibold tracking-tight", "data-tsd-source": "/src/routes/index.tsx:57:13", children: "Arena Infrastructure" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", "data-tsd-source": "/src/routes/index.tsx:58:13", children: [
          "Every lead, every tour, every follow-up — one operating layer. ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent font-mono", "data-tsd-source": "/src/routes/index.tsx:59:78", children: "live" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground font-mono min-h-[1em]", "data-tsd-source": "/src/routes/index.tsx:62:11", children: mounted ? format(new Date(now), "EEEE, MMM d · h:mm a") : " " })
    ] }),
    unreadHandoffs > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/handoffs", className: "block rounded-xl border border-info/30 bg-info/5 p-3 hover:bg-info/10 transition-colors", "data-tsd-source": "/src/routes/index.tsx:68:11", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", "data-tsd-source": "/src/routes/index.tsx:69:13", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-info", "data-tsd-source": "/src/routes/index.tsx:70:15" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 text-sm", "data-tsd-source": "/src/routes/index.tsx:71:15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", "data-tsd-source": "/src/routes/index.tsx:72:17", children: [
          unreadHandoffs,
          " unread handoff",
          unreadHandoffs > 1 ? "s" : ""
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", "data-tsd-source": "/src/routes/index.tsx:73:17", children: [
          " from ",
          role === "tcm" ? "Flow Ops" : "TCM team"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 text-info", "data-tsd-source": "/src/routes/index.tsx:75:15" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-5 gap-3", "data-tsd-source": "/src/routes/index.tsx:81:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { label: "Active leads", value: liveLeads.filter((l) => l.stage !== "booked" && l.stage !== "dropped").length, sub: `${hotLeads.length} hot · live score`, "data-tsd-source": "/src/routes/index.tsx:82:11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { label: "Today's tours", value: todayTours.length, sub: "Scheduled", tone: "accent", "data-tsd-source": "/src/routes/index.tsx:83:11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { label: "Overdue follow-ups", value: overdueFu, sub: `${incompleteTours.length} post-tour pending`, tone: overdueFu || incompleteTours.length ? "destructive" : "default", "data-tsd-source": "/src/routes/index.tsx:84:11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { label: "Conversion rate", value: `${conversion}%`, sub: `${booked} booked total`, tone: "success", "data-tsd-source": "/src/routes/index.tsx:85:11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { label: "MRR closed", value: `₹${(monthlyRevenue / 1e3).toFixed(0)}k`, sub: `${bookings.length} booking${bookings.length === 1 ? "" : "s"}`, tone: "success", "data-tsd-source": "/src/routes/index.tsx:86:11" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border border-border bg-card overflow-hidden", "data-tsd-source": "/src/routes/index.tsx:90:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-center justify-between px-4 py-3 border-b border-border", "data-tsd-source": "/src/routes/index.tsx:91:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", "data-tsd-source": "/src/routes/index.tsx:92:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-4 w-4 text-accent", "data-tsd-source": "/src/routes/index.tsx:93:15" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-sm font-semibold", "data-tsd-source": "/src/routes/index.tsx:94:15", children: "Do this next" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground font-mono", "data-tsd-source": "/src/routes/index.tsx:95:15", children: [
            queue.length,
            " ranked"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/today", className: "text-xs text-accent inline-flex items-center gap-1", "data-tsd-source": "/src/routes/index.tsx:97:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-3 w-3", "data-tsd-source": "/src/routes/index.tsx:98:15" }),
          " Today view ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3 w-3", "data-tsd-source": "/src/routes/index.tsx:98:54" })
        ] })
      ] }),
      queue.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-8 text-center text-sm text-muted-foreground", "data-tsd-source": "/src/routes/index.tsx:102:13", children: "Inbox zero. Nothing pending right now." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", "data-tsd-source": "/src/routes/index.tsx:104:13", children: queue.slice(0, 5).map((a) => {
        const lead = leads.find((l) => l.id === a.leadId);
        if (!lead) return null;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(QuickActionRow, { lead, reason: a.reason, accent: a.kind === "post-tour-overdue" || a.kind === "first-response" || a.kind === "follow-up-overdue" ? "destructive" : a.kind === "no-follow-up" ? "warning" : "accent", "data-tsd-source": "/src/routes/index.tsx:109:19" }, `${a.leadId}-${a.kind}`);
      }) })
    ] }),
    incompleteTours.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-destructive/30 bg-destructive/5 p-4 flex items-start gap-3", "data-tsd-source": "/src/routes/index.tsx:123:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-5 w-5 text-destructive shrink-0 mt-0.5 animate-pulse", "data-tsd-source": "/src/routes/index.tsx:124:13" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", "data-tsd-source": "/src/routes/index.tsx:125:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-semibold text-destructive text-sm", "data-tsd-source": "/src/routes/index.tsx:126:15", children: [
          incompleteTours.length,
          " post-tour update",
          incompleteTours.length > 1 ? "s" : "",
          " missing"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", "data-tsd-source": "/src/routes/index.tsx:129:15", children: "Auto-escalation triggers at 6h. Click any name to fill the form now." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 mt-2", "data-tsd-source": "/src/routes/index.tsx:132:15", children: incompleteTours.map((t) => {
          const lead = leads.find((l) => l.id === t.leadId);
          if (!lead) return null;
          const hrs = Math.round((now - +new Date(t.scheduledAt)) / 36e5);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: /* @__PURE__ */ __name2(() => selectLead(lead.id), "onClick"), className: "text-[11px] rounded-md border border-destructive/30 bg-card px-2 py-0.5 hover:bg-destructive/10 transition-colors inline-flex items-center gap-1", "data-tsd-source": "/src/routes/index.tsx:138:21", children: [
            lead.name,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-destructive min-w-[2ch] inline-block text-right", "data-tsd-source": "/src/routes/index.tsx:143:35", children: mounted ? `${hrs}h` : "…" })
          ] }, t.id);
        }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4", "data-tsd-source": "/src/routes/index.tsx:152:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "Hot pipeline", icon: Flame, accent: true, action: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/leads", className: "text-xs text-accent inline-flex items-center gap-1", children: [
        "All leads ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3 w-3" })
      ] }), "data-tsd-source": "/src/routes/index.tsx:154:11", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "divide-y divide-border -mx-3", "data-tsd-source": "/src/routes/index.tsx:155:13", children: [
        hotLeads.slice(0, 5).map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(QuickActionRow, { lead: l, accent: "accent", "data-tsd-source": "/src/routes/index.tsx:157:17" }, l.id)),
        hotLeads.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground text-center py-6", "data-tsd-source": "/src/routes/index.tsx:159:41", children: "No hot leads right now." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "Today's tours", icon: CalendarPlus, action: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/tours", className: "text-xs text-accent inline-flex items-center gap-1", children: [
        "All tours ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3 w-3" })
      ] }), "data-tsd-source": "/src/routes/index.tsx:164:11", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", "data-tsd-source": "/src/routes/index.tsx:165:13", children: [
        todayTours.map((t) => {
          const lead = leads.find((l) => l.id === t.leadId);
          const prop = properties.find((p) => p.id === t.propertyId);
          if (!lead) return null;
          const minsTo = (+new Date(t.scheduledAt) - now) / 6e4;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: /* @__PURE__ */ __name2(() => selectLead(lead.id), "onClick"), className: "w-full text-left rounded-lg border border-border bg-card hover:border-accent/40 transition-colors p-3", "data-tsd-source": "/src/routes/index.tsx:172:19", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", "data-tsd-source": "/src/routes/index.tsx:177:21", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-sm", "data-tsd-source": "/src/routes/index.tsx:178:23", children: lead.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs font-mono ${mounted && minsTo < 60 && minsTo > 0 ? "text-accent" : "text-muted-foreground"}`, "data-tsd-source": "/src/routes/index.tsx:179:23", children: mounted ? minsTo > 0 ? `in ${formatMins(minsTo)}` : `${formatMins(-minsTo)} ago` : " " })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground mt-0.5", "data-tsd-source": "/src/routes/index.tsx:183:21", children: [
              prop?.name,
              " · ",
              format(new Date(t.scheduledAt), "p")
            ] })
          ] }, t.id);
        }),
        todayTours.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground text-center py-6", "data-tsd-source": "/src/routes/index.tsx:187:43", children: "No tours scheduled today." })
      ] }) })
    ] }),
    revivals.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border border-info/30 bg-info/5 overflow-hidden", "data-tsd-source": "/src/routes/index.tsx:194:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-center justify-between px-4 py-3 border-b border-info/20", "data-tsd-source": "/src/routes/index.tsx:195:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", "data-tsd-source": "/src/routes/index.tsx:196:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(IndianRupee, { className: "h-4 w-4 text-info", "data-tsd-source": "/src/routes/index.tsx:197:17" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-sm font-semibold", "data-tsd-source": "/src/routes/index.tsx:198:17", children: "Hidden revenue · revival queue" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground font-mono", "data-tsd-source": "/src/routes/index.tsx:199:17", children: [
            revivals.length,
            " candidate",
            revivals.length === 1 ? "" : "s"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/revival", className: "text-xs text-info inline-flex items-center gap-1", "data-tsd-source": "/src/routes/index.tsx:201:15", children: [
          "Open queue ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3 w-3", "data-tsd-source": "/src/routes/index.tsx:202:28" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-info/10", "data-tsd-source": "/src/routes/index.tsx:205:13", children: revivals.slice(0, 4).map((r) => {
        const lead = leads.find((l) => l.id === r.leadId);
        if (!lead) return null;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: /* @__PURE__ */ __name2(() => selectLead(lead.id), "onClick"), className: "w-full text-left px-4 py-2 hover:bg-info/5 flex items-center justify-between gap-3", "data-tsd-source": "/src/routes/index.tsx:210:19", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", "data-tsd-source": "/src/routes/index.tsx:215:21", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium truncate", "data-tsd-source": "/src/routes/index.tsx:216:23", children: lead.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground truncate", "data-tsd-source": "/src/routes/index.tsx:217:23", children: r.reason })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-mono text-info shrink-0", "data-tsd-source": "/src/routes/index.tsx:219:21", children: [
            "score ",
            r.score
          ] })
        ] }, r.leadId);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "Inventory pressure", icon: Building2, action: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/inventory", className: "text-xs text-accent inline-flex items-center gap-1", children: [
      "All properties ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3 w-3" })
    ] }), "data-tsd-source": "/src/routes/index.tsx:228:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3", "data-tsd-source": "/src/routes/index.tsx:229:11", children: metrics.slice(0, 6).map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-card p-3 space-y-2", "data-tsd-source": "/src/routes/index.tsx:231:15", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", "data-tsd-source": "/src/routes/index.tsx:232:17", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/routes/index.tsx:233:19", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-sm leading-tight", "data-tsd-source": "/src/routes/index.tsx:234:21", children: m.property.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", "data-tsd-source": "/src/routes/index.tsx:235:21", children: m.property.area })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SignalChip, { signal: m.signal, "data-tsd-source": "/src/routes/index.tsx:237:19" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 text-[11px]", "data-tsd-source": "/src/routes/index.tsx:239:17", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Demand", value: m.demandScore, "data-tsd-source": "/src/routes/index.tsx:240:19" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Conv %", value: m.conversionPct, "data-tsd-source": "/src/routes/index.tsx:241:19" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Vacant", value: `${m.property.vacantBeds}/${m.property.totalBeds}`, mono: true, "data-tsd-source": "/src/routes/index.tsx:242:19" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 rounded-full bg-muted overflow-hidden", "data-tsd-source": "/src/routes/index.tsx:244:17", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-accent", style: {
        width: `${m.pressureScore}%`
      }, "data-tsd-source": "/src/routes/index.tsx:245:19" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[10px] text-muted-foreground", "data-tsd-source": "/src/routes/index.tsx:247:17", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { "data-tsd-source": "/src/routes/index.tsx:248:19", children: [
          "Pressure ",
          m.pressureScore,
          "/100"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", "data-tsd-source": "/src/routes/index.tsx:249:19", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-2.5 w-2.5", "data-tsd-source": "/src/routes/index.tsx:249:68" }),
          " live"
        ] })
      ] })
    ] }, m.property.id)) }) })
  ] }) });
}
__name(DashboardPage, "DashboardPage");
__name2(DashboardPage, "DashboardPage");
function Card({
  title,
  icon: Icon,
  action,
  accent,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border border-border bg-card overflow-hidden", "data-tsd-source": "/src/routes/index.tsx:266:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-center justify-between px-4 py-3 border-b border-border", "data-tsd-source": "/src/routes/index.tsx:267:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", "data-tsd-source": "/src/routes/index.tsx:268:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `h-4 w-4 ${accent ? "text-accent" : "text-muted-foreground"}`, "data-tsd-source": "/src/routes/index.tsx:269:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-sm font-semibold", "data-tsd-source": "/src/routes/index.tsx:270:11", children: title })
      ] }),
      action
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3", "data-tsd-source": "/src/routes/index.tsx:274:7", children })
  ] });
}
__name(Card, "Card");
__name2(Card, "Card");
function Stat({
  label,
  value,
  mono
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md bg-muted/60 px-2 py-1.5", "data-tsd-source": "/src/routes/index.tsx:281:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase tracking-wider text-muted-foreground", "data-tsd-source": "/src/routes/index.tsx:282:7", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-xs font-medium ${mono ? "font-mono" : ""}`, "data-tsd-source": "/src/routes/index.tsx:283:7", children: value })
  ] });
}
__name(Stat, "Stat");
__name2(Stat, "Stat");
function SignalChip({
  signal
}) {
  const map = {
    "high-demand-low-conv": {
      label: "Pricing issue",
      cls: "bg-destructive/10 text-destructive border-destructive/30"
    },
    "low-demand-high-vacancy": {
      label: "Push marketing",
      cls: "bg-warning/15 text-warning-foreground border-warning/30"
    },
    "high-conv-low-supply": {
      label: "Expand",
      cls: "bg-success/10 text-success border-success/30"
    },
    "balanced": {
      label: "Balanced",
      cls: "bg-muted text-muted-foreground border-border"
    }
  };
  const cfg = map[signal];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex items-center rounded-md border px-1.5 py-0.5 text-[10px] font-medium whitespace-nowrap ${cfg.cls}`, "data-tsd-source": "/src/routes/index.tsx:297:5", children: cfg.label });
}
__name(SignalChip, "SignalChip");
__name2(SignalChip, "SignalChip");
function sameDay(a, b) {
  const da = new Date(a), db = new Date(b);
  return da.getFullYear() === db.getFullYear() && da.getMonth() === db.getMonth() && da.getDate() === db.getDate();
}
__name(sameDay, "sameDay");
__name2(sameDay, "sameDay");
function formatMins(m) {
  if (m < 60) return `${Math.round(m)}m`;
  return `${(m / 60).toFixed(m < 600 ? 1 : 0)}h`;
}
__name(formatMins, "formatMins");
__name2(formatMins, "formatMins");
export {
  DashboardPage as component
};
