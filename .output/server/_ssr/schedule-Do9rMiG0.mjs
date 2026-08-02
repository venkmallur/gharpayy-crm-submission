var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-rXFHrudv.mjs";
import { aH as teamMembers, q as cn, a3 as glueBus, aB as useAppState, u as useApp, aI as zones, aN as scoreTour, aO as inferConfirmationStrength, aK as intentBg, U as Label, X as Input, k as Button, aP as properties } from "./router-Cbs6ivkN.mjs";
import { C as Checkbox } from "./checkbox-BQBPja4L.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { c as createBlockForTour } from "./blocks-BquurJE3.mjs";
import { C as ConfidenceBar } from "./ConfidenceBar-BgNYID_K.mjs";
import "../_libs/react-dom.mjs";
import { S as Sparkles, B as Building2, bI as Video, aD as Briefcase } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-checkbox.mjs";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
function getTcmStats(tours) {
  const tcms = teamMembers.filter((m) => m.role === "tcm");
  return tcms.map((member) => {
    const memberTours = tours.filter((t) => t.assignedTo === member.id);
    const completed = memberTours.filter((t) => t.status === "completed").length;
    const showed = memberTours.filter((t) => t.showUp === true).length;
    const drafts = memberTours.filter((t) => t.outcome === "draft" || t.outcome === "booked").length;
    const showUpRate = memberTours.length > 0 ? showed / memberTours.length : 0.5;
    const draftRate = completed > 0 ? drafts / completed : 0.3;
    const todayLoad = memberTours.filter(
      (t) => t.tourDate === (/* @__PURE__ */ new Date()).toISOString().split("T")[0] && t.status !== "completed"
    ).length;
    return {
      member,
      showUpRate,
      draftRate,
      load: todayLoad,
      composite: showUpRate * 0.6 + draftRate * 0.4
    };
  });
}
__name(getTcmStats, "getTcmStats");
__name2(getTcmStats, "getTcmStats");
function autoAssignTcm(tours, zoneId, intent) {
  const stats = getTcmStats(tours).filter((s) => s.member.zoneId === zoneId);
  if (stats.length === 0) return null;
  if (intent === "hard") {
    const eligible = stats.filter((s) => s.load < 10);
    const pool = eligible.length > 0 ? eligible : stats;
    return [...pool].sort((a, b) => b.composite - a.composite)[0].member;
  }
  if (intent === "medium") {
    return [...stats].sort((a, b) => a.load - b.load)[0].member;
  }
  const softLoad = stats.map((s) => ({
    ...s,
    softCount: tours.filter(
      (t) => t.assignedTo === s.member.id && t.intent === "soft"
    ).length
  }));
  return softLoad.sort((a, b) => a.softCount - b.softCount)[0].member;
}
__name(autoAssignTcm, "autoAssignTcm");
__name2(autoAssignTcm, "autoAssignTcm");
const HOURS = ["10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30"];
function SlotPicker({ date, selected, onSelect, takenSlots, recommendEarly }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/components/SlotPicker.tsx:16:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-1.5 sm:grid-cols-5", "data-tsd-source": "/src/myt/components/SlotPicker.tsx:17:7", children: HOURS.map((h, idx) => {
      const taken = takenSlots.has(h);
      const recommend = recommendEarly && !taken && idx < 4;
      const isSelected = selected === h;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          disabled: taken,
          onClick: /* @__PURE__ */ __name2(() => onSelect(h), "onClick"),
          className: cn(
            "h-9 rounded-md text-xs font-medium transition-all border",
            taken && "bg-surface-3 text-muted-foreground/50 line-through cursor-not-allowed border-border/50",
            !taken && !isSelected && "bg-surface-2 text-foreground border-border hover:border-primary/50",
            isSelected && "bg-primary text-primary-foreground border-primary shadow-md",
            recommend && !isSelected && "ring-1 ring-role-tcm/40 border-role-tcm/40"
          ),
          "data-tsd-source": "/src/myt/components/SlotPicker.tsx:23:13",
          children: h
        },
        h
      );
    }) }),
    recommendEarly && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-role-tcm mt-2 flex items-center gap-1", "data-tsd-source": "/src/myt/components/SlotPicker.tsx:42:9", children: "⚡ Hard intent — earliest open slots highlighted" })
  ] });
}
__name(SlotPicker, "SlotPicker");
__name2(SlotPicker, "SlotPicker");
function getTakenSlotsForDate(tours, memberId, date) {
  const set = /* @__PURE__ */ new Set();
  tours.filter((t) => t.assignedTo === memberId && t.tourDate === date && t.status !== "cancelled").forEach((t) => set.add(t.tourTime));
  return set;
}
__name(getTakenSlotsForDate, "getTakenSlotsForDate");
__name2(getTakenSlotsForDate, "getTakenSlotsForDate");
async function sendTourMessage(opts) {
  glueBus.publish({ type: "tour.confirmation.sent", tourId: opts.tour.id, channel: opts.channels[0] ?? "whatsapp" });
  return { error: null };
}
__name(sendTourMessage, "sendTourMessage");
__name2(sendTourMessage, "sendTourMessage");
async function logTourEvent(tourId, kind, _notes) {
  glueBus.publish({ type: "tour.reminder.sent", tourId, kind });
  return { error: null };
}
__name(logTourEvent, "logTourEvent");
__name2(logTourEvent, "logTourEvent");
const todayStr = /* @__PURE__ */ __name2(() => (/* @__PURE__ */ new Date()).toISOString().split("T")[0], "todayStr");
const in7days = /* @__PURE__ */ __name2(() => {
  const d = /* @__PURE__ */ new Date();
  d.setDate(d.getDate() + 7);
  return d.toISOString().split("T")[0];
}, "in7days");
const roomTypes = ["Single", "Double Sharing", "Triple Sharing", "Studio"];
function ScheduleTour({ onScheduled } = {}) {
  const { tours, setTours, rooms, blocks, setBlocks } = useAppState();
  const { role, currentTcmId, tcms: storeTcms } = useApp();
  const currentTcmName = storeTcms.find((t) => t.id === currentTcmId)?.name;
  const [step, setStep] = reactExports.useState(1);
  const [form, setForm] = reactExports.useState({
    // customer
    leadName: "",
    phone: "",
    bookingSource: "whatsapp",
    // qualification
    moveInDate: todayStr(),
    budget: "12000",
    workLocation: "",
    occupation: "",
    roomType: "Single",
    decisionMaker: "self",
    // intent
    readyIn48h: false,
    exploring: false,
    comparing: false,
    needsFamily: false,
    willBookToday: "maybe",
    keyConcern: "",
    // tour
    tourType: "physical",
    zoneId: zones[0].id,
    propertyName: "",
    tourDate: todayStr(),
    tourTime: "",
    assignedTo: ""
    // empty = auto
  });
  reactExports.useEffect(() => {
    if (role === "tcm" && currentTcmName && !form.assignedTo) {
      const match = teamMembers.find((m) => m.role === "tcm" && m.name === currentTcmName);
      if (match) setForm((f) => ({ ...f, assignedTo: match.id }));
    }
  }, [role, currentTcmName, form.assignedTo]);
  const qualification = reactExports.useMemo(() => ({
    moveInDate: form.moveInDate,
    decisionMaker: form.decisionMaker,
    roomType: form.roomType,
    occupation: form.occupation,
    workLocation: form.workLocation,
    willBookToday: form.willBookToday,
    readyIn48h: form.readyIn48h,
    exploring: form.exploring,
    comparing: form.comparing,
    needsFamily: form.needsFamily,
    keyConcern: form.keyConcern
  }), [form]);
  const { score, intent, reason } = reactExports.useMemo(
    () => scoreTour(qualification, parseInt(form.budget) || 0),
    [qualification, form.budget]
  );
  const confirmationStrength = reactExports.useMemo(() => inferConfirmationStrength(qualification), [qualification]);
  const tcmsInZone = teamMembers.filter((m) => m.role === "tcm" && m.zoneId === form.zoneId);
  const effectiveTcm = form.assignedTo ? teamMembers.find((m) => m.id === form.assignedTo) : autoAssignTcm(tours, form.zoneId, intent);
  const takenSlots = reactExports.useMemo(
    () => effectiveTcm ? getTakenSlotsForDate(tours, effectiveTcm.id, form.tourDate) : /* @__PURE__ */ new Set(),
    [tours, effectiveTcm, form.tourDate]
  );
  const canSubmit = form.leadName && form.phone && form.propertyName && form.tourTime && effectiveTcm;
  const handleSubmit = /* @__PURE__ */ __name2(() => {
    if (!effectiveTcm) {
      toast.error("No TCM available");
      return;
    }
    if (!form.tourTime) {
      toast.error("Pick a slot");
      return;
    }
    const zone = zones.find((z) => z.id === form.zoneId);
    const newTour = {
      id: `t${Date.now()}`,
      leadName: form.leadName,
      phone: form.phone,
      assignedTo: effectiveTcm.id,
      assignedToName: effectiveTcm.name,
      propertyName: form.propertyName,
      area: zone.area,
      zoneId: form.zoneId,
      tourDate: form.tourDate,
      tourTime: form.tourTime,
      bookingSource: form.bookingSource,
      scheduledBy: "m1",
      scheduledByName: "You",
      leadType: intent === "hard" ? "urgent" : "future",
      status: "scheduled",
      showUp: null,
      outcome: null,
      remarks: "",
      budget: parseInt(form.budget) || 0,
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      tourType: form.tourType,
      intent,
      confidenceScore: score,
      confidenceReason: reason,
      confirmationStrength,
      qualification,
      tokenPaid: false,
      whyLost: null
    };
    setTours((prev) => [newTour, ...prev]);
    const matchingProp = properties.find((p) => p.name === form.propertyName && p.zoneId === form.zoneId);
    if (matchingProp) {
      const tourWithProp = { ...newTour, propertyId: matchingProp.id };
      const block = createBlockForTour(tourWithProp, rooms, blocks);
      if (block) {
        setBlocks((prev) => [block, ...prev]);
        toast.success(`${intent.toUpperCase()} tour → ${effectiveTcm.name} · Room held ${intent === "hard" ? "4h" : "1h"}`);
      } else {
        toast.success(`${intent.toUpperCase()} tour assigned to ${effectiveTcm.name}`);
      }
    } else {
      toast.success(`${intent.toUpperCase()} tour assigned to ${effectiveTcm.name}`);
    }
    logTourEvent(newTour.id, "booked", `Booked by ${newTour.scheduledByName}`).catch(console.error);
    sendTourMessage({
      tour: newTour,
      channels: ["in_app", "whatsapp"]
    }).catch((e) => console.error("confirmation send failed", e));
    setForm((f) => ({ ...f, leadName: "", phone: "", propertyName: "", tourTime: "", keyConcern: "" }));
    setStep(1);
    onScheduled?.();
  }, "handleSubmit");
  const select = "w-full h-10 bg-surface-2 border border-border rounded-md px-3 text-sm text-foreground";
  const labelCls = "text-muted-foreground text-[11px] uppercase tracking-wide";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-slide-up max-w-3xl", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:171:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between flex-wrap gap-3", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:172:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:173:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl md:text-2xl font-heading font-bold text-foreground", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:174:11", children: "Schedule Tour" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:175:11", children: "Smart form — every tour scored before send" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("rounded-xl border p-3 min-w-[200px]", intentBg[intent]), "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:178:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mb-1.5", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:179:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:180:13" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-wide font-semibold", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:181:13", children: "Live Score" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold tabular-nums", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:183:11", children: [
          score,
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:183:67", children: "/100" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ConfidenceBar, { score, intent, showLabel: false, className: "mt-1.5", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:184:11" }),
        reason.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] mt-1.5 leading-snug opacity-80", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:185:33", children: reason.join(" · ") })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:190:7", children: [1, 2, 3].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: /* @__PURE__ */ __name2(() => setStep(n), "onClick"), className: cn(
      "flex-1 h-1.5 rounded-full transition-colors",
      step >= n ? "bg-primary" : "bg-surface-2"
    ), "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:192:11" }, n)) }),
    step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-4 md:p-5 space-y-4", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:201:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading font-semibold text-sm text-foreground", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:202:11", children: "1. Customer & Qualification" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:204:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:205:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: labelCls, "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:206:15", children: "Lead Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: form.leadName, onChange: /* @__PURE__ */ __name2((e) => setForm((f) => ({ ...f, leadName: e.target.value })), "onChange"), className: "bg-surface-2 border-border", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:207:15" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:209:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: labelCls, "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:210:15", children: "Phone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: form.phone, onChange: /* @__PURE__ */ __name2((e) => setForm((f) => ({ ...f, phone: e.target.value })), "onChange"), className: "bg-surface-2 border-border", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:211:15" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:215:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:216:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: labelCls, "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:217:15", children: "Source" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: form.bookingSource, onChange: /* @__PURE__ */ __name2((e) => setForm((f) => ({ ...f, bookingSource: e.target.value })), "onChange"), className: select, "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:218:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "ad", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:219:17", children: "Ad" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "referral", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:220:17", children: "Referral" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "organic", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:221:17", children: "Organic" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "whatsapp", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:222:17", children: "WhatsApp" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "call", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:223:17", children: "Call" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "walk-in", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:224:17", children: "Walk-in" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:227:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: labelCls, "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:228:15", children: "Decision Maker" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: form.decisionMaker, onChange: /* @__PURE__ */ __name2((e) => setForm((f) => ({ ...f, decisionMaker: e.target.value })), "onChange"), className: select, "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:229:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "self", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:230:17", children: "Self" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "parent", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:231:17", children: "Parent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "group", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:232:17", children: "Group" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:237:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:238:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: labelCls, "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:239:15", children: "Move-in Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date", min: todayStr(), value: form.moveInDate, onChange: /* @__PURE__ */ __name2((e) => setForm((f) => ({ ...f, moveInDate: e.target.value })), "onChange"), className: "bg-surface-2 border-border", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:240:15" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:242:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: labelCls, "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:243:15", children: "Budget (₹/mo)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: form.budget, onChange: /* @__PURE__ */ __name2((e) => setForm((f) => ({ ...f, budget: e.target.value })), "onChange"), className: "bg-surface-2 border-border", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:244:15" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:248:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:249:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: labelCls, "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:250:15", children: "Work / College" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: form.occupation, onChange: /* @__PURE__ */ __name2((e) => setForm((f) => ({ ...f, occupation: e.target.value })), "onChange"), placeholder: "e.g. Infosys", className: "bg-surface-2 border-border", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:251:15" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:253:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: labelCls, "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:254:15", children: "Work Location" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: form.workLocation, onChange: /* @__PURE__ */ __name2((e) => setForm((f) => ({ ...f, workLocation: e.target.value })), "onChange"), placeholder: "e.g. Bellandur", className: "bg-surface-2 border-border", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:255:15" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:259:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: labelCls, "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:260:13", children: "Room Type" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: form.roomType, onChange: /* @__PURE__ */ __name2((e) => setForm((f) => ({ ...f, roomType: e.target.value })), "onChange"), className: select, "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:261:13", children: roomTypes.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: r, "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:262:35", children: r }, r)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: /* @__PURE__ */ __name2(() => setStep(2), "onClick"), disabled: !form.leadName || !form.phone, className: "w-full", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:266:11", children: "Next: Intent →" })
    ] }),
    step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-4 md:p-5 space-y-4", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:272:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading font-semibold text-sm text-foreground", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:273:11", children: "2. Intent Signals" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:275:11", children: [
        ["readyIn48h", "Ready to finalize within 48 hours", "positive"],
        ["exploring", "Only exploring", "negative"],
        ["comparing", "Comparing options", "negative"],
        ["needsFamily", "Needs family approval", "negative"]
      ].map(([key, label, kind]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: cn(
        "flex items-center gap-3 p-3 rounded-lg border bg-surface-2/40 cursor-pointer hover:bg-surface-2 transition-colors",
        form[key] && (kind === "positive" ? "border-role-tcm/40 bg-role-tcm/5" : "border-amber/40 bg-amber/5")
      ), "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:282:15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Checkbox,
          {
            checked: form[key],
            onCheckedChange: /* @__PURE__ */ __name2((v) => setForm((f) => ({ ...f, [key]: v === true })), "onCheckedChange"),
            "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:286:17"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground flex-1", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:290:17", children: label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("text-[10px] font-medium", kind === "positive" ? "text-role-tcm" : "text-amber-foreground"), "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:291:17", children: kind === "positive" ? "+" : "−" })
      ] }, key)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 border-t border-border", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:298:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-foreground text-sm font-semibold", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:299:13", children: "If everything matches, will you book today?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2 mt-2", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:300:13", children: ["yes", "maybe", "no"].map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: /* @__PURE__ */ __name2(() => setForm((f) => ({ ...f, willBookToday: opt })), "onClick"),
            className: cn(
              "h-11 rounded-lg border-2 text-sm font-medium uppercase tracking-wide transition-all",
              form.willBookToday === opt ? opt === "yes" ? "border-role-tcm bg-role-tcm/15 text-role-tcm" : opt === "no" ? "border-danger bg-danger/15 text-danger" : "border-role-hr bg-role-hr/15 text-role-hr" : "border-border bg-surface-2 text-muted-foreground hover:bg-surface-3"
            ),
            "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:302:17",
            children: opt
          },
          opt
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:321:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: labelCls, "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:322:13", children: "Key Concern (optional)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: form.keyConcern, onChange: /* @__PURE__ */ __name2((e) => setForm((f) => ({ ...f, keyConcern: e.target.value })), "onChange"), placeholder: "e.g. food quality, distance", className: "bg-surface-2 border-border", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:323:13" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:326:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: /* @__PURE__ */ __name2(() => setStep(1), "onClick"), className: "flex-1", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:327:13", children: "← Back" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: /* @__PURE__ */ __name2(() => setStep(3), "onClick"), className: "flex-1", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:328:13", children: "Next: Slot →" })
      ] })
    ] }),
    step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-4 md:p-5 space-y-4", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:335:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading font-semibold text-sm text-foreground", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:336:11", children: "3. Tour Type & Slot" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:339:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: labelCls, "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:340:13", children: "Tour Type" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2 mt-1.5", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:341:13", children: [
          ["physical", /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-4 w-4", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:343:30" }, "p"), "Physical"],
          ["virtual", /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { className: "h-4 w-4", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:344:29" }, "v"), "Virtual"],
          ["pre-book-pitch", /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-4 w-4", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:345:36" }, "b"), "Pre-book"]
        ].map(([val, icon, label]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: /* @__PURE__ */ __name2(() => setForm((f) => ({ ...f, tourType: val })), "onClick"),
            className: cn(
              "h-14 rounded-lg border-2 text-xs font-medium flex flex-col items-center justify-center gap-1 transition-all",
              form.tourType === val ? "border-primary bg-primary/10 text-primary" : "border-border bg-surface-2 text-muted-foreground"
            ),
            "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:347:17",
            children: [
              icon,
              label
            ]
          },
          val
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:362:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:363:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: labelCls, "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:364:15", children: "Zone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: form.zoneId, onChange: /* @__PURE__ */ __name2((e) => setForm((f) => ({ ...f, zoneId: e.target.value, assignedTo: "" })), "onChange"), className: select, "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:365:15", children: zones.map((z) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: z.id, "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:366:33", children: z.name }, z.id)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:369:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: labelCls, "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:370:15", children: "Property" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: form.propertyName, onChange: /* @__PURE__ */ __name2((e) => setForm((f) => ({ ...f, propertyName: e.target.value })), "onChange"), className: select, "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:371:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:372:17", children: "Select property…" }),
            properties.filter((p) => p.zoneId === form.zoneId).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: p.name, "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:374:19", children: [
              p.name,
              " · ₹",
              (p.basePrice / 1e3).toFixed(0),
              "k"
            ] }, p.id))
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:380:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:381:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: labelCls, "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:382:15", children: "Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date", min: todayStr(), max: in7days(), value: form.tourDate, onChange: /* @__PURE__ */ __name2((e) => setForm((f) => ({ ...f, tourDate: e.target.value, tourTime: "" })), "onChange"), className: "bg-surface-2 border-border", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:383:15" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:385:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: labelCls, "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:386:15", children: "Assign TCM" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: form.assignedTo, onChange: /* @__PURE__ */ __name2((e) => setForm((f) => ({ ...f, assignedTo: e.target.value, tourTime: "" })), "onChange"), className: select, "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:387:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: "", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:388:17", children: [
              "⚡ Auto-assign (",
              effectiveTcm?.name ?? "—",
              ")"
            ] }),
            tcmsInZone.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: m.id, "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:389:38", children: m.name }, m.id))
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:394:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: labelCls, "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:395:13", children: [
          "Pick Slot ",
          effectiveTcm && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-2 normal-case text-foreground/60", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:395:68", children: [
            "(",
            effectiveTcm.name,
            ")"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1.5", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:396:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          SlotPicker,
          {
            date: form.tourDate,
            selected: form.tourTime,
            onSelect: /* @__PURE__ */ __name2((t) => setForm((f) => ({ ...f, tourTime: t })), "onSelect"),
            takenSlots,
            recommendEarly: intent === "hard",
            "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:397:15"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-2", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:407:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: /* @__PURE__ */ __name2(() => setStep(2), "onClick"), className: "flex-1", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:408:13", children: "← Back" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: handleSubmit, disabled: !canSubmit, className: "flex-[2]", "data-tsd-source": "/src/myt/pages/ScheduleTour.tsx:409:13", children: [
          "Schedule ",
          intent.toUpperCase(),
          " Tour"
        ] })
      ] })
    ] })
  ] });
}
__name(ScheduleTour, "ScheduleTour");
__name2(ScheduleTour, "ScheduleTour");
const SplitComponent = /* @__PURE__ */ __name2(() => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/myt/schedule.tsx:7:20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScheduleTour, { "data-tsd-source": "/src/routes/myt/schedule.tsx:7:30" }) }), "SplitComponent");
export {
  SplitComponent as component
};
