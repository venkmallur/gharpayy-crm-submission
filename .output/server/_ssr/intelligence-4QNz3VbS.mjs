var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
function detectMismatches(tour, feedback, report) {
  const out = [];
  if (!feedback || !report) return out;
  if (feedback.sentiment === "not_fit" && report.interestLevel === "high") {
    out.push({ tourId: tour.id, severity: "high", reason: "Customer: not a fit · TCM: high interest" });
  }
  if (feedback.sentiment === "loved" && report.interestLevel === "low") {
    out.push({ tourId: tour.id, severity: "med", reason: "Customer: loved · TCM: low interest" });
  }
  const priceWords = (feedback.comment ?? "").toLowerCase();
  if ((priceWords.includes("expensive") || priceWords.includes("costly") || priceWords.includes("too much")) && report.budgetAlignment === "exact") {
    out.push({ tourId: tour.id, severity: "high", reason: "Customer: too expensive · TCM: budget exact match" });
  }
  if (feedback.sentiment === "need_better" && (report.outcome === "booked" || report.outcome === "hot")) {
    out.push({ tourId: tour.id, severity: "high", reason: `Customer: need better options · TCM: ${report.outcome}` });
  }
  return out;
}
__name(detectMismatches, "detectMismatches");
__name2(detectMismatches, "detectMismatches");
function computeTourScore(tour, events, weights, feedback, report) {
  const has = /* @__PURE__ */ __name2((k) => events.some((e) => e.kind === k), "has");
  const confirmation = has("confirmed_by_customer") ? 1 : has("confirmation_sent") ? 0.4 : 0;
  const showUp = tour.status === "completed" || has("tour_started") ? 1 : tour.showUp === false || has("no_show") ? 0 : 0.3;
  const engagement = Math.min(
    1,
    (feedback?.comment ? 0.5 : 0) + (report?.firstObjection ? 0.3 : 0) + (report?.priceReactionWords ? 0.2 : 0)
  );
  const fitMap = { exact: 1, stretch: 0.6, mismatch: 0.1 };
  const propertyFit = report ? fitMap[report.budgetAlignment] : 0.5;
  const tcmReportQuality = report ? Math.min(
    1,
    0.3 + (report.firstObjection ? 0.2 : 0) + (report.priceReactionWords ? 0.2 : 0) + (report.nextStep ? 0.2 : 0) + (report.notes ? 0.1 : 0)
  ) : 0;
  const outcomeMap = { booked: 1, hot: 0.8, warm: 0.5, cold: 0.2, dropped: 0 };
  const conversionLikelihood = report ? outcomeMap[report.outcome] ?? 0.3 : tour.tokenPaid ? 1 : 0.3;
  const factors = {
    confirmation,
    showUp,
    engagement,
    propertyFit,
    tcmReportQuality,
    conversionLikelihood
  };
  const parts = {};
  let total = 0;
  Object.keys(weights).forEach((k) => {
    const earned = Math.round(factors[k] * weights[k]);
    parts[k] = { earned, max: weights[k] };
    total += earned;
  });
  return { total: Math.min(100, total), parts };
}
__name(computeTourScore, "computeTourScore");
__name2(computeTourScore, "computeTourScore");
export {
  computeTourScore as c,
  detectMismatches as d
};
