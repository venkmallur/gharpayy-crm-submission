var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { t as timeLeft } from "./blocks-BquurJE3.mjs";
import { q as cn } from "./router-xBhBcQRf.mjs";
import { s as Clock } from "../_libs/lucide-react.mjs";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
const WEEK_MS = 7 * 24 * 60 * 60 * 1e3;
function demandScore(p, leads) {
  const viewScore = Math.min(50, p.pageViews / 200 * 50);
  const shareScore = Math.min(20, p.shares / 30 * 20);
  const matchingLeads = leads.filter(
    (l) => l.area === p.area && Math.abs(l.budget - p.basePrice) <= 3e3 && l.status !== "dead"
  ).length;
  const leadScore = Math.min(30, matchingLeads * 4);
  return Math.round(viewScore + shareScore + leadScore);
}
__name(demandScore, "demandScore");
__name2(demandScore, "demandScore");
function conversionScore(p, tours) {
  const propertyTours = tours.filter((t) => t.propertyName === p.name);
  if (propertyTours.length === 0) return 50;
  const completed = propertyTours.filter((t) => t.status === "completed").length;
  const bookings = propertyTours.filter(
    (t) => t.outcome === "booked" || t.outcome === "token-paid" || t.tokenPaid
  ).length;
  if (completed === 0) return 40;
  return Math.round(bookings / completed * 100);
}
__name(conversionScore, "conversionScore");
__name2(conversionScore, "conversionScore");
function velocityScore(p, rooms) {
  const propRooms = rooms.filter((r) => r.propertyId === p.id);
  const total = propRooms.reduce((s, r) => s + r.bedsTotal, 0);
  const occupied = propRooms.reduce((s, r) => s + r.bedsOccupied, 0);
  if (total === 0) return 0;
  const occupancy = occupied / total;
  return Math.round(occupancy * 70 + Math.min(30, p.pageViews / 10));
}
__name(velocityScore, "velocityScore");
__name2(velocityScore, "velocityScore");
function deriveSignal(demand, available, total) {
  const occupancy = total > 0 ? 1 - available / total : 0;
  if (demand >= 65 && occupancy >= 0.7) return "hot";
  if (demand <= 35 && occupancy <= 0.5) return "cold";
  return "balanced";
}
__name(deriveSignal, "deriveSignal");
__name2(deriveSignal, "deriveSignal");
function suggestActions(p, demand, conversion, velocity, available) {
  const out = [];
  if (demand >= 70 && conversion >= 60 && available > 0) out.push(`Raise price ₹500 — demand strong`);
  if (demand >= 70 && conversion < 50) out.push(`Fix conversion — top objection: ${p.foodRating < 3.5 ? "food quality" : "pricing"}`);
  if (demand < 40 && conversion >= 60) out.push(`Hidden gem — push reels & ads`);
  if (demand < 40 && conversion < 40) out.push(`Deprioritize — low demand & weak close`);
  if (available === 0) out.push(`Sold out — capture waitlist`);
  if (p.foodRating < 3.5) out.push(`Improve food rating (${p.foodRating}/5)`);
  if (p.photoCount < 6) out.push(`Add more photos (${p.photoCount} live)`);
  return out.slice(0, 3);
}
__name(suggestActions, "suggestActions");
__name2(suggestActions, "suggestActions");
function scoreProperty(p, rooms, tours, leads, blocks) {
  const propRooms = rooms.filter((r) => r.propertyId === p.id);
  const bedsTotal = propRooms.reduce((s, r) => s + r.bedsTotal, 0);
  const bedsOccupied = propRooms.reduce((s, r) => s + r.bedsOccupied, 0);
  const activeBlocks = blocks.filter(
    (b) => b.propertyId === p.id && b.status === "active" && new Date(b.expiresAt).getTime() > Date.now()
  );
  const bedsBlocked = activeBlocks.length;
  const bedsAvailable = Math.max(0, bedsTotal - bedsOccupied - bedsBlocked);
  const occupancyPct = bedsTotal > 0 ? Math.round(bedsOccupied / bedsTotal * 100) : 0;
  const demand = demandScore(p, leads);
  const conversion = conversionScore(p, tours);
  const velocity = velocityScore(p, propRooms);
  const signal = deriveSignal(demand, bedsAvailable, bedsTotal);
  const weekStart = Date.now() - WEEK_MS;
  const weekTours = tours.filter(
    (t) => t.propertyName === p.name && new Date(t.createdAt).getTime() >= weekStart
  );
  const weekBookings = weekTours.filter((t) => t.outcome === "booked" || t.outcome === "token-paid" || t.tokenPaid).length;
  const revenueWeek = weekBookings * p.basePrice;
  const lostTours = weekTours.filter((t) => t.outcome === "rejected" || t.outcome === "not-interested" || t.showUp === false).length;
  const missedRevenue = lostTours * p.basePrice;
  return {
    propertyId: p.id,
    demandScore: demand,
    conversionScore: conversion,
    velocityScore: velocity,
    signal,
    bedsTotal,
    bedsOccupied,
    bedsBlocked,
    bedsAvailable,
    occupancyPct,
    revenueWeek,
    missedRevenue,
    suggestedActions: suggestActions(p, demand, conversion, velocity, bedsAvailable)
  };
}
__name(scoreProperty, "scoreProperty");
__name2(scoreProperty, "scoreProperty");
function budgetPowerScore(leadBudget, zoneMedian) {
  if (zoneMedian <= 0) return 50;
  const ratio = leadBudget / zoneMedian;
  if (ratio >= 1.3) return 95;
  if (ratio >= 1.1) return 80;
  if (ratio >= 0.95) return 65;
  if (ratio >= 0.8) return 45;
  return 25;
}
__name(budgetPowerScore, "budgetPowerScore");
__name2(budgetPowerScore, "budgetPowerScore");
function urgencyExpiry(intent, createdAt) {
  const created = new Date(createdAt).getTime();
  const hours = intent === "hard" ? 2 : intent === "medium" ? 8 : 24;
  return new Date(created + hours * 60 * 60 * 1e3).toISOString();
}
__name(urgencyExpiry, "urgencyExpiry");
__name2(urgencyExpiry, "urgencyExpiry");
function conversionProbability(budgetPower, intent, willBook) {
  let score = budgetPower * 0.4;
  score += intent === "hard" ? 40 : intent === "medium" ? 25 : 10;
  return Math.max(0, Math.min(100, Math.round(score)));
}
__name(conversionProbability, "conversionProbability");
__name2(conversionProbability, "conversionProbability");
function zoneMedianBudget(leads, area) {
  const inZone = leads.filter((l) => l.area === area).map((l) => l.budget).sort((a, b) => a - b);
  if (inZone.length === 0) return 12e3;
  return inZone[Math.floor(inZone.length / 2)];
}
__name(zoneMedianBudget, "zoneMedianBudget");
__name2(zoneMedianBudget, "zoneMedianBudget");
function leadIntent(lead) {
  if (!lead.mytQualified) return "soft";
  const days = (new Date(lead.moveInDate).getTime() - Date.now()) / (1e3 * 60 * 60 * 24);
  if (days <= 5 && lead.dateConfirmed) return "hard";
  if (days <= 12) return "medium";
  return "soft";
}
__name(leadIntent, "leadIntent");
__name2(leadIntent, "leadIntent");
function UrgencyTimer({ expiresAt, className }) {
  const [, setTick] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const id = setInterval(() => setTick((t2) => t2 + 1), 3e4);
    return () => clearInterval(id);
  }, []);
  const t = timeLeft(expiresAt);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: cn(
    "inline-flex items-center gap-1 text-[11px] font-mono font-medium tabular-nums",
    t.expired ? "text-muted-foreground" : t.mins <= 30 ? "text-danger animate-pulse" : t.mins <= 90 ? "text-role-hr" : "text-foreground",
    className
  ), "data-tsd-source": "/src/myt/components/UrgencyTimer.tsx:15:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3", "data-tsd-source": "/src/myt/components/UrgencyTimer.tsx:20:7" }),
    t.label
  ] });
}
__name(UrgencyTimer, "UrgencyTimer");
__name2(UrgencyTimer, "UrgencyTimer");
export {
  UrgencyTimer as U,
  budgetPowerScore as b,
  conversionProbability as c,
  leadIntent as l,
  scoreProperty as s,
  urgencyExpiry as u,
  zoneMedianBudget as z
};
