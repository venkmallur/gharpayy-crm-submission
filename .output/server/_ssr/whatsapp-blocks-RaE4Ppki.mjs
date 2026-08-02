var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { q as cn, a6 as OFFICE_PHONE } from "./router-xBhBcQRf.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { b as Check, e as Copy } from "../_libs/lucide-react.mjs";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
function CopyChipRail({ blocks, dense }) {
  const [copied, setCopied] = reactExports.useState(null);
  const copy = /* @__PURE__ */ __name2(async (b) => {
    try {
      await navigator.clipboard.writeText(b.text);
      setCopied(b.key);
      toast.success(`Copied "${b.label}"`);
      setTimeout(() => setCopied((c) => c === b.key ? null : c), 1200);
    } catch {
      toast.error("Copy failed");
    }
  }, "copy");
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-wrap gap-1.5", dense && "gap-1"), "data-tsd-source": "/src/admin/components/CopyChipRail.tsx:20:5", children: blocks.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      onClick: /* @__PURE__ */ __name2(() => copy(b), "onClick"),
      title: b.text,
      className: cn(
        "inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded-full border transition-colors",
        b.internal ? "border-warning/40 bg-warning/10 text-warning-foreground hover:bg-warning/20" : "border-accent/40 bg-accent/10 text-accent hover:bg-accent/20"
      ),
      "data-tsd-source": "/src/admin/components/CopyChipRail.tsx:22:9",
      children: [
        copied === b.key ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3", "data-tsd-source": "/src/admin/components/CopyChipRail.tsx:29:31" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-3 w-3", "data-tsd-source": "/src/admin/components/CopyChipRail.tsx:29:63" }),
        b.label,
        b.internal && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] uppercase opacity-60", "data-tsd-source": "/src/admin/components/CopyChipRail.tsx:31:26", children: "int" })
      ]
    },
    b.key
  )) });
}
__name(CopyChipRail, "CopyChipRail");
__name2(CopyChipRail, "CopyChipRail");
function inr(n) {
  return `₹${Math.round(n).toLocaleString("en-IN")}`;
}
__name(inr, "inr");
__name2(inr, "inr");
function maskPhone(p) {
  const last4 = p.slice(-4);
  return `xxxxxx${last4}`;
}
__name(maskPhone, "maskPhone");
__name2(maskPhone, "maskPhone");
function leadSummaryBlock(row) {
  const l = row.lead;
  return [
    `*Lead summary*`,
    `${l.name} · ${maskPhone(l.phone)}`,
    `Stage: ${l.stage} · Prob: ${row.probability}%`,
    `Budget: ${inr(l.budget)} · Area: ${l.preferredArea}`,
    `TCM: ${row.tcm?.name ?? "—"}`,
    `Last touch: ${new Date(row.lastTouchTs).toLocaleString("en-IN")}`,
    `Why open: ${row.whyNotClosed}`,
    ``,
    `Reach us: ${OFFICE_PHONE}`
  ].join("\n");
}
__name(leadSummaryBlock, "leadSummaryBlock");
__name2(leadSummaryBlock, "leadSummaryBlock");
function hotLeadHandoffBlock(row) {
  return [
    `🔥 *Hot lead handoff*`,
    `${row.lead.name} · ${row.probability}% probability`,
    `Budget ${inr(row.lead.budget)} · ${row.lead.preferredArea}`,
    `Next action: ${row.whyNotClosed}`,
    `Owner: ${row.tcm?.name ?? "—"} (${row.tcm?.zone ?? ""})`
  ].join("\n");
}
__name(hotLeadHandoffBlock, "hotLeadHandoffBlock");
__name2(hotLeadHandoffBlock, "hotLeadHandoffBlock");
function lostPostMortemBlock(row) {
  const lostVisit = row.visits.find((v) => v.lostReason);
  return [
    `*Lost-lead post-mortem*`,
    `${row.lead.name} (${row.lead.stage})`,
    `Budget ${inr(row.lead.budget)} · ${row.lead.preferredArea}`,
    `Tours: ${row.tours.length} · Calls: ${row.calls.length} · Objections logged: ${row.objections.length}`,
    `Reason: ${lostVisit?.lostReason ?? row.lastObjection?.code ?? "unknown"}`,
    `Owned by: ${row.tcm?.name ?? "—"}`,
    `Recoverable? ${row.objections.some((o) => o.code === "price-too-high") ? "Maybe — try price offer" : "Low"}`
  ].join("\n");
}
__name(lostPostMortemBlock, "lostPostMortemBlock");
__name2(lostPostMortemBlock, "lostPostMortemBlock");
function dailyAdminDigestBlock(rows) {
  const open = rows.filter((r) => r.status === "open");
  const hot = open.filter((r) => r.probability >= 70);
  const booked = rows.filter((r) => r.booked);
  const lost = rows.filter((r) => r.status === "lost");
  const walking = rows.filter((r) => r.status === "lost").reduce((s, r) => s + r.lead.budget * 12, 0);
  const top3 = [...open].sort((a, b) => b.probability - a.probability).slice(0, 3);
  return [
    `📊 *Daily admin digest*`,
    `${(/* @__PURE__ */ new Date()).toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "short" })}`,
    ``,
    `Pipeline: ${open.length} open · ${hot.length} hot`,
    `Booked: ${booked.length} · Lost: ${lost.length}`,
    `Walking revenue: ${inr(walking)}`,
    ``,
    `*Top 3 closeable in 24h:*`,
    ...top3.map((r, i) => `${i + 1}. ${r.lead.name} — ${r.probability}% (${r.tcm?.name ?? "—"})`),
    ``,
    `Reach us: ${OFFICE_PHONE}`
  ].join("\n");
}
__name(dailyAdminDigestBlock, "dailyAdminDigestBlock");
__name2(dailyAdminDigestBlock, "dailyAdminDigestBlock");
function weeklyLeadershipMemoBlock(rows) {
  const booked = rows.filter((r) => r.booked);
  const lost = rows.filter((r) => r.status === "lost");
  const revenue = booked.reduce((s, r) => s + (r.bookings[0]?.amount ?? r.lead.budget) * 12, 0);
  const walking = lost.reduce((s, r) => s + r.lead.budget * 12, 0);
  const byTcm = /* @__PURE__ */ new Map();
  booked.forEach((r) => {
    const id = r.tcm?.id ?? "—";
    const cur = byTcm.get(id) ?? { name: r.tcm?.name ?? id, booked: 0, revenue: 0 };
    cur.booked += 1;
    cur.revenue += (r.bookings[0]?.amount ?? r.lead.budget) * 12;
    byTcm.set(id, cur);
  });
  const top = [...byTcm.values()].sort((a, b) => b.revenue - a.revenue).slice(0, 5);
  return [
    `📈 *Weekly leadership memo*`,
    ``,
    `Bookings: ${booked.length} · Lost: ${lost.length}`,
    `Closed revenue: ${inr(revenue)}`,
    `Walking revenue: ${inr(walking)}`,
    ``,
    `*Top closers:*`,
    ...top.map((t, i) => `${i + 1}. ${t.name} — ${t.booked} booked · ${inr(t.revenue)}`)
  ].join("\n");
}
__name(weeklyLeadershipMemoBlock, "weeklyLeadershipMemoBlock");
__name2(weeklyLeadershipMemoBlock, "weeklyLeadershipMemoBlock");
function coachNoteBlock(row, note) {
  return [
    `🎯 *Coach note (internal)*`,
    `Lead: ${row.lead.name} · TCM: ${row.tcm?.name ?? "—"}`,
    `Stage: ${row.lead.stage} · Prob: ${row.probability}%`,
    `Note: ${note}`
  ].join("\n");
}
__name(coachNoteBlock, "coachNoteBlock");
__name2(coachNoteBlock, "coachNoteBlock");
function interventionAlertBlock(row) {
  return [
    `🚨 *Intervention required*`,
    `${row.lead.name} flagged by admin`,
    `Stage: ${row.lead.stage} · Last touch: ${new Date(row.lastTouchTs).toLocaleString("en-IN")}`,
    `Owner: ${row.tcm?.name ?? "—"}`,
    `Why: ${row.whyNotClosed}`
  ].join("\n");
}
__name(interventionAlertBlock, "interventionAlertBlock");
__name2(interventionAlertBlock, "interventionAlertBlock");
function ownerNotifyBlock(row) {
  return [
    `*Visit signal*`,
    `New interest in ${row.lead.preferredArea}`,
    `Budget ${inr(row.lead.budget)} · ${row.tours.length} tour(s) scheduled`,
    `Reach us: ${OFFICE_PHONE}`
  ].join("\n");
}
__name(ownerNotifyBlock, "ownerNotifyBlock");
__name2(ownerNotifyBlock, "ownerNotifyBlock");
function visitBriefBlock(row) {
  const v = row.visits[0];
  return [
    `*Visit brief*`,
    `${row.lead.name} · ${row.lead.preferredArea}`,
    `Stage: ${v?.stage ?? "—"} · Reaction: ${v?.reaction ?? "—"}`,
    `Objections: ${v?.objections.length ?? 0}`,
    `Reach us: ${OFFICE_PHONE}`
  ].join("\n");
}
__name(visitBriefBlock, "visitBriefBlock");
__name2(visitBriefBlock, "visitBriefBlock");
function revivalBlock(row) {
  return [
    `*Revival ping*`,
    `Hi ${row.lead.name.split(" ")[0]}, still looking for a place in ${row.lead.preferredArea}?`,
    `New options opened up in your budget (${inr(row.lead.budget)}).`,
    `Reach us: ${OFFICE_PHONE}`
  ].join("\n");
}
__name(revivalBlock, "revivalBlock");
__name2(revivalBlock, "revivalBlock");
function buildLeadCopyBlocks(row, allRows) {
  return [
    { key: "summary", label: "Lead summary", text: leadSummaryBlock(row) },
    { key: "handoff", label: "Hot-lead handoff", text: hotLeadHandoffBlock(row), internal: true },
    { key: "visit", label: "Visit brief", text: visitBriefBlock(row) },
    { key: "revival", label: "Revival ping", text: revivalBlock(row) },
    { key: "owner-notify", label: "Owner notify", text: ownerNotifyBlock(row) },
    { key: "post-mortem", label: "Lost post-mortem", text: lostPostMortemBlock(row), internal: true },
    { key: "intervention", label: "Intervention alert", text: interventionAlertBlock(row), internal: true },
    { key: "coach", label: "Coach note", text: coachNoteBlock(row, "Reach out today and resolve objection."), internal: true },
    { key: "daily", label: "Daily digest", text: dailyAdminDigestBlock(allRows ?? [row]), internal: true },
    { key: "weekly", label: "Weekly memo", text: weeklyLeadershipMemoBlock(allRows ?? [row]), internal: true }
  ];
}
__name(buildLeadCopyBlocks, "buildLeadCopyBlocks");
__name2(buildLeadCopyBlocks, "buildLeadCopyBlocks");
export {
  CopyChipRail as C,
  buildLeadCopyBlocks as b
};
