var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var _a;
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AppShell, u as useQuotations, W as useSnoozes, X as formatINR$1, V as ScrollArea, Y as SNOOZE_PRESETS, Z as scoreLead, _ as computeNBA, $ as DropdownMenu, a0 as DropdownMenuTrigger, a1 as DropdownMenuContent, a2 as DropdownMenuLabel, a3 as DropdownMenuSeparator, a4 as DropdownMenuItem, a5 as ClientOnly, a6 as ImpactQueue, a7 as renderQuotationMessage } from "./AppShell-rXFHrudv.mjs";
import { q as cn, k as Button, u as useApp, I as useOwnerInventory, b as useVisitWar, Z as Dialog, $ as DialogContent, a0 as DialogHeader, a1 as DialogTitle, a5 as DialogDescription, B as Badge, F as STAGE_META, X as Input, a6 as OFFICE_PHONE, a7 as CopyChip, c as useMountedNow, S as Select, w as SelectTrigger, x as SelectValue, y as SelectContent, z as SelectItem, T as Tabs, h as TabsList, j as TabsTrigger, l as TabsContent, af as VisitWarRoom, a8 as ownerCodeForPG, a9 as findBufferConflicts, v as visitBlock, g as upsertVisitEvent, aa as tourScheduledMessage, ab as copyToClipboard, G as waLink, ac as quoteMessage, ad as negotiateMessage, ae as checkinMessage } from "./router-Cbs6ivkN.mjs";
import { P as Portal, C as Content2, a as Provider, R as Root3, T as Trigger } from "../_libs/radix-ui__react-tooltip.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { F as FreshnessBadge, l as logTimeline, c as createHold, r as reconfirmProperty } from "./FreshnessBadge-DzNjZZbs.mjs";
import { c as create, p as persist } from "../_libs/zustand.mjs";
import "../_libs/react-dom.mjs";
import { g as TriangleAlert, ak as RotateCcw, S as Sparkles, P as Phone, H as MessageSquare, y as Calendar, ae as ExternalLink, bf as Mail, ap as Play, bi as MapPinned, aI as Footprints, aQ as Flag, t as Plus, _ as House, K as MapPin, I as IndianRupee, b7 as Bed, k as FileText, be as Handshake, l as CircleCheck, b8 as Lock, bj as StickyNote, af as BellRing, bk as Moon, F as Flame, C as ChevronDown, s as Clock, aS as Trash2, aV as LayoutGrid, R as Radio, aO as ListChecks } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
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
const _ImpactErrorBoundary = (_a = class extends reactExports.Component {
  state = { hasError: false, key: 0 };
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    console.error("[ImpactQueue] caught:", error, info);
  }
  reset = /* @__PURE__ */ __name2(() => this.setState((s) => ({ hasError: false, error: void 0, key: s.key + 1 })), "reset");
  render() {
    if (this.state.hasError) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "m-4 rounded-xl border border-warning/40 bg-warning/5 p-6", "data-tsd-source": "/src/components/impact/ImpactErrorBoundary.tsx:27:9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", "data-tsd-source": "/src/components/impact/ImpactErrorBoundary.tsx:28:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-5 w-5 text-warning mt-0.5", "data-tsd-source": "/src/components/impact/ImpactErrorBoundary.tsx:29:13" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", "data-tsd-source": "/src/components/impact/ImpactErrorBoundary.tsx:30:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", "data-tsd-source": "/src/components/impact/ImpactErrorBoundary.tsx:31:15", children: "A card hiccuped — your work is safe" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", "data-tsd-source": "/src/components/impact/ImpactErrorBoundary.tsx:32:15", children: "The Impact Queue recovered locally. Click reload to refresh just this view — the rest of the workspace is untouched." }),
          this.state.error?.message && /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "mt-3 max-h-24 overflow-auto rounded bg-muted p-2 text-[10px] font-mono text-muted-foreground", "data-tsd-source": "/src/components/impact/ImpactErrorBoundary.tsx:37:17", children: this.state.error.message }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3", "data-tsd-source": "/src/components/impact/ImpactErrorBoundary.tsx:41:15", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: this.reset, className: "h-7 text-xs gap-1", "data-tsd-source": "/src/components/impact/ImpactErrorBoundary.tsx:42:17", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "h-3 w-3", "data-tsd-source": "/src/components/impact/ImpactErrorBoundary.tsx:43:19" }),
            " Reload Impact Queue"
          ] }) })
        ] })
      ] }) });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-tsd-source": "/src/components/impact/ImpactErrorBoundary.tsx:51:12", children: this.props.children }, this.state.key);
  }
}, __name(_a, "_ImpactErrorBoundary"), _a);
__name2(_ImpactErrorBoundary, "ImpactErrorBoundary");
let ImpactErrorBoundary = _ImpactErrorBoundary;
const TooltipProvider = Provider;
const Tooltip = Root3;
const TooltipTrigger = Trigger;
const TooltipContent = reactExports.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-tooltip-content-transform-origin)",
      className
    ),
    ...props
  }
) }));
TooltipContent.displayName = Content2.displayName;
const VERB_META = {
  schedule: { title: "Schedule a tour", sub: "Pick a property to book the visit.", tier: "text-do-today" },
  quote: { title: "Send a quotation", sub: "Pick a property to draft the price card.", tier: "text-do-today" },
  negotiate: { title: "Negotiate offer", sub: "Pick the property the lead is debating.", tier: "text-do-now" },
  book: { title: "Direct book", sub: "Close the deal — pick the room to lock in.", tier: "text-won" },
  checkin: { title: "Schedule check-in", sub: "Pick the booked property to set check-in.", tier: "text-won" },
  call: { title: "Log a call", sub: "Pick the property you discussed (optional).", tier: "text-do-now" }
};
function scoreProps(lead, properties) {
  return properties.map((p) => {
    const reasons = [];
    let s = 0;
    const lo = lead.budget * 0.85, hi = lead.budget * 1.15;
    if (p.pricePerBed >= lo && p.pricePerBed <= hi) {
      s += 40;
      reasons.push("Budget fit");
    } else if (p.pricePerBed < lo) {
      s += 25;
      reasons.push("Under budget");
    } else {
      s += 10;
      reasons.push("Above budget");
    }
    if (lead.preferredArea && p.area.toLowerCase().includes(lead.preferredArea.toLowerCase())) {
      s += 25;
      reasons.push(`In ${p.area}`);
    }
    if (p.vacantBeds > 0) {
      s += 20;
      reasons.push(`${p.vacantBeds} beds free`);
    } else {
      s -= 30;
      reasons.push("Full");
    }
    if (p.daysSinceLastBooking <= 3) {
      s += 10;
      reasons.push("Hot");
    }
    return { p, score: s, reasons };
  }).sort((a, b) => b.score - a.score);
}
__name(scoreProps, "scoreProps");
__name2(scoreProps, "scoreProps");
function defaultQuoteForProperty(p) {
  const actual = p.pricePerBed;
  const disc = Math.round(actual * 0.92);
  return {
    propertyId: p.id,
    propertyName: p.name,
    roomType: "Sharing",
    actualRent: actual,
    discountedPrice: disc,
    deposit: disc,
    prebook: 2e3,
    maintenance: 500,
    maintenanceType: "Monthly",
    lockIn: "3 months",
    notice: "1 month",
    validityMinutes: 120,
    validUntilISO: new Date(Date.now() + 2 * 60 * 60 * 1e3).toISOString()
  };
}
__name(defaultQuoteForProperty, "defaultQuoteForProperty");
__name2(defaultQuoteForProperty, "defaultQuoteForProperty");
function LeadActionDialog({
  open,
  onOpenChange,
  lead,
  verb
}) {
  const {
    properties,
    currentTcmId,
    scheduleTour,
    closeDeal,
    logCall,
    tours,
    addProperty,
    tcms,
    rescheduleTour,
    addNote,
    addFollowUp,
    selectLead
  } = useApp();
  const ownerInv = useOwnerInventory();
  const livePropsRaw = reactExports.useMemo(() => properties.map((p) => {
    const inv = ownerInv[p.id];
    if (!inv) return p;
    const free = inv.isLive ? Math.max(0, inv.vacantBeds - inv.blockedBeds) : 0;
    return { ...p, vacantBeds: free, totalBeds: inv.totalBeds };
  }), [properties, ownerInv]);
  const addQuote = useQuotations((s) => s.add);
  const snooze = useSnoozes((s) => s.snooze);
  const warUpsert = useVisitWar((s) => s.upsert);
  const warPatch = useVisitWar((s) => s.patch);
  const warPushAlert = useVisitWar((s) => s.pushAlert);
  const warRecords = useVisitWar((s) => s.records);
  const [query, setQuery] = reactExports.useState("");
  const [showAdd, setShowAdd] = reactExports.useState(false);
  const [draft, setDraft] = reactExports.useState({ name: "", area: "", pricePerBed: 12e3, vacantBeds: 1, totalBeds: 10 });
  const [note, setNote] = reactExports.useState("");
  const handleAddProperty = /* @__PURE__ */ __name2(() => {
    if (!draft.name.trim() || !draft.area.trim()) {
      toast.error("Name and area are required");
      return;
    }
    const p = addProperty({
      name: draft.name.trim(),
      area: draft.area.trim(),
      pricePerBed: Number(draft.pricePerBed) || 0,
      vacantBeds: Math.max(0, Number(draft.vacantBeds) || 0),
      totalBeds: Math.max(1, Number(draft.totalBeds) || 1)
    });
    toast.success(`Added ${p.name}`);
    setShowAdd(false);
    setDraft({ name: "", area: "", pricePerBed: 12e3, vacantBeds: 1, totalBeds: 10 });
    setQuery(p.name);
  }, "handleAddProperty");
  const scored = reactExports.useMemo(() => {
    if (!lead) return [];
    const all = scoreProps(lead, livePropsRaw);
    if (!query.trim()) return all;
    const q = query.toLowerCase();
    return all.filter(
      ({ p }) => p.name.toLowerCase().includes(q) || p.area.toLowerCase().includes(q)
    );
  }, [lead, livePropsRaw, query]);
  if (!lead) return null;
  const meta = VERB_META[verb];
  const assignedTcm = tcms.find((t) => t.id === lead.assignedTcmId);
  const openTourForLead = tours.find((t) => t.leadId === lead.id && t.status === "scheduled");
  const waSend = /* @__PURE__ */ __name2((text) => {
    const url = `https://wa.me/${lead.phone.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener");
  }, "waSend");
  const handleSchedule = /* @__PURE__ */ __name2((p) => {
    const when = new Date(Date.now() + 24 * 60 * 60 * 1e3).toISOString();
    const wasReschedule = !!openTourForLead;
    let tourId = openTourForLead?.id;
    if (openTourForLead) {
      rescheduleTour(openTourForLead.id, when);
      logTimeline(lead.id, "visit-scheduled", `Visit rescheduled · ${p.name}`, { propertyId: p.id });
    } else {
      const t = scheduleTour({ leadId: lead.id, propertyId: p.id, tcmId: lead.assignedTcmId || currentTcmId, scheduledAt: when });
      tourId = t.id;
      logTimeline(lead.id, "visit-scheduled", `Visit scheduled · ${p.name}`, { propertyId: p.id });
    }
    if (tourId) {
      const tcm = tcms.find((t) => t.id === (lead.assignedTcmId || currentTcmId));
      const ownerCode = ownerCodeForPG(p.id);
      const whenMs = new Date(when).getTime();
      const conflicts = findBufferConflicts({
        tcmEmail: tcm?.email,
        scheduledAt: whenMs,
        excludeTourId: tourId
      });
      if (conflicts.length) {
        toast.warning(`Buffer conflict · ${tcm?.name ?? "TCM"} has a nearby visit`, {
          description: `${conflicts.length} overlapping slot${conflicts.length > 1 ? "s" : ""} — consider rescheduling.`,
          duration: 6e3
        });
      }
      warUpsert({
        tourId,
        leadId: lead.id,
        leadName: lead.name,
        leadPhone: lead.phone,
        propertyId: p.id,
        propertyName: p.name,
        propertyArea: p.area,
        tcmId: tcm?.id ?? currentTcmId,
        tcmName: tcm?.name ?? "TCM",
        scheduledAt: whenMs,
        stage: "scheduled",
        objections: [],
        outcome: null,
        lastUpdateAt: Date.now(),
        ownerCode
      });
      const cb = visitBlock({
        propertyName: p.name,
        propertyArea: p.area,
        scheduledAt: whenMs,
        pricePerBed: p.pricePerBed,
        leadPhone: lead.phone
      });
      const evtId = upsertVisitEvent({
        tourId,
        leadId: lead.id,
        leadName: lead.name,
        leadPhone: lead.phone,
        propertyName: p.name,
        propertyArea: p.area,
        scheduledAt: whenMs,
        tcmEmail: tcm?.email,
        description: cb
      });
      warPatch(tourId, { calendarEventId: evtId });
      warPushAlert({
        tourId,
        leadName: lead.name,
        severity: "info",
        kind: "started",
        message: `${wasReschedule ? "Rescheduled" : "Scheduled"} · ${p.name} (${p.area})`
      });
    }
    const msg = tourScheduledMessage(p, when);
    copyToClipboard(msg);
    toast.success(`${wasReschedule ? "Rescheduled" : "Scheduled"} · ${p.name}`, {
      description: `Message copied. Call us 20 min prior on ${OFFICE_PHONE}.`,
      duration: 7e3,
      action: {
        label: "Open WhatsApp",
        onClick: /* @__PURE__ */ __name2(() => window.open(waLink(lead.phone, msg), "_blank", "noopener"), "onClick")
      }
    });
    onOpenChange(false);
  }, "handleSchedule");
  const advanceVisit = /* @__PURE__ */ __name2((stage) => {
    if (!openTourForLead) return;
    const rec = warRecords[openTourForLead.id];
    const stamp = Date.now();
    const stageStampKey = stage === "started" ? "startedAt" : stage === "at-property" ? "reachedAt" : stage === "tour-ongoing" ? "ongoingAt" : stage === "completed" ? "completedAt" : void 0;
    if (!rec) {
      const tcm = tcms.find((t) => t.id === (lead.assignedTcmId || currentTcmId));
      const p = properties.find((x) => x.id === openTourForLead.propertyId);
      warUpsert({
        tourId: openTourForLead.id,
        leadId: lead.id,
        leadName: lead.name,
        leadPhone: lead.phone,
        propertyId: p?.id ?? "",
        propertyName: p?.name ?? "Property",
        propertyArea: p?.area ?? "",
        tcmId: tcm?.id ?? currentTcmId,
        tcmName: tcm?.name ?? "TCM",
        scheduledAt: new Date(openTourForLead.scheduledAt).getTime(),
        stage,
        objections: [],
        outcome: null,
        lastUpdateAt: stamp,
        ...stageStampKey ? { [stageStampKey]: stamp } : {}
      });
    } else {
      warPatch(openTourForLead.id, {
        stage,
        ...stageStampKey ? { [stageStampKey]: stamp } : {}
      });
    }
    warPushAlert({
      tourId: openTourForLead.id,
      leadName: lead.name,
      severity: stage === "completed" ? "win" : "info",
      kind: stage === "started" ? "started" : stage === "at-property" ? "reached" : stage === "tour-ongoing" ? "ongoing" : "completed",
      message: `${STAGE_META[stage].label} · ${lead.name}`
    });
    logTimeline(lead.id, "note", `Visit → ${STAGE_META[stage].label}`);
    toast.success(`Visit → ${STAGE_META[stage].label}`, {
      description: "Mirrored to Visit War Room."
    });
  }, "advanceVisit");
  const currentVisit = openTourForLead ? warRecords[openTourForLead.id] : void 0;
  const handleQuote = /* @__PURE__ */ __name2((p) => {
    const draft2 = defaultQuoteForProperty(p);
    const message = renderQuotationMessage(draft2);
    addQuote({
      leadId: lead.id,
      tcmId: currentTcmId,
      ...draft2,
      message
    });
    const out = quoteMessage(p, draft2.discountedPrice);
    copyToClipboard(out);
    toast.success(`Quote ready · ${p.name}`, {
      description: `Message copied. Call ${OFFICE_PHONE} to confirm.`,
      duration: 6e3,
      action: { label: "Open WhatsApp", onClick: /* @__PURE__ */ __name2(() => window.open(waLink(lead.phone, out), "_blank", "noopener"), "onClick") }
    });
    logTimeline(lead.id, "payment-initiated", `Quote sent · ${p.name} · ${formatINR$1(draft2.discountedPrice)}`, { propertyId: p.id });
    onOpenChange(false);
  }, "handleQuote");
  const handleNegotiate = /* @__PURE__ */ __name2((p) => {
    const offer = Math.round(p.pricePerBed * 0.9);
    const text = negotiateMessage(p, offer);
    copyToClipboard(text);
    toast.success(`Negotiation ready · ${p.name}`, {
      description: `Copied. Lead will call ${OFFICE_PHONE} to lock.`,
      duration: 6e3,
      action: { label: "Open WhatsApp", onClick: /* @__PURE__ */ __name2(() => window.open(waLink(lead.phone, text), "_blank", "noopener"), "onClick") }
    });
    logTimeline(lead.id, "note", `Negotiation sent · ${p.name} @ ${formatINR$1(offer)}`, { propertyId: p.id });
    onOpenChange(false);
  }, "handleNegotiate");
  const handleHold = /* @__PURE__ */ __name2((p) => {
    const h = createHold({
      leadId: lead.id,
      leadName: lead.name,
      propertyId: p.id,
      propertyName: p.name,
      amount: p.pricePerBed
    });
    reconfirmProperty(p.id, currentTcmId);
    toast.success(`Hold created · ${p.name} · expires in 2h`, {
      description: `Hold #${h.id.slice(-6)} · awaiting team + owner ack`
    });
    onOpenChange(false);
  }, "handleHold");
  const handleBook = /* @__PURE__ */ __name2((p) => {
    const t = scheduleTour({
      leadId: lead.id,
      propertyId: p.id,
      tcmId: currentTcmId,
      scheduledAt: (/* @__PURE__ */ new Date()).toISOString()
    });
    closeDeal({
      leadId: lead.id,
      tourId: t.id,
      propertyId: p.id,
      tcmId: currentTcmId,
      amount: p.pricePerBed
    });
    warUpsert({
      tourId: t.id,
      leadId: lead.id,
      leadName: lead.name,
      leadPhone: lead.phone,
      propertyId: p.id,
      propertyName: p.name,
      propertyArea: p.area,
      tcmId: currentTcmId,
      tcmName: tcms.find((x) => x.id === currentTcmId)?.name ?? "TCM",
      scheduledAt: Date.now(),
      stage: "booked",
      objections: [],
      outcome: "booked",
      lastUpdateAt: Date.now(),
      completedAt: Date.now()
    });
    warPushAlert({
      tourId: t.id,
      leadName: lead.name,
      severity: "win",
      kind: "booked",
      message: `Booked · ${p.name} · ${formatINR$1(p.pricePerBed)}/mo`
    });
    logTimeline(lead.id, "booking-confirmed", `Booking confirmed · ${p.name} · ${formatINR$1(p.pricePerBed)}/mo`, { propertyId: p.id });
    toast.success(`Booked · ${p.name} · ${formatINR$1(p.pricePerBed)}/mo`);
    onOpenChange(false);
  }, "handleBook");
  const handleCheckin = /* @__PURE__ */ __name2((p) => {
    const text = checkinMessage(p);
    copyToClipboard(text);
    toast.success(`Check-in ready · ${p.name}`, {
      description: `Copied. Lead can call ${OFFICE_PHONE} for slots.`,
      duration: 6e3,
      action: { label: "Open WhatsApp", onClick: /* @__PURE__ */ __name2(() => window.open(waLink(lead.phone, text), "_blank", "noopener"), "onClick") }
    });
    logTimeline(lead.id, "check-in", `Check-in initiated · ${p.name}`, { propertyId: p.id });
    onOpenChange(false);
  }, "handleCheckin");
  const handleCall = /* @__PURE__ */ __name2((p) => {
    logCall(lead.id);
    window.open(`tel:${lead.phone}`, "_self");
    logTimeline(lead.id, "note", p ? `Call logged re ${p.name}` : "Call logged", p ? { propertyId: p.id } : void 0);
    toast.success(p ? `Calling ${lead.name.split(" ")[0]} re ${p.name}` : `Calling ${lead.name.split(" ")[0]}`);
    onOpenChange(false);
  }, "handleCall");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange, "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:368:5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-3xl p-0 overflow-hidden", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:369:7", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { className: "px-5 pt-5 pb-3 border-b", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:370:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: `flex items-center gap-2 ${meta.tier}`, "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:371:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:372:13" }),
        meta.title,
        " · ",
        lead.name
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogDescription, { className: "text-xs", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:375:11", children: [
        meta.sub,
        " · Budget ",
        formatINR$1(lead.budget),
        " · ",
        lead.preferredArea || "any zone"
      ] }),
      assignedTcm && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex flex-wrap items-center gap-1.5 text-[11px]", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:382:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "gap-1 text-[10px]", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:383:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center justify-center h-4 w-4 rounded-full bg-accent text-accent-foreground text-[9px] font-mono", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:384:17", children: assignedTcm.initials }),
          assignedTcm.name,
          " · ",
          assignedTcm.zone
        ] }),
        assignedTcm.phone && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "sm", variant: "outline", className: "h-6 text-[10px] gap-1 px-2", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:391:19", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${assignedTcm.phone}`, "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:392:21", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3 w-3", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:392:58" }),
            assignedTcm.phone
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "sm", variant: "outline", className: "h-6 text-[10px] gap-1 px-2", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:394:19", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `https://wa.me/91${assignedTcm.phone.replace(/\D/g, "").slice(-10)}`, target: "_blank", rel: "noopener", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:395:21", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-3 w-3", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:396:23" }),
            " WA team"
          ] }) })
        ] }),
        assignedTcm.calendly && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "sm", variant: "outline", className: "h-6 text-[10px] gap-1 px-2", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:402:17", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: assignedTcm.calendly, target: "_blank", rel: "noopener", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:403:19", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3 w-3", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:404:21" }),
          " Calendly ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-2.5 w-2.5", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:404:67" })
        ] }) }),
        assignedTcm.email && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "sm", variant: "ghost", className: "h-6 text-[10px] gap-1 px-2 text-muted-foreground", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:409:17", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `mailto:${assignedTcm.email}`, "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:410:19", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3 w-3", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:410:59" }),
          assignedTcm.email
        ] }) }),
        openTourForLead && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-[10px] gap-1 border-do-today/40 text-do-today", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:414:17", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "h-3 w-3", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:415:19" }),
          " Tour open — actions reschedule it"
        ] })
      ] }),
      openTourForLead && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex flex-wrap items-center gap-1.5 text-[11px] rounded-md border bg-muted/30 px-2 py-1.5", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:423:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-semibold", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:424:15", children: "Visit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Badge,
          {
            variant: "outline",
            className: "text-[10px] font-mono",
            style: {
              background: STAGE_META[currentVisit?.stage ?? "scheduled"].bg,
              color: STAGE_META[currentVisit?.stage ?? "scheduled"].fg,
              borderColor: STAGE_META[currentVisit?.stage ?? "scheduled"].fg + "55"
            },
            "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:425:15",
            children: STAGE_META[currentVisit?.stage ?? "scheduled"].label
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            variant: "outline",
            className: "h-6 text-[10px] gap-1 px-2",
            onClick: /* @__PURE__ */ __name2(() => advanceVisit("started"), "onClick"),
            "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:436:15",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-3 w-3", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:438:17" }),
              " Start"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            variant: "outline",
            className: "h-6 text-[10px] gap-1 px-2",
            onClick: /* @__PURE__ */ __name2(() => advanceVisit("at-property"), "onClick"),
            "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:440:15",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPinned, { className: "h-3 w-3", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:442:17" }),
              " At property"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            variant: "outline",
            className: "h-6 text-[10px] gap-1 px-2",
            onClick: /* @__PURE__ */ __name2(() => advanceVisit("tour-ongoing"), "onClick"),
            "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:444:15",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Footprints, { className: "h-3 w-3", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:446:17" }),
              " Tour ongoing"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            variant: "outline",
            className: "h-6 text-[10px] gap-1 px-2",
            onClick: /* @__PURE__ */ __name2(() => advanceVisit("completed"), "onClick"),
            "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:448:15",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Flag, { className: "h-3 w-3", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:450:17" }),
              " Visit done"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "sm", variant: "ghost", className: "h-6 text-[10px] gap-1 px-2 ml-auto text-muted-foreground", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:452:15", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/visit-war", target: "_blank", rel: "noopener", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:453:17", children: [
          "Open war room ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-2.5 w-2.5", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:454:33" })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 pt-3 pb-2 flex items-center gap-2", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:461:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          value: query,
          onChange: /* @__PURE__ */ __name2((e) => setQuery(e.target.value), "onChange"),
          placeholder: "Search property by name or area…",
          className: "h-8 text-xs",
          "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:462:11"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "h-8 text-xs gap-1.5", onClick: /* @__PURE__ */ __name2(() => setShowAdd((v) => !v), "onClick"), "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:468:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:469:13" }),
        " Add property"
      ] }),
      verb === "call" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "h-8 text-xs gap-1.5", onClick: /* @__PURE__ */ __name2(() => handleCall(), "onClick"), "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:472:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:473:15" }),
        " Call without property"
      ] })
    ] }),
    showAdd && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-5 mb-2 rounded-md border bg-muted/30 p-3 grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:479:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          className: "h-8 text-xs col-span-2",
          placeholder: "Property name",
          value: draft.name,
          onChange: /* @__PURE__ */ __name2((e) => setDraft({ ...draft, name: e.target.value }), "onChange"),
          "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:480:13"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          className: "h-8 text-xs",
          placeholder: "Area",
          value: draft.area,
          onChange: /* @__PURE__ */ __name2((e) => setDraft({ ...draft, area: e.target.value }), "onChange"),
          "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:482:13"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          className: "h-8 text-xs",
          type: "number",
          placeholder: "₹/bed",
          value: draft.pricePerBed,
          onChange: /* @__PURE__ */ __name2((e) => setDraft({ ...draft, pricePerBed: Number(e.target.value) }), "onChange"),
          "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:484:13"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:486:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            className: "h-8 text-xs w-14",
            type: "number",
            placeholder: "Vac",
            value: draft.vacantBeds,
            onChange: /* @__PURE__ */ __name2((e) => setDraft({ ...draft, vacantBeds: Number(e.target.value) }), "onChange"),
            "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:487:15"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            className: "h-8 text-xs w-14",
            type: "number",
            placeholder: "Tot",
            value: draft.totalBeds,
            onChange: /* @__PURE__ */ __name2((e) => setDraft({ ...draft, totalBeds: Number(e.target.value) }), "onChange"),
            "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:489:15"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: "h-8 text-xs col-span-2 sm:col-span-5", onClick: handleAddProperty, "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:492:13", children: "Save property" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(ScrollArea, { className: "max-h-[60vh] px-5 pb-5", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:498:9", children: [
      scored.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground text-center py-8 space-y-2", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:500:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:501:15", children: "No properties match — clear search or add a new one." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "h-7 text-xs gap-1.5", onClick: /* @__PURE__ */ __name2(() => setShowAdd(true), "onClick"), "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:502:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3 w-3", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:503:17" }),
          " Add a property"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:507:11", children: scored.map(({ p, score, reasons }) => {
        const primary = verb === "book" ? { icon: House, label: "Direct book", run: /* @__PURE__ */ __name2(() => handleBook(p), "run"), cls: "bg-won text-white hover:bg-won/90" } : verb === "schedule" ? { icon: Calendar, label: "Schedule", run: /* @__PURE__ */ __name2(() => handleSchedule(p), "run"), cls: "" } : verb === "quote" ? { icon: FileText, label: "Send quote", run: /* @__PURE__ */ __name2(() => handleQuote(p), "run"), cls: "" } : verb === "negotiate" ? { icon: Handshake, label: "Negotiate", run: /* @__PURE__ */ __name2(() => handleNegotiate(p), "run"), cls: "" } : verb === "checkin" ? { icon: CircleCheck, label: "Check-in", run: /* @__PURE__ */ __name2(() => handleCheckin(p), "run"), cls: "" } : { icon: Phone, label: "Log call", run: /* @__PURE__ */ __name2(() => handleCall(p), "run"), cls: "" };
        const PIcon = primary.icon;
        const tone = score >= 70 ? "border-do-now/50" : score >= 50 ? "border-do-today/50" : score >= 30 ? "border-do-soon/40" : "border-border";
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: `rounded-md border ${tone} bg-card p-3`, "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:524:17", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:525:19", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "h-4 w-4 mt-0.5 text-muted-foreground shrink-0", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:526:21" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:527:21", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:528:23", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold truncate", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:529:25", children: p.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[10px] font-mono", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:530:25", children: score }),
                p.vacantBeds === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "destructive", className: "text-[10px]", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:532:27", children: "Full" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FreshnessBadge, { propertyId: p.id, "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:534:25" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground flex items-center gap-3 mt-1 flex-wrap", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:537:23", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:538:25", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:538:67" }),
                  p.area
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:539:25", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(IndianRupee, { className: "h-3 w-3", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:539:67" }),
                  formatINR$1(p.pricePerBed),
                  "/mo"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:540:25", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Bed, { className: "h-3 w-3", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:540:67" }),
                  p.vacantBeds,
                  "/",
                  p.totalBeds
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground mt-1", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:542:23", children: reasons.join(" · ") })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mt-2.5 flex-wrap", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:548:19", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                disabled: (verb === "book" || verb === "schedule" || verb === "negotiate" || verb === "checkin") && p.vacantBeds === 0,
                className: `h-7 text-[11px] gap-1 ${primary.cls}`,
                onClick: primary.run,
                "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:549:21",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(PIcon, { className: "h-3 w-3", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:555:23" }),
                  " ",
                  primary.label
                ]
              }
            ),
            verb !== "book" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "outline",
                disabled: p.vacantBeds === 0,
                className: "h-7 text-[11px] gap-1",
                onClick: /* @__PURE__ */ __name2(() => handleBook(p), "onClick"),
                "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:560:23",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "h-3 w-3", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:562:25" }),
                  " Book"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "outline",
                disabled: p.vacantBeds === 0,
                className: "h-7 text-[11px] gap-1 border-do-now/40 text-do-now hover:bg-do-now/10",
                onClick: /* @__PURE__ */ __name2(() => handleHold(p), "onClick"),
                "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:565:21",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-3 w-3", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:568:23" }),
                  " Hold 2h"
                ]
              }
            ),
            verb !== "schedule" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "outline",
                disabled: p.vacantBeds === 0,
                className: "h-7 text-[11px] gap-1",
                onClick: /* @__PURE__ */ __name2(() => handleSchedule(p), "onClick"),
                "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:572:23",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3 w-3", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:575:25" }),
                  " Schedule"
                ]
              }
            ),
            verb !== "quote" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "h-7 text-[11px] gap-1",
                onClick: /* @__PURE__ */ __name2(() => handleQuote(p), "onClick"),
                "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:579:23",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-3 w-3", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:581:25" }),
                  " Quote"
                ]
              }
            ),
            verb !== "negotiate" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "h-7 text-[11px] gap-1",
                onClick: /* @__PURE__ */ __name2(() => handleNegotiate(p), "onClick"),
                "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:585:23",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Handshake, { className: "h-3 w-3", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:587:25" }),
                  " Negotiate"
                ]
              }
            ),
            verb !== "checkin" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "h-7 text-[11px] gap-1",
                onClick: /* @__PURE__ */ __name2(() => handleCheckin(p), "onClick"),
                "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:591:23",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3 w-3", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:593:25" }),
                  " Check-in"
                ]
              }
            ),
            verb !== "call" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "h-7 text-[11px] gap-1",
                onClick: /* @__PURE__ */ __name2(() => handleCall(p), "onClick"),
                "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:597:23",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3 w-3", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:599:25" }),
                  " Log call"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "ghost",
                className: "h-7 text-[11px] gap-1 ml-auto",
                onClick: /* @__PURE__ */ __name2(() => waSend(`Sharing *${p.name}* (${p.area}) · ${formatINR$1(p.pricePerBed)}/mo.

Call ${OFFICE_PHONE} to visit.`), "onClick"),
                "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:602:21",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-3 w-3", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:604:23" }),
                  " WhatsApp"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CopyChip,
              {
                size: "xs",
                label: "Copy",
                text: `${p.name} · ${p.area} · ${formatINR$1(p.pricePerBed)}/mo · ${p.vacantBeds}/${p.totalBeds} beds free
Call ${OFFICE_PHONE} to visit.`,
                "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:606:21"
              }
            )
          ] })
        ] }, p.id);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t bg-muted/20 px-5 py-3 space-y-2", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:619:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold flex items-center gap-1.5", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:620:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:621:13" }),
        " Make impact · works for every role"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-1.5", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:623:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            value: note,
            onChange: /* @__PURE__ */ __name2((e) => setNote(e.target.value), "onChange"),
            placeholder: "Add a quick note (e.g. 'wants east-facing room')…",
            className: "h-7 text-[11px] flex-1 min-w-[180px]",
            "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:624:13"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            variant: "outline",
            className: "h-7 text-[11px] gap-1",
            disabled: !note.trim(),
            onClick: /* @__PURE__ */ __name2(() => {
              addNote(lead.id, note.trim());
              logTimeline(lead.id, "note", note.trim());
              toast.success("Note saved");
              setNote("");
            }, "onClick"),
            "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:630:13",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(StickyNote, { className: "h-3 w-3", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:638:15" }),
              " Save note"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            variant: "outline",
            className: "h-7 text-[11px] gap-1",
            onClick: /* @__PURE__ */ __name2(() => {
              const due = new Date(Date.now() + 24 * 60 * 60 * 1e3).toISOString();
              addFollowUp({
                leadId: lead.id,
                tcmId: lead.assignedTcmId || currentTcmId,
                dueAt: due,
                priority: "medium",
                reason: "Manual follow-up from action dialog"
              });
              toast.success("Follow-up set for tomorrow");
            }, "onClick"),
            "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:640:13",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BellRing, { className: "h-3 w-3", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:651:15" }),
              " Follow-up tomorrow"
            ]
          }
        ),
        SNOOZE_PRESETS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            variant: "ghost",
            className: "h-7 text-[11px] gap-1",
            onClick: /* @__PURE__ */ __name2(() => {
              const until = "at" in p ? p.at() : new Date(Date.now() + p.ms).toISOString();
              snooze(lead.id, until);
              toast.success(`Snoozed · ${p.label}`);
            }, "onClick"),
            "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:654:15",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-3 w-3", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:660:17" }),
              " ",
              p.label
            ]
          },
          p.label
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            variant: "outline",
            className: "h-7 text-[11px] gap-1 ml-auto",
            onClick: /* @__PURE__ */ __name2(() => {
              selectLead(lead.id);
              onOpenChange(false);
            }, "onClick"),
            "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:663:13",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3 w-3", "data-tsd-source": "/src/components/impact/LeadActionDialog.tsx:665:15" }),
              " Open full lead drawer"
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
__name(LeadActionDialog, "LeadActionDialog");
__name2(LeadActionDialog, "LeadActionDialog");
const ACTIONS = [
  { verb: "add", label: "Add lead", short: "Add", icon: Plus, tier: "neutral", pick: /* @__PURE__ */ __name2(() => false, "pick") },
  {
    verb: "call",
    label: "Call HOT now",
    short: "Call HOT",
    icon: Flame,
    tier: "now",
    pick: /* @__PURE__ */ __name2((l) => l.intent === "hot" && (l.stage === "new" || l.stage === "contacted"), "pick")
  },
  {
    verb: "schedule",
    label: "Schedule tour",
    short: "Schedule",
    icon: Calendar,
    tier: "today",
    pick: /* @__PURE__ */ __name2((l) => l.stage === "new" || l.stage === "contacted", "pick")
  },
  {
    verb: "quote",
    label: "Send quote",
    short: "Quote",
    icon: FileText,
    tier: "today",
    pick: /* @__PURE__ */ __name2((l) => l.stage === "tour-done", "pick")
  },
  {
    verb: "negotiate",
    label: "Negotiate",
    short: "Negotiate",
    icon: Handshake,
    tier: "now",
    pick: /* @__PURE__ */ __name2((l) => l.stage === "negotiation", "pick")
  },
  {
    verb: "book",
    label: "Book room",
    short: "Book",
    icon: House,
    tier: "won",
    pick: /* @__PURE__ */ __name2((l) => l.stage === "negotiation" || l.stage === "tour-done", "pick")
  },
  {
    verb: "checkin",
    label: "Check-in ops",
    short: "Check-in",
    icon: CircleCheck,
    tier: "won",
    pick: /* @__PURE__ */ __name2((l) => l.stage === "booked", "pick")
  },
  {
    verb: "revive",
    label: "Revive",
    short: "Revive",
    icon: RotateCcw,
    tier: "later",
    pick: /* @__PURE__ */ __name2((l) => l.stage === "dropped", "pick")
  }
];
const tierStyle = {
  now: "bg-do-now/10 border-do-now/40 text-do-now hover:bg-do-now/20 ring-1 ring-do-now/30",
  today: "bg-do-today/10 border-do-today/40 text-do-today hover:bg-do-today/20",
  soon: "bg-do-soon/10 border-do-soon/40 text-do-soon hover:bg-do-soon/20",
  later: "bg-do-later/10 border-do-later/40 text-foreground hover:bg-do-later/20",
  won: "bg-won/10 border-won/40 text-won hover:bg-won/20",
  neutral: "bg-accent text-accent-foreground hover:bg-accent/90 border-accent"
};
function HardActionBar({ onAddLead }) {
  const { leads, tours, selectLead } = useApp();
  const quotes = useQuotations((s) => s.quotations);
  const snoozeUntil = useSnoozes((s) => s.until);
  const [nowMs, setNowMs] = reactExports.useState(0);
  reactExports.useEffect(() => {
    setNowMs(Date.now());
  }, []);
  const [dialog, setDialog] = reactExports.useState(null);
  const ranked = reactExports.useMemo(() => {
    return leads.filter((l) => {
      const u = snoozeUntil[l.id];
      return !u || +new Date(u) <= nowMs;
    }).map((lead) => {
      const ts = tours.filter((t) => t.leadId === lead.id);
      const openTour = ts.find((t) => t.status === "scheduled");
      const lastQuote = quotes.filter((q) => q.leadId === lead.id).sort((a, b) => +new Date(b.sentAt) - +new Date(a.sentAt))[0];
      const { score } = scoreLead(lead, openTour, lastQuote);
      const nba = computeNBA(lead, openTour, lastQuote);
      return { lead, openTour, lastQuote, score, nba };
    });
  }, [leads, tours, quotes, snoozeUntil, nowMs]);
  const candidatesFor = /* @__PURE__ */ __name2((a) => ranked.filter((r) => a.pick(r.lead)).sort((a2, b) => b.score - a2.score).slice(0, 5), "candidatesFor");
  const handleAct = /* @__PURE__ */ __name2((verb, lead, _openTour) => {
    selectLead(lead.id);
    if (verb === "revive") {
      const msg = encodeURIComponent(`Hi ${lead.name.split(" ")[0]}, still searching? I have new options that just opened up.`);
      window.open(`https://wa.me/${lead.phone.replace(/\D/g, "")}?text=${msg}`, "_blank", "noopener");
      toast.success(`Revive sent → ${lead.name.split(" ")[0]}`);
      return;
    }
    if (verb === "call" || verb === "schedule" || verb === "quote" || verb === "negotiate" || verb === "book" || verb === "checkin") {
      setDialog({ verb, leadId: lead.id });
      return;
    }
  }, "handleAct");
  const dialogLead = dialog ? leads.find((l) => l.id === dialog.leadId) ?? null : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(TooltipProvider, { delayDuration: 150, "data-tsd-source": "/src/components/impact/HardActionBar.tsx:111:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-0 z-30 -mx-1 px-1 py-2 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border", "data-tsd-source": "/src/components/impact/HardActionBar.tsx:112:7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5 items-center", "data-tsd-source": "/src/components/impact/HardActionBar.tsx:113:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold pr-1", "data-tsd-source": "/src/components/impact/HardActionBar.tsx:114:11", children: "Hard actions" }),
      ACTIONS.map((a) => {
        if (a.verb === "add") {
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              className: `h-8 text-xs gap-1.5 border ${tierStyle.neutral}`,
              onClick: onAddLead,
              "data-tsd-source": "/src/components/impact/HardActionBar.tsx:120:17",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(a.icon, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/components/impact/HardActionBar.tsx:126:19" }),
                a.short
              ]
            },
            a.verb
          );
        }
        const cands = candidatesFor(a);
        const top = cands[0];
        const disabled = !top;
        const Icon = a.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex", "data-tsd-source": "/src/components/impact/HardActionBar.tsx:137:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Tooltip, { "data-tsd-source": "/src/components/impact/HardActionBar.tsx:138:17", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipTrigger, { asChild: true, "data-tsd-source": "/src/components/impact/HardActionBar.tsx:139:19", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "outline",
                disabled,
                className: `h-8 text-xs gap-1.5 border rounded-r-none ${disabled ? "opacity-50" : tierStyle[a.tier]} ${a.tier === "now" && !disabled ? "animate-pulse" : ""}`,
                onClick: /* @__PURE__ */ __name2(() => top && handleAct(a.verb, top.lead, top.openTour), "onClick"),
                "data-tsd-source": "/src/components/impact/HardActionBar.tsx:140:21",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/components/impact/HardActionBar.tsx:147:23" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", "data-tsd-source": "/src/components/impact/HardActionBar.tsx:148:23", children: a.short }),
                  top && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-mono opacity-70 hidden md:inline", "data-tsd-source": "/src/components/impact/HardActionBar.tsx:150:25", children: [
                    "· ",
                    top.lead.name.split(" ")[0]
                  ] })
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipContent, { side: "bottom", className: "text-xs", "data-tsd-source": "/src/components/impact/HardActionBar.tsx:156:19", children: disabled ? `${a.label} — no candidate right now` : `${a.label} → ${top.lead.name}` })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { "data-tsd-source": "/src/components/impact/HardActionBar.tsx:160:17", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuTrigger, { asChild: true, "data-tsd-source": "/src/components/impact/HardActionBar.tsx:161:19", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                variant: "outline",
                disabled,
                className: `h-8 px-1 border-l-0 rounded-l-none border ${disabled ? "opacity-50" : tierStyle[a.tier]}`,
                "data-tsd-source": "/src/components/impact/HardActionBar.tsx:162:21",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-3 w-3", "data-tsd-source": "/src/components/impact/HardActionBar.tsx:168:23" })
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuContent, { align: "end", className: "w-64", "data-tsd-source": "/src/components/impact/HardActionBar.tsx:171:19", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuLabel, { className: "text-[10px] uppercase tracking-wider text-muted-foreground", "data-tsd-source": "/src/components/impact/HardActionBar.tsx:172:21", children: [
                "Next ",
                Math.min(cands.length, 5),
                " candidates"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuSeparator, { "data-tsd-source": "/src/components/impact/HardActionBar.tsx:175:21" }),
              cands.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-2 py-3 text-xs text-muted-foreground", "data-tsd-source": "/src/components/impact/HardActionBar.tsx:177:23", children: "No leads match this action right now." }),
              cands.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                DropdownMenuItem,
                {
                  className: "text-xs flex items-center gap-2",
                  onClick: /* @__PURE__ */ __name2(() => handleAct(a.verb, c.lead, c.openTour), "onClick"),
                  "data-tsd-source": "/src/components/impact/HardActionBar.tsx:182:23",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3 w-3 text-muted-foreground", "data-tsd-source": "/src/components/impact/HardActionBar.tsx:187:25" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 truncate", "data-tsd-source": "/src/components/impact/HardActionBar.tsx:188:25", children: c.lead.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground font-mono", "data-tsd-source": "/src/components/impact/HardActionBar.tsx:189:25", children: Math.round(c.score) })
                  ]
                },
                c.lead.id
              ))
            ] })
          ] })
        ] }, a.verb);
      })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      LeadActionDialog,
      {
        open: !!dialog,
        onOpenChange: /* @__PURE__ */ __name2((v) => !v && setDialog(null), "onOpenChange"),
        lead: dialogLead,
        verb: dialog?.verb ?? "schedule",
        "data-tsd-source": "/src/components/impact/HardActionBar.tsx:199:7"
      }
    )
  ] });
}
__name(HardActionBar, "HardActionBar");
__name2(HardActionBar, "HardActionBar");
const PRIORITY_TIERS = [
  { key: "now", label: "Do now", dot: "bg-do-now", ring: "ring-do-now/40" },
  { key: "today", label: "Today", dot: "bg-do-today", ring: "ring-do-today/40" },
  { key: "soon", label: "Soon", dot: "bg-do-soon", ring: "ring-do-soon/40" },
  { key: "later", label: "Later", dot: "bg-do-later", ring: "ring-do-later/40" },
  { key: "won", label: "Won", dot: "bg-won", ring: "ring-won/40" }
];
function PriorityLegend() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 rounded-md border border-border bg-muted/30 px-3 py-1.5", "data-tsd-source": "/src/components/impact/PriorityLegend.tsx:11:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-wider text-muted-foreground font-semibold", "data-tsd-source": "/src/components/impact/PriorityLegend.tsx:12:7", children: "Priority" }),
    PRIORITY_TIERS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-[11px]", "data-tsd-source": "/src/components/impact/PriorityLegend.tsx:16:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-2 w-2 rounded-full ${t.dot} ring-2 ${t.ring}`, "data-tsd-source": "/src/components/impact/PriorityLegend.tsx:17:11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-tsd-source": "/src/components/impact/PriorityLegend.tsx:18:11", children: t.label })
    ] }, t.key))
  ] });
}
__name(PriorityLegend, "PriorityLegend");
__name2(PriorityLegend, "PriorityLegend");
function SnoozeMenu({ leadId, leadName, compact }) {
  const snooze = useSnoozes((s) => s.snooze);
  const unsnooze = useSnoozes((s) => s.unsnooze);
  const isSnoozed = useSnoozes((s) => !!s.until[leadId] && +new Date(s.until[leadId]) > Date.now());
  const apply = /* @__PURE__ */ __name2((untilIso, label) => {
    snooze(leadId, untilIso);
    toast.success(`Snoozed${leadName ? ` ${leadName}` : ""} · ${label}`);
  }, "apply");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { "data-tsd-source": "/src/components/impact/SnoozeMenu.tsx:21:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuTrigger, { asChild: true, "data-tsd-source": "/src/components/impact/SnoozeMenu.tsx:22:7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        size: "sm",
        variant: isSnoozed ? "secondary" : "ghost",
        className: `h-7 ${compact ? "px-2" : ""} text-[10px] gap-1`,
        "data-tsd-source": "/src/components/impact/SnoozeMenu.tsx:23:9",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3", "data-tsd-source": "/src/components/impact/SnoozeMenu.tsx:28:11" }),
          isSnoozed ? "Snoozed" : "Snooze"
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuContent, { align: "end", className: "w-44", "data-tsd-source": "/src/components/impact/SnoozeMenu.tsx:32:7", children: [
      SNOOZE_PRESETS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        DropdownMenuItem,
        {
          className: "text-xs",
          onClick: /* @__PURE__ */ __name2(() => {
            const iso = "at" in p ? p.at() : new Date(Date.now() + p.ms).toISOString();
            apply(iso, p.label);
          }, "onClick"),
          "data-tsd-source": "/src/components/impact/SnoozeMenu.tsx:34:11",
          children: p.label
        },
        p.label
      )),
      isSnoozed && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuSeparator, { "data-tsd-source": "/src/components/impact/SnoozeMenu.tsx:47:13" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          DropdownMenuItem,
          {
            className: "text-xs text-danger",
            onClick: /* @__PURE__ */ __name2(() => {
              unsnooze(leadId);
              toast("Snooze cleared");
            }, "onClick"),
            "data-tsd-source": "/src/components/impact/SnoozeMenu.tsx:48:13",
            children: "Clear snooze"
          }
        )
      ] })
    ] })
  ] });
}
__name(SnoozeMenu, "SnoozeMenu");
__name2(SnoozeMenu, "SnoozeMenu");
const BUCKET_META = {
  overdue: { label: "Overdue", tone: "border-do-now/40 bg-do-now/5 text-do-now" },
  now: { label: "Due now", tone: "border-do-now/40 bg-do-now/10 text-do-now" },
  today: { label: "Today", tone: "border-do-today/40 bg-do-today/5 text-do-today" },
  tomorrow: { label: "Tomorrow", tone: "border-do-soon/40 bg-do-soon/5 text-do-soon" },
  week: { label: "This week", tone: "border-do-soon/40 bg-do-soon/5 text-do-soon" },
  later: { label: "Later", tone: "border-do-later/40 bg-do-later/5 text-foreground" }
};
function bucketFor(dueAtMs, nowMs) {
  const diff = dueAtMs - nowMs;
  const hour = 60 * 60 * 1e3;
  const day = 24 * hour;
  if (diff < 0) return "overdue";
  if (diff < hour) return "now";
  if (diff < day && new Date(dueAtMs).toDateString() === new Date(nowMs).toDateString()) return "today";
  const tom = new Date(nowMs);
  tom.setDate(tom.getDate() + 1);
  if (new Date(dueAtMs).toDateString() === tom.toDateString()) return "tomorrow";
  if (diff < 7 * day) return "week";
  return "later";
}
__name(bucketFor, "bucketFor");
__name2(bucketFor, "bucketFor");
function FollowUpQueueTab() {
  const { leads, followUps, completeFollowUp } = useApp();
  const snoozeUntil = useSnoozes((s) => s.until);
  const [now, mounted] = useMountedNow(3e4);
  const [selected, setSelected] = reactExports.useState(/* @__PURE__ */ new Set());
  const rows = reactExports.useMemo(() => {
    if (!mounted) return [];
    return followUps.filter((f) => !f.done).map((f) => {
      const lead = leads.find((l) => l.id === f.leadId);
      if (!lead) return null;
      const u = snoozeUntil[lead.id];
      if (u && +new Date(u) > now) return null;
      return { f, lead, bucket: bucketFor(+new Date(f.dueAt), now) };
    }).filter(Boolean);
  }, [followUps, leads, snoozeUntil, now, mounted]);
  const grouped = reactExports.useMemo(() => {
    const g = {
      overdue: [],
      now: [],
      today: [],
      tomorrow: [],
      week: [],
      later: []
    };
    rows.forEach((r) => g[r.bucket].push(r));
    Object.values(g).forEach((arr) => arr.sort((a, b) => +new Date(a.f.dueAt) - +new Date(b.f.dueAt)));
    return g;
  }, [rows]);
  const toggle = /* @__PURE__ */ __name2((id) => {
    setSelected((s) => {
      const n = new Set(s);
      if (n.has(id)) n.delete(id);
      else n.add(id);
      return n;
    });
  }, "toggle");
  const bulkDone = /* @__PURE__ */ __name2(() => {
    selected.forEach((id) => completeFollowUp(id));
    toast.success(`${selected.size} follow-up(s) marked done`);
    setSelected(/* @__PURE__ */ new Set());
  }, "bulkDone");
  if (rows.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border border-border bg-card p-10 text-center text-sm text-muted-foreground", "data-tsd-source": "/src/components/impact/FollowUpQueueTab.tsx:79:7", children: "No follow-ups pending. 🌱" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", "data-tsd-source": "/src/components/impact/FollowUpQueueTab.tsx:86:5", children: [
    selected.size > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-md border border-accent/40 bg-accent/5 px-3 py-2", "data-tsd-source": "/src/components/impact/FollowUpQueueTab.tsx:88:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold", "data-tsd-source": "/src/components/impact/FollowUpQueueTab.tsx:89:11", children: [
        selected.size,
        " selected"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "h-7 text-xs gap-1", onClick: bulkDone, "data-tsd-source": "/src/components/impact/FollowUpQueueTab.tsx:90:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3 w-3", "data-tsd-source": "/src/components/impact/FollowUpQueueTab.tsx:91:13" }),
        " Mark done"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", className: "h-7 text-xs", onClick: /* @__PURE__ */ __name2(() => setSelected(/* @__PURE__ */ new Set()), "onClick"), "data-tsd-source": "/src/components/impact/FollowUpQueueTab.tsx:93:11", children: "Clear" })
    ] }),
    Object.keys(BUCKET_META).map((b) => {
      const items = grouped[b];
      if (items.length === 0) return null;
      const meta = BUCKET_META[b];
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-tsd-source": "/src/components/impact/FollowUpQueueTab.tsx:104:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-[10px] uppercase tracking-[0.2em] font-semibold mb-1.5 inline-flex items-center gap-2 px-2 py-0.5 rounded border ${meta.tone}`, "data-tsd-source": "/src/components/impact/FollowUpQueueTab.tsx:105:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3", "data-tsd-source": "/src/components/impact/FollowUpQueueTab.tsx:106:15" }),
          " ",
          meta.label,
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-60 font-mono", "data-tsd-source": "/src/components/impact/FollowUpQueueTab.tsx:107:15", children: items.length })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5", "data-tsd-source": "/src/components/impact/FollowUpQueueTab.tsx:109:13", children: items.map(({ f, lead }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "li",
          {
            className: "flex items-center gap-2 rounded-md border bg-card px-3 py-2",
            "data-tsd-source": "/src/components/impact/FollowUpQueueTab.tsx:111:17",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: selected.has(f.id),
                  onChange: /* @__PURE__ */ __name2(() => toggle(f.id), "onChange"),
                  className: "h-3.5 w-3.5 accent-accent",
                  "data-tsd-source": "/src/components/impact/FollowUpQueueTab.tsx:115:19"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", "data-tsd-source": "/src/components/impact/FollowUpQueueTab.tsx:121:19", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs", "data-tsd-source": "/src/components/impact/FollowUpQueueTab.tsx:122:21", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold truncate", "data-tsd-source": "/src/components/impact/FollowUpQueueTab.tsx:123:23", children: lead.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[9px] uppercase", "data-tsd-source": "/src/components/impact/FollowUpQueueTab.tsx:124:23", children: lead.intent })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground truncate", "data-tsd-source": "/src/components/impact/FollowUpQueueTab.tsx:126:21", children: [
                  f.reason,
                  " · due ",
                  new Date(f.dueAt).toLocaleString("en-IN", { day: "numeric", month: "short", hour: "numeric", minute: "2-digit" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  variant: "ghost",
                  className: "h-7 text-[10px] gap-1",
                  onClick: /* @__PURE__ */ __name2(() => {
                    const msg = encodeURIComponent(`Hi ${lead.name.split(" ")[0]}, ${f.reason}`);
                    window.open(`https://wa.me/${lead.phone.replace(/\D/g, "")}?text=${msg}`, "_blank", "noopener");
                  }, "onClick"),
                  "data-tsd-source": "/src/components/impact/FollowUpQueueTab.tsx:130:19",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-3 w-3", "data-tsd-source": "/src/components/impact/FollowUpQueueTab.tsx:136:21" }),
                    " WA"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  variant: "ghost",
                  className: "h-7 text-[10px] gap-1",
                  onClick: /* @__PURE__ */ __name2(() => window.open(`tel:${lead.phone}`, "_self"), "onClick"),
                  "data-tsd-source": "/src/components/impact/FollowUpQueueTab.tsx:138:19",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3 w-3", "data-tsd-source": "/src/components/impact/FollowUpQueueTab.tsx:141:21" }),
                    " Call"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SnoozeMenu, { leadId: lead.id, leadName: lead.name, compact: true, "data-tsd-source": "/src/components/impact/FollowUpQueueTab.tsx:143:19" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  className: "h-7 text-[10px] gap-1",
                  onClick: /* @__PURE__ */ __name2(() => {
                    completeFollowUp(f.id);
                    toast.success("Done");
                  }, "onClick"),
                  "data-tsd-source": "/src/components/impact/FollowUpQueueTab.tsx:144:19",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3 w-3", "data-tsd-source": "/src/components/impact/FollowUpQueueTab.tsx:147:21" }),
                    " Done"
                  ]
                }
              )
            ]
          },
          f.id
        )) })
      ] }, b);
    })
  ] });
}
__name(FollowUpQueueTab, "FollowUpQueueTab");
__name2(FollowUpQueueTab, "FollowUpQueueTab");
const uid = /* @__PURE__ */ __name2(() => `t-${Math.random().toString(36).slice(2, 10)}`, "uid");
const useTasks = create()(
  persist(
    (set) => ({
      tasks: [],
      addTask: /* @__PURE__ */ __name2((t) => {
        const task = {
          ...t,
          id: uid(),
          done: false,
          createdAt: (/* @__PURE__ */ new Date()).toISOString()
        };
        set((s) => ({ tasks: [...s.tasks, task] }));
        return task;
      }, "addTask"),
      toggleTask: /* @__PURE__ */ __name2((id) => set((s) => ({ tasks: s.tasks.map((x) => x.id === id ? { ...x, done: !x.done } : x) })), "toggleTask"),
      removeTask: /* @__PURE__ */ __name2((id) => set((s) => ({ tasks: s.tasks.filter((x) => x.id !== id) })), "removeTask")
    }),
    { name: "impact-tasks" }
  )
);
const TIER_COLOR = {
  now: "border-l-do-now",
  today: "border-l-do-today",
  soon: "border-l-do-soon"
};
const TIER_DOT = {
  now: "bg-do-now",
  today: "bg-do-today",
  soon: "bg-do-soon"
};
function defaultDueAt() {
  const d = /* @__PURE__ */ new Date();
  d.setHours(d.getHours() + 1, 0, 0, 0);
  return d.toISOString().slice(0, 16);
}
__name(defaultDueAt, "defaultDueAt");
__name2(defaultDueAt, "defaultDueAt");
function TasksTab() {
  const tasks = useTasks((s) => s.tasks);
  const addTask = useTasks((s) => s.addTask);
  const toggleTask = useTasks((s) => s.toggleTask);
  const removeTask = useTasks((s) => s.removeTask);
  const leads = useApp((s) => s.leads);
  const [title, setTitle] = reactExports.useState("");
  const [dueAt, setDueAt] = reactExports.useState(defaultDueAt());
  const [tier, setTier] = reactExports.useState("today");
  const [leadId, setLeadId] = reactExports.useState("");
  const submit = /* @__PURE__ */ __name2(() => {
    if (!title.trim()) {
      toast.error("Title required");
      return;
    }
    addTask({ title: title.trim(), dueAt: new Date(dueAt).toISOString(), tier, leadId: leadId || void 0 });
    setTitle("");
    toast.success("Task added");
  }, "submit");
  const sorted = [...tasks].sort((a, b) => Number(a.done) - Number(b.done) || +new Date(a.dueAt) - +new Date(b.dueAt));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", "data-tsd-source": "/src/components/impact/TasksTab.tsx:50:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-card p-3 space-y-2", "data-tsd-source": "/src/components/impact/TasksTab.tsx:51:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground font-semibold", "data-tsd-source": "/src/components/impact/TasksTab.tsx:52:9", children: "New task" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", "data-tsd-source": "/src/components/impact/TasksTab.tsx:55:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: "What needs doing?",
            value: title,
            onChange: /* @__PURE__ */ __name2((e) => setTitle(e.target.value), "onChange"),
            onKeyDown: /* @__PURE__ */ __name2((e) => e.key === "Enter" && submit(), "onKeyDown"),
            className: "h-8 text-xs flex-1 min-w-[180px]",
            "data-tsd-source": "/src/components/impact/TasksTab.tsx:56:11"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "datetime-local",
            value: dueAt,
            onChange: /* @__PURE__ */ __name2((e) => setDueAt(e.target.value), "onChange"),
            className: "h-8 text-xs w-48",
            "data-tsd-source": "/src/components/impact/TasksTab.tsx:63:11"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: tier, onValueChange: /* @__PURE__ */ __name2((v) => setTier(v), "onValueChange"), "data-tsd-source": "/src/components/impact/TasksTab.tsx:69:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 text-xs w-28", "data-tsd-source": "/src/components/impact/TasksTab.tsx:70:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { "data-tsd-source": "/src/components/impact/TasksTab.tsx:70:57" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { "data-tsd-source": "/src/components/impact/TasksTab.tsx:71:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "now", className: "text-xs", "data-tsd-source": "/src/components/impact/TasksTab.tsx:72:15", children: "🔴 Now" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "today", className: "text-xs", "data-tsd-source": "/src/components/impact/TasksTab.tsx:73:15", children: "🟠 Today" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "soon", className: "text-xs", "data-tsd-source": "/src/components/impact/TasksTab.tsx:74:15", children: "🔵 Soon" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: leadId || "none", onValueChange: /* @__PURE__ */ __name2((v) => setLeadId(v === "none" ? "" : v), "onValueChange"), "data-tsd-source": "/src/components/impact/TasksTab.tsx:77:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 text-xs w-40", "data-tsd-source": "/src/components/impact/TasksTab.tsx:78:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Lead (opt)", "data-tsd-source": "/src/components/impact/TasksTab.tsx:78:57" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { "data-tsd-source": "/src/components/impact/TasksTab.tsx:79:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "none", className: "text-xs", "data-tsd-source": "/src/components/impact/TasksTab.tsx:80:15", children: "— No lead —" }),
            leads.slice(0, 30).map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: l.id, className: "text-xs", "data-tsd-source": "/src/components/impact/TasksTab.tsx:82:17", children: l.name }, l.id))
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "h-8 text-xs gap-1", onClick: submit, "data-tsd-source": "/src/components/impact/TasksTab.tsx:86:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3 w-3", "data-tsd-source": "/src/components/impact/TasksTab.tsx:87:13" }),
          " Add"
        ] })
      ] })
    ] }),
    sorted.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border bg-card p-8 text-center text-xs text-muted-foreground", "data-tsd-source": "/src/components/impact/TasksTab.tsx:93:9", children: "No tasks yet. Add your first." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5", "data-tsd-source": "/src/components/impact/TasksTab.tsx:97:9", children: sorted.map((t) => {
      const lead = t.leadId ? leads.find((l) => l.id === t.leadId) : void 0;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "li",
        {
          className: `flex items-center gap-2 rounded-md border bg-card px-3 py-2 border-l-4 ${TIER_COLOR[t.tier]} ${t.done ? "opacity-50" : ""}`,
          "data-tsd-source": "/src/components/impact/TasksTab.tsx:101:15",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: /* @__PURE__ */ __name2(() => toggleTask(t.id), "onClick"),
                className: "h-5 w-5 rounded border flex items-center justify-center hover:bg-muted",
                "aria-label": t.done ? "Mark not done" : "Mark done",
                "data-tsd-source": "/src/components/impact/TasksTab.tsx:105:17",
                children: t.done && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5 text-success", "data-tsd-source": "/src/components/impact/TasksTab.tsx:110:30" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", "data-tsd-source": "/src/components/impact/TasksTab.tsx:112:17", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-xs font-medium ${t.done ? "line-through" : ""}`, "data-tsd-source": "/src/components/impact/TasksTab.tsx:113:19", children: t.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground flex items-center gap-1.5", "data-tsd-source": "/src/components/impact/TasksTab.tsx:116:19", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-1.5 w-1.5 rounded-full ${TIER_DOT[t.tier]}`, "data-tsd-source": "/src/components/impact/TasksTab.tsx:117:21" }),
                new Date(t.dueAt).toLocaleString("en-IN", { day: "numeric", month: "short", hour: "numeric", minute: "2-digit" }),
                lead && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-tsd-source": "/src/components/impact/TasksTab.tsx:119:32", children: "·" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-tsd-source": "/src/components/impact/TasksTab.tsx:119:46", children: lead.name })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                variant: "ghost",
                className: "h-7 w-7 p-0 text-muted-foreground hover:text-danger",
                onClick: /* @__PURE__ */ __name2(() => removeTask(t.id), "onClick"),
                "data-tsd-source": "/src/components/impact/TasksTab.tsx:122:17",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3 w-3", "data-tsd-source": "/src/components/impact/TasksTab.tsx:125:19" })
              }
            )
          ]
        },
        t.id
      );
    }) })
  ] });
}
__name(TasksTab, "TasksTab");
__name2(TasksTab, "TasksTab");
function CalendarTab() {
  const { tours, followUps, leads, properties } = useApp();
  const tasks = useTasks((s) => s.tasks);
  const [now, mounted] = useMountedNow(6e4);
  const items = reactExports.useMemo(() => {
    if (!mounted) return [];
    const all = [];
    const dayStart = new Date(now);
    dayStart.setHours(0, 0, 0, 0);
    const windowEnd = +dayStart + 14 * 24 * 60 * 60 * 1e3;
    tours.forEach((t) => {
      const at = +new Date(t.scheduledAt);
      if (at < +dayStart || at > windowEnd || t.status !== "scheduled") return;
      const lead = leads.find((l) => l.id === t.leadId);
      const prop = properties.find((p) => p.id === t.propertyId);
      all.push({
        id: `tour-${t.id}`,
        when: t.scheduledAt,
        title: `Tour · ${lead?.name ?? "Lead"}`,
        sub: `${prop?.name ?? "Property"} · ${prop?.area ?? ""}`,
        tone: "border-l-do-soon bg-do-soon/5 text-do-soon",
        icon: House
      });
    });
    followUps.forEach((f) => {
      const at = +new Date(f.dueAt);
      if (at < +dayStart || at > windowEnd || f.done) return;
      const lead = leads.find((l) => l.id === f.leadId);
      all.push({
        id: `fu-${f.id}`,
        when: f.dueAt,
        title: `Follow-up · ${lead?.name ?? "Lead"}`,
        sub: f.reason,
        tone: at < now ? "border-l-do-now bg-do-now/5 text-do-now" : "border-l-do-today bg-do-today/5 text-do-today",
        icon: Phone
      });
    });
    tasks.forEach((t) => {
      const at = +new Date(t.dueAt);
      if (at < +dayStart || at > windowEnd || t.done) return;
      all.push({
        id: `task-${t.id}`,
        when: t.dueAt,
        title: t.title,
        sub: t.leadId ? leads.find((l) => l.id === t.leadId)?.name ?? "" : "Task",
        tone: t.tier === "now" ? "border-l-do-now bg-do-now/5" : t.tier === "today" ? "border-l-do-today bg-do-today/5" : "border-l-do-soon bg-do-soon/5",
        icon: FileText
      });
    });
    return all.sort((a, b) => +new Date(a.when) - +new Date(b.when));
  }, [tours, followUps, leads, properties, tasks, now, mounted]);
  if (!mounted) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border bg-card p-10 text-center text-sm text-muted-foreground", "data-tsd-source": "/src/components/impact/CalendarTab.tsx:72:7", children: "Loading agenda…" });
  }
  if (items.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-card p-10 text-center text-sm text-muted-foreground", "data-tsd-source": "/src/components/impact/CalendarTab.tsx:80:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-6 w-6 mx-auto mb-2 opacity-40", "data-tsd-source": "/src/components/impact/CalendarTab.tsx:81:9" }),
      "No events in the next 14 days."
    ] });
  }
  const groups = /* @__PURE__ */ new Map();
  items.forEach((it) => {
    const key = new Date(it.when).toDateString();
    const arr = groups.get(key) ?? [];
    arr.push(it);
    groups.set(key, arr);
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", "data-tsd-source": "/src/components/impact/CalendarTab.tsx:97:5", children: Array.from(groups.entries()).map(([day, list]) => {
    const d = new Date(day);
    const isToday = d.toDateString() === new Date(now).toDateString();
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-tsd-source": "/src/components/impact/CalendarTab.tsx:102:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] uppercase tracking-[0.2em] font-semibold mb-2 flex items-center gap-2", "data-tsd-source": "/src/components/impact/CalendarTab.tsx:103:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-tsd-source": "/src/components/impact/CalendarTab.tsx:104:15", children: d.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" }) }),
        isToday && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[9px] bg-accent/10 text-accent border-accent/40", "data-tsd-source": "/src/components/impact/CalendarTab.tsx:105:27", children: "TODAY" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-mono opacity-60", "data-tsd-source": "/src/components/impact/CalendarTab.tsx:106:15", children: list.length })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5", "data-tsd-source": "/src/components/impact/CalendarTab.tsx:108:13", children: list.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: `flex items-center gap-3 rounded-md border bg-card px-3 py-2 border-l-4 ${it.tone}`, "data-tsd-source": "/src/components/impact/CalendarTab.tsx:110:17", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(it.icon, { className: "h-3.5 w-3.5 shrink-0", "data-tsd-source": "/src/components/impact/CalendarTab.tsx:111:19" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", "data-tsd-source": "/src/components/impact/CalendarTab.tsx:112:19", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium truncate", "data-tsd-source": "/src/components/impact/CalendarTab.tsx:113:21", children: it.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground truncate", "data-tsd-source": "/src/components/impact/CalendarTab.tsx:114:21", children: it.sub })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-mono text-muted-foreground tabular-nums flex items-center gap-1", "data-tsd-source": "/src/components/impact/CalendarTab.tsx:116:19", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3", "data-tsd-source": "/src/components/impact/CalendarTab.tsx:117:21" }),
          new Date(it.when).toLocaleTimeString("en-IN", { hour: "numeric", minute: "2-digit" })
        ] })
      ] }, it.id)) })
    ] }, day);
  }) });
}
__name(CalendarTab, "CalendarTab");
__name2(CalendarTab, "CalendarTab");
function ImpactQueueShell() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ImpactErrorBoundary, { "data-tsd-source": "/src/components/impact/ImpactQueueShell.tsx:22:5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ClientOnly, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 text-sm text-muted-foreground", children: "Loading workspace…" }), "data-tsd-source": "/src/components/impact/ImpactQueueShell.tsx:23:7", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ImpactQueueShellInner, { "data-tsd-source": "/src/components/impact/ImpactQueueShell.tsx:24:9" }) }) });
}
__name(ImpactQueueShell, "ImpactQueueShell");
__name2(ImpactQueueShell, "ImpactQueueShell");
function ImpactQueueShellInner() {
  const [tab, setTab] = reactExports.useState("queue");
  const followUps = useApp((s) => s.followUps);
  const tasks = useTasks((s) => s.tasks);
  const [now, mounted] = useMountedNow(6e4);
  const snoozeCount = useSnoozes(
    (s) => mounted ? Object.values(s.until).filter((iso) => +new Date(iso) > now).length : 0
  );
  const visitRecords = useVisitWar((s) => s.records);
  const liveVisits = reactExports.useMemo(
    () => Object.values(visitRecords).filter((v) => ["started", "at-property", "tour-ongoing"].includes(v.stage)).length,
    [visitRecords]
  );
  const pendingFollowUps = followUps.filter((f) => !f.done).length;
  const openTasks = tasks.filter((t) => !t.done).length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 p-3 sm:p-4", "data-tsd-source": "/src/components/impact/ImpactQueueShell.tsx:48:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HardActionBar, { "data-tsd-source": "/src/components/impact/ImpactQueueShell.tsx:49:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PriorityLegend, { "data-tsd-source": "/src/components/impact/ImpactQueueShell.tsx:50:7" }),
    snoozeCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[11px] text-muted-foreground", "data-tsd-source": "/src/components/impact/ImpactQueueShell.tsx:52:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-3 w-3", "data-tsd-source": "/src/components/impact/ImpactQueueShell.tsx:53:11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { "data-tsd-source": "/src/components/impact/ImpactQueueShell.tsx:54:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", "data-tsd-source": "/src/components/impact/ImpactQueueShell.tsx:54:17", children: snoozeCount }),
        " snoozed lead",
        snoozeCount === 1 ? "" : "s",
        " hidden from the active queue."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { value: tab, onValueChange: /* @__PURE__ */ __name2((v) => setTab(v), "onValueChange"), "data-tsd-source": "/src/components/impact/ImpactQueueShell.tsx:57:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "h-9", "data-tsd-source": "/src/components/impact/ImpactQueueShell.tsx:58:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "queue", className: "text-xs gap-1.5", "data-tsd-source": "/src/components/impact/ImpactQueueShell.tsx:59:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutGrid, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/components/impact/ImpactQueueShell.tsx:60:13" }),
          " Queue"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "visits", className: "text-xs gap-1.5", "data-tsd-source": "/src/components/impact/ImpactQueueShell.tsx:62:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Radio, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/components/impact/ImpactQueueShell.tsx:63:13" }),
          " Visits Live",
          liveVisits > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "ml-1 h-4 px-1 text-[9px] bg-success/15 text-success border-success/40", "data-tsd-source": "/src/components/impact/ImpactQueueShell.tsx:65:15", children: liveVisits })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "followups", className: "text-xs gap-1.5", "data-tsd-source": "/src/components/impact/ImpactQueueShell.tsx:68:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BellRing, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/components/impact/ImpactQueueShell.tsx:69:13" }),
          " Follow-ups",
          pendingFollowUps > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "ml-1 h-4 px-1 text-[9px] bg-do-today/15 text-do-today border-do-today/40", "data-tsd-source": "/src/components/impact/ImpactQueueShell.tsx:71:15", children: pendingFollowUps })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "tasks", className: "text-xs gap-1.5", "data-tsd-source": "/src/components/impact/ImpactQueueShell.tsx:74:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ListChecks, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/components/impact/ImpactQueueShell.tsx:75:13" }),
          " Tasks",
          openTasks > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "ml-1 h-4 px-1 text-[9px]", "data-tsd-source": "/src/components/impact/ImpactQueueShell.tsx:77:15", children: openTasks })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "calendar", className: "text-xs gap-1.5", "data-tsd-source": "/src/components/impact/ImpactQueueShell.tsx:80:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/components/impact/ImpactQueueShell.tsx:81:13" }),
          " Calendar"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "queue", className: "mt-3", "data-tsd-source": "/src/components/impact/ImpactQueueShell.tsx:84:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ImpactQueue, { "data-tsd-source": "/src/components/impact/ImpactQueueShell.tsx:84:53" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "visits", className: "mt-3", "data-tsd-source": "/src/components/impact/ImpactQueueShell.tsx:85:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(VisitWarRoom, { inline: true, "data-tsd-source": "/src/components/impact/ImpactQueueShell.tsx:85:54" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "followups", className: "mt-3", "data-tsd-source": "/src/components/impact/ImpactQueueShell.tsx:86:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FollowUpQueueTab, { "data-tsd-source": "/src/components/impact/ImpactQueueShell.tsx:86:57" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "tasks", className: "mt-3", "data-tsd-source": "/src/components/impact/ImpactQueueShell.tsx:87:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TasksTab, { "data-tsd-source": "/src/components/impact/ImpactQueueShell.tsx:87:53" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "calendar", className: "mt-3", "data-tsd-source": "/src/components/impact/ImpactQueueShell.tsx:88:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarTab, { "data-tsd-source": "/src/components/impact/ImpactQueueShell.tsx:88:56" }) })
    ] })
  ] });
}
__name(ImpactQueueShellInner, "ImpactQueueShellInner");
__name2(ImpactQueueShellInner, "ImpactQueueShellInner");
const SplitComponent = /* @__PURE__ */ __name2(() => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/impact.tsx:7:20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ImpactQueueShell, { "data-tsd-source": "/src/routes/impact.tsx:7:30" }) }), "SplitComponent");
export {
  SplitComponent as component
};
