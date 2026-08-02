var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AppShell, M as Sheet, N as SheetContent, O as SheetHeader, Q as SheetTitle } from "./AppShell-rXFHrudv.mjs";
import { B as Badge, q as cn, k as Button, A as Textarea, S as Select, w as SelectTrigger, x as SelectValue, y as SelectContent, z as SelectItem, X as Input, a3 as glueBus, T as Tabs, h as TabsList, j as TabsTrigger, l as TabsContent, U as Label, C as Card, u as useApp, c as useMountedNow, Z as Dialog, _ as DialogTrigger, $ as DialogContent, a0 as DialogHeader, a1 as DialogTitle } from "./router-Cbs6ivkN.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { c as create, p as persist } from "../_libs/zustand.mjs";
import { C as Checkbox } from "./checkbox-BQBPja4L.mjs";
import { S as Slider } from "./slider-rDMznnl4.mjs";
import { S as Separator } from "./separator-khanlWef.mjs";
import "../_libs/react-dom.mjs";
import { aK as Timer, U as User, B as Building2, g as TriangleAlert, P as Phone, r as MessageCircle, K as MapPin, s as Clock, bd as Sparkle, l as CircleCheck, a9 as Circle, R as Radio, e as Copy, A as ArrowRight, aJ as Shield, k as FileText, be as Handshake, W as Wallet, aQ as Flag, h as Siren, b as Check, aV as LayoutGrid, F as Flame, aj as ShieldAlert, G as Gauge, a4 as BookOpen, t as Plus } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-checkbox.mjs";
import "../_libs/radix-ui__react-slider.mjs";
import "../_libs/radix-ui__react-separator.mjs";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
const STAGE_LABEL = {
  scheduled: "Scheduled",
  "customer-confirmed": "Customer Confirmed",
  "inventory-confirmed": "Inventory Confirmed",
  "en-route": "En Route",
  arrived: "Arrived",
  "tour-live": "Tour In Progress",
  feedback: "Feedback Captured",
  "quotation-sent": "Quotation Sent",
  negotiation: "Negotiation Active",
  "token-pending": "Token Pending",
  booked: "Booked",
  alternative: "Alternative Tour",
  lost: "Lost"
};
const STAGE_SLA_MIN = {
  scheduled: 30,
  "customer-confirmed": 60,
  "inventory-confirmed": 120,
  "en-route": 45,
  arrived: 10,
  "tour-live": 30,
  feedback: 10,
  "quotation-sent": 15,
  negotiation: 20,
  "token-pending": 120,
  booked: 0,
  alternative: 240,
  lost: 0
};
const COLUMN_LABEL = {
  upcoming: "UPCOMING",
  "en-route": "EN ROUTE",
  arrived: "ARRIVED",
  "tour-live": "TOUR LIVE",
  closing: "CLOSING NOW",
  "token-pending": "TOKEN PENDING",
  alternative: "ALTERNATIVE REQUIRED",
  "follow-up": "FOLLOW-UP TODAY",
  booked: "BOOKED",
  lost: "LOST"
};
const PRIMARY_COLUMNS = [
  "upcoming",
  "en-route",
  "arrived",
  "tour-live",
  "closing"
];
const SECONDARY_COLUMNS = [
  "token-pending",
  "alternative",
  "follow-up",
  "booked",
  "lost"
];
const INVENTORY_CHECK_ITEMS = [
  { key: "roomVacant", label: "Room is vacant" },
  { key: "bedAvailable", label: "Bed is available" },
  { key: "roomCleaned", label: "Room is cleaned" },
  { key: "managerInformed", label: "Property manager informed" },
  { key: "priceConfirmed", label: "Correct price available" },
  { key: "discountAuthorityClear", label: "Discount authority clear" },
  { key: "backupRoomReady", label: "Backup room available" }
];
const READINESS_ITEMS = [
  { key: "coordinatorPresent", label: "Coordinator present at property" },
  { key: "roomUnlocked", label: "Room unlocked" },
  { key: "bedAvailable", label: "Selected bed available" },
  { key: "managerInformed", label: "Property manager informed" },
  { key: "backupRoomReady", label: "Backup room ready" }
];
const REACTION_META = {
  "likes-property": { label: "Likes property", tone: "positive" },
  "likes-room": { label: "Likes room", tone: "positive" },
  "dislikes-room": { label: "Dislikes room", tone: "negative", objection: "room" },
  "price-concern": { label: "Price concern", tone: "negative", objection: "price" },
  "distance-concern": { label: "Distance concern", tone: "negative", objection: "distance" },
  "food-concern": { label: "Food concern", tone: "negative", objection: "food" },
  "hygiene-concern": { label: "Hygiene concern", tone: "negative", objection: "hygiene" },
  "room-size-concern": { label: "Room-size concern", tone: "negative", objection: "room" },
  "family-approval": { label: "Family approval required", tone: "neutral", objection: "family" },
  "comparing-property": { label: "Comparing another property", tone: "neutral", objection: "comparison" },
  "ready-to-book": { label: "Ready to book", tone: "positive" },
  "alternative-required": { label: "Alternative required", tone: "negative", objection: "match" }
};
const OBJECTION_LABEL = {
  price: "Price",
  distance: "Distance",
  room: "Room",
  food: "Food",
  hygiene: "Hygiene",
  family: "Family approval",
  comparison: "Comparing options",
  match: "Wrong match",
  timing: "Timing / payment"
};
const NEGOTIATION_TOPICS = [
  { key: "price", label: "Price" },
  { key: "deposit", label: "Deposit" },
  { key: "payment-timing", label: "Payment timing" },
  { key: "family-approval", label: "Family approval" },
  { key: "comparison", label: "Comparison" },
  { key: "distance", label: "Distance" },
  { key: "facilities", label: "Facility concerns" },
  { key: "room-availability", label: "Room availability" }
];
const OUTCOME_LABEL = {
  booked: "Booked",
  "token-pending": "Token pending",
  "family-approval-pending": "Family approval pending",
  "negotiation-active": "Negotiation active",
  "alternative-scheduled": "Alternative tour scheduled",
  "follow-up-scheduled": "Follow-up scheduled",
  "no-show": "No-show",
  rescheduled: "Rescheduled",
  "not-looking": "Not looking anymore",
  lost: "Lost with reason"
};
const LOST_REASON_LABEL = {
  "chose-another-pg": "Chose another PG",
  "chose-flat": "Chose a flat",
  budget: "Budget mismatch",
  location: "Location mismatch",
  amenities: "Amenities not suitable",
  "family-rejected": "Family rejected",
  "plan-changed": "Plan changed",
  "no-response": "No response"
};
function inr(n) {
  return `₹${Math.round(n).toLocaleString("en-IN")}`;
}
__name(inr, "inr");
__name2(inr, "inr");
function fmtDur(ms) {
  const s = Math.max(0, Math.floor(ms / 1e3));
  const h = Math.floor(s / 3600);
  const m = Math.floor(s % 3600 / 60);
  const sec = s % 60;
  const p = /* @__PURE__ */ __name2((n) => String(n).padStart(2, "0"), "p");
  return h > 0 ? `${h}h ${p(m)}m` : `${p(m)}:${p(sec)}`;
}
__name(fmtDur, "fmtDur");
__name2(fmtDur, "fmtDur");
function fmtCountdown(ms) {
  const late = ms < 0;
  const s = Math.abs(Math.floor(ms / 1e3));
  const h = Math.floor(s / 3600);
  const m = Math.floor(s % 3600 / 60);
  const body = h > 0 ? `${h}h ${m}m` : `${m}m`;
  return late ? `${body} late` : `in ${body}`;
}
__name(fmtCountdown, "fmtCountdown");
__name2(fmtCountdown, "fmtCountdown");
function inventoryConfirmed(inv) {
  return INVENTORY_CHECK_ITEMS.every((i) => inv[i.key] === true);
}
__name(inventoryConfirmed, "inventoryConfirmed");
__name2(inventoryConfirmed, "inventoryConfirmed");
function readinessConfirmed(r) {
  return READINESS_ITEMS.every((i) => r[i.key] === true);
}
__name(readinessConfirmed, "readinessConfirmed");
__name2(readinessConfirmed, "readinessConfirmed");
function columnFor(v) {
  switch (v.stage) {
    case "scheduled":
    case "customer-confirmed":
    case "inventory-confirmed":
      return "upcoming";
    case "en-route":
      return "en-route";
    case "arrived":
      return "arrived";
    case "tour-live":
      return "tour-live";
    case "feedback":
    case "quotation-sent":
    case "negotiation":
      return "closing";
    case "token-pending":
      return "token-pending";
    case "alternative":
      return "alternative";
    case "booked":
      return "booked";
    case "lost":
      return "lost";
    default:
      return "follow-up";
  }
}
__name(columnFor, "columnFor");
__name2(columnFor, "columnFor");
function bookingProbability(v) {
  if (v.stage === "booked") return 100;
  if (v.stage === "lost") return 0;
  let p = 20;
  if (v.confirmation === "confirmed") p += 5;
  if (v.stage === "en-route") p += 5;
  if (v.stage === "arrived") p += 10;
  if (v.stage === "tour-live") p += 15;
  const pos = v.reactions.filter((r) => REACTION_META[r.tag].tone === "positive").length;
  const neg = v.reactions.filter((r) => REACTION_META[r.tag].tone === "negative").length;
  p += Math.min(20, pos * 7) - Math.min(25, neg * 6);
  if (v.feedback) p = Math.round(p * 0.35 + v.feedback.rating * 10 * 0.65);
  if (v.quotation?.sentAt) p += 8;
  if (v.quotation?.acceptedAt) p += 15;
  if (v.token?.promisedAt) p += 10;
  if (v.outcome === "family-approval-pending") p -= 5;
  return Math.max(2, Math.min(98, Math.round(p)));
}
__name(bookingProbability, "bookingProbability");
__name2(bookingProbability, "bookingProbability");
function stageAgeMs(v, now) {
  return Math.max(0, now - v.stageSince);
}
__name(stageAgeMs, "stageAgeMs");
__name2(stageAgeMs, "stageAgeMs");
function isStageBreached(v, now) {
  const sla = STAGE_SLA_MIN[v.stage];
  if (!sla) return false;
  return stageAgeMs(v, now) > sla * 6e4;
}
__name(isStageBreached, "isStageBreached");
__name2(isStageBreached, "isStageBreached");
function minutesLate(v, now) {
  if (v.arrival) return 0;
  return Math.floor((now - v.scheduledAt) / 6e4);
}
__name(minutesLate, "minutesLate");
__name2(minutesLate, "minutesLate");
const TIER_LABEL = {
  "close-now": "PRIORITY 1 · CLOSE NOW",
  "at-risk": "PRIORITY 2 · AT RISK",
  "follow-up": "PRIORITY 3 · FOLLOW-UP",
  normal: "ON TRACK",
  done: "CLOSED"
};
function priorityFor(v, now) {
  const reasons = [];
  if (v.stage === "booked" || v.stage === "lost") {
    return { tier: "done", score: 0, reasons: [v.outcome ? `Outcome: ${v.outcome}` : "Closed"] };
  }
  const insideProperty = v.stage === "arrived" || v.stage === "tour-live";
  const rating = v.feedback?.rating ?? 0;
  const unresolvedObjections = countObjections(v);
  const closeNow = insideProperty && rating >= 8 || insideProperty && v.reactions.some((r) => r.tag === "ready-to-book") || rating >= 8 && unresolvedObjections <= 1 && v.bedAvailable;
  if (closeNow) {
    if (insideProperty) reasons.push("Customer is inside the property");
    if (rating >= 8) reasons.push(`Rated ${rating}/10`);
    if (v.feedback?.favouriteRoom) reasons.push(`Selected room ${v.feedback.favouriteRoom}`);
    if (unresolvedObjections <= 1) reasons.push(`${unresolvedObjections} objection remaining`);
    if (v.bedAvailable) reasons.push("Room currently available");
    return { tier: "close-now", score: 1e3 + rating * 10 + bookingProbability(v), reasons };
  }
  const late = minutesLate(v, now);
  const preTour = ["scheduled", "customer-confirmed", "inventory-confirmed", "en-route"].includes(v.stage);
  if (preTour && late > 15) reasons.push(`Customer ${late} min late`);
  if (!v.coordinatorConfirmed && v.scheduledAt - now < 60 * 6e4 && preTour) reasons.push("Coordinator not confirmed");
  if (!v.bedAvailable) reasons.push("Selected room became unavailable");
  if (v.movement === "not-responding" || v.confirmation === "not-responding") reasons.push("Customer not responding");
  if (v.reactions.some((r) => r.tag === "alternative-required")) reasons.push("Customer needs an alternative");
  if (v.stage === "feedback" && !v.quotation) reasons.push("Quotation not sent after positive tour");
  if (now - v.updatedAt > 15 * 6e4 && v.stage !== "scheduled") reasons.push("No action for 15+ minutes");
  if (isStageBreached(v, now)) reasons.push(`Stuck in ${STAGE_LABEL[v.stage]} beyond SLA`);
  if (reasons.length) {
    return { tier: "at-risk", score: 600 + reasons.length * 20 + Math.max(0, late), reasons };
  }
  if (v.completedAt || v.outcome === "family-approval-pending" || v.outcome === "follow-up-scheduled" || v.stage === "token-pending" || v.stage === "alternative") {
    if (v.outcome === "family-approval-pending") reasons.push("Family approval pending");
    if (v.stage === "token-pending" && !v.token?.paidAt) reasons.push("Token promised but unpaid");
    if (v.reactions.some((r) => r.tag === "comparing-property")) reasons.push("Comparing other options");
    if (!v.nextAction) reasons.push("No next action assigned");
    return { tier: "follow-up", score: 300 + (v.nextAction ? 0 : 50), reasons: reasons.length ? reasons : ["Tour completed — needs next step"] };
  }
  const mins = Math.round((v.scheduledAt - now) / 6e4);
  return {
    tier: "normal",
    score: 100 - Math.min(99, Math.abs(mins)),
    reasons: [mins >= 0 ? `Visit in ${mins} min` : `Started ${Math.abs(mins)} min ago`]
  };
}
__name(priorityFor, "priorityFor");
__name2(priorityFor, "priorityFor");
function countObjections(v) {
  const set = /* @__PURE__ */ new Set();
  v.reactions.forEach((r) => {
    const o = REACTION_META[r.tag].objection;
    if (o) set.add(o);
  });
  if (v.feedback?.objection) set.add(v.feedback.objection);
  return set.size;
}
__name(countObjections, "countObjections");
__name2(countObjections, "countObjections");
function primaryObjection(v) {
  if (v.feedback?.objection) return v.feedback.objection;
  const last = v.reactions.find((r) => REACTION_META[r.tag].objection);
  return last ? REACTION_META[last.tag].objection : null;
}
__name(primaryObjection, "primaryObjection");
__name2(primaryObjection, "primaryObjection");
function buildIntervention(v, alternatives) {
  const objection = primaryObjection(v);
  if (!objection) return null;
  const gap = Math.max(0, v.rent - v.budget);
  const availableDiscount = Math.min(gap, Math.round(v.rent * 0.05 / 100) * 100 || 500);
  const cheaper = alternatives.filter((a) => a.name !== v.propertyName && a.rent <= v.budget + 500).sort((a, b) => Math.abs(a.rent - v.budget) - Math.abs(b.rent - v.budget))[0];
  const base = {
    objection,
    headline: `Objection: ${OBJECTION_LABEL[objection]}`,
    lines: [],
    recommendation: "Call customer now",
    alternative: cheaper ? `${cheaper.name} at ${inr(cheaper.rent)}` : void 0,
    availableDiscount,
    gap
  };
  switch (objection) {
    case "price":
      base.lines = [
        { label: "Customer budget", value: inr(v.budget) },
        { label: "Property price", value: inr(v.rent) },
        { label: "Gap", value: inr(gap) },
        { label: "Available discount", value: inr(availableDiscount) },
        { label: "Alternative option", value: base.alternative ?? "None within budget" }
      ];
      base.recommendation = gap <= availableDiscount ? "Approve discount and close on the spot" : "Call customer now — offer structure + alternative";
      break;
    case "distance":
      base.lines = [
        { label: "Property area", value: v.propertyArea },
        { label: "Customer location", value: v.currentLocation },
        { label: "Proof to send", value: "Commute time screenshot + transport options" },
        { label: "Alternative option", value: base.alternative ?? "Closer option to be sourced" }
      ];
      base.recommendation = "Send commute proof, then call";
      break;
    case "family":
      base.lines = [
        { label: "Decision maker", value: v.decisionMaker },
        { label: "Pack to send", value: "Room video, photos, safety, food, pricing, rules, location, payment terms" },
        { label: "Deadline rule", value: "Family approval cannot exist without a decision-call time" }
      ];
      base.recommendation = "Send family decision pack and lock the decision call";
      break;
    case "room":
      base.lines = [
        { label: "Shown room", value: v.roomNo || "—" },
        { label: "Action", value: "Show another room in the same property first" },
        { label: "Alternative option", value: base.alternative ?? "One alternate property" }
      ];
      base.recommendation = "Show backup room before offering another property";
      break;
    case "comparison":
      base.lines = [
        { label: "Rule", value: "Show only one highly relevant alternative" },
        { label: "Capture", value: "What exactly is missing here?" },
        { label: "Alternative option", value: base.alternative ?? "Pending supply match" }
      ];
      base.recommendation = "Capture the missing attribute and schedule ONE alternative";
      break;
    default:
      base.lines = [
        { label: "Objection", value: OBJECTION_LABEL[objection] },
        { label: "Rent", value: inr(v.rent) },
        { label: "Budget", value: inr(v.budget) },
        { label: "Alternative option", value: base.alternative ?? "None yet" }
      ];
  }
  return base;
}
__name(buildIntervention, "buildIntervention");
__name2(buildIntervention, "buildIntervention");
function checkpointsFor(v, now) {
  const start = v.tourStartedAt ?? v.scheduledAt;
  return [
    {
      key: "t-120",
      label: "T−120 · Inventory confirmation",
      offsetMin: -120,
      owner: "Supply Controller",
      done: inventoryConfirmed(v.inventory),
      detail: "Room vacant, bed available, cleaned, manager informed, price + discount authority, backup room"
    },
    {
      key: "t-60",
      label: "T−60 · Customer confirmation",
      offsetMin: -60,
      owner: "Lead Owner",
      done: v.confirmation === "confirmed",
      detail: "Time, location, landmark, coordinator, room type, rent range, travel reminder shared"
    },
    {
      key: "t-30",
      label: "T−30 · Movement check",
      offsetMin: -30,
      owner: "Visit Controller",
      done: v.movement !== "unknown",
      detail: "En route / leaving shortly / running late / unable to come / not responding"
    },
    {
      key: "t-10",
      label: "T−10 · Property readiness",
      offsetMin: -10,
      owner: "Tour Coordinator",
      done: readinessConfirmed(v.readiness),
      detail: "Coordinator present, room unlocked, bed available, manager informed, backup ready"
    },
    { key: "t0", label: "T+0 · Arrival", offsetMin: 0, owner: "Tour Coordinator", done: !!v.arrival, detail: "Arrived / delayed / no-show / location assistance" },
    { key: "t10", label: "T+10 · Tour started", offsetMin: 10, owner: "Tour Coordinator", done: !!v.tourStartedAt, detail: "Live visit timer begins" },
    { key: "t20", label: "T+20 · Preference capture", offsetMin: 20, owner: "Tour Coordinator", done: !!v.feedback, detail: "Favourite property/room, rating, objection, booking probability" },
    { key: "t30", label: "T+30 · Quotation", offsetMin: 30, owner: "Lead Owner", done: !!v.quotation?.sentAt, detail: "Rent, deposit, maintenance, fee, check-in, lock-in, notice, token, expiry" },
    { key: "t45", label: "T+45 · Negotiation", offsetMin: 45, owner: "Lead Owner", done: !!v.negotiation || !!v.token?.paidAt, detail: "Price, deposit, timing, family, comparison, distance, facilities, availability" },
    { key: "t60", label: "T+60 · Final outcome", offsetMin: 60, owner: "Visit Controller", done: !!v.outcome, detail: "Booked / token / family / negotiation / alternative / follow-up / lost" }
  ].map((c) => ({ ...c, overdue: false, at: start + c.offsetMin * 6e4 }));
}
__name(checkpointsFor, "checkpointsFor");
__name2(checkpointsFor, "checkpointsFor");
function evaluateAlerts(v, now) {
  const out = [];
  const minsToVisit = (v.scheduledAt - now) / 6e4;
  const preTour = ["scheduled", "customer-confirmed", "inventory-confirmed", "en-route"].includes(v.stage);
  const closed = v.stage === "booked" || v.stage === "lost";
  if (closed) return out;
  if (preTour && minsToVisit <= 60 && minsToVisit > -5 && v.confirmation !== "confirmed") {
    out.push({ kind: "not-confirmed", severity: "warn", message: `Visit within 60 min but ${v.customer} has not confirmed` });
  }
  if (!v.coordinatorId) out.push({ kind: "no-coordinator", severity: "critical", message: `No coordinator assigned for ${v.customer}` });
  if (preTour && minsToVisit <= 60 && !v.coordinatorConfirmed) {
    out.push({ kind: "coordinator-unconfirmed", severity: "warn", message: `Coordinator ${v.coordinator} has not confirmed availability` });
  }
  if (preTour && minsToVisit <= 120 && !inventoryConfirmed(v.inventory)) {
    out.push({ kind: "inventory-unconfirmed", severity: "critical", message: `Inventory not confirmed for ${v.propertyName} ${v.roomNo}` });
  }
  if (preTour && minsToVisit <= 30 && minsToVisit > -5 && v.movement === "unknown") {
    out.push({ kind: "not-en-route", severity: "warn", message: `${v.customer} has not started travelling (T−30)` });
  }
  if (preTour && minutesLate(v, now) > 15) {
    out.push({ kind: "customer-late", severity: "critical", message: `${v.customer} is ${minutesLate(v, now)} min late` });
  }
  if (!v.bedAvailable) {
    out.push({ kind: "bed-unavailable", severity: "critical", message: `Bed ${v.bedNo || v.roomNo} at ${v.propertyName} is no longer available` });
  }
  if (v.stage === "arrived" && v.arrival && now - v.arrival.arrivedAt > 10 * 6e4 && !v.tourStartedAt) {
    out.push({ kind: "tour-not-started", severity: "warn", message: `Tour not started 10 min after arrival · ${v.customer}` });
  }
  if (v.stage === "tour-live" && v.tourStartedAt && now - v.tourStartedAt > 30 * 6e4 && !v.feedback) {
    out.push({ kind: "no-feedback", severity: "critical", message: `Tour running 30+ min without feedback · ${v.customer}` });
  }
  if (v.feedback && v.feedback.rating >= 8 && !v.quotation?.sentAt) {
    out.push({ kind: "quotation-missing", severity: "critical", message: `Rated ${v.feedback.rating}/10 but no quotation sent · ${v.customer}` });
  }
  if (v.quotation?.sentAt && !v.nextAction && !v.token?.paidAt) {
    out.push({ kind: "quotation-no-followup", severity: "warn", message: `Quotation sent but no follow-up started · ${v.customer}` });
  }
  if (v.token?.promisedAt && !v.token.paidAt && now - v.token.promisedAt > 60 * 6e4) {
    out.push({ kind: "token-unpaid", severity: "critical", message: `Token promised 60+ min ago, still unpaid · ${v.customer}` });
  }
  if (v.completedAt && !v.nextAction && !["booked", "lost"].includes(v.stage)) {
    out.push({ kind: "no-next-action", severity: "warn", message: `Completed visit without next action · ${v.customer}` });
  }
  if (isStageBreached(v, now)) {
    out.push({ kind: "stage-stuck", severity: "warn", message: `Stuck in ${STAGE_LABEL[v.stage]} for ${Math.round(stageAgeMs(v, now) / 6e4)} min · ${v.customer}` });
  }
  return out;
}
__name(evaluateAlerts, "evaluateAlerts");
__name2(evaluateAlerts, "evaluateAlerts");
function auditRules(v, now) {
  const out = [];
  if (!v.leadOwnerId) out.push({ rule: "No visit without a lead owner", detail: "Assign a lead owner" });
  if (!v.coordinatorId) out.push({ rule: "No visit without a coordinator", detail: "Assign a tour coordinator" });
  if (!inventoryConfirmed(v.inventory) && v.stage !== "lost")
    out.push({ rule: "No visit without confirmed room inventory", detail: "Complete the T−120 supply checklist" });
  if (!v.roomNo && !v.bedNo) out.push({ rule: "Visit must carry a room/bed preference", detail: "Property-only visits are not allowed" });
  if (isStageBreached(v, now)) out.push({ rule: "No stage beyond its SLA", detail: `${STAGE_LABEL[v.stage]} exceeded ${STAGE_SLA_MIN[v.stage]} min` });
  if (v.completedAt && !v.feedback) out.push({ rule: "No completed tour without feedback", detail: "Capture rating + objection" });
  if (v.feedback && v.feedback.rating >= 7 && !v.quotation) out.push({ rule: "No positive visit without a quotation", detail: "Send quotation now" });
  if (v.quotation && !v.nextAction) out.push({ rule: "No quotation without a follow-up deadline", detail: "Set next action + deadline" });
  if ((v.stage === "booked" || v.stage === "lost") && !v.outcome)
    out.push({ rule: "No visit complete without a final outcome", detail: "Record the outcome" });
  if (v.outcome === "family-approval-pending" && !v.nextAction)
    out.push({ rule: "No 'thinking' status without reason and deadline", detail: "Set the family decision-call time" });
  if (!v.bedAvailable && v.stage !== "lost") out.push({ rule: "No room promised without supply confirmation", detail: "Re-confirm or switch room" });
  return out;
}
__name(auditRules, "auditRules");
__name2(auditRules, "auditRules");
function draftQuotation(v) {
  const rent = v.feedback ? v.rent : v.rent;
  return {
    propertyName: v.feedback?.favouriteProperty || v.propertyName,
    roomNo: v.feedback?.favouriteRoom || v.roomNo || "—",
    bedNo: v.bedNo || "A",
    rent,
    deposit: rent,
    maintenance: 1e3,
    gharpayyFee: Math.round(rent * 0.25),
    checkInDate: v.checkInDate,
    lockInMonths: 6,
    noticeDays: 30,
    tokenAmount: 2e3,
    expiresAt: Date.now() + 24 * 36e5
  };
}
__name(draftQuotation, "draftQuotation");
__name2(draftQuotation, "draftQuotation");
function avg(nums) {
  if (!nums.length) return 0;
  return Math.round(nums.reduce((a, b) => a + b, 0) / nums.length);
}
__name(avg, "avg");
__name2(avg, "avg");
function computeMetrics(visits) {
  const dayStart = /* @__PURE__ */ new Date();
  dayStart.setHours(0, 0, 0, 0);
  const today = visits.filter((v) => v.scheduledAt >= +dayStart);
  const scope = today.length ? today : visits;
  const completed = scope.filter((v) => v.completedAt);
  const booked = scope.filter((v) => v.stage === "booked");
  const quoted = scope.filter((v) => v.quotation?.sentAt);
  const turnaround = quoted.filter((v) => v.completedAt).map((v) => Math.round((v.quotation.sentAt - v.completedAt) / 6e4));
  const arrivalToQuote = quoted.filter((v) => v.arrival).map((v) => Math.round((v.quotation.sentAt - v.arrival.arrivedAt) / 6e4));
  const quoteToToken = scope.filter((v) => v.quotation?.sentAt && v.token?.paidAt).map((v) => Math.round((v.token.paidAt - v.quotation.sentAt) / 6e4));
  const group = /* @__PURE__ */ __name2((rows, key) => {
    const m = /* @__PURE__ */ new Map();
    rows.forEach((v) => {
      const k = key(v);
      const cur = m.get(k) ?? { visits: 0, completed: 0, booked: 0 };
      cur.visits += 1;
      if (v.completedAt) cur.completed += 1;
      if (v.stage === "booked") cur.booked += 1;
      m.set(k, cur);
    });
    return m;
  }, "group");
  const coord = group(scope, (v) => v.coordinator);
  const owner = group(scope, (v) => v.leadOwner);
  const prop = group(scope, (v) => v.propertyName);
  const roomCount = /* @__PURE__ */ new Map();
  scope.forEach((v) => {
    const r = v.feedback?.favouriteRoom || v.roomNo;
    if (!r) return;
    roomCount.set(r, (roomCount.get(r) ?? 0) + 1);
  });
  const lost = /* @__PURE__ */ new Map();
  scope.forEach((v) => {
    if (v.stage === "lost") {
      const k = v.lostReason ?? v.outcome ?? "unspecified";
      lost.set(k, (lost.get(k) ?? 0) + 1);
    }
  });
  return {
    scheduled: scope.length,
    confirmed: scope.filter((v) => v.confirmation === "confirmed").length,
    enRoute: scope.filter((v) => v.movement === "en-route" || v.stage === "en-route").length,
    completed: completed.length,
    noShows: scope.filter((v) => v.outcome === "no-show").length,
    rescheduled: scope.filter((v) => v.outcome === "rescheduled").length,
    quotationsSent: quoted.length,
    avgQuotationTurnaroundMin: avg(turnaround),
    booked: booked.length,
    sameDayBookingPct: scope.length ? Math.round(booked.length / scope.length * 100) : 0,
    avgArrivalToQuotationMin: avg(arrivalToQuote),
    avgQuotationToTokenMin: avg(quoteToToken),
    stuckWithoutNextAction: scope.filter((v) => v.completedAt && !v.nextAction && v.stage !== "booked").length,
    lostReasons: Array.from(lost.entries()).sort((a, b) => b[1] - a[1]),
    coordinatorRows: Array.from(coord.entries()).map(([name, r]) => ({ name, ...r, conv: r.completed ? Math.round(r.booked / r.completed * 100) : 0 })).sort((a, b) => b.visits - a.visits),
    ownerRows: Array.from(owner.entries()).map(([name, r]) => ({ name, visits: r.visits, booked: r.booked, conv: r.visits ? Math.round(r.booked / r.visits * 100) : 0 })).sort((a, b) => b.visits - a.visits),
    propertyRows: Array.from(prop.entries()).map(([name, r]) => ({ name, visits: r.visits, booked: r.booked, conv: r.visits ? Math.round(r.booked / r.visits * 100) : 0 })).sort((a, b) => b.visits - a.visits),
    roomDemand: Array.from(roomCount.entries()).map(([room, count]) => ({ room, count })).sort((a, b) => b.count - a.count).slice(0, 8)
  };
}
__name(computeMetrics, "computeMetrics");
__name2(computeMetrics, "computeMetrics");
function groupByColumn(visits, now) {
  const map = /* @__PURE__ */ new Map();
  visits.forEach((v) => {
    let col = columnFor(v);
    if ((v.outcome === "follow-up-scheduled" || v.outcome === "family-approval-pending") && v.stage !== "booked" && v.stage !== "lost") {
      col = "follow-up";
    }
    if (!map.has(col)) map.set(col, []);
    map.get(col).push(v);
  });
  map.forEach((list) => list.sort((a, b) => priorityFor(b, now).score - priorityFor(a, now).score));
  return map;
}
__name(groupByColumn, "groupByColumn");
__name2(groupByColumn, "groupByColumn");
const EMPTY_INVENTORY = {
  roomVacant: false,
  bedAvailable: false,
  roomCleaned: false,
  managerInformed: false,
  priceConfirmed: false,
  discountAuthorityClear: false,
  backupRoomReady: false
};
const EMPTY_READINESS = {
  coordinatorPresent: false,
  roomUnlocked: false,
  bedAvailable: false,
  managerInformed: false,
  backupRoomReady: false
};
const uid = /* @__PURE__ */ __name2((p) => `${p}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`, "uid");
function entry(kind, text, by = "System") {
  return { id: uid("tl"), ts: Date.now(), kind, text, by };
}
__name(entry, "entry");
__name2(entry, "entry");
const useLiveVisits = create()(
  persist(
    (set, get) => {
      const mut = /* @__PURE__ */ __name2((id, fn) => set((s) => {
        const cur = s.visits[id];
        if (!cur) return s;
        return { visits: { ...s.visits, [id]: { ...fn(cur), updatedAt: Date.now() } } };
      }), "mut");
      const log = /* @__PURE__ */ __name2((v, e) => ({
        ...v,
        timeline: [e, ...v.timeline].slice(0, 120)
      }), "log");
      const advance = /* @__PURE__ */ __name2((v, stage, by = "System") => {
        if (v.stage === stage) return v;
        return log(
          { ...v, stage, stageSince: Date.now() },
          entry("stage", `Stage → ${STAGE_LABEL[stage]}`, by)
        );
      }, "advance");
      return {
        visits: {},
        alerts: [],
        alertsSeenAt: 0,
        seededTourIds: [],
        seed: /* @__PURE__ */ __name2((input) => {
          const now = Date.now();
          const v = {
            id: input.id,
            tourId: input.tourId,
            leadId: input.leadId,
            customer: input.customer,
            phone: input.phone,
            currentLocation: input.currentLocation ?? "—",
            checkInDate: input.checkInDate,
            budget: input.budget,
            occupation: input.occupation ?? "—",
            decisionMaker: input.decisionMaker ?? "Self",
            intent: input.intent ?? "warm",
            scheduledAt: input.scheduledAt,
            stage: input.stage ?? "scheduled",
            stageSince: now,
            confirmation: "pending",
            movement: "unknown",
            propertyId: input.propertyId,
            propertyName: input.propertyName,
            propertyArea: input.propertyArea,
            roomNo: input.roomNo ?? "",
            bedNo: input.bedNo ?? "",
            rent: input.rent,
            inventory: { ...EMPTY_INVENTORY },
            readiness: { ...EMPTY_READINESS },
            bedAvailable: true,
            leadOwnerId: input.leadOwnerId,
            leadOwner: input.leadOwner,
            coordinatorId: input.coordinatorId,
            coordinator: input.coordinator,
            coordinatorConfirmed: false,
            reactions: [],
            timeline: [entry("stage", "Visit created in War Room", "System")],
            createdAt: now,
            updatedAt: now,
            walkIn: input.walkIn
          };
          set((s) => ({
            visits: { ...s.visits, [v.id]: v },
            seededTourIds: input.tourId ? Array.from(/* @__PURE__ */ new Set([...s.seededTourIds, input.tourId])) : s.seededTourIds
          }));
          return v;
        }, "seed"),
        patch: /* @__PURE__ */ __name2((id, p, note) => mut(id, (v) => note ? log({ ...v, ...p }, entry(note.kind, note.text, note.by)) : { ...v, ...p }), "patch"),
        setStage: /* @__PURE__ */ __name2((id, stage, by) => mut(id, (v) => advance(v, stage, by)), "setStage"),
        setConfirmation: /* @__PURE__ */ __name2((id, status, by = "Visit Controller") => mut(id, (v) => {
          let next = log({ ...v, confirmation: status }, entry("confirm", `Customer confirmation: ${status}`, by));
          if (status === "confirmed" && v.stage === "scheduled") next = advance(next, "customer-confirmed", by);
          if (status === "cancelled") next = advance(next, "lost", by);
          return next;
        }), "setConfirmation"),
        setMovement: /* @__PURE__ */ __name2((id, m, etaAt, by = "Visit Controller") => mut(id, (v) => {
          let next = log(
            { ...v, movement: m, etaAt: etaAt ?? v.etaAt },
            entry("movement", `Movement: ${m.replace(/-/g, " ")}${etaAt ? ` · ETA ${new Date(etaAt).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}` : ""}`, by)
          );
          if (m === "en-route") next = advance(next, "en-route", by);
          return next;
        }), "setMovement"),
        toggleInventory: /* @__PURE__ */ __name2((id, key, by = "Supply Controller") => mut(id, (v) => {
          const inv = { ...v.inventory, [key]: !v.inventory[key] };
          const done = inventoryConfirmed(inv);
          if (done) {
            inv.confirmedAt = Date.now();
            inv.confirmedBy = by;
          }
          let next = log({ ...v, inventory: inv }, entry("inventory", `Inventory item ${String(key)} → ${inv[key] ? "yes" : "no"}`, by));
          if (done && (v.stage === "scheduled" || v.stage === "customer-confirmed")) {
            next = advance(next, "inventory-confirmed", by);
          }
          return next;
        }), "toggleInventory"),
        confirmAllInventory: /* @__PURE__ */ __name2((id, by = "Supply Controller") => mut(id, (v) => {
          const inv = {
            roomVacant: true,
            bedAvailable: true,
            roomCleaned: true,
            managerInformed: true,
            priceConfirmed: true,
            discountAuthorityClear: true,
            backupRoomReady: true,
            confirmedAt: Date.now(),
            confirmedBy: by
          };
          let next = log({ ...v, inventory: inv, bedAvailable: true }, entry("inventory", "Full inventory confirmed (T−120)", by));
          if (v.stage === "scheduled" || v.stage === "customer-confirmed") next = advance(next, "inventory-confirmed", by);
          return next;
        }), "confirmAllInventory"),
        toggleReadiness: /* @__PURE__ */ __name2((id, key, by = "Tour Coordinator") => mut(id, (v) => {
          const r = { ...v.readiness, [key]: !v.readiness[key] };
          r.confirmedAt = Date.now();
          return log({ ...v, readiness: r }, entry("readiness", `Readiness ${String(key)} → ${r[key] ? "yes" : "no"}`, by));
        }), "toggleReadiness"),
        confirmCoordinator: /* @__PURE__ */ __name2((id, by = "Visit Controller") => mut(id, (v) => log({ ...v, coordinatorConfirmed: true }, entry("readiness", `${v.coordinator} confirmed availability`, by))), "confirmCoordinator"),
        reassignCoordinator: /* @__PURE__ */ __name2((id, coordinatorId, coordinator, by = "Visit Controller") => mut(
          id,
          (v) => log(
            { ...v, coordinatorId, coordinator, coordinatorConfirmed: false },
            entry("escalation", `Coordinator reassigned: ${v.coordinator} → ${coordinator}`, by)
          )
        ), "reassignCoordinator"),
        shareLocation: /* @__PURE__ */ __name2((id, by = "Visit Controller") => mut(
          id,
          (v) => log({ ...v, locationShared: true }, entry("comms", "Live location, maps link, landmark + coordinator number shared", by))
        ), "shareLocation"),
        markArrived: /* @__PURE__ */ __name2((id, capture, by = "Tour Coordinator") => mut(id, (v) => {
          const arrival = { ...capture, arrivedAt: Date.now() };
          const next = log({ ...v, arrival }, entry("arrival", `Customer arrived · ${capture.peopleCount} people · ${capture.accompaniedBy}`, by));
          return advance(next, "arrived", by);
        }), "markArrived"),
        startTour: /* @__PURE__ */ __name2((id, by = "Tour Coordinator") => mut(id, (v) => {
          const next = log({ ...v, tourStartedAt: Date.now() }, entry("stage", "Tour started — live timer running", by));
          return advance(next, "tour-live", by);
        }), "startTour"),
        addReaction: /* @__PURE__ */ __name2((id, tag, note, by = "Tour Coordinator") => mut(
          id,
          (v) => log(
            { ...v, reactions: [{ id: uid("rx"), ts: Date.now(), tag, note, by }, ...v.reactions] },
            entry("reaction", `${REACTION_META[tag].label}${note ? ` — ${note}` : ""}`, by)
          )
        ), "addReaction"),
        captureFeedback: /* @__PURE__ */ __name2((id, f, by = "Tour Coordinator") => mut(id, (v) => {
          const next = log(
            { ...v, feedback: { ...f, capturedAt: Date.now() }, completedAt: Date.now() },
            entry("feedback", `Feedback captured · rating ${f.rating}/10 · objection ${f.objection ?? "none"}`, by)
          );
          return advance(next, "feedback", by);
        }), "captureFeedback"),
        sendQuotation: /* @__PURE__ */ __name2((id, q, by = "Lead Owner") => mut(id, (v) => {
          const quotation = { ...q, id: uid("qt"), createdAt: Date.now(), sentAt: Date.now() };
          const next = log({ ...v, quotation }, entry("quotation", `Quotation sent · rent ₹${q.rent} · token ₹${q.tokenAmount}`, by));
          return advance(next, "quotation-sent", by);
        }), "sendQuotation"),
        acceptQuotation: /* @__PURE__ */ __name2((id, by = "Lead Owner") => mut(id, (v) => {
          if (!v.quotation) return v;
          const next = log(
            { ...v, quotation: { ...v.quotation, acceptedAt: Date.now() }, token: { amount: v.quotation.tokenAmount, promisedAt: Date.now() } },
            entry("token", "Customer willing to book — token promised", by)
          );
          return advance(next, "token-pending", by);
        }), "acceptQuotation"),
        startNegotiation: /* @__PURE__ */ __name2((id, topics, owner, discount, note) => mut(id, (v) => {
          const next = log(
            { ...v, negotiation: { topics, owner, offeredDiscount: discount, note, startedAt: Date.now() } },
            entry("negotiation", `Negotiation opened by ${owner} · ${topics.join(", ")} · discount ₹${discount}`, owner)
          );
          return advance(next, "negotiation", owner);
        }), "startNegotiation"),
        promiseToken: /* @__PURE__ */ __name2((id, amount, by = "Lead Owner") => mut(id, (v) => {
          const next = log({ ...v, token: { ...v.token ?? {}, amount, promisedAt: Date.now() } }, entry("token", `Token ₹${amount} promised`, by));
          return advance(next, "token-pending", by);
        }), "promiseToken"),
        collectToken: /* @__PURE__ */ __name2((id, reference, by = "Lead Owner") => mut(id, (v) => {
          const next = log(
            { ...v, token: { amount: v.token?.amount ?? v.quotation?.tokenAmount ?? 0, promisedAt: v.token?.promisedAt, paidAt: Date.now(), reference } },
            entry("token", `Token received · ref ${reference}`, by)
          );
          return advance({ ...next, outcome: "booked" }, "booked", by);
        }), "collectToken"),
        setOutcome: /* @__PURE__ */ __name2((id, outcome, opts) => mut(id, (v) => {
          const by = opts?.by ?? "Visit Controller";
          let stage = v.stage;
          if (outcome === "booked") stage = "booked";
          else if (outcome === "lost" || outcome === "not-looking" || outcome === "no-show") stage = "lost";
          else if (outcome === "alternative-scheduled") stage = "alternative";
          else if (outcome === "token-pending") stage = "token-pending";
          else if (outcome === "negotiation-active") stage = "negotiation";
          const next = log(
            { ...v, outcome, lostReason: opts?.lostReason, lostNote: opts?.note },
            entry("outcome", `Outcome: ${outcome}${opts?.lostReason ? ` · ${opts.lostReason}` : ""}${opts?.note ? ` — ${opts.note}` : ""}`, by)
          );
          return advance(next, stage, by);
        }), "setOutcome"),
        setNextAction: /* @__PURE__ */ __name2((id, action, by = "Visit Controller") => mut(
          id,
          (v) => log({ ...v, nextAction: action }, entry("note", `Next action: ${action.text} · ${action.owner} · due ${new Date(action.dueAt).toLocaleString("en-IN")}`, by))
        ), "setNextAction"),
        setBedAvailable: /* @__PURE__ */ __name2((id, available, by = "Supply Controller") => mut(
          id,
          (v) => log(
            { ...v, bedAvailable: available, inventory: { ...v.inventory, bedAvailable: available } },
            entry("inventory", available ? "Bed re-confirmed available" : "Selected bed became UNAVAILABLE", by)
          )
        ), "setBedAvailable"),
        setAlternateProperty: /* @__PURE__ */ __name2((id, name, by = "Visit Controller") => mut(id, (v) => log({ ...v, alternateProperty: name }, entry("note", `Alternate option added: ${name}`, by))), "setAlternateProperty"),
        logComms: /* @__PURE__ */ __name2((id, text, by = "Visit Controller") => mut(id, (v) => log(v, entry("comms", text, by))), "logComms"),
        addNote: /* @__PURE__ */ __name2((id, text, by = "Visit Controller") => mut(id, (v) => log(v, entry("note", text, by))), "addNote"),
        reschedule: /* @__PURE__ */ __name2((id, at, reason, by = "Visit Controller") => mut(id, (v) => {
          const next = log(
            { ...v, scheduledAt: at, confirmation: "pending", movement: "unknown", outcome: "rescheduled" },
            entry("stage", `Rescheduled to ${new Date(at).toLocaleString("en-IN")} — ${reason}`, by)
          );
          return advance(next, "scheduled", by);
        }), "reschedule"),
        cancelVisit: /* @__PURE__ */ __name2((id, reason, by = "Visit Controller") => mut(id, (v) => {
          const next = log(
            { ...v, confirmation: "cancelled", outcome: "lost", lostNote: reason },
            entry("outcome", `Visit cancelled — ${reason}`, by)
          );
          return advance(next, "lost", by);
        }), "cancelVisit"),
        pushAlert: /* @__PURE__ */ __name2((a) => set((s) => {
          if (s.alerts.some((x) => x.visitId === a.visitId && x.kind === a.kind && !x.resolvedAt)) return s;
          return { alerts: [{ id: uid("al"), ts: Date.now(), ...a }, ...s.alerts].slice(0, 250) };
        }), "pushAlert"),
        resolveAlert: /* @__PURE__ */ __name2((id) => set((s) => ({ alerts: s.alerts.map((a) => a.id === id ? { ...a, resolvedAt: Date.now() } : a) })), "resolveAlert"),
        markAlertsSeen: /* @__PURE__ */ __name2(() => set({ alertsSeenAt: Date.now() }), "markAlertsSeen"),
        removeVisit: /* @__PURE__ */ __name2((id) => set((s) => {
          const next = { ...s.visits };
          delete next[id];
          return { visits: next };
        }), "removeVisit"),
        resetAll: /* @__PURE__ */ __name2(() => set({ visits: {}, alerts: [], alertsSeenAt: 0, seededTourIds: [] }), "resetAll")
      };
    },
    { name: "gharpayy-live-visit-war-room-v1" }
  )
);
const TIER_TONE = {
  "close-now": "border-success/50 bg-success/5",
  "at-risk": "border-destructive/50 bg-destructive/5",
  "follow-up": "border-warning/50 bg-warning/5",
  normal: "border-border bg-card",
  done: "border-border bg-muted/30"
};
const TIER_CHIP = {
  "close-now": "bg-success/15 text-success border-success/40",
  "at-risk": "bg-destructive/15 text-destructive border-destructive/40",
  "follow-up": "bg-warning/15 text-warning-foreground border-warning/40",
  normal: "bg-muted text-muted-foreground border-border",
  done: "bg-muted text-muted-foreground border-border"
};
function probTone(p) {
  if (p >= 70) return "text-success";
  if (p >= 40) return "text-warning-foreground";
  return "text-destructive";
}
__name(probTone, "probTone");
__name2(probTone, "probTone");
const LiveVisitCard = reactExports.memo(/* @__PURE__ */ __name2(/* @__PURE__ */ __name(function LiveVisitCard2({
  visit: v,
  now,
  onOpen,
  compact
}) {
  const { logComms, shareLocation, setMovement, startTour } = useLiveVisits();
  const prio = priorityFor(v, now);
  const prob = bookingProbability(v);
  const objection = primaryObjection(v);
  const timerLabel = (() => {
    if (v.stage === "tour-live" && v.tourStartedAt) return `Tour live ${fmtDur(now - v.tourStartedAt)}`;
    if (v.stage === "arrived" && v.arrival) return `Arrived ${Math.max(0, Math.round((now - v.arrival.arrivedAt) / 6e4))} min ago`;
    if (v.stage === "booked" || v.stage === "lost") return STAGE_LABEL[v.stage];
    if (v.scheduledAt > now || !v.arrival) return `Visit ${fmtCountdown(v.scheduledAt - now)}`;
    return `${STAGE_LABEL[v.stage]} · ${fmtDur(now - v.stageSince)}`;
  })();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "rounded-xl border p-3 text-left transition-colors hover:bg-accent/5 cursor-pointer space-y-2",
        TIER_TONE[prio.tier]
      ),
      onClick: /* @__PURE__ */ __name2(() => onOpen(v.id), "onClick"),
      role: "button",
      tabIndex: 0,
      onKeyDown: /* @__PURE__ */ __name2((e) => {
        if (e.key === "Enter") onOpen(v.id);
      }, "onKeyDown"),
      "data-tsd-source": "/src/components/visits/live/LiveVisitCard.tsx:66:5",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", "data-tsd-source": "/src/components/visits/live/LiveVisitCard.tsx:76:7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", "data-tsd-source": "/src/components/visits/live/LiveVisitCard.tsx:77:9", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", "data-tsd-source": "/src/components/visits/live/LiveVisitCard.tsx:78:11", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-sm truncate", "data-tsd-source": "/src/components/visits/live/LiveVisitCard.tsx:79:13", children: v.customer }),
              v.walkIn && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[9px] px-1", "data-tsd-source": "/src/components/visits/live/LiveVisitCard.tsx:80:26", children: "WALK-IN" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground truncate", "data-tsd-source": "/src/components/visits/live/LiveVisitCard.tsx:82:11", children: [
              v.propertyName,
              " · ",
              v.roomNo || "room TBD",
              v.bedNo ? `/${v.bedNo}` : ""
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: cn("text-[9px] shrink-0", TIER_CHIP[prio.tier]), "data-tsd-source": "/src/components/visits/live/LiveVisitCard.tsx:86:9", children: TIER_LABEL[prio.tier].split("·").pop()?.trim() })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[11px]", "data-tsd-source": "/src/components/visits/live/LiveVisitCard.tsx:91:7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-muted-foreground", "data-tsd-source": "/src/components/visits/live/LiveVisitCard.tsx:92:9", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Timer, { className: "h-3 w-3", "data-tsd-source": "/src/components/visits/live/LiveVisitCard.tsx:93:11" }),
            " ",
            timerLabel
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: cn("ml-auto font-semibold tabular-nums", probTone(prob)), "data-tsd-source": "/src/components/visits/live/LiveVisitCard.tsx:95:9", children: [
            prob,
            "%"
          ] })
        ] }),
        !compact && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-x-2 gap-y-0.5 text-[10.5px] text-muted-foreground", "data-tsd-source": "/src/components/visits/live/LiveVisitCard.tsx:99:9", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 truncate", "data-tsd-source": "/src/components/visits/live/LiveVisitCard.tsx:100:11", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-3 w-3", "data-tsd-source": "/src/components/visits/live/LiveVisitCard.tsx:100:69" }),
            v.leadOwner
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 truncate", "data-tsd-source": "/src/components/visits/live/LiveVisitCard.tsx:101:11", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-3 w-3", "data-tsd-source": "/src/components/visits/live/LiveVisitCard.tsx:101:69" }),
            v.coordinator
          ] }),
          v.feedback && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "truncate", "data-tsd-source": "/src/components/visits/live/LiveVisitCard.tsx:102:26", children: [
            "Rating ",
            v.feedback.rating,
            "/10"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "truncate", "data-tsd-source": "/src/components/visits/live/LiveVisitCard.tsx:103:11", children: [
            inr(v.rent),
            " · budget ",
            inr(v.budget)
          ] })
        ] }),
        objection && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-[10.5px] text-warning-foreground", "data-tsd-source": "/src/components/visits/live/LiveVisitCard.tsx:108:9", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-3 w-3", "data-tsd-source": "/src/components/visits/live/LiveVisitCard.tsx:109:11" }),
          "Objection: ",
          OBJECTION_LABEL[objection],
          objection === "price" && v.rent > v.budget && ` · gap ${inr(v.rent - v.budget)}`
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10.5px] text-muted-foreground line-clamp-1", "data-tsd-source": "/src/components/visits/live/LiveVisitCard.tsx:115:7", children: v.nextAction ? `Next: ${v.nextAction.text} (${v.nextAction.owner})` : prio.reasons[0] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1 pt-0.5", onClick: /* @__PURE__ */ __name2((e) => e.stopPropagation(), "onClick"), "data-tsd-source": "/src/components/visits/live/LiveVisitCard.tsx:119:7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: "h-6 px-2 text-[10px]", asChild: true, "data-tsd-source": "/src/components/visits/live/LiveVisitCard.tsx:120:9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${v.phone}`, onClick: /* @__PURE__ */ __name2(() => logComms(v.id, `Called ${v.customer}`), "onClick"), "data-tsd-source": "/src/components/visits/live/LiveVisitCard.tsx:121:11", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3 w-3 mr-1", "data-tsd-source": "/src/components/visits/live/LiveVisitCard.tsx:122:13" }),
            "Call"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: "h-6 px-2 text-[10px]", asChild: true, "data-tsd-source": "/src/components/visits/live/LiveVisitCard.tsx:125:9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: `https://wa.me/${v.phone.replace(/\D/g, "")}`,
              target: "_blank",
              rel: "noreferrer",
              onClick: /* @__PURE__ */ __name2(() => logComms(v.id, `WhatsApp sent to ${v.customer}`), "onClick"),
              "data-tsd-source": "/src/components/visits/live/LiveVisitCard.tsx:126:11",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-3 w-3 mr-1", "data-tsd-source": "/src/components/visits/live/LiveVisitCard.tsx:132:13" }),
                "WA"
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "h-6 px-2 text-[10px]", onClick: /* @__PURE__ */ __name2(() => shareLocation(v.id), "onClick"), "data-tsd-source": "/src/components/visits/live/LiveVisitCard.tsx:135:9", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3 mr-1", "data-tsd-source": "/src/components/visits/live/LiveVisitCard.tsx:136:11" }),
            "Location"
          ] }),
          v.stage === "scheduled" || v.stage === "customer-confirmed" || v.stage === "inventory-confirmed" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "h-6 px-2 text-[10px]", onClick: /* @__PURE__ */ __name2(() => setMovement(v.id, "en-route"), "onClick"), "data-tsd-source": "/src/components/visits/live/LiveVisitCard.tsx:139:11", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3 mr-1", "data-tsd-source": "/src/components/visits/live/LiveVisitCard.tsx:140:13" }),
            "En route"
          ] }) : null,
          v.stage === "arrived" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: "h-6 px-2 text-[10px]", onClick: /* @__PURE__ */ __name2(() => startTour(v.id), "onClick"), "data-tsd-source": "/src/components/visits/live/LiveVisitCard.tsx:144:11", children: "Start tour" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "secondary", className: "h-6 px-2 text-[10px]", onClick: /* @__PURE__ */ __name2(() => onOpen(v.id), "onClick"), "data-tsd-source": "/src/components/visits/live/LiveVisitCard.tsx:148:9", children: "Open" })
        ] })
      ]
    }
  );
}, "LiveVisitCard2"), "LiveVisitCard2"));
const time = /* @__PURE__ */ __name2((ts) => new Date(ts).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }), "time");
const FLOW_STEPS = [
  {
    id: "confirm-customer",
    title: "Confirm the customer",
    why: "No visit is real until the customer says yes on call/WhatsApp.",
    owner: "Lead Owner",
    slaMin: -1440,
    done: /* @__PURE__ */ __name2((v) => v.confirmation === "confirmed", "done"),
    cxLabel: "Send confirmation",
    cx: /* @__PURE__ */ __name2((v) => `Hi ${v.customer}, your Gharpayy visit is confirmed for ${time(v.scheduledAt)} at ${v.propertyName}, ${v.propertyArea}.
Room ${v.roomNo || "TBD"}${v.bedNo ? ` / Bed ${v.bedNo}` : ""} · Rent ${inr(v.rent)}
Your host will be ${v.coordinator}. Reply YES to lock this slot.`, "cx")
  },
  {
    id: "inventory",
    title: "T−120 inventory confirmation",
    why: "Never show a bed you cannot sell. Room, price and discount authority must be locked.",
    owner: "Supply Controller",
    slaMin: -120,
    done: /* @__PURE__ */ __name2((v) => inventoryConfirmed(v.inventory), "done")
  },
  {
    id: "coordinator",
    title: "Lock the tour coordinator",
    why: "A visit without a confirmed human at the property is a cancelled visit.",
    owner: "Visit Controller",
    slaMin: -90,
    done: /* @__PURE__ */ __name2((v) => v.coordinatorConfirmed, "done"),
    cxLabel: "Share host details",
    cx: /* @__PURE__ */ __name2((v) => `${v.customer}, ${v.coordinator} will receive you today at ${v.propertyName} at ${time(v.scheduledAt)}. Please save this number and call directly on arrival.`, "cx")
  },
  {
    id: "location",
    title: "Send location pack",
    why: "Maps link + landmark + coordinator number removes 80% of no-shows.",
    owner: "Visit Controller",
    slaMin: -60,
    done: /* @__PURE__ */ __name2((v) => !!v.locationShared, "done"),
    cxLabel: "Send location pack",
    cx: /* @__PURE__ */ __name2((v) => `Location for your ${time(v.scheduledAt)} visit:
${v.propertyName}, ${v.propertyArea}
Maps: https://maps.google.com/?q=${encodeURIComponent(`${v.propertyName} ${v.propertyArea}`)}
Host: ${v.coordinator}. See you soon!`, "cx")
  },
  {
    id: "movement",
    title: "T−30 movement check",
    why: "Know if they left. A silent customer at T−30 is a lost customer.",
    owner: "Lead Owner",
    slaMin: -30,
    done: /* @__PURE__ */ __name2((v) => ["en-route", "leaving-shortly"].includes(v.movement) || !!v.arrival, "done"),
    cxLabel: "Nudge for ETA",
    cx: /* @__PURE__ */ __name2((v) => `${v.customer}, have you started for ${v.propertyName}? Share your ETA so ${v.coordinator} keeps the room ready.`, "cx")
  },
  {
    id: "arrival",
    title: "Mark arrival",
    why: "Arrival starts the conversion clock and tells the admin the visit is real.",
    owner: "Tour Coordinator",
    slaMin: 0,
    done: /* @__PURE__ */ __name2((v) => !!v.arrival, "done")
  },
  {
    id: "start-tour",
    title: "Start the tour timer",
    why: "Live timer broadcasts to admin + owner that a tour is happening right now.",
    owner: "Tour Coordinator",
    slaMin: 5,
    done: /* @__PURE__ */ __name2((v) => !!v.tourStartedAt, "done")
  },
  {
    id: "reaction",
    title: "Log live reactions",
    why: "Reactions drive the intervention script while the customer is still standing there.",
    owner: "Tour Coordinator",
    slaMin: 20,
    done: /* @__PURE__ */ __name2((v) => v.reactions.length > 0, "done")
  },
  {
    id: "feedback",
    title: "Capture feedback + objection",
    why: "Tour ends only when rating and objection are documented.",
    owner: "Tour Coordinator",
    slaMin: 35,
    done: /* @__PURE__ */ __name2((v) => !!v.feedback, "done"),
    cxLabel: "Thank-you + intent ask",
    cx: /* @__PURE__ */ __name2((v) => `Thanks for visiting ${v.propertyName}, ${v.customer}! How did you like the room? If it works, I'll send you the quotation right away and hold the bed for you.`, "cx")
  },
  {
    id: "quotation",
    title: "Send quotation",
    why: "Every completed tour gets a quotation within 30 minutes. No exceptions.",
    owner: "Lead Owner",
    slaMin: 45,
    done: /* @__PURE__ */ __name2((v) => !!v.quotation, "done"),
    cxLabel: "Send quotation",
    cx: /* @__PURE__ */ __name2((v) => {
      const q = v.quotation;
      if (!q) return "";
      return `Quotation — ${v.propertyName} (Room ${v.roomNo || "TBD"}${v.bedNo ? `/${v.bedNo}` : ""})
Rent: ${inr(q.rent)}/mo
Deposit: ${inr(q.deposit)}
Maintenance: ${inr(q.maintenance)} · Gharpayy fee: ${inr(q.gharpayyFee)}
Token to block the bed: ${inr(q.tokenAmount)}
Move-in: ${q.checkInDate || v.checkInDate}
Valid till ${new Date(q.expiresAt).toLocaleString("en-IN")}. Shall I block it?`;
    }, "cx")
  },
  {
    id: "token",
    title: "Close the token",
    why: "Bed is blocked only on token. Promised-but-unpaid tokens expire fast.",
    owner: "Lead Owner",
    slaMin: 90,
    done: /* @__PURE__ */ __name2((v) => !!v.token?.paidAt, "done"),
    cxLabel: "Send payment ask",
    cx: /* @__PURE__ */ __name2((v) => `${v.customer}, to block Room ${v.roomNo || ""}${v.bedNo ? `/${v.bedNo}` : ""} at ${v.propertyName} please pay the token of ${inr(v.token?.amount ?? v.quotation?.tokenAmount ?? 5e3)}. Once paid, the bed is locked in your name and no one else can take it.`, "cx")
  },
  {
    id: "outcome",
    title: "Document outcome + next action",
    why: "No visit closes without an outcome and a dated next action.",
    owner: "Visit Controller",
    slaMin: 120,
    done: /* @__PURE__ */ __name2((v) => !!v.outcome && !!v.nextAction, "done")
  }
];
function flowFor(v) {
  let currentFound = false;
  const steps = FLOW_STEPS.map((s) => {
    const isDone = s.done(v);
    let status = "pending";
    if (isDone) status = "done";
    else if (!currentFound) {
      status = "current";
      currentFound = true;
    }
    return { ...s, status, dueAt: v.scheduledAt + s.slaMin * 6e4 };
  });
  const doneCount = steps.filter((s) => s.status === "done").length;
  const cur = steps.find((s) => s.status === "current") ?? null;
  return {
    steps,
    current: cur,
    doneCount,
    total: steps.length,
    progress: Math.round(doneCount / steps.length * 100)
  };
}
__name(flowFor, "flowFor");
__name2(flowFor, "flowFor");
function isFlowClosed(v) {
  return v.stage === "booked" || v.stage === "lost";
}
__name(isFlowClosed, "isFlowClosed");
__name2(isFlowClosed, "isFlowClosed");
const REACTION_TAGS$1 = Object.keys(REACTION_META);
function NextStepFlow({
  visit: v,
  now,
  alternatives
}) {
  const store = useLiveVisits();
  const flow = reactExports.useMemo(() => flowFor(v), [v]);
  const closed = isFlowClosed(v);
  const step = flow.current;
  const prevStep = reactExports.useRef(step?.id ?? null);
  const [cxDraft, setCxDraft] = reactExports.useState("");
  reactExports.useEffect(() => {
    const id = step?.id ?? null;
    if (prevStep.current && id !== prevStep.current) {
      const finished = flow.steps.find((s) => s.id === prevStep.current);
      if (finished?.status === "done") {
        toast.success(`${finished.title} done`, { description: step ? `Next: ${step.title}` : "Flow complete" });
        if (finished.cx) setCxDraft(finished.cx(v));
      }
    }
    prevStep.current = id;
  }, [step?.id, flow.steps, v]);
  const message = cxDraft || (step?.cx ? step.cx(v) : "");
  const sendCx = /* @__PURE__ */ __name2(() => {
    if (!message.trim()) return;
    store.logComms(v.id, `WhatsApp sent to customer: ${message.slice(0, 90)}…`);
    window.open(`https://wa.me/${v.phone.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`, "_blank");
    toast.success("Message opened in WhatsApp");
  }, "sendCx");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:73:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border bg-card p-3", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:75:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:76:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkle, { className: "h-3.5 w-3.5 text-primary", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:77:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:78:11", children: "Guided flow" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-[10px]", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:79:11", children: [
          flow.doneCount,
          "/",
          flow.total,
          " done"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-[10px] ml-auto", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:80:11", children: [
          bookingProbability(v),
          "% likely"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 rounded-full bg-muted overflow-hidden", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:82:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-primary transition-all", style: { width: `${flow.progress}%` }, "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:83:11" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 grid gap-1", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:85:9", children: flow.steps.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: cn(
            "flex items-center gap-2 text-[11px] rounded-md px-2 py-1",
            s.status === "current" && "bg-primary/10 font-semibold",
            s.status === "pending" && "opacity-55"
          ),
          "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:87:13",
          children: [
            s.status === "done" ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5 text-success shrink-0", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:96:19" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Circle, { className: cn("h-3.5 w-3.5 shrink-0", s.status === "current" && "text-primary"), "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:97:19" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 truncate", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:98:15", children: s.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-muted-foreground", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:99:15", children: s.owner }),
            s.status !== "done" && now > s.dueAt && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "destructive", className: "text-[9px] h-4 px-1", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:101:17", children: "late" })
          ]
        },
        s.id
      )) })
    ] }),
    v.tourStartedAt && !v.completedAt && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-success/40 bg-success/10 p-3 flex items-center gap-2", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:110:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Radio, { className: "h-4 w-4 text-success animate-pulse", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:111:11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:112:11", children: "Visit happening now — admin is watching live" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto font-mono text-sm tabular-nums", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:113:11", children: fmtDur(now - v.tourStartedAt) })
    ] }),
    closed || !step ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border bg-card p-4 text-center space-y-1", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:119:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-6 w-6 text-success mx-auto", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:120:11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:121:11", children: "Flow complete" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:122:11", children: [
        "Outcome: ",
        v.outcome ? OUTCOME_LABEL[v.outcome] : "—",
        v.nextAction ? ` · Next: ${v.nextAction.text}` : ""
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border-2 border-primary/40 bg-primary/5 p-4 space-y-3", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:128:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:129:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-7 w-7 rounded-full bg-primary text-primary-foreground grid place-items-center text-xs font-bold shrink-0", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:130:13", children: flow.doneCount + 1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:133:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:134:15", children: step.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:135:15", children: step.why }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] font-mono text-muted-foreground mt-0.5", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:136:15", children: [
            "Owner: ",
            step.owner,
            " · Due ",
            new Date(step.dueAt).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Timer, { className: cn("h-4 w-4 ml-auto shrink-0", now > step.dueAt ? "text-destructive" : "text-muted-foreground"), "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:140:13" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StepAction, { visit: v, stepId: step.id, alternatives, "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:143:11" })
    ] }),
    message && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border bg-card p-3 space-y-2", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:149:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:150:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-3.5 w-3.5 text-primary", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:151:13" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:152:13", children: "Message to send the customer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            variant: "ghost",
            className: "h-6 px-2 text-[10px] ml-auto",
            onClick: /* @__PURE__ */ __name2(() => {
              navigator.clipboard?.writeText(message);
              toast.success("Copied");
            }, "onClick"),
            "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:153:13",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-3 w-3 mr-1", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:155:15" }),
              "Copy"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { value: message, onChange: /* @__PURE__ */ __name2((e) => setCxDraft(e.target.value), "onChange"), className: "text-xs min-h-24", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:158:11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "h-8 text-xs w-full", onClick: sendCx, "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:159:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-3.5 w-3.5 mr-1", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:160:13" }),
        "Send on WhatsApp ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5 ml-1", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:160:76" })
      ] })
    ] })
  ] });
}
__name(NextStepFlow, "NextStepFlow");
__name2(NextStepFlow, "NextStepFlow");
function StepAction({
  visit: v,
  stepId,
  alternatives
}) {
  const store = useLiveVisits();
  const [people, setPeople] = reactExports.useState(1);
  const [accompanied, setAccompanied] = reactExports.useState("alone");
  const [rating, setRating] = reactExports.useState(7);
  const [objection, setObjection] = reactExports.useState("none");
  const [liked, setLiked] = reactExports.useState("");
  const [ref, setRef] = reactExports.useState("");
  const [outcome, setOutcome] = reactExports.useState("token-pending");
  const [action, setAction] = reactExports.useState("Follow up call");
  const intervention = buildIntervention(v, alternatives);
  const btn = "h-8 text-xs";
  switch (stepId) {
    case "confirm-customer":
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:195:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: btn, onClick: /* @__PURE__ */ __name2(() => store.setConfirmation(v.id, "confirmed"), "onClick"), "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:196:11", children: "Customer confirmed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: btn, onClick: /* @__PURE__ */ __name2(() => store.setConfirmation(v.id, "not-responding"), "onClick"), "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:197:11", children: "Not responding" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: btn, onClick: /* @__PURE__ */ __name2(() => store.setConfirmation(v.id, "reschedule-requested"), "onClick"), "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:198:11", children: "Wants reschedule" })
      ] });
    case "inventory":
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:204:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-1", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:205:11", children: INVENTORY_CHECK_ITEMS.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 text-[11px]", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:207:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { checked: !!v.inventory[i.key], onCheckedChange: /* @__PURE__ */ __name2(() => store.toggleInventory(v.id, i.key), "onCheckedChange"), "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:208:17" }),
          i.label
        ] }, String(i.key))) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: btn, onClick: /* @__PURE__ */ __name2(() => store.confirmAllInventory(v.id), "onClick"), "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:213:11", children: "Confirm all — bed is sellable" })
      ] });
    case "coordinator":
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: btn, onClick: /* @__PURE__ */ __name2(() => store.confirmCoordinator(v.id), "onClick"), "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:218:14", children: [
        v.coordinator,
        " confirmed for this visit"
      ] });
    case "location":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: btn, onClick: /* @__PURE__ */ __name2(() => store.shareLocation(v.id), "onClick"), "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:221:14", children: "Mark location pack shared" });
    case "movement":
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:225:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: btn, onClick: /* @__PURE__ */ __name2(() => store.setMovement(v.id, "en-route", Date.now() + 25 * 6e4), "onClick"), "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:226:11", children: "Customer en-route" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: btn, onClick: /* @__PURE__ */ __name2(() => store.setMovement(v.id, "leaving-shortly"), "onClick"), "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:227:11", children: "Leaving shortly" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: btn, onClick: /* @__PURE__ */ __name2(() => store.setMovement(v.id, "running-late"), "onClick"), "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:228:11", children: "Running late" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "destructive", className: btn, onClick: /* @__PURE__ */ __name2(() => store.setMovement(v.id, "unable-to-come"), "onClick"), "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:229:11", children: "Cannot come" })
      ] });
    case "arrival":
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:235:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:236:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", min: 1, value: people, onChange: /* @__PURE__ */ __name2((e) => setPeople(Number(e.target.value)), "onChange"), className: "h-8 text-xs", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:237:13" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: accompanied, onValueChange: /* @__PURE__ */ __name2((x) => setAccompanied(x), "onValueChange"), "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:238:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 text-xs", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:239:15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:239:54" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:240:15", children: ["alone", "family", "friend", "partner"].map((x) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: x, className: "text-xs", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:241:70", children: x }, x)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            className: btn,
            onClick: /* @__PURE__ */ __name2(() => store.markArrived(v.id, {
              peopleCount: people,
              accompaniedBy: accompanied,
              entrySuccessful: true,
              roomReady: true,
              coordinatorPresent: true
            }), "onClick"),
            "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:245:11",
            children: "Customer has arrived"
          }
        )
      ] });
    case "start-tour":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: btn, onClick: /* @__PURE__ */ __name2(() => {
        store.startTour(v.id);
        glueBus.publish({ type: "team.visit.started", tourId: v.tourId ?? v.id, leadId: v.leadId ?? v.id });
        toast.success("Tour timer started — admin notified");
      }, "onClick"), "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:257:9", children: "Start tour timer (notifies admin)" });
    case "reaction":
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:268:9", children: [
        intervention && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-background p-2 text-[11px]", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:270:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:271:15", children: intervention.headline }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:272:15", children: intervention.recommendation })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:275:11", children: REACTION_TAGS$1.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: "h-7 text-[10px]", onClick: /* @__PURE__ */ __name2(() => store.addReaction(v.id, t), "onClick"), "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:277:15", children: REACTION_META[t].label }, t)) })
      ] });
    case "feedback":
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:287:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] flex items-center gap-2", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:288:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-16", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:289:13", children: "Rating" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Slider, { value: [rating], min: 0, max: 10, step: 1, onValueChange: /* @__PURE__ */ __name2(([x]) => setRating(x), "onValueChange"), className: "flex-1", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:290:13" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono w-8 text-right", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:291:13", children: [
            rating,
            "/10"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: objection, onValueChange: /* @__PURE__ */ __name2((x) => setObjection(x), "onValueChange"), "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:293:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 text-xs", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:294:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Objection", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:294:52" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:295:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "none", className: "text-xs", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:296:15", children: "No objection" }),
            Object.keys(OBJECTION_LABEL).map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: o, className: "text-xs", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:298:17", children: OBJECTION_LABEL[o] }, o))
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "What they liked", value: liked, onChange: /* @__PURE__ */ __name2((e) => setLiked(e.target.value), "onChange"), className: "h-8 text-xs", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:302:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: btn, onClick: /* @__PURE__ */ __name2(() => {
          store.captureFeedback(v.id, {
            attended: true,
            favouriteProperty: v.propertyName,
            favouriteRoom: v.roomNo,
            rating,
            liked,
            disliked: "",
            objection: objection === "none" ? null : objection,
            objectionNote: "",
            decisionMaker: v.decisionMaker,
            bookable: rating >= 6,
            blocker: objection === "none" ? "" : OBJECTION_LABEL[objection],
            probability: rating * 10
          });
          glueBus.publish({ type: "team.visit.ended", tourId: v.tourId ?? v.id, leadId: v.leadId ?? v.id });
        }, "onClick"), "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:303:11", children: "Close tour with feedback" })
      ] });
    case "quotation":
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: btn, onClick: /* @__PURE__ */ __name2(() => {
        store.sendQuotation(v.id, draftQuotation(v));
        toast.success("Quotation generated");
      }, "onClick"), "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:320:9", children: [
        "Generate + send quotation (",
        inr(v.rent),
        ")"
      ] });
    case "token":
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:327:9", children: [
        !v.token?.promisedAt && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:329:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: btn, onClick: /* @__PURE__ */ __name2(() => store.acceptQuotation(v.id), "onClick"), "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:330:15", children: "Customer willing to book" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: btn, onClick: /* @__PURE__ */ __name2(() => store.startNegotiation(v.id, ["price"], v.leadOwner, 0, "Negotiation opened from flow"), "onClick"), "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:331:15", children: "Open negotiation" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:336:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Payment reference", value: ref, onChange: /* @__PURE__ */ __name2((e) => setRef(e.target.value), "onChange"), className: "h-8 text-xs", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:337:13" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: btn, disabled: !ref.trim(), onClick: /* @__PURE__ */ __name2(() => store.collectToken(v.id, ref.trim()), "onClick"), "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:338:13", children: "Token received" })
        ] })
      ] });
    case "outcome":
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:345:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: outcome, onValueChange: /* @__PURE__ */ __name2((x) => setOutcome(x), "onValueChange"), "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:346:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 text-xs", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:347:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:347:52" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:348:13", children: Object.keys(OUTCOME_LABEL).map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: o, className: "text-xs", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:350:17", children: OUTCOME_LABEL[o] }, o)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: action, onChange: /* @__PURE__ */ __name2((e) => setAction(e.target.value), "onChange"), className: "h-8 text-xs", placeholder: "Next action", "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:354:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: btn, onClick: /* @__PURE__ */ __name2(() => {
          store.setOutcome(v.id, outcome);
          store.setNextAction(v.id, { text: action, owner: v.leadOwner, dueAt: Date.now() + 2 * 36e5 });
          toast.success("Visit documented");
        }, "onClick"), "data-tsd-source": "/src/components/visits/live/NextStepFlow.tsx:355:11", children: "Lock outcome + next action" })
      ] });
    default:
      return null;
  }
}
__name(StepAction, "StepAction");
__name2(StepAction, "StepAction");
const REACTION_TAGS = Object.keys(REACTION_META);
function VisitControlSheet({
  visit: v,
  now,
  alternatives,
  coordinators,
  onClose
}) {
  const store = useLiveVisits();
  if (!v) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Sheet, { open: !!v, onOpenChange: /* @__PURE__ */ __name2((o) => {
    if (!o) onClose();
  }, "onOpenChange"), "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:68:5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetContent, { side: "right", className: "w-full sm:max-w-2xl overflow-y-auto", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:69:7", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetHeader, { className: "space-y-1", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:70:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetTitle, { className: "flex items-center gap-2 text-base", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:71:11", children: [
        v.customer,
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[10px]", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:73:13", children: STAGE_LABEL[v.stage] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-[10px]", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:74:13", children: [
          bookingProbability(v),
          "% likely"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:76:11", children: [
        v.propertyName,
        " · ",
        v.propertyArea,
        " · Room ",
        v.roomNo || "TBD",
        v.bedNo ? `/${v.bedNo}` : "",
        " · ",
        inr(v.rent),
        " · budget ",
        inr(v.budget),
        " · owner ",
        v.leadOwner,
        " · coordinator ",
        v.coordinator
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:80:11", children: [
        TIER_LABEL[priorityFor(v, now).tier],
        " — ",
        priorityFor(v, now).reasons.join(" · ")
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5 py-3", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:85:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: "h-7 text-xs", asChild: true, "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:86:11", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${v.phone}`, "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:87:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3 w-3 mr-1", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:87:40" }),
        "Call customer"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: "h-7 text-xs", asChild: true, "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:89:11", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `https://wa.me/${v.phone.replace(/\D/g, "")}`, target: "_blank", rel: "noreferrer", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:90:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-3 w-3 mr-1", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:91:15" }),
        "WhatsApp"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "h-7 text-xs", onClick: /* @__PURE__ */ __name2(() => {
        store.shareLocation(v.id);
        toast.success("Location pack sent");
      }, "onClick"), "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:94:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3 mr-1", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:95:13" }),
        "Send location"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: "h-7 text-xs", onClick: /* @__PURE__ */ __name2(() => store.logComms(v.id, `Coordinator ${v.coordinator} called`), "onClick"), "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:97:11", children: "Call coordinator" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "flow", className: "w-full", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:102:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid grid-cols-7 h-8", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:103:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "flow", className: "text-[11px]", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:104:13", children: "Flow" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "live", className: "text-[11px]", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:105:13", children: "Live" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "timeline", className: "text-[11px]", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:106:13", children: "T-60" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "tour", className: "text-[11px]", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:107:13", children: "Tour" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "close", className: "text-[11px]", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:108:13", children: "Close" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "rules", className: "text-[11px]", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:109:13", children: "Rules" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "log", className: "text-[11px]", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:110:13", children: "Log" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "flow", className: "pt-3", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:114:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NextStepFlow, { visit: v, now, alternatives, "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:115:13" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "live", className: "space-y-4 pt-3", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:120:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "Confirmation & movement", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:121:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:122:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Customer confirmation", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:123:17", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: v.confirmation, onValueChange: /* @__PURE__ */ __name2((x) => store.setConfirmation(v.id, x), "onValueChange"), "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:124:19", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 text-xs", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:125:21", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:125:60" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:126:21", children: ["pending", "confirmed", "reschedule-requested", "cancelled", "not-responding"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, className: "text-xs", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:128:25", children: s.replace(/-/g, " ") }, s)) })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Movement (T−30)", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:133:17", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: v.movement, onValueChange: /* @__PURE__ */ __name2((x) => store.setMovement(v.id, x), "onValueChange"), "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:134:19", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 text-xs", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:135:21", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:135:60" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:136:21", children: ["unknown", "en-route", "leaving-shortly", "running-late", "unable-to-come", "not-responding"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, className: "text-xs", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:138:25", children: s.replace(/-/g, " ") }, s)) })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:144:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: v.coordinatorConfirmed ? "secondary" : "outline", className: "h-7 text-xs", onClick: /* @__PURE__ */ __name2(() => store.confirmCoordinator(v.id), "onClick"), "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:145:17", children: v.coordinatorConfirmed ? "Coordinator confirmed" : "Confirm coordinator" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { onValueChange: /* @__PURE__ */ __name2((id) => {
              const c = coordinators.find((x) => x.id === id);
              if (c) {
                store.reassignCoordinator(v.id, c.id, c.name);
                toast.success(`Backup coordinator ${c.name} assigned`);
              }
            }, "onValueChange"), "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:148:17", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-7 text-xs w-44", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:152:19", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Change coordinator", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:152:63" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:153:19", children: coordinators.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c.id, className: "text-xs", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:154:46", children: c.name }, c.id)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: v.bedAvailable ? "outline" : "destructive", className: "h-7 text-xs", onClick: /* @__PURE__ */ __name2(() => store.setBedAvailable(v.id, !v.bedAvailable), "onClick"), "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:157:17", children: v.bedAvailable ? "Flag bed unavailable" : "Restore bed availability" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "T−120 inventory confirmation (Supply Controller)", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:163:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-1", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:164:15", children: INVENTORY_CHECK_ITEMS.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 text-xs py-0.5", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:166:19", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { checked: !!v.inventory[item.key], onCheckedChange: /* @__PURE__ */ __name2(() => store.toggleInventory(v.id, item.key), "onCheckedChange"), "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:167:21" }),
            item.label
          ] }, String(item.key))) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "h-7 text-xs", onClick: /* @__PURE__ */ __name2(() => {
            store.confirmAllInventory(v.id);
            toast.success("Inventory confirmed");
          }, "onClick"), "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:172:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3 w-3 mr-1", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:173:17" }),
            "Confirm all"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "T−10 property readiness (Tour Coordinator)", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:177:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-1", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:178:15", children: READINESS_ITEMS.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 text-xs py-0.5", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:180:19", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { checked: !!v.readiness[item.key], onCheckedChange: /* @__PURE__ */ __name2(() => store.toggleReadiness(v.id, item.key), "onCheckedChange"), "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:181:21" }),
          item.label
        ] }, String(item.key))) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrivalBlock, { visit: v, "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:188:13" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SchedulingBlock, { visit: v, "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:189:13" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "timeline", className: "space-y-2 pt-3", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:193:11", children: checkpointsFor(v).map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("rounded-lg border p-2.5", c.done ? "border-success/40 bg-success/5" : "border-border"), "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:195:15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:196:17", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:197:19", children: c.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: cn("text-[9px]", c.done ? "text-success border-success/40" : "text-muted-foreground"), "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:198:19", children: c.done ? "DONE" : "PENDING" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground mt-0.5", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:202:17", children: c.detail }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground mt-0.5", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:203:17", children: [
          "Owner: ",
          c.owner
        ] })
      ] }, c.key)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "tour", className: "space-y-4 pt-3", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:209:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "Live reactions (tap as it happens)", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:210:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:211:15", children: REACTION_TAGS.map((tag) => {
            const meta = REACTION_META[tag];
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: cn(
                  "h-7 text-[11px]",
                  meta.tone === "positive" && "border-success/40 text-success",
                  meta.tone === "negative" && "border-destructive/40 text-destructive"
                ),
                onClick: /* @__PURE__ */ __name2(() => {
                  store.addReaction(v.id, tag);
                  toast.info(`Logged: ${meta.label}`);
                }, "onClick"),
                "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:215:21",
                children: meta.label
              },
              tag
            );
          }) }),
          v.tourStartedAt && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:232:17", children: [
            "Tour running ",
            fmtDur(now - v.tourStartedAt),
            " · ",
            v.reactions.length,
            " reactions logged"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:234:15", children: v.reactions.slice(0, 6).map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:236:19", children: [
            "· ",
            REACTION_META[r.tag].label,
            " — ",
            new Date(r.ts).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })
          ] }, r.id)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(InterventionBlock, { visit: v, alternatives, "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:243:13" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FeedbackBlock, { visit: v, "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:244:13" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "close", className: "space-y-4 pt-3", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:248:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(QuotationBlock, { visit: v, "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:249:13" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(NegotiationBlock, { visit: v, "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:250:13" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TokenBlock, { visit: v, "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:251:13" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(OutcomeBlock, { visit: v, "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:252:13" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "rules", className: "space-y-2 pt-3", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:256:11", children: auditRules(v, now).length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-success/40 bg-success/5 p-3 text-xs text-success flex items-center gap-2", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:258:15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-4 w-4", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:259:17" }),
        " All non-negotiable visit rules satisfied."
      ] }) : auditRules(v, now).map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-destructive/40 bg-destructive/5 p-2.5", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:263:17", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-medium text-destructive flex items-center gap-1.5", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:264:19", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:265:21" }),
          r.rule
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground mt-0.5", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:267:19", children: r.detail })
      ] }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "log", className: "space-y-2 pt-3", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:274:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(NoteComposer, { visit: v, "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:275:13" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:276:13" }),
        v.timeline.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] flex gap-2", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:278:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground tabular-nums shrink-0", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:279:17", children: new Date(t.ts).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground shrink-0", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:282:17", children: t.by }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:283:17", children: t.text })
        ] }, t.id))
      ] })
    ] })
  ] }) });
}
__name(VisitControlSheet, "VisitControlSheet");
__name2(VisitControlSheet, "VisitControlSheet");
function Section({ title, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-2", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:297:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[11px] font-semibold uppercase tracking-wide text-muted-foreground", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:298:7", children: title }),
    children
  ] });
}
__name(Section, "Section");
__name2(Section, "Section");
function Field({ label, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:306:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[10.5px] text-muted-foreground", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:307:7", children: label }),
    children
  ] });
}
__name(Field, "Field");
__name2(Field, "Field");
function ArrivalBlock({ visit: v }) {
  const store = useLiveVisits();
  const [people, setPeople] = reactExports.useState(1);
  const [withWhom, setWithWhom] = reactExports.useState("alone");
  const [issue, setIssue] = reactExports.useState("");
  if (v.arrival) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "Arrival", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:320:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-success/40 bg-success/5 p-2.5 text-xs", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:321:9", children: [
        "Arrived ",
        new Date(v.arrival.arrivedAt).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }),
        " ·",
        " ",
        v.arrival.peopleCount,
        " people · ",
        v.arrival.accompaniedBy,
        v.arrival.issue ? ` · issue: ${v.arrival.issue}` : ""
      ] }),
      !v.tourStartedAt && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: "h-7 text-xs", onClick: /* @__PURE__ */ __name2(() => store.startTour(v.id), "onClick"), "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:327:11", children: "Start tour (T+10)" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "T+0 arrival capture", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:333:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:334:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "People visiting", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:335:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", min: 1, value: people, onChange: /* @__PURE__ */ __name2((e) => setPeople(Number(e.target.value)), "onChange"), className: "h-8 text-xs", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:336:11" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Accompanied by", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:338:9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: withWhom, onValueChange: /* @__PURE__ */ __name2((x) => setWithWhom(x), "onValueChange"), "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:339:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 text-xs", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:340:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:340:52" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:341:13", children: ["alone", "family", "friend", "partner"].map((x) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: x, className: "text-xs", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:342:68", children: x }, x)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Any immediate issue?", value: issue, onChange: /* @__PURE__ */ __name2((e) => setIssue(e.target.value), "onChange"), className: "h-8 text-xs", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:347:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:348:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "sm",
          className: "h-7 text-xs",
          onClick: /* @__PURE__ */ __name2(() => {
            store.markArrived(v.id, {
              peopleCount: people,
              accompaniedBy: withWhom,
              entrySuccessful: true,
              roomReady: v.readiness.roomUnlocked,
              coordinatorPresent: v.readiness.coordinatorPresent,
              issue: issue || void 0
            });
            toast.success(`Lead owner ${v.leadOwner} notified: customer arrived at ${v.propertyName}`);
          }, "onClick"),
          "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:349:9",
          children: "Mark arrived"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: "h-7 text-xs", onClick: /* @__PURE__ */ __name2(() => store.setOutcome(v.id, "no-show", { note: "Customer did not show" }), "onClick"), "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:363:9", children: "Mark no-show" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: "h-7 text-xs", onClick: /* @__PURE__ */ __name2(() => {
        store.shareLocation(v.id);
        store.logComms(v.id, "Location assistance provided — coordinator calling");
      }, "onClick"), "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:366:9", children: "Location assistance" })
    ] })
  ] });
}
__name(ArrivalBlock, "ArrivalBlock");
__name2(ArrivalBlock, "ArrivalBlock");
function SchedulingBlock({ visit: v }) {
  const store = useLiveVisits();
  const [when, setWhen] = reactExports.useState("");
  const [reason, setReason] = reactExports.useState("");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "Reschedule / cancel", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:379:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:380:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "datetime-local", value: when, onChange: /* @__PURE__ */ __name2((e) => setWhen(e.target.value), "onChange"), className: "h-8 text-xs", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:381:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Reason", value: reason, onChange: /* @__PURE__ */ __name2((e) => setReason(e.target.value), "onChange"), className: "h-8 text-xs", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:382:9" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:384:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "sm",
          variant: "outline",
          className: "h-7 text-xs",
          disabled: !when || !reason,
          onClick: /* @__PURE__ */ __name2(() => {
            store.reschedule(v.id, +new Date(when), reason);
            toast.success("Visit rescheduled");
          }, "onClick"),
          "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:385:9",
          children: "Reschedule"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "sm",
          variant: "outline",
          className: "h-7 text-xs text-destructive",
          disabled: !reason,
          onClick: /* @__PURE__ */ __name2(() => {
            store.cancelVisit(v.id, reason);
            toast.error("Visit cancelled with reason");
          }, "onClick"),
          "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:392:9",
          children: "Cancel visit"
        }
      )
    ] })
  ] });
}
__name(SchedulingBlock, "SchedulingBlock");
__name2(SchedulingBlock, "SchedulingBlock");
function InterventionBlock({ visit: v, alternatives }) {
  const store = useLiveVisits();
  const iv = reactExports.useMemo(() => buildIntervention(v, alternatives), [v, alternatives]);
  if (!iv) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-warning/50 bg-warning/5 p-3 space-y-2", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:409:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs font-semibold text-warning-foreground", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:410:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:411:9" }),
      iv.headline,
      " — live closing intervention"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-0.5", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:413:7", children: iv.lines.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[11px]", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:415:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:416:13", children: l.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:417:13", children: l.value })
    ] }, l.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] font-medium", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:421:7", children: [
      "Recommended action: ",
      iv.recommendation
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:422:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: "h-7 text-xs", asChild: true, "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:423:9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${v.phone}`, "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:424:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3 w-3 mr-1", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:424:38" }),
        "Call customer"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "h-7 text-xs", onClick: /* @__PURE__ */ __name2(() => {
        const d = draftQuotation(v);
        store.sendQuotation(v.id, { ...d, rent: Math.max(v.budget, d.rent - iv.availableDiscount) });
        toast.success("Revised quotation sent");
      }, "onClick"), "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:426:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-3 w-3 mr-1", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:431:11" }),
        "Send revised quotation"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: "h-7 text-xs", onClick: /* @__PURE__ */ __name2(() => {
        store.setAlternateProperty(v.id, iv.alternative ?? "Alternative to be sourced");
        store.setOutcome(v.id, "alternative-scheduled", { note: iv.alternative });
        toast.info("Alternative offered");
      }, "onClick"), "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:433:9", children: "Offer alternative" })
    ] })
  ] });
}
__name(InterventionBlock, "InterventionBlock");
__name2(InterventionBlock, "InterventionBlock");
function FeedbackBlock({ visit: v }) {
  const store = useLiveVisits();
  const [rating, setRating] = reactExports.useState(v.feedback?.rating ?? 7);
  const [fav, setFav] = reactExports.useState(v.feedback?.favouriteProperty ?? v.propertyName);
  const [room, setRoom] = reactExports.useState(v.feedback?.favouriteRoom ?? v.roomNo);
  const [liked, setLiked] = reactExports.useState(v.feedback?.liked ?? "");
  const [disliked, setDisliked] = reactExports.useState(v.feedback?.disliked ?? "");
  const [objection, setObjection] = reactExports.useState(v.feedback?.objection ?? "none");
  const [note, setNote] = reactExports.useState(v.feedback?.objectionNote ?? "");
  const [dm, setDm] = reactExports.useState(v.feedback?.decisionMaker ?? v.decisionMaker);
  const [blocker, setBlocker] = reactExports.useState(v.feedback?.blocker ?? "");
  const ratingBand = rating >= 9 ? "9–10 · Booking ready — send quotation + payment link, call within 10 minutes" : rating >= 7 ? "7–8 · Negotiation ready — resolve the single objection" : rating >= 5 ? "5–6 · Alternative required — stop selling this property" : "0–4 · Incorrect match — audit location, budget, date, inventory qualification";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "T+20 preference capture (mandatory)", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:464:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:465:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Favourite property", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:466:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: fav, onChange: /* @__PURE__ */ __name2((e) => setFav(e.target.value), "onChange"), className: "h-8 text-xs", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:466:43" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Favourite room / bed", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:467:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: room, onChange: /* @__PURE__ */ __name2((e) => setRoom(e.target.value), "onChange"), className: "h-8 text-xs", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:467:45" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: `Customer rating: ${rating}/10`, "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:469:7", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Slider, { value: [rating], min: 0, max: 10, step: 1, onValueChange: /* @__PURE__ */ __name2(([x]) => setRating(x), "onValueChange"), "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:470:9" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:472:7", children: ratingBand }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:473:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "What they liked", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:474:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: liked, onChange: /* @__PURE__ */ __name2((e) => setLiked(e.target.value), "onChange"), className: "h-8 text-xs", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:474:40" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "What they disliked", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:475:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: disliked, onChange: /* @__PURE__ */ __name2((e) => setDisliked(e.target.value), "onChange"), className: "h-8 text-xs", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:475:43" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:477:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Main objection", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:478:9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: objection, onValueChange: /* @__PURE__ */ __name2((x) => setObjection(x), "onValueChange"), "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:479:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 text-xs", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:480:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:480:52" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:481:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "none", className: "text-xs", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:482:15", children: "None" }),
          Object.keys(OBJECTION_LABEL).map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: o, className: "text-xs", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:484:17", children: OBJECTION_LABEL[o] }, o))
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Final decision-maker", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:489:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: dm, onChange: /* @__PURE__ */ __name2((e) => setDm(e.target.value), "onChange"), className: "h-8 text-xs", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:489:45" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "What is stopping the booking?", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:491:7", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: blocker, onChange: /* @__PURE__ */ __name2((e) => setBlocker(e.target.value), "onChange"), className: "h-8 text-xs", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:491:52" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { placeholder: "Objection detail / customer's exact words", value: note, onChange: /* @__PURE__ */ __name2((e) => setNote(e.target.value), "onChange"), className: "text-xs min-h-[60px]", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:492:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        size: "sm",
        className: "h-7 text-xs",
        disabled: !fav || !room || !blocker,
        onClick: /* @__PURE__ */ __name2(() => {
          store.captureFeedback(v.id, {
            attended: true,
            favouriteProperty: fav,
            favouriteRoom: room,
            rating,
            liked,
            disliked,
            objection: objection === "none" ? null : objection,
            objectionNote: note,
            decisionMaker: dm,
            bookable: rating >= 7,
            blocker,
            probability: rating * 10
          });
          toast.success(rating >= 7 ? "Feedback captured — quotation now mandatory" : "Feedback captured — alternative required");
        }, "onClick"),
        "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:493:7",
        children: "Capture feedback"
      }
    )
  ] });
}
__name(FeedbackBlock, "FeedbackBlock");
__name2(FeedbackBlock, "FeedbackBlock");
function QuotationBlock({ visit: v }) {
  const store = useLiveVisits();
  const [q, setQ] = reactExports.useState(() => draftQuotation(v));
  const total = q.rent + q.maintenance + q.gharpayyFee;
  if (v.quotation?.sentAt) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "Quotation", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:519:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-info/40 bg-info/5 p-3 text-xs space-y-1", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:520:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-medium", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:521:11", children: [
          v.quotation.propertyName,
          " · Room ",
          v.quotation.roomNo,
          "/",
          v.quotation.bedNo
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Rent", value: inr(v.quotation.rent), "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:522:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Deposit", value: inr(v.quotation.deposit), "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:523:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Maintenance", value: inr(v.quotation.maintenance), "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:524:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Gharpayy fee", value: inr(v.quotation.gharpayyFee), "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:525:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Check-in", value: v.quotation.checkInDate, "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:526:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Lock-in / notice", value: `${v.quotation.lockInMonths} months / ${v.quotation.noticeDays} days`, "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:527:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Token", value: inr(v.quotation.tokenAmount), "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:528:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Offer expires", value: new Date(v.quotation.expiresAt).toLocaleString("en-IN"), "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:529:11" })
      ] }),
      !v.quotation.acceptedAt ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:532:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: "h-7 text-xs", onClick: /* @__PURE__ */ __name2(() => {
          store.acceptQuotation(v.id);
          toast.success("Customer willing to book — token pending");
        }, "onClick"), "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:533:13", children: "Customer willing to book" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: "h-7 text-xs", onClick: /* @__PURE__ */ __name2(() => store.setStage(v.id, "negotiation"), "onClick"), "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:536:13", children: "Move to negotiation" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-success", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:541:11", children: "Accepted — token conversation started." })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "T+30 quotation", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:548:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:549:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Room", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:550:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: q.roomNo, onChange: /* @__PURE__ */ __name2((e) => setQ({ ...q, roomNo: e.target.value }), "onChange"), className: "h-8 text-xs", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:550:29" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Bed", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:551:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: q.bedNo, onChange: /* @__PURE__ */ __name2((e) => setQ({ ...q, bedNo: e.target.value }), "onChange"), className: "h-8 text-xs", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:551:28" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Rent", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:552:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: q.rent, onChange: /* @__PURE__ */ __name2((e) => setQ({ ...q, rent: Number(e.target.value) }), "onChange"), className: "h-8 text-xs", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:552:29" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Deposit", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:553:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: q.deposit, onChange: /* @__PURE__ */ __name2((e) => setQ({ ...q, deposit: Number(e.target.value) }), "onChange"), className: "h-8 text-xs", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:553:32" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Maintenance", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:554:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: q.maintenance, onChange: /* @__PURE__ */ __name2((e) => setQ({ ...q, maintenance: Number(e.target.value) }), "onChange"), className: "h-8 text-xs", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:554:36" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Gharpayy fee", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:555:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: q.gharpayyFee, onChange: /* @__PURE__ */ __name2((e) => setQ({ ...q, gharpayyFee: Number(e.target.value) }), "onChange"), className: "h-8 text-xs", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:555:37" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Check-in date", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:556:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date", value: q.checkInDate?.slice(0, 10), onChange: /* @__PURE__ */ __name2((e) => setQ({ ...q, checkInDate: e.target.value }), "onChange"), className: "h-8 text-xs", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:556:38" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Token amount", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:557:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: q.tokenAmount, onChange: /* @__PURE__ */ __name2((e) => setQ({ ...q, tokenAmount: Number(e.target.value) }), "onChange"), className: "h-8 text-xs", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:557:37" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Lock-in (months)", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:558:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: q.lockInMonths, onChange: /* @__PURE__ */ __name2((e) => setQ({ ...q, lockInMonths: Number(e.target.value) }), "onChange"), className: "h-8 text-xs", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:558:41" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Notice (days)", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:559:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: q.noticeDays, onChange: /* @__PURE__ */ __name2((e) => setQ({ ...q, noticeDays: Number(e.target.value) }), "onChange"), className: "h-8 text-xs", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:559:38" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:561:7", children: [
      "Move-in total: ",
      inr(total + q.deposit),
      " · monthly ",
      inr(q.rent + q.maintenance)
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "h-7 text-xs", onClick: /* @__PURE__ */ __name2(() => {
      store.sendQuotation(v.id, q);
      toast.success("Quotation sent");
    }, "onClick"), "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:562:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-3 w-3 mr-1", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:563:9" }),
      "Send quotation"
    ] })
  ] });
}
__name(QuotationBlock, "QuotationBlock");
__name2(QuotationBlock, "QuotationBlock");
function Row({ label, value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:571:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:572:7", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:573:7", children: value })
  ] });
}
__name(Row, "Row");
__name2(Row, "Row");
function NegotiationBlock({ visit: v }) {
  const store = useLiveVisits();
  const [topics, setTopics] = reactExports.useState(v.negotiation?.topics ?? []);
  const [discount, setDiscount] = reactExports.useState(v.negotiation?.offeredDiscount ?? 0);
  const [note, setNote] = reactExports.useState(v.negotiation?.note ?? "");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "T+45 negotiation (Lead Owner)", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:584:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:585:7", children: NEGOTIATION_TOPICS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        size: "sm",
        variant: topics.includes(t.key) ? "secondary" : "outline",
        className: "h-6 text-[10.5px]",
        onClick: /* @__PURE__ */ __name2(() => setTopics((s) => s.includes(t.key) ? s.filter((x) => x !== t.key) : [...s, t.key]), "onClick"),
        "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:587:11",
        children: t.label
      },
      t.key
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:595:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Discount offered (₹)", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:596:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: discount, onChange: /* @__PURE__ */ __name2((e) => setDiscount(Number(e.target.value)), "onChange"), className: "h-8 text-xs", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:596:45" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Owner", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:597:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: v.leadOwner, readOnly: true, className: "h-8 text-xs", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:597:30" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { placeholder: "Negotiation note", value: note, onChange: /* @__PURE__ */ __name2((e) => setNote(e.target.value), "onChange"), className: "text-xs min-h-[56px]", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:599:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "h-7 text-xs", disabled: !topics.length, onClick: /* @__PURE__ */ __name2(() => {
      store.startNegotiation(v.id, topics, v.leadOwner, discount, note);
      toast.success("Negotiation logged");
    }, "onClick"), "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:600:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Handshake, { className: "h-3 w-3 mr-1", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:601:9" }),
      "Log negotiation"
    ] })
  ] });
}
__name(NegotiationBlock, "NegotiationBlock");
__name2(NegotiationBlock, "NegotiationBlock");
function TokenBlock({ visit: v }) {
  const store = useLiveVisits();
  const [ref, setRef] = reactExports.useState("");
  const [amount, setAmount] = reactExports.useState(v.token?.amount ?? v.quotation?.tokenAmount ?? 2e3);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Token", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:612:5", children: v.token?.paidAt ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-success/40 bg-success/5 p-2.5 text-xs text-success", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:614:9", children: [
    "Token ",
    inr(v.token.amount),
    " received · ref ",
    v.token.reference,
    " · booking confirmed"
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:619:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Token amount", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:620:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: amount, onChange: /* @__PURE__ */ __name2((e) => setAmount(Number(e.target.value)), "onChange"), className: "h-8 text-xs", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:620:41" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Payment reference", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:621:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: ref, onChange: /* @__PURE__ */ __name2((e) => setRef(e.target.value), "onChange"), className: "h-8 text-xs", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:621:46" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:623:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "h-7 text-xs", onClick: /* @__PURE__ */ __name2(() => {
        store.promiseToken(v.id, amount);
        toast.info("Token promised — hold timer running");
      }, "onClick"), "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:624:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3 mr-1", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:625:15" }),
        "Mark token promised"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "h-7 text-xs", disabled: !ref, onClick: /* @__PURE__ */ __name2(() => {
        store.collectToken(v.id, ref);
        toast.success("Token collected — BOOKED");
      }, "onClick"), "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:627:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "h-3 w-3 mr-1", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:628:15" }),
        "Collect token & book"
      ] })
    ] })
  ] }) });
}
__name(TokenBlock, "TokenBlock");
__name2(TokenBlock, "TokenBlock");
function OutcomeBlock({ visit: v }) {
  const store = useLiveVisits();
  const [outcome, setOutcome] = reactExports.useState(v.outcome ?? "follow-up-scheduled");
  const [lostReason, setLostReason] = reactExports.useState("budget");
  const [note, setNote] = reactExports.useState(v.lostNote ?? "");
  const [action, setAction] = reactExports.useState(v.nextAction?.text ?? "");
  const [owner, setOwner] = reactExports.useState(v.nextAction?.owner ?? v.leadOwner);
  const [due, setDue] = reactExports.useState("");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "T+60 final outcome + next action (mandatory)", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:646:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:647:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Outcome", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:648:9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: outcome, onValueChange: /* @__PURE__ */ __name2((x) => setOutcome(x), "onValueChange"), "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:649:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 text-xs", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:650:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:650:52" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:651:13", children: Object.keys(OUTCOME_LABEL).map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: o, className: "text-xs", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:653:17", children: OUTCOME_LABEL[o] }, o)) })
      ] }) }),
      (outcome === "lost" || outcome === "not-looking") && /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Lost reason", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:659:11", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: lostReason, onValueChange: /* @__PURE__ */ __name2((x) => setLostReason(x), "onValueChange"), "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:660:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 text-xs", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:661:15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:661:54" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:662:15", children: Object.keys(LOST_REASON_LABEL).map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: o, className: "text-xs", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:664:19", children: LOST_REASON_LABEL[o] }, o)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Reason / context (required for loss)", value: note, onChange: /* @__PURE__ */ __name2((e) => setNote(e.target.value), "onChange"), className: "h-8 text-xs", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:671:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:672:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Next action", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:673:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: action, onChange: /* @__PURE__ */ __name2((e) => setAction(e.target.value), "onChange"), className: "h-8 text-xs", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:673:36" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Owner", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:674:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: owner, onChange: /* @__PURE__ */ __name2((e) => setOwner(e.target.value), "onChange"), className: "h-8 text-xs", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:674:30" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Deadline", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:675:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "datetime-local", value: due, onChange: /* @__PURE__ */ __name2((e) => setDue(e.target.value), "onChange"), className: "h-8 text-xs", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:675:33" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        size: "sm",
        className: "h-7 text-xs",
        disabled: !action || !due || (outcome === "lost" || outcome === "not-looking") && !note,
        onClick: /* @__PURE__ */ __name2(() => {
          store.setNextAction(v.id, { text: action, owner, dueAt: +new Date(due) });
          store.setOutcome(v.id, outcome, { lostReason: outcome === "lost" || outcome === "not-looking" ? lostReason : void 0, note });
          toast.success(`Outcome recorded: ${OUTCOME_LABEL[outcome]}`);
        }, "onClick"),
        "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:677:7",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Flag, { className: "h-3 w-3 mr-1", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:686:9" }),
          "Close out visit"
        ]
      }
    )
  ] });
}
__name(OutcomeBlock, "OutcomeBlock");
__name2(OutcomeBlock, "OutcomeBlock");
function NoteComposer({ visit: v }) {
  const store = useLiveVisits();
  const [text, setText] = reactExports.useState("");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:696:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Controller note…", value: text, onChange: /* @__PURE__ */ __name2((e) => setText(e.target.value), "onChange"), className: "h-8 text-xs", "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:697:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: "h-8 text-xs", disabled: !text, onClick: /* @__PURE__ */ __name2(() => {
      store.addNote(v.id, text);
      setText("");
    }, "onClick"), "data-tsd-source": "/src/components/visits/live/VisitControlSheet.tsx:698:7", children: "Add" })
  ] });
}
__name(NoteComposer, "NoteComposer");
__name2(NoteComposer, "NoteComposer");
const TONE = {
  critical: "border-destructive/50 bg-destructive/5 text-destructive",
  warn: "border-warning/50 bg-warning/5 text-warning-foreground",
  info: "border-border bg-card text-muted-foreground"
};
function AlertRail({ alerts, onOpen }) {
  const { resolveAlert } = useLiveVisits();
  const open = alerts.filter((a) => !a.resolvedAt);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", "data-tsd-source": "/src/components/visits/live/AlertRail.tsx:19:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", "data-tsd-source": "/src/components/visits/live/AlertRail.tsx:20:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Siren, { className: "h-4 w-4 text-destructive", "data-tsd-source": "/src/components/visits/live/AlertRail.tsx:21:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold", "data-tsd-source": "/src/components/visits/live/AlertRail.tsx:22:9", children: "Control Tower alerts" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-[10px]", "data-tsd-source": "/src/components/visits/live/AlertRail.tsx:23:9", children: [
        open.length,
        " open"
      ] })
    ] }),
    open.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/components/visits/live/AlertRail.tsx:26:9", children: "No open alerts. Every active visit is inside SLA." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5 max-h-[420px] overflow-y-auto pr-1", "data-tsd-source": "/src/components/visits/live/AlertRail.tsx:28:9", children: open.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("rounded-lg border p-2 flex items-start gap-2", TONE[a.severity]), "data-tsd-source": "/src/components/visits/live/AlertRail.tsx:30:13", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", "data-tsd-source": "/src/components/visits/live/AlertRail.tsx:31:15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11.5px] font-medium leading-snug", "data-tsd-source": "/src/components/visits/live/AlertRail.tsx:32:17", children: a.message }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] opacity-70", "data-tsd-source": "/src/components/visits/live/AlertRail.tsx:33:17", children: [
          a.kind.replace(/-/g, " "),
          " · ",
          new Date(a.ts).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 shrink-0", "data-tsd-source": "/src/components/visits/live/AlertRail.tsx:37:15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", className: "h-6 px-1.5 text-[10px]", onClick: /* @__PURE__ */ __name2(() => onOpen(a.visitId), "onClick"), "data-tsd-source": "/src/components/visits/live/AlertRail.tsx:38:17", children: "Open" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", className: "h-6 px-1.5 text-[10px]", onClick: /* @__PURE__ */ __name2(() => resolveAlert(a.id), "onClick"), "data-tsd-source": "/src/components/visits/live/AlertRail.tsx:39:17", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3", "data-tsd-source": "/src/components/visits/live/AlertRail.tsx:40:19" }) })
      ] })
    ] }, a.id)) })
  ] });
}
__name(AlertRail, "AlertRail");
__name2(AlertRail, "AlertRail");
function Stat({ label, value, sub }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-3", "data-tsd-source": "/src/components/visits/live/MetricsPanel.tsx:6:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10.5px] uppercase tracking-wide text-muted-foreground", "data-tsd-source": "/src/components/visits/live/MetricsPanel.tsx:7:7", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-semibold tabular-nums", "data-tsd-source": "/src/components/visits/live/MetricsPanel.tsx:8:7", children: value }),
    sub && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10.5px] text-muted-foreground", "data-tsd-source": "/src/components/visits/live/MetricsPanel.tsx:9:15", children: sub })
  ] });
}
__name(Stat, "Stat");
__name2(Stat, "Stat");
function MetricsPanel({ m }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-tsd-source": "/src/components/visits/live/MetricsPanel.tsx:16:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-2", "data-tsd-source": "/src/components/visits/live/MetricsPanel.tsx:17:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Visits scheduled", value: m.scheduled, "data-tsd-source": "/src/components/visits/live/MetricsPanel.tsx:18:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Confirmed", value: m.confirmed, "data-tsd-source": "/src/components/visits/live/MetricsPanel.tsx:19:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "En route", value: m.enRoute, "data-tsd-source": "/src/components/visits/live/MetricsPanel.tsx:20:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Completed", value: m.completed, "data-tsd-source": "/src/components/visits/live/MetricsPanel.tsx:21:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "No-shows", value: m.noShows, "data-tsd-source": "/src/components/visits/live/MetricsPanel.tsx:22:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Rescheduled", value: m.rescheduled, "data-tsd-source": "/src/components/visits/live/MetricsPanel.tsx:23:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Quotations sent", value: m.quotationsSent, "data-tsd-source": "/src/components/visits/live/MetricsPanel.tsx:24:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Quotation TAT", value: `${m.avgQuotationTurnaroundMin}m`, sub: "feedback → quotation", "data-tsd-source": "/src/components/visits/live/MetricsPanel.tsx:25:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Arrival → quotation", value: `${m.avgArrivalToQuotationMin}m`, "data-tsd-source": "/src/components/visits/live/MetricsPanel.tsx:26:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Quotation → token", value: `${m.avgQuotationToTokenMin}m`, "data-tsd-source": "/src/components/visits/live/MetricsPanel.tsx:27:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Bookings", value: m.booked, "data-tsd-source": "/src/components/visits/live/MetricsPanel.tsx:28:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Same-day booking", value: `${m.sameDayBookingPct}%`, "data-tsd-source": "/src/components/visits/live/MetricsPanel.tsx:29:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Stuck w/o next action", value: m.stuckWithoutNextAction, "data-tsd-source": "/src/components/visits/live/MetricsPanel.tsx:30:9" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4", "data-tsd-source": "/src/components/visits/live/MetricsPanel.tsx:33:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Table,
        {
          title: "Coordinator performance",
          head: ["Coordinator", "Visits", "Done", "Booked", "Conv"],
          rows: m.coordinatorRows.map((r) => [r.name, r.visits, r.completed, r.booked, `${r.conv}%`]),
          "data-tsd-source": "/src/components/visits/live/MetricsPanel.tsx:34:9"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Table,
        {
          title: "Lead-owner conversion",
          head: ["Owner", "Visits", "Booked", "Conv"],
          rows: m.ownerRows.map((r) => [r.name, r.visits, r.booked, `${r.conv}%`]),
          "data-tsd-source": "/src/components/visits/live/MetricsPanel.tsx:36:9"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Table,
        {
          title: "Property-wise visit conversion",
          head: ["Property", "Visits", "Booked", "Conv"],
          rows: m.propertyRows.map((r) => [r.name, r.visits, r.booked, `${r.conv}%`]),
          "data-tsd-source": "/src/components/visits/live/MetricsPanel.tsx:38:9"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Table,
        {
          title: "Room-wise demand",
          head: ["Room", "Requests"],
          rows: m.roomDemand.map((r) => [r.room, r.count]),
          "data-tsd-source": "/src/components/visits/live/MetricsPanel.tsx:40:9"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Table,
        {
          title: "Lost reasons",
          head: ["Reason", "Count"],
          rows: m.lostReasons.map(([k, c]) => [k.replace(/-/g, " "), c]),
          "data-tsd-source": "/src/components/visits/live/MetricsPanel.tsx:42:9"
        }
      )
    ] })
  ] });
}
__name(MetricsPanel, "MetricsPanel");
__name2(MetricsPanel, "MetricsPanel");
function Table({ title, head, rows }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-3", "data-tsd-source": "/src/components/visits/live/MetricsPanel.tsx:51:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-semibold mb-2", "data-tsd-source": "/src/components/visits/live/MetricsPanel.tsx:52:7", children: title }),
    rows.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", "data-tsd-source": "/src/components/visits/live/MetricsPanel.tsx:54:9", children: "No data yet." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-[11px]", "data-tsd-source": "/src/components/visits/live/MetricsPanel.tsx:56:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { "data-tsd-source": "/src/components/visits/live/MetricsPanel.tsx:57:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "text-muted-foreground text-left", "data-tsd-source": "/src/components/visits/live/MetricsPanel.tsx:58:13", children: head.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "font-medium pb-1", "data-tsd-source": "/src/components/visits/live/MetricsPanel.tsx:59:32", children: h }, h)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { "data-tsd-source": "/src/components/visits/live/MetricsPanel.tsx:62:11", children: rows.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "border-t border-border/60", "data-tsd-source": "/src/components/visits/live/MetricsPanel.tsx:64:15", children: r.map((c, j) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1 tabular-nums", "data-tsd-source": "/src/components/visits/live/MetricsPanel.tsx:65:34", children: c }, j)) }, i)) })
    ] })
  ] });
}
__name(Table, "Table");
__name2(Table, "Table");
const SCENARIOS = [
  { id: 1, title: "Tour scheduled successfully", action: "Send property name, location, time, coordinator number and visit expectations", status: "Visit Scheduled", next: "Set confirmation reminder" },
  { id: 2, title: "Customer confirms the tour", action: "Confirm exact arrival time and number of people visiting", status: "Visit Confirmed", next: "Reconfirm 60 minutes before" },
  { id: 3, title: "Customer does not confirm", action: "Call and send a short confirmation message", status: "Confirmation Pending", next: "Reassign follow-up after 30 minutes" },
  { id: 4, title: "Customer asks to reschedule", action: "Capture new date, time and reason", status: "Visit Rescheduled", next: "Cancel old slot and create new slot" },
  { id: 5, title: "Customer wants an earlier visit", action: "Check coordinator and inventory availability immediately", status: "Time Change Requested", next: "Confirm revised slot within 10 minutes" },
  { id: 6, title: "Customer is running late", action: "Ask for expected arrival time and inform the coordinator", status: "Customer Delayed", next: "Keep the slot active for a defined period" },
  { id: 7, title: "Visit coordinator is running late", action: "Inform customer before they arrive and provide a revised ETA", status: "Coordinator Delayed", next: "Escalate if delay exceeds 10–15 minutes" },
  { id: 8, title: "Customer cannot find the property", action: "Share live location, landmark, exterior image and coordinator number", status: "Location Assistance", next: "Coordinator calls the customer immediately" },
  { id: 9, title: "Customer cancels before leaving", action: "Capture the exact cancellation reason", status: "Visit Cancelled", next: "Reschedule or move to nurture follow-up" },
  { id: 10, title: "Customer does not show up", action: "Call within 10 minutes of the scheduled time", status: "No Show", next: "Attempt one same-day reschedule" },
  { id: 11, title: "Property or bed becomes unavailable", action: "Do not allow the customer to reach an unavailable property", status: "Inventory Conflict", next: "Offer a verified replacement before the visit" },
  { id: 12, title: "Customer reaches and tour starts", action: "Mark arrival time, property and coordinator", status: "Visit In Progress", next: "Track which rooms and beds were shown" },
  { id: 13, title: "Customer likes the property", action: "Ask which exact room or bed they prefer", status: "Interested After Visit", next: "Send quotation within 15 minutes" },
  { id: 14, title: "Likes it but finds it expensive", action: "Understand the acceptable budget gap", status: "Negotiation – Price", next: "Offer approved discount, plan or alternative" },
  { id: 15, title: "Customer says the property is too far", action: "Identify whether the concern is commute time, transport or locality", status: "Negotiation – Distance", next: "Share commute proof or closer alternative" },
  { id: 16, title: "Needs family approval", action: "Send photos, video, quotation, rules and payment details", status: "Decision Pending – Family", next: "Schedule a family decision call" },
  { id: 17, title: "Wants to compare other properties", action: "Ask what is missing in the current option", status: "Comparison Pending", next: "Show only one highly relevant alternative" },
  { id: 18, title: "Dislikes the room or property", action: "Capture the exact reason: size, food, hygiene, ventilation, crowd, price or location", status: "Visit Not Suitable", next: "Recommend an alternative based on that reason" },
  { id: 19, title: "Selects a room but does not pay", action: "Share booking validity and payment deadline", status: "Token Pending", next: "Follow up before the room hold expires" },
  { id: 20, title: "Customer pays and confirms", action: "Verify payment proof, bed number, rent, deposit, fee and check-in date", status: "Booked", next: "Start the Move-In Assurance process" }
];
const RULES = [
  "No visit without a lead owner.",
  "No visit without a coordinator.",
  "No visit without confirmed room inventory.",
  "No visit scheduled only against a property — it must include a room or bed preference.",
  "No visit can remain in one stage beyond its SLA.",
  "No completed tour without customer feedback.",
  "No positive visit without a quotation.",
  "No quotation without a follow-up deadline.",
  "No lead should have multiple owners.",
  "No visit marked complete without a final outcome.",
  "No 'customer is thinking' status without reason and deadline.",
  "No room promised without supply confirmation.",
  "Maximum two properties shown unless an exception is approved.",
  "The lead owner must be available during the active tour.",
  "The booking discussion begins while the customer is still at the property."
];
const ROLES = [
  { role: "Visit Controller", owns: ["Tracks every active visit", "Detects delays", "Confirms coordinators", "Ensures inventory availability", "Escalates stuck visits", "Ensures every visit has an outcome"] },
  { role: "Lead Owner", owns: ["Customer qualification", "Pre-visit communication", "Live objection handling", "Quotation", "Negotiation", "Token collection", "Booking closure"] },
  { role: "Tour Coordinator", owns: ["Customer arrival", "Property experience", "Room presentation", "Real-time feedback", "Preferred room identification", "Dashboard updates"] },
  { role: "Supply Controller", owns: ["Real-time room availability", "Bed blocking", "Owner confirmation", "Discount approval", "Room readiness", "Inventory conflict resolution"] }
];
function PlaybookPanel() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-tsd-source": "/src/components/visits/live/PlaybookPanel.tsx:63:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-2", "data-tsd-source": "/src/components/visits/live/PlaybookPanel.tsx:64:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold", "data-tsd-source": "/src/components/visits/live/PlaybookPanel.tsx:65:9", children: "20 live tour scenarios" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-2", "data-tsd-source": "/src/components/visits/live/PlaybookPanel.tsx:66:9", children: SCENARIOS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-3 space-y-1", "data-tsd-source": "/src/components/visits/live/PlaybookPanel.tsx:68:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", "data-tsd-source": "/src/components/visits/live/PlaybookPanel.tsx:69:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[10px]", "data-tsd-source": "/src/components/visits/live/PlaybookPanel.tsx:70:17", children: s.id }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium", "data-tsd-source": "/src/components/visits/live/PlaybookPanel.tsx:71:17", children: s.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", "data-tsd-source": "/src/components/visits/live/PlaybookPanel.tsx:73:15", children: s.action }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1 pt-0.5", "data-tsd-source": "/src/components/visits/live/PlaybookPanel.tsx:74:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-[10px]", "data-tsd-source": "/src/components/visits/live/PlaybookPanel.tsx:75:17", children: s.status }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-[10px]", "data-tsd-source": "/src/components/visits/live/PlaybookPanel.tsx:76:17", children: [
            "Next: ",
            s.next
          ] })
        ] })
      ] }, s.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4", "data-tsd-source": "/src/components/visits/live/PlaybookPanel.tsx:83:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-3", "data-tsd-source": "/src/components/visits/live/PlaybookPanel.tsx:84:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold mb-2", "data-tsd-source": "/src/components/visits/live/PlaybookPanel.tsx:85:11", children: "Non-negotiable visit rules" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", "data-tsd-source": "/src/components/visits/live/PlaybookPanel.tsx:86:11", children: RULES.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-[11px] text-muted-foreground", "data-tsd-source": "/src/components/visits/live/PlaybookPanel.tsx:87:31", children: [
          "· ",
          r
        ] }, r)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-3", "data-tsd-source": "/src/components/visits/live/PlaybookPanel.tsx:90:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold mb-2", "data-tsd-source": "/src/components/visits/live/PlaybookPanel.tsx:91:11", children: "Team roles" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", "data-tsd-source": "/src/components/visits/live/PlaybookPanel.tsx:92:11", children: ROLES.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/components/visits/live/PlaybookPanel.tsx:94:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium", "data-tsd-source": "/src/components/visits/live/PlaybookPanel.tsx:95:17", children: r.role }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", "data-tsd-source": "/src/components/visits/live/PlaybookPanel.tsx:96:17", children: r.owns.join(" · ") })
        ] }, r.role)) })
      ] })
    ] })
  ] });
}
__name(PlaybookPanel, "PlaybookPanel");
__name2(PlaybookPanel, "PlaybookPanel");
function LiveVisitWarRoom() {
  const {
    leads,
    properties,
    tours,
    tcms,
    scheduleTour
  } = useApp();
  const [now, mounted] = useMountedNow(1e3);
  const store = useLiveVisits();
  const {
    visits,
    alerts
  } = store;
  const [openId, setOpenId] = reactExports.useState(null);
  const [ownerFilter, setOwnerFilter] = reactExports.useState("all");
  const [query, setQuery] = reactExports.useState("");
  reactExports.useEffect(() => {
    if (!mounted) return;
    tours.forEach((t) => {
      const id = `lv-${t.id}`;
      if (visits[id]) return;
      const lead = leads.find((l) => l.id === t.leadId);
      const prop = properties.find((p) => p.id === t.propertyId);
      const tcm = tcms.find((m) => m.id === t.tcmId);
      const owner = tcms.find((m) => m.id === lead?.assignedTcmId) ?? tcm;
      const sched = +new Date(t.scheduledAt);
      store.seed({
        id,
        tourId: t.id,
        leadId: t.leadId,
        customer: lead?.name ?? "Lead",
        phone: lead?.phone ?? "",
        scheduledAt: sched,
        propertyId: t.propertyId,
        propertyName: prop?.name ?? "Property",
        propertyArea: prop?.area ?? "—",
        roomNo: `${(prop?.name ?? "R").slice(0, 1).toUpperCase()}${100 + sched % 40}`,
        bedNo: sched % 2 === 0 ? "A" : "B",
        rent: prop?.pricePerBed ?? 0,
        budget: lead?.budget ?? 0,
        checkInDate: lead?.moveInDate ?? (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
        occupation: lead?.source ?? "—",
        decisionMaker: "Self",
        intent: lead?.intent ?? "warm",
        currentLocation: lead?.preferredArea ?? "—",
        leadOwnerId: owner?.id ?? "",
        leadOwner: owner?.name ?? "Unassigned",
        coordinatorId: tcm?.id ?? "",
        coordinator: tcm?.name ?? "Unassigned",
        stage: t.status === "completed" ? "feedback" : t.status === "cancelled" || t.status === "no-show" ? "lost" : "scheduled"
      });
    });
  }, [tours, mounted]);
  reactExports.useEffect(() => {
    if (!mounted) return;
    Object.values(visits).forEach((v) => {
      evaluateAlerts(v, now).forEach((c) => store.pushAlert({
        visitId: v.id,
        customer: v.customer,
        kind: c.kind,
        severity: c.severity,
        message: c.message
      }));
    });
  }, [Math.floor(now / 3e4), mounted]);
  const all = reactExports.useMemo(() => Object.values(visits), [visits]);
  const filtered = reactExports.useMemo(() => {
    const q = query.trim().toLowerCase();
    return all.filter((v) => {
      if (ownerFilter !== "all" && v.leadOwnerId !== ownerFilter && v.coordinatorId !== ownerFilter) return false;
      if (!q) return true;
      return [v.customer, v.propertyName, v.roomNo, v.leadOwner, v.coordinator].join(" ").toLowerCase().includes(q);
    });
  }, [all, ownerFilter, query]);
  const columns = reactExports.useMemo(() => groupByColumn(filtered, now), [filtered, now]);
  const metrics = reactExports.useMemo(() => computeMetrics(all), [all]);
  const openAlerts = alerts.filter((a) => !a.resolvedAt);
  const closeNow = reactExports.useMemo(() => filtered.filter((v) => priorityFor(v, now).tier === "close-now").sort((a, b) => bookingProbability(b) - bookingProbability(a)), [filtered, now]);
  const atRisk = reactExports.useMemo(() => filtered.filter((v) => priorityFor(v, now).tier === "at-risk"), [filtered, now]);
  const followUp = reactExports.useMemo(() => filtered.filter((v) => priorityFor(v, now).tier === "follow-up"), [filtered, now]);
  const alternatives = reactExports.useMemo(() => properties.map((p) => ({
    name: p.name,
    rent: p.pricePerBed,
    area: p.area
  })), [properties]);
  const coordinators = reactExports.useMemo(() => tcms.map((t) => ({
    id: t.id,
    name: t.name
  })), [tcms]);
  const active = openId ? visits[openId] ?? null : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", "data-tsd-source": "/src/routes/live-visit.tsx:147:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex flex-wrap items-center gap-3", "data-tsd-source": "/src/routes/live-visit.tsx:148:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", "data-tsd-source": "/src/routes/live-visit.tsx:149:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2.5 w-2.5", "data-tsd-source": "/src/routes/live-visit.tsx:150:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-ping absolute h-full w-full rounded-full bg-success/60", "data-tsd-source": "/src/routes/live-visit.tsx:151:13" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative rounded-full h-2.5 w-2.5 bg-success", "data-tsd-source": "/src/routes/live-visit.tsx:152:13" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-semibold tracking-tight", "data-tsd-source": "/src/routes/live-visit.tsx:154:11", children: "Live Visit War Room" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground max-w-xl", "data-tsd-source": "/src/routes/live-visit.tsx:156:9", children: "Not a calendar. Every active customer is visible, owned, timed and pushed toward a booking, quotation, token or a documented next action." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex flex-wrap items-center gap-2", "data-tsd-source": "/src/routes/live-visit.tsx:159:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Search customer, property, room…", value: query, onChange: /* @__PURE__ */ __name2((e) => setQuery(e.target.value), "onChange"), className: "h-8 w-52 text-xs", "data-tsd-source": "/src/routes/live-visit.tsx:160:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: ownerFilter, onValueChange: setOwnerFilter, "data-tsd-source": "/src/routes/live-visit.tsx:161:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 w-40 text-xs", "data-tsd-source": "/src/routes/live-visit.tsx:162:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "All owners", "data-tsd-source": "/src/routes/live-visit.tsx:162:57" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { "data-tsd-source": "/src/routes/live-visit.tsx:163:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", className: "text-xs", "data-tsd-source": "/src/routes/live-visit.tsx:164:15", children: "All owners & coordinators" }),
            tcms.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: t.id, className: "text-xs", "data-tsd-source": "/src/routes/live-visit.tsx:165:32", children: t.name }, t.id))
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ScheduleVisitDialog, { onScheduled: /* @__PURE__ */ __name2(() => toast.success("Visit scheduled and pushed into the War Room"), "onScheduled"), "data-tsd-source": "/src/routes/live-visit.tsx:168:11" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LiveTourStrip, { visits: filtered, now, onOpen: setOpenId, "data-tsd-source": "/src/routes/live-visit.tsx:172:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 xl:grid-cols-7 gap-2", "data-tsd-source": "/src/routes/live-visit.tsx:174:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Kpi, { label: "Active visits", value: filtered.filter((v) => !["booked", "lost"].includes(v.stage)).length, "data-tsd-source": "/src/routes/live-visit.tsx:175:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Kpi, { label: "Close now", value: closeNow.length, tone: "success", "data-tsd-source": "/src/routes/live-visit.tsx:176:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Kpi, { label: "At risk", value: atRisk.length, tone: "destructive", "data-tsd-source": "/src/routes/live-visit.tsx:177:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Kpi, { label: "Follow-up", value: followUp.length, tone: "warning", "data-tsd-source": "/src/routes/live-visit.tsx:178:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Kpi, { label: "Open alerts", value: openAlerts.length, tone: openAlerts.length ? "destructive" : "default", "data-tsd-source": "/src/routes/live-visit.tsx:179:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Kpi, { label: "Quotations today", value: metrics.quotationsSent, "data-tsd-source": "/src/routes/live-visit.tsx:180:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Kpi, { label: "Booked today", value: metrics.booked, tone: "success", "data-tsd-source": "/src/routes/live-visit.tsx:181:9" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "board", "data-tsd-source": "/src/routes/live-visit.tsx:184:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "h-9", "data-tsd-source": "/src/routes/live-visit.tsx:185:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "board", className: "text-xs", "data-tsd-source": "/src/routes/live-visit.tsx:186:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutGrid, { className: "h-3.5 w-3.5 mr-1", "data-tsd-source": "/src/routes/live-visit.tsx:186:58" }),
          "War board"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "priority", className: "text-xs", "data-tsd-source": "/src/routes/live-visit.tsx:187:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "h-3.5 w-3.5 mr-1", "data-tsd-source": "/src/routes/live-visit.tsx:187:61" }),
          "Priority engine"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "alerts", className: "text-xs", "data-tsd-source": "/src/routes/live-visit.tsx:188:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "h-3.5 w-3.5 mr-1", "data-tsd-source": "/src/routes/live-visit.tsx:188:59" }),
          "Alerts (",
          openAlerts.length,
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "metrics", className: "text-xs", "data-tsd-source": "/src/routes/live-visit.tsx:189:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Gauge, { className: "h-3.5 w-3.5 mr-1", "data-tsd-source": "/src/routes/live-visit.tsx:189:60" }),
          "Metrics"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "playbook", className: "text-xs", "data-tsd-source": "/src/routes/live-visit.tsx:190:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-3.5 w-3.5 mr-1", "data-tsd-source": "/src/routes/live-visit.tsx:190:61" }),
          "Playbook"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "board", className: "pt-4 space-y-4", "data-tsd-source": "/src/routes/live-visit.tsx:193:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BoardRow, { cols: PRIMARY_COLUMNS, columns, now, onOpen: setOpenId, "data-tsd-source": "/src/routes/live-visit.tsx:194:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(BoardRow, { cols: SECONDARY_COLUMNS, columns, now, onOpen: setOpenId, compact: true, "data-tsd-source": "/src/routes/live-visit.tsx:195:11" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "priority", className: "pt-4 grid grid-cols-1 lg:grid-cols-3 gap-4", "data-tsd-source": "/src/routes/live-visit.tsx:198:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PriorityLane, { title: "Priority 1 · Close now", hint: "Customer inside the property, rated 8+, room selected, one objection left.", tone: "success", visits: closeNow, now, onOpen: setOpenId, "data-tsd-source": "/src/routes/live-visit.tsx:199:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PriorityLane, { title: "Priority 2 · At risk", hint: "Late, unconfirmed, room lost, no action for 15+ minutes.", tone: "destructive", visits: atRisk, now, onOpen: setOpenId, "data-tsd-source": "/src/routes/live-visit.tsx:200:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PriorityLane, { title: "Priority 3 · Follow-up required", hint: "Tour done, family approval, comparison, token promised but unpaid.", tone: "warning", visits: followUp, now, onOpen: setOpenId, "data-tsd-source": "/src/routes/live-visit.tsx:201:11" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "alerts", className: "pt-4", "data-tsd-source": "/src/routes/live-visit.tsx:204:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-3", "data-tsd-source": "/src/routes/live-visit.tsx:205:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlertRail, { alerts, onOpen: /* @__PURE__ */ __name2((id) => setOpenId(id), "onOpen"), "data-tsd-source": "/src/routes/live-visit.tsx:205:33" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "metrics", className: "pt-4", "data-tsd-source": "/src/routes/live-visit.tsx:208:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MetricsPanel, { m: metrics, "data-tsd-source": "/src/routes/live-visit.tsx:208:55" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "playbook", className: "pt-4", "data-tsd-source": "/src/routes/live-visit.tsx:209:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PlaybookPanel, { "data-tsd-source": "/src/routes/live-visit.tsx:209:56" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VisitControlSheet, { visit: active, now, alternatives, coordinators, onClose: /* @__PURE__ */ __name2(() => setOpenId(null), "onClose"), "data-tsd-source": "/src/routes/live-visit.tsx:212:7" })
  ] });
}
__name(LiveVisitWarRoom, "LiveVisitWarRoom");
__name2(LiveVisitWarRoom, "LiveVisitWarRoom");
function Kpi({
  label,
  value,
  tone = "default"
}) {
  const toneCls = tone === "success" ? "text-success" : tone === "warning" ? "text-warning-foreground" : tone === "destructive" ? "text-destructive" : "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-2.5", "data-tsd-source": "/src/routes/live-visit.tsx:227:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wide text-muted-foreground", "data-tsd-source": "/src/routes/live-visit.tsx:228:7", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("text-xl font-semibold tabular-nums", toneCls), "data-tsd-source": "/src/routes/live-visit.tsx:229:7", children: value })
  ] });
}
__name(Kpi, "Kpi");
__name2(Kpi, "Kpi");
function BoardRow({
  cols,
  columns,
  now,
  onOpen,
  compact
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("grid gap-3", cols.length === 5 ? "grid-cols-1 md:grid-cols-3 xl:grid-cols-5" : "grid-cols-1 md:grid-cols-3 xl:grid-cols-5"), "data-tsd-source": "/src/routes/live-visit.tsx:244:5", children: cols.map((c) => {
    const list = columns.get(c) ?? [];
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-muted/20 p-2 space-y-2 min-h-[120px]", "data-tsd-source": "/src/routes/live-visit.tsx:248:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-0.5", "data-tsd-source": "/src/routes/live-visit.tsx:249:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10.5px] font-semibold tracking-wide text-muted-foreground", "data-tsd-source": "/src/routes/live-visit.tsx:250:15", children: COLUMN_LABEL[c] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[9px]", "data-tsd-source": "/src/routes/live-visit.tsx:251:15", children: list.length })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 max-h-[560px] overflow-y-auto pr-0.5", "data-tsd-source": "/src/routes/live-visit.tsx:253:13", children: list.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10.5px] text-muted-foreground px-1 py-2", "data-tsd-source": "/src/routes/live-visit.tsx:255:17", children: "Empty" }) : list.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsx(LiveVisitCard, { visit: v, now, onOpen, compact, "data-tsd-source": "/src/routes/live-visit.tsx:257:33" }, v.id)) })
    ] }, c);
  }) });
}
__name(BoardRow, "BoardRow");
__name2(BoardRow, "BoardRow");
function PriorityLane({
  title,
  hint,
  tone,
  visits,
  now,
  onOpen
}) {
  const border = tone === "success" ? "border-success/40" : tone === "destructive" ? "border-destructive/40" : "border-warning/40";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: cn("p-3 space-y-2 border", border), "data-tsd-source": "/src/routes/live-visit.tsx:275:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/routes/live-visit.tsx:276:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold", "data-tsd-source": "/src/routes/live-visit.tsx:277:9", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10.5px] text-muted-foreground", "data-tsd-source": "/src/routes/live-visit.tsx:278:9", children: hint })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 max-h-[600px] overflow-y-auto pr-0.5", "data-tsd-source": "/src/routes/live-visit.tsx:280:7", children: visits.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", "data-tsd-source": "/src/routes/live-visit.tsx:281:32", children: "Nothing here right now." }) : visits.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsx(LiveVisitCard, { visit: v, now, onOpen, "data-tsd-source": "/src/routes/live-visit.tsx:282:31" }, v.id)) })
  ] });
}
__name(PriorityLane, "PriorityLane");
__name2(PriorityLane, "PriorityLane");
function ScheduleVisitDialog({
  onScheduled
}) {
  const {
    leads,
    properties,
    tcms,
    scheduleTour
  } = useApp();
  const [open, setOpen] = reactExports.useState(false);
  const [leadId, setLeadId] = reactExports.useState("");
  const [propertyId, setPropertyId] = reactExports.useState("");
  const [tcmId, setTcmId] = reactExports.useState("");
  const [when, setWhen] = reactExports.useState("");
  const [room, setRoom] = reactExports.useState("");
  const [bed, setBed] = reactExports.useState("A");
  const canSave = leadId && propertyId && tcmId && when && room;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onOpenChange: setOpen, "data-tsd-source": "/src/routes/live-visit.tsx:303:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, "data-tsd-source": "/src/routes/live-visit.tsx:304:7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "h-8 text-xs", "data-tsd-source": "/src/routes/live-visit.tsx:305:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5 mr-1", "data-tsd-source": "/src/routes/live-visit.tsx:305:51" }),
      "Schedule visit"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-lg", "data-tsd-source": "/src/routes/live-visit.tsx:307:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { "data-tsd-source": "/src/routes/live-visit.tsx:308:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "text-base", "data-tsd-source": "/src/routes/live-visit.tsx:308:23", children: "Schedule a visit" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground -mt-2", "data-tsd-source": "/src/routes/live-visit.tsx:309:9", children: "A visit cannot be scheduled against a property alone — a room or bed preference is mandatory." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 pt-2", "data-tsd-source": "/src/routes/live-visit.tsx:312:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 col-span-2", "data-tsd-source": "/src/routes/live-visit.tsx:313:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px]", "data-tsd-source": "/src/routes/live-visit.tsx:314:13", children: "Customer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: leadId, onValueChange: setLeadId, "data-tsd-source": "/src/routes/live-visit.tsx:315:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 text-xs", "data-tsd-source": "/src/routes/live-visit.tsx:316:15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select lead", "data-tsd-source": "/src/routes/live-visit.tsx:316:54" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { "data-tsd-source": "/src/routes/live-visit.tsx:317:15", children: leads.slice(0, 60).map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: l.id, className: "text-xs", "data-tsd-source": "/src/routes/live-visit.tsx:317:61", children: [
              l.name,
              " · ",
              l.phone
            ] }, l.id)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", "data-tsd-source": "/src/routes/live-visit.tsx:320:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px]", "data-tsd-source": "/src/routes/live-visit.tsx:321:13", children: "Property" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: propertyId, onValueChange: setPropertyId, "data-tsd-source": "/src/routes/live-visit.tsx:322:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 text-xs", "data-tsd-source": "/src/routes/live-visit.tsx:323:15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Property", "data-tsd-source": "/src/routes/live-visit.tsx:323:54" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { "data-tsd-source": "/src/routes/live-visit.tsx:324:15", children: properties.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: p.id, className: "text-xs", "data-tsd-source": "/src/routes/live-visit.tsx:324:53", children: p.name }, p.id)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", "data-tsd-source": "/src/routes/live-visit.tsx:327:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px]", "data-tsd-source": "/src/routes/live-visit.tsx:328:13", children: "Tour coordinator" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: tcmId, onValueChange: setTcmId, "data-tsd-source": "/src/routes/live-visit.tsx:329:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 text-xs", "data-tsd-source": "/src/routes/live-visit.tsx:330:15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Coordinator", "data-tsd-source": "/src/routes/live-visit.tsx:330:54" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { "data-tsd-source": "/src/routes/live-visit.tsx:331:15", children: tcms.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: t.id, className: "text-xs", "data-tsd-source": "/src/routes/live-visit.tsx:331:47", children: t.name }, t.id)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", "data-tsd-source": "/src/routes/live-visit.tsx:334:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px]", "data-tsd-source": "/src/routes/live-visit.tsx:334:38", children: "Room" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: room, onChange: /* @__PURE__ */ __name2((e) => setRoom(e.target.value), "onChange"), placeholder: "204", className: "h-8 text-xs", "data-tsd-source": "/src/routes/live-visit.tsx:334:81" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", "data-tsd-source": "/src/routes/live-visit.tsx:335:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px]", "data-tsd-source": "/src/routes/live-visit.tsx:335:38", children: "Bed" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: bed, onChange: /* @__PURE__ */ __name2((e) => setBed(e.target.value), "onChange"), className: "h-8 text-xs", "data-tsd-source": "/src/routes/live-visit.tsx:335:80" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 col-span-2", "data-tsd-source": "/src/routes/live-visit.tsx:336:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px]", "data-tsd-source": "/src/routes/live-visit.tsx:336:49", children: "Date & time" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "datetime-local", value: when, onChange: /* @__PURE__ */ __name2((e) => setWhen(e.target.value), "onChange"), className: "h-8 text-xs", "data-tsd-source": "/src/routes/live-visit.tsx:336:103" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "h-8 text-xs mt-2", disabled: !canSave, onClick: /* @__PURE__ */ __name2(() => {
        const tour = scheduleTour({
          leadId,
          propertyId,
          tcmId,
          scheduledAt: new Date(when).toISOString()
        });
        const id = `lv-${tour.id}`;
        const lead = leads.find((l) => l.id === leadId);
        const prop = properties.find((p) => p.id === propertyId);
        const tcm = tcms.find((t) => t.id === tcmId);
        const owner = tcms.find((t) => t.id === lead?.assignedTcmId) ?? tcm;
        useLiveVisits.getState().seed({
          id,
          tourId: tour.id,
          leadId,
          customer: lead?.name ?? "Lead",
          phone: lead?.phone ?? "",
          scheduledAt: +new Date(when),
          propertyId,
          propertyName: prop?.name ?? "",
          propertyArea: prop?.area ?? "",
          roomNo: room,
          bedNo: bed,
          rent: prop?.pricePerBed ?? 0,
          budget: lead?.budget ?? 0,
          checkInDate: lead?.moveInDate ?? "",
          occupation: lead?.source ?? "—",
          decisionMaker: "Self",
          intent: lead?.intent ?? "warm",
          currentLocation: lead?.preferredArea ?? "—",
          leadOwnerId: owner?.id ?? "",
          leadOwner: owner?.name ?? "Unassigned",
          coordinatorId: tcmId,
          coordinator: tcm?.name ?? "Unassigned"
        });
        useLiveVisits.getState().logComms(id, "Scheduled — property name, location, time, coordinator number and visit expectations sent");
        setOpen(false);
        onScheduled();
      }, "onClick"), "data-tsd-source": "/src/routes/live-visit.tsx:338:9", children: "Schedule & push to War Room" })
    ] })
  ] });
}
__name(ScheduleVisitDialog, "ScheduleVisitDialog");
__name2(ScheduleVisitDialog, "ScheduleVisitDialog");
function LiveTourStrip({
  visits,
  now,
  onOpen
}) {
  const live = visits.filter((v) => v.tourStartedAt && !v.completedAt && v.stage !== "booked" && v.stage !== "lost");
  if (live.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-success/40 bg-success/10 p-3", "data-tsd-source": "/src/routes/live-visit.tsx:386:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", "data-tsd-source": "/src/routes/live-visit.tsx:387:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Radio, { className: "h-4 w-4 text-success animate-pulse", "data-tsd-source": "/src/routes/live-visit.tsx:388:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold", "data-tsd-source": "/src/routes/live-visit.tsx:389:9", children: [
        live.length,
        " visit",
        live.length > 1 ? "s" : "",
        " happening right now"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground ml-auto", "data-tsd-source": "/src/routes/live-visit.tsx:390:9", children: "Timers broadcast live to admin & owner feeds" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", "data-tsd-source": "/src/routes/live-visit.tsx:392:7", children: live.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: /* @__PURE__ */ __name2(() => onOpen(v.id), "onClick"), className: "flex items-center gap-2 rounded-lg border bg-card px-2.5 py-1.5 text-xs hover:border-success", "data-tsd-source": "/src/routes/live-visit.tsx:394:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", "data-tsd-source": "/src/routes/live-visit.tsx:399:13", children: v.customer }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground truncate max-w-32", "data-tsd-source": "/src/routes/live-visit.tsx:400:13", children: v.propertyName }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono tabular-nums text-success", "data-tsd-source": "/src/routes/live-visit.tsx:401:13", children: fmtDur(now - (v.tourStartedAt ?? now)) })
    ] }, v.id)) })
  ] });
}
__name(LiveTourStrip, "LiveTourStrip");
__name2(LiveTourStrip, "LiveTourStrip");
const SplitComponent = /* @__PURE__ */ __name2(() => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/live-visit.tsx:51:5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LiveVisitWarRoom, { "data-tsd-source": "/src/routes/live-visit.tsx:52:7" }) }), "SplitComponent");
export {
  SplitComponent as component
};
