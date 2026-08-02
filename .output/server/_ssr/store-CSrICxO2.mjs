var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import process from "node:process";
import { c as create, p as persist } from "../_libs/zustand.mjs";
import { u as useAuditLog } from "./audit-log-YJnFAPHk.mjs";
import * as fs from "node:fs/promises";
import * as path from "node:path";
import { c as createServerFn } from "./index.mjs";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
function normalizePhoneIN(input) {
  if (!input) return "";
  const digits = input.replace(/\D/g, "");
  let d = digits.replace(/^0+/, "");
  if (d.startsWith("91") && d.length === 12) d = d.slice(2);
  if (!/^[6-9]\d{9}$/.test(d)) return "";
  return `+91${d}`;
}
__name(normalizePhoneIN, "normalizePhoneIN");
__name2(normalizePhoneIN, "normalizePhoneIN");
function normalizeEmail(input) {
  if (!input) return "";
  const e = input.trim().toLowerCase();
  if (!/^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/.test(e)) return "";
  const [local, domain] = e.split("@");
  if (domain === "gmail.com" || domain === "googlemail.com") {
    const stripped = local.split("+")[0].replace(/\./g, "");
    return `${stripped}@gmail.com`;
  }
  return e;
}
__name(normalizeEmail, "normalizeEmail");
__name2(normalizeEmail, "normalizeEmail");
function normalizeName(input) {
  if (!input) return "";
  return input.toLowerCase().replace(/\b(mr|mrs|ms|dr|shri|smt)\.?\b/g, "").replace(/[^a-z\s]/g, " ").replace(/\s+/g, " ").trim();
}
__name(normalizeName, "normalizeName");
__name2(normalizeName, "normalizeName");
function parseBudgetToNumber(raw) {
  if (!raw) return 0;
  const t = raw.toLowerCase().replace(/[₹,\s]/g, "");
  const range = t.match(/(\d+(?:\.\d+)?)[-–to]+(\d+(?:\.\d+)?)(k)?/);
  if (range) {
    const lo = parseFloat(range[1]);
    const hi = parseFloat(range[2]);
    const k = !!range[3] || lo < 100;
    return Math.round((lo + hi) / 2 * (k ? 1e3 : 1));
  }
  const single = t.match(/(\d+(?:\.\d+)?)(k)?/);
  if (single) {
    const v = parseFloat(single[1]);
    const k = !!single[2] || v < 100;
    return Math.round(v * (k ? 1e3 : 1));
  }
  return 0;
}
__name(parseBudgetToNumber, "parseBudgetToNumber");
__name2(parseBudgetToNumber, "parseBudgetToNumber");
function newUlid() {
  const enc = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
  const ts = Date.now().toString(32).toUpperCase().padStart(10, "0").slice(-10);
  let rnd = "";
  for (let i = 0; i < 16; i++) rnd += enc[Math.floor(Math.random() * 32)];
  return `LD${ts}${rnd}`;
}
__name(newUlid, "newUlid");
__name2(newUlid, "newUlid");
function levenshtein(a, b) {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  const m = a.length, n = b.length;
  let prev = new Array(n + 1);
  let curr = new Array(n + 1);
  for (let j = 0; j <= n; j++) prev[j] = j;
  for (let i = 1; i <= m; i++) {
    curr[0] = i;
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      curr[j] = Math.min(curr[j - 1] + 1, prev[j] + 1, prev[j - 1] + cost);
    }
    [prev, curr] = [curr, prev];
  }
  return prev[n];
}
__name(levenshtein, "levenshtein");
__name2(levenshtein, "levenshtein");
function nameSimilarity(a, b) {
  const na = normalizeName(a);
  const nb = normalizeName(b);
  if (!na || !nb) return 0;
  if (na === nb) return 1;
  const max = Math.max(na.length, nb.length);
  return 1 - levenshtein(na, nb) / max;
}
__name(nameSimilarity, "nameSimilarity");
__name2(nameSimilarity, "nameSimilarity");
function scoreMatch(input, lead) {
  const reasons = [];
  let score = 0;
  if (input.phoneE164 && lead.phoneE164 && input.phoneE164 === lead.phoneE164) {
    score += 70;
    reasons.push("phone exact");
  }
  if (input.emailNorm && lead.emailNorm && input.emailNorm === lead.emailNorm) {
    score += 60;
    reasons.push("email exact");
  }
  if (input.name && lead.name) {
    const sim = nameSimilarity(input.name, lead.name);
    if (sim >= 0.95) {
      score += 25;
      reasons.push(`name ${sim.toFixed(2)}`);
    } else if (sim >= 0.8) {
      score += 18;
      reasons.push(`name ${sim.toFixed(2)}`);
    } else if (sim >= 0.65) {
      score += 10;
      reasons.push(`name ${sim.toFixed(2)}`);
    }
  }
  if (input.area && lead.area && input.area.toLowerCase() === lead.area.toLowerCase()) {
    score += 5;
    reasons.push("area match");
  }
  return { lead, score: Math.min(100, score), reasons };
}
__name(scoreMatch, "scoreMatch");
__name2(scoreMatch, "scoreMatch");
function classifyScore(top) {
  if (top >= 95) return "exact";
  if (top >= 70) return "strong";
  if (top >= 40) return "possible";
  return "new";
}
__name(classifyScore, "classifyScore");
__name2(classifyScore, "classifyScore");
function findMatches(input, leads) {
  const cands = leads.map((l) => scoreMatch(input, l)).filter((c) => c.score > 0).sort((a, b) => b.score - a.score).slice(0, 5);
  const top = cands[0]?.score ?? 0;
  return { type: classifyScore(top), topScore: top, candidates: cands };
}
__name(findMatches, "findMatches");
__name2(findMatches, "findMatches");
const DB_PATH = path.resolve(process.cwd(), ".data", "leads.json");
async function ensureDb() {
  try {
    await fs.mkdir(path.dirname(DB_PATH), { recursive: true });
    try {
      await fs.access(DB_PATH);
    } catch {
      await fs.writeFile(DB_PATH, JSON.stringify([]));
    }
  } catch (error) {
    console.error("Failed to initialize DB:", error);
  }
}
__name(ensureDb, "ensureDb");
__name2(ensureDb, "ensureDb");
createServerFn("GET", async () => {
  try {
    await ensureDb();
    const data = await fs.readFile(DB_PATH, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
});
const saveLead = createServerFn("POST", async (lead) => {
  try {
    await ensureDb();
    const data = await fs.readFile(DB_PATH, "utf-8");
    const leads = JSON.parse(data);
    leads.unshift(lead);
    await fs.writeFile(DB_PATH, JSON.stringify(leads, null, 2));
    return lead;
  } catch (error) {
    throw new Error("Failed to save lead");
  }
});
function audit(action, ulid, summary, actor, before, after) {
  useAuditLog.getState().log({
    actorId: actor.id,
    actorName: actor.name,
    entityType: "lead",
    entityId: ulid,
    action,
    summary,
    before,
    after
  });
}
__name(audit, "audit");
__name2(audit, "audit");
const nowIso = /* @__PURE__ */ __name2(() => (/* @__PURE__ */ new Date()).toISOString(), "nowIso");
const useIdentityStore = create()(
  persist(
    (set, get) => ({
      leads: [],
      activities: [],
      requests: [],
      customTags: [],
      currentUser: { id: "u-self", name: "You", role: "agent" },
      setCurrentUser: /* @__PURE__ */ __name2((u) => set({ currentUser: u }), "setCurrentUser"),
      checkDuplicates: /* @__PURE__ */ __name2((draft) => {
        const phoneE164 = normalizePhoneIN(draft.phone ?? "");
        const emailNorm = normalizeEmail(draft.email ?? "");
        return findMatches(
          { phoneE164, emailNorm, name: draft.name, area: draft.location },
          get().leads
        );
      }, "checkDuplicates"),
      createLead: /* @__PURE__ */ __name2((draft, opts) => {
        const user = get().currentUser;
        const ownerId = opts?.ownerId ?? user.id;
        const ownerName = opts?.ownerName ?? user.name;
        const ts = nowIso();
        const lead = {
          ulid: newUlid(),
          name: draft.name || "Unnamed Lead",
          phoneRaw: draft.phone,
          phoneE164: normalizePhoneIN(draft.phone),
          email: draft.email,
          emailNorm: normalizeEmail(draft.email),
          area: draft.location,
          areas: draft.areas,
          fullAddress: draft.fullAddress,
          zone: draft.zone,
          zoneCategory: opts?.zoneCategory,
          quality: opts?.quality ?? null,
          priority: opts?.priority ?? "normal",
          tags: opts?.tags ?? [],
          earliestCheckIn: opts?.earliestCheckIn,
          stage: opts?.stage,
          assigneeId: opts?.assigneeId ?? null,
          assigneeName: opts?.assigneeName ?? null,
          assignmentHistory: opts?.assigneeId ? [{
            ts,
            fromId: null,
            fromName: null,
            toId: opts.assigneeId,
            toName: opts.assigneeName ?? "",
            byActorId: user.id,
            byActorName: user.name,
            reason: "initial assignment"
          }] : [],
          budget: parseBudgetToNumber(draft.budget),
          moveInDate: draft.moveIn,
          type: draft.type,
          room: draft.room,
          need: draft.need,
          inBLR: draft.inBLR,
          notes: draft.specialReqs,
          state: "new",
          primaryOwnerId: ownerId,
          secondaryOwnerId: null,
          createdAt: ts,
          updatedAt: ts,
          lastActivityAt: ts,
          rawSource: draft.rawSource
        };
        set((s) => ({ leads: [lead, ...s.leads] }));
        saveLead({ data: lead }).catch((err) => console.error("Failed to sync lead to backend:", err));
        get().logActivity(lead.ulid, "lead-created", `Lead created by ${ownerName}`);
        audit("lead-created", lead.ulid, `Lead created · ${lead.name}`, user, void 0, lead.name);
        return lead;
      }, "createLead"),
      logActivity: /* @__PURE__ */ __name2((ulid, kind, text, meta) => {
        const user = get().currentUser;
        const entry = {
          id: `act_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
          ulid,
          ts: nowIso(),
          actorId: user.id,
          actorName: user.name,
          kind,
          text,
          meta
        };
        set((s) => ({
          activities: [entry, ...s.activities],
          leads: s.leads.map((l) => l.ulid === ulid ? { ...l, lastActivityAt: entry.ts, updatedAt: entry.ts } : l)
        }));
      }, "logActivity"),
      requestAccess: /* @__PURE__ */ __name2((ulid, message) => {
        const lead = get().leads.find((l) => l.ulid === ulid);
        if (!lead) return null;
        const user = get().currentUser;
        if (lead.primaryOwnerId === user.id) return null;
        const existing = get().requests.find(
          (r) => r.ulid === ulid && r.requesterId === user.id && r.state === "pending"
        );
        if (existing) return existing;
        const req = {
          id: `req_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
          ulid,
          requesterId: user.id,
          requesterName: user.name,
          toOwnerId: lead.primaryOwnerId,
          ts: nowIso(),
          state: "pending",
          message
        };
        set((s) => ({ requests: [req, ...s.requests] }));
        get().logActivity(ulid, "access-requested", `${user.name} requested access`);
        return req;
      }, "requestAccess"),
      decideRequest: /* @__PURE__ */ __name2((id, decision) => {
        const req = get().requests.find((r) => r.id === id);
        if (!req) return;
        const ts = nowIso();
        set((s) => ({
          requests: s.requests.map((r) => r.id === id ? { ...r, state: decision, decidedAt: ts } : r)
        }));
        if (decision === "approved") {
          get().setSecondaryOwner(req.ulid, req.requesterId, req.requesterName);
          get().logActivity(req.ulid, "access-granted", `Access granted to ${req.requesterName}`);
        } else {
          get().logActivity(req.ulid, "access-rejected", `Access rejected for ${req.requesterName}`);
        }
      }, "decideRequest"),
      setSecondaryOwner: /* @__PURE__ */ __name2((ulid, ownerId, ownerName) => {
        set((s) => ({
          leads: s.leads.map((l) => l.ulid === ulid ? { ...l, secondaryOwnerId: ownerId, updatedAt: nowIso() } : l)
        }));
        get().logActivity(ulid, "secondary-added", `${ownerName} added as secondary owner`);
      }, "setSecondaryOwner"),
      reassignPrimary: /* @__PURE__ */ __name2((ulid, ownerId, ownerName, reason) => {
        set((s) => ({
          leads: s.leads.map((l) => l.ulid === ulid ? { ...l, primaryOwnerId: ownerId, updatedAt: nowIso() } : l)
        }));
        get().logActivity(ulid, "owner-changed", `Primary owner → ${ownerName} (${reason})`);
      }, "reassignPrimary"),
      setLifecycleState: /* @__PURE__ */ __name2((ulid, state) => {
        const lead = get().leads.find((l) => l.ulid === ulid);
        const before = lead?.state;
        set((s) => ({
          leads: s.leads.map((l) => l.ulid === ulid ? { ...l, state, updatedAt: nowIso() } : l)
        }));
        get().logActivity(ulid, "state-changed", `State → ${state}`);
        audit("state-changed", ulid, `State: ${before ?? "—"} → ${state}`, get().currentUser, before, state);
      }, "setLifecycleState"),
      addTag: /* @__PURE__ */ __name2((ulid, tag) => {
        const t = tag.trim();
        if (!t) return;
        set((s) => ({
          leads: s.leads.map((l) => l.ulid === ulid && !(l.tags ?? []).includes(t) ? { ...l, tags: [...l.tags ?? [], t], updatedAt: nowIso() } : l)
        }));
        get().logActivity(ulid, "tag-added", `Tag added: ${t}`, { tag: t });
        audit("tag-added", ulid, `Tag added: ${t}`, get().currentUser, void 0, t);
      }, "addTag"),
      removeTag: /* @__PURE__ */ __name2((ulid, tag) => {
        set((s) => ({
          leads: s.leads.map((l) => l.ulid === ulid ? { ...l, tags: (l.tags ?? []).filter((x) => x !== tag), updatedAt: nowIso() } : l)
        }));
        get().logActivity(ulid, "tag-removed", `Tag removed: ${tag}`, { tag });
        audit("tag-removed", ulid, `Tag removed: ${tag}`, get().currentUser, tag, void 0);
      }, "removeTag"),
      setPriority: /* @__PURE__ */ __name2((ulid, priority) => {
        const lead = get().leads.find((l) => l.ulid === ulid);
        const before = lead?.priority ?? "normal";
        set((s) => ({
          leads: s.leads.map((l) => l.ulid === ulid ? { ...l, priority, updatedAt: nowIso() } : l)
        }));
        get().logActivity(
          ulid,
          "priority-changed",
          `Priority: ${before} → ${priority ?? "normal"}`,
          { before, after: priority }
        );
        audit("priority-changed", ulid, `Priority: ${before} → ${priority ?? "normal"}`, get().currentUser, before, priority);
      }, "setPriority"),
      setEarliestCheckIn: /* @__PURE__ */ __name2((ulid, date) => {
        const lead = get().leads.find((l) => l.ulid === ulid);
        const before = lead?.earliestCheckIn;
        set((s) => ({
          leads: s.leads.map((l) => l.ulid === ulid ? { ...l, earliestCheckIn: date, updatedAt: nowIso() } : l)
        }));
        get().logActivity(
          ulid,
          "earliest-checkin-set",
          `Earliest check-in: ${date}`,
          { date }
        );
        audit("earliest-checkin-set", ulid, `Earliest check-in: ${before ?? "—"} → ${date}`, get().currentUser, before, date);
      }, "setEarliestCheckIn"),
      assignLead: /* @__PURE__ */ __name2((ulid, toMemberId, toMemberName, reason) => {
        const user = get().currentUser;
        const lead = get().leads.find((l) => l.ulid === ulid);
        if (!lead) return;
        const entry = {
          ts: nowIso(),
          fromId: lead.assigneeId ?? null,
          fromName: lead.assigneeName ?? null,
          toId: toMemberId,
          toName: toMemberName,
          byActorId: user.id,
          byActorName: user.name,
          reason
        };
        set((s) => ({
          leads: s.leads.map((l) => l.ulid === ulid ? {
            ...l,
            assigneeId: toMemberId,
            assigneeName: toMemberName,
            assignmentHistory: [entry, ...l.assignmentHistory ?? []],
            updatedAt: nowIso()
          } : l)
        }));
        get().logActivity(
          ulid,
          "assignee-changed",
          `Assigned to ${toMemberName}${reason ? ` (${reason})` : ""}`,
          { toId: toMemberId, fromId: entry.fromId }
        );
        audit(
          "assignee-changed",
          ulid,
          `Assigned: ${entry.fromName ?? "—"} → ${toMemberName}${reason ? ` (${reason})` : ""}`,
          user,
          entry.fromName,
          toMemberName
        );
      }, "assignLead"),
      createCustomTag: /* @__PURE__ */ __name2((label, color) => {
        const user = get().currentUser;
        const tag = {
          id: `tag_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
          label: label.trim(),
          color,
          createdBy: user.id,
          ts: nowIso()
        };
        set((s) => ({ customTags: [tag, ...s.customTags] }));
        return tag;
      }, "createCustomTag"),
      deleteCustomTag: /* @__PURE__ */ __name2((id) => {
        set((s) => ({ customTags: s.customTags.filter((t) => t.id !== id) }));
      }, "deleteCustomTag"),
      bookTour: /* @__PURE__ */ __name2((ulid, tourDateIso, propertyName) => {
        set((s) => ({
          leads: s.leads.map((l) => l.ulid === ulid ? {
            ...l,
            phase: 2,
            stageTag: "TOUR_SCHEDULED",
            state: "visit-scheduled",
            anchors: { ...l.anchors ?? { leadDate: l.createdAt }, tourDate: tourDateIso },
            propertyName: propertyName ?? l.propertyName,
            noShowFlag: false,
            updatedAt: nowIso()
          } : l)
        }));
        get().logActivity(ulid, "visit-scheduled", `Tour booked for ${new Date(tourDateIso).toLocaleString()}`);
        audit("tour-booked", ulid, `Tour booked → ${tourDateIso}`, get().currentUser, void 0, tourDateIso);
      }, "bookTour"),
      rescheduleTour: /* @__PURE__ */ __name2((ulid, newTourDateIso) => {
        const lead = get().leads.find((l) => l.ulid === ulid);
        const before = lead?.anchors?.tourDate;
        set((s) => ({
          leads: s.leads.map((l) => l.ulid === ulid ? {
            ...l,
            anchors: { ...l.anchors ?? { leadDate: l.createdAt }, tourDate: newTourDateIso },
            noShowFlag: false,
            updatedAt: nowIso()
          } : l)
        }));
        get().logActivity(ulid, "visit-scheduled", `Tour rescheduled → ${new Date(newTourDateIso).toLocaleString()}`);
        audit("tour-rescheduled", ulid, `Tour: ${before ?? "—"} → ${newTourDateIso}`, get().currentUser, before, newTourDateIso);
      }, "rescheduleTour"),
      markNoShow: /* @__PURE__ */ __name2((ulid) => {
        set((s) => ({
          leads: s.leads.map((l) => l.ulid === ulid ? {
            ...l,
            noShowFlag: true,
            noShowCount: (l.noShowCount ?? 0) + 1,
            updatedAt: nowIso()
          } : l)
        }));
        get().logActivity(ulid, "note-added", "Marked no-show");
        audit("no-show", ulid, "Marked no-show", get().currentUser);
      }, "markNoShow"),
      markToured: /* @__PURE__ */ __name2((ulid, interest) => {
        set((s) => ({
          leads: s.leads.map((l) => l.ulid === ulid ? {
            ...l,
            phase: 3,
            stageTag: "TOURED",
            state: "visit-done",
            interestLevel: interest ?? l.interestLevel ?? null,
            noShowFlag: false,
            updatedAt: nowIso()
          } : l)
        }));
        get().logActivity(ulid, "visit-done", `Tour completed${interest ? ` · ${interest}` : ""}`);
        audit("toured", ulid, `Toured · ${interest ?? "—"}`, get().currentUser);
      }, "markToured"),
      setInterestLevel: /* @__PURE__ */ __name2((ulid, level) => {
        set((s) => ({
          leads: s.leads.map((l) => l.ulid === ulid ? { ...l, interestLevel: level, updatedAt: nowIso() } : l)
        }));
        get().logActivity(ulid, "note-added", `Interest: ${level ?? "—"}`);
      }, "setInterestLevel"),
      setObjection: /* @__PURE__ */ __name2((ulid, tag) => {
        const lead = get().leads.find((l) => l.ulid === ulid);
        const before = lead?.primaryObjection ?? null;
        set((s) => ({
          leads: s.leads.map((l) => l.ulid === ulid ? { ...l, primaryObjection: tag, updatedAt: nowIso() } : l)
        }));
        get().logActivity(ulid, "note-added", `Objection: ${tag}`);
        audit("objection-set", ulid, `Objection: ${before ?? "—"} → ${tag}`, get().currentUser, before, tag);
      }, "setObjection"),
      setCheckInDate: /* @__PURE__ */ __name2((ulid, iso) => {
        set((s) => ({
          leads: s.leads.map((l) => l.ulid === ulid ? {
            ...l,
            anchors: { ...l.anchors ?? { leadDate: l.createdAt }, checkInDate: iso },
            updatedAt: nowIso()
          } : l)
        }));
        get().logActivity(ulid, "note-added", `Check-in date set: ${iso}`);
      }, "setCheckInDate"),
      recordContact: /* @__PURE__ */ __name2((ulid, channel) => {
        set((s) => ({
          leads: s.leads.map((l) => l.ulid === ulid ? {
            ...l,
            lastContactAt: nowIso(),
            followUpCount: (l.followUpCount ?? 0) + 1,
            stageTag: l.stageTag === "NEW" ? "CONTACTED" : l.stageTag,
            updatedAt: nowIso()
          } : l)
        }));
        const kindMap = { wa: "whatsapp-sent", call: "call-logged", email: "note-added", visit: "visit-done" };
        get().logActivity(ulid, kindMap[channel], `Contact via ${channel}`);
      }, "recordContact"),
      recordReply: /* @__PURE__ */ __name2((ulid) => {
        set((s) => ({
          leads: s.leads.map((l) => l.ulid === ulid ? { ...l, replied: true, updatedAt: nowIso() } : l)
        }));
        get().logActivity(ulid, "note-added", "Lead replied");
      }, "recordReply"),
      markClosed: /* @__PURE__ */ __name2((ulid, reason) => {
        set((s) => ({
          leads: s.leads.map((l) => l.ulid === ulid ? {
            ...l,
            phase: 4,
            stageTag: "CLOSED",
            state: "converted",
            closedReason: reason,
            updatedAt: nowIso()
          } : l)
        }));
        get().logActivity(ulid, "state-changed", `CLOSED${reason ? ` · ${reason}` : ""}`);
        audit("closed", ulid, `Lead closed${reason ? ` · ${reason}` : ""}`, get().currentUser);
      }, "markClosed"),
      markLost: /* @__PURE__ */ __name2((ulid, reason) => {
        const lead = get().leads.find((l) => l.ulid === ulid);
        if (!lead?.primaryObjection) {
          throw new Error("Cannot mark LOST without a primary objection tag.");
        }
        set((s) => ({
          leads: s.leads.map((l) => l.ulid === ulid ? {
            ...l,
            phase: 4,
            stageTag: "LOST",
            state: "dropped",
            lostReason: reason,
            updatedAt: nowIso()
          } : l)
        }));
        get().logActivity(ulid, "state-changed", `LOST · ${reason}`);
        audit("lost", ulid, `Lead lost · ${reason}`, get().currentUser);
      }, "markLost"),
      getLead: /* @__PURE__ */ __name2((ulid) => get().leads.find((l) => l.ulid === ulid), "getLead"),
      getActivities: /* @__PURE__ */ __name2((ulid) => get().activities.filter((a) => a.ulid === ulid), "getActivities"),
      getRequestsForOwner: /* @__PURE__ */ __name2((ownerId) => get().requests.filter((r) => r.toOwnerId === ownerId && r.state === "pending"), "getRequestsForOwner"),
      getRequestsByMe: /* @__PURE__ */ __name2((userId) => get().requests.filter((r) => r.requesterId === userId), "getRequestsByMe")
    }),
    { name: "lead-identity-store-v1" }
  )
);
export {
  useIdentityStore as u
};
