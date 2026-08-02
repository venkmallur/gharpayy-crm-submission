var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-rXFHrudv.mjs";
import { u as useGlueEvents } from "./use-event-bus-Bdnr5LRL.mjs";
import { an as useOwner, u as useApp, c as useMountedNow, b as useVisitWar, aE as selectRevenueWalking, aF as probability01, q as cn, a7 as CopyChip, aG as ownerNotifyBlock } from "./router-Cbs6ivkN.mjs";
import { r as roomHeroClass } from "./room-hero-DK48BzyX.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { P as Phone, y as Calendar, f as Activity, l as CircleCheck, bD as MessagesSquare, R as Radio, F as Flame, W as Wallet } from "../_libs/lucide-react.mjs";
import { f as format } from "../_libs/date-fns.mjs";
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
const EVENT_LABEL = {
  "team.visit.scheduled": { label: "Visit scheduled", icon: Calendar, tone: "text-info" },
  "team.visit.started": { label: "Visit started", icon: Activity, tone: "text-warning-foreground" },
  "team.visit.ended": { label: "Visit ended", icon: CircleCheck, tone: "text-success" },
  "tour.confirmation.sent": { label: "Confirmation sent", icon: MessagesSquare, tone: "text-muted-foreground" },
  "team.lead.pitched": { label: "Lead pitched", icon: Phone, tone: "text-info" }
};
function OwnerVisits() {
  const { currentOwnerId, properties: ownerProps } = useOwner();
  const { tours, leads, properties } = useApp();
  const [, mounted] = useMountedNow(6e4);
  const events = useGlueEvents(
    (e) => (e.type === "team.visit.scheduled" || e.type === "team.visit.started" || e.type === "team.visit.ended" || e.type === "tour.confirmation.sent" || e.type === "team.lead.pitched") && (!("ownerId" in e) || !e.ownerId || e.ownerId === currentOwnerId),
    30
  );
  const todays = reactExports.useMemo(() => tours.filter((t) => {
    const d = new Date(t.scheduledAt);
    const n = /* @__PURE__ */ new Date();
    return d.getFullYear() === n.getFullYear() && d.getMonth() === n.getMonth() && d.getDate() === n.getDate();
  }), [tours]);
  const effort = reactExports.useMemo(() => {
    const c = { pitch: 0, scheduled: 0, started: 0, ended: 0, confirmation: 0 };
    events.forEach((e) => {
      if (e.type === "team.lead.pitched") c.pitch++;
      if (e.type === "team.visit.scheduled") c.scheduled++;
      if (e.type === "team.visit.started") c.started++;
      if (e.type === "team.visit.ended") c.ended++;
      if (e.type === "tour.confirmation.sent") c.confirmation++;
    });
    return c;
  }, [events]);
  const warRecords = useVisitWar((s) => s.records);
  const ownerPropIds = reactExports.useMemo(
    () => new Set(ownerProps.map((p) => p.id ?? p.roomId)),
    [ownerProps]
  );
  const ownerVisits = reactExports.useMemo(
    () => Object.values(warRecords).filter(
      (v) => ownerPropIds.has(v.propertyId) || ownerProps.some((p) => (p.name ?? "").toLowerCase() === v.propertyName.toLowerCase())
    ),
    [warRecords, ownerPropIds, ownerProps]
  );
  const liveAtMyPlaces = ownerVisits.filter(
    (v) => ["started", "at-property", "tour-ongoing"].includes(v.stage)
  );
  const hotAtMyPlaces = ownerVisits.filter(
    (v) => v.stage === "completed" && v.completedAt && Date.now() - v.completedAt < 24 * 36e5 && v.outcome !== "booked"
  );
  const priceFor = /* @__PURE__ */ __name2((id) => properties.find((p) => p.id === id)?.pricePerBed ?? 12e3, "priceFor");
  const walkingAtMyPlaces = selectRevenueWalking(
    Object.fromEntries(ownerVisits.map((v) => [v.tourId, v])),
    priceFor,
    Date.now()
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 pb-12", "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:79:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:80:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-xl md:text-2xl font-semibold tracking-tight", "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:81:9", children: "Visits at your property" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:82:9", children: "Live feed from Flow Ops + TCM team — no separate app needed." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 md:grid-cols-5 gap-2", "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:86:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tally, { n: effort.pitch, label: "Pitched", icon: Phone, "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:87:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tally, { n: effort.scheduled, label: "Scheduled", icon: Calendar, "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:88:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tally, { n: effort.started, label: "Started", icon: Activity, "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:89:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tally, { n: effort.ended, label: "Completed", icon: CircleCheck, "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:90:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tally, { n: effort.confirmation, label: "Confirms sent", icon: MessagesSquare, "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:91:9" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border-l-4 border-l-accent border border-border bg-card p-4", "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:95:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:96:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Radio, { className: "h-4 w-4 text-accent animate-pulse", "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:97:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-sm font-semibold", "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:98:11", children: "Live war room · your properties" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-auto inline-flex gap-2 text-[10px] font-mono", "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:99:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-1.5 py-0.5 rounded bg-success/10 text-success border border-success/30", "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:100:13", children: [
            liveAtMyPlaces.length,
            " live"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-1.5 py-0.5 rounded bg-warning/15 text-warning-foreground border border-warning/40", "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:103:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "inline h-3 w-3 mr-0.5", "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:104:15" }),
            hotAtMyPlaces.length,
            " hot"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-1.5 py-0.5 rounded bg-accent/10 text-accent border border-accent/30", "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:106:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "inline h-3 w-3 mr-0.5", "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:107:15" }),
            "₹",
            (walkingAtMyPlaces / 1e3).toFixed(0),
            "k walking"
          ] })
        ] })
      ] }),
      ownerVisits.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:112:11", children: "No visit signals yet for your properties." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5", "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:114:11", children: ownerVisits.slice(0, 6).map((v) => {
        const prob = Math.round(probability01(v) * 100);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-xs p-2 rounded-lg bg-muted/30 border", "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:118:17", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn(
            "h-2 w-2 rounded-full",
            v.stage === "tour-ongoing" ? "bg-warning animate-pulse" : v.stage === "at-property" ? "bg-success" : v.stage === "started" ? "bg-info animate-pulse" : v.stage === "booked" ? "bg-success" : "bg-muted-foreground"
          ), "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:119:19" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold truncate flex-1", "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:127:19", children: v.propertyName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase text-muted-foreground tracking-wider", "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:128:19", children: v.stage }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-mono tabular-nums", "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:129:19", children: [
            prob,
            "%"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CopyChip,
            {
              size: "xs",
              label: "WA",
              text: ownerNotifyBlock({
                propertyName: v.propertyName,
                event: v.stage === "booked" ? "booked" : v.stage === "completed" ? "completed" : v.stage === "at-property" || v.stage === "tour-ongoing" ? "reached" : v.stage === "started" ? "started" : v.stage === "objection" ? "objection" : "scheduled",
                whenMs: v.lastUpdateAt,
                reaction: v.reaction,
                objectionCategory: v.objections[0]?.category
              }),
              "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:130:19"
            }
          )
        ] }, v.tourId);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border border-border bg-card p-4", "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:153:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:154:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4 text-muted-foreground", "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:155:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-sm font-semibold", "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:156:11", children: "Today's tours" })
      ] }),
      !mounted ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:158:21", children: "Loading…" }) : todays.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:159:11", children: "No tours scheduled today." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:161:11", children: todays.map((t) => {
        const lead = leads.find((l) => l.id === t.leadId);
        const prop = properties.find((p) => p.id === t.propertyId);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-2 rounded-lg border border-border bg-muted/20", "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:166:17", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("h-10 w-10 rounded-xl grid place-items-center text-white font-mono font-bold text-[10px] shadow-sm", roomHeroClass(t.id)), "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:167:19", children: (prop?.name ?? "R").slice(0, 2).toUpperCase() }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:170:19", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium truncate", "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:171:21", children: lead?.name ?? "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground font-mono truncate", "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:172:21", children: prop?.name ?? "—" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] font-mono text-muted-foreground", "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:174:19", children: [
            format(new Date(t.scheduledAt), "p"),
            " · ",
            t.status
          ] })
        ] }, t.id);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border border-border bg-card p-4", "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:182:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:183:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-4 w-4 text-muted-foreground", "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:184:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-sm font-semibold", "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:185:11", children: "Live activity" })
      ] }),
      events.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:188:11", children: "No recent activity." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:190:11", children: events.map((e, i) => {
        const meta = EVENT_LABEL[e.type] ?? { label: e.type, icon: Activity, tone: "text-muted-foreground" };
        const Icon = meta.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 py-2 text-xs", "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:195:17", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: cn("h-3.5 w-3.5", meta.tone), "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:196:19" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 font-medium", "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:197:19", children: meta.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-muted-foreground text-[10px] truncate", "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:198:19", children: "tourId" in e && e.tourId || "leadId" in e && e.leadId || "" })
        ] }, i);
      }) })
    ] })
  ] });
}
__name(OwnerVisits, "OwnerVisits");
__name2(OwnerVisits, "OwnerVisits");
function Tally({ n, label, icon: Icon }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-card p-2.5", "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:213:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-[9px] uppercase tracking-widest text-muted-foreground font-mono", "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:214:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3 w-3", "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:215:9" }),
      " ",
      label
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-display font-semibold tabular-nums mt-0.5", "data-tsd-source": "/src/owner/pages/OwnerVisits.tsx:217:7", children: n })
  ] });
}
__name(Tally, "Tally");
__name2(Tally, "Tally");
const SplitComponent = /* @__PURE__ */ __name2(() => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/owner/visits.tsx:7:20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(OwnerVisits, { "data-tsd-source": "/src/routes/owner/visits.tsx:7:30" }) }), "SplitComponent");
export {
  SplitComponent as component
};
