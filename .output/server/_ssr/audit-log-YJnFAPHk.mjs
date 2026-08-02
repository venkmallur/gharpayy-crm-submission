var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { c as create, p as persist } from "../_libs/zustand.mjs";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
const MAX_ENTRIES = 5e3;
const useAuditLog = create()(
  persist(
    (set, get) => ({
      entries: [],
      log: /* @__PURE__ */ __name2((e) => {
        const entry = {
          ...e,
          id: `aud_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
          ts: (/* @__PURE__ */ new Date()).toISOString()
        };
        set((s) => ({ entries: [entry, ...s.entries].slice(0, MAX_ENTRIES) }));
        return entry;
      }, "log"),
      recentFor: /* @__PURE__ */ __name2((entityType, entityId, limit = 20) => get().entries.filter((e) => e.entityType === entityType && e.entityId === entityId).slice(0, limit), "recentFor"),
      recentForActor: /* @__PURE__ */ __name2((actorId, limit = 20) => get().entries.filter((e) => e.actorId === actorId).slice(0, limit), "recentForActor"),
      recentAll: /* @__PURE__ */ __name2((limit = 50) => get().entries.slice(0, limit), "recentAll"),
      clear: /* @__PURE__ */ __name2(() => set({ entries: [] }), "clear")
    }),
    { name: "gharpayy.audit-log.v1" }
  )
);
export {
  useAuditLog as u
};
