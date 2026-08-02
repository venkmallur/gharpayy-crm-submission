var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
const STAGE_ORDER = [
  "new",
  "contacted",
  "tour-scheduled",
  "tour-done",
  "negotiation",
  "booked"
];
function funnelVelocity(leads) {
  return STAGE_ORDER.slice(0, -1).map((from, i) => {
    const to = STAGE_ORDER[i + 1];
    const reachedFrom = leads.filter((l) => STAGE_ORDER.indexOf(l.stage) >= i);
    const reachedTo = leads.filter((l) => STAGE_ORDER.indexOf(l.stage) >= i + 1);
    const sample = reachedFrom.length;
    const cohortConv = sample === 0 ? 0 : Math.round(reachedTo.length / sample * 100);
    const dropOffPct = 100 - cohortConv;
    const advanced = reachedTo;
    const avgDays = advanced.length === 0 ? 0 : Math.round(
      advanced.reduce((acc, l) => acc + (+new Date(l.updatedAt) - +new Date(l.createdAt)) / 864e5, 0) / advanced.length / Math.max(1, i + 1)
    );
    return { fromStage: from, toStage: to, avgDays, sample, dropOffPct, cohortConv };
  });
}
__name(funnelVelocity, "funnelVelocity");
__name2(funnelVelocity, "funnelVelocity");
function objectionLossCorrelation(leads, objections) {
  const byCode = /* @__PURE__ */ new Map();
  objections.filter((o) => o.code !== "none").forEach((o) => {
    const arr = byCode.get(o.code) ?? [];
    arr.push(o);
    byCode.set(o.code, arr);
  });
  const rows = [];
  byCode.forEach((records, code) => {
    const leadIds = new Set(records.map((r) => r.leadId));
    const cohort = leads.filter((l) => leadIds.has(l.id));
    const lost = cohort.filter((l) => l.stage === "dropped").length;
    const booked = cohort.filter((l) => l.stage === "booked").length;
    rows.push({
      code,
      raised: cohort.length,
      lost,
      booked,
      lossRate: cohort.length === 0 ? 0 : Math.round(lost / cohort.length * 100)
    });
  });
  return rows.sort((a, b) => b.lossRate - a.lossRate);
}
__name(objectionLossCorrelation, "objectionLossCorrelation");
__name2(objectionLossCorrelation, "objectionLossCorrelation");
function agentCohort(tcms, leads, calls, objections) {
  const rows = tcms.map((t) => {
    const myLeads = leads.filter((l) => l.assignedTcmId === t.id);
    const myBookings = myLeads.filter((l) => l.stage === "booked").length;
    const myCalls = calls.filter((c) => myLeads.some((l) => l.id === c.leadId));
    const myObj = objections.filter((o) => myLeads.some((l) => l.id === o.leadId));
    const resolved = myObj.filter((o) => o.resolution === "yes").length;
    const avgResp = myLeads.length === 0 ? 0 : Math.round(myLeads.reduce((acc, l) => acc + l.responseSpeedMins, 0) / myLeads.length);
    return {
      tcmId: t.id,
      name: t.name,
      zone: t.zone,
      leads: myLeads.length,
      bookings: myBookings,
      conv: myLeads.length === 0 ? 0 : Math.round(myBookings / myLeads.length * 100),
      objectionsLogged: myObj.length,
      objectionsResolved: resolved,
      resolutionRate: myObj.length === 0 ? 0 : Math.round(resolved / myObj.length * 100),
      callsPerLead: myLeads.length === 0 ? 0 : +(myCalls.length / myLeads.length).toFixed(1),
      avgFirstResponseMins: avgResp,
      cohortRank: 0
    };
  });
  const scored = rows.map((r) => ({
    ...r,
    _score: r.conv * 0.6 + r.resolutionRate * 0.25 + Math.max(0, 100 - r.avgFirstResponseMins * 4) * 0.15
  }));
  scored.sort((a, b) => b._score - a._score);
  return scored.map((r, i) => ({ ...r, cohortRank: i + 1, _score: void 0 }));
}
__name(agentCohort, "agentCohort");
__name2(agentCohort, "agentCohort");
function weeklyRecommendations(input) {
  const recs = [];
  const worstStage = [...input.funnel].sort((a, b) => a.cohortConv - b.cohortConv)[0];
  if (worstStage && worstStage.cohortConv < 35 && worstStage.sample >= 3) {
    recs.push({
      id: "funnel-bottleneck",
      priority: worstStage.cohortConv < 20 ? "critical" : "high",
      title: `Fix ${worstStage.fromStage} → ${worstStage.toStage}`,
      detail: `Only ${worstStage.cohortConv}% of leads cross this stage (${worstStage.sample} sample). This is your single biggest revenue leak.`,
      expectedImpact: `Lifting this 15pp adds ~${Math.round(worstStage.sample * 0.15)} bookings.`
    });
  }
  const objLoss = objectionLossCorrelation(input.leads, input.objections);
  const topObj = objLoss[0];
  if (topObj && topObj.lossRate >= 50 && topObj.raised >= 3) {
    recs.push({
      id: "objection-killer",
      priority: "high",
      title: `Address "${topObj.code}" objection`,
      detail: `${topObj.lossRate}% of leads who raised this dropped (${topObj.lost}/${topObj.raised}). Build a counter-script + train all TCMs this week.`,
      expectedImpact: `Reducing loss by half saves ~${Math.round(topObj.lost / 2)} leads.`
    });
  }
  const sorted = [...input.agents].filter((a) => a.leads >= 3).sort((a, b) => a.conv - b.conv);
  const worst = sorted[0];
  const best = sorted[sorted.length - 1];
  if (worst && best && best.conv - worst.conv > 15) {
    recs.push({
      id: "agent-coaching",
      priority: "medium",
      title: `Coach ${worst.name}`,
      detail: `${worst.name} converts at ${worst.conv}% vs ${best.name} at ${best.conv}%. Same zone challenge — ride along on 3 calls.`,
      expectedImpact: `Closing half the gap = +${Math.round((best.conv - worst.conv) / 2)}pp on ${worst.leads} leads.`
    });
  }
  const idle = input.leads.filter(
    (l) => l.stage === "new" && Date.now() - +new Date(l.createdAt) > 24 * 36e5
  );
  if (idle.length >= 3) {
    recs.push({
      id: "first-response",
      priority: "critical",
      title: `${idle.length} leads never contacted (24h+)`,
      detail: `These are guaranteed losses if not called today. Highest-intent leads decay fastest in the first 24h.`,
      expectedImpact: `Industry data: every hour of delay = -10% conversion.`
    });
  }
  return recs.slice(0, 6);
}
__name(weeklyRecommendations, "weeklyRecommendations");
__name2(weeklyRecommendations, "weeklyRecommendations");
function zoneSnapshots(input) {
  const { zones, tcms, leads, bookings } = input;
  return zones.map((z) => {
    const zoneTcms = tcms.filter((t) => z.tcmIds.includes(t.id));
    const myLeads = leads.filter((l) => z.tcmIds.includes(l.assignedTcmId));
    const active = myLeads.filter((l) => l.stage !== "booked" && l.stage !== "dropped");
    const myBookings = bookings.filter((b) => z.tcmIds.includes(b.tcmId));
    const revenueINR = myBookings.reduce((acc, b) => acc + b.amount, 0);
    const conv = myLeads.length === 0 ? 0 : Math.round(myBookings.length / myLeads.length * 100);
    const avgResp = myLeads.length === 0 ? 0 : Math.round(myLeads.reduce((a, l) => a + l.responseSpeedMins, 0) / myLeads.length);
    const loadPerTcm = zoneTcms.length === 0 ? active.length : +(active.length / zoneTcms.length).toFixed(1);
    const slaBreaches = myLeads.filter(
      (l) => l.stage === "new" && Date.now() - +new Date(l.createdAt) > 24 * 36e5
    ).length;
    let pressureLevel = "balanced";
    let recommendation = "Holding steady — monitor weekly.";
    if (zoneTcms.length === 0 && myLeads.length > 0) {
      pressureLevel = "leaking";
      recommendation = `No TCMs assigned to ${z.name}. Reassign existing leads or hire.`;
    } else if (loadPerTcm > 25) {
      pressureLevel = "overloaded";
      recommendation = `Load ${loadPerTcm}/TCM is high. Add 1 TCM or rebalance ~${Math.round(active.length - 25 * zoneTcms.length)} leads.`;
    } else if (loadPerTcm < 5 && active.length > 0) {
      pressureLevel = "underloaded";
      recommendation = `Capacity available — pull leads from overloaded zones or boost demand.`;
    } else if (slaBreaches >= 3) {
      pressureLevel = "leaking";
      recommendation = `${slaBreaches} leads never contacted 24h+. Hard SLA breach — escalate today.`;
    } else if (conv < 15 && myLeads.length >= 5) {
      pressureLevel = "leaking";
      recommendation = `Conversion ${conv}% is low. Audit calls + objections this week.`;
    }
    return {
      zoneId: z.id,
      zoneName: z.name,
      city: z.city,
      tcmIds: z.tcmIds,
      leadCount: myLeads.length,
      activeLeads: active.length,
      bookings: myBookings.length,
      revenueINR,
      conversion: conv,
      avgFirstResponseMins: avgResp,
      loadPerTcm,
      slaBreaches,
      recommendation,
      pressureLevel
    };
  });
}
__name(zoneSnapshots, "zoneSnapshots");
__name2(zoneSnapshots, "zoneSnapshots");
function recommendTemplate(input) {
  const { lead, tours, lastContactDays } = input;
  const completedTour = tours.find((t) => t.status === "completed");
  const upcomingTour = tours.find((t) => t.status === "scheduled");
  const moveDays = (+new Date(lead.moveInDate) - Date.now()) / 864e5;
  if (lead.stage === "booked") {
    return { stage: "booking-confirm", reason: "Lead just booked — send confirmation + welcome.", urgency: "high" };
  }
  if (upcomingTour) {
    return { stage: "visit-confirm", reason: "Upcoming visit — auto-confirm to reduce no-show.", urgency: "high" };
  }
  if (completedTour && lastContactDays >= 1) {
    return { stage: "post-visit", reason: "Tour done — check reaction + push for decision.", urgency: "high" };
  }
  if (lead.stage === "negotiation") {
    return { stage: "price-offer", reason: "In negotiation — send time-bound price offer.", urgency: "high" };
  }
  if (lead.stage === "new" || lastContactDays === Infinity) {
    return { stage: "first-intro", reason: "First touch — open with intro + budget hook.", urgency: "high" };
  }
  if (lastContactDays >= 90) {
    return { stage: "revival-90d", reason: "Cold 90d+ — last-attempt revival.", urgency: "low" };
  }
  if (lastContactDays >= 60) {
    return { stage: "revival-60d", reason: "Cold 60d — fresh inventory bait.", urgency: "low" };
  }
  if (lastContactDays >= 30) {
    return { stage: "revival-30d", reason: "Cold 30d — re-engage with price-drop angle.", urgency: "medium" };
  }
  if (moveDays <= 7) {
    return { stage: "follow-up", reason: "Move-in close — push follow-up before they decide elsewhere.", urgency: "high" };
  }
  return { stage: "follow-up", reason: "Standard follow-up cadence.", urgency: "medium" };
}
__name(recommendTemplate, "recommendTemplate");
__name2(recommendTemplate, "recommendTemplate");
function templatePerformance(outcomes) {
  const byStage = /* @__PURE__ */ new Map();
  outcomes.forEach((m) => {
    const arr = byStage.get(m.stage) ?? [];
    arr.push(m);
    byStage.set(m.stage, arr);
  });
  const rows = [];
  byStage.forEach((records, stage) => {
    const sent = records.length;
    const replies = records.filter((r) => r.replied).length;
    const bookings = records.filter((r) => r.bookedAfter).length;
    rows.push({
      stage,
      sent,
      replies,
      bookings,
      replyRate: sent === 0 ? 0 : Math.round(replies / sent * 100),
      bookRate: sent === 0 ? 0 : Math.round(bookings / sent * 100)
    });
  });
  return rows.sort((a, b) => b.bookRate - a.bookRate);
}
__name(templatePerformance, "templatePerformance");
__name2(templatePerformance, "templatePerformance");
export {
  agentCohort as a,
  funnelVelocity as f,
  objectionLossCorrelation as o,
  recommendTemplate as r,
  templatePerformance as t,
  weeklyRecommendations as w,
  zoneSnapshots as z
};
