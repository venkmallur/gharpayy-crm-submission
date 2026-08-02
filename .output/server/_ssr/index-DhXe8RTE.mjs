var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell, M as Sheet, am as SheetTrigger, N as SheetContent, O as SheetHeader, Q as SheetTitle } from "./AppShell-rXFHrudv.mjs";
import { g as useSearch, u as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { l as lookupOwnerByRoomId, g as getRegistry, s as subscribeRegistry, d as dailyTruthPhase, a as addedRoomCountFor, v as verifyRoomToday, m as maxAddedRoomsPerPG, h as holdForGharpayy, p as patchRoom, r as removeAddedRoom, b as addRooms } from "./owner-registry-DqLOx3Qf.mjs";
import { a3 as glueBus, q as cn, X as Input, k as Button, B as Badge, S as Select, w as SelectTrigger, x as SelectValue, y as SelectContent, z as SelectItem } from "./router-Cbs6ivkN.mjs";
import { t as toast } from "./use-toast-BlKShdOI.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { bz as Hotel, ba as CalendarDays, D as Inbox, f as Activity, b8 as Lock, p as Bell, P as Phone, r as MessageCircle, e as Copy, l as CircleCheck, i as ShieldCheck, T as TrendingUp, B as Building2, aS as Trash2, t as Plus, X, S as Sparkles } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
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
const EMPTY = {
  pitches: 0,
  visitsScheduled: 0,
  visitsCompleted: 0,
  tours: 0,
  blocksRequested: 0,
  blocksApproved: 0,
  blocksRejected: 0,
  recent: []
};
function ownerIdFromEvent(e) {
  const direct = e.ownerId;
  if (direct) return direct;
  const roomId = e.roomId;
  if (roomId) return lookupOwnerByRoomId(roomId)?.id ?? null;
  return null;
}
__name(ownerIdFromEvent, "ownerIdFromEvent");
__name2(ownerIdFromEvent, "ownerIdFromEvent");
function fold(events, targetOwnerId) {
  const acc = { ...EMPTY, recent: [] };
  for (const e of events) {
    const oid = ownerIdFromEvent(e);
    if (oid !== targetOwnerId) continue;
    const at = (/* @__PURE__ */ new Date()).toISOString();
    const roomId = e.roomId;
    acc.lastEventAt = at;
    switch (e.type) {
      case "team.lead.pitched":
        acc.pitches++;
        acc.recent.unshift({ kind: "Lead pitched", roomId, at });
        break;
      case "team.visit.scheduled":
        acc.visitsScheduled++;
        acc.recent.unshift({ kind: "Visit scheduled", roomId, at });
        break;
      case "team.visit.ended":
        acc.visitsCompleted++;
        acc.recent.unshift({ kind: "Visit completed", roomId, at });
        break;
      case "tour.confirmation.sent":
      case "tour.reminder.sent":
        acc.tours++;
        acc.recent.unshift({ kind: "Tour outreach", roomId, at });
        break;
      case "team.block.requested":
        acc.blocksRequested++;
        acc.recent.unshift({ kind: "Block requested", roomId, at });
        break;
      case "owner.block.approved":
        acc.blocksApproved++;
        acc.recent.unshift({ kind: "Block approved", roomId, at });
        break;
      case "owner.block.rejected":
        acc.blocksRejected++;
        acc.recent.unshift({ kind: "Block rejected", roomId, at });
        break;
    }
  }
  acc.recent = acc.recent.slice(0, 10);
  return acc;
}
__name(fold, "fold");
__name2(fold, "fold");
function useOwnerEffort(ownerId) {
  const [effort, setEffort] = reactExports.useState(EMPTY);
  reactExports.useEffect(() => {
    if (!ownerId) {
      setEffort(EMPTY);
      return;
    }
    const recompute = /* @__PURE__ */ __name2(() => setEffort(fold(glueBus.recent(void 0, 200), ownerId)), "recompute");
    recompute();
    return glueBus.subscribe(recompute);
  }, [ownerId]);
  return effort;
}
__name(useOwnerEffort, "useOwnerEffort");
__name2(useOwnerEffort, "useOwnerEffort");
function useRegistry() {
  const [data, setData] = reactExports.useState(() => getRegistry());
  reactExports.useEffect(() => subscribeRegistry(() => setData(getRegistry())), []);
  return data;
}
__name(useRegistry, "useRegistry");
__name2(useRegistry, "useRegistry");
function useGlueRecent() {
  const [events, setEvents] = reactExports.useState(() => glueBus.recent(void 0, 200));
  reactExports.useEffect(() => {
    const refresh = /* @__PURE__ */ __name2(() => setEvents(glueBus.recent(void 0, 200)), "refresh");
    refresh();
    return glueBus.subscribe(refresh);
  }, []);
  return events;
}
__name(useGlueRecent, "useGlueRecent");
__name2(useGlueRecent, "useGlueRecent");
const STATUS_TONE = {
  vacant: "bg-success/15 text-success border-success/30",
  vacating: "bg-warning/15 text-warning-foreground border-warning/30",
  occupied: "bg-muted text-muted-foreground border-border",
  blocked: "bg-destructive/10 text-destructive border-destructive/30",
  held: "bg-accent/15 text-accent-foreground border-accent/30",
  booked: "bg-info/10 text-info border-info/30"
};
const PHASE_COPY = {
  idle: { label: "Update window opens 9:30 AM", tone: "bg-muted text-muted-foreground border-border" },
  open: { label: "OPEN — confirm rooms for today", tone: "bg-info/10 text-info border-info/30" },
  warn1: { label: "Reminder 1 of 3 — please confirm rooms", tone: "bg-warning/15 text-warning-foreground border-warning/30" },
  warn2: { label: "Reminder 2 of 3 — confirm before 7 PM", tone: "bg-warning/15 text-warning-foreground border-warning/30" },
  warn3: { label: "Final reminder — confirm before 10 PM", tone: "bg-destructive/10 text-destructive border-destructive/30" },
  locked: { label: "LOCKED — unconfirmed rooms removed", tone: "bg-destructive/10 text-destructive border-destructive/30" }
};
const TABS = [
  { id: "inventory", label: "Inventory", icon: Hotel },
  { id: "tours", label: "Tours", icon: CalendarDays },
  { id: "blocks", label: "Block requests", icon: Inbox },
  { id: "activity", label: "Activity", icon: Activity }
];
function OwnerHome() {
  const owners = useRegistry();
  const search = useSearch({ strict: false });
  const navigate = useNavigate();
  const [q, setQ] = reactExports.useState("");
  const selectedId = search.id ?? owners[0]?.id;
  const owner = reactExports.useMemo(
    () => owners.find((o) => o.id === selectedId) ?? owners[0],
    [owners, selectedId]
  );
  const tab = TABS.find((t) => t.id === search.tab)?.id ?? "inventory";
  const phase = dailyTruthPhase();
  const effort = useOwnerEffort(owner?.id ?? null);
  const glueEvents = useGlueRecent();
  const matches = reactExports.useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return owners.slice(0, 8);
    return owners.filter(
      (o) => o.id.toLowerCase().includes(term) || o.name.toLowerCase().includes(term) || (o.phone || "").includes(term)
    ).slice(0, 8);
  }, [owners, q]);
  if (!owner) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 text-sm text-muted-foreground", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:151:12", children: "No owners in registry yet." });
  }
  const allRooms = owner.properties.flatMap((p) => p.rooms);
  const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  const available = allRooms.filter(
    (r) => !r.lockedUnsellable && (r.status === "vacant" || r.status === "vacating")
  ).length;
  const held = allRooms.filter((r) => r.status === "held").length;
  const bookedToday = allRooms.filter((r) => r.status === "booked" && r.updatedAt.startsWith(today)).length;
  const vacatingSoon = allRooms.filter((r) => r.status === "vacating").length;
  const monthlyRevenue = allRooms.filter((r) => r.status === "occupied" || r.status === "booked").reduce((s, r) => s + r.rent * Math.max(1, r.beds), 0);
  const ownerRoomIds = new Set(allRooms.map((r) => r.id));
  const tours = reactExports.useMemo(() => {
    return glueEvents.filter((e) => e.type === "team.visit.scheduled" || e.type === "team.visit.started" || e.type === "team.visit.ended").map((e) => e).filter((e) => {
      const rid = e.roomId;
      if (rid && ownerRoomIds.has(rid)) return true;
      const oid = e.ownerId;
      return oid === owner.id;
    }).slice(0, 25);
  }, [glueEvents, ownerRoomIds, owner.id]);
  const toursScheduledCount = tours.filter((t) => t.type === "team.visit.scheduled").length;
  const selectOwner = /* @__PURE__ */ __name2((id) => navigate({ to: "/owner", search: /* @__PURE__ */ __name2((prev) => ({ ...prev, id }), "search") }), "selectOwner");
  const selectTab = /* @__PURE__ */ __name2((id) => navigate({ to: "/owner", search: /* @__PURE__ */ __name2((prev) => ({ ...prev, tab: id }), "search") }), "selectTab");
  const verifyAllUnchanged = /* @__PURE__ */ __name2(() => {
    allRooms.forEach((r) => verifyRoomToday(r.id));
    toast({ title: "All rooms confirmed", description: `${allRooms.length} rooms verified for today.` });
  }, "verifyAllUnchanged");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 pb-12", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:196:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex flex-col gap-3 md:flex-row md:items-end md:justify-between", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:198:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:199:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground font-mono", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:200:11", children: [
          "Owner ID · ",
          owner.id
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-semibold tracking-tight", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:203:11", children: owner.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:204:11", children: [
          owner.properties.length,
          " propert",
          owner.properties.length === 1 ? "y" : "ies",
          " ·",
          " ",
          new Set(owner.properties.map((p) => p.hub)).size,
          " hub",
          new Set(owner.properties.map((p) => p.hub)).size === 1 ? "" : "s",
          " ·",
          " ",
          owner.totalBeds,
          " beds"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("text-[11px] font-mono inline-flex items-center gap-2 rounded-md border px-2 py-1", PHASE_COPY[phase].tone), "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:211:9", children: [
        phase === "locked" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-3 w-3", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:212:33" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-3 w-3", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:212:64" }),
        PHASE_COPY[phase].label
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border border-border bg-card p-3 space-y-2", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:218:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:219:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: "Switch owner — search ID, name, phone…",
            value: q,
            onChange: /* @__PURE__ */ __name2((e) => setQ(e.target.value), "onChange"),
            className: "max-w-sm h-8 text-xs",
            "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:220:11"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex flex-wrap items-center gap-1.5 text-xs", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:226:11", children: [
          owner.phone && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { className: "inline-flex h-7 items-center gap-1 rounded-md border border-border px-2 hover:bg-muted", href: `tel:${owner.phone}`, "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:229:17", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3 w-3", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:230:19" }),
              " Call"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { className: "inline-flex h-7 items-center gap-1 rounded-md border border-border px-2 hover:bg-muted", target: "_blank", rel: "noreferrer", href: `https://wa.me/${owner.phone.replace(/\D/g, "")}`, "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:232:17", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-3 w-3", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:233:19" }),
              " WhatsApp"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              className: "inline-flex h-7 items-center gap-1 rounded-md border border-border px-2 hover:bg-muted",
              onClick: /* @__PURE__ */ __name2(() => {
                navigator.clipboard?.writeText(owner.id);
                toast({ title: "Owner ID copied", description: owner.id });
              }, "onClick"),
              "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:237:13",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-3 w-3", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:244:15" }),
                " Copy ID"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "h-7", onClick: verifyAllUnchanged, "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:246:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3 w-3 mr-1", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:247:15" }),
            " Confirm all unchanged"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:251:9", children: [
        matches.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: /* @__PURE__ */ __name2(() => selectOwner(o.id), "onClick"),
            className: cn(
              "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] whitespace-nowrap transition-colors",
              o.id === owner.id ? "border-accent/50 bg-accent/10 text-accent-foreground" : "border-border bg-card hover:bg-muted text-muted-foreground"
            ),
            "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:253:13",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] opacity-70", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:263:15", children: o.id }),
              o.name
            ]
          },
          o.id
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/owner/registry", className: "text-[11px] text-accent underline ml-auto self-center", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:267:11", children: "Full directory →" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:274:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Kpi, { label: "Available", value: available, tone: "success", icon: Hotel, "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:275:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Kpi, { label: "Held for Gharpayy", value: held, tone: "accent", icon: ShieldCheck, "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:276:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Kpi, { label: "Booked today", value: bookedToday, tone: "info", icon: CircleCheck, "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:277:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Kpi, { label: "Tours", value: toursScheduledCount, tone: "muted", icon: CalendarDays, "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:278:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Kpi, { label: "Vacating soon", value: vacatingSoon, tone: "warning", icon: TrendingUp, "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:279:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Kpi, { label: "Monthly ₹", value: `₹${(monthlyRevenue / 1e3).toFixed(0)}k`, tone: "muted", icon: Building2, "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:280:9" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 border-b border-border", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:284:7", children: TABS.map((t) => {
      const active = t.id === tab;
      const Icon = t.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: /* @__PURE__ */ __name2(() => selectTab(t.id), "onClick"),
          className: cn(
            "inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium border-b-2 -mb-px transition-colors",
            active ? "border-accent text-accent-foreground" : "border-transparent text-muted-foreground hover:text-foreground"
          ),
          "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:289:13",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:299:15" }),
            t.label
          ]
        },
        t.id
      );
    }) }),
    tab === "inventory" && /* @__PURE__ */ jsxRuntimeExports.jsx(InventoryTab, { owner, "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:306:31" }),
    tab === "tours" && /* @__PURE__ */ jsxRuntimeExports.jsx(ToursTab, { tours, allRooms, "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:307:27" }),
    tab === "blocks" && /* @__PURE__ */ jsxRuntimeExports.jsx(BlocksTab, { ownerId: owner.id, events: glueEvents, ownerRoomIds, "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:308:28" }),
    tab === "activity" && /* @__PURE__ */ jsxRuntimeExports.jsx(ActivityTab, { effort, "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:309:30" })
  ] });
}
__name(OwnerHome, "OwnerHome");
__name2(OwnerHome, "OwnerHome");
function InventoryTab({ owner }) {
  const bulkHold = /* @__PURE__ */ __name2((propRooms) => {
    const targets = propRooms.filter((r) => r.status === "vacant" || r.status === "vacating");
    targets.forEach((r) => holdForGharpayy(r.id, true));
    toast({
      title: `Held ${targets.length} rooms`,
      description: "Now exclusive for Gharpayy deals."
    });
  }, "bulkHold");
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:327:5", children: owner.properties.map((p) => {
    const addedCount = addedRoomCountFor(p.pgId);
    const max = maxAddedRoomsPerPG();
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card overflow-hidden", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:332:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 p-3 bg-muted/30 border-b border-border flex-wrap", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:333:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:334:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-lg bg-accent/10 grid place-items-center", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:335:17", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-4 w-4 text-accent", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:336:19" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:338:17", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-medium text-sm", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:339:19", children: [
              p.pgName,
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground font-normal", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:340:32", children: [
                "· ",
                p.area
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground font-mono", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:342:19", children: [
              p.pgId,
              " · hub:",
              p.hub,
              " · ",
              p.rooms.length,
              " rooms · ",
              addedCount,
              "/",
              max,
              " added"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:347:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "h-7 text-[11px]", onClick: /* @__PURE__ */ __name2(() => bulkHold(p.rooms), "onClick"), "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:348:17", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-3 w-3 mr-1", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:349:19" }),
            " Hold all vacant"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AddRoomsSheet, { pgId: p.pgId, pgName: p.pgName, addedCount, max, "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:351:17" })
        ] })
      ] }),
      p.rooms.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 text-[11px] text-muted-foreground", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:355:15", children: "No rooms configured yet." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 p-2", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:357:15", children: p.rooms.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(RoomCard, { room: r, "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:359:19" }, r.id)) })
    ] }, p.pgId);
  }) });
}
__name(InventoryTab, "InventoryTab");
__name2(InventoryTab, "InventoryTab");
function RoomCard({ room }) {
  const [status, setStatus] = reactExports.useState(room.status);
  const [rent, setRent] = reactExports.useState(String(room.rent));
  const [vacating, setVacating] = reactExports.useState(room.vacatingDate ?? "");
  reactExports.useEffect(() => {
    setStatus(room.status);
    setRent(String(room.rent));
    setVacating(room.vacatingDate ?? "");
  }, [room.status, room.rent, room.vacatingDate]);
  const dirty = status !== room.status || Number(rent) !== room.rent || (vacating || "") !== (room.vacatingDate ?? "");
  const save = /* @__PURE__ */ __name2(() => {
    patchRoom(room.id, {
      status,
      rent: Number(rent) || 0,
      vacatingDate: status === "vacating" ? vacating || void 0 : void 0,
      verifiedOn: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
    });
    toast({ title: "Room confirmed", description: room.id });
  }, "save");
  const toggleHold = /* @__PURE__ */ __name2(() => {
    const on = room.status !== "held";
    holdForGharpayy(room.id, on);
    toast({
      title: on ? "Held for Gharpayy" : "Released hold",
      description: room.id
    });
  }, "toggleHold");
  const remove = /* @__PURE__ */ __name2(() => {
    if (!room.ownerAdded) return;
    if (removeAddedRoom(room.id)) {
      toast({ title: "Room removed", description: room.id });
    }
  }, "remove");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "rounded-lg border bg-card p-2.5 space-y-2",
        room.lockedUnsellable ? "border-destructive/40" : room.status === "held" ? "border-accent/40" : room.verifiedToday ? "border-success/30" : "border-border"
      ),
      "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:413:5",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:425:7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:426:9", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] text-muted-foreground truncate", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:427:11", children: room.id }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-semibold capitalize flex items-center gap-1.5", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:428:11", children: [
              room.type,
              room.ownerAdded && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[9px] h-4 px-1", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:431:15", children: "added" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: cn("text-[10px]", STATUS_TONE[room.status]), "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:437:9", children: room.status })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-1.5", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:442:7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:443:9", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] uppercase tracking-wider text-muted-foreground font-mono", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:444:11", children: "Rent ₹" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                value: rent,
                onChange: /* @__PURE__ */ __name2((e) => setRent(e.target.value.replace(/\D/g, "")), "onChange"),
                className: "h-7 text-xs",
                "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:445:11"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:451:9", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] uppercase tracking-wider text-muted-foreground font-mono", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:452:11", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: status, onValueChange: /* @__PURE__ */ __name2((v) => setStatus(v), "onValueChange"), "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:453:11", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-7 text-xs", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:454:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:455:15" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:457:13", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "vacant", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:458:15", children: "Vacant" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "vacating", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:459:15", children: "Vacating" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "occupied", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:460:15", children: "Occupied" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "held", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:461:15", children: "Held for Gharpayy" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "blocked", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:462:15", children: "Blocked" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "booked", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:463:15", children: "Booked" })
              ] })
            ] })
          ] })
        ] }),
        status === "vacating" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:470:9", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] uppercase tracking-wider text-muted-foreground font-mono", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:471:11", children: "Vacating date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date", value: vacating, onChange: /* @__PURE__ */ __name2((e) => setVacating(e.target.value), "onChange"), className: "h-7 text-xs", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:472:11" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5 pt-1", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:476:7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: room.status === "held" ? "default" : "outline", className: "h-7 text-[11px] flex-1", onClick: toggleHold, "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:477:9", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-3 w-3 mr-1", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:478:11" }),
            room.status === "held" ? "Release hold" : "Hold for Gharpayy"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: "h-7 text-[11px]", onClick: save, disabled: !dirty, "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:481:9", children: "Save" }),
          room.ownerAdded && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", className: "h-7 text-[11px] text-destructive hover:text-destructive", onClick: remove, "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:485:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3 w-3", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:486:13" }) })
        ] })
      ]
    }
  );
}
__name(RoomCard, "RoomCard");
__name2(RoomCard, "RoomCard");
function AddRoomsSheet({
  pgId,
  pgName,
  addedCount,
  max
}) {
  const remaining = Math.max(0, max - addedCount);
  const [open, setOpen] = reactExports.useState(false);
  const [rows, setRows] = reactExports.useState(() => [{ type: "single", beds: 1, rent: 1e4 }]);
  const update = /* @__PURE__ */ __name2((i, patch) => {
    setRows((prev) => prev.map((r, idx) => idx === i ? { ...r, ...patch } : r));
  }, "update");
  const addRow = /* @__PURE__ */ __name2(() => {
    if (rows.length >= remaining) return;
    setRows((prev) => [...prev, { type: "single", beds: 1, rent: 1e4 }]);
  }, "addRow");
  const removeRow = /* @__PURE__ */ __name2((i) => setRows((prev) => prev.filter((_, idx) => idx !== i)), "removeRow");
  const save = /* @__PURE__ */ __name2(() => {
    const valid = rows.filter((r) => r.beds > 0 && r.rent > 0);
    if (valid.length === 0) {
      toast({ title: "Nothing to add", description: "Set beds and rent for at least one row." });
      return;
    }
    const res = addRooms(pgId, valid);
    toast({
      title: `${res.added} room${res.added === 1 ? "" : "s"} added`,
      description: res.skipped > 0 ? `${res.skipped} skipped — limit of ${max} per property.` : `Live in Sales Inventory Truth.`
    });
    setOpen(false);
    setRows([{ type: "single", beds: 1, rent: 1e4 }]);
  }, "save");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Sheet, { open, onOpenChange: setOpen, "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:544:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTrigger, { asChild: true, "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:545:7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "h-7 text-[11px]", disabled: remaining === 0, "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:546:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3 w-3 mr-1", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:547:11" }),
      " Add rooms"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetContent, { side: "right", className: "w-full sm:max-w-xl overflow-y-auto", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:550:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SheetHeader, { "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:551:9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetTitle, { "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:552:11", children: [
        "Add rooms to ",
        pgName
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:554:9", children: [
        "Add up to ",
        remaining,
        " more rooms (limit ",
        max,
        " per property). Hotel rules: one rent, one bed count per row. Rooms go live for sales immediately."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-2", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:559:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[1fr,80px,1fr,32px] gap-2 text-[10px] uppercase tracking-wider text-muted-foreground font-mono", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:560:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:561:13", children: "Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:562:13", children: "Beds" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:563:13", children: "Rent ₹" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:564:13" })
        ] }),
        rows.map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[1fr,80px,1fr,32px] gap-2 items-center", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:567:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: row.type, onValueChange: /* @__PURE__ */ __name2((v) => update(i, { type: v }), "onValueChange"), "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:568:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 text-xs", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:569:17", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:570:19" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:572:17", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "single", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:573:19", children: "Single" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "double", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:574:19", children: "Double" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "triple", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:575:19", children: "Triple" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "number",
              min: 1,
              value: row.beds,
              onChange: /* @__PURE__ */ __name2((e) => update(i, { beds: Number(e.target.value) || 0 }), "onChange"),
              className: "h-8 text-xs text-right",
              "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:578:15"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "number",
              min: 0,
              value: row.rent,
              onChange: /* @__PURE__ */ __name2((e) => update(i, { rent: Number(e.target.value) || 0 }), "onChange"),
              className: "h-8 text-xs text-right",
              "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:585:15"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: /* @__PURE__ */ __name2(() => removeRow(i), "onClick"),
              disabled: rows.length === 1,
              className: "h-8 w-8 grid place-items-center rounded-md border border-border text-muted-foreground hover:text-destructive disabled:opacity-30",
              "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:592:15",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3 w-3", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:597:17" })
            }
          )
        ] }, i)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            size: "sm",
            className: "h-8 text-xs w-full",
            onClick: addRow,
            disabled: rows.length >= remaining,
            "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:601:11",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3 w-3 mr-1", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:608:13" }),
              " Add row (",
              rows.length,
              "/",
              remaining,
              ")"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex justify-end gap-2", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:612:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", onClick: /* @__PURE__ */ __name2(() => setOpen(false), "onClick"), "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:613:11", children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: save, "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:616:11", children: [
          "Save ",
          rows.length,
          " room",
          rows.length === 1 ? "" : "s"
        ] })
      ] })
    ] })
  ] });
}
__name(AddRoomsSheet, "AddRoomsSheet");
__name2(AddRoomsSheet, "AddRoomsSheet");
function ToursTab({ tours, allRooms }) {
  if (tours.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-8 text-center text-sm text-muted-foreground", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:630:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "h-6 w-6 mx-auto mb-2 opacity-50", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:631:9" }),
      "No tours scheduled yet. When sales schedules a visit on any of your rooms it will appear here in real time."
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border bg-card overflow-hidden divide-y divide-border", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:638:5", children: tours.map((t, i) => {
    const rid = t.roomId;
    const room = rid ? allRooms.find((r) => r.id === rid) : void 0;
    const kind = t.type === "team.visit.scheduled" ? "Scheduled" : t.type === "team.visit.started" ? "In progress" : "Completed";
    const tone = t.type === "team.visit.scheduled" ? "text-info" : t.type === "team.visit.started" ? "text-warning-foreground" : "text-success";
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-3 text-xs", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:655:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: cn("h-4 w-4", tone), "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:656:13" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:657:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:658:15", children: room ? `${room.pgName} · ${room.type}` : "Tour event" }),
        rid && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] text-muted-foreground truncate", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:661:23", children: rid })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: cn("text-[10px]", tone), "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:663:13", children: kind })
    ] }, i);
  }) });
}
__name(ToursTab, "ToursTab");
__name2(ToursTab, "ToursTab");
function BlocksTab({
  ownerId,
  events,
  ownerRoomIds
}) {
  const requests = events.filter((e) => e.type === "team.block.requested").map((e) => e).filter((e) => e.ownerId === ownerId || ownerRoomIds.has(e.roomId)).slice(0, 20);
  if (requests.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-8 text-center text-sm text-muted-foreground", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:692:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Inbox, { className: "h-6 w-6 mx-auto mb-2 opacity-50", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:693:9" }),
      "Inbox zero. Block requests from the team land here."
    ] });
  }
  const approve = /* @__PURE__ */ __name2((req) => {
    glueBus.publish({
      type: "owner.block.approved",
      blockId: req.blockId,
      roomId: req.roomId,
      leadId: req.leadId
    });
    holdForGharpayy(req.roomId, true);
    toast({ title: "Block approved", description: req.roomId });
  }, "approve");
  const reject = /* @__PURE__ */ __name2((req) => {
    glueBus.publish({
      type: "owner.block.rejected",
      blockId: req.blockId,
      roomId: req.roomId,
      leadId: req.leadId
    });
    toast({ title: "Block rejected", description: req.roomId });
  }, "reject");
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:720:5", children: requests.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-warning/30 bg-card p-3 flex flex-wrap items-center gap-3", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:722:9", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-[180px]", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:723:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-semibold", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:724:13", children: [
        "Lead ",
        r.leadId
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground font-mono mt-0.5", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:725:13", children: r.roomId })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:727:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: /* @__PURE__ */ __name2(() => reject(r), "onClick"), "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:728:13", children: "Reject" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: /* @__PURE__ */ __name2(() => approve(r), "onClick"), "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:731:13", children: "Approve & hold" })
    ] })
  ] }, r.blockId)) });
}
__name(BlocksTab, "BlocksTab");
__name2(BlocksTab, "BlocksTab");
function ActivityTab({ effort }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card overflow-hidden", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:745:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border-b border-border flex items-center gap-2", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:746:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-4 w-4 text-accent", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:747:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-base font-semibold", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:748:9", children: "What Gharpayy did for you" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-[10px] text-muted-foreground font-mono", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:749:9", children: "live · last 200 events" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3 p-3", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:751:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { label: "Leads pitched", value: effort.pitches, "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:752:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { label: "Visits scheduled", value: effort.visitsScheduled, "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:753:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { label: "Visits completed", value: effort.visitsCompleted, "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:754:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { label: "Tours / outreach", value: effort.tours, "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:755:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { label: "Blocks requested", value: effort.blocksRequested, "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:756:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { label: "Blocks approved", value: effort.blocksApproved, tone: "success", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:757:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { label: "Blocks rejected", value: effort.blocksRejected, tone: "warning", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:758:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Mini, { label: "Last activity", value: effort.lastEventAt ? "live" : "—", small: true, "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:759:9" })
    ] }),
    effort.recent.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border divide-y divide-border text-[11px]", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:762:9", children: effort.recent.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-3 py-1.5", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:764:13", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3 text-accent", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:765:15" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:766:15", children: r.kind }),
      r.roomId && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-muted-foreground", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:767:28", children: [
        "· ",
        r.roomId
      ] })
    ] }, i)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-4 text-[11px] text-muted-foreground text-center", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:772:9", children: "No team activity yet today." })
  ] });
}
__name(ActivityTab, "ActivityTab");
__name2(ActivityTab, "ActivityTab");
function Kpi({
  label,
  value,
  tone,
  icon: Icon
}) {
  const toneClass = tone === "success" ? "text-success" : tone === "info" ? "text-info" : tone === "warning" ? "text-warning-foreground" : tone === "accent" ? "text-accent-foreground" : "text-muted-foreground";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-3 flex items-start gap-2", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:804:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: cn("h-4 w-4 mt-0.5", toneClass), "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:805:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:806:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground font-mono", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:807:9", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("font-display text-xl font-semibold tabular-nums truncate", toneClass), "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:808:9", children: value })
    ] })
  ] });
}
__name(Kpi, "Kpi");
__name2(Kpi, "Kpi");
function Mini({
  label,
  value,
  tone,
  small
}) {
  const toneClass = tone === "success" ? "text-success" : tone === "warning" ? "text-warning-foreground" : "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-muted/20 p-2", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:827:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground font-mono", "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:828:7", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("font-display font-semibold tabular-nums", small ? "text-xs" : "text-lg", toneClass), "data-tsd-source": "/src/owner/pages/OwnerHome.tsx:829:7", children: value })
  ] });
}
__name(Mini, "Mini");
__name2(Mini, "Mini");
const SplitComponent = /* @__PURE__ */ __name2(() => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/owner/index.tsx:11:20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(OwnerHome, { "data-tsd-source": "/src/routes/owner/index.tsx:11:30" }) }), "SplitComponent");
export {
  SplitComponent as component
};
