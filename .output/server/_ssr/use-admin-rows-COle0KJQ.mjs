var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { r as reactExports } from "../_libs/react.mjs";
import { u as useApp, b as useVisitWar } from "./router-xBhBcQRf.mjs";
import { u as useCRM10x } from "./store-CzExz6PU.mjs";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
const DAY = 864e5;
function joinAdmin(src) {
  const now = Date.now();
  const toursByLead = groupBy(src.tours, (t) => t.leadId);
  const visitsByLead = Object.values(src.visits).reduce((acc, v) => {
    (acc[v.leadId] ||= []).push(v);
    return acc;
  }, {});
  const bookingsByLead = groupBy(src.bookings, (b) => b.leadId);
  const callsByLead = groupBy(src.calls, (c) => c.leadId);
  const objByLead = groupBy(src.objections, (o) => o.leadId);
  const msgByLead = groupBy(src.messageOutcomes, (m) => m.leadId);
  const asgByLead = groupBy(src.assignments, (a) => a.leadId);
  const cnByLead = groupBy(src.coachingNotes, (c) => c.leadId);
  const fuByLead = groupBy(src.followUps, (f) => f.leadId);
  return src.leads.map((lead) => {
    const tcm = src.tcms.find((t) => t.id === lead.assignedTcmId);
    const tours = toursByLead[lead.id] ?? [];
    const visits = visitsByLead[lead.id] ?? [];
    const bookings = bookingsByLead[lead.id] ?? [];
    const calls = callsByLead[lead.id] ?? [];
    const objections = (objByLead[lead.id] ?? []).slice().sort((a, b) => +new Date(b.ts) - +new Date(a.ts));
    const messages = msgByLead[lead.id] ?? [];
    const assignments = asgByLead[lead.id] ?? [];
    const coachNotes = cnByLead[lead.id] ?? [];
    const followUps = fuByLead[lead.id] ?? [];
    const lastObjection = objections.find((o) => o.code !== "none");
    const lastTouchTs = Math.max(
      +new Date(lead.updatedAt),
      ...tours.map((t) => +new Date(t.updatedAt)),
      ...calls.map((c) => +new Date(c.ts)),
      ...messages.map((m) => +new Date(m.ts)),
      ...objections.map((o) => +new Date(o.ts))
    );
    const probability = computeProbability(lead, tours, visits, objections, calls.length);
    const expectedValue = computeExpectedValue(lead, probability);
    const booked = lead.stage === "booked" || bookings.length > 0;
    const ageDays = Math.floor((now - lastTouchTs) / DAY);
    const dormantBucket = ageDays >= 90 ? "90d" : ageDays >= 60 ? "60d" : ageDays >= 30 ? "30d" : null;
    const status = booked ? "booked" : lead.stage === "dropped" ? "lost" : dormantBucket ? "dormant" : "open";
    return {
      lead,
      tcm,
      profile: src.profiles[lead.id],
      tours,
      visits,
      bookings,
      calls,
      objections,
      messages,
      assignments,
      coachNotes,
      followUps,
      lastTouchTs,
      lastObjection,
      probability,
      expectedValue,
      whyNotClosed: deriveWhyNotClosed({ lead, tours, visits, calls, ageDays, booked, lastObjection }),
      status,
      hasVisit: visits.length > 0 || tours.length > 0,
      booked,
      dormantBucket,
      reassignedCount: assignments.length
    };
  });
}
__name(joinAdmin, "joinAdmin");
__name2(joinAdmin, "joinAdmin");
function computeProbability(lead, tours, visits, objs, callCount) {
  let p = lead.confidence ?? 0;
  if (lead.stage === "booked") return 100;
  if (lead.stage === "dropped") return 0;
  if (lead.stage === "negotiation") p = Math.max(p, 70);
  if (lead.stage === "tour-done") p = Math.max(p, 55);
  if (lead.stage === "tour-scheduled") p = Math.max(p, 40);
  if (visits.some((v) => v.stage === "booked")) return 100;
  if (visits.some((v) => v.outcome === "thinking")) p = Math.max(p, 60);
  if (visits.some((v) => v.outcome === "lost")) p = 5;
  const unresolved = objs.filter((o) => o.resolution !== "yes" && o.code !== "none").length;
  p = Math.max(0, p - unresolved * 8);
  if (callCount > 5) p = Math.max(0, p - 5);
  return Math.max(0, Math.min(100, Math.round(p)));
}
__name(computeProbability, "computeProbability");
__name2(computeProbability, "computeProbability");
function computeExpectedValue(lead, probability) {
  return Math.round((lead.budget || 0) * 12 * (probability / 100));
}
__name(computeExpectedValue, "computeExpectedValue");
__name2(computeExpectedValue, "computeExpectedValue");
function deriveWhyNotClosed(args) {
  const { lead, tours, visits, calls, ageDays, booked, lastObjection } = args;
  if (booked) return "—";
  if (lead.stage === "dropped") {
    const lost = visits.find((v) => v.lostReason);
    return `Dropped${lost?.lostReason ? ` · ${lost.lostReason}` : ""}`;
  }
  if (lastObjection && lastObjection.resolution !== "yes") {
    return `Objection unresolved · ${lastObjection.code}`;
  }
  if (lead.stage === "negotiation") return "Stuck in negotiation — needs token push";
  if (lead.stage === "tour-done") return "Post-tour follow-up overdue";
  if (lead.stage === "tour-scheduled") {
    const t = tours[0];
    if (t && +new Date(t.scheduledAt) < Date.now()) return "Tour date passed — needs reschedule";
    return "Awaiting tour";
  }
  if (lead.stage === "contacted" && calls.length === 0) return "Contacted but never called";
  if (lead.stage === "new") return ageDays > 1 ? `New for ${ageDays}d — never contacted` : "Fresh lead";
  if (ageDays >= 30) return `Dormant ${ageDays}d — no touch`;
  return "Active — keep nurturing";
}
__name(deriveWhyNotClosed, "deriveWhyNotClosed");
__name2(deriveWhyNotClosed, "deriveWhyNotClosed");
function groupBy(arr, key) {
  const out = {};
  arr.forEach((item) => {
    const k = key(item);
    if (!k) return;
    (out[k] ||= []).push(item);
  });
  return out;
}
__name(groupBy, "groupBy");
__name2(groupBy, "groupBy");
function summarizeWhyNotClosing(rows) {
  const open = rows.filter((r) => r.status === "open" || r.status === "dormant");
  const counts = /* @__PURE__ */ new Map();
  open.forEach((r) => {
    const k = r.whyNotClosed.split(" · ")[0];
    counts.set(k, (counts.get(k) ?? 0) + 1);
  });
  return [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 6).map(([reason, count]) => ({ reason, count }));
}
__name(summarizeWhyNotClosing, "summarizeWhyNotClosing");
__name2(summarizeWhyNotClosing, "summarizeWhyNotClosing");
function summarizeTopObjections(objs) {
  const counts = /* @__PURE__ */ new Map();
  objs.filter((o) => o.code !== "none").forEach((o) => {
    counts.set(o.code, (counts.get(o.code) ?? 0) + 1);
  });
  return [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 8).map(([code, count]) => ({ code, count }));
}
__name(summarizeTopObjections, "summarizeTopObjections");
__name2(summarizeTopObjections, "summarizeTopObjections");
function useAdminRows() {
  const { leads, tours, tcms, bookings, followUps } = useApp();
  const crm = useCRM10x();
  const visits = useVisitWar((s) => s.records);
  return reactExports.useMemo(() => joinAdmin({
    leads,
    tours,
    tcms,
    bookings,
    followUps,
    profiles: crm.profiles,
    objections: crm.objections,
    calls: crm.calls,
    visits,
    assignments: crm.assignments,
    coachingNotes: crm.coachingNotes,
    messageOutcomes: crm.messageOutcomes
  }), [leads, tours, tcms, bookings, followUps, crm.profiles, crm.objections, crm.calls, visits, crm.assignments, crm.coachingNotes, crm.messageOutcomes]);
}
__name(useAdminRows, "useAdminRows");
__name2(useAdminRows, "useAdminRows");
export {
  summarizeTopObjections as a,
  summarizeWhyNotClosing as s,
  useAdminRows as u
};
