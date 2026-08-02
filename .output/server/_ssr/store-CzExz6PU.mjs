var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { c as create, p as persist } from "../_libs/zustand.mjs";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
const uid = /* @__PURE__ */ __name2((p) => `${p}-${Math.random().toString(36).slice(2, 8)}`, "uid");
const useCRM10x = create()(
  persist(
    (set, get) => ({
      profiles: {},
      objections: [],
      calls: [],
      visits: {},
      commitments: [],
      assignments: [],
      merges: [],
      coachingNotes: [],
      messageOutcomes: [],
      upsertProfile: /* @__PURE__ */ __name2((p) => set((s) => ({
        profiles: {
          ...s.profiles,
          [p.leadId]: {
            ...s.profiles[p.leadId] ?? { leadId: p.leadId, updatedAt: (/* @__PURE__ */ new Date()).toISOString() },
            ...p,
            updatedAt: (/* @__PURE__ */ new Date()).toISOString()
          }
        }
      })), "upsertProfile"),
      addShiftingDate: /* @__PURE__ */ __name2((leadId, entry) => set((s) => {
        const existing = s.profiles[leadId] ?? { leadId, updatedAt: (/* @__PURE__ */ new Date()).toISOString() };
        const history = existing.shiftingHistory ?? [];
        const incomingDate = new Date(entry.shiftingDate).toISOString().slice(0, 10);
        const last = history[0];
        const lastDate = last ? new Date(last.shiftingDate).toISOString().slice(0, 10) : null;
        const lastTs = last ? +new Date(last.ts) : 0;
        if (lastDate === incomingDate && Date.now() - lastTs < 6e4) return {};
        const newEntry = { ...entry, ts: (/* @__PURE__ */ new Date()).toISOString() };
        return {
          profiles: {
            ...s.profiles,
            [leadId]: {
              ...existing,
              preferredMoveInDate: entry.shiftingDate,
              shiftingHistory: [newEntry, ...history],
              updatedAt: (/* @__PURE__ */ new Date()).toISOString()
            }
          }
        };
      }), "addShiftingDate"),
      logObjection: /* @__PURE__ */ __name2((r) => {
        const rec = { ...r, id: uid("obj"), ts: (/* @__PURE__ */ new Date()).toISOString() };
        set((s) => ({ objections: [rec, ...s.objections] }));
        return rec;
      }, "logObjection"),
      resolveObjection: /* @__PURE__ */ __name2((id, resolution) => set((s) => ({
        objections: s.objections.map((o) => o.id === id ? { ...o, resolution } : o)
      })), "resolveObjection"),
      logCall: /* @__PURE__ */ __name2((r) => {
        const rec = { ...r, id: uid("call"), ts: (/* @__PURE__ */ new Date()).toISOString() };
        set((s) => ({ calls: [rec, ...s.calls] }));
        if (r.bestCallTime || r.language) {
          get().upsertProfile({
            leadId: r.leadId,
            ...r.bestCallTime ? { bestCallTime: r.bestCallTime } : {},
            ...r.language ? { language: r.language } : {}
          });
        }
        return rec;
      }, "logCall"),
      upsertVisit: /* @__PURE__ */ __name2((v) => set((s) => ({
        visits: {
          ...s.visits,
          [v.tourId]: {
            ...s.visits[v.tourId] ?? { tourId: v.tourId, leadId: v.leadId },
            ...v,
            updatedAt: (/* @__PURE__ */ new Date()).toISOString()
          }
        }
      })), "upsertVisit"),
      addCommitment: /* @__PURE__ */ __name2((c) => {
        const rec = {
          ...c,
          id: uid("com"),
          ts: (/* @__PURE__ */ new Date()).toISOString(),
          status: "pending"
        };
        set((s) => ({ commitments: [rec, ...s.commitments] }));
        return rec;
      }, "addCommitment"),
      resolveCommitment: /* @__PURE__ */ __name2((id, status) => set((s) => ({
        commitments: s.commitments.map((c) => c.id === id ? { ...c, status } : c)
      })), "resolveCommitment"),
      addAssignment: /* @__PURE__ */ __name2((a) => {
        const rec = { ...a, id: uid("asn"), ts: (/* @__PURE__ */ new Date()).toISOString() };
        set((s) => ({ assignments: [rec, ...s.assignments] }));
        return rec;
      }, "addAssignment"),
      mergeDuplicates: /* @__PURE__ */ __name2((m) => {
        const rec = { ...m, id: uid("mrg"), ts: (/* @__PURE__ */ new Date()).toISOString() };
        set((s) => ({ merges: [rec, ...s.merges] }));
        return rec;
      }, "mergeDuplicates"),
      addCoachingNote: /* @__PURE__ */ __name2((n) => {
        const rec = { ...n, id: uid("cn"), ts: (/* @__PURE__ */ new Date()).toISOString() };
        set((s) => ({ coachingNotes: [rec, ...s.coachingNotes] }));
        return rec;
      }, "addCoachingNote"),
      logMessageSend: /* @__PURE__ */ __name2((m) => {
        const rec = {
          ...m,
          id: uid("msg"),
          ts: (/* @__PURE__ */ new Date()).toISOString(),
          replied: false,
          bookedAfter: false
        };
        set((s) => ({ messageOutcomes: [rec, ...s.messageOutcomes] }));
        return rec;
      }, "logMessageSend"),
      markMessageReplied: /* @__PURE__ */ __name2((id) => set((s) => ({
        messageOutcomes: s.messageOutcomes.map((m) => m.id === id ? { ...m, replied: true } : m)
      })), "markMessageReplied"),
      markMessageBookedAfter: /* @__PURE__ */ __name2((leadId, bookingId, bookingTs) => {
        const bookingTime = bookingTs ? +new Date(bookingTs) : Date.now();
        const WINDOW = 14 * 864e5;
        set((s) => ({
          messageOutcomes: s.messageOutcomes.map((m) => {
            if (m.leadId !== leadId) return m;
            if (m.attributedBookingId) return m;
            const sentTs = +new Date(m.ts);
            if (sentTs > bookingTime) return m;
            if (bookingTime - sentTs > WINDOW) return m;
            return { ...m, bookedAfter: true, attributedBookingId: bookingId };
          })
        }));
      }, "markMessageBookedAfter"),
      // selectors
      unresolvedObjectionFor: /* @__PURE__ */ __name2((leadId) => {
        const list = get().objections.filter(
          (o) => o.leadId === leadId && o.code !== "none" && o.resolution !== "yes"
        );
        return list[0] ?? null;
      }, "unresolvedObjectionFor"),
      callAttemptsFor: /* @__PURE__ */ __name2((leadId) => get().calls.filter((c) => c.leadId === leadId).length, "callAttemptsFor"),
      reassignmentCount: /* @__PURE__ */ __name2((leadId) => get().assignments.filter((a) => a.leadId === leadId).length, "reassignmentCount")
    }),
    {
      name: "gharpayy.crm10x.v1",
      version: 1
    }
  )
);
export {
  useCRM10x as u
};
