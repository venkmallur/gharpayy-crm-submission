var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
const DAY = 864e5;
function computeMoneyMap(rows) {
  const now = Date.now();
  let booked = 0, pipeline = 0, walking = 0, atRisk = 0, hot = 0;
  for (const r of rows) {
    const annual = (r.bookings[0]?.amount ?? r.lead.budget) * 12;
    if (r.booked) booked += annual;
    else if (r.status === "lost") {
      if (now - r.lastTouchTs <= 30 * DAY) walking += r.lead.budget * 12;
    } else {
      pipeline += r.expectedValue;
      if (r.probability >= 70) hot += r.expectedValue;
      const stale = now - r.lastTouchTs > 3 * DAY;
      if (stale) atRisk += r.expectedValue;
    }
  }
  return { bookedRevenue: booked, pipelineRevenue: pipeline, walkingRevenue: walking, atRiskRevenue: atRisk, hotRevenue: hot };
}
__name(computeMoneyMap, "computeMoneyMap");
__name2(computeMoneyMap, "computeMoneyMap");
function computeTcmHealth(rows) {
  const now = Date.now();
  const by = /* @__PURE__ */ new Map();
  rows.forEach((r) => {
    const id = r.lead.assignedTcmId;
    if (!id) return;
    (by.get(id) ?? by.set(id, []).get(id)).push(r);
  });
  const out = [];
  by.forEach((rs, id) => {
    const open = rs.filter((r) => r.status === "open").length;
    const hot = rs.filter((r) => r.probability >= 70 && !r.booked).length;
    const dormant = rs.filter((r) => r.status === "dormant").length;
    const booked = rs.filter((r) => r.booked).length;
    const lost = rs.filter((r) => r.status === "lost").length;
    const pipelineValue = rs.reduce((s, r) => s + r.expectedValue, 0);
    const ages = rs.filter((r) => !r.booked && r.status !== "lost").map((r) => (now - r.lastTouchTs) / DAY);
    const avgAgeDays = ages.length ? Math.round(ages.reduce((a, b) => a + b, 0) / ages.length) : 0;
    const conversion = booked + lost ? booked / (booked + lost) : 0;
    const loadScore = Math.min(100, open * 4 + dormant * 2);
    const riskFlag = loadScore > 80 || dormant > 8 ? "burn" : loadScore > 55 || dormant > 4 ? "watch" : "ok";
    out.push({
      tcmId: id,
      name: rs[0].tcm?.name ?? id,
      open,
      hot,
      dormant,
      booked,
      lost,
      conversion,
      pipelineValue,
      avgAgeDays,
      loadScore,
      riskFlag
    });
  });
  return out.sort((a, b) => b.pipelineValue - a.pipelineValue);
}
__name(computeTcmHealth, "computeTcmHealth");
__name2(computeTcmHealth, "computeTcmHealth");
function computeAreaPulse(rows) {
  const by = /* @__PURE__ */ new Map();
  rows.forEach((r) => {
    const area = r.lead.preferredArea || "Unknown";
    (by.get(area) ?? by.set(area, []).get(area)).push(r);
  });
  const out = [];
  by.forEach((rs, area) => {
    const booked = rs.filter((r) => r.booked).length;
    const lost = rs.filter((r) => r.status === "lost").length;
    const hot = rs.filter((r) => r.probability >= 70 && !r.booked).length;
    const revenue = rs.reduce((s, r) => s + (r.booked ? (r.bookings[0]?.amount ?? r.lead.budget) * 12 : 0), 0);
    const objs = /* @__PURE__ */ new Map();
    rs.forEach((r) => r.objections.filter((o) => o.code !== "none").forEach((o) => objs.set(o.code, (objs.get(o.code) ?? 0) + 1)));
    const topObjection = [...objs.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? "—";
    out.push({
      area,
      leads: rs.length,
      booked,
      hot,
      lostRate: rs.length ? lost / rs.length : 0,
      revenue,
      topObjection
    });
  });
  return out.sort((a, b) => b.leads - a.leads);
}
__name(computeAreaPulse, "computeAreaPulse");
__name2(computeAreaPulse, "computeAreaPulse");
function computeSourceROI(rows) {
  const by = /* @__PURE__ */ new Map();
  rows.forEach((r) => {
    const s = r.lead.source || "unknown";
    (by.get(s) ?? by.set(s, []).get(s)).push(r);
  });
  const out = [];
  by.forEach((rs, source) => {
    const booked = rs.filter((r) => r.booked).length;
    const revenue = rs.reduce((s, r) => s + (r.booked ? (r.bookings[0]?.amount ?? r.lead.budget) * 12 : 0), 0);
    const avgBudget = Math.round(rs.reduce((s, r) => s + (r.lead.budget || 0), 0) / Math.max(1, rs.length));
    out.push({ source, leads: rs.length, booked, cvr: rs.length ? booked / rs.length : 0, revenue, avgBudget });
  });
  return out.sort((a, b) => b.revenue - a.revenue);
}
__name(computeSourceROI, "computeSourceROI");
__name2(computeSourceROI, "computeSourceROI");
function collectVoiceOfCustomer(rows, limit = 12) {
  const quotes = [];
  rows.forEach((r) => {
    r.objections.forEach((o) => {
      if (!o.leadWords || o.code === "none") return;
      quotes.push({
        leadId: r.lead.id,
        leadName: r.lead.name,
        text: o.leadWords,
        sentiment: o.resolution === "yes" ? "neutral" : "negative",
        ts: +new Date(o.ts)
      });
    });
    r.visits.forEach((v) => {
      if (v.lostReason) quotes.push({ leadId: r.lead.id, leadName: r.lead.name, text: String(v.lostReason), sentiment: "negative", ts: v.completedAt ?? v.scheduledAt });
    });
  });
  return quotes.sort((a, b) => b.ts - a.ts).slice(0, limit);
}
__name(collectVoiceOfCustomer, "collectVoiceOfCustomer");
__name2(collectVoiceOfCustomer, "collectVoiceOfCustomer");
function computeSlaBreaches(rows) {
  const now = Date.now();
  const out = [];
  rows.forEach((r) => {
    if (r.booked || r.status === "lost") return;
    const ageHrs = (now - r.lastTouchTs) / 36e5;
    if (r.lead.stage === "new" && ageHrs > 1) {
      out.push({ leadId: r.lead.id, leadName: r.lead.name, tcm: r.tcm?.name ?? "—", type: "first-response", ageHrs, probability: r.probability, expectedValue: r.expectedValue });
    } else if (r.lead.stage === "tour-done" && ageHrs > 24) {
      out.push({ leadId: r.lead.id, leadName: r.lead.name, tcm: r.tcm?.name ?? "—", type: "post-tour", ageHrs, probability: r.probability, expectedValue: r.expectedValue });
    } else if (r.followUps.some((f) => !f.done && +new Date(f.dueAt) < now)) {
      out.push({ leadId: r.lead.id, leadName: r.lead.name, tcm: r.tcm?.name ?? "—", type: "follow-up", ageHrs, probability: r.probability, expectedValue: r.expectedValue });
    }
  });
  return out.sort((a, b) => b.expectedValue - a.expectedValue).slice(0, 25);
}
__name(computeSlaBreaches, "computeSlaBreaches");
__name2(computeSlaBreaches, "computeSlaBreaches");
export {
  computeSlaBreaches as a,
  computeTcmHealth as b,
  computeMoneyMap as c,
  computeAreaPulse as d,
  computeSourceROI as e,
  collectVoiceOfCustomer as f
};
