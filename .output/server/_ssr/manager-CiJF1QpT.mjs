var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell, G as funnelMetrics, H as topObjections, J as avgStageVelocity } from "./AppShell-rXFHrudv.mjs";
import { u as useApp, a as useSettings, k as Button, C as Card, B as Badge } from "./router-Cbs6ivkN.mjs";
import { u as useCRM10x } from "./store-CzExz6PU.mjs";
import { f as funnelVelocity, a as agentCohort, w as weeklyRecommendations, o as objectionLossCorrelation, z as zoneSnapshots, t as templatePerformance } from "./analytics-DmYAqfQ6.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { u as Brain, S as Sparkles, f as Activity, A as ArrowRight, O as Trophy, g as TriangleAlert, L as Layers, H as MessageSquare, P as Phone, c as Users, Z as Zap } from "../_libs/lucide-react.mjs";
import { f as format } from "../_libs/date-fns.mjs";
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
import "../_libs/radix-ui__react-collapsible.mjs";
import "../_libs/cmdk.mjs";
import "./personas-yLdDZDbn.mjs";
import "../_libs/radix-ui__react-scroll-area.mjs";
import "../_libs/radix-ui__number.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
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
import "../_libs/isbot.mjs";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
const STAGE_LABEL = {
  "new": "New",
  "contacted": "Contacted",
  "tour-scheduled": "Tour set",
  "tour-done": "Tour done",
  "negotiation": "Negotiation",
  "booked": "Booked"
};
const OBJ_LABEL = {
  "price-too-high": "Price too high",
  "location-not-suitable": "Location",
  "room-too-small": "Room size",
  "not-ready-yet": "Not ready",
  "comparing-other-pgs": "Comparing PGs",
  "needs-family-approval": "Family approval",
  "food-not-available": "Food",
  "no-ac": "No AC",
  "safety-concern": "Safety",
  "no-response-to-offer": "Silent"
};
function ConversionIntelligence() {
  const leads = useApp((s) => s.leads);
  const tcms = useApp((s) => s.tcms);
  useApp((s) => s.tours);
  const bookings = useApp((s) => s.bookings);
  const calls = useCRM10x((s) => s.calls);
  const objections = useCRM10x((s) => s.objections);
  const messageOutcomes = useCRM10x((s) => s.messageOutcomes);
  const { settings } = useSettings();
  const [tab, setTab] = reactExports.useState("funnel");
  const funnel = reactExports.useMemo(() => funnelVelocity(leads), [leads]);
  const agents = reactExports.useMemo(
    () => agentCohort(tcms, leads, calls, objections),
    [tcms, leads, calls, objections]
  );
  const recs = reactExports.useMemo(
    () => weeklyRecommendations({ leads, funnel, objections, agents }),
    [leads, funnel, objections, agents]
  );
  const objLoss = reactExports.useMemo(
    () => objectionLossCorrelation(leads, objections),
    [leads, objections]
  );
  const zones = reactExports.useMemo(
    () => zoneSnapshots({ zones: settings.zones, tcms, leads, bookings }),
    [settings.zones, tcms, leads, bookings]
  );
  const templates = reactExports.useMemo(() => templatePerformance(messageOutcomes), [messageOutcomes]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:76:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-end justify-between gap-3 flex-wrap", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:77:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:78:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-xl font-bold flex items-center gap-2", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:79:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "h-5 w-5 text-accent", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:80:13" }),
          " Conversion Intelligence"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:82:11", children: "Real-time funnel velocity, drop-off heatmap, agent cohort, objection-loss correlation and template ROI." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5 flex-wrap", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:86:9", children: ["funnel", "agents", "objections", "zones", "templates"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "sm",
          variant: tab === t ? "default" : "outline",
          onClick: /* @__PURE__ */ __name2(() => setTab(t), "onClick"),
          className: "text-xs h-7 capitalize",
          "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:88:13",
          children: t
        },
        t
      )) })
    ] }),
    recs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 space-y-2 border-accent/40 bg-accent/5", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:103:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:104:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-accent", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:105:13" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:106:13", children: "What to fix this week" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-[10px] border-accent text-accent", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:107:13", children: [
          "auto · ",
          recs.length
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:111:11", children: recs.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `rounded-md border p-2.5 ${r.priority === "critical" ? "border-destructive/40 bg-destructive/5" : r.priority === "high" ? "border-warning/40 bg-warning/5" : "border-border bg-card"}`,
          "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:113:15",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start justify-between gap-2", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:123:17", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:124:19", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-medium text-sm flex items-center gap-2", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:125:21", children: [
              r.title,
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: r.priority === "critical" ? "destructive" : "outline",
                  className: "text-[9px] uppercase",
                  "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:127:23",
                  children: r.priority
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:134:21", children: r.detail }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-success mt-1 font-medium", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:135:21", children: [
              "💡 ",
              r.expectedImpact
            ] })
          ] }) })
        },
        r.id
      )) })
    ] }),
    tab === "funnel" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 space-y-3", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:148:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:149:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display font-semibold flex items-center gap-2", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:150:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-4 w-4", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:151:15" }),
          " Funnel velocity & drop-off heatmap"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:153:13", children: "avg dwell + cohort conversion" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:155:11", children: funnel.map((row) => {
        const isCrit = row.cohortConv < 20;
        const isLow = row.cohortConv < 35;
        const heat = row.dropOffPct >= 80 ? "bg-destructive/30" : row.dropOffPct >= 60 ? "bg-destructive/20" : row.dropOffPct >= 40 ? "bg-warning/20" : "bg-success/15";
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `rounded-md p-2 grid grid-cols-12 items-center gap-2 ${heat}`,
            "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:165:17",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-3 text-xs font-medium", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:169:19", children: [
                STAGE_LABEL[row.fromStage],
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "inline h-3 w-3 mx-1 text-muted-foreground", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:171:21" }),
                STAGE_LABEL[row.toStage]
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 text-[11px] text-muted-foreground", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:174:19", children: [
                "avg ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-foreground", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:175:25", children: [
                  row.avgDays,
                  "d"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 text-[11px] text-muted-foreground", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:177:19", children: [
                "sample ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-foreground", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:178:28", children: row.sample })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-3 h-2 rounded-full bg-background/80 overflow-hidden", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:180:19", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `h-full ${isCrit ? "bg-destructive" : isLow ? "bg-warning" : "bg-success"}`,
                  style: { width: `${row.cohortConv}%` },
                  "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:181:21"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 text-right", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:186:19", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-xs font-mono font-bold ${isCrit ? "text-destructive" : isLow ? "text-warning" : "text-success"}`, "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:187:21", children: [
                  row.cohortConv,
                  "% conv"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:190:21", children: [
                  row.dropOffPct,
                  "% drop"
                ] })
              ] })
            ]
          },
          row.fromStage
        );
      }) })
    ] }),
    tab === "agents" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 space-y-3", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:201:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display font-semibold flex items-center gap-2", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:202:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-4 w-4", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:203:13" }),
        " Agent cohort · normalised"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:205:11", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:206:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:207:15", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-[10px] uppercase tracking-wider text-muted-foreground border-b border-border", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:208:17", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 px-2", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:209:19", children: "#" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:210:19", children: "Agent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:211:19", children: "Zone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:212:19", children: "Leads" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:213:19", children: "Conv%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:214:19", children: "Calls/lead" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:215:19", children: "Obj resolved" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:216:19", children: "Avg resp" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:219:15", children: agents.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/50 hover:bg-muted/30", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:221:19", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2 px-2 text-muted-foreground font-mono", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:222:21", children: [
            "#",
            a.cohortRank
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "font-medium", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:223:21", children: a.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-muted-foreground text-xs", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:224:21", children: a.zone }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:225:21", children: a.leads }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: `text-right font-bold ${a.conv >= 25 ? "text-success" : a.conv >= 15 ? "text-warning" : "text-destructive"}`, "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:226:21", children: [
            a.conv,
            "%"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:229:21", children: a.callsPerLead }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "text-right", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:230:21", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:231:23", children: [
              a.objectionsResolved,
              "/",
              a.objectionsLogged
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground text-[10px] ml-1", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:232:23", children: [
              "(",
              a.resolutionRate,
              "%)"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "text-right text-muted-foreground", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:234:21", children: [
            a.avgFirstResponseMins,
            "m"
          ] })
        ] }, a.tcmId)) })
      ] }) })
    ] }),
    tab === "objections" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 space-y-3", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:245:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display font-semibold flex items-center gap-2", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:246:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4 text-destructive", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:247:13" }),
        " Objection ↔ loss correlation"
      ] }),
      objLoss.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:250:13", children: 'No objections logged yet. Force-capture on every "Answered" call to populate this.' }),
      objLoss.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 items-center gap-2 text-sm py-1.5 border-b border-border/40", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:255:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "col-span-3 font-medium", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:256:15", children: OBJ_LABEL[o.code] ?? o.code }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "col-span-2 text-xs text-muted-foreground", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:257:15", children: [
          "raised ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-foreground", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:257:81", children: o.raised })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "col-span-2 text-xs text-success", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:258:15", children: [
          "booked ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:258:72", children: o.booked })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "col-span-2 text-xs text-destructive", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:259:15", children: [
          "lost ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:259:74", children: o.lost })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2 h-2 rounded-full bg-muted overflow-hidden", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:260:15", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-destructive", style: { width: `${o.lossRate}%` }, "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:261:17" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "col-span-1 text-right text-xs font-mono font-bold text-destructive", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:263:15", children: [
          o.lossRate,
          "%"
        ] })
      ] }, o.code))
    ] }),
    tab === "zones" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 space-y-3", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:271:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:272:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display font-semibold flex items-center gap-2", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:273:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "h-4 w-4", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:274:15" }),
          " Zone P&L + capacity"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/zone-brain", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:276:13", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "text-xs h-7", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:277:15", children: [
          "Open Zone Brain ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3 ml-1", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:278:33" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-3", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:282:11", children: zones.map((z) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `rounded-lg border p-3 space-y-2 ${z.pressureLevel === "leaking" ? "border-destructive/40 bg-destructive/5" : z.pressureLevel === "overloaded" ? "border-warning/40 bg-warning/5" : z.pressureLevel === "underloaded" ? "border-info/40 bg-info/5" : "border-border bg-card"}`,
          "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:284:15",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:293:17", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:294:19", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-semibold text-sm", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:295:21", children: z.zoneName }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:296:21", children: [
                  z.city,
                  " · ",
                  z.tcmIds.length,
                  " TCM"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "outline",
                  className: `text-[10px] capitalize ${z.pressureLevel === "leaking" ? "border-destructive text-destructive" : z.pressureLevel === "overloaded" ? "border-warning text-warning" : z.pressureLevel === "underloaded" ? "border-info text-info" : "border-success text-success"}`,
                  "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:298:19",
                  children: z.pressureLevel
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-4 gap-1 text-[10px]", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:310:17", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { label: "Leads", value: z.leadCount, "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:311:19" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { label: "Active", value: z.activeLeads, "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:312:19" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { label: "Booked", value: z.bookings, "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:313:19" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { label: "Conv%", value: `${z.conversion}%`, tone: z.conversion >= 20 ? "good" : "bad", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:314:19" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-1 text-[10px]", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:316:17", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { label: "₹/mo", value: `₹${(z.revenueINR / 1e3).toFixed(0)}k`, "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:317:19" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { label: "Load/TCM", value: z.loadPerTcm, tone: z.loadPerTcm > 25 ? "bad" : "neutral", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:318:19" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { label: "SLA fail", value: z.slaBreaches, tone: z.slaBreaches >= 3 ? "bad" : "neutral", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:319:19" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground italic", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:321:17", children: [
              "→ ",
              z.recommendation
            ] })
          ]
        },
        z.zoneId
      )) })
    ] }),
    tab === "templates" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 space-y-3", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:330:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display font-semibold flex items-center gap-2", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:331:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-4 w-4", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:332:13" }),
        " WhatsApp template ROI"
      ] }),
      templates.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:335:13", children: "No template sends logged yet. Use the Smart WhatsApp picker on the lead Dossier tab to start tracking." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:339:13", children: templates.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 items-center gap-2 text-sm py-1.5 border-b border-border/40", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:341:17", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "col-span-3 font-medium capitalize", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:342:19", children: t.stage.replace(/-/g, " ") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "col-span-2 text-xs text-muted-foreground", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:343:19", children: [
          "sent ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-foreground", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:343:83", children: t.sent })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "col-span-2 text-xs", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:344:19", children: [
          "replies ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:344:64", children: t.replies })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "col-span-2 text-xs text-success", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:345:19", children: [
          "booked ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:345:76", children: t.bookings })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2 h-2 rounded-full bg-muted overflow-hidden", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:346:19", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-success", style: { width: `${t.bookRate}%` }, "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:347:21" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "col-span-1 text-right text-xs font-mono font-bold text-success", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:349:19", children: [
          t.bookRate,
          "%"
        ] })
      ] }, t.stage)) })
    ] })
  ] });
}
__name(ConversionIntelligence, "ConversionIntelligence");
__name2(ConversionIntelligence, "ConversionIntelligence");
function Mini({ label, value, tone }) {
  const cls = tone === "good" ? "text-success" : tone === "bad" ? "text-destructive" : "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded bg-background/60 px-1.5 py-1", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:363:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[8px] uppercase tracking-wider text-muted-foreground", "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:364:7", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-xs font-bold font-mono ${cls}`, "data-tsd-source": "/src/components/crm10x/ConversionIntelligence.tsx:365:7", children: value })
  ] });
}
__name(Mini, "Mini");
__name2(Mini, "Mini");
const OBJECTION_LABELS = {
  "price-too-high": "Price too high",
  "location-not-suitable": "Location",
  "room-too-small": "Room size",
  "not-ready-yet": "Not ready",
  "comparing-other-pgs": "Comparing PGs",
  "needs-family-approval": "Family approval",
  "food-not-available": "Food",
  "no-ac": "No AC",
  "safety-concern": "Safety",
  "no-response-to-offer": "Silent"
};
function ManagerDashboard() {
  const leads = useApp((s) => s.leads);
  const tcms = useApp((s) => s.tcms);
  const tours = useApp((s) => s.tours);
  const activities = useApp((s) => s.activities);
  const calls = useCRM10x((s) => s.calls);
  const objections = useCRM10x((s) => s.objections);
  const commitments = useCRM10x((s) => s.commitments);
  const coachingNotes = useCRM10x((s) => s.coachingNotes);
  const today = /* @__PURE__ */ new Date();
  today.setHours(0, 0, 0, 0);
  const callsToday = calls.filter((c) => new Date(c.ts) >= today);
  const visitsToday = tours.filter((t) => {
    const d = new Date(t.scheduledAt);
    d.setHours(0, 0, 0, 0);
    return +d === +today;
  });
  const bookedThisWeek = leads.filter((l) => l.stage === "booked" && Date.now() - new Date(l.updatedAt).getTime() < 7 * 864e5).length;
  const newToday = leads.filter((l) => new Date(l.createdAt) >= today).length;
  const neverCalled = leads.filter((l) => new Date(l.createdAt) >= today && !calls.some((c) => c.leadId === l.id)).length;
  const funnel = funnelMetrics(leads);
  const agentRows = reactExports.useMemo(() => tcms.map((t) => {
    const myLeads = leads.filter((l) => l.assignedTcmId === t.id);
    const myCalls = calls.filter((c) => myLeads.some((l) => l.id === c.leadId));
    const myVisits = tours.filter((tour) => tour.tcmId === t.id);
    const booked = myLeads.filter((l) => l.stage === "booked");
    const conv = myLeads.length === 0 ? 0 : Math.round(booked.length / myLeads.length * 100);
    const touchesPerLead = myLeads.length === 0 ? 0 : (myCalls.length / myLeads.length).toFixed(1);
    const myBookedDays = booked.length === 0 ? 0 : Math.round(booked.reduce((acc, l) => {
      return acc + (new Date(l.updatedAt).getTime() - new Date(l.createdAt).getTime()) / 864e5;
    }, 0) / booked.length);
    return {
      id: t.id,
      name: t.name,
      zone: t.zone,
      leads: myLeads.length,
      touches: touchesPerLead,
      visits: myVisits.length,
      booked: booked.length,
      conv,
      days: myBookedDays
    };
  }).sort((a, b) => b.conv - a.conv), [tcms, leads, calls, tours]);
  const redFlags = reactExports.useMemo(() => {
    const flags = [];
    leads.forEach((l) => {
      const lastActivity = activities.filter((a) => a.leadId === l.id).sort((a, b) => +new Date(b.ts) - +new Date(a.ts))[0];
      const daysIdle = lastActivity ? (Date.now() - new Date(lastActivity.ts).getTime()) / 864e5 : (Date.now() - new Date(l.createdAt).getTime()) / 864e5;
      if (daysIdle >= 7 && l.stage !== "booked" && l.stage !== "dropped") {
        flags.push({ kind: "untouched-7d", lead: l, detail: `${Math.round(daysIdle)}d idle`, severity: "high" });
      }
      const lastVisit = tours.filter((t) => t.leadId === l.id && t.status === "completed").sort((a, b) => +new Date(b.scheduledAt) - +new Date(a.scheduledAt))[0];
      if (lastVisit) {
        const hours = (Date.now() - new Date(lastVisit.scheduledAt).getTime()) / 36e5;
        const hasFollowup = activities.some((a) => a.leadId === l.id && +new Date(a.ts) > +new Date(lastVisit.scheduledAt) + 36e5);
        if (hours >= 48 && !hasFollowup && l.stage !== "booked") {
          flags.push({ kind: "post-visit-silent", lead: l, detail: `${Math.round(hours)}h since visit`, severity: "high" });
        }
      }
      const moveIn = new Date(l.moveInDate);
      if (moveIn.getTime() < Date.now() && l.stage !== "booked" && l.stage !== "dropped") {
        flags.push({ kind: "move-in-passed", lead: l, detail: `move-in ${format(moveIn, "MMM d")}`, severity: "high" });
      }
    });
    return flags.slice(0, 12);
  }, [leads, activities, tours]);
  const objBreakdown = topObjections(objections);
  const velocity = avgStageVelocity(leads);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 p-4 md:p-6 max-w-7xl mx-auto", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:103:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:104:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:105:9", children: "Manager Dashboard" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:106:9", children: [
        "Numbers only. No lead cards. ",
        format(/* @__PURE__ */ new Date(), "EEEE, MMM d")
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-3", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:110:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: Phone, label: "Calls today", value: callsToday.length, "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:111:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: Activity, label: "Visits today", value: visitsToday.length, "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:112:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: Trophy, label: "Booked this week", value: bookedThisWeek, accent: "success", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:113:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: Users, label: "New today", value: newToday, "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:114:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: TriangleAlert, label: "Never called", value: neverCalled, accent: neverCalled > 0 ? "danger" : void 0, "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:115:9" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ConversionIntelligence, { "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:119:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 space-y-3", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:122:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:123:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-lg font-semibold", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:124:11", children: "Funnel · where leads drop" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:125:11", children: [
          "avg booking velocity ",
          velocity,
          "d"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:127:9", children: funnel.map((row, i) => {
        const next = funnel[i + 1];
        if (!next) return null;
        const isLow = row.conversionToNext < 35;
        const isCrit = row.conversionToNext < 20;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:134:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-32 capitalize", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:135:17", children: row.stage.replace("-", " ") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3 text-muted-foreground", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:136:17" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-32 capitalize text-muted-foreground", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:137:17", children: next.stage.replace("-", " ") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-2 rounded-full bg-muted overflow-hidden", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:138:17", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `h-full rounded-full ${isCrit ? "bg-destructive" : isLow ? "bg-warning" : "bg-success"}`,
              style: { width: `${row.conversionToNext}%` },
              "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:139:19"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `w-16 text-right text-xs font-mono ${isCrit ? "text-destructive font-bold" : isLow ? "text-warning" : "text-success"}`, "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:144:17", children: [
            row.conversionToNext,
            "%"
          ] }),
          isCrit && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "destructive", className: "text-[10px]", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:147:28", children: "CRITICAL" }),
          !isCrit && isLow && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[10px] border-warning text-warning", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:148:38", children: "LOW" })
        ] }, row.stage);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 space-y-3", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:156:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-lg font-semibold", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:157:9", children: "Agent comparison" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:158:9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:159:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:160:13", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-[10px] uppercase tracking-wider text-muted-foreground border-b border-border", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:161:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 px-2", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:162:17", children: "Agent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:163:17", children: "Zone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:164:17", children: "Leads" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:165:17", children: "Touches/lead" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:166:17", children: "Visits" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:167:17", children: "Booked" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:168:17", children: "Conv %" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:169:17", children: "Avg days" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:172:13", children: agentRows.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/50 hover:bg-muted/30", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:174:17", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-2 font-medium", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:175:19", children: r.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-muted-foreground", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:176:19", children: r.zone }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:177:19", children: r.leads }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:178:19", children: r.touches }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:179:19", children: r.visits }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:180:19", children: r.booked }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: `text-right font-semibold ${r.conv >= 25 ? "text-success" : r.conv >= 15 ? "text-warning" : "text-destructive"}`, "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:181:19", children: [
            r.conv,
            "%"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "text-right text-muted-foreground", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:184:19", children: [
            r.days,
            "d"
          ] })
        ] }, r.id)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:192:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 space-y-2", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:194:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-lg font-semibold flex items-center gap-2", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:195:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4 text-destructive", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:196:13" }),
          " Red flags · act now"
        ] }),
        redFlags.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:198:37", children: "All clear." }),
        redFlags.map((f, i) => {
          const tcm = tcms.find((t) => t.id === f.lead.assignedTcmId);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs border-b border-border/50 py-1.5", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:202:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:203:17", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:204:19", children: f.lead.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-muted-foreground text-[10px]", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:205:19", children: [
                tcm?.name ?? "—",
                " · ",
                f.detail
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[10px] capitalize", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:207:17", children: f.kind.replace(/-/g, " ") })
          ] }, i);
        })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 space-y-2", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:214:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-lg font-semibold flex items-center gap-2", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:215:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-4 w-4", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:216:13" }),
          " Top blockers this period"
        ] }),
        objBreakdown.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:218:41", children: 'No objections logged yet. Start capturing on every "Answered" call.' }),
        objBreakdown.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:220:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-32", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:221:15", children: OBJECTION_LABELS[o.code] ?? o.code }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-2 rounded-full bg-muted overflow-hidden", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:222:15", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full rounded-full bg-destructive", style: { width: `${o.pct}%` }, "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:223:17" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "w-12 text-right text-xs font-mono", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:225:15", children: [
            o.pct,
            "%"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-8 text-right text-[10px] text-muted-foreground", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:226:15", children: o.count })
        ] }, o.code))
      ] })
    ] }),
    commitments.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 space-y-2", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:234:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-lg font-semibold", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:235:11", children: "Lead commitments tracker" }),
      commitments.slice(0, 8).map((c) => {
        const lead = leads.find((l) => l.id === c.leadId);
        const overdue = new Date(c.decisionBy).getTime() < Date.now() && c.status === "pending";
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center justify-between text-xs border-b border-border/50 py-1.5 ${overdue ? "text-destructive" : ""}`, "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:240:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:241:17", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:242:19", children: lead?.name ?? "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-muted-foreground italic", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:243:19", children: [
              '"',
              c.exactWords,
              '"'
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:245:17", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:246:19", children: format(new Date(c.decisionBy), "MMM d") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] capitalize", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:247:19", children: [
              c.status,
              overdue && " · OVERDUE"
            ] })
          ] })
        ] }, c.id);
      })
    ] }),
    coachingNotes.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 space-y-2", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:257:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-lg font-semibold", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:258:11", children: "Coaching notes (private)" }),
      coachingNotes.slice(0, 5).map((n) => {
        const lead = leads.find((l) => l.id === n.leadId);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs border-l-2 border-accent pl-2 py-1", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:262:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:263:17", children: lead?.name ?? "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:264:17", children: n.text }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:265:17", children: format(new Date(n.ts), "MMM d, p") })
        ] }, n.id);
      })
    ] })
  ] });
}
__name(ManagerDashboard, "ManagerDashboard");
__name2(ManagerDashboard, "ManagerDashboard");
function Stat({
  icon: Icon,
  label,
  value,
  accent
}) {
  const tone = accent === "success" ? "text-success border-success/30 bg-success/5" : accent === "danger" ? "text-destructive border-destructive/30 bg-destructive/5" : "border-border bg-card";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-lg border p-3 ${tone}`, "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:288:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[10px] uppercase tracking-wider text-muted-foreground", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:289:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3 w-3", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:290:9" }),
      " ",
      label
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-display font-bold mt-1", "data-tsd-source": "/src/components/crm10x/ManagerDashboard.tsx:292:7", children: value })
  ] });
}
__name(Stat, "Stat");
__name2(Stat, "Stat");
const SplitComponent = /* @__PURE__ */ __name2(() => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/manager.tsx:13:5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ManagerDashboard, { "data-tsd-source": "/src/routes/manager.tsx:14:7" }) }), "SplitComponent");
export {
  SplitComponent as component
};
