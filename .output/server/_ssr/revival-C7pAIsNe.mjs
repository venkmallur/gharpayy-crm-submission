var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
function scanRevivals(leads, properties, tours, now) {
  const out = [];
  for (const lead of leads) {
    const silentHrs = (now - +new Date(lead.updatedAt)) / 36e5;
    if ((lead.intent === "hot" || lead.intent === "warm") && silentHrs >= 48 && lead.stage !== "booked" && lead.stage !== "dropped") {
      out.push({
        leadId: lead.id,
        reason: `${lead.intent === "hot" ? "Hot" : "Warm"} lead silent ${Math.round(silentHrs / 24)}d`,
        score: lead.intent === "hot" ? 90 : 60,
        signal: "hot-silent"
      });
      continue;
    }
    if ((lead.stage === "dropped" || lead.intent === "cold") && silentHrs >= 7 * 24) {
      const match = properties.find(
        (p) => p.area.toLowerCase() === lead.preferredArea.toLowerCase() && p.vacantBeds >= 2 && p.pricePerBed <= lead.budget
      );
      if (match) {
        out.push({
          leadId: lead.id,
          reason: `Inventory match · ${match.name} · ${match.vacantBeds} beds @ ₹${(match.pricePerBed / 1e3).toFixed(0)}k`,
          matchPropertyId: match.id,
          score: 50,
          signal: "cold-match"
        });
        continue;
      }
    }
    const tour = tours.find((t) => t.leadId === lead.id && t.postTour.objection === "Budget");
    if (tour && lead.stage !== "booked") {
      const fit = properties.find(
        (p) => p.area.toLowerCase() === lead.preferredArea.toLowerCase() && p.pricePerBed <= lead.budget * 0.95
      );
      if (fit) {
        out.push({
          leadId: lead.id,
          reason: `Budget objection now resolvable · ${fit.name} ₹${(fit.pricePerBed / 1e3).toFixed(0)}k`,
          matchPropertyId: fit.id,
          score: 70,
          signal: "objection-resolved"
        });
      }
    }
  }
  return out.sort((a, b) => b.score - a.score);
}
__name(scanRevivals, "scanRevivals");
__name2(scanRevivals, "scanRevivals");
export {
  scanRevivals as s
};
