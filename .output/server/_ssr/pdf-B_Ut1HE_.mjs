var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { s as summarizeWhyNotClosing, a as summarizeTopObjections } from "./use-admin-rows-Bn7YUGtf.mjs";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
async function downloadAdminWorkbook(filename, rows) {
  const XLSX = await import("../_libs/xlsx.mjs");
  const leadsSheet = rows.map((r) => ({
    Name: r.lead.name,
    Phone: r.lead.phone,
    Source: r.lead.source,
    Stage: r.lead.stage,
    TCM: r.tcm?.name ?? "",
    Zone: r.tcm?.zone ?? "",
    Area: r.lead.preferredArea,
    Budget: r.lead.budget,
    Probability: r.probability,
    ExpectedValue: r.expectedValue,
    Status: r.status,
    Tours: r.tours.length,
    Visits: r.visits.length,
    Calls: r.calls.length,
    LastObjection: r.lastObjection?.code ?? "",
    WhyNotClosed: r.whyNotClosed,
    LastTouch: new Date(r.lastTouchTs).toISOString(),
    Created: r.lead.createdAt
  }));
  const visitsSheet = rows.flatMap(
    (r) => r.visits.map((v) => ({
      Lead: r.lead.name,
      TCM: v.tcmName,
      Property: v.propertyName,
      Stage: v.stage,
      Reaction: v.reaction ?? "",
      Outcome: v.outcome ?? "",
      LostReason: v.lostReason ?? "",
      Objections: v.objections.length,
      ScheduledAt: new Date(v.scheduledAt).toISOString()
    }))
  );
  const objectionsSheet = rows.flatMap(
    (r) => r.objections.map((o) => ({
      Lead: r.lead.name,
      TCM: r.tcm?.name ?? "",
      Code: o.code,
      Resolution: o.resolution,
      Ts: o.ts,
      Context: o.context
    }))
  );
  const peopleSheet = (() => {
    const byTcm = /* @__PURE__ */ new Map();
    rows.forEach((r) => {
      if (!r.tcm) return;
      const cur = byTcm.get(r.tcm.id) ?? { name: r.tcm.name, zone: r.tcm.zone, leads: 0, booked: 0, lost: 0, revenue: 0 };
      cur.leads += 1;
      if (r.booked) {
        cur.booked += 1;
        cur.revenue += (r.bookings[0]?.amount ?? r.lead.budget) * 12;
      }
      if (r.status === "lost") cur.lost += 1;
      byTcm.set(r.tcm.id, cur);
    });
    return [...byTcm.values()];
  })();
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(leadsSheet), "Leads");
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(visitsSheet), "Visits");
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(objectionsSheet), "Objections");
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(peopleSheet), "People");
  XLSX.writeFile(wb, filename);
}
__name(downloadAdminWorkbook, "downloadAdminWorkbook");
__name2(downloadAdminWorkbook, "downloadAdminWorkbook");
async function downloadAdminPdf(filename, rows) {
  const { jsPDF } = await import("../_libs/jspdf.mjs").then(function(n) {
    return n.j;
  });
  const autoTableMod = await import("../_libs/jspdf-autotable.mjs");
  const autoTable = autoTableMod.default;
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const open = rows.filter((r) => r.status === "open" || r.status === "dormant");
  const booked = rows.filter((r) => r.booked);
  const lost = rows.filter((r) => r.status === "lost");
  const walking = lost.reduce((s, r) => s + r.lead.budget * 12, 0);
  const hot = open.filter((r) => r.probability >= 70);
  doc.setFontSize(20);
  doc.text("Gharpayy — Admin Report", 40, 50);
  doc.setFontSize(10);
  doc.text((/* @__PURE__ */ new Date()).toLocaleString("en-IN"), 40, 68);
  autoTable(doc, {
    startY: 90,
    head: [["KPI", "Value"]],
    body: [
      ["Pipeline open", String(open.length)],
      ["Hot leads (≥70%)", String(hot.length)],
      ["Booked", String(booked.length)],
      ["Lost", String(lost.length)],
      ["Walking revenue", `₹${walking.toLocaleString("en-IN")}`]
    ]
  });
  const why = summarizeWhyNotClosing(rows);
  autoTable(doc, {
    head: [["Why leads aren't closing", "Count"]],
    body: why.map((w) => [w.reason, String(w.count)])
  });
  const obj = summarizeTopObjections(rows.flatMap((r) => r.objections));
  autoTable(doc, {
    head: [["Top objection codes", "Count"]],
    body: obj.map((o) => [o.code, String(o.count)])
  });
  autoTable(doc, {
    head: [["Top 10 closeable in 24h", "TCM", "Prob", "Value"]],
    body: [...open].sort((a, b) => b.probability - a.probability).slice(0, 10).map((r) => [r.lead.name, r.tcm?.name ?? "—", `${r.probability}%`, `₹${r.expectedValue.toLocaleString("en-IN")}`])
  });
  doc.save(filename);
}
__name(downloadAdminPdf, "downloadAdminPdf");
__name2(downloadAdminPdf, "downloadAdminPdf");
export {
  downloadAdminPdf as a,
  downloadAdminWorkbook as d
};
