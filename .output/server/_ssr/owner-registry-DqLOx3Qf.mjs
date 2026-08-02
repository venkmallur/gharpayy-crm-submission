var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { P as PGS } from "./router-Cbs6ivkN.mjs";
import { R as PGS$1 } from "./AppShell-rXFHrudv.mjs";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
function normalizeKey(name, phone) {
  const p = (phone || "").replace(/\D/g, "");
  if (p.length >= 10) return `p:${p.slice(-10)}`;
  return `n:${name.trim().toLowerCase()}`;
}
__name(normalizeKey, "normalizeKey");
__name2(normalizeKey, "normalizeKey");
function hash(s) {
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = (h << 5) + h + s.charCodeAt(i) | 0;
  return Math.abs(h);
}
__name(hash, "hash");
__name2(hash, "hash");
function ownerIdFor(key) {
  return `OWN-${String(hash(key) % 1e4).padStart(4, "0")}`;
}
__name(ownerIdFor, "ownerIdFor");
__name2(ownerIdFor, "ownerIdFor");
function bedsFor(pg, type) {
  const offered = pg.prices[type] > 0;
  if (!offered) return 0;
  const h = hash(`${pg.id}:${type}`);
  return 2 + h % 5;
}
__name(bedsFor, "bedsFor");
__name2(bedsFor, "bedsFor");
const OVERLAY_KEY = "gharpayy.owner-registry.v2";
function emptyOverlay() {
  return { rooms: {}, added: {} };
}
__name(emptyOverlay, "emptyOverlay");
__name2(emptyOverlay, "emptyOverlay");
function todayKey(d = /* @__PURE__ */ new Date()) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
__name(todayKey, "todayKey");
__name2(todayKey, "todayKey");
function loadOverlay() {
  if (typeof window === "undefined") return emptyOverlay();
  try {
    const raw = localStorage.getItem(OVERLAY_KEY);
    if (!raw) return emptyOverlay();
    const parsed = JSON.parse(raw);
    return {
      rooms: parsed.rooms ?? {},
      added: parsed.added ?? {}
    };
  } catch {
    return emptyOverlay();
  }
}
__name(loadOverlay, "loadOverlay");
__name2(loadOverlay, "loadOverlay");
function saveOverlay(o) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(OVERLAY_KEY, JSON.stringify(o));
  } catch {
  }
}
__name(saveOverlay, "saveOverlay");
__name2(saveOverlay, "saveOverlay");
function patchRoom(roomId, patch) {
  const o = loadOverlay();
  o.rooms[roomId] = {
    ...o.rooms[roomId],
    ...patch,
    updatedAt: (/* @__PURE__ */ new Date()).toISOString()
  };
  saveOverlay(o);
  notify();
}
__name(patchRoom, "patchRoom");
__name2(patchRoom, "patchRoom");
function verifyRoomToday(roomId) {
  patchRoom(roomId, { verifiedOn: todayKey() });
}
__name(verifyRoomToday, "verifyRoomToday");
__name2(verifyRoomToday, "verifyRoomToday");
function holdForGharpayy(roomId, on) {
  const o = loadOverlay();
  const cur = o.rooms[roomId] ?? {};
  if (on) {
    const previous = cur.status && cur.status !== "held" ? cur.status : "vacant";
    o.rooms[roomId] = {
      ...cur,
      preHoldStatus: previous,
      status: "held",
      verifiedOn: todayKey(),
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
  } else {
    o.rooms[roomId] = {
      ...cur,
      status: cur.preHoldStatus ?? "vacant",
      preHoldStatus: void 0,
      verifiedOn: todayKey(),
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
  }
  saveOverlay(o);
  notify();
}
__name(holdForGharpayy, "holdForGharpayy");
__name2(holdForGharpayy, "holdForGharpayy");
function closeDeal(roomId) {
  patchRoom(roomId, { status: "booked", verifiedOn: todayKey() });
}
__name(closeDeal, "closeDeal");
__name2(closeDeal, "closeDeal");
const MAX_ADDED_PER_PG = 12;
function addRooms(pgId, rows) {
  const o = loadOverlay();
  const existing = o.added[pgId] ?? [];
  const room = Math.max(0, MAX_ADDED_PER_PG - existing.length);
  const accept = rows.slice(0, room);
  const skipped = rows.length - accept.length;
  const now = (/* @__PURE__ */ new Date()).toISOString();
  const created = accept.map((r, i) => ({
    id: `${pgId}::custom-${Date.now().toString(36)}-${i}`,
    pgId,
    type: r.type,
    beds: r.beds,
    rent: r.rent,
    status: r.status ?? "vacant",
    createdAt: now
  }));
  o.added[pgId] = [...existing, ...created];
  created.forEach((c) => {
    o.rooms[c.id] = { verifiedOn: todayKey(), updatedAt: now };
  });
  saveOverlay(o);
  notify();
  return { added: created.length, skipped };
}
__name(addRooms, "addRooms");
__name2(addRooms, "addRooms");
function removeAddedRoom(roomId) {
  const o = loadOverlay();
  let touched = false;
  for (const pgId of Object.keys(o.added)) {
    const before = o.added[pgId].length;
    o.added[pgId] = o.added[pgId].filter((r) => r.id !== roomId);
    if (o.added[pgId].length !== before) touched = true;
  }
  if (touched) {
    delete o.rooms[roomId];
    saveOverlay(o);
    notify();
  }
  return touched;
}
__name(removeAddedRoom, "removeAddedRoom");
__name2(removeAddedRoom, "removeAddedRoom");
function addedRoomCountFor(pgId) {
  return loadOverlay().added[pgId]?.length ?? 0;
}
__name(addedRoomCountFor, "addedRoomCountFor");
__name2(addedRoomCountFor, "addedRoomCountFor");
function maxAddedRoomsPerPG() {
  return MAX_ADDED_PER_PG;
}
__name(maxAddedRoomsPerPG, "maxAddedRoomsPerPG");
__name2(maxAddedRoomsPerPG, "maxAddedRoomsPerPG");
function dailyTruthPhase(d = /* @__PURE__ */ new Date()) {
  const h = d.getHours() + d.getMinutes() / 60;
  if (h < 9.5) return "idle";
  if (h < 11) return "open";
  if (h < 14) return "warn1";
  if (h < 19) return "warn2";
  if (h < 22) return "warn3";
  return "locked";
}
__name(dailyTruthPhase, "dailyTruthPhase");
__name2(dailyTruthPhase, "dailyTruthPhase");
const listeners = /* @__PURE__ */ new Set();
function notify() {
  listeners.forEach((fn) => fn());
}
__name(notify, "notify");
__name2(notify, "notify");
function subscribeRegistry(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}
__name(subscribeRegistry, "subscribeRegistry");
__name2(subscribeRegistry, "subscribeRegistry");
function buildRoomsForPG(pg, hub, overlay, today) {
  const phase = dailyTruthPhase();
  const rows = [];
  ["single", "double", "triple"].forEach((type) => {
    const baseBeds = bedsFor(pg, type);
    if (baseBeds <= 0) return;
    const id = `${pg.id}::${type}`;
    const baseRent = pg.prices[type] || 0;
    const ov = overlay.rooms[id] || {};
    const h = hash(id);
    const defaultStatus = h % 7 === 0 ? "vacant" : h % 11 === 0 ? "vacating" : "occupied";
    const verifiedToday = ov.verifiedOn === today;
    const lockedUnsellable = !verifiedToday && phase === "locked";
    rows.push({
      id,
      pgId: pg.id,
      pgName: pg.name,
      hub,
      area: pg.area,
      type,
      beds: ov.beds ?? baseBeds,
      rent: ov.rent ?? baseRent,
      status: ov.status ?? defaultStatus,
      vacatingDate: ov.vacatingDate,
      notes: ov.notes,
      floorPrice: ov.floorPrice,
      verifiedToday,
      lockedUnsellable,
      updatedAt: ov.updatedAt ?? (/* @__PURE__ */ new Date(0)).toISOString()
    });
  });
  (overlay.added[pg.id] ?? []).forEach((r) => {
    const ov = overlay.rooms[r.id] || {};
    const verifiedToday = ov.verifiedOn === today;
    const lockedUnsellable = !verifiedToday && phase === "locked";
    rows.push({
      id: r.id,
      pgId: pg.id,
      pgName: pg.name,
      hub,
      area: pg.area,
      type: r.type,
      beds: ov.beds ?? r.beds,
      rent: ov.rent ?? r.rent,
      status: ov.status ?? r.status,
      vacatingDate: ov.vacatingDate,
      notes: ov.notes,
      floorPrice: ov.floorPrice,
      verifiedToday,
      lockedUnsellable,
      ownerAdded: true,
      updatedAt: ov.updatedAt ?? r.createdAt
    });
  });
  return rows;
}
__name(buildRoomsForPG, "buildRoomsForPG");
__name2(buildRoomsForPG, "buildRoomsForPG");
function getRegistry() {
  const overlay = loadOverlay();
  const today = todayKey();
  const map = /* @__PURE__ */ new Map();
  const ingest = /* @__PURE__ */ __name2((pg, hub) => {
    const name = pg.owner?.name || pg.manager?.name || "Unassigned";
    const phone = pg.owner?.phone || pg.manager?.phone || "";
    const key = normalizeKey(name, phone);
    const id = ownerIdFor(key);
    if (!map.has(key)) {
      map.set(key, {
        id,
        name,
        phone: phone || void 0,
        properties: [],
        totalRooms: 0,
        totalBeds: 0,
        vacantBeds: 0
      });
    }
    const owner = map.get(key);
    const rooms = buildRoomsForPG(pg, hub, overlay, today);
    const prop = {
      pgId: pg.id,
      pgName: pg.name,
      hub,
      area: pg.area,
      managerPhone: pg.manager?.phone || void 0,
      rooms
    };
    owner.properties.push(prop);
    owner.totalRooms += rooms.length;
    owner.totalBeds += rooms.reduce((s, r) => s + r.beds, 0);
    owner.vacantBeds += rooms.filter((r) => r.status === "vacant" || r.status === "vacating" || r.status === "held").reduce((s, r) => s + r.beds, 0);
  }, "ingest");
  PGS.forEach((pg) => ingest(pg, "pg"));
  PGS$1.forEach((pg) => ingest(pg, "sh"));
  return Array.from(map.values()).sort(
    (a, b) => a.name.localeCompare(b.name, "en")
  );
}
__name(getRegistry, "getRegistry");
__name2(getRegistry, "getRegistry");
function lookupOwnerByPgId(pgId) {
  return getRegistry().find((o) => o.properties.some((p) => p.pgId === pgId)) ?? null;
}
__name(lookupOwnerByPgId, "lookupOwnerByPgId");
__name2(lookupOwnerByPgId, "lookupOwnerByPgId");
function lookupOwnerByRoomId(roomId) {
  const pgId = roomId.split("::")[0];
  return lookupOwnerByPgId(pgId);
}
__name(lookupOwnerByRoomId, "lookupOwnerByRoomId");
__name2(lookupOwnerByRoomId, "lookupOwnerByRoomId");
export {
  addedRoomCountFor as a,
  addRooms as b,
  closeDeal as c,
  dailyTruthPhase as d,
  getRegistry as g,
  holdForGharpayy as h,
  lookupOwnerByRoomId as l,
  maxAddedRoomsPerPG as m,
  patchRoom as p,
  removeAddedRoom as r,
  subscribeRegistry as s,
  verifyRoomToday as v
};
